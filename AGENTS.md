# Chrome extension desktop connection / 扩展桌面直连指引

Scope: this project and its subdirectories. / 适用于本项目及子目录。

## Start / 先读

- Read the English [README.md](README.md) or [中文首页](README.zh-CN.md), [installation](docs/INSTALL.md) / [中文安装](docs/INSTALL.zh-CN.md), and [Codex prompts](docs/CODEX_PROMPTS.md).
- Before version changes, read [维护交接](docs/MAINTAINER.zh-CN.md) / [maintainer handoff](docs/MAINTAINER.md) and `maintenance/` baselines. The `1.26.1005.11759` background AST matched a recovered historical input; no authentication-removal patch is established. The `1.26.1020.11845` store update preserves the original manifest key for local loading. Diagnose actual failures and preserve precise diffs rather than inventing a bypass history or replaying old minified names.
- Loadable directory: **`extention/`**. Keep this actual spelling. It contains the ChatGPT extension, not an independent MCP server.
- 本项目复用 Codex 桌面端已有的 Chrome 原生通道。用户在桌面设置启用 Chrome，并在 Chrome 开发者模式加载 `extention/`。
- Use the existing desktop Chrome connection. Do not add a `local-chrome` server, run an old bridge installer, or install extra language runtimes for this route.

## Identity and installation / 身份与安装

- The expected extension name is `ChatGPT`, version `1.26.1020.11845`, ID `hehggadaopoacecdllhhajmbjkdcmajg`.
- Preserve `extention/manifest.json`'s original `key`. This is public-key material determining extension identity, not an API key or evidence that authentication checks were removed.
- The desktop-managed native host is `com.openai.codexextension`. Inspect only necessary registration fields when diagnosing; use the desktop application's supported setup/repair flow for missing components.
- 不修改桌面程序、账户认证、宿主允许列表或整个用户配置文件。原宿主与登录/功能权限由桌面程序管理。
- The store version and local version share an ID. Explain that replacing/removing that instance may affect its settings. Let the user load or replace the extension in Chrome; do not remove unrelated extensions or browser data.
- Provide the actual absolute path ending in `extention/` when needed in a direct installation response to the user. Published instructions must use project-relative paths or generic placeholders. After a move, confirm the loaded path in Chrome's extension details page. Do not read browser profile databases or account files.

## Verification / 验收

- Use the current session's existing Chrome extension tools, such as `cua_repl`. Select the Chrome `extension` browser and the intended profile, not `iab` or another browser.
- List live tabs and read the title plus body of a user-approved public test page. Use a page already open when possible. This is a read-only check; do not submit, log in, or change the page.
- If path attribution matters, confirm Chrome's details page reports an unpacked extension from this project's `extention/`, with the expected ID.
- Installed indicators, enabled switches, local files, or model answers alone do not prove a live connection. Preserve actual error messages and describe unsupported tools or client versions accurately.
- [验证记录](docs/VERIFICATION.md) records dated macOS checks and their version scope; it is not a promise that every client, login method, or browser action works.

## Public records and privacy / 公开记录与隐私

- Treat repository content as intended for public release. Apply these rules whenever creating or updating README files, `docs/`, verification records, `maintenance/` baselines, release notes, or shareable artifacts. Routine sanitization within the current task does not require another confirmation.
- 实际验证仍须读取用户授权的公开页面；公开记录只写“实时标签枚举成功”“读取公开测试页面的标题和正文”等必要结论。不要写入实际测试站点名称、网址、页面标题、正文摘录或截图；也不要把被省略的站点改写为另一个未实际测试的页面。
- Omit identifying environment details: personal absolute paths, OS usernames, hostnames, browser profile names, window/tab titles and exact counts, extension-instance or session identifiers, private network addresses, account details, credentials, and personal model/proxy configurations. Do not reproduce real values in examples, rules, patches, or scan output.
- Keep dates, versions, verification methods, outcomes, and limitations accurate. Distinguish user-confirmed versions from tool-observed live reads. Sanitization must not turn a pending or failed check into a successful one, or imply an independent check that did not occur.
- Use `extention/` or a generic placeholder such as `/path/to/project/extention/` in public installation instructions. A necessary actual path may be shared directly with the user without copying it into repository files.
- Retain useful public technical evidence: extension identity and public key, official package/source URLs, signature results, file hashes, build information, permissions, and generic compatibility environments such as macOS + Chrome. These are distinct from personal environment details.
- Sanitize explanatory text and verification metadata, including older baselines when necessary. Preserve package hashes, patch evidence, and vendor code. Do not change extension permissions, public keys, generated bundles, or generic vendor strings such as `localhost` merely to eliminate a scan match.
- Check duplicate summaries across both language versions, README files, installation/update guides, maintainer prompts, change notes, and all version baselines. Removing details from `docs/VERIFICATION.md` alone is insufficient.
- Before finishing, inspect both working-tree content and staged content for identifying details. When authorized sanitization affects staged files, refresh only the relevant sanitized files and recheck the index; do not stage unrelated work. Report the scope of the check accurately.
- Preserve diagnostic meaning while redacting identifying values from public errors or reports. If raw evidence must be retained, keep it outside tracked files in an ignored local location and exclude it from release assets. A successful privacy scan does not authorize publishing, uploading backups, or rewriting Git history.

## Maintenance and release / 维护与发布

- Keep `extention/` stable and retain its key. Reload it in Chrome after updates, then repeat the live read check. See [updates](docs/UPDATING.md).
- Treat extension bundles as generated third-party code. Do not bulk-format or refactor them during installation, forge store metadata, or add unrelated changes.
- Do not print tokens, API keys, private webpage contents or account data. Perform later browser actions only within the user's task.
- Read [change notes](docs/CHANGES.md) and [release scope](docs/RELEASE.md). Retaining a public key does not establish official endorsement or redistribution rights.
- Documentation updates do not authorize publishing a repository, uploading bundles, choosing a license for third-party assets, or changing browser permissions.
