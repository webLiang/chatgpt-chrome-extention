# 用于 Codex 的 ChatGPT Chrome 本地扩展

[English](README.md) · **简体中文** · [下载](https://github.com/webLiang/chatgpt-chrome-extention/releases/latest)

## 为什么有这个工程

这个工程来自维护者的本机使用场景：macOS 上的 Codex 使用第三方模型路由，同时需要连接 Chrome 扩展来操控浏览器。模型接入和浏览器连接是两项独立配置。如果所在网络限制了 Chrome 商店访问，获取扩展也可能遇到困难，因此本项目提供可下载、本地加载的安装包。

在这台机器上，保留扩展原版公钥、在 Chrome 本地加载扩展并启用 Codex 的 Chrome 功能后，现有原生通道已能列出实时标签页并读取公共网页。本项目将这个可用副本、中英文说明和版本维护基线放在一起，方便其他用户复现安装，也方便后续版本比较和维护。这条路线不需要另装独立 MCP 服务或自建桥接。

已验证解决的是这台机器的本地 Chrome 连接问题。目前没有证据认定第三方模型路由就是此前连接问题的原因；本包也不能修复所有网络限制或替代 Codex 的账户认证。

## 下载

- **扩展版本：`1.26.1005.11759`** — [下载扩展 ZIP](https://github.com/webLiang/chatgpt-chrome-extention/releases/download/v1.26.1005.11759/chatgpt-chrome-extention-v1.26.1005.11759.zip)
- [SHA-256 校验和](https://github.com/webLiang/chatgpt-chrome-extention/releases/download/v1.26.1005.11759/SHA256SUMS.txt) · [版本说明](https://github.com/webLiang/chatgpt-chrome-extention/releases/tag/v1.26.1005.11759)

ZIP 内是可以直接加载的 **`extention/`** 目录。请解压到长期保留的位置；`extention` 是本项目实际使用的拼写。GitHub 自动生成的源码压缩包还包含说明文档，安装扩展时优先下载上面单独提供的扩展 ZIP。

## 快速使用

1. **在 Codex 启用 Chrome。** 在当前 Codex 桌面端的电脑操控设置中打开 **Google Chrome**，完成客户端要求的浏览器扩展设置。
2. **本地加载扩展。** 解压 ZIP，打开 `chrome://extensions`，开启「开发者模式」，点击「加载已解压的扩展程序」，选择 **`extention/`**。核对名称 **ChatGPT** 和 ID **`hehggadaopoacecdllhhajmbjkdcmajg`**。
3. **让 Codex 验证。** 使用[验证提示词](docs/CODEX_PROMPTS.md)，通过现有 Chrome 扩展工具列出实时标签页，并读取公共页面的标题和正文。按客户端需要刷新连接或新建会话。

本地副本与对应商店扩展使用同一个 ID，会替代该实例。若 Chrome 提示冲突，只移除这个同 ID 扩展后再加载；替换可能重置其设置。使用期间请保留解压目录。

原版 `manifest.key` 用于保持原生宿主预期的扩展身份。它是公钥，保留它不代表删除了全部校验；桌面端正常登录、功能权限和浏览器授权仍然适用。详细步骤见[安装说明](docs/INSTALL.zh-CN.md)。

## 本机验证

**2026-10-20**，Chrome 管理页确认本地未打包扩展的版本、ID、加载目录及启用状态。Codex 的现有 Chrome 扩展通道成功列出实时标签，并读取 Quetta 官网的标题和正文，详见[验证记录](docs/VERIFICATION.md)。

测试环境为 **macOS + Google Chrome + 当前 Codex 桌面端**。其他系统、客户端版本及模型路由配置需要在各自环境验证。

## 文档

- [安装与连接验证](docs/INSTALL.zh-CN.md) · [English installation guide](docs/INSTALL.md)
- [可复制的 Codex 安装与验证提示词](docs/CODEX_PROMPTS.md)
- [更新、重新加载与迁移](docs/UPDATING.md)
- [维护交接与代码定位](docs/MAINTAINER.zh-CN.md) · [版本基线](maintenance/baseline-1.26.1005.11759.json)
- [改动说明](docs/CHANGES.md) · [打包流程与发布范围](docs/RELEASE.md)

本项目为非官方项目，包含第三方扩展代码和资源；公开仓库与 Release 不授予第三方文件许可证，详见上面的发布范围说明。
