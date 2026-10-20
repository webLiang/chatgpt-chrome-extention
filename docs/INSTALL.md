# Load the Chrome extension locally and connect Codex

[Project README](../README.en.md) · [简体中文](INSTALL.zh-CN.md)

This guide uses the **Chrome native connection already provided by the Codex desktop app**. Chrome loads this project's `extention/` directory, and the extension connects through the Native Messaging host managed by the desktop app. The directory is intentionally spelled `extention`; select that exact directory.

No additional language runtime, dependencies, or separate MCP server are required. The extension uses the desktop client's existing channel. Normal Codex sign-in and feature access still apply.

## 1. Confirm the current version and prerequisites

You need a working local **Codex desktop app**, Google Chrome, and Chrome/computer-control capabilities supported by the installed desktop-app version. In that version's browser or computer-control settings, confirm that Chrome is enabled and complete any app-managed extension or host setup. Setting names and locations can change between versions; this guide does not assume a fixed menu path.

This guide records only the current local **macOS + Google Chrome** route. It does not establish support for other Codex versions, sign-in methods, operating systems, managed devices, or Chromium browsers. The manifest's declared Chrome 116 minimum is not a complete compatibility test.

Verification record for this setup:

On 2026-10-20, Chrome confirmed this project's `extention/` as the loaded unpacked extension. Its existing Chrome extension channel successfully listed live tabs and read a public webpage. See the [verification record](VERIFICATION.md) for scope and evidence.

The native connection also requires `com.openai.codexextension`, installed and managed by the desktop app. Loading an extension does not establish that its host is installed or connected. If the installed desktop version does not support Chrome, address client support first; adding a custom MCP entry is not a substitute.

## 2. Check the extension and host identity

Keep the entire project in a stable local directory that will remain available. This route uses:

```text
project-directory/
└── extention/
    ├── manifest.json
    ├── background.js
    └── other extension resources
```

Static information for the current target extension:

- Manifest name: `ChatGPT`
- Extension version: `1.26.1005.11759`
- ID derived from the manifest public key: `hehggadaopoacecdllhhajmbjkdcmajg`
- Native host: `com.openai.codexextension`

These values are identity checks, not evidence of a working connection. After loading, Chrome should show that ID. The native host's `allowed_origins` must also allow `chrome-extension://hehggadaopoacecdllhhajmbjkdcmajg/`. If inspecting the host registration, read it without changing it. Do not edit the host allowlist, manifest public key, or Codex authentication configuration to admit a mismatched extension.

On macOS, Google Chrome's per-user host registration is commonly located at:

```text
~/Library/Application Support/Google/Chrome/NativeMessagingHosts/com.openai.codexextension.json
```

This is a troubleshooting location to inspect, not a file you must manually create or overwrite. App-managed installation locations may differ; use the installed desktop app's supported management flow and actual registration.

## 3. Handle an existing extension with the same ID

The development copy uses the same ID as the store ChatGPT extension. **The store and unpacked instances with the same ID cannot coexist as two separate extensions in one Chrome profile.**

First check `chrome://extensions` for that ID. To switch to this project's local copy, save any necessary user information, then remove that specific instance or follow Chrome's replacement prompt before loading the local directory. Do not bulk-delete extensions, browser profiles, or application files.

Removal, replacement, or reinstallation may affect extension settings and local data; this project cannot guarantee their preservation. If you prefer to retain the existing store setup, do not replace it yet. You may continue using the store version and run actual connection checks before deciding whether a local copy is necessary.

## 4. Load `extention/` in Chrome

1. Open `chrome://extensions` in Google Chrome.
2. Enable **Developer mode**.
3. Select **Load unpacked**.
4. Choose **`extention/`** directly under this project's root. Do not select the project root or the old `local-chrome-mcp/extension/` directory.
5. Confirm that Chrome shows `ChatGPT`, ID `hehggadaopoacecdllhhajmbjkdcmajg`, and no load errors.

For example, select the following directory under your saved project:

```text
/path/to/chatgpt-chrome-extention/extention
```

Replace `/path/to` with your actual saved location. Keep that directory available after loading it. Moving it requires loading from the new location and repeating verification.

If you have already manually reloaded this extension for the current setup and the ID is correct, proceed to section 5. Do not remove, replace, or reload it again unnecessarily.

## 5. Use the existing Chrome capability in Codex

Return to the Codex desktop app and inspect the Chrome/computer-control settings supported by the installed version. Confirm that Chrome is available. If that version requests a browser selection, extension activation, or restart, follow its instructions. Do not overwrite Codex application files or replace the entire user settings file with project content.

