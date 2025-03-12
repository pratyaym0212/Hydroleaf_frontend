(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([
  'static/chunks/src_7c8c94._.js',
  {
    '[project]/src/components/blog/blog.tsx [app-client] (ecmascript)': (
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
        k: __turbopack_refresh__,
        m: module,
        z: __turbopack_require_stub__,
      } = __turbopack_context__;
      {
        __turbopack_esm__({
          default: () => __TURBOPACK__default__export__,
        });
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)'
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)'
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
          __turbopack_import__(
            '[project]/node_modules/next/image.js [app-client] (ecmascript)'
          );
        var _s = __turbopack_refresh__.signature();
        ('use client');
        const Blogs = () => {
          _s();
          const [blogs, setBlogs] = (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            'useState'
          ])([]);
          (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            'useEffect'
          ])(
            {
              'Blogs.useEffect': () => {
                const fetchBlogs = {
                  'Blogs.useEffect.fetchBlogs': async () => {
                    try {
                      const response = await fetch('/api/blog');
                      if (!response.ok) {
                        throw new Error(
                          `HTTP error! Status: ${response.status}`
                        );
                      }
                      const data = await response.json();
                      console.log('Fetched Blogs:', data); // Debugging line
                      setBlogs(data);
                    } catch (error) {
                      console.error('Error fetching blogs:', error);
                    }
                  },
                }['Blogs.useEffect.fetchBlogs'];
                fetchBlogs();
              },
            }['Blogs.useEffect'],
            []
          );
          return /*#__PURE__*/ (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            'jsxDEV'
          ])(
            'section',
            {
              id: 'blogs',
              children: /*#__PURE__*/ (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                'jsxDEV'
              ])(
                'div',
                {
                  className: 'section-content',
                  children: [
                    /*#__PURE__*/ (0,
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                      'jsxDEV'
                    ])(
                      'h2',
                      {
                        children: 'Latest Blogs',
                      },
                      void 0,
                      false,
                      {
                        fileName: '[project]/src/components/blog/blog.tsx',
                        lineNumber: 38,
                        columnNumber: 9,
                      },
                      this
                    ),
                    blogs.map((blog) =>
                      /*#__PURE__*/ (0,
                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                        'jsxDEV'
                      ])(
                        'div',
                        {
                          className: `blog-container ${blog.reverse ? 'reverse' : ''}`,
                          children: [
                            /*#__PURE__*/ (0,
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                              'jsxDEV'
                            ])(
                              'div',
                              {
                                className: 'blog-image-container',
                                children: /*#__PURE__*/ (0,
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                  'jsxDEV'
                                ])(
                                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                    'default'
                                  ],
                                  {
                                    src: blog.image,
                                    alt: `Image for ${blog.title}`,
                                    className: 'blog-image',
                                    width: 500,
                                    height: 300,
                                    priority: true,
                                  },
                                  void 0,
                                  false,
                                  {
                                    fileName:
                                      '[project]/src/components/blog/blog.tsx',
                                    lineNumber: 45,
                                    columnNumber: 15,
                                  },
                                  this
                                ),
                              },
                              void 0,
                              false,
                              {
                                fileName:
                                  '[project]/src/components/blog/blog.tsx',
                                lineNumber: 44,
                                columnNumber: 13,
                              },
                              this
                            ),
                            /*#__PURE__*/ (0,
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                              'jsxDEV'
                            ])(
                              'div',
                              {
                                className: 'blog-content',
                                children: [
                                  /*#__PURE__*/ (0,
                                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                    'jsxDEV'
                                  ])(
                                    'h3',
                                    {
                                      children: blog.title,
                                    },
                                    void 0,
                                    false,
                                    {
                                      fileName:
                                        '[project]/src/components/blog/blog.tsx',
                                      lineNumber: 55,
                                      columnNumber: 15,
                                    },
                                    this
                                  ),
                                  /*#__PURE__*/ (0,
                                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                                    'jsxDEV'
                                  ])(
                                    'p',
                                    {
                                      children: blog.content,
                                    },
                                    void 0,
                                    false,
                                    {
                                      fileName:
                                        '[project]/src/components/blog/blog.tsx',
                                      lineNumber: 56,
                                      columnNumber: 15,
                                    },
                                    this
                                  ),
                                ],
                              },
                              void 0,
                              true,
                              {
                                fileName:
                                  '[project]/src/components/blog/blog.tsx',
                                lineNumber: 54,
                                columnNumber: 13,
                              },
                              this
                            ),
                          ],
                        },
                        blog.id,
                        true,
                        {
                          fileName: '[project]/src/components/blog/blog.tsx',
                          lineNumber: 40,
                          columnNumber: 11,
                        },
                        this
                      )
                    ),
                  ],
                },
                void 0,
                true,
                {
                  fileName: '[project]/src/components/blog/blog.tsx',
                  lineNumber: 37,
                  columnNumber: 7,
                },
                this
              ),
            },
            void 0,
            false,
            {
              fileName: '[project]/src/components/blog/blog.tsx',
              lineNumber: 36,
              columnNumber: 5,
            },
            this
          );
        };
        _s(Blogs, 'RDzdeLKEs49XKHWpCIuOQAADm3U=');
        _c = Blogs;
        const __TURBOPACK__default__export__ = Blogs;
        var _c;
        __turbopack_refresh__.register(_c, 'Blogs');
        if (
          typeof globalThis.$RefreshHelpers$ === 'object' &&
          globalThis.$RefreshHelpers !== null
        ) {
          __turbopack_refresh__.registerExports(
            module,
            globalThis.$RefreshHelpers$
          );
        }
      }
    },
    '[project]/src/app/blog/page.tsx [app-rsc] (ecmascript, Next.js server component, client modules)':
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
        }
      },
  },
]);

//# sourceMappingURL=src_7c8c94._.js.map
