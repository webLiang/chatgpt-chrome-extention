# 实测记录 / Verification record

[中文首页](../README.zh-CN.md) · [English](../README.md) · [安装 / Installation](INSTALL.zh-CN.md)

公开记录保留验证方法、版本及结果；测试站点、网页内容、个人路径和浏览器会话信息已省略。

This public record retains verification methods, versions, and results. Test-site identities, page contents, personal paths, and browser-session details are omitted.

## 2026-10-27：1.26.1020.11845 重载后验证 / Post-reload verification

`extention/` 已同步为 `1.26.1020.11845`。官方 CRX3 签名、扩展身份、39 个发行文件的来源差异、19 个 JavaScript 文件语法及本地资源引用检查通过，见[版本基线](../maintenance/baseline-1.26.1020.11845.json)。

The extension is `1.26.1020.11845`. CRX signatures, extension identity, package differences, JavaScript syntax, and resource references passed static checks.

1. 用户手动重新加载扩展，并确认 Chrome 详情显示版本 **`1.26.1020.11845`**。更新前，工具已确认未打包扩展的 ID 为 `hehggadaopoacecdllhhajmbjkdcmajg`，加载目录为项目的 `extention/`；重载后的版本由用户确认，工具未再次独立读取详情页。

   The user manually reloaded the extension and confirmed the new version in Chrome details. Before the update, tools had confirmed the expected ID and the project's unpacked `extention/` source. The post-reload version was user-confirmed rather than independently reread by the tools.

2. 重载后，通过 Codex 现有 **Chrome / extension** 通道成功取得实时标签页列表。

   After reload, Codex's existing **Chrome / extension** channel successfully listed live tabs.

3. 使用同一通道读取已打开的公开测试页面，成功获得实际标题、主标题及正文。检查保持只读，没有输入、提交或修改测试页。

   The same channel read an existing public test page's actual title, heading, and body. The check was read-only, with no input, submission, or page modification.

## 2026-10-20：1.26.1005.11759 历史验证 / Previous-version verification

Chrome 详情确认名称 **ChatGPT**、版本 `1.26.1005.11759`、预期扩展 ID，以及项目 `extention/` 的未打包加载来源。manifest 公钥导出的 ID 与 Chrome 显示一致，原生宿主 `com.openai.codexextension` 允许对应来源。

Chrome details confirmed **ChatGPT**, version `1.26.1005.11759`, the expected extension ID, and the project's unpacked `extention/` source. The manifest public key derived the same ID, and the existing native host allowed that origin.

现有 **Chrome / extension** 通道成功列出实时标签页，并只读获取公开测试页面的标题和正文。

The existing **Chrome / extension** channel listed live tabs and read a public test page's title and body without modifying the page.

## 验证范围 / Scope

已验证环境为 **macOS + Google Chrome + Codex 桌面应用**，验证内容限于上述版本的标签枚举及公开网页读取。不覆盖其他系统、客户端版本、登录方式或全部浏览器操作，也不表明账户、功能权限或网页授权被绕过。其他环境应按[安装说明](INSTALL.zh-CN.md)复测。

The tested configuration is **macOS + Google Chrome + the Codex desktop app**. These results cover tab listing and public-page reading for the versions above. They do not establish support for other systems, client versions, sign-in methods, or all browser operations, and do not establish an authentication or authorization bypass. Repeat the [installation checks](INSTALL.md) in other environments.
