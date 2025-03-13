(() => {
  var e = {};
  (e.id = 831),
    (e.ids = [831]),
    (e.modules = {
      10846: (e) => {
        'use strict';
        e.exports = require('next/dist/compiled/next-server/app-page.runtime.prod.js');
      },
      19121: (e) => {
        'use strict';
        e.exports = require('next/dist/server/app-render/action-async-storage.external.js');
      },
      3295: (e) => {
        'use strict';
        e.exports = require('next/dist/server/app-render/after-task-async-storage.external.js');
      },
      29294: (e) => {
        'use strict';
        e.exports = require('next/dist/server/app-render/work-async-storage.external.js');
      },
      63033: (e) => {
        'use strict';
        e.exports = require('next/dist/server/app-render/work-unit-async-storage.external.js');
      },
      33873: (e) => {
        'use strict';
        e.exports = require('path');
      },
      53258: (e, r, t) => {
        'use strict';
        t.r(r),
          t.d(r, {
            GlobalError: () => i.a,
            __next_app__: () => p,
            pages: () => c,
            routeModule: () => u,
            tree: () => d,
          });
        var s = t(70260),
          o = t(28203),
          n = t(25155),
          i = t.n(n),
          a = t(67292),
          l = {};
        for (let e in a)
          0 >
            [
              'default',
              'tree',
              'pages',
              'GlobalError',
              '__next_app__',
              'routeModule',
            ].indexOf(e) && (l[e] = () => a[e]);
        t.d(r, l);
        let d = [
            '',
            {
              children: [
                'blog',
                {
                  children: [
                    '__PAGE__',
                    {},
                    {
                      page: [
                        () => Promise.resolve().then(t.bind(t, 1668)),
                        'C:\\Users\\Admin\\New folder (2)\\Hydroleaf_frontend\\src\\app\\blog\\page.tsx',
                      ],
                    },
                  ],
                },
                {},
              ],
            },
            {
              layout: [
                () => Promise.resolve().then(t.bind(t, 70665)),
                'C:\\Users\\Admin\\New folder (2)\\Hydroleaf_frontend\\src\\app\\layout.tsx',
              ],
              'not-found': [
                () => Promise.resolve().then(t.t.bind(t, 19937, 23)),
                'next/dist/client/components/not-found-error',
              ],
              forbidden: [
                () => Promise.resolve().then(t.t.bind(t, 69116, 23)),
                'next/dist/client/components/forbidden-error',
              ],
              unauthorized: [
                () => Promise.resolve().then(t.t.bind(t, 41485, 23)),
                'next/dist/client/components/unauthorized-error',
              ],
            },
          ],
          c = [
            'C:\\Users\\Admin\\New folder (2)\\Hydroleaf_frontend\\src\\app\\blog\\page.tsx',
          ],
          p = { require: t, loadChunk: () => Promise.resolve() },
          u = new s.AppPageRouteModule({
            definition: {
              kind: o.RouteKind.APP_PAGE,
              page: '/blog/page',
              pathname: '/blog',
              bundlePath: '',
              filename: '',
              appPaths: [],
            },
            userland: { loaderTree: d },
          });
      },
      45209: (e, r, t) => {
        Promise.resolve().then(t.bind(t, 35062));
      },
      74713: (e, r, t) => {
        Promise.resolve().then(t.bind(t, 87546));
      },
      87546: (e, r, t) => {
        'use strict';
        t.d(r, { default: () => i });
        var s = t(45512),
          o = t(58009),
          n = t(45103);
        let i = () => {
          let [e, r] = (0, o.useState)([]);
          return (
            (0, o.useEffect)(() => {
              (async () => {
                try {
                  let e = await fetch('/api/blog');
                  if (!e.ok) throw Error(`HTTP error! Status: ${e.status}`);
                  let t = await e.json();
                  console.log('Fetched Blogs:', t), r(t);
                } catch (e) {
                  console.error('Error fetching blogs:', e);
                }
              })();
            }, []),
            (0, s.jsx)('section', {
              id: 'blogs',
              children: (0, s.jsxs)('div', {
                className: 'section-content',
                children: [
                  (0, s.jsx)('h2', { children: 'Latest Blogs' }),
                  e.map((e) =>
                    (0, s.jsxs)(
                      'div',
                      {
                        className: `blog-container ${e.reverse ? 'reverse' : ''}`,
                        children: [
                          (0, s.jsx)('div', {
                            className: 'blog-image-container',
                            children: (0, s.jsx)(n.default, {
                              src: e.image,
                              alt: `Image for ${e.title}`,
                              className: 'blog-image',
                              width: 500,
                              height: 300,
                              priority: !0,
                            }),
                          }),
                          (0, s.jsxs)('div', {
                            className: 'blog-content',
                            children: [
                              (0, s.jsx)('h3', { children: e.title }),
                              (0, s.jsx)('p', { children: e.content }),
                            ],
                          }),
                        ],
                      },
                      e.id
                    )
                  ),
                ],
              }),
            })
          );
        };
      },
      1668: (e, r, t) => {
        'use strict';
        t.r(r), t.d(r, { default: () => n });
        var s = t(62740),
          o = t(35062);
        function n() {
          return (0, s.jsx)(s.Fragment, {
            children: (0, s.jsx)(o.default, {}),
          });
        }
      },
      35062: (e, r, t) => {
        'use strict';
        t.d(r, { default: () => s });
        let s = (0, t(46760).registerClientReference)(
          function () {
            throw Error(
              'Attempted to call the default export of "C:\\\\Users\\\\Admin\\\\New folder (2)\\\\Hydroleaf_frontend\\\\src\\\\components\\\\blog\\\\blog.tsx" from the server, but it\'s on the client. It\'s not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.'
            );
          },
          'C:\\Users\\Admin\\New folder (2)\\Hydroleaf_frontend\\src\\components\\blog\\blog.tsx',
          'default'
        );
      },
    });
  var r = require('../../webpack-runtime.js');
  r.C(e);
  var t = (e) => r((r.s = e)),
    s = r.X(0, [994, 187, 434, 613, 981], () => t(53258));
  module.exports = s;
})();
