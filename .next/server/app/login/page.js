(() => {
  var e = {};
  (e.id = 520),
    (e.ids = [520]),
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
      28402: (e, r, t) => {
        'use strict';
        t.r(r),
          t.d(r, {
            GlobalError: () => a.a,
            __next_app__: () => p,
            pages: () => u,
            routeModule: () => c,
            tree: () => l,
          });
        var s = t(70260),
          n = t(28203),
          o = t(25155),
          a = t.n(o),
          i = t(67292),
          d = {};
        for (let e in i)
          0 >
            [
              'default',
              'tree',
              'pages',
              'GlobalError',
              '__next_app__',
              'routeModule',
            ].indexOf(e) && (d[e] = () => i[e]);
        t.d(r, d);
        let l = [
            '',
            {
              children: [
                'login',
                {
                  children: [
                    '__PAGE__',
                    {},
                    {
                      page: [
                        () => Promise.resolve().then(t.bind(t, 73751)),
                        'C:\\Users\\Admin\\New folder (2)\\Hydroleaf_frontend\\src\\app\\login\\page.tsx',
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
          u = [
            'C:\\Users\\Admin\\New folder (2)\\Hydroleaf_frontend\\src\\app\\login\\page.tsx',
          ],
          p = { require: t, loadChunk: () => Promise.resolve() },
          c = new s.AppPageRouteModule({
            definition: {
              kind: n.RouteKind.APP_PAGE,
              page: '/login/page',
              pathname: '/login',
              bundlePath: '',
              filename: '',
              appPaths: [],
            },
            userland: { loaderTree: l },
          });
      },
      40845: (e, r, t) => {
        Promise.resolve().then(t.bind(t, 73751));
      },
      4461: (e, r, t) => {
        Promise.resolve().then(t.bind(t, 66131));
      },
      79334: (e, r, t) => {
        'use strict';
        var s = t(58686);
        t.o(s, 'useRouter') &&
          t.d(r, {
            useRouter: function () {
              return s.useRouter;
            },
          });
      },
      66131: (e, r, t) => {
        'use strict';
        t.r(r), t.d(r, { default: () => i });
        var s = t(45512),
          n = t(58009),
          o = t(79334),
          a = t(19333);
        let i = () => {
          let [e, r] = (0, n.useState)(''),
            [t, i] = (0, n.useState)(''),
            { login: d } = (0, a.A)(),
            l = (0, o.useRouter)();
          return (0, s.jsxs)('div', {
            className: 'flex min-h-screen flex-col items-center justify-center',
            children: [
              (0, s.jsx)('h2', {
                className: 'mb-4 text-xl font-bold',
                children: 'Login',
              }),
              (0, s.jsxs)('form', {
                onSubmit: (r) => {
                  r.preventDefault(),
                    'admin' === e && 'hydroleaf' === t
                      ? (d(e), l.push('/admin'))
                      : alert('Invalid credentials');
                },
                className: 'flex flex-col gap-4',
                children: [
                  (0, s.jsx)('input', {
                    type: 'text',
                    placeholder: 'Username',
                    value: e,
                    onChange: (e) => r(e.target.value),
                    className: 'rounded border p-2',
                  }),
                  (0, s.jsx)('input', {
                    type: 'password',
                    placeholder: 'Password',
                    value: t,
                    onChange: (e) => i(e.target.value),
                    className: 'rounded border p-2',
                  }),
                  (0, s.jsx)('button', {
                    type: 'submit',
                    className: 'rounded bg-blue-500 p-2 text-white',
                    children: 'Login',
                  }),
                ],
              }),
            ],
          });
        };
      },
      73751: (e, r, t) => {
        'use strict';
        t.r(r), t.d(r, { default: () => s });
        let s = (0, t(46760).registerClientReference)(
          function () {
            throw Error(
              'Attempted to call the default export of "C:\\\\Users\\\\Admin\\\\New folder (2)\\\\Hydroleaf_frontend\\\\src\\\\app\\\\login\\\\page.tsx" from the server, but it\'s on the client. It\'s not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.'
            );
          },
          'C:\\Users\\Admin\\New folder (2)\\Hydroleaf_frontend\\src\\app\\login\\page.tsx',
          'default'
        );
      },
    });
  var r = require('../../webpack-runtime.js');
  r.C(e);
  var t = (e) => r((r.s = e)),
    s = r.X(0, [994, 187, 434, 613, 981], () => t(28402));
  module.exports = s;
})();
