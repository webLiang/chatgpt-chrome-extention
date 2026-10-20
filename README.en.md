# ChatGPT Chrome extension: local loading and native desktop connection

[简体中文](README.md) · [Full installation guide](docs/INSTALL.md) · [Codex prompts](docs/CODEX_PROMPTS.md)

This project contains the **ChatGPT** extension for loading through Chrome Developer mode and connecting through the current Codex desktop client's existing Chrome integration. Load **`extention/`** in Chrome; that is the actual directory spelling in this project.

This route uses the browser tools supplied by the desktop client. It does not require adding a separate `local-chrome` MCP server or running a custom bridge. Retaining `manifest.key` preserves the extension identity and its match with the native host. **It does not remove all checks or bypass account or API authentication.** Desktop sign-in, feature access, and browser authorization still apply.

## Use in three steps

1. **Enable Chrome in the desktop client.** In the current client's settings, enable **Google Chrome** under computer control and confirm that the browser extension is shown as installed. This is a prerequisite; verify the actual connection in step 3.
2. **Load the local extension in Chrome.** Open `chrome://extensions`, enable **Developer mode**, choose **Load unpacked**, and select this project's **`extention/`**, not the project root. Confirm the name **ChatGPT** and extension ID **`hehggadaopoacecdllhhajmbjkdcmajg`**.
3. **Have Codex verify its existing Chrome channel.** Reload the extension, reload the desktop browser connection, or start a new session if needed. Use the [verification prompt](docs/CODEX_PROMPTS.md) to have Codex list live Chrome tabs through the existing `cua_repl` tools, then read a specified ordinary webpage without changing it. Actual tab and page results confirm the complete connection.

The local copy and store version use the same extension ID and cannot coexist as two separate instances. Local loading replaces the corresponding extension. If the installed store version conflicts with local loading, remove that old extension before loading `extention/`. Removing or replacing an extension may affect its configuration; preservation of existing settings is not guaranteed.

An enabled extension, an installed indicator in settings, or a model answering a question does not substitute for live browser verification. Initial verification needs only reading, without navigation, clicking, typing, or page submission.

## Local verification record

Verified locally on 2026-10-20: Chrome's management page confirmed this project's `extention/` as the unpacked source, with name **ChatGPT**, version `1.26.1005.11759`, and ID `hehggadaopoacecdllhhajmbjkdcmajg`. The existing Chrome extension channel listed live tabs and read the Quetta homepage title and body. See the [verification record](docs/VERIFICATION.md).

These instructions currently cover **macOS + Google Chrome + the current desktop client**. Compatibility with other operating systems, browsers, or desktop versions has not been established here.

## Documentation

- [English installation and connection verification](docs/INSTALL.md) · [中文安装说明](docs/INSTALL.zh-CN.md)
- [Copyable Codex installation and verification prompts](docs/CODEX_PROMPTS.md)
- [Updating, reloading, and relocation](docs/UPDATING.md)
- [Codex maintainer handoff and code map](docs/MAINTAINER.md) · [Machine-readable version baseline](maintenance/baseline-1.26.1005.11759.json)
- [Changes and connection details](docs/CHANGES.md)
- [Release scope and preparation](docs/RELEASE.md)

After moving the directory or updating the extension, check its loaded path, extension ID, and live connection. The repository is on [GitHub](https://github.com/webLiang/chatgpt-chrome-extention). See the [release guide](docs/RELEASE.md) for the distribution and licensing scope of third-party files; synchronizing the repository does not grant a license for third-party code.
