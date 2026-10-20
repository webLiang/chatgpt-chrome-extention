# 发布范围 / Release scope

[中文首页](../README.md) · [English](../README.en.md) · [改动 / Changes](CHANGES.md)

当前项目以 `extention/` 为 Chrome 本地加载入口，配套中英文安装文档、Codex 提示词及版本维护基线。同步仓库为 [webLiang/chatgpt-chrome-extention](https://github.com/webLiang/chatgpt-chrome-extention)，同步内容包括本地扩展与配套文档。Git 提交与分支推送不等于创建 GitHub Release，本次不创建 Release 或版本标签。

The project uses `extention/` as its unpacked Chrome entry point, with bilingual installation instructions, Codex prompts, and a maintenance baseline. The synchronization target is [webLiang/chatgpt-chrome-extention](https://github.com/webLiang/chatgpt-chrome-extention), including the local extension and its documentation. Git commits and branch pushes do not create a GitHub Release; this synchronization creates no Release or version tag.

`package.json` 的 `UNLICENSED` 表示本仓库没有通过该元数据授予许可证，不会把第三方扩展代码重新许可为 ISC。项目不依赖 npm 构建或运行。

`UNLICENSED` in `package.json` grants no license through that metadata and does not relicense third-party extension code under ISC. No npm build or runtime is required.

## 对外提供哪些内容 / What distribution contains

- `README.md`、`README.en.md`、`AGENTS.md` 与 `docs/`：安装、验证、更新及维护说明。
- `extention/`：包含第三方厂商代码和资源的扩展发布包。当前未确认这些内容的再分发授权，也未选择项目许可证。不能仅因恢复原公钥或能本地加载，就将原厂代码整体重新许可或宣称官方项目。
- 根 `.gitignore` 排除旧实验、备份、缓存、日志和凭据；**它没有排除 `extention/`**。若执行 Git 添加或制作压缩包，这些第三方文件可能被包含，需要在实际公开前明确处理其分发范围和权利。

- The READMEs, `AGENTS.md`, and `docs/` describe installation and maintenance.
- `extention/` contains third-party vendor code and assets. Redistribution permission has not been established, and no project license has been chosen. A restored public key or successful local loading does not relicense vendor code or make this an official project.
- The root `.gitignore` excludes old experiments, backups, caches, logs, and credentials. **It does not exclude `extention/`**. Git staging or an archive may therefore include those third-party files; establish their distribution scope and rights before publication.

如尚无分发授权，可先公开自己有权发布的文档和改动说明，让使用者自行取得有权使用的匹配扩展文件；这种文档版本本身不包含可直接加载的扩展，不能称为完整即装版。

Without redistribution permission, a documentation-only release can contain material you are entitled to publish while users obtain their own matching extension files. Such a release does not contain a ready-to-load extension and must not be described as a complete installation package.

## 发布前核对 / Before publication

确认文件来源、许可证与必要声明；排除账户文件、令牌、浏览器配置和私人页面内容；按[验证记录](VERIFICATION.md)在声明支持的环境复测。产品名称只描述兼容对象，不代表官方认可。历史独立实验已移到项目外备份，不应混入这个安装包。

Confirm provenance, license scope, and required notices. Exclude account files, tokens, browser profiles, and private page contents. Repeat the [verification](VERIFICATION.md) on environments you claim to support. Product names indicate compatibility rather than endorsement. The earlier independent experiment is backed up outside this project and should not be mixed into this installation package.
