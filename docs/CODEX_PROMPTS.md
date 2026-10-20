# Codex 连接与验证提示 / Codex connection and verification prompts

在项目根目录打开 Codex。当前目录结构使用 `extention/`，请保留这一实际拼写。连接使用桌面应用已有的 Chrome 能力和原生通道。

Open Codex at the project root. This project uses the directory name `extention/`; retain that exact spelling. The connection uses the desktop application's existing Chrome capability and native channel.

## 连接提示 / Connection prompt

中文：

```text
请检查当前项目，并帮助我通过 Codex 桌面应用已有的 Chrome 能力连接 extention/ 扩展。先阅读适用的 AGENTS.md、README 和相关说明。

检查 extention/manifest.json、其中保留的原始 key，以及由该公钥计算出的扩展 ID。预期 ID 是 hehggadaopoacecdllhhajmbjkdcmajg。key 是确定扩展 ID 的公钥材料，不是产品激活码或登录凭据；不要替换、重新生成或把它描述为授权破解。检查实际使用的 Native Messaging host，以及 com.openai.codexextension 是否由桌面应用管理、其 allowed_origins 是否包含该 ID。只读取连接所需的注册信息，不读取账户数据或输出凭据，不修改桌面应用管理的原生组件和授权检查。

引导我在 Codex 设置中的电脑操控功能里启用 Chrome；设置名称随版本变化，先核对当前界面。然后由我在 Chrome 的 chrome://extensions 开启开发者模式，通过“加载已解压的扩展程序”选择本项目的 extention/ 绝对路径。保留原 key；同 ID 的开发副本可能替换原扩展，不能保证原扩展配置和状态会保留。需要核查加载来源时，从 Chrome 扩展管理页确认实际加载路径，不直接读取浏览器账户或配置数据库。

使用现有连接入口，不生成名为 local-chrome 的独立 MCP，不执行旧的桥接安装流程，不额外安装语言运行时。依照系统权限机制处理必要授权，不要每一步都额外要求确认。需要我手工加载、重载 Chrome 扩展，或重启/刷新 Codex 会话时，给出明确步骤，由我操作。

完成后使用当前会话已有的浏览器工具，明确选择 Chrome 的扩展连接及正确配置文件。先列出标签页，优先选择我已打开的公开测试页面，读取其标题与正文以验证实际通信；若没有合适页面，再打开 https://example.com。不要使用 iab、内置网页视图或其他浏览器来替代 Chrome 验证。不要因为配置存在、host 已注册或扩展开关已启用就声称连接成功。若当前工具不可用或连接失败，如实报告具体阻碍和错误，不伪造结果。验证保持只读，不登录、不提交表单、不读取私人页面。
```

English:

```text
Inspect this project and help me connect its extention/ extension through the Codex desktop application's existing Chrome capability. Read applicable AGENTS.md files, the README, and relevant instructions first.

Check extention/manifest.json, its preserved original key, and the extension ID derived from that public key. The expected ID is hehggadaopoacecdllhhajmbjkdcmajg. The key is public-key material that determines the extension ID, not a product activation code or login credential. Do not replace or regenerate it, or describe it as bypassing authorization. Inspect the native messaging host actually in use, whether com.openai.codexextension is managed by the desktop application, and whether its allowed_origins includes this ID. Read only registration information needed for the connection. Do not read account data, expose credentials, or modify desktop-managed native components or authorization checks.

Guide me to enable Chrome under computer control in Codex settings, checking the current interface rather than assuming a version-specific label. I will then open chrome://extensions in Chrome, enable Developer mode, choose Load unpacked, and select this project's extention/ absolute path. Keep the original key. A development copy with the same ID may replace the original extension; preservation of its existing settings and state is not guaranteed. If the loaded source needs checking, verify its actual path through Chrome's extension management page rather than reading browser account or profile databases.

Use the existing connection entry point. Do not create a separate local-chrome MCP, run the old bridge installation workflow, or install an additional language runtime. Use the system's normal permission mechanism without asking for extra confirmation at every step. Give precise instructions when I need to load/reload the Chrome extension or restart/refresh the Codex session; I will perform those actions.

Verify communication with browser tools already available in the current session. Explicitly select Chrome's extension connection and the correct profile. List its tabs and read the title and body of a public test page I already have open; if none is suitable, open https://example.com. Do not substitute iab, an embedded web view, or another browser for Chrome. Configuration presence, host registration, and an enabled extension switch do not establish a successful connection. If tools are unavailable or the connection fails, report the specific blocker and error accurately. Keep verification read-only: do not sign in, submit forms, or read private pages.
```

## 手工加载后的简短验证 / Short verification after manual loading

中文：

```text
我已启用 Codex 的 Chrome 电脑操控能力，并在 Chrome 手工加载本项目的 extention/。请用当前会话已有的浏览器工具，明确选中 Chrome 的扩展连接和正确配置文件，列出标签页，再读取公开测试页面的标题或公开内容以验证连接。不要用 iab 或其他浏览器代替，不要读取私人页面。必要时从 Chrome 扩展管理页核对加载路径和 ID；不要读取账户数据。报告实际结果，失败时保留具体错误，不根据配置存在认定成功。
```

English:

```text
I have enabled Chrome computer control in Codex and manually loaded this project's extention/ in Chrome. Use browser tools already available in this session, explicitly select Chrome's extension connection and the correct profile, list its tabs, and read the title or public content of a public test page to verify communication. Do not substitute iab or another browser, or read private pages. If necessary, verify the loaded path and ID through Chrome's extension management page without reading account data. Report observed results and preserve specific errors; configuration presence alone does not prove success.
```

## 本次验证记录 / Verification record

版本更新请使用[中文维护提示词](MAINTAINER.zh-CN.md#交给下一次-codex-的提示词)或[英文维护提示词](MAINTAINER.md#prompt-for-the-next-codex-session)，并让 Codex 读取 `maintenance/` 中的版本基线。

For version upgrades, use the [English maintenance prompt](MAINTAINER.md#prompt-for-the-next-codex-session) or [中文提示词](MAINTAINER.zh-CN.md#交给下一次-codex-的提示词), and have Codex read the version baselines in `maintenance/`.

2026-10-20 已通过实际加载路径、扩展 ID、实时标签列表及公共网页读取验证，详见[实测记录](VERIFICATION.md)。

Verified on 2026-10-20 using the loaded source path, extension ID, live tabs, and public-page reading. See the [verification record](VERIFICATION.md).
