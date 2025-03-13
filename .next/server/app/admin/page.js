(() => {
  var e = {};
  (e.id = 698),
    (e.ids = [698]),
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
      74542: (e, t, r) => {
        'use strict';
        r.r(t),
          r.d(t, {
            GlobalError: () => l.a,
            __next_app__: () => u,
            pages: () => p,
            routeModule: () => c,
            tree: () => i,
          });
        var n = r(70260),
          a = r(28203),
          o = r(25155),
          l = r.n(o),
          s = r(67292),
          d = {};
        for (let e in s)
          0 >
            [
              'default',
              'tree',
              'pages',
              'GlobalError',
              '__next_app__',
              'routeModule',
            ].indexOf(e) && (d[e] = () => s[e]);
        r.d(t, d);
        let i = [
            '',
            {
              children: [
                'admin',
                {
                  children: [
                    '__PAGE__',
                    {},
                    {
                      page: [
                        () => Promise.resolve().then(r.bind(r, 17949)),
                        'C:\\Users\\Admin\\New folder (2)\\Hydroleaf_frontend\\src\\app\\admin\\page.tsx',
                      ],
                    },
                  ],
                },
                {},
              ],
            },
            {
              layout: [
                () => Promise.resolve().then(r.bind(r, 70665)),
                'C:\\Users\\Admin\\New folder (2)\\Hydroleaf_frontend\\src\\app\\layout.tsx',
              ],
              'not-found': [
                () => Promise.resolve().then(r.t.bind(r, 19937, 23)),
                'next/dist/client/components/not-found-error',
              ],
              forbidden: [
                () => Promise.resolve().then(r.t.bind(r, 69116, 23)),
                'next/dist/client/components/forbidden-error',
              ],
              unauthorized: [
                () => Promise.resolve().then(r.t.bind(r, 41485, 23)),
                'next/dist/client/components/unauthorized-error',
              ],
            },
          ],
          p = [
            'C:\\Users\\Admin\\New folder (2)\\Hydroleaf_frontend\\src\\app\\admin\\page.tsx',
          ],
          u = { require: r, loadChunk: () => Promise.resolve() },
          c = new n.AppPageRouteModule({
            definition: {
              kind: a.RouteKind.APP_PAGE,
              page: '/admin/page',
              pathname: '/admin',
              bundlePath: '',
              filename: '',
              appPaths: [],
            },
            userland: { loaderTree: i },
          });
      },
      3899: (e, t, r) => {
        Promise.resolve().then(r.bind(r, 17949));
      },
      57043: (e, t, r) => {
        Promise.resolve().then(r.bind(r, 21452));
      },
      79334: (e, t, r) => {
        'use strict';
        var n = r(58686);
        r.o(n, 'useRouter') &&
          r.d(t, {
            useRouter: function () {
              return n.useRouter;
            },
          });
      },
      21452: (e, t, r) => {
        'use strict';
        r.r(t), r.d(t, { default: () => d });
        var n = r(45512),
          a = r(58009),
          o = r(79334);
        let l = () => {
          let [e, t] = (0, a.useState)(''),
            [r, o] = (0, a.useState)(''),
            [l, s] = (0, a.useState)(null),
            [d, i] = (0, a.useState)(!1),
            [p, u] = (0, a.useState)(null),
            [c, f] = (0, a.useState)(''),
            g = async (n) => {
              if ((n.preventDefault(), !l)) {
                alert('Please select an image.');
                return;
              }
              let a = new FormData();
              a.append('title', e),
                a.append('content', r),
                a.append('file', l),
                a.append('reverse', String(d)),
                (await fetch('/api/blog', { method: 'POST', body: a })).ok
                  ? (alert('Blog added!'), t(''), o(''), s(null), i(!1))
                  : alert('Failed to add blog.');
            },
            m = async (n) => {
              if ((n.preventDefault(), !p)) {
                alert('Please enter a Blog ID to edit.');
                return;
              }
              let a = new FormData();
              a.append('id', String(p)),
                a.append('title', e),
                a.append('content', r),
                l && a.append('file', l),
                a.append('reverse', String(d)),
                (await fetch('/api/blog', { method: 'PATCH', body: a })).ok
                  ? (alert('Blog updated!'),
                    t(''),
                    o(''),
                    s(null),
                    i(!1),
                    u(null))
                  : alert('Failed to update blog.');
            },
            x = async (e) => {
              if ((e.preventDefault(), !c)) {
                alert('Please enter a Blog ID to delete.');
                return;
              }
              (
                await fetch('/api/blog', {
                  method: 'DELETE',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify({ id: parseInt(c, 10) }),
                })
              ).ok
                ? (alert('Blog deleted!'), f(''))
                : alert('Failed to delete blog.');
            };
          return (0, n.jsxs)('div', {
            className: 'flex flex-col gap-6 rounded border p-4',
            children: [
              (0, n.jsxs)('form', {
                onSubmit: p ? m : g,
                className: 'flex flex-col gap-4',
                children: [
                  (0, n.jsx)('h2', {
                    className: 'text-lg font-bold',
                    children: p ? 'Edit Blog' : 'Add Blog',
                  }),
                  (0, n.jsx)('input', {
                    type: 'number',
                    placeholder: 'Blog ID (for edit)',
                    value: p || '',
                    onChange: (e) =>
                      u(e.target.value ? parseInt(e.target.value, 10) : null),
                    className: 'rounded border p-2',
                  }),
                  (0, n.jsx)('input', {
                    type: 'text',
                    placeholder: 'Title',
                    value: e,
                    onChange: (e) => t(e.target.value),
                    className: 'rounded border p-2',
                  }),
                  (0, n.jsx)('textarea', {
                    placeholder: 'Content',
                    value: r,
                    onChange: (e) => o(e.target.value),
                    className: 'rounded border p-2',
                  }),
                  (0, n.jsx)('input', {
                    type: 'file',
                    onChange: (e) => s(e.target.files?.[0] || null),
                    className: 'rounded border p-2',
                  }),
                  (0, n.jsxs)('label', {
                    className: 'flex items-center gap-2',
                    children: [
                      (0, n.jsx)('input', {
                        type: 'checkbox',
                        checked: d,
                        onChange: (e) => i(e.target.checked),
                      }),
                      'Reverse',
                    ],
                  }),
                  (0, n.jsx)('button', {
                    type: 'submit',
                    className: 'rounded bg-blue-500 p-2 text-white',
                    children: p ? 'Update Blog' : 'Add Blog',
                  }),
                ],
              }),
              (0, n.jsxs)('form', {
                onSubmit: x,
                className: 'flex flex-col gap-4',
                children: [
                  (0, n.jsx)('h2', {
                    className: 'text-lg font-bold',
                    children: 'Delete Blog',
                  }),
                  (0, n.jsx)('input', {
                    type: 'number',
                    placeholder: 'Enter Blog ID to delete',
                    value: c,
                    onChange: (e) => f(e.target.value),
                    className: 'rounded border p-2',
                  }),
                  (0, n.jsx)('button', {
                    type: 'submit',
                    className: 'rounded bg-red-500 p-2 text-white',
                    children: 'Delete Blog',
                  }),
                ],
              }),
            ],
          });
        };
        var s = r(19333);
        let d = () => {
          let { user: e, logout: t } = (0, s.A)(),
            r = (0, o.useRouter)();
          return ((0, a.useEffect)(() => {
            e || r.push('/login');
          }, [e, r]),
          e)
            ? (0, n.jsxs)('div', {
                children: [
                  (0, n.jsx)('button', {
                    onClick: t,
                    className: 'rounded bg-red-500 p-2 text-white',
                    children: 'Logout',
                  }),
                  (0, n.jsx)(l, {}),
                ],
              })
            : null;
        };
      },
      17949: (e, t, r) => {
        'use strict';
        r.r(t), r.d(t, { default: () => n });
        let n = (0, r(46760).registerClientReference)(
          function () {
            throw Error(
              'Attempted to call the default export of "C:\\\\Users\\\\Admin\\\\New folder (2)\\\\Hydroleaf_frontend\\\\src\\\\app\\\\admin\\\\page.tsx" from the server, but it\'s on the client. It\'s not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.'
            );
          },
          'C:\\Users\\Admin\\New folder (2)\\Hydroleaf_frontend\\src\\app\\admin\\page.tsx',
          'default'
        );
      },
    });
  var t = require('../../webpack-runtime.js');
  t.C(e);
  var r = (e) => t((t.s = e)),
    n = t.X(0, [994, 187, 434, 613, 981], () => r(74542));
  module.exports = n;
})();
