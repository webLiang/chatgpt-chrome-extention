# 用于 Codex 的 ChatGPT Chrome 本地扩展

[English](README.md) · **简体中文** · [下载](https://github.com/webLiang/chatgpt-chrome-extention/releases/latest)

## 为什么有这个工程

本项目提供可本地加载的 ChatGPT Chrome 扩展、中英文安装说明和后续更新所需的版本基线。Chrome 商店访问受限时，可下载本地安装包作为另一条安装路径。

扩展保留原版公钥，通过 Codex 桌面应用已有的 Chrome 原生通道连接，支持实时标签枚举和授权网页读取，无需另装独立 MCP 服务或自建桥接。模型接入与浏览器连接分别配置，Codex 的正常账户认证仍然适用。

## 下载

仓库中的 `extention/` 当前为 **`1.26.1020.11845`**，于 2026-10-27 同步自 [Chrome 商店](https://chromewebstore.google.com/detail/chatgpt/hehggadaopoacecdllhhajmbjkdcmajg) 2026-10-22 的更新，保留原公钥供本地加载。2026-10-27 已完成重载和实时读取检查，见[验证记录](docs/VERIFICATION.md)。

- **已发布 ZIP（上一版本）：`1.26.1005.11759`** — [下载扩展 ZIP](https://github.com/webLiang/chatgpt-chrome-extention/releases/download/v1.26.1005.11759/chatgpt-chrome-extention-v1.26.1005.11759.zip)
- [SHA-256 校验和](https://github.com/webLiang/chatgpt-chrome-extention/releases/download/v1.26.1005.11759/SHA256SUMS.txt) · [版本说明](https://github.com/webLiang/chatgpt-chrome-extention/releases/tag/v1.26.1005.11759)

ZIP 内是可以直接加载的 **`extention/`** 目录。请解压到长期保留的位置；`extention` 是本项目实际使用的拼写。GitHub 自动生成的源码压缩包还包含说明文档，安装扩展时优先下载上面单独提供的扩展 ZIP。

## 快速使用

1. **在 Codex 启用 Chrome。** 在当前 Codex 桌面端的电脑操控设置中打开 **Google Chrome**，完成客户端要求的浏览器扩展设置。
2. **本地加载扩展。** 解压 ZIP，打开 `chrome://extensions`，开启「开发者模式」，点击「加载已解压的扩展程序」，选择 **`extention/`**。核对名称 **ChatGPT** 和 ID **`hehggadaopoacecdllhhajmbjkdcmajg`**。
3. **让 Codex 验证。** 使用[验证提示词](docs/CODEX_PROMPTS.md)，通过现有 Chrome 扩展工具列出实时标签页，并读取公共页面的标题和正文。按客户端需要刷新连接或新建会话。

本地副本与对应商店扩展使用同一个 ID，会替代该实例。若 Chrome 提示冲突，只移除这个同 ID 扩展后再加载；替换可能重置其设置。使用期间请保留解压目录。

原版 `manifest.key` 用于保持原生宿主预期的扩展身份。它是公钥，保留它不代表删除了全部校验；桌面端正常登录、功能权限和浏览器授权仍然适用。详细步骤见[安装说明](docs/INSTALL.zh-CN.md)。

## 连接验证

**2026-10-27**，用户确认已手动重载，Chrome 扩展详情显示 **`1.26.1020.11845`**。重载后，Codex 的 **Chrome / extension** 工具成功枚举实时标签，并读取已打开的公开测试页面标题与正文。新版版本由用户确认，实时标签和公共页读取由工具完成，详见[验证记录](docs/VERIFICATION.md)。

此前 **2026-10-20** 对 `1.26.1005.11759` 的检查已确认 Chrome 中的本地加载路径、ID，并完成标签枚举和公开测试页面读取；历史结果继续保留在记录中。

测试环境为 **macOS + Google Chrome + 当前 Codex 桌面端**。其他系统、客户端版本及模型路由配置需要在各自环境验证。

## 文档

- [安装与连接验证](docs/INSTALL.zh-CN.md) · [English installation guide](docs/INSTALL.md)
- [可复制的 Codex 安装与验证提示词](docs/CODEX_PROMPTS.md)
- [更新、重新加载与迁移](docs/UPDATING.md)
- [维护交接与代码定位](docs/MAINTAINER.zh-CN.md) · [当前版本基线](maintenance/baseline-1.26.1020.11845.json)
- [改动说明](docs/CHANGES.md) · [打包流程与发布范围](docs/RELEASE.md)

本项目为非官方项目，包含第三方扩展代码和资源；公开仓库与 Release 不授予第三方文件许可证，详见上面的发布范围说明。
