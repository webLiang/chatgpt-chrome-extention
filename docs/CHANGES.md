# 改动与连接方式 / Changes and connection path

[中文首页](../README.zh-CN.md) · [English](../README.md) · [实测 / Verification](VERIFICATION.md)

## 2026-10-27：同步商店版本 / Store version update

`extention/` 从 `1.26.1005.11759` 更新为 **`1.26.1020.11845`**，对应 Chrome 商店 2026-10-22 的版本。CRX 从 Google 官方更新服务下载；三个 CRX3 签名均验证通过，其中扩展身份公钥与既有公钥相同，导出 ID 仍为 `hehggadaopoacecdllhhajmbjkdcmajg`。

The extension was updated to **`1.26.1020.11845`** from Google's official update service. All three CRX3 proofs verified, including the extension-identity key matching the previous public key. The [new baseline](../maintenance/baseline-1.26.1020.11845.json) records provenance and original/local file hashes; the old baseline is unchanged.

唯一的本地补丁是给商店包的 `manifest.json` 补回原 `key`，见[精确 diff](../maintenance/local-identity-1.26.1020.11845.patch)。其余 38 个发行文件与新商店包逐字节相同。商店 `_metadata/verified_contents.json` 不复制到本地加载目录，原件随 CRX 保存在忽略的 `upstream/` 中，不修改或伪造。新目录含 39 个发行文件；旧版完整备份位于忽略的 `backups/2026-10-27-v1.26.1005.11759/extention/`。

The only local patch restores `manifest.key`; all other distribution files are byte-identical to the new store package. Original store verification metadata is retained in the ignored source archive and excluded from the unpacked copy. Chrome permissions, optional permissions, host permissions, and content-script declarations are unchanged. The vendor CSP adds its Sentry endpoint. Business scripts are not reformatted or patched, and no authentication-removal change is claimed.

19 个 JavaScript 文件通过语法检查，manifest、HTML 和字面量导入引用的本地资源均存在。用户手动重载并确认新版后，现有 Chrome 扩展通道成功枚举实时标签并读取公开测试页面，见[本次 Chrome 验证记录](VERIFICATION.md)。需要回滚时，恢复上述完整旧版目录到原 `extention/` 路径，再在 Chrome 重载并复测。此次未创建 GitHub Release 或上传扩展包；已有下载仍为上一版本。

Static syntax and resource checks passed. After the user confirmed the new version in Chrome, its extension channel successfully listed live tabs and read a public page; see the dated verification record for evidence and scope. Restore the complete previous distribution to the same path and reload to roll back. No new GitHub release or bundle upload was performed.

## 当前使用方案 / Current route

```text
Codex 桌面端已有的 Chrome 工具
    → 桌面端管理的 Native Messaging 宿主 com.openai.codexextension
    → Chrome 本地加载的 extention/
    → 用户授权的网页
```

The desktop client's existing Chrome tools use its managed `com.openai.codexextension` Native Messaging host to reach the unpacked `extention/` and authorized webpages. This project does not add another MCP server.

## 已确认的身份与路径变化 / Confirmed identity and path changes

- 用户恢复了 `extention/manifest.json` 中的原版 `key`；当前导出 ID 为 `hehggadaopoacecdllhhajmbjkdcmajg`。Chrome 扩展页显示的 ID、实际本地加载路径及现有宿主允许来源相互匹配。
- The user restored the original manifest key. Its derived ID matches Chrome and the origin permitted by the existing host. Chrome confirms the unpacked source is this project's `extention/`.
- 加载入口统一为 `extention/`。`key` 是扩展公钥材料，保持它可维持身份；它不是账户密钥或产品激活码。
- The loadable directory is `extention/`. The key is public identity material, not an account secret or activation code.

## 2026-10-20 文档整理 / Documentation update

- 中英文首页、安装、Codex 提示词、更新及 `AGENTS.md` 均改为桌面原生连接路线。用户只需配置桌面端 Chrome 功能并手动加载本地扩展，再验证实时页面访问。
- The bilingual overview, installation instructions, Codex prompts, update guide, and `AGENTS.md` now describe the desktop-native route: enable Chrome, load the local extension, and verify live page access.
- 旧 `local-chrome-mcp/` 独立桥接实验移出当前项目备份，避免与可直接加载的 `extention/` 混淆。运行中的扩展文件、桌面宿主及账户配置未由本次文档整理修改。
- The earlier independent bridge experiment was moved outside this project into a local backup to avoid confusing it with `extention/`. This documentation work does not change extension code, the desktop host, or account settings.
- 已完成的读取验证见[实测记录](VERIFICATION.md)。既有通道的成功不再被误写成“必须安装独立 MCP”或“所有认证已移除”。
- See the [verification record](VERIFICATION.md) for the successful read checks. The result does not imply that a separate MCP must be installed or that all authentication was removed.

## 源码历史的限制 / Limits of the source history

2026-10-20 进一步核对：从旧独立实验精确反向恢复的历史 `background.js` 匹配当时记录的 SHA-256；它与当时本地 `1.26.1005.11759` 背景脚本经 Babel 解析并去除位置、注释和格式信息后，完整 AST 一致。该旧版文件相对历史输入没有结构差异，不能把不同文件哈希当作已删除校验的证据。

Further inspection on 2026-10-20 recovered the historical background input from the archived experiment, exactly matching its recorded SHA-256. Babel parsing and removal of locations, comments, and formatting metadata produced a complete AST identical to the local `1.26.1005.11759` background script. Different file hashes therefore do not establish a removed check. This comparison applies to that previous version only.

历史输入的完整原厂包及原始 manifest 未留存，这项结果不证明更早输入未经修改。会话认证、功能开关及消息来源检查仍在。详细定位、后续升级步骤和每文件哈希见[维护交接](MAINTAINER.zh-CN.md)与[旧版本基线](../maintenance/baseline-1.26.1005.11759.json)。2026-10-20 的整理仅新增维护文档及基线，没有修改扩展代码或设置。

The complete historical vendor package and original manifest are unavailable; this does not establish that the earlier input was unmodified. Session authentication, feature gates, and message-origin checks remain. See the [maintainer handoff](MAINTAINER.md) and [previous version baseline](../maintenance/baseline-1.26.1005.11759.json) for code locations, upgrade steps, and file hashes. The 2026-10-20 documentation update added maintenance documentation and a baseline without changing extension code or settings.
