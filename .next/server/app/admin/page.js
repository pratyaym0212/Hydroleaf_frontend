(() => {
  var e = {};
  (e.id = 698),
    (e.ids = [698]),
    (e.modules = {
      846: (e) => {
        'use strict';
        e.exports = require('next/dist/compiled/next-server/app-page.runtime.prod.js');
      },
      9121: (e) => {
        'use strict';
        e.exports = require('next/dist/server/app-render/action-async-storage.external.js');
      },
      3295: (e) => {
        'use strict';
        e.exports = require('next/dist/server/app-render/after-task-async-storage.external.js');
      },
      9294: (e) => {
        'use strict';
        e.exports = require('next/dist/server/app-render/work-async-storage.external.js');
      },
      3033: (e) => {
        'use strict';
        e.exports = require('next/dist/server/app-render/work-unit-async-storage.external.js');
      },
      3873: (e) => {
        'use strict';
        e.exports = require('path');
      },
      1265: (e, t, r) => {
        'use strict';
        r.r(t),
          r.d(t, {
            GlobalError: () => l.a,
            __next_app__: () => u,
            pages: () => p,
            routeModule: () => c,
            tree: () => i,
          });
        var a = r(260),
          n = r(8203),
          o = r(5155),
          l = r.n(o),
          s = r(7292),
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
                        () => Promise.resolve().then(r.bind(r, 7949)),
                        '/Users/Deadpool/Hydroleaf_frontend/src/app/admin/page.tsx',
                      ],
                    },
                  ],
                },
                {},
              ],
            },
            {
              layout: [
                () => Promise.resolve().then(r.bind(r, 665)),
                '/Users/Deadpool/Hydroleaf_frontend/src/app/layout.tsx',
              ],
              'not-found': [
                () => Promise.resolve().then(r.t.bind(r, 9937, 23)),
                'next/dist/client/components/not-found-error',
              ],
              forbidden: [
                () => Promise.resolve().then(r.t.bind(r, 9116, 23)),
                'next/dist/client/components/forbidden-error',
              ],
              unauthorized: [
                () => Promise.resolve().then(r.t.bind(r, 1485, 23)),
                'next/dist/client/components/unauthorized-error',
              ],
            },
          ],
          p = ['/Users/Deadpool/Hydroleaf_frontend/src/app/admin/page.tsx'],
          u = { require: r, loadChunk: () => Promise.resolve() },
          c = new a.AppPageRouteModule({
            definition: {
              kind: n.RouteKind.APP_PAGE,
              page: '/admin/page',
              pathname: '/admin',
              bundlePath: '',
              filename: '',
              appPaths: [],
            },
            userland: { loaderTree: i },
          });
      },
      8837: (e, t, r) => {
        Promise.resolve().then(r.bind(r, 7841));
      },
      2757: (e, t, r) => {
        Promise.resolve().then(r.bind(r, 2373));
      },
      2373: (e, t, r) => {
        'use strict';
        r.d(t, { default: () => o });
        var a = r(5512),
          n = r(8009);
        let o = () => {
          let [e, t] = (0, n.useState)(''),
            [r, o] = (0, n.useState)(''),
            [l, s] = (0, n.useState)(null),
            [d, i] = (0, n.useState)(!1),
            [p, u] = (0, n.useState)(null),
            [c, m] = (0, n.useState)(''),
            g = async (a) => {
              if ((a.preventDefault(), !l)) {
                alert('Please select an image.');
                return;
              }
              let n = new FormData();
              n.append('title', e),
                n.append('content', r),
                n.append('file', l),
                n.append('reverse', String(d)),
                (await fetch('/api/blog', { method: 'POST', body: n })).ok
                  ? (alert('Blog added!'), t(''), o(''), s(null), i(!1))
                  : alert('Failed to add blog.');
            },
            x = async (a) => {
              if ((a.preventDefault(), !p)) {
                alert('Please enter a Blog ID to edit.');
                return;
              }
              let n = new FormData();
              n.append('id', String(p)),
                n.append('title', e),
                n.append('content', r),
                l && n.append('file', l),
                n.append('reverse', String(d)),
                (await fetch('/api/blog', { method: 'PATCH', body: n })).ok
                  ? (alert('Blog updated!'),
                    t(''),
                    o(''),
                    s(null),
                    i(!1),
                    u(null))
                  : alert('Failed to update blog.');
            },
            f = async (e) => {
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
                ? (alert('Blog deleted!'), m(''))
                : alert('Failed to delete blog.');
            };
          return (0, a.jsxs)('div', {
            className: 'flex flex-col gap-6 rounded border p-4',
            children: [
              (0, a.jsxs)('form', {
                onSubmit: p ? x : g,
                className: 'flex flex-col gap-4',
                children: [
                  (0, a.jsx)('h2', {
                    className: 'text-lg font-bold',
                    children: p ? 'Edit Blog' : 'Add Blog',
                  }),
                  (0, a.jsx)('input', {
                    type: 'number',
                    placeholder: 'Blog ID (for edit)',
                    value: p || '',
                    onChange: (e) =>
                      u(e.target.value ? parseInt(e.target.value, 10) : null),
                    className: 'rounded border p-2',
                  }),
                  (0, a.jsx)('input', {
                    type: 'text',
                    placeholder: 'Title',
                    value: e,
                    onChange: (e) => t(e.target.value),
                    className: 'rounded border p-2',
                  }),
                  (0, a.jsx)('textarea', {
                    placeholder: 'Content',
                    value: r,
                    onChange: (e) => o(e.target.value),
                    className: 'rounded border p-2',
                  }),
                  (0, a.jsx)('input', {
                    type: 'file',
                    onChange: (e) => s(e.target.files?.[0] || null),
                    className: 'rounded border p-2',
                  }),
                  (0, a.jsxs)('label', {
                    className: 'flex items-center gap-2',
                    children: [
                      (0, a.jsx)('input', {
                        type: 'checkbox',
                        checked: d,
                        onChange: (e) => i(e.target.checked),
                      }),
                      'Reverse',
                    ],
                  }),
                  (0, a.jsx)('button', {
                    type: 'submit',
                    className: 'rounded bg-blue-500 p-2 text-white',
                    children: p ? 'Update Blog' : 'Add Blog',
                  }),
                ],
              }),
              (0, a.jsxs)('form', {
                onSubmit: f,
                className: 'flex flex-col gap-4',
                children: [
                  (0, a.jsx)('h2', {
                    className: 'text-lg font-bold',
                    children: 'Delete Blog',
                  }),
                  (0, a.jsx)('input', {
                    type: 'number',
                    placeholder: 'Enter Blog ID to delete',
                    value: c,
                    onChange: (e) => m(e.target.value),
                    className: 'rounded border p-2',
                  }),
                  (0, a.jsx)('button', {
                    type: 'submit',
                    className: 'rounded bg-red-500 p-2 text-white',
                    children: 'Delete Blog',
                  }),
                ],
              }),
            ],
          });
        };
      },
      7949: (e, t, r) => {
        'use strict';
        r.r(t), r.d(t, { default: () => o });
        var a = r(2740),
          n = r(7841);
        function o() {
          return (0, a.jsxs)('div', {
            className: 'container mx-auto p-4',
            children: [
              (0, a.jsx)('h1', {
                className: 'text-2xl font-bold',
                children: 'Add Blog Post (Admin Only)',
              }),
              (0, a.jsx)(n.default, {}),
            ],
          });
        }
      },
      7841: (e, t, r) => {
        'use strict';
        r.d(t, { default: () => a });
        let a = (0, r(6760).registerClientReference)(
          function () {
            throw Error(
              'Attempted to call the default export of "/Users/Deadpool/Hydroleaf_frontend/src/components/AddBlogForm/BlogForm.tsx" from the server, but it\'s on the client. It\'s not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.'
            );
          },
          '/Users/Deadpool/Hydroleaf_frontend/src/components/AddBlogForm/BlogForm.tsx',
          'default'
        );
      },
    });
  var t = require('../../webpack-runtime.js');
  t.C(e);
  var r = (e) => t((t.s = e)),
    a = t.X(0, [680, 434, 49, 797], () => r(1265));
  module.exports = a;
})();
