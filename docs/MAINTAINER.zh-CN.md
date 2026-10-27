# 给 Codex 的版本维护交接

[English](MAINTAINER.md) · [更新步骤](UPDATING.md) · [当前版本基线](../maintenance/baseline-1.26.1020.11845.json) · [历史版本基线](../maintenance/baseline-1.26.1005.11759.json)

本文件供下次接手的 AI 和维护者使用。目标是让 Chrome 本地加载的 `extention/` 继续通过 Codex 桌面端现有通道连接。当前 `1.26.1020.11845` 于 2026-10-27 同步并完成连接检查：用户确认已手动重载，Chrome 详情显示新版版本；随后 Chrome `extension` 工具成功枚举实时标签，并读取已打开的公开测试页面标题与正文。新版版本由用户确认，实时读取由工具完成。2026-10-20 的 `1.26.1005.11759` 历史实测继续保留，见[验证记录](VERIFICATION.md)。

## 先纠正历史描述

此前对话将这条路线称为“去除校验”。目前能证实的是：用户恢复了原版 `manifest.key`，Chrome 因而保留预期扩展 ID，并能连接已允许该 ID 的原生宿主。**这是身份匹配通过检查，不是已经删除检查。**

2026-10-20 又从旧实验备份中反向恢复了当时的输入 `background.js`，其 SHA-256 与历史构建记录完全一致。将它与本地 `1.26.1005.11759` 文件用 Babel 解析，去除位置、注释和格式信息后，完整 AST 一致。该旧版背景脚本相对这个历史输入没有结构差异，字节差异属于格式或源码表示变化。这项比较仅适用于旧版，不适用于新版 `1.26.1020.11845` 的背景脚本。

这份历史输入没有完整原厂包、CRX 或商店签名证据，原始 manifest 也未留存。因此，这项比较不能证明更早的输入未经修改，不能据此声称整包已与原厂逐文件验证，更不能凭连接成功虚构“去认证补丁”。

## 2026-10-27 商店版本同步

`1.26.1020.11845` 来自所链接 Chrome Web Store 条目对应的 Google 扩展更新服务。已验证下载 CRX 的签名，其扩展签名公钥与保留的原 `manifest.key` 一致，导出 ID 为 `hehggadaopoacecdllhhajmbjkdcmajg`。构建 SHA 为 `d7fb3e608fc517af57123329367a16fccc79f9b6`。来源核验不能代替与当前桌面运行时的实时兼容性验证。

商店 manifest 未包含 `key`。唯一的本地 manifest 改动是补回现有公钥以保持解压加载时的身份；精确 diff 见 [local-identity-1.26.1020.11845.patch](../maintenance/local-identity-1.26.1020.11845.patch)。其他发行文件（包括全部业务 JavaScript）与签名包逐字节一致，没有新增去认证补丁。

商店专用的 `_metadata/verified_contents.json` 不复制到解压加载目录 `extention/`。原文件与原始 CRX、解压原件一并保存在 Git 忽略的 `upstream/2026-10-27-v1.26.1020.11845/` 下，不修改或重新生成它来伪称本地改动后的 manifest 通过商店验证。当前基线记录来源证据及本地文件哈希；旧基线保留供回滚和历史比较。

## 已确认需要保留什么

- 加载目录是 `extention/`，不是项目根目录。目录搬迁后需在 Chrome 重新指定位置。
- 保留 `extention/manifest.json` 的原版公钥 `key`。当前 ID 是 `hehggadaopoacecdllhhajmbjkdcmajg`；公钥不是 API key。公钥 SHA-256、版本、构建信息与所有发行文件哈希都在基线 JSON 中。
- 当前背景入口调用 `MC()`，通过 `chrome.runtime.connectNative` 连接桌面管理的 `com.openai.codexextension`。`Cw()` 属于 `1.26.1005.11759` 的历史代码地图。
- 目前没有能确认属于本直连方案的“删除账户认证”补丁，基线的 `confirmed_authentication_removal_patches` 因此为空。当前仍有会话认证、功能开关和消息来源检查。
- 旧独立桥接实验的替换启动入口、独立宿主和新增状态页属于另一路线，已移出项目。不要把它们当作当前补丁迁回新版本。

## 1.26.1020.11845 的代码定位

