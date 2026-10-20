# ChatGPT Chrome 扩展：本地加载与桌面端直连

[English](README.en.md) · [完整安装说明](docs/INSTALL.zh-CN.md) · [给 Codex 的提示词](docs/CODEX_PROMPTS.md)

本项目保存可由 Chrome 开发者模式加载的 **ChatGPT** 扩展，使用当前 Codex 桌面客户端已有的 Chrome 连接。浏览器加载目录为 **`extention/`**；这是项目中的实际拼写。

这条路线使用桌面端提供的浏览器工具，无需另外添加 `local-chrome` MCP 服务或运行自建桥接程序。保留 `manifest.key` 是为了维持扩展身份及与原生宿主的匹配，**不代表去除全部校验，也不绕过账户或 API 认证**。桌面端的登录、功能权限和浏览器授权仍然适用。

## 三步使用

1. **启用桌面端 Chrome 功能。** 在当前桌面客户端设置中打开「电脑操控」里的 **Google Chrome**，确认显示浏览器扩展已安装。这个状态是准备条件；最终连接应通过第 3 步验证。
2. **在 Chrome 加载本地扩展。** 打开 `chrome://extensions`，开启「开发者模式」，点击「加载已解压的扩展程序」，选择本项目的 **`extention/`**，不是项目根目录。核对扩展名称 **ChatGPT** 和 ID **`hehggadaopoacecdllhhajmbjkdcmajg`**。
3. **让 Codex 验证现有 Chrome 通道。** 按需重新加载扩展、重载桌面端浏览器连接或新建会话。用[验证提示词](docs/CODEX_PROMPTS.md)要求 Codex 通过现有 `cua_repl` Chrome 工具列出实时标签页，再只读查看一个指定的普通网页。能取得实际标签与页面内容，才确认整条连接可用。

本地副本与商店版使用同一扩展 ID，不能作为两个独立实例并存。本地加载用于替代对应扩展；若已有同 ID 的商店版导致冲突，可先移除旧扩展，再加载 `extention/`。移除或替换扩展可能影响其配置，不保证保留原配置。

不要以“扩展已启用”“设置显示已安装”或“模型能回答问题”代替实时浏览器验证。初次验收只需读取，不要求导航、点击、输入或提交页面。

## 本机验证记录

2026-10-20 已在本机验证：Chrome 管理页确认加载来源是本项目 `extention/`，名称 **ChatGPT**、版本 `1.26.1005.11759`、ID `hehggadaopoacecdllhhajmbjkdcmajg`。现有 Chrome 扩展通道成功列出实时标签页，并读取 Quetta 官网的标题和正文。详见[实测记录](docs/VERIFICATION.md)。

目前的使用说明面向 **macOS + Google Chrome + 当前桌面客户端**。其他操作系统、浏览器及桌面端版本没有在这里确认兼容性。

## 文档

- [中文安装与连接验证](docs/INSTALL.zh-CN.md) · [English installation guide](docs/INSTALL.md)
- [可复制的 Codex 安装与验证提示词](docs/CODEX_PROMPTS.md)
- [更新、重新加载与迁移](docs/UPDATING.md)
- [给 Codex 的版本维护交接与代码定位](docs/MAINTAINER.zh-CN.md) · [机器可读版本基线](maintenance/baseline-1.26.1005.11759.json)
- [改动与连接方式说明](docs/CHANGES.md)
- [发布范围与准备事项](docs/RELEASE.md)

目录迁移或扩展更新后，核对实际加载路径、扩展 ID 和实时连接结果。仓库位于 [GitHub](https://github.com/webLiang/chatgpt-chrome-extention)。第三方文件的分发与授权范围见[发布说明](docs/RELEASE.md)；仓库同步不授予第三方代码许可证。
