# 更新、迁移与卸载 / Updating, relocation, and removal

版本升级前先读[维护交接](MAINTAINER.zh-CN.md)及[当前版本基线](../maintenance/baseline-1.26.1020.11845.json)，其中记录真实改动证据、代码定位和给下一次 Codex 的提示词。旧版 [1.26.1005.11759 基线](../maintenance/baseline-1.26.1005.11759.json)仍保留供比较和回滚。

Before upgrading, read the [maintainer handoff](MAINTAINER.md) and [current version baseline](../maintenance/baseline-1.26.1020.11845.json) for change evidence, code locations, and the next-session prompt. The [1.26.1005.11759 baseline](../maintenance/baseline-1.26.1005.11759.json) remains available for comparison and rollback.

本项目通过 Codex 桌面应用已有的 Chrome 扩展原生通道连接。这里的目录名称是 `extention/`。更新扩展文件后，必须在 Chrome 实际重新加载并验证通信；仅修改磁盘内容不会更新正在运行的扩展。

This project connects through the Codex desktop application's existing native channel for the Chrome extension. Its directory is named `extention/`. After updating files, reload the extension in Chrome and verify communication; changing files on disk does not update the running extension.

## 保持目录与扩展身份 / Keep the location and extension identity stable

尽量固定项目根目录及其 `extention/` 子目录。迁移后，从新位置重新加载 `extention/`，并在 Chrome 扩展管理页核对实际加载路径。

Keep the project root and its `extention/` subdirectory at a stable location where possible. After relocation, load `extention/` from the new location and confirm that path in Chrome's extension management page.

保留 `extention/manifest.json` 中的原始 `key`。该值是确定扩展 ID 的公钥材料，预期 ID 为 `hehggadaopoacecdllhhajmbjkdcmajg`；它不是产品激活码，不取消账户、宿主或桌面应用的其他检查。更换或丢失它可能改变扩展 ID，导致宿主的 `allowed_origins` 不再匹配。不要通过放宽宿主限制来掩盖身份不匹配。

Preserve the original `key` in `extention/manifest.json`. This is public-key material that determines the extension ID; the expected ID is `hehggadaopoacecdllhhajmbjkdcmajg`. It is not a product activation code and does not remove account, host, or desktop-application checks. Replacing or losing it may change the ID and break the host's `allowed_origins` match. Do not weaken host restrictions to conceal an identity mismatch.

## 更新代码 / Update the code

1. 更新前保留当前可用副本，并记录 Chrome 中实际加载的路径、扩展 ID 和版本。保持现有用户设置；不要为了更新而清空浏览器配置或扩展存储。/ Before updating, retain a working copy and record the loaded path, extension ID, and version shown in Chrome. Preserve user settings; do not clear the browser profile or extension storage merely to update.
2. 拷贝新代码时核对来源与兼容性，并保留原始 `key`。版本号变化不能保证新扩展与现有 Native Messaging host、桌面应用接口或权限兼容。/ Check the source and compatibility when copying new code, and preserve the original key. A version-number change does not guarantee compatibility with the current native messaging host, desktop-application interfaces, or permissions.
3. 在 Chrome 的 `chrome://extensions` 中对该开发扩展点击重新加载。若目录已迁移，从新项目根目录的 `extention/` 加载，并确认管理页显示的新路径。移除再加载或同 ID 替换可能影响扩展状态，不能保证配置保留。/ Reload the development extension at chrome://extensions. If the project moved, load extention/ from the new project root and confirm the new path in the management page. Removal/reinstallation or same-ID replacement may affect extension state; preservation of settings is not guaranteed.
4. 如桌面应用需要刷新连接或新会话，由用户执行对应操作。使用已有 Chrome 扩展连接列出标签页，再读取公开测试页面以验证；避免使用 `iab` 或其他浏览器作为替代证据。/ If the desktop application requires a refreshed connection or a new session, have the user perform that action. Verify through the existing Chrome extension connection by listing tabs and reading a public test page; do not substitute iab or another browser as evidence.

## 更新后连接失败 / If the connection fails after an update

记录实际错误，依次检查 Chrome 电脑操控开关、正确浏览器与配置文件、扩展是否启用、加载路径、扩展 ID、实际使用的宿主名称及其 `allowed_origins`，并核对扩展请求的权限。通过 Chrome 管理页检查加载状态；不直接读取账户数据。宿主由桌面应用管理时，遵循该应用支持的修复流程，不随意覆盖或删除其文件。

Record the actual error, then check Chrome computer-control enablement, the selected browser and profile, extension enablement, loaded path, extension ID, the native host actually in use and its allowed_origins, and the extension's requested permissions. Inspect loading status through Chrome's management page without directly reading account data. When the desktop application manages the host, use its supported repair process rather than overwriting or deleting its files.

扩展被发现、配置存在或宿主文件存在，都不足以证明读写通信已经成功。保留现有用户设置，只更改已确定与故障相关的项目；不要声称移除了所有认证或解锁了产品权限。

Discovery of an extension, configuration presence, or a host file on disk does not establish successful communication. Preserve existing user settings and change only items demonstrated to be relevant to the failure. Do not claim that all authentication has been removed or product permissions have been unlocked.

## 卸载 / Remove the development extension

通过 Chrome 扩展管理页确认 ID 和加载来源后，移除本项目的开发扩展。该操作可能影响同 ID 的原扩展及其数据；如需恢复商店版本，按 Chrome 与桌面应用支持的流程操作。不要删除原始 `com.openai.codexextension` host、其注册信息或桌面应用组件；这些可能仍被其他正常功能使用。

Confirm the ID and loaded source in Chrome's extension management page, then remove this project's development extension there. This may affect the original extension with the same ID and its data. To restore a store version, follow the supported Chrome and desktop-application workflow. Do not delete the original com.openai.codexextension host, its registration, or desktop-application components; other working features may depend on them.

## 本次验证记录 / Verification record

2026-10-27，用户确认手动重载及 Chrome 详情中的 `1.26.1020.11845`；随后 Chrome `extension` 工具成功枚举实时标签，并读取已打开的公开测试页面标题与正文，完成更新后的连接检查。新版版本由用户确认，实时读取由工具完成。2026-10-20 的 `1.26.1005.11759` 历史验证仍保留，各次范围见[实测记录](VERIFICATION.md)。

On 2026-10-27, the user confirmed manual reload and version `1.26.1020.11845` in Chrome's details. The Chrome `extension` tools then successfully listed live tabs and read a public test page's title and body, completing the post-update connection check. The version was user-confirmed; live reads were performed by the tools. The historical 2026-10-20 check of `1.26.1005.11759` remains in the dated [verification record](VERIFICATION.md).