以下行号对应未经格式化的商店 `background.js`。后续版本应使用稳定字符串和调用关系重新定位，压缩变量名仅适用于本版。

- `manifest.json`：本地补回原版 `key`；保留 `nativeMessaging`、`background.service_worker` 和预期扩展 ID。原生宿主注册及 `allowed_origins` 仍由桌面端管理。
- `background.js` 第 52 行：启动路径为 `NC.main → MC()`。`MC` 经 `vr("prod") → PC(e)` 后直接构造 `new oS(t)`；`CC`、`ln` 将 production 映射到 `com.openai.codexextension`，`PC` 只对 Edge 增加 internal 宿主回退。
- 第 38 行：`oS.connect()` 调用 `chrome.runtime.connectNative(this.application)`。这条原生启动路径不等待 `/api/auth/session` 或独立内核 gate。
- 第 5、52 行：`En`、`Tn`、`Tc` 仍通过 Statsig `checkGate` 判断功能开关。`OC = "chrome-standalone-js-kernel"` 经 `Tn` 观察，只启用独立 `Pm` 内核路线，不阻塞原生通道；`pC()` 处理 `codex-app-webmcp`，浏览器管理与后台弹窗 gate 也仍在。
- 第 5 行：`_n()` 请求 `/api/auth/session` 并检查 `accessToken`；API 请求仍设置 Bearer 和 `ChatGPT-Account-ID`。第 32 行保留 `chatgpt-work-browser-elicitation`。新版背景脚本不再包含旧 `browser-extension-enable-chatgpt-use` 字符串，这是厂商版本差异。
- 第 32 行：`Pm()` 检查 sender ID、内部 `js-kernel-host.html` 的 origin/protocol/host/path 和匹配的 `scopeId`，`De()` 要求内核 scope 存在且未中止。第 52 行：`zr()`、`xh()` 检查消息身份、生命周期、URL/origin 与允许的网页来源；`xA()` 的状态连接仍要求 `zr()` 成功。

静态检查未提供需要额外本地兼容补丁的证据。除非实际故障证明具体改动必要，否则保留签名包的业务代码；确需改动时，记录精确 diff 和验证结果。

## 1.26.1005.11759 的历史代码定位

以下地图仅保留用于旧基线和回滚，行号与压缩变量名不适用于当前新版。新版本必须依据调用关系和稳定字符串重新定位，不能直接替换同名短变量。

- `manifest.json`：`key`、`permissions` 中的 `nativeMessaging`、`background.service_worker`、`version`。宿主注册中的 `allowed_origins` 是扩展目录以外的配置，由桌面端管理。
- `background.js` 约 22675 行：`Pw → Cw()` 是启动入口。约 22459 行的 `Cw` 使用 `Er("prod")`、`Aw` 和 `new av(t)`；`av.connect` 约 20454 行调用 `chrome.runtime.connectNative(this.application)`。搜索稳定字符串 `com.openai.codexextension` 与 `connectNative`。
- 约 22452 行的 `chrome-standalone-js-kernel` 由 `Rr` 观察，决定是否启动 `d() → Pd(...)`。旧版原生宿主连接不等待这个内核开关；不要把它当成桌面宿主认证。
- 约 6775 行的 `Ar` 请求 `/api/auth/session` 并检查 `accessToken`；`fs.request` 约 6847 行设置 Bearer 与 `ChatGPT-Account-ID`。这些代码仍然存在。
- `wt`、`Rr`、`_s` 约 6975–7009 行仍读取 Statsig gates；`cw` 约 22092 行仍处理 `codex-app-webmcp`。`Qn` 中还有 `browser-extension-enable-chatgpt-use` 和 `chatgpt-work-browser-elicitation`。
- `Pd` 约 9087 行检查内核消息发送方、内部页面及 scope；`Qt` 约 20617 行检查消息来源与页面 origin。这些约束不是本次已删除的代码。
- `chunks/js-kernel-host-Biytnb6r.js` 中存在 `disabled-for-local-testing` 字符串，但初始化时会根据 elicitation 条件删除对应字段，其他页面访问检查也仍存在。该文件与历史实验中的同名资源字节一致。单个字符串不能证明“我们已关闭全部安全校验”。

## 下次拿到新版本怎么处理

