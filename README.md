# ChatGPT Chrome extension for Codex

**English** · [简体中文](README.zh-CN.md) · [Download](https://github.com/webLiang/chatgpt-chrome-extention/releases/latest)

## Why this project exists

This project provides a locally loadable ChatGPT Chrome extension, bilingual installation instructions, and version baselines for future updates. A downloadable local package offers another installation path when access to the Chrome Web Store is restricted.

The extension retains its original public key and connects through the Codex desktop app's existing native Chrome channel. It supports live tab enumeration and reading authorized webpages without a separate MCP server or custom bridge. Model access and browser connection are configured separately; normal Codex account authentication still applies.

## Download

The repository's `extention/` is **`1.26.1020.11845`**, synchronized on 2026-10-27 from the [Chrome Web Store](https://chromewebstore.google.com/detail/chatgpt/hehggadaopoacecdllhhajmbjkdcmajg) update dated 2026-10-22. Its original public key is retained for local loading. Reload and live read checks passed on 2026-10-27; see the [verification record](docs/VERIFICATION.md).

- **Latest published ZIP (previous version): `1.26.1005.11759`** — [download the extension ZIP](https://github.com/webLiang/chatgpt-chrome-extention/releases/download/v1.26.1005.11759/chatgpt-chrome-extention-v1.26.1005.11759.zip)
- [SHA-256 checksums](https://github.com/webLiang/chatgpt-chrome-extention/releases/download/v1.26.1005.11759/SHA256SUMS.txt) · [Release notes](https://github.com/webLiang/chatgpt-chrome-extention/releases/tag/v1.26.1005.11759)

The ZIP contains the loadable **`extention/`** directory. Extract it into a permanent location. The spelling `extention` is intentional here because it matches the project directory. Repository source archives also contain documentation; the named extension ZIP is the direct installation package.

## Quick start

1. **Enable Chrome in Codex.** In the current Codex desktop client's computer-control settings, enable **Google Chrome** and complete the app's browser-extension setup.
2. **Load the local extension.** Extract the ZIP, open `chrome://extensions`, enable **Developer mode**, choose **Load unpacked**, and select **`extention/`**. Confirm the name **ChatGPT** and ID **`hehggadaopoacecdllhhajmbjkdcmajg`**.
3. **Verify with Codex.** Use the [verification prompt](docs/CODEX_PROMPTS.md) to list live Chrome tabs and read the title and body of a public page through the existing Chrome extension tools. Refresh the connection or start a new conversation if the desktop app requires it.

The local copy shares an ID with the corresponding store extension and replaces that instance. If Chrome reports a conflict, remove only that same-ID extension before loading the local directory; replacement may reset its settings. Keep the extracted directory in place while using it.

The original `manifest.key` preserves the extension identity expected by the native host. It is a public key, and retaining it does not mean all checks were removed. Normal desktop sign-in, feature access, and browser authorization still apply. See the [installation guide](docs/INSTALL.md) for details.

## Connection verification

On **2026-10-27**, the user confirmed manual reload and version **`1.26.1020.11845`** in Chrome's extension details. After reload, Codex's **Chrome / extension** tools successfully listed live tabs and read an already-open public test page's title and body. The version confirmation came from the user; the tab and page reads came from the tools. See the [verification record](docs/VERIFICATION.md).

The earlier **2026-10-20** check of `1.26.1005.11759` confirmed its unpacked source path and ID in Chrome, listed live tabs, and read a public test page. That historical result remains in the record.

The tested environment is **macOS + Google Chrome + the current Codex desktop app**. Other systems, client versions, and model-routing configurations require their own verification.

## Documentation

- [Installation and connection verification](docs/INSTALL.md) · [中文安装说明](docs/INSTALL.zh-CN.md)
- [Copyable Codex setup and verification prompts](docs/CODEX_PROMPTS.md)
- [Updating, reloading, and relocation](docs/UPDATING.md)
- [Maintainer handoff and code map](docs/MAINTAINER.md) · [Current version baseline](maintenance/baseline-1.26.1020.11845.json)
- [Changes](docs/CHANGES.md) · [Release packaging and scope](docs/RELEASE.md)

This is an unofficial project containing third-party extension code and resources. Publication does not grant a license for those third-party files; see the release scope above.
