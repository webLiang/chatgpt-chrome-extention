# ChatGPT Chrome extension for Codex

**English** · [简体中文](README.zh-CN.md) · [Download](https://github.com/webLiang/chatgpt-chrome-extention/releases/latest)

## Why this project exists

This project grew out of the maintainer's macOS setup, where Codex used a third-party model route and Chrome control needed a working extension connection. Configuring model access and connecting the browser are separate parts of that setup. Restricted access to the Chrome Web Store can also make obtaining an extension difficult, so a downloadable local package provides another installation path.

On this machine, loading the local extension with its original public key and enabling Chrome in Codex produced a working connection through Codex's existing native Chrome channel. Codex could list live tabs and read a public webpage. This repository packages that working copy, bilingual instructions, and a maintenance baseline so users can reproduce the local installation and future maintainers can compare updates. No separate MCP server or custom bridge is needed for this route.

The verified result is a working local Chrome connection in that environment. A third-party model route is not established as the cause of the earlier connection problem, and this package does not repair general network restrictions or replace Codex account authentication.

## Download

- **Extension version: `1.26.1005.11759`** — [download the extension ZIP](https://github.com/webLiang/chatgpt-chrome-extention/releases/download/v1.26.1005.11759/chatgpt-chrome-extention-v1.26.1005.11759.zip)
- [SHA-256 checksums](https://github.com/webLiang/chatgpt-chrome-extention/releases/download/v1.26.1005.11759/SHA256SUMS.txt) · [Release notes](https://github.com/webLiang/chatgpt-chrome-extention/releases/tag/v1.26.1005.11759)

The ZIP contains the loadable **`extention/`** directory. Extract it into a permanent location. The spelling `extention` is intentional here because it matches the project directory. Repository source archives also contain documentation; the named extension ZIP is the direct installation package.

## Quick start

1. **Enable Chrome in Codex.** In the current Codex desktop client's computer-control settings, enable **Google Chrome** and complete the app's browser-extension setup.
2. **Load the local extension.** Extract the ZIP, open `chrome://extensions`, enable **Developer mode**, choose **Load unpacked**, and select **`extention/`**. Confirm the name **ChatGPT** and ID **`hehggadaopoacecdllhhajmbjkdcmajg`**.
3. **Verify with Codex.** Use the [verification prompt](docs/CODEX_PROMPTS.md) to list live Chrome tabs and read the title and body of a public page through the existing Chrome extension tools. Refresh the connection or start a new conversation if the desktop app requires it.

The local copy shares an ID with the corresponding store extension and replaces that instance. If Chrome reports a conflict, remove only that same-ID extension before loading the local directory; replacement may reset its settings. Keep the extracted directory in place while using it.

The original `manifest.key` preserves the extension identity expected by the native host. It is a public key, and retaining it does not mean all checks were removed. Normal desktop sign-in, feature access, and browser authorization still apply. See the [installation guide](docs/INSTALL.md) for details.

## Verified on the maintainer's machine

On **2026-10-20**, Chrome confirmed the enabled unpacked extension's version, ID, and source directory. Codex's existing Chrome extension channel listed live tabs and read the Quetta homepage title and body. See the [verification record](docs/VERIFICATION.md).

The tested environment is **macOS + Google Chrome + the current Codex desktop app**. Other systems, client versions, and model-routing configurations require their own verification.

## Documentation

- [Installation and connection verification](docs/INSTALL.md) · [中文安装说明](docs/INSTALL.zh-CN.md)
- [Copyable Codex setup and verification prompts](docs/CODEX_PROMPTS.md)
- [Updating, reloading, and relocation](docs/UPDATING.md)
- [Maintainer handoff and code map](docs/MAINTAINER.md) · [Version baseline](maintenance/baseline-1.26.1005.11759.json)
- [Changes](docs/CHANGES.md) · [Release packaging and scope](docs/RELEASE.md)

This is an unofficial project containing third-party extension code and resources. Publication does not grant a license for those third-party files; see the release scope above.
