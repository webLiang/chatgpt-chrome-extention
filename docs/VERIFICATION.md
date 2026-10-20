# 实测记录 / Verification record

[中文首页](../README.zh-CN.md) · [English](../README.md) · [安装 / Installation](INSTALL.zh-CN.md)

2026-10-20，在当前用户的 macOS、Google Chrome 与 Codex 桌面环境中，完成了重新加载后的连接检查。

On 2026-10-20, the reloaded extension was checked in the current user's macOS, Google Chrome, and Codex desktop environment.

## 实际观察 / Observations

1. Chrome 扩展详情页显示名称 **ChatGPT**、版本 `1.26.1005.11759`、ID `hehggadaopoacecdllhhajmbjkdcmajg`，扩展已启用。来源明确显示为**未打包的扩展程序**，加载路径是当前项目根目录下的 **`extention/`**。

   Chrome's extension details showed **ChatGPT**, version `1.26.1005.11759`, ID `hehggadaopoacecdllhhajmbjkdcmajg`, enabled. Its source was **unpacked**, loaded from **`extention/`** in this project.

2. 本地 manifest 的公钥导出的 ID 与 Chrome 显示一致；现有 `com.openai.codexextension` 宿主的 `allowed_origins` 包含对应来源。此次没有修改宿主注册或认证配置。

   The ID derived from the local manifest public key matched Chrome. The existing `com.openai.codexextension` host allowed that origin. This check did not change host registration or authentication settings.

3. 通过当前会话已有的 `cua_repl` 浏览器工具发现在线 **Chrome / extension** 通道，并成功取得实时标签页清单。

   The session's existing `cua_repl` browser tools discovered an online **Chrome / extension** channel and returned live tabs.

4. 使用同一 Chrome 通道读取已打开的 [Quetta 官网](https://www.quetta.net/)，获得实时标题 **Quetta - Video Downloader, Ad Blocker & Extensions Browser**、主标题和正文。此次没有对网页进行输入、提交或修改。

   The same Chrome channel read the already-open [Quetta homepage](https://www.quetta.net/), returning its live title, **Quetta - Video Downloader, Ad Blocker & Extensions Browser**, heading, and body. No input, submission, or page modification was performed.

以上结果确认：当前本地加载副本可通过桌面应用现有 Chrome 通道完成标签枚举与只读网页访问，未使用独立 MCP 服务。检查扩展来源时临时打开的管理页已关闭。

These results confirm that the currently loaded local copy supports tab listing and read-only page access through the desktop application's existing Chrome channel, without a separate MCP server. The temporary extension-management tab was closed after inspecting its source.

## 范围 / Scope

这是单台机器当前环境中的实测，不覆盖其他系统、浏览器、桌面版本、账户方式或全部浏览器操作。它不证明“所有校验已去除”，也不表明账户、功能权限或网页授权已被绕过。其他用户应按[安装说明](INSTALL.zh-CN.md)在自己的环境复测。

This is a check of one machine's current environment. It does not cover other operating systems, browsers, desktop versions, authentication methods, or every browser operation. It does not establish that all checks were removed or that account, feature, or page authorization was bypassed. Other users should repeat the [installation checks](INSTALL.md) in their own environment.
