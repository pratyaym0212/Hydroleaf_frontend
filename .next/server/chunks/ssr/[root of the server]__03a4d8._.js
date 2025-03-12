module.exports = {
  '[project]/src/paraglide/runtime.js [app-rsc] (ecmascript)': (
    __turbopack_context__
  ) => {
    'use strict';

    var {
      r: __turbopack_require__,
      f: __turbopack_module_context__,
      i: __turbopack_import__,
      s: __turbopack_esm__,
      v: __turbopack_export_value__,
      n: __turbopack_export_namespace__,
      c: __turbopack_cache__,
      M: __turbopack_modules__,
      l: __turbopack_load__,
      j: __turbopack_dynamic__,
      P: __turbopack_resolve_absolute_path__,
      U: __turbopack_relative_url__,
      R: __turbopack_resolve_module_id_path__,
      b: __turbopack_worker_blob_url__,
      g: global,
      __dirname,
      x: __turbopack_external_require__,
      y: __turbopack_external_import__,
      z: __turbopack_require_stub__,
    } = __turbopack_context__;
    {
      /* eslint-disable */ /** @type {((tag: AvailableLanguageTag) => void) | undefined} */ __turbopack_esm__(
        {
          availableLanguageTags: () => availableLanguageTags,
          isAvailableLanguageTag: () => isAvailableLanguageTag,
          languageTag: () => languageTag,
          onSetLanguageTag: () => onSetLanguageTag,
          setLanguageTag: () => setLanguageTag,
          sourceLanguageTag: () => sourceLanguageTag,
        }
      );
      let _onSetLanguageTag;
      const sourceLanguageTag = 'en';
      const availableLanguageTags = ['en', 'pl'];
      let languageTag = () => sourceLanguageTag;
      const setLanguageTag = (tag) => {
        if (typeof tag === 'function') {
          languageTag = enforceLanguageTag(tag);
        } else {
          languageTag = enforceLanguageTag(() => tag);
        }
        // call the callback function if it has been defined
        if (_onSetLanguageTag !== undefined) {
          _onSetLanguageTag(languageTag());
        }
      };
      /**
       * Wraps an untrusted function and enforces that it returns a language tag.
       * @param {() => AvailableLanguageTag} unsafeLanguageTag
       * @returns {() => AvailableLanguageTag}
       */ function enforceLanguageTag(unsafeLanguageTag) {
        return () => {
          const tag = unsafeLanguageTag();
          if (!isAvailableLanguageTag(tag)) {
            throw new Error(
              `languageTag() didn't return a valid language tag. Check your setLanguageTag call`
            );
          }
          return tag;
        };
      }
      const onSetLanguageTag = (fn) => {
        _onSetLanguageTag = fn;
      };
      function isAvailableLanguageTag(thing) {
        return availableLanguageTags.includes(thing);
      } // ------ TYPES ------
      /**
       * A language tag that is available in the project.
       *
       * @example
       *   setLanguageTag(request.languageTag as AvailableLanguageTag)
       *
       * @typedef {typeof availableLanguageTags[number]} AvailableLanguageTag
       */
    }
  },
  '[externals]/util [external] (util, cjs)': function (__turbopack_context__) {
    var {
      r: __turbopack_require__,
      f: __turbopack_module_context__,
      i: __turbopack_import__,
      s: __turbopack_esm__,
      v: __turbopack_export_value__,
      n: __turbopack_export_namespace__,
      c: __turbopack_cache__,
      M: __turbopack_modules__,
      l: __turbopack_load__,
      j: __turbopack_dynamic__,
      P: __turbopack_resolve_absolute_path__,
      U: __turbopack_relative_url__,
      R: __turbopack_resolve_module_id_path__,
      b: __turbopack_worker_blob_url__,
      g: global,
      __dirname,
      x: __turbopack_external_require__,
      y: __turbopack_external_import__,
      m: module,
      e: exports,
      t: __turbopack_require_real__,
    } = __turbopack_context__;
    {
      const mod = __turbopack_external_require__('util', () => require('util'));

      module.exports = mod;
    }
  },
  '[project]/src/components/footer.tsx [app-rsc] (ecmascript)': (
    __turbopack_context__
  ) => {
    'use strict';

    var {
      r: __turbopack_require__,
      f: __turbopack_module_context__,
      i: __turbopack_import__,
      s: __turbopack_esm__,
      v: __turbopack_export_value__,
      n: __turbopack_export_namespace__,
      c: __turbopack_cache__,
      M: __turbopack_modules__,
      l: __turbopack_load__,
      j: __turbopack_dynamic__,
      P: __turbopack_resolve_absolute_path__,
      U: __turbopack_relative_url__,
      R: __turbopack_resolve_module_id_path__,
      b: __turbopack_worker_blob_url__,
      g: global,
      __dirname,
      x: __turbopack_external_require__,
      y: __turbopack_external_import__,
      z: __turbopack_require_stub__,
    } = __turbopack_context__;
    {
      __turbopack_esm__({
        Footer: () => Footer,
      });
      var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
        __turbopack_import__(
          '[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)'
        );
      const Footer = () => {
        return /*#__PURE__*/ (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
          'jsxDEV'
        ])(
          'footer',
          {
            className:
              'text-muted-foreground bottom w-full text-center text-sm',
            children: ['© ', new Date().getFullYear(), ' By Hydroleaf'],
          },
          void 0,
          true,
          {
            fileName: '[project]/src/components/footer.tsx',
            lineNumber: 3,
            columnNumber: 5,
          },
          this
        );
      };
    }
  },
  '[project]/src/components/navbar/navbar.tsx (client proxy) <module evaluation>':
    (__turbopack_context__) => {
      'use strict';

      var {
        r: __turbopack_require__,
        f: __turbopack_module_context__,
        i: __turbopack_import__,
        s: __turbopack_esm__,
        v: __turbopack_export_value__,
        n: __turbopack_export_namespace__,
        c: __turbopack_cache__,
        M: __turbopack_modules__,
        l: __turbopack_load__,
        j: __turbopack_dynamic__,
        P: __turbopack_resolve_absolute_path__,
        U: __turbopack_relative_url__,
        R: __turbopack_resolve_module_id_path__,
        b: __turbopack_worker_blob_url__,
        g: global,
        __dirname,
        x: __turbopack_external_require__,
        y: __turbopack_external_import__,
        z: __turbopack_require_stub__,
      } = __turbopack_context__;
      {
        __turbopack_esm__({
          default: () => __TURBOPACK__default__export__,
        });
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)'
          );
        const __TURBOPACK__default__export__ = (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
          'registerClientReference'
        ])(
          function () {
            throw new Error(
              "Attempted to call the default export of [project]/src/components/navbar/navbar.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component."
            );
          },
          '[project]/src/components/navbar/navbar.tsx <module evaluation>',
          'default'
        );
      }
    },
  '[project]/src/components/navbar/navbar.tsx (client proxy)': (
    __turbopack_context__
  ) => {
    'use strict';

    var {
      r: __turbopack_require__,
      f: __turbopack_module_context__,
      i: __turbopack_import__,
      s: __turbopack_esm__,
      v: __turbopack_export_value__,
      n: __turbopack_export_namespace__,
      c: __turbopack_cache__,
      M: __turbopack_modules__,
      l: __turbopack_load__,
      j: __turbopack_dynamic__,
      P: __turbopack_resolve_absolute_path__,
      U: __turbopack_relative_url__,
      R: __turbopack_resolve_module_id_path__,
      b: __turbopack_worker_blob_url__,
      g: global,
      __dirname,
      x: __turbopack_external_require__,
      y: __turbopack_external_import__,
      z: __turbopack_require_stub__,
    } = __turbopack_context__;
    {
      __turbopack_esm__({
        default: () => __TURBOPACK__default__export__,
      });
      var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
        __turbopack_import__(
          '[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)'
        );
      const __TURBOPACK__default__export__ = (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
        'registerClientReference'
      ])(
        function () {
          throw new Error(
            "Attempted to call the default export of [project]/src/components/navbar/navbar.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component."
          );
        },
        '[project]/src/components/navbar/navbar.tsx',
        'default'
      );
    }
  },
  '[project]/src/components/navbar/navbar.tsx [app-rsc] (ecmascript)': (
    __turbopack_context__
  ) => {
    'use strict';

    var {
      r: __turbopack_require__,
      f: __turbopack_module_context__,
      i: __turbopack_import__,
      s: __turbopack_esm__,
      v: __turbopack_export_value__,
      n: __turbopack_export_namespace__,
      c: __turbopack_cache__,
      M: __turbopack_modules__,
      l: __turbopack_load__,
      j: __turbopack_dynamic__,
      P: __turbopack_resolve_absolute_path__,
      U: __turbopack_relative_url__,
      R: __turbopack_resolve_module_id_path__,
      b: __turbopack_worker_blob_url__,
      g: global,
      __dirname,
      x: __turbopack_external_require__,
      y: __turbopack_external_import__,
      z: __turbopack_require_stub__,
    } = __turbopack_context__;
    {
      var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$navbar$2f$navbar$2e$tsx__$28$client__proxy$29$__$3c$module__evaluation$3e$__ =
        __turbopack_import__(
          '[project]/src/components/navbar/navbar.tsx (client proxy) <module evaluation>'
        );
      var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$navbar$2f$navbar$2e$tsx__$28$client__proxy$29$__ =
        __turbopack_import__(
          '[project]/src/components/navbar/navbar.tsx (client proxy)'
        );
      __turbopack_export_namespace__(
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$navbar$2f$navbar$2e$tsx__$28$client__proxy$29$__
      );
    }
  },
  '[project]/src/components/theme-provider.tsx (client proxy) <module evaluation>':
    (__turbopack_context__) => {
      'use strict';

      var {
        r: __turbopack_require__,
        f: __turbopack_module_context__,
        i: __turbopack_import__,
        s: __turbopack_esm__,
        v: __turbopack_export_value__,
        n: __turbopack_export_namespace__,
        c: __turbopack_cache__,
        M: __turbopack_modules__,
        l: __turbopack_load__,
        j: __turbopack_dynamic__,
        P: __turbopack_resolve_absolute_path__,
        U: __turbopack_relative_url__,
        R: __turbopack_resolve_module_id_path__,
        b: __turbopack_worker_blob_url__,
        g: global,
        __dirname,
        x: __turbopack_external_require__,
        y: __turbopack_external_import__,
        z: __turbopack_require_stub__,
      } = __turbopack_context__;
      {
        __turbopack_esm__({
          ThemeProvider: () => ThemeProvider,
        });
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)'
          );
        const ThemeProvider = (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
          'registerClientReference'
        ])(
          function () {
            throw new Error(
              "Attempted to call ThemeProvider() from the server but ThemeProvider is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component."
            );
          },
          '[project]/src/components/theme-provider.tsx <module evaluation>',
          'ThemeProvider'
        );
      }
    },
  '[project]/src/components/theme-provider.tsx (client proxy)': (
    __turbopack_context__
  ) => {
    'use strict';

    var {
      r: __turbopack_require__,
      f: __turbopack_module_context__,
      i: __turbopack_import__,
      s: __turbopack_esm__,
      v: __turbopack_export_value__,
      n: __turbopack_export_namespace__,
      c: __turbopack_cache__,
      M: __turbopack_modules__,
      l: __turbopack_load__,
      j: __turbopack_dynamic__,
      P: __turbopack_resolve_absolute_path__,
      U: __turbopack_relative_url__,
      R: __turbopack_resolve_module_id_path__,
      b: __turbopack_worker_blob_url__,
      g: global,
      __dirname,
      x: __turbopack_external_require__,
      y: __turbopack_external_import__,
      z: __turbopack_require_stub__,
    } = __turbopack_context__;
    {
      __turbopack_esm__({
        ThemeProvider: () => ThemeProvider,
      });
      var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
        __turbopack_import__(
          '[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)'
        );
      const ThemeProvider = (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
        'registerClientReference'
      ])(
        function () {
          throw new Error(
            "Attempted to call ThemeProvider() from the server but ThemeProvider is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component."
          );
        },
        '[project]/src/components/theme-provider.tsx',
        'ThemeProvider'
      );
    }
  },
  '[project]/src/components/theme-provider.tsx [app-rsc] (ecmascript)': (
    __turbopack_context__
  ) => {
    'use strict';

    var {
      r: __turbopack_require__,
      f: __turbopack_module_context__,
      i: __turbopack_import__,
      s: __turbopack_esm__,
      v: __turbopack_export_value__,
      n: __turbopack_export_namespace__,
      c: __turbopack_cache__,
      M: __turbopack_modules__,
      l: __turbopack_load__,
      j: __turbopack_dynamic__,
      P: __turbopack_resolve_absolute_path__,
      U: __turbopack_relative_url__,
      R: __turbopack_resolve_module_id_path__,
      b: __turbopack_worker_blob_url__,
      g: global,
      __dirname,
      x: __turbopack_external_require__,
      y: __turbopack_external_import__,
      z: __turbopack_require_stub__,
    } = __turbopack_context__;
    {
      var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$theme$2d$provider$2e$tsx__$28$client__proxy$29$__$3c$module__evaluation$3e$__ =
        __turbopack_import__(
          '[project]/src/components/theme-provider.tsx (client proxy) <module evaluation>'
        );
      var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$theme$2d$provider$2e$tsx__$28$client__proxy$29$__ =
        __turbopack_import__(
          '[project]/src/components/theme-provider.tsx (client proxy)'
        );
      __turbopack_export_namespace__(
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$theme$2d$provider$2e$tsx__$28$client__proxy$29$__
      );
    }
  },
  '[project]/src/components/theme-switcher.tsx (client proxy) <module evaluation>':
    (__turbopack_context__) => {
      'use strict';

      var {
        r: __turbopack_require__,
        f: __turbopack_module_context__,
        i: __turbopack_import__,
        s: __turbopack_esm__,
        v: __turbopack_export_value__,
        n: __turbopack_export_namespace__,
        c: __turbopack_cache__,
        M: __turbopack_modules__,
        l: __turbopack_load__,
        j: __turbopack_dynamic__,
        P: __turbopack_resolve_absolute_path__,
        U: __turbopack_relative_url__,
        R: __turbopack_resolve_module_id_path__,
        b: __turbopack_worker_blob_url__,
        g: global,
        __dirname,
        x: __turbopack_external_require__,
        y: __turbopack_external_import__,
        z: __turbopack_require_stub__,
      } = __turbopack_context__;
      {
        __turbopack_esm__({
          ThemeSwitcher: () => ThemeSwitcher,
        });
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)'
          );
        const ThemeSwitcher = (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
          'registerClientReference'
        ])(
          function () {
            throw new Error(
              "Attempted to call ThemeSwitcher() from the server but ThemeSwitcher is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component."
            );
          },
          '[project]/src/components/theme-switcher.tsx <module evaluation>',
          'ThemeSwitcher'
        );
      }
    },
  '[project]/src/components/theme-switcher.tsx (client proxy)': (
    __turbopack_context__
  ) => {
    'use strict';

    var {
      r: __turbopack_require__,
      f: __turbopack_module_context__,
      i: __turbopack_import__,
      s: __turbopack_esm__,
      v: __turbopack_export_value__,
      n: __turbopack_export_namespace__,
      c: __turbopack_cache__,
      M: __turbopack_modules__,
      l: __turbopack_load__,
      j: __turbopack_dynamic__,
      P: __turbopack_resolve_absolute_path__,
      U: __turbopack_relative_url__,
      R: __turbopack_resolve_module_id_path__,
      b: __turbopack_worker_blob_url__,
      g: global,
      __dirname,
      x: __turbopack_external_require__,
      y: __turbopack_external_import__,
      z: __turbopack_require_stub__,
    } = __turbopack_context__;
    {
      __turbopack_esm__({
        ThemeSwitcher: () => ThemeSwitcher,
      });
      var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
        __turbopack_import__(
          '[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)'
        );
      const ThemeSwitcher = (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
        'registerClientReference'
      ])(
        function () {
          throw new Error(
            "Attempted to call ThemeSwitcher() from the server but ThemeSwitcher is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component."
          );
        },
        '[project]/src/components/theme-switcher.tsx',
        'ThemeSwitcher'
      );
    }
  },
  '[project]/src/components/theme-switcher.tsx [app-rsc] (ecmascript)': (
    __turbopack_context__
  ) => {
    'use strict';

    var {
      r: __turbopack_require__,
      f: __turbopack_module_context__,
      i: __turbopack_import__,
      s: __turbopack_esm__,
      v: __turbopack_export_value__,
      n: __turbopack_export_namespace__,
      c: __turbopack_cache__,
      M: __turbopack_modules__,
      l: __turbopack_load__,
      j: __turbopack_dynamic__,
      P: __turbopack_resolve_absolute_path__,
      U: __turbopack_relative_url__,
      R: __turbopack_resolve_module_id_path__,
      b: __turbopack_worker_blob_url__,
      g: global,
      __dirname,
      x: __turbopack_external_require__,
      y: __turbopack_external_import__,
      z: __turbopack_require_stub__,
    } = __turbopack_context__;
    {
      var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$theme$2d$switcher$2e$tsx__$28$client__proxy$29$__$3c$module__evaluation$3e$__ =
        __turbopack_import__(
          '[project]/src/components/theme-switcher.tsx (client proxy) <module evaluation>'
        );
      var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$theme$2d$switcher$2e$tsx__$28$client__proxy$29$__ =
        __turbopack_import__(
          '[project]/src/components/theme-switcher.tsx (client proxy)'
        );
      __turbopack_export_namespace__(
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$theme$2d$switcher$2e$tsx__$28$client__proxy$29$__
      );
    }
  },
  '[project]/src/components/ui/toaster.tsx (client proxy) <module evaluation>':
    (__turbopack_context__) => {
      'use strict';

      var {
        r: __turbopack_require__,
        f: __turbopack_module_context__,
        i: __turbopack_import__,
        s: __turbopack_esm__,
        v: __turbopack_export_value__,
        n: __turbopack_export_namespace__,
        c: __turbopack_cache__,
        M: __turbopack_modules__,
        l: __turbopack_load__,
        j: __turbopack_dynamic__,
        P: __turbopack_resolve_absolute_path__,
        U: __turbopack_relative_url__,
        R: __turbopack_resolve_module_id_path__,
        b: __turbopack_worker_blob_url__,
        g: global,
        __dirname,
        x: __turbopack_external_require__,
        y: __turbopack_external_import__,
        z: __turbopack_require_stub__,
      } = __turbopack_context__;
      {
        __turbopack_esm__({
          Toaster: () => Toaster,
        });
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)'
          );
        const Toaster = (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
          'registerClientReference'
        ])(
          function () {
            throw new Error(
              "Attempted to call Toaster() from the server but Toaster is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component."
            );
          },
          '[project]/src/components/ui/toaster.tsx <module evaluation>',
          'Toaster'
        );
      }
    },
  '[project]/src/components/ui/toaster.tsx (client proxy)': (
    __turbopack_context__
  ) => {
    'use strict';

    var {
      r: __turbopack_require__,
      f: __turbopack_module_context__,
      i: __turbopack_import__,
      s: __turbopack_esm__,
      v: __turbopack_export_value__,
      n: __turbopack_export_namespace__,
      c: __turbopack_cache__,
      M: __turbopack_modules__,
      l: __turbopack_load__,
      j: __turbopack_dynamic__,
      P: __turbopack_resolve_absolute_path__,
      U: __turbopack_relative_url__,
      R: __turbopack_resolve_module_id_path__,
      b: __turbopack_worker_blob_url__,
      g: global,
      __dirname,
      x: __turbopack_external_require__,
      y: __turbopack_external_import__,
      z: __turbopack_require_stub__,
    } = __turbopack_context__;
    {
      __turbopack_esm__({
        Toaster: () => Toaster,
      });
      var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
        __turbopack_import__(
          '[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)'
        );
      const Toaster = (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
        'registerClientReference'
      ])(
        function () {
          throw new Error(
            "Attempted to call Toaster() from the server but Toaster is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component."
          );
        },
        '[project]/src/components/ui/toaster.tsx',
        'Toaster'
      );
    }
  },
  '[project]/src/components/ui/toaster.tsx [app-rsc] (ecmascript)': (
    __turbopack_context__
  ) => {
    'use strict';

    var {
      r: __turbopack_require__,
      f: __turbopack_module_context__,
      i: __turbopack_import__,
      s: __turbopack_esm__,
      v: __turbopack_export_value__,
      n: __turbopack_export_namespace__,
      c: __turbopack_cache__,
      M: __turbopack_modules__,
      l: __turbopack_load__,
      j: __turbopack_dynamic__,
      P: __turbopack_resolve_absolute_path__,
      U: __turbopack_relative_url__,
      R: __turbopack_resolve_module_id_path__,
      b: __turbopack_worker_blob_url__,
      g: global,
      __dirname,
      x: __turbopack_external_require__,
      y: __turbopack_external_import__,
      z: __turbopack_require_stub__,
    } = __turbopack_context__;
    {
      var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$toaster$2e$tsx__$28$client__proxy$29$__$3c$module__evaluation$3e$__ =
        __turbopack_import__(
          '[project]/src/components/ui/toaster.tsx (client proxy) <module evaluation>'
        );
      var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$toaster$2e$tsx__$28$client__proxy$29$__ =
        __turbopack_import__(
          '[project]/src/components/ui/toaster.tsx (client proxy)'
        );
      __turbopack_export_namespace__(
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$toaster$2e$tsx__$28$client__proxy$29$__
      );
    }
  },
  '[project]/src/env.mjs [app-rsc] (ecmascript)': (__turbopack_context__) => {
    'use strict';

    var {
      r: __turbopack_require__,
      f: __turbopack_module_context__,
      i: __turbopack_import__,
      s: __turbopack_esm__,
      v: __turbopack_export_value__,
      n: __turbopack_export_namespace__,
      c: __turbopack_cache__,
      M: __turbopack_modules__,
      l: __turbopack_load__,
      j: __turbopack_dynamic__,
      P: __turbopack_resolve_absolute_path__,
      U: __turbopack_relative_url__,
      R: __turbopack_resolve_module_id_path__,
      b: __turbopack_worker_blob_url__,
      g: global,
      __dirname,
      x: __turbopack_external_require__,
      y: __turbopack_external_import__,
      z: __turbopack_require_stub__,
    } = __turbopack_context__;
    {
      __turbopack_esm__({
        env: () => env,
      });
      var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$t3$2d$oss$2f$env$2d$nextjs$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
        __turbopack_import__(
          '[project]/node_modules/@t3-oss/env-nextjs/dist/index.js [app-rsc] (ecmascript)'
        );
      var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
        __turbopack_import__(
          '[project]/node_modules/zod/lib/index.mjs [app-rsc] (ecmascript)'
        );
      const env = (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$t3$2d$oss$2f$env$2d$nextjs$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
        'createEnv'
      ])({
        server: {
          APP_URL:
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
              'z'
            ]
              .string()
              .url()
              .min(1),
          GOOGLE_SITE_VERIFICATION_ID:
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
              'z'
            ]
              .string()
              .optional(),
        },
        runtimeEnv: {
          APP_URL: process.env.APP_URL,
          GOOGLE_SITE_VERIFICATION_ID: process.env.GOOGLE_SITE_VERIFICATION_ID,
          NEXTAUTH_URL: process.env.NEXTAUTH_URL,
          NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
        },
      });
    }
  },
  '[project]/src/paraglide/messages/en.js [app-rsc] (ecmascript)': (
    __turbopack_context__
  ) => {
    'use strict';

    var {
      r: __turbopack_require__,
      f: __turbopack_module_context__,
      i: __turbopack_import__,
      s: __turbopack_esm__,
      v: __turbopack_export_value__,
      n: __turbopack_export_namespace__,
      c: __turbopack_cache__,
      M: __turbopack_modules__,
      l: __turbopack_load__,
      j: __turbopack_dynamic__,
      P: __turbopack_resolve_absolute_path__,
      U: __turbopack_relative_url__,
      R: __turbopack_resolve_module_id_path__,
      b: __turbopack_worker_blob_url__,
      g: global,
      __dirname,
      x: __turbopack_external_require__,
      y: __turbopack_external_import__,
      z: __turbopack_require_stub__,
    } = __turbopack_context__;
    {
      /* eslint-disable */ /**
       * This file contains language specific message functions for tree-shaking.
       *
       *! WARNING: Only import messages from this file if you want to manually
       *! optimize your bundle. Else, import from the `messages.js` file.
       *
       * Your bundler will (in the future) automatically replace the index function
       * with a language specific message function in the build step.
       */ /**
       *
       * @returns {string}
       */ /* @__NO_SIDE_EFFECTS__ */ __turbopack_esm__({
        app_name: () => app_name,
        get_started: () => get_started,
        github: () => github,
        input_placeholder: () => input_placeholder,
        log_out: () => log_out,
        meta_description: () => meta_description,
        meta_keyword_next_auth: () => meta_keyword_next_auth,
        meta_keyword_nextjs: () => meta_keyword_nextjs,
        meta_keyword_nextjs_boilerplate: () => meta_keyword_nextjs_boilerplate,
        meta_keyword_nextjs_starter: () => meta_keyword_nextjs_starter,
        meta_keyword_prisma: () => meta_keyword_prisma,
        meta_keyword_react: () => meta_keyword_react,
        meta_keyword_shadcn_ui: () => meta_keyword_shadcn_ui,
        meta_keyword_starter_template: () => meta_keyword_starter_template,
        meta_keyword_tailwindcss: () => meta_keyword_tailwindcss,
        meta_keyword_typescript: () => meta_keyword_typescript,
        meta_title: () => meta_title,
        my_account: () => my_account,
        nextjs_starter_template_description: () =>
          nextjs_starter_template_description,
        nextjs_starter_template_headline: () =>
          nextjs_starter_template_headline,
        sign_in: () => sign_in,
        submit_form: () => submit_form,
        theme_toggle_label: () => theme_toggle_label,
        upgrade_to_pro_cta: () => upgrade_to_pro_cta,
        you_are_a_pro: () => you_are_a_pro,
      });
      const app_name = () => `Hydroleaf`;
      const sign_in = () => `Sign in`;
      const theme_toggle_label = () => `theme toggle`;
      const my_account = () => `My Account`;
      const upgrade_to_pro_cta = () => `Upgrade to pro`;
      const log_out = () => `Log out`;
      const you_are_a_pro = () => `You are pro!`;
      const input_placeholder = () => `Type your name ...`;
      const submit_form = () => `Submit`;
      const meta_title = () => `Hydroleaf`;
      const meta_description = () =>
        `A Hydroleaf template, packed with features like TypeScript, Tailwind CSS, Next-auth, Eslint, testing tools and more. Jumpstart your project with efficiency and style.`;
      const meta_keyword_nextjs = () => `Next.js`;
      const meta_keyword_react = () => `React`;
      const meta_keyword_nextjs_starter = () => `Hydroleaf`;
      const meta_keyword_nextjs_boilerplate = () => `Next.js boilerplate`;
      const meta_keyword_starter_template = () => `Starter Template`;
      const meta_keyword_tailwindcss = () => `Tailwind CSS`;
      const meta_keyword_typescript = () => `TypeScript`;
      const meta_keyword_shadcn_ui = () => `Shadcn/ui`;
      const meta_keyword_next_auth = () => `Next-auth`;
      const meta_keyword_prisma = () => `Prisma`;
      const nextjs_starter_template_headline = () => `Hydroleaf template`;
      const nextjs_starter_template_description = () =>
        `A Hydroleaf template, packed with features like TypeScript, Tailwind CSS, Next-auth, Eslint, Stripe, Paraglide, testing tools and more. Jumpstart your project with efficiency and style.`;
      const get_started = () => `Get Started`;
      const github = () => `Github`;
    }
  },
  '[project]/src/paraglide/messages/pl.js [app-rsc] (ecmascript)': (
    __turbopack_context__
  ) => {
    'use strict';

    var {
      r: __turbopack_require__,
      f: __turbopack_module_context__,
      i: __turbopack_import__,
      s: __turbopack_esm__,
      v: __turbopack_export_value__,
      n: __turbopack_export_namespace__,
      c: __turbopack_cache__,
      M: __turbopack_modules__,
      l: __turbopack_load__,
      j: __turbopack_dynamic__,
      P: __turbopack_resolve_absolute_path__,
      U: __turbopack_relative_url__,
      R: __turbopack_resolve_module_id_path__,
      b: __turbopack_worker_blob_url__,
      g: global,
      __dirname,
      x: __turbopack_external_require__,
      y: __turbopack_external_import__,
      z: __turbopack_require_stub__,
    } = __turbopack_context__;
    {
      /* eslint-disable */ /**
       * This file contains language specific message functions for tree-shaking.
       *
       *! WARNING: Only import messages from this file if you want to manually
       *! optimize your bundle. Else, import from the `messages.js` file.
       *
       * Your bundler will (in the future) automatically replace the index function
       * with a language specific message function in the build step.
       */ /**
       *
       * @returns {string}
       */ /* @__NO_SIDE_EFFECTS__ */ __turbopack_esm__({
        app_name: () => app_name,
        get_started: () => get_started,
        github: () => github,
        input_placeholder: () => input_placeholder,
        log_out: () => log_out,
        meta_description: () => meta_description,
        meta_keyword_next_auth: () => meta_keyword_next_auth,
        meta_keyword_nextjs: () => meta_keyword_nextjs,
        meta_keyword_nextjs_boilerplate: () => meta_keyword_nextjs_boilerplate,
        meta_keyword_nextjs_starter: () => meta_keyword_nextjs_starter,
        meta_keyword_prisma: () => meta_keyword_prisma,
        meta_keyword_react: () => meta_keyword_react,
        meta_keyword_shadcn_ui: () => meta_keyword_shadcn_ui,
        meta_keyword_starter_template: () => meta_keyword_starter_template,
        meta_keyword_tailwindcss: () => meta_keyword_tailwindcss,
        meta_keyword_typescript: () => meta_keyword_typescript,
        meta_title: () => meta_title,
        my_account: () => my_account,
        nextjs_starter_template_description: () =>
          nextjs_starter_template_description,
        nextjs_starter_template_headline: () =>
          nextjs_starter_template_headline,
        sign_in: () => sign_in,
        submit_form: () => submit_form,
        theme_toggle_label: () => theme_toggle_label,
        upgrade_to_pro_cta: () => upgrade_to_pro_cta,
        you_are_a_pro: () => you_are_a_pro,
      });
      const app_name = () => `next-starter`;
      const sign_in = () => `Zaloguj się`;
      const theme_toggle_label = () => `zmień motyw`;
      const my_account = () => `Moje konto`;
      const upgrade_to_pro_cta = () => `Przejdź na PRO`;
      const log_out = () => `Wyloguj się`;
      const you_are_a_pro = () => `Jesteś PRO!`;
      const input_placeholder = () => `Wpisz swoje imię ...`;
      const submit_form = () => `Wyślij`;
      const meta_title = () => `Hydroleaf`;
      const meta_description = () =>
        `A Hydroleaf template, packed with features like TypeScript, Tailwind CSS, Next-auth, Eslint, testing tools and more. Jumpstart your project with efficiency and style.`;
      const meta_keyword_nextjs = () => `Next.js`;
      const meta_keyword_react = () => `React`;
      const meta_keyword_nextjs_starter = () => `Hydroleaf`;
      const meta_keyword_nextjs_boilerplate = () => `Next.js boilerplate`;
      const meta_keyword_starter_template = () => `Starter Template`;
      const meta_keyword_tailwindcss = () => `Tailwind CSS`;
      const meta_keyword_typescript = () => `TypeScript`;
      const meta_keyword_shadcn_ui = () => `Shadcn/ui`;
      const meta_keyword_next_auth = () => `Next-auth`;
      const meta_keyword_prisma = () => `Prisma`;
      const nextjs_starter_template_headline = () => `Hydroleaf template`;
      const nextjs_starter_template_description = () =>
        `Szablon startowy Next.js, wyposażony w funkcje takie jak TypeScript, Tailwind CSS, Next-auth, Eslint, Stripe, Paraglide, narzędzia testowe i nie tylko. Rozpocznij swój projekt z wydajnością i stylem.`;
      const get_started = () => `Zacznij`;
      const github = () => `Github`;
    }
  },
  '[project]/src/paraglide/messages.js [app-rsc] (ecmascript)': (
    __turbopack_context__
  ) => {
    'use strict';

    var {
      r: __turbopack_require__,
      f: __turbopack_module_context__,
      i: __turbopack_import__,
      s: __turbopack_esm__,
      v: __turbopack_export_value__,
      n: __turbopack_export_namespace__,
      c: __turbopack_cache__,
      M: __turbopack_modules__,
      l: __turbopack_load__,
      j: __turbopack_dynamic__,
      P: __turbopack_resolve_absolute_path__,
      U: __turbopack_relative_url__,
      R: __turbopack_resolve_module_id_path__,
      b: __turbopack_worker_blob_url__,
      g: global,
      __dirname,
      x: __turbopack_external_require__,
      y: __turbopack_external_import__,
      z: __turbopack_require_stub__,
    } = __turbopack_context__;
    {
      /* eslint-disable */ __turbopack_esm__({
        app_name: () => app_name,
        get_started: () => get_started,
        github: () => github,
        input_placeholder: () => input_placeholder,
        log_out: () => log_out,
        meta_description: () => meta_description,
        meta_keyword_next_auth: () => meta_keyword_next_auth,
        meta_keyword_nextjs: () => meta_keyword_nextjs,
        meta_keyword_nextjs_boilerplate: () => meta_keyword_nextjs_boilerplate,
        meta_keyword_nextjs_starter: () => meta_keyword_nextjs_starter,
        meta_keyword_prisma: () => meta_keyword_prisma,
        meta_keyword_react: () => meta_keyword_react,
        meta_keyword_shadcn_ui: () => meta_keyword_shadcn_ui,
        meta_keyword_starter_template: () => meta_keyword_starter_template,
        meta_keyword_tailwindcss: () => meta_keyword_tailwindcss,
        meta_keyword_typescript: () => meta_keyword_typescript,
        meta_title: () => meta_title,
        my_account: () => my_account,
        nextjs_starter_template_description: () =>
          nextjs_starter_template_description,
        nextjs_starter_template_headline: () =>
          nextjs_starter_template_headline,
        sign_in: () => sign_in,
        submit_form: () => submit_form,
        theme_toggle_label: () => theme_toggle_label,
        upgrade_to_pro_cta: () => upgrade_to_pro_cta,
        you_are_a_pro: () => you_are_a_pro,
      });
      var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$paraglide$2f$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
        __turbopack_import__(
          '[project]/src/paraglide/runtime.js [app-rsc] (ecmascript)'
        );
      var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$paraglide$2f$messages$2f$en$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
        __turbopack_import__(
          '[project]/src/paraglide/messages/en.js [app-rsc] (ecmascript)'
        );
      var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$paraglide$2f$messages$2f$pl$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
        __turbopack_import__(
          '[project]/src/paraglide/messages/pl.js [app-rsc] (ecmascript)'
        );
      const app_name = (params = {}, options = {}) => {
        return {
          en: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$paraglide$2f$messages$2f$en$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__.app_name,
          pl: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$paraglide$2f$messages$2f$pl$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__.app_name,
        }[
          options.languageTag ??
            (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$paraglide$2f$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
              'languageTag'
            ])()
        ]();
      };
      const sign_in = (params = {}, options = {}) => {
        return {
          en: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$paraglide$2f$messages$2f$en$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__.sign_in,
          pl: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$paraglide$2f$messages$2f$pl$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__.sign_in,
        }[
          options.languageTag ??
            (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$paraglide$2f$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
              'languageTag'
            ])()
        ]();
      };
      const theme_toggle_label = (params = {}, options = {}) => {
        return {
          en: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$paraglide$2f$messages$2f$en$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__.theme_toggle_label,
          pl: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$paraglide$2f$messages$2f$pl$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__.theme_toggle_label,
        }[
          options.languageTag ??
            (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$paraglide$2f$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
              'languageTag'
            ])()
        ]();
      };
      const my_account = (params = {}, options = {}) => {
        return {
          en: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$paraglide$2f$messages$2f$en$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__.my_account,
          pl: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$paraglide$2f$messages$2f$pl$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__.my_account,
        }[
          options.languageTag ??
            (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$paraglide$2f$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
              'languageTag'
            ])()
        ]();
      };
      const upgrade_to_pro_cta = (params = {}, options = {}) => {
        return {
          en: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$paraglide$2f$messages$2f$en$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__.upgrade_to_pro_cta,
          pl: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$paraglide$2f$messages$2f$pl$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__.upgrade_to_pro_cta,
        }[
          options.languageTag ??
            (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$paraglide$2f$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
              'languageTag'
            ])()
        ]();
      };
      const log_out = (params = {}, options = {}) => {
        return {
          en: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$paraglide$2f$messages$2f$en$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__.log_out,
          pl: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$paraglide$2f$messages$2f$pl$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__.log_out,
        }[
          options.languageTag ??
            (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$paraglide$2f$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
              'languageTag'
            ])()
        ]();
      };
      const you_are_a_pro = (params = {}, options = {}) => {
        return {
          en: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$paraglide$2f$messages$2f$en$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__.you_are_a_pro,
          pl: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$paraglide$2f$messages$2f$pl$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__.you_are_a_pro,
        }[
          options.languageTag ??
            (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$paraglide$2f$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
              'languageTag'
            ])()
        ]();
      };
      const input_placeholder = (params = {}, options = {}) => {
        return {
          en: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$paraglide$2f$messages$2f$en$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__.input_placeholder,
          pl: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$paraglide$2f$messages$2f$pl$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__.input_placeholder,
        }[
          options.languageTag ??
            (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$paraglide$2f$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
              'languageTag'
            ])()
        ]();
      };
      const submit_form = (params = {}, options = {}) => {
        return {
          en: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$paraglide$2f$messages$2f$en$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__.submit_form,
          pl: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$paraglide$2f$messages$2f$pl$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__.submit_form,
        }[
          options.languageTag ??
            (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$paraglide$2f$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
              'languageTag'
            ])()
        ]();
      };
      const meta_title = (params = {}, options = {}) => {
        return {
          en: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$paraglide$2f$messages$2f$en$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__.meta_title,
          pl: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$paraglide$2f$messages$2f$pl$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__.meta_title,
        }[
          options.languageTag ??
            (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$paraglide$2f$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
              'languageTag'
            ])()
        ]();
      };
      const meta_description = (params = {}, options = {}) => {
        return {
          en: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$paraglide$2f$messages$2f$en$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__.meta_description,
          pl: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$paraglide$2f$messages$2f$pl$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__.meta_description,
        }[
          options.languageTag ??
            (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$paraglide$2f$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
              'languageTag'
            ])()
        ]();
      };
      const meta_keyword_nextjs = (params = {}, options = {}) => {
        return {
          en: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$paraglide$2f$messages$2f$en$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__.meta_keyword_nextjs,
          pl: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$paraglide$2f$messages$2f$pl$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__.meta_keyword_nextjs,
        }[
          options.languageTag ??
            (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$paraglide$2f$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
              'languageTag'
            ])()
        ]();
      };
      const meta_keyword_react = (params = {}, options = {}) => {
        return {
          en: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$paraglide$2f$messages$2f$en$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__.meta_keyword_react,
          pl: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$paraglide$2f$messages$2f$pl$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__.meta_keyword_react,
        }[
          options.languageTag ??
            (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$paraglide$2f$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
              'languageTag'
            ])()
        ]();
      };
      const meta_keyword_nextjs_starter = (params = {}, options = {}) => {
        return {
          en: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$paraglide$2f$messages$2f$en$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__.meta_keyword_nextjs_starter,
          pl: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$paraglide$2f$messages$2f$pl$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__.meta_keyword_nextjs_starter,
        }[
          options.languageTag ??
            (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$paraglide$2f$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
              'languageTag'
            ])()
        ]();
      };
      const meta_keyword_nextjs_boilerplate = (params = {}, options = {}) => {
        return {
          en: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$paraglide$2f$messages$2f$en$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__.meta_keyword_nextjs_boilerplate,
          pl: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$paraglide$2f$messages$2f$pl$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__.meta_keyword_nextjs_boilerplate,
        }[
          options.languageTag ??
            (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$paraglide$2f$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
              'languageTag'
            ])()
        ]();
      };
      const meta_keyword_starter_template = (params = {}, options = {}) => {
        return {
          en: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$paraglide$2f$messages$2f$en$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__.meta_keyword_starter_template,
          pl: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$paraglide$2f$messages$2f$pl$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__.meta_keyword_starter_template,
        }[
          options.languageTag ??
            (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$paraglide$2f$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
              'languageTag'
            ])()
        ]();
      };
      const meta_keyword_tailwindcss = (params = {}, options = {}) => {
        return {
          en: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$paraglide$2f$messages$2f$en$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__.meta_keyword_tailwindcss,
          pl: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$paraglide$2f$messages$2f$pl$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__.meta_keyword_tailwindcss,
        }[
          options.languageTag ??
            (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$paraglide$2f$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
              'languageTag'
            ])()
        ]();
      };
      const meta_keyword_typescript = (params = {}, options = {}) => {
        return {
          en: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$paraglide$2f$messages$2f$en$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__.meta_keyword_typescript,
          pl: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$paraglide$2f$messages$2f$pl$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__.meta_keyword_typescript,
        }[
          options.languageTag ??
            (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$paraglide$2f$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
              'languageTag'
            ])()
        ]();
      };
      const meta_keyword_shadcn_ui = (params = {}, options = {}) => {
        return {
          en: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$paraglide$2f$messages$2f$en$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__.meta_keyword_shadcn_ui,
          pl: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$paraglide$2f$messages$2f$pl$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__.meta_keyword_shadcn_ui,
        }[
          options.languageTag ??
            (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$paraglide$2f$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
              'languageTag'
            ])()
        ]();
      };
      const meta_keyword_next_auth = (params = {}, options = {}) => {
        return {
          en: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$paraglide$2f$messages$2f$en$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__.meta_keyword_next_auth,
          pl: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$paraglide$2f$messages$2f$pl$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__.meta_keyword_next_auth,
        }[
          options.languageTag ??
            (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$paraglide$2f$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
              'languageTag'
            ])()
        ]();
      };
      const meta_keyword_prisma = (params = {}, options = {}) => {
        return {
          en: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$paraglide$2f$messages$2f$en$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__.meta_keyword_prisma,
          pl: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$paraglide$2f$messages$2f$pl$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__.meta_keyword_prisma,
        }[
          options.languageTag ??
            (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$paraglide$2f$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
              'languageTag'
            ])()
        ]();
      };
      const nextjs_starter_template_headline = (params = {}, options = {}) => {
        return {
          en: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$paraglide$2f$messages$2f$en$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__.nextjs_starter_template_headline,
          pl: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$paraglide$2f$messages$2f$pl$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__.nextjs_starter_template_headline,
        }[
          options.languageTag ??
            (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$paraglide$2f$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
              'languageTag'
            ])()
        ]();
      };
      const nextjs_starter_template_description = (
        params = {},
        options = {}
      ) => {
        return {
          en: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$paraglide$2f$messages$2f$en$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__.nextjs_starter_template_description,
          pl: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$paraglide$2f$messages$2f$pl$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__.nextjs_starter_template_description,
        }[
          options.languageTag ??
            (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$paraglide$2f$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
              'languageTag'
            ])()
        ]();
      };
      const get_started = (params = {}, options = {}) => {
        return {
          en: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$paraglide$2f$messages$2f$en$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__.get_started,
          pl: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$paraglide$2f$messages$2f$pl$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__.get_started,
        }[
          options.languageTag ??
            (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$paraglide$2f$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
              'languageTag'
            ])()
        ]();
      };
      const github = (params = {}, options = {}) => {
        return {
          en: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$paraglide$2f$messages$2f$en$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__.github,
          pl: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$paraglide$2f$messages$2f$pl$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__.github,
        }[
          options.languageTag ??
            (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$paraglide$2f$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
              'languageTag'
            ])()
        ]();
      };
    }
  },
  '[project]/src/lib/constant.ts [app-rsc] (ecmascript)': (
    __turbopack_context__
  ) => {
    'use strict';

    var {
      r: __turbopack_require__,
      f: __turbopack_module_context__,
      i: __turbopack_import__,
      s: __turbopack_esm__,
      v: __turbopack_export_value__,
      n: __turbopack_export_namespace__,
      c: __turbopack_cache__,
      M: __turbopack_modules__,
      l: __turbopack_load__,
      j: __turbopack_dynamic__,
      P: __turbopack_resolve_absolute_path__,
      U: __turbopack_relative_url__,
      R: __turbopack_resolve_module_id_path__,
      b: __turbopack_worker_blob_url__,
      g: global,
      __dirname,
      x: __turbopack_external_require__,
      y: __turbopack_external_import__,
      z: __turbopack_require_stub__,
    } = __turbopack_context__;
    {
      __turbopack_esm__({
        siteConfig: () => siteConfig,
      });
      var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
        __turbopack_import__('[project]/src/env.mjs [app-rsc] (ecmascript)');
      var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$paraglide$2f$messages$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
        __turbopack_import__(
          '[project]/src/paraglide/messages.js [app-rsc] (ecmascript)'
        );
      const siteConfig = {
        title:
          __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$paraglide$2f$messages$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__.meta_title,
        description:
          __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$paraglide$2f$messages$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__.meta_description,
        keywords: () => [
          __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$paraglide$2f$messages$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__.meta_keyword_nextjs(),
          __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$paraglide$2f$messages$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__.meta_keyword_react(),
          __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$paraglide$2f$messages$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__.meta_keyword_nextjs_starter(),
          __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$paraglide$2f$messages$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__.meta_keyword_nextjs_boilerplate(),
          __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$paraglide$2f$messages$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__.meta_keyword_starter_template(),
          __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$paraglide$2f$messages$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__.meta_keyword_tailwindcss(),
          __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$paraglide$2f$messages$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__.meta_keyword_typescript(),
          __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$paraglide$2f$messages$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__.meta_keyword_shadcn_ui(),
          __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$paraglide$2f$messages$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__.meta_keyword_next_auth(),
          __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$paraglide$2f$messages$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__.meta_keyword_prisma(),
        ],
        url: () =>
          __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
            'env'
          ].APP_URL,
        googleSiteVerificationId: () =>
          __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
            'env'
          ].GOOGLE_SITE_VERIFICATION_ID || '',
      };
    }
  },
  '[next]/internal/font/google/inter_fe02cb04.module.css [app-client] (css module)':
    (__turbopack_context__) => {
      var {
        r: __turbopack_require__,
        f: __turbopack_module_context__,
        i: __turbopack_import__,
        s: __turbopack_esm__,
        v: __turbopack_export_value__,
        n: __turbopack_export_namespace__,
        c: __turbopack_cache__,
        M: __turbopack_modules__,
        l: __turbopack_load__,
        j: __turbopack_dynamic__,
        P: __turbopack_resolve_absolute_path__,
        U: __turbopack_relative_url__,
        R: __turbopack_resolve_module_id_path__,
        b: __turbopack_worker_blob_url__,
        g: global,
        __dirname,
        t: __turbopack_require_real__,
      } = __turbopack_context__;
      {
        __turbopack_export_value__({
          className: 'inter_fe02cb04-module__8bMbnG__className',
          variable: 'inter_fe02cb04-module__8bMbnG__variable',
        });
      }
    },
  '[next]/internal/font/google/inter_fe02cb04.js [app-rsc] (ecmascript)': (
    __turbopack_context__
  ) => {
    'use strict';

    var {
      r: __turbopack_require__,
      f: __turbopack_module_context__,
      i: __turbopack_import__,
      s: __turbopack_esm__,
      v: __turbopack_export_value__,
      n: __turbopack_export_namespace__,
      c: __turbopack_cache__,
      M: __turbopack_modules__,
      l: __turbopack_load__,
      j: __turbopack_dynamic__,
      P: __turbopack_resolve_absolute_path__,
      U: __turbopack_relative_url__,
      R: __turbopack_resolve_module_id_path__,
      b: __turbopack_worker_blob_url__,
      g: global,
      __dirname,
      x: __turbopack_external_require__,
      y: __turbopack_external_import__,
      z: __turbopack_require_stub__,
    } = __turbopack_context__;
    {
      __turbopack_esm__({
        default: () => __TURBOPACK__default__export__,
      });
      var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_fe02cb04$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ =
        __turbopack_import__(
          '[next]/internal/font/google/inter_fe02cb04.module.css [app-client] (css module)'
        );
      const fontData = {
        className:
          __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_fe02cb04$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__[
            'default'
          ].className,
        style: {
          fontFamily: "'Inter', system-ui, arial",
          fontStyle: 'normal',
        },
      };
      if (
        __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_fe02cb04$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__[
          'default'
        ].variable != null
      ) {
        fontData.variable =
          __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_fe02cb04$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__[
            'default'
          ].variable;
      }
      const __TURBOPACK__default__export__ = fontData;
    }
  },
  '[next]/internal/font/google/jetbrains_mono_7325d82d.module.css [app-client] (css module)':
    (__turbopack_context__) => {
      var {
        r: __turbopack_require__,
        f: __turbopack_module_context__,
        i: __turbopack_import__,
        s: __turbopack_esm__,
        v: __turbopack_export_value__,
        n: __turbopack_export_namespace__,
        c: __turbopack_cache__,
        M: __turbopack_modules__,
        l: __turbopack_load__,
        j: __turbopack_dynamic__,
        P: __turbopack_resolve_absolute_path__,
        U: __turbopack_relative_url__,
        R: __turbopack_resolve_module_id_path__,
        b: __turbopack_worker_blob_url__,
        g: global,
        __dirname,
        t: __turbopack_require_real__,
      } = __turbopack_context__;
      {
        __turbopack_export_value__({
          className: 'jetbrains_mono_7325d82d-module__hO7fxW__className',
          variable: 'jetbrains_mono_7325d82d-module__hO7fxW__variable',
        });
      }
    },
  '[next]/internal/font/google/jetbrains_mono_7325d82d.js [app-rsc] (ecmascript)':
    (__turbopack_context__) => {
      'use strict';

      var {
        r: __turbopack_require__,
        f: __turbopack_module_context__,
        i: __turbopack_import__,
        s: __turbopack_esm__,
        v: __turbopack_export_value__,
        n: __turbopack_export_namespace__,
        c: __turbopack_cache__,
        M: __turbopack_modules__,
        l: __turbopack_load__,
        j: __turbopack_dynamic__,
        P: __turbopack_resolve_absolute_path__,
        U: __turbopack_relative_url__,
        R: __turbopack_resolve_module_id_path__,
        b: __turbopack_worker_blob_url__,
        g: global,
        __dirname,
        x: __turbopack_external_require__,
        y: __turbopack_external_import__,
        z: __turbopack_require_stub__,
      } = __turbopack_context__;
      {
        __turbopack_esm__({
          default: () => __TURBOPACK__default__export__,
        });
        var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$jetbrains_mono_7325d82d$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ =
          __turbopack_import__(
            '[next]/internal/font/google/jetbrains_mono_7325d82d.module.css [app-client] (css module)'
          );
        const fontData = {
          className:
            __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$jetbrains_mono_7325d82d$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__[
              'default'
            ].className,
          style: {
            fontFamily: "'JetBrains Mono', system-ui, arial",
            fontStyle: 'normal',
          },
        };
        if (
          __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$jetbrains_mono_7325d82d$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__[
            'default'
          ].variable != null
        ) {
          fontData.variable =
            __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$jetbrains_mono_7325d82d$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__[
              'default'
            ].variable;
        }
        const __TURBOPACK__default__export__ = fontData;
      }
    },
  '[project]/src/lib/fonts.ts [app-rsc] (ecmascript)': (
    __turbopack_context__
  ) => {
    'use strict';

    var {
      r: __turbopack_require__,
      f: __turbopack_module_context__,
      i: __turbopack_import__,
      s: __turbopack_esm__,
      v: __turbopack_export_value__,
      n: __turbopack_export_namespace__,
      c: __turbopack_cache__,
      M: __turbopack_modules__,
      l: __turbopack_load__,
      j: __turbopack_dynamic__,
      P: __turbopack_resolve_absolute_path__,
      U: __turbopack_relative_url__,
      R: __turbopack_resolve_module_id_path__,
      b: __turbopack_worker_blob_url__,
      g: global,
      __dirname,
      x: __turbopack_external_require__,
      y: __turbopack_external_import__,
      z: __turbopack_require_stub__,
    } = __turbopack_context__;
    {
      __turbopack_esm__({
        fonts: () => fonts,
      });
      var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_fe02cb04$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
        __turbopack_import__(
          '[next]/internal/font/google/inter_fe02cb04.js [app-rsc] (ecmascript)'
        );
      var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$jetbrains_mono_7325d82d$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
        __turbopack_import__(
          '[next]/internal/font/google/jetbrains_mono_7325d82d.js [app-rsc] (ecmascript)'
        );
      const fonts = [
        __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_fe02cb04$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
          'default'
        ].variable,
        __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$jetbrains_mono_7325d82d$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
          'default'
        ].variable,
      ];
    }
  },
  '[project]/src/lib/utils.ts [app-rsc] (ecmascript)': (
    __turbopack_context__
  ) => {
    'use strict';

    var {
      r: __turbopack_require__,
      f: __turbopack_module_context__,
      i: __turbopack_import__,
      s: __turbopack_esm__,
      v: __turbopack_export_value__,
      n: __turbopack_export_namespace__,
      c: __turbopack_cache__,
      M: __turbopack_modules__,
      l: __turbopack_load__,
      j: __turbopack_dynamic__,
      P: __turbopack_resolve_absolute_path__,
      U: __turbopack_relative_url__,
      R: __turbopack_resolve_module_id_path__,
      b: __turbopack_worker_blob_url__,
      g: global,
      __dirname,
      x: __turbopack_external_require__,
      y: __turbopack_external_import__,
      z: __turbopack_require_stub__,
    } = __turbopack_context__;
    {
      __turbopack_esm__({
        cn: () => cn,
      });
      var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
        __turbopack_import__(
          '[project]/node_modules/clsx/dist/clsx.mjs [app-rsc] (ecmascript)'
        );
      var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
        __turbopack_import__(
          '[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-rsc] (ecmascript)'
        );
      const cn = (...inputs) =>
        (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
          'twMerge'
        ])(
          (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
            'clsx'
          ])(inputs)
        );
    }
  },
  '[project]/src/app/layout.tsx [app-rsc] (ecmascript)': (
    __turbopack_context__
  ) => {
    'use strict';

    var {
      r: __turbopack_require__,
      f: __turbopack_module_context__,
      i: __turbopack_import__,
      s: __turbopack_esm__,
      v: __turbopack_export_value__,
      n: __turbopack_export_namespace__,
      c: __turbopack_cache__,
      M: __turbopack_modules__,
      l: __turbopack_load__,
      j: __turbopack_dynamic__,
      P: __turbopack_resolve_absolute_path__,
      U: __turbopack_relative_url__,
      R: __turbopack_resolve_module_id_path__,
      b: __turbopack_worker_blob_url__,
      g: global,
      __dirname,
      x: __turbopack_external_require__,
      y: __turbopack_external_import__,
      z: __turbopack_require_stub__,
    } = __turbopack_context__;
    {
      __turbopack_esm__({
        RootLayout: () => RootLayout,
        default: () => __TURBOPACK__default__export__,
        generateMetadata: () => generateMetadata,
      });
      var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
        __turbopack_import__(
          '[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)'
        );
      var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$inlang$2f$paraglide$2d$next$2f$dist$2f$app$2f$index$2e$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ =
        __turbopack_import__(
          '[project]/node_modules/@inlang/paraglide-next/dist/app/index.server.js [app-rsc] (ecmascript) <module evaluation>'
        );
      var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$footer$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
        __turbopack_import__(
          '[project]/src/components/footer.tsx [app-rsc] (ecmascript)'
        );
      var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$navbar$2f$navbar$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
        __turbopack_import__(
          '[project]/src/components/navbar/navbar.tsx [app-rsc] (ecmascript)'
        );
      var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$theme$2d$provider$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
        __turbopack_import__(
          '[project]/src/components/theme-provider.tsx [app-rsc] (ecmascript)'
        );
      var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$theme$2d$switcher$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
        __turbopack_import__(
          '[project]/src/components/theme-switcher.tsx [app-rsc] (ecmascript)'
        );
      var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$toaster$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
        __turbopack_import__(
          '[project]/src/components/ui/toaster.tsx [app-rsc] (ecmascript)'
        );
      var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constant$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
        __turbopack_import__(
          '[project]/src/lib/constant.ts [app-rsc] (ecmascript)'
        );
      var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$fonts$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
        __turbopack_import__(
          '[project]/src/lib/fonts.ts [app-rsc] (ecmascript)'
        );
      var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
        __turbopack_import__(
          '[project]/src/lib/utils.ts [app-rsc] (ecmascript)'
        );
      var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$paraglide$2f$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
        __turbopack_import__(
          '[project]/src/paraglide/runtime.js [app-rsc] (ecmascript)'
        );
      var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$inlang$2f$paraglide$2d$next$2f$dist$2f$paraglide$2d$next$2f$src$2f$app$2f$providers$2f$LanguageProvider$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__LanguageProvider$3e$__ =
        __turbopack_import__(
          '[project]/node_modules/@inlang/paraglide-next/dist/paraglide-next/src/app/providers/LanguageProvider.js [app-rsc] (ecmascript) <export default as LanguageProvider>'
        );
      const generateMetadata = () => ({
        metadataBase: new URL(
          __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constant$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
            'siteConfig'
          ].url()
        ),
        title: {
          default:
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constant$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
              'siteConfig'
            ].title(),
          template: `%s | ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constant$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__['siteConfig'].title()}`,
        },
        description:
          __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constant$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
            'siteConfig'
          ].description(),
        keywords:
          __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constant$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
            'siteConfig'
          ].keywords(),
        robots: {
          index: true,
          follow: true,
        },
        icons: {
          icon: '/images/logo_transparent.png',
          shortcut: '/images/logo_transparent.png',
          apple: '/images/logo_transparent.png',
        },
        verification: {
          google:
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constant$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
              'siteConfig'
            ].googleSiteVerificationId(),
        },
        openGraph: {
          url: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constant$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
            'siteConfig'
          ].url(),
          title:
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constant$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
              'siteConfig'
            ].title(),
          description:
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constant$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
              'siteConfig'
            ].description(),
          siteName:
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constant$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
              'siteConfig'
            ].title(),
          images: '/opengraph-image.png',
          type: 'website',
          locale: (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$paraglide$2f$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
            'languageTag'
          ])(),
        },
        twitter: {
          card: 'summary_large_image',
          title:
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constant$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
              'siteConfig'
            ].title(),
          description:
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constant$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
              'siteConfig'
            ].description(),
          images: '/opengraph-image.png',
        },
      });
      const RootLayout = ({ children }) => {
        return /*#__PURE__*/ (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
          'jsxDEV'
        ])(
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$inlang$2f$paraglide$2d$next$2f$dist$2f$paraglide$2d$next$2f$src$2f$app$2f$providers$2f$LanguageProvider$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__LanguageProvider$3e$__[
            'LanguageProvider'
          ],
          {
            children: /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
              'jsxDEV'
            ])(
              'html',
              {
                lang: (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$paraglide$2f$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                  'languageTag'
                ])(),
                suppressHydrationWarning: true,
                children: [
                  /*#__PURE__*/ (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                    'jsxDEV'
                  ])(
                    'head',
                    {
                      children: [
                        /*#__PURE__*/ (0,
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                          'jsxDEV'
                        ])(
                          'link',
                          {
                            rel: 'preconnect',
                            href: 'https://fonts.googleapis.com',
                          },
                          void 0,
                          false,
                          {
                            fileName: '[project]/src/app/layout.tsx',
                            lineNumber: 58,
                            columnNumber: 11,
                          },
                          this
                        ),
                        /*#__PURE__*/ (0,
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                          'jsxDEV'
                        ])(
                          'link',
                          {
                            rel: 'preconnect',
                            href: 'https://fonts.gstatic.com',
                            crossOrigin: 'anonymous',
                          },
                          void 0,
                          false,
                          {
                            fileName: '[project]/src/app/layout.tsx',
                            lineNumber: 59,
                            columnNumber: 11,
                          },
                          this
                        ),
                        /*#__PURE__*/ (0,
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                          'jsxDEV'
                        ])(
                          'link',
                          {
                            href: 'https://fonts.googleapis.com/css2?family=Big+Shoulders:wght@100..900&display=swap',
                            rel: 'stylesheet',
                          },
                          void 0,
                          false,
                          {
                            fileName: '[project]/src/app/layout.tsx',
                            lineNumber: 64,
                            columnNumber: 11,
                          },
                          this
                        ),
                      ],
                    },
                    void 0,
                    true,
                    {
                      fileName: '[project]/src/app/layout.tsx',
                      lineNumber: 56,
                      columnNumber: 9,
                    },
                    this
                  ),
                  /*#__PURE__*/ (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                    'jsxDEV'
                  ])(
                    'body',
                    {
                      className: (0,
                      __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                        'cn'
                      ])(
                        'page-transition flex min-h-screen flex-col font-sans',
                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$fonts$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                          'fonts'
                        ]
                      ),
                      children: /*#__PURE__*/ (0,
                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                        'jsxDEV'
                      ])(
                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$theme$2d$provider$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                          'ThemeProvider'
                        ],
                        {
                          attribute: 'class',
                          children: [
                            /*#__PURE__*/ (0,
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                              'jsxDEV'
                            ])(
                              __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$navbar$2f$navbar$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                                'default'
                              ],
                              {},
                              void 0,
                              false,
                              {
                                fileName: '[project]/src/app/layout.tsx',
                                lineNumber: 76,
                                columnNumber: 13,
                              },
                              this
                            ),
                            /*#__PURE__*/ (0,
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                              'jsxDEV'
                            ])(
                              'main',
                              {
                                className: 'grow',
                                children: children,
                              },
                              void 0,
                              false,
                              {
                                fileName: '[project]/src/app/layout.tsx',
                                lineNumber: 77,
                                columnNumber: 13,
                              },
                              this
                            ),
                            /*#__PURE__*/ (0,
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                              'jsxDEV'
                            ])(
                              __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$footer$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                                'Footer'
                              ],
                              {},
                              void 0,
                              false,
                              {
                                fileName: '[project]/src/app/layout.tsx',
                                lineNumber: 78,
                                columnNumber: 13,
                              },
                              this
                            ),
                            /*#__PURE__*/ (0,
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                              'jsxDEV'
                            ])(
                              __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$theme$2d$switcher$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                                'ThemeSwitcher'
                              ],
                              {
                                className: 'fixed bottom-5 right-5 z-10',
                              },
                              void 0,
                              false,
                              {
                                fileName: '[project]/src/app/layout.tsx',
                                lineNumber: 79,
                                columnNumber: 13,
                              },
                              this
                            ),
                            /*#__PURE__*/ (0,
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                              'jsxDEV'
                            ])(
                              __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$toaster$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                                'Toaster'
                              ],
                              {},
                              void 0,
                              false,
                              {
                                fileName: '[project]/src/app/layout.tsx',
                                lineNumber: 80,
                                columnNumber: 13,
                              },
                              this
                            ),
                          ],
                        },
                        void 0,
                        true,
                        {
                          fileName: '[project]/src/app/layout.tsx',
                          lineNumber: 75,
                          columnNumber: 11,
                        },
                        this
                      ),
                    },
                    void 0,
                    false,
                    {
                      fileName: '[project]/src/app/layout.tsx',
                      lineNumber: 69,
                      columnNumber: 9,
                    },
                    this
                  ),
                ],
              },
              void 0,
              true,
              {
                fileName: '[project]/src/app/layout.tsx',
                lineNumber: 55,
                columnNumber: 7,
              },
              this
            ),
          },
          void 0,
          false,
          {
            fileName: '[project]/src/app/layout.tsx',
            lineNumber: 54,
            columnNumber: 5,
          },
          this
        );
      };
      const __TURBOPACK__default__export__ = RootLayout;
    }
  },
  '[project]/src/app/layout.tsx [app-rsc] (ecmascript, Next.js server component)':
    (__turbopack_context__) => {
      var {
        r: __turbopack_require__,
        f: __turbopack_module_context__,
        i: __turbopack_import__,
        s: __turbopack_esm__,
        v: __turbopack_export_value__,
        n: __turbopack_export_namespace__,
        c: __turbopack_cache__,
        M: __turbopack_modules__,
        l: __turbopack_load__,
        j: __turbopack_dynamic__,
        P: __turbopack_resolve_absolute_path__,
        U: __turbopack_relative_url__,
        R: __turbopack_resolve_module_id_path__,
        b: __turbopack_worker_blob_url__,
        g: global,
        __dirname,
        t: __turbopack_require_real__,
      } = __turbopack_context__;
      {
        __turbopack_export_namespace__(
          __turbopack_import__(
            '[project]/src/app/layout.tsx [app-rsc] (ecmascript)'
          )
        );
      }
    },
};

//# sourceMappingURL=%5Broot%20of%20the%20server%5D__03a4d8._.js.map