This route uses the existing Chrome tool channel. **There is no need to add `local-chrome` to the MCP server list**, or to obtain the old bridge's `browser_status`, `browser_tabs`, and `browser_call` tools. Tool names and their presentation are determined by the installed desktop-app version.

If Chrome was first enabled after the current conversation began, that conversation may not have received the new tools. Refresh capabilities using the client's supported flow, opening a new conversation if necessary. A new conversation is a tool-availability troubleshooting step, not a replacement for extension and native-host connection checks.

## 6. Verify the actual browser connection

Keep a regular Chrome window open and manually load a public test page, such as `https://example.com`. Use **the existing Chrome tools in the current Codex desktop app** to perform these checks:

1. Read whatever browser or extension inventory the tools actually provide, checking the browser instance and extension ID `hehggadaopoacecdllhhajmbjkdcmajg`. Use only the capabilities supported by the current version. If no extension-inventory interface is available, check the ID in Chrome's extension page and record that the tool itself could not inspect it directly.
2. List the actual Chrome tabs and confirm that the public test page appears. Check the browser instance or window so that a page from another profile is not mistaken for this result.
3. Select the test tab with the same Chrome tools and read its live title, URL, and body. For `https://example.com`, read `Example Domain` from the page rather than infer the content from its URL or general knowledge.

Reading local project files, the manifest, or host JSON proves only their contents, not a working live browser. An enabled setting, green status indicator, extension popup, service-worker status, or running process cannot independently prove the complete connection. Listing real tabs and reading the public page through the Chrome tools completes this connection check.

If the tool reports an unsupported version, disallowed identity, disconnected host, or missing capability, record the actual error. Do not report configuration completion as connection success. Do not alter the public key, host allowlist, or authentication files to overcome account or version restrictions.

You can give this verification request to your local Codex:

```text
Check the connection using the current desktop app's existing Chrome tools. Do not start local-chrome-mcp.
I have loaded the extension from this project's extention/ directory. The target ID is hehggadaopoacecdllhhajmbjkdcmajg.
Inspect the browser/extension information actually available, list current tabs, select the https://example.com tab I opened, and read its live title, URL, and body.
If the current tools or version do not support this, report the limitation explicitly. Do not claim live verification by reading local files or relying on general knowledge of the website.
Do not reload the extension I have already reloaded, or change the host, key, or account authentication.
```

## 7. Troubleshooting

**Chrome shows a different ID:** confirm that you loaded this project's `extention/`, not the old bridge extension or another directory. Check that the files are complete and from the expected source. Do not edit the host allowlist to admit the different ID.

**Chrome reports an existing extension with that ID:** return to section 3 and handle only that instance. Disabling it does not install a second independent instance. Follow Chrome's replacement flow or remove that specific instance before loading, considering the risk to settings and local data first.

**Native host not found or disconnected:** first use the current Codex desktop app's Chrome setup, extension-management, or repair flow. If needed, save work and restart the desktop app and Chrome. Check that the app remains in its valid installation location and that the allowed extension ID agrees. Do not create an unknown host registration manually, run the old local bridge installer, or overwrite application binaries.

**Account, authentication, or unsupported-version error persists:** loading an unpacked extension does not remove the desktop runtime's authentication and availability requirements. Follow the current client's supported troubleshooting flow, preserve the actual error, and do not claim a working connection or edit authentication files or API keys.

**Tabs can be listed but the test page cannot be read:** check that you selected an ordinary HTTP/HTTPS tab, the correct browser instance, and an authorized scope. Results for a public page do not establish support for internal pages, extension pages, incognito windows, managed pages, or other browser restrictions. First complete the minimal public-page test in section 6.

**The server list only shows an old `local-chrome` entry:** that belongs to the earlier independent bridge and is not this guide's verification target. This route uses the desktop app's existing Chrome capability and does not require starting that server. Its status does not establish the native channel's status.

## 8. Stop using the local copy and restore the extension

Stop any active browser tasks, then remove the locally loaded `hehggadaopoacecdllhhajmbjkdcmajg` copy from Chrome's extension manager. Restore the desired extension through the current Codex desktop app's browser-management flow or the official store entry, then repeat tab listing and public-page reading checks.

Do not bulk-delete Chrome extensions, browser user data, Native Messaging hosts, or Codex settings. Removing the local copy does not require removing the app-managed native host. Reinstalling the store version also does not guarantee recovery of settings or local data belonging to an instance that was removed.

Browser tools can access pages authorized by the current user, including signed-in pages. Continue to authorize actions for each task after setup. A timeout, cancellation, or changed UI indicator does not prove that a previously sent page action was undone.
