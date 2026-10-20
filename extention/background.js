var background = (function () {
  var Ua = Object.defineProperty,
    D = (e, t) => () => (
      t || (e((t = { exports: {} }).exports, t), (e = null)), t.exports
    ),
    We = (e, t) => {
      let r = {};
      for (var n in e) Ua(r, n, { get: e[n], enumerable: !0 });
      return t || Ua(r, Symbol.toStringTag, { value: "Module" }), r;
    },
    Nw = Object.freeze(["http:", "https:"]),
    Ec = (function (e) {
      return (
        (e.Default = ""),
        (e.DisabledForLocalTesting = "disabled-for-local-testing"),
        (e.GaasBrowserEnvironment = "gaas-browser-environment"),
        e
      );
    })({}),
    Uw = Ec.Default,
    Fw = "search_browser_tab_mentions",
    Ic = "browser_tab_mentions_invalidated",
    Bw = "seek_youtube_timestamp",
    $w = 8192,
    Ac = 8e4,
    jw = "chatgpt-extension-status",
    qw = "BROWSER_SETTINGS_UPDATED",
    Gw = "SHOW_CODEX_INSTALLER",
    zw = "OPEN_CODEX_SIDE_PANEL",
    Cc = "browser_side_chat_prompt_prefill",
    kc = "CHATGPT_WEBSITE_BRIDGE_PING",
    Rc = "CHATGPT_WEBSITE_PLUGINS_CHANGED",
    Fe = {
      browserTabMentionsSearch: "browserTabMentions.search",
      browserSideChatOpenInBrowser: "browserSideChat.openInBrowser",
      browserSideChatTabContextRead: "browserSideChat.tabContext.read",
      browserControlStateRead: "browserControl.state.read",
      extensionUpdateRead: "extension.update.read",
      nativeHostStatus: "nativeHost.status",
      sidePanelOpen: "sidePanel.open",
      sidePanelPromptPrefill: "sidePanel.promptPrefill",
      sidePanelStateRead: "sidePanel.state.read",
      toolbarPinRead: "toolbar.pin.read",
      websiteActionRequest: "website.action.request",
    },
    _r = {
      distribution: "chrome-web-store",
      extensionIds: ["lfkehkpjohcoelkpembgemeipeppanef"],
      outputModes: [],
      releaseChannel: "beta",
      signingIdentity: null,
      storeUrl:
        "https://chromewebstore.google.com/detail/codex/lfkehkpjohcoelkpembgemeipeppanef",
    },
    Fa = {
      distribution: "chrome-web-store",
      extensionIds: ["hehggadaopoacecdllhhajmbjkdcmajg"],
      outputModes: [],
      releaseChannel: "stable",
      signingIdentity: null,
      storeUrl:
        "https://chromewebstore.google.com/detail/chatgpt/hehggadaopoacecdllhhajmbjkdcmajg",
    },
    Ba = {
      distribution: "microsoft-edge-add-ons",
      extensionIds: ["odlomjlbamekndcpllcnffbgeohgkmjh"],
      outputModes: [],
      releaseChannel: "stable",
      signingIdentity: null,
      storeUrl:
        "https://microsoftedge.microsoft.com/addons/detail/odlomjlbamekndcpllcnffbgeohgkmjh",
    },
    vt = {
      chrome: {
        dev: [
          {
            distribution: "local-development",
            extensionIds: [],
            outputModes: ["file"],
            releaseChannel: "dev",
            signingIdentity: "development",
          },
          {
            distribution: "managed-self-hosted",
            extensionIds: [],
            outputModes: ["file"],
            releaseChannel: "dev",
            signingIdentity: "development",
          },
          _r,
        ],
        internal: [
          {
            distribution: "managed-self-hosted",
            extensionIds: [],
            outputModes: ["file", "blobstore"],
            releaseChannel: "beta",
            signingIdentity: "beta",
          },
          _r,
        ],
        prod: [
          {
            distribution: "managed-self-hosted",
            extensionIds: [],
            outputModes: ["file"],
            releaseChannel: "stable",
            signingIdentity: "stable",
          },
          Fa,
        ],
      },
      edge: {
        dev: [
          {
            distribution: "local-development",
            extensionIds: [],
            outputModes: ["file"],
            releaseChannel: "dev",
            signingIdentity: "development",
          },
          {
            distribution: "managed-self-hosted",
            extensionIds: [],
            outputModes: ["file"],
            releaseChannel: "dev",
            signingIdentity: "development",
          },
          _r,
        ],
        internal: [
          {
            distribution: "managed-self-hosted",
            extensionIds: [],
            outputModes: ["file", "blobstore"],
            releaseChannel: "beta",
            signingIdentity: "beta",
          },
          Ba,
          _r,
        ],
        prod: [
          {
            distribution: "managed-self-hosted",
            extensionIds: [],
            outputModes: ["file"],
            releaseChannel: "stable",
            signingIdentity: "stable",
          },
          Ba,
          Fa,
        ],
      },
    },
    vr = {
      dev: "com.openai.codexextension.dev",
      internal: "com.openai.codexextension.internal",
      production: "com.openai.codexextension",
    },
    wr = {
      dev: { distributions: vt.chrome.dev },
      internal: { distributions: vt.chrome.internal },
      prod: { distributions: vt.chrome.prod },
    },
    Te = {
      chrome: {
        backendCompatibilityKey: "chrome",
        displayName: "Google Chrome",
        browserIconAssetPath: "assets/google-chrome.png",
        shortDisplayName: "Chrome",
        userAgentIdentifiers: ["Chrome/"],
        internalUrlSchemes: ["chrome"],
        extensionManagementUrl: "chrome://extensions",
        extensionChannels: wr,
        linux: {
          installations: [
            {
              commands: ["google-chrome", "google-chrome-stable"],
              userDataDirName: "google-chrome",
            },
            {
              commands: ["chromium", "chromium-browser"],
              userDataDirName: "chromium",
            },
            {
              commands: ["google-chrome-beta"],
              userDataDirName: "google-chrome-beta",
            },
            {
              commands: ["google-chrome-unstable"],
              userDataDirName: "google-chrome-unstable",
            },
            {
              commands: ["google-chrome-for-testing"],
              userDataDirName: "google-chrome-for-testing",
            },
          ],
          nativeMessagingManifestDirectories: [
            ".config/google-chrome/NativeMessagingHosts",
            ".config/chromium/NativeMessagingHosts",
            ".config/google-chrome-beta/NativeMessagingHosts",
            ".config/google-chrome-unstable/NativeMessagingHosts",
            ".config/google-chrome-for-testing/NativeMessagingHosts",
          ],
          processNames: ["chrome"],
          userDataDirectorySegments: [".config", "google-chrome"],
        },
        macos: {
          applicationNames: ["Google Chrome.app"],
          bundleId: "com.google.Chrome",
          nativeMessagingManifestDirectories: [
            "Library/Application Support/Google/Chrome/NativeMessagingHosts",
            "Library/Application Support/Chromium/NativeMessagingHosts",
            "Library/Application Support/Google/ChromeForTesting/NativeMessagingHosts",
            "Library/Application Support/Google/Chrome for Testing/NativeMessagingHosts",
          ],
          processNames: ["Google Chrome", "Google Chrome Helper"],
          userDataDirectorySegments: [
            "Library",
            "Application Support",
            "Google",
            "Chrome",
          ],
        },
        windows: {
          commandNames: ["chrome.exe", "chrome"],
          httpsUserChoiceProgIdPrefixes: ["chromehtml"],
          installPathSegments: [
            "Google",
            "Chrome",
            "Application",
            "chrome.exe",
          ],
          processNames: ["chrome.exe"],
          userDataDirectorySegments: ["Google", "Chrome", "User Data"],
        },
      },
      edge: {
        backendCompatibilityKey: "chrome",
        displayName: "Microsoft Edge",
        browserIconAssetPath: "assets/microsoft-edge.svg",
        shortDisplayName: "Edge",
        userAgentIdentifiers: ["Edg/"],
        internalUrlSchemes: ["edge"],
        extensionManagementUrl: "edge://extensions",
        extensionChannels: {
          dev: { distributions: vt.edge.dev },
          internal: { distributions: vt.edge.internal },
          prod: { distributions: vt.edge.prod },
        },
        linux: {
          installations: [
            {
              commands: ["microsoft-edge", "microsoft-edge-stable"],
              userDataDirName: "microsoft-edge",
            },
          ],
          nativeMessagingManifestDirectories: [
            ".config/microsoft-edge/NativeMessagingHosts",
          ],
          processNames: ["msedge"],
          userDataDirectorySegments: [".config", "microsoft-edge"],
        },
        macos: {
          applicationNames: ["Microsoft Edge.app"],
          bundleId: "com.microsoft.edgemac",
          nativeMessagingManifestDirectories: [
            "Library/Application Support/Microsoft Edge/NativeMessagingHosts",
          ],
          processNames: ["Microsoft Edge", "Microsoft Edge Helper"],
          userDataDirectorySegments: [
            "Library",
            "Application Support",
            "Microsoft Edge",
          ],
        },
        windows: {
          commandNames: ["msedge.exe", "msedge"],
          httpsUserChoiceProgIdPrefixes: ["msedgehtm"],
          installPathSegments: [
            "Microsoft",
            "Edge",
            "Application",
            "msedge.exe",
          ],
          processNames: ["msedge.exe"],
          userDataDirectorySegments: ["Microsoft", "Edge", "User Data"],
        },
      },
      brave: {
        backendCompatibilityKey: "chrome",
        displayName: "Brave Browser",
        browserIconAssetPath: "assets/brave.svg",
        shortDisplayName: "Brave",
        userAgentIdentifiers: ["Brave/"],
        internalUrlSchemes: ["brave", "chrome"],
        extensionManagementUrl: "brave://extensions",
        extensionChannels: wr,
        linux: {
          installations: [
            {
              commands: ["brave-browser", "brave-browser-stable", "brave"],
              userDataDirName: "BraveSoftware/Brave-Browser",
            },
          ],
          nativeMessagingManifestDirectories: [
            ".config/BraveSoftware/Brave-Browser/NativeMessagingHosts",
          ],
          processNames: ["brave", "brave-browser"],
          userDataDirectorySegments: [
            ".config",
            "BraveSoftware",
            "Brave-Browser",
          ],
        },
        macos: {
          applicationNames: ["Brave Browser.app"],
          bundleId: "com.brave.Browser",
          nativeMessagingManifestDirectories: [
            "Library/Application Support/BraveSoftware/Brave-Browser/NativeMessagingHosts",
          ],
          processNames: ["Brave Browser", "Brave Browser Helper"],
          userDataDirectorySegments: [
            "Library",
            "Application Support",
            "BraveSoftware",
            "Brave-Browser",
          ],
        },
        windows: {
          commandNames: ["brave.exe", "brave", "brave-browser"],
          httpsUserChoiceProgIdPrefixes: ["bravehtml"],
          installPathSegments: [
            "BraveSoftware",
            "Brave-Browser",
            "Application",
            "brave.exe",
          ],
          processNames: ["brave.exe"],
          userDataDirectorySegments: [
            "BraveSoftware",
            "Brave-Browser",
            "User Data",
          ],
        },
      },
      opera: {
        backendCompatibilityKey: "chrome",
        displayName: "Opera",
        browserIconAssetPath: "assets/opera.svg",
        shortDisplayName: "Opera",
        userAgentIdentifiers: ["OPR/", "Opera/"],
        internalUrlSchemes: ["opera", "chrome"],
        extensionManagementUrl: "opera://extensions",
        extensionChannels: wr,
        linux: {
          installations: [
            { commands: ["opera", "opera-stable"], userDataDirName: "opera" },
          ],
          nativeMessagingManifestDirectories: [
            ".config/opera/NativeMessagingHosts",
          ],
          processNames: ["opera"],
          userDataDirectorySegments: [".config", "opera"],
        },
        macos: {
          applicationNames: ["Opera.app"],
          bundleId: "com.operasoftware.Opera",
          nativeMessagingManifestDirectories: [
            "Library/Application Support/com.operasoftware.Opera/NativeMessagingHosts",
          ],
          processNames: ["Opera", "Opera Helper"],
          userDataDirectorySegments: [
            "Library",
            "Application Support",
            "com.operasoftware.Opera",
          ],
        },
        windows: {
          commandNames: ["opera.exe", "opera"],
          httpsUserChoiceProgIdPrefixes: ["operastable"],
          installPathSegments: ["Opera", "opera.exe"],
          processNames: ["opera.exe"],
          userDataDirectorySegments: ["Opera Software", "Opera Stable"],
        },
      },
      vivaldi: {
        backendCompatibilityKey: "chrome",
        displayName: "Vivaldi",
        browserIconAssetPath: "assets/vivaldi.svg",
        shortDisplayName: "Vivaldi",
        userAgentIdentifiers: ["Vivaldi/"],
        internalUrlSchemes: ["vivaldi", "chrome"],
        extensionManagementUrl: "vivaldi://extensions",
        extensionChannels: wr,
        linux: {
          installations: [
            {
              commands: ["vivaldi", "vivaldi-stable"],
              userDataDirName: "vivaldi",
            },
          ],
          nativeMessagingManifestDirectories: [
            ".config/vivaldi/NativeMessagingHosts",
          ],
          processNames: ["vivaldi", "vivaldi-bin"],
          userDataDirectorySegments: [".config", "vivaldi"],
        },
        macos: {
          applicationNames: ["Vivaldi.app"],
          bundleId: "com.vivaldi.Vivaldi",
          nativeMessagingManifestDirectories: [
            "Library/Application Support/Vivaldi/NativeMessagingHosts",
          ],
          processNames: ["Vivaldi", "Vivaldi Helper"],
          userDataDirectorySegments: [
            "Library",
            "Application Support",
            "Vivaldi",
          ],
        },
        windows: {
          commandNames: ["vivaldi.exe", "vivaldi"],
          httpsUserChoiceProgIdPrefixes: ["vivaldihtm"],
          installPathSegments: ["Vivaldi", "Application", "vivaldi.exe"],
          processNames: ["vivaldi.exe"],
          userDataDirectorySegments: ["Vivaldi", "User Data"],
        },
      },
    },
    Oc = ["newtab/", "new-tab-page/", "new-tab-page-third-party/"];
  function Ot(e, t = !1) {
    if (t) {
      const i = Object.keys(Te).find((a) => a === "brave");
      if (i != null && $a(i)) return i;
    }
    let r = "chrome",
      n = -1;
    for (const i of Object.keys(Te).filter($a))
      for (const a of Te[i].userAgentIdentifiers) {
        const s = e.lastIndexOf(a);
        s > n && ((r = i), (n = s));
      }
    return r;
  }
  function Mn(e) {
    return Ot(e.userAgent, "brave" in e);
  }
  function $a(e) {
    return Object.hasOwn(Te, e);
  }
  function br(e, t) {
    return (
      t != null && Te[e].internalUrlSchemes.some((r) => t.startsWith(`${r}://`))
    );
  }
  function ja(e, t) {
    return (
      t != null &&
      Te[e].internalUrlSchemes.some((r) => Oc.some((n) => t === `${r}://${n}`))
    );
  }
  var Vw = "open-codex-side-panel",
    qa = class {
      closed = !1;
      nextId = 1;
      pendingRequests = new Map();
      requestHandlers = new Map();
      eventHandlers = new Map();
      constructor(e) {
        (this.transport = e),
          this.transport.setMessageCallback((t) => {
            this.handleIncomingMessage(t);
          }),
          this.transport.addCloseListener?.((t) => {
            (this.closed = !0),
              this.rejectPendingRequests(
                t?.message ?? "transport closed before response"
              );
          });
      }
      registerRequestHandlerObject(e) {
        [
          ...Object.getOwnPropertyNames(e),
          ...Object.getOwnPropertyNames(Object.getPrototypeOf(e)),
        ]
          .filter((t) => t !== "constructor" && typeof e[t] == "function")
          .forEach((t) => {
            const r = e[t];
            r && this.registerRequestHandler(t, r.bind(e));
          });
      }
      registerRequestHandler(e, t) {
        this.requestHandlers.set(e, t);
      }
      addEventListener(e, t) {
        const r = e.toString(),
          n = this.eventHandlers.get(r) ?? [];
        n.push(t), this.eventHandlers.set(r, n);
      }
      removeEventListener(e, t) {
        const r = e.toString(),
          n = this.eventHandlers.get(r) ?? [];
        this.eventHandlers.set(
          r,
          n.filter((i) => i !== t)
        );
      }
      sendNotification(e, t) {
        this.transport.sendMessage({ jsonrpc: "2.0", method: e, params: t });
      }
      sendRequest(e, t) {
        const r = this.nextId++;
        return new Promise((n, i) => {
          this.pendingRequests.set(r, { resolve: n, reject: i });
          try {
            this.transport.sendMessage({
              jsonrpc: "2.0",
              method: e.toString(),
              params: t,
              id: r,
            });
          } catch (a) {
            this.pendingRequests.delete(r), i(a);
          }
        });
      }
      async handleIncomingMessage(e) {
        if ("method" in e) return this.handleIncomingRequest(e);
        if (e.id === void 0) return;
        const t = this.pendingRequests.get(e.id);
        if (t) {
          if ((this.pendingRequests.delete(e.id), "error" in e)) {
            t.reject(e.error?.message || "Something went wrong");
            return;
          }
          t.resolve(e.result);
        }
      }
      rejectPendingRequests(e) {
        for (const t of this.pendingRequests.values()) t.reject(e);
        this.pendingRequests.clear();
      }
      async handleIncomingRequest(e) {
        if (e.id === void 0) {
          (this.eventHandlers.get(e.method ?? "") ?? []).forEach((r) =>
            r(e.params)
          );
          return;
        }
        const t = this.requestHandlers.get(e.method ?? "");
        if (!t) {
          this.transport.sendMessage({
            jsonrpc: "2.0",
            id: e.id,
            error: {
              code: -1,
              message: `No handler registered for method: ${e.method}`,
            },
          });
          return;
        }
        try {
          const r = await t(e.params);
          if (this.closed) return;
          this.transport.sendMessage({ jsonrpc: "2.0", id: e.id, result: r });
        } catch (r) {
          if (this.closed) return;
          this.transport.sendMessage({
            jsonrpc: "2.0",
            id: e.id,
            error: {
              code: 1,
              message: r instanceof Error ? r.message : String(r),
            },
          });
        }
      }
    },
    Ga = class extends qa {
      constructor(e, t, r = {}) {
        super(e),
          (this.handler = t),
          (this.options = r),
          this.registerRequestHandlerObject(t),
          this.addEventListener("moveMouse", (n) => {
            Promise.resolve(this.handler.moveMouse(n)).catch((i) => {
              this.options.onMoveMouseError?.(i, n);
            });
          }),
          this.addEventListener("webMcpToolInvoked", (n) => {
            this.options.onWebMcpToolInvoked?.(n);
          });
      }
      ping() {
        return this.sendRequest("ping");
      }
      sendCdpEvent(e) {
        this.sendNotification("onCDPEvent", e);
      }
      sendCdpDetach(e) {
        this.sendNotification("onCDPDetach", e);
      }
      sendDownloadChange(e) {
        this.sendNotification("onDownloadChange", e);
      }
      sendPageEvent(e) {
        this.sendNotification("onPageEvent", e);
      }
      sendBrowserTabMentionsInvalidated() {
        try {
          this.sendNotification("onBrowserTabMentionsInvalidated");
        } catch {}
      }
    },
    Hw = 4096,
    Ww = 16384,
    Kw = 16384;
  function za(e) {
    return typeof e == "string" &&
      e.length <= 16384 &&
      /^data:image\/(?:avif|bmp|gif|jpeg|png|webp|x-icon|vnd\.microsoft\.icon);base64,[A-Za-z0-9+/]+={0,2}$/.test(
        e
      ) &&
      Mc(e)
      ? e
      : null;
  }
  function Pc(e, t) {
    const r = `${e.title}
${e.url}`.toLowerCase();
    return t
      .trim()
      .toLowerCase()
      .split(/\s+/)
      .filter(Boolean)
      .every((n) => r.includes(n));
  }
  function Ln(e) {
    for (let t = 0; t < e.length; t += 1) {
      const r = e.charCodeAt(t);
      if (r >= 55296 && r <= 56319) {
        const n = e.charCodeAt(t + 1);
        if (!(n >= 56320 && n <= 57343)) return !1;
        t += 1;
      } else if (r >= 56320 && r <= 57343) return !1;
    }
    return !0;
  }
  function Mc(e) {
    return e.slice(e.indexOf(",") + 1).length % 4 === 0;
  }
  var Lc = 128;
  function Va(e) {
    return typeof e == "string" &&
      e.length > 0 &&
      e.length <= Lc &&
      e.trim().length > 0 &&
      Ln(e)
      ? e
      : null;
  }
  function Ha(e) {
    const t = Dn(e);
    return t != null &&
      Wa(t, ["query", "limit"]) &&
      typeof t.query == "string" &&
      t.query.length <= 500 &&
      Nc(t.limit) &&
      t.limit >= 0
      ? { query: t.query, limit: t.limit }
      : null;
  }
  function Dc(e) {
    const t = Dn(e);
    return t?.type === "search_browser_tab_mentions" ? { type: t.type } : null;
  }
  function xc(e) {
    const t = Dn(e);
    if (t?.type === "search_browser_tab_mentions") {
      const r = Ha({ query: t.query, limit: t.limit });
      return r == null || !Wa(t, ["type", "query", "limit"])
        ? null
        : { type: t.type, ...r };
    }
    return null;
  }
  function Dn(e) {
    return typeof e == "object" && e != null && !Array.isArray(e)
      ? Object.fromEntries(Object.entries(e))
      : void 0;
  }
  function Wa(e, t) {
    return Object.keys(e).every((r) => t.includes(r));
  }
  function Nc(e) {
    return typeof e == "number" && Number.isSafeInteger(e);
  }
  function Uc(e) {
    return (
      typeof e == "object" &&
      e != null &&
      "version" in e &&
      e.version === 1 &&
      "type" in e &&
      typeof e.type == "string"
    );
  }
  async function Fc({
    backendName: e,
    commandSets: t,
    handlers: r,
    payload: n,
  }) {
    if (
      !t.some((a) => Object.prototype.hasOwnProperty.call(a.commands, n.type))
    )
      throw Ka(e, n);
    const i = r[n.type];
    if (i == null) throw Ka(e, n);
    return i(n);
  }
  function Ka(e, t) {
    return new Error(`${e} does not support command "${t.type}".`);
  }
  var Bc = "client-sYWqzCYMRkUg4DqqiZcR5DGTNl2iD7zNJY0HoeDLzxR",
    Za = "https://ab.chatgpt.com/v1";
  function $c(e) {
    const t = { close: [], release: [], deliverable: [], handoff: [] };
    for (const r of e)
      t[r.mark ?? (r.origin === "agent" ? "close" : "release")].push(r.tabId);
    return t;
  }
  var Zw = 10080 * 60,
    xn = /^[A-Za-z0-9_-]{11}$/u,
    jc = new Set(["youtube.com", "www.youtube.com", "m.youtube.com"]);
  function qc(e) {
    const t = Gc(e);
    return t == null ? null : zc(t);
  }
  function Gc(e) {
    try {
      const t = new URL(e);
      return t.protocol === "https:" &&
        t.username === "" &&
        t.password === "" &&
        t.port === ""
        ? t
        : null;
    } catch {
      return null;
    }
  }
  function zc(e) {
    let t = null;
    if (jc.has(e.hostname))
      if (e.pathname === "/watch") {
        const r = e.searchParams.getAll("v");
        t = r.length === 1 ? r[0] ?? null : null;
      } else {
        const r = e.pathname.split("/").filter(Boolean);
        r.length === 2 && r[0] === "shorts" && (t = r[1] ?? null);
      }
    else if (e.hostname === "youtu.be") {
      const r = e.pathname.split("/").filter(Boolean);
      r.length === 1 && (t = r[0] ?? null);
    }
    return t != null && xn.test(t) ? t : null;
  }
  var yr = {
    fetchTimeoutMs: 8e3,
    maxItems: 5e3,
    maxJsonBytes: 5 * 1024 * 1024,
    maxTextBytes: 5e5,
    observationTimeoutMs: 4e3,
  };
  function Vc(e) {
    if (e == null) return null;
    try {
      const t = new URL(e);
      if (
        t.protocol !== "https:" ||
        (t.hostname !== "www.youtube.com" && t.hostname !== "youtube.com") ||
        t.pathname !== "/watch"
      )
        return null;
      const r = t.searchParams.get("v");
      return r != null && xn.test(r) ? r : null;
    } catch {
      return null;
    }
  }
  async function Hc(e, t) {
    const r = await t(Zc, e, yr);
    if (!Wc(r) || new TextEncoder().encode(r.body).byteLength > yr.maxJsonBytes)
      return null;
    let n;
    try {
      const h = JSON.parse(r.body);
      if (
        h == null ||
        typeof h != "object" ||
        !("events" in h) ||
        !Array.isArray(h.events)
      )
        return null;
      n = h.events;
    } catch {
      return null;
    }
    const i = new TextEncoder(),
      a = [
        "YouTube transcript",
        `Video ID: ${e}`,
        `Language: ${r.captionLanguage ?? "unknown"}`,
        `Captions: ${
          r.captionKind === "asr" ? "auto-generated" : "authored or unspecified"
        }`,
        "",
      ];
    let s = 0,
      o = i.encode(
        a.join(`
`)
      ).byteLength,
      l = !1;
    for (const h of n) {
      if (s >= yr.maxItems) {
        l = !0;
        break;
      }
      const m = Kc(h);
      if (m == null) continue;
      const d = m.segs
        .map((v) => v.utf8 ?? "")
        .join("")
        .replace(/\s+/g, " ")
        .trim();
      if (d.length === 0) continue;
      const f = Math.floor(m.tStartMs / 1e3),
        c = Math.floor(f / 3600),
        p = Math.floor((f % 3600) / 60),
        u = f % 60,
        g = `[${
          c > 0
            ? `${c}:${p.toString().padStart(2, "0")}:${u
                .toString()
                .padStart(2, "0")}`
            : `${p}:${u.toString().padStart(2, "0")}`
        }] ${d}`,
        w = i.encode(`
${g}`).byteLength;
      if (o + w > yr.maxTextBytes) {
        l = !0;
        break;
      }
      a.push(g), (o += w), (s += 1);
    }
    return s === 0
      ? null
      : (l && a.push("", "[Transcript truncated]"),
        {
          pageUrl: r.pageUrl,
          text: a.join(`
`),
          truncated: l,
        });
  }
  function Wc(e) {
    return !(
      e == null ||
      typeof e != "object" ||
      Array.isArray(e) ||
      Object.keys(e).length !== 4 ||
      !("body" in e) ||
      typeof e.body != "string" ||
      !("captionKind" in e) ||
      (e.captionKind !== null &&
        (typeof e.captionKind != "string" || e.captionKind.length > 100)) ||
      !("captionLanguage" in e) ||
      (e.captionLanguage !== null &&
        (typeof e.captionLanguage != "string" ||
          e.captionLanguage.length > 100)) ||
      !("pageUrl" in e) ||
      typeof e.pageUrl != "string"
    );
  }
  function Kc(e) {
    return e == null ||
      typeof e != "object" ||
      Array.isArray(e) ||
      !("tStartMs" in e) ||
      typeof e.tStartMs != "number" ||
      !Number.isFinite(e.tStartMs) ||
      e.tStartMs < 0 ||
      !("segs" in e) ||
      !Array.isArray(e.segs) ||
      !e.segs.every(
        (t) =>
          t != null &&
          typeof t == "object" &&
          !Array.isArray(t) &&
          (!("utf8" in t) || t.utf8 === void 0 || typeof t.utf8 == "string")
      )
      ? null
      : { segs: e.segs, tStartMs: e.tStartMs };
  }
  async function Zc(e, t) {
    const r = (u, g) => {
        const w = Reflect.get(u, g);
        return typeof w == "function" ? Reflect.apply(w, u, []) : void 0;
      },
      n = () => {
        const u = document.querySelector("ytd-player"),
          g = u == null ? null : Reflect.get(u, "getPlayer");
        if (typeof g == "function" && u != null) {
          const w = Reflect.apply(g, u, []);
          if (w != null && typeof w == "object") return w;
        }
        return document.querySelector("#movie_player");
      },
      i = () => {
        const u = n();
        let g;
        try {
          g = new URL(location.href);
        } catch {
          return { player: u, playerVideoId: null, urlVideoId: null };
        }
        const w = u == null ? null : r(u, "getVideoData"),
          v =
            w != null && typeof w == "object"
              ? Reflect.get(w, "video_id")
              : null;
        return {
          player: u,
          playerVideoId: typeof v == "string" ? v : null,
          urlVideoId: g.searchParams.get("v"),
        };
      },
      a = (u) =>
        u.player != null && u.playerVideoId === e && u.urlVideoId === e,
      s = i();
    if (!a(s)) return null;
    const o = s.player;
    if (
      [
        "getVideoData",
        "isSubtitlesOn",
        "toggleSubtitles",
        "toggleSubtitlesOn",
      ].some((u) => typeof Reflect.get(o, u) != "function")
    )
      return null;
    const l = performance.now();
    let h = null;
    const m = new PerformanceObserver((u) => {
      for (const g of u.getEntries())
        if (!(g.startTime + 0.5 < l))
          try {
            const w = new URL(g.name);
            w.protocol === "https:" &&
              w.hostname === "www.youtube.com" &&
              w.pathname === "/api/timedtext" &&
              w.searchParams.get("v") === e &&
              (h = g.name);
          } catch {}
    });
    m.observe({ buffered: !0, type: "resource" });
    const d = !!r(o, "isSubtitlesOn");
    try {
      d && r(o, "toggleSubtitles"), r(o, "toggleSubtitlesOn");
      const u = Date.now() + t.observationTimeoutMs;
      for (; Date.now() < u && h == null; )
        await new Promise((g) => setTimeout(g, 150));
    } finally {
      try {
        const u = i();
        if (a(u) && u.player === o) {
          const g = !!r(o, "isSubtitlesOn");
          d && !g
            ? r(o, "toggleSubtitlesOn")
            : !d && g && r(o, "toggleSubtitles");
        }
      } finally {
        m.disconnect();
      }
    }
    if (h == null || !a(i())) return null;
    const f = new URL(h);
    f.searchParams.set("fmt", "json3");
    const c = new AbortController(),
      p = setTimeout(() => c.abort(), t.fetchTimeoutMs);
    try {
      const u = await fetch(f.toString(), {
        credentials: "include",
        signal: c.signal,
      });
      if (
        !u.ok ||
        !u.headers
          .get("content-type")
          ?.toLowerCase()
          .includes("application/json")
      )
        return null;
      const g = Number(u.headers.get("content-length") ?? NaN);
      if (Number.isFinite(g) && g > t.maxJsonBytes) return c.abort(), null;
      const w = u.body?.getReader();
      let v;
      if (w == null) {
        if (
          ((v = await u.text()),
          new TextEncoder().encode(v).byteLength > t.maxJsonBytes)
        )
          return null;
      } else {
        const S = [];
        let y = 0;
        for (;;) {
          const { done: I, value: C } = await w.read();
          if (I) break;
          if (C != null) {
            if (((y += C.byteLength), y > t.maxJsonBytes))
              return await w.cancel(), null;
            S.push(new Uint8Array(C));
          }
        }
        const T = new Uint8Array(y);
        let E = 0;
        for (const I of S) T.set(I, E), (E += I.byteLength);
        v = new TextDecoder().decode(T);
      }
      return a(i())
        ? {
            body: v,
            captionKind: f.searchParams.get("kind"),
            captionLanguage: f.searchParams.get("lang"),
            pageUrl: location.href,
          }
        : null;
    } catch {
      return null;
    } finally {
      clearTimeout(p);
    }
  }
  function Ja(e) {
    return `browser-use-session-config:${e}`;
  }
  var ee = D((e) => {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.Log = e.LogLevel = void 0);
      var t = " DEBUG ",
        r = "  INFO ",
        n = "  WARN ",
        i = " ERROR ";
      function a(o) {
        return o.unshift("[Statsig]"), o;
      }
      e.LogLevel = { None: 0, Error: 1, Warn: 2, Info: 3, Debug: 4 };
      var s = class hr {
        static info(...l) {
          hr.level >= e.LogLevel.Info && console.info(r, ...a(l));
        }
        static debug(...l) {
          hr.level >= e.LogLevel.Debug && console.debug(t, ...a(l));
        }
        static warn(...l) {
          hr.level >= e.LogLevel.Warn && console.warn(n, ...a(l));
        }
        static error(...l) {
          hr.level >= e.LogLevel.Error && console.error(i, ...a(l));
        }
      };
      (e.Log = s), (s.level = e.LogLevel.Warn);
    }),
    rt = D((e) => {
      var t, r, n;
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e._getInstance =
          e._getStatsigGlobalFlag =
          e._getStatsigGlobal =
            void 0);
      var i = ee(),
        a = () => {
          try {
            return typeof __STATSIG__ < "u" ? __STATSIG__ : f;
          } catch {
            return f;
          }
        };
      e._getStatsigGlobal = a;
      var s = (c) => (0, e._getStatsigGlobal)()[c];
      e._getStatsigGlobalFlag = s;
      var o = (c) => {
        const p = (0, e._getStatsigGlobal)();
        return c
          ? p.instances && p.instances[c]
          : (p.instances &&
              Object.keys(p.instances).length > 1 &&
              i.Log.warn(
                "Call made to Statsig global instance without an SDK key but there is more than one client instance. If you are using mulitple clients, please specify the SDK key."
              ),
            p.firstInstance);
      };
      e._getInstance = o;
      var l = "__STATSIG__",
        h = typeof window < "u" ? window : {},
        m = typeof global < "u" ? global : {},
        d = typeof globalThis < "u" ? globalThis : {},
        f =
          (n =
            (r = (t = h[l]) !== null && t !== void 0 ? t : m[l]) !== null &&
            r !== void 0
              ? r
              : d[l]) !== null && n !== void 0
            ? n
            : { instance: e._getInstance };
      (h[l] = f), (m[l] = f), (d[l] = f);
    }),
    Nn = D((e) => {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.Diagnostics = void 0);
      var t = new Map(),
        r = "start",
        n = "end",
        i = "statsig::diagnostics";
      e.Diagnostics = {
        _getMarkers: (h) => t.get(h),
        _markInitOverallStart: (h, m) => {
          o(h, a({ syncType: m }, r, "overall"));
        },
        _markInitOverallEnd: (h, m, d, f) => {
          o(
            h,
            a(
              {
                syncType: f,
                success: m,
                error: m
                  ? void 0
                  : {
                      name: "InitializeError",
                      message: "Failed to initialize",
                    },
                evaluationDetails: d,
              },
              n,
              "overall"
            )
          );
        },
        _markInitNetworkReqStart: (h, m) => {
          o(h, a(m, r, "initialize", "network_request"));
        },
        _markInitNetworkReqEnd: (h, m) => {
          o(h, a(m, n, "initialize", "network_request"));
        },
        _markInitProcessStart: (h, m) => {
          o(h, a({ syncType: m }, r, "initialize", "process"));
        },
        _markInitProcessEnd: (h, m, d) => {
          o(
            h,
            a(
              Object.assign(Object.assign({}, m), { syncType: d }),
              n,
              "initialize",
              "process"
            )
          );
        },
        _clearMarkers: (h) => {
          t.delete(h);
        },
        _formatError(h) {
          if (h && typeof h == "object")
            return {
              code: l(h, "code"),
              name: l(h, "name"),
              message: l(h, "message"),
            };
        },
        _getDiagnosticsData(h, m, d, f) {
          var c;
          const p = typeof navigator < "u" ? navigator : null,
            u = p?.onLine;
          return Object.assign(
            Object.assign(
              {
                success: h?.ok === !0,
                statusCode: h?.status,
                sdkRegion:
                  (c = h?.headers) === null || c === void 0
                    ? void 0
                    : c.get("x-statsig-region"),
                isDelta: d.includes('"is_delta":true') === !0 ? !0 : void 0,
                attempt: m,
              },
              typeof u == "boolean" ? { hasInternet: u } : {}
            ),
            { error: e.Diagnostics._formatError(f) }
          );
        },
        _enqueueDiagnosticsEvent(h, m, d, f, c) {
          const p = e.Diagnostics._getMarkers(d);
          if (p == null || p.length <= 0) return -1;
          const u = p[p.length - 1].timestamp - p[0].timestamp;
          e.Diagnostics._clearMarkers(d);
          const g = s(h, {
            context: "initialize",
            syncType: c,
            markers: p.slice(),
            statsigOptions: f,
          });
          return m.enqueue(g), u;
        },
      };
      function a(h, m, d, f) {
        return Object.assign(
          { key: d, action: m, step: f, timestamp: Date.now() },
          h
        );
      }
      function s(h, m) {
        return {
          eventName: i,
          user: h,
          value: null,
          metadata: m,
          time: Date.now(),
        };
      }
      function o(h, m) {
        var d;
        const f = (d = t.get(h)) !== null && d !== void 0 ? d : [];
        f.push(m), t.set(h, f);
      }
      function l(h, m) {
        if (m in h) return h[m];
      }
    }),
    Jc = D((e) => {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.EventBatch = void 0);
      var t = class {
        constructor(r) {
          (this.attempts = 0), (this.createdAt = Date.now()), (this.events = r);
        }
        incrementAttempts() {
          this.attempts++;
        }
      };
      e.EventBatch = t;
    }),
    Un = D((e) => {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.EventRetryConstants = void 0),
        (e.EventRetryConstants = {
          MAX_RETRY_ATTEMPTS: 8,
          DEFAULT_BATCH_SIZE: 100,
          MAX_PENDING_BATCHES: 40,
          TICK_INTERVAL_MS: 1e3,
          QUICK_FLUSH_WINDOW_MS: 200,
          MAX_LOCAL_STORAGE: 500,
          get MAX_QUEUED_EVENTS() {
            return this.DEFAULT_BATCH_SIZE * this.MAX_PENDING_BATCHES;
          },
        });
    }),
    Xc = D((e) => {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.BatchQueue = void 0);
      var t = Jc(),
        r = Un(),
        n = class {
          constructor(i = r.EventRetryConstants.DEFAULT_BATCH_SIZE) {
            (this._batches = []), (this._batchSize = i);
          }
          batchSize() {
            return this._batchSize;
          }
          requeueBatch(i) {
            return this._enqueueBatch(i);
          }
          hasFullBatch() {
            return this._batches.some(
              (i) => i.events.length >= this._batchSize
            );
          }
          takeNextBatch() {
            return this._batches.shift();
          }
          takeAllBatches() {
            const i = this._batches;
            return (this._batches = []), i;
          }
          createBatches(i) {
            let a = 0,
              s = 0;
            for (; a < i.length; ) {
              const o = i.slice(a, a + this._batchSize);
              (s += this._enqueueBatch(new t.EventBatch(o))),
                (a += this._batchSize);
            }
            return s;
          }
          _enqueueBatch(i) {
            this._batches.push(i);
            let a = 0;
            for (
              ;
              this._batches.length > r.EventRetryConstants.MAX_PENDING_BATCHES;

            ) {
              const s = this._batches.shift();
              s && (a += s.events.length);
            }
            return a;
          }
        };
      e.BatchQueue = n;
    }),
    Fn = D((e) => {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e._isTypeMatch = e._typeOf = void 0);
      function t(n) {
        return Array.isArray(n) ? "array" : typeof n;
      }
      e._typeOf = t;
      function r(n, i) {
        const a = (s) =>
          Array.isArray(s) ? "array" : s === null ? "null" : typeof s;
        return a(n) === a(i);
      }
      e._isTypeMatch = r;
    }),
    nt = D((e) => {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e._getSortedObject = e._DJB2Object = e._DJB2 = void 0);
      var t = Fn(),
        r = (a) => {
          let s = 0;
          for (let o = 0; o < a.length; o++) {
            const l = a.charCodeAt(o);
            (s = (s << 5) - s + l), (s = s & s);
          }
          return String(s >>> 0);
        };
      e._DJB2 = r;
      var n = (a, s) =>
        (0, e._DJB2)(JSON.stringify((0, e._getSortedObject)(a, s)));
      e._DJB2Object = n;
      var i = (a, s) => {
        if (a == null) return null;
        const o = Object.keys(a).sort(),
          l = {};
        return (
          o.forEach((h) => {
            const m = a[h];
            if (s === 0 || (0, t._typeOf)(m) !== "object") {
              l[h] = m;
              return;
            }
            l[h] = (0, e._getSortedObject)(m, s != null ? s - 1 : s);
          }),
          l
        );
      };
      e._getSortedObject = i;
    }),
    Sr = D((e) => {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e._getStorageKey = e._getUserStorageKey = void 0);
      var t = nt(),
        r = new WeakMap();
      function n(a, s, o) {
        var l;
        if (o) return o(a, s);
        let h = r.get(s);
        (h === void 0 ||
          h.userID !== s.userID ||
          h.customIDs !== s.customIDs) &&
          ((h = { userID: s.userID, customIDs: s.customIDs, keys: new Map() }),
          r.set(s, h));
        const m = h.keys.get(a);
        if (m !== void 0) return m;
        const d = s && s.customIDs ? s.customIDs : {},
          f = [
            `uid:${(l = s?.userID) !== null && l !== void 0 ? l : ""}`,
            `cids:${Object.keys(d)
              .sort((p, u) => p.localeCompare(u))
              .map((p) => `${p}-${d[p]}`)
              .join(",")}`,
            `k:${a}`,
          ],
          c = (0, t._DJB2)(f.join("|"));
        return h.keys.set(a, c), c;
      }
      e._getUserStorageKey = n;
      function i(a, s, o) {
        return s ? n(a, s, o) : (0, t._DJB2)(`k:${a}`);
      }
      e._getStorageKey = i;
    }),
    Pt = D((e) => {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.NetworkParam = e.NetworkDefault = e.Endpoint = void 0),
        (e.Endpoint = {
          _initialize: "initialize",
          _rgstr: "rgstr",
          _download_config_specs: "download_config_specs",
        }),
        (e.NetworkDefault = {
          [e.Endpoint._rgstr]: "https://api.oaistatsig.com/v1",
          [e.Endpoint._initialize]: "https://ab.chatgpt.com/v1",
          [e.Endpoint._download_config_specs]:
            "https://statsigcdn.openai.com/v1",
        }),
        (e.NetworkParam = {
          EventCount: "ec",
          SdkKey: "k",
          SdkType: "st",
          SdkVersion: "sv",
          Time: "t",
          SessionID: "sid",
          StatsigEncoded: "se",
          IsGzipped: "gz",
        });
    }),
    Tr = D((e) => {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.SDKType = void 0);
      var t = {},
        r;
      e.SDKType = {
        _get: (n) => {
          var i;
          return (
            ((i = t[n]) !== null && i !== void 0 ? i : "js-mono") + (r ?? "")
          );
        },
        _setClientType(n, i) {
          t[n] = i;
        },
        _setBindingType(n) {
          (!r || r === "-react") && (r = "-" + n);
        },
      };
    }),
    Mt = D((e) => {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.StatsigMetadataProvider = e.SDK_VERSION = void 0),
        (e.SDK_VERSION = "3.33.4");
      var t = { sdkVersion: e.SDK_VERSION, sdkType: "js-mono" };
      e.StatsigMetadataProvider = {
        get: () => t,
        add: (r) => {
          t = Object.assign(Object.assign({}, t), r);
        },
      };
    }),
    Oe = D((e) => {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e._cloneObject =
          e._getUnloadEvent =
          e._getCurrentPageUrlSafe =
          e._addDocumentEventListenerSafe =
          e._addWindowEventListenerSafe =
          e._isServerEnv =
          e._getDocumentSafe =
          e._getWindowSafe =
            void 0);
      var t = ee(),
        r = () => (typeof window < "u" ? window : null);
      e._getWindowSafe = r;
      var n = () => {
        var m;
        const d = (0, e._getWindowSafe)();
        return (m = d?.document) !== null && m !== void 0 ? m : null;
      };
      e._getDocumentSafe = n;
      var i = () => {
        if ((0, e._getDocumentSafe)() !== null) return !1;
        const m =
          typeof process < "u" &&
          process.versions != null &&
          process.versions.node != null;
        return typeof EdgeRuntime == "string" || m;
      };
      e._isServerEnv = i;
      var a = (m, d) => {
        const f = (0, e._getWindowSafe)();
        typeof f?.addEventListener == "function" && f.addEventListener(m, d);
      };
      e._addWindowEventListenerSafe = a;
      var s = (m, d) => {
        const f = (0, e._getDocumentSafe)();
        typeof f?.addEventListener == "function" && f.addEventListener(m, d);
      };
      e._addDocumentEventListenerSafe = s;
      var o = () => {
        var m;
        try {
          return (m = (0, e._getWindowSafe)()) === null || m === void 0
            ? void 0
            : m.location.href.split(/[?#]/)[0];
        } catch {
          return;
        }
      };
      e._getCurrentPageUrlSafe = o;
      var l = () => {
        const m = (0, e._getWindowSafe)();
        return m && "onpagehide" in m ? "pagehide" : "beforeunload";
      };
      e._getUnloadEvent = l;
      var h = (m, d) => {
        try {
          return JSON.parse(JSON.stringify(d));
        } catch {
          return t.Log.error(`Failed to clone object ${m}`), null;
        }
      };
      e._cloneObject = h;
    }),
    Lt = D((e) => {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e._notifyVisibilityChanged =
          e._subscribeToVisiblityChanged =
          e._isUnloading =
          e._isCurrentlyVisible =
            void 0);
      var t = Oe(),
        r = "foreground",
        n = "background",
        i = [],
        a = r,
        s = !1,
        o = () => a === r;
      e._isCurrentlyVisible = o;
      var l = () => s;
      e._isUnloading = l;
      var h = (d) => {
        i.unshift(d);
      };
      e._subscribeToVisiblityChanged = h;
      var m = (d) => {
        d !== a && ((a = d), i.forEach((f) => f(d)));
      };
      (e._notifyVisibilityChanged = m),
        (0, t._addWindowEventListenerSafe)("focus", () => {
          (s = !1), (0, e._notifyVisibilityChanged)(r);
        }),
        (0, t._addWindowEventListenerSafe)("blur", () =>
          (0, e._notifyVisibilityChanged)(n)
        ),
        (0, t._addDocumentEventListenerSafe)("visibilitychange", () => {
          (0, e._notifyVisibilityChanged)(
            document.visibilityState === "visible" ? r : n
          );
        }),
        (0, t._addWindowEventListenerSafe)((0, t._getUnloadEvent)(), () => {
          (s = !0), (0, e._notifyVisibilityChanged)(n);
        });
    }),
    Yc = D((e) => {
      var t =
        (e && e.__awaiter) ||
        function (l, h, m, d) {
          function f(c) {
            return c instanceof m
              ? c
              : new m(function (p) {
                  p(c);
                });
          }
          return new (m || (m = Promise))(function (c, p) {
            function u(v) {
              try {
                w(d.next(v));
              } catch (S) {
                p(S);
              }
            }
            function g(v) {
              try {
                w(d.throw(v));
              } catch (S) {
                p(S);
              }
            }
            function w(v) {
              v.done ? c(v.value) : f(v.value).then(u, g);
            }
            w((d = d.apply(l, h || [])).next());
          });
        };
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.EventSender = void 0);
      var r = ee(),
        n = Pt(),
        i = Tr(),
        a = Mt(),
        s = Lt(),
        o = class {
          constructor(l, h, m, d, f) {
            (this._sdkKey = l),
              (this._network = h),
              (this._emitter = m),
              (this._options = f),
              (this._logEventUrlConfig = d);
          }
          setLogEventCompressionMode(l) {
            this._network.setLogEventCompressionMode(l);
          }
          sendBatch(l) {
            return t(this, void 0, void 0, function* () {
              var h, m, d;
              let f = "event_sender_unexpected_exception";
              const c = {};
              try {
                const p =
                  (0, s._isUnloading)() &&
                  this._network.isBeaconSupported() &&
                  ((m =
                    (h = this._options) === null || h === void 0
                      ? void 0
                      : h.networkConfig) === null || m === void 0
                    ? void 0
                    : m.networkOverrideFunc) == null;
                (f = "event_sender_pre_logs_flushed_emitter_exception"),
                  this._emitter({ name: "pre_logs_flushed", events: l.events }),
                  (f = p
                    ? "event_sender_unexpected_exception"
                    : "event_sender_post_exception");
                const u = p
                  ? this._sendEventsViaBeacon(l, c)
                  : yield this._sendEventsViaPost(l, c);
                return u.success
                  ? ((f = "event_sender_logs_flushed_emitter_exception"),
                    this._emitter({ name: "logs_flushed", events: l.events }),
                    u)
                  : Object.assign(
                      Object.assign(
                        Object.assign(
                          {
                            success: !1,
                            statusCode: u.statusCode,
                            failurePath: u.failurePath,
                          },
                          u.failureErrorMessage
                            ? { failureErrorMessage: u.failureErrorMessage }
                            : {}
                        ),
                        u.failureDiagnosticBucket
                          ? {
                              failureDiagnosticBucket:
                                u.failureDiagnosticBucket,
                            }
                          : {}
                      ),
                      u.failureDiagnosticMetadata
                        ? {
                            failureDiagnosticMetadata:
                              u.failureDiagnosticMetadata,
                          }
                        : {}
                    );
              } catch (p) {
                return (
                  r.Log.warn("Failed to send batch:", p),
                  Object.assign(
                    Object.assign(
                      Object.assign(
                        {
                          success: !1,
                          statusCode: -1,
                          failurePath:
                            (d = c.path) !== null && d !== void 0 ? d : f,
                        },
                        c.errorMessage
                          ? { failureErrorMessage: c.errorMessage }
                          : {}
                      ),
                      c.diagnosticBucket
                        ? { failureDiagnosticBucket: c.diagnosticBucket }
                        : {}
                    ),
                    c.diagnosticMetadata
                      ? { failureDiagnosticMetadata: c.diagnosticMetadata }
                      : {}
                  )
                );
              }
            });
          }
          _sendEventsViaPost(l, h) {
            return t(this, void 0, void 0, function* () {
              var m, d;
              const f = yield this._network.post(this._getRequestData(l), h),
                c = (m = f?.code) !== null && m !== void 0 ? m : -1;
              return c === -1
                ? Object.assign(
                    Object.assign(
                      Object.assign(
                        {
                          success: !1,
                          statusCode: -1,
                          failurePath:
                            (d = h.path) !== null && d !== void 0
                              ? d
                              : f === void 0
                              ? "event_sender_post_returned_undefined"
                              : "event_sender_post_returned_null",
                        },
                        h.errorMessage
                          ? { failureErrorMessage: h.errorMessage }
                          : {}
                      ),
                      h.diagnosticBucket
                        ? { failureDiagnosticBucket: h.diagnosticBucket }
                        : {}
                    ),
                    h.diagnosticMetadata
                      ? { failureDiagnosticMetadata: h.diagnosticMetadata }
                      : {}
                  )
                : { success: c >= 200 && c < 300, statusCode: c };
            });
          }
          _sendEventsViaBeacon(l, h) {
            var m;
            const d = this._network.beacon(this._getRequestData(l), h);
            return Object.assign(
              Object.assign(
                Object.assign(
                  {
                    success: d,
                    statusCode: d ? 200 : -1,
                    failurePath: d
                      ? void 0
                      : (m = h.path) !== null && m !== void 0
                      ? m
                      : "beacon_send_false",
                  },
                  !d && h.errorMessage
                    ? { failureErrorMessage: h.errorMessage }
                    : {}
                ),
                !d && h.diagnosticBucket
                  ? { failureDiagnosticBucket: h.diagnosticBucket }
                  : {}
              ),
              !d && h.diagnosticMetadata
                ? { failureDiagnosticMetadata: h.diagnosticMetadata }
                : {}
            );
          }
          _getRequestData(l) {
            return {
              sdkKey: this._sdkKey,
              data: { events: l.events },
              urlConfig: this._logEventUrlConfig,
              retries: 3,
              preserveFailedStatusCode: !0,
              isCompressable: !0,
              params: { [n.NetworkParam.EventCount]: String(l.events.length) },
              headers: {
                "statsig-event-count": String(l.events.length),
                "statsig-retry-count": String(l.attempts),
                "statsig-sdk-type": i.SDKType._get(this._sdkKey),
                "statsig-sdk-version": a.SDK_VERSION,
              },
              credentials: "same-origin",
            };
          }
        };
      e.EventSender = o;
    }),
    Qc = D((e) => {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.FlushInterval = void 0);
      var t = 1e3,
        r = 6e4,
        n = class {
          constructor() {
            (this._currentIntervalMs = t),
              (this._lastFlushAttemptTime = Date.now());
          }
          getCurrentIntervalMs() {
            return this._currentIntervalMs;
          }
          markFlushAttempt() {
            this._lastFlushAttemptTime = Date.now();
          }
          getTimeSinceLastAttempt() {
            return Date.now() - this._lastFlushAttemptTime;
          }
          hasReachedMaxInterval() {
            return this.getTimeSinceLastAttempt() >= r;
          }
          getTimeTillMaxInterval() {
            return r - this.getTimeSinceLastAttempt();
          }
          hasCompletelyRecoveredFromBackoff() {
            return this._currentIntervalMs <= t;
          }
          adjustForSuccess() {
            const i = this._currentIntervalMs;
            i !== t &&
              (this._currentIntervalMs = Math.max(t, Math.floor(i / 2)));
          }
          adjustForFailure() {
            const i = this._currentIntervalMs;
            this._currentIntervalMs = Math.min(r, i * 2);
          }
          getTimeUntilNextFlush() {
            return this.getCurrentIntervalMs() - this.getTimeSinceLastAttempt();
          }
        };
      e.FlushInterval = n;
    }),
    eu = D((e) => {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.FlushType = void 0);
      var t;
      (function (r) {
        (r.ScheduledMaxTime = "scheduled:max_time"),
          (r.ScheduledFullBatch = "scheduled:full_batch"),
          (r.Limit = "limit"),
          (r.Manual = "manual"),
          (r.Shutdown = "shutdown");
      })(t || (e.FlushType = t = {}));
    }),
    tu = D((e) => {
      var t =
        (e && e.__awaiter) ||
        function (l, h, m, d) {
          function f(c) {
            return c instanceof m
              ? c
              : new m(function (p) {
                  p(c);
                });
          }
          return new (m || (m = Promise))(function (c, p) {
            function u(v) {
              try {
                w(d.next(v));
              } catch (S) {
                p(S);
              }
            }
            function g(v) {
              try {
                w(d.throw(v));
              } catch (S) {
                p(S);
              }
            }
            function w(v) {
              v.done ? c(v.value) : f(v.value).then(u, g);
            }
            w((d = d.apply(l, h || [])).next());
          });
        };
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e._fetchTxtRecords = void 0);
      var r = new Uint8Array([
          0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 13, 102, 101, 97, 116, 117, 114,
          101, 97, 115, 115, 101, 116, 115, 3, 111, 114, 103, 0, 0, 16, 0, 1,
        ]),
        n = "https://cloudflare-dns.com/dns-query",
        i = ["i", "e", "d"],
        a = 200;
      function s(l) {
        return t(this, void 0, void 0, function* () {
          const h = yield l(n, {
            method: "POST",
            headers: {
              "Content-Type": "application/dns-message",
              Accept: "application/dns-message",
            },
            body: r,
          });
          if (!h.ok) {
            const d = new Error("Failed to fetch TXT records from DNS");
            throw ((d.name = "DnsTxtFetchError"), d);
          }
          const m = yield h.arrayBuffer();
          return o(new Uint8Array(m));
        });
      }
      e._fetchTxtRecords = s;
      function o(l) {
        const h = l.findIndex(
          (d, f) =>
            f < a &&
            String.fromCharCode(d) === "=" &&
            i.includes(String.fromCharCode(l[f - 1]))
        );
        if (h === -1) {
          const d = new Error("Failed to parse TXT records from DNS");
          throw ((d.name = "DnsTxtParseError"), d);
        }
        let m = "";
        for (let d = h - 1; d < l.length; d++) m += String.fromCharCode(l[d]);
        return m.split(",");
      }
    }),
    Be = D((e) => {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e._setObjectInStorage = e._getObjectFromStorage = e.Storage = void 0);
      var t = ee(),
        r = Oe(),
        n = {},
        i = {
          isReady: () => !0,
          isReadyResolver: () => null,
          getProviderName: () => "InMemory",
          getItem: (d) => (n[d] ? n[d] : null),
          setItem: (d, f) => {
            n[d] = f;
          },
          removeItem: (d) => {
            delete n[d];
          },
          getAllKeys: () => Object.keys(n),
        },
        a = null;
      try {
        const d = (0, r._getWindowSafe)();
        d &&
          d.localStorage &&
          typeof d.localStorage.getItem == "function" &&
          (a = {
            isReady: () => !0,
            isReadyResolver: () => null,
            getProviderName: () => "LocalStorage",
            getItem: (f) => d.localStorage.getItem(f),
            setItem: (f, c) => d.localStorage.setItem(f, c),
            removeItem: (f) => d.localStorage.removeItem(f),
            getAllKeys: () => Object.keys(d.localStorage),
          });
      } catch {
        t.Log.warn("Failed to setup localStorageProvider.");
      }
      var s = a ?? i,
        o = s;
      function l(d) {
        try {
          return d();
        } catch (f) {
          if (f instanceof Error && f.name === "SecurityError")
            return e.Storage._setProvider(i), null;
          throw f;
        }
      }
      e.Storage = {
        isReady: () => o.isReady(),
        isReadyResolver: () => o.isReadyResolver(),
        getProviderName: () => o.getProviderName(),
        getItem: (d) => l(() => o.getItem(d)),
        setItem: (d, f) => l(() => o.setItem(d, f)),
        removeItem: (d) => o.removeItem(d),
        getAllKeys: () => o.getAllKeys(),
        _setProvider: (d) => {
          (s = d), (o = d);
        },
        _setDisabled: (d) => {
          d ? (o = i) : (o = s);
        },
      };
      function h(d) {
        const f = e.Storage.getItem(d);
        try {
          return JSON.parse(f ?? "null");
        } catch {
          return t.Log.error(`Failed to parse value for key "${d}"`), null;
        }
      }
      e._getObjectFromStorage = h;
      function m(d, f) {
        e.Storage.setItem(d, JSON.stringify(f));
      }
      e._setObjectInStorage = m;
    }),
    ru = D((e) => {
      var t =
        (e && e.__awaiter) ||
        function (p, u, g, w) {
          function v(S) {
            return S instanceof g
              ? S
              : new g(function (y) {
                  y(S);
                });
          }
          return new (g || (g = Promise))(function (S, y) {
            function T(C) {
              try {
                I(w.next(C));
              } catch (O) {
                y(O);
              }
            }
            function E(C) {
              try {
                I(w.throw(C));
              } catch (O) {
                y(O);
              }
            }
            function I(C) {
              C.done ? S(C.value) : v(C.value).then(T, E);
            }
            I((w = w.apply(p, u || [])).next());
          });
        };
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e._isDomainFailure = e.NetworkFallbackResolver = void 0);
      var r = tu(),
        n = nt(),
        i = ee(),
        a = Be(),
        s = 10080 * 60 * 1e3,
        o = 14400 * 1e3,
        l = class {
          constructor(p) {
            var u;
            (this._fallbackInfo = null),
              (this._errorBoundary = null),
              (this._dnsQueryCooldowns = {}),
              (this._networkOverrideFunc =
                (u = p.networkConfig) === null || u === void 0
                  ? void 0
                  : u.networkOverrideFunc);
          }
          setErrorBoundary(p) {
            this._errorBoundary = p;
          }
          tryBumpExpiryTime(p, u) {
            var g;
            const w =
              (g = this._fallbackInfo) === null || g === void 0
                ? void 0
                : g[u.endpoint];
            w &&
              ((w.expiryTime = Date.now() + s),
              d(
                p,
                Object.assign(Object.assign({}, this._fallbackInfo), {
                  [u.endpoint]: w,
                })
              ));
          }
          getActiveFallbackUrl(p, u) {
            var g, w;
            if (u.customUrl != null && u.fallbackUrls != null) return null;
            let v = this._fallbackInfo;
            v == null &&
              ((v = (g = f(p)) !== null && g !== void 0 ? g : {}),
              (this._fallbackInfo = v));
            const S = v[u.endpoint];
            return !S ||
              Date.now() >
                ((w = S.expiryTime) !== null && w !== void 0 ? w : 0) ||
              u.getChecksum() !== S.urlConfigChecksum
              ? (delete v[u.endpoint],
                (this._fallbackInfo = v),
                d(p, this._fallbackInfo),
                null)
              : S.url
              ? S.url
              : null;
          }
          tryFetchUpdatedFallbackInfo(p, u, g, w) {
            return t(this, void 0, void 0, function* () {
              var v, S;
              try {
                if (!h(g, w)) return !1;
                const y =
                    u.customUrl == null && u.fallbackUrls == null
                      ? yield this._tryFetchFallbackUrlsFromNetwork(u)
                      : u.fallbackUrls,
                  T = this._pickNewFallbackUrl(
                    (v = this._fallbackInfo) === null || v === void 0
                      ? void 0
                      : v[u.endpoint],
                    y
                  );
                return T
                  ? (this._updateFallbackInfoWithNewUrl(p, u, T), !0)
                  : !1;
              } catch (y) {
                return (
                  (S = this._errorBoundary) === null ||
                    S === void 0 ||
                    S.logError("tryFetchUpdatedFallbackInfo", y),
                  !1
                );
              }
            });
          }
          _updateFallbackInfoWithNewUrl(p, u, g) {
            var w, v, S;
            const y = {
                urlConfigChecksum: u.getChecksum(),
                url: g,
                expiryTime: Date.now() + s,
                previous: [],
              },
              T = u.endpoint,
              E =
                (w = this._fallbackInfo) === null || w === void 0
                  ? void 0
                  : w[T];
            E && y.previous.push(...E.previous),
              y.previous.length > 10 && (y.previous = []);
            const I =
              (S =
                (v = this._fallbackInfo) === null || v === void 0
                  ? void 0
                  : v[T]) === null || S === void 0
                ? void 0
                : S.url;
            I != null && y.previous.push(I),
              (this._fallbackInfo = Object.assign(
                Object.assign({}, this._fallbackInfo),
                { [T]: y }
              )),
              d(p, this._fallbackInfo);
          }
          _tryFetchFallbackUrlsFromNetwork(p) {
            return t(this, void 0, void 0, function* () {
              var u;
              const g = this._dnsQueryCooldowns[p.endpoint];
              if (g && Date.now() < g) return null;
              this._dnsQueryCooldowns[p.endpoint] = Date.now() + o;
              const w = [],
                v = yield (0, r._fetchTxtRecords)(
                  (u = this._networkOverrideFunc) !== null && u !== void 0
                    ? u
                    : fetch
                ),
                S = c(p.defaultUrl);
              for (const y of v) {
                if (!y.startsWith(p.endpointDnsKey + "=")) continue;
                const T = y.split("=");
                if (T.length > 1) {
                  let E = T[1];
                  E.endsWith("/") && (E = E.slice(0, -1)),
                    w.push(`https://${E}${S}`);
                }
              }
              return w;
            });
          }
          _pickNewFallbackUrl(p, u) {
            var g;
            if (u == null) return null;
            const w = new Set(
                (g = p?.previous) !== null && g !== void 0 ? g : []
              ),
              v = p?.url;
            let S = null;
            for (const y of u) {
              const T = y.endsWith("/") ? y.slice(0, -1) : y;
              if (!w.has(y) && T !== v) {
                S = T;
                break;
              }
            }
            return S;
          }
        };
      e.NetworkFallbackResolver = l;
      function h(p, u) {
        var g;
        const w = (g = p?.toLowerCase()) !== null && g !== void 0 ? g : "";
        return (
          u ||
          w.includes("uncaught exception") ||
          w.includes("failed to fetch") ||
          w.includes("networkerror when attempting to fetch resource")
        );
      }
      e._isDomainFailure = h;
      function m(p) {
        return `statsig.network_fallback.${(0, n._DJB2)(p)}`;
      }
      function d(p, u) {
        const g = m(p);
        if (!u || Object.keys(u).length === 0) {
          a.Storage.removeItem(g);
          return;
        }
        a.Storage.setItem(g, JSON.stringify(u));
      }
      function f(p) {
        const u = m(p),
          g = a.Storage.getItem(u);
        if (!g) return null;
        try {
          return JSON.parse(g);
        } catch {
          return i.Log.error("Failed to parse FallbackInfo"), null;
        }
      }
      function c(p) {
        try {
          return new URL(p).pathname;
        } catch {
          return null;
        }
      }
    }),
    Xa = D((e) => {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.SDKFlags = void 0);
      var t = {};
      e.SDKFlags = {
        setFlags: (r, n) => {
          t[r] = n;
        },
        get: (r, n) => {
          var i, a;
          return (a = (i = t[r]) === null || i === void 0 ? void 0 : i[n]) !==
            null && a !== void 0
            ? a
            : !1;
        },
      };
    }),
    Bn = D((e) => {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.getUUID = void 0);
      function t() {
        if (typeof crypto < "u" && typeof crypto.randomUUID == "function")
          return crypto.randomUUID();
        let r = new Date().getTime(),
          n =
            (typeof performance < "u" &&
              performance.now &&
              performance.now() * 1e3) ||
            0;
        return `xxxxxxxx-xxxx-4xxx-${
          "89ab"[Math.floor(Math.random() * 4)]
        }xxx-xxxxxxxxxxxx`.replace(/[xy]/g, (i) => {
          let a = Math.random() * 16;
          return (
            r > 0
              ? ((a = (r + a) % 16 | 0), (r = Math.floor(r / 16)))
              : ((a = (n + a) % 16 | 0), (n = Math.floor(n / 16))),
            (i === "x" ? a : (a & 7) | 8).toString(16)
          );
        });
      }
      e.getUUID = t;
    }),
    Dt = D((e) => {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.StatsigSession = e.SessionID = void 0);
      var t = Sr(),
        r = ee(),
        n = Be(),
        i = Bn(),
        a = Lt(),
        s = 1800 * 1e3,
        o = 14400 * 1e3,
        l = 15e3,
        h = {};
      (0, a._subscribeToVisiblityChanged)((y) => {
        y === "background" && Object.values(h).forEach((T) => u(T));
      }),
        (e.SessionID = { get: (y) => e.StatsigSession.get(y).data.sessionID }),
        (e.StatsigSession = {
          get: (y, T = !0) => {
            h[y] == null && (h[y] = v(y));
            const E = h[y];
            return m(E, T);
          },
          overrideInitialSessionID: (y, T) => {
            const E = Date.now(),
              I = {
                data: { sessionID: y, startTime: E, lastUpdate: E },
                sdkKey: T,
                lastPersistedAt: Date.now(),
                storageKey: p(T),
              };
            u(I), (h[T] = I);
          },
          checkForIdleSession: (y) => {
            const T = h[y];
            T && d(T) && u(T);
          },
        });
      function m(y, T) {
        const E = Date.now();
        return d(y) ? u(y) : T && ((y.data.lastUpdate = E), g(y)), y;
      }
      function d(y) {
        var T;
        const E = y.data,
          I = f(E) || c(E);
        return (
          I &&
            ((y.data = S()),
            (T =
              __STATSIG__ == null ? void 0 : __STATSIG__.instance(y.sdkKey)) ===
              null ||
              T === void 0 ||
              T.$emt({ name: "session_expired" })),
          I
        );
      }
      function f({ lastUpdate: y }) {
        return Date.now() - y > s;
      }
      function c({ startTime: y }) {
        return Date.now() - y > o;
      }
      function p(y) {
        return `statsig.session_id.${(0, t._getStorageKey)(y)}`;
      }
      function u(y) {
        try {
          (0, n._setObjectInStorage)(y.storageKey, y.data),
            (y.lastPersistedAt = Date.now());
        } catch {
          r.Log.warn("Failed to save SessionID");
        }
      }
      function g(y) {
        Date.now() - y.lastPersistedAt > l && u(y);
      }
      function w(y) {
        return (0, n._getObjectFromStorage)(y);
      }
      function v(y) {
        const T = p(y),
          E = w(T);
        return E && E.sessionID && E.startTime && E.lastUpdate
          ? { data: E, sdkKey: y, lastPersistedAt: 0, storageKey: T }
          : { data: S(), sdkKey: y, lastPersistedAt: 0, storageKey: T };
      }
      function S() {
        return {
          sessionID: (0, i.getUUID)(),
          startTime: Date.now(),
          lastUpdate: Date.now(),
        };
      }
    }),
    xt = D((e) => {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.getCookieName = e.StableID = void 0);
      var t = Sr(),
        r = ee(),
        n = Oe(),
        i = Be(),
        a = Bn(),
        s = {},
        o = {},
        l = {};
      e.StableID = {
        cookiesEnabled: !1,
        randomID: Math.random().toString(36),
        get: (u) => {
          if (l[u]) return null;
          if (s[u] != null) return s[u];
          let g = null;
          return (
            (g = f(u)),
            g != null
              ? ((s[u] = g), m(g, u), g)
              : ((g = d(u)),
                g == null && (g = (0, a.getUUID)()),
                m(g, u),
                c(g, u),
                (s[u] = g),
                g)
          );
        },
        setOverride: (u, g) => {
          (s[g] = u), m(u, g), c(u, g);
        },
        _setCookiesEnabled: (u, g) => {
          o[u] = g;
        },
        _setDisabled: (u, g) => {
          l[u] = g;
        },
      };
      function h(u) {
        return `statsig.stable_id.${(0, t._getStorageKey)(u)}`;
      }
      function m(u, g) {
        const w = h(g);
        try {
          (0, i._setObjectInStorage)(w, u);
        } catch {
          r.Log.warn("Failed to save StableID to storage");
        }
      }
      function d(u) {
        const g = h(u);
        return (0, i._getObjectFromStorage)(g);
      }
      function f(u) {
        if (!o[u] || (0, n._getDocumentSafe)() == null) return null;
        const g = document.cookie.split(";");
        for (const w of g) {
          const [v, S] = w.trim().split("=");
          if (v === p(u)) return decodeURIComponent(S);
        }
        return null;
      }
      function c(u, g) {
        if (!o[g] || (0, n._getDocumentSafe)() == null) return;
        const w = new Date();
        w.setFullYear(w.getFullYear() + 1),
          (document.cookie = `${p(g)}=${encodeURIComponent(
            u
          )}; expires=${w.toUTCString()}; path=/`);
      }
      function p(u) {
        return `statsig.stable_id.${(0, t._getStorageKey)(u)}`;
      }
      e.getCookieName = p;
    }),
    Ya = D((e) => {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.ErrorTag = void 0),
        (e.ErrorTag = { NetworkError: "NetworkError" });
    }),
    Nt = D((e) => {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.LoggingEnabledOption = e.LogEventCompressionMode = void 0),
        (e.LogEventCompressionMode = {
          Disabled: "d",
          Enabled: "e",
          Forced: "f",
        }),
        (e.LoggingEnabledOption = {
          disabled: "disabled",
          browserOnly: "browser-only",
          always: "always",
        });
    }),
    Qa = D((e) => {
      var t =
        (e && e.__awaiter) ||
        function (A, P, B, q) {
          function X(Z) {
            return Z instanceof B
              ? Z
              : new B(function (ue) {
                  ue(Z);
                });
          }
          return new (B || (B = Promise))(function (Z, ue) {
            function pe(ne) {
              try {
                ve(q.next(ne));
              } catch (oe) {
                ue(oe);
              }
            }
            function Se(ne) {
              try {
                ve(q.throw(ne));
              } catch (oe) {
                ue(oe);
              }
            }
            function ve(ne) {
              ne.done ? Z(ne.value) : X(ne.value).then(pe, Se);
            }
            ve((q = q.apply(A, P || [])).next());
          });
        };
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.NetworkCore = e.RETRYABLE_CODES = void 0),
        rt();
      var r = rt(),
        n = Nn(),
        i = ee(),
        a = Pt(),
        s = ru(),
        o = Xa(),
        l = Tr(),
        h = Oe(),
        m = Dt(),
        d = xt(),
        f = Ya(),
        c = Mt(),
        p = Nt(),
        u = Lt(),
        g = 1e4,
        w = 500,
        v = 3e4,
        S = 1e3,
        y = 50,
        T = y / S;
      e.RETRYABLE_CODES = new Set([408, 500, 502, 503, 504, 522, 524, 599]);
      var E = class {
        constructor(A, P) {
          (this._emitter = P),
            (this._errorBoundary = null),
            (this._timeout = g),
            (this._netConfig = {}),
            (this._options = {}),
            (this._leakyBucket = {}),
            (this._lastUsedInitUrl = null),
            A && (this._options = A),
            this._options.networkConfig &&
              (this._netConfig = this._options.networkConfig),
            this._netConfig.networkTimeoutMs &&
              (this._timeout = this._netConfig.networkTimeoutMs),
            (this._fallbackResolver = new s.NetworkFallbackResolver(
              this._options
            )),
            this.setLogEventCompressionMode(
              this._getLogEventCompressionMode(A)
            );
        }
        setLogEventCompressionMode(A) {
          this._options.logEventCompressionMode = A;
        }
        setErrorBoundary(A) {
          (this._errorBoundary = A),
            this._errorBoundary.wrap(this),
            this._errorBoundary.wrap(this._fallbackResolver),
            this._fallbackResolver.setErrorBoundary(A);
        }
        isBeaconSupported() {
          return (
            typeof navigator < "u" && typeof navigator.sendBeacon == "function"
          );
        }
        getLastUsedInitUrlAndReset() {
          const A = this._lastUsedInitUrl;
          return (this._lastUsedInitUrl = null), A;
        }
        beacon(A, P) {
          if (!I(A)) return P && (P.path = "beacon_invalid_sdk_key"), !1;
          const B = this._getInternalRequestArgs("POST", A),
            q = this._getPopulatedURL(B),
            X = navigator;
          try {
            const Z = X.sendBeacon.bind(X)(q, B.body);
            return Z || (P && (P.path = "beacon_send_false")), Z;
          } catch (Z) {
            throw (P && (P.path = "beacon_send_exception"), Z);
          }
        }
        post(A, P) {
          return t(this, void 0, void 0, function* () {
            const B = this._getInternalRequestArgs("POST", A);
            return (
              this._tryEncodeBody(B),
              yield this._tryToCompressBody(B),
              this._sendRequest(B, P)
            );
          });
        }
        get(A) {
          const P = this._getInternalRequestArgs("GET", A);
          return this._sendRequest(P);
        }
        _sendRequest(A, P) {
          return t(this, void 0, void 0, function* () {
            var B, q, X, Z;
            if (!I(A)) return P && (P.path = "network_invalid_sdk_key"), null;
            if (this._netConfig.preventAllNetworkTraffic)
              return (
                P && (P.path = "network_prevent_all_network_traffic"), null
              );
            const { method: ue, body: pe, retries: Se, attempt: ve } = A,
              ne = A.urlConfig.endpoint;
            if (this._isRateLimited(ne))
              return (
                i.Log.warn(
                  `Request to ${ne} was blocked because you are making requests too frequently.`
                ),
                P && (P.path = "network_rate_limited"),
                null
              );
            const oe = ve ?? 1;
            let Ue = !1;
            const et = this._getPopulatedURL(A),
              Cn = Date.now();
            let ae = null;
            const Pa = (0, u._isUnloading)();
            try {
              const tt = {
                method: ue,
                body: pe,
                headers: Object.assign({}, A.headers),
                priority: A.priority,
                keepalive: Pa,
              };
              gt(A, oe);
              const we = this._leakyBucket[ne];
              we &&
                ((we.lastRequestTime = Date.now()),
                (this._leakyBucket[ne] = we));
              const me =
                (B = this._netConfig.networkOverrideFunc) !== null &&
                B !== void 0
                  ? B
                  : fetch;
              let ur;
              if (
                ((ae = yield Promise.race([
                  me(et, tt).finally(() => clearTimeout(ur)),
                  new Promise((Rt, kn) => {
                    ur = setTimeout(() => {
                      (Ue = !0),
                        kn(new Error(`Timeout of ${this._timeout}ms expired.`));
                    }, this._timeout);
                  }),
                ])),
                !ae.ok)
              ) {
                const Rt = yield ae.text().catch(() => "No Text"),
                  kn = new Error(`NetworkError: ${et} ${Rt}`);
                throw ((kn.name = "NetworkError"), kn);
              }
              const dr = yield ae.text();
              return (
                In(A, ae, oe, dr),
                this._fallbackResolver.tryBumpExpiryTime(A.sdkKey, A.urlConfig),
                { body: dr, code: ae.status, headers: ae.headers }
              );
            } catch (tt) {
              const we = $(tt),
                me = G(we ?? "", Ue);
              In(A, ae, oe, "", tt);
              let ur = !1;
              if (
                (A.skipInitTracking !== !0 &&
                  (ur =
                    yield this._fallbackResolver.tryFetchUpdatedFallbackInfo(
                      A.sdkKey,
                      A.urlConfig,
                      we,
                      me
                    )),
                ur &&
                  (A.fallbackUrl = this._fallbackResolver.getActiveFallbackUrl(
                    A.sdkKey,
                    A.urlConfig
                  )),
                !Se ||
                  oe > Se ||
                  !e.RETRYABLE_CODES.has(
                    (q = ae?.status) !== null && q !== void 0 ? q : 500
                  ))
              ) {
                const dr = `A networking error occurred during ${ue} request to ${et}.`;
                if (
                  (i.Log.error(dr, we, tt),
                  A.skipInitTracking !== !0 &&
                    ((X = this._emitter) === null ||
                      X === void 0 ||
                      X.call(this, {
                        name: "error",
                        error: tt,
                        tag: f.ErrorTag.NetworkError,
                        requestArgs: A,
                      }),
                    (Z = this._errorBoundary) === null ||
                      Z === void 0 ||
                      Z.attachErrorIfNoneExists(dr)),
                  A.preserveFailedStatusCode && ae != null)
                )
                  return { body: null, code: ae.status };
                if (ae == null && P) {
                  (P.path = me
                    ? "network_request_timed_out_no_response"
                    : "network_request_exception_no_response"),
                    we && (P.errorMessage = we);
                  try {
                    const Rt = ce(A, et, me, Date.now() - Cn);
                    (P.diagnosticBucket = Rt.bucket),
                      (P.diagnosticMetadata = Rt.metadata);
                  } catch {}
                }
                return null;
              }
              return (
                yield An(oe),
                this._sendRequest(
                  Object.assign(Object.assign({}, A), {
                    retries: Se,
                    attempt: oe + 1,
                  }),
                  P
                )
              );
            }
          });
        }
        _getLogEventCompressionMode(A) {
          let P = A?.logEventCompressionMode;
          return (
            !P &&
              A?.disableCompression === !0 &&
              (P = p.LogEventCompressionMode.Disabled),
            P || (P = p.LogEventCompressionMode.Enabled),
            P
          );
        }
        _isRateLimited(A) {
          var P;
          const B = Date.now(),
            q =
              (P = this._leakyBucket[A]) !== null && P !== void 0
                ? P
                : { count: 0, lastRequestTime: B },
            X = B - q.lastRequestTime,
            Z = Math.floor(X * T);
          return (
            (q.count = Math.max(0, q.count - Z)),
            q.count >= y
              ? !0
              : ((q.count += 1),
                (q.lastRequestTime = B),
                (this._leakyBucket[A] = q),
                !1)
          );
        }
        _getPopulatedURL(A) {
          var P;
          const B =
            (P = A.fallbackUrl) !== null && P !== void 0
              ? P
              : A.urlConfig.getUrl();
          A.skipInitTracking !== !0 &&
            (A.urlConfig.endpoint === a.Endpoint._initialize ||
              A.urlConfig.endpoint === a.Endpoint._download_config_specs) &&
            (this._lastUsedInitUrl = B);
          const q = Object.assign(
              {
                [a.NetworkParam.SdkKey]: A.sdkKey,
                [a.NetworkParam.SdkType]: l.SDKType._get(A.sdkKey),
                [a.NetworkParam.SdkVersion]: c.SDK_VERSION,
                [a.NetworkParam.Time]: String(Date.now()),
                [a.NetworkParam.SessionID]: m.SessionID.get(A.sdkKey),
              },
              A.params
            ),
            X = Object.keys(q)
              .map(
                (Z) => `${encodeURIComponent(Z)}=${encodeURIComponent(q[Z])}`
              )
              .join("&");
          return `${B}${X ? `?${X}` : ""}`;
        }
        _tryEncodeBody(A) {
          var P;
          const B = (0, h._getWindowSafe)(),
            q = A.body;
          if (
            !(
              !A.isStatsigEncodable ||
              this._options.disableStatsigEncoding ||
              typeof q != "string" ||
              (0, r._getStatsigGlobalFlag)("no-encode") != null ||
              !B?.btoa
            )
          )
            try {
              (A.body = B.btoa(q).split("").reverse().join("")),
                (A.params = Object.assign(
                  Object.assign(
                    {},
                    (P = A.params) !== null && P !== void 0 ? P : {}
                  ),
                  { [a.NetworkParam.StatsigEncoded]: "1" }
                ));
            } catch (X) {
              i.Log.warn(
                `Request encoding failed for ${A.urlConfig.getUrl()}`,
                X
              );
            }
        }
        _tryToCompressBody(A) {
          return t(this, void 0, void 0, function* () {
            var P;
            const B = A.body;
            if (!(typeof B != "string" || !O(A, this._options)))
              try {
                const q = new TextEncoder().encode(B),
                  X = new CompressionStream("gzip"),
                  Z = X.writable.getWriter();
                Z.write(q).catch(i.Log.error), Z.close().catch(i.Log.error);
                const ue = X.readable.getReader(),
                  pe = [];
                let Se;
                for (; !(Se = yield ue.read()).done; ) pe.push(Se.value);
                const ve = pe.reduce((Ue, et) => Ue + et.length, 0),
                  ne = new Uint8Array(ve);
                let oe = 0;
                for (const Ue of pe) ne.set(Ue, oe), (oe += Ue.length);
                (A.body = ne),
                  (A.params = Object.assign(
                    Object.assign(
                      {},
                      (P = A.params) !== null && P !== void 0 ? P : {}
                    ),
                    { [a.NetworkParam.IsGzipped]: "1" }
                  ));
              } catch (q) {
                i.Log.warn(
                  `Request compression failed for ${A.urlConfig.getUrl()}`,
                  q
                );
              }
          });
        }
        _getInternalRequestArgs(A, P) {
          const B = this._fallbackResolver.getActiveFallbackUrl(
              P.sdkKey,
              P.urlConfig
            ),
            q = Object.assign(Object.assign({}, P), {
              method: A,
              fallbackUrl: B,
            });
          return "data" in P && C(q, P.data), q;
        }
      };
      e.NetworkCore = E;
      var I = (A) =>
          A.sdkKey
            ? !0
            : (i.Log.warn("Unable to make request without an SDK key"), !1),
        C = (A, P) => {
          const { sdkKey: B, fallbackUrl: q } = A,
            X = d.StableID.get(B),
            Z = m.SessionID.get(B),
            ue = l.SDKType._get(B);
          A.body = JSON.stringify(
            Object.assign(Object.assign({}, P), {
              statsigMetadata: Object.assign(
                Object.assign({}, c.StatsigMetadataProvider.get()),
                { stableID: X, sessionID: Z, sdkType: ue, fallbackUrl: q }
              ),
            })
          );
        };
      function O(A, P) {
        if (
          !A.isCompressable ||
          (0, r._getStatsigGlobalFlag)("no-compress") != null ||
          typeof CompressionStream > "u" ||
          typeof TextEncoder > "u"
        )
          return !1;
        const B =
            A.urlConfig.customUrl != null || A.urlConfig.fallbackUrls != null,
          q = o.SDKFlags.get(A.sdkKey, "enable_log_event_compression") === !0;
        switch (P.logEventCompressionMode) {
          case p.LogEventCompressionMode.Disabled:
            return !1;
          case p.LogEventCompressionMode.Enabled:
            return !(B && !q);
          case p.LogEventCompressionMode.Forced:
            return !0;
          default:
            return !1;
        }
      }
      function $(A) {
        return typeof A == "string"
          ? A
          : A instanceof Error
          ? `${A.name}: ${A.message}`
          : "Unknown Error";
      }
      function G(A, P) {
        return A.includes("Timeout") || P;
      }
      function ce(A, P, B, q) {
        var X, Z, ue;
        const pe = (0, h._getWindowSafe)(),
          Se = pe?.document,
          ve = typeof navigator < "u" ? navigator : null,
          ne = (0, u._isUnloading)(),
          oe =
            ve && typeof ve.onLine == "boolean" ? String(ve.onLine) : "unknown",
          Ue =
            (X = Se?.visibilityState) !== null && X !== void 0 ? X : "unknown",
          et =
            Object.keys((Z = A.headers) !== null && Z !== void 0 ? Z : {})
              .length > 0,
          Cn = ye(
            P,
            (ue = pe?.location) === null || ue === void 0 ? void 0 : ue.origin
          ),
          ae = A.urlConfig.customUrl != null,
          Pa = A.fallbackUrl != null,
          tt = Q(q, [250, 1e3, 5e3, 1e4]),
          we = Q(fe(A.body), [16384, 65536, 262144, 1048576]);
        let me = "unknown_no_response";
        return (
          B
            ? (me = "timeout")
            : oe === "false"
            ? (me = "browser_offline")
            : ne
            ? (me = "page_unloading")
            : Ue === "hidden"
            ? (me = "page_hidden")
            : Cn && et
            ? (me = "cross_origin_custom_headers_preflight_risk")
            : ae || Pa
            ? (me = "custom_url_no_response")
            : q < 250 && (me = "immediate_network_rejection"),
          {
            bucket: me,
            metadata: {
              elapsedMsBucket: tt,
              bodySizeBucket: we,
              online: oe,
              visibilityState: Ue,
              isUnloading: String(ne),
              crossOrigin: String(Cn),
              hasCustomUrl: String(ae),
            },
          }
        );
      }
      function ye(A, P) {
        return P
          ? !A.startsWith(`${P}/`) && !A.startsWith(`${P}?`) && A !== P
          : !0;
      }
      function fe(A) {
        return A == null
          ? 0
          : typeof A == "string"
          ? A.length
          : A instanceof Uint8Array
          ? A.byteLength
          : typeof Blob < "u" && A instanceof Blob
          ? A.size
          : -1;
      }
      function Q(A, P) {
        if (A < 0) return "unknown";
        for (const B of P) if (A < B) return `<${B}`;
        return `>=${P[P.length - 1]}`;
      }
      function gt(A, P) {
        A.skipInitTracking === !0 ||
          A.urlConfig.endpoint !== a.Endpoint._initialize ||
          n.Diagnostics._markInitNetworkReqStart(A.sdkKey, { attempt: P });
      }
      function In(A, P, B, q, X) {
        A.skipInitTracking === !0 ||
          A.urlConfig.endpoint !== a.Endpoint._initialize ||
          n.Diagnostics._markInitNetworkReqEnd(
            A.sdkKey,
            n.Diagnostics._getDiagnosticsData(P, B, q, X)
          );
      }
      function An(A) {
        return t(this, void 0, void 0, function* () {
          yield new Promise((P) => setTimeout(P, Math.min(w * (A * A), v)));
        });
      }
    }),
    nu = D((e) => {
      var t =
        (e && e.__awaiter) ||
        function (u, g, w, v) {
          function S(y) {
            return y instanceof w
              ? y
              : new w(function (T) {
                  T(y);
                });
          }
          return new (w || (w = Promise))(function (y, T) {
            function E(O) {
              try {
                C(v.next(O));
              } catch ($) {
                T($);
              }
            }
            function I(O) {
              try {
                C(v.throw(O));
              } catch ($) {
                T($);
              }
            }
            function C(O) {
              O.done ? y(O.value) : S(O.value).then(E, I);
            }
            C((v = v.apply(u, g || [])).next());
          });
        };
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.FlushCoordinator = void 0);
      var r = Un(),
        n = Yc(),
        i = Qc(),
        a = eu(),
        s = nt(),
        o = ee(),
        l = Qa(),
        h = Oe(),
        m = Dt(),
        d = Nt(),
        f = Be(),
        c = new Set([
          "network_request_timed_out_no_response",
          "network_request_exception_no_response",
          "event_sender_post_returned_null",
          "event_sender_post_returned_undefined",
          "event_sender_post_exception",
        ]),
        p = class {
          constructor(u, g, w, v, S, y, T, E, I, C) {
            (this._cooldownTimer = null),
              (this._maxIntervalTimer = null),
              (this._hasRunQuickFlush = !1),
              (this._currentFlushPromise = null),
              (this._creationTime = Date.now()),
              (this._isShuttingDown = !1),
              (this._storageKey = null),
              (this._flushInterval = new i.FlushInterval()),
              (this._batchQueue = u),
              (this._pendingEvents = g),
              (this._onPrepareFlush = w),
              (this._errorBoundary = C),
              (this._sdkKey = v),
              (this._loggingEnabled = I),
              (this._eventSender = new n.EventSender(v, S, y, T, E));
          }
          setLoggingEnabled(u) {
            this._loggingEnabled = u;
          }
          setLogEventCompressionMode(u) {
            this._eventSender.setLogEventCompressionMode(u);
          }
          startScheduledFlushCycle() {
            this._scheduleNextFlush();
          }
          stopScheduledFlushCycle() {
            this._clearAllTimers();
          }
          addEvent(u) {
            this._pendingEvents.addToPendingEventsQueue(u),
              !this._currentFlushPromise &&
                this._pendingEvents.hasEventsForFullBatch() &&
                this.processLimitFlush();
          }
          processManualFlush() {
            return t(this, void 0, void 0, function* () {
              return (
                this._currentFlushPromise && (yield this._currentFlushPromise),
                (this._currentFlushPromise = this._executeFlush(
                  a.FlushType.Manual
                ).finally(() => {
                  (this._currentFlushPromise = null), this._scheduleNextFlush();
                })),
                this._currentFlushPromise
              );
            });
          }
          processShutdown() {
            return t(this, void 0, void 0, function* () {
              return (
                (this._isShuttingDown = !0),
                this._clearAllTimers(),
                this._currentFlushPromise && (yield this._currentFlushPromise),
                (this._currentFlushPromise = this._executeFlush(
                  a.FlushType.Shutdown
                )
                  .catch((u) => {
                    o.Log.error(`Error during shutdown flush: ${u}`);
                  })
                  .finally(() => {
                    this._currentFlushPromise = null;
                  })),
                this._currentFlushPromise
              );
            });
          }
          _executeFlush(u) {
            return t(this, void 0, void 0, function* () {
              this._clearAllTimers();
              try {
                this._prepareQueueForFlush(u);
                const g = this._batchQueue.takeAllBatches();
                if (g.length === 0) return;
                yield Promise.all(g.map((w) => this._processOneBatch(w, u)));
              } finally {
                this._isShuttingDown || this._scheduleNextFlush();
              }
            });
          }
          checkQuickFlush() {
            this._hasRunQuickFlush ||
              Date.now() - this._creationTime >
                r.EventRetryConstants.QUICK_FLUSH_WINDOW_MS ||
              ((this._hasRunQuickFlush = !0),
              setTimeout(() => {
                this.processManualFlush().catch((u) => {
                  o.Log.warn("Quick flush failed:", u);
                });
              }, r.EventRetryConstants.QUICK_FLUSH_WINDOW_MS));
          }
          _attemptScheduledFlush() {
            if (this._currentFlushPromise) {
              this._scheduleNextFlush();
              return;
            }
            const u = this.containsAtLeastOneFullBatch(),
              g = this._flushInterval.hasReachedMaxInterval();
            if (!u && !g) {
              this._scheduleNoopPollTick();
              return;
            }
            this._flushInterval.markFlushAttempt();
            let w;
            u
              ? (w = a.FlushType.ScheduledFullBatch)
              : (w = a.FlushType.ScheduledMaxTime),
              (this._currentFlushPromise = this._processNextBatch(w)
                .then(() => {})
                .catch((v) => {
                  o.Log.error("Error during scheduled flush:", v);
                })
                .finally(() => {
                  (this._currentFlushPromise = null), this._scheduleNextFlush();
                }));
          }
          processLimitFlush() {
            this._flushInterval.hasCompletelyRecoveredFromBackoff() &&
              (this._currentFlushPromise ||
                (this._currentFlushPromise = this._processLimitFlushInternal()
                  .catch((u) => {
                    o.Log.error("Error during limit flush", u);
                  })
                  .finally(() => {
                    (this._currentFlushPromise = null),
                      this._scheduleNextFlush();
                  })));
          }
          _processLimitFlushInternal() {
            return t(this, void 0, void 0, function* () {
              if (yield this._processNextBatch(a.FlushType.Limit))
                for (
                  ;
                  this._flushInterval.hasCompletelyRecoveredFromBackoff() &&
                  this.containsAtLeastOneFullBatch() &&
                  (yield this._processNextBatch(a.FlushType.Limit));

                );
            });
          }
          _scheduleNextFlush() {
            if ((this._clearAllTimers(), this._isShuttingDown)) return;
            const u = Math.max(0, this._flushInterval.getTimeUntilNextFlush());
            this._cooldownTimer = setTimeout(() => {
              (this._cooldownTimer = null),
                m.StatsigSession.checkForIdleSession(this._sdkKey),
                this._attemptScheduledFlush();
            }, u);
            const g = Math.max(0, this._flushInterval.getTimeTillMaxInterval());
            this._maxIntervalTimer = setTimeout(() => {
              (this._maxIntervalTimer = null),
                m.StatsigSession.checkForIdleSession(this._sdkKey),
                this._attemptScheduledFlush();
            }, g);
          }
          _clearAllTimers() {
            this._cooldownTimer !== null &&
              (clearTimeout(this._cooldownTimer), (this._cooldownTimer = null)),
              this._maxIntervalTimer !== null &&
                (clearTimeout(this._maxIntervalTimer),
                (this._maxIntervalTimer = null));
          }
          _scheduleNoopPollTick() {
            if ((this._clearAllTimers(), this._isShuttingDown)) return;
            this._cooldownTimer = setTimeout(() => {
              (this._cooldownTimer = null),
                m.StatsigSession.checkForIdleSession(this._sdkKey),
                this._attemptScheduledFlush();
            }, r.EventRetryConstants.TICK_INTERVAL_MS);
            const u = Math.max(0, this._flushInterval.getTimeTillMaxInterval());
            this._maxIntervalTimer = setTimeout(() => {
              (this._maxIntervalTimer = null),
                m.StatsigSession.checkForIdleSession(this._sdkKey),
                this._attemptScheduledFlush();
            }, u);
          }
          _processNextBatch(u) {
            return t(this, void 0, void 0, function* () {
              this._prepareQueueForFlush(u);
              const g = this._batchQueue.takeNextBatch();
              return g ? this._processOneBatch(g, u) : !1;
            });
          }
          _processOneBatch(u, g) {
            return t(this, void 0, void 0, function* () {
              if (
                this._loggingEnabled !== d.LoggingEnabledOption.always &&
                (0, h._isServerEnv)()
              )
                return this._flushInterval.adjustForSuccess(), !0;
              const w = yield this._eventSender.sendBatch(u);
              return w.success
                ? (this._flushInterval.adjustForSuccess(), !0)
                : (this._flushInterval.adjustForFailure(),
                  this._handleFailure(
                    u,
                    g,
                    w.statusCode,
                    w.failurePath,
                    w.failureErrorMessage,
                    w.failureDiagnosticBucket,
                    w.failureDiagnosticMetadata
                  ),
                  !1);
            });
          }
          _prepareQueueForFlush(u) {
            this._onPrepareFlush();
            const g = this.convertPendingEventsToBatches();
            g > 0 &&
              (o.Log.warn(`Dropped ${g} events`),
              this._errorBoundary.logDroppedEvents(
                g,
                "Batch queue limit reached during batching",
                {
                  loggingInterval: this._flushInterval.getCurrentIntervalMs(),
                  batchSize: this._batchQueue.batchSize(),
                  maxPendingBatches: r.EventRetryConstants.MAX_PENDING_BATCHES,
                  flushType: u,
                  retries: "dropped before batching",
                }
              ));
          }
          containsAtLeastOneFullBatch() {
            return (
              this._pendingEvents.hasEventsForFullBatch() ||
              this._batchQueue.hasFullBatch()
            );
          }
          convertPendingEventsToBatches() {
            if (this._pendingEvents.isEmpty()) return 0;
            const u = this._pendingEvents.takeAll();
            return this._batchQueue.createBatches(u);
          }
          _isRetryableBatch(u, g) {
            return !!(l.RETRYABLE_CODES.has(u) || (u === -1 && g && c.has(g)));
          }
          _handleFailure(u, g, w, v, S, y, T) {
            if (g === a.FlushType.Shutdown) {
              o.Log.warn(
                `${g} flush failed during shutdown. ${u.events.length} event(s) will be saved to storage for retry in next session.`
              ),
                this._saveShutdownFailedEventsToStorage(u.events);
              return;
            }
            if (!this._isRetryableBatch(w, v)) {
              const I = "non-retryable error";
              o.Log.warn(
                `${g} flush failed after ${u.attempts} attempt(s). ${u.events.length} event(s) will be dropped. Non-retryable error: ${w}`
              ),
                this._errorBoundary.logEventRequestFailure(
                  u.events.length,
                  I,
                  g,
                  w,
                  u.attempts,
                  v,
                  S,
                  y,
                  T
                );
              return;
            }
            if (u.attempts >= r.EventRetryConstants.MAX_RETRY_ATTEMPTS) {
              const I = "max retry attempts exceeded";
              o.Log.warn(
                `${g} flush failed after ${u.attempts} attempt(s). ${u.events.length} event(s) will be dropped.`
              ),
                this._errorBoundary.logEventRequestFailure(
                  u.events.length,
                  I,
                  g,
                  w,
                  u.attempts,
                  v,
                  S,
                  y,
                  T
                );
              return;
            }
            u.incrementAttempts();
            const E = this._batchQueue.requeueBatch(u);
            E > 0 &&
              (o.Log.warn(
                `Failed to requeue batch : dropped ${E} events due to full queue`
              ),
              this._errorBoundary.logDroppedEvents(
                E,
                "Batch queue limit reached during requeue",
                {
                  loggingInterval: this._flushInterval.getCurrentIntervalMs(),
                  batchSize: this._batchQueue.batchSize(),
                  maxPendingBatches: r.EventRetryConstants.MAX_PENDING_BATCHES,
                  flushType: g,
                  retries: u.attempts,
                }
              ));
          }
          loadAndRetryShutdownFailedEvents() {
            return t(this, void 0, void 0, function* () {
              const u = this._getStorageKey();
              try {
                f.Storage.isReady() || (yield f.Storage.isReadyResolver());
                const g = this._getShutdownFailedEventsFromStorage(u);
                if (g.length === 0) return;
                o.Log.debug(
                  `Loading ${g.length} failed shutdown event(s) from storage for retry`
                ),
                  f.Storage.removeItem(u),
                  g.forEach((w) => {
                    this.addEvent(w);
                  }),
                  yield this.processManualFlush();
              } catch (g) {
                o.Log.warn(
                  "Failed to load and retry failed shutdown events:",
                  g
                );
              }
            });
          }
          _getStorageKey() {
            return (
              this._storageKey ||
                (this._storageKey = `statsig.failed_shutdown_events.${(0,
                s._DJB2)(this._sdkKey)}`),
              this._storageKey
            );
          }
          _saveShutdownFailedEventsToStorage(u) {
            const g = this._getStorageKey();
            try {
              let w = [...this._getShutdownFailedEventsFromStorage(g), ...u];
              w.length > r.EventRetryConstants.MAX_LOCAL_STORAGE &&
                (w = w.slice(-r.EventRetryConstants.MAX_LOCAL_STORAGE)),
                (0, f._setObjectInStorage)(g, w),
                o.Log.debug(
                  `Saved ${u.length} failed shutdown event(s) to storage (total stored: ${w.length})`
                );
            } catch (w) {
              o.Log.warn(
                "Unable to save failed shutdown events to storage:",
                w
              );
            }
          }
          _getShutdownFailedEventsFromStorage(u) {
            try {
              const g = (0, f._getObjectFromStorage)(u);
              return Array.isArray(g) ? g : [];
            } catch {
              return [];
            }
          }
        };
      e.FlushCoordinator = p;
    }),
    iu = D((e) => {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.PendingEvents = void 0);
      var t = ee(),
        r = class {
          constructor(n) {
            (this._pendingEvents = []), (this._batchSize = n);
          }
          addToPendingEventsQueue(n) {
            this._pendingEvents.push(n), t.Log.debug("Enqueued Event:", n);
          }
          hasEventsForFullBatch() {
            return this._pendingEvents.length >= this._batchSize;
          }
          takeAll() {
            const n = this._pendingEvents;
            return (this._pendingEvents = []), n;
          }
          isEmpty() {
            return this._pendingEvents.length === 0;
          }
        };
      e.PendingEvents = r;
    }),
    es = D((e) => {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e._createLayerParameterExposure =
          e._createConfigExposure =
          e._mapExposures =
          e._createGateExposure =
          e._isExposureEvent =
            void 0);
      var t = "statsig::config_exposure",
        r = "statsig::gate_exposure",
        n = "statsig::layer_exposure",
        i = (d, f, c, p, u) => (
          c.bootstrapMetadata && (p.bootstrapMetadata = c.bootstrapMetadata),
          {
            eventName: d,
            user: f,
            value: null,
            metadata: m(c, p),
            secondaryExposures: u,
            time: Date.now(),
          }
        ),
        a = ({ eventName: d }) => d === r || d === t || d === n;
      e._isExposureEvent = a;
      var s = (d, f, c) => {
        var p, u, g;
        const w = {
          gate: f.name,
          gateValue: String(f.value),
          ruleID: f.ruleID,
        };
        return (
          ((p = f.__evaluation) === null || p === void 0
            ? void 0
            : p.version) != null && (w.configVersion = f.__evaluation.version),
          i(
            r,
            d,
            f.details,
            w,
            o(
              (g =
                (u = f.__evaluation) === null || u === void 0
                  ? void 0
                  : u.secondary_exposures) !== null && g !== void 0
                ? g
                : [],
              c
            )
          )
        );
      };
      e._createGateExposure = s;
      function o(d, f) {
        return d
          .map((c) => (typeof c == "string" ? (f ?? {})[c] : c))
          .filter((c) => c != null);
      }
      e._mapExposures = o;
      var l = (d, f, c) => {
        var p, u, g, w;
        const v = { config: f.name, ruleID: f.ruleID };
        return (
          ((p = f.__evaluation) === null || p === void 0
            ? void 0
            : p.version) != null && (v.configVersion = f.__evaluation.version),
          ((u = f.__evaluation) === null || u === void 0 ? void 0 : u.passed) !=
            null && (v.rulePassed = String(f.__evaluation.passed)),
          i(
            t,
            d,
            f.details,
            v,
            o(
              (w =
                (g = f.__evaluation) === null || g === void 0
                  ? void 0
                  : g.secondary_exposures) !== null && w !== void 0
                ? w
                : [],
              c
            )
          )
        );
      };
      e._createConfigExposure = l;
      var h = (d, f, c, p) => {
        var u, g, w, v, S, y, T;
        const E = f.__evaluation,
          I =
            ((u = E?.explicit_parameters) === null || u === void 0
              ? void 0
              : u.includes(c)) === !0;
        let C = "",
          O =
            (g = E?.undelegated_secondary_exposures) !== null && g !== void 0
              ? g
              : [];
        I &&
          ((C =
            (w = E.allocated_experiment_name) !== null && w !== void 0
              ? w
              : ""),
          (O = (v = E.secondary_exposures) !== null && v !== void 0 ? v : []));
        const $ =
            (S = f.__evaluation) === null || S === void 0
              ? void 0
              : S.parameter_rule_ids,
          G = {
            config: f.name,
            parameterName: c,
            ruleID: (y = $?.[c]) !== null && y !== void 0 ? y : f.ruleID,
            allocatedExperiment: C,
            isExplicitParameter: String(I),
          };
        return (
          ((T = f.__evaluation) === null || T === void 0
            ? void 0
            : T.version) != null && (G.configVersion = f.__evaluation.version),
          i(n, d, f.details, G, o(O, p))
        );
      };
      e._createLayerParameterExposure = h;
      var m = (d, f) => (
        (f.reason = d.reason),
        d.lcut && (f.lcut = String(d.lcut)),
        d.receivedAt && (f.receivedAt = String(d.receivedAt)),
        d.loadedAt != null && (f.loadedAt = String(d.loadedAt)),
        f
      );
    }),
    ts = D((e) => {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.UrlConfiguration = void 0);
      var t = nt(),
        r = Pt(),
        n = {
          [r.Endpoint._initialize]: "i",
          [r.Endpoint._rgstr]: "e",
          [r.Endpoint._download_config_specs]: "d",
        },
        i = class {
          constructor(a, s, o, l) {
            (this.customUrl = null),
              (this.fallbackUrls = null),
              (this.endpoint = a),
              (this.endpointDnsKey = n[a]),
              s && (this.customUrl = s),
              !s &&
                o &&
                (this.customUrl = o.endsWith("/") ? `${o}${a}` : `${o}/${a}`),
              l && (this.fallbackUrls = l);
            const h = r.NetworkDefault[a];
            this.defaultUrl = `${h}/${a}`;
          }
          getUrl() {
            var a;
            return (a = this.customUrl) !== null && a !== void 0
              ? a
              : this.defaultUrl;
          }
          getChecksum() {
            var a;
            const s = (
              (a = this.fallbackUrls) !== null && a !== void 0 ? a : []
            )
              .sort()
              .join(",");
            return (0, t._DJB2)(this.customUrl + s);
          }
        };
      e.UrlConfiguration = i;
    }),
    rs = D((e) => {
      var t =
        (e && e.__awaiter) ||
        function (y, T, E, I) {
          function C(O) {
            return O instanceof E
              ? O
              : new E(function ($) {
                  $(O);
                });
          }
          return new (E || (E = Promise))(function (O, $) {
            function G(fe) {
              try {
                ye(I.next(fe));
              } catch (Q) {
                $(Q);
              }
            }
            function ce(fe) {
              try {
                ye(I.throw(fe));
              } catch (Q) {
                $(Q);
              }
            }
            function ye(fe) {
              fe.done ? O(fe.value) : C(fe.value).then(G, ce);
            }
            ye((I = I.apply(y, T || [])).next());
          });
        };
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.EventLogger = void 0);
      var r = Xc(),
        n = Sr(),
        i = Un(),
        a = nu(),
        s = nt(),
        o = ee(),
        l = Pt(),
        h = iu(),
        m = Oe(),
        d = es(),
        f = Nt(),
        c = Be(),
        p = ts(),
        u = Lt(),
        g = 1e3,
        w = 6e5,
        v = {},
        S = class _c {
          static _safeFlushAndForget(T) {
            var E;
            (E = v[T]) === null || E === void 0 || E.flush().catch(() => {});
          }
          constructor(T, E, I, C, O) {
            var $;
            (this._sdkKey = T),
              (this._emitter = E),
              (this._network = I),
              (this._options = C),
              (this._errorBoundary = O),
              (this._pendingEvents = null),
              (this._batchQueue = null),
              (this._flushCoordinator = null),
              (this._lastExposureTimeMap = {}),
              (this._nonExposedChecks = {}),
              (this._isShuttingDown = !1),
              (this._storageKey = null),
              (this._pendingCompressionMode = null),
              (this._loggingEnabled =
                ($ = C?.loggingEnabled) !== null && $ !== void 0
                  ? $
                  : C?.disableLogging === !0
                  ? f.LoggingEnabledOption.disabled
                  : f.LoggingEnabledOption.browserOnly),
              C?.loggingEnabled &&
                C.disableLogging !== void 0 &&
                o.Log.warn(
                  "Detected both loggingEnabled and disableLogging options. loggingEnabled takes precedence - please remove disableLogging."
                );
            const G = C?.networkConfig;
            this._logEventUrlConfig = new p.UrlConfiguration(
              l.Endpoint._rgstr,
              G?.logEventUrl,
              G?.api,
              G?.logEventFallbackUrls
            );
          }
          setLogEventCompressionMode(T) {
            this._flushCoordinator
              ? this._flushCoordinator.setLogEventCompressionMode(T)
              : (this._pendingCompressionMode = T);
          }
          setLoggingEnabled(T) {
            const E = this._loggingEnabled === "disabled",
              I = T !== "disabled";
            if (
              ((this._loggingEnabled = T),
              this._flushCoordinator &&
                this._flushCoordinator.setLoggingEnabled(T),
              E && I)
            ) {
              const C = this._loadStoredEvents();
              o.Log.debug(`Loaded ${C.length} stored event(s) from storage`),
                C.length > 0 &&
                  (C.forEach((O) => {
                    this._initFlushCoordinator().addEvent(O);
                  }),
                  this.flush().catch((O) => {
                    o.Log.warn(
                      "Failed to flush events after enabling logging:",
                      O
                    );
                  }));
            }
          }
          enqueue(T) {
            var E;
            if (!this._shouldLogEvent(T)) return;
            const I = this._normalizeEvent(T);
            if (this._loggingEnabled === "disabled") {
              this._storeEventToStorage(I);
              return;
            }
            this._initFlushCoordinator().addEvent(I),
              (E = this._flushCoordinator) === null ||
                E === void 0 ||
                E.checkQuickFlush();
          }
          incrementNonExposureCount(T) {
            var E;
            const I =
              (E = this._nonExposedChecks[T]) !== null && E !== void 0 ? E : 0;
            this._nonExposedChecks[T] = I + 1;
          }
          reset() {
            this.flush().catch(() => {}), (this._lastExposureTimeMap = {});
          }
          start() {
            var T;
            const E = (0, m._isServerEnv)();
            if (
              E &&
              ((T = this._options) === null || T === void 0
                ? void 0
                : T.loggingEnabled) !== "always"
            )
              return;
            const I = this._initFlushCoordinator();
            (v[this._sdkKey] = this),
              E ||
                (0, u._subscribeToVisiblityChanged)((C) => {
                  C === "background"
                    ? _c._safeFlushAndForget(this._sdkKey)
                    : C === "foreground" && I.startScheduledFlushCycle();
                }),
              I.loadAndRetryShutdownFailedEvents().catch((C) => {
                o.Log.warn("Failed to load failed shutdown events:", C);
              }),
              I.startScheduledFlushCycle();
          }
          stop() {
            return t(this, void 0, void 0, function* () {
              (this._isShuttingDown = !0),
                this._flushCoordinator &&
                  (yield this._flushCoordinator.processShutdown()),
                delete v[this._sdkKey],
                (this._flushCoordinator = null),
                (this._pendingEvents = null),
                (this._batchQueue = null);
            });
          }
          flush() {
            return t(this, void 0, void 0, function* () {
              if (this._flushCoordinator)
                return this._flushCoordinator.processManualFlush();
            });
          }
          appendAndResetNonExposedChecks() {
            if (Object.keys(this._nonExposedChecks).length === 0) return;
            const T = Object.assign({}, this._nonExposedChecks);
            this._nonExposedChecks = {};
            const E = this._normalizeEvent({
              eventName: "statsig::non_exposed_checks",
              user: null,
              time: Date.now(),
              metadata: { checks: T },
            });
            this._flushCoordinator && this._flushCoordinator.addEvent(E);
          }
          _shouldLogEvent(T) {
            var E;
            if (
              ((E = this._options) === null || E === void 0
                ? void 0
                : E.loggingEnabled) !== "always" &&
              (0, m._isServerEnv)()
            )
              return !1;
            if (!(0, d._isExposureEvent)(T)) return !0;
            const I = T.user ? T.user : { statsigEnvironment: void 0 },
              C = (0, n._getUserStorageKey)(this._sdkKey, I),
              O = T.metadata ? T.metadata : {},
              $ = [
                T.eventName,
                C,
                O.gate,
                O.config,
                O.ruleID,
                O.configVersion,
                O.allocatedExperiment,
                O.parameterName,
                String(O.isExplicitParameter),
                O.reason,
                O.loadedAt,
              ].join("|"),
              G = this._lastExposureTimeMap[$],
              ce = Date.now();
            return G && ce - G < w
              ? !1
              : (Object.keys(this._lastExposureTimeMap).length > g &&
                  (this._lastExposureTimeMap = {}),
                (this._lastExposureTimeMap[$] = ce),
                !0);
          }
          _getCurrentPageUrl() {
            var T;
            if (
              ((T = this._options) === null || T === void 0
                ? void 0
                : T.includeCurrentPageUrlWithEvents) !== !1
            )
              return (0, m._getCurrentPageUrlSafe)();
          }
          _getStorageKey() {
            return (
              this._storageKey ||
                (this._storageKey = `statsig.pending_events.${(0, s._DJB2)(
                  this._sdkKey
                )}`),
              this._storageKey
            );
          }
          _initFlushCoordinator() {
            var T, E;
            if (this._flushCoordinator) return this._flushCoordinator;
            const I =
              (E =
                (T = this._options) === null || T === void 0
                  ? void 0
                  : T.loggingBufferMaxSize) !== null && E !== void 0
                ? E
                : i.EventRetryConstants.DEFAULT_BATCH_SIZE;
            return (
              (this._pendingEvents = new h.PendingEvents(I)),
              (this._batchQueue = new r.BatchQueue(I)),
              (this._flushCoordinator = new a.FlushCoordinator(
                this._batchQueue,
                this._pendingEvents,
                () => this.appendAndResetNonExposedChecks(),
                this._sdkKey,
                this._network,
                this._emitter,
                this._logEventUrlConfig,
                this._options,
                this._loggingEnabled,
                this._errorBoundary
              )),
              this._pendingCompressionMode &&
                (this._flushCoordinator.setLogEventCompressionMode(
                  this._pendingCompressionMode
                ),
                (this._pendingCompressionMode = null)),
              this._flushCoordinator
            );
          }
          _storeEventToStorage(T) {
            const E = this._getStorageKey();
            try {
              let I = this._getEventsFromStorage(E);
              I.push(T),
                I.length > i.EventRetryConstants.MAX_LOCAL_STORAGE &&
                  (I = I.slice(-i.EventRetryConstants.MAX_LOCAL_STORAGE)),
                (0, c._setObjectInStorage)(E, I);
            } catch {
              o.Log.warn("Unable to save events to storage");
            }
          }
          _getEventsFromStorage(T) {
            try {
              const E = (0, c._getObjectFromStorage)(T);
              return Array.isArray(E) ? E : [];
            } catch {
              return [];
            }
          }
          _loadStoredEvents() {
            const T = this._getStorageKey(),
              E = this._getEventsFromStorage(T);
            return E.length > 0 && c.Storage.removeItem(T), E;
          }
          _normalizeEvent(T) {
            T.user &&
              ((T.user = Object.assign({}, T.user)),
              delete T.user.privateAttributes);
            const E = {},
              I = this._getCurrentPageUrl();
            return (
              I && (E.statsigMetadata = { currentPage: I }),
              Object.assign(Object.assign({}, T), E)
            );
          }
        };
      e.EventLogger = S;
    }),
    au = D((e) => {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.PrecomputedEvaluationsContextHandle = void 0);
      var t = ee(),
        r = Oe(),
        n = Dt(),
        i = xt(),
        a = class {
          constructor(s, o, l, h, m, d) {
            (this._sdkKey = s),
              (this._getOptions = o),
              (this._getErrorBoundary = l),
              (this._getValues = h),
              (this._getUser = m),
              (this._getSdkInstanceID = d);
          }
          get sdkKey() {
            return this._sdkKey;
          }
          get options() {
            return this._getOptions();
          }
          get errorBoundary() {
            return this._getErrorBoundary();
          }
          get values() {
            return this._getValues();
          }
          get user() {
            let s = (0, r._cloneObject)("StatsigUser", this._getUser());
            return (
              s == null && (t.Log.error("Failed to clone user"), (s = {})), s
            );
          }
          getSession(s = !0) {
            return n.StatsigSession.get(this._sdkKey, s);
          }
          get stableID() {
            return i.StableID.get(this._sdkKey);
          }
          get sdkInstanceID() {
            return this._getSdkInstanceID();
          }
          toContext(s = !0) {
            return {
              sdkKey: this.sdkKey,
              options: this.options,
              values: this.values,
              user: this.user,
              errorBoundary: this.errorBoundary,
              session: this.getSession(s),
              stableID: this.stableID,
              sdkInstanceID: this.sdkInstanceID,
            };
          }
        };
      e.PrecomputedEvaluationsContextHandle = a;
    }),
    ns = D((e) => {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e._getUnitIDFromUser = e._getFullUserHash = e._normalizeUser = void 0);
      var t = nt(),
        r = ee(),
        n = Oe(),
        i = new WeakMap();
      function a(l, h, m) {
        var d;
        const f = (d = h?.environment) !== null && d !== void 0 ? d : null,
          c = m ?? null,
          p = i.get(l);
        if (p && p.environment === f && p.fallbackEnvironment === c) return l;
        const u = (0, n._cloneObject)("StatsigUser", l);
        return u == null
          ? (r.Log.error("Failed to clone user"),
            { statsigEnvironment: void 0 })
          : (f != null
              ? (u.statsigEnvironment = f)
              : c != null && (u.statsigEnvironment = { tier: c }),
            i.set(u, { environment: f, fallbackEnvironment: c }),
            u);
      }
      e._normalizeUser = a;
      function s(l) {
        return l ? (0, t._DJB2Object)(l) : null;
      }
      e._getFullUserHash = s;
      function o(l, h) {
        var m, d, f;
        if (typeof h != "string") return l.userID;
        const c = h.toLowerCase();
        return c !== "userid"
          ? (d = (m = l.customIDs) === null || m === void 0 ? void 0 : m[h]) !==
              null && d !== void 0
            ? d
            : (f = l.customIDs) === null || f === void 0
            ? void 0
            : f[c]
          : l.userID;
      }
      e._getUnitIDFromUser = o;
    }),
    is = D((e) => {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e._typedJsonParse = void 0);
      var t = ee();
      function r(n, i, a) {
        try {
          const s = JSON.parse(n);
          if (s && typeof s == "object" && i in s) return s;
        } catch {}
        return t.Log.error(`Failed to parse ${a}`), null;
      }
      e._typedJsonParse = r;
    }),
    su = D((e) => {
      var t =
        (e && e.__awaiter) ||
        function (c, p, u, g) {
          function w(v) {
            return v instanceof u
              ? v
              : new u(function (S) {
                  S(v);
                });
          }
          return new (u || (u = Promise))(function (v, S) {
            function y(I) {
              try {
                E(g.next(I));
              } catch (C) {
                S(C);
              }
            }
            function T(I) {
              try {
                E(g.throw(I));
              } catch (C) {
                S(C);
              }
            }
            function E(I) {
              I.done ? v(I.value) : w(I.value).then(y, T);
            }
            E((g = g.apply(c, p || [])).next());
          });
        };
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e._makeDataAdapterResult = e.DataAdapterCore = void 0);
      var r = ee(),
        n = xt(),
        i = ns(),
        a = Be(),
        s = is(),
        o = 10,
        l = 8,
        h = class {
          constructor(c, p) {
            (this._adapterName = c),
              (this._cacheSuffix = p),
              (this._options = null),
              (this._sdkKey = null),
              (this._cacheLimit = o),
              (this._lastModifiedStoreKey = `statsig.last_modified_time.${p}`),
              (this._inMemoryCache = new d());
          }
          attach(c, p, u) {
            (this._sdkKey = c), (this._options = p);
          }
          getDataSync(c) {
            const p = c && (0, i._normalizeUser)(c, this._options),
              u = this._getCacheKey(p),
              g = this._inMemoryCache.get(u, p);
            if (g && this._getIsCacheValueValid(g)) return g;
            const w = this._loadFromCache(u);
            return w && this._getIsCacheValueValid(w)
              ? (this._inMemoryCache.add(u, w, this._cacheLimit),
                this._inMemoryCache.get(u, p))
              : null;
          }
          setData(c, p) {
            const u = p && (0, i._normalizeUser)(p, this._options),
              g = this._getCacheKey(u);
            this._inMemoryCache.add(
              g,
              m("Bootstrap", c, null, u),
              this._cacheLimit
            );
          }
          _getIsCacheValueValid(c) {
            return (
              c.stableID == null ||
              c.stableID === n.StableID.get(this._getSdkKey())
            );
          }
          _getDataAsyncImpl(c, p, u) {
            return t(this, void 0, void 0, function* () {
              a.Storage.isReady() || (yield a.Storage.isReadyResolver());
              const g = c ?? this.getDataSync(p),
                w = [this._fetchAndPrepFromNetwork(g, p, u)];
              return (
                u?.timeoutMs &&
                  w.push(
                    new Promise((v) => setTimeout(v, u.timeoutMs)).then(
                      () => (
                        r.Log.debug("Fetching latest value timed out"), null
                      )
                    )
                  ),
                yield Promise.race(w)
              );
            });
          }
          _prefetchDataImpl(c, p) {
            return t(this, void 0, void 0, function* () {
              const u = c && (0, i._normalizeUser)(c, this._options),
                g = this._getCacheKey(u),
                w = yield this._getDataAsyncImpl(null, u, p);
              w &&
                this._inMemoryCache.add(
                  g,
                  Object.assign(Object.assign({}, w), { source: "Prefetch" }),
                  this._cacheLimit
                );
            });
          }
          _fetchAndPrepFromNetwork(c, p, u) {
            return t(this, void 0, void 0, function* () {
              var g;
              const w = (g = c?.data) !== null && g !== void 0 ? g : null,
                v = c != null && this._isCachedResultValidFor204(c, p),
                S = yield this._fetchFromNetwork(w, p, u, v);
              if (!S)
                return (
                  r.Log.debug("No response returned for latest value"), null
                );
              const y = (0, s._typedJsonParse)(S, "has_updates", "Response"),
                T = this._getSdkKey(),
                E = n.StableID.get(T);
              let I = null;
              if (y?.has_updates === !0) I = m("Network", S, E, p);
              else if (w && y?.has_updates === !1)
                I = m("NetworkNotModified", w, E, p);
              else return null;
              const C = this._getCacheKey(p);
              return (
                this._inMemoryCache.add(C, I, this._cacheLimit),
                this._writeToCache(C, I),
                I
              );
            });
          }
          _getSdkKey() {
            return this._sdkKey != null
              ? this._sdkKey
              : (r.Log.error(
                  `${this._adapterName} is not attached to a Client`
                ),
                "");
          }
          _loadFromCache(c) {
            var p;
            const u =
              (p = a.Storage.getItem) === null || p === void 0
                ? void 0
                : p.call(a.Storage, c);
            if (u == null) return null;
            const g = (0, s._typedJsonParse)(u, "source", "Cached Result");
            return g
              ? Object.assign(Object.assign({}, g), { source: "Cache" })
              : null;
          }
          _writeToCache(c, p) {
            const u = JSON.stringify(p);
            for (let g = 0; g < l; g++)
              try {
                a.Storage.setItem(c, u);
                break;
              } catch (w) {
                if (
                  !(w instanceof Error) ||
                  !(
                    w.toString().includes("QuotaExceededError") ||
                    w.toString().includes("QUOTA_EXCEEDED_ERR")
                  ) ||
                  this._cacheLimit <= 1
                )
                  throw w;
                (this._cacheLimit = Math.ceil(this._cacheLimit / 2)),
                  this._runLocalStorageCacheEviction(c, this._cacheLimit - 1);
              }
            this._runLocalStorageCacheEviction(c);
          }
          _runLocalStorageCacheEviction(c, p = this._cacheLimit) {
            var u;
            const g =
              (u = (0, a._getObjectFromStorage)(this._lastModifiedStoreKey)) !==
                null && u !== void 0
                ? u
                : {};
            g[c] = Date.now();
            const w = f(g, p);
            for (const v of w) delete g[v], a.Storage.removeItem(v);
            (0, a._setObjectInStorage)(this._lastModifiedStoreKey, g);
          }
        };
      e.DataAdapterCore = h;
      function m(c, p, u, g) {
        return {
          source: c,
          data: p,
          receivedAt: Date.now(),
          stableID: u,
          fullUserHash: (0, i._getFullUserHash)(g),
        };
      }
      e._makeDataAdapterResult = m;
      var d = class {
        constructor() {
          this._data = {};
        }
        get(c, p) {
          var u;
          const g = this._data[c],
            w = g?.stableID,
            v =
              (u = p?.customIDs) === null || u === void 0 ? void 0 : u.stableID;
          return v && w && v !== w
            ? (r.Log.warn("'StatsigUser.customIDs.stableID' mismatch"), null)
            : g;
        }
        add(c, p, u) {
          const g = f(this._data, u - 1);
          for (const w of g) delete this._data[w];
          this._data[c] = p;
        }
        merge(c) {
          this._data = Object.assign(Object.assign({}, this._data), c);
        }
      };
      function f(c, p) {
        const u = Object.keys(c);
        return u.length <= p
          ? []
          : p === 0
          ? u
          : u
              .sort((g, w) => {
                const v = c[g],
                  S = c[w];
                return typeof v == "object" && typeof S == "object"
                  ? v.receivedAt - S.receivedAt
                  : v - S;
              })
              .slice(0, u.length - p);
      }
    }),
    ou = D((e) => {
      Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    as = D((e) => {
      var t =
        (e && e.__awaiter) ||
        function (d, f, c, p) {
          function u(g) {
            return g instanceof c
              ? g
              : new c(function (w) {
                  w(g);
                });
          }
          return new (c || (c = Promise))(function (g, w) {
            function v(T) {
              try {
                y(p.next(T));
              } catch (E) {
                w(E);
              }
            }
            function S(T) {
              try {
                y(p.throw(T));
              } catch (E) {
                w(E);
              }
            }
            function y(T) {
              T.done ? g(T.value) : u(T.value).then(v, S);
            }
            y((p = p.apply(d, f || [])).next());
          });
        };
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.ErrorBoundary = e.EXCEPTION_ENDPOINT = void 0);
      var r = ee(),
        n = Tr(),
        i = Mt();
      e.EXCEPTION_ENDPOINT = "https://statsigapi.net/v1/sdk_exception";
      var a = "[Statsig] UnknownError",
        s = class {
          constructor(d, f, c, p) {
            (this._sdkKey = d),
              (this._options = f),
              (this._emitter = c),
              (this._lastSeenError = p),
              (this._seen = new Set());
          }
          wrap(d, f) {
            try {
              const c = d;
              h(c).forEach((p) => {
                const u = c[p];
                "$EB" in u ||
                  ((c[p] = (...g) =>
                    this._capture(f ? `${f}:${p}` : p, () => u.apply(d, g))),
                  (c[p].$EB = !0));
              });
            } catch (c) {
              this._onError("eb:wrap", c);
            }
          }
          logError(d, f) {
            this._onError(d, f);
          }
          logDroppedEvents(d, f, c) {
            const p = { eventCount: String(d), reason: f };
            c &&
              Object.keys(c).forEach((u) => {
                p[u] = String(c[u]);
              }),
              this._onError(
                "statsig::log_event_dropped_event_count",
                new Error(f),
                !0,
                p
              );
          }
          logEventRequestFailure(d, f, c, p, u, g, w, v, S) {
            const y = {
              eventCount: String(d),
              flushType: c,
              statusCode: String(p),
              reason: f,
              retries: String(u),
            };
            g && (y.failurePath = g),
              typeof w == "string" &&
                w.length > 0 &&
                (y.failureErrorMessage = w),
              typeof v == "string" &&
                v.length > 0 &&
                (y.failureDiagnosticBucket = v),
              S &&
                Object.keys(S).forEach((T) => {
                  const E = S[T];
                  E.length > 0 && (y[`failureDiagnostic_${T}`] = E);
                }),
              this._onError("statsig::log_event_failed", new Error(f), !0, y);
          }
          getLastSeenErrorAndReset() {
            const d = this._lastSeenError;
            return (this._lastSeenError = void 0), d ?? null;
          }
          attachErrorIfNoneExists(d) {
            this._lastSeenError || (this._lastSeenError = o(d));
          }
          _capture(d, f) {
            try {
              const c = f();
              return c && c instanceof Promise
                ? c.catch((p) => this._onError(d, p))
                : c;
            } catch (c) {
              return this._onError(d, c), null;
            }
          }
          _onError(d, f, c = !1, p) {
            try {
              r.Log.warn(`Caught error in ${d}`, { error: f }),
                t(this, void 0, void 0, function* () {
                  var g, w, v, S, y, T, E;
                  const I = f || Error(a),
                    C = I instanceof Error,
                    O = C ? I.name : "No Name",
                    $ = o(I);
                  if (((this._lastSeenError = $), !c && this._seen.has(O)))
                    return;
                  if (
                    (this._seen.add(O),
                    !(
                      (w =
                        (g = this._options) === null || g === void 0
                          ? void 0
                          : g.networkConfig) === null || w === void 0
                    ) && w.preventAllNetworkTraffic)
                  ) {
                    (v = this._emitter) === null ||
                      v === void 0 ||
                      v.call(this, { name: "error", error: f, tag: d });
                    return;
                  }
                  const G = n.SDKType._get(this._sdkKey),
                    ce = i.StatsigMetadataProvider.get(),
                    ye = C ? I.stack : l(I),
                    fe = Object.assign(
                      Object.assign(
                        {
                          tag: d,
                          exception: O,
                          info: ye,
                          statsigOptions: m(this._options),
                        },
                        Object.assign(Object.assign({}, ce), { sdkType: G })
                      ),
                      p ?? {}
                    ),
                    Q =
                      (S = this._options) === null || S === void 0
                        ? void 0
                        : S.networkConfig;
                  yield (
                    (y = Q?.networkOverrideFunc) !== null && y !== void 0
                      ? y
                      : fetch
                  )(
                    (T = Q?.sdkExceptionUrl) !== null && T !== void 0
                      ? T
                      : e.EXCEPTION_ENDPOINT,
                    {
                      method: "POST",
                      headers: {
                        "STATSIG-API-KEY": this._sdkKey,
                        "STATSIG-SDK-TYPE": String(G),
                        "STATSIG-SDK-VERSION": String(ce.sdkVersion),
                        "Content-Type": "application/json",
                      },
                      body: JSON.stringify(fe),
                    }
                  ),
                    (E = this._emitter) === null ||
                      E === void 0 ||
                      E.call(this, { name: "error", error: f, tag: d });
                })
                  .then(() => {})
                  .catch(() => {});
            } catch {}
          }
        };
      e.ErrorBoundary = s;
      function o(d) {
        return d instanceof Error
          ? d
          : typeof d == "string"
          ? new Error(d)
          : new Error("An unknown error occurred.");
      }
      function l(d) {
        try {
          return JSON.stringify(d);
        } catch {
          return a;
        }
      }
      function h(d) {
        const f = new Set();
        let c = Object.getPrototypeOf(d);
        for (; c && c !== Object.prototype; )
          Object.getOwnPropertyNames(c)
            .filter((p) => typeof c?.[p] == "function")
            .forEach((p) => f.add(p)),
            (c = Object.getPrototypeOf(c));
        return Array.from(f);
      }
      function m(d) {
        if (!d) return {};
        const f = {};
        return (
          Object.keys(d).forEach((c) => {
            const p = c,
              u = d[p];
            switch (typeof u) {
              case "number":
              case "bigint":
              case "boolean":
                f[String(p)] = u;
                break;
              case "string":
                u.length < 50 ? (f[String(p)] = u) : (f[String(p)] = "set");
                break;
              case "object":
                p === "environment"
                  ? (f.environment = u)
                  : p === "networkConfig"
                  ? (f.networkConfig = u)
                  : (f[String(p)] = u != null ? "set" : "unset");
                break;
              default:
            }
          }),
          f
        );
      }
    }),
    lu = D((e) => {
      Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    cu = D((e) => {
      Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    uu = D((e) => {
      Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    ss = D((e) => {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.createMemoKey = e.MemoPrefix = void 0),
        (e.MemoPrefix = {
          _gate: "g",
          _dynamicConfig: "c",
          _experiment: "e",
          _configList: "cl",
          _layer: "l",
          _paramStore: "p",
        });
      var t = new Set([]),
        r = new Set(["userPersistedValues"]);
      function n(i, a, s) {
        let o = `${i}|${a}`;
        if (!s) return o;
        for (const l of Object.keys(s)) {
          if (r.has(l)) return;
          t.has(l) ? (o += `|${l}=true`) : (o += `|${l}=${s[l]}`);
        }
        return o;
      }
      e.createMemoKey = n;
    }),
    du = D((e) => {
      Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    hu = D((e) => {
      Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    fu = D((e) => {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e._fastApproxSizeOf = void 0);
      var t = 2,
        r = 1,
        n = (i, a) => {
          let s = 0;
          const o = Object.keys(i);
          for (let l = 0; l < o.length; l++) {
            const h = o[l],
              m = i[h];
            if (
              ((s += h.length),
              typeof m == "object" && m !== null
                ? (s += (0, e._fastApproxSizeOf)(m, a) + t)
                : (s += String(m).length + r),
              s >= a)
            )
              return s;
          }
          return s;
        };
      e._fastApproxSizeOf = n;
    }),
    pu = D((e) => {
      var t =
        (e && e.__awaiter) ||
        function (u, g, w, v) {
          function S(y) {
            return y instanceof w
              ? y
              : new w(function (T) {
                  T(y);
                });
          }
          return new (w || (w = Promise))(function (y, T) {
            function E(O) {
              try {
                C(v.next(O));
              } catch ($) {
                T($);
              }
            }
            function I(O) {
              try {
                C(v.throw(O));
              } catch ($) {
                T($);
              }
            }
            function C(O) {
              O.done ? y(O.value) : S(O.value).then(E, I);
            }
            C((v = v.apply(u, g || [])).next());
          });
        };
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.StatsigClientBase = void 0),
        rt();
      var r = rt(),
        n = as(),
        i = rs(),
        a = ee(),
        s = ss(),
        o = Oe(),
        l = Dt(),
        h = xt(),
        m = Nt(),
        d = Be(),
        f = 3e3,
        c = class {
          constructor(u, g, w, v) {
            var S, y, T, E;
            (this.loadingStatus = "Uninitialized"),
              (this._initializePromise = null),
              (this._listeners = {});
            const I = this.$emt.bind(this);
            v?.logLevel != null && (a.Log.level = v.logLevel),
              v != null && v.disableStorage && d.Storage._setDisabled(!0),
              v != null &&
                v.initialSessionID &&
                l.StatsigSession.overrideInitialSessionID(
                  v.initialSessionID,
                  u
                ),
              v != null &&
                v.storageProvider &&
                d.Storage._setProvider(v.storageProvider),
              v != null &&
                v.enableCookies &&
                h.StableID._setCookiesEnabled(u, v.enableCookies),
              v != null && v.disableStableID && h.StableID._setDisabled(u, !0),
              (this._sdkKey = u),
              (this._options = v ?? {}),
              (this._memoCache = {}),
              (this.overrideAdapter =
                (S = v?.overrideAdapter) !== null && S !== void 0 ? S : null),
              (this._errorBoundary = new n.ErrorBoundary(u, v, I)),
              (this._logger = new i.EventLogger(
                u,
                I,
                w,
                v,
                this._errorBoundary
              )),
              this._errorBoundary.wrap(this),
              this._errorBoundary.wrap(g),
              this._errorBoundary.wrap(this._logger),
              w.setErrorBoundary(this._errorBoundary),
              (this.dataAdapter = g),
              this.dataAdapter.attach(u, v, w),
              (this.storageProvider = d.Storage),
              (E =
                (T =
                  (y = this.overrideAdapter) === null || y === void 0
                    ? void 0
                    : y.loadFromStorage) === null || T === void 0
                  ? void 0
                  : T.call(y)) === null ||
                E === void 0 ||
                E.catch((C) =>
                  this._errorBoundary.logError("OA::loadFromStorage", C)
                ),
              this._primeReadyRipcord(),
              p(u, this);
          }
          updateRuntimeOptions(u) {
            u.loggingEnabled
              ? ((this._options.loggingEnabled = u.loggingEnabled),
                this._logger.setLoggingEnabled(u.loggingEnabled))
              : u.disableLogging != null &&
                ((this._options.disableLogging = u.disableLogging),
                this._logger.setLoggingEnabled(
                  u.disableLogging ? "disabled" : "browser-only"
                )),
              u.disableStorage != null &&
                ((this._options.disableStorage = u.disableStorage),
                d.Storage._setDisabled(u.disableStorage)),
              u.enableCookies != null &&
                ((this._options.enableCookies = u.enableCookies),
                h.StableID._setCookiesEnabled(this._sdkKey, u.enableCookies)),
              u.logEventCompressionMode
                ? this._logger.setLogEventCompressionMode(
                    u.logEventCompressionMode
                  )
                : u.disableCompression &&
                  this._logger.setLogEventCompressionMode(
                    m.LogEventCompressionMode.Disabled
                  );
          }
          flush() {
            return this._logger.flush();
          }
          shutdown() {
            return t(this, void 0, void 0, function* () {
              this.$emt({ name: "pre_shutdown" }),
                this._setStatus("Uninitialized", null),
                (this._initializePromise = null),
                yield this._logger.stop();
            });
          }
          on(u, g) {
            this._listeners[u] || (this._listeners[u] = []),
              this._listeners[u].push(g);
          }
          off(u, g) {
            if (this._listeners[u]) {
              const w = this._listeners[u].indexOf(g);
              w !== -1 && this._listeners[u].splice(w, 1);
            }
          }
          $on(u, g) {
            (g.__isInternal = !0), this.on(u, g);
          }
          $emt(u) {
            var g;
            const w = (v) => {
              try {
                v(u);
              } catch (S) {
                if (v.__isInternal === !0) {
                  this._errorBoundary.logError(`__emit:${u.name}`, S);
                  return;
                }
                a.Log.error(
                  "An error occurred in a StatsigClientEvent listener. This is not an issue with Statsig.",
                  u
                );
              }
            };
            this._listeners[u.name] &&
              this._listeners[u.name].forEach((v) => w(v)),
              (g = this._listeners["*"]) === null ||
                g === void 0 ||
                g.forEach(w);
          }
          _setStatus(u, g) {
            (this.loadingStatus = u),
              (this._memoCache = {}),
              this.$emt({ name: "values_updated", status: u, values: g });
          }
          _enqueueExposure(u, g, w) {
            if (w?.disableExposureLog === !0) {
              this._logger.incrementNonExposureCount(u);
              return;
            }
            this._logger.enqueue(g);
          }
          _memoize(u, g) {
            return (w, v) => {
              if (this._options.disableEvaluationMemoization) return g(w, v);
              const S = (0, s.createMemoKey)(u, w, v);
              return S
                ? (S in this._memoCache ||
                    (Object.keys(this._memoCache).length >= f &&
                      (this._memoCache = {}),
                    (this._memoCache[S] = g(w, v))),
                  this._memoCache[S])
                : g(w, v);
            };
          }
        };
      e.StatsigClientBase = c;
      function p(u, g) {
        var w;
        if ((0, o._isServerEnv)()) return;
        const v = (0, r._getStatsigGlobal)(),
          S = (w = v.instances) !== null && w !== void 0 ? w : {},
          y = g;
        S[u] != null &&
          a.Log.warn(
            "Creating multiple Statsig clients with the same SDK key can lead to unexpected behavior. Multi-instance support requires different SDK keys."
          ),
          (S[u] = y),
          v.firstInstance || (v.firstInstance = y),
          (v.instances = S),
          (__STATSIG__ = v);
      }
    }),
    mu = D((e) => {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.DataAdapterCachePrefix = void 0),
        (e.DataAdapterCachePrefix = "statsig.cached");
    }),
    gu = D((e) => {
      Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    _u = D((e) => {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e._makeTypedGet =
          e._mergeOverride =
          e._makeLayer =
          e._makeExperiment =
          e._makeDynamicConfig =
          e._makeFeatureGate =
            void 0);
      var t = ee(),
        r = Fn();
      function n(m, d, f, c) {
        var p;
        return {
          name: m,
          details: d,
          ruleID: (p = f?.rule_id) !== null && p !== void 0 ? p : "",
          __evaluation: f,
          value: c,
        };
      }
      function i(m, d, f) {
        var c;
        return Object.assign(Object.assign({}, n(m, d, f, f?.value === !0)), {
          idType: (c = f?.id_type) !== null && c !== void 0 ? c : null,
        });
      }
      e._makeFeatureGate = i;
      function a(m, d, f) {
        var c, p;
        const u = (c = f?.value) !== null && c !== void 0 ? c : {};
        return Object.assign(Object.assign({}, n(m, d, f, u)), {
          idType: (p = f?.id_type) !== null && p !== void 0 ? p : null,
          get: h(m, f?.value),
        });
      }
      e._makeDynamicConfig = a;
      function s(m, d, f) {
        var c;
        const p = a(m, d, f);
        return Object.assign(Object.assign({}, p), {
          groupName: (c = f?.group_name) !== null && c !== void 0 ? c : null,
        });
      }
      e._makeExperiment = s;
      function o(m, d, f, c) {
        var p, u;
        return Object.assign(Object.assign({}, n(m, d, f, void 0)), {
          get: h(m, f?.value, c),
          groupName: (p = f?.group_name) !== null && p !== void 0 ? p : null,
          __value: (u = f?.value) !== null && u !== void 0 ? u : {},
        });
      }
      e._makeLayer = o;
      function l(m, d, f, c) {
        return Object.assign(Object.assign(Object.assign({}, m), d), {
          get: h(m.name, f, c),
        });
      }
      e._mergeOverride = l;
      function h(m, d, f) {
        return (c, p) => {
          var u;
          const g = (u = d?.[c]) !== null && u !== void 0 ? u : null;
          return g == null
            ? p ?? null
            : p != null && !(0, r._isTypeMatch)(g, p)
            ? (t.Log.warn(
                `Parameter type mismatch. '${m}.${c}' was found to be type '${typeof g}' but fallback/return type is '${typeof p}'. See https://docs.statsig.com/client/javascript-sdk/#typed-getters`
              ),
              p ?? null)
            : (f?.(c), g);
        };
      }
      e._makeTypedGet = h;
    }),
    vu = D((e) => {
      Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    wu = D((e) => {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.UPDATE_DETAIL_ERROR_MESSAGES = e.createUpdateDetails = void 0);
      var t = (r, n, i, a, s, o) => ({
        duration: i,
        source: n,
        success: r,
        error: a,
        sourceUrl: s,
        warnings: o,
      });
      (e.createUpdateDetails = t),
        (e.UPDATE_DETAIL_ERROR_MESSAGES = {
          NO_NETWORK_DATA:
            "No data was returned from the network. This may be due to a network timeout if a timeout value was specified in the options or ad blocker error.",
        });
    }),
    Pe = D((e) => {
      var t =
          (e && e.__createBinding) ||
          (Object.create
            ? function (h, m, d, f) {
                f === void 0 && (f = d);
                var c = Object.getOwnPropertyDescriptor(m, d);
                (!c ||
                  ("get" in c
                    ? !m.__esModule
                    : c.writable || c.configurable)) &&
                  (c = {
                    enumerable: !0,
                    get: function () {
                      return m[d];
                    },
                  }),
                  Object.defineProperty(h, f, c);
              }
            : function (h, m, d, f) {
                f === void 0 && (f = d), (h[f] = m[d]);
              }),
        r =
          (e && e.__exportStar) ||
          function (h, m) {
            for (var d in h)
              d !== "default" &&
                !Object.prototype.hasOwnProperty.call(m, d) &&
                t(m, h, d);
          };
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.Storage = e.Log = e.EventLogger = e.Diagnostics = void 0),
        rt();
      var n = rt(),
        i = Nn();
      Object.defineProperty(e, "Diagnostics", {
        enumerable: !0,
        get: function () {
          return i.Diagnostics;
        },
      });
      var a = rs();
      Object.defineProperty(e, "EventLogger", {
        enumerable: !0,
        get: function () {
          return a.EventLogger;
        },
      });
      var s = ee();
      Object.defineProperty(e, "Log", {
        enumerable: !0,
        get: function () {
          return s.Log;
        },
      });
      var o = Mt(),
        l = Be();
      Object.defineProperty(e, "Storage", {
        enumerable: !0,
        get: function () {
          return l.Storage;
        },
      }),
        r(rt(), e),
        r(Sr(), e),
        r(au(), e),
        r(su(), e),
        r(Nn(), e),
        r(ou(), e),
        r(as(), e),
        r(lu(), e),
        r(cu(), e),
        r(nt(), e),
        r(uu(), e),
        r(ee(), e),
        r(ss(), e),
        r(Pt(), e),
        r(Qa(), e),
        r(du(), e),
        r(hu(), e),
        r(Oe(), e),
        r(Tr(), e),
        r(Dt(), e),
        r(fu(), e),
        r(xt(), e),
        r(pu(), e),
        r(Ya(), e),
        r(mu(), e),
        r(es(), e),
        r(Mt(), e),
        r(Nt(), e),
        r(gu(), e),
        r(_u(), e),
        r(vu(), e),
        r(ns(), e),
        r(Be(), e),
        r(is(), e),
        r(Fn(), e),
        r(ts(), e),
        r(Bn(), e),
        r(Lt(), e),
        r(wu(), e),
        r(Xa(), e),
        Object.assign((0, n._getStatsigGlobal)(), {
          Log: s.Log,
          SDK_VERSION: o.SDK_VERSION,
        });
    }),
    bu = D((e) => {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.V1InitializeContainer = void 0);
      var t = Pe(),
        r = class {
          constructor(n) {
            this._values = n;
          }
          getGate(n) {
            return this._getResultFromLookup(this._values.feature_gates, n);
          }
          getConfig(n) {
            return this._getResultFromLookup(this._values.dynamic_configs, n);
          }
          getLayer(n) {
            return this._getResultFromLookup(this._values.layer_configs, n);
          }
          getParamStore(n) {
            return this._getResultFromLookup(this._values.param_stores, n);
          }
          getConfigList() {
            return Object.keys(this._values.dynamic_configs);
          }
          getExposureMapping() {
            return this._values.exposures;
          }
          _getResultFromLookup(n, i) {
            var a, s;
            return n &&
              (s =
                (a = n[i]) !== null && a !== void 0
                  ? a
                  : n[(0, t._DJB2)(i)]) !== null &&
              s !== void 0
              ? s
              : null;
          }
        };
      e.V1InitializeContainer = r;
    }),
    yu = D((e) => {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.V2InitializeContainer = void 0);
      var t = Pe(),
        r = class {
          constructor(i) {
            this._values = i;
          }
          getGate(i) {
            var a, s, o;
            const l = this._getResultFromLookup(this._values.feature_gates, i);
            return l
              ? {
                  name: i,
                  value: l.v === !0,
                  rule_id: (a = l.r) !== null && a !== void 0 ? a : "default",
                  secondary_exposures:
                    (s = l.s) !== null && s !== void 0 ? s : [],
                  id_type: (o = l.i) !== null && o !== void 0 ? o : "",
                  version: n(l.version),
                }
              : null;
          }
          getConfig(i) {
            var a, s, o, l;
            const h = this._getResultFromLookup(
              this._values.dynamic_configs,
              i
            );
            return h
              ? {
                  name: i,
                  value:
                    (a = this._values.values[h.v]) !== null && a !== void 0
                      ? a
                      : {},
                  rule_id: h.r,
                  secondary_exposures:
                    (s = h.s) !== null && s !== void 0 ? s : [],
                  id_type: (o = h.i) !== null && o !== void 0 ? o : "",
                  is_user_in_experiment: h.ue === !0,
                  passed: h.p === !0,
                  group_name: (l = h.gn) !== null && l !== void 0 ? l : void 0,
                  is_experiment_active: h.ea === !0,
                  group: h.r,
                  is_device_based: h.i === "stableID",
                  version: n(h.version),
                }
              : null;
          }
          getLayer(i) {
            var a, s, o, l, h, m;
            const d = this._getResultFromLookup(this._values.layer_configs, i);
            return d
              ? {
                  name: i,
                  value:
                    (a = this._values.values[d.v]) !== null && a !== void 0
                      ? a
                      : {},
                  rule_id: d.r,
                  secondary_exposures:
                    (s = d.s) !== null && s !== void 0 ? s : [],
                  is_user_in_experiment: d.ue === !0,
                  group_name: (o = d.gn) !== null && o !== void 0 ? o : void 0,
                  is_experiment_active: d.ea === !0,
                  group: d.r,
                  is_device_based: d.i === "stableID",
                  allocated_experiment_name:
                    (l = d.ae) !== null && l !== void 0 ? l : "",
                  explicit_parameters:
                    (h = d.ep) !== null && h !== void 0 ? h : [],
                  undelegated_secondary_exposures:
                    (m = d.us) !== null && m !== void 0 ? m : [],
                  parameter_rule_ids: d.pr,
                  version: n(d.version),
                }
              : null;
          }
          getParamStore(i) {
            return this._getResultFromLookup(this._values.param_stores, i);
          }
          getConfigList() {
            return Object.keys(this._values.dynamic_configs);
          }
          getExposureMapping() {
            return this._values.exposures;
          }
          _getResultFromLookup(i, a) {
            var s, o;
            return i &&
              (o =
                (s = i[a]) !== null && s !== void 0
                  ? s
                  : i[(0, t._DJB2)(a)]) !== null &&
              o !== void 0
              ? o
              : null;
          }
        };
      e.V2InitializeContainer = r;
      function n(i) {
        return i == null ? void 0 : String(i);
      }
    }),
    Su = D((e) => {
      Object.defineProperty(e, "__esModule", { value: !0 });
      var t = Pe(),
        r = bu(),
        n = yu(),
        i = class {
          constructor(c, p, u = !1) {
            (this._sdkKey = c),
              (this._options = p),
              (this._liveValuesEnabled = u),
              (this._valuesForExternalUse = null),
              (this._values = null),
              (this._source = "Uninitialized"),
              (this._lcut = 0),
              (this._receivedAt = 0),
              (this._bootstrapMetadata = null),
              (this._warnings = new Set()),
              (this._liveState = null);
          }
          reset() {
            (this._values = null),
              (this._valuesForExternalUse = null),
              (this._source = "Loading"),
              (this._lcut = 0),
              (this._receivedAt = 0),
              (this._loadedAt = void 0),
              (this._bootstrapMetadata = null),
              this._warnings.clear(),
              this._resetLiveValues();
          }
          finalize() {
            this._values || (this._source = "NoValues");
          }
          getValues() {
            return this._valuesForExternalUse;
          }
          setValues(c, p, u) {
            var g, w;
            if (!c) return !1;
            const v = (0, t._typedJsonParse)(
              c.data,
              "has_updates",
              "EvaluationResponse"
            );
            if (v == null) return !1;
            if (
              ((this._source = c.source),
              v?.has_updates !== !0 ||
                ((g = v.time) !== null && g !== void 0 ? g : 0) < this._lcut)
            )
              return !0;
            (this._valuesForExternalUse = (0, t._typedJsonParse)(
              c.data,
              "has_updates",
              "EvaluationResponse"
            )),
              (this._lcut = v.time),
              (this._receivedAt = c.receivedAt);
            const S = u ?? Date.now();
            if (((this._loadedAt = S), v.response_format === "init-v2"))
              (this._values = new n.V2InitializeContainer(v)),
                this._resetLiveValues();
            else {
              this._values = new r.V1InitializeContainer(v);
              const y = this._liveState;
              (y?.cursor == null || v.time >= y.lcut) &&
                this._seedLiveValues(v, c, p, S);
            }
            return (
              (this._bootstrapMetadata = this._extractBootstrapMetadata(
                c.source,
                v
              )),
              c.source && v.user && this._setWarningState(p, v),
              t.SDKFlags.setFlags(
                this._sdkKey,
                (w = v.sdk_flags) !== null && w !== void 0 ? w : {}
              ),
              !0
            );
          }
          getWarnings() {
            if (this._warnings.size !== 0) return Array.from(this._warnings);
          }
          getGate(c) {
            const p = this._liveState;
            if (p && this._isLiveName(p.entityNames.feature_gates, c)) {
              const w = p.values.getGate(c);
              return this._getLiveDetailedStoreResult(w, p);
            }
            const u = p
              ? this._getRetainedLiveValue(p.retainedValues.feature_gates, c)
              : void 0;
            if (u) return this._getRetainedLiveDetailedStoreResult(u);
            const g = this._values ? this._values.getGate(c) : null;
            return this._getDetailedStoreResult(g);
          }
          getConfig(c) {
            const p = this._liveState;
            if (p && this._isLiveName(p.entityNames.dynamic_configs, c)) {
              const w = p.values.getConfig(c);
              return this._getLiveDetailedStoreResult(w, p);
            }
            const u = p
              ? this._getRetainedLiveValue(p.retainedValues.dynamic_configs, c)
              : void 0;
            if (u) return this._getRetainedLiveDetailedStoreResult(u);
            const g = this._values ? this._values.getConfig(c) : null;
            return this._getDetailedStoreResult(g);
          }
          getConfigList() {
            var c, p, u, g;
            const w = this._liveState;
            if (!w)
              return (p =
                (c = this._values) === null || c === void 0
                  ? void 0
                  : c.getConfigList()) !== null && p !== void 0
                ? p
                : [];
            const v = w.entityNames.dynamic_configs,
              S = new Set(w.retainedValues.dynamic_configs.keys()),
              y = d(v),
              T = d(S),
              E =
                (g =
                  (u = this._values) === null || u === void 0
                    ? void 0
                    : u.getConfigList().filter((C) => !f(y, C) && !f(T, C))) !==
                  null && g !== void 0
                  ? g
                  : [],
              I = w.values.getConfigList().filter((C) => v.has(C));
            return [...new Set([...E, ...I, ...S])];
          }
          getLayer(c) {
            const p = this._liveState;
            if (p && this._isLiveName(p.entityNames.layer_configs, c)) {
              const w = p.values.getLayer(c);
              return this._getLiveDetailedStoreResult(w, p);
            }
            const u = p
              ? this._getRetainedLiveValue(p.retainedValues.layer_configs, c)
              : void 0;
            if (u) return this._getRetainedLiveDetailedStoreResult(u);
            const g = this._values ? this._values.getLayer(c) : null;
            return this._getDetailedStoreResult(g);
          }
          getParamStore(c) {
            const p = this._values ? this._values.getParamStore(c) : null;
            return this._getDetailedStoreResult(p);
          }
          getSource() {
            return this._source;
          }
          getExposureMapping() {
            var c;
            return (c = this._values) === null || c === void 0
              ? void 0
              : c.getExposureMapping();
          }
          getLiveCursor() {
            const c = this._liveState;
            return c?.cursor == null
              ? {}
              : Object.assign(
                  {
                    sinceTime: c.lcut,
                    previousDerivedFields: c.cursor.previousDerivedFields,
                  },
                  c.cursor.fullChecksum == null
                    ? {}
                    : { fullChecksum: c.cursor.fullChecksum }
                );
          }
          advanceLiveCursor(c) {
            const p = this._liveState;
            return p?.cursor == null || !Number.isFinite(c) || c < p.lcut
              ? !1
              : ((p.lcut = c), !0);
          }
          setLiveValues(c, p) {
            if (!this._liveValuesEnabled) return !1;
            const u = this._liveState;
            if (u?.cursor != null && c.time < u.lcut) return !1;
            const g = a(c.live_entity_names),
              w = u?.cursor != null ? this._retainDroppedLiveValues(u, g) : s();
            return (
              h(w, g),
              (this._liveState = {
                values: new r.V1InitializeContainer(c),
                entityNames: g,
                retainedValues: w,
                source: "Network",
                lcut: c.time,
                receivedAt: p,
                loadedAt: p,
                cursor: {
                  previousDerivedFields: c.derived_fields,
                  fullChecksum: c.full_checksum,
                },
              }),
              !0
            );
          }
          _extractBootstrapMetadata(c, p) {
            if (c !== "Bootstrap") return null;
            const u = {};
            return (
              p.user && (u.user = p.user),
              p.sdkInfo && (u.generatorSDKInfo = p.sdkInfo),
              (u.lcut = p.time),
              u
            );
          }
          _getDetailedStoreResult(c) {
            return { result: c, details: this._getDetails(c == null) };
          }
          _getLiveDetailedStoreResult(c, p) {
            return { result: c, details: this._getLiveDetails(c == null, p) };
          }
          _getRetainedLiveDetailedStoreResult(c) {
            const p = Object.assign({}, c.details);
            return (
              p.warnings && (p.warnings = [...p.warnings]),
              { result: c.result, details: p }
            );
          }
          _retainDroppedLiveValues(c, p) {
            const u = o(c.retainedValues),
              g = this._getLiveDetails(!1, c),
              w = this._getLiveDetails(!0, c);
            return (
              l(
                c.entityNames.feature_gates,
                p.feature_gates,
                u.feature_gates,
                (v) => c.values.getGate(v),
                g,
                w
              ),
              l(
                c.entityNames.dynamic_configs,
                p.dynamic_configs,
                u.dynamic_configs,
                (v) => c.values.getConfig(v),
                g,
                w
              ),
              l(
                c.entityNames.layer_configs,
                p.layer_configs,
                u.layer_configs,
                (v) => c.values.getLayer(v),
                g,
                w
              ),
              u
            );
          }
          _getRetainedLiveValue(c, p) {
            var u;
            return (u = c.get(p)) !== null && u !== void 0
              ? u
              : c.get((0, t._DJB2)(p));
          }
          _seedLiveValues(c, p, u, g) {
            if (
              !this._liveValuesEnabled ||
              c.has_updates !== !0 ||
              !("live_entity_names" in c) ||
              c.live_entity_names == null
            ) {
              this._resetLiveValues();
              return;
            }
            const w =
              p.fullUserHash != null &&
              p.fullUserHash === (0, t._getFullUserHash)(u);
            this._liveState = {
              values: new r.V1InitializeContainer(c),
              entityNames: a(c.live_entity_names),
              retainedValues: s(),
              source: p.source,
              lcut: c.time,
              receivedAt: p.receivedAt,
              loadedAt: g,
              cursor: w ? { previousDerivedFields: c.derived_fields } : null,
            };
          }
          _resetLiveValues() {
            this._liveState = null;
          }
          _isLiveName(c, p) {
            return c.has(p) || c.has((0, t._DJB2)(p));
          }
          _setWarningState(c, p) {
            var u, g, w;
            const v = t.StableID.get(this._sdkKey);
            if (
              ((u = c.customIDs) === null || u === void 0
                ? void 0
                : u.stableID) !== v &&
              ((!((g = c.customIDs) === null || g === void 0) && g.stableID) ||
                v)
            ) {
              this._warnings.add("StableIDMismatch");
              return;
            }
            if ("user" in p) {
              let S = p.user,
                y = Object.assign(Object.assign({}, c), {
                  analyticsOnlyMetadata: void 0,
                  privateAttributes: void 0,
                });
              !((w = this._options) === null || w === void 0) &&
                w.disableStableID &&
                ((y = Object.assign(Object.assign({}, y), {
                  customIDs: Object.assign(Object.assign({}, y.customIDs), {
                    stableID: void 0,
                  }),
                })),
                (S = Object.assign(Object.assign({}, S), {
                  customIDs: Object.assign(Object.assign({}, S.customIDs), {
                    stableID: void 0,
                  }),
                }))),
                (0, t._getFullUserHash)(y) !== (0, t._getFullUserHash)(S) &&
                  this._warnings.add("PartialUserMatch");
            }
          }
          getCurrentSourceDetails() {
            if (this._source === "Uninitialized" || this._source === "NoValues")
              return { reason: this._source };
            const c = {
              reason: this._source,
              lcut: this._lcut,
              receivedAt: this._receivedAt,
            };
            return (
              this._loadedAt != null && (c.loadedAt = this._loadedAt),
              this._warnings.size > 0 &&
                (c.warnings = Array.from(this._warnings)),
              c
            );
          }
          _getDetails(c) {
            var p, u;
            const g = this.getCurrentSourceDetails();
            let w = g.reason;
            const v = (p = g.warnings) !== null && p !== void 0 ? p : [];
            this._source === "Bootstrap" && v.length > 0 && (w = w + v[0]),
              w !== "Uninitialized" &&
                w !== "NoValues" &&
                (w = `${w}:${c ? "Unrecognized" : "Recognized"}`);
            const S =
              this._source === "Bootstrap" &&
              (u = this._bootstrapMetadata) !== null &&
              u !== void 0
                ? u
                : void 0;
            return (
              S && (g.bootstrapMetadata = S),
              Object.assign(Object.assign({}, g), { reason: w })
            );
          }
          _getLiveDetails(c, p) {
            if (p.source === "Uninitialized" || p.source === "NoValues")
              return { reason: p.source };
            const u = {
                reason: p.source,
                lcut: p.lcut,
                receivedAt: p.receivedAt,
                loadedAt: p.loadedAt,
              },
              g = Array.from(this._warnings);
            g.length > 0 && (u.warnings = g);
            let w = u.reason;
            return (
              p.source === "Bootstrap" && g.length > 0 && (w = w + g[0]),
              (u.reason = `${w}:${c ? "Unrecognized" : "Recognized"}`),
              p.source === "Bootstrap" &&
                this._bootstrapMetadata &&
                (u.bootstrapMetadata = this._bootstrapMetadata),
              u
            );
          }
        };
      e.default = i;
      function a(c) {
        return {
          feature_gates: new Set(c.feature_gates),
          dynamic_configs: new Set([...c.dynamic_configs, ...c.experiments]),
          layer_configs: new Set(c.layer_configs),
        };
      }
      function s() {
        return {
          feature_gates: new Map(),
          dynamic_configs: new Map(),
          layer_configs: new Map(),
        };
      }
      function o(c) {
        return {
          feature_gates: new Map(c.feature_gates),
          dynamic_configs: new Map(c.dynamic_configs),
          layer_configs: new Map(c.layer_configs),
        };
      }
      function l(c, p, u, g, w, v) {
        const S = d(p);
        c.forEach((y) => {
          if (f(S, y)) return;
          const T = g(y);
          u.set(y, { result: T, details: T ? w : v });
        });
      }
      function h(c, p) {
        m(c.feature_gates, p.feature_gates),
          m(c.dynamic_configs, p.dynamic_configs),
          m(c.layer_configs, p.layer_configs);
      }
      function m(c, p) {
        const u = d(p);
        c.forEach((g, w) => {
          f(u, w) && c.delete(w);
        });
      }
      function d(c) {
        const p = new Set(c);
        return c.forEach((u) => p.add((0, t._DJB2)(u))), p;
      }
      function f(c, p) {
        return c.has(p) || c.has((0, t._DJB2)(p));
      }
    }),
    Tu = D((e) => {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e._resolveDeltasResponse = void 0);
      var t = Pe(),
        r = 2;
      function n(o, l) {
        const h = (0, t._typedJsonParse)(
          l,
          "checksum",
          "DeltasEvaluationResponse"
        );
        if (!h) return { hadBadDeltaChecksum: !0 };
        const m = a(i(o, h)),
          d = (0, t._DJB2Object)(
            {
              feature_gates: m.feature_gates,
              dynamic_configs: m.dynamic_configs,
              layer_configs: m.layer_configs,
            },
            r
          );
        return d !== h.checksumV2
          ? {
              hadBadDeltaChecksum: !0,
              badChecksum: d,
              badMergedConfigs: m,
              badFullResponse: h.deltas_full_response,
            }
          : JSON.stringify(m);
      }
      e._resolveDeltasResponse = n;
      function i(o, l) {
        return Object.assign(Object.assign(Object.assign({}, o), l), {
          feature_gates: Object.assign(
            Object.assign({}, o.feature_gates),
            l.feature_gates
          ),
          layer_configs: Object.assign(
            Object.assign({}, o.layer_configs),
            l.layer_configs
          ),
          dynamic_configs: Object.assign(
            Object.assign({}, o.dynamic_configs),
            l.dynamic_configs
          ),
        });
      }
      function a(o) {
        const l = o;
        return (
          s(o.deleted_gates, l.feature_gates),
          delete l.deleted_gates,
          s(o.deleted_configs, l.dynamic_configs),
          delete l.deleted_configs,
          s(o.deleted_layers, l.layer_configs),
          delete l.deleted_layers,
          l
        );
      }
      function s(o, l) {
        o?.forEach((h) => {
          delete l[h];
        });
      }
    }),
    os = D((e) => {
      var t =
        (e && e.__awaiter) ||
        function (o, l, h, m) {
          function d(f) {
            return f instanceof h
              ? f
              : new h(function (c) {
                  c(f);
                });
          }
          return new (h || (h = Promise))(function (f, c) {
            function p(w) {
              try {
                g(m.next(w));
              } catch (v) {
                c(v);
              }
            }
            function u(w) {
              try {
                g(m.throw(w));
              } catch (v) {
                c(v);
              }
            }
            function g(w) {
              w.done ? f(w.value) : d(w.value).then(p, u);
            }
            g((m = m.apply(o, l || [])).next());
          });
        };
      Object.defineProperty(e, "__esModule", { value: !0 });
      var r = Pe(),
        n = Tu(),
        i = "x-statsig-live-overlay-lcut",
        a = class extends r.NetworkCore {
          constructor(o, l) {
            super(o, l);
            const h = o?.networkConfig;
            (this._option = o),
              (this._initializeUrlConfig = new r.UrlConfiguration(
                r.Endpoint._initialize,
                h?.initializeUrl,
                h?.api,
                h?.initializeFallbackUrls
              ));
          }
          fetchEvaluations(o, l, h, m, d) {
            return t(this, void 0, void 0, function* () {
              var f, c, p, u, g, w;
              const v = l
                ? (0, r._typedJsonParse)(l, "has_updates", "InitializeResponse")
                : null;
              let S = {
                user: m,
                hash:
                  (p =
                    (c =
                      (f = this._option) === null || f === void 0
                        ? void 0
                        : f.networkConfig) === null || c === void 0
                      ? void 0
                      : c.initializeHashAlgorithm) !== null && p !== void 0
                    ? p
                    : "djb2",
                deltasResponseRequested: !1,
                full_checksum: null,
              };
              if (v?.has_updates) {
                const y =
                  v?.hash_used !==
                  ((w =
                    (g =
                      (u = this._option) === null || u === void 0
                        ? void 0
                        : u.networkConfig) === null || g === void 0
                      ? void 0
                      : g.initializeHashAlgorithm) !== null && w !== void 0
                    ? w
                    : "djb2");
                S = Object.assign(Object.assign({}, S), {
                  sinceTime: d && !y ? v.time : 0,
                  previousDerivedFields:
                    "derived_fields" in v && d ? v.derived_fields : {},
                  deltasResponseRequested: !0,
                  full_checksum: v.full_checksum,
                  partialUserMatchSinceTime: y ? 0 : v.time,
                });
              }
              return this._fetchEvaluations(o, v, S, h);
            });
          }
          fetchLiveEvaluations(o, l, h, m, d, f) {
            return t(this, void 0, void 0, function* () {
              var c, p, u, g;
              const w = Object.assign(
                  {
                    responseMode: "live_overlay",
                    user: l,
                    hash:
                      (u =
                        (p =
                          (c = this._option) === null || c === void 0
                            ? void 0
                            : c.networkConfig) === null || p === void 0
                          ? void 0
                          : p.initializeHashAlgorithm) !== null && u !== void 0
                        ? u
                        : "djb2",
                    sinceTime: h,
                    previousDerivedFields: m,
                  },
                  f == null ? {} : { full_checksum: f }
                ),
                v = yield this.post({
                  sdkKey: o,
                  urlConfig: this._initializeUrlConfig,
                  data: w,
                  retries: 2,
                  isStatsigEncodable: !0,
                  priority: d,
                  skipInitTracking: !0,
                });
              if (v?.code === 204) {
                const y = s(
                  (g = v.headers) === null || g === void 0 ? void 0 : g.get(i)
                );
                return y == null
                  ? { hasUpdates: !1 }
                  : { hasUpdates: !1, lcut: y };
              }
              if (v?.code !== 200 || v.body == null) return null;
              const S = (0, r._typedJsonParse)(
                v.body,
                "response_mode",
                "LiveOverlayResponse"
              );
              return S?.response_mode !== "live_overlay"
                ? null
                : { hasUpdates: !0, values: S };
            });
          }
          _fetchEvaluations(o, l, h, m) {
            return t(this, void 0, void 0, function* () {
              var d, f;
              const c = yield this.post({
                sdkKey: o,
                urlConfig: this._initializeUrlConfig,
                data: h,
                retries: 2,
                isStatsigEncodable: !0,
                priority: m,
              });
              if (c?.code === 204) return '{"has_updates": false}';
              if (c?.code !== 200)
                return (d = c?.body) !== null && d !== void 0 ? d : null;
              if (
                l?.has_updates !== !0 ||
                ((f = c.body) === null || f === void 0
                  ? void 0
                  : f.includes('"is_delta":true')) !== !0 ||
                h.deltasResponseRequested !== !0
              )
                return c.body;
              const p = (0, n._resolveDeltasResponse)(l, c.body);
              return typeof p == "string"
                ? p
                : this._fetchEvaluations(
                    o,
                    l,
                    Object.assign(Object.assign(Object.assign({}, h), p), {
                      deltasResponseRequested: !1,
                    }),
                    m
                  );
            });
          }
        };
      e.default = a;
      function s(o) {
        if (o == null || o.trim() === "") return null;
        const l = Number(o);
        return Number.isFinite(l) && l >= 0 ? l : null;
      }
    }),
    Eu = D((e) => {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e._makeParamStoreGetter = void 0);
      var t = Pe(),
        r = { disableExposureLog: !0 };
      function n(d) {
        return d == null || d.disableExposureLog === !1;
      }
      function i(d, f) {
        return f != null && !(0, t._isTypeMatch)(d, f);
      }
      function a(d, f) {
        return d.value;
      }
      function s(d, f, c) {
        return d.getFeatureGate(f.gate_name, n(c) ? void 0 : r).value
          ? f.pass_value
          : f.fail_value;
      }
      function o(d, f, c, p) {
        const u = d
          .getDynamicConfig(f.config_name, n(p) ? void 0 : r)
          .get(f.param_name);
        return i(u, c) ? c : u;
      }
      function l(d, f, c, p) {
        const u = d
          .getExperiment(f.experiment_name, n(p) ? void 0 : r)
          .get(f.param_name);
        return i(u, c) ? c : u;
      }
      function h(d, f, c, p) {
        const u = d.getLayer(f.layer_name, n(p) ? void 0 : r).get(f.param_name);
        return i(u, c) ? c : u;
      }
      function m(d, f, c) {
        return (p, u) => {
          if (f == null) return u;
          const g = f[p];
          if (g == null || (u != null && (0, t._typeOf)(u) !== g.param_type))
            return u;
          switch (g.ref_type) {
            case "static":
              return a(g, c);
            case "gate":
              return s(d, g, c);
            case "dynamic_config":
              return o(d, g, u, c);
            case "experiment":
              return l(d, g, u, c);
            case "layer":
              return h(d, g, u, c);
            default:
              return u;
          }
        };
      }
      e._makeParamStoreGetter = m;
    }),
    Iu = D((e) => {
      var t =
        (e && e.__awaiter) ||
        function (a, s, o, l) {
          function h(m) {
            return m instanceof o
              ? m
              : new o(function (d) {
                  d(m);
                });
          }
          return new (o || (o = Promise))(function (m, d) {
            function f(u) {
              try {
                p(l.next(u));
              } catch (g) {
                d(g);
              }
            }
            function c(u) {
              try {
                p(l.throw(u));
              } catch (g) {
                d(g);
              }
            }
            function p(u) {
              u.done ? m(u.value) : h(u.value).then(f, c);
            }
            p((l = l.apply(a, s || [])).next());
          });
        };
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.StatsigEvaluationsDataAdapter = void 0);
      var r = Pe(),
        n = os(),
        i = class extends r.DataAdapterCore {
          constructor() {
            super("EvaluationsDataAdapter", "evaluations"),
              (this._network = null),
              (this._options = null);
          }
          attach(a, s, o) {
            super.attach(a, s, o),
              o !== null && o instanceof n.default
                ? (this._network = o)
                : (this._network = new n.default(s ?? {}));
          }
          getDataAsync(a, s, o) {
            return this._getDataAsyncImpl(
              a,
              (0, r._normalizeUser)(s, this._options),
              o
            );
          }
          prefetchData(a, s) {
            return this._prefetchDataImpl(a, s);
          }
          setData(a) {
            const s = (0, r._typedJsonParse)(a, "has_updates", "data");
            s && "user" in s
              ? super.setData(a, s.user)
              : r.Log.error(
                  "StatsigUser not found. You may be using an older server SDK version. Please upgrade your SDK or use setDataLegacy."
                );
          }
          setDataLegacy(a, s) {
            super.setData(a, s);
          }
          _fetchFromNetwork(a, s, o, l) {
            return t(this, void 0, void 0, function* () {
              var h;
              const m = yield (h = this._network) === null || h === void 0
                ? void 0
                : h.fetchEvaluations(this._getSdkKey(), a, o?.priority, s, l);
              return m ?? null;
            });
          }
          _getCacheKey(a) {
            var s;
            const o = (0, r._getStorageKey)(
              this._getSdkKey(),
              a,
              (s = this._options) === null || s === void 0
                ? void 0
                : s.customUserCacheKeyFunc
            );
            return `${r.DataAdapterCachePrefix}.${this._cacheSuffix}.${o}`;
          }
          _isCachedResultValidFor204(a, s) {
            return (
              a.fullUserHash != null &&
              a.fullUserHash === (0, r._getFullUserHash)(s)
            );
          }
        };
      e.StatsigEvaluationsDataAdapter = i;
    }),
    Au = D((e) => {
      var t =
        (e && e.__awaiter) ||
        function (m, d, f, c) {
          function p(u) {
            return u instanceof f
              ? u
              : new f(function (g) {
                  g(u);
                });
          }
          return new (f || (f = Promise))(function (u, g) {
            function w(y) {
              try {
                S(c.next(y));
              } catch (T) {
                g(T);
              }
            }
            function v(y) {
              try {
                S(c.throw(y));
              } catch (T) {
                g(T);
              }
            }
            function S(y) {
              y.done ? u(y.value) : p(y.value).then(w, v);
            }
            S((c = c.apply(m, d || [])).next());
          });
        };
      Object.defineProperty(e, "__esModule", { value: !0 });
      var r = Pe(),
        n = Su(),
        i = os(),
        a = Eu(),
        s = Iu(),
        o = 600 * 1e3,
        l = "live_values_auto_refresh_interval_seconds",
        h = class Rn extends r.StatsigClientBase {
          static instance(d) {
            const f = (0, r._getStatsigGlobal)().instance(d);
            return f instanceof Rn
              ? f
              : (r.Log.warn(
                  (0, r._isServerEnv)()
                    ? "StatsigClient.instance is not supported in server environments"
                    : "Unable to find StatsigClient instance"
                ),
                new Rn(d ?? "", {}));
          }
          constructor(d, f, c = null) {
            var p, u;
            r.SDKType._setClientType(d, "javascript-client");
            const g = new i.default(c, (v) => {
              this.$emt(v);
            });
            super(
              d,
              (p = c?.dataAdapter) !== null && p !== void 0
                ? p
                : new s.StatsigEvaluationsDataAdapter(),
              g,
              c
            ),
              (this._possibleFirstTouchMetadata = {}),
              (this._liveValuesAutoRefreshTimer = null),
              (this.getFeatureGate = this._memoize(
                r.MemoPrefix._gate,
                this._getFeatureGateImpl.bind(this)
              )),
              (this.getDynamicConfig = this._memoize(
                r.MemoPrefix._dynamicConfig,
                this._getDynamicConfigImpl.bind(this)
              )),
              (this.getExperiment = this._memoize(
                r.MemoPrefix._experiment,
                this._getExperimentImpl.bind(this)
              )),
              (this.getConfigList = this._memoize(
                r.MemoPrefix._configList,
                this._getConfigListImpl.bind(this)
              )),
              (this.getLayer = this._memoize(
                r.MemoPrefix._layer,
                this._getLayerImpl.bind(this)
              )),
              (this.getParameterStore = this._memoize(
                r.MemoPrefix._paramStore,
                this._getParameterStoreImpl.bind(this)
              )),
              (this._liveValuesAutoRefreshIntervalMs =
                c?.enableLiveValuesAutoRefresh === !0 ? o : void 0),
              (this._store = new n.default(
                d,
                c ?? null,
                this._liveValuesAutoRefreshIntervalMs != null
              )),
              (this._network = g),
              (this._user = this._configureUser(f, c)),
              (this._sdkInstanceID = (0, r.getUUID)()),
              (this._contextHandle = new r.PrecomputedEvaluationsContextHandle(
                d,
                () => this._options,
                () => this._errorBoundary,
                () => this._store.getValues(),
                () => this._user,
                () => this._sdkInstanceID
              ));
            const w = (u = c?.plugins) !== null && u !== void 0 ? u : [];
            for (const v of w) v.bind(this);
          }
          initializeSync(d) {
            var f;
            if (this.loadingStatus !== "Uninitialized")
              return (0, r.createUpdateDetails)(
                !0,
                this._store.getSource(),
                -1,
                null,
                null,
                [
                  "MultipleInitializations",
                  ...((f = this._store.getWarnings()) !== null && f !== void 0
                    ? f
                    : []),
                ]
              );
            this._logger.start();
            const c = this.updateUserSync(this._user, d);
            return this._startLiveValuesAutoRefresh(), c;
          }
          initializeAsync(d) {
            return t(this, void 0, void 0, function* () {
              if (this._initializePromise) return this._initializePromise;
              const f = this._initializeAsyncImpl(d);
              this._initializePromise = f;
              const c = yield f;
              return (
                this._initializePromise === f &&
                  this._startLiveValuesAutoRefresh(),
                c
              );
            });
          }
          updateUserSync(d, f) {
            const c = performance.now();
            try {
              return this._updateUserSyncImpl(d, f, c);
            } catch (p) {
              const u = p instanceof Error ? p : new Error(String(p));
              return this._createErrorUpdateDetails(u, c);
            }
          }
          _updateUserSyncImpl(d, f, c) {
            var p;
            const u = [
              ...((p = this._store.getWarnings()) !== null && p !== void 0
                ? p
                : []),
            ];
            this._resetForUser(d);
            const g = this.dataAdapter.getDataSync(this._user);
            g == null && u.push("NoCachedValues"),
              this._store.setValues(g, this._user),
              this._finalizeUpdate(g);
            const w = f?.disableBackgroundCacheRefresh;
            return w === !0 || (w == null && g?.source === "Bootstrap")
              ? (0, r.createUpdateDetails)(
                  !0,
                  this._store.getSource(),
                  performance.now() - c,
                  this._errorBoundary.getLastSeenErrorAndReset(),
                  this._network.getLastUsedInitUrlAndReset(),
                  u
                )
              : (this._runPostUpdate(g ?? null, this._user),
                (0, r.createUpdateDetails)(
                  !0,
                  this._store.getSource(),
                  performance.now() - c,
                  this._errorBoundary.getLastSeenErrorAndReset(),
                  this._network.getLastUsedInitUrlAndReset(),
                  u
                ));
          }
          updateUserAsync(d, f) {
            return t(this, void 0, void 0, function* () {
              const c = performance.now();
              try {
                return yield this._updateUserAsyncImpl(d, f, "update_user");
              } catch (p) {
                const u = p instanceof Error ? p : new Error(String(p));
                return this._createErrorUpdateDetails(u, c);
              }
            });
          }
          refreshValuesAsync(d) {
            return t(this, void 0, void 0, function* () {
              const f = performance.now();
              try {
                return yield this._refreshValuesAsyncImpl(d);
              } catch (c) {
                const p = c instanceof Error ? c : new Error(String(c));
                return this._createErrorUpdateDetails(p, f);
              }
            });
          }
          _updateUserAsyncImpl(d, f, c) {
            return t(this, void 0, void 0, function* () {
              this._resetForUser(d);
              const p = this._user;
              r.Diagnostics._markInitOverallStart(this._sdkKey, c);
              let u = this.dataAdapter.getDataSync(p);
              if (
                (this._store.setValues(u, this._user),
                this._setStatus("Loading", u),
                (u = yield this.dataAdapter.getDataAsync(u, p, f)),
                p !== this._user)
              )
                return (0, r.createUpdateDetails)(
                  !1,
                  this._store.getSource(),
                  -1,
                  new Error("User changed during update"),
                  this._network.getLastUsedInitUrlAndReset()
                );
              let g = !1;
              u != null &&
                (r.Diagnostics._markInitProcessStart(this._sdkKey, c),
                (g = this._store.setValues(u, this._user, u.receivedAt)),
                r.Diagnostics._markInitProcessEnd(
                  this._sdkKey,
                  { success: g },
                  c
                )),
                this._finalizeUpdate(u),
                g ||
                  (this._errorBoundary.attachErrorIfNoneExists(
                    r.UPDATE_DETAIL_ERROR_MESSAGES.NO_NETWORK_DATA
                  ),
                  this.$emt({ name: "initialization_failure" })),
                r.Diagnostics._markInitOverallEnd(
                  this._sdkKey,
                  g,
                  this._store.getCurrentSourceDetails(),
                  c
                );
              const w = r.Diagnostics._enqueueDiagnosticsEvent(
                this._user,
                this._logger,
                this._sdkKey,
                this._options,
                c
              );
              return (0,
              r.createUpdateDetails)(g, this._store.getSource(), w, this._errorBoundary.getLastSeenErrorAndReset(), this._network.getLastUsedInitUrlAndReset(), this._store.getWarnings());
            });
          }
          _refreshValuesAsyncImpl(d) {
            return t(this, void 0, void 0, function* () {
              const f = "refresh_values",
                c = this._user;
              r.Diagnostics._markInitOverallStart(this._sdkKey, f);
              const p = this.dataAdapter.getDataSync(c),
                u = yield this.dataAdapter.getDataAsync(p, c, d);
              if (c !== this._user)
                return (0, r.createUpdateDetails)(
                  !1,
                  this._store.getSource(),
                  -1,
                  new Error("User changed during refresh"),
                  this._network.getLastUsedInitUrlAndReset()
                );
              let g = !1;
              u != null &&
                (r.Diagnostics._markInitProcessStart(this._sdkKey, f),
                (g = this._store.setValues(u, this._user, u.receivedAt)),
                r.Diagnostics._markInitProcessEnd(
                  this._sdkKey,
                  { success: g },
                  f
                )),
                this._finalizeUpdate(u),
                g ||
                  this._errorBoundary.attachErrorIfNoneExists(
                    r.UPDATE_DETAIL_ERROR_MESSAGES.NO_NETWORK_DATA
                  ),
                r.Diagnostics._markInitOverallEnd(
                  this._sdkKey,
                  g,
                  this._store.getCurrentSourceDetails(),
                  f
                );
              const w = r.Diagnostics._enqueueDiagnosticsEvent(
                this._user,
                this._logger,
                this._sdkKey,
                this._options,
                f
              );
              return (0,
              r.createUpdateDetails)(g, this._store.getSource(), w, this._errorBoundary.getLastSeenErrorAndReset(), this._network.getLastUsedInitUrlAndReset(), this._store.getWarnings());
            });
          }
          getContext() {
            let d = (0, r._cloneObject)("StatsigUser", this._user);
            return (
              d == null && (r.Log.error("Failed to clone user"), (d = {})),
              {
                sdkKey: this._sdkKey,
                options: this._options,
                values: this._store.getValues(),
                user: d,
                errorBoundary: this._errorBoundary,
                session: r.StatsigSession.get(this._sdkKey),
                stableID: r.StableID.get(this._sdkKey),
                sdkInstanceID: this._sdkInstanceID,
              }
            );
          }
          getContextHandle() {
            return this._contextHandle;
          }
          checkGate(d, f) {
            return this.getFeatureGate(d, f).value;
          }
          logEvent(d, f, c) {
            const p =
              typeof d == "string"
                ? { eventName: d, value: f, metadata: c }
                : d;
            this.$emt({ name: "log_event_called", event: p }),
              this._logger.enqueue(
                Object.assign(Object.assign({}, p), {
                  user: this._user,
                  time: Date.now(),
                })
              );
          }
          updateUserWithAnalyticsOnlyMetadata(d) {
            this._user = this._configureUser(
              Object.assign(Object.assign({}, this._user), {
                analyticsOnlyMetadata: d,
              }),
              this._options
            );
          }
          _primeReadyRipcord() {
            this.$on("error", () => {
              this.loadingStatus === "Loading" && this._finalizeUpdate(null);
            });
          }
          _initializeAsyncImpl(d) {
            return t(this, void 0, void 0, function* () {
              const f = performance.now();
              r.Storage.isReady() || (yield r.Storage.isReadyResolver()),
                this._logger.start();
              try {
                return yield this._updateUserAsyncImpl(
                  this._user,
                  d,
                  "initialize"
                );
              } catch (c) {
                const p = c instanceof Error ? c : new Error(String(c));
                return this._createErrorUpdateDetails(p, f);
              }
            });
          }
          _createErrorUpdateDetails(d, f) {
            var c;
            return (0, r.createUpdateDetails)(
              !1,
              this._store.getSource(),
              performance.now() - f,
              d,
              null,
              [
                ...((c = this._store.getWarnings()) !== null && c !== void 0
                  ? c
                  : []),
              ]
            );
          }
          _finalizeUpdate(d) {
            this._store.finalize(), this._setStatus("Ready", d);
          }
          _runPostUpdate(d, f) {
            this.dataAdapter
              .getDataAsync(d, f, { priority: "low" })
              .catch((c) => {
                r.Log.error("An error occurred after update.", c);
              });
          }
          _refreshLiveValuesAsyncImpl() {
            return t(this, void 0, void 0, function* () {
              const d = this._user,
                f = this._store.getValues(),
                c = this._store.getLiveCursor(),
                p = yield this._network.fetchLiveEvaluations(
                  this._sdkKey,
                  d,
                  c.sinceTime,
                  c.previousDerivedFields,
                  "low",
                  c.fullChecksum
                );
              if (
                !(
                  d !== this._user ||
                  f !== this._store.getValues() ||
                  this.loadingStatus !== "Ready" ||
                  p == null
                )
              ) {
                if (p.hasUpdates !== !0) {
                  p.lcut != null && this._store.advanceLiveCursor(p.lcut);
                  return;
                }
                this._store.setLiveValues(p.values, Date.now()) &&
                  this._setStatus("Ready", null);
              }
            });
          }
          _startLiveValuesAutoRefresh() {
            const d = this._getLiveValuesAutoRefreshIntervalMs();
            if (
              d == null ||
              this.loadingStatus === "Uninitialized" ||
              this._liveValuesAutoRefreshTimer != null
            )
              return;
            let f = !1;
            this._liveValuesAutoRefreshTimer = setInterval(() => {
              var c;
              const p =
                (c = (0, r._getStatsigGlobal)().instances) === null ||
                c === void 0
                  ? void 0
                  : c[this._sdkKey];
              if (
                !(0, r._isServerEnv)() &&
                p instanceof Rn &&
                p !== this &&
                p.loadingStatus === "Ready"
              ) {
                this._stopLiveValuesAutoRefresh();
                return;
              }
              this.loadingStatus !== "Ready" ||
                f ||
                ((f = !0),
                this._refreshLiveValuesAsyncImpl()
                  .catch((u) => {
                    r.Log.error(
                      "An error occurred during live values refresh.",
                      u
                    );
                  })
                  .finally(() => {
                    f = !1;
                  }));
            }, d);
          }
          _getLiveValuesAutoRefreshIntervalMs() {
            var d;
            if (this._liveValuesAutoRefreshIntervalMs == null) return;
            const f = this._store.getValues(),
              c = (d = f?.sdk_configs) === null || d === void 0 ? void 0 : d[l];
            return typeof c != "number" || !Number.isFinite(c) || c <= 0
              ? o
              : c * 1e3;
          }
          _stopLiveValuesAutoRefresh() {
            this._liveValuesAutoRefreshTimer != null &&
              (clearInterval(this._liveValuesAutoRefreshTimer),
              (this._liveValuesAutoRefreshTimer = null));
          }
          _resetForUser(d) {
            this._logger.reset(),
              this._store.reset(),
              (this._user = this._configureUser(d, this._options));
          }
          shutdown() {
            const d = Object.create(null, {
              shutdown: { get: () => super.shutdown },
            });
            return t(this, void 0, void 0, function* () {
              this._stopLiveValuesAutoRefresh(), yield d.shutdown.call(this);
            });
          }
          _configureUser(d, f) {
            var c, p, u;
            const g = (0, r._normalizeUser)(d, f),
              w =
                (c = g.customIDs) === null || c === void 0
                  ? void 0
                  : c.stableID;
            if (w) {
              const v =
                (u = (p = this.storageProvider).isReadyResolver) === null ||
                u === void 0
                  ? void 0
                  : u.call(p);
              v
                ? v.then(
                    () => r.StableID.setOverride(w, this._sdkKey),
                    () => r.StableID.setOverride(w, this._sdkKey)
                  )
                : r.StableID.setOverride(w, this._sdkKey);
            }
            return (
              Object.keys(this._possibleFirstTouchMetadata).length > 0 &&
                (g.analyticsOnlyMetadata = Object.assign(
                  Object.assign({}, g.analyticsOnlyMetadata),
                  this._possibleFirstTouchMetadata
                )),
              g
            );
          }
          _getFeatureGateImpl(d, f) {
            var c, p;
            const { result: u, details: g } = this._store.getGate(d);
            this._checkUserHasIdForEvaluation(u?.id_type, d, "Gate"),
              this._checkInitializationStatus(g.reason);
            const w = (0, r._makeFeatureGate)(d, g, u),
              v =
                (p =
                  (c = this.overrideAdapter) === null || c === void 0
                    ? void 0
                    : c.getGateOverride) === null || p === void 0
                  ? void 0
                  : p.call(c, w, this._user, f),
              S = v ?? w;
            return (
              this._enqueueExposure(
                d,
                (0, r._createGateExposure)(
                  this._user,
                  S,
                  this._store.getExposureMapping()
                ),
                f
              ),
              this.$emt({ name: "gate_evaluation", gate: S }),
              S
            );
          }
          _getDynamicConfigImpl(d, f) {
            var c, p;
            const { result: u, details: g } = this._store.getConfig(d);
            this._checkUserHasIdForEvaluation(u?.id_type, d, "Dynamic config"),
              this._checkInitializationStatus(g.reason);
            const w = (0, r._makeDynamicConfig)(d, g, u),
              v =
                (p =
                  (c = this.overrideAdapter) === null || c === void 0
                    ? void 0
                    : c.getDynamicConfigOverride) === null || p === void 0
                  ? void 0
                  : p.call(c, w, this._user, f),
              S = v ?? w;
            return (
              this._enqueueExposure(
                d,
                (0, r._createConfigExposure)(
                  this._user,
                  S,
                  this._store.getExposureMapping()
                ),
                f
              ),
              this.$emt({
                name: "dynamic_config_evaluation",
                dynamicConfig: S,
              }),
              S
            );
          }
          _getExperimentImpl(d, f) {
            var c, p, u, g;
            const { result: w, details: v } = this._store.getConfig(d);
            this._checkUserHasIdForEvaluation(w?.id_type, d, "Experiment"),
              this._checkInitializationStatus(v.reason);
            const S = (0, r._makeExperiment)(d, v, w);
            S.__evaluation != null &&
              (S.__evaluation.secondary_exposures = (0, r._mapExposures)(
                (p =
                  (c = S.__evaluation) === null || c === void 0
                    ? void 0
                    : c.secondary_exposures) !== null && p !== void 0
                  ? p
                  : [],
                this._store.getExposureMapping()
              ));
            const y =
                (g =
                  (u = this.overrideAdapter) === null || u === void 0
                    ? void 0
                    : u.getExperimentOverride) === null || g === void 0
                  ? void 0
                  : g.call(u, S, this._user, f),
              T = y ?? S;
            return (
              this._enqueueExposure(
                d,
                (0, r._createConfigExposure)(
                  this._user,
                  T,
                  this._store.getExposureMapping()
                ),
                f
              ),
              this.$emt({ name: "experiment_evaluation", experiment: T }),
              T
            );
          }
          _getConfigListImpl() {
            return this._store.getConfigList();
          }
          _getLayerImpl(d, f) {
            var c, p, u;
            const { result: g, details: w } = this._store.getLayer(d),
              v = (0, r._makeLayer)(d, w, g),
              S =
                (p =
                  (c = this.overrideAdapter) === null || c === void 0
                    ? void 0
                    : c.getLayerOverride) === null || p === void 0
                  ? void 0
                  : p.call(c, v, this._user, f);
            f?.disableExposureLog && this._logger.incrementNonExposureCount(d);
            const y = (0, r._mergeOverride)(
              v,
              S,
              (u = S?.__value) !== null && u !== void 0 ? u : v.__value,
              (T) => {
                f?.disableExposureLog ||
                  this._enqueueExposure(
                    d,
                    (0, r._createLayerParameterExposure)(
                      this._user,
                      y,
                      T,
                      this._store.getExposureMapping()
                    ),
                    f
                  );
              }
            );
            return this.$emt({ name: "layer_evaluation", layer: y }), y;
          }
          _getParameterStoreImpl(d, f) {
            var c, p;
            const { result: u, details: g } = this._store.getParamStore(d);
            this._logger.incrementNonExposureCount(d);
            const w = {
                name: d,
                details: g,
                __configuration: u,
                get: (0, a._makeParamStoreGetter)(this, u, f),
              },
              v =
                (p =
                  (c = this.overrideAdapter) === null || c === void 0
                    ? void 0
                    : c.getParamStoreOverride) === null || p === void 0
                  ? void 0
                  : p.call(c, w, f);
            return (
              v != null &&
                ((w.__configuration = v.config),
                (w.details = v.details),
                (w.get = (0, a._makeParamStoreGetter)(this, v.config, f))),
              w
            );
          }
          _checkUserHasIdForEvaluation(d, f, c) {
            d &&
              ((0, r._getUnitIDFromUser)(this._user, d) ||
                r.Log.warn(
                  `The user does not have the required id_type "${d}" for ${c} "${f}"`
                ));
          }
          _checkInitializationStatus(d) {
            (d === "Uninitialized" || d.startsWith("Loading")) &&
              r.Log.warn(`SDK initialization has not completed. Reason: ${d}`);
          }
        };
      e.default = h;
    }),
    Cu = D((e) => {
      var t =
          (e && e.__createBinding) ||
          (Object.create
            ? function (s, o, l, h) {
                h === void 0 && (h = l);
                var m = Object.getOwnPropertyDescriptor(o, l);
                (!m ||
                  ("get" in m
                    ? !o.__esModule
                    : m.writable || m.configurable)) &&
                  (m = {
                    enumerable: !0,
                    get: function () {
                      return o[l];
                    },
                  }),
                  Object.defineProperty(s, h, m);
              }
            : function (s, o, l, h) {
                h === void 0 && (h = l), (s[h] = o[l]);
              }),
        r =
          (e && e.__exportStar) ||
          function (s, o) {
            for (var l in s)
              l !== "default" &&
                !Object.prototype.hasOwnProperty.call(o, l) &&
                t(o, s, l);
          };
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.StatsigClient = void 0);
      var n = Pe(),
        i = Au();
      (e.StatsigClient = i.default), r(Pe(), e);
      var a = Object.assign((0, n._getStatsigGlobal)(), {
        StatsigClient: i.default,
      });
      e.default = a;
    }),
    ls = Cu(),
    ku = "prod";
  function Er(e) {
    if (typeof e != "string") return ku;
    switch (e) {
      case "dev":
      case "internal":
      case "prod":
        return e;
      default:
        throw new Error(
          `Unsupported extension build channel "${e}". Use "dev", "internal", or "prod".`
        );
    }
  }
  var Ir = "https://chatgpt.com",
    Ru = "https://chatgpt-staging.com",
    Ou = ["http://localhost", "http://127.0.0.1"];
  function cs(e) {
    return e === "prod" ? [Ir] : [Ir, Ru, ...Ou];
  }
  function Pu(e) {
    return cs(e).map((t) => `${t}/*`);
  }
  function $n(e, t) {
    return cs(t).includes(e.origin)
      ? !0
      : t !== "prod" &&
          e.protocol === "http:" &&
          (e.hostname === "localhost" || e.hostname === "127.0.0.1");
  }
  var us = 15e3,
    jn = 0,
    qn = "https://chatgpt.com",
    ds = "https://chatgpt.com/backend-api";
  function hs() {
    let e, t;
    return async (r) => {
      r?.throwIfAborted(), (e == null || t !== jn) && ((e = Ar()), (t = jn));
      const n = e;
      if (r == null) return n;
      let i = () => {};
      try {
        return await Promise.race([
          n,
          new Promise((a, s) => {
            (i = () => s(r.reason)),
              r.addEventListener("abort", i, { once: !0 });
          }),
        ]);
      } finally {
        r.removeEventListener("abort", i);
      }
    };
  }
  async function Ar(e) {
    jn++;
    const t = AbortSignal.timeout(us),
      r = await fetch(`${qn}/api/auth/session`, {
        cache: "no-store",
        credentials: "include",
        redirect: "error",
        signal: e == null ? t : AbortSignal.any([e, t]),
      }),
      { status: n } = r;
    if (!r.ok) return { status: n, error: "http", retryAfterMs: ms(r) };
    let i;
    try {
      i = await r.json();
    } catch {
      return { status: n, error: "decode" };
    }
    if (
      typeof i == "object" &&
      i != null &&
      !Array.isArray(i) &&
      Object.keys(i).length === 0
    )
      return { status: n, session: null };
    try {
      const a = i;
      return a.error != null || !a.accessToken.trim()
        ? { status: n, error: "decode" }
        : {
            status: n,
            session: {
              accessToken: a.accessToken,
              account: ps(a.account, a.user.id),
              ...(typeof a.user.email == "string"
                ? { email: a.user.email }
                : {}),
            },
          };
    } catch {
      return { status: n, error: "decode" };
    }
  }
  var Cr = class extends Error {
      constructor(e, t, r) {
        super(`Chat API request failed (HTTP ${e}).`),
          (this.status = e),
          (this.retryAfterMs = t),
          (this.retryable = r),
          (this.name = "ChatApiHttpError");
      }
    },
    fs = class {
      controller = new AbortController();
      signal = this.controller.signal;
      account;
      constructor(e, t) {
        (this.accessToken = e), (this.account = Object.freeze({ ...t }));
      }
      async request(e, t = {}, r = {}) {
        const n = new AbortController(),
          i = [this.signal, n.signal];
        t.signal != null && i.push(t.signal);
        const a = AbortSignal.any(i);
        a.throwIfAborted();
        const s = setTimeout(
          () => n.abort(new Error("Chat API request timed out.")),
          r.timeoutMs ?? us
        );
        try {
          let o;
          try {
            const h = new Headers(t.headers);
            h.set("Authorization", `Bearer ${this.accessToken}`),
              h.set("ChatGPT-Account-ID", this.account.id),
              (o = await fetch(`${ds}${e}`, {
                cache: "no-store",
                credentials: "include",
                redirect: "error",
                headers: h,
                method: t.method ?? "GET",
                body: t.body,
                signal: a,
              }));
          } catch {
            throw (a.throwIfAborted(), new Error("Chat API request failed."));
          }
          if (!o.ok) {
            const h = await Mu(o);
            throw (
              (await o.body?.cancel().catch(() => {}),
              this.signal.throwIfAborted(),
              t.signal?.throwIfAborted(),
              new Cr(o.status, ms(o), n.signal.aborted ? !1 : h))
            );
          }
          const l = r.readResponse
            ? await r.readResponse(o)
            : await o.json().catch(() => {
                throw (
                  (a.throwIfAborted(),
                  new Error("Chat API response is not valid JSON."))
                );
              });
          return a.throwIfAborted(), l;
        } finally {
          clearTimeout(s);
        }
      }
      dispose() {
        this.controller.abort(new Error("Chat API has been disposed."));
      }
    };
  function ps(e, t) {
    if (
      !e.id.trim() ||
      !t.trim() ||
      (e.structure !== "workspace" && e.structure !== "personal")
    )
      throw new Error("Invalid ChatGPT account.");
    return { id: e.id, userId: t, structure: e.structure };
  }
  function ms(e) {
    const t = e.headers.get("Retry-After")?.trim();
    if (t == null) return;
    if (/^\d+$/u.test(t)) return Number(t) * 1e3;
    if (!/^(?:Mon|Tue|Wed|Thu|Fri|Sat|Sun)/u.test(t)) return;
    const r = Date.parse(t);
    return Number.isFinite(r) ? Math.max(0, r - Date.now()) : void 0;
  }
  async function Mu(e) {
    if (/^application\/json(?:;|$)/iu.test(e.headers.get("Content-Type") ?? ""))
      try {
        const t = await e.json();
        if (typeof t != "object" || t == null || !("detail" in t)) return;
        const { detail: r } = t;
        if (
          typeof r == "object" &&
          r != null &&
          "retryable" in r &&
          typeof r.retryable == "boolean"
        )
          return r.retryable;
      } catch {}
  }
  var Gn = "codexToolbarStateTelemetryId",
    Lu = 3e3,
    kr = 1e4,
    Du = { dev: "development", internal: "staging", prod: "production" },
    xu = Mn(globalThis.navigator),
    Ut,
    Ee,
    Ie,
    gs = Promise.resolve();
  function zn(e, t, r) {
    return Or(async () => {
      const n = await Hn(),
        i = vs(r);
      let a = !1;
      const s = ({ events: o }) => {
        a ||= o.some((l) => l.eventName === e && l.metadata === i);
      };
      n.on("logs_flushed", s);
      try {
        if ((n.logEvent(e, t, i), await n.flush(), a || (await n.flush()), !a))
          throw new Error("Failed to report Chrome extension Statsig event.");
      } finally {
        n.off("logs_flushed", s);
      }
    });
  }
  function Nu(e, t, r) {
    if (Ee?.loadingStatus === "Ready")
      try {
        Ee.logEvent(e, t, vs(r));
      } catch {
        console.warn("Failed to buffer Chrome extension Statsig event.");
      }
  }
  async function Vn(e = Ar, t) {
    const r = { timeoutMs: kr },
      {
        client: n,
        previousUpdate: i,
        ready: a,
      } = await Or(async () => {
        const l = Ie,
          h = await Hn(e, t);
        return {
          client: h,
          previousUpdate: l,
          ready: (Ie ??= h.initializeAsync(r)),
        };
      }),
      s = await a;
    t?.throwIfAborted(),
      i === a && Ie === a && !s.success && (Ie = n.refreshValuesAsync(r));
    let o;
    do (o = Ie), await o, t?.throwIfAborted();
    while (o !== Ie);
  }
  async function wt(e) {
    return await Vn(), _s(e);
  }
  async function Rr(e, t, r) {
    const n = await Or(async () => {
      const i = Ee ?? (await Hn()),
        a = () => {
          r?.aborted ||
            t(_s(e), i.loadingStatus, i.getContextHandle().user.userID);
        },
        s = () => {
          i.off("values_updated", a), r?.removeEventListener("abort", s);
        };
      return (
        r?.aborted ||
          (i.on("values_updated", a),
          r?.addEventListener("abort", s, { once: !0 })),
        {
          ready: (Ie ??= i.initializeAsync({ timeoutMs: kr })),
          publish: a,
          stop: s,
        }
      );
    });
    try {
      await n.ready;
      let i;
      do (i = Ie), await i;
      while (i !== Ie);
      return n.publish(), n.stop;
    } catch (i) {
      throw (n.stop(), i);
    }
  }
  function _s(e) {
    return Ee?.loadingStatus === "Ready" && Ee.checkGate(e);
  }
  function vs(e) {
    return {
      ...e,
      build_channel: Er("prod"),
      extension_version: chrome.runtime.getManifest().version,
      browser_family: xu,
    };
  }
  function Or(e) {
    const t = gs.then(e);
    return (
      (gs = t.then(
        () => {},
        () => {}
      )),
      t
    );
  }
  async function Hn(e = Ar, t) {
    t?.throwIfAborted();
    const [r, n] = await Promise.all([Fu(), Uu(e, t)]);
    t?.throwIfAborted();
    const i = Er("prod"),
      a = {
        ...n,
        appVersion: chrome.runtime.getManifest().version,
        custom: { client: "chrome_extension" },
        customIDs: { stableID: r },
      };
    if (Ee != null) {
      const l = Ee.getContextHandle().user;
      if (l.userID !== a.userID || l.email !== a.email)
        if (Ie == null) {
          if (
            !Ee.updateUserSync(a, { disableBackgroundCacheRefresh: !0 }).success
          )
            throw new Error(
              "Failed to update Chrome extension Statsig identity."
            );
        } else Ie = Ee.updateUserAsync(a, { timeoutMs: kr });
      return Ee;
    }
    const s = new ls.StatsigClient(Bc, a, {
      disableStorage: !0,
      enableLiveValuesAutoRefresh: !0,
      environment: { tier: Du[i] },
      includeCurrentPageUrlWithEvents: !1,
      logLevel: ls.LogLevel.None,
      loggingEnabled: "always",
      networkConfig: {
        api: Za,
        networkOverrideFunc: (l, h) =>
          fetch(l, {
            ...h,
            credentials: "omit",
            signal: AbortSignal.timeout(kr),
          }),
        sdkExceptionUrl: `${Za}/sdk_exception`,
      },
    });
    Ee = s;
    let o = !1;
    return (
      s.on("gate_evaluation", () => {
        o ||
          ((o = !0),
          Or(async () => {
            (o = !1), await s.flush();
          }).catch(() => {
            console.warn("Failed to flush Chrome extension Statsig exposures.");
          }));
      }),
      s
    );
  }
  async function Uu(e, t) {
    try {
      const r = AbortSignal.timeout(Lu),
        n = await e(t == null ? r : AbortSignal.any([r, t]));
      return "error" in n || n.session == null
        ? void 0
        : {
            userID: n.session.account.userId,
            ...(n.session.email?.trim() ? { email: n.session.email } : {}),
          };
    } catch {
      return;
    }
  }
  async function Fu() {
    if (Ut != null) return Ut;
    const e = (await chrome.storage.local.get([Gn]))[Gn];
    if (typeof e == "string" && e.length > 0) Ut = e;
    else {
      const t = crypto.randomUUID();
      await chrome.storage.local.set({ [Gn]: t }), (Ut = t);
    }
    return Ut;
  }
  var ws = [
    ".blob.core.windows.net",
    ".oaiusercontent.com",
    ".s3.ap-northeast-1.amazonaws.com",
    ".s3.ap-northeast-2.amazonaws.com",
    ".s3.ap-south-1.amazonaws.com",
    ".s3.ap-southeast-1.amazonaws.com",
    ".s3.ap-southeast-2.amazonaws.com",
    ".s3.ca-central-1.amazonaws.com",
    ".s3.eu-central-1.amazonaws.com",
    ".s3.eu-south-2.amazonaws.com",
    ".s3.eu-west-1.amazonaws.com",
    ".s3.eu-west-2.amazonaws.com",
    ".s3.us-east-1.amazonaws.com",
    ".s3.us-east-2.amazonaws.com",
    ".s3.us-west-1.amazonaws.com",
  ];
  async function Bu(e, t, r) {
    const n = AbortSignal.any([r, e.signal, AbortSignal.timeout(18e4)]),
      i = {
        file_name: t.name,
        mime_type: t.type,
        use_case: "my_files",
        upload_source: "browser_tab_context",
        entry_surface: "extension_handoff",
        library_persistence_mode: "required",
      },
      a = await e.request("/files", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...i,
          file_size: t.size,
          store_in_library: !0,
          supports_direct_azure_multipart: !1,
        }),
        signal: n,
      });
    if (
      !Ft(a) ||
      a.status !== "success" ||
      typeof a.file_id != "string" ||
      !a.file_id ||
      typeof a.upload_url != "string"
    )
      throw new Error("Unable to create the PDF upload in Library");
    const s = a.file_id;
    try {
      const o = new URL(a.upload_url, Ir);
      if (
        o.protocol !== "https:" ||
        o.port ||
        o.username ||
        o.password ||
        o.hash
      )
        throw new Error("Invalid Library upload destination");
      const l = /^\/(?:backend-)?api\/estuary\/upload_content_bytes\/?$/.test(
        o.pathname
      );
      if (l && o.origin === "https://chatgpt.com") {
        const m = new FormData();
        m.append("file", t),
          m.append("upload_url", o.searchParams.get("upload_url") ?? o.href),
          await e.request(
            `/estuary/upload_content_bytes${o.search}`,
            { method: "POST", body: m, signal: n },
            {
              timeoutMs: 18e4,
              readResponse: async (d) => {
                await d.body?.cancel();
              },
            }
          );
      } else {
        if (l || !ws.some((f) => o.hostname.endsWith(f)))
          throw new Error("Unsupported Library upload destination");
        const m = new Headers({ "Content-Type": t.type });
        if (
          ([...o.searchParams.keys()].some(
            (f) => f.toLowerCase() === "x-amz-algorithm"
          ) ||
            (m.set("x-ms-blob-type", "BlockBlob"),
            m.set("x-ms-version", "2020-04-08")),
          a.upload_headers != null)
        ) {
          if (!Ft(a.upload_headers))
            throw new Error("Invalid Library upload headers");
          for (const [f, c] of Object.entries(a.upload_headers)) {
            if (typeof c != "string")
              throw new Error("Invalid Library upload headers");
            if (
              ["authorization", "cookie", "chatgpt-account-id"].includes(
                f.toLowerCase()
              )
            )
              throw new Error(
                "Library blob uploads cannot forward account credentials"
              );
            m.set(f, c);
          }
        }
        const d = await fetch(o, {
          method: "PUT",
          body: t,
          headers: m,
          credentials: "omit",
          redirect: "error",
          signal: n,
        });
        if ((await d.body?.cancel(), !d.ok))
          throw new Error(`Library byte upload failed (HTTP ${d.status})`);
      }
      n.throwIfAborted(),
        await e.request(
          "/files/process_upload_stream",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              file_id: s,
              ...i,
              index_for_retrieval: !0,
              metadata: { store_in_library: !0 },
            }),
            signal: n,
          },
          { timeoutMs: 12e4, readResponse: $u }
        );
      const h = await bs(e, s, n);
      return n.throwIfAborted(), h;
    } catch (o) {
      throw (
        (await bs(e, s)
          .then((l) => Pr(e, l))
          .catch(() => {}),
        o)
      );
    }
  }
  async function Pr(e, { libraryFileId: t, fileId: r }) {
    await e.request(
      `/files/library/files/${encodeURIComponent(
        t
      )}?file_id=${encodeURIComponent(r)}`,
      { method: "DELETE" },
      {
        readResponse: async (n) => {
          await n.body?.cancel();
        },
      }
    );
  }
  async function bs(e, t, r) {
    const n = await e.request(`/files/${encodeURIComponent(t)}/simple`, {
      signal: r,
    });
    if (
      !Ft(n) ||
      n.file_id !== t ||
      n.is_library_file !== !0 ||
      typeof n.library_file_id != "string" ||
      !n.library_file_id
    )
      throw new Error("The PDF upload did not create a readable Library file");
    return { fileId: t, libraryFileId: n.library_file_id };
  }
  async function $u(e) {
    if (e.body == null)
      throw new Error("Library upload processing returned no status");
    const t = e.body.getReader(),
      r = new TextDecoder();
    let n = "",
      i = 0,
      a = !1;
    const s = (o) => {
      if (!o.trim()) return;
      const l = JSON.parse(o);
      if (!Ft(l) || typeof l.event != "string")
        throw new Error("Invalid Library upload processing status");
      const h = Ft(l.extra) ? l.extra : void 0;
      if (/(?:^|\.)(error|cancelled|failed|unknown)$/.test(l.event))
        throw new Error("Library upload processing failed");
      if (h?.library_persistence_result === "temporary")
        throw new Error("Library storage is unavailable for this PDF upload");
      (l.event === "file.processing.completed" ||
        l.event === "file.indexing.completed" ||
        (l.event === "file.indexing.started" &&
          h?.retrieval_indexing_deferred === !0)) &&
        (a = !0);
    };
    try {
      for (;;) {
        const { value: o, done: l } = await t.read();
        if (o) {
          if (((i += o.byteLength), i > 1048576))
            throw new Error("Library upload returned too much status data");
          n += r.decode(o, { stream: !0 });
        }
        let h;
        for (
          ;
          (h = n.indexOf(`
`)) !== -1;

        )
          s(n.slice(0, h)), (n = n.slice(h + 1));
        if (l) break;
      }
      if ((s(n + r.decode()), !a))
        throw new Error("Library upload processing did not complete");
    } finally {
      await t.cancel();
    }
  }
  function Ft(e) {
    return e != null && typeof e == "object" && !Array.isArray(e);
  }
  function ju(e) {
    if (e == null) return null;
    let t;
    try {
      t = new URL(e);
    } catch {
      return null;
    }
    if (t.host !== "docs.google.com") return null;
    const r = t.pathname.split("/").filter(Boolean),
      n = r[0];
    if (n !== "document" && n !== "presentation" && n !== "spreadsheets")
      return null;
    const i = r.indexOf("d", 1),
      a = i < 0 ? null : r[i + 1];
    return a == null || a.length === 0 || r.at(-1) === "pub"
      ? null
      : { docId: a, docType: n, url: t };
  }
  function qu(e) {
    switch (e) {
      case "document":
        return ["md", "pdf"];
      case "presentation":
        return ["pdf"];
      case "spreadsheets":
        return ["xlsx", "pdf"];
    }
  }
  function Gu(e, t) {
    const r = new URL(
      `https://docs.google.com/${e.docType}/d/${e.docId}/export`
    );
    r.searchParams.set("format", t);
    const n = e.url.searchParams.get("tab");
    return (
      n != null && r.searchParams.append("tab", n),
      (r.hash = e.url.hash),
      r.toString()
    );
  }
  async function zu(e, t, r, n, i) {
    if (location.origin !== e)
      return { errorMessage: "The tab origin changed before export." };
    const a = await fetch(t, { method: "GET" });
    if (!a.ok)
      throw new Error(`GSuite export request failed with HTTP ${a.status}`);
    try {
      if (new URL(a.url).origin !== new URL(t).origin)
        return await a.body?.cancel().catch(() => {}), { redirectUrl: a.url };
    } catch {
      return { errorMessage: "The export returned an invalid URL." };
    }
    const s = Number(a.headers.get("content-length") ?? NaN),
      o = Number.isFinite(s) && s > r;
    if (o && !i)
      return await a.body?.cancel().catch(() => {}), { errorMessage: n };
    function l(g) {
      let v = "";
      for (let S = 0; S < g.length; S += 32768)
        v += String.fromCharCode(...g.subarray(S, S + 32768));
      return btoa(v);
    }
    function h(g) {
      if (g.length === 0) return 0;
      let w = 0;
      for (; w < g.length; ) {
        const T = g[g.length - w - 1];
        if (T == null || T < 128 || T > 191) break;
        w += 1;
      }
      const v = g.length - w - 1;
      if (v < 0) return 0;
      const S = g[v];
      if (S == null) return v;
      let y;
      if (S < 128) y = 1;
      else if (S >= 194 && S <= 223) y = 2;
      else if (S >= 224 && S <= 239) y = 3;
      else if (S >= 240 && S <= 244) y = 4;
      else return v;
      return y === 1 || w === y - 1 ? g.length : v;
    }
    const m = a.body?.getReader();
    if (m == null) {
      if (o) return { errorMessage: n };
      const g = await a.blob();
      if (g.size > r) {
        if (!i) return { errorMessage: n };
        const w = new Uint8Array(await g.slice(0, r).arrayBuffer());
        return { base64: l(w.subarray(0, h(w))), truncated: !0 };
      }
      return { base64: l(new Uint8Array(await g.arrayBuffer())) };
    }
    const d = [];
    let f = 0,
      c = !1;
    for (;;) {
      const { done: g, value: w } = await m.read();
      if (g) break;
      if (w != null) {
        if (f + w.byteLength > r) {
          if (!i) return await m.cancel(), { errorMessage: n };
          const v = r - f;
          if (v > 0) {
            const S = w.subarray(0, v);
            d.push(new Uint8Array(S)), (f += S.byteLength);
          }
          await m.cancel(), (c = !0);
          break;
        }
        (f += w.byteLength), d.push(new Uint8Array(w));
      }
    }
    let p = new Uint8Array(f),
      u = 0;
    for (const g of d) p.set(g, u), (u += g.byteLength);
    return c && (p = p.subarray(0, h(p))), { base64: l(p), truncated: c };
  }
  function Vu(e, t, r = 8e4) {
    if (document.location.href !== e) return null;
    function n(E) {
      return E.replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;");
    }
    function i(E) {
      return n(E).replaceAll('"', "&quot;");
    }
    function a(E, I) {
      const C = E.getAttribute(I);
      return C == null ? "" : ` ${I}="${i(C)}"`;
    }
    function s(E) {
      return E.length >= 32 || !new RegExp("\\p{Decimal_Number}", "u").test(E)
        ? E
        : /^[\p{Decimal_Number}\p{Punctuation}\p{White_Space}]+$/u.test(E)
        ? ""
        : E;
    }
    function o() {
      let E = "",
        I = "",
        C = !1;
      function O($, G = !1) {
        if ($.length === 0) return;
        const ce = G ? $ : $.replace(/^[ \t\n\r]+|[ \t\n\r]+$/gu, "");
        if (!G && ce.length === 0) {
          E.length > 0 &&
            !C &&
            I !==
              `

` &&
            (I = " ");
          return;
        }
        const ye =
          I || (!G && !C && /^[ \t\n\r]/u.test($) && E.length > 0 ? " " : "");
        (E += `${ye}${ce}`),
          (C = !1),
          (I = !G && /[ \t\n\r]$/u.test($) ? " " : "");
      }
      return {
        appendBlockBoundary() {
          E.length > 0 &&
            !C &&
            !E.endsWith(`

`) &&
            (I = `

`);
        },
        appendHTMLAttributeValue($) {
          O(i($), !0);
        },
        appendHTMLContent($, G = !1) {
          O(n($), G);
        },
        appendRawText($, G) {
          (G === "before" || G === "both") && (I = ""),
            O($, !0),
            (C = G === "after" || G === "both");
        },
        get length() {
          return E.length;
        },
        toString() {
          return E;
        },
      };
    }
    const l = o();
    let h = !1;
    function m(E) {
      const I = s(E.value),
        { selectionEnd: C, selectionStart: O } = E;
      if (E.getRootNode().activeElement !== E || O == null || C == null) {
        l.appendHTMLAttributeValue(I);
        return;
      }
      if ((l.appendHTMLAttributeValue(I.slice(0, O)), O === C)) {
        l.appendRawText("<user__cursor>"),
          l.appendHTMLAttributeValue(I.slice(O));
        return;
      }
      l.appendRawText("<user__selection>"),
        l.appendHTMLAttributeValue(I.slice(O, C)),
        l.appendRawText("</user__selection>"),
        l.appendHTMLAttributeValue(I.slice(C));
    }
    function d(E) {
      const I = E.getAttribute("href");
      if (I == null) return null;
      try {
        const C = new URL(I, document.baseURI);
        return C.href.split("#", 1)[0] === e.split("#", 1)[0] ? null : C.href;
      } catch {
        return null;
      }
    }
    function f(E) {
      const I = E.type.toLowerCase(),
        C = I === "checkbox" || I === "radio";
      let O = `<input${a(E, "aria-label")}${a(E, "type")}`;
      if ((C && E.checked && (O += ' checked="true"'), C || I === "password")) {
        l.appendRawText(`${O}/>`);
        return;
      }
      l.appendRawText(`${O} value="`), m(E), l.appendRawText('"/>');
    }
    function c(E) {
      l.appendRawText(`<textarea${a(E, "aria-label")}>`),
        E.getRootNode().activeElement === E
          ? m(E)
          : l.appendHTMLContent(s(E.value), !0),
        l.appendRawText("</textarea>");
    }
    function p(E) {
      l.appendRawText(`<select${a(E, "aria-label")}>`, "both");
      for (const I of E.options) {
        const C = I.selected ? ' selected="true"' : "";
        l.appendRawText(
          `<option${a(I, "aria-label")} value="${i(I.value)}"${C}>`,
          "both"
        ),
          l.appendHTMLContent(I.label, !0),
          l.appendRawText("</option>", "both");
      }
      l.appendRawText("</select>", "both");
    }
    function u(E) {
      let I = "";
      const C = E.currentSrc || E.getAttribute("src");
      if (C != null)
        try {
          const O = new URL(C, document.baseURI);
          O.protocol !== "data:" && (I = O.pathname.split("/").at(-1) ?? "");
        } catch {}
      l.appendRawText(`<img src="${i(I)}" alt="`),
        l.appendHTMLAttributeValue(E.getAttribute("alt") ?? ""),
        l.appendRawText(`"${a(E, "aria-label")}/>`);
    }
    function g(E) {
      const I = d(E);
      if (I != null)
        return (
          l.appendRawText(`<a href="${i(I)}"${a(E, "aria-label")}>`),
          { text: "</a>" }
        );
    }
    function w(E) {
      return (
        l.appendRawText(
          `<button${a(E, "name")}${a(E, "aria-label")}${a(E, "title")}>`
        ),
        { text: "</button>", trim: "before" }
      );
    }
    function v(E) {
      return (
        l.appendRawText(`<contenteditable${a(E, "aria-label")}>`, "both"),
        { text: "</contenteditable>", trim: "both" }
      );
    }
    function S(E) {
      const I = E === "table";
      return (
        l.appendRawText(`<${E}>`, I ? "after" : "both"),
        { text: `</${E}>`, trim: I ? "before" : "both" }
      );
    }
    function y(E, I = !1) {
      if (h) return;
      if (E.nodeType === Node.TEXT_NODE) {
        l.appendHTMLContent(E.textContent ?? "", I);
        return;
      }
      if (E.nodeType !== Node.ELEMENT_NODE) return;
      const C = E,
        O = C.tagName.toLowerCase();
      if (
        /^(?:base|head|link|meta|noscript|script|style)$/u.test(O) ||
        (O === "title" && C.namespaceURI !== "http://www.w3.org/2000/svg")
      )
        return;
      const $ = C.namespaceURI === "http://www.w3.org/1999/xhtml",
        G = C.getAttribute("contenteditable"),
        ce = G != null && /^(?:|true|plaintext-only)$/iu.test(G),
        ye = window.getComputedStyle(C),
        fe = /^(?:block|flex|grid|list-item|flow-root|table|table-row)$/u.test(
          ye.display
        );
      fe && l.appendBlockBoundary();
      let Q,
        gt = !0;
      if ($)
        switch (O) {
          case "a":
            Q = g(C);
            break;
          case "button":
            Q = w(C);
            break;
          case "input":
            f(C), (gt = !1);
            break;
          case "textarea":
            c(C), (gt = !1);
            break;
          case "select":
            p(C), (gt = !1);
            break;
          case "img":
            u(C), (gt = !1);
            break;
          case "br":
            l.appendBlockBoundary();
            return;
          case "table":
          case "tr":
          case "td":
          case "th":
            Q = ce ? v(C) : S(O);
            break;
          default:
            ce && (Q = v(C));
        }
      if (gt && !h) {
        const In =
          I ||
          O === "pre" ||
          O === "code" ||
          /^(?:pre|pre-wrap|break-spaces)$/u.test(ye.whiteSpace);
        let An = !1;
        for (const A of [C, C.shadowRoot])
          if (!(A == null || h))
            for (const P of A.childNodes) {
              if (t != null && An && l.length >= t) {
                h = !0;
                break;
              }
              y(P, In), (An = !0);
            }
      }
      Q != null && l.appendRawText(Q.text, Q.trim),
        fe && l.appendBlockBoundary();
    }
    document.body != null && y(document.body);
    let T = l.toString();
    return (
      r != null && (T = T.slice(0, r)),
      /[\uD800-\uDBFF]$/u.test(T) && (T = T.slice(0, -1)),
      {
        text: T,
        title: document.title,
        truncated: h || (r != null && l.length > r),
        url: e,
      }
    );
  }
  var Hu = "Google Workspace export is too large for in-memory tab context",
    it = "The selected tab changed while being read",
    Wu = 32 * 1024 * 1024,
    Ku = 8e4;
  async function Zu(e, t, r) {
    switch (t.kind) {
      case "page":
        return await r(Vu, [e, null, null], "ISOLATED");
      case "selection":
        return await r(Ju, [e, Ku], "ISOLATED");
      case "googleWorkspaceExport": {
        const n = ju(e);
        if (n == null || !qu(n.docType).includes(t.format))
          throw new Error("Unsupported Google Workspace export");
        return await r(
          zu,
          [n.url.origin, Gu(n, t.format), Wu, Hu, t.format === "md"],
          "ISOLATED"
        );
      }
      case "youtubeTranscript": {
        const n = Vc(e);
        if (n == null) throw new Error("Unsupported YouTube page");
        return await Hc(n, async (i, a, s) => await r(i, [a, s], "MAIN"));
      }
      default:
        throw new Error("Unsupported tab read");
    }
  }
  function Ju(e, t) {
    if (location.href !== e) return null;
    const r = globalThis.getSelection()?.toString().trim() ?? "";
    return r.length === 0
      ? null
      : { text: r.slice(0, t), truncated: r.length > t };
  }
  function Xu(e) {
    const t = new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
    let r = "";
    for (let n = 0; n < t.length; n += 32768)
      r += String.fromCharCode(...t.subarray(n, n + 32768));
    return btoa(r);
  }
  function ys(e) {
    return Uint8Array.from(atob(e), (t) => t.charCodeAt(0));
  }
  var Ss = 128 * 1024 * 1024,
    Wn = 256 * 1024,
    Ts = 18e4;
  async function Yu({ tabId: e, expectedUrl: t }, r, n) {
    const i = AbortSignal.any([n, r.signal]);
    if ((i.throwIfAborted(), !Number.isSafeInteger(e) || e < 0))
      throw new Error("A valid tab id is required");
    const a = new URL(t);
    if (a.protocol !== "http:" && a.protocol !== "https:")
      throw new Error("Tab reads require an HTTP or HTTPS URL");
    await Es(e, t);
    const [s] = await chrome.scripting.executeScript({
      target: { tabId: e },
      world: "ISOLATED",
      func: () => ({
        contentType: document.contentType,
        title: document.title,
        url: location.href,
      }),
    });
    if ((i.throwIfAborted(), s?.result?.url !== t || !s.documentId))
      throw new Error(it);
    if (s.result.contentType !== "application/pdf") return null;
    const o = setInterval(() => {
      chrome.runtime.getPlatformInfo().catch(() => {});
    }, 25e3);
    try {
      const l = s.documentId,
        h = `.browser-context-${td(s.result.title, a)}`,
        m = await Qu(e, t, l, h, i);
      await Is(e, t, l), i.throwIfAborted();
      const d = await Bu(r, m, i);
      try {
        return (
          await Is(e, t, l),
          i.throwIfAborted(),
          { ...d, fileName: h, title: s.result.title }
        );
      } catch (f) {
        throw (await Pr(r, d).catch(() => {}), f);
      }
    } finally {
      clearInterval(o);
    }
  }
  async function Qu(e, t, r, n, i) {
    const a = AbortSignal.any([i, AbortSignal.timeout(Ts)]);
    a.throwIfAborted();
    const s = `pdf-capture:${crypto.randomUUID()}`,
      o = [];
    let l = 0,
      h,
      m = () => {},
      d = () => {};
    const f = new Promise((p, u) => {
        (m = () => u(a.reason)),
          a.addEventListener("abort", m, { once: !0 }),
          (d = (g) => {
            if (g.name !== s) return;
            const w = g.sender;
            if (
              a.aborted ||
              h != null ||
              w?.id !== chrome.runtime.id ||
              w.tab?.id !== e ||
              w.tab.incognito === !0 ||
              w.frameId !== 0 ||
              w.documentId !== r ||
              w.url !== t
            ) {
              g.disconnect(), u(a.aborted ? a.reason : new Error(it));
              return;
            }
            (h = g),
              g.onDisconnect.addListener(() => {
                u(
                  new Error(
                    "The PDF capture connection closed before completion"
                  )
                );
              }),
              g.onMessage.addListener((v) => {
                try {
                  if ((a.throwIfAborted(), typeof v != "object" || v == null))
                    throw new Error("Invalid PDF capture response");
                  if ("error" in v && typeof v.error == "string")
                    throw new Error(v.error);
                  if ("done" in v && v.done === !0) p();
                  else {
                    if (
                      !("data" in v) ||
                      typeof v.data != "string" ||
                      v.data.length > Math.ceil(Wn / 3) * 4
                    )
                      throw new Error("Invalid PDF capture chunk");
                    const S = ys(v.data);
                    if (((l += S.byteLength), S.byteLength > Wn || l > Ss))
                      throw new Error("PDF tab context is limited to 128 MiB");
                    o.push(new Blob([S]));
                  }
                  g.postMessage("next");
                } catch (S) {
                  u(S), g.disconnect();
                }
              }),
              g.postMessage("next");
          }),
          chrome.runtime.onConnect.addListener(d);
      }),
      c = chrome.scripting.executeScript({
        target: { tabId: e, documentIds: [r] },
        world: "ISOLATED",
        args: [t, s, Ss, Wn, Ts],
        func: ed,
      });
    c.finally(() => {
      chrome.runtime.onConnect.removeListener(d);
    }).catch(() => {});
    try {
      const [, [p]] = await Promise.all([f, c]);
      if ((a.throwIfAborted(), p?.documentId !== r)) throw new Error(it);
      const u = new File(o, n, { type: "application/pdf" });
      if ((await u.slice(0, 5).text()) !== "%PDF-")
        throw new Error("The tab did not return a valid PDF");
      return u;
    } finally {
      a.removeEventListener("abort", m), h?.disconnect(), (o.length = 0);
    }
  }
  async function ed(e, t, r, n, i) {
    const a = new AbortController(),
      s = chrome.runtime.connect({ name: t }),
      o = setTimeout(() => a.abort(new Error("PDF capture timed out")), i);
    s.onDisconnect.addListener(() => a.abort());
    let l;
    s.onMessage.addListener((m) => {
      m === "next" && l?.();
    });
    const h = (m) =>
      new Promise((d, f) => {
        a.signal.throwIfAborted();
        const c = () => f(a.signal.reason);
        a.signal.addEventListener("abort", c, { once: !0 }),
          (l = () => {
            a.signal.removeEventListener("abort", c), (l = void 0), d();
          }),
          m != null && s.postMessage(m);
      });
    try {
      if (
        (await h(),
        location.href !== e || document.contentType !== "application/pdf")
      )
        throw new Error("The PDF tab changed before capture");
      const m = await fetch(e, {
        credentials: "include",
        redirect: "error",
        signal: a.signal,
      });
      if (!m.ok || m.body == null)
        throw new Error(
          "Unable to read the PDF in this tab with a repeatable GET"
        );
      if (
        m.headers.get("content-type")?.split(";")[0]?.trim().toLowerCase() !==
        "application/pdf"
      )
        throw new Error("The tab no longer returns a PDF");
      if (Number(m.headers.get("content-length")) > r)
        throw new Error("PDF tab context is limited to 128 MiB");
      const d = m.body.getReader();
      let f = 0;
      try {
        for (;;) {
          const { done: c, value: p } = await d.read();
          if (c) break;
          if (((f += p.byteLength), f > r))
            throw new Error("PDF tab context is limited to 128 MiB");
          for (let u = 0; u < p.length; u += n) {
            a.signal.throwIfAborted();
            const g = p.subarray(u, u + n);
            let w = "";
            for (let v = 0; v < g.length; v += 32768)
              w += String.fromCharCode(...g.subarray(v, v + 32768));
            await h({ data: btoa(w) });
          }
        }
      } finally {
        await d.cancel();
      }
      await h({ done: !0 });
    } catch (m) {
      a.signal.aborted ||
        (await h({
          error: m instanceof Error ? m.message : "PDF capture failed",
        }).catch(() => {}));
    } finally {
      clearTimeout(o), a.abort(), s.disconnect();
    }
  }
  async function Es(e, t) {
    const r = await chrome.tabs.get(e);
    if (r.incognito === !0 || r.url !== t) throw new Error(it);
  }
  async function Is(e, t, r) {
    await Es(e, t);
    const [n] = await chrome.scripting.executeScript({
      target: { tabId: e },
      world: "ISOLATED",
      func: () => location.href,
    });
    if (n?.documentId !== r || n.result !== t) throw new Error(it);
  }
  function td(e, t) {
    const r = (e.trim() || t.pathname.split("/").at(-1) || "Browser document")
      .replace(/[\\/\p{Cc}]/gu, "_")
      .slice(0, 180);
    return r.toLowerCase().endsWith(".pdf") ? r : `${r}.pdf`;
  }
  var rd =
      /^(\d{4}-\d{2}-\d{2})?[T ]?(?:(\d{2}):\d{2}(?::\d{2}(?:\.\d+)?)?)?(Z|[-+]\d{2}:\d{2})?$/i,
    nd = class fr extends Date {
      #t = !1;
      #r = !1;
      #e = null;
      constructor(t) {
        let r = !0,
          n = !0,
          i = "Z";
        if (typeof t == "string") {
          let a = t.match(rd);
          a
            ? (a[1] || ((r = !1), (t = `0000-01-01T${t}`)),
              (n = !!a[2]),
              n && t[10] === " " && (t = t.replace(" ", "T")),
              a[2] && +a[2] > 23
                ? (t = "")
                : ((i = a[3] || null),
                  (t = t.toUpperCase()),
                  !i && n && (t += "Z")))
            : (t = "");
        }
        super(t),
          isNaN(this.getTime()) ||
            ((this.#t = r), (this.#r = n), (this.#e = i));
      }
      isDateTime() {
        return this.#t && this.#r;
      }
      isLocal() {
        return !this.#t || !this.#r || !this.#e;
      }
      isDate() {
        return this.#t && !this.#r;
      }
      isTime() {
        return this.#r && !this.#t;
      }
      isValid() {
        return this.#t || this.#r;
      }
      toISOString() {
        let t = super.toISOString();
        if (this.isDate()) return t.slice(0, 10);
        if (this.isTime()) return t.slice(11, 23);
        if (this.#e === null) return t.slice(0, -1);
        if (this.#e === "Z") return t;
        let r = +this.#e.slice(1, 3) * 60 + +this.#e.slice(4, 6);
        return (
          (r = this.#e[0] === "-" ? r : -r),
          new Date(this.getTime() - r * 6e4).toISOString().slice(0, -1) +
            this.#e
        );
      }
      static wrapAsOffsetDateTime(t, r = "Z") {
        let n = new fr(t);
        return (n.#e = r), n;
      }
      static wrapAsLocalDateTime(t) {
        let r = new fr(t);
        return (r.#e = null), r;
      }
      static wrapAsLocalDate(t) {
        let r = new fr(t);
        return (r.#r = !1), (r.#e = null), r;
      }
      static wrapAsLocalTime(t) {
        let r = new fr(t);
        return (r.#t = !1), (r.#e = null), r;
      }
    };
  function id(e, t) {
    let r = e.slice(0, t).split(/\r\n|\n|\r/g);
    return [r.length, r.pop().length + 1];
  }
  function ad(e, t, r) {
    let n = e.split(/\r\n|\n|\r/g),
      i = "",
      a = (Math.log10(t + 1) | 0) + 1;
    for (let s = t - 1; s <= t + 1; s++) {
      let o = n[s - 1];
      o &&
        ((i += s.toString().padEnd(a, " ")),
        (i += ":  "),
        (i += o),
        (i += `
`),
        s === t &&
          ((i += " ".repeat(a + r + 2)),
          (i += `^
`)));
    }
    return i;
  }
  var W = class extends Error {
      line;
      column;
      codeblock;
      constructor(e, t) {
        const [r, n] = id(t.toml, t.ptr),
          i = ad(t.toml, r, n);
        super(
          `Invalid TOML document: ${e}

${i}`,
          t
        ),
          (this.line = r),
          (this.column = n),
          (this.codeblock = i);
      }
    },
    sd = /^((0x[0-9a-fA-F](_?[0-9a-fA-F])*)|(([+-]|0[ob])?\d(_?\d)*))$/,
    od = /^[+-]?\d(_?\d)*(\.\d(_?\d)*)?([eE][+-]?\d(_?\d)*)?$/,
    ld = /^[+-]?0[0-9_]/;
  function As(e, t) {
    let r = e[t++],
      n = r,
      i = r === "'",
      a = r === e[t] && r === e[t + 1];
    a &&
      (e[(t += 2)] ===
      `
`
        ? t++
        : e[t] === "\r" &&
          e[t + 1] ===
            `
` &&
          (t += 2));
    let s = "",
      o = t,
      l = 0;
    for (let h = t; h < e.length; h++)
      if (
        ((r = e[h]),
        a &&
          (r ===
            `
` ||
            (r === "\r" &&
              e[h + 1] ===
                `
`)))
      )
        l = l && 3;
      else {
        if ((r < " " && r !== "	") || r === "")
          throw new W("control characters are not allowed in strings", {
            toml: e,
            ptr: h,
          });
        if (
          (!l || l === 3) &&
          r === n &&
          (!a || (e[h + 1] === n && e[h + 2] === n))
        )
          return (
            a && (e[h + 3] === n && h++, e[h + 3] === n && h++),
            [l ? s : s + e.slice(o, h), h + (a ? 3 : 1)]
          );
        if (!l) !i && r === "\\" && ((s += e.slice(o, (o = h))), (l = 1));
        else if (l === 1)
          if (r === "x" || r === "u" || r === "U") {
            let m = 0,
              d = r === "x" ? 2 : r === "u" ? 4 : 8;
            for (let f = 0; f < d; f++, h++) {
              let c = e.charCodeAt(h + 1),
                p =
                  c >= 48 && c <= 57
                    ? c - 48
                    : c >= 65 && c <= 70
                    ? c - 65 + 10
                    : c >= 97 && c <= 102
                    ? c - 97 + 10
                    : -1;
              if (p < 0)
                throw new W("invalid non-hex character in unicode escape", {
                  toml: e,
                  ptr: h + 1,
                });
              m = (m << 4) | p;
            }
            if (m < 0 || m > 1114111 || (m >= 55296 && m <= 57343))
              throw new W("invalid unicode escape", { toml: e, ptr: h });
            (s += String.fromCodePoint(m)), (o = h + 1), (l = 0);
          } else if (r === " " || r === "	") l = 2;
          else {
            if (r === "b") s += "\b";
            else if (r === "t") s += "	";
            else if (r === "n")
              s += `
`;
            else if (r === "f") s += "\f";
            else if (r === "r") s += "\r";
            else if (r === "e") s += "\x1B";
            else if (r === '"') s += '"';
            else if (r === "\\") s += "\\";
            else
              throw new W("unrecognized escape sequence", { toml: e, ptr: h });
            (o = h + 1), (l = 0);
          }
        else if (r !== " " && r !== "	") {
          if (l === 2)
            throw new W(
              "invalid escape: only line-ending whitespace may be escaped",
              { toml: e, ptr: o }
            );
          (l = !i && r === "\\" ? 1 : 0), (o = h);
        }
      }
    throw new W("unfinished string", { toml: e, ptr: t });
  }
  function cd(e, t, r, n) {
    if (e === "true") return !0;
    if (e === "false") return !1;
    if (e === "-inf") return -1 / 0;
    if (e === "inf" || e === "+inf") return 1 / 0;
    if (e === "nan" || e === "+nan" || e === "-nan") return NaN;
    if (e === "-0") return n ? 0n : 0;
    let i = sd.test(e);
    if (i || od.test(e)) {
      if (ld.test(e))
        throw new W("leading zeroes are not allowed", { toml: t, ptr: r });
      e = e.replace(/_/g, "");
      let s = +e;
      if (isNaN(s)) throw new W("invalid number", { toml: t, ptr: r });
      if (i) {
        if ((i = !Number.isSafeInteger(s)) && !n)
          throw new W("integer value cannot be represented losslessly", {
            toml: t,
            ptr: r,
          });
        (i || n === !0) && (s = BigInt(e));
      }
      return s;
    }
    const a = new nd(e);
    if (!a.isValid()) throw new W("invalid value", { toml: t, ptr: r });
    return a;
  }
  function Kn(e, t = 0, r = e.length) {
    let n = e.indexOf(
      `
`,
      t
    );
    return e[n - 1] === "\r" && n--, n <= r ? n : -1;
  }
  function Mr(e, t) {
    for (let r = t; r < e.length; r++) {
      let n = e[r];
      if (
        n ===
        `
`
      )
        return r;
      if (
        n === "\r" &&
        e[r + 1] ===
          `
`
      )
        return r + 1;
      if ((n < " " && n !== "	") || n === "")
        throw new W("control characters are not allowed in comments", {
          toml: e,
          ptr: t,
        });
    }
    return e.length;
  }
  function at(e, t, r, n) {
    let i;
    for (;;) {
      for (
        ;
        (i = e[t]) === " " ||
        i === "	" ||
        (!r &&
          (i ===
            `
` ||
            (i === "\r" &&
              e[t + 1] ===
                `
`)));

      )
        t++;
      if (n || i !== "#") break;
      t = Mr(e, t);
    }
    return t;
  }
  function ud(e, t, r, n, i = !1) {
    if (!n) return (t = Kn(e, t)), t < 0 ? e.length : t;
    for (let a = t; a < e.length; a++) {
      let s = e[a];
      if (s === "#") a = Kn(e, a);
      else {
        if (s === r) return a + 1;
        if (
          s === n ||
          (i &&
            (s ===
              `
` ||
              (s === "\r" &&
                e[a + 1] ===
                  `
`)))
        )
          return a;
      }
    }
    throw new W("cannot find end of structure", { toml: e, ptr: t });
  }
  function dd(e, t, r) {
    let n = e.slice(t, r),
      i = n.indexOf("#");
    return i > -1 && (Mr(e, i), (n = n.slice(0, i))), [n.trimEnd(), i];
  }
  function Zn(e, t, r, n, i) {
    if (n === 0)
      throw new W(
        "document contains excessively nested structures. aborting.",
        { toml: e, ptr: t }
      );
    let a = e[t];
    if (a === "[" || a === "{") {
      let [l, h] = a === "[" ? pd(e, t, n, i) : fd(e, t, n, i);
      if (r) {
        if (((h = at(e, h)), e[h] === ",")) h++;
        else if (e[h] !== r)
          throw new W("expected comma or end of structure", {
            toml: e,
            ptr: h,
          });
      }
      return [l, h];
    }
    if (a === '"' || a === "'") {
      let [l, h] = As(e, t);
      if (r) {
        if (
          ((h = at(e, h)),
          e[h] &&
            e[h] !== "," &&
            e[h] !== r &&
            e[h] !==
              `
` &&
            e[h] !== "\r")
        )
          throw new W("unexpected character encountered", { toml: e, ptr: h });
        e[h] === "," && h++;
      }
      return [l, h];
    }
    let s = ud(e, t, ",", r),
      o = dd(e, t, s - (e[s - 1] === "," ? 1 : 0));
    if (!o[0])
      throw new W("incomplete key-value declaration: no value specified", {
        toml: e,
        ptr: t,
      });
    return (
      r && o[1] > -1 && ((s = at(e, t + o[1])), e[s] === "," && s++),
      [cd(o[0], e, t, i), s]
    );
  }
  var hd = /^[a-zA-Z0-9-_]+[ \t]*$/;
  function Jn(e, t, r = "=") {
    let n = t - 1,
      i = [],
      a = e.indexOf(r, t);
    if (a < 0)
      throw new W("incomplete key-value: cannot find end of key", {
        toml: e,
        ptr: t,
      });
    do {
      let s = e[(t = ++n)];
      if (s !== " " && s !== "	")
        if (s === '"' || s === "'") {
          if (s === e[t + 1] && s === e[t + 2])
            throw new W("multiline strings are not allowed in keys", {
              toml: e,
              ptr: t,
            });
          let [o, l] = As(e, t);
          n = e.indexOf(".", l);
          let h = e.slice(l, n < 0 || n > a ? a : n),
            m = Kn(h);
          if (m > -1)
            throw new W("newlines are not allowed in keys", {
              toml: e,
              ptr: t + n + m,
            });
          if (h.trimStart())
            throw new W("found extra tokens after the string part", {
              toml: e,
              ptr: l,
            });
          if (a < l && ((a = e.indexOf(r, l)), a < 0))
            throw new W("incomplete key-value: cannot find end of key", {
              toml: e,
              ptr: t,
            });
          i.push(o);
        } else {
          n = e.indexOf(".", t);
          let o = e.slice(t, n < 0 || n > a ? a : n);
          if (!hd.test(o))
            throw new W(
              "only letter, numbers, dashes and underscores are allowed in keys",
              { toml: e, ptr: t }
            );
          i.push(o.trimEnd());
        }
    } while (n + 1 && n < a);
    return [i, at(e, a + 1, !0, !0)];
  }
  function fd(e, t, r, n) {
    let i = {},
      a = new Set(),
      s;
    for (t++; (s = e[t++]) !== "}" && s; ) {
      if (s === ",")
        throw new W("expected value, found comma", { toml: e, ptr: t - 1 });
      if (s === "#") t = Mr(e, t);
      else if (
        s !== " " &&
        s !== "	" &&
        s !==
          `
` &&
        s !== "\r"
      ) {
        let o,
          l = i,
          h = !1,
          [m, d] = Jn(e, t - 1);
        for (let p = 0; p < m.length; p++) {
          if (
            (p && (l = h ? l[o] : (l[o] = {})),
            (o = m[p]),
            (h = Object.hasOwn(l, o)) &&
              (typeof l[o] != "object" || a.has(l[o])))
          )
            throw new W("trying to redefine an already defined value", {
              toml: e,
              ptr: t,
            });
          !h &&
            o === "__proto__" &&
            Object.defineProperty(l, o, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
            });
        }
        if (h)
          throw new W("trying to redefine an already defined value", {
            toml: e,
            ptr: t,
          });
        let [f, c] = Zn(e, d, "}", r - 1, n);
        a.add(f), (l[o] = f), (t = c);
      }
    }
    if (!s) throw new W("unfinished table encountered", { toml: e, ptr: t });
    return [i, t];
  }
  function pd(e, t, r, n) {
    let i = [],
      a;
    for (t++; (a = e[t++]) !== "]" && a; ) {
      if (a === ",")
        throw new W("expected value, found comma", { toml: e, ptr: t - 1 });
      if (a === "#") t = Mr(e, t);
      else if (
        a !== " " &&
        a !== "	" &&
        a !==
          `
` &&
        a !== "\r"
      ) {
        let s = Zn(e, t - 1, "]", r - 1, n);
        i.push(s[0]), (t = s[1]);
      }
    }
    if (!a) throw new W("unfinished array encountered", { toml: e, ptr: t });
    return [i, t];
  }
  function Cs(e, t, r, n) {
    let i = t,
      a = r,
      s,
      o = !1,
      l;
    for (let h = 0; h < e.length; h++) {
      if (h) {
        if (
          ((i = o ? i[s] : (i[s] = {})),
          (a = (l = a[s]).c),
          n === 0 && (l.t === 1 || l.t === 2))
        )
          return null;
        if (l.t === 2) {
          let m = i.length - 1;
          (i = i[m]), (a = a[m].c);
        }
      }
      if (((s = e[h]), (o = Object.hasOwn(i, s)) && a[s]?.t === 0 && a[s]?.d))
        return null;
      o ||
        (s === "__proto__" &&
          (Object.defineProperty(i, s, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
          }),
          Object.defineProperty(a, s, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })),
        (a[s] = {
          t: h < e.length - 1 && n === 2 ? 3 : n,
          d: !1,
          i: 0,
          c: {},
        }));
    }
    if (
      ((l = a[s]),
      (l.t !== n && !(n === 1 && l.t === 3)) ||
        (n === 2 &&
          (l.d || ((l.d = !0), (i[s] = [])),
          i[s].push((i = {})),
          (l.c[l.i++] = l = { t: 1, d: !1, i: 0, c: {} })),
        l.d))
    )
      return null;
    if (((l.d = !0), n === 1)) i = o ? i[s] : (i[s] = {});
    else if (n === 0 && o) return null;
    return [s, i, l.c];
  }
  function md(e, { maxDepth: t = 1e3, integersAsBigInt: r } = {}) {
    let n = {},
      i = {},
      a = n,
      s = i;
    for (let o = at(e, 0); o < e.length; ) {
      if (e[o] === "[") {
        let l = e[++o] === "[",
          h = Jn(e, (o += +l), "]");
        if (l) {
          if (e[h[1] - 1] !== "]")
            throw new W("expected end of table declaration", {
              toml: e,
              ptr: h[1] - 1,
            });
          h[1]++;
        }
        let m = Cs(h[0], n, i, l ? 2 : 1);
        if (!m)
          throw new W("trying to redefine an already defined table or value", {
            toml: e,
            ptr: o,
          });
        (s = m[2]), (a = m[1]), (o = h[1]);
      } else {
        let l = Jn(e, o),
          h = Cs(l[0], a, s, 0);
        if (!h)
          throw new W("trying to redefine an already defined table or value", {
            toml: e,
            ptr: o,
          });
        let m = Zn(e, l[1], void 0, t, r);
        (h[1][h[0]] = m[0]), (o = m[1]);
      }
      if (
        ((o = at(e, o, !0)),
        e[o] &&
          e[o] !==
            `
` &&
          e[o] !== "\r")
      )
        throw new W(
          "each key-value declaration must be followed by an end-of-line",
          { toml: e, ptr: o }
        );
      o = at(e, o);
    }
    return n;
  }
  function gd(e) {
    try {
      const t = st(e);
      if (t.requirements_toml == null) return { requirements: null };
      const r = st(t.requirements_toml);
      if (r.enterprise_managed == null) return { requirements: null };
      Array.isArray(r.enterprise_managed) || Me();
      let n = {};
      for (const a of r.enterprise_managed.toReversed()) {
        const s = md(Ps(st(a).contents), { integersAsBigInt: !0 });
        ks(s), (n = Os(n, s));
      }
      const i = ks(n);
      return { requirements: wd(i) ? i : null };
    } catch {
      return Me();
    }
  }
  function ks(e) {
    return (
      e.features !== void 0 && e.feature_requirements !== void 0 && Me(),
      {
        allowBrowserAndComputerUse: Y(e.allow_browser_and_computer_use, $e),
        browserUse: Y(e.browser_use, _d),
        network: Y(e.experimental_network, vd),
        featureRequirements: Y(
          e.features === void 0 ? e.feature_requirements : e.features,
          (t) => Yn(t, $e)
        ),
      }
    );
  }
  function _d(e) {
    const t = st(e);
    return {
      allowWebmcp: Y(t.allow_webmcp, $e),
      allowHistoryAccess: Y(t.allow_history_access, $e),
      disableAutoReview: Y(t.disable_auto_review, $e),
      allowGlobalPersistentApproval: Y(t.allow_global_persistent_approval, $e),
      defaultOriginPolicy: Y(t.default_origin_policy, Rs),
      origins: Y(t.origins, (r) => Yn(r, Rs)),
    };
  }
  function Rs(e) {
    const t = st(e);
    return {
      access: Y(t.access, bt),
      downloads: Y(t.downloads, bt),
      uploads: Y(t.uploads, bt),
      fullCdpAccess: Y(t.full_cdp_access, bt),
      autoReview: Y(t.auto_review, bt),
      persistentApproval: Y(t.persistent_approval, $e),
      accessApprovalLifetime: Y(t.access_approval_lifetime, bd),
    };
  }
  function vd(e) {
    const t = st(e),
      r = Y(t.allowed_domains, Ms),
      n = Y(t.denied_domains, Ms),
      i = Y(t.domains, (a) => Yn(a, bt));
    return (
      i !== null && (r !== null || n !== null) && Me(),
      {
        enabled: Y(t.enabled, $e),
        domains: i,
        managedAllowedDomainsOnly: Y(t.managed_allowed_domains_only, $e),
        allowedDomains: r,
        deniedDomains: n,
      }
    );
  }
  function wd(e) {
    if (
      e.allowBrowserAndComputerUse !== null ||
      e.network !== null ||
      Object.keys(e.featureRequirements ?? {}).length > 0
    )
      return !0;
    const t = e.browserUse;
    return t === null
      ? !1
      : t.allowWebmcp !== null ||
          t.allowHistoryAccess !== null ||
          t.disableAutoReview !== null ||
          t.allowGlobalPersistentApproval !== null ||
          Object.values(t.defaultOriginPolicy ?? {}).some((r) => r !== null) ||
          Object.values(t.origins ?? {}).some(
            (r) => r != null && Object.values(r).some((n) => n !== null)
          );
  }
  function Os(e, t) {
    const r = new Map(Object.entries(e));
    for (const [n, i] of Object.entries(t)) {
      const a = r.get(n);
      r.set(n, Xn(a) && Xn(i) ? Os(a, i) : i);
    }
    return Object.fromEntries(r);
  }
  function Xn(e) {
    if (e === null || typeof e != "object") return !1;
    const t = Object.getPrototypeOf(e);
    return t === Object.prototype || t === null;
  }
  function st(e) {
    return Xn(e) || Me(), e;
  }
  function Y(e, t) {
    return e === void 0 ? null : t(e);
  }
  function Yn(e, t) {
    return Object.fromEntries(Object.entries(st(e)).map(([r, n]) => [r, t(n)]));
  }
  function $e(e) {
    return typeof e != "boolean" && Me(), e;
  }
  function Ps(e) {
    return typeof e != "string" && Me(), e;
  }
  function Ms(e) {
    return Array.isArray(e) || Me(), e.map(Ps);
  }
  function bt(e) {
    return e !== "allow" && e !== "deny" && Me(), e;
  }
  function bd(e) {
    return e !== "turn" && e !== "thread" && Me(), e;
  }
  function Me() {
    throw new Error("Cloud requirements bundle is invalid.");
  }
  var Ls = 60 * 6e4,
    yd = class {
      pending;
      lastGood;
      nextRefreshAt = 0;
      constructor(e) {
        this.chatApi = e;
      }
      async readRequirements() {
        if (
          (this.chatApi.signal.throwIfAborted(),
          this.chatApi.account.structure === "personal")
        )
          return { requirements: null };
        if (this.pending == null) {
          if (this.lastGood != null && Date.now() < this.nextRefreshAt)
            return this.lastGood;
          this.pending = this.fetchRequirements().finally(() => {
            this.pending = void 0;
          });
        }
        const e = await this.pending;
        return this.chatApi.signal.throwIfAborted(), e;
      }
      async fetchRequirements() {
        try {
          const e = gd(await this.chatApi.request("/wham/config/bundle"));
          return (
            this.chatApi.signal.throwIfAborted(),
            (this.lastGood = e),
            (this.nextRefreshAt = Date.now() + Ls),
            e
          );
        } catch (e) {
          if ((this.chatApi.signal.throwIfAborted(), this.lastGood != null))
            return (this.nextRefreshAt = Date.now() + Ls), this.lastGood;
          throw e;
        }
      }
    },
    Sd = 15 * 6e4,
    Td = "/wham/browser/settings",
    Ed = class {
      cached;
      expiresAt = 0;
      pending;
      constructor(e) {
        this.chatApi = e;
      }
      async read(e = !1) {
        return (
          this.chatApi.signal.throwIfAborted(),
          !e && this.pending != null
            ? this.pending
            : !e && this.cached != null && Date.now() < this.expiresAt
            ? this.cached
            : this.request()
        );
      }
      patch(e, t) {
        return this.request({
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(e),
          signal: t,
        });
      }
      request(e) {
        const t = (this.pending ?? Promise.resolve())
          .catch(() => {})
          .then(() => this.chatApi.request(Td, e))
          .then(
            (r) => ((this.cached = r), (this.expiresAt = Date.now() + Sd), r)
          )
          .catch((r) => {
            throw ((this.cached = void 0), r);
          })
          .finally(() => {
            this.pending === t && (this.pending = void 0);
          });
        return (this.pending = t), t;
      }
    },
    Bt = new Map(),
    Id = "browser-extension-enable-chatgpt-use",
    Ad = class extends qa {
      constructor(e, t) {
        super(e),
          this.registerRequestHandlerObject(t),
          e.addCloseListener?.(() => Qn.dispose(t));
      }
      sendTurnEnded(e) {
        return this.sendRequest("turnEnded", e);
      }
    },
    Qn = class {
      fetches = new Map();
      cloudClients;
      constructor(e) {
        this.scopeId = e;
      }
      static dispose(e) {
        for (const t of e.fetches.values()) t.abort();
        e.fetches.clear();
      }
      async fetch({ id: e, url: t, init: r }) {
        const n = new AbortController();
        this.fetches.set(e, n);
        try {
          const i = await fetch(t, {
            ...r,
            body: r.body == null ? null : ys(r.body),
            signal: n.signal,
          });
          return {
            body:
              i.body == null ? null : Xu(new Uint8Array(await i.arrayBuffer())),
            headers: [...i.headers],
            status: i.status,
            statusText: i.statusText,
          };
        } finally {
          this.fetches.delete(e);
        }
      }
      abortFetch(e) {
        this.fetches.get(e)?.abort();
      }
      static async refreshBrowserSettings(e) {
        await e.cloudClients?.browserSettings.read(!0);
      }
      async isChatGptUseEnabled() {
        const { signal: e } = Ae(this.scopeId),
          t = await wt(Id).catch(() => !1);
        return e.throwIfAborted(), t;
      }
      async isBrowserElicitationEnabled() {
        const { signal: e } = Ae(this.scopeId),
          t = await wt("chatgpt-work-browser-elicitation").catch(() => !1);
        return e.throwIfAborted(), t;
      }
      async captureTabPdfToLibrary(e) {
        const t = Ae(this.scopeId);
        if (!t.onPdfUploaded)
          throw new Error("PDF capture requires turn-scoped cleanup");
        const r = await Yu(
          e,
          t.chatApi,
          AbortSignal.any([t.signal, t.disposalSignal])
        );
        if (r == null) return null;
        try {
          return (
            t.signal.throwIfAborted(),
            t.disposalSignal.throwIfAborted(),
            t.onPdfUploaded(r),
            r
          );
        } catch (n) {
          throw (await Pr(t.chatApi, r).catch(() => {}), n);
        }
      }
      async readRequirements() {
        const { chatApi: e, signal: t } = Ae(this.scopeId),
          r = await this.#t(e).requirements.readRequirements();
        return t.throwIfAborted(), r;
      }
      async readSessionConfig(e) {
        const { signal: t } = Ae(this.scopeId),
          r = Ja(e),
          n = await chrome.storage.local.get(r);
        t.throwIfAborted();
        const i = n[r];
        return ot(i) ? i : {};
      }
      async writeSessionConfig({ sessionId: e, config: t }) {
        const { signal: r } = Ae(this.scopeId);
        if (!ot(t))
          throw new Error("Browser-use session config must be an object");
        await chrome.storage.local.set({ [Ja(e)]: t }), r.throwIfAborted();
      }
      async readBrowserSettings(e) {
        const { chatApi: t, signal: r } = Ae(this.scopeId),
          n = await this.#t(t).browserSettings.read(e);
        return r.throwIfAborted(), n;
      }
      async patchBrowserSettings(e) {
        const { chatApi: t, signal: r } = Ae(this.scopeId),
          n = await this.#t(t).browserSettings.patch(e, r);
        return r.throwIfAborted(), n;
      }
      #t(e) {
        return (
          this.cloudClients?.chatApi !== e &&
            (this.cloudClients = {
              chatApi: e,
              requirements: new yd(e),
              browserSettings: new Ed(e),
            }),
          this.cloudClients
        );
      }
      async createElicitation(e) {
        const { client: t, signal: r } = Ae(this.scopeId),
          n = e.requestedSchema ?? {
            additionalProperties: !1,
            properties: {},
            type: "object",
          };
        if (!Ds(n))
          throw new Error("MCP elicitation requires a valid object schema");
        const i = await t.createElicitation(
            {
              message: e.message,
              requestedSchema: n,
              ...(e.meta == null ? {} : { _meta: e.meta }),
            },
            r
          ),
          a = i.content,
          s = i._meta;
        if ((a != null && !ot(a)) || (s != null && !ot(s)))
          throw new Error("MCP elicitation returned an invalid response");
        return {
          action: i.action,
          ...(a === void 0 ? {} : { content: a }),
          ...(s === void 0 ? {} : { _meta: s }),
        };
      }
      displayValue(e) {
        const t = typeof e == "string" ? e : JSON.stringify(e) ?? String(e);
        Ae(this.scopeId).content.push({ text: t, type: "text" });
      }
      displayImage(e) {
        Ae(this.scopeId).content.push({
          data: e,
          mimeType: "image/png",
          type: "image",
        });
      }
    };
  function Cd(e, t, r, n, i) {
    if (Bt.has(e)) throw new Error("JavaScript kernel is already executing");
    const a = new AbortController(),
      s = {
        client: t,
        content: [],
        chatApi: n,
        signal: r,
        disposalSignal: a.signal,
        onPdfUploaded: i,
      };
    return (
      Bt.set(e, s),
      {
        content: s.content,
        dispose: () => {
          a.abort(new Error("JavaScript kernel execution ended")),
            Bt.get(e) === s && Bt.delete(e);
        },
      }
    );
  }
  function Ae(e) {
    const t = Bt.get(e);
    if (t == null) throw new Error("JavaScript kernel is not executing");
    if (t.signal.aborted) throw t.signal.reason;
    return t;
  }
  function Ds(e) {
    return !ot(e) ||
      e.type !== "object" ||
      !ot(e.properties) ||
      (e.additionalProperties !== void 0 &&
        typeof e.additionalProperties != "boolean") ||
      (e.required !== void 0 &&
        (!Array.isArray(e.required) ||
          e.required.some((t) => typeof t != "string")))
      ? !1
      : Object.values(e.properties).every(xs);
  }
  function xs(e) {
    if (!ot(e)) return !1;
    switch (e.type) {
      case "boolean":
      case "integer":
      case "number":
      case "string":
        return (
          e.enum === void 0 ||
          (Array.isArray(e.enum) &&
            e.enum.every(
              (t) => typeof t === (e.type === "integer" ? "number" : e.type)
            ))
        );
      case "null":
        return !0;
      case "array":
        return xs(e.items);
      case "object":
        return Ds(e);
      default:
        return !1;
    }
  }
  function ot(e) {
    return typeof e == "object" && e != null && !Array.isArray(e);
  }
  var kd = (e, t, r) => {
      const n = {
          addCloseListener: e.addCloseListener?.bind(e),
          close: e.close?.bind(e),
          sendMessage: (a) => e.sendMessage(r(a, "a")),
          setMessageCallback(a) {
            n.callback = a;
          },
          callback: null,
        },
        i = {
          addCloseListener: e.addCloseListener?.bind(e),
          close: e.close?.bind(e),
          sendMessage: (a) => e.sendMessage(r(a, "b")),
          setMessageCallback(a) {
            i.callback = a;
          },
          callback: null,
        };
      return (
        e.setMessageCallback((a) => {
          (t(a) === "a" ? n.callback : i.callback)?.(a);
        }),
        [n, i]
      );
    },
    Rd = class {
      closeListeners = new Set();
      closed = !1;
      messageCallback;
      constructor(e) {
        (this.port = e),
          this.port.onMessage.addListener((t) => {
            this.messageCallback?.(t);
          }),
          this.port.onDisconnect.addListener(() => {
            const t = chrome.runtime.lastError?.message;
            this.finish(t == null ? void 0 : new Error(t));
          });
      }
      sendMessage(e) {
        if (this.closed)
          throw new Error("JavaScript kernel browser transport is closed");
        this.port.postMessage(e);
      }
      setMessageCallback(e) {
        this.messageCallback = e;
      }
      addCloseListener(e) {
        return (
          this.closeListeners.add(e),
          () => {
            this.closeListeners.delete(e);
          }
        );
      }
      async close() {
        this.closed || (this.port.disconnect(), this.finish());
      }
      finish(e) {
        if (!this.closed) {
          this.closed = !0;
          for (const t of this.closeListeners)
            Promise.resolve(t(e)).catch(() => {});
          this.closeListeners.clear();
        }
      }
    },
    Od = "browser-use-kernel:";
  function Pd(e, t) {
    const r = new Map();
    chrome.runtime.onConnect.addListener((n) => {
      if (!n.name.startsWith(Od) || n.sender?.id !== chrome.runtime.id) return;
      const i = n.name.slice(19);
      if (i.length === 0) {
        n.disconnect();
        return;
      }
      let a;
      try {
        a = new URL(n.sender.url ?? "");
      } catch {
        n.disconnect();
        return;
      }
      const s = new URL(chrome.runtime.getURL("js-kernel-host.html"));
      if (
        n.sender.tab != null ||
        a.origin !== s.origin ||
        a.protocol !== s.protocol ||
        a.host !== s.host ||
        a.pathname !== s.pathname ||
        a.searchParams.get("scopeId") !== i
      ) {
        n.disconnect();
        return;
      }
      r.get(i)?.close();
      const o = new Rd(n);
      r.set(i, o),
        o.addCloseListener(() => {
          r.get(i) === o && (r.delete(i), t?.(i));
        });
      const [l, h] = kd(
        o,
        (m) => ("type" in m && m.type === "control" ? "a" : "b"),
        (m, d) => (d === "a" ? { ...m, type: "control" } : m)
      );
      try {
        e(i, h, l);
      } catch (m) {
        throw (o.close(), m);
      }
    });
  }
  var ei;
  function Ce() {
    return (
      (ei ??= Md().catch((e) => {
        throw ((ei = void 0), e);
      })),
      ei
    );
  }
  async function Md() {
    const { extensionInstanceId: e } = await chrome.storage.local.get(
        "extensionInstanceId"
      ),
      t = Va(e);
    if (t != null) return t;
    await chrome.storage.session.remove("nodeReplTunnel"),
      await chrome.storage.local.remove("browserUseTunnels");
    const r = crypto.randomUUID();
    return await chrome.storage.local.set({ extensionInstanceId: r }), r;
  }
  function Ld(e) {
    if (e?.thread_source === "subagent" && typeof e.thread_id == "string")
      return e.thread_id;
    const t = e?.session_id;
    return typeof t == "string" ? t : void 0;
  }
  function Dd(e) {
    return (
      typeof e == "object" &&
      e != null &&
      "id" in e &&
      typeof e.id == "string" &&
      "ok" in e &&
      typeof e.ok == "boolean"
    );
  }
  var lt = new Map(),
    Lr = null;
  async function xd(e, t) {
    if (!e) throw new Error("JavaScript kernel requires a session scope");
    t?.throwIfAborted(), await Ud(), t?.throwIfAborted();
    let r = lt.get(e);
    return r == null && ((r = new Nd(e)), lt.set(e, r)), r;
  }
  async function Ns(e) {
    const t = lt.get(e);
    if (t != null)
      try {
        await t.reset();
      } finally {
        lt.get(e) === t && lt.delete(e);
      }
  }
  var Nd = class {
    constructor(e) {
      this.scopeId = e;
    }
    async reset() {
      const e = {
          id: crypto.randomUUID(),
          scopeId: this.scopeId,
          type: "js-kernel:reset",
        },
        t = await chrome.runtime.sendMessage(e),
        r = this.readResponse(t, e.id);
      if (!r.ok) throw Us(r.error);
    }
    async executeJs(e, t, r = {}) {
      if (t?.aborted) throw t.reason;
      const n = {
        id: crypto.randomUUID(),
        requestMeta: r,
        scopeId: this.scopeId,
        script: e,
        type: "js-kernel:execute",
      };
      let i, a;
      const s = chrome.runtime.sendMessage(n);
      try {
        const o =
            t == null
              ? await s
              : await Promise.race([
                  s,
                  new Promise((h, m) => {
                    (i = () => {
                      const d = {
                        id: n.id,
                        scopeId: this.scopeId,
                        type: "js-kernel:cancel",
                      };
                      (a = chrome.runtime.sendMessage(d).catch(() => {})),
                        m(t.reason);
                    }),
                      t.addEventListener("abort", i, { once: !0 }),
                      t.aborted && i();
                  }),
                ]),
          l = this.readResponse(o, n.id);
        if (l.output == null)
          throw l.ok
            ? new Error("JavaScript kernel returned no execution output")
            : Us(l.error);
        return {
          ...l.output,
          error: l.ok
            ? void 0
            : l.error ?? {
                message: "JavaScript execution failed",
                name: "Error",
              },
        };
      } finally {
        i != null && t?.removeEventListener("abort", i), await a;
      }
    }
    readResponse(e, t) {
      if (!Dd(e) || e.id !== t)
        throw new Error("JavaScript kernel returned an invalid result");
      return (
        (e.resetRequired ||
          (e.output == null &&
            e.error?.name === "JsKernelInitializationTimeoutError")) &&
          lt.get(this.scopeId) === this &&
          lt.delete(this.scopeId),
        e
      );
    }
  };
  function Us(e) {
    const t = new Error(e?.message ?? "JavaScript execution failed");
    return (
      (t.name = e?.name ?? "Error"), e?.stack != null && (t.stack = e.stack), t
    );
  }
  async function Ud() {
    const e = "js-kernel-offscreen.html",
      t = chrome.runtime.getURL(e);
    if (
      !(
        (
          await chrome.runtime.getContexts({
            contextTypes: ["OFFSCREEN_DOCUMENT"],
            documentUrls: [t],
          })
        ).length > 0
      )
    ) {
      Lr == null &&
        (Lr = chrome.offscreen.createDocument({
          justification: "Run isolated, persistent browser JavaScript kernels.",
          reasons: ["IFRAME_SCRIPTING", "WORKERS"],
          url: e,
        }));
      try {
        await Lr;
      } finally {
        Lr = null;
      }
    }
  }
  var Fd = class {
    methods = new Map();
    tools = new Map();
    constructor(e) {
      (this.serverInfo = e),
        this.registerMethod("initialize", () => ({
          headers: { "Mcp-Session-Id": [crypto.randomUUID()] },
          result: {
            capabilities: { tools: { listChanged: !1 } },
            protocolVersion: "2025-06-18",
            serverInfo: this.serverInfo,
          },
        })),
        this.registerMethod("ping", () => ({ result: {} })),
        this.registerMethod("tools/list", () => ({
          result: {
            tools: [...this.tools].map(([t, r]) => ({ name: t, ...r.schema })),
          },
        })),
        this.registerMethod("tools/call", (t, r, n, i) =>
          this.callTool(t, r, n, i)
        );
    }
    registerTool(e, t, r) {
      if (this.tools.has(e))
        throw new Error(`MCP tool is already registered: ${e}`);
      this.tools.set(e, {
        callback: (n, i, a, s) =>
          ti(n, t.inputSchema)
            ? r(n, i, a, s)
            : Promise.resolve({
                content: [{ type: "text", text: "Invalid tool arguments" }],
                isError: !0,
              }),
        schema: t,
      });
    }
    unregisterTool(e) {
      this.tools.delete(e);
    }
    async callMethod(e, t, r, n, i) {
      const a = this.methods.get(e);
      return a == null
        ? { error: { code: -32601, message: "Method not found" } }
        : await a.callback(t, r, n, i);
    }
    registerMethod(e, t) {
      this.methods.set(e, { callback: t });
    }
    async callTool(e, t, r, n) {
      if (!$t(e) || typeof e.name != "string")
        return { error: { code: -32601, message: "Method not found" } };
      const i = this.tools.get(e.name);
      if (i == null)
        return { error: { code: -32601, message: "Method not found" } };
      try {
        let a = e.arguments;
        if ($t(a)) {
          const o = { ...a };
          delete o._meta, (a = o);
        }
        const s = Bd($t(e._meta) ? e._meta : void 0, n);
        return { result: await i.callback(a, t, r, s) };
      } catch {
        return r.aborted
          ? null
          : {
              result: {
                content: [{ type: "text", text: "Tool execution failed" }],
                isError: !0,
              },
            };
      }
    }
  };
  function Bd(e, t) {
    const r = { ...e },
      n = r["x-codex-turn-metadata"],
      i = typeof n == "string" ? JSON.parse(n) : n,
      a = $t(i) ? i : void 0,
      s = a?.thread_id || a?.session_id;
    return (
      s
        ? (r["x-codex-turn-metadata"] = {
            ...a,
            sandbox: a?.sandbox || "",
            session_id: a?.session_id || s,
            turn_id: a?.turn_id || t.requestId,
          })
        : Reflect.deleteProperty(r, "x-codex-turn-metadata"),
      { channel: t.channel, requestMeta: r, scopeId: s, turnMetadata: a }
    );
  }
  function $t(e) {
    return typeof e == "object" && e != null && !Array.isArray(e);
  }
  function ti(e, t) {
    if ("enum" in t && t.enum != null)
      return t.enum.some((r) => Object.is(r, e));
    switch (t.type) {
      case "string":
        return typeof e == "string";
      case "number":
        return typeof e == "number" && Number.isFinite(e);
      case "integer":
        return typeof e == "number" && Number.isSafeInteger(e);
      case "boolean":
        return typeof e == "boolean";
      case "null":
        return e === null;
      case "array":
        return Array.isArray(e) && e.every((r) => ti(r, t.items));
      case "object":
        if (!$t(e) || t.required?.some((r) => !(r in e))) return !1;
        for (const [r, n] of Object.entries(t.properties))
          if (r in e && !ti(e[r], n)) return !1;
        return t.additionalProperties === !1
          ? Object.keys(e).every((r) => r in t.properties)
          : !0;
    }
  }
  var Fs = 25e3,
    Bs = 25e3,
    ri = 3;
  async function ni(e, t, r, n, i, a, s) {
    const o = JSON.stringify(r);
    for (let l = 0; l < ri; l += 1) {
      const h = performance.now(),
        m = ii(i, Math.min(n ?? 1 / 0, h + Fs), h);
      if (m == null) return !1;
      a.add(m);
      let d = null;
      try {
        d = await fetch(e, {
          body: o,
          credentials: "omit",
          headers: { ...t, "Content-Type": "application/json" },
          method: "POST",
          signal: m.signal,
        });
      } catch {
        if (
          (r.resp_type === "jsonrpc_notify" && m.signal.aborted) ||
          i.aborted ||
          l === ri - 1
        )
          return !1;
      } finally {
        a.delete(m), m.dispose();
      }
      if (d?.ok) return !0;
      if (
        d?.status === 401 &&
        r.resp_type === "jsonrpc_response" &&
        !i.aborted &&
        (n == null || performance.now() < n) &&
        s != null
      )
        return s((g, w) =>
          ni(e, { ...t, Authorization: `Bearer ${g}` }, r, n, w, a)
        );
      if (
        d?.status === 404 ||
        (d != null &&
          (![408, 429, 502, 503, 504].includes(d.status) || l === ri - 1))
      )
        return !1;
      const f = 2 ** l * 1e3,
        c = Math.floor(Math.random() * f),
        p = d == null ? 0 : $s(d, Date.now()),
        u = Math.max(f + c, p);
      if (n != null && performance.now() + u >= n) return !1;
      await js(u, i);
    }
    return !1;
  }
  function ii(e, t, r) {
    const n = t - r;
    if (n <= 0 || e.aborted) return null;
    const i = new AbortController(),
      a = Date.now() + n,
      s = setTimeout(() => i.abort(), n);
    return {
      dispose: () => clearTimeout(s),
      expireIfOverdue() {
        Date.now() >= a && i.abort();
      },
      signal: AbortSignal.any([e, i.signal]),
    };
  }
  function $s(e, t) {
    const r = e.headers.get("Retry-After");
    if (r == null) return 0;
    if (/^\d+$/u.test(r)) return Math.min(Number(r) * 1e3, Bs);
    const n = Date.parse(r);
    return !Number.isFinite(n) || n <= t ? 0 : Math.min(n - t, Bs);
  }
  async function js(e, t) {
    t.aborted ||
      (await new Promise((r) => {
        const n = () => {
            clearTimeout(i), r();
          },
          i = setTimeout(() => {
            t.removeEventListener("abort", n), r();
          }, e);
        t.addEventListener("abort", n, { once: !0 });
      }));
  }
  var $d = class {
    pendingElicitations = new Map();
    disposed = !1;
    constructor(e, t, r, n) {
      (this.command = e),
        (this.postResponse = t),
        (this.poll = r),
        (this.abortExecution = n);
    }
    createElicitation(e, t) {
      if (t.aborted) return Promise.reject(t.reason);
      if (this.disposed)
        return Promise.reject(new Error("MCP tool call has finished"));
      const r = crypto.randomUUID();
      return new Promise((n, i) => {
        const a = new AbortController(),
          s = () => this.rejectElicitation(r, t.reason),
          o = { controller: a, onAbort: s, reject: i, resolve: n, signal: t };
        if (
          (this.pendingElicitations.set(r, o),
          t.addEventListener("abort", s, { once: !0 }),
          t.aborted)
        ) {
          s();
          return;
        }
        this.postResponse(
          {
            channel: this.command.channel,
            request_id: this.command.request_id,
            resp_code: 200,
            resp_headers: { "Content-Type": ["application/json"] },
            resp_json: {
              id: r,
              jsonrpc: "2.0",
              method: "elicitation/create",
              params: { mode: "form", ...e },
            },
            resp_type: "jsonrpc_notify",
          },
          t
        ).then(
          (l) => {
            if (this.pendingElicitations.get(r) === o) {
              if (!l) {
                this.rejectElicitation(
                  r,
                  new Error("MCP elicitation could not be delivered")
                );
                return;
              }
              this.poll(a.signal).catch((h) => {
                a.signal.aborted || this.rejectElicitation(r, h);
              });
            }
          },
          (l) => this.rejectElicitation(r, l)
        );
      });
    }
    handleResponse(e, t) {
      const r = e.jsonrpc;
      return r == null ||
        "method" in r ||
        typeof r.id != "string" ||
        !this.matchesSession(e) ||
        this.pendingElicitations.get(r.id) == null
        ? !1
        : t
        ? "error" in r
          ? (this.rejectElicitation(r.id, new Error(r.error.message)), !0)
          : jd(r.result)
          ? (this.takeElicitation(r.id)?.resolve(r.result), !0)
          : (this.rejectElicitation(
              r.id,
              new Error("MCP client returned an invalid elicitation response")
            ),
            !0)
        : (this.rejectElicitation(
            r.id,
            new Error("MCP elicitation response could not be acknowledged")
          ),
          !0);
    }
    terminateSession(e) {
      this.matchesSession(e) &&
        this.cancel(new Error("MCP session was terminated"));
    }
    cancelRequest(e) {
      const t = e.jsonrpc,
        r = this.command.jsonrpc;
      if (
        t == null ||
        !("method" in t) ||
        t.method !== "notifications/cancelled" ||
        "id" in t ||
        r == null ||
        !("method" in r) ||
        r.method !== "tools/call" ||
        r.id == null ||
        !this.matchesSession(e)
      )
        return;
      const n = t.params;
      typeof n == "object" &&
        n != null &&
        "requestId" in n &&
        n.requestId === r.id &&
        this.cancel(new Error("MCP tool call was cancelled"));
    }
    cancel(e) {
      this.disposed || (this.abortExecution(e), this.dispose(e));
    }
    dispose(e = new Error("MCP tool call has finished")) {
      if (!this.disposed) {
        this.disposed = !0;
        for (const t of this.pendingElicitations.keys())
          this.rejectElicitation(t, e);
      }
    }
    rejectElicitation(e, t) {
      this.takeElicitation(e)?.reject(t);
    }
    matchesSession(e) {
      if ((this.command.channel ?? "main") !== (e.channel ?? "main")) return !1;
      const t = qs(this.command),
        r = qs(e);
      return t == null
        ? r == null
        : t.length === 1 &&
            typeof t[0] == "string" &&
            t[0] !== "" &&
            r?.length === 1 &&
            r[0] === t[0];
    }
    takeElicitation(e) {
      const t = this.pendingElicitations.get(e);
      return t == null
        ? null
        : (this.pendingElicitations.delete(e),
          t.signal.removeEventListener("abort", t.onAbort),
          t.controller.abort(),
          t);
    }
  };
  function qs(e) {
    const t = Object.entries(e.headers ?? {}).filter(
      ([r]) => r.toLowerCase() === "mcp-session-id"
    );
    return t.length === 0 ? void 0 : t.flatMap(([, r]) => r);
  }
  function jd(e) {
    return (
      typeof e == "object" &&
      e != null &&
      "action" in e &&
      (e.action === "accept" || e.action === "cancel" || e.action === "decline")
    );
  }
  var qd = "codex_chrome_extension_browser_tunnel",
    Gd = crypto.randomUUID();
  function ai(e, t) {
    const r = {};
    for (const [n, i] of Object.entries(t))
      i !== void 0 && n !== "instance_id" && (r[n] = String(i));
    (r.observed_at_ms = String(Date.now())),
      (r.worker_id = Gd),
      console.info("[browser-tunnel]", e, r),
      Nu(qd, e, r);
  }
  function zd(e) {
    let t;
    return (r, n, i) => {
      const a = `${r}:${n ?? ""}:${i ?? ""}`;
      if (a === t) return;
      const s = r === "connected" && t !== void 0;
      (t = a),
        ai("polling", {
          state: s ? "recovered" : r,
          tunnel_id: e,
          reason: n,
          http_status: i,
        });
    };
  }
  var Vd = 15e3,
    Hd = 3e4,
    Wd = 1e4,
    Kd = 3,
    Zd = class extends Fd {
      activeClients = new Set();
      networkRequests = new Set();
      pollUrl;
      responseUrl;
      reportPollingState;
      controller = null;
      invalidTunnelResponses = 0;
      pollRetryAfterMs = 0;
      constructor(e, t, r, n) {
        super(t),
          (this.config = e),
          (this.onPollingFailure = r),
          (this.onResponseUnauthorized = n),
          (this.reportPollingState = zd(e.tunnelId));
        const i = `/v1/tunnels/${encodeURIComponent(e.tunnelId)}`;
        (this.pollUrl = new URL(`${i}/poll`, e.baseUrl).toString()),
          (this.responseUrl = new URL(`${i}/response`, e.baseUrl).toString());
      }
      async initialize() {
        if (this.controller != null) return;
        const e = new AbortController();
        (this.controller = e),
          this.run(e.signal)
            .catch(() => {
              e.signal.aborted ||
                (this.reportPollingState("stopped", "unknown"),
                console.warn(
                  "[tunnel-mcp-server] tunnel polling stopped unexpectedly"
                ));
            })
            .finally(() => {
              this.controller === e && (this.controller = null);
            });
      }
      async ensurePolling() {
        for (const e of this.networkRequests) e.expireIfOverdue();
        await this.initialize();
      }
      dispose() {
        this.controller?.abort(), (this.controller = null);
        for (const e of this.activeClients)
          e.cancel(new Error("MCP tunnel was disposed"));
      }
      async run(e, t = e) {
        let r = 1e3;
        for (; !e.aborted; ) {
          let n;
          try {
            n = await this.pollOnce(e, t);
          } catch (a) {
            if (e.aborted) return;
            console.warn("[tunnel-mcp-server] tunnel poll failed", a),
              (n = "retry");
          }
          if (n === "ok") {
            r = 1e3;
            continue;
          }
          const i = Math.floor(Math.random() * r);
          await js(Math.max(r + i, this.pollRetryAfterMs), e),
            (r = Math.min(r * 2, Wd));
        }
      }
      async pollOnce(e, t = e) {
        this.pollRetryAfterMs = 0;
        const r = performance.now(),
          n = ii(e, r + Fs, r);
        if (n == null) return "ok";
        this.networkRequests.add(n);
        let i, a;
        try {
          let s;
          try {
            s = await fetch(`${this.pollUrl}?limit=1&timeout_ms=${Vd}`, {
              credentials: "omit",
              headers: this.headers(),
              method: "GET",
              signal: n.signal,
            });
          } catch (o) {
            return e.aborted
              ? "ok"
              : (navigator.onLine === !1
                  ? this.reportPollingState("offline")
                  : this.reportPollingState("failed", "network"),
                console.warn("[tunnel-mcp-server] tunnel poll failed", o),
                "retry");
          }
          if (
            ((a = performance.now()),
            s.status !== 404 &&
              s.status !== 410 &&
              (this.invalidTunnelResponses = 0),
            s.status === 204)
          )
            return this.reportPollingState("connected"), "ok";
          if (!s.ok)
            return (
              this.reportPollingState("failed", "http", s.status),
              console.warn("[tunnel-mcp-server] tunnel poll failed", {
                status: s.status,
                statusText: s.statusText,
              }),
              (this.pollRetryAfterMs = $s(s, Date.now())),
              s.status === 401 &&
                (await this.onPollingFailure?.("unauthorized")),
              (s.status === 404 || s.status === 410) &&
                ++this.invalidTunnelResponses >= Kd &&
                (await this.onPollingFailure?.("invalid_tunnel"),
                (this.invalidTunnelResponses = 0)),
              "retry"
            );
          try {
            i = await s.json();
          } catch (o) {
            return (
              e.aborted ||
                this.reportPollingState("failed", "invalid_response"),
              console.warn(
                "[tunnel-mcp-server] tunnel poll returned invalid JSON",
                o
              ),
              "retry"
            );
          }
        } finally {
          this.networkRequests.delete(n), n.dispose();
        }
        if (!Xd(i) || !Array.isArray(i.commands))
          return (
            this.reportPollingState("failed", "invalid_response"),
            console.warn(
              "[tunnel-mcp-server] tunnel poll returned no commands"
            ),
            "retry"
          );
        this.reportPollingState("connected");
        for (const s of i.commands) {
          if (e.aborted) return "ok";
          const o = s;
          if (o == null || !o.request_id) continue;
          const l = this.shouldDeferCommand(o),
            h = this.handleCommand(o, a, l ? t : e, t);
          l
            ? h.catch(() => {
                e.aborted ||
                  console.warn("[tunnel-mcp-server] deferred request failed");
              })
            : await h;
        }
        return "ok";
      }
      async handleCommand(e, t, r, n) {
        const i = Jd(e, t),
          a = performance.now();
        if (i != null && i <= a) return;
        const s = ii(r, i ?? a + Hd, a);
        if (s == null) return;
        let o,
          l = !1;
        try {
          e.command_type === "session_termination" &&
            (l = await this.onSessionTerminated(e)),
            (o = await this.getMcpResponse(e, i, s.signal, n));
        } finally {
          s.dispose();
        }
        if (s.signal.aborted || o == null) return;
        const h = await ni(
          this.responseUrl,
          this.headers(e.shard_token),
          o,
          i,
          r,
          this.networkRequests,
          this.onResponseUnauthorized
        );
        if (l && h) for (const m of this.activeClients) m.terminateSession(e);
        else if (e.jsonrpc != null && !("method" in e.jsonrpc)) {
          for (const m of this.activeClients) if (m.handleResponse(e, h)) break;
        } else if (h) for (const m of this.activeClients) m.cancelRequest(e);
      }
      onSessionTerminated(e) {
        return Promise.resolve(!0);
      }
      shouldDeferCommand(e) {
        return !1;
      }
      async getMcpResponse(e, t, r, n) {
        if (e.command_type === "session_termination")
          return {
            channel: e.channel,
            request_id: e.request_id,
            resp_code: 204,
            resp_type: "session_termination_response",
          };
        if (e.command_type !== "jsonrpc" || e.jsonrpc == null)
          return (
            console.warn("[tunnel-mcp-server] unsupported tunnel command", {
              commandType: e.command_type,
              requestId: e.request_id,
            }),
            null
          );
        if (!("method" in e.jsonrpc) || !("id" in e.jsonrpc))
          return {
            channel: e.channel,
            request_id: e.request_id,
            resp_code: 202,
            resp_type: "notify_ack",
          };
        const { id: i, method: a, params: s } = e.jsonrpc,
          o = new AbortController(),
          l = AbortSignal.any([r, o.signal]),
          h = new $d(
            e,
            (m, d) =>
              ni(
                this.responseUrl,
                this.headers(e.shard_token),
                m,
                t,
                d,
                this.networkRequests,
                this.onResponseUnauthorized
              ),
            async (m) => {
              this.shouldDeferCommand(e) || (await this.run(m, n));
            },
            (m) => o.abort(m)
          );
        this.activeClients.add(h);
        try {
          const m = await this.callMethod(a, s, h, l, {
            channel: e.channel ?? "main",
            requestId: e.request_id,
          });
          if (m == null) return null;
          const { headers: d, ...f } = m;
          return {
            channel: e.channel,
            request_id: e.request_id,
            resp_code: 200,
            resp_headers: { "Content-Type": ["application/json"], ...d },
            resp_json: { id: i, jsonrpc: "2.0", ...f },
            resp_type: "jsonrpc_response",
          };
        } finally {
          this.activeClients.delete(h), h.dispose();
        }
      }
      headers(e) {
        return {
          Authorization: `Bearer ${this.config.apiKey}`,
          "X-Tunnel-Client-Name": "codex-chrome-mcp-server",
          "X-Tunnel-Client-Version": chrome.runtime.getManifest().version,
          ...(e == null ? {} : { "X-Tunnel-Shard-Token": e }),
        };
      }
    };
  function Jd(e, t) {
    if (typeof e.response_timeout != "string") return null;
    const r = /^(\d+)(ns|us|ms|s|m|h)$/u.exec(e.response_timeout);
    if (r == null) return null;
    const n = Number(r[1]);
    if (!Number.isSafeInteger(n)) return null;
    const i = { h: 36e5, m: 6e4, ms: 1, ns: 1e-6, s: 1e3, us: 0.001 }[r[2]];
    if (i == null) return null;
    const a = n * i;
    return Number.isFinite(a) ? t + a : null;
  }
  function Xd(e) {
    return typeof e == "object" && e != null && !Array.isArray(e);
  }
  var si = "browserUseControlAllowed",
    Gs = "browser-use-first-time-control",
    Yd = class extends Zd {
      chatApi;
      kernelGeneration = crypto.randomUUID();
      scopeIdsByChannel = new Map();
      scopeOperations = new Map();
      browserControlChallenges = new Map();
      jsCalls = new Map();
      pdfUploadsByTurn = new Map();
      constructor(e, t, r, n) {
        super(e, { name: "node-repl-work", version: "0.0.1" }, r, n),
          (this.onTurnEnded = t),
          (this.chatApi = new fs(e.apiKey, e.account)),
          this.registerTool(
            "js",
            {
              description:
                "Execute JavaScript in the selected browser instance.",
              inputSchema: {
                additionalProperties: !1,
                properties: {
                  code: { type: "string" },
                  instance_id: { type: "string" },
                },
                required: ["code", "instance_id"],
                type: "object",
              },
            },
            (i, a, s, o) => this.handleJsCall(i, a, s, o)
          ),
          this.registerTool(
            "turn_ended",
            {
              _meta: { ui: { visibility: ["app"] } },
              description: "Release browser control after a completed turn.",
              inputSchema: {
                additionalProperties: !1,
                properties: {},
                type: "object",
              },
            },
            async (i, a, s, o) => {
              const l = zs(o.turnMetadata),
                h = o.scopeId;
              if (typeof h != "string" || h.length === 0)
                throw new Error("Browser turn cleanup requires a thread scope");
              s.throwIfAborted();
              const m = JSON.stringify([h, l.session_id, l.turn_id]);
              for (const [d, f] of this.jsCalls)
                f === m &&
                  d.abort(
                    new Error("JavaScript execution ended with its turn")
                  );
              return (
                await this.runInScope(h, s, async () => {
                  try {
                    this.chatApi.signal.throwIfAborted(),
                      await this.onTurnEnded(this.kernelScopeId(h), l);
                  } finally {
                    const d = this.pdfUploadsByTurn.get(m);
                    d != null &&
                      (await Promise.all(
                        [...d].map(async (f) => {
                          try {
                            await Pr(this.chatApi, f), d.delete(f);
                          } catch {
                            console.warn("Browser PDF turn-end cleanup failed");
                          }
                        })
                      ),
                      d.size === 0 && this.pdfUploadsByTurn.delete(m));
                  }
                }),
                { content: [] }
              );
            }
          );
      }
      suspend() {
        super.dispose();
      }
      dispose() {
        this.chatApi.dispose(), super.dispose();
        for (const e of this.scopeIdsByChannel.values())
          for (const t of e)
            Ns(this.kernelScopeId(t)).catch(() => {
              console.warn(
                "[node-repl-tunnel] failed to reset disposed kernel"
              );
            });
        this.scopeIdsByChannel.clear(), this.browserControlChallenges.clear();
      }
      kernelScopeId(e) {
        return JSON.stringify([
          this.chatApi.account.userId,
          this.chatApi.account.id,
          this.kernelGeneration,
          e,
        ]);
      }
      shouldDeferCommand(e) {
        const t = e.jsonrpc;
        return (
          t != null &&
          "method" in t &&
          t.method === "tools/call" &&
          typeof t.params == "object" &&
          t.params != null &&
          "name" in t.params &&
          (t.params.name === "js" || t.params.name === "turn_ended")
        );
      }
      async onSessionTerminated(e) {
        const t = e.channel ?? "main",
          r = this.scopeIdsByChannel.get(t),
          n = Object.keys(e.headers ?? {}).some(
            (a) => a.toLowerCase() === "mcp-session-id"
          );
        if (!n)
          for (const a of r ?? []) this.browserControlChallenges.delete(a);
        const i = !n && r?.size === 1 ? r.values().next().value : void 0;
        return i == null
          ? n
          : (await Ns(this.kernelScopeId(i)),
            r?.delete(i),
            r?.size === 0 && this.scopeIdsByChannel.delete(t),
            !0);
      }
      async handleJsCall(e, t, r, n) {
        const i = n.scopeId;
        if (i == null)
          return {
            content: [
              {
                text: "JavaScript execution requires thread-scoped Codex metadata",
                type: "text",
              },
            ],
            isError: !0,
          };
        const a = this.scopeIdsByChannel.get(n.channel) ?? new Set();
        this.scopeIdsByChannel.set(n.channel, a), a.add(i);
        const s = n.requestMeta["x-codex-turn-metadata"],
          o = JSON.stringify([i, Ld(s), s?.turn_id]),
          l = new AbortController();
        return (
          this.jsCalls.set(l, o),
          (r = AbortSignal.any([r, this.chatApi.signal, l.signal])),
          await this.runInScope(i, r, async () => {
            r.throwIfAborted();
            const h = Cd(this.kernelScopeId(i), t, r, this.chatApi, (m) => {
              const d = zs(n.turnMetadata),
                f = JSON.stringify([i, d.session_id, d.turn_id]),
                c = this.pdfUploadsByTurn.get(f) ?? new Set();
              c.add(m), this.pdfUploadsByTurn.set(f, c);
            });
            try {
              const m = await chrome.storage.sync.get(si);
              if ((r.throwIfAborted(), m.browserUseControlAllowed !== !0)) {
                const c = Te[Mn(navigator)].shortDisplayName,
                  p = n.requestMeta["openai/browser_context"];
                if (
                  typeof p == "object" &&
                  p != null &&
                  !Array.isArray(p) &&
                  p.mode === "chat"
                ) {
                  let u = this.browserControlChallenges.get(i);
                  if (
                    (u?.instanceId !== e.instance_id && (u = void 0),
                    u == null || p.browser_control_consent !== u.challenge)
                  )
                    return (
                      (u ??= {
                        challenge: crypto.randomUUID(),
                        instanceId: e.instance_id,
                      }),
                      this.browserControlChallenges.set(i, u),
                      {
                        _meta: {
                          "openai/browser_control_consent": {
                            elicitation_id: Gs,
                            challenge: u.challenge,
                            browser_name: c,
                          },
                        },
                        content: [
                          {
                            type: "text",
                            text: "Browser control requires your permission.",
                          },
                        ],
                        isError: !1,
                      }
                    );
                  this.browserControlChallenges.delete(i);
                } else {
                  const u = await t.createElicitation(
                    {
                      message:
                        "ChatGPT can read your open tabs and take actions in them to help complete your tasks.",
                      requestedSchema: {
                        additionalProperties: !1,
                        properties: {},
                        type: "object",
                      },
                      _meta: {
                        codex_requires_user_input: !0,
                        codex_guardian_compatible: !1,
                        browser_use_elicitation_id: Gs,
                        browser_use_browser_name: c,
                        codex_approval_kind: "mcp_tool_call",
                        connector_id: "browser-use",
                        connector_name: "Browser",
                        tool_name: "allow_browser_control",
                        tool_title: `Allow ChatGPT to use your ${c}?`,
                        tool_params: {},
                        tool_params_display: [],
                      },
                    },
                    r
                  );
                  if ((r.throwIfAborted(), u.action !== "accept"))
                    return {
                      content: [
                        {
                          text: "Browser control was not allowed.",
                          type: "text",
                        },
                      ],
                      isError: !0,
                    };
                }
                await chrome.storage.sync.set({ [si]: !0 }), r.throwIfAborted();
              }
              this.browserControlChallenges.clear();
              const d = await (
                  await xd(this.kernelScopeId(i), r)
                ).executeJs(e.code, r, n.requestMeta),
                f = { content: [...h.content] };
              d.error != null &&
                (f.content.push({
                  text: `${d.error.name}: ${d.error.message}`,
                  type: "text",
                }),
                (f.isError = !0));
              for (const c of d.contentItems)
                f.content.push({ text: c, type: "text" });
              return d.responseMeta != null && (f._meta = d.responseMeta), f;
            } catch (m) {
              if (r.aborted) throw m;
              return {
                content: [
                  ...h.content,
                  {
                    text:
                      m instanceof Error
                        ? `${m.name}: ${m.message}`
                        : "JavaScript execution failed",
                    type: "text",
                  },
                ],
                isError: !0,
              };
            } finally {
              h.dispose();
            }
          }).finally(() => {
            this.jsCalls.delete(l);
          })
        );
      }
      async runInScope(e, t, r) {
        t.throwIfAborted();
        const n = (this.scopeOperations.get(e) ?? Promise.resolve()).then(r),
          i = n.then(
            () => {},
            () => {}
          );
        return (
          this.scopeOperations.set(e, i),
          i.then(() => {
            this.scopeOperations.get(e) === i && this.scopeOperations.delete(e);
          }),
          await n
        );
      }
    };
  function zs(e) {
    const t = e?.thread_source === "subagent" ? e.thread_id : e?.session_id,
      r = e?.turn_id;
    if (typeof t != "string" || !t || typeof r != "string" || !r)
      throw new Error(
        "Browser turn cleanup requires explicit session and turn IDs"
      );
    return { session_id: t, turn_id: r };
  }
  function Qd() {
    let e;
    return (t, r) => {
      const n = { ...t, outcome: r },
        i = JSON.stringify(n);
      i !== e && ((e = i), ai("setup", n));
    };
  }
  function eh() {
    ai("setup", { outcome: "failed", stage: "start_polling" }),
      console.warn("[node-repl-tunnel] failed to start tunnel polling");
  }
  var Vs = 3e4,
    Hs = 6e4,
    oi = "browserUseTunnels",
    Ke = "nodeReplTunnel",
    Dr = "browser-use-tunnel-retry",
    li = "browser-use-tunnel-health";
  async function th(e) {
    let t = Promise.resolve(!1),
      r = 0,
      n,
      i = 1 / 0,
      a = 0,
      s = !1;
    const o = Qd(),
      l = (f, c, p) => {
        if (s) return Promise.resolve(!1);
        if (f === "unauthorized") {
          const w = Date.now();
          if (w < a) return Promise.resolve(!1);
          a = w + Vs;
        }
        const u = ++r;
        n?.abort(), m.suspend();
        const g = async () => {
          if (s || u !== r) return !1;
          const w = { trigger: f, stage: "session", invalid_tunnel_id: c };
          let v = "failed";
          const S = new AbortController();
          (n = S), (i = Date.now() + Hs);
          const y = setTimeout(
            () => S.abort(new Error("Browser-use tunnel setup timed out.")),
            Hs
          );
          try {
            if (
              ((v = await nh(w, S.signal, c)),
              p == null || v === "failed" || v === "invalid_session")
            )
              return !1;
            const T = await xr();
            S.signal.throwIfAborted();
            const E = p.config;
            return s ||
              u !== r ||
              T == null ||
              T.account.userId !== E.account.userId ||
              T.account.id !== E.account.id ||
              T.account.structure !== E.account.structure ||
              T.baseUrl !== E.baseUrl ||
              T.tunnelId !== E.tunnelId ||
              T.apiKey === E.apiKey
              ? !1
              : await p.retry(T.apiKey, S.signal);
          } finally {
            if (
              (clearTimeout(y),
              n === S && ((n = void 0), (i = 1 / 0)),
              o(w, v),
              !s && u === r)
            ) {
              v === "failed" && (await chrome.storage.session.remove(Ke)),
                !s && u === r && (await m.resume());
              const T = w.http_status;
              v === "failed" &&
              (T == null || T < 400 || T === 408 || T === 429 || T >= 500) &&
              (await xr()) == null &&
              !s
                ? await chrome.alarms.create(Dr, { delayInMinutes: Vs / 6e4 })
                : await chrome.alarms.clear(Dr);
            }
          }
        };
        return (t = t.then(g, g)), t;
      },
      h = (f) => {
        f.frameId !== 0 ||
          new URL(f.url).origin !== "https://chatgpt.com" ||
          l("navigation").catch(() => {
            console.warn(
              "[node-repl-tunnel] failed to update browser-use tunnel"
            );
          });
      },
      m = await rh(
        e,
        async (f, c) => {
          await l(c, c === "invalid_tunnel" ? f.tunnelId : void 0);
        },
        !0,
        (f, c) =>
          l("unauthorized", void 0, { config: f, retry: c }).catch(
            () => (
              console.warn(
                "[node-repl-tunnel] failed to recover tunnel response"
              ),
              !1
            )
          )
      );
    chrome.webNavigation.onCompleted.addListener(h, {
      url: [{ hostEquals: new URL(qn).hostname }],
    });
    const d = (f) => {
      if (!s) {
        if (f.name === li) {
          Date.now() >= i &&
            n?.abort(new Error("Browser-use tunnel setup timed out.")),
            m.ensurePolling().catch(() => {
              console.warn(
                "[node-repl-tunnel] failed to ensure tunnel polling"
              );
            });
          return;
        }
        f.name === Dr &&
          l("retry").catch(() => {
            console.warn(
              "[node-repl-tunnel] failed to update browser-use tunnel"
            );
          });
      }
    };
    return (
      chrome.alarms.onAlarm.addListener(d),
      await chrome.alarms.create(li, { periodInMinutes: 1 }),
      await l("startup").catch(() => {
        console.warn("[node-repl-tunnel] failed to update browser-use tunnel");
      }),
      () => {
        (s = !0),
          r++,
          n?.abort(),
          chrome.webNavigation.onCompleted.removeListener(h),
          chrome.alarms.onAlarm.removeListener(d),
          chrome.alarms.clear(Dr).catch(() => {
            console.warn(
              "[node-repl-tunnel] failed to clear tunnel retry alarm"
            );
          }),
          chrome.alarms.clear(li).catch(() => {
            console.warn(
              "[node-repl-tunnel] failed to clear tunnel health alarm"
            );
          }),
          m.stop();
      }
    );
  }
  async function rh(e, t, r = !1, n) {
    let i = null,
      a = 0,
      s = 0,
      o = null,
      l = !1;
    const h = async () => {
        const d = ++a;
        if (l || r) return;
        i?.suspend();
        const f = await xr();
        if (d !== a) return;
        if (((s = d), i != null && JSON.stringify(f) === JSON.stringify(o))) {
          await i.initialize();
          return;
        }
        if ((i?.dispose(), (i = null), (o = f), f == null)) return;
        const c = new Yd(
          f,
          e,
          (p) => {
            if (i === c && !r && !l) return t?.(f, p);
          },
          async (p) =>
            i !== c || r || l || s !== a ? !1 : (await n?.(f, p)) ?? !1
        );
        (i = c), await c.initialize();
      },
      m = (d, f) => {
        f !== "session" ||
          !(Ke in d) ||
          h().catch(() => {
            console.warn("[node-repl-tunnel] failed to update tunnel polling");
          });
      };
    return (
      chrome.storage.onChanged.addListener(m),
      await h(),
      {
        async ensurePolling() {
          l || r || s !== a || (await i?.ensurePolling());
        },
        stop() {
          (l = !0),
            a++,
            i?.dispose(),
            (i = null),
            chrome.storage.onChanged.removeListener(m);
        },
        suspend() {
          (r = !0), a++, i?.suspend();
        },
        async resume() {
          (r = !1), await h();
        },
      }
    );
  }
  async function xr() {
    const e = await chrome.storage.session.get(Ke);
    try {
      const t = e[Ke];
      return typeof t.baseUrl != "string" ||
        !t.apiKey.trim() ||
        !t.tunnelId.trim()
        ? null
        : {
            account: ps(t.account, t.account.userId),
            apiKey: t.apiKey,
            baseUrl: t.baseUrl,
            tunnelId: t.tunnelId,
          };
    } catch {
      return null;
    }
  }
  async function nh(e, t, r) {
    const n = await Ar(t);
    if (
      (t.throwIfAborted(),
      (e.http_status = n.status),
      "error" in n && n.error === "http")
    )
      return n.status === 401 || n.status === 403
        ? (await chrome.storage.session.remove(Ke), "invalid_session")
        : "failed";
    if (((e.stage = "session_decode"), "error" in n))
      throw new Error("Failed to decode ChatGPT session.");
    if (n.session == null)
      return (
        await chrome.storage.session.remove(Ke),
        await chrome.storage.sync.remove(si),
        "invalid_session"
      );
    const { accessToken: i, account: a } = n.session,
      { id: s, userId: o } = a;
    (e.http_status = void 0), (e.stage = "read_configuration");
    const l = await Ce(),
      h = await chrome.storage.local.get(oi),
      m = await xr();
    t.throwIfAborted();
    let d = h.browserUseTunnels ?? {};
    const f = `${o}:${s}`;
    let c = d[f],
      p = !1;
    const u = r != null && c?.tunnelId === r;
    if (
      (u &&
        ((c = void 0),
        (d = Object.fromEntries(Object.entries(d).filter(([g]) => g !== f))),
        t.throwIfAborted(),
        await chrome.storage.local.set({ [oi]: d })),
      t.throwIfAborted(),
      m != null &&
        m.tunnelId !== c?.tunnelId &&
        !u &&
        (await chrome.storage.session.remove(Ke)),
      c == null)
    ) {
      e.stage = "create_tunnel";
      const g = await fetch(`${ds}/browser-use/sessions`, {
        body: JSON.stringify({ device_name: "Chrome", instance_id: l }),
        credentials: "include",
        redirect: "error",
        headers: {
          Authorization: `Bearer ${i}`,
          "ChatGPT-Account-ID": s,
          "Content-Type": "application/json",
        },
        method: "POST",
        signal: t,
      });
      if (((e.http_status = g.status), !g.ok))
        throw new Error(
          `Browser-use tunnel creation failed with status ${g.status}`
        );
      const w = await g.json();
      (c = { baseUrl: w.base_url, tunnelId: w.tunnel_id }),
        (p = !0),
        (e.tunnel_id = c.tunnelId),
        (e.stage = "save_registration"),
        (e.http_status = void 0),
        t.throwIfAborted(),
        await chrome.storage.local.set({ [oi]: { ...d, [f]: c } });
    }
    return (
      (e.tunnel_id = c.tunnelId),
      (e.stage = "configure_polling"),
      m?.apiKey === i &&
      m.baseUrl === c.baseUrl &&
      m.tunnelId === c.tunnelId &&
      m.account.id === a.id &&
      m.account.userId === a.userId &&
      m.account.structure === a.structure
        ? "unchanged"
        : (t.throwIfAborted(),
          await chrome.storage.session.set({
            [Ke]: {
              account: a,
              apiKey: i,
              baseUrl: c.baseUrl,
              tunnelId: c.tunnelId,
            },
          }),
          p ? "created" : "refreshed")
    );
  }
  var Ws = "codex_chrome_sidepanel_work_mode",
    Jw = "side-panel-loading.html",
    Nr = "waiting-room.html",
    ct = "codex-work-sidepanel.html";
  function ih(e) {
    return `codexWorkSidePanelConversationUrl:${e}`;
  }
  function Ks(e) {
    return `codexWorkSidePanelInvocation:${e}`;
  }
  function ah(e = "true") {
    return e !== "false";
  }
  var K = class {
      constructor(e, t, r) {
        (this.type = e), (this.schema = t), (this.payload = r);
      }
      parse() {
        return this.schema.parse(this.payload);
      }
      toJSON() {
        return { type: this.type, ...this.payload };
      }
    },
    H;
  (function (e) {
    e.assertEqual = (i) => {};
    function t(i) {}
    e.assertIs = t;
    function r(i) {
      throw new Error();
    }
    (e.assertNever = r),
      (e.arrayToEnum = (i) => {
        const a = {};
        for (const s of i) a[s] = s;
        return a;
      }),
      (e.getValidEnumValues = (i) => {
        const a = e.objectKeys(i).filter((o) => typeof i[i[o]] != "number"),
          s = {};
        for (const o of a) s[o] = i[o];
        return e.objectValues(s);
      }),
      (e.objectValues = (i) =>
        e.objectKeys(i).map(function (a) {
          return i[a];
        })),
      (e.objectKeys =
        typeof Object.keys == "function"
          ? (i) => Object.keys(i)
          : (i) => {
              const a = [];
              for (const s in i)
                Object.prototype.hasOwnProperty.call(i, s) && a.push(s);
              return a;
            }),
      (e.find = (i, a) => {
        for (const s of i) if (a(s)) return s;
      }),
      (e.isInteger =
        typeof Number.isInteger == "function"
          ? (i) => Number.isInteger(i)
          : (i) =>
              typeof i == "number" &&
              Number.isFinite(i) &&
              Math.floor(i) === i);
    function n(i, a = " | ") {
      return i.map((s) => (typeof s == "string" ? `'${s}'` : s)).join(a);
    }
    (e.joinValues = n),
      (e.jsonStringifyReplacer = (i, a) =>
        typeof a == "bigint" ? a.toString() : a);
  })(H || (H = {}));
  var Zs;
  (function (e) {
    e.mergeShapes = (t, r) => ({ ...t, ...r });
  })(Zs || (Zs = {}));
  var L = H.arrayToEnum([
      "string",
      "nan",
      "number",
      "integer",
      "float",
      "boolean",
      "date",
      "bigint",
      "symbol",
      "function",
      "undefined",
      "null",
      "array",
      "object",
      "unknown",
      "promise",
      "void",
      "never",
      "map",
      "set",
    ]),
    Ze = (e) => {
      switch (typeof e) {
        case "undefined":
          return L.undefined;
        case "string":
          return L.string;
        case "number":
          return Number.isNaN(e) ? L.nan : L.number;
        case "boolean":
          return L.boolean;
        case "function":
          return L.function;
        case "bigint":
          return L.bigint;
        case "symbol":
          return L.symbol;
        case "object":
          return Array.isArray(e)
            ? L.array
            : e === null
            ? L.null
            : e.then &&
              typeof e.then == "function" &&
              e.catch &&
              typeof e.catch == "function"
            ? L.promise
            : typeof Map < "u" && e instanceof Map
            ? L.map
            : typeof Set < "u" && e instanceof Set
            ? L.set
            : typeof Date < "u" && e instanceof Date
            ? L.date
            : L.object;
        default:
          return L.unknown;
      }
    },
    R = H.arrayToEnum([
      "invalid_type",
      "invalid_literal",
      "custom",
      "invalid_union",
      "invalid_union_discriminator",
      "invalid_enum_value",
      "unrecognized_keys",
      "invalid_arguments",
      "invalid_return_type",
      "invalid_date",
      "invalid_string",
      "too_small",
      "too_big",
      "invalid_intersection_types",
      "not_multiple_of",
      "not_finite",
    ]),
    Le = class vc extends Error {
      get errors() {
        return this.issues;
      }
      constructor(t) {
        super(),
          (this.issues = []),
          (this.addIssue = (n) => {
            this.issues = [...this.issues, n];
          }),
          (this.addIssues = (n = []) => {
            this.issues = [...this.issues, ...n];
          });
        const r = new.target.prototype;
        Object.setPrototypeOf
          ? Object.setPrototypeOf(this, r)
          : (this.__proto__ = r),
          (this.name = "ZodError"),
          (this.issues = t);
      }
      format(t) {
        const r =
            t ||
            function (a) {
              return a.message;
            },
          n = { _errors: [] },
          i = (a) => {
            for (const s of a.issues)
              if (s.code === "invalid_union") s.unionErrors.map(i);
              else if (s.code === "invalid_return_type") i(s.returnTypeError);
              else if (s.code === "invalid_arguments") i(s.argumentsError);
              else if (s.path.length === 0) n._errors.push(r(s));
              else {
                let o = n,
                  l = 0;
                for (; l < s.path.length; ) {
                  const h = s.path[l];
                  l !== s.path.length - 1
                    ? (o[h] = o[h] || { _errors: [] })
                    : ((o[h] = o[h] || { _errors: [] }),
                      o[h]._errors.push(r(s))),
                    (o = o[h]),
                    l++;
                }
              }
          };
        return i(this), n;
      }
      static assert(t) {
        if (!(t instanceof vc)) throw new Error(`Not a ZodError: ${t}`);
      }
      toString() {
        return this.message;
      }
      get message() {
        return JSON.stringify(this.issues, H.jsonStringifyReplacer, 2);
      }
      get isEmpty() {
        return this.issues.length === 0;
      }
      flatten(t = (r) => r.message) {
        const r = {},
          n = [];
        for (const i of this.issues)
          if (i.path.length > 0) {
            const a = i.path[0];
            (r[a] = r[a] || []), r[a].push(t(i));
          } else n.push(t(i));
        return { formErrors: n, fieldErrors: r };
      }
      get formErrors() {
        return this.flatten();
      }
    };
  Le.create = (e) => new Le(e);
  var jt = (e, t) => {
      let r;
      switch (e.code) {
        case R.invalid_type:
          e.received === L.undefined
            ? (r = "Required")
            : (r = `Expected ${e.expected}, received ${e.received}`);
          break;
        case R.invalid_literal:
          r = `Invalid literal value, expected ${JSON.stringify(
            e.expected,
            H.jsonStringifyReplacer
          )}`;
          break;
        case R.unrecognized_keys:
          r = `Unrecognized key(s) in object: ${H.joinValues(e.keys, ", ")}`;
          break;
        case R.invalid_union:
          r = "Invalid input";
          break;
        case R.invalid_union_discriminator:
          r = `Invalid discriminator value. Expected ${H.joinValues(
            e.options
          )}`;
          break;
        case R.invalid_enum_value:
          r = `Invalid enum value. Expected ${H.joinValues(
            e.options
          )}, received '${e.received}'`;
          break;
        case R.invalid_arguments:
          r = "Invalid function arguments";
          break;
        case R.invalid_return_type:
          r = "Invalid function return type";
          break;
        case R.invalid_date:
          r = "Invalid date";
          break;
        case R.invalid_string:
          typeof e.validation == "object"
            ? "includes" in e.validation
              ? ((r = `Invalid input: must include "${e.validation.includes}"`),
                typeof e.validation.position == "number" &&
                  (r = `${r} at one or more positions greater than or equal to ${e.validation.position}`))
              : "startsWith" in e.validation
              ? (r = `Invalid input: must start with "${e.validation.startsWith}"`)
              : "endsWith" in e.validation
              ? (r = `Invalid input: must end with "${e.validation.endsWith}"`)
              : H.assertNever(e.validation)
            : e.validation !== "regex"
            ? (r = `Invalid ${e.validation}`)
            : (r = "Invalid");
          break;
        case R.too_small:
          e.type === "array"
            ? (r = `Array must contain ${
                e.exact ? "exactly" : e.inclusive ? "at least" : "more than"
              } ${e.minimum} element(s)`)
            : e.type === "string"
            ? (r = `String must contain ${
                e.exact ? "exactly" : e.inclusive ? "at least" : "over"
              } ${e.minimum} character(s)`)
            : e.type === "number"
            ? (r = `Number must be ${
                e.exact
                  ? "exactly equal to "
                  : e.inclusive
                  ? "greater than or equal to "
                  : "greater than "
              }${e.minimum}`)
            : e.type === "bigint"
            ? (r = `Number must be ${
                e.exact
                  ? "exactly equal to "
                  : e.inclusive
                  ? "greater than or equal to "
                  : "greater than "
              }${e.minimum}`)
            : e.type === "date"
            ? (r = `Date must be ${
                e.exact
                  ? "exactly equal to "
                  : e.inclusive
                  ? "greater than or equal to "
                  : "greater than "
              }${new Date(Number(e.minimum))}`)
            : (r = "Invalid input");
          break;
        case R.too_big:
          e.type === "array"
            ? (r = `Array must contain ${
                e.exact ? "exactly" : e.inclusive ? "at most" : "less than"
              } ${e.maximum} element(s)`)
            : e.type === "string"
            ? (r = `String must contain ${
                e.exact ? "exactly" : e.inclusive ? "at most" : "under"
              } ${e.maximum} character(s)`)
            : e.type === "number"
            ? (r = `Number must be ${
                e.exact
                  ? "exactly"
                  : e.inclusive
                  ? "less than or equal to"
                  : "less than"
              } ${e.maximum}`)
            : e.type === "bigint"
            ? (r = `BigInt must be ${
                e.exact
                  ? "exactly"
                  : e.inclusive
                  ? "less than or equal to"
                  : "less than"
              } ${e.maximum}`)
            : e.type === "date"
            ? (r = `Date must be ${
                e.exact
                  ? "exactly"
                  : e.inclusive
                  ? "smaller than or equal to"
                  : "smaller than"
              } ${new Date(Number(e.maximum))}`)
            : (r = "Invalid input");
          break;
        case R.custom:
          r = "Invalid input";
          break;
        case R.invalid_intersection_types:
          r = "Intersection results could not be merged";
          break;
        case R.not_multiple_of:
          r = `Number must be a multiple of ${e.multipleOf}`;
          break;
        case R.not_finite:
          r = "Number must be finite";
          break;
        default:
          (r = t.defaultError), H.assertNever(e);
      }
      return { message: r };
    },
    sh = jt;
  function ci() {
    return sh;
  }
  var ui = (e) => {
    const { data: t, path: r, errorMaps: n, issueData: i } = e,
      a = [...r, ...(i.path || [])],
      s = { ...i, path: a };
    if (i.message !== void 0) return { ...i, path: a, message: i.message };
    let o = "";
    const l = n
      .filter((h) => !!h)
      .slice()
      .reverse();
    for (const h of l) o = h(s, { data: t, defaultError: o }).message;
    return { ...i, path: a, message: o };
  };
  function M(e, t) {
    const r = ci(),
      n = ui({
        issueData: t,
        data: e.data,
        path: e.path,
        errorMaps: [
          e.common.contextualErrorMap,
          e.schemaErrorMap,
          r,
          r === jt ? void 0 : jt,
        ].filter((i) => !!i),
      });
    e.common.issues.push(n);
  }
  var ge = class wc {
      constructor() {
        this.value = "valid";
      }
      dirty() {
        this.value === "valid" && (this.value = "dirty");
      }
      abort() {
        this.value !== "aborted" && (this.value = "aborted");
      }
      static mergeArray(t, r) {
        const n = [];
        for (const i of r) {
          if (i.status === "aborted") return U;
          i.status === "dirty" && t.dirty(), n.push(i.value);
        }
        return { status: t.value, value: n };
      }
      static async mergeObjectAsync(t, r) {
        const n = [];
        for (const i of r) {
          const a = await i.key,
            s = await i.value;
          n.push({ key: a, value: s });
        }
        return wc.mergeObjectSync(t, n);
      }
      static mergeObjectSync(t, r) {
        const n = {};
        for (const i of r) {
          const { key: a, value: s } = i;
          if (a.status === "aborted" || s.status === "aborted") return U;
          a.status === "dirty" && t.dirty(),
            s.status === "dirty" && t.dirty(),
            a.value !== "__proto__" &&
              (typeof s.value < "u" || i.alwaysSet) &&
              (n[a.value] = s.value);
        }
        return { status: t.value, value: n };
      }
    },
    U = Object.freeze({ status: "aborted" }),
    qt = (e) => ({ status: "dirty", value: e }),
    de = (e) => ({ status: "valid", value: e }),
    Js = (e) => e.status === "aborted",
    Xs = (e) => e.status === "dirty",
    yt = (e) => e.status === "valid",
    Ur = (e) => typeof Promise < "u" && e instanceof Promise,
    x;
  (function (e) {
    (e.errToObj = (t) => (typeof t == "string" ? { message: t } : t || {})),
      (e.toString = (t) => (typeof t == "string" ? t : t?.message));
  })(x || (x = {}));
  var De = class {
      constructor(e, t, r, n) {
        (this._cachedPath = []),
          (this.parent = e),
          (this.data = t),
          (this._path = r),
          (this._key = n);
      }
      get path() {
        return (
          this._cachedPath.length ||
            (Array.isArray(this._key)
              ? this._cachedPath.push(...this._path, ...this._key)
              : this._cachedPath.push(...this._path, this._key)),
          this._cachedPath
        );
      }
    },
    Ys = (e, t) => {
      if (yt(t)) return { success: !0, data: t.value };
      if (!e.common.issues.length)
        throw new Error("Validation failed but no issues detected.");
      return {
        success: !1,
        get error() {
          if (this._error) return this._error;
          const r = new Le(e.common.issues);
          return (this._error = r), this._error;
        },
      };
    };
  function j(e) {
    if (!e) return {};
    const {
      errorMap: t,
      invalid_type_error: r,
      required_error: n,
      description: i,
    } = e;
    if (t && (r || n))
      throw new Error(
        `Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`
      );
    return t
      ? { errorMap: t, description: i }
      : {
          errorMap: (s, o) => {
            const { message: l } = e;
            return s.code === "invalid_enum_value"
              ? { message: l ?? o.defaultError }
              : typeof o.data > "u"
              ? { message: l ?? n ?? o.defaultError }
              : s.code !== "invalid_type"
              ? { message: o.defaultError }
              : { message: l ?? r ?? o.defaultError };
          },
          description: i,
        };
  }
  var V = class {
      get description() {
        return this._def.description;
      }
      _getType(e) {
        return Ze(e.data);
      }
      _getOrReturnCtx(e, t) {
        return (
          t || {
            common: e.parent.common,
            data: e.data,
            parsedType: Ze(e.data),
            schemaErrorMap: this._def.errorMap,
            path: e.path,
            parent: e.parent,
          }
        );
      }
      _processInputParams(e) {
        return {
          status: new ge(),
          ctx: {
            common: e.parent.common,
            data: e.data,
            parsedType: Ze(e.data),
            schemaErrorMap: this._def.errorMap,
            path: e.path,
            parent: e.parent,
          },
        };
      }
      _parseSync(e) {
        const t = this._parse(e);
        if (Ur(t)) throw new Error("Synchronous parse encountered promise.");
        return t;
      }
      _parseAsync(e) {
        const t = this._parse(e);
        return Promise.resolve(t);
      }
      parse(e, t) {
        const r = this.safeParse(e, t);
        if (r.success) return r.data;
        throw r.error;
      }
      safeParse(e, t) {
        const r = {
          common: {
            issues: [],
            async: t?.async ?? !1,
            contextualErrorMap: t?.errorMap,
          },
          path: t?.path || [],
          schemaErrorMap: this._def.errorMap,
          parent: null,
          data: e,
          parsedType: Ze(e),
        };
        return Ys(r, this._parseSync({ data: e, path: r.path, parent: r }));
      }
      "~validate"(e) {
        const t = {
          common: { issues: [], async: !!this["~standard"].async },
          path: [],
          schemaErrorMap: this._def.errorMap,
          parent: null,
          data: e,
          parsedType: Ze(e),
        };
        if (!this["~standard"].async)
          try {
            const r = this._parseSync({ data: e, path: [], parent: t });
            return yt(r) ? { value: r.value } : { issues: t.common.issues };
          } catch (r) {
            r?.message?.toLowerCase()?.includes("encountered") &&
              (this["~standard"].async = !0),
              (t.common = { issues: [], async: !0 });
          }
        return this._parseAsync({ data: e, path: [], parent: t }).then((r) =>
          yt(r) ? { value: r.value } : { issues: t.common.issues }
        );
      }
      async parseAsync(e, t) {
        const r = await this.safeParseAsync(e, t);
        if (r.success) return r.data;
        throw r.error;
      }
      async safeParseAsync(e, t) {
        const r = {
            common: { issues: [], contextualErrorMap: t?.errorMap, async: !0 },
            path: t?.path || [],
            schemaErrorMap: this._def.errorMap,
            parent: null,
            data: e,
            parsedType: Ze(e),
          },
          n = this._parse({ data: e, path: r.path, parent: r });
        return Ys(r, await (Ur(n) ? n : Promise.resolve(n)));
      }
      refine(e, t) {
        const r = (n) =>
          typeof t == "string" || typeof t > "u"
            ? { message: t }
            : typeof t == "function"
            ? t(n)
            : t;
        return this._refinement((n, i) => {
          const a = e(n),
            s = () => i.addIssue({ code: R.custom, ...r(n) });
          return typeof Promise < "u" && a instanceof Promise
            ? a.then((o) => (o ? !0 : (s(), !1)))
            : a
            ? !0
            : (s(), !1);
        });
      }
      refinement(e, t) {
        return this._refinement((r, n) =>
          e(r) ? !0 : (n.addIssue(typeof t == "function" ? t(r, n) : t), !1)
        );
      }
      _refinement(e) {
        return new qe({
          schema: this,
          typeName: F.ZodEffects,
          effect: { type: "refinement", refinement: e },
        });
      }
      superRefine(e) {
        return this._refinement(e);
      }
      constructor(e) {
        (this.spa = this.safeParseAsync),
          (this._def = e),
          (this.parse = this.parse.bind(this)),
          (this.safeParse = this.safeParse.bind(this)),
          (this.parseAsync = this.parseAsync.bind(this)),
          (this.safeParseAsync = this.safeParseAsync.bind(this)),
          (this.spa = this.spa.bind(this)),
          (this.refine = this.refine.bind(this)),
          (this.refinement = this.refinement.bind(this)),
          (this.superRefine = this.superRefine.bind(this)),
          (this.optional = this.optional.bind(this)),
          (this.nullable = this.nullable.bind(this)),
          (this.nullish = this.nullish.bind(this)),
          (this.array = this.array.bind(this)),
          (this.promise = this.promise.bind(this)),
          (this.or = this.or.bind(this)),
          (this.and = this.and.bind(this)),
          (this.transform = this.transform.bind(this)),
          (this.brand = this.brand.bind(this)),
          (this.default = this.default.bind(this)),
          (this.catch = this.catch.bind(this)),
          (this.describe = this.describe.bind(this)),
          (this.pipe = this.pipe.bind(this)),
          (this.readonly = this.readonly.bind(this)),
          (this.isNullable = this.isNullable.bind(this)),
          (this.isOptional = this.isOptional.bind(this)),
          (this["~standard"] = {
            version: 1,
            vendor: "zod",
            validate: (t) => this["~validate"](t),
          });
      }
      optional() {
        return Ge.create(this, this._def);
      }
      nullable() {
        return dt.create(this, this._def);
      }
      nullish() {
        return this.nullable().optional();
      }
      array() {
        return Tt.create(this);
      }
      promise() {
        return Gt.create(this, this._def);
      }
      or(e) {
        return jr.create([this, e], this._def);
      }
      and(e) {
        return qr.create(this, e, this._def);
      }
      transform(e) {
        return new qe({
          ...j(this._def),
          schema: this,
          typeName: F.ZodEffects,
          effect: { type: "transform", transform: e },
        });
      }
      default(e) {
        const t = typeof e == "function" ? e : () => e;
        return new Wr({
          ...j(this._def),
          innerType: this,
          defaultValue: t,
          typeName: F.ZodDefault,
        });
      }
      brand() {
        return new ro({ typeName: F.ZodBranded, type: this, ...j(this._def) });
      }
      catch(e) {
        const t = typeof e == "function" ? e : () => e;
        return new Kr({
          ...j(this._def),
          innerType: this,
          catchValue: t,
          typeName: F.ZodCatch,
        });
      }
      describe(e) {
        const t = this.constructor;
        return new t({ ...this._def, description: e });
      }
      pipe(e) {
        return no.create(this, e);
      }
      readonly() {
        return Zr.create(this);
      }
      isOptional() {
        return this.safeParse(void 0).success;
      }
      isNullable() {
        return this.safeParse(null).success;
      }
    },
    oh = /^c[^\s-]{8,}$/i,
    lh = /^[0-9a-z]+$/,
    ch = /^[0-9A-HJKMNP-TV-Z]{26}$/i,
    uh =
      /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,
    dh = /^[a-z0-9_-]{21}$/i,
    hh = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/,
    fh =
      /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/,
    ph =
      /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i,
    mh = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$",
    di,
    gh =
      /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,
    _h =
      /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/,
    vh =
      /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/,
    wh =
      /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,
    bh = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/,
    yh =
      /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/,
    Qs =
      "((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))",
    Sh = new RegExp(`^${Qs}$`);
  function eo(e) {
    let t = "[0-5]\\d";
    e.precision
      ? (t = `${t}\\.\\d{${e.precision}}`)
      : e.precision == null && (t = `${t}(\\.\\d+)?`);
    const r = e.precision ? "+" : "?";
    return `([01]\\d|2[0-3]):[0-5]\\d(:${t})${r}`;
  }
  function Th(e) {
    return new RegExp(`^${eo(e)}$`);
  }
  function Eh(e) {
    let t = `${Qs}T${eo(e)}`;
    const r = [];
    return (
      r.push(e.local ? "Z?" : "Z"),
      e.offset && r.push("([+-]\\d{2}:?\\d{2})"),
      (t = `${t}(${r.join("|")})`),
      new RegExp(`^${t}$`)
    );
  }
  function Ih(e, t) {
    return !!(
      ((t === "v4" || !t) && gh.test(e)) ||
      ((t === "v6" || !t) && vh.test(e))
    );
  }
  function Ah(e, t) {
    if (!hh.test(e)) return !1;
    try {
      const [r] = e.split(".");
      if (!r) return !1;
      const n = r
          .replace(/-/g, "+")
          .replace(/_/g, "/")
          .padEnd(r.length + ((4 - (r.length % 4)) % 4), "="),
        i = JSON.parse(atob(n));
      return !(
        typeof i != "object" ||
        i === null ||
        ("typ" in i && i?.typ !== "JWT") ||
        !i.alg ||
        (t && i.alg !== t)
      );
    } catch {
      return !1;
    }
  }
  function Ch(e, t) {
    return !!(
      ((t === "v4" || !t) && _h.test(e)) ||
      ((t === "v6" || !t) && wh.test(e))
    );
  }
  var Fr = class pr extends V {
    _parse(t) {
      if (
        (this._def.coerce && (t.data = String(t.data)),
        this._getType(t) !== L.string)
      ) {
        const i = this._getOrReturnCtx(t);
        return (
          M(i, {
            code: R.invalid_type,
            expected: L.string,
            received: i.parsedType,
          }),
          U
        );
      }
      const r = new ge();
      let n;
      for (const i of this._def.checks)
        if (i.kind === "min")
          t.data.length < i.value &&
            ((n = this._getOrReturnCtx(t, n)),
            M(n, {
              code: R.too_small,
              minimum: i.value,
              type: "string",
              inclusive: !0,
              exact: !1,
              message: i.message,
            }),
            r.dirty());
        else if (i.kind === "max")
          t.data.length > i.value &&
            ((n = this._getOrReturnCtx(t, n)),
            M(n, {
              code: R.too_big,
              maximum: i.value,
              type: "string",
              inclusive: !0,
              exact: !1,
              message: i.message,
            }),
            r.dirty());
        else if (i.kind === "length") {
          const a = t.data.length > i.value,
            s = t.data.length < i.value;
          (a || s) &&
            ((n = this._getOrReturnCtx(t, n)),
            a
              ? M(n, {
                  code: R.too_big,
                  maximum: i.value,
                  type: "string",
                  inclusive: !0,
                  exact: !0,
                  message: i.message,
                })
              : s &&
                M(n, {
                  code: R.too_small,
                  minimum: i.value,
                  type: "string",
                  inclusive: !0,
                  exact: !0,
                  message: i.message,
                }),
            r.dirty());
        } else if (i.kind === "email")
          ph.test(t.data) ||
            ((n = this._getOrReturnCtx(t, n)),
            M(n, {
              validation: "email",
              code: R.invalid_string,
              message: i.message,
            }),
            r.dirty());
        else if (i.kind === "emoji")
          di || (di = new RegExp(mh, "u")),
            di.test(t.data) ||
              ((n = this._getOrReturnCtx(t, n)),
              M(n, {
                validation: "emoji",
                code: R.invalid_string,
                message: i.message,
              }),
              r.dirty());
        else if (i.kind === "uuid")
          uh.test(t.data) ||
            ((n = this._getOrReturnCtx(t, n)),
            M(n, {
              validation: "uuid",
              code: R.invalid_string,
              message: i.message,
            }),
            r.dirty());
        else if (i.kind === "nanoid")
          dh.test(t.data) ||
            ((n = this._getOrReturnCtx(t, n)),
            M(n, {
              validation: "nanoid",
              code: R.invalid_string,
              message: i.message,
            }),
            r.dirty());
        else if (i.kind === "cuid")
          oh.test(t.data) ||
            ((n = this._getOrReturnCtx(t, n)),
            M(n, {
              validation: "cuid",
              code: R.invalid_string,
              message: i.message,
            }),
            r.dirty());
        else if (i.kind === "cuid2")
          lh.test(t.data) ||
            ((n = this._getOrReturnCtx(t, n)),
            M(n, {
              validation: "cuid2",
              code: R.invalid_string,
              message: i.message,
            }),
            r.dirty());
        else if (i.kind === "ulid")
          ch.test(t.data) ||
            ((n = this._getOrReturnCtx(t, n)),
            M(n, {
              validation: "ulid",
              code: R.invalid_string,
              message: i.message,
            }),
            r.dirty());
        else if (i.kind === "url")
          try {
            new URL(t.data);
          } catch {
            (n = this._getOrReturnCtx(t, n)),
              M(n, {
                validation: "url",
                code: R.invalid_string,
                message: i.message,
              }),
              r.dirty();
          }
        else
          i.kind === "regex"
            ? ((i.regex.lastIndex = 0),
              i.regex.test(t.data) ||
                ((n = this._getOrReturnCtx(t, n)),
                M(n, {
                  validation: "regex",
                  code: R.invalid_string,
                  message: i.message,
                }),
                r.dirty()))
            : i.kind === "trim"
            ? (t.data = t.data.trim())
            : i.kind === "includes"
            ? t.data.includes(i.value, i.position) ||
              ((n = this._getOrReturnCtx(t, n)),
              M(n, {
                code: R.invalid_string,
                validation: { includes: i.value, position: i.position },
                message: i.message,
              }),
              r.dirty())
            : i.kind === "toLowerCase"
            ? (t.data = t.data.toLowerCase())
            : i.kind === "toUpperCase"
            ? (t.data = t.data.toUpperCase())
            : i.kind === "startsWith"
            ? t.data.startsWith(i.value) ||
              ((n = this._getOrReturnCtx(t, n)),
              M(n, {
                code: R.invalid_string,
                validation: { startsWith: i.value },
                message: i.message,
              }),
              r.dirty())
            : i.kind === "endsWith"
            ? t.data.endsWith(i.value) ||
              ((n = this._getOrReturnCtx(t, n)),
              M(n, {
                code: R.invalid_string,
                validation: { endsWith: i.value },
                message: i.message,
              }),
              r.dirty())
            : i.kind === "datetime"
            ? Eh(i).test(t.data) ||
              ((n = this._getOrReturnCtx(t, n)),
              M(n, {
                code: R.invalid_string,
                validation: "datetime",
                message: i.message,
              }),
              r.dirty())
            : i.kind === "date"
            ? Sh.test(t.data) ||
              ((n = this._getOrReturnCtx(t, n)),
              M(n, {
                code: R.invalid_string,
                validation: "date",
                message: i.message,
              }),
              r.dirty())
            : i.kind === "time"
            ? Th(i).test(t.data) ||
              ((n = this._getOrReturnCtx(t, n)),
              M(n, {
                code: R.invalid_string,
                validation: "time",
                message: i.message,
              }),
              r.dirty())
            : i.kind === "duration"
            ? fh.test(t.data) ||
              ((n = this._getOrReturnCtx(t, n)),
              M(n, {
                validation: "duration",
                code: R.invalid_string,
                message: i.message,
              }),
              r.dirty())
            : i.kind === "ip"
            ? Ih(t.data, i.version) ||
              ((n = this._getOrReturnCtx(t, n)),
              M(n, {
                validation: "ip",
                code: R.invalid_string,
                message: i.message,
              }),
              r.dirty())
            : i.kind === "jwt"
            ? Ah(t.data, i.alg) ||
              ((n = this._getOrReturnCtx(t, n)),
              M(n, {
                validation: "jwt",
                code: R.invalid_string,
                message: i.message,
              }),
              r.dirty())
            : i.kind === "cidr"
            ? Ch(t.data, i.version) ||
              ((n = this._getOrReturnCtx(t, n)),
              M(n, {
                validation: "cidr",
                code: R.invalid_string,
                message: i.message,
              }),
              r.dirty())
            : i.kind === "base64"
            ? bh.test(t.data) ||
              ((n = this._getOrReturnCtx(t, n)),
              M(n, {
                validation: "base64",
                code: R.invalid_string,
                message: i.message,
              }),
              r.dirty())
            : i.kind === "base64url"
            ? yh.test(t.data) ||
              ((n = this._getOrReturnCtx(t, n)),
              M(n, {
                validation: "base64url",
                code: R.invalid_string,
                message: i.message,
              }),
              r.dirty())
            : H.assertNever(i);
      return { status: r.value, value: t.data };
    }
    _regex(t, r, n) {
      return this.refinement((i) => t.test(i), {
        validation: r,
        code: R.invalid_string,
        ...x.errToObj(n),
      });
    }
    _addCheck(t) {
      return new pr({ ...this._def, checks: [...this._def.checks, t] });
    }
    email(t) {
      return this._addCheck({ kind: "email", ...x.errToObj(t) });
    }
    url(t) {
      return this._addCheck({ kind: "url", ...x.errToObj(t) });
    }
    emoji(t) {
      return this._addCheck({ kind: "emoji", ...x.errToObj(t) });
    }
    uuid(t) {
      return this._addCheck({ kind: "uuid", ...x.errToObj(t) });
    }
    nanoid(t) {
      return this._addCheck({ kind: "nanoid", ...x.errToObj(t) });
    }
    cuid(t) {
      return this._addCheck({ kind: "cuid", ...x.errToObj(t) });
    }
    cuid2(t) {
      return this._addCheck({ kind: "cuid2", ...x.errToObj(t) });
    }
    ulid(t) {
      return this._addCheck({ kind: "ulid", ...x.errToObj(t) });
    }
    base64(t) {
      return this._addCheck({ kind: "base64", ...x.errToObj(t) });
    }
    base64url(t) {
      return this._addCheck({ kind: "base64url", ...x.errToObj(t) });
    }
    jwt(t) {
      return this._addCheck({ kind: "jwt", ...x.errToObj(t) });
    }
    ip(t) {
      return this._addCheck({ kind: "ip", ...x.errToObj(t) });
    }
    cidr(t) {
      return this._addCheck({ kind: "cidr", ...x.errToObj(t) });
    }
    datetime(t) {
      return typeof t == "string"
        ? this._addCheck({
            kind: "datetime",
            precision: null,
            offset: !1,
            local: !1,
            message: t,
          })
        : this._addCheck({
            kind: "datetime",
            precision: typeof t?.precision > "u" ? null : t?.precision,
            offset: t?.offset ?? !1,
            local: t?.local ?? !1,
            ...x.errToObj(t?.message),
          });
    }
    date(t) {
      return this._addCheck({ kind: "date", message: t });
    }
    time(t) {
      return typeof t == "string"
        ? this._addCheck({ kind: "time", precision: null, message: t })
        : this._addCheck({
            kind: "time",
            precision: typeof t?.precision > "u" ? null : t?.precision,
            ...x.errToObj(t?.message),
          });
    }
    duration(t) {
      return this._addCheck({ kind: "duration", ...x.errToObj(t) });
    }
    regex(t, r) {
      return this._addCheck({ kind: "regex", regex: t, ...x.errToObj(r) });
    }
    includes(t, r) {
      return this._addCheck({
        kind: "includes",
        value: t,
        position: r?.position,
        ...x.errToObj(r?.message),
      });
    }
    startsWith(t, r) {
      return this._addCheck({ kind: "startsWith", value: t, ...x.errToObj(r) });
    }
    endsWith(t, r) {
      return this._addCheck({ kind: "endsWith", value: t, ...x.errToObj(r) });
    }
    min(t, r) {
      return this._addCheck({ kind: "min", value: t, ...x.errToObj(r) });
    }
    max(t, r) {
      return this._addCheck({ kind: "max", value: t, ...x.errToObj(r) });
    }
    length(t, r) {
      return this._addCheck({ kind: "length", value: t, ...x.errToObj(r) });
    }
    nonempty(t) {
      return this.min(1, x.errToObj(t));
    }
    trim() {
      return new pr({
        ...this._def,
        checks: [...this._def.checks, { kind: "trim" }],
      });
    }
    toLowerCase() {
      return new pr({
        ...this._def,
        checks: [...this._def.checks, { kind: "toLowerCase" }],
      });
    }
    toUpperCase() {
      return new pr({
        ...this._def,
        checks: [...this._def.checks, { kind: "toUpperCase" }],
      });
    }
    get isDatetime() {
      return !!this._def.checks.find((t) => t.kind === "datetime");
    }
    get isDate() {
      return !!this._def.checks.find((t) => t.kind === "date");
    }
    get isTime() {
      return !!this._def.checks.find((t) => t.kind === "time");
    }
    get isDuration() {
      return !!this._def.checks.find((t) => t.kind === "duration");
    }
    get isEmail() {
      return !!this._def.checks.find((t) => t.kind === "email");
    }
    get isURL() {
      return !!this._def.checks.find((t) => t.kind === "url");
    }
    get isEmoji() {
      return !!this._def.checks.find((t) => t.kind === "emoji");
    }
    get isUUID() {
      return !!this._def.checks.find((t) => t.kind === "uuid");
    }
    get isNANOID() {
      return !!this._def.checks.find((t) => t.kind === "nanoid");
    }
    get isCUID() {
      return !!this._def.checks.find((t) => t.kind === "cuid");
    }
    get isCUID2() {
      return !!this._def.checks.find((t) => t.kind === "cuid2");
    }
    get isULID() {
      return !!this._def.checks.find((t) => t.kind === "ulid");
    }
    get isIP() {
      return !!this._def.checks.find((t) => t.kind === "ip");
    }
    get isCIDR() {
      return !!this._def.checks.find((t) => t.kind === "cidr");
    }
    get isBase64() {
      return !!this._def.checks.find((t) => t.kind === "base64");
    }
    get isBase64url() {
      return !!this._def.checks.find((t) => t.kind === "base64url");
    }
    get minLength() {
      let t = null;
      for (const r of this._def.checks)
        r.kind === "min" && (t === null || r.value > t) && (t = r.value);
      return t;
    }
    get maxLength() {
      let t = null;
      for (const r of this._def.checks)
        r.kind === "max" && (t === null || r.value < t) && (t = r.value);
      return t;
    }
  };
  Fr.create = (e) =>
    new Fr({
      checks: [],
      typeName: F.ZodString,
      coerce: e?.coerce ?? !1,
      ...j(e),
    });
  function kh(e, t) {
    const r = (e.toString().split(".")[1] || "").length,
      n = (t.toString().split(".")[1] || "").length,
      i = r > n ? r : n;
    return (
      (Number.parseInt(e.toFixed(i).replace(".", "")) %
        Number.parseInt(t.toFixed(i).replace(".", ""))) /
      10 ** i
    );
  }
  var hi = class Ma extends V {
    constructor() {
      super(...arguments),
        (this.min = this.gte),
        (this.max = this.lte),
        (this.step = this.multipleOf);
    }
    _parse(t) {
      if (
        (this._def.coerce && (t.data = Number(t.data)),
        this._getType(t) !== L.number)
      ) {
        const i = this._getOrReturnCtx(t);
        return (
          M(i, {
            code: R.invalid_type,
            expected: L.number,
            received: i.parsedType,
          }),
          U
        );
      }
      let r;
      const n = new ge();
      for (const i of this._def.checks)
        i.kind === "int"
          ? H.isInteger(t.data) ||
            ((r = this._getOrReturnCtx(t, r)),
            M(r, {
              code: R.invalid_type,
              expected: "integer",
              received: "float",
              message: i.message,
            }),
            n.dirty())
          : i.kind === "min"
          ? (i.inclusive ? t.data < i.value : t.data <= i.value) &&
            ((r = this._getOrReturnCtx(t, r)),
            M(r, {
              code: R.too_small,
              minimum: i.value,
              type: "number",
              inclusive: i.inclusive,
              exact: !1,
              message: i.message,
            }),
            n.dirty())
          : i.kind === "max"
          ? (i.inclusive ? t.data > i.value : t.data >= i.value) &&
            ((r = this._getOrReturnCtx(t, r)),
            M(r, {
              code: R.too_big,
              maximum: i.value,
              type: "number",
              inclusive: i.inclusive,
              exact: !1,
              message: i.message,
            }),
            n.dirty())
          : i.kind === "multipleOf"
          ? kh(t.data, i.value) !== 0 &&
            ((r = this._getOrReturnCtx(t, r)),
            M(r, {
              code: R.not_multiple_of,
              multipleOf: i.value,
              message: i.message,
            }),
            n.dirty())
          : i.kind === "finite"
          ? Number.isFinite(t.data) ||
            ((r = this._getOrReturnCtx(t, r)),
            M(r, { code: R.not_finite, message: i.message }),
            n.dirty())
          : H.assertNever(i);
      return { status: n.value, value: t.data };
    }
    gte(t, r) {
      return this.setLimit("min", t, !0, x.toString(r));
    }
    gt(t, r) {
      return this.setLimit("min", t, !1, x.toString(r));
    }
    lte(t, r) {
      return this.setLimit("max", t, !0, x.toString(r));
    }
    lt(t, r) {
      return this.setLimit("max", t, !1, x.toString(r));
    }
    setLimit(t, r, n, i) {
      return new Ma({
        ...this._def,
        checks: [
          ...this._def.checks,
          { kind: t, value: r, inclusive: n, message: x.toString(i) },
        ],
      });
    }
    _addCheck(t) {
      return new Ma({ ...this._def, checks: [...this._def.checks, t] });
    }
    int(t) {
      return this._addCheck({ kind: "int", message: x.toString(t) });
    }
    positive(t) {
      return this._addCheck({
        kind: "min",
        value: 0,
        inclusive: !1,
        message: x.toString(t),
      });
    }
    negative(t) {
      return this._addCheck({
        kind: "max",
        value: 0,
        inclusive: !1,
        message: x.toString(t),
      });
    }
    nonpositive(t) {
      return this._addCheck({
        kind: "max",
        value: 0,
        inclusive: !0,
        message: x.toString(t),
      });
    }
    nonnegative(t) {
      return this._addCheck({
        kind: "min",
        value: 0,
        inclusive: !0,
        message: x.toString(t),
      });
    }
    multipleOf(t, r) {
      return this._addCheck({
        kind: "multipleOf",
        value: t,
        message: x.toString(r),
      });
    }
    finite(t) {
      return this._addCheck({ kind: "finite", message: x.toString(t) });
    }
    safe(t) {
      return this._addCheck({
        kind: "min",
        inclusive: !0,
        value: Number.MIN_SAFE_INTEGER,
        message: x.toString(t),
      })._addCheck({
        kind: "max",
        inclusive: !0,
        value: Number.MAX_SAFE_INTEGER,
        message: x.toString(t),
      });
    }
    get minValue() {
      let t = null;
      for (const r of this._def.checks)
        r.kind === "min" && (t === null || r.value > t) && (t = r.value);
      return t;
    }
    get maxValue() {
      let t = null;
      for (const r of this._def.checks)
        r.kind === "max" && (t === null || r.value < t) && (t = r.value);
      return t;
    }
    get isInt() {
      return !!this._def.checks.find(
        (t) =>
          t.kind === "int" || (t.kind === "multipleOf" && H.isInteger(t.value))
      );
    }
    get isFinite() {
      let t = null,
        r = null;
      for (const n of this._def.checks) {
        if (n.kind === "finite" || n.kind === "int" || n.kind === "multipleOf")
          return !0;
        n.kind === "min"
          ? (r === null || n.value > r) && (r = n.value)
          : n.kind === "max" && (t === null || n.value < t) && (t = n.value);
      }
      return Number.isFinite(r) && Number.isFinite(t);
    }
  };
  hi.create = (e) =>
    new hi({
      checks: [],
      typeName: F.ZodNumber,
      coerce: e?.coerce || !1,
      ...j(e),
    });
  var fi = class La extends V {
    constructor() {
      super(...arguments), (this.min = this.gte), (this.max = this.lte);
    }
    _parse(t) {
      if (this._def.coerce)
        try {
          t.data = BigInt(t.data);
        } catch {
          return this._getInvalidInput(t);
        }
      if (this._getType(t) !== L.bigint) return this._getInvalidInput(t);
      let r;
      const n = new ge();
      for (const i of this._def.checks)
        i.kind === "min"
          ? (i.inclusive ? t.data < i.value : t.data <= i.value) &&
            ((r = this._getOrReturnCtx(t, r)),
            M(r, {
              code: R.too_small,
              type: "bigint",
              minimum: i.value,
              inclusive: i.inclusive,
              message: i.message,
            }),
            n.dirty())
          : i.kind === "max"
          ? (i.inclusive ? t.data > i.value : t.data >= i.value) &&
            ((r = this._getOrReturnCtx(t, r)),
            M(r, {
              code: R.too_big,
              type: "bigint",
              maximum: i.value,
              inclusive: i.inclusive,
              message: i.message,
            }),
            n.dirty())
          : i.kind === "multipleOf"
          ? t.data % i.value !== BigInt(0) &&
            ((r = this._getOrReturnCtx(t, r)),
            M(r, {
              code: R.not_multiple_of,
              multipleOf: i.value,
              message: i.message,
            }),
            n.dirty())
          : H.assertNever(i);
      return { status: n.value, value: t.data };
    }
    _getInvalidInput(t) {
      const r = this._getOrReturnCtx(t);
      return (
        M(r, {
          code: R.invalid_type,
          expected: L.bigint,
          received: r.parsedType,
        }),
        U
      );
    }
    gte(t, r) {
      return this.setLimit("min", t, !0, x.toString(r));
    }
    gt(t, r) {
      return this.setLimit("min", t, !1, x.toString(r));
    }
    lte(t, r) {
      return this.setLimit("max", t, !0, x.toString(r));
    }
    lt(t, r) {
      return this.setLimit("max", t, !1, x.toString(r));
    }
    setLimit(t, r, n, i) {
      return new La({
        ...this._def,
        checks: [
          ...this._def.checks,
          { kind: t, value: r, inclusive: n, message: x.toString(i) },
        ],
      });
    }
    _addCheck(t) {
      return new La({ ...this._def, checks: [...this._def.checks, t] });
    }
    positive(t) {
      return this._addCheck({
        kind: "min",
        value: BigInt(0),
        inclusive: !1,
        message: x.toString(t),
      });
    }
    negative(t) {
      return this._addCheck({
        kind: "max",
        value: BigInt(0),
        inclusive: !1,
        message: x.toString(t),
      });
    }
    nonpositive(t) {
      return this._addCheck({
        kind: "max",
        value: BigInt(0),
        inclusive: !0,
        message: x.toString(t),
      });
    }
    nonnegative(t) {
      return this._addCheck({
        kind: "min",
        value: BigInt(0),
        inclusive: !0,
        message: x.toString(t),
      });
    }
    multipleOf(t, r) {
      return this._addCheck({
        kind: "multipleOf",
        value: t,
        message: x.toString(r),
      });
    }
    get minValue() {
      let t = null;
      for (const r of this._def.checks)
        r.kind === "min" && (t === null || r.value > t) && (t = r.value);
      return t;
    }
    get maxValue() {
      let t = null;
      for (const r of this._def.checks)
        r.kind === "max" && (t === null || r.value < t) && (t = r.value);
      return t;
    }
  };
  fi.create = (e) =>
    new fi({
      checks: [],
      typeName: F.ZodBigInt,
      coerce: e?.coerce ?? !1,
      ...j(e),
    });
  var pi = class extends V {
    _parse(e) {
      if (
        (this._def.coerce && (e.data = !!e.data),
        this._getType(e) !== L.boolean)
      ) {
        const t = this._getOrReturnCtx(e);
        return (
          M(t, {
            code: R.invalid_type,
            expected: L.boolean,
            received: t.parsedType,
          }),
          U
        );
      }
      return de(e.data);
    }
  };
  pi.create = (e) =>
    new pi({ typeName: F.ZodBoolean, coerce: e?.coerce || !1, ...j(e) });
  var mi = class bc extends V {
    _parse(t) {
      if (
        (this._def.coerce && (t.data = new Date(t.data)),
        this._getType(t) !== L.date)
      ) {
        const i = this._getOrReturnCtx(t);
        return (
          M(i, {
            code: R.invalid_type,
            expected: L.date,
            received: i.parsedType,
          }),
          U
        );
      }
      if (Number.isNaN(t.data.getTime()))
        return M(this._getOrReturnCtx(t), { code: R.invalid_date }), U;
      const r = new ge();
      let n;
      for (const i of this._def.checks)
        i.kind === "min"
          ? t.data.getTime() < i.value &&
            ((n = this._getOrReturnCtx(t, n)),
            M(n, {
              code: R.too_small,
              message: i.message,
              inclusive: !0,
              exact: !1,
              minimum: i.value,
              type: "date",
            }),
            r.dirty())
          : i.kind === "max"
          ? t.data.getTime() > i.value &&
            ((n = this._getOrReturnCtx(t, n)),
            M(n, {
              code: R.too_big,
              message: i.message,
              inclusive: !0,
              exact: !1,
              maximum: i.value,
              type: "date",
            }),
            r.dirty())
          : H.assertNever(i);
      return { status: r.value, value: new Date(t.data.getTime()) };
    }
    _addCheck(t) {
      return new bc({ ...this._def, checks: [...this._def.checks, t] });
    }
    min(t, r) {
      return this._addCheck({
        kind: "min",
        value: t.getTime(),
        message: x.toString(r),
      });
    }
    max(t, r) {
      return this._addCheck({
        kind: "max",
        value: t.getTime(),
        message: x.toString(r),
      });
    }
    get minDate() {
      let t = null;
      for (const r of this._def.checks)
        r.kind === "min" && (t === null || r.value > t) && (t = r.value);
      return t != null ? new Date(t) : null;
    }
    get maxDate() {
      let t = null;
      for (const r of this._def.checks)
        r.kind === "max" && (t === null || r.value < t) && (t = r.value);
      return t != null ? new Date(t) : null;
    }
  };
  mi.create = (e) =>
    new mi({
      checks: [],
      coerce: e?.coerce || !1,
      typeName: F.ZodDate,
      ...j(e),
    });
  var gi = class extends V {
    _parse(e) {
      if (this._getType(e) !== L.symbol) {
        const t = this._getOrReturnCtx(e);
        return (
          M(t, {
            code: R.invalid_type,
            expected: L.symbol,
            received: t.parsedType,
          }),
          U
        );
      }
      return de(e.data);
    }
  };
  gi.create = (e) => new gi({ typeName: F.ZodSymbol, ...j(e) });
  var Br = class extends V {
    _parse(e) {
      if (this._getType(e) !== L.undefined) {
        const t = this._getOrReturnCtx(e);
        return (
          M(t, {
            code: R.invalid_type,
            expected: L.undefined,
            received: t.parsedType,
          }),
          U
        );
      }
      return de(e.data);
    }
  };
  Br.create = (e) => new Br({ typeName: F.ZodUndefined, ...j(e) });
  var $r = class extends V {
    _parse(e) {
      if (this._getType(e) !== L.null) {
        const t = this._getOrReturnCtx(e);
        return (
          M(t, {
            code: R.invalid_type,
            expected: L.null,
            received: t.parsedType,
          }),
          U
        );
      }
      return de(e.data);
    }
  };
  $r.create = (e) => new $r({ typeName: F.ZodNull, ...j(e) });
  var _i = class extends V {
    constructor() {
      super(...arguments), (this._any = !0);
    }
    _parse(e) {
      return de(e.data);
    }
  };
  _i.create = (e) => new _i({ typeName: F.ZodAny, ...j(e) });
  var St = class extends V {
    constructor() {
      super(...arguments), (this._unknown = !0);
    }
    _parse(e) {
      return de(e.data);
    }
  };
  St.create = (e) => new St({ typeName: F.ZodUnknown, ...j(e) });
  var Je = class extends V {
    _parse(e) {
      const t = this._getOrReturnCtx(e);
      return (
        M(t, {
          code: R.invalid_type,
          expected: L.never,
          received: t.parsedType,
        }),
        U
      );
    }
  };
  Je.create = (e) => new Je({ typeName: F.ZodNever, ...j(e) });
  var vi = class extends V {
    _parse(e) {
      if (this._getType(e) !== L.undefined) {
        const t = this._getOrReturnCtx(e);
        return (
          M(t, {
            code: R.invalid_type,
            expected: L.void,
            received: t.parsedType,
          }),
          U
        );
      }
      return de(e.data);
    }
  };
  vi.create = (e) => new vi({ typeName: F.ZodVoid, ...j(e) });
  var Tt = class On extends V {
    _parse(t) {
      const { ctx: r, status: n } = this._processInputParams(t),
        i = this._def;
      if (r.parsedType !== L.array)
        return (
          M(r, {
            code: R.invalid_type,
            expected: L.array,
            received: r.parsedType,
          }),
          U
        );
      if (i.exactLength !== null) {
        const s = r.data.length > i.exactLength.value,
          o = r.data.length < i.exactLength.value;
        (s || o) &&
          (M(r, {
            code: s ? R.too_big : R.too_small,
            minimum: o ? i.exactLength.value : void 0,
            maximum: s ? i.exactLength.value : void 0,
            type: "array",
            inclusive: !0,
            exact: !0,
            message: i.exactLength.message,
          }),
          n.dirty());
      }
      if (
        (i.minLength !== null &&
          r.data.length < i.minLength.value &&
          (M(r, {
            code: R.too_small,
            minimum: i.minLength.value,
            type: "array",
            inclusive: !0,
            exact: !1,
            message: i.minLength.message,
          }),
          n.dirty()),
        i.maxLength !== null &&
          r.data.length > i.maxLength.value &&
          (M(r, {
            code: R.too_big,
            maximum: i.maxLength.value,
            type: "array",
            inclusive: !0,
            exact: !1,
            message: i.maxLength.message,
          }),
          n.dirty()),
        r.common.async)
      )
        return Promise.all(
          [...r.data].map((s, o) => i.type._parseAsync(new De(r, s, r.path, o)))
        ).then((s) => ge.mergeArray(n, s));
      const a = [...r.data].map((s, o) =>
        i.type._parseSync(new De(r, s, r.path, o))
      );
      return ge.mergeArray(n, a);
    }
    get element() {
      return this._def.type;
    }
    min(t, r) {
      return new On({
        ...this._def,
        minLength: { value: t, message: x.toString(r) },
      });
    }
    max(t, r) {
      return new On({
        ...this._def,
        maxLength: { value: t, message: x.toString(r) },
      });
    }
    length(t, r) {
      return new On({
        ...this._def,
        exactLength: { value: t, message: x.toString(r) },
      });
    }
    nonempty(t) {
      return this.min(1, t);
    }
  };
  Tt.create = (e, t) =>
    new Tt({
      type: e,
      minLength: null,
      maxLength: null,
      exactLength: null,
      typeName: F.ZodArray,
      ...j(t),
    });
  function Et(e) {
    if (e instanceof ke) {
      const t = {};
      for (const r in e.shape) {
        const n = e.shape[r];
        t[r] = Ge.create(Et(n));
      }
      return new ke({ ...e._def, shape: () => t });
    } else
      return e instanceof Tt
        ? new Tt({ ...e._def, type: Et(e.element) })
        : e instanceof Ge
        ? Ge.create(Et(e.unwrap()))
        : e instanceof dt
        ? dt.create(Et(e.unwrap()))
        : e instanceof ut
        ? ut.create(e.items.map((t) => Et(t)))
        : e;
  }
  var ke = class Re extends V {
    constructor() {
      super(...arguments),
        (this._cached = null),
        (this.nonstrict = this.passthrough),
        (this.augment = this.extend);
    }
    _getCached() {
      if (this._cached !== null) return this._cached;
      const t = this._def.shape(),
        r = H.objectKeys(t);
      return (this._cached = { shape: t, keys: r }), this._cached;
    }
    _parse(t) {
      if (this._getType(t) !== L.object) {
        const l = this._getOrReturnCtx(t);
        return (
          M(l, {
            code: R.invalid_type,
            expected: L.object,
            received: l.parsedType,
          }),
          U
        );
      }
      const { status: r, ctx: n } = this._processInputParams(t),
        { shape: i, keys: a } = this._getCached(),
        s = [];
      if (
        !(this._def.catchall instanceof Je && this._def.unknownKeys === "strip")
      )
        for (const l in n.data) a.includes(l) || s.push(l);
      const o = [];
      for (const l of a) {
        const h = i[l],
          m = n.data[l];
        o.push({
          key: { status: "valid", value: l },
          value: h._parse(new De(n, m, n.path, l)),
          alwaysSet: l in n.data,
        });
      }
      if (this._def.catchall instanceof Je) {
        const l = this._def.unknownKeys;
        if (l === "passthrough")
          for (const h of s)
            o.push({
              key: { status: "valid", value: h },
              value: { status: "valid", value: n.data[h] },
            });
        else if (l === "strict")
          s.length > 0 &&
            (M(n, { code: R.unrecognized_keys, keys: s }), r.dirty());
        else if (l !== "strip")
          throw new Error(
            "Internal ZodObject error: invalid unknownKeys value."
          );
      } else {
        const l = this._def.catchall;
        for (const h of s) {
          const m = n.data[h];
          o.push({
            key: { status: "valid", value: h },
            value: l._parse(new De(n, m, n.path, h)),
            alwaysSet: h in n.data,
          });
        }
      }
      return n.common.async
        ? Promise.resolve()
            .then(async () => {
              const l = [];
              for (const h of o) {
                const m = await h.key,
                  d = await h.value;
                l.push({ key: m, value: d, alwaysSet: h.alwaysSet });
              }
              return l;
            })
            .then((l) => ge.mergeObjectSync(r, l))
        : ge.mergeObjectSync(r, o);
    }
    get shape() {
      return this._def.shape();
    }
    strict(t) {
      return (
        x.errToObj,
        new Re({
          ...this._def,
          unknownKeys: "strict",
          ...(t !== void 0
            ? {
                errorMap: (r, n) => {
                  const i =
                    this._def.errorMap?.(r, n).message ?? n.defaultError;
                  return r.code === "unrecognized_keys"
                    ? { message: x.errToObj(t).message ?? i }
                    : { message: i };
                },
              }
            : {}),
        })
      );
    }
    strip() {
      return new Re({ ...this._def, unknownKeys: "strip" });
    }
    passthrough() {
      return new Re({ ...this._def, unknownKeys: "passthrough" });
    }
    extend(t) {
      return new Re({
        ...this._def,
        shape: () => ({ ...this._def.shape(), ...t }),
      });
    }
    merge(t) {
      return new Re({
        unknownKeys: t._def.unknownKeys,
        catchall: t._def.catchall,
        shape: () => ({ ...this._def.shape(), ...t._def.shape() }),
        typeName: F.ZodObject,
      });
    }
    setKey(t, r) {
      return this.augment({ [t]: r });
    }
    catchall(t) {
      return new Re({ ...this._def, catchall: t });
    }
    pick(t) {
      const r = {};
      for (const n of H.objectKeys(t))
        t[n] && this.shape[n] && (r[n] = this.shape[n]);
      return new Re({ ...this._def, shape: () => r });
    }
    omit(t) {
      const r = {};
      for (const n of H.objectKeys(this.shape)) t[n] || (r[n] = this.shape[n]);
      return new Re({ ...this._def, shape: () => r });
    }
    deepPartial() {
      return Et(this);
    }
    partial(t) {
      const r = {};
      for (const n of H.objectKeys(this.shape)) {
        const i = this.shape[n];
        t && !t[n] ? (r[n] = i) : (r[n] = i.optional());
      }
      return new Re({ ...this._def, shape: () => r });
    }
    required(t) {
      const r = {};
      for (const n of H.objectKeys(this.shape))
        if (t && !t[n]) r[n] = this.shape[n];
        else {
          let i = this.shape[n];
          for (; i instanceof Ge; ) i = i._def.innerType;
          r[n] = i;
        }
      return new Re({ ...this._def, shape: () => r });
    }
    keyof() {
      return to(H.objectKeys(this.shape));
    }
  };
  (ke.create = (e, t) =>
    new ke({
      shape: () => e,
      unknownKeys: "strip",
      catchall: Je.create(),
      typeName: F.ZodObject,
      ...j(t),
    })),
    (ke.strictCreate = (e, t) =>
      new ke({
        shape: () => e,
        unknownKeys: "strict",
        catchall: Je.create(),
        typeName: F.ZodObject,
        ...j(t),
      })),
    (ke.lazycreate = (e, t) =>
      new ke({
        shape: e,
        unknownKeys: "strip",
        catchall: Je.create(),
        typeName: F.ZodObject,
        ...j(t),
      }));
  var jr = class extends V {
    _parse(e) {
      const { ctx: t } = this._processInputParams(e),
        r = this._def.options;
      function n(i) {
        for (const s of i) if (s.result.status === "valid") return s.result;
        for (const s of i)
          if (s.result.status === "dirty")
            return t.common.issues.push(...s.ctx.common.issues), s.result;
        const a = i.map((s) => new Le(s.ctx.common.issues));
        return M(t, { code: R.invalid_union, unionErrors: a }), U;
      }
      if (t.common.async)
        return Promise.all(
          r.map(async (i) => {
            const a = {
              ...t,
              common: { ...t.common, issues: [] },
              parent: null,
            };
            return {
              result: await i._parseAsync({
                data: t.data,
                path: t.path,
                parent: a,
              }),
              ctx: a,
            };
          })
        ).then(n);
      {
        let i;
        const a = [];
        for (const o of r) {
          const l = { ...t, common: { ...t.common, issues: [] }, parent: null },
            h = o._parseSync({ data: t.data, path: t.path, parent: l });
          if (h.status === "valid") return h;
          h.status === "dirty" && !i && (i = { result: h, ctx: l }),
            l.common.issues.length && a.push(l.common.issues);
        }
        if (i) return t.common.issues.push(...i.ctx.common.issues), i.result;
        const s = a.map((o) => new Le(o));
        return M(t, { code: R.invalid_union, unionErrors: s }), U;
      }
    }
    get options() {
      return this._def.options;
    }
  };
  jr.create = (e, t) => new jr({ options: e, typeName: F.ZodUnion, ...j(t) });
  var je = (e) =>
      e instanceof Gr
        ? je(e.schema)
        : e instanceof qe
        ? je(e.innerType())
        : e instanceof zr
        ? [e.value]
        : e instanceof Vr
        ? e.options
        : e instanceof Hr
        ? H.objectValues(e.enum)
        : e instanceof Wr
        ? je(e._def.innerType)
        : e instanceof Br
        ? [void 0]
        : e instanceof $r
        ? [null]
        : e instanceof Ge
        ? [void 0, ...je(e.unwrap())]
        : e instanceof dt
        ? [null, ...je(e.unwrap())]
        : e instanceof ro || e instanceof Zr
        ? je(e.unwrap())
        : e instanceof Kr
        ? je(e._def.innerType)
        : [],
    Rh = class yc extends V {
      _parse(t) {
        const { ctx: r } = this._processInputParams(t);
        if (r.parsedType !== L.object)
          return (
            M(r, {
              code: R.invalid_type,
              expected: L.object,
              received: r.parsedType,
            }),
            U
          );
        const n = this.discriminator,
          i = r.data[n],
          a = this.optionsMap.get(i);
        return a
          ? r.common.async
            ? a._parseAsync({ data: r.data, path: r.path, parent: r })
            : a._parseSync({ data: r.data, path: r.path, parent: r })
          : (M(r, {
              code: R.invalid_union_discriminator,
              options: Array.from(this.optionsMap.keys()),
              path: [n],
            }),
            U);
      }
      get discriminator() {
        return this._def.discriminator;
      }
      get options() {
        return this._def.options;
      }
      get optionsMap() {
        return this._def.optionsMap;
      }
      static create(t, r, n) {
        const i = new Map();
        for (const a of r) {
          const s = je(a.shape[t]);
          if (!s.length)
            throw new Error(
              `A discriminator value for key \`${t}\` could not be extracted from all schema options`
            );
          for (const o of s) {
            if (i.has(o))
              throw new Error(
                `Discriminator property ${String(
                  t
                )} has duplicate value ${String(o)}`
              );
            i.set(o, a);
          }
        }
        return new yc({
          typeName: F.ZodDiscriminatedUnion,
          discriminator: t,
          options: r,
          optionsMap: i,
          ...j(n),
        });
      }
    };
  function wi(e, t) {
    const r = Ze(e),
      n = Ze(t);
    if (e === t) return { valid: !0, data: e };
    if (r === L.object && n === L.object) {
      const i = H.objectKeys(t),
        a = H.objectKeys(e).filter((o) => i.indexOf(o) !== -1),
        s = { ...e, ...t };
      for (const o of a) {
        const l = wi(e[o], t[o]);
        if (!l.valid) return { valid: !1 };
        s[o] = l.data;
      }
      return { valid: !0, data: s };
    } else if (r === L.array && n === L.array) {
      if (e.length !== t.length) return { valid: !1 };
      const i = [];
      for (let a = 0; a < e.length; a++) {
        const s = e[a],
          o = t[a],
          l = wi(s, o);
        if (!l.valid) return { valid: !1 };
        i.push(l.data);
      }
      return { valid: !0, data: i };
    } else
      return r === L.date && n === L.date && +e == +t
        ? { valid: !0, data: e }
        : { valid: !1 };
  }
  var qr = class extends V {
    _parse(e) {
      const { status: t, ctx: r } = this._processInputParams(e),
        n = (i, a) => {
          if (Js(i) || Js(a)) return U;
          const s = wi(i.value, a.value);
          return s.valid
            ? ((Xs(i) || Xs(a)) && t.dirty(),
              { status: t.value, value: s.data })
            : (M(r, { code: R.invalid_intersection_types }), U);
        };
      return r.common.async
        ? Promise.all([
            this._def.left._parseAsync({
              data: r.data,
              path: r.path,
              parent: r,
            }),
            this._def.right._parseAsync({
              data: r.data,
              path: r.path,
              parent: r,
            }),
          ]).then(([i, a]) => n(i, a))
        : n(
            this._def.left._parseSync({
              data: r.data,
              path: r.path,
              parent: r,
            }),
            this._def.right._parseSync({
              data: r.data,
              path: r.path,
              parent: r,
            })
          );
    }
  };
  qr.create = (e, t, r) =>
    new qr({ left: e, right: t, typeName: F.ZodIntersection, ...j(r) });
  var ut = class Sc extends V {
    _parse(t) {
      const { status: r, ctx: n } = this._processInputParams(t);
      if (n.parsedType !== L.array)
        return (
          M(n, {
            code: R.invalid_type,
            expected: L.array,
            received: n.parsedType,
          }),
          U
        );
      if (n.data.length < this._def.items.length)
        return (
          M(n, {
            code: R.too_small,
            minimum: this._def.items.length,
            inclusive: !0,
            exact: !1,
            type: "array",
          }),
          U
        );
      !this._def.rest &&
        n.data.length > this._def.items.length &&
        (M(n, {
          code: R.too_big,
          maximum: this._def.items.length,
          inclusive: !0,
          exact: !1,
          type: "array",
        }),
        r.dirty());
      const i = [...n.data]
        .map((a, s) => {
          const o = this._def.items[s] || this._def.rest;
          return o ? o._parse(new De(n, a, n.path, s)) : null;
        })
        .filter((a) => !!a);
      return n.common.async
        ? Promise.all(i).then((a) => ge.mergeArray(r, a))
        : ge.mergeArray(r, i);
    }
    get items() {
      return this._def.items;
    }
    rest(t) {
      return new Sc({ ...this._def, rest: t });
    }
  };
  ut.create = (e, t) => {
    if (!Array.isArray(e))
      throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
    return new ut({ items: e, typeName: F.ZodTuple, rest: null, ...j(t) });
  };
  var Oh = class Da extends V {
      get keySchema() {
        return this._def.keyType;
      }
      get valueSchema() {
        return this._def.valueType;
      }
      _parse(t) {
        const { status: r, ctx: n } = this._processInputParams(t);
        if (n.parsedType !== L.object)
          return (
            M(n, {
              code: R.invalid_type,
              expected: L.object,
              received: n.parsedType,
            }),
            U
          );
        const i = [],
          a = this._def.keyType,
          s = this._def.valueType;
        for (const o in n.data)
          i.push({
            key: a._parse(new De(n, o, n.path, o)),
            value: s._parse(new De(n, n.data[o], n.path, o)),
            alwaysSet: o in n.data,
          });
        return n.common.async
          ? ge.mergeObjectAsync(r, i)
          : ge.mergeObjectSync(r, i);
      }
      get element() {
        return this._def.valueType;
      }
      static create(t, r, n) {
        return r instanceof V
          ? new Da({ keyType: t, valueType: r, typeName: F.ZodRecord, ...j(n) })
          : new Da({
              keyType: Fr.create(),
              valueType: t,
              typeName: F.ZodRecord,
              ...j(r),
            });
      }
    },
    bi = class extends V {
      get keySchema() {
        return this._def.keyType;
      }
      get valueSchema() {
        return this._def.valueType;
      }
      _parse(e) {
        const { status: t, ctx: r } = this._processInputParams(e);
        if (r.parsedType !== L.map)
          return (
            M(r, {
              code: R.invalid_type,
              expected: L.map,
              received: r.parsedType,
            }),
            U
          );
        const n = this._def.keyType,
          i = this._def.valueType,
          a = [...r.data.entries()].map(([s, o], l) => ({
            key: n._parse(new De(r, s, r.path, [l, "key"])),
            value: i._parse(new De(r, o, r.path, [l, "value"])),
          }));
        if (r.common.async) {
          const s = new Map();
          return Promise.resolve().then(async () => {
            for (const o of a) {
              const l = await o.key,
                h = await o.value;
              if (l.status === "aborted" || h.status === "aborted") return U;
              (l.status === "dirty" || h.status === "dirty") && t.dirty(),
                s.set(l.value, h.value);
            }
            return { status: t.value, value: s };
          });
        } else {
          const s = new Map();
          for (const o of a) {
            const l = o.key,
              h = o.value;
            if (l.status === "aborted" || h.status === "aborted") return U;
            (l.status === "dirty" || h.status === "dirty") && t.dirty(),
              s.set(l.value, h.value);
          }
          return { status: t.value, value: s };
        }
      }
    };
  bi.create = (e, t, r) =>
    new bi({ valueType: t, keyType: e, typeName: F.ZodMap, ...j(r) });
  var yi = class xa extends V {
    _parse(t) {
      const { status: r, ctx: n } = this._processInputParams(t);
      if (n.parsedType !== L.set)
        return (
          M(n, {
            code: R.invalid_type,
            expected: L.set,
            received: n.parsedType,
          }),
          U
        );
      const i = this._def;
      i.minSize !== null &&
        n.data.size < i.minSize.value &&
        (M(n, {
          code: R.too_small,
          minimum: i.minSize.value,
          type: "set",
          inclusive: !0,
          exact: !1,
          message: i.minSize.message,
        }),
        r.dirty()),
        i.maxSize !== null &&
          n.data.size > i.maxSize.value &&
          (M(n, {
            code: R.too_big,
            maximum: i.maxSize.value,
            type: "set",
            inclusive: !0,
            exact: !1,
            message: i.maxSize.message,
          }),
          r.dirty());
      const a = this._def.valueType;
      function s(l) {
        const h = new Set();
        for (const m of l) {
          if (m.status === "aborted") return U;
          m.status === "dirty" && r.dirty(), h.add(m.value);
        }
        return { status: r.value, value: h };
      }
      const o = [...n.data.values()].map((l, h) =>
        a._parse(new De(n, l, n.path, h))
      );
      return n.common.async ? Promise.all(o).then((l) => s(l)) : s(o);
    }
    min(t, r) {
      return new xa({
        ...this._def,
        minSize: { value: t, message: x.toString(r) },
      });
    }
    max(t, r) {
      return new xa({
        ...this._def,
        maxSize: { value: t, message: x.toString(r) },
      });
    }
    size(t, r) {
      return this.min(t, r).max(t, r);
    }
    nonempty(t) {
      return this.min(1, t);
    }
  };
  yi.create = (e, t) =>
    new yi({
      valueType: e,
      minSize: null,
      maxSize: null,
      typeName: F.ZodSet,
      ...j(t),
    });
  var Ph = class Pn extends V {
      constructor() {
        super(...arguments), (this.validate = this.implement);
      }
      _parse(t) {
        const { ctx: r } = this._processInputParams(t);
        if (r.parsedType !== L.function)
          return (
            M(r, {
              code: R.invalid_type,
              expected: L.function,
              received: r.parsedType,
            }),
            U
          );
        function n(o, l) {
          return ui({
            data: o,
            path: r.path,
            errorMaps: [
              r.common.contextualErrorMap,
              r.schemaErrorMap,
              ci(),
              jt,
            ].filter((h) => !!h),
            issueData: { code: R.invalid_arguments, argumentsError: l },
          });
        }
        function i(o, l) {
          return ui({
            data: o,
            path: r.path,
            errorMaps: [
              r.common.contextualErrorMap,
              r.schemaErrorMap,
              ci(),
              jt,
            ].filter((h) => !!h),
            issueData: { code: R.invalid_return_type, returnTypeError: l },
          });
        }
        const a = { errorMap: r.common.contextualErrorMap },
          s = r.data;
        if (this._def.returns instanceof Gt) {
          const o = this;
          return de(async function (...l) {
            const h = new Le([]),
              m = await o._def.args.parseAsync(l, a).catch((f) => {
                throw (h.addIssue(n(l, f)), h);
              }),
              d = await Reflect.apply(s, this, m);
            return await o._def.returns._def.type
              .parseAsync(d, a)
              .catch((f) => {
                throw (h.addIssue(i(d, f)), h);
              });
          });
        } else {
          const o = this;
          return de(function (...l) {
            const h = o._def.args.safeParse(l, a);
            if (!h.success) throw new Le([n(l, h.error)]);
            const m = Reflect.apply(s, this, h.data),
              d = o._def.returns.safeParse(m, a);
            if (!d.success) throw new Le([i(m, d.error)]);
            return d.data;
          });
        }
      }
      parameters() {
        return this._def.args;
      }
      returnType() {
        return this._def.returns;
      }
      args(...t) {
        return new Pn({ ...this._def, args: ut.create(t).rest(St.create()) });
      }
      returns(t) {
        return new Pn({ ...this._def, returns: t });
      }
      implement(t) {
        return this.parse(t);
      }
      strictImplement(t) {
        return this.parse(t);
      }
      static create(t, r, n) {
        return new Pn({
          args: t || ut.create([]).rest(St.create()),
          returns: r || St.create(),
          typeName: F.ZodFunction,
          ...j(n),
        });
      }
    },
    Gr = class extends V {
      get schema() {
        return this._def.getter();
      }
      _parse(e) {
        const { ctx: t } = this._processInputParams(e);
        return this._def
          .getter()
          ._parse({ data: t.data, path: t.path, parent: t });
      }
    };
  Gr.create = (e, t) => new Gr({ getter: e, typeName: F.ZodLazy, ...j(t) });
  var zr = class extends V {
    _parse(e) {
      if (e.data !== this._def.value) {
        const t = this._getOrReturnCtx(e);
        return (
          M(t, {
            received: t.data,
            code: R.invalid_literal,
            expected: this._def.value,
          }),
          U
        );
      }
      return { status: "valid", value: e.data };
    }
    get value() {
      return this._def.value;
    }
  };
  zr.create = (e, t) => new zr({ value: e, typeName: F.ZodLiteral, ...j(t) });
  function to(e, t) {
    return new Vr({ values: e, typeName: F.ZodEnum, ...j(t) });
  }
  var Vr = class Na extends V {
    _parse(t) {
      if (typeof t.data != "string") {
        const r = this._getOrReturnCtx(t),
          n = this._def.values;
        return (
          M(r, {
            expected: H.joinValues(n),
            received: r.parsedType,
            code: R.invalid_type,
          }),
          U
        );
      }
      if (
        (this._cache || (this._cache = new Set(this._def.values)),
        !this._cache.has(t.data))
      ) {
        const r = this._getOrReturnCtx(t),
          n = this._def.values;
        return (
          M(r, { received: r.data, code: R.invalid_enum_value, options: n }), U
        );
      }
      return de(t.data);
    }
    get options() {
      return this._def.values;
    }
    get enum() {
      const t = {};
      for (const r of this._def.values) t[r] = r;
      return t;
    }
    get Values() {
      const t = {};
      for (const r of this._def.values) t[r] = r;
      return t;
    }
    get Enum() {
      const t = {};
      for (const r of this._def.values) t[r] = r;
      return t;
    }
    extract(t, r = this._def) {
      return Na.create(t, { ...this._def, ...r });
    }
    exclude(t, r = this._def) {
      return Na.create(
        this.options.filter((n) => !t.includes(n)),
        { ...this._def, ...r }
      );
    }
  };
  Vr.create = to;
  var Hr = class extends V {
    _parse(e) {
      const t = H.getValidEnumValues(this._def.values),
        r = this._getOrReturnCtx(e);
      if (r.parsedType !== L.string && r.parsedType !== L.number) {
        const n = H.objectValues(t);
        return (
          M(r, {
            expected: H.joinValues(n),
            received: r.parsedType,
            code: R.invalid_type,
          }),
          U
        );
      }
      if (
        (this._cache ||
          (this._cache = new Set(H.getValidEnumValues(this._def.values))),
        !this._cache.has(e.data))
      ) {
        const n = H.objectValues(t);
        return (
          M(r, { received: r.data, code: R.invalid_enum_value, options: n }), U
        );
      }
      return de(e.data);
    }
    get enum() {
      return this._def.values;
    }
  };
  Hr.create = (e, t) =>
    new Hr({ values: e, typeName: F.ZodNativeEnum, ...j(t) });
  var Gt = class extends V {
    unwrap() {
      return this._def.type;
    }
    _parse(e) {
      const { ctx: t } = this._processInputParams(e);
      return t.parsedType !== L.promise && t.common.async === !1
        ? (M(t, {
            code: R.invalid_type,
            expected: L.promise,
            received: t.parsedType,
          }),
          U)
        : de(
            (t.parsedType === L.promise
              ? t.data
              : Promise.resolve(t.data)
            ).then((r) =>
              this._def.type.parseAsync(r, {
                path: t.path,
                errorMap: t.common.contextualErrorMap,
              })
            )
          );
    }
  };
  Gt.create = (e, t) => new Gt({ type: e, typeName: F.ZodPromise, ...j(t) });
  var qe = class extends V {
    innerType() {
      return this._def.schema;
    }
    sourceType() {
      return this._def.schema._def.typeName === F.ZodEffects
        ? this._def.schema.sourceType()
        : this._def.schema;
    }
    _parse(e) {
      const { status: t, ctx: r } = this._processInputParams(e),
        n = this._def.effect || null,
        i = {
          addIssue: (a) => {
            M(r, a), a.fatal ? t.abort() : t.dirty();
          },
          get path() {
            return r.path;
          },
        };
      if (((i.addIssue = i.addIssue.bind(i)), n.type === "preprocess")) {
        const a = n.transform(r.data, i);
        if (r.common.async)
          return Promise.resolve(a).then(async (s) => {
            if (t.value === "aborted") return U;
            const o = await this._def.schema._parseAsync({
              data: s,
              path: r.path,
              parent: r,
            });
            return o.status === "aborted"
              ? U
              : o.status === "dirty" || t.value === "dirty"
              ? qt(o.value)
              : o;
          });
        {
          if (t.value === "aborted") return U;
          const s = this._def.schema._parseSync({
            data: a,
            path: r.path,
            parent: r,
          });
          return s.status === "aborted"
            ? U
            : s.status === "dirty" || t.value === "dirty"
            ? qt(s.value)
            : s;
        }
      }
      if (n.type === "refinement") {
        const a = (s) => {
          const o = n.refinement(s, i);
          if (r.common.async) return Promise.resolve(o);
          if (o instanceof Promise)
            throw new Error(
              "Async refinement encountered during synchronous parse operation. Use .parseAsync instead."
            );
          return s;
        };
        if (r.common.async === !1) {
          const s = this._def.schema._parseSync({
            data: r.data,
            path: r.path,
            parent: r,
          });
          return s.status === "aborted"
            ? U
            : (s.status === "dirty" && t.dirty(),
              a(s.value),
              { status: t.value, value: s.value });
        } else
          return this._def.schema
            ._parseAsync({ data: r.data, path: r.path, parent: r })
            .then((s) =>
              s.status === "aborted"
                ? U
                : (s.status === "dirty" && t.dirty(),
                  a(s.value).then(() => ({ status: t.value, value: s.value })))
            );
      }
      if (n.type === "transform")
        if (r.common.async === !1) {
          const a = this._def.schema._parseSync({
            data: r.data,
            path: r.path,
            parent: r,
          });
          if (!yt(a)) return U;
          const s = n.transform(a.value, i);
          if (s instanceof Promise)
            throw new Error(
              "Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead."
            );
          return { status: t.value, value: s };
        } else
          return this._def.schema
            ._parseAsync({ data: r.data, path: r.path, parent: r })
            .then((a) =>
              yt(a)
                ? Promise.resolve(n.transform(a.value, i)).then((s) => ({
                    status: t.value,
                    value: s,
                  }))
                : U
            );
      H.assertNever(n);
    }
  };
  (qe.create = (e, t, r) =>
    new qe({ schema: e, typeName: F.ZodEffects, effect: t, ...j(r) })),
    (qe.createWithPreprocess = (e, t, r) =>
      new qe({
        schema: t,
        effect: { type: "preprocess", transform: e },
        typeName: F.ZodEffects,
        ...j(r),
      }));
  var Ge = class extends V {
    _parse(e) {
      return this._getType(e) === L.undefined
        ? de(void 0)
        : this._def.innerType._parse(e);
    }
    unwrap() {
      return this._def.innerType;
    }
  };
  Ge.create = (e, t) =>
    new Ge({ innerType: e, typeName: F.ZodOptional, ...j(t) });
  var dt = class extends V {
    _parse(e) {
      return this._getType(e) === L.null
        ? de(null)
        : this._def.innerType._parse(e);
    }
    unwrap() {
      return this._def.innerType;
    }
  };
  dt.create = (e, t) =>
    new dt({ innerType: e, typeName: F.ZodNullable, ...j(t) });
  var Wr = class extends V {
    _parse(e) {
      const { ctx: t } = this._processInputParams(e);
      let r = t.data;
      return (
        t.parsedType === L.undefined && (r = this._def.defaultValue()),
        this._def.innerType._parse({ data: r, path: t.path, parent: t })
      );
    }
    removeDefault() {
      return this._def.innerType;
    }
  };
  Wr.create = (e, t) =>
    new Wr({
      innerType: e,
      typeName: F.ZodDefault,
      defaultValue:
        typeof t.default == "function" ? t.default : () => t.default,
      ...j(t),
    });
  var Kr = class extends V {
    _parse(e) {
      const { ctx: t } = this._processInputParams(e),
        r = { ...t, common: { ...t.common, issues: [] } },
        n = this._def.innerType._parse({
          data: r.data,
          path: r.path,
          parent: { ...r },
        });
      return Ur(n)
        ? n.then((i) => ({
            status: "valid",
            value:
              i.status === "valid"
                ? i.value
                : this._def.catchValue({
                    get error() {
                      return new Le(r.common.issues);
                    },
                    input: r.data,
                  }),
          }))
        : {
            status: "valid",
            value:
              n.status === "valid"
                ? n.value
                : this._def.catchValue({
                    get error() {
                      return new Le(r.common.issues);
                    },
                    input: r.data,
                  }),
          };
    }
    removeCatch() {
      return this._def.innerType;
    }
  };
  Kr.create = (e, t) =>
    new Kr({
      innerType: e,
      typeName: F.ZodCatch,
      catchValue: typeof t.catch == "function" ? t.catch : () => t.catch,
      ...j(t),
    });
  var Si = class extends V {
    _parse(e) {
      if (this._getType(e) !== L.nan) {
        const t = this._getOrReturnCtx(e);
        return (
          M(t, {
            code: R.invalid_type,
            expected: L.nan,
            received: t.parsedType,
          }),
          U
        );
      }
      return { status: "valid", value: e.data };
    }
  };
  Si.create = (e) => new Si({ typeName: F.ZodNaN, ...j(e) });
  var ro = class extends V {
      _parse(e) {
        const { ctx: t } = this._processInputParams(e),
          r = t.data;
        return this._def.type._parse({ data: r, path: t.path, parent: t });
      }
      unwrap() {
        return this._def.type;
      }
    },
    no = class Tc extends V {
      _parse(t) {
        const { status: r, ctx: n } = this._processInputParams(t);
        if (n.common.async)
          return (async () => {
            const a = await this._def.in._parseAsync({
              data: n.data,
              path: n.path,
              parent: n,
            });
            return a.status === "aborted"
              ? U
              : a.status === "dirty"
              ? (r.dirty(), qt(a.value))
              : this._def.out._parseAsync({
                  data: a.value,
                  path: n.path,
                  parent: n,
                });
          })();
        {
          const i = this._def.in._parseSync({
            data: n.data,
            path: n.path,
            parent: n,
          });
          return i.status === "aborted"
            ? U
            : i.status === "dirty"
            ? (r.dirty(), { status: "dirty", value: i.value })
            : this._def.out._parseSync({
                data: i.value,
                path: n.path,
                parent: n,
              });
        }
      }
      static create(t, r) {
        return new Tc({ in: t, out: r, typeName: F.ZodPipeline });
      }
    },
    Zr = class extends V {
      _parse(e) {
        const t = this._def.innerType._parse(e),
          r = (n) => (yt(n) && (n.value = Object.freeze(n.value)), n);
        return Ur(t) ? t.then((n) => r(n)) : r(t);
      }
      unwrap() {
        return this._def.innerType;
      }
    };
  Zr.create = (e, t) =>
    new Zr({ innerType: e, typeName: F.ZodReadonly, ...j(t) });
  var Xw = { object: ke.lazycreate },
    F;
  (function (e) {
    (e.ZodString = "ZodString"),
      (e.ZodNumber = "ZodNumber"),
      (e.ZodNaN = "ZodNaN"),
      (e.ZodBigInt = "ZodBigInt"),
      (e.ZodBoolean = "ZodBoolean"),
      (e.ZodDate = "ZodDate"),
      (e.ZodSymbol = "ZodSymbol"),
      (e.ZodUndefined = "ZodUndefined"),
      (e.ZodNull = "ZodNull"),
      (e.ZodAny = "ZodAny"),
      (e.ZodUnknown = "ZodUnknown"),
      (e.ZodNever = "ZodNever"),
      (e.ZodVoid = "ZodVoid"),
      (e.ZodArray = "ZodArray"),
      (e.ZodObject = "ZodObject"),
      (e.ZodUnion = "ZodUnion"),
      (e.ZodDiscriminatedUnion = "ZodDiscriminatedUnion"),
      (e.ZodIntersection = "ZodIntersection"),
      (e.ZodTuple = "ZodTuple"),
      (e.ZodRecord = "ZodRecord"),
      (e.ZodMap = "ZodMap"),
      (e.ZodSet = "ZodSet"),
      (e.ZodFunction = "ZodFunction"),
      (e.ZodLazy = "ZodLazy"),
      (e.ZodLiteral = "ZodLiteral"),
      (e.ZodEnum = "ZodEnum"),
      (e.ZodEffects = "ZodEffects"),
      (e.ZodNativeEnum = "ZodNativeEnum"),
      (e.ZodOptional = "ZodOptional"),
      (e.ZodNullable = "ZodNullable"),
      (e.ZodDefault = "ZodDefault"),
      (e.ZodCatch = "ZodCatch"),
      (e.ZodPromise = "ZodPromise"),
      (e.ZodBranded = "ZodBranded"),
      (e.ZodPipeline = "ZodPipeline"),
      (e.ZodReadonly = "ZodReadonly");
  })(F || (F = {}));
  var _ = Fr.create,
    k = hi.create,
    Yw = Si.create,
    Qw = fi.create,
    J = pi.create,
    eb = mi.create,
    tb = gi.create,
    rb = Br.create,
    nb = $r.create,
    ib = _i.create,
    xe = St.create,
    ab = Je.create,
    sb = vi.create,
    N = Tt.create,
    b = ke.create,
    ob = ke.strictCreate,
    io = jr.create,
    ao = Rh.create,
    lb = qr.create,
    Mh = ut.create,
    zt = Oh.create,
    cb = bi.create,
    ub = yi.create,
    db = Ph.create,
    hb = Gr.create,
    re = zr.create,
    z = Vr.create,
    fb = Hr.create,
    pb = Gt.create,
    mb = qe.create,
    gb = Ge.create,
    _b = dt.create,
    vb = qe.createWithPreprocess,
    wb = no.create,
    so = b({ id: _(), description: _() }),
    Lh = b({ browser: N(so).optional(), tab: N(so).optional() }),
    Dh = z(["iab", "extension", "cdp", "mcpapps"]),
    xh = _().trim().min(1),
    oo = b({
      family: xh.optional(),
      id: _(),
      name: _(),
      type: Dh,
      profileName: _().optional(),
      metadata: b({
        extensionInstanceId: _().optional(),
        codexSessionId: _().optional(),
      }).optional(),
    }),
    bb = oo.extend({
      apiSupportOverrides: zt(J()).optional(),
      capabilities: Lh,
    }),
    yb = b({}),
    Sb = N(oo),
    Tb = b({ id: _() }),
    Eb = b({}),
    Ib = b({ name: _() }),
    Ab = _(),
    Cb = b({ browser_id: _() }),
    kb = _(),
    Rb = b({ url: _().url() }),
    Ob = b({ browser_id: _() }),
    Pb = b({ id: _() }),
    Mb = b({ browser_id: _(), tab_id: _() }),
    Lb = b({ id: _(), title: _().optional(), url: _().optional() }),
    Db = b({ browser_id: _(), tab_id: _() }),
    xb = b({}),
    Nh = z(["handoff", "deliverable"]),
    Nb = b({ browser_id: _(), tab_id: _(), status: Nh }),
    Ub = b({}),
    Fb = b({ browser_id: _(), tab_id: _() }),
    Bb = b({}),
    $b = b({ browser_id: _() }),
    jb = b({ display_truncate_max_chars: k().int().positive().optional() }),
    qb = b({ browser_id: _(), name: _() }),
    Gb = b({}),
    zb = b({ browser_id: _() }),
    Vb = b({ id: _().optional() }),
    Hb = b({ browser_id: _() }),
    Wb = b({
      tabs: N(
        b({
          id: _(),
          providerTabId: _().optional(),
          url: _().optional(),
          title: _().optional(),
        })
      ),
    }),
    Uh = z(["html", "text", "domSnapshot"]),
    Kb = b({
      browser_id: _(),
      urls: N(_()),
      content_type: Uh,
      timeout_ms: k().int().positive().optional(),
    }),
    Zb = b({
      results: N(
        b({ url: _(), title: _().nullable(), content: _().nullable() })
      ),
    }),
    Fh = b({
      readOnlyHint: J().optional(),
      untrustedContentHint: J().optional(),
      consequentialHint: J().optional(),
    }),
    Bh = b({
      name: _(),
      call_name: _(),
      registration_id: _(),
      title: _().optional(),
      description: _().optional(),
      input_schema: xe(),
      annotations: Fh.optional(),
      origin: _().optional(),
      pageUrl: _().optional(),
    }),
    $h = b({ browser_id: _(), tab_id: _() }),
    jh = b({ tools: N(Bh) }),
    qh = "webmcp_list_tools";
  function Gh(e) {
    return new K(qh, $h, e);
  }
  var zh = b({
      browser_id: _(),
      tab_id: _(),
      tool_name: _(),
      tool_description: _().optional(),
      tool_origin: _().optional(),
      tool_title: _().optional(),
      registration_id: _(),
      input: xe(),
      timeout_ms: k().int().positive().optional(),
    }),
    Jb = b({ result: xe() }),
    Vh = "webmcp_invoke_tool";
  function Hh(e) {
    return new K(Vh, zh, e);
  }
  var Xb = b({ browser_id: _(), tab_id: _(), url: _() }),
    Yb = b({}),
    Qb = b({ browser_id: _(), tab_id: _() }),
    ey = b({}),
    ty = b({ browser_id: _(), tab_id: _() }),
    ry = b({}),
    ny = b({ browser_id: _(), tab_id: _() }),
    iy = b({}),
    ay = b({ browser_id: _(), tab_id: _() }),
    sy = b({ id: _(), title: _().optional(), url: _().optional() }),
    oy = b({ browser_id: _(), tab_id: _() }),
    ly = ao("kind", [
      b({
        kind: re("library_file"),
        libraryFileId: _().min(1),
        fileId: _().min(1),
        fileName: _(),
        mimeType: _(),
        title: _(),
        url: _(),
      }),
      b({ kind: re("text"), text: _(), title: _(), truncated: J(), url: _() }),
      b({
        dataBase64: _(),
        fileName: _(),
        kind: re("document"),
        mimeType: _(),
        title: _(),
        url: _(),
      }),
    ]),
    cy = b({ browser_id: _() }),
    uy = b({
      tabs: N(
        b({
          id: _(),
          providerTabId: _().optional(),
          title: _().optional(),
          url: _().optional(),
          lastOpened: _().optional(),
          tabGroup: _().optional(),
        })
      ),
    }),
    dy = b({
      browser_id: _(),
      queries: N(_()).min(1).optional(),
      limit: k().int().positive().optional(),
      from: _().optional(),
      to: _().optional(),
    }),
    hy = b({
      items: N(b({ url: _(), title: _().optional(), dateVisited: _() })),
    }),
    lo = z(["debug", "info", "log", "warn", "error"]),
    fy = b({
      browser_id: _(),
      tab_id: _(),
      filter: _().optional(),
      levels: N(lo).optional(),
      limit: k().int().positive().optional(),
    }),
    py = b({
      logs: N(
        b({ level: lo, message: _(), timestamp: _(), url: _().optional() })
      ),
    }),
    Wh = z(["alert", "beforeunload", "confirm", "prompt"]),
    Kh = b({ id: _(), type: Wh }),
    my = b({ browser_id: _(), tab_id: _() }),
    gy = b({ dialog: Kh.nullable() }),
    _y = b({
      action: z(["accept", "dismiss"]),
      browser_id: _(),
      dialog_id: _(),
      prompt_text: _().optional(),
      tab_id: _(),
    }),
    vy = b({}),
    wy = b({ browser_id: _(), tab_id: _() }),
    by = b({ path: _() }),
    Zh = z(["pdf", "md", "xlsx", "csv", "docx", "pptx"]),
    yy = b({ browser_id: _(), tab_id: _(), format: Zh }),
    Sy = b({ path: _() }),
    Ty = b({ browser_id: _(), tab_id: _() }),
    Ey = b({ path: _() }),
    Iy = b({ browser_id: _(), tab_id: _() }),
    Ay = b({ text: _() }),
    Cy = b({ browser_id: _(), tab_id: _(), text: _() }),
    ky = b({}),
    Jh = b({
      mime_type: _(),
      text: _().optional(),
      base64: _().optional(),
    }).superRefine((e, t) => {
      (e.text !== void 0) == (e.base64 !== void 0) &&
        t.addIssue({
          code: R.custom,
          message: "Clipboard entries must set exactly one of text or base64",
        });
    }),
    Xh = b({
      entries: N(Jh),
      presentation_style: z(["unspecified", "inline", "attachment"]).optional(),
    }),
    Ry = b({ browser_id: _(), tab_id: _() }),
    Oy = b({ items: N(Xh) }),
    Yh = b({
      mime_type: _(),
      text: _().optional(),
      base64: _().optional(),
    }).superRefine((e, t) => {
      (e.text !== void 0) == (e.base64 !== void 0) &&
        t.addIssue({
          code: R.custom,
          message: "Clipboard entries must set exactly one of text or base64",
        });
    }),
    Qh = b({
      entries: N(Yh),
      presentation_style: z(["unspecified", "inline", "attachment"]).optional(),
    }),
    Py = b({ browser_id: _(), tab_id: _(), items: N(Qh) }),
    My = b({}),
    Ly = b({
      browser_id: _(),
      tab_id: _(),
      fullPage: J().optional(),
      cropX: k().optional(),
      cropY: k().optional(),
      cropWidth: k().optional(),
      cropHeight: k().optional(),
    }),
    Dy = b({ data: _() }),
    xy = b({
      browser_id: _(),
      tab_id: _(),
      content: z(["axState", "screenshot", "axStateAndScreenshot"]),
      disable_diffing: J().optional(),
    }),
    Ny = b({
      state: _().optional(),
      data: _().optional(),
      screenshot_unavailable: _().optional(),
    }),
    Ti = Mh([k(), k()]),
    ht = k().int().nonnegative(),
    co = io([ht, Ti]),
    ef = ao("kind", [
      b({
        kind: re("paste"),
        element_index: ht.nullable(),
        text: _(),
        format: z(["text", "md", "html"]).optional(),
      }),
      b({
        kind: re("click"),
        target: co,
        mouse_button: z(["left", "right", "middle", "l", "r", "m"]).optional(),
        click_count: k().int().positive().optional(),
        key: _().optional(),
        duration: k().finite().min(0).max(30).optional(),
      }),
      b({ kind: re("drag"), from: Ti, to: Ti }),
      b({
        kind: re("perform_secondary_action"),
        element_index: ht,
        action: _(),
      }),
      b({
        kind: re("press_key"),
        element_index: ht.nullable(),
        key: _(),
        duration: k().finite().min(0).max(30).optional(),
      }),
      b({
        kind: re("scroll"),
        target: co,
        direction: z(["up", "down", "left", "right", "u", "d", "l", "r"]),
        pages: k().optional(),
      }),
      b({
        kind: re("select_text"),
        element_index: ht,
        text: _(),
        prefix: _().optional(),
        suffix: _().optional(),
        selection_type: z(["text", "cursor_before", "cursor_after"]).optional(),
      }),
      b({ kind: re("set_value"), element_index: ht, value: _() }),
      b({ kind: re("type_text"), element_index: ht.nullable(), text: _() }),
    ]),
    Uy = b({ browser_id: _(), tab_id: _(), action: ef }),
    Fy = b({}),
    tf = b({
      browser_id: _(),
      selector: _().optional(),
      selector_mode: re("all").optional(),
      tab_id: _(),
      script: _(),
      timeout_ms: k().int().positive().optional(),
    }),
    By = b({ value: xe().optional() }),
    rf = "playwright_evaluate";
  function uo(e) {
    return new K(rf, tf, e);
  }
  var $y = b({
      browser_id: _(),
      tab_id: _(),
      x: k(),
      y: k(),
      button: k().optional(),
      keys: N(_()).optional(),
    }),
    jy = b({}),
    qy = b({
      browser_id: _(),
      tab_id: _(),
      x: k(),
      y: k(),
      timeout_ms: k().int().positive().optional(),
    }),
    Gy = b({}),
    zy = b({
      browser_id: _(),
      tab_id: _(),
      x: k(),
      y: k(),
      keys: N(_()).optional(),
    }),
    Vy = b({}),
    Hy = b({ browser_id: _(), tab_id: _(), keys: N(_()) }),
    Wy = b({}),
    Ky = b({
      browser_id: _(),
      tab_id: _(),
      path: N(b({ x: k(), y: k() })),
      keys: N(_()).optional(),
    }),
    Zy = b({}),
    Jy = b({
      browser_id: _(),
      tab_id: _(),
      x: k(),
      y: k(),
      keys: N(_()).optional(),
    }),
    Xy = b({}),
    Yy = b({
      browser_id: _(),
      tab_id: _(),
      x: k(),
      y: k(),
      scroll_x: k(),
      scroll_y: k(),
      keys: N(_()).optional(),
    }),
    Qy = b({}),
    eS = b({ browser_id: _(), tab_id: _(), text: _() }),
    tS = b({}),
    Jr = _({
      required_error: "node_id is required",
      invalid_type_error: "node_id must be a string",
    }).min(1, "node_id must not be empty"),
    rS = b({ browser_id: _(), tab_id: _(), node_id: Jr }),
    nS = b({}),
    iS = b({
      browser_id: _(),
      tab_id: _(),
      node_id: Jr,
      timeout_ms: k().int().positive().optional(),
    }),
    aS = b({}),
    sS = b({ browser_id: _(), tab_id: _(), node_id: Jr }),
    oS = b({}),
    lS = b({ browser_id: _(), tab_id: _() }),
    cS = xe(),
    uS = b({ browser_id: _(), tab_id: _(), keys: N(_()) }),
    dS = b({}),
    hS = b({
      browser_id: _(),
      tab_id: _(),
      scroll_x: k(),
      scroll_y: k(),
      node_id: Jr.optional(),
    }),
    fS = b({}),
    pS = b({ browser_id: _(), tab_id: _(), text: _() }),
    mS = b({}),
    nf = b({
      browser_id: _(),
      tab_id: _(),
      selector: _(),
      modifiers: N(
        z(["Alt", "Control", "ControlOrMeta", "Meta", "Shift"])
      ).optional(),
      button: z(["left", "right", "middle"]).optional(),
      force: J().optional(),
      timeout_ms: k().int().positive().optional(),
    }),
    gS = b({}),
    af = "playwright_locator_click";
  function sf(e) {
    return new K(af, nf, e);
  }
  var of = b({
      browser_id: _(),
      tab_id: _(),
      selector: _(),
      modifiers: N(
        z(["Alt", "Control", "ControlOrMeta", "Meta", "Shift"])
      ).optional(),
      button: z(["left", "right", "middle"]).optional(),
      force: J().optional(),
      timeout_ms: k().int().positive().optional(),
    }),
    _S = b({}),
    lf = "playwright_locator_dblclick";
  function cf(e) {
    return new K(lf, of, e);
  }
  var uf = b({
      browser_id: _(),
      tab_id: _(),
      selector: _(),
      timeout_ms: k().int().positive().optional(),
    }),
    vS = b({ path: _() }),
    df = "playwright_locator_download_media";
  function hf(e) {
    return new K(df, uf, e);
  }
  var ff = b({
      browser_id: _(),
      tab_id: _(),
      selector: _(),
      value: _(),
      replace: J(),
      timeout_ms: k().int().positive().optional(),
    }),
    wS = b({}),
    pf = "playwright_locator_fill";
  function ho(e) {
    return new K(pf, ff, e);
  }
  var mf = b({
      browser_id: _(),
      tab_id: _(),
      selector: _(),
      value: _(),
      timeout_ms: k().int().positive().optional(),
    }),
    bS = b({}),
    gf = "playwright_locator_press";
  function _f(e) {
    return new K(gf, mf, e);
  }
  var vf = b({
      browser_id: _(),
      tab_id: _(),
      selector: _(),
      value: _(),
      timeout_ms: k().int().positive().optional(),
    }),
    yS = b({}),
    wf = "playwright_locator_press_sequentially";
  function bf(e) {
    return new K(wf, vf, e);
  }
  var yf = b({
      browser_id: _(),
      tab_id: _(),
      selector: _(),
      state: z(["attached", "detached", "visible", "hidden"]),
      timeout_ms: k().int().positive().optional(),
    }),
    SS = b({}),
    Sf = "playwright_locator_wait_for";
  function Tf(e) {
    return new K(Sf, yf, e);
  }
  var Ef = b({ browser_id: _(), tab_id: _(), selector: _() }),
    TS = b({ count: k().int() }),
    If = "playwright_locator_count";
  function Af(e) {
    return new K(If, Ef, e);
  }
  var Cf = b({
      value: _().optional(),
      label: _().optional(),
      index: k().int().nonnegative().optional(),
    }).superRefine((e, t) => {
      e.value === void 0 &&
        e.label === void 0 &&
        e.index === void 0 &&
        t.addIssue({
          code: R.custom,
          message: "Select option requires value, label, or index",
        });
    }),
    kf = b({
      browser_id: _(),
      tab_id: _(),
      selector: _(),
      selections: N(Cf).min(1),
      timeout_ms: k().int().positive().optional(),
    }),
    ES = b({}),
    Rf = "playwright_locator_select_option";
  function Of(e) {
    return new K(Rf, kf, e);
  }
  var Pf = b({
      browser_id: _(),
      tab_id: _(),
      selector: _(),
      checked: J(),
      force: J().optional(),
      timeout_ms: k().int().positive().optional(),
    }),
    IS = b({}),
    Mf = "playwright_locator_set_checked";
  function Lf(e) {
    return new K(Mf, Pf, e);
  }
  var Df = b({ browser_id: _(), tab_id: _(), selector: _() }),
    AS = b({ value: J() }),
    xf = "playwright_locator_is_visible";
  function Nf(e) {
    return new K(xf, Df, e);
  }
  var Uf = b({ browser_id: _(), tab_id: _(), selector: _() }),
    CS = b({ value: J() }),
    Ff = "playwright_locator_is_enabled";
  function Bf(e) {
    return new K(Ff, Uf, e);
  }
  var $f = b({
      browser_id: _(),
      tab_id: _(),
      selector: _(),
      timeout_ms: k().int().positive().optional(),
    }),
    kS = b({ values: N(_()) }),
    jf = "playwright_locator_all_text_contents";
  function qf(e) {
    return new K(jf, $f, e);
  }
  var Gf = b({
      browser_id: _(),
      tab_id: _(),
      selector: _(),
      timeout_ms: k().int().positive().optional(),
    }),
    RS = b({ value: _().nullable() }),
    zf = "playwright_locator_text_content";
  function Vf(e) {
    return new K(zf, Gf, e);
  }
  var Hf = b({
      browser_id: _(),
      tab_id: _(),
      selector: _(),
      timeout_ms: k().int().positive().optional(),
    }),
    OS = b({ value: _() }),
    Wf = "playwright_locator_inner_text";
  function Kf(e) {
    return new K(Wf, Hf, e);
  }
  var Zf = b({
      browser_id: _(),
      tab_id: _(),
      selector: _(),
      name: _(),
      timeout_ms: k().int().positive().optional(),
    }),
    PS = b({ value: _().nullable() }),
    Jf = "playwright_locator_get_attribute";
  function Xf(e) {
    return new K(Jf, Zf, e);
  }
  var Yf = b({
      browser_id: _(),
      tab_id: _(),
      selector: _(),
      relative_selector: _().optional(),
      timeout_ms: k().int().positive().optional(),
    }),
    Qf = b({
      attributes: zt(_()),
      inner_text: _(),
      text_content: _().nullable(),
    }),
    MS = b({ values: N(Qf.nullable()) }),
    ep = "playwright_locator_read_all";
  function tp(e) {
    return new K(ep, Yf, e);
  }
  var rp = z(["load", "domcontentloaded", "networkidle", "commit"]),
    LS = b({
      browser_id: _(),
      tab_id: _(),
      url: _(),
      wait_until: rp.optional(),
      timeout_ms: k().int().positive().optional(),
    }),
    DS = b({ url: _().optional() }),
    np = z(["load", "domcontentloaded", "networkidle"]),
    xS = b({
      browser_id: _(),
      tab_id: _(),
      state: np.optional(),
      timeout_ms: k().int().positive().optional(),
    }),
    NS = b({}),
    US = b({
      browser_id: _(),
      tab_id: _(),
      timeout_ms: k().int().nonnegative(),
    }),
    FS = b({}),
    BS = b({ browser_id: _(), tab_id: _() }),
    $S = b({ dom_snapshot: _() }),
    ip = b({ x: k(), y: k(), width: k(), height: k() }),
    ap = b({
      primary: _().nullable().optional(),
      candidates: N(_()),
      frameSelectors: N(_()).optional(),
    }),
    sp = b({
      nodeId: k().int().positive().nullable().optional(),
      tagName: _(),
      role: _().nullable().optional(),
      visibleText: _().nullable().optional(),
      ariaName: _().nullable().optional(),
      testId: _().nullable().optional(),
      boundingBox: ip.nullable().optional(),
      preview: _(),
      selector: ap,
    }),
    jS = b({
      browser_id: _(),
      tab_id: _(),
      x: k(),
      y: k(),
      include_non_interactable: J().optional(),
    }),
    qS = N(sp),
    GS = b({
      browser_id: _(),
      tab_id: _(),
      x: k(),
      y: k(),
      include_non_interactable: J().optional(),
    }),
    zS = b({ data: _() }),
    VS = b({
      browser_id: _(),
      tab_id: _(),
      timeout_ms: k().int().positive().optional(),
    }),
    HS = b({ download_id: _() }),
    WS = b({
      browser_id: _(),
      tab_id: _(),
      download_id: _(),
      timeout_ms: k().int().positive().optional(),
    }),
    KS = b({ path: _().nullable() }),
    ZS = b({
      browser_id: _(),
      tab_id: _(),
      timeout_ms: k().int().positive().optional(),
    }),
    JS = b({ file_chooser_id: _(), is_multiple: J() }),
    XS = b({
      browser_id: _(),
      tab_id: _(),
      file_chooser_id: _(),
      files: N(_()),
      timeout_ms: k().int().positive().optional(),
    }),
    YS = b({}),
    fo = Object.getOwnPropertyDescriptor(RegExp.prototype, "source")?.get;
  function Ei(e) {
    if (e == null || typeof e != "object" || !fo) return !1;
    try {
      return Reflect.apply(fo, e, []), !0;
    } catch {
      return !1;
    }
  }
  function Vt(e) {
    if (e == null || typeof e != "object") return !1;
    const t = Object.getPrototypeOf(e);
    return t === null || Object.getPrototypeOf(t) === null;
  }
  function Ii(e, t) {
    const r = e instanceof Error ? e.message : String(e),
      n = new Error(`${r}
${t}`);
    return (
      e instanceof Error &&
        e.stack &&
        (n.stack = `${n.name}: ${n.message}
${e.stack}`),
      n
    );
  }
  function op(e, t) {
    const r = e instanceof Error ? e.message : String(e);
    return /strict mode violation/i.test(r)
      ? "multiple_matches"
      : /intercept|receives pointer events/i.test(r)
      ? "intercepted"
      : t.matchCount === 0
      ? "no_matches"
      : t.visibleCount === 0
      ? "no_visible_match"
      : "action_failed";
  }
  function po(e, t, r) {
    const n = lp(t),
      i = r === "all" ? "locator.evaluateAll" : "locator.evaluate";
    if (typeof e == "string") {
      if (e.length === 0) throw new Error(`${i} requires a pageFunction`);
      return `const arg = ${n};
return (${e});`;
    }
    if (typeof e == "function")
      return [
        `const arg = ${n};`,
        `const __playwrightEvaluate = (${e.toString()});`,
        `return await __playwrightEvaluate(${
          r === "all" ? "elements" : "element"
        }, arg);`,
      ].join(`
`);
    throw new Error(`${i} requires a string or function`);
  }
  function lp(e) {
    if (e === void 0) return "undefined";
    try {
      const t = JSON.stringify(e);
      if (t !== void 0) return t;
    } catch (t) {
      throw Ii(t, "playwright.evaluate arg must be JSON-serializable");
    }
    throw new Error("playwright.evaluate arg must be JSON-serializable");
  }
  function cp(e) {
    const t = Array.isArray(e) ? e : [e];
    if (!t.length)
      throw new Error("locator.selectOption requires at least one value");
    return t.map((r) => {
      if (typeof r == "string") return { value: r };
      if (!r || typeof r != "object")
        throw new Error(
          "locator.selectOption requires a string or { value?, label?, index? }"
        );
      const n = {};
      if (r.value !== void 0) {
        if (typeof r.value != "string")
          throw new Error("locator.selectOption value must be a string");
        n.value = r.value;
      }
      if (r.label !== void 0) {
        if (typeof r.label != "string")
          throw new Error("locator.selectOption label must be a string");
        n.label = r.label;
      }
      if (r.index !== void 0) {
        if (!Number.isInteger(r.index) || r.index < 0)
          throw new Error(
            "locator.selectOption index must be a non-negative integer"
          );
        n.index = r.index;
      }
      if (n.value === void 0 && n.label === void 0 && n.index === void 0)
        throw new Error(
          "locator.selectOption requires value, label, or index for each selection"
        );
      return n;
    });
  }
  var mo = Symbol("browserAuthSelectorDetails"),
    go = class se {
      #t;
      #r;
      #e;
      #n;
      #i;
      #a;
      #s;
      constructor({
        browserId: t,
        tabId: r,
        selector: n,
        transport: i,
        collectionReadCache: a,
        collectionReadIndex: s,
        collectionRelativeSelector: o,
      }) {
        (this.#t = t),
          (this.#r = r),
          (this.#e = n),
          (this.#n = i),
          (this.#i = a),
          (this.#a = s),
          (this.#s = o);
      }
      static browserAuthSelector(t) {
        return t[mo]();
      }
      [mo]() {
        return { browserId: this.#t, selector: this.#e, tabId: this.#r };
      }
      async click(t = {}) {
        try {
          await this.#n.send({
            command: sf({
              browser_id: this.#t,
              tab_id: this.#r,
              selector: this.#e,
              modifiers: t.modifiers,
              button: t.button,
              force: t.force,
              timeout_ms: t.timeoutMs,
            }),
            timeoutMs: t.timeoutMs,
          }),
            this.#i?.clear();
        } catch (r) {
          throw await this.actionError(
            r,
            "click",
            `waiting on click for selector ${this.#e}`
          );
        }
      }
      async dblclick(t = {}) {
        try {
          await this.#n.send({
            command: cf({
              browser_id: this.#t,
              tab_id: this.#r,
              selector: this.#e,
              modifiers: t.modifiers,
              button: t.button,
              force: t.force,
              timeout_ms: t.timeoutMs,
            }),
            timeoutMs: t.timeoutMs,
          }),
            this.#i?.clear();
        } catch (r) {
          throw await this.actionError(
            r,
            "dblclick",
            `waiting on dblclick for selector ${this.#e}`
          );
        }
      }
      async selectOption(t, { timeoutMs: r } = {}) {
        const n = cp(t);
        try {
          await this.#n.send({
            command: Of({
              browser_id: this.#t,
              tab_id: this.#r,
              selector: this.#e,
              selections: n,
              timeout_ms: r,
            }),
            timeoutMs: r,
          }),
            this.#i?.clear();
        } catch (i) {
          throw await this.actionError(
            i,
            "selectOption",
            `locator.selectOption failed for selector ${this.#e}`
          );
        }
      }
      async fill(t, { timeoutMs: r } = {}) {
        if (t == null) throw new Error("locator.fill requires a value");
        try {
          await this.#n.send({
            command: ho({
              browser_id: this.#t,
              tab_id: this.#r,
              selector: this.#e,
              value: t,
              replace: !0,
              timeout_ms: r,
            }),
            timeoutMs: r,
          }),
            this.#i?.clear();
        } catch (n) {
          throw await this.actionError(
            n,
            "fill",
            `locator.fill failed for selector ${this.#e}`
          );
        }
      }
      async type(t, { timeoutMs: r } = {}) {
        if (t == null) throw new Error("locator.type requires a value");
        try {
          await this.#n.send({
            command: ho({
              browser_id: this.#t,
              tab_id: this.#r,
              selector: this.#e,
              value: t,
              replace: !1,
              timeout_ms: r,
            }),
            timeoutMs: r,
          }),
            this.#i?.clear();
        } catch (n) {
          throw await this.actionError(
            n,
            "type",
            `locator.type failed for selector ${this.#e}`
          );
        }
      }
      async pressSequentially(t, r = {}) {
        if (t == null)
          throw new Error("locator.pressSequentially requires a value");
        try {
          await this.#n.send({
            command: bf({
              browser_id: this.#t,
              tab_id: this.#r,
              selector: this.#e,
              value: t,
              ...(r.timeoutMs == null ? {} : { timeout_ms: r.timeoutMs }),
            }),
            timeoutMs: r.timeoutMs,
          }),
            this.#i?.clear();
        } catch (n) {
          throw await this.actionError(
            n,
            "pressSequentially",
            `locator.pressSequentially failed for selector ${this.#e}`
          );
        }
      }
      async press(t, { timeoutMs: r } = {}) {
        if (t == null) throw new Error("locator.press requires a value");
        try {
          await this.#n.send({
            command: _f({
              browser_id: this.#t,
              tab_id: this.#r,
              selector: this.#e,
              value: t,
              timeout_ms: r,
            }),
            timeoutMs: r,
          }),
            this.#i?.clear();
        } catch (n) {
          throw await this.actionError(
            n,
            "press",
            `locator.press failed for selector ${this.#e}`
          );
        }
      }
      async setChecked(t, r = {}) {
        if (typeof t != "boolean")
          throw new Error("locator.setChecked requires a boolean");
        try {
          await this.#n.send({
            command: Lf({
              browser_id: this.#t,
              tab_id: this.#r,
              selector: this.#e,
              checked: t,
              force: r.force,
              timeout_ms: r.timeoutMs,
            }),
            timeoutMs: r.timeoutMs,
          }),
            this.#i?.clear();
        } catch (n) {
          throw await this.actionError(
            n,
            "setChecked",
            `locator.setChecked(${t}) failed for selector ${this.#e}`
          );
        }
      }
      async check(t = {}) {
        await this.setChecked(!0, t);
      }
      async uncheck(t = {}) {
        await this.setChecked(!1, t);
      }
      async waitFor({ state: t, timeoutMs: r }) {
        if (!t) throw new Error("locator.waitFor requires a state");
        try {
          await this.#n.send({
            command: Tf({
              browser_id: this.#t,
              tab_id: this.#r,
              selector: this.#e,
              state: t,
              timeout_ms: r,
            }),
            timeoutMs: r,
          });
        } catch (n) {
          throw await this.actionError(
            n,
            "waitFor",
            `locator.waitFor(${t}) timed out for selector ${this.#e}`
          );
        }
      }
      async count() {
        return (
          await this.#n.send({
            command: Af({
              browser_id: this.#t,
              tab_id: this.#r,
              selector: this.#e,
            }),
          })
        ).count;
      }
      async all() {
        const t = await this.count(),
          r = new up({
            browserId: this.#t,
            tabId: this.#r,
            selector: this.#e,
            transport: this.#n,
          });
        return Array.from(
          { length: t },
          (n, i) =>
            new se({
              browserId: this.#t,
              tabId: this.#r,
              selector: `${this.#e} >> nth=${i}`,
              transport: this.#n,
              collectionReadCache: r,
              collectionReadIndex: i,
            })
        );
      }
      async textContent({ timeoutMs: t } = {}) {
        const r = await this.cachedRead(t);
        return r
          ? r.text_content
          : (
              await this.#n.send({
                command: Vf({
                  browser_id: this.#t,
                  tab_id: this.#r,
                  selector: this.#e,
                  timeout_ms: t,
                }),
                timeoutMs: t,
              })
            ).value;
      }
      async innerText({ timeoutMs: t } = {}) {
        const r = await this.cachedRead(t);
        return r
          ? r.inner_text
          : (
              await this.#n.send({
                command: Kf({
                  browser_id: this.#t,
                  tab_id: this.#r,
                  selector: this.#e,
                  timeout_ms: t,
                }),
                timeoutMs: t,
              })
            ).value;
      }
      async getAttribute(t, { timeoutMs: r } = {}) {
        if (!t) throw new Error("locator.getAttribute requires a name");
        const n = await this.cachedRead(r);
        return n
          ? Object.prototype.hasOwnProperty.call(n.attributes, t)
            ? n.attributes[t] ?? null
            : null
          : (
              await this.#n.send({
                command: Xf({
                  browser_id: this.#t,
                  tab_id: this.#r,
                  selector: this.#e,
                  name: t,
                  timeout_ms: r,
                }),
                timeoutMs: r,
              })
            ).value;
      }
      async isVisible() {
        return (
          await this.#n.send({
            command: Nf({
              browser_id: this.#t,
              tab_id: this.#r,
              selector: this.#e,
            }),
          })
        ).value;
      }
      async isEnabled() {
        return (
          await this.#n.send({
            command: Bf({
              browser_id: this.#t,
              tab_id: this.#r,
              selector: this.#e,
            }),
          })
        ).value;
      }
      async allTextContents({ timeoutMs: t } = {}) {
        return (
          await this.#n.send({
            command: qf({
              browser_id: this.#t,
              tab_id: this.#r,
              selector: this.#e,
              timeout_ms: t,
            }),
            timeoutMs: t,
          })
        ).values;
      }
      async evaluate(t, r, n) {
        return (
          await this.#n.send({
            command: uo({
              browser_id: this.#t,
              script: po(t, r),
              selector: this.#e,
              tab_id: this.#r,
              timeout_ms: n?.timeoutMs,
            }),
            timeoutMs: n?.timeoutMs,
          })
        ).value;
      }
      async evaluateAll(t, r, n) {
        return (
          await this.#n.send({
            command: uo({
              browser_id: this.#t,
              script: po(t, r, "all"),
              selector: this.#e,
              selector_mode: "all",
              tab_id: this.#r,
              timeout_ms: n?.timeoutMs,
            }),
            timeoutMs: n?.timeoutMs,
          })
        ).value;
      }
      async actionError(t, r, n) {
        try {
          const i = await this.evaluateAll(
            (a) => ({
              matchCount: a.length,
              visibleCount: a.reduce(
                (s, o) => s + +(o.getClientRects().length > 0),
                0
              ),
              matches: a
                .slice(0, 5)
                .map((s) => ({
                  tag: s.tagName.toLowerCase(),
                  role: s.getAttribute("role"),
                  type: s.getAttribute("type"),
                  ariaLabel: s.getAttribute("aria-label"),
                  text: s.textContent?.trim().slice(0, 120) ?? "",
                  visible: s.getClientRects().length > 0,
                  disabled: "disabled" in s && !!s.disabled,
                })),
            }),
            void 0,
            { timeoutMs: 1e3 }
          );
          return Ii(
            t,
            `${n}
Locator diagnostics: ${JSON.stringify({
              kind: op(t, i),
              action: r,
              locator: this.#e,
              ...i,
              truncated: i.matchCount > i.matches.length,
            })}`
          );
        } catch {
          return Ii(t, n);
        }
      }
      async downloadMedia({ timeoutMs: t = 12e4 } = {}) {
        try {
          const r = await this.#n.send({
            command: hf({
              browser_id: this.#t,
              tab_id: this.#r,
              selector: this.#e,
              timeout_ms: t,
            }),
            timeoutMs: t,
          });
          return this.#i?.clear(), r.path;
        } catch (r) {
          throw await this.actionError(
            r,
            "downloadMedia",
            `locator.downloadMedia failed for selector ${this.#e}`
          );
        }
      }
      locator(t, r = {}) {
        if (!t) throw new Error("locator.locator requires a selector");
        return new se({
          browserId: this.#t,
          tabId: this.#r,
          selector: `${this.#e} >> ${t}`,
          transport: this.#n,
          collectionReadCache: this.#i,
          collectionReadIndex: this.#a,
          collectionRelativeSelector:
            this.#i && this.#a !== void 0 ? Ne(this.#s, t) : void 0,
        }).filter(r);
      }
      first() {
        return new se({
          browserId: this.#t,
          tabId: this.#r,
          selector: `${this.#e} >> nth=0`,
          transport: this.#n,
          collectionReadCache: this.#i,
          collectionReadIndex: this.#a,
          collectionRelativeSelector:
            this.#i && this.#a !== void 0 ? Ne(this.#s, "nth=0") : void 0,
        });
      }
      last() {
        return new se({
          browserId: this.#t,
          tabId: this.#r,
          selector: `${this.#e} >> nth=-1`,
          transport: this.#n,
          collectionReadCache: this.#i,
          collectionReadIndex: this.#a,
          collectionRelativeSelector:
            this.#i && this.#a !== void 0 ? Ne(this.#s, "nth=-1") : void 0,
        });
      }
      nth(t) {
        if (typeof t != "number")
          throw new Error("locator.nth requires a numeric index");
        return new se({
          browserId: this.#t,
          tabId: this.#r,
          selector: `${this.#e} >> nth=${t}`,
          transport: this.#n,
          collectionReadCache: this.#i,
          collectionReadIndex: this.#a,
          collectionRelativeSelector:
            this.#i && this.#a !== void 0 ? Ne(this.#s, `nth=${t}`) : void 0,
        });
      }
      and(t) {
        if (!(t instanceof se))
          throw new Error("locator.and requires a PlaywrightLocator");
        if (t.#t !== this.#t || t.#r !== this.#r)
          throw new Error("Locators must belong to the same tab");
        return new se({
          browserId: this.#t,
          tabId: this.#r,
          selector: `${this.#e} >> internal:and=${JSON.stringify(t.#e)}`,
          transport: this.#n,
        });
      }
      or(t) {
        if (!(t instanceof se))
          throw new Error("locator.or requires a PlaywrightLocator");
        if (t.#t !== this.#t || t.#r !== this.#r)
          throw new Error("Locators must belong to the same tab");
        return new se({
          browserId: this.#t,
          tabId: this.#r,
          selector: `${this.#e} >> internal:or=${JSON.stringify(t.#e)}`,
          transport: this.#n,
        });
      }
      filter(t = {}) {
        const r = [this.#e];
        if (
          (t.hasText !== void 0 &&
            r.push(`internal:has-text=${Xr(t.hasText, !1)}`),
          t.hasNotText !== void 0 &&
            r.push(`internal:has-not-text=${Xr(t.hasNotText, !1)}`),
          t.has !== void 0 &&
            (this.assertCompatibleLocator(t.has, "locator.filter has"),
            r.push(`internal:has=${JSON.stringify(t.has.#e)}`)),
          t.hasNot !== void 0 &&
            (this.assertCompatibleLocator(t.hasNot, "locator.filter hasNot"),
            r.push(`internal:has-not=${JSON.stringify(t.hasNot.#e)}`)),
          t.visible !== void 0)
        ) {
          if (typeof t.visible != "boolean")
            throw new Error("locator.filter visible must be a boolean");
          r.push(`visible=${t.visible}`);
        }
        const n = r.slice(1).join(" >> "),
          i = this.#i && this.#a !== void 0 && (!n || this.#s !== void 0);
        return new se({
          browserId: this.#t,
          tabId: this.#r,
          selector: r.join(" >> "),
          transport: this.#n,
          collectionReadCache: i ? this.#i : void 0,
          collectionReadIndex: i ? this.#a : void 0,
          collectionRelativeSelector: i ? Ne(this.#s, n) : void 0,
        });
      }
      getByRole(t, r = {}) {
        const n = dp(t, r);
        return new se({
          browserId: this.#t,
          tabId: this.#r,
          selector: `${this.#e} >> ${n}`,
          transport: this.#n,
          collectionReadCache: this.#i,
          collectionReadIndex: this.#a,
          collectionRelativeSelector:
            this.#i && this.#a !== void 0 ? Ne(this.#s, n) : void 0,
        });
      }
      getByText(t, r = {}) {
        const n = hp(t, r);
        return new se({
          browserId: this.#t,
          tabId: this.#r,
          selector: `${this.#e} >> ${n}`,
          transport: this.#n,
          collectionReadCache: this.#i,
          collectionReadIndex: this.#a,
          collectionRelativeSelector:
            this.#i && this.#a !== void 0 ? Ne(this.#s, n) : void 0,
        });
      }
      getByLabel(t, r = {}) {
        const n = fp(t, r);
        return new se({
          browserId: this.#t,
          tabId: this.#r,
          selector: `${this.#e} >> ${n}`,
          transport: this.#n,
          collectionReadCache: this.#i,
          collectionReadIndex: this.#a,
          collectionRelativeSelector:
            this.#i && this.#a !== void 0 ? Ne(this.#s, n) : void 0,
        });
      }
      getByPlaceholder(t, r = {}) {
        const n = pp(t, r);
        return new se({
          browserId: this.#t,
          tabId: this.#r,
          selector: `${this.#e} >> ${n}`,
          transport: this.#n,
          collectionReadCache: this.#i,
          collectionReadIndex: this.#a,
          collectionRelativeSelector:
            this.#i && this.#a !== void 0 ? Ne(this.#s, n) : void 0,
        });
      }
      getByTestId(t) {
        const r = mp(t);
        return new se({
          browserId: this.#t,
          tabId: this.#r,
          selector: `${this.#e} >> ${r}`,
          transport: this.#n,
          collectionReadCache: this.#i,
          collectionReadIndex: this.#a,
          collectionRelativeSelector:
            this.#i && this.#a !== void 0 ? Ne(this.#s, r) : void 0,
        });
      }
      async cachedRead(t) {
        return !this.#i || this.#a === void 0
          ? null
          : await this.#i.read({
              index: this.#a,
              relativeSelector: this.#s,
              timeoutMs: t,
            });
      }
      assertCompatibleLocator(t, r) {
        if (!(t instanceof se))
          throw new Error(`${r} requires a PlaywrightLocator`);
        if (t.#t !== this.#t || t.#r !== this.#r)
          throw new Error("Locators must belong to the same tab");
      }
    },
    up = class {
      #t;
      #r;
      #e;
      #n;
      #i = new Map();
      constructor({ browserId: e, tabId: t, selector: r, transport: n }) {
        (this.#t = e), (this.#r = t), (this.#e = r), (this.#n = n);
      }
      clear() {
        this.#i.clear();
      }
      async read({ index: e, relativeSelector: t, timeoutMs: r }) {
        const n = t ?? "";
        let i = this.#i.get(n);
        return (
          i ||
            ((i = this.#a(t, r).catch((a) => {
              throw (this.#i.delete(n), a);
            })),
            this.#i.set(n, i)),
          (await i)[e] ?? null
        );
      }
      async #a(e, t) {
        return (
          await this.#n.send({
            command: tp({
              browser_id: this.#t,
              tab_id: this.#r,
              selector: this.#e,
              relative_selector: e,
              timeout_ms: t,
            }),
            timeoutMs: t,
          })
        ).values;
      }
    };
  function Ne(e, t) {
    return e ? (t ? `${e} >> ${t}` : e) : t || void 0;
  }
  function _o(e) {
    const t = e;
    return e.unicode || t.unicodeSets
      ? String(e)
      : String(e)
          .replace(/(^|[^\\])(\\\\)*(["'`])/g, "$1$2\\\\$3")
          .replace(/>>/g, "\\>\\>");
  }
  function Xr(e, t) {
    return typeof e != "string"
      ? _o(e)
      : `${JSON.stringify(e)}${t ? "s" : "i"}`;
  }
  function Ai(e, t) {
    return typeof e != "string"
      ? _o(e)
      : `"${e.replace(/\\/g, "\\\\").replace(/["]/g, '\\"')}"${t ? "s" : "i"}`;
  }
  function dp(e, t) {
    if (!e) throw new Error("getByRole requires a role");
    const r = [];
    return (
      t.name !== void 0 && r.push(`[name=${Ai(t.name, !!t.exact)}]`),
      `internal:role=${e}${r.join("")}`
    );
  }
  function hp(e, t) {
    if (typeof e != "string" && !Ei(e))
      throw new Error("getByText requires a string or RegExp");
    return `internal:text=${Xr(e, !!t.exact)}`;
  }
  function fp(e, t) {
    if (typeof e != "string" && !Ei(e))
      throw new Error("getByLabel requires a string or RegExp");
    return `internal:label=${Xr(e, !!t.exact)}`;
  }
  function pp(e, t) {
    if (typeof e != "string" && !Ei(e))
      throw new Error("getByPlaceholder requires a string or RegExp");
    return `internal:attr=[placeholder=${Ai(e, !!t.exact)}]`;
  }
  function mp(e) {
    if (!e) throw new Error("getByTestId requires a testId");
    return `internal:testid=[data-testid=${Ai(e, !0)}]`;
  }
  var Ci = class {
      constructor(e, t, r, n) {
        (this.transport = e),
          (this.browserId = t),
          (this.documentationApi = r),
          (this.info = n);
      }
      get id() {
        return this.info.id;
      }
      async documentation() {
        return await this.documentationApi.get(
          `capabilities/browser/${this.id}`
        );
      }
    },
    Ht = class {
      constructor(e, t, r, n, i) {
        (this.transport = e),
          (this.browserId = t),
          (this.tabId = r),
          (this.documentationApi = n),
          (this.info = i);
      }
      get id() {
        return this.info.id;
      }
      async documentation() {
        return await this.documentationApi.get(`capabilities/tab/${this.id}`);
      }
    };
  function ki({ capability: e, info: t, internalOnly: r }) {
    return {
      capability: e,
      create: (n) => new e({ ...n, info: t }),
      id: t.id,
      info: t,
      ...(r == null ? {} : { internalOnly: r }),
    };
  }
  function Wt({ capability: e, info: t, internalOnly: r }) {
    return {
      capability: e,
      create: (n) => new e({ ...n, info: t }),
      id: t.id,
      info: t,
      ...(r == null ? {} : { internalOnly: r }),
    };
  }
  var gp = z([
      "captcha_failed",
      "access_denied",
      "challenge_loop",
      "unexpected_bot_error",
    ]),
    _p = b({ reason: gp }),
    vp = "tab_bot_detection_report",
    vo = _p.extend({ browser_id: _(), tab_id: _() }),
    wp = b({ status: re("reported"), hostname: _().nullable() });
  function bp(e) {
    return new K(vp, vo, e);
  }
  var yp = {
      id: "botDetection",
      description:
        "Use when the current tab is blocked by bot detection, a failed CAPTCHA, a hard access denial, or a repeated challenge/login loop.",
    },
    Sp = class extends Ht {
      constructor({
        browserId: e,
        documentation: t,
        info: r,
        tabId: n,
        transport: i,
      }) {
        super(i, e, n, t, r);
      }
      async report(e) {
        const t = vo.parse({
            ...e,
            browser_id: this.browserId,
            tab_id: this.tabId,
          }),
          r = await this.transport.send({ command: bp(t) });
        return wp.parse(r);
      }
    },
    Tp = Wt({ capability: Sp, info: yp }),
    wo = b({
      session_id: _().min(1).optional(),
      target_id: _().min(1).optional(),
    }).refine(
      (e) => (e.session_id == null) != (e.target_id == null),
      "CDP target must provide exactly one of session_id or target_id."
    ),
    Ep = b({
      extensionId: _().optional(),
      sessionId: _().optional(),
      tabId: k().int().optional(),
      targetId: _().optional(),
    }),
    Ip = b({
      sequence: k().int().positive(),
      source: Ep,
      method: _().min(1),
      params: zt(_(), xe()).optional(),
    }),
    Ap = "tab_cdp_call",
    Cp = b({
      browser_id: _(),
      tab_id: _(),
      method: _().min(1),
      params: zt(_(), xe()).optional(),
      target: wo.optional(),
      timeout_ms: k().int().positive().optional(),
    }),
    kp = xe();
  function Rp(e) {
    return new K(Ap, Cp, e);
  }
  var Op = "tab_cdp_events",
    Pp = b({
      after_sequence: k().int().nonnegative().optional(),
      browser_id: _(),
      limit: k().int().positive().max(1e3).optional(),
      methods: N(_().min(1)).min(1).optional(),
      tab_id: _(),
      target: wo.optional(),
      timeout_ms: k().int().nonnegative().optional(),
    }),
    Mp = b({
      cursor: k().int().nonnegative(),
      events: N(Ip),
      hasMore: J(),
      truncated: J(),
    });
  function Lp(e) {
    return new K(Op, Pp, e);
  }
  var Dp = {
      id: "cdp",
      description:
        "Send raw Chrome DevTools Protocol commands and read debugger events through a supported tab for developer use cases.",
    },
    xp = 2e3,
    Np = class extends Ht {
      constructor({
        browserId: e,
        documentation: t,
        info: r,
        tabId: n,
        transport: i,
      }) {
        super(i, e, n, t, r);
      }
      async send(e, t, r) {
        const n = await this.transport.send({
          command: Rp({
            browser_id: this.browserId,
            method: e,
            params: t,
            tab_id: this.tabId,
            target: bo(r?.target),
            timeout_ms: r?.timeoutMs,
          }),
          timeoutMs: r?.timeoutMs,
        });
        return kp.parse(n);
      }
      async readEvents(e) {
        const t = await this.transport.send({
          command: Lp({
            after_sequence: e?.afterSequence,
            browser_id: this.browserId,
            limit: e?.limit,
            methods: e?.methods,
            tab_id: this.tabId,
            target: bo(e?.target),
            timeout_ms: e?.timeoutMs,
          }),
          timeoutMs: Fp(e?.timeoutMs),
        });
        return Mp.parse(t);
      }
    },
    Up = Wt({ capability: Np, info: Dp });
  function bo(e) {
    if (e != null) return { session_id: e.sessionId, target_id: e.targetId };
  }
  function Fp(e) {
    return e != null && e > 0 ? e + xp : void 0;
  }
  var yo = /^[A-Za-z0-9_-]{1,48}$/,
    So = new Set(["__proto__", "constructor", "prototype"]),
    Bp = b({
      id: _()
        .regex(yo)
        .refine((e) => !So.has(e)),
      label: _(),
      type: _().min(1),
      autocomplete: _().nullable().optional(),
      required: J(),
      selector: _(),
    }),
    $p = b({ selector: _(), action: z(["click", "press_enter"]) }),
    jp = b({
      id: _()
        .regex(yo)
        .refine((e) => !So.has(e)),
      label: _().trim().min(1).max(120),
      selector: _().optional(),
      field_ids: N(_()).max(6).optional(),
    }).refine(
      (e) => (e.selector != null) != (e.field_ids?.length ?? 0) > 0,
      "browser auth options require either a selector or credential fields"
    ),
    qp = b({
      origin: _(),
      fields: N(Bp).max(6),
      options: N(jp).min(2).max(10).optional(),
      qr_code: re(!0).optional(),
      submit: $p.optional(),
      otpHandle: _().min(1).max(16384).optional(),
    }).refine(
      (e) => e.fields.length > 0 || e.options != null || e.qr_code === !0,
      "browser auth requests require credential fields, sign-in options, or a QR code"
    ),
    Gp = "tab_browser_auth_handoff",
    zp = qp.and(b({ browser_id: _(), tab_id: _() })),
    To = b({
      outcome: z(["origin_changed", "submission_failed"]),
      reason: z([
        "request_url_invalid",
        "request_scheme",
        "request_origin",
        "paused_iframe",
        "iframe_origin",
        "child_frame_origin",
        "other",
      ]),
      request_class: z(["main_document", "background", "other"]),
      submission_phase: z(["pending", "settled", "not_applicable"]),
    }),
    Vp = b({
      sequence: k().int().min(0).max(65535),
      kind: z([
        "prompt_completed",
        "field_fill_started",
        "field_fill_completed",
        "field_fill_uncertain",
        "url_changed",
        "document_changed",
        "frame_changed",
        "reinspection_started",
        "reinspection_succeeded",
        "reinspection_failed",
        "site_request",
        "site_navigation",
        "site_submission_verified",
        "submit_started",
        "attempt_completed",
      ]),
      phase: z(["prompt", "filling", "before_submit", "submitting", "settled"]),
      field_index: k().int().min(0).max(63).optional(),
      reinspection: k().int().min(1).max(3).optional(),
      outcome: z([
        "submitted",
        "unavailable",
        "origin_changed",
        "page_changed",
        "locator_invalid",
        "submission_failed",
        "prompt_changed",
      ]).optional(),
      request_class: z(["main_document", "background"]).optional(),
      method: z(["get", "post", "other"]).optional(),
      origin_relation: z(["same", "cross", "other"]).optional(),
    }),
    Hp = b({
      schema_version: re(1),
      request_id: _().uuid(),
      submission_mode: z(["ordinary", "private"]),
      first_rejection: To.optional(),
      terminal_rejection: To.optional(),
      attempt_events: N(Vp).max(64).optional(),
      dropped_attempt_events: k().int().min(0).max(65535).optional(),
    }),
    Wp = b({
      status: z([
        "submitted",
        "declined",
        "cancelled",
        "unavailable",
        "expired",
        "origin_changed",
        "page_changed",
        "locator_invalid",
        "submission_failed",
      ]),
      locator_error: b({
        field_id: _(),
        reason: re("not_user_visible"),
      }).optional(),
      selected_option: _().optional(),
      reason: re("user_took_over").optional(),
      submission_diagnostics: Hp.optional(),
    });
  function Kp(e) {
    return new K(Gp, zp, e);
  }
  var Zp = {
      id: "browserAuth",
      description:
        "MUST read its documentation before the first interaction with any authentication or sign-in flow required for the task. Covers method selection, secure user-provided credentials, and post-authentication verification and recovery.",
    },
    Jp = class extends Ht {
      constructor({
        browserId: e,
        documentation: t,
        info: r,
        tabId: n,
        transport: i,
      }) {
        super(i, e, n, t, r);
      }
      async request(e) {
        const t = Yp(e, { browserId: this.browserId, tabId: this.tabId }),
          r = Kp({ ...t, browser_id: this.browserId, tab_id: this.tabId });
        r.parse();
        const n = await this.transport.send({ command: r });
        return Wp.parse(n);
      }
    },
    Xp = Wt({ capability: Jp, info: Zp });
  function Yp(e, t) {
    const r = {
      origin: e.origin,
      otpHandle: e.otpHandle,
      fields: e.fields.map((n) => {
        const i = {
          id: n.id,
          label: n.label,
          type: n.type,
          required: n.required,
          selector: Ri(n.selector, t),
        };
        return (
          n.autocomplete !== void 0 && (i.autocomplete = n.autocomplete), i
        );
      }),
      ...(e.qr_code === !0 ? { qr_code: !0 } : {}),
    };
    return (
      e.options != null &&
        (r.options = e.options.map((n) => ({
          id: n.id,
          label: n.label,
          ...(n.field_ids == null ? {} : { field_ids: n.field_ids }),
          ...(n.selector == null ? {} : { selector: Ri(n.selector, t) }),
        }))),
      e.submit != null &&
        (r.submit = {
          action: e.submit.action,
          selector: Ri(e.submit.selector, t),
        }),
      r
    );
  }
  function Ri(e, t) {
    if (typeof e == "string") return e;
    if (!(e instanceof go))
      throw new Error(
        "browserAuth selector must be a string or PlaywrightLocator"
      );
    const r = go.browserAuthSelector(e);
    if (r.browserId !== t.browserId || r.tabId !== t.tabId)
      throw new Error("browserAuth selector locator must belong to this tab");
    return r.selector;
  }
  var Eo = z(["font", "image", "script", "stylesheet", "video", "other"]),
    Io = z(["font", "image", "stylesheet", "video"]),
    Qp = b({
      kind: z(["attribute", "computedStyle", "resource"]),
      nodeId: k().int().positive().optional(),
      property: _().optional(),
    }),
    em = b({ id: _(), kind: Eo, name: _(), sources: N(Qp), url: _() }),
    tm = b({ id: _(), markup: _(), name: _() }),
    rm = b({
      assets: N(em),
      id: _(),
      inlineSvgs: N(tm),
      pageUrl: _().nullable(),
      summary: b({
        byKind: zt(Eo, k().int().nonnegative()),
        inlineSvgCount: k().int().nonnegative(),
        totalCount: k().int().nonnegative(),
      }),
    }),
    nm = b({
      assetIds: N(_()).optional(),
      inventoryId: _(),
      kinds: N(Io).optional(),
    }),
    im = b({
      contentType: _().nullable(),
      id: _(),
      kind: Io,
      name: _(),
      path: _(),
      url: _(),
    }),
    am = b({
      contentType: _().nullable(),
      id: _(),
      name: _(),
      reason: _(),
      url: _(),
    }),
    sm = b({
      assets: N(im),
      directoryPath: _(),
      failures: N(am),
      manifestPath: _(),
      summary: b({
        downloadedCount: k().int().nonnegative(),
        elapsedMs: k().nonnegative(),
        failedCount: k().int().nonnegative(),
        requestedCount: k().int().nonnegative(),
      }),
    }),
    om = "tab_page_assets_bundle",
    lm = nm.extend({ browser_id: _(), tab_id: _() }),
    cm = sm;
  function um(e) {
    return new K(om, lm, e);
  }
  var dm = "tab_page_assets_list",
    hm = b({ browser_id: _(), tab_id: _() }),
    fm = rm;
  function pm(e) {
    return new K(dm, hm, e);
  }
  var mm = {
      id: "pageAssets",
      description:
        "List assets already observed in the current page state and bundle selected assets into a temporary local artifact.",
    },
    gm = class extends Ht {
      constructor({
        browserId: e,
        documentation: t,
        info: r,
        tabId: n,
        transport: i,
      }) {
        super(i, e, n, t, r);
      }
      async list() {
        const e = await this.transport.send({
          command: pm({ browser_id: this.browserId, tab_id: this.tabId }),
        });
        return fm.parse(e);
      }
      async bundle(e) {
        const t = await this.transport.send({
          command: um({ ...e, browser_id: this.browserId, tab_id: this.tabId }),
        });
        return cm.parse(t);
      }
    },
    _m = Wt({ capability: gm, info: mm }),
    Ao = {
      id: "webmcp",
      description:
        "Fetch page-defined WebMCP tools bound to the current document, then call them through the returned object.",
    };
  function vm(e) {
    return {
      name: e.name,
      call_name: e.call_name,
      ...(e.title == null ? {} : { title: e.title }),
      ...(e.description == null ? {} : { description: e.description }),
      inputSchema: e.input_schema,
      ...(e.annotations == null ? {} : { annotations: e.annotations }),
      ...(e.origin == null ? {} : { origin: e.origin }),
      ...(e.pageUrl == null ? {} : { pageUrl: e.pageUrl }),
    };
  }
  var wm = class extends Ht {
    constructor({
      browserId: e,
      documentation: t,
      info: r,
      tabId: n,
      transport: i,
    }) {
      super(i, e, n, t, r);
    }
    async fetchTools() {
      const e = jh.parse(
          await this.transport.send({
            command: Gh({ browser_id: this.browserId, tab_id: this.tabId }),
          })
        ),
        t = e.tools.map(vm),
        r = new Map(e.tools.map((i) => [i.call_name, i])),
        n = bm(t);
      return Object.freeze({
        description: () => n,
        call: async (i, a, s) => {
          const o = i.trim(),
            l = r.get(o);
          if (l == null)
            throw new Error(
              `WebMCP tool ${JSON.stringify(
                o
              )} is not available in this snapshot. Call fetchTools() again.`
            );
          return (
            await this.transport.send({
              command: Hh({
                browser_id: this.browserId,
                tab_id: this.tabId,
                tool_name: l.name,
                tool_description: l.description,
                tool_title: l.title,
                registration_id: l.registration_id,
                input: a,
                ...(s?.timeoutMs == null ? {} : { timeout_ms: s.timeoutMs }),
              }),
            })
          ).result;
        },
      });
    }
  };
  function bm(e) {
    return e.length === 0
      ? "No WebMCP tools are available in this document."
      : [
          "WebMCP tools available in this document:",
          JSON.stringify(
            e.map(({ call_name: t, ...r }) => ({ ...r, name: t })),
            null,
            2
          ),
          "Call tools.call(name, input) to invoke one.",
        ].join(`
`);
  }
  var ym = Wt({ capability: wm, info: Ao }),
    Sm = [Up, Tp, Xp, _m, ym],
    QS = Tm(Sm);
  function Tm(e) {
    return new Map(e.map((t) => [t.id, t.create]));
  }
  var Co = We({
      PayloadSchema: () => Kt,
      ResultSchema: () => Oi,
      commandType: () => Yr,
      create: () => ko,
    }),
    Yr = "browser_management_call",
    Kt = b({ args: N(xe()), browser_id: _(), method: _(), namespace: _() }),
    Oi = b({ value: xe() });
  function ko(e) {
    return new K(Yr, Kt, e);
  }
  var Ro = We({
      AuditChangeSchema: () => Oo,
      PayloadSchema: () => Pi,
      ResultSchema: () => Mi,
      commandType: () => Qr,
      create: () => Po,
    }),
    Qr = "browser_management_get_audit_trail",
    Pi = Kt.pick({ browser_id: !0 }),
    Oo = Kt.omit({ browser_id: !0 }).extend({
      before: b({
        bookmarks: N(
          b({
            id: _(),
            index: k().optional(),
            parentId: _().optional(),
            title: _(),
            url: _().optional(),
          })
        ),
        tabLayout: b({
          groups: N(
            b({
              collapsed: J(),
              color: _(),
              id: k(),
              title: _().optional(),
              windowId: k(),
            })
          ),
          tabs: N(
            b({
              autoDiscardable: J(),
              groupId: k(),
              id: k(),
              index: k(),
              pinned: J(),
              url: _().optional(),
              windowId: k(),
            })
          ),
        }),
        windows: N(
          b({
            focused: J(),
            height: k().optional(),
            id: k(),
            left: k().optional(),
            state: _().optional(),
            top: k().optional(),
            width: k().optional(),
          })
        ),
      }).partial(),
      createdAt: k(),
      result: io([k(), b({ id: _() })]).optional(),
    }),
    Mi = b({ changes: N(Oo) });
  function Po(e) {
    return new K(Qr, Pi, e);
  }
  var Em = We({ Call: () => Co, GetAuditTrail: () => Ro, commands: () => Im }),
    Im = { [Yr]: Co, [Qr]: Ro },
    Am = {
      id: "management",
      description:
        "Organize windows, tabs, tab groups, and bookmarks. Use only for user-requested browser organization.",
    },
    Cm = class extends Ci {
      constructor({ browserId: e, documentation: t, info: r, transport: n }) {
        super(n, e, t, r),
          (this.windows = this.createNamespace("windows")),
          (this.tabs = this.createNamespace("tabs")),
          (this.tabGroups = this.createNamespace("tabGroups")),
          (this.bookmarks = this.createNamespace("bookmarks"));
      }
      async getAuditTrail() {
        const e = await this.transport.send({
          command: Po({ browser_id: this.browserId }),
        });
        return Mi.parse(e);
      }
      async invoke(e, t, ...r) {
        const n = await this.transport.send({
          command: ko({
            args: r,
            browser_id: this.browserId,
            method: t,
            namespace: e,
          }),
        });
        return Oi.parse(n).value;
      }
      createNamespace(e) {
        return new Proxy(
          {},
          {
            get: (t, r) => {
              if (
                !(
                  typeof r != "string" ||
                  r === "then" ||
                  r === "toJSON" ||
                  r in Object.prototype
                )
              )
                return (...n) => this.invoke(e, r, ...n);
            },
          }
        );
      }
    },
    Mo = ki({ capability: Cm, info: Am }),
    km = We({
      PayloadSchema: () => Lo,
      ResultSchema: () => Do,
      commandType: () => Li,
      create: () => xo,
    }),
    Li = "browser_visibility_get",
    Lo = b({ browser_id: _() }),
    Do = b({ visible: J() });
  function xo(e) {
    return new K(Li, Lo, e);
  }
  var Rm = We({
      PayloadSchema: () => No,
      ResultSchema: () => Uo,
      commandType: () => Di,
      create: () => Fo,
    }),
    Di = "browser_visibility_set",
    No = b({ browser_id: _(), visible: J() }),
    Uo = b({});
  function Fo(e) {
    return new K(Di, No, e);
  }
  var eT = { [Li]: km, [Di]: Rm },
    Om = {
      id: "visibility",
      description:
        "Use to show or hide the browser to the user, and to determine the browser's current visibility. Keep browser work in the background unless the user asks to see it or live viewing is useful. When the browser should be visible, call set(true).",
    },
    Pm = class extends Ci {
      constructor({ browserId: e, documentation: t, info: r, transport: n }) {
        super(n, e, t, r);
      }
      async set(e) {
        const t = await this.transport.send({
          command: Fo({ browser_id: this.browserId, visible: e }),
        });
        Uo.parse(t);
      }
      async get() {
        const e = await this.transport.send({
          command: xo({ browser_id: this.browserId }),
        });
        return Do.parse(e).visible;
      }
    },
    Mm = ki({ capability: Pm, info: Om }),
    Bo = We({
      PayloadSchema: () => xi,
      ResultSchema: () => Ni,
      commandType: () => en,
      create: () => $o,
    }),
    en = "browser_viewport_reset",
    xi = b({ browser_id: _() }),
    Ni = b({});
  function $o(e) {
    return new K(en, xi, e);
  }
  var jo = We({
      PayloadSchema: () => Ui,
      ResultSchema: () => Fi,
      commandType: () => tn,
      create: () => qo,
    }),
    tn = "browser_viewport_set",
    Ui = b({
      browser_id: _(),
      height: k().int().positive(),
      width: k().int().positive(),
    }),
    Fi = b({});
  function qo(e) {
    return new K(tn, Ui, e);
  }
  var Lm = We({ Reset: () => Bo, Set: () => jo, commands: () => Dm }),
    Dm = { [en]: Bo, [tn]: jo },
    xm = {
      id: "viewport",
      description:
        "Controls an explicit browser viewport override for responsive or device-size testing. Use it when a task calls for specific dimensions or breakpoint validation; otherwise leave it unset so the browser uses its normal viewport. Reset temporary overrides before finishing unless the user asked to keep them.",
    },
    Nm = class extends Ci {
      constructor({ browserId: e, documentation: t, info: r, transport: n }) {
        super(n, e, t, r);
      }
      async set(e) {
        const t = await this.transport.send({
          command: qo({ browser_id: this.browserId, ...e }),
        });
        Fi.parse(t);
      }
      async reset() {
        const e = await this.transport.send({
          command: $o({ browser_id: this.browserId }),
        });
        Ni.parse(e);
      }
    },
    Go = ki({ capability: Nm, info: xm }),
    Um = [Mo, Mm, Go],
    tT = Fm(Um);
  function Fm(e) {
    return new Map(e.map((t) => [t.id, t.create]));
  }
  var rT = b({ side_effects: N(_()) }).passthrough();
  async function Bm({ expectedUrl: e, read: t, tabId: r }) {
    const n = new URL(e);
    if (n.protocol !== "https:" && n.protocol !== "http:")
      throw new Error("Tab reads require an HTTP or HTTPS URL");
    const i = await chrome.tabs.get(r);
    if (i.incognito === !0 || i.url !== e) throw new Error(it);
    const a = await Zu(e, t, async (o, l, h) => {
        const [m] = await chrome.scripting.executeScript({
          args: l,
          func: o,
          target: { tabId: r },
          world: h,
        });
        return m?.result;
      }),
      s = await chrome.tabs.get(r);
    if (s.incognito === !0 || s.url !== e) throw new Error(it);
    return a ?? null;
  }
  var Bi = new Map(),
    $m = 1e3;
  async function zo(e) {
    if (await $i(e)) return !0;
    let t = Bi.get(e);
    return (
      t ||
        ((t = jm(e)),
        Bi.set(e, t),
        t.finally(() => {
          Bi.delete(e);
        })),
      await t
    );
  }
  async function $i(e) {
    try {
      return (
        (await ie(chrome.tabs.sendMessage(e, { type: "CONTENT_PING" })))?.ok ===
        !0
      );
    } catch {
      return !1;
    }
  }
  async function ie(e, t = $m) {
    let r;
    const n = new Promise((i) => {
      r = setTimeout(() => i(null), t);
    });
    try {
      return await Promise.race([e, n]);
    } finally {
      r !== void 0 && clearTimeout(r);
    }
  }
  async function jm(e) {
    try {
      if (
        (await ie(
          chrome.scripting.executeScript({
            files: ["content-scripts/codex.js"],
            injectImmediately: !0,
            target: { tabId: e },
          })
        )) == null
      )
        return !1;
    } catch {
      return !1;
    }
    return await $i(e);
  }
  var ji = 1e6,
    qm = ji + 4999,
    Gm = class {
      appliedRules;
      failureReported = !1;
      async synchronize(e, t = !1) {
        const r = chrome.declarativeNetRequest;
        let n = "check DNR permission";
        try {
          if (r == null) {
            if (e.size > 0)
              throw new Error(
                "The declarativeNetRequest permission is missing"
              );
            return null;
          }
          let i;
          t &&
            e.size > 0 &&
            ((n = "query existing tabs"),
            (i = new Set((await chrome.tabs.query({})).map((l) => l.id))));
          const a = new Map();
          for (const [l, h] of e) {
            if (!Number.isSafeInteger(l) || l < 0 || (i != null && !i.has(l)))
              continue;
            const m = a.get(h);
            m ? m.push(l) : a.set(h, [l]);
          }
          const s = [];
          for (const [l, h] of [...a].sort(([m], [d]) => m.localeCompare(d)))
            h.sort((m, d) => m - d),
              s.push(
                ...[
                  {
                    tabIds: h,
                    resourceTypes: [
                      r.ResourceType.MAIN_FRAME,
                      r.ResourceType.SUB_FRAME,
                      r.ResourceType.OBJECT,
                    ],
                  },
                  {
                    tabIds: h,
                    excludedInitiatorDomains: [chrome.runtime.id],
                    excludedResourceTypes: [
                      r.ResourceType.MAIN_FRAME,
                      r.ResourceType.SUB_FRAME,
                      r.ResourceType.OBJECT,
                    ],
                  },
                ].map((m, d) => ({
                  id: ji + s.length + d,
                  priority: 1,
                  action: {
                    type: r.RuleActionType.MODIFY_HEADERS,
                    requestHeaders: [
                      {
                        header: "x-browser-agent",
                        value: `ChatGPT/${l}`,
                        operation: r.HeaderOperation.SET,
                      },
                    ],
                  },
                  condition: m,
                }))
              );
          const o = JSON.stringify(s);
          return (
            (!t && this.appliedRules === o) ||
              ((n =
                s.length === 0
                  ? "remove session rules"
                  : "update session rules"),
              await r.updateSessionRules({
                removeRuleIds: await this.readOwnedRuleIds(),
                addRules: s,
              }),
              (this.appliedRules = o),
              (this.failureReported = !1)),
            null
          );
        } catch {
          return (
            (this.appliedRules = void 0),
            this.failureReported ||
              (console.error(
                "Controlled-tab request headers failed. Check the DNR permission. Retrying on the next lease change or heartbeat.",
                { operation: n }
              ),
              (this.failureReported = !0)),
            new Error(
              `Unable to ${n} for agent request headers. Retry the browser command.`
            )
          );
        }
      }
      async readOwnedRuleIds() {
        return (await chrome.declarativeNetRequest.getSessionRules())
          .filter(({ id: e }) => e >= ji && e <= qm)
          .map(({ id: e }) => e);
      }
    };
  function zm(e) {
    return e === "agent" || e === "user";
  }
  function Vm(e) {
    return e === "active" || e === "handoff";
  }
  function Hm(e) {
    return e === "handoff" || e === "deliverable";
  }
  function Vo(e) {
    if (e === null) return null;
    if (!e || typeof e != "object") return;
    const t = e;
    if (
      !(
        typeof t.width != "number" ||
        !Number.isInteger(t.width) ||
        t.width <= 0 ||
        typeof t.height != "number" ||
        !Number.isInteger(t.height) ||
        t.height <= 0
      )
    )
      return { height: t.height, width: t.width };
  }
  function Wm(e) {
    if (!e || typeof e != "object") return null;
    const t = e;
    if (
      typeof t.tabId != "number" ||
      !Number.isInteger(t.tabId) ||
      typeof t.sessionId != "string" ||
      typeof t.turnId != "string" ||
      !zm(t.origin) ||
      typeof t.claimedAt != "number" ||
      !Number.isFinite(t.claimedAt) ||
      (t.instanceId !== null && typeof t.instanceId != "string") ||
      !Vm(t.state)
    )
      return null;
    const r = Vo(t.viewportSize);
    return {
      tabId: t.tabId,
      sessionId: t.sessionId,
      turnId: t.turnId,
      origin: t.origin,
      claimedAt: t.claimedAt,
      instanceId: t.instanceId,
      state: t.state,
      requestHeaderEnabled:
        typeof t.requestHeaderEnabled == "boolean"
          ? t.requestHeaderEnabled
          : void 0,
      ...(Hm(t.mark) ? { mark: t.mark } : {}),
      ...(typeof t.isActiveHandoff == "boolean"
        ? { isActiveHandoff: t.isActiveHandoff }
        : {}),
      ...(r !== void 0 ? { viewportSize: r } : {}),
    };
  }
  function Km(e) {
    if (
      !e ||
      typeof e != "object" ||
      !("leases" in e) ||
      !e.leases ||
      typeof e.leases != "object" ||
      Array.isArray(e.leases)
    )
      return new Map();
    const t = new Map();
    for (const [r, n] of Object.entries(e.leases)) {
      const i = Number(r),
        a = Wm(n);
      !Number.isInteger(i) || a == null || a.tabId !== i || t.set(i, a);
    }
    return t;
  }
  function Zm(e) {
    if (
      !e ||
      typeof e != "object" ||
      !("pendingViewportSizes" in e) ||
      !e.pendingViewportSizes ||
      typeof e.pendingViewportSizes != "object" ||
      Array.isArray(e.pendingViewportSizes)
    )
      return new Map();
    const t = new Map();
    for (const [r, n] of Object.entries(e.pendingViewportSizes)) {
      if (!n || typeof n != "object") continue;
      const i = n,
        a = Vo(i.viewportSize);
      typeof i.turnId != "string" ||
        a === void 0 ||
        t.set(r, { turnId: i.turnId, viewportSize: a });
    }
    return t;
  }
  function Jm(e, t) {
    return (
      e != null &&
      e.tabId === t.tabId &&
      e.sessionId === t.sessionId &&
      e.turnId === t.turnId &&
      e.origin === t.origin &&
      e.claimedAt === t.claimedAt &&
      e.instanceId === t.instanceId &&
      e.state === t.state &&
      e.isActiveHandoff === t.isActiveHandoff
    );
  }
  var ze = class mr {
    static instance = null;
    leases = new Map();
    pendingViewportSizes = new Map();
    storageKey = "TAB_LEASES";
    storage;
    requestHeaders = new Gm();
    initializePromise = null;
    mutationQueue = Promise.resolve();
    storageLoaded = !1;
    listenersRegistered = !1;
    activeTabLeaseChangeHandlers = new Set();
    handleTabRemoved = (t) => {
      this.removeTab(t);
    };
    handleTabReplaced = (t, r) => {
      this.replaceTab(t, r);
    };
    static getInstance() {
      return mr.instance || (mr.instance = new mr()), mr.instance;
    }
    constructor(t = chrome.storage.session) {
      (this.storage = t), this.registerEventListeners();
    }
    async ensureInit() {
      this.initializePromise ||
        (this.initializePromise = this.loadFromStorage()),
        await this.initializePromise;
    }
    async reconcileRequestHeaders() {
      await this.ensureInit();
      const t = await this.mutate(() => !1, !0);
      if (t != null) throw t;
    }
    async getOwningSessionId(t) {
      await this.ensureInit(), await this.waitForPendingMutations();
      const r = this.leases.get(t);
      return r?.state === "active" ? r.sessionId : null;
    }
    async getActiveLease(t) {
      await this.ensureInit(), await this.waitForPendingMutations();
      const r = this.leases.get(t);
      return r?.state === "active" ? { ...r } : null;
    }
    async claimTabIfSourceLeaseMatches(t, r) {
      await this.ensureInit();
      const n = await Ce();
      let i = !1,
        a;
      const s = await this.mutate(() => {
        const o = this.leases.get(t.tabId);
        return t.state !== "active" ||
          o == null ||
          !Jm(o, t) ||
          this.leases.has(r)
          ? !1
          : ((a = o.requestHeaderEnabled),
            this.leases.set(r, {
              tabId: r,
              sessionId: t.sessionId,
              turnId: t.turnId,
              origin: "agent",
              claimedAt: Date.now(),
              instanceId: n,
              state: "active",
              requestHeaderEnabled: a,
              ...(Object.hasOwn(o, "viewportSize")
                ? { viewportSize: o.viewportSize }
                : {}),
            }),
            (i = !0),
            !0);
      });
      if (s != null && a !== void 0) throw s;
      return i;
    }
    subscribeActiveTabLeaseChanges(t) {
      return (
        this.activeTabLeaseChangeHandlers.add(t),
        () => {
          this.activeTabLeaseChangeHandlers.delete(t);
        }
      );
    }
    mightHaveActiveTabLease(t) {
      return !this.storageLoaded || this.leases.get(t)?.state === "active";
    }
    async claimTab(t, r, n, i, a) {
      await this.ensureInit();
      const s = await Ce(),
        o = await this.mutate(() => {
          const l = this.leases.get(n);
          if (l?.state === "active") {
            if (l.sessionId !== t)
              throw new Error(
                `Tab ${n} is already part of browser session ${l.sessionId}`
              );
            return l.turnId === r && l.instanceId === s
              ? !1
              : (this.leases.set(n, { ...l, turnId: r, instanceId: s }), !0);
          }
          return (
            this.leases.set(n, {
              tabId: n,
              sessionId: t,
              turnId: r,
              origin: i,
              claimedAt: Date.now(),
              instanceId: s,
              state: "active",
              requestHeaderEnabled: a,
            }),
            !0
          );
        });
      if (o != null && a !== void 0) throw o;
    }
    async setSessionRequestHeaderEnabled(t, r) {
      await this.ensureInit();
      const n = await this.mutate(() => {
        let i = !1;
        for (const [a, s] of this.leases)
          s.sessionId !== t ||
            s.requestHeaderEnabled === r ||
            (this.leases.set(a, { ...s, requestHeaderEnabled: r }), (i = !0));
        return i;
      });
      if (n != null) throw n;
    }
    async isClaimedBySession(t, r) {
      await this.ensureInit(), await this.waitForPendingMutations();
      const n = this.leases.get(r);
      return n?.state === "active" && n.sessionId === t;
    }
    async getSessionActiveLeases(t) {
      return await this.getSessionLeases(t, "active");
    }
    async getSessionHandoffLeases(t) {
      return await this.getSessionLeases(t, "handoff");
    }
    async setViewportSize(t, r, n, i) {
      await this.ensureInit(),
        await this.mutate(() => {
          if (n == null)
            return (
              this.pendingViewportSizes.set(t, { turnId: r, viewportSize: i }),
              !0
            );
          const a = this.leases.get(n);
          if (a?.state !== "active" || a.sessionId !== t || a.turnId !== r)
            throw new Error(`Tab ${n} is not part of browser session ${t}`);
          return (
            this.leases.set(n, { ...a, viewportSize: i }),
            this.pendingViewportSizes.delete(t),
            !0
          );
        });
    }
    async takeViewportSizeForAttach(t, r, n) {
      await this.ensureInit();
      let i;
      return (
        await this.mutate(() => {
          const a = this.leases.get(n);
          if (a?.state !== "active" || a.sessionId !== t)
            throw new Error(`Tab ${n} is not part of browser session ${t}`);
          if (Object.hasOwn(a, "viewportSize")) return (i = a.viewportSize), !1;
          const s = this.pendingViewportSizes.get(t);
          return s?.turnId !== r
            ? !1
            : ((i = s.viewportSize),
              this.pendingViewportSizes.delete(t),
              this.leases.set(n, { ...a, viewportSize: i }),
              !0);
        }),
        i
      );
    }
    async clearPendingViewportSize(t, r) {
      await this.ensureInit(),
        await this.mutate(() =>
          this.pendingViewportSizes.get(t)?.turnId !== r
            ? !1
            : this.pendingViewportSizes.delete(t)
        );
    }
    async setTabMark(t, r, n, i) {
      await this.ensureInit(),
        await this.mutate(() => {
          const a = this.leases.get(n);
          if (a?.state !== "active" || a.sessionId !== t || a.turnId !== r)
            throw new Error(`Tab ${n} is not part of browser session ${t}`);
          return a.mark === i
            ? !1
            : (this.leases.set(n, { ...a, mark: i }), !0);
        });
    }
    async replaceTurnMarks(t, r, n) {
      await this.ensureInit(),
        await this.mutate(() => {
          let i = !1;
          for (const [a, s] of this.leases) {
            if (s.state !== "active" || s.sessionId !== t || s.turnId !== r)
              continue;
            const o = n.get(a);
            if (s.mark === o) continue;
            const l = { ...s };
            delete l.mark,
              this.leases.set(a, o == null ? l : { ...l, mark: o }),
              (i = !0);
          }
          return i;
        });
    }
    async getSessionTabs(t) {
      const r = await this.getSessionActiveLeases(t),
        n = await Promise.all(
          [...r.keys()].map(async (s) => {
            try {
              return {
                tab: await chrome.tabs.get(s),
                tabId: s,
                state: "found",
              };
            } catch {
              return { tabId: s, state: "stale" };
            }
          })
        ),
        i = [],
        a = [];
      for (const s of n) s.state === "found" ? i.push(s.tab) : a.push(s.tabId);
      return a.length > 0 && (await this.releaseTabs(t, a)), i;
    }
    async updateActiveSessionTurn(t, r) {
      await this.ensureInit();
      const n = await Ce();
      await this.mutate(() => {
        let i = !1;
        for (const [a, s] of this.leases.entries()) {
          if (
            s.sessionId !== t ||
            s.state !== "active" ||
            (s.turnId === r && s.instanceId === n)
          )
            continue;
          const o = { ...s };
          delete o.mark,
            this.leases.set(a, {
              ...(s.turnId === r ? s : o),
              turnId: r,
              instanceId: n,
            }),
            (i = !0);
        }
        return i;
      });
    }
    async handoffTabs(t, r, n, i) {
      await this.ensureInit();
      const a = await Ce(),
        s = new Set(n);
      s.size !== 0 &&
        (await this.mutate(() => {
          let o = !1;
          for (const l of s) {
            const h = this.leases.get(l);
            if (h?.state !== "active" || h.sessionId !== t) continue;
            const m = { ...h };
            delete m.mark,
              this.leases.set(l, {
                ...m,
                turnId: r,
                instanceId: a,
                state: "handoff",
                ...(i.activeTabId === l ? { isActiveHandoff: !0 } : {}),
              }),
              (o = !0);
          }
          return o;
        }));
    }
    async resumeHandoffTabs(t, r, n) {
      await this.ensureInit();
      const i = await Ce(),
        a = new Set(n);
      if (a.size === 0) return [];
      const s = [];
      let o = !1;
      const l = await this.mutate(() => {
        let h = !1;
        for (const m of a) {
          const d = this.leases.get(m);
          d?.state !== "handoff" ||
            d.sessionId !== t ||
            (this.leases.set(m, {
              tabId: m,
              sessionId: t,
              turnId: r,
              origin: d.origin,
              claimedAt: d.claimedAt,
              instanceId: i,
              state: "active",
              requestHeaderEnabled: d.requestHeaderEnabled,
              ...(Object.hasOwn(d, "viewportSize")
                ? { viewportSize: d.viewportSize }
                : {}),
            }),
            s.push(m),
            (o ||= d.requestHeaderEnabled !== void 0),
            (h = !0));
        }
        return h;
      });
      if (l != null && o) throw l;
      return s;
    }
    async releaseTabs(t, r) {
      await this.ensureInit();
      const n = new Set(r);
      n.size !== 0 &&
        (await this.mutate(() => {
          let i = !1;
          for (const a of n)
            this.leases.get(a)?.sessionId === t &&
              (this.leases.delete(a), (i = !0));
          return i;
        }));
    }
    async releaseActiveTurn(t, r) {
      await this.ensureInit(),
        await this.mutate(() => {
          let n = !1;
          for (const [i, a] of this.leases.entries())
            a.sessionId !== t ||
              a.turnId !== r ||
              a.state !== "active" ||
              (this.leases.delete(i), (n = !0));
          return n;
        });
    }
    async getSessionLeases(t, r) {
      return (
        await this.ensureInit(),
        await this.waitForPendingMutations(),
        new Map(
          [...this.leases.entries()].filter(
            ([, n]) => n.sessionId === t && n.state === r
          )
        )
      );
    }
    registerEventListeners() {
      this.listenersRegistered ||
        ((this.listenersRegistered = !0),
        chrome.tabs.onRemoved?.addListener(this.handleTabRemoved),
        chrome.tabs.onReplaced?.addListener(this.handleTabReplaced));
    }
    async removeTab(t) {
      await this.ensureInit(), await this.mutate(() => this.leases.delete(t));
    }
    async replaceTab(t, r) {
      await this.ensureInit(),
        await this.mutate(() => {
          const n = this.leases.get(r);
          return n == null
            ? !1
            : (this.leases.delete(r),
              this.leases.set(t, { ...n, tabId: t }),
              !0);
        });
    }
    async loadFromStorage() {
      const t = this.readActiveTabIds();
      let r;
      try {
        r = await this.storage.get(this.storageKey);
      } catch (n) {
        throw (await this.requestHeaders.synchronize(new Map(), !0), n);
      }
      for (const [n, i] of Km(r[this.storageKey])) this.leases.set(n, i);
      for (const [n, i] of Zm(r[this.storageKey]))
        this.pendingViewportSizes.set(n, i);
      (this.storageLoaded = !0),
        await this.requestHeaders.synchronize(
          this.readActiveRequestHeaders(),
          !0
        ),
        this.publishActiveTabLeaseChanges(t);
    }
    async mutate(t, r = !1) {
      const n = async () => {
          const a = this.readActiveTabIds(),
            s = new Map(this.leases),
            o = new Map(this.pendingViewportSizes);
          try {
            (await t()) && (await this.saveToStorage());
          } catch (h) {
            this.leases.clear();
            for (const [m, d] of s) this.leases.set(m, d);
            this.pendingViewportSizes.clear();
            for (const [m, d] of o) this.pendingViewportSizes.set(m, d);
            throw h;
          }
          const l = await this.requestHeaders.synchronize(
            this.readActiveRequestHeaders(),
            r
          );
          return this.publishActiveTabLeaseChanges(a), l;
        },
        i = this.mutationQueue.then(n, n);
      return (
        (this.mutationQueue = i.then(
          () => {},
          () => {}
        )),
        await i
      );
    }
    async waitForPendingMutations() {
      await this.mutationQueue;
    }
    async saveToStorage() {
      const t = Object.fromEntries(this.pendingViewportSizes.entries()),
        r = {
          leases: Object.fromEntries(this.leases.entries()),
          ...(Object.keys(t).length > 0 ? { pendingViewportSizes: t } : {}),
        };
      await this.storage.set({ [this.storageKey]: r });
    }
    readActiveTabIds() {
      return new Set(
        [...this.leases.entries()]
          .filter(([, t]) => t.state === "active")
          .map(([t]) => t)
      );
    }
    readActiveRequestHeaders() {
      const t = new Map();
      for (const [r, n] of this.leases)
        n.state === "active" &&
          n.requestHeaderEnabled === !0 &&
          t.set(r, n.sessionId);
      return t;
    }
    publishActiveTabLeaseChanges(t) {
      const r = Xm(t, this.readActiveTabIds());
      if (r.length !== 0)
        for (const n of this.activeTabLeaseChangeHandlers)
          Promise.resolve(n(r)).catch(() => {});
    }
  };
  function Xm(e, t) {
    const r = new Set();
    for (const n of e) t.has(n) || r.add(n);
    for (const n of t) e.has(n) || r.add(n);
    return [...r];
  }
  var nT = "CODEX_OPEN_AGENT_BACKGROUND_POPUP",
    Zt = "__codexAgentPopupInterceptor",
    Ho = "__codexAgentBackgroundPopupRequest",
    be = new Set(),
    Xe = new Map(),
    Wo = !1;
  function Ym() {
    Wo ||
      ((Wo = !0),
      chrome.tabs.onRemoved?.addListener(sg),
      chrome.tabs.onReplaced?.addListener(ag),
      chrome.webNavigation?.onCommitted?.addListener(ng));
  }
  function Qm(e) {
    be.add(e);
  }
  async function Ko(e) {
    if (!be.has(e)) return !1;
    let t = Xe.get(e);
    return (
      t == null &&
        ((t = rg(e)),
        Xe.set(e, t),
        t.finally(() => {
          Xe.get(e) === t && Xe.delete(e);
        })),
      await t
    );
  }
  async function eg(e) {
    const t = be.delete(e),
      r = Xe.get(e);
    (!t && r == null) ||
      (r != null && (await r.catch(() => {})),
      Xe.delete(e),
      await Promise.allSettled([
        ie(
          chrome.scripting.executeScript({
            args: [Zt],
            func: ug,
            injectImmediately: !0,
            target: { allFrames: !0, tabId: e },
            world: "MAIN",
          })
        ),
        ie(
          chrome.scripting.executeScript({
            args: [Zt],
            func: dg,
            injectImmediately: !0,
            target: { allFrames: !0, tabId: e },
          })
        ),
      ]));
  }
  function tg(e) {
    return (
      e != null &&
      typeof e == "object" &&
      "type" in e &&
      e.type === "CODEX_OPEN_AGENT_BACKGROUND_POPUP" &&
      "url" in e &&
      typeof e.url == "string"
    );
  }
  async function rg(e) {
    if (!be.has(e)) return !1;
    try {
      const t = await ie(
        chrome.scripting.executeScript({
          args: [Zt],
          func: og,
          injectImmediately: !0,
          target: { allFrames: !0, tabId: e },
          world: "MAIN",
        })
      );
      return t != null && t.length > 0 && t.every((r) => r.result === !0)
        ? be.has(e)
        : !(
            (await ie(
              chrome.scripting.executeScript({
                args: [Zt, Ho, "CODEX_OPEN_AGENT_BACKGROUND_POPUP"],
                func: lg,
                injectImmediately: !0,
                target: { allFrames: !0, tabId: e },
              })
            )) == null ||
            !be.has(e) ||
            (await ie(
              chrome.scripting.executeScript({
                args: [Zt, Ho],
                func: cg,
                injectImmediately: !0,
                target: { allFrames: !0, tabId: e },
                world: "MAIN",
              })
            )) == null ||
            !be.has(e)
          );
    } catch {
      return !1;
    }
  }
  function ng(e) {
    be.has(e.tabId) && ig(e.tabId);
  }
  function ig(e) {
    const t = ze.getInstance();
    t.mightHaveActiveTabLease(e) &&
      t
        .getActiveLease(e)
        .then(async (r) => {
          r == null || !be.has(e) || (await Ko(e));
        })
        .catch(() => {});
  }
  function ag(e, t) {
    be.delete(t) && (be.add(e), Xe.delete(t));
  }
  function sg(e) {
    be.delete(e), Xe.delete(e);
  }
  function og(e) {
    return globalThis[e] != null;
  }
  function lg(e, t, r) {
    const n = globalThis;
    if (n[e] != null) return;
    let i = !1;
    const a = (o) => {
        o.isTrusted && (i = !1);
      },
      s = (o) => {
        if (
          !(o instanceof CustomEvent) ||
          navigator.userActivation?.isActive === !1
        )
          return;
        if (i) {
          o.preventDefault();
          return;
        }
        const l = o.detail;
        typeof l == "string" &&
          ((i = !0),
          chrome.runtime.sendMessage({ type: r, url: l }).catch(() => {}));
      };
    document.addEventListener("click", a, !0),
      document.addEventListener("keydown", a, !0),
      document.addEventListener(t, s),
      (n[e] = { listener: s, requestEvent: t, resetPopupAllowance: a });
  }
  function cg(e, t) {
    const r = globalThis;
    if (r[e] != null) return;
    const n = window.open,
      i = (h) => {
        if (navigator.userActivation?.isActive === !1) return;
        let m;
        try {
          m = new URL(h, document.baseURI);
        } catch {
          return;
        }
        if (!(m.protocol !== "http:" && m.protocol !== "https:"))
          return document.dispatchEvent(
            new CustomEvent(t, { cancelable: !0, detail: m.href })
          );
      },
      a = (h) =>
        ["_self", "_parent", "_top", "_unfencedtop"].includes(
          h.toLowerCase()
        ) ||
        Array.from(document.querySelectorAll("iframe, frame")).some(
          (m) => m.getAttribute("name") === h
        ),
      s = (h, m, d) => {
        if (h == null || h === "" || a(String(m ?? "")))
          return n.call(window, h, m, d);
        const f = i(String(h));
        return f == null
          ? n.call(window, h, m, d)
          : !f ||
            d
              ?.split(",")
              .some((c) =>
                /^(?:noopener|noreferrer)(?:\s*=\s*(?:1|yes|true))?$/i.test(
                  c.trim()
                )
              )
          ? null
          : { closed: !1, focus: () => {} };
      },
      o = (h) => {
        if (h.defaultPrevented || h.button !== 0) return;
        const m = h.composedPath().find((f) => f instanceof HTMLAnchorElement);
        if (
          m == null ||
          (m.hasAttribute("download") && m.origin === window.location.origin)
        )
          return;
        const d = m.target;
        d === "" || a(d) || (i(m.href) != null && h.preventDefault());
      },
      l = () => {
        window.removeEventListener("click", o),
          window.addEventListener("click", o, { once: !0 });
      };
    (window.open = s),
      window.addEventListener("click", l, !0),
      (r[e] = {
        captureClickListener: l,
        clickListener: o,
        interceptedOpen: s,
        originalOpen: n,
      });
  }
  function ug(e) {
    const t = globalThis,
      r = t[e];
    if (r == null || typeof r != "object") return;
    const n = r;
    window.removeEventListener("click", n.captureClickListener, !0),
      window.removeEventListener("click", n.clickListener),
      window.open === n.interceptedOpen && (window.open = n.originalOpen),
      Reflect.deleteProperty(t, e);
  }
  function dg(e) {
    const t = globalThis,
      r = t[e];
    if (r == null || typeof r != "object") return;
    const n = r;
    document.removeEventListener("click", n.resetPopupAllowance, !0),
      document.removeEventListener("keydown", n.resetPopupAllowance, !0),
      document.removeEventListener(n.requestEvent, n.listener),
      Reflect.deleteProperty(t, e);
  }
  var qi = "__codexForeignExtensionFrameMonitor";
  function hg(e = qi) {
    const t = globalThis;
    if (t[e] != null) return !0;
    const r = chrome.dom?.openOrClosedShadowRoot,
      n = new WeakSet(),
      i = (d) => {
        if (d == null || !d.startsWith("chrome-extension://")) return null;
        try {
          const f = new URL(d).host;
          return f.length > 0 && f !== chrome.runtime.id ? f : null;
        } catch {
          return null;
        }
      },
      a = (d) => {
        const f = d.getAttribute("src")?.trim() ?? "";
        return d instanceof HTMLIFrameElement
          ? { attrSrc: f, propertySrc: d.src?.trim() ?? "" }
          : { attrSrc: f, propertySrc: "" };
      },
      s = (d) => {
        if (!(d instanceof HTMLElement)) return null;
        if (typeof r == "function")
          try {
            return r(d);
          } catch {}
        return d.shadowRoot;
      },
      o = (d) => {
        const f = s(d);
        if (d.tagName === "IFRAME" || d.tagName === "FRAME") {
          const c = a(d);
          if ((i(c.attrSrc) ?? i(c.propertySrc)) != null) {
            if (d instanceof HTMLIFrameElement) {
              if (d.getAttribute("srcdoc") === "") return;
              d.setAttribute("srcdoc", "");
              return;
            }
            d.setAttribute("src", "about:blank");
          }
        }
        f != null && m(f);
      },
      l = (d) => {
        if (
          !(
            d instanceof Document ||
            d instanceof ShadowRoot ||
            d instanceof Element
          )
        )
          return;
        const f = (u) => {
          o(u);
          const g = s(u);
          g != null && l(g);
        };
        d instanceof Element && f(d);
        const c = document.createTreeWalker(d, NodeFilter.SHOW_ELEMENT);
        let p = c.nextNode();
        for (; p != null; ) f(p), (p = c.nextNode());
      },
      h = new MutationObserver((d) => {
        for (const f of d) {
          f.type === "attributes" && f.target instanceof Element && o(f.target);
          for (const c of f.addedNodes) l(c);
        }
      }),
      m = (d) => {
        n.has(d) ||
          (n.add(d),
          h.observe(d, {
            attributeFilter: ["src"],
            attributes: !0,
            childList: !0,
            subtree: !0,
          }),
          l(d));
      };
    t[e] = { observer: h, observedRoots: n };
    try {
      m(document);
    } catch (d) {
      throw (h.disconnect(), Reflect.deleteProperty(t, e), d);
    }
    return !0;
  }
  var le = new Set(),
    Ve = new Map(),
    He = new Map(),
    rn = new Map(),
    Zo = !1,
    Jo = !1;
  function fg() {
    Zo ||
      ((Zo = !0),
      chrome.tabs.onUpdated?.addListener(Tg),
      chrome.tabs.onRemoved?.addListener(Ig),
      chrome.webNavigation?.onCommitted?.addListener((e) => {
        Vi(e.tabId, e.frameId !== 0);
      }),
      chrome.debugger?.onDetach?.addListener((e) => {
        e.tabId != null && Vi(e.tabId);
      }),
      pg(),
      ze
        .getInstance()
        .ensureInit()
        .catch(() => {}));
  }
  function pg() {
    Jo || ((Jo = !0), chrome.tabs.onReplaced?.addListener(Eg));
  }
  function mg(e) {
    le.add(e);
  }
  async function Xo(e) {
    if (!le.has(e)) return !1;
    const t = await Gi(e);
    if (t == null || !le.has(e)) return !1;
    let r = He.get(e);
    r?.leaseKey !== t &&
      ((r = { leaseKey: t, installedDocumentIds: new Set() }), He.set(e, r));
    const n = r;
    return (
      (n.pending ??= _g(e, n).finally(() => {
        delete n.pending;
      })),
      await n.pending
    );
  }
  async function gg(e) {
    le.delete(e), He.delete(e);
    const t = Ve.get(e);
    await Promise.allSettled([
      ...(t == null ? [] : [t]),
      ...Array.from(rn.get(e) ?? []),
    ]),
      Ve.get(e) === t && Ve.delete(e),
      le.has(e) || (await Yo(e));
  }
  async function Gi(e) {
    const t = await ze.getInstance().getActiveLease(e);
    return t == null
      ? null
      : JSON.stringify([t.sessionId, t.turnId, t.claimedAt, t.instanceId]);
  }
  function Jt(e, t) {
    return le.has(e) && He.get(e) === t;
  }
  async function _g(e, t) {
    try {
      const r = await chrome.webNavigation.getAllFrames({ tabId: e });
      if (!Jt(e, t)) return !1;
      if (
        r == null ||
        !r.some((a) => a.frameId === 0) ||
        r.some(
          (a) =>
            !a.documentId || a.errorOccurred || a.documentLifecycle !== "active"
        )
      )
        return await zi(e, t);
      const n = new Set(r.map((a) => a.documentId));
      for (const a of t.installedDocumentIds)
        n.has(a) || t.installedDocumentIds.delete(a);
      const i = [...n].filter((a) => !t.installedDocumentIds.has(a));
      if (i.length > 0) {
        const a = ie(
          chrome.scripting.executeScript({
            args: [qi],
            func: hg,
            injectImmediately: !0,
            target: { tabId: e, documentIds: i },
          })
        );
        let s = rn.get(e);
        s == null && ((s = new Set()), rn.set(e, s)), s.add(a);
        let o;
        try {
          o = await a;
        } finally {
          s.delete(a), s.size === 0 && rn.delete(e);
        }
        if (!Jt(e, t)) return !1;
        for (const l of o ?? [])
          l.result === !0 &&
            i.includes(l.documentId) &&
            t.installedDocumentIds.add(l.documentId);
        if (i.some((l) => !t.installedDocumentIds.has(l)))
          return await zi(e, t);
      }
      return (await Gi(e)) === t.leaseKey && Jt(e, t);
    } catch {
      return await zi(e, t);
    }
  }
  async function zi(e, t) {
    return Jt(e, t)
      ? (await vg(e)) && (await Gi(e)) === t.leaseKey && Jt(e, t)
      : !1;
  }
  function Vi(e, t = !1) {
    const r = He.get(e);
    r != null &&
      He.set(e, {
        leaseKey: r.leaseKey,
        installedDocumentIds: t ? new Set(r.installedDocumentIds) : new Set(),
      });
  }
  async function vg(e) {
    if (!le.has(e)) return !1;
    if (await wg(e)) return le.has(e);
    let t = Ve.get(e);
    return (
      t ||
        ((t = yg(e)),
        Ve.set(e, t),
        t.finally(() => {
          Ve.get(e) === t && Ve.delete(e);
        })),
      await t
    );
  }
  async function wg(e) {
    try {
      return (
        (
          await ie(
            chrome.scripting.executeScript({
              args: ["__codexForeignExtensionFrameMonitor"],
              func: Sg,
              injectImmediately: !0,
              target: { allFrames: !0, tabId: e },
            })
          )
        )?.every((t) => t.result === !0) ?? !1
      );
    } catch {
      return !1;
    }
  }
  async function bg(e) {
    try {
      if (
        (await ie(
          chrome.scripting.executeScript({
            files: ["content-scripts/foreign-frame-monitor.js"],
            injectImmediately: !0,
            target: { allFrames: !0, tabId: e },
          })
        )) == null
      )
        return !1;
    } catch {
      return !1;
    }
    return !0;
  }
  async function yg(e) {
    if (!le.has(e)) return !1;
    const t = await bg(e);
    return le.has(e) ? t : (await Yo(e), !1);
  }
  function Sg(e) {
    return globalThis[e] != null;
  }
  function Tg(e, t, r) {
    if (t.status !== "loading" || (Vi(e), br(Ot(navigator.userAgent), r.url)))
      return;
    const n = ze.getInstance();
    le.has(e) &&
      n.mightHaveActiveTabLease(e) &&
      n
        .getOwningSessionId(e)
        .then(async (i) => {
          i == null || !le.has(e) || (await Xo(e));
        })
        .catch(() => {});
  }
  function Eg(e, t) {
    He.delete(t), He.delete(e), le.delete(t) && (le.add(e), Ve.delete(t));
  }
  function Ig(e) {
    le.delete(e), He.delete(e), Ve.delete(e);
  }
  async function Yo(e) {
    try {
      await ie(
        chrome.scripting.executeScript({
          args: [qi],
          func: Ag,
          injectImmediately: !0,
          target: { allFrames: !0, tabId: e },
        })
      );
    } catch {}
  }
  function Ag(e) {
    const t = globalThis,
      r = t[e];
    if (r == null || typeof r != "object") return;
    const n = "observer" in r ? r.observer : void 0;
    (n != null &&
    typeof n == "object" &&
    "disconnect" in n &&
    typeof n.disconnect == "function"
      ? n.disconnect
      : null
    )?.call(n),
      Reflect.deleteProperty(t, e);
  }
  var Cg = "codex-favicon-badge",
    Qo = { cursor: null, isVisible: !1, sessionId: null, turnId: null };
  function el(e) {
    if (e == null || !e.startsWith("data:image/svg+xml,")) return !1;
    try {
      return decodeURIComponent(e.slice(19)).includes(
        `data-codex-favicon-badge="${Cg}"`
      );
    } catch {
      return !1;
    }
  }
  var kg = class extends Error {
      constructor(e) {
        super(e), (this.name = "AtlasCommandError");
      }
    },
    Rg = () => {};
  function Og() {
    return new kg("Codex is not running for this browser session.");
  }
  var Pg = class {
      sessions = new Map();
      tabSessions = new Map();
      observedTabs;
      onBrowserControlActivityChanged;
      lastBrowserControlActive = !1;
      constructor(e = {}) {
        (this.observedTabs = e.observedTabs ?? { isObserved: () => !1 }),
          (this.onBrowserControlActivityChanged =
            e.onBrowserControlActivityChanged ?? Rg);
      }
      async startSession(e, t = null, r = {}) {
        const n = this.ensureSession(e);
        t != null && n.currentTurnId !== t && n.cursorByTabId.clear(),
          (n.currentTurnId = t ?? n.currentTurnId),
          (n.isRunning = !0),
          r.publishTabs !== !1 && (await this.publishSessionTabs(e)),
          this.updateBrowserControlActivity();
      }
      async finishSession(e) {
        const t = this.sessions.get(e);
        t &&
          (await this.publishTabs(this.detachSession(e, t)),
          this.updateBrowserControlActivity());
      }
      isBrowserControlActive() {
        for (const e of this.sessions.values())
          if (e.isRunning || e.activeRequests > 0) return !0;
        return !1;
      }
      setBrowserControlActivityChangeHandler(e) {
        (this.onBrowserControlActivityChanged = e),
          this.updateBrowserControlActivity();
      }
      requireRunningSession(e) {
        if (!this.sessions.get(e)?.isRunning) throw Og();
      }
      throwIfAgentNotRunning(e) {
        this.requireRunningSession(e);
      }
      async trackTab(e, t, r = {}) {
        this.linkTabToSession(e, t),
          r.publish !== !1 && (await this.publishTabState(t));
      }
      async untrackTab(e, t) {
        const r = this.sessions.get(e);
        r?.tabIds.delete(t),
          r?.cursorByTabId.delete(t),
          r?.tabIds.size === 0 && this.sessions.delete(e);
        const n = this.tabSessions.get(t);
        n && (n.delete(e), n.size === 0 && this.tabSessions.delete(t)),
          await this.publishTabState(t),
          this.updateBrowserControlActivity();
      }
      async startRequest(e, t) {
        this.throwIfAgentNotRunning(e);
        const r = this.linkTabToSession(e, t);
        return (
          (r.activeRequests += 1),
          (!r.abortController || r.abortController.signal.aborted) &&
            (r.abortController = new AbortController()),
          await this.publishSessionTabs(e),
          this.updateBrowserControlActivity(),
          r.abortController.signal
        );
      }
      async finishRequest(e) {
        const t = this.sessions.get(e);
        t &&
          ((t.activeRequests = Math.max(0, t.activeRequests - 1)),
          t.activeRequests === 0 && (t.abortController = null),
          await this.publishSessionTabs(e),
          this.updateBrowserControlActivity());
      }
      async stopActiveSessions() {
        const e = Array.from(this.sessions.entries())
          .filter(([, t]) => t.isRunning)
          .map(([t]) => t);
        return await this.stopSessions(e), e;
      }
      async stopSessions(e) {
        for (const t of e) await this.stopSession(t);
      }
      async setCursorState(e, t, r, n, i = {}) {
        const a = this.sessions.get(e);
        return !a?.isRunning ||
          ((a.currentTurnId = r), a.cursorByTabId.set(t, n), i.publish === !1)
          ? !1
          : await this.publishTabCursorState(t);
      }
      isObserved(e) {
        return this.observedTabs.isObserved(e);
      }
      readCursorOverlayState(e) {
        const t = this.getHighestPrioritySessionIdForTab(e);
        if (t == null) return Qo;
        const r = this.sessions.get(t);
        if (!r?.isRunning) return Qo;
        const n = r.cursorByTabId.get(e) ?? null,
          i = this.observedTabs.isObserved(e);
        return {
          cursor: !i && n != null ? { visible: !1, x: n.x, y: n.y } : n,
          isVisible: i,
          sessionId: t,
          turnId: r.currentTurnId,
        };
      }
      async republishTabState(e) {
        await this.publishTabState(e);
      }
      async republishTabStates(e) {
        await this.publishTabs(e);
      }
      async stopSession(e) {
        const t = this.sessions.get(e);
        t?.isRunning &&
          ((t.isRunning = !1),
          t.abortController?.abort(),
          await this.publishSessionTabs(e),
          this.updateBrowserControlActivity());
      }
      ensureSession(e) {
        let t = this.sessions.get(e);
        return (
          t ||
            ((t = {
              tabIds: new Set(),
              isRunning: !1,
              currentTurnId: null,
              cursorByTabId: new Map(),
              activeRequests: 0,
              abortController: null,
            }),
            this.sessions.set(e, t)),
          t
        );
      }
      linkTabToSession(e, t) {
        const r = this.ensureSession(e);
        return r.tabIds.add(t), this.attachTabSession(t, e), r;
      }
      attachTabSession(e, t) {
        const r = this.tabSessions.get(e);
        if (r) {
          r.add(t);
          return;
        }
        this.tabSessions.set(e, new Set([t]));
      }
      detachSession(e, t) {
        const r = Array.from(t.tabIds);
        this.sessions.delete(e);
        for (const n of r) {
          const i = this.tabSessions.get(n);
          i && (i.delete(e), i.size === 0 && this.tabSessions.delete(n));
        }
        return r;
      }
      async publishSessionTabs(e) {
        const t = this.sessions.get(e);
        t && (await this.publishTabs(t.tabIds));
      }
      async publishTabs(e) {
        await Promise.all(Array.from(e, async (t) => this.publishTabState(t)));
      }
      async publishTabState(e) {
        await this.publishTabCursorState(e);
      }
      async publishTabCursorState(e) {
        if (!(await this.prepareContentScript(e))) return !1;
        const t = {
          type: "AGENT_CURSOR_STATE",
          state: this.readCursorOverlayState(e),
        };
        try {
          return (await ie(chrome.tabs.sendMessage(e, t)))?.ok === !0;
        } catch {
          return !1;
        }
      }
      async prepareContentScript(e) {
        return this.tabSessions.has(e) ? await zo(e) : await $i(e);
      }
      getHighestPrioritySessionIdForTab(e) {
        const t = this.tabSessions.get(e);
        if (!t || t.size === 0) return null;
        for (const r of t) if (this.sessions.get(r)?.isRunning) return r;
        return null;
      }
      updateBrowserControlActivity() {
        const e = this.isBrowserControlActive();
        e !== this.lastBrowserControlActive &&
          ((this.lastBrowserControlActive = e),
          this.onBrowserControlActivityChanged(e));
      }
    },
    Mg = class {
      activeTabIds = new Set();
      activeTabIdByWindowId = new Map();
      listenersRegistered = !1;
      onChanged;
      handleTabActivated = (e) => {
        this.setWindowActiveTab(e.windowId, e.tabId);
      };
      handleTabCreated = (e) => {
        if (e.active !== !0) return;
        const t = tl(e);
        t != null && this.setWindowActiveTab(t.windowId, t.tabId);
      };
      handleTabRemoved = () => {
        this.refreshActiveTabs();
      };
      handleTabReplaced = () => {
        this.refreshActiveTabs();
      };
      handleTabWindowChanged = () => {
        this.refreshActiveTabs();
      };
      handleWindowCreated = () => {
        this.refreshActiveTabs();
      };
      handleWindowFocusChanged = () => {
        this.refreshActiveTabs();
      };
      handleWindowRemoved = () => {
        this.refreshActiveTabs();
      };
      constructor(e = {}) {
        this.onChanged = e.onChanged ?? (() => {});
      }
      setChangeHandler(e) {
        this.onChanged = e;
      }
      async initialize() {
        this.registerEventListeners(), await this.refreshActiveTabs();
      }
      dispose() {
        this.listenersRegistered &&
          ((this.listenersRegistered = !1),
          chrome.tabs.onActivated?.removeListener(this.handleTabActivated),
          chrome.tabs.onCreated?.removeListener(this.handleTabCreated),
          chrome.tabs.onRemoved?.removeListener(this.handleTabRemoved),
          chrome.tabs.onReplaced?.removeListener(this.handleTabReplaced),
          chrome.tabs.onAttached?.removeListener(this.handleTabWindowChanged),
          chrome.tabs.onDetached?.removeListener(this.handleTabWindowChanged),
          chrome.windows?.onCreated?.removeListener(this.handleWindowCreated),
          chrome.windows?.onFocusChanged?.removeListener(
            this.handleWindowFocusChanged
          ),
          chrome.windows?.onRemoved?.removeListener(this.handleWindowRemoved));
      }
      isObserved(e) {
        return this.activeTabIds.has(e);
      }
      registerEventListeners() {
        this.listenersRegistered ||
          ((this.listenersRegistered = !0),
          chrome.tabs.onActivated?.addListener(this.handleTabActivated),
          chrome.tabs.onCreated?.addListener(this.handleTabCreated),
          chrome.tabs.onRemoved?.addListener(this.handleTabRemoved),
          chrome.tabs.onReplaced?.addListener(this.handleTabReplaced),
          chrome.tabs.onAttached?.addListener(this.handleTabWindowChanged),
          chrome.tabs.onDetached?.addListener(this.handleTabWindowChanged),
          chrome.windows?.onCreated?.addListener(this.handleWindowCreated),
          chrome.windows?.onFocusChanged?.addListener(
            this.handleWindowFocusChanged
          ),
          chrome.windows?.onRemoved?.addListener(this.handleWindowRemoved));
      }
      async refreshActiveTabs() {
        const e = await chrome.tabs.query({ active: !0 });
        this.setActiveTabs(e.flatMap((t) => tl(t) ?? []));
      }
      setActiveTabs(e) {
        const t = new Set(),
          r = new Map();
        for (const i of e) t.add(i.tabId), r.set(i.windowId, i.tabId);
        const n = Lg(this.activeTabIds, t);
        (this.activeTabIds = t),
          (this.activeTabIdByWindowId = r),
          this.publishChangedTabs(n);
      }
      setWindowActiveTab(e, t) {
        const r = new Set(),
          n = this.activeTabIdByWindowId.get(e);
        n !== void 0 && n !== t && (this.activeTabIds.delete(n), r.add(n)),
          this.activeTabIdByWindowId.set(e, t),
          this.activeTabIds.has(t) || (this.activeTabIds.add(t), r.add(t)),
          this.publishChangedTabs(r);
      }
      publishChangedTabs(e) {
        const t = Array.from(e);
        t.length !== 0 && Promise.resolve(this.onChanged(t)).catch(() => {});
      }
    };
  function tl(e) {
    return typeof e.id != "number" || typeof e.windowId != "number"
      ? null
      : { tabId: e.id, windowId: e.windowId };
  }
  function Lg(e, t) {
    const r = new Set();
    for (const n of e) t.has(n) || r.add(n);
    for (const n of t) e.has(n) || r.add(n);
    return r;
  }
  var nn = new Mg(),
    he = new Pg({ observedTabs: nn }),
    Hi = new Set(),
    Wi = new Set();
  nn.setChangeHandler(async (e) => {
    const t = e.filter((r) => nn.isObserved(r));
    for (const r of t) Hi.has(r) && Wi.add(r);
    await Promise.all([he.republishTabStates(e), Dg(t)]);
  });
  async function rl(e) {
    Hi.add(e);
    try {
      const t = await il(e);
      if (!t || t.active === !0 || t.mutedInfo?.muted === !0) return;
      try {
        await chrome.tabs.update(e, { muted: !0 });
      } catch {
        return;
      }
      Wi.has(e) && (await nl(e));
    } finally {
      Hi.delete(e), Wi.delete(e);
    }
  }
  async function Dg(e) {
    await Promise.allSettled(e.map(async (t) => nl(t)));
  }
  async function nl(e) {
    const t = await il(e);
    if (
      !(
        !t ||
        t.mutedInfo?.muted !== !0 ||
        t.mutedInfo.reason !== "extension" ||
        t.mutedInfo.extensionId !== chrome.runtime.id
      )
    )
      try {
        await chrome.tabs.update(e, { muted: !1 });
      } catch {}
  }
  async function il(e) {
    try {
      return await chrome.tabs.get(e);
    } catch {
      return null;
    }
  }
  var Ki = "AGENT_REQUEST_HEADER_ENABLED",
    xg = class {
      enabled = !1;
      async isEnabled() {
        if (this.enabled) return !0;
        const e = await chrome.storage.local.get(Ki);
        return (this.enabled ||= e[Ki] === !0), this.enabled;
      }
      async applyDecision(e) {
        return (await this.isEnabled()) || !e
          ? this.enabled
          : (await chrome.storage.local.set({ [Ki]: !0 }),
            (this.enabled = !0),
            !0);
      }
    },
    Ng = 2e3,
    Ug = 250,
    Zi = 64 * 1024,
    al = { type: "TAB_FAVICON_BADGE", badge: null, faviconDataUrl: null },
    Ji = class _t {
      static instance = null;
      unseenFinalizedBadges = new Map();
      storageKey = "TAB_FAVICON_BADGES";
      storage;
      tabLeases = ze.getInstance();
      faviconDataUrls = new Map();
      closingTabIds = new Set();
      initializePromise = null;
      stateOperationQueue = Promise.resolve();
      publicationQueue = Promise.resolve();
      listenersRegistered = !1;
      unsubscribeActiveTabLeaseChanges = null;
      handleTabActivated = (t) => {
        this.clearFinalizedBadge(t.tabId);
      };
      handleWindowFocused = (t) => {
        t !== chrome.windows.WINDOW_ID_NONE &&
          this.clearFocusedWindowFinalizedBadge(t);
      };
      handleTabUpdated = (t, r) => {
        const n = r.favIconUrl,
          i = n != null,
          a = typeof n == "string" && el(n);
        if (
          ((r.url != null || (i && !a)) && this.faviconDataUrls.delete(t),
          r.status === "complete" || (i && !a))
        ) {
          if (this.closingTabIds.has(t) || !this.mightHaveBadge(t)) return;
          this.republishBadge(t);
        }
      };
      handleTabRemoved = (t) => {
        this.closingTabIds.delete(t),
          this.faviconDataUrls.delete(t),
          this.forgetFinalizedBadge(t);
      };
      handleTabReplaced = (t, r) => {
        this.closingTabIds.delete(r),
          this.faviconDataUrls.delete(r),
          this.faviconDataUrls.delete(t),
          this.replaceFinalizedBadge(t, r);
      };
      handleActiveTabLeaseChanges = (t) => {
        this.reconcileActiveTabLeaseChanges(t);
      };
      static getInstance() {
        return _t.instance || (_t.instance = new _t()), _t.instance;
      }
      constructor(t = chrome.storage.session) {
        (this.storage = t),
          (this.unsubscribeActiveTabLeaseChanges =
            this.tabLeases.subscribeActiveTabLeaseChanges(
              this.handleActiveTabLeaseChanges
            )),
          this.registerEventListeners(),
          this.ensureInit().catch(() => {}),
          this.tabLeases.ensureInit().catch(() => {});
      }
      async ensureInit() {
        this.initializePromise ||
          (this.initializePromise = this.loadFromStorage()),
          await this.initializePromise;
      }
      async markFinalized(t, r) {
        await this.ensureInit(),
          await this.runStateOperation(async () => {
            const n = !(await this.tabIsVisible(t));
            await this.updateUnseenFinalizedBadges(() =>
              n
                ? this.unseenFinalizedBadges.get(t) === r
                  ? !1
                  : (this.unseenFinalizedBadges.set(t, r), !0)
                : this.unseenFinalizedBadges.delete(t)
            );
          }),
          this.scheduleReconcileTab(t);
      }
      async restoreTabFaviconsBestEffort(t) {
        await ie(
          Promise.allSettled(
            t.map(async (r) => {
              await chrome.tabs.sendMessage(r, al);
            })
          ),
          Ug
        );
      }
      async closeTabsWithFaviconRestore(t, r) {
        for (const n of t) this.closingTabIds.add(n);
        await this.restoreTabFaviconsBestEffort(t);
        try {
          return await r();
        } catch (n) {
          for (const i of t) this.closingTabIds.delete(i);
          throw n;
        }
      }
      dispose() {
        this.listenersRegistered &&
          ((this.listenersRegistered = !1),
          chrome.tabs.onActivated?.removeListener(this.handleTabActivated),
          chrome.tabs.onUpdated?.removeListener(this.handleTabUpdated),
          chrome.tabs.onRemoved?.removeListener(this.handleTabRemoved),
          chrome.tabs.onReplaced?.removeListener(this.handleTabReplaced),
          chrome.windows.onFocusChanged?.removeListener(
            this.handleWindowFocused
          )),
          this.unsubscribeActiveTabLeaseChanges?.(),
          (this.unsubscribeActiveTabLeaseChanges = null),
          this.closingTabIds.clear(),
          _t.instance === this && (_t.instance = null);
      }
      registerEventListeners() {
        this.listenersRegistered ||
          ((this.listenersRegistered = !0),
          chrome.tabs.onActivated?.addListener(this.handleTabActivated),
          chrome.tabs.onUpdated?.addListener(this.handleTabUpdated),
          chrome.tabs.onRemoved?.addListener(this.handleTabRemoved),
          chrome.tabs.onReplaced?.addListener(this.handleTabReplaced),
          chrome.windows.onFocusChanged?.addListener(this.handleWindowFocused));
      }
      async clearFinalizedBadge(t) {
        await this.ensureInit();
        let r = !1;
        await this.runStateOperation(async () => {
          this.unseenFinalizedBadges.has(t) &&
            (await this.updateUnseenFinalizedBadges(
              () => (r = this.unseenFinalizedBadges.delete(t))
            ));
        }),
          r && this.scheduleReconcileTab(t);
      }
      async clearFocusedWindowFinalizedBadge(t) {
        if (!(await this.hasUnseenFinalizedBadges())) return;
        let r;
        try {
          r = await chrome.tabs.query({ active: !0, windowId: t });
        } catch {
          return;
        }
        const n = r.find((i) => typeof i.id == "number")?.id;
        n != null && (await this.clearFinalizedBadge(n));
      }
      async hasUnseenFinalizedBadges() {
        await this.ensureInit();
        let t = !1;
        return (
          await this.runStateOperation(async () => {
            t = this.unseenFinalizedBadges.size > 0;
          }),
          t
        );
      }
      async forgetFinalizedBadge(t) {
        await this.ensureInit(),
          await this.runStateOperation(async () => {
            await this.updateUnseenFinalizedBadges(() =>
              this.unseenFinalizedBadges.delete(t)
            );
          });
      }
      async replaceFinalizedBadge(t, r) {
        await this.ensureInit();
        let n = null;
        await this.runStateOperation(async () => {
          await this.updateUnseenFinalizedBadges(() => {
            const i = this.unseenFinalizedBadges.get(r);
            return i == null
              ? !1
              : (this.unseenFinalizedBadges.delete(r),
                this.unseenFinalizedBadges.set(t, i),
                (n = i),
                !0);
          });
        }),
          n != null && this.scheduleReconcileTab(t);
      }
      async republishBadge(t) {
        await this.ensureInit(), await this.waitForStateOperations();
        const r = await this.readEffectiveBadge(t);
        r != null && this.schedulePublishBadge(t, r);
      }
      async reconcileActiveTabLeaseChanges(t) {
        await this.ensureInit();
        const r = [...t];
        await this.runStateOperation(async () => {
          let n = !1;
          for (const i of r)
            (await this.tabLeases.getOwningSessionId(i)) != null &&
              (n = this.unseenFinalizedBadges.delete(i) || n);
          n && (await this.saveToStorage());
        });
        for (const n of r) this.scheduleReconcileTab(n);
      }
      async reconcileTab(t) {
        await this.publishBadge(t, await this.readEffectiveBadge(t));
      }
      async readEffectiveBadge(t) {
        return (await this.tabLeases.getOwningSessionId(t)) != null
          ? "active"
          : this.unseenFinalizedBadges.get(t) ?? null;
      }
      mightHaveBadge(t) {
        return (
          this.unseenFinalizedBadges.has(t) ||
          this.tabLeases.mightHaveActiveTabLease(t)
        );
      }
      async tabIsVisible(t) {
        try {
          const r = await chrome.tabs.get(t);
          return r.active !== !0 || typeof r.windowId != "number"
            ? !1
            : (await chrome.windows.get(r.windowId)).focused === !0;
        } catch {
          return !1;
        }
      }
      async loadFromStorage() {
        const t = (await this.storage.get(this.storageKey))[this.storageKey];
        if (
          !t ||
          typeof t != "object" ||
          !("badges" in t) ||
          !t.badges ||
          typeof t.badges != "object" ||
          Array.isArray(t.badges)
        )
          return;
        const r = [];
        for (const [n, i] of Object.entries(t.badges)) {
          const a = Number(n);
          !Number.isInteger(a) ||
            !Fg(i) ||
            (this.unseenFinalizedBadges.set(a, i), r.push(a));
        }
        for (const n of r) this.scheduleReconcileTab(n);
      }
      async runStateOperation(t) {
        const r = this.stateOperationQueue.then(t, t);
        (this.stateOperationQueue = r.then(
          () => {},
          () => {}
        )),
          await r;
      }
      async waitForStateOperations() {
        await this.stateOperationQueue;
      }
      scheduleReconcileTab(t) {
        this.schedulePublication(async () => {
          await this.reconcileTab(t);
        });
      }
      schedulePublishBadge(t, r) {
        this.schedulePublication(async () => {
          await this.publishBadge(t, r);
        });
      }
      schedulePublication(t) {
        const r = this.publicationQueue.then(t, t);
        (this.publicationQueue = r.then(
          () => {},
          () => {}
        )),
          r.catch(() => {});
      }
      async updateUnseenFinalizedBadges(t) {
        t() && (await this.saveToStorage());
      }
      async saveToStorage() {
        const t = {
          badges: Object.fromEntries(this.unseenFinalizedBadges.entries()),
        };
        await this.storage.set({ [this.storageKey]: t });
      }
      async publishBadge(t, r) {
        if (this.closingTabIds.has(t)) return;
        const [n, i] = await Promise.all([
          zo(t),
          r == null ? Promise.resolve(null) : this.readFaviconDataUrl(t),
        ]);
        if (!n || this.closingTabIds.has(t)) return;
        const a =
          r == null || i == null
            ? al
            : { type: "TAB_FAVICON_BADGE", badge: r, faviconDataUrl: i };
        try {
          await ie(chrome.tabs.sendMessage(t, a));
        } catch {}
      }
      getCachedFaviconDataUrl(t, r) {
        const n = this.faviconDataUrls.get(t);
        return n?.pageUrl === r ? n.dataUrl : null;
      }
      async readFaviconDataUrl(t, r) {
        let n;
        try {
          n = await chrome.tabs.get(t);
        } catch {
          return null;
        }
        if (
          typeof n.url != "string" ||
          n.url.length === 0 ||
          (r != null && n.url !== r)
        )
          return null;
        const i = n.url,
          a = n.favIconUrl,
          s = this.getCachedFaviconDataUrl(t, i);
        if (s != null) return s;
        if (typeof a != "string" || a.length === 0 || el(a)) return null;
        const o = await Bg(i);
        if (o == null) return null;
        let l;
        try {
          l = await chrome.tabs.get(t);
        } catch {
          return null;
        }
        return l.url !== i || l.favIconUrl !== a
          ? null
          : (this.faviconDataUrls.set(t, { dataUrl: o, pageUrl: i }), o);
      }
    };
  function Fg(e) {
    return e === "deliverable" || e === "handoff";
  }
  async function Bg(e) {
    const t = new URL(chrome.runtime.getURL("/_favicon/"));
    return (
      t.searchParams.set("pageUrl", e),
      t.searchParams.set("size", "32"),
      await $g(t.toString(), "image/bmp")
    );
  }
  async function $g(e, t) {
    const r = new AbortController(),
      n = setTimeout(() => r.abort(), Ng);
    try {
      const i = await fetch(e, { credentials: "omit", signal: r.signal });
      if (!i.ok) return null;
      const a = i.headers.get("content-type") ?? t;
      if (a == null || !a.startsWith("image/")) return null;
      const s = await jg(i);
      return s == null || s.length === 0 ? null : `data:${a};base64,${qg(s)}`;
    } catch {
      return null;
    } finally {
      clearTimeout(n);
    }
  }
  async function jg(e) {
    const t = e.headers.get("content-length"),
      r = t == null ? null : Number(t);
    if (r != null && Number.isFinite(r) && r > Zi)
      return await e.body?.cancel(), null;
    if (e.body == null) {
      const l = new Uint8Array(await e.arrayBuffer());
      return l.length <= Zi ? l : null;
    }
    const n = e.body.getReader(),
      i = [];
    let a = 0;
    for (;;) {
      const { done: l, value: h } = await n.read();
      if (l) break;
      if (!(h == null || h.length === 0)) {
        if (((a += h.length), a > Zi)) return await n.cancel(), null;
        i.push(h);
      }
    }
    const s = new Uint8Array(a);
    let o = 0;
    for (const l of i) s.set(l, o), (o += l.length);
    return s;
  }
  function qg(e) {
    let t = "";
    for (let n = 0; n < e.length; n += 32768)
      t += String.fromCharCode(...e.subarray(n, n + 32768));
    return btoa(t);
  }
  var Xi = [
    "grey",
    "blue",
    "red",
    "yellow",
    "green",
    "pink",
    "purple",
    "cyan",
    "orange",
  ];
  function Gg() {
    return Xi[Math.floor(Math.random() * Xi.length)] ?? Xi[0];
  }
  function Yi(e) {
    if (typeof e != "string") return;
    const t = e.trim();
    return t.length > 0 ? t : void 0;
  }
  var zg = class gr {
      static instance = null;
      defaultSessionGroupTitle = "ChatGPT";
      managedGroupIds = new Set();
      sessionGroupTitles = new Map();
      initializePromise = null;
      listenersRegistered = !1;
      storageKey = "TAB_GROUPS";
      static getInstance() {
        return gr.instance || (gr.instance = new gr()), gr.instance;
      }
      async ensureInit() {
        this.initializePromise ||
          (this.registerEventListeners(),
          (this.initializePromise = this.loadFromStorage())),
          await this.initializePromise;
      }
      async ensureAgentTabGroup(t, r, n) {
        await this.ensureInit();
        const i = await this.findManagedGroupContainingTabs(n);
        if (i != null) {
          await this.addTabToGroup(i, r);
          return;
        }
        await this.createGroup(r, this.sessionGroupTitles.get(t)),
          await this.saveToStorage();
      }
      async releaseTabsFromManagedGroups(t) {
        await this.ensureInit();
        const r = new Set(t);
        if (r.size === 0) return;
        const n = await Promise.all(
            [...r].map(async (o) => {
              try {
                const l = await chrome.tabs.get(o);
                return typeof l.groupId != "number" ||
                  !this.managedGroupIds.has(l.groupId)
                  ? null
                  : { groupId: l.groupId, tabId: o };
              } catch {
                return null;
              }
            })
          ),
          i = [],
          a = new Set();
        for (const o of n) o != null && (i.push(o.tabId), a.add(o.groupId));
        i.length > 0 &&
          chrome.tabs.ungroup &&
          (await Promise.allSettled(
            i.map(async (o) => await chrome.tabs.ungroup(o))
          ));
        let s = !1;
        for (const o of a) s = (await this.removeManagedGroupIfEmpty(o)) || s;
        s && (await this.saveToStorage());
      }
      async refreshManagedGroupsFromChrome() {
        await this.ensureInit();
        let t = !1;
        for (const r of Array.from(this.managedGroupIds))
          t = (await this.removeManagedGroupIfEmpty(r)) || t;
        t && (await this.saveToStorage());
      }
      async setSessionGroupTitle(t, r, n) {
        await this.ensureInit();
        const i = Yi(r),
          a = this.sessionGroupTitles.get(t) !== i;
        i
          ? this.sessionGroupTitles.set(t, i)
          : this.sessionGroupTitles.delete(t);
        const s = await this.findManagedGroupContainingTabs(n);
        if (s != null && chrome.tabGroups?.update)
          try {
            await chrome.tabGroups.update(s, {
              title: i ?? this.defaultSessionGroupTitle,
            });
          } catch {}
        a && (await this.saveToStorage());
      }
      async loadFromStorage() {
        const t = (await chrome.storage.local.get(this.storageKey))[
          this.storageKey
        ];
        if (t) {
          if (Array.isArray(t)) {
            for (const r of t)
              !r ||
                typeof r.chromeGroupId != "number" ||
                this.managedGroupIds.add(r.chromeGroupId);
            return;
          }
          for (const r of t.groups ?? [])
            !r ||
              typeof r.chromeGroupId != "number" ||
              this.managedGroupIds.add(r.chromeGroupId);
          for (const [r, n] of Object.entries(t.sessionGroupTitles ?? {})) {
            const i = Yi(n);
            i && this.sessionGroupTitles.set(r, i);
          }
        }
      }
      async saveToStorage() {
        const t = {
          groups: Array.from(this.managedGroupIds, (r) => ({
            chromeGroupId: r,
          })),
          sessionGroupTitles: Object.fromEntries(
            this.sessionGroupTitles.entries()
          ),
        };
        await chrome.storage.local.set({ [this.storageKey]: t });
      }
      async createGroup(t, r) {
        const { windowId: n } = await chrome.tabs.get(t),
          i = await chrome.tabs.group({
            createProperties: { windowId: n },
            tabIds: [t],
          });
        if ((this.managedGroupIds.add(i), chrome.tabGroups?.update))
          try {
            await chrome.tabGroups.update(i, {
              color: Gg(),
              title: Yi(r) ?? this.defaultSessionGroupTitle,
            });
          } catch {}
      }
      async addTabToGroup(t, r) {
        (await chrome.tabs.get(r)).groupId !== t &&
          (await chrome.tabs.group({ groupId: t, tabIds: r }));
      }
      registerEventListeners() {
        this.listenersRegistered ||
          !chrome.tabGroups ||
          ((this.listenersRegistered = !0),
          chrome.tabGroups.onRemoved?.addListener((t) => {
            this.handleRemovedGroup(t.id);
          }));
      }
      handleRemovedGroup(t) {
        this.managedGroupIds.delete(t) && this.saveToStorage();
      }
      async readGroup(t) {
        if (!chrome.tabGroups?.get) return null;
        try {
          return await chrome.tabGroups.get(t);
        } catch {
          return null;
        }
      }
      async removeManagedGroupIfEmpty(t) {
        return (await this.groupTabIds(t)).length > 0
          ? !1
          : (this.managedGroupIds.delete(t), !0);
      }
      async groupTabIds(t) {
        return (await chrome.tabs.query({ groupId: t }))
          .map((r) => r.id)
          .filter((r) => typeof r == "number");
      }
      async findManagedGroupContainingTabs(t) {
        for (const r of t)
          try {
            const n = await chrome.tabs.get(r);
            if (typeof n.groupId != "number") continue;
            if (
              this.managedGroupIds.has(n.groupId) &&
              (await this.readGroup(n.groupId))
            )
              return n.groupId;
          } catch {}
        return null;
      }
    },
    Vg = 1e3;
  async function sl(e) {
    const t = e.urlProtocols == null ? null : new Set(e.urlProtocols),
      r = (await chrome.tabs.query({}))
        .filter(Hg)
        .filter((s) => e.includeIncognito !== !1 || !s.incognito)
        .filter((s) => e.browserTabMentionsOnly !== !0 || Qi(s))
        .filter((s) => Kg(s, e.query, t))
        .sort(Zg),
      n = new Set(),
      i = [],
      a = e.limit ?? Vg;
    for (const s of r)
      if (
        !n.has(s.id) &&
        (n.add(s.id),
        i.push({
          faviconUrl:
            e.includeFavicons === !0 &&
            e.getFaviconDataUrl != null &&
            typeof s.url == "string"
              ? e.getFaviconDataUrl({ ...s, url: s.url })
              : null,
          tab: s,
        }),
        i.length === a)
      )
        break;
    return i;
  }
  function an(e) {
    const t = e.lastAccessed;
    return typeof t == "number" && Number.isFinite(t) && t >= 0 ? t : 0;
  }
  function Hg(e) {
    return Number.isSafeInteger(e.id) && (e.id ?? -1) >= 0;
  }
  function Qi(e) {
    if (
      !Wg(e) ||
      !(
        Number.isSafeInteger(e.windowId) &&
        e.windowId >= 0 &&
        Number.isSafeInteger(e.index) &&
        e.index >= 0 &&
        (e.title == null || (e.title.length <= 4096 && Ln(e.title)))
      )
    )
      return !1;
    const t = new URL(e.url).hostname.replace(/\.$/, "");
    return t !== "chatgpt.com" && !t.endsWith(".chatgpt.com");
  }
  function Wg(e) {
    if (
      e.incognito ||
      !(
        Number.isSafeInteger(e.id) &&
        (e.id ?? -1) >= 0 &&
        typeof e.url == "string" &&
        e.url.length <= 16384 &&
        Ln(e.url)
      )
    )
      return !1;
    try {
      const t = new URL(e.url).protocol;
      return t === "http:" || t === "https:";
    } catch {
      return !1;
    }
  }
  function Kg(e, t, r) {
    if (r != null) {
      if (typeof e.url != "string") return !1;
      try {
        const n = new URL(e.url).protocol;
        if ((n !== "http:" && n !== "https:") || !r.has(n)) return !1;
      } catch {
        return !1;
      }
    }
    return Pc({ title: e.title ?? "", url: e.url ?? "" }, t ?? "");
  }
  function Zg(e, t) {
    return (
      an(t) - an(e) ||
      (e.windowId ?? 0) - (t.windowId ?? 0) ||
      (e.index ?? 0) - (t.index ?? 0) ||
      (e.id ?? Number.MAX_SAFE_INTEGER) - (t.id ?? Number.MAX_SAFE_INTEGER)
    );
  }
  var ea = "browserTabMentionGeneration",
    Jg = 4,
    Xg = 50,
    Yg = {
      getCachedFaviconDataUrl: () => null,
      readFaviconDataUrl: async () => null,
    },
    ol = class {
      invalidationListeners = new Set();
      faviconListeners = new Set();
      pendingFaviconReads = new Set();
      faviconWarmupQueue = [];
      activeFaviconWarmupCount = 0;
      faviconWarmupSucceeded = !1;
      identityPromise = null;
      constructor(e, t = Yg, r) {
        (this.buildChannel = e),
          (this.faviconProvider = t),
          (this.startInvalidationObservation = r);
      }
      async getCapabilityInfo() {
        const { generation: e } = await this.getIdentity();
        return {
          protocolVersion: 1,
          buildChannel: this.buildChannel,
          generation: e,
        };
      }
      async getUserTabs(e) {
        this.ensureInvalidationObservationStarted();
        const t = Ha({ limit: e.limit, query: e.query });
        if (t == null)
          throw new Error("Invalid Chrome tab mention search query");
        const r = await this.getIdentity(),
          n = Math.min(t.limit, 100);
        return n === 0
          ? []
          : (
              await sl({
                browserTabMentionsOnly: !0,
                getFaviconDataUrl: (i) => this.getFaviconDataUrl(i),
                includeFavicons: e.includeFavicons !== !1,
                includeIncognito: !1,
                limit: n,
                query: t.query,
                urlProtocols: ["http:", "https:"],
              })
            ).flatMap(({ faviconUrl: i, tab: a }) =>
              Qi(a) ? [t_(a, r, i)] : []
            );
      }
      async getProviderTabId(e) {
        return ll(await this.getIdentity(), e);
      }
      subscribeInvalidations(e) {
        return (
          this.invalidationListeners.add(e),
          () => {
            this.invalidationListeners.delete(e);
          }
        );
      }
      subscribeCandidateUpdates(e, t) {
        const r = new Map(
            e.filter((a) => a.faviconUrl == null).map((a) => [a.id, a.url])
          ),
          n = ({ tabId: a, pageUrl: s, faviconUrl: o }) => {
            r.get(a) === s &&
              (r.delete(a),
              (e = e.map((l) => (l.id === a ? { ...l, faviconUrl: o } : l))),
              t(e));
          },
          i = (a, s, o) => {
            if (s.favIconUrl === void 0 || !Qi(o) || r.get(o.id) !== o.url)
              return;
            const l = this.getFaviconDataUrl(o);
            l != null && n({ tabId: o.id, pageUrl: o.url, faviconUrl: l });
          };
        return (
          this.faviconListeners.add(n),
          chrome.tabs.onUpdated.addListener(i),
          queueMicrotask(() => {
            for (const [a, s] of r) {
              const o = this.getCachedFaviconDataUrl(a, s);
              o != null && n({ tabId: a, pageUrl: s, faviconUrl: o });
            }
          }),
          () => {
            r.clear(),
              this.faviconListeners.delete(n),
              chrome.tabs.onUpdated.removeListener(i);
          }
        );
      }
      getFaviconDataUrl(e) {
        const t = this.getCachedFaviconDataUrl(e.id, e.url);
        return this.loadFaviconDataUrl(e, t), t;
      }
      getCachedFaviconDataUrl(e, t) {
        try {
          return za(this.faviconProvider.getCachedFaviconDataUrl(e, t));
        } catch {
          return null;
        }
      }
      loadFaviconDataUrl(e, t) {
        const r = JSON.stringify([e.id, e.url]);
        t != null ||
          typeof e.favIconUrl != "string" ||
          e.favIconUrl.length === 0 ||
          this.pendingFaviconReads.has(r) ||
          (this.pendingFaviconReads.add(r),
          this.faviconWarmupQueue.push({
            pageUrl: e.url,
            pendingKey: r,
            tabId: e.id,
          }),
          this.startQueuedFaviconWarmups());
      }
      startQueuedFaviconWarmups() {
        for (
          ;
          this.activeFaviconWarmupCount < Jg &&
          this.faviconWarmupQueue.length > 0;

        ) {
          const e = this.faviconWarmupQueue.shift();
          if (e == null) continue;
          this.activeFaviconWarmupCount += 1;
          let t;
          try {
            t = this.faviconProvider.readFaviconDataUrl(e.tabId, e.pageUrl);
          } catch {
            t = Promise.resolve(null);
          }
          t.then((r) => {
            const n = za(r);
            if (n != null) {
              this.faviconWarmupSucceeded = !0;
              for (const i of this.faviconListeners)
                i({ tabId: e.tabId, pageUrl: e.pageUrl, faviconUrl: n });
            }
          })
            .catch(() => {})
            .finally(() => {
              if (
                (this.pendingFaviconReads.delete(e.pendingKey),
                (this.activeFaviconWarmupCount -= 1),
                this.startQueuedFaviconWarmups(),
                this.activeFaviconWarmupCount === 0 &&
                  this.faviconWarmupQueue.length === 0 &&
                  this.faviconWarmupSucceeded)
              ) {
                this.faviconWarmupSucceeded = !1;
                for (const r of this.invalidationListeners) r();
              }
            });
        }
      }
      getIdentity() {
        return (
          (this.identityPromise ??= e_().catch((e) => {
            throw ((this.identityPromise = null), e);
          })),
          this.identityPromise
        );
      }
      ensureInvalidationObservationStarted() {
        const e = this.startInvalidationObservation;
        (this.startInvalidationObservation = void 0), e?.();
      }
    };
  function Qg(e) {
    let t = null;
    const r = () => {
        t == null &&
          (t = setTimeout(() => {
            (t = null), e();
          }, Xg));
      },
      n = (i, a) => {
        (a.title === void 0 && a.url === void 0 && a.favIconUrl === void 0) ||
          r();
      };
    return (
      chrome.tabs.onCreated.addListener(r),
      chrome.tabs.onRemoved.addListener(r),
      chrome.tabs.onReplaced.addListener(r),
      chrome.tabs.onActivated.addListener(r),
      chrome.tabs.onUpdated.addListener(n),
      chrome.tabs.onMoved.addListener(r),
      chrome.tabs.onAttached.addListener(r),
      chrome.tabs.onDetached.addListener(r),
      () => {
        t != null && (clearTimeout(t), (t = null)),
          chrome.tabs.onCreated.removeListener(r),
          chrome.tabs.onRemoved.removeListener(r),
          chrome.tabs.onReplaced.removeListener(r),
          chrome.tabs.onActivated.removeListener(r),
          chrome.tabs.onUpdated.removeListener(n),
          chrome.tabs.onMoved.removeListener(r),
          chrome.tabs.onAttached.removeListener(r),
          chrome.tabs.onDetached.removeListener(r);
      }
    );
  }
  async function e_() {
    const [e, t] = await Promise.all([Ce(), chrome.storage.session.get(ea)]),
      r = t[ea],
      n = Va(r) ?? crypto.randomUUID();
    return (
      n !== r && (await chrome.storage.session.set({ [ea]: n })),
      { profileInstanceId: e, generation: n }
    );
  }
  function t_(e, t, r = null) {
    return {
      id: e.id,
      browserId: t.profileInstanceId,
      faviconUrl: r,
      lastOpened: new Date(an(e)).toISOString(),
      providerTabId: ll(t, e.id),
      title: e.title ?? "",
      url: e.url,
    };
  }
  function ll(e, t) {
    return JSON.stringify([e.generation, String(t)]);
  }
  async function r_(e) {
    switch (e.namespace) {
      case "bookmarks":
        return await i_(e.args[0]);
      case "tabs":
        return await ta(
          e.method === "remove"
            ? Array.isArray(e.args[0])
              ? e.args[0]
              : [e.args[0]]
            : []
        );
      case "tabGroups":
        return await ta();
      case "windows":
        return await n_(e);
      default:
        throw new Error(
          `Unhandled browser management namespace: ${e.namespace}`
        );
    }
  }
  async function n_(e) {
    const t = {
      windows: (await chrome.windows.getAll({ windowTypes: ["normal"] }))
        .filter(({ incognito: r }) => !r)
        .flatMap(
          ({
            focused: r,
            height: n,
            id: i,
            left: a,
            state: s,
            top: o,
            width: l,
          }) =>
            i == null
              ? []
              : [
                  {
                    focused: r,
                    height: n,
                    id: i,
                    left: a,
                    state: s,
                    top: o,
                    width: l,
                  },
                ]
        ),
    };
    return (
      e.method === "create" &&
        Vt(e.args[0]) &&
        Object.hasOwn(e.args[0], "tabId") &&
        (t.tabLayout = (await ta()).tabLayout),
      t
    );
  }
  async function i_(e) {
    if (typeof e != "string") return {};
    const [t] = await chrome.bookmarks.get(e);
    if (t == null) throw new Error(`Chrome bookmark ${e} is unavailable`);
    const { id: r, index: n, parentId: i, title: a, url: s } = t;
    return { bookmarks: [{ id: r, index: n, parentId: i, title: a, url: s }] };
  }
  async function ta(e = []) {
    const [t, r] = await Promise.all([
        chrome.tabs.query({}),
        chrome.tabGroups?.query?.({}).catch(() => []) ?? [],
      ]),
      n = t.filter(({ incognito: a }) => !a),
      i = new Set(n.map(({ groupId: a }) => a));
    return {
      tabLayout: {
        tabs: n.flatMap(
          ({
            autoDiscardable: a,
            groupId: s,
            id: o,
            index: l,
            pinned: h,
            url: m,
            windowId: d,
          }) =>
            o == null
              ? []
              : [
                  {
                    autoDiscardable: a,
                    groupId: s,
                    id: o,
                    index: l,
                    pinned: h,
                    windowId: d,
                    ...(e.includes(o) ? { url: m } : {}),
                  },
                ]
        ),
        groups: r
          .filter(({ id: a }) => i.has(a))
          .map(({ collapsed: a, color: s, id: o, title: l, windowId: h }) => ({
            collapsed: a,
            color: s,
            id: o,
            title: l,
            windowId: h,
          })),
      },
    };
  }
  var ra = "BROWSER_MANAGEMENT_AUDIT_TRAIL",
    cl = 50,
    a_ = 4320 * 60 * 1e3,
    ul = Promise.resolve();
  async function s_(e, t) {
    return await hl(async () => {
      const r = await dl().catch(() => {});
      if (r == null) return await t();
      const n = await r_(e).catch(() => {});
      if (n == null) return await t();
      const i = await t();
      if (!l_(e, n)) return i;
      const a = {
        args: e.args,
        before: n,
        createdAt: Date.now(),
        method: e.method,
        namespace: e.namespace,
      };
      return (
        typeof i == "number"
          ? (a.result = i)
          : Vt(i) && typeof i.id == "string"
          ? (a.result = { id: i.id })
          : e.namespace === "windows" &&
            Vt(i) &&
            typeof i.id == "number" &&
            (a.result = i.id),
        r.push(a),
        await c_(r).catch(() => {}),
        i
      );
    });
  }
  async function o_() {
    return await hl(async () => ({ changes: (await dl()).toReversed() }));
  }
  function l_(e, t) {
    if (e.namespace === "bookmarks") return !0;
    if (e.namespace === "windows")
      return (
        e.method === "create" ||
        (t.windows?.some(({ id: a }) => a === e.args[0]) ?? !1)
      );
    const r = t.tabLayout?.tabs ?? [];
    if (e.namespace === "tabGroups")
      return r.some(({ groupId: a }) => a === e.args[0]);
    const n = e.args[0],
      i = Vt(n) ? n.tabIds : n;
    return (Array.isArray(i) ? i : [i]).every((a) =>
      r.some(({ id: s }) => s === a)
    );
  }
  async function dl() {
    const e = await chrome.storage.session.get(ra),
      t = Date.now() - a_;
    return (e[ra] ?? []).filter(({ createdAt: r }) => r >= t).slice(-cl);
  }
  async function c_(e) {
    await chrome.storage.session.set({ [ra]: e.slice(-cl) });
  }
  async function hl(e) {
    const t = ul.then(e);
    return (
      (ul = t.then(
        () => {},
        () => {}
      )),
      await t
    );
  }
  var u_ = new Set(["autoDiscardable", "pinned"]),
    d_ = new Set(["collapsed", "color", "title"]),
    h_ = new Set(["focused", "height", "left", "state", "top", "width"]),
    f_ = new Set([
      "focused",
      "height",
      "left",
      "state",
      "tabId",
      "top",
      "type",
      "width",
    ]);
  async function p_(e) {
    if (e.args.length > 1)
      throw new Error("Chrome API windows.create accepts at most one argument");
    const t = sn(
      e.args.length === 0 ? {} : e.args[0],
      f_,
      "windows.create",
      !0
    );
    if (t.type !== void 0 && t.type !== "normal")
      throw new Error("Chrome API windows.create only supports normal windows");
    if ((_l(t.state, "windows.create"), !Object.hasOwn(t, "tabId"))) return t;
    const r = await chrome.tabs.get(Ye(t.tabId, "tab ID"));
    if (r.pinned)
      throw new Error(
        "Chrome API windows.create cannot move a pinned tab without changing its pinning"
      );
    return await gl(r.windowId, "windows.create"), await vl([r.windowId]), t;
  }
  async function m_(e) {
    const t = Ye(e.args[0], "window ID");
    _l(sn(e.args[1], h_, "windows.update").state, "windows.update"),
      await gl(t, "windows.update");
  }
  async function fl(e) {
    const t = Ye(e.args[0], "group ID");
    e.method === "update" && sn(e.args[1], d_, "tabGroups.update"), await ia(t);
  }
  async function g_(e) {
    const t = sn(e.args[1], u_, "tabs.update"),
      r = Ye(e.args[0], "tab ID");
    t.pinned === !0 && (await aa([r]));
  }
  async function __(e) {
    const t = na(e.args[0]),
      r = Xt(e.args[1], "tabs.move"),
      n = await Promise.all(t.map((a) => chrome.tabs.get(a))),
      i = new Set(n.map(({ windowId: a }) => a));
    Object.hasOwn(r, "windowId") && i.add(Ye(r.windowId, "window ID")),
      await vl(i);
  }
  async function pl(e) {
    await aa(na(e.args[0]));
  }
  async function v_(e) {
    const t = Xt(e.args[0], "tabs.group"),
      r = await aa(na(t.tabIds));
    let n, i;
    if (
      (Object.hasOwn(t, "groupId")
        ? (i = (await ia(Ye(t.groupId, "group ID"))).windowId)
        : ((n =
            t.createProperties === void 0
              ? {}
              : Xt(t.createProperties, "tabs.group createProperties")),
          (i =
            n.windowId === void 0
              ? r[0].windowId
              : Ye(n.windowId, "createProperties.windowId"))),
      r.some((a) => a.windowId !== i))
    )
      throw new Error(
        "Chrome API tabs.group cannot move tabs between windows; group tabs separately by window. Use tabs.move only for user-requested transfers."
      );
    return n === void 0 ? t : { ...t, createProperties: { ...n, windowId: i } };
  }
  function ml(e) {
    const t = Xt(
      e.args[e.method === "create" ? 0 : 1],
      `bookmarks.${e.method}`
    );
    if (Object.hasOwn(t, "url")) {
      try {
        if (typeof t.url == "string") {
          const { protocol: r } = new URL(t.url);
          if (r === "http:" || r === "https:") return;
        }
      } catch {}
      throw new Error(
        `Chrome API bookmarks.${e.method} requires a valid http or https URL`
      );
    }
  }
  function sn(e, t, r, n = !1) {
    const i = Xt(e, r),
      a = Object.keys(i);
    if ((!n && a.length === 0) || a.some((s) => !t.has(s)))
      throw new Error(`Chrome API ${r} contains an unsupported property`);
    return i;
  }
  function Xt(e, t) {
    if (!Vt(e))
      throw new Error(`Chrome API ${t} requires a plain options object`);
    return e;
  }
  function na(e) {
    const t = Array.isArray(e) ? e : [e];
    if (t.length === 0)
      throw new Error("Chrome API requires at least one tab ID");
    return t.map((r) => Ye(r, "tab ID"));
  }
  function Ye(e, t) {
    if (typeof e != "number" || !Number.isSafeInteger(e) || e < 0)
      throw new Error(`Chrome API requires an explicit valid ${t}`);
    return e;
  }
  async function gl(e, t) {
    const r = await chrome.windows.get(e);
    if (r.type !== "normal" || r.incognito)
      throw new Error(`Chrome API ${t} requires a normal non-incognito window`);
  }
  function _l(e, t) {
    if (e === "locked-fullscreen")
      throw new Error(`Chrome API ${t} cannot lock a window in fullscreen`);
  }
  async function vl(e) {
    await wl(
      (
        await Promise.all([...e].map((t) => chrome.tabs.query({ windowId: t })))
      ).flat()
    );
  }
  async function ia(e) {
    const t = await chrome.tabGroups.get(e);
    if (t.shared)
      throw new Error(
        `Chrome API cannot modify shared tab group ${e} without permission to share`
      );
    return t;
  }
  async function aa(e) {
    const t = await Promise.all([...new Set(e)].map((r) => chrome.tabs.get(r)));
    return await wl(t), t;
  }
  async function wl(e) {
    const t = new Set(e.map(({ groupId: r }) => r));
    t.delete(-1), await Promise.all([...t].map(ia));
  }
  var bl = {
    bookmarks: {
      create: { audit: !0, validate: ml },
      get: {},
      getChildren: {},
      getSubTree: {},
      getTree: {},
      move: { audit: !0 },
      remove: { audit: !0 },
      search: {},
      update: { audit: !0, validate: ml },
    },
    tabGroups: {
      get: {},
      move: { audit: !0, validate: fl },
      query: {},
      update: { audit: !0, validate: fl },
    },
    tabs: {
      get: {},
      group: { audit: !0 },
      move: { audit: !0, validate: __ },
      query: {},
      remove: { audit: !0, validate: pl },
      ungroup: { audit: !0, validate: pl },
      update: { audit: !0, validate: g_ },
    },
    windows: {
      create: { audit: !0 },
      get: {},
      getAll: {},
      getCurrent: {},
      getLastFocused: {},
      update: { audit: !0, validate: m_ },
    },
  };
  async function w_(e) {
    if (!b_(e))
      throw new Error(
        `Chrome API chrome.${e.namespace}.${e.method} is not allowed`
      );
    const t = bl[e.namespace];
    if (!Object.hasOwn(t, e.method))
      throw new Error(
        `Chrome API chrome.${e.namespace}.${e.method} is not allowed`
      );
    const r = t[e.method],
      n = async () => {
        if (e.namespace === "windows" && e.method === "create") {
          const o = await p_(e),
            l = { ...o, incognito: !1 };
          return (
            Object.hasOwn(o, "tabId") || (l.url = "about:blank"),
            await chrome.windows.create(l)
          );
        }
        await r.validate?.(e);
        const i = chrome[e.namespace];
        if (i == null || !Object.hasOwn(i, e.method))
          throw new Error(
            `Chrome API chrome.${e.namespace}.${e.method} is unavailable`
          );
        const a = Reflect.get(i, e.method);
        if (typeof a != "function")
          throw new Error(
            `Chrome API chrome.${e.namespace}.${e.method} is unavailable`
          );
        const s =
          e.namespace === "tabs" && e.method === "group"
            ? [await v_(e), ...e.args.slice(1)]
            : e.args;
        return Reflect.apply(a, i, s);
      };
    return r.audit ? await s_(e, n) : await n();
  }
  function b_(e) {
    return Object.hasOwn(bl, e.namespace);
  }
  var y_ = {
      id: "pageAssets",
      description:
        "List assets already observed in the current page state and bundle selected assets into a temporary local artifact.",
    },
    ft = new Set(),
    on = new Set(),
    ln = new Map(),
    cn = new Map(),
    un = new Map(),
    S_ = 1500,
    T_ = 1e4,
    It = "about:blank",
    E_ = 5e3,
    I_ = 25,
    yl = !1;
  function A_() {
    yl ||
      (chrome.debugger.onDetach.addListener((e) => {
        typeof e.tabId == "number" && ft.delete(e.tabId),
          typeof e.targetId == "string" &&
            (on.delete(e.targetId), ln.delete(e.targetId));
      }),
      (yl = !0));
  }
  var C_ = class {
    browserFamily = Ot(navigator.userAgent, "brave" in navigator);
    sessions = new Map();
    tabLeases = ze.getInstance();
    requestHeaderPolicy = new xg();
    agentPopupInterceptorEnabled;
    browserManagementEnabled;
    webMcpConfig;
    browserTabMentionProvider;
    cursorArrivalWaitersByKey = new Map();
    downloadChangeListeners = new Set();
    downloadFilenamesById = new Map();
    downloadUrlsById = new Map();
    nextCursorMoveSequence = 1;
    constructor({
      agentPopupInterceptorEnabled: e,
      buildChannel: t = Er("prod"),
      browserManagementEnabled: r,
      browserTabMentionProvider: n,
      webMcpConfig: i,
    } = {}) {
      (this.agentPopupInterceptorEnabled = e),
        (this.browserManagementEnabled = r ?? Promise.resolve(!0)),
        (this.webMcpConfig = i);
      const a = Ji.getInstance();
      (this.browserTabMentionProvider = n ?? new ol(t, a)), A_(), fg(), Ym();
    }
    ping() {
      return "pong";
    }
    async focusTab(e) {
      if (!Number.isSafeInteger(e.tabId) || e.tabId <= 0)
        throw new Error("focusTab requires a positive integer tabId");
      if (e.session_id != null && !this.sessions.has(this.requireSessionId(e)))
        return !1;
      const t = await Qe(e.tabId);
      return (
        await Promise.all([
          chrome.tabs.update(e.tabId, { active: !0 }),
          chrome.windows.update(t.windowId, { focused: !0 }),
        ]),
        e.session_id == null ? void 0 : !0
      );
    }
    async executeCdp(e) {
      return await (await this.activateSession(e)).executeCdp(e);
    }
    async attach(e) {
      await this.resolveSession(e).attach(e);
    }
    async attachTarget(e) {
      await this.resolveSession(e).attachTarget(e);
    }
    async detach(e) {
      await this.resolveSession(e).detach(e);
    }
    async detachTarget(e) {
      await this.resolveSession(e).detachTarget(e);
    }
    async getCommittedTabUrl(e) {
      return await (await this.activateSession(e)).getCommittedTabUrl(e.tabId);
    }
    async getTabs(e) {
      const t = await (await this.activateSession(e)).getTabs();
      return await Promise.all(
        t.map(async (r) => ({
          ...r,
          providerTabId: await this.browserTabMentionProvider.getProviderTabId(
            r.id
          ),
        }))
      );
    }
    async getUserTabs(e) {
      if (
        e.includeFavicons !== void 0 ||
        e.limit !== void 0 ||
        e.query !== void 0
      )
        return await this.browserTabMentionProvider.getUserTabs(e);
      const t = await L_();
      return await Promise.all(
        t.map(async (r) => ({
          ...r,
          providerTabId: await this.browserTabMentionProvider.getProviderTabId(
            r.id
          ),
        }))
      );
    }
    async getUserHistory(e) {
      return await this.activateSession(e), await D_(e);
    }
    async executeTabRead(e) {
      return (
        hn("executeTabRead", e.tabId),
        await this.activateSession(e),
        await Bm(e)
      );
    }
    async getBookmarks(e) {
      return await this.activateSession(e), await chrome.bookmarks.getTree();
    }
    async createNotification(e) {
      return (
        await this.activateSession(e),
        await chrome.notifications.create({
          type: "basic",
          iconUrl: chrome.runtime.getURL("/images/icon128.png"),
          title: e.title,
          message: e.message,
        })
      );
    }
    async getRecentlyClosedSessions(e) {
      return (
        await this.activateSession(e), await chrome.sessions.getRecentlyClosed()
      );
    }
    async getTopSites(e) {
      return await this.activateSession(e), await chrome.topSites.get();
    }
    async claimUserTab(e) {
      return await this.resolveSession(e).claimUserTab(e, e.tabId);
    }
    async createTab(e) {
      const t = this.resolveSession(e),
        r =
          typeof e.preferredWindowId == "number" &&
          Number.isSafeInteger(e.preferredWindowId) &&
          e.preferredWindowId >= 0
            ? e.preferredWindowId
            : void 0;
      return await t.createTab(e, r);
    }
    async markTab(e) {
      await this.resolveSession(e).markTab(e, e.tabId, e.status);
    }
    async finalizeTabs(e) {
      const t = this.resolveSession(e);
      if (!Array.isArray(e.keep))
        throw new Error("finalizeTabs requires a keep array");
      await t.finalizeTabs(e, e.keep);
    }
    async nameSession(e) {
      await this.resolveSession(e).nameSession(e, e.name);
    }
    async executeUnhandledCommand(e) {
      const t = await this.activateSession(e),
        r = this.requireTurnId(e);
      return await Fc({
        backendName: Te[this.browserFamily].shortDisplayName,
        commandSets: [Lm, Em],
        handlers: {
          [Yr]: async (n) => {
            if (!(await this.browserManagementEnabled))
              throw new Error("Browser management capability is disabled");
            const i = Kt.parse(n);
            return Oi.parse({
              value: await t.executeBrowserManagementCall(r, i),
            });
          },
          [Qr]: async (n) => {
            if (!(await this.browserManagementEnabled))
              throw new Error("Browser management capability is disabled");
            return (
              Pi.parse(n), Mi.parse(await t.getBrowserManagementAuditTrail(r))
            );
          },
          [tn]: async (n) => {
            const i = Ui.parse(n);
            return (
              await t.setViewport(e, { height: i.height, width: i.width }),
              Fi.parse({})
            );
          },
          [en]: async (n) => (
            xi.parse(n), await t.setViewport(e, null), Ni.parse({})
          ),
        },
        payload: e,
      });
    }
    async moveMouse(e) {
      q_("moveMouse", e);
      const t = he.isObserved(e.tabId);
      await (
        await this.activateSession(e)
      ).requireSessionTab(e.tabId, { publishOverlay: !1, trackOverlay: !0 });
      const r = this.nextCursorMoveSequence;
      this.nextCursorMoveSequence += 1;
      const n = e.waitForArrival === !1 || !t ? !1 : await G_(e.tabId),
        i =
          e.waitForArrival !== !1 && n
            ? this.createCursorArrivalWaiter({
                moveSequence: r,
                sessionId: e.session_id,
                turnId: e.turn_id,
              })
            : null,
        a = await he.setCursorState(
          e.session_id,
          e.tabId,
          e.turn_id,
          {
            ...(n ? {} : { animateMovement: !1 }),
            moveSequence: r,
            visible: !0,
            x: e.x,
            y: e.y,
          },
          { publish: t }
        );
      if (i != null) {
        if (!a) {
          i.cancel();
          return;
        }
        await i.promise;
      }
    }
    notifyCursorArrived({ moveSequence: e, sessionId: t, turnId: r }) {
      Number.isInteger(e) &&
        this.cursorArrivalWaitersByKey.get(Sl(t, r, e))?.();
    }
    async turnEnded(e) {
      const t = this.requireSessionId(e),
        r = this.requireTurnId(e);
      let n = this.sessions.get(t);
      n ||
        ((n = new Tl(
          t,
          this.browserFamily,
          this.agentPopupInterceptorEnabled,
          this.requestHeaderPolicy
        )),
        this.sessions.set(t, n)),
        await n.endTurn(r);
    }
    async getInfo(e) {
      const t = await Ce();
      return {
        browserTabMentions:
          await this.browserTabMentionProvider.getCapabilityInfo(),
        family: this.browserFamily,
        name: Te[this.browserFamily].shortDisplayName,
        version:
          typeof chrome.runtime.getVersion == "function"
            ? chrome.runtime.getVersion()
            : "unknown",
        type: "extension",
        apiSupportOverrides: { "BrowserUser.getTabContext": !0 },
        agentRequestHeaderEnabled: await this.requestHeaderPolicy.isEnabled(),
        capabilities: {
          browser: [
            Go.info,
            ...((await this.browserManagementEnabled) ? [Mo.info] : []),
          ],
          tab: [y_, ...((await this.webMcpConfig?.enabled()) ? [Ao] : [])],
        },
        metadata: { extensionId: chrome.runtime.id, extensionInstanceId: t },
      };
    }
    addDownloadChangeListener(e) {
      return (
        this.downloadChangeListeners.add(e),
        () => {
          this.downloadChangeListeners.delete(e);
        }
      );
    }
    handleDownloadCreated(e) {
      Ll(e.id) &&
        he.isBrowserControlActive() &&
        typeof e.filename == "string" &&
        (this.downloadFilenamesById.set(e.id, e.filename),
        this.downloadUrlsById.set(e.id, e.finalUrl),
        this.emitDownloadChange({
          id: String(e.id),
          filename: e.filename,
          url: e.finalUrl,
          status: "started",
        }));
    }
    handleDownloadChanged(e) {
      if (!Ll(e.id)) return;
      const t = z_(e, this.downloadFilenamesById);
      if (t == null) return;
      const r = this.downloadUrlsById.get(e.id);
      if (r == null) return;
      this.downloadFilenamesById.set(e.id, t);
      const n = V_(e);
      n != null &&
        this.emitDownloadChange({
          id: String(e.id),
          filename: t,
          url: r,
          status: n,
        });
    }
    async handleCreatedNavigationTarget(e) {
      const t = await this.tabLeases.getActiveLease(e.sourceTabId);
      if (t == null) return;
      const r = this.sessions.get(t.sessionId);
      r != null && (await r.claimChildTab(t, e.tabId));
    }
    async handleAgentBackgroundPopup(e, t) {
      const r = await this.tabLeases.getActiveLease(e);
      if (r == null) return;
      const n = this.sessions.get(r.sessionId);
      if (n == null || n.currentTurnId !== r.turnId) return;
      let i;
      try {
        i = new URL(t);
      } catch {
        return;
      }
      if (i.protocol !== "http:" && i.protocol !== "https:") return;
      const a = await Qe(e),
        s = await chrome.tabs.create({
          active: !1,
          openerTabId: e,
          url: "about:blank",
          windowId: a.windowId,
        });
      if (s.id != null)
        try {
          await n.claimChildTab(r, s.id, { logicalActive: !0 }),
            (await this.tabLeases.getActiveLease(s.id)) == null
              ? await chrome.tabs.remove(s.id).catch(() => {})
              : await chrome.tabs.update(s.id, { url: i.href });
        } catch (o) {
          throw (await chrome.tabs.remove(s.id).catch(() => {}), o);
        }
    }
    resolveSession(e) {
      const t = this.requireSessionId(e);
      this.requireTurnId(e);
      let r = this.sessions.get(t);
      if (e.session_context === "cached") {
        if (!r) throw new Error(`Browser session ${t} is not active`);
        return r.requireActiveTurn(this.requireTurnId(e)), r;
      }
      return (
        r ||
          ((r = new Tl(
            t,
            this.browserFamily,
            this.agentPopupInterceptorEnabled,
            this.requestHeaderPolicy
          )),
          this.sessions.set(t, r)),
        r
      );
    }
    async activateSession(e) {
      const t = this.resolveSession(e);
      return await t.activateTurn(e), t;
    }
    requireSessionId(e) {
      const t = e?.session_id;
      if (typeof t != "string")
        throw new Error("Missing required browser session_id");
      return t;
    }
    requireTurnId(e) {
      const t = e?.turn_id;
      if (typeof t != "string")
        throw new Error("Missing required browser turn_id");
      return t;
    }
    createCursorArrivalWaiter({ moveSequence: e, sessionId: t, turnId: r }) {
      const n = Sl(t, r, e);
      let i = null,
        a = null;
      const s = () => {
        i != null && (clearTimeout(i), (i = null)),
          this.cursorArrivalWaitersByKey.delete(n),
          a?.();
      };
      return {
        cancel: s,
        promise: new Promise((o) => {
          (a = o),
            (i = setTimeout(s, S_)),
            this.cursorArrivalWaitersByKey.set(n, s);
        }),
      };
    }
    emitDownloadChange(e) {
      for (const t of this.downloadChangeListeners) t(e);
    }
  };
  function Sl(e, t, r) {
    return `${e}:${t}:${r}`;
  }
  var Tl = class {
    tabGroups = zg.getInstance();
    tabLeases = ze.getInstance();
    tabFavicons = Ji.getInstance();
    activeTabId = null;
    lifecycleQueue = Promise.resolve();
    currentTurnId = null;
    requestHeaderEnabled;
    constructor(e, t, r, n) {
      (this.sessionId = e),
        (this.browserFamily = t),
        (this.agentPopupInterceptorEnabled = r),
        (this.requestHeaderPolicy = n);
    }
    async activateTurn(e) {
      (this.currentTurnId === e.turn_id &&
        e.agent_request_header_enabled === void 0) ||
        (await this.runTurnMutation(e, async () => {}));
    }
    requireActiveTurn(e) {
      if (this.currentTurnId !== e)
        throw new Error(
          `Browser session ${this.sessionId} turn ${e} is not active`
        );
    }
    async executeBrowserManagementCall(e, t) {
      return await this.runLifecycle(
        async () => (this.requireActiveTurn(e), await w_(t))
      );
    }
    async getBrowserManagementAuditTrail(e) {
      return await this.runLifecycle(
        async () => (this.requireActiveTurn(e), await o_())
      );
    }
    async executeCdp(e) {
      const t = e.target.tabId;
      if (typeof t == "number" && (await this.requireSessionTab(t), !ft.has(t)))
        throw new Error("Debugger unattached");
      try {
        return (
          typeof t == "number" &&
            e.target.sessionId == null &&
            e.target.targetId == null &&
            (e.method === "Page.close" || e.method === "Target.closeTarget") &&
            (await this.tabFavicons.restoreTabFaviconsBestEffort([t])),
          await Z_(e)
        );
      } catch (r) {
        throw (
          (X_(r) &&
            typeof t == "number" &&
            e.preserveDebuggerOnTimeout !== !0 &&
            (await O_(t)),
          r)
        );
      }
    }
    async attach(e) {
      await this.runTurnMutation(e, async () => {
        await this.requireSessionTab(e.tabId),
          await El(
            e.tabId,
            await this.tabLeases.takeViewportSizeForAttach(
              this.sessionId,
              e.turn_id,
              e.tabId
            )
          );
      });
    }
    async attachTarget(e) {
      await this.runTurnMutation(e, async () => {
        await this.requireSessionTab(e.tabId), await k_(e.tabId, e.targetId);
      });
    }
    async detach(e) {
      await this.runLifecycle(async () => {
        this.currentTurnId != null && this.requireActiveTurn(e.turn_id),
          await this.requireOwnedTab(e.tabId),
          await Al(e.tabId);
      });
    }
    async detachTarget(e) {
      await this.runLifecycle(async () => {
        this.currentTurnId != null && this.requireActiveTurn(e.turn_id),
          await this.requireOwnedTab(e.tabId),
          await Cl(e.targetId);
      });
    }
    async getCommittedTabUrl(e) {
      return await this.requireOwnedTab(e), (await chrome.tabs.get(e)).url;
    }
    async getTabs() {
      return await this.listSessionTabs();
    }
    async createTab(e, t) {
      return await this.runTurnMutation(e, async () => {
        const r = await this.activeAgentTabIds();
        r.length === 0 &&
          t == null &&
          this.activeTabId != null &&
          (t = (await Qe(this.activeTabId).catch(() => null))?.windowId);
        const n = await P_(r.length === 0 ? t : void 0);
        return (
          (this.activeTabId = n.id),
          await rl(n.id),
          await this.tabGroups.ensureAgentTabGroup(this.sessionId, n.id, r),
          await this.tabLeases.claimTab(
            this.sessionId,
            e.turn_id,
            n.id,
            "agent",
            this.requestHeaderEnabled
          ),
          await this.requireSessionTab(n.id, { trackOverlay: !0 }),
          { ...n, active: !0 }
        );
      });
    }
    async claimChildTab(e, t, r = {}) {
      await this.runLifecycle(async () => {
        if (
          this.currentTurnId !== e.turnId ||
          !(await this.tabLeases.claimTabIfSourceLeaseMatches(e, t))
        )
          return;
        const n = await Qe(t).catch(() => null);
        if (n == null) return;
        (n.active === !0 || r.logicalActive === !0) && (this.activeTabId = t);
        const i = (await this.activeAgentTabIds()).filter((a) => a !== t);
        await Promise.allSettled([
          rl(t),
          this.tabGroups.ensureAgentTabGroup(this.sessionId, t, i),
          this.requireSessionTab(t, { trackOverlay: !0 }),
        ]);
      });
    }
    async claimUserTab(e, t) {
      return await this.runTurnMutation(e, async () => {
        let r = await Qe(t);
        const n = await this.tabLeases.getOwningSessionId(t);
        if (n != null && n !== this.sessionId)
          throw new Error(`Tab ${t} is already part of browser session ${n}`);
        if (
          ((ja(this.browserFamily, r.url) ||
            ja(this.browserFamily, r.pendingUrl)) &&
            (r = await M_(t)),
          br(this.browserFamily, r.url) || br(this.browserFamily, r.pendingUrl))
        )
          throw new Error(
            `${
              Te[this.browserFamily].shortDisplayName
            } internal tab ${t} cannot be claimed`
          );
        return (
          (this.activeTabId = r.id),
          n === this.sessionId
            ? (await this.requireSessionTab(r.id, { trackOverlay: !0 }),
              { ...Yt(r), active: !0 })
            : (await this.tabLeases.claimTab(
                this.sessionId,
                e.turn_id,
                r.id,
                "user",
                this.requestHeaderEnabled
              ),
              await this.requireSessionTab(r.id, { trackOverlay: !0 }),
              { ...Yt(r), active: !0 })
        );
      });
    }
    async markTab(e, t, r) {
      await this.runTurnMutation(e, async () => {
        hn("markTab", t),
          H_(r),
          await this.requireSessionTab(t),
          await this.tabLeases.setTabMark(this.sessionId, e.turn_id, t, r);
      });
    }
    async nameSession(e, t) {
      await this.runTurnMutation(e, async () => {
        await this.tabGroups.setSessionGroupTitle(
          this.sessionId,
          t,
          await this.activeAgentTabIds()
        );
      });
    }
    async setViewport(e, t) {
      await this.runTurnMutation(e, async () => {
        const r = (await this.listSessionTabs()).find((n) => n.active);
        await this.tabLeases.setViewportSize(
          this.sessionId,
          e.turn_id,
          r?.id ?? null,
          t
        ),
          r != null && (await El(r.id, t));
      });
    }
    async finalizeTabs(e, t) {
      await this.runLifecycle(async () => {
        await this.activateTurnUnlocked(e);
        const r = await this.listSessionTabs(),
          n = W_(t, new Set(r.map((i) => i.id)));
        await this.tabLeases.replaceTurnMarks(this.sessionId, e.turn_id, n),
          await this.endTurnUnlocked(e.turn_id);
      });
    }
    async endTurn(e) {
      await this.runLifecycle(() => this.endTurnUnlocked(e));
    }
    async endTurnUnlocked(e) {
      if (this.currentTurnId != null && this.currentTurnId !== e) return;
      await this.tabLeases.clearPendingViewportSize(this.sessionId, e);
      const t = await this.tabLeases.getSessionActiveLeases(this.sessionId),
        r = new Map([...t].filter(([, h]) => h.turnId === e)),
        n = new Set((await this.listSessionTabs()).map((h) => h.id)),
        {
          handoff: i,
          deliverable: a,
          close: s,
          release: o,
        } = $c([...r.values()].filter((h) => n.has(h.tabId))),
        l = [...i, ...a, ...s, ...o];
      await he.stopSessions([this.sessionId]),
        await Promise.all([
          Promise.all([
            ...a.map(async (h) =>
              this.tabFavicons.markFinalized(h, "deliverable").catch(() => {})
            ),
            ...i.map(async (h) =>
              this.tabFavicons.markFinalized(h, "handoff").catch(() => {})
            ),
          ]),
          this.detachAttachedDebuggersBestEffort(l),
        ]),
        await Promise.allSettled([...l.map(gg), ...l.map(eg)]),
        await this.tabGroups.releaseTabsFromManagedGroups(a),
        s.length > 0 &&
          (await this.tabFavicons.closeTabsWithFaviconRestore(s, () => K_(s)),
          await this.tabGroups.refreshManagedGroupsFromChrome()),
        await Promise.all(l.map(async (h) => he.untrackTab(this.sessionId, h))),
        await this.tabLeases.releaseTabs(this.sessionId, [...a, ...s, ...o]),
        i.length > 0 &&
          (await this.tabLeases.handoffTabs(this.sessionId, e, i, {
            ...(this.activeTabId == null
              ? {}
              : { activeTabId: this.activeTabId }),
          })),
        (this.activeTabId = null),
        (this.currentTurnId = null),
        [...r.values()].some((h) => h.requestHeaderEnabled !== void 0) &&
          (await this.tabLeases.reconcileRequestHeaders());
    }
    async resumeHandoffIfPresent(e) {
      const t = await this.tabLeases.getSessionHandoffLeases(this.sessionId);
      if (t.size === 0) return;
      const r = await Promise.all(
          [...t.keys()].map(async (l) => {
            try {
              return await Qe(l), { tabId: l, state: "reclaimed" };
            } catch {
              return { tabId: l, state: "stale" };
            }
          })
        ),
        n = [],
        i = [];
      for (const l of r)
        l.state === "reclaimed" ? n.push(l.tabId) : i.push(l.tabId);
      if (
        (i.length > 0 && (await this.tabLeases.releaseTabs(this.sessionId, i)),
        n.length === 0)
      )
        return;
      const a = await this.tabLeases.resumeHandoffTabs(this.sessionId, e, n);
      if (a.length === 0) return;
      const s = new Set(a),
        o = [...t.values()].find(
          (l) => l.isActiveHandoff === !0 && s.has(l.tabId)
        )?.tabId;
      this.activeTabId = o ?? a[0] ?? null;
    }
    async detachAttachedDebuggersBestEffort(e) {
      const t = new Set(e);
      await Promise.allSettled([
        ...[...t].filter((r) => ft.has(r)).map(async (r) => Al(r)),
        ...Array.from(ln.entries())
          .filter(([, r]) => t.has(r))
          .map(async ([r]) => Cl(r)),
      ]);
    }
    async listSessionTabs() {
      const e = (await this.tabLeases.getSessionTabs(this.sessionId)).filter(
        (t) => t.id !== void 0 && !br(this.browserFamily, t.url)
      );
      return this.tabInfosWithLogicalActive(e);
    }
    async activeAgentTabIds() {
      return [
        ...(
          await this.tabLeases.getSessionActiveLeases(this.sessionId)
        ).values(),
      ]
        .filter((e) => e.origin === "agent")
        .map((e) => e.tabId);
    }
    tabInfosWithLogicalActive(e) {
      const t = e.map(Yt),
        r = this.resolveLogicalActiveTabId(t);
      return r == null
        ? t
        : t.map((n) =>
            n.active === (n.id === r) ? n : { ...n, active: n.id === r }
          );
    }
    resolveLogicalActiveTabId(e) {
      return e.length === 0
        ? null
        : this.activeTabId != null && e.some((t) => t.id === this.activeTabId)
        ? this.activeTabId
        : ((this.activeTabId = e.find((t) => t.active)?.id ?? e[0]?.id ?? null),
          this.activeTabId);
    }
    async requireSessionTab(e, t = {}) {
      await this.requireOwnedTab(e);
      const r = t.trackOverlay === !0 && t.publishOverlay !== !1;
      await he.startSession(this.sessionId, this.currentTurnId, {
        publishTabs: r,
      }),
        t.trackOverlay === !0 &&
          (await he.trackTab(this.sessionId, e, { publish: r })),
        mg(e),
        await Promise.all([
          Xo(e),
          Promise.resolve(
            this.requestHeaderEnabled === !0 ||
              this.agentPopupInterceptorEnabled
          ).then(async (n) => {
            if (!n) return;
            Qm(e);
            const i = await Ko(e);
            if (
              this.requestHeaderEnabled === !0 &&
              !i &&
              (await chrome.tabs.get(e)).url !== "about:blank"
            )
              throw new Error(
                "Unable to prepare popup request headers. Retry the browser command."
              );
          }),
        ]);
    }
    async requireOwnedTab(e) {
      if (!(await this.tabLeases.isClaimedBySession(this.sessionId, e)))
        throw new Error(
          `Tab ${e} is not part of browser session ${this.sessionId}`
        );
    }
    async runLifecycle(e) {
      const t = this.lifecycleQueue.then(e, e);
      return (
        (this.lifecycleQueue = t.then(
          () => {},
          () => {}
        )),
        await t
      );
    }
    async runTurnMutation(e, t) {
      return await this.runLifecycle(
        async () => (await this.activateTurnUnlocked(e), await t())
      );
    }
    async activateTurnUnlocked(e) {
      if (
        (e.session_context === "cached" && this.requireActiveTurn(e.turn_id),
        e.agent_request_header_enabled !== void 0)
      ) {
        if (typeof e.agent_request_header_enabled != "boolean")
          throw new Error(
            "Invalid agent request-header policy: expected a boolean."
          );
        const r = await this.requestHeaderPolicy.applyDecision(
          e.agent_request_header_enabled
        );
        await this.tabLeases.setSessionRequestHeaderEnabled(this.sessionId, r),
          (this.requestHeaderEnabled = r);
      }
      const t = e.turn_id;
      this.currentTurnId !== t &&
        (await this.resumeHandoffIfPresent(t),
        await this.tabLeases.updateActiveSessionTurn(this.sessionId, t),
        (this.currentTurnId = t));
    }
  };
  async function El(e, t) {
    await oa(e, async () => {
      if (ft.has(e)) {
        t !== void 0 && (await Il(e, t));
        return;
      }
      try {
        await chrome.debugger.attach({ tabId: e }, "1.3");
      } catch (r) {
        if (!Ml(r)) throw r;
      }
      await Il(e, t), ft.add(e);
    });
  }
  async function k_(e, t) {
    await Pl(t, async () => {
      if (!on.has(t)) {
        try {
          await chrome.debugger.attach({ targetId: t }, "1.3");
        } catch (r) {
          if (!Ml(r)) throw r;
        }
        on.add(t), ln.set(t, e);
      }
    });
  }
  async function Il(e, t) {
    const r = t ?? R_(void 0);
    if (r == null) {
      if (t === void 0) return;
      await la({
        target: { tabId: e },
        method: "Emulation.clearDeviceMetricsOverride",
        commandParams: {},
      });
      return;
    }
    await la({
      target: { tabId: e },
      method: "Emulation.setDeviceMetricsOverride",
      commandParams: { ...r, deviceScaleFactor: 1, mobile: !1 },
    });
  }
  function R_(e) {
    if (typeof e != "string") return null;
    const t = /^(?<width>[1-9]\d*)x(?<height>[1-9]\d*)$/u.exec(e);
    return t?.groups == null
      ? null
      : {
          width: Number.parseInt(t.groups.width, 10),
          height: Number.parseInt(t.groups.height, 10),
        };
  }
  async function Al(e) {
    await oa(e, async () => {
      try {
        await chrome.debugger.detach({ tabId: e });
      } finally {
        ft.delete(e);
      }
    });
  }
  async function Cl(e) {
    await Pl(e, async () => {
      try {
        await chrome.debugger.detach({ targetId: e });
      } finally {
        on.delete(e), ln.delete(e);
      }
    });
  }
  async function O_(e) {
    await oa(e, async () => {
      ft.delete(e);
      try {
        await chrome.debugger.detach({ tabId: e });
      } catch {}
    });
  }
  async function P_(e) {
    const t = await kl(e);
    if (t == null) return Yt(await Rl());
    let r;
    try {
      r = await sa(t);
    } catch (n) {
      if (t !== e) throw n;
      const i = await kl(e);
      if (i === e) throw n;
      r = i == null ? await Rl() : await sa(i);
    }
    return Yt(r);
  }
  async function Qe(e) {
    const t = await chrome.tabs.get(e);
    if (dn(t)) return t;
    throw new Error(`Browser tab ${e} has no id`);
  }
  async function kl(e) {
    const t = await chrome.windows.getAll({ windowTypes: ["normal"] }),
      r = t.find((i) => i.id === e);
    if (r?.id !== void 0) return r.id;
    const n = t.find((i) => i.focused && i.id !== void 0);
    return n?.id !== void 0 ? n.id : t.find((i) => i.id !== void 0)?.id ?? null;
  }
  async function Rl() {
    const e = await chrome.windows.create({
        focused: !1,
        type: "normal",
        url: It,
      }),
      t = e?.tabs?.find(dn);
    if (t) return t;
    if (e?.id === void 0) throw new Error("Created browser window has no id");
    return await sa(e.id);
  }
  async function sa(e) {
    const t = await chrome.tabs.create({ active: !1, url: It, windowId: e });
    if (dn(t)) return t;
    throw new Error("Created tab has no id");
  }
  async function M_(e) {
    const t = await chrome.tabs.update(e, { url: It });
    if (t == null || !dn(t)) throw new Error(`Browser tab ${e} has no id`);
    if (t.url === It) return t;
    const r = Date.now() + E_;
    let n = await Qe(e);
    for (; n.url !== It; ) {
      if (Date.now() >= r)
        throw new Error(`Browser tab ${e} did not navigate to ${It}`);
      await new Promise((i) => setTimeout(i, I_)), (n = await Qe(e));
    }
    return n;
  }
  function dn(e) {
    return e.id !== void 0;
  }
  function Yt(e) {
    return {
      id: e.id,
      title: e.title,
      active: e.active,
      faviconUrl: e.favIconUrl,
      url: e.url,
    };
  }
  async function L_() {
    const e = await sl({}),
      t = await $_(e.map(({ tab: r }) => r));
    return e.map(({ tab: r }) => j_(r, t));
  }
  async function D_(e) {
    const t = U_(e.limit),
      r = { text: "", maxResults: t },
      n = Ol(e.from, "from") ?? 0,
      i = Ol(e.to, "to");
    return (
      (r.startTime = n),
      i != null && (r.endTime = i),
      N_(
        await Promise.all(
          x_(e).map(async (a) => await chrome.history.search({ ...r, text: a }))
        ),
        t
      )
    );
  }
  function x_(e) {
    if (e.queries == null) return [""];
    if (!Array.isArray(e.queries) || e.queries.length === 0)
      throw new Error(
        "getUserHistory requires queries to be a non-empty array of strings"
      );
    const t = [];
    for (const r of e.queries) {
      if (typeof r != "string")
        throw new Error(
          "getUserHistory requires queries to be a non-empty array of strings"
        );
      t.push(r);
    }
    return t;
  }
  function N_(e, t) {
    const r = e
        .flatMap((i) => i.flatMap(F_))
        .sort((i, a) => a.dateVisited.localeCompare(i.dateVisited)),
      n = new Set();
    return r
      .filter(({ url: i }) => (n.has(i) ? !1 : (n.add(i), !0)))
      .slice(0, t);
  }
  function U_(e) {
    if (e == null) return 100;
    if (typeof e != "number" || !Number.isInteger(e) || e <= 0)
      throw new Error("getUserHistory requires limit to be a positive integer");
    return e;
  }
  function Ol(e, t) {
    if (e != null) {
      if (typeof e != "string")
        throw new Error(`getUserHistory requires ${t} to be a valid date`);
      return B_(e, t);
    }
  }
  function F_(e) {
    const t = e.url,
      r = e.lastVisitTime;
    return typeof t != "string" || typeof r != "number" || !Number.isFinite(r)
      ? []
      : [
          {
            url: t,
            ...(e.title == null ? {} : { title: e.title }),
            dateVisited: new Date(r).toISOString(),
          },
        ];
  }
  function B_(e, t) {
    const r = Date.parse(e);
    if (Number.isNaN(r))
      throw new Error(`getUserHistory requires ${t} to be a valid date`);
    return r;
  }
  async function $_(e) {
    const t = new Set();
    for (const n of e)
      typeof n.groupId == "number" && n.groupId !== -1 && t.add(n.groupId);
    const r = await Promise.all(
      [...t].map(async (n) => {
        try {
          const i = (await chrome.tabGroups.get(n)).title?.trim();
          return i ? [n, i] : null;
        } catch {
          return null;
        }
      })
    );
    return new Map(r.filter((n) => n != null));
  }
  function j_(e, t) {
    const r = an(e),
      n = typeof e.groupId == "number" ? t.get(e.groupId) : void 0;
    return {
      id: e.id,
      ...(e.title == null ? {} : { title: e.title }),
      ...(e.url == null ? {} : { url: e.url }),
      ...(r <= 0 ? {} : { lastOpened: new Date(r).toISOString() }),
      ...(n == null ? {} : { tabGroup: n }),
    };
  }
  async function oa(e, t) {
    const r = cn.get(e) ?? Promise.resolve();
    let n = () => {};
    const i = new Promise((s) => {
        n = s;
      }),
      a = r.catch(() => {}).then(() => i);
    cn.set(e, a);
    try {
      return await r.catch(() => {}), await t();
    } finally {
      n(), cn.get(e) === a && cn.delete(e);
    }
  }
  async function Pl(e, t) {
    const r = un.get(e) ?? Promise.resolve();
    let n = () => {};
    const i = new Promise((s) => {
        n = s;
      }),
      a = r.catch(() => {}).then(() => i);
    un.set(e, a);
    try {
      return await r.catch(() => {}), await t();
    } finally {
      n(), un.get(e) === a && un.delete(e);
    }
  }
  function Ml(e) {
    return Y_(e).includes("Another debugger");
  }
  function q_(e, t) {
    if ((hn(e, t.tabId), !Number.isFinite(t.x) || !Number.isFinite(t.y)))
      throw new Error(`${e} requires finite x and y coordinates`);
  }
  async function G_(e) {
    let t;
    try {
      t = await chrome.tabs.get(e);
    } catch {
      return !1;
    }
    if (t.active !== !0 || typeof t.windowId != "number") return !1;
    try {
      const r = await chrome.windows.get(t.windowId);
      return r.type === "normal" && r.state !== "minimized";
    } catch {
      return !1;
    }
  }
  function hn(e, t) {
    if (!Number.isInteger(t)) throw new Error(`${e} requires an integer tabId`);
  }
  function Ll(e) {
    return typeof e == "number" && Number.isInteger(e) && e >= 0;
  }
  function z_(e, t) {
    const r = e.filename?.current;
    return typeof r == "string" ? r : t.get(e.id);
  }
  function V_(e) {
    switch (e.state?.current) {
      case "complete":
        return "complete";
      case "interrupted":
        return e.error?.current === "USER_CANCELED" ? "canceled" : "failed";
      case "in_progress":
        return "in_progress";
      case void 0:
        return;
    }
  }
  function H_(e) {
    if (e !== "handoff" && e !== "deliverable")
      throw new Error(`markTab received invalid status ${String(e)}`);
  }
  function W_(e, t) {
    const r = new Map();
    for (const n of e) {
      if (n == null) throw new Error("finalizeTabs received invalid tab entry");
      const { tabId: i, status: a } = n;
      if ((hn("finalizeTabs", i), !t.has(i)))
        throw new Error(`finalizeTabs cannot keep unknown tab ${i}`);
      if (a !== "handoff" && a !== "deliverable")
        throw new Error(`finalizeTabs received invalid status ${String(a)}`);
      if (r.has(i)) throw new Error(`finalizeTabs received duplicate tab ${i}`);
      r.set(i, a);
    }
    return r;
  }
  async function K_(e) {
    const t = e[0];
    if (t != null) {
      if (e.length === 1) {
        await chrome.tabs.remove(t);
        return;
      }
      await chrome.tabs.remove([t, ...e.slice(1)]);
    }
  }
  function la(e) {
    if (e.method === "Target.getTargets")
      return chrome.debugger.getTargets().then((r) => ({ targetInfos: r }));
    const t =
      typeof e.target.targetId == "string"
        ? { targetId: e.target.targetId }
        : e.target;
    return chrome.debugger.sendCommand(t, e.method, e.commandParams);
  }
  async function Z_(e) {
    const t = J_(e.timeoutMs);
    let r;
    const n = new Promise((i, a) => {
      r = setTimeout(() => {
        a(new Dl(e.method, t));
      }, t);
    });
    try {
      return await Promise.race([la(e), n]);
    } finally {
      r !== void 0 && clearTimeout(r);
    }
  }
  function J_(e) {
    return typeof e == "number" && Number.isFinite(e) && e > 0 ? e : T_;
  }
  var Dl = class extends Error {
    constructor(e, t) {
      super(`Timed out after ${t}ms waiting for CDP command ${e}.`),
        (this.name = "CdpCommandTimeoutError");
    }
  };
  function X_(e) {
    return e instanceof Dl;
  }
  function Y_(e) {
    if (e instanceof Error) return e.message;
    if (e && typeof e == "object" && "message" in e) {
      const t = e.message;
      if (typeof t == "string") return t;
    }
    return String(e ?? "");
  }
  var Q_ = "native-transport-reconnect",
    fn = 5e3,
    ev = 3e4 / 6e4,
    tv = "native-host:",
    rv = /^native-host:\d+$/,
    nv = class extends Error {
      errorType;
      constructor(e, t) {
        super(e),
          (this.name = "NativeHostRequestError"),
          (this.errorType = sv(t));
      }
    },
    iv = class extends Error {
      constructor(e, t) {
        super(`Native host request ${e} timed out after ${t}ms`),
          (this.method = e),
          (this.timeoutMs = t),
          (this.name = "NativeHostRequestTimeoutError");
      }
    },
    pn = class extends Error {
      constructor(e) {
        super(e), (this.name = "NativeTransportConnectionError");
      }
    },
    av = class {
      port = null;
      messageCallback = null;
      nextHostRequestId = 0;
      pendingHostRequests = new Map();
      applicationCandidates;
      applicationIndex = 0;
      failedApplications = new Set();
      reconnectAlarmName;
      reconnectTimeoutId = null;
      reconnectPending = !1;
      reconnectAttempt = 0;
      status;
      handleReconnectAlarm = (e) => {
        if (e.name === this.reconnectAlarmName) {
          if (this.port) {
            this.clearReconnectAlarm();
            return;
          }
          this.runReconnectAttempt();
        }
      };
      constructor(e = "com.openai.codexextension") {
        (this.applicationCandidates =
          typeof e == "string" ? [e] : [e[0], ...e.slice(1)]),
          (this.reconnectAlarmName = `${Q_}:${this.application}`),
          (this.status = {
            state: "disconnected",
            hostName: this.application,
            lastChecked: Date.now(),
            reconnectAttempt: this.reconnectAttempt,
          }),
          chrome.alarms.onAlarm.addListener(this.handleReconnectAlarm),
          this.connect() || this.scheduleReconnect();
      }
      sendMessage(e) {
        if (!this.port)
          throw (
            (this.scheduleReconnect(),
            new pn("Native transport is disconnected; reconnect is pending"))
          );
        this.port.postMessage(e);
      }
      requestHost(e, t, r = {}) {
        const n = this.port;
        if (!n)
          return (
            this.scheduleReconnect(),
            Promise.reject(
              new pn("Native transport is disconnected; reconnect is pending")
            )
          );
        const i = this.createHostRequestId(),
          a = {
            jsonrpc: "2.0",
            id: i,
            method: e,
            ...(t === void 0 ? {} : { params: t }),
          };
        return new Promise((s, o) => {
          const l = r.timeoutMs,
            h =
              l == null
                ? void 0
                : setTimeout(() => {
                    this.takePendingHostRequest(i)?.reject(new iv(e, l));
                  }, l);
          this.pendingHostRequests.set(i, {
            ...(h == null ? {} : { timeoutId: h }),
            reject: o,
            resolve: (m) => s(m),
          });
          try {
            n.postMessage(a);
          } catch (m) {
            this.takePendingHostRequest(i),
              o(m instanceof Error ? m : new Error(String(m)));
          }
        });
      }
      setMessageCallback(e) {
        this.messageCallback = e;
      }
      getStatus() {
        return { ...this.status };
      }
      refreshStatus() {
        return (
          this.updateStatus(this.port ? "connected" : this.status.state, {
            error: this.status.error,
            nextRetryMs: this.status.nextRetryMs,
          }),
          this.getStatus()
        );
      }
      reconnectNow(e) {
        const t = this.port;
        if (t != null) {
          (this.port = null),
            this.rejectPendingHostRequests(
              new pn("Native transport reconnect requested")
            );
          try {
            t.disconnect();
          } catch {}
        }
        this.clearReconnectTimeout(),
          this.clearReconnectAlarm(),
          this.updateStatus("reconnecting", {
            ...(e == null ? {} : { error: e }),
            nextRetryMs: fn,
          }),
          this.runReconnectAttempt();
      }
      connect(e = {}) {
        if (this.port) return !0;
        let t;
        for (;;)
          try {
            t = chrome.runtime.connectNative(this.application);
            break;
          } catch (r) {
            const n = r instanceof Error ? r.message : String(r),
              i = e.failureState ?? "disconnected";
            if (
              (this.updateStatus(i, {
                error: n,
                ...(i === "reconnecting" ? { nextRetryMs: fn } : {}),
              }),
              !this.selectFallbackApplication(n))
            )
              return !1;
          }
        return (
          (this.port = t),
          (this.reconnectPending = !1),
          (this.reconnectAttempt = 0),
          this.clearReconnectTimeout(),
          this.clearReconnectAlarm(),
          this.updateStatus("connected"),
          t.onMessage.addListener((r) => {
            this.port === t &&
              (this.failedApplications.clear(),
              !this.handleHostResponse(r) && this.messageCallback?.(r));
          }),
          t.onDisconnect.addListener(() => {
            if (this.port !== t) return;
            (this.port = null),
              this.rejectPendingHostRequests(
                new pn("Native transport disconnected")
              );
            const r = chrome.runtime.lastError?.message;
            this.updateStatus("disconnected", { error: r }),
              !(
                this.selectFallbackApplication(r) &&
                this.connect({ failureState: "reconnecting" })
              ) && this.scheduleReconnect();
          }),
          !0
        );
      }
      createHostRequestId() {
        return (this.nextHostRequestId += 1), `${tv}${this.nextHostRequestId}`;
      }
      handleHostResponse(e) {
        if (!("id" in e)) return !1;
        const t = String(e.id),
          r = this.takePendingHostRequest(t);
        return r
          ? ("error" in e
              ? r.reject(new nv(e.error.message, e.error.data))
              : "result" in e
              ? r.resolve(e.result)
              : r.reject(new Error("Native host returned an invalid response")),
            !0)
          : rv.test(t) && ("error" in e || "result" in e);
      }
      rejectPendingHostRequests(e) {
        for (const t of this.pendingHostRequests.keys())
          this.takePendingHostRequest(t)?.reject(e);
      }
      takePendingHostRequest(e) {
        const t = this.pendingHostRequests.get(e);
        return (
          this.pendingHostRequests.delete(e),
          t?.timeoutId != null && clearTimeout(t.timeoutId),
          t
        );
      }
      scheduleReconnect() {
        this.port ||
          (this.reconnectPending ||
            ((this.reconnectPending = !0), (this.reconnectAttempt += 1)),
          this.scheduleReconnectRetry(),
          this.updateStatus("reconnecting", {
            error: this.status.error,
            nextRetryMs: fn,
          }));
      }
      scheduleReconnectTimeout() {
        this.port ||
          this.reconnectTimeoutId != null ||
          (this.reconnectTimeoutId = setTimeout(() => {
            (this.reconnectTimeoutId = null), this.runReconnectAttempt();
          }, fn));
      }
      clearReconnectTimeout() {
        this.reconnectTimeoutId != null &&
          (clearTimeout(this.reconnectTimeoutId),
          (this.reconnectTimeoutId = null));
      }
      scheduleReconnectRetry() {
        this.scheduleReconnectTimeout(), this.scheduleReconnectAlarm();
      }
      runReconnectAttempt() {
        this.port ||
          (this.clearReconnectTimeout(),
          (this.reconnectPending = !0),
          (this.reconnectAttempt += 1),
          this.connect({ failureState: "reconnecting" }) ||
            this.scheduleReconnectRetry());
      }
      async ensureReconnectAlarm() {
        if (this.port) return;
        const e = await chrome.alarms.get(this.reconnectAlarmName);
        this.port ||
          e ||
          (await chrome.alarms.create(this.reconnectAlarmName, {
            periodInMinutes: ev,
          }));
      }
      clearReconnectAlarm() {
        chrome.alarms.clear(this.reconnectAlarmName).catch(() => {});
      }
      scheduleReconnectAlarm() {
        this.ensureReconnectAlarm().catch((e) => {
          if (this.port) return;
          this.reconnectPending = !1;
          const t = e instanceof Error ? e.message : String(e);
          this.updateStatus("disconnected", { error: t });
        });
      }
      updateStatus(e, t = {}) {
        this.status = {
          state: e,
          hostName: this.application,
          lastChecked: Date.now(),
          reconnectAttempt: this.reconnectAttempt,
          ...(t.error ? { error: t.error } : {}),
          ...(t.error === "Specified native messaging host not found."
            ? { errorType: "host_not_found" }
            : {}),
          ...(t.nextRetryMs ? { nextRetryMs: t.nextRetryMs } : {}),
        };
      }
      selectFallbackApplication(e) {
        if (
          e !== "Specified native messaging host not found." ||
          this.applicationCandidates.length === 1
        )
          return !1;
        this.failedApplications.add(this.application);
        const t = this.applicationCandidates.findIndex(
          (r) => !this.failedApplications.has(r)
        );
        return t === -1
          ? (this.failedApplications.clear(), (this.applicationIndex = 0), !1)
          : ((this.applicationIndex = t), !0);
      }
      get application() {
        return (
          this.applicationCandidates[this.applicationIndex] ??
          this.applicationCandidates[0]
        );
      }
    };
  function sv(e) {
    if (e == null || typeof e != "object" || !("type" in e)) return;
    const { type: t } = e;
    return typeof t == "string" ? t : void 0;
  }
  var iT = "codex:page-event";
  function Qt(e, t) {
    if (
      e.id !== chrome.runtime.id ||
      e.frameId !== 0 ||
      (e.documentLifecycle != null && e.documentLifecycle !== "active") ||
      typeof e.origin != "string" ||
      typeof e.url != "string" ||
      typeof e.tab?.id != "number" ||
      typeof e.tab.windowId != "number"
    )
      return !1;
    let r;
    try {
      r = new URL(e.url);
    } catch {
      return !1;
    }
    return e.origin !== r.origin ? !1 : $n(r, t);
  }
  function ov(e, t, r) {
    if (r.name !== "search_browser_tab_mentions") return;
    if (
      r.sender == null ||
      r.sender.tab?.incognito === !0 ||
      !Nl(r.sender, t)
    ) {
      r.disconnect();
      return;
    }
    const n = r.sender;
    let i = !1,
      a;
    const s = () => {
        i || ((i = !0), a?.(), r.onMessage.removeListener(l));
      },
      o = (h) => {
        if (i) return !1;
        try {
          return r.postMessage(h), !0;
        } catch {
          return s(), !1;
        }
      },
      l = (h) => {
        i ||
          (r.onMessage.removeListener(l),
          xl(e, t, h, n, (m) => {
            !o(m) ||
              !m.ok ||
              (a = e.subscribeCandidateUpdates(m.candidates, (d) => {
                o({ ok: !0, candidates: d });
              }));
          }));
      };
    r.onMessage.addListener(l), r.onDisconnect.addListener(s);
  }
  function xl(e, t, r, n, i) {
    if (Dc(r) == null) return !1;
    if (!(n.tab?.incognito !== !0 && Nl(n, t)))
      return (
        i({
          ok: !1,
          error: "Chrome tab mentions can only be accessed from ChatGPT",
        }),
        !0
      );
    const a = xc(r);
    if (a == null)
      return i({ ok: !1, error: "Invalid Chrome tab mention search" }), !0;
    const s = n.tab?.id,
      o = Math.min(a.limit + (s != null && a.limit > 0 ? 1 : 0), 100);
    return (
      e
        .getUserTabs({ includeFavicons: !0, query: a.query, limit: o })
        .then((l) =>
          i({
            ok: !0,
            candidates: l.filter(({ id: h }) => h !== s).slice(0, a.limit),
          })
        )
        .catch((l) => i({ ok: !1, error: lv(l) })),
      !0
    );
  }
  function lv(e) {
    return e instanceof Error ? e.message : String(e);
  }
  function Nl(e, t) {
    if (Qt(e, t)) return !0;
    if (
      e.id !== chrome.runtime.id ||
      e.tab != null ||
      (e.documentLifecycle != null && e.documentLifecycle !== "active") ||
      typeof e.url != "string" ||
      typeof e.origin != "string"
    )
      return !1;
    try {
      const r = new URL(e.url);
      return e.origin === r.origin && $n(r, t);
    } catch {
      return !1;
    }
  }
  var Ul = "connector_openai_browser",
    ca = { "OAI-Product-Sku": "TPP" };
  async function cv(e) {
    const { plugin_id: t, plugin: r } = await e.request(
      `/ps/plugins/canonical-app/${Ul}`,
      { headers: ca }
    );
    return t == null ||
      r?.id !== t ||
      r.status !== "ENABLED" ||
      r.installation_policy === "NOT_AVAILABLE" ||
      !(
        await e.request(`/ps/plugins/${encodeURIComponent(t)}/ensure`, {
          method: "POST",
          headers: ca,
        })
      ).enabled
      ? !1
      : (await e.request("/aip/connectors/links/noauth", {
          method: "POST",
          headers: { ...ca, "Content-Type": "application/json" },
          body: JSON.stringify({
            connector_id: Ul,
            name: "Browser",
            action_names: [],
            ensure_exists: !0,
          }),
        }),
        !0);
  }
  var mn = "browserPluginSetupIdentity",
    er = "browserPluginSetupNegativeResult",
    uv = 30 * 6e4;
  function dv() {
    let e, t, r;
    return {
      async load() {
        (e ??= chrome.storage.session
          .get([mn, er])
          .catch(() => ({}))
          .then((n) => {
            const i = n[mn];
            (t = typeof i == "string" ? i : void 0), (r = hv(n[er]));
          })),
          await e;
      },
      isComplete(n) {
        return t === tr(n);
      },
      shouldSkip(n) {
        const i = tr(n);
        return t === i || (r?.identity === i && Date.now() < r.notBeforeMs);
      },
      record(n, i) {
        const a = tr(n);
        i
          ? ((t = a), chrome.storage.session.set({ [mn]: a }).catch(() => {}))
          : ((r = { identity: a, notBeforeMs: Date.now() + uv }),
            chrome.storage.session.set({ [er]: r }).catch(() => {}));
      },
      clear() {
        (t = void 0),
          (r = void 0),
          chrome.storage.session.remove([mn, er]).catch(() => {});
      },
      clearNegative() {
        (r = void 0), chrome.storage.session.remove(er).catch(() => {});
      },
    };
  }
  function tr(e) {
    return JSON.stringify([e.userId, e.id]);
  }
  function hv(e) {
    if (typeof e != "object" || e == null) return;
    const { identity: t, notBeforeMs: r } = e;
    if (typeof t == "string" && typeof r == "number" && Number.isFinite(r))
      return { identity: t, notBeforeMs: r };
  }
  var gn = 1,
    ua = 2e3,
    fv = 2147483647,
    pv = "chatgpt-work-browser-plugin";
  function mv(e) {
    let t = !1,
      r,
      n = 0,
      i = 0,
      a,
      s,
      o;
    const l = dv();
    let h,
      m,
      d = !1;
    function f(y = hs()) {
      if (t || Date.now() < i) return;
      const T = o;
      s?.abort();
      const E = new AbortController();
      (s = E), c(E, y, T);
    }
    async function c(y, T, E) {
      try {
        await l.load(),
          y.signal.throwIfAborted(),
          o == null && a == null && n > gn && (n = 0);
        const I = await T(y.signal);
        if (
          (y.signal.throwIfAborted(),
          "error" in I && I.status !== 401 && I.status !== 403)
        )
          throw I.error === "http"
            ? new Cr(I.status, I.retryAfterMs)
            : new Error("Failed to read ChatGPT session.");
        const C = "error" in I ? null : I.session,
          O = C == null ? void 0 : tr(C.account);
        if (
          ((O !== r || C == null) &&
            (g(),
            h?.abort(),
            (h = void 0),
            (m = void 0),
            (d = !1),
            (r != null || C == null) && (l.clear(), w()),
            (r = O)),
          C == null)
        )
          return;
        if (l.isComplete(C.account)) {
          w();
          return;
        }
        if (
          ((m ??= p(C.account.userId, T)),
          await m,
          y.signal.throwIfAborted(),
          !d ||
            a != null ||
            Date.now() < i ||
            l.shouldSkip(C.account) ||
            o != null ||
            (E != null && tr(E.account) === O))
        )
          return;
        u(new fs(C.accessToken, C.account));
      } catch (I) {
        if (t || s !== y || y.signal.aborted) return;
        g(), v(I);
      }
    }
    async function p(y, T) {
      const E = new AbortController();
      h = E;
      let I = !0;
      try {
        return (
          await Vn(T, E.signal),
          await Rr(
            pv,
            (C, O, $) => {
              if (t || h !== E) return;
              const G = d;
              (d = O === "Ready" && $ === y && C),
                d
                  ? !G &&
                    !I &&
                    n <= gn &&
                    (l.clearNegative(),
                    Date.now() < i ? S(Math.max(ua, i - Date.now())) : f())
                  : (g(), $ === y && (clearTimeout(a), (a = void 0))),
                O === "Ready" && (I = !1);
            },
            E.signal
          )
        );
      } catch (C) {
        throw (h === E && (E.abort(), (h = void 0), (m = void 0), (d = !1)), C);
      }
    }
    function u(y) {
      (o = y),
        cv(y)
          .then((T) => {
            if (!(t || o !== y) && (w(), l.record(y.account, T), T))
              try {
                e().catch(() => {});
              } catch {}
          })
          .catch((T) => {
            !t && o === y && v(T);
          })
          .finally(() => {
            y.dispose(), o === y && (o = void 0);
          });
    }
    function g() {
      o?.dispose(), (o = void 0);
    }
    function w() {
      clearTimeout(a), (a = void 0), (n = 0), (i = 0);
    }
    function v(y) {
      if (t) return;
      const T = y instanceof Cr ? y.retryAfterMs ?? 0 : 0;
      if (
        ((i = Math.max(i, Date.now() + T)),
        y instanceof Cr &&
          (y.retryable === !1 ||
            ![401, 408, 429, 500, 502, 503, 504].includes(y.status)))
      ) {
        clearTimeout(a), (a = void 0), (n = gn + 1);
        return;
      }
      if (a == null && n++ >= gn) {
        console.warn("[browser-plugin] failed to set up Browser");
        return;
      }
      clearTimeout(a),
        (a = void 0),
        S(Math.max(ua, i - Date.now()) + Math.floor(Math.random() * ua));
    }
    function S(y) {
      y > fv ||
        (clearTimeout(a),
        (a = setTimeout(() => {
          (a = void 0), f();
        }, y)));
    }
    return {
      refresh: f,
      stop() {
        (t = !0), w(), s?.abort(), h?.abort(), g();
      },
    };
  }
  var da = new Map();
  async function Fl(e, t) {
    const r = await chrome.tabs.query({ url: Pu(e) });
    await Promise.allSettled(
      r.map(async (n) => {
        if (n.id == null || n.discarded) return;
        const i = n.id,
          a = await chrome.webNavigation.getFrame({ tabId: i, frameId: 0 });
        if (
          a == null ||
          a.documentLifecycle !== "active" ||
          !$n(new URL(a.url), e)
        )
          return;
        const { documentId: s } = a;
        let o = da.get(s);
        o == null &&
          ((o = gv(i, s).finally(() => {
            da.delete(s);
          })),
          da.set(s, o)),
          !(!(await o) || !t) &&
            (await chrome.tabs.sendMessage(i, { type: Rc }, { documentId: s }));
      })
    );
  }
  async function gv(e, t) {
    const r = async () => {
      const n = await ie(
        chrome.tabs.sendMessage(e, { type: kc }, { documentId: t })
      ).catch(() => null);
      return (
        typeof n == "object" &&
        n != null &&
        "version" in n &&
        n.version === chrome.runtime.getManifest().version
      );
    };
    return (await r())
      ? !0
      : (await ie(
          chrome.scripting.executeScript({
            files: ["content-scripts/chatgpt-website.js"],
            target: { tabId: e, documentIds: [t] },
          })
        )) != null && (await r());
  }
  var _v = String.raw`^https://(persistent\.oaistatic\.com/codex-app-prod/ChatGPT(-latest-x64)?\.dmg|get\.microsoft\.com/installer/download/9PLM9XGG6VKS\?cid=website_cta_psi)$`;
  async function Bl() {
    const [e] = await chrome.downloads.search({
      limit: 1,
      orderBy: ["-startTime"],
      urlRegex: _v,
    });
    return e;
  }
  function vv(e, t, r) {
    return typeof e != "object" ||
      e == null ||
      !("type" in e) ||
      e.type !== "SHOW_CODEX_INSTALLER" ||
      !Qt(t, r)
      ? !1
      : (Bl()
          .then((n) => {
            n?.exists !== !1 &&
              n?.state === "complete" &&
              chrome.downloads.show(n.id);
          })
          .catch(() => {}),
        !0);
  }
  async function wv() {
    const e = await Bl();
    return e?.exists === !1 || e?.state === "interrupted" || e?.paused === !0
      ? { status: "idle" }
      : e?.state === "complete"
      ? { status: "downloaded" }
      : e?.state !== "in_progress"
      ? { status: "idle" }
      : {
          progressPercent:
            e.totalBytes > 0
              ? Math.min(Math.floor((e.bytesReceived / e.totalBytes) * 100), 99)
              : null,
          status: "downloading",
        };
  }
  var $l = "codexSidePanelOpenWindowIds";
  function bv(e) {
    return Array.isArray(e)
      ? new Set(
          e.filter((t) => typeof t == "number" && Number.isSafeInteger(t))
        )
      : new Set();
  }
  var jl = [
      "#2563eb",
      "#7c3aed",
      "#db2777",
      "#dc2626",
      "#ea580c",
      "#059669",
      "#0891b2",
      "#4f46e5",
    ],
    yv = 4,
    Sv = 24,
    Tv = [
      "alarms",
      "bookmarks",
      "debugger",
      "declarativeNetRequestWithHostAccess",
      "downloads",
      "favicon",
      "history",
      "nativeMessaging",
      "notifications",
      "offscreen",
      "scripting",
      "sessions",
      "storage",
      "tabGroups",
      "tabs",
      "topSites",
      "webNavigation",
    ],
    aT = [...Tv, "contextMenus", "sidePanel"],
    sT = `script-src 'self'; object-src 'none'; connect-src 'self' http://127.0.0.1:* http://localhost:* ws://127.0.0.1:* ws://localhost:* https://ab.chatgpt.com https://chatgpt.com https://api.openai.com https://api.openai.org ${ws
      .map((e) => `https://*${e}`)
      .join(" ")}; font-src 'self' https://cdn.openai.com;`;
  function Ev(e) {
    if (typeof e != "string") return null;
    const t = e.trim().replace(/\s+/gu, " ");
    return t.length === 0 ? null : t.slice(0, Sv);
  }
  function Iv(e) {
    const t = Ev(e);
    return t == null ? null : { backgroundColor: Av(t), text: Cv(t) };
  }
  function Av(e) {
    let t = 0;
    for (const r of e) t = (t * 31 + r.charCodeAt(0)) >>> 0;
    return jl[t % jl.length];
  }
  function Cv(e) {
    const t = e.match(/[A-Za-z0-9]+/gu) ?? [];
    return (t.length > 1 ? t.map((r) => r[0]).join("") : t[0] ?? e)
      .slice(0, yv)
      .toUpperCase();
  }
  var rr = {
      badgeBackgroundColor: "#0169cc",
      badgeText: "NEW",
      title:
        "Use the new ChatGPT side chat feature. Open the ChatGPT extension to continue.",
      version: 1,
    },
    nr = "lastSeenExtensionActionCalloutVersion",
    ql = Promise.resolve();
  function kv(e) {
    return ha(() => zl(e));
  }
  function Rv() {
    return ha(async () => {
      (await Gl()) ||
        (await Promise.all([
          chrome.action.setTitle({ title: rr.title }),
          chrome.action.setBadgeBackgroundColor({
            color: rr.badgeBackgroundColor,
          }),
          chrome.action.setBadgeText({ text: rr.badgeText }),
        ]));
    });
  }
  function Ov(e = "") {
    return ha(async () => {
      if (await Gl()) return;
      const t = chrome.runtime.getManifest();
      await Promise.all([
        chrome.action.setTitle({ title: t.action?.default_title ?? t.name }),
        zl(e),
      ]),
        await chrome.storage.local.set({ [nr]: rr.version });
    });
  }
  async function Gl() {
    const e = (await chrome.storage.local.get(nr))[nr];
    return typeof e == "number" && e >= rr.version;
  }
  async function zl(e) {
    const t = Iv(e);
    if (t == null) {
      await chrome.action.setBadgeText({ text: "" });
      return;
    }
    await Promise.all([
      chrome.action.setBadgeBackgroundColor({ color: t.backgroundColor }),
      chrome.action.setBadgeText({ text: t.text }),
    ]);
  }
  function ha(e) {
    const t = ql.then(e);
    return (ql = t.catch(() => {})), t;
  }
  var ir = "codexPendingUpdateVersion",
    Pv = class {
      pendingUpdateVersion = null;
      reloadInProgress = !1;
      currentVersion;
      isInUse;
      onUpdateAvailable;
      reload;
      storage;
      constructor(e, t = {}) {
        (this.currentVersion = t.currentVersion ?? null),
          (this.isInUse = e),
          (this.onUpdateAvailable =
            t.onUpdateAvailable ?? chrome.runtime.onUpdateAvailable),
          (this.reload = t.reload ?? (() => chrome.runtime.reload())),
          (this.storage = t.storage ?? chrome.storage.session);
      }
      register() {
        this.onUpdateAvailable.addListener(async (e) => {
          await this.handleUpdateAvailable(e).catch(() => {});
        }),
          this.maybeReloadForPendingUpdate().catch(() => {});
      }
      get installedVersion() {
        return this.currentVersion ?? chrome.runtime.getManifest().version;
      }
      async maybeReloadForPendingUpdate() {
        if (
          !this.reloadInProgress &&
          (this.pendingUpdateVersion == null &&
            (await this.restorePendingUpdate()),
          this.pendingUpdateVersion != null && !this.isInUse())
        ) {
          this.reloadInProgress = !0;
          try {
            await this.clearPendingUpdate(), this.reload();
          } catch (e) {
            throw ((this.reloadInProgress = !1), e);
          }
        }
      }
      async handleUpdateAvailable(e) {
        await this.storage.set({ [ir]: e.version }),
          (this.pendingUpdateVersion = e.version),
          await this.maybeReloadForPendingUpdate();
      }
      async restorePendingUpdate() {
        const e = (await this.storage.get(ir))[ir];
        if (typeof e == "string") {
          if (e === this.installedVersion) {
            await this.clearPendingUpdate();
            return;
          }
          this.pendingUpdateVersion = e;
        }
      }
      async clearPendingUpdate() {
        (this.pendingUpdateVersion = null), await this.storage.remove(ir);
      }
    };
  function Mv(e, t, r, n) {
    if (n.name !== "chatgpt-extension-status") return;
    const i = n.sender,
      a = i?.tab?.id;
    if (i == null || typeof a != "number" || !Qt(i, r)) {
      n.disconnect();
      return;
    }
    const s = {};
    let o = !1;
    const l = () => {
        o ||
          ((o = !0),
          n.onDisconnect.removeListener(l),
          n.onMessage.removeListener(w),
          n.disconnect());
      },
      h = () => {
        if (!o)
          try {
            n.postMessage({ type: "update", status: s });
          } catch {
            l();
          }
      },
      m = (v, S) => {
        let y = !1;
        return () => {
          if (o || y) return;
          y = !0;
          const T = () => {
            (y = !1), h();
          };
          Promise.resolve()
            .then(v)
            .catch((E) => {
              if (o) throw E;
              return v();
            })
            .then((E) => {
              o || S(E);
            })
            .then(T, T);
        };
      },
      d = m(Ce, (v) => {
        s.browserContext = { instanceId: v };
      }),
      f = m(
        () => chrome.storage.local.get(nr),
        (v) => {
          const S = v[nr];
          s.sidePanel = {
            ...s.sidePanel,
            hasEverOpened: typeof S == "number" && S > 0,
          };
        }
      ),
      c = m(
        () =>
          Promise.all([
            chrome.storage.session.get([$l, ir]),
            chrome.tabs.get(a),
          ]),
        ([v, S]) => {
          (s.sidePanel = {
            ...s.sidePanel,
            currentWindow: bv(v.codexSidePanelOpenWindowIds).has(S.windowId)
              ? "open"
              : "closed",
          }),
            (s.extension = {
              ...s.extension,
              updateAvailable:
                typeof v.codexPendingUpdateVersion == "string" &&
                v.codexPendingUpdateVersion !== t,
            });
        }
      ),
      p = m(
        () => chrome.action.getUserSettings(),
        (v) => {
          s.toolbar = { pin: v.isOnToolbar ? "pinned" : "unpinned" };
        }
      ),
      u = m(wv, (v) => {
        s.installer = v;
      }),
      g = () => {
        if (o) return;
        const v = e.refreshStatus(),
          S = typeof chrome.sidePanel?.open == "function";
        (s.capabilities = {
          [Fe.browserTabMentionsSearch]: !0,
          [Fe.browserControlStateRead]: !0,
          [Fe.extensionUpdateRead]: !0,
          [Fe.nativeHostStatus]: !0,
          ...(S
            ? {
                [Fe.sidePanelOpen]: !0,
                [Fe.sidePanelPromptPrefill]: !0,
                [Fe.sidePanelStateRead]: !0,
              }
            : {}),
          [Fe.toolbarPinRead]: !0,
          [Fe.websiteActionRequest]: !0,
        }),
          (s.extension = { ...s.extension, channel: r, version: t }),
          (s.browserControl = {
            phase: he.isBrowserControlActive() ? "active" : "idle",
          }),
          (s.nativeHost = {
            errorType: v.errorType,
            lastCheckedAt: v.lastChecked,
            transport: v.state,
          }),
          d(),
          f(),
          c(),
          p(),
          v.state !== "connected" && u(),
          h();
      },
      w = (v) => {
        v?.type === "refresh" && g();
      };
    n.onDisconnect.addListener(l), n.onMessage.addListener(w), g();
  }
  var oT = "GET_EXTENSION_INSTANCE_ID";
  function Lv(e, t, r) {
    return e == null ||
      typeof e != "object" ||
      !("type" in e) ||
      e.type !== "GET_EXTENSION_INSTANCE_ID"
      ? !1
      : t.id !== chrome.runtime.id ||
        t.url !== chrome.runtime.getURL("codex-work-sidepanel.html")
      ? (r({ instanceId: null }), !0)
      : (Ce().then(
          (n) => r({ instanceId: n }),
          () => r({ instanceId: null })
        ),
        !0);
  }
  var Dv = "codex-app-chrome-extension-new-tab-onboarding-on-install";
  async function xv({ reason: e }) {
    e !== "install" ||
      Mn(globalThis.navigator) === "opera" ||
      ((await wt(Dv).catch(() => !1)) &&
        (await chrome.tabs.create({
          active: !0,
          url: `${Ir}/work/extension/installed`,
        })));
  }
  var fa = "codexSidePanelDestination",
    _n = "codexSidePanelOpenDestinations",
    pa = "codexWorkSidePanelTabIds",
    At = { kind: "waiting_room" },
    te = At,
    ar,
    _e = new Map(),
    Ct = new Set(),
    pt = new Set(),
    Vl,
    Hl,
    sr,
    vn = new AbortController(),
    ma,
    ga = Promise.resolve();
  function or() {
    return te;
  }
  function Wl(e) {
    Ct.add(e);
  }
  function Kl(e) {
    return te.kind !== "work_sidepanel"
      ? Promise.resolve()
      : chrome.sidePanel.setOptions({ enabled: !0, path: ct, tabId: e });
  }
  async function _a(e, t) {
    await lr(),
      t ? pt.add(e) : pt.delete(e),
      await Ta(),
      !t &&
        te.kind === "work_sidepanel" &&
        (await chrome.sidePanel.setOptions({
          enabled: !1,
          path: ct,
          tabId: e,
        }));
  }
  async function va(e, t, r, n) {
    if ((await ya(), t)) {
      const a = await $v(e, r, n);
      return (
        Ct.delete(e),
        _e.set(e, a),
        await Sa(),
        ar != null && (r === "side-panel-loading.html" || a.kind !== te.kind)
          ? (await wa(te, !0), te)
          : a
      );
    }
    Ct.delete(e);
    const i = _e.get(e) ?? At;
    return (
      _e.delete(e),
      await Sa(),
      _e.size === 0 && Ct.size === 0 && (await Jl()),
      i
    );
  }
  async function Nv() {
    (ma ??= Fv(vn.signal)), await ma, await ga;
  }
  function Uv() {
    if (sr != null) return sr;
    const e = ({ tabId: i }) => {
        ba(i).catch(() => {});
      },
      t = (i) => {
        i.id != null && ba(i.id).catch(() => {});
      },
      r = (i) => {
        Gv(i).catch(() => {});
      };
    chrome.tabs.onActivated.addListener(e),
      chrome.tabs.onCreated.addListener(t),
      chrome.tabs.onRemoved.addListener(r),
      Nv().catch(() => {
        console.warn("Failed to initialize Chrome side panel destination.");
      });
    const n = vn;
    return (
      (sr = () => {
        vn === n &&
          (n.abort(),
          chrome.tabs.onActivated.removeListener(e),
          chrome.tabs.onCreated.removeListener(t),
          chrome.tabs.onRemoved.removeListener(r),
          (vn = new AbortController()),
          (ma = void 0),
          (ar = void 0),
          (sr = void 0));
      }),
      sr
    );
  }
  async function Fv(e) {
    let t;
    const r = (a) => {
        (t = a),
          (ga = ga
            .then(async () => {
              if (e.aborted || a !== t || a.kind === ar?.kind) return;
              ar = void 0;
              const s = await ec(a);
              if (e.aborted || a !== t) return;
              const o = s ? a : At;
              await wa(o, !0), (ar = o);
            })
            .catch(() => {
              console.warn("Failed to update Chrome side panel destination.");
            }));
      },
      i = await zv();
    if (!e.aborted) {
      i?.kind === "work_sidepanel" && (await wa(i));
      try {
        await Rr(
          Ws,
          (a, s, o) => {
            s === "Ready" ? r(Zl(o == null || a)) : (t = void 0);
          },
          e
        );
      } catch {
        r({ kind: "waiting_room" });
      }
    }
  }
  function Zl(e) {
    return e ? { kind: "work_sidepanel" } : { kind: "waiting_room" };
  }
  async function wa(e, t = !1) {
    if (
      ((te =
        e.kind === "work_sidepanel" && Zl(!0).kind !== "work_sidepanel"
          ? { kind: "waiting_room" }
          : e),
      await ya(),
      _e.size > 0 || Ct.size > 0)
    ) {
      if (t) {
        await Bv();
        for (const n of _e.keys()) _e.set(n, te);
        await Sa();
      }
      const r = _e.values().next().value ?? te;
      await chrome.sidePanel
        .setPanelBehavior?.({
          openPanelOnActionClick: r.kind === "work_sidepanel",
        })
        .catch(() => {});
      return;
    }
    await Jl();
  }
  async function Bv() {
    const e = te.kind === "work_sidepanel" ? ct : Nr,
      [t, r] = await Promise.all([
        chrome.sidePanel.getOptions({}),
        chrome.tabs.query(te.kind === "work_sidepanel" ? { active: !0 } : {}),
      ]);
    await Promise.all([
      (t.enabled || te.kind === "waiting_room") &&
      wn(t.path) != null &&
      (!t.enabled || t.path !== e)
        ? chrome.sidePanel.setOptions({ enabled: !0, path: e })
        : Promise.resolve(),
      ...r.map(async (n) => {
        if (n.id == null) return;
        const i = await chrome.sidePanel.getOptions({ tabId: n.id });
        i.tabId !== n.id ||
          wn(i.path) == null ||
          i.path === e ||
          (await chrome.sidePanel.setOptions({
            enabled: te.kind === "waiting_room" || i.enabled,
            path: e,
            tabId: n.id,
          }));
      }),
    ]);
  }
  async function Jl() {
    try {
      await Xl(), te.kind === "work_sidepanel" ? await Yl() : await Ql();
    } catch {
      (te = At),
        await ec(te),
        await Xl().catch(() => {}),
        te.kind === "work_sidepanel"
          ? await Yl().catch(() => {})
          : await Ql().catch(() => {});
    }
    await chrome.sidePanel
      .setPanelBehavior?.({
        openPanelOnActionClick: te.kind === "work_sidepanel",
      })
      .catch(() => {});
  }
  async function Xl() {
    const e = te.kind === "waiting_room",
      t = Nr,
      r = await chrome.sidePanel.getOptions({});
    (r.enabled !== e || r.path !== t) &&
      (await chrome.sidePanel.setOptions({ enabled: e, path: t }));
  }
  async function Yl() {
    await lr();
    const e = await chrome.tabs.query({});
    await Promise.all(
      e.map((t) => (t.id == null ? Promise.resolve() : ba(t.id)))
    );
  }
  async function Ql() {
    await lr(), pt.clear(), await Ta();
    const e = await chrome.tabs.query({});
    await Promise.all(
      e.map(async (t) => {
        t.id != null &&
          (await chrome.sidePanel.getOptions({ tabId: t.id })).path ===
            "codex-work-sidepanel.html" &&
          (await chrome.sidePanel.setOptions({
            enabled: !0,
            path: Nr,
            tabId: t.id,
          }));
      })
    );
  }
  async function ba(e) {
    if (te.kind === "work_sidepanel") {
      await ya();
      for (const t of _e.values()) if (t.kind === "waiting_room") return;
      if (_e.size > 0 || Ct.size > 0) {
        const t = await chrome.sidePanel.getOptions({});
        if (t.enabled && t.path === "codex-work-sidepanel.html") {
          const r = await chrome.sidePanel.getOptions({ tabId: e });
          r.tabId === e &&
            r.path === "waiting-room.html" &&
            (await chrome.sidePanel.setOptions({
              enabled: r.enabled,
              path: ct,
              tabId: e,
            }));
          return;
        }
      }
      await lr(),
        await chrome.sidePanel.setOptions({
          enabled: pt.has(e),
          path: ct,
          tabId: e,
        });
    }
  }
  async function $v(e, t, r) {
    const n = wn(t);
    if (n != null) return n;
    try {
      return (
        wn(
          (await chrome.sidePanel.getOptions(r == null ? {} : { tabId: r }))
            .path
        ) ?? At
      );
    } catch {
      return _e.get(e) ?? At;
    }
  }
  function wn(e) {
    if (e === "codex-work-sidepanel.html") return { kind: "work_sidepanel" };
    if (e === "waiting-room.html" || e === "side-panel-loading.html")
      return { kind: "waiting_room" };
  }
  async function ya() {
    (Vl ??= jv()), await Vl;
  }
  async function jv() {
    const e = chrome.storage.session;
    if (e != null)
      try {
        if (
          typeof chrome.runtime?.getContexts == "function" &&
          (await chrome.runtime.getContexts({ contextTypes: ["SIDE_PANEL"] }))
            .length === 0
        ) {
          await e.set({ [_n]: {} });
          return;
        }
        const t = (await e.get(_n))[_n];
        if (t == null || typeof t != "object") return;
        for (const [r, n] of Object.entries(t)) {
          const i = Number(r);
          !Number.isSafeInteger(i) ||
            i < 0 ||
            ((n === "waiting_room" || n === "work_sidepanel") &&
              _e.set(i, { kind: n }));
        }
      } catch {}
  }
  async function Sa() {
    const e = chrome.storage.session;
    e != null &&
      (await e
        .set({ [_n]: Object.fromEntries([..._e].map(([t, r]) => [t, r.kind])) })
        .catch(() => {}));
  }
  async function lr() {
    (Hl ??= qv()), await Hl;
  }
  async function qv() {
    const e = chrome.storage.session;
    if (e != null)
      try {
        const t = (await e.get(pa))[pa];
        if (!Array.isArray(t)) return;
        for (const r of t)
          typeof r == "number" &&
            Number.isSafeInteger(r) &&
            r >= 0 &&
            pt.add(r);
      } catch {}
  }
  async function Ta() {
    await chrome.storage.session?.set({ [pa]: [...pt] }).catch(() => {});
  }
  async function Gv(e) {
    await lr(),
      pt.delete(e) && (await Ta()),
      await chrome.storage.session?.remove?.([ih(e), Ks(e)]).catch(() => {});
  }
  async function zv() {
    const e = chrome.storage.session;
    if (e == null) return { kind: "waiting_room" };
    try {
      const t = (await e.get(fa))[fa];
      return t == null
        ? void 0
        : t === "waiting_room" || t === "work_sidepanel"
        ? { kind: t }
        : { kind: "waiting_room" };
    } catch {
      return { kind: "waiting_room" };
    }
  }
  async function ec(e) {
    const t = chrome.storage.session;
    if (t == null) return !1;
    try {
      return await t.set({ [fa]: e.kind }), !0;
    } catch {
      return !1;
    }
  }
  var bn = new Set(),
    yn = new Set(),
    kt = new Map(),
    tc = !1,
    rc = "ask-chatgpt",
    Vv = "codex_chrome_extension_sidechat_open";
  function Hv() {
    if (chrome.sidePanel == null) {
      nc();
      return;
    }
    Rv().catch(() => {}), Xv(), nc(), Wv(), Jv();
  }
  function nc() {
    chrome.action.onClicked.addListener((e) => {
      if (typeof chrome.sidePanel?.open != "function") {
        const t =
          or().kind === "work_sidepanel" ? "work_sidepanel" : "waiting_room";
        chrome.tabs
          .create({
            url: chrome.runtime.getURL(t === "work_sidepanel" ? ct : Nr),
          })
          .then(() => {
            Ea("icon", t);
          })
          .catch(() => {});
        return;
      }
      (or().kind === "work_sidepanel" &&
        e.windowId != null &&
        oc(e.windowId, e.id)) ||
        ac(e, "icon").catch(() => {});
    });
  }
  function Wv() {
    chrome.commands.onCommand.addListener((e, t) => {
      e === "open-codex-side-panel" &&
        ac(t, "keyboard_shortcut").catch(() => {});
    });
  }
  function Kv(e, t, r) {
    const n = t.tab?.windowId,
      i = t.tab?.id;
    if (
      !tw(e) ||
      e.type !== "OPEN_CODEX_SIDE_PANEL" ||
      !Qt(t, r) ||
      n == null ||
      i == null ||
      typeof chrome.sidePanel?.open != "function"
    )
      return !1;
    const a = e.source === void 0 ? "chatgpt_website" : e.source;
    return typeof a != "string"
      ? !1
      : (ic(
          n,
          i,
          a,
          typeof e.prompt == "string" &&
            e.prompt.length <= 8192 &&
            e.prompt.trim().length > 0
            ? { createdAtMs: Date.now(), kind: "prompt", prompt: e.prompt }
            : void 0
        ),
        !0);
  }
  function ic(e, t, r, n) {
    const i = or().kind === "work_sidepanel" ? t : void 0,
      a = i == null ? Promise.resolve() : Kl(i);
    Wl(e);
    const s = chrome.sidePanel.open(i == null ? { windowId: e } : { tabId: i });
    Promise.all([a, s])
      .then(
        async () => {
          const o = await cr(e, !0, void 0, i);
          if (
            (Ea(r, sc(o)),
            o.kind === "work_sidepanel" &&
              n != null &&
              (n.kind === "prompt" || n.selectedText.trim().length > 0))
          ) {
            const l = {
              type: Cc,
              createdAtMs: n.createdAtMs,
              prompt: n.kind === "prompt" ? n.prompt : void 0,
              selectedText:
                n.kind === "selection" ? n.selectedText.slice(0, Ac) : void 0,
            };
            await chrome.storage.session.set({ [Ks(t)]: l }).catch(() => {});
          }
        },
        async () => {
          i != null && (await _a(i, !1).catch(() => {})),
            await va(e, !1).catch(() => {});
        }
      )
      .catch(() => {});
  }
  function Zv() {
    chrome.sidePanel != null &&
      chrome.contextMenus.create({
        contexts: [
          "page",
          "frame",
          "selection",
          "link",
          "editable",
          "image",
          "video",
          "audio",
        ],
        id: rc,
        title: "Ask ChatGPT",
      });
  }
  function Jv() {
    chrome.contextMenus.onClicked.addListener((e, t) => {
      if (e.menuItemId !== rc) return;
      const r = t?.id,
        n = t?.windowId,
        i = t?.url ?? t?.pendingUrl ?? e.pageUrl,
        a = e.frameUrl ?? e.pageUrl ?? i;
      r == null ||
        n == null ||
        i == null ||
        a == null ||
        ic(n, r, "context_menu", {
          createdAtMs: Date.now(),
          kind: "selection",
          selectedText: e.selectionText ?? "",
          tabId: r,
          tabUrl: i,
          url: a,
        });
    });
  }
  function Xv() {
    if (tc) return;
    const e = chrome.sidePanel;
    e != null &&
      (e.onOpened?.addListener((t) => {
        cr(t.windowId, !0, t.path, t.tabId).catch(() => {});
      }),
      e.onClosed?.addListener((t) => {
        cr(t.windowId, !1, t.path, t.tabId).catch(() => {});
      }),
      (tc = !0));
  }
  async function ac(e, t) {
    const r = e?.windowId ?? (await chrome.windows.getCurrent()).id;
    if (r == null) throw new Error(`Unable to find the current ${ew()} window`);
    const n = chrome.sidePanel;
    if (n == null || typeof n.open != "function") return;
    if (oc(r, e?.id) && typeof n.close == "function") {
      const o = e?.id,
        l =
          o != null && kt.get(r)?.has(o) === !0
            ? { tabId: o }
            : { windowId: r };
      try {
        await n.close(l);
      } finally {
        await cr(r, !1, void 0, "tabId" in l ? l.tabId : void 0);
      }
      return;
    }
    const i = or().kind === "work_sidepanel" ? e?.id : void 0,
      a = i == null ? Promise.resolve() : Kl(i);
    Wl(r);
    const s = n.open(i == null ? { windowId: r } : { tabId: i });
    try {
      await Promise.all([a, s]);
    } catch (o) {
      throw (
        (i != null && (await _a(i, !1).catch(() => {})),
        await va(r, !1).catch(() => {}),
        o)
      );
    }
    Ea(t, sc(await cr(r, !0, void 0, i)));
  }
  function sc(e) {
    return e.kind === "work_sidepanel" ? "work_sidepanel" : "waiting_room";
  }
  function Ea(e, t) {
    zn(Vv, 1, { destination: t, source: e }).catch(() => {
      console.warn("Failed to report Chrome extension sidechat open.");
    });
  }
  function Yv() {
    return chrome.storage.session.set({ [$l]: [...bn] });
  }
  async function cr(e, t, r, n) {
    n != null &&
      (r === "codex-work-sidepanel.html" || or().kind === "work_sidepanel") &&
      (await _a(n, t)),
      Qv(e, t, n);
    const i = await va(e, bn.has(e), r, n);
    return await Yv().catch(() => {}), t && (await Ov().catch(() => {})), i;
  }
  function Qv(e, t, r) {
    if (r == null) t ? yn.add(e) : yn.delete(e);
    else {
      const n = kt.get(e) ?? new Set();
      t
        ? (n.add(r), kt.set(e, n))
        : (n.delete(r), n.size === 0 && kt.delete(e));
    }
    yn.has(e) || kt.has(e) ? bn.add(e) : bn.delete(e);
  }
  function oc(e, t) {
    return yn.has(e) || (t != null && kt.get(e)?.has(t) === !0);
  }
  function ew() {
    return Te[Ot(navigator.userAgent, "brave" in navigator)].shortDisplayName;
  }
  function tw(e) {
    return e != null && typeof e == "object";
  }
  var Ia = "codexToolbarStateLastSnapshot",
    rw = "codex_chrome_extension_toolbar_state",
    Aa = "codex-toolbar-state-alarm",
    lc = 1440 * 60 * 1e3,
    cc = Promise.resolve();
  function nw() {
    chrome.action.onUserSettingsChanged?.addListener(({ isOnToolbar: e }) => {
      e != null && Sn("changed", e);
    }),
      chrome.alarms.onAlarm.addListener(({ name: e }) => {
        e === Aa && Sn("alarm");
      }),
      chrome.alarms
        .get(Aa)
        .then((e) => {
          if (!e) return chrome.alarms.create(Aa, { periodInMinutes: 360 });
        })
        .catch(() => {
          console.warn("Failed to schedule Chrome extension toolbar state.");
        });
  }
  function Sn(e, t) {
    cc = cc
      .then(() => iw(e, t))
      .catch(() => {
        console.warn("Failed to report Chrome extension toolbar state.");
      });
  }
  async function iw(e, t) {
    const r = Date.now(),
      n = (await chrome.storage.local.get([Ia]))[Ia];
    (typeof n == "number" &&
      (e === "update" ||
        ((e === "startup" || e === "alarm") &&
          Math.floor(n / lc) === Math.floor(r / lc)))) ||
      (await zn(
        rw,
        t ?? (await chrome.action.getUserSettings()).isOnToolbar ? 1 : 0,
        { trigger: e }
      ),
      e !== "changed" && (await chrome.storage.local.set({ [Ia]: r })));
  }
  function aw({
    buildChannel: e,
    sidePanelEnabled: t,
    browserPluginInstallation: r,
  }) {
    const n = (o) => {
        xv(o).catch(() => {}),
          t &&
            ((o.reason === "install" || o.reason === "update") && Sn(o.reason),
            Zv());
      },
      i = () => {
        r.refresh(), t && Sn("startup");
      },
      a = (o) => {
        if (
          o.frameId === 0 &&
          new URL(o.url).origin === "https://chatgpt.com"
        ) {
          const l = hs();
          r.refresh(l), Vn(l).catch(() => {});
        }
      },
      s = () => r.refresh();
    return (
      self.addEventListener("activate", s),
      chrome.runtime.onInstalled.addListener(n),
      chrome.runtime.onStartup.addListener(i),
      chrome.webNavigation.onCompleted.addListener(a, {
        url: [{ hostEquals: new URL(qn).hostname }],
      }),
      Fl(e, !1).catch(() => {}),
      () => {
        self.removeEventListener("activate", s),
          chrome.runtime.onInstalled.removeListener(n),
          chrome.runtime.onStartup.removeListener(i),
          chrome.webNavigation.onCompleted.removeListener(a),
          r.stop();
      }
    );
  }
  var Ca = "client-heartbeat-alarm";
  async function sw(...e) {
    (await chrome.alarms.get(Ca)) ||
      (await chrome.alarms.create(Ca, { periodInMinutes: 0.5 })),
      chrome.alarms.onAlarm.addListener(async (t) => {
        if (t.name !== Ca) return;
        ze.getInstance()
          .reconcileRequestHeaders()
          .catch(() => {
            console.error(
              "Failed to read tab leases for request-header reconciliation."
            );
          });
        try {
          const n = new Promise((i) => setTimeout(() => i(!1), 3e3));
          if (await Promise.any([n, ...e.map((i) => i())])) return;
        } catch {}
        await he.stopActiveSessions();
        const r = await chrome.debugger.getTargets();
        await Promise.allSettled(
          r
            .filter((n) => typeof n.tabId == "number")
            .map((n) =>
              chrome.debugger.detach({ tabId: n.tabId }).catch(() => {})
            )
        );
      });
  }
  var uc = { matches: ["<all_urls>"], runAt: "document_start", world: "MAIN" },
    ow = { ...uc, world: "ISOLATED" },
    dc = [
      {
        ...uc,
        id: "codex-webmcp",
        js: ["content-scripts/webmcp.js"],
        persistAcrossSessions: !1,
      },
      {
        ...ow,
        id: "codex-webmcp-bridge",
        js: ["content-scripts/webmcp-bridge.js"],
        persistAcrossSessions: !1,
      },
    ];
  async function hc(e) {
    const t = await chrome.scripting.getRegisteredContentScripts({
      ids: dc.map(({ id: i }) => i),
    });
    if (!e) {
      t.length > 0 &&
        (await chrome.scripting.unregisterContentScripts({
          ids: t.map(({ id: i }) => i),
        }));
      return;
    }
    const r = new Set(t.map(({ id: i }) => i)),
      n = dc.filter(({ id: i }) => !r.has(i));
    n.length > 0 && (await chrome.scripting.registerContentScripts(n));
  }
  var lw = "codex-app-webmcp";
  function cw() {
    let e,
      t,
      r = Promise.resolve();
    const n = (a) => (
        (t = a),
        (r = r.then(async () => {
          if (!(a !== t || a === e)) {
            e = void 0;
            try {
              await hc(a), (e = a);
            } catch {
              try {
                await hc(!1), (e = !1);
              } catch {}
              console.warn("Failed to apply Chrome extension WebMCP gate.");
            }
          }
        })),
        r
      ),
      i = Rr(lw, (a) => {
        n(a);
      }).catch(() => n(!1));
    return {
      async enabled() {
        await i;
        let a;
        do (a = r), await a;
        while (a !== r);
        return t === !0 && e === !0;
      },
    };
  }
  var lT = "CODEX_WORK_SIDE_PANEL_LOAD_EVENT";
  function uw(e) {
    if (typeof e != "object" || e == null) return !1;
    const t = e;
    return (
      t.type === "CODEX_WORK_SIDE_PANEL_LOAD_EVENT" &&
      (t.event === "timeout" ||
        t.event === "ready" ||
        t.event === "retry" ||
        t.event === "open_chatgpt") &&
      typeof t.attempt == "number" &&
      Number.isSafeInteger(t.attempt) &&
      t.attempt >= 0 &&
      typeof t.elapsedMs == "number" &&
      Number.isSafeInteger(t.elapsedMs) &&
      t.elapsedMs >= 0 &&
      typeof t.timedOut == "boolean"
    );
  }
  function dw(e, t, r) {
    return uw(e)
      ? t.id !== chrome.runtime.id ||
        t.url !== chrome.runtime.getURL("codex-work-sidepanel.html")
        ? (r(), !0)
        : (zn("codex_chrome_extension_work_sidepanel_load", e.event, {
            attempt: String(e.attempt),
            elapsed_ms: String(e.elapsedMs),
            timed_out: String(e.timedOut),
            extension_id: chrome.runtime.id,
            chromium_major:
              /(?:Chrome|Chromium)\/(\d+)/.exec(navigator.userAgent)?.[1] ??
              "unknown",
          }).then(r, r),
          !0)
      : !1;
  }
  var cT = "CODEX_WORK_SIDE_PANEL_AUTH_OPEN",
    hw = "CODEX_WORK_SIDE_PANEL_AUTH_REVALIDATE",
    uT = "CODEX_WORK_SIDE_PANEL_AUTH_STATE";
  function fc(e) {
    if (typeof e != "object" || e == null) return !1;
    const t = e;
    return (
      t.type === "CODEX_WORK_SIDE_PANEL_AUTH_OPEN" &&
      (t.action === "login" || t.action === "logout" || t.action === "open") &&
      mt(t.ownerTabId) &&
      mt(t.ownerWindowId)
    );
  }
  function pc(e) {
    if (typeof e != "object" || e == null) return !1;
    const t = e;
    return (
      t.type === "CODEX_WORK_SIDE_PANEL_AUTH_STATE" &&
      (t.state === "signed_in" || t.state === "signed_out") &&
      mt(t.ownerTabId) &&
      mt(t.ownerWindowId)
    );
  }
  function mt(e) {
    return typeof e == "number" && Number.isSafeInteger(e) && e >= 0;
  }
  var ka = "codexWorkSidePanelAuthOperations",
    fw = 600 * 1e3;
  function pw(e, t) {
    if (e == null) return () => !1;
    const r = new URL(e).origin,
      n = chrome.runtime.getURL(ct);
    let i = Promise.resolve();
    const a = (h) => {
        const m = i.then(h, h);
        return (
          (i = m.then(
            () => {},
            () => {}
          )),
          m
        );
      },
      s = async () => {
        const h = (await chrome.storage.session.get(ka))[ka];
        return typeof h == "object" && h != null && !Array.isArray(h)
          ? Object.fromEntries(Object.entries(h).filter(([, m]) => gw(m)))
          : {};
      },
      o = (h) => chrome.storage.session.set({ [ka]: h }),
      l = async (h) => {
        if ((await chrome.tabs.get(h.ownerTabId)).windowId !== h.ownerWindowId)
          return;
        await chrome.tabs.update(h.ownerTabId, { active: !0 }),
          await chrome.windows.update(h.ownerWindowId, { focused: !0 });
        const m = { ownerTabId: h.ownerTabId, type: hw };
        await chrome.runtime.sendMessage(m).catch(() => {});
      };
    return (
      chrome.tabs.onUpdated.addListener((h, m, d) => {
        const f = d.url;
        m.status !== "complete" ||
          f == null ||
          a(async () => {
            const c = await s(),
              p = Object.values(c).find((g) => g.authTabId === h);
            if (p == null) return;
            if (p.expiresAt <= Date.now()) {
              Reflect.deleteProperty(c, String(p.ownerTabId)), await o(c);
              return;
            }
            let u;
            try {
              u = new URL(f);
            } catch {
              return;
            }
            u.origin !== r ||
              (u.pathname.startsWith("/auth/") &&
                !(
                  p.action === "logout" &&
                  (u.pathname === "/auth/login" ||
                    u.pathname === "/auth/login/")
                )) ||
              (await l(p).catch(() => {}));
          }).catch(() => {});
      }),
      chrome.tabs.onRemoved.addListener((h) => {
        a(async () => {
          const m = await s(),
            d = Object.values(m).find(
              (f) => f.authTabId === h || f.ownerTabId === h
            );
          d != null &&
            (Reflect.deleteProperty(m, String(d.ownerTabId)),
            await o(m),
            d.authTabId === h && (await l(d).catch(() => {})));
        }).catch(() => {});
      }),
      (h, m, d) =>
        !fc(h) && !pc(h)
          ? !1
          : m.id !== chrome.runtime.id || m.url !== n
          ? (d({ ok: !1 }), !1)
          : (pc(h) && t?.(),
            a(async () => {
              if (fc(h))
                await mw({
                  getOperations: s,
                  message: h,
                  setOperations: o,
                  workOrigin: r,
                });
              else {
                const f = await s(),
                  c = f[String(h.ownerTabId)];
                if (
                  c == null ||
                  c.ownerWindowId !== h.ownerWindowId ||
                  c.expiresAt <= Date.now() ||
                  h.state !==
                    (c.action === "logout" ? "signed_out" : "signed_in")
                )
                  throw new Error(
                    "Work side-panel authentication is not complete"
                  );
                Reflect.deleteProperty(f, String(c.ownerTabId)),
                  await o(f),
                  await chrome.tabs.remove(c.authTabId).catch(() => {});
              }
              d({ ok: !0 });
            }).catch(() => d({ ok: !1 })),
            !0)
    );
  }
  async function mw({
    getOperations: e,
    message: t,
    setOperations: r,
    workOrigin: n,
  }) {
    if ((await chrome.tabs.get(t.ownerTabId)).windowId !== t.ownerWindowId)
      throw new Error("Work side panel no longer owns its browser tab");
    const i = await e(),
      a = i[String(t.ownerTabId)];
    if (
      a != null &&
      (a.action === t.action || t.action === "open") &&
      a.ownerWindowId === t.ownerWindowId &&
      a.expiresAt > Date.now()
    )
      try {
        if ((await chrome.tabs.get(a.authTabId)).windowId === t.ownerWindowId) {
          await chrome.tabs.update(a.authTabId, { active: !0 }),
            await chrome.windows.update(t.ownerWindowId, { focused: !0 });
          return;
        }
      } catch {}
    const s = new URL(
      t.action === "open"
        ? "/"
        : t.action === "logout"
        ? "/auth/logout"
        : "/auth/login",
      n
    );
    t.action === "login" && s.searchParams.set("next", "/");
    const o = await chrome.tabs.create({
      active: !0,
      openerTabId: t.ownerTabId,
      url: s.href,
      windowId: t.ownerWindowId,
    });
    if (o.id == null)
      throw new Error("The authentication tab has no browser tab identifier");
    (i[String(t.ownerTabId)] = {
      action: t.action,
      authTabId: o.id,
      expiresAt: Date.now() + fw,
      ownerTabId: t.ownerTabId,
      ownerWindowId: t.ownerWindowId,
    }),
      await r(i);
  }
  function gw(e) {
    if (typeof e != "object" || e == null) return !1;
    const t = e;
    return (
      (t.action === "login" || t.action === "logout" || t.action === "open") &&
      mt(t.authTabId) &&
      typeof t.expiresAt == "number" &&
      Number.isFinite(t.expiresAt) &&
      mt(t.ownerTabId) &&
      mt(t.ownerWindowId)
    );
  }
  function _w(e, t) {
    return vw(e)
      ? ww(e)
        ? (ie(yw(e))
            .then((r) => t({ didSeek: r ?? !1, ok: !0 }))
            .catch(() =>
              t({ error: "Unable to seek the YouTube video", ok: !1 })
            ),
          !0)
        : (t({ error: "Invalid YouTube timestamp request", ok: !1 }), !0)
      : !1;
  }
  function vw(e) {
    return mc(e) && e.type === "seek_youtube_timestamp";
  }
  function ww(e) {
    return (
      mc(e) &&
      Object.keys(e).length === 5 &&
      e.type === "seek_youtube_timestamp" &&
      typeof e.tabId == "number" &&
      Number.isSafeInteger(e.tabId) &&
      e.tabId >= 0 &&
      typeof e.videoId == "string" &&
      xn.test(e.videoId) &&
      typeof e.timestampSeconds == "number" &&
      Number.isFinite(e.timestampSeconds) &&
      e.timestampSeconds >= 0 &&
      e.timestampSeconds <= 604800 &&
      typeof e.windowId == "number" &&
      Number.isSafeInteger(e.windowId) &&
      e.windowId >= 0
    );
  }
  function mc(e) {
    return typeof e == "object" && e != null && !Array.isArray(e);
  }
  function bw(e, t) {
    let r = null;
    try {
      const i = new URL(window.location.href);
      if (
        i.protocol !== "https:" ||
        i.username !== "" ||
        i.password !== "" ||
        i.port !== ""
      )
        return !1;
      if (
        i.hostname === "youtube.com" ||
        i.hostname === "www.youtube.com" ||
        i.hostname === "m.youtube.com"
      )
        if (i.pathname === "/watch") {
          const a = i.searchParams.getAll("v");
          r = a.length === 1 ? a[0] ?? null : null;
        } else {
          const a = i.pathname.split("/").filter(Boolean);
          a.length === 2 && a[0] === "shorts" && (r = a[1] ?? null);
        }
      else if (i.hostname === "youtu.be") {
        const a = i.pathname.split("/").filter(Boolean);
        a.length === 1 && (r = a[0] ?? null);
      }
    } catch {
      return !1;
    }
    if (r !== t) return !1;
    const n = document.querySelector("video");
    if (!(n instanceof HTMLVideoElement)) return !1;
    try {
      return (n.currentTime = e), !0;
    } catch {
      return !1;
    }
  }
  async function yw({
    tabId: e,
    timestampSeconds: t,
    videoId: r,
    windowId: n,
  }) {
    const i = await chrome.tabs.get(e);
    if (i.windowId !== n || i.url == null || qc(i.url) !== r) return !1;
    const [a] = await chrome.scripting.executeScript({
      args: [t, r],
      func: bw,
      target: { tabId: e },
    });
    return a?.result === !0;
  }
  var Sw = { dev: vr.dev, internal: vr.internal, prod: vr.production },
    Tw = "codex-app-chrome-extension-background-popups",
    Ew = "codex-app-chrome-extension-browser-management",
    Iw = "chrome-standalone-js-kernel";
  function Aw(e) {
    const t = Sw[e];
    return e === "prod" && Ot(navigator.userAgent) === "edge"
      ? [t, vr.internal]
      : [t];
  }
  async function Cw() {
    const e = Er("prod"),
      t = Aw(e),
      r = ah(),
      n = mv(() => Fl(e, !0));
    kv("").catch(() => {});
    const i = new Pv(() => he.isBrowserControlActive()),
      a = new Map();
    let s = null;
    const o = () => {
        if (s == null) return;
        const v = s,
          S = () => {
            kw(v, chrome.runtime);
            for (const { browser: y } of a.values())
              y.sendBrowserTabMentionsInvalidated();
          };
        Qg(S), l.subscribeInvalidations(S);
      },
      l = new ol(e, Ji.getInstance(), o),
      h = new C_({
        buildChannel: e,
        browserTabMentionProvider: l,
        webMcpConfig: cw(),
        browserManagementEnabled: wt(Ew).catch(() => !1),
        agentPopupInterceptorEnabled: wt(Tw).catch(() => !1),
      }),
      m = new AbortController(),
      d = () => {
        m.signal.aborted ||
          (m.abort(),
          Pd(
            (v, S, y) => {
              const T = new Qn(v);
              a.set(v, {
                browser: new Ga(S, h),
                control: new Ad(y, T),
                controlImpl: T,
              });
            },
            (v) => {
              a.delete(v);
            }
          ),
          th(async (v, S) => {
            const y = a.get(v);
            if (y == null) {
              await h.turnEnded(S);
              return;
            }
            try {
              await y.control.sendTurnEnded(S);
            } catch (T) {
              throw (await h.turnEnded(S), T);
            }
          }).catch(eh));
      };
    Rr(
      Iw,
      (v) => {
        v && d();
      },
      m.signal
    ).catch(() => {
      console.warn("Failed to observe Chrome extension kernel gate.");
    }),
      i.register(),
      he.setBrowserControlActivityChangeHandler((v) => {
        v || i.maybeReloadForPendingUpdate().catch(() => {});
      });
    const f = new av(t);
    if (r) {
      nw(), Hv();
      const v = Uv();
    }
    const c = r
        ? pw("https://chatgpt.com/?surface=browser_side_chat", () => {
            n.refresh(), wt(Ws).catch(() => {});
          })
        : () => !1,
      p = new Ga(f, h),
      u = (v) => {
        for (const { browser: S } of a.values()) v(S);
        v(p);
      };
    s = p;
    const g = ze.getInstance();
    g.ensureInit().catch(() => {
      console.error(
        "Failed to restore tab leases for request-header reconciliation."
      );
    }),
      chrome.runtime.onConnect.addListener((v) => {
        ov(l, e, v), Mv(f, chrome.runtime.getManifest().version, e, v);
      }),
      chrome.runtime.onMessage.addListener((v, S, y) => {
        if (Lv(v, S, y)) return !0;
        if (v?.type === "BROWSER_SETTINGS_UPDATED")
          return Qt(S, e)
            ? (Promise.allSettled(
                [...a.values()].map(({ controlImpl: T }) =>
                  Qn.refreshBrowserSettings(T)
                )
              ).then((T) =>
                y({ ok: T.every((E) => E.status === "fulfilled") })
              ),
              !0)
            : !1;
        if (c(v, S, y)) return !0;
        if (tg(v)) {
          const T = S.tab?.id;
          return typeof T != "number"
            ? !1
            : (h
                .handleAgentBackgroundPopup(T, v.url)
                .then(() => y({ ok: !0 }))
                .catch(() => y({ ok: !1 })),
              !0);
        }
        if (v?.type === "codex:page-event" && Uc(v.event)) {
          const T = S.tab?.id;
          return (
            typeof T == "number" &&
              Number.isInteger(T) &&
              g
                .getActiveLease(T)
                .then((E) => {
                  E != null &&
                    u((I) => {
                      I.sendPageEvent({
                        ...v.event,
                        session_id: E.sessionId,
                        tabId: T,
                      });
                    });
                })
                .catch(() => {}),
            !1
          );
        }
        return xl(l, e, v, S, y) || _w(v, y)
          ? !0
          : vv(v, S, e)
          ? (y({ ok: !0 }), !1)
          : dw(v, S, y)
          ? !0
          : Kv(v, S, e)
          ? (y({ ok: !0 }), !1)
          : Rw(h, v, S, y);
      }),
      chrome.debugger.onDetach.addListener((v) => {
        u((S) => S.sendCdpDetach(v));
      }),
      chrome.debugger.onEvent.addListener((v, S, y) => {
        u((T) => {
          T.sendCdpEvent({ source: v, method: S, params: y });
        });
      }),
      h.addDownloadChangeListener((v) => {
        u((S) => S.sendDownloadChange(v));
      }),
      chrome.downloads.onCreated.addListener((v) => {
        h.handleDownloadCreated(v);
      }),
      Ce().catch(() => {}),
      chrome.downloads.onChanged.addListener((v) => {
        h.handleDownloadChanged(v);
      }),
      chrome.webNavigation.onCreatedNavigationTarget.addListener((v) => {
        h.handleCreatedNavigationTarget(v).catch(() => {});
      });
    const w = aw({
      buildChannel: e,
      sidePanelEnabled: r,
      browserPluginInstallation: n,
    });
    await nn.initialize(),
      await sw(
        () => p.ping(),
        () => Promise.any(Array.from(a.values(), ({ browser: v }) => v.ping()))
      );
  }
  function kw(e, t) {
    e.sendBrowserTabMentionsInvalidated(),
      t.sendMessage({ type: Ic }).catch(() => {});
  }
  function Rw(e, t, r, n) {
    const i = r.tab?.id;
    switch (t?.type) {
      case "GET_AGENT_CURSOR_STATE":
        return typeof i != "number"
          ? (n({ ok: !0, state: he.readCursorOverlayState(-1) }), !0)
          : (n({ ok: !0, state: he.readCursorOverlayState(i) }), !0);
      case "AGENT_CURSOR_ARRIVED":
        return typeof i != "number" ||
          !("sessionId" in t) ||
          !("turnId" in t) ||
          !("moveSequence" in t) ||
          typeof t.sessionId != "string" ||
          typeof t.turnId != "string" ||
          !Number.isInteger(t.moveSequence)
          ? (n({ ok: !1 }), !0)
          : (e.notifyCursorArrived({
              moveSequence: t.moveSequence,
              sessionId: t.sessionId,
              turnId: t.turnId,
            }),
            n({ ok: !0 }),
            !0);
      default:
        return !1;
    }
  }
  function Ow(e) {
    return e == null || typeof e == "function" ? { main: e } : e;
  }
  var Pw = Ow(() => {
    Cw();
  });
  function dT() {}
  var hT = globalThis.browser?.runtime?.id
      ? globalThis.browser
      : globalThis.chrome,
    gc = class {
      constructor(e) {
        if (e === "<all_urls>")
          (this.isAllUrls = !0),
            (this.protocolMatches = [...gc.PROTOCOLS]),
            (this.hostnameMatch = "*"),
            (this.pathnameMatch = "*");
        else {
          const t = /(.*):\/\/(.*?)(\/.*)/.exec(e);
          if (t == null) throw new Tn(e, "Incorrect format");
          const [r, n, i, a] = t;
          Mw(e, n),
            Lw(e, i),
            (this.protocolMatches = n === "*" ? ["http", "https"] : [n]),
            (this.hostnameMatch = i),
            (this.pathnameMatch = a);
        }
      }
      includes(e) {
        if (this.isAllUrls) return !0;
        const t =
          typeof e == "string"
            ? new URL(e)
            : e instanceof Location
            ? new URL(e.href)
            : e;
        return !!this.protocolMatches.find((r) => {
          if (r === "http") return this.isHttpMatch(t);
          if (r === "https") return this.isHttpsMatch(t);
          if (r === "file") return this.isFileMatch(t);
          if (r === "ftp") return this.isFtpMatch(t);
          if (r === "urn") return this.isUrnMatch(t);
        });
      }
      isHttpMatch(e) {
        return e.protocol === "http:" && this.isHostPathMatch(e);
      }
      isHttpsMatch(e) {
        return e.protocol === "https:" && this.isHostPathMatch(e);
      }
      isHostPathMatch(e) {
        if (!this.hostnameMatch || !this.pathnameMatch) return !1;
        const t = [
            this.convertPatternToRegex(this.hostnameMatch),
            this.convertPatternToRegex(this.hostnameMatch.replace(/^\*\./, "")),
          ],
          r = this.convertPatternToRegex(this.pathnameMatch);
        return !!t.find((n) => n.test(e.hostname)) && r.test(e.pathname);
      }
      isFileMatch(e) {
        throw Error(
          "Not implemented: file:// pattern matching. Open a PR to add support"
        );
      }
      isFtpMatch(e) {
        throw Error(
          "Not implemented: ftp:// pattern matching. Open a PR to add support"
        );
      }
      isUrnMatch(e) {
        throw Error(
          "Not implemented: urn:// pattern matching. Open a PR to add support"
        );
      }
      convertPatternToRegex(e) {
        const t = this.escapeForRegex(e).replace(/\\\*/g, ".*");
        return RegExp(`^${t}$`);
      }
      escapeForRegex(e) {
        return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    },
    Ra = gc;
  Ra.PROTOCOLS = ["http", "https", "file", "ftp", "urn"];
  var Tn = class extends Error {
    constructor(e, t) {
      super(`Invalid match pattern "${e}": ${t}`);
    }
  };
  function Mw(e, t) {
    if (!Ra.PROTOCOLS.includes(t) && t !== "*")
      throw new Tn(e, `${t} not a valid protocol (${Ra.PROTOCOLS.join(", ")})`);
  }
  function Lw(e, t) {
    if (t.includes(":")) throw new Tn(e, "Hostname cannot include a port");
    if (t.includes("*") && t.length > 1 && !t.startsWith("*."))
      throw new Tn(
        e,
        "If using a wildcard (*), it must go at the start of the hostname"
      );
  }
  function fT(e, t) {}
  function En(e, ...t) {}
  var Dw = {
      debug: (...e) => En(console.debug, ...e),
      log: (...e) => En(console.log, ...e),
      warn: (...e) => En(console.warn, ...e),
      error: (...e) => En(console.error, ...e),
    },
    Oa;
  try {
    (Oa = Pw.main()),
      Oa instanceof Promise &&
        console.warn(
          "The background's main() function return a promise, but it must be synchronous"
        );
  } catch (e) {
    throw (Dw.error("The background crashed on startup!"), e);
  }
  var xw = Oa;
  return xw;
})();
