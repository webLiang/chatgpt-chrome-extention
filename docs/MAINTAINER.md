# Version maintenance handoff for Codex

[简体中文](MAINTAINER.zh-CN.md) · [Update procedure](UPDATING.md) · [Machine-readable baseline](../maintenance/baseline-1.26.1005.11759.json)

This document is for the next AI or maintainer. Keep the locally loaded `extention/` working through the Codex desktop app's existing Chrome channel. The currently verified version is `1.26.1005.11759`; see the [verification record](VERIFICATION.md).

## Correcting the historical description

Earlier conversation called this route “removing validation.” What is established is that the user restored the original `manifest.key`, preserving the expected extension ID and matching the ID permitted by the existing native host. **The identity check is satisfied; this does not establish that the check was deleted.**

On 2026-10-20, the historical input `background.js` was reconstructed by reversing the startup injection in an archived experiment. Its SHA-256 exactly matched the historical build record. Babel parsing followed by removal of locations, comments, and formatting metadata produced identical complete ASTs for the recovered input and current file. Their byte differences concern formatting or source representation; there is no structural difference relative to that historical input.

The historical input lacks a complete vendor package, CRX, or store-signature evidence, and its original manifest was not retained. This comparison cannot establish that the earlier input was unmodified, authenticate the entire package against the vendor, or justify inventing an authentication-removal patch from a successful connection.

## What is confirmed and should be retained

- Chrome loads `extention/`, not the project root. Reload from the actual new location after moving it.
- Preserve the original public `key` in `extention/manifest.json`. The current ID is `hehggadaopoacecdllhhajmbjkdcmajg`. This is not an API key. The baseline JSON records the public-key hash, version, build information, and hashes of all distribution files.
- The current background entry still calls `Cw()`, reaching the desktop-managed `com.openai.codexextension` through `chrome.runtime.connectNative`.
- No authentication-removal patch has been established for this native route. The baseline's `confirmed_authentication_removal_patches` is therefore empty. Session authentication, feature gates, and message-origin checks remain present.
- The earlier independent experiment replaced the startup entry and used its own host and status pages. It has been archived outside this project. Do not migrate those changes as if they were active patches for this route.

## Code locations in the current version

Line numbers and minified identifiers below apply only to the baseline version. Relocate by call flow and stable strings in a new release rather than replacing short names mechanically.

- `manifest.json`: inspect `key`, the `nativeMessaging` permission, `background.service_worker`, and `version`. The native host's `allowed_origins` is outside the extension directory and managed by the desktop app.
- `background.js`, around line 22675: startup is `Pw → Cw()`. Around line 22459, `Cw` uses `Er("prod")`, `Aw`, and `new av(t)`; `av.connect`, around line 20454, calls `chrome.runtime.connectNative(this.application)`. Search for `com.openai.codexextension` and `connectNative`.
- Around line 22452, `chrome-standalone-js-kernel` is observed through `Rr`, controlling `d() → Pd(...)`. The current native connection does not wait for this kernel gate; it is not desktop-host authentication.
- `Ar`, around line 6775, requests `/api/auth/session` and checks `accessToken`. `fs.request`, around line 6847, sets Bearer authentication and `ChatGPT-Account-ID`. These paths remain present.
- `wt`, `Rr`, and `_s`, around lines 6975–7009, still consult Statsig gates. `cw`, around line 22092, handles `codex-app-webmcp`. `Qn` also checks `browser-extension-enable-chatgpt-use` and `chatgpt-work-browser-elicitation`.
- `Pd`, around line 9087, checks the kernel-message sender, internal page, and scope. `Qt`, around line 20617, checks message source and page origin. These checks were not established as removed.
- `chunks/js-kernel-host-Biytnb6r.js` contains `disabled-for-local-testing`, but initialization conditionally removes the field when elicitation is enabled, and other page-access checks remain. This file is byte-identical to its counterpart in the historical experiment. That single string does not establish that this project disabled all security checks.

## Handling the next release

1. Read this document, `AGENTS.md`, the baseline JSON, and verification record. Preserve the working copy, place the new release in a separate temporary directory, and record its provenance and hashes.
2. Separate local changes between the old vendor and local packages from vendor changes between releases. If a complete old vendor package is unavailable for a three-way comparison, record that gap. Do not overwrite the new release with the entire old bundle.
3. Check the new manifest's version, derived public-key ID, permissions, content scripts, and background entry. Test whether the new release already supports local loading with its original identity. If it connects, add no speculative validation-removal patch.
4. Trace startup again from `connectNative` and the host name. Distinguish the native connection, cloud session, side panel, JS kernel, and feature gates. Preserve the actual failure and identify whether it occurs in Chrome loading, the extension, host, or desktop runtime. An error appearing in the browser does not establish that changing the extension can fix it.
5. If a compatibility change is necessary, record its trigger, original logic, new logic, affected behavior, exact input/output SHA-256, and unified diff. Require a specific version and unique context for automated patching; stop automatic application and re-analyze when they do not match. Keep formatting changes separate from functional patches.
6. After the user loads or reloads the new copy, check Chrome's actual source path and ID. Use Codex's current Chrome `extension` channel to list live tabs and read the title and body of an already-open public page, opening `https://example.com` if needed. Record observed results rather than substituting an enabled setting for a live check.
7. After success, add a baseline for the new version while retaining old baselines. Update this code map, `CHANGES.md`, and verification record. On failure, preserve the error and rollback copy, and do not mark the new version verified.

## Record required for each real patch

```text
Target version and original package provenance:
Reproduction steps and actual error:
Failing layer and evidence:
Changed files, functions, and stable search strings:
Original condition and behavior:
New condition and behavior:
Reason for the change and affected channels:
Input/output SHA-256 and unified diff path:
Actual Chrome verification results and environment:
Rollback procedure and unverified scope:
```

There is currently no established authentication-removal diff to replay. Create a patch file and complete this record only when a real local patch exists. An empty record does not imply that all checks were removed.

## Prompt for the next Codex session

```text
Maintain this local ChatGPT Chrome extension so the new version keeps using the Codex desktop app's existing native Chrome channel.
Read AGENTS.md, docs/MAINTAINER.md, maintenance/ baselines, and docs/VERIFICATION.md first.
Preserve the working copy and inspect the supplied new release in a separate directory. Check provenance, version, public-key ID, host, and native startup before deciding whether a modification is needed.
Earlier references to “removing validation” are not an established patch. The current background AST matches the recoverable historical input, and authentication checks remain. Do not invent replacement rules or restore the archived independent bridge entry.
If a check or connection fails, preserve the original error and locate its exact layer and code. Distinguish identity matching, account authentication, feature gates, and message-origin restrictions. Report the observed cause.
Make only necessary compatibility changes supported by evidence. Save exact diffs, input/output hashes, affected behavior, and rollback steps. Re-analyze new code locations rather than globally replacing minified identifiers or forcing checks to return true.
After reloading, list tabs and read a public page through the actual Chrome extension channel. Update version baselines, maintainer instructions, CHANGES, and verification records. Configuration presence alone does not establish a successful connection.
```