1. 先读取本文件、项目 `AGENTS.md`、基线 JSON 和验证记录。保存当前可用副本，将新版本放到独立的临时目录，记录来源与文件哈希。
2. 将“旧原版 → 旧本地版”的本地补丁与“旧版本 → 新版本”的厂商更新分开比较。当前没有完整旧原版可供三方比较时，明确记录这一缺口；不要把整个旧 bundle 覆盖到新版本。
3. 核对新 manifest 的版本、公钥导出 ID、权限、内容脚本和后台入口。检查新原版是否已经支持保持原身份的本地加载；若能连接，就不添加所谓去校验补丁。
4. 沿 `connectNative` 和宿主名重新跟踪启动流程。原生连接、云会话、侧栏、JS kernel、功能开关分别判断。若失败，先保留实际错误，确定发生在 Chrome 加载、扩展、宿主还是桌面端；不能因错误出现在浏览器里，就假定修改扩展即可解决。
5. 如确实需要兼容性改动，为每处改动记录触发条件、原逻辑、新逻辑、影响范围，以及精确的前后 SHA-256 和 unified diff。补丁应匹配明确版本与唯一上下文；匹配不到时停止自动套用，重新分析。格式化与功能补丁分开保存。
6. 用户在 Chrome 加载或重新加载新副本后，从扩展详情核对加载路径和 ID。通过 Codex 当前 Chrome `extension` 通道列出实时标签页，读取已打开公共页的标题与正文；需要测试页时可打开 `https://example.com`。结果写入验证记录，不以设置开关代替实测。
7. 验证成功后新增该版本的基线，保留旧基线；更新本文代码定位、`CHANGES.md` 和验证记录。失败时保留错误与可回滚副本，不把未验证版本标记为成功。

## 每次实际补丁应留下的记录

```text
目标版本与原包来源：
复现步骤及实际错误：
失败所属层与证据：
修改文件、函数与稳定定位字符串：
修改前条件与行为：
修改后条件与行为：
为何需要修改，影响哪些通道：
输入/输出 SHA-256 与 unified diff 路径：
实际 Chrome 验证结果与环境：
回滚方式及未验证范围：
```

当前没有已证实的去认证 diff 可直接重放。本版仅恢复身份的 manifest 补丁已在上文单独记录；未来需要兼容补丁时，应保留实际证据并填写以上记录。不得由去认证记录为空推导出“所有校验都已删除”。

## 交给下一次 Codex 的提示词

```text
请维护当前 ChatGPT Chrome 本地扩展，使新版本继续使用 Codex 桌面端已有的 Chrome 原生通道。
先读 AGENTS.md、docs/MAINTAINER.zh-CN.md、maintenance/ 中的基线和 docs/VERIFICATION.md。
保留当前可用副本，在独立目录分析我提供的新版本。先核对来源、版本、公钥 ID、宿主与原生启动流程，再决定是否需要修改。
当前本地版本为 1.26.1020.11845，于 2026-10-27 同步并完成连接检查。用户确认手动重载及 Chrome 详情中的新版版本；随后 Chrome extension 工具成功枚举实时标签，并读取已打开的公开测试页面标题与正文。区分用户确认的版本信息和工具完成的实时读取证据；2026-10-20 的 1.26.1005.11759 验证仅作为历史记录。
注意：旧对话的“去校验”不是已证实的去认证补丁；只有旧版 1.26.1005.11759 的 background 与可恢复历史输入做过 AST 一致性比较。1.26.1020.11845 的唯一本地 manifest 补丁是恢复原公钥，其余全部业务 JavaScript 与已核验签名的商店包逐字节一致。保留精确补丁和基线证据，不要虚构替换规则，也不要迁回旧独立桥接入口。
若遇到校验或连接错误，记录原始错误并定位到确切层和代码；区分身份匹配、账户认证、功能开关和消息来源限制。报告实际原因。
仅对证据支持的兼容性问题做必要改动，保存精确 diff、前后哈希、影响范围及回滚方法。新版本定位变化时重新分析，不盲目全局替换压缩变量或强制返回 true。
重载后必须通过真实 Chrome extension 通道列出标签并读取公共页。完成后更新版本基线、维护说明、CHANGES 和验证记录。不要以配置存在代替连接成功。
```
