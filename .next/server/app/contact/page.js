(() => {
  var e = {};
  (e.id = 977),
    (e.ids = [977]),
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
      28512: (e, t, r) => {
        'use strict';
        r.r(t),
          r.d(t, {
            GlobalError: () => o.a,
            __next_app__: () => u,
            pages: () => c,
            routeModule: () => m,
            tree: () => d,
          });
        var s = r(70260),
          n = r(28203),
          a = r(25155),
          o = r.n(a),
          l = r(67292),
          i = {};
        for (let e in l)
          0 >
            [
              'default',
              'tree',
              'pages',
              'GlobalError',
              '__next_app__',
              'routeModule',
            ].indexOf(e) && (i[e] = () => l[e]);
        r.d(t, i);
        let d = [
            '',
            {
              children: [
                'contact',
                {
                  children: [
                    '__PAGE__',
                    {},
                    {
                      page: [
                        () => Promise.resolve().then(r.bind(r, 56450)),
                        'C:\\Users\\Admin\\New folder (2)\\Hydroleaf_frontend\\src\\app\\contact\\page.tsx',
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
          c = [
            'C:\\Users\\Admin\\New folder (2)\\Hydroleaf_frontend\\src\\app\\contact\\page.tsx',
          ],
          u = { require: r, loadChunk: () => Promise.resolve() },
          m = new s.AppPageRouteModule({
            definition: {
              kind: n.RouteKind.APP_PAGE,
              page: '/contact/page',
              pathname: '/contact',
              bundlePath: '',
              filename: '',
              appPaths: [],
            },
            userland: { loaderTree: d },
          });
      },
      52321: (e, t, r) => {
        Promise.resolve().then(r.bind(r, 33648));
      },
      65473: (e, t, r) => {
        Promise.resolve().then(r.bind(r, 97217));
      },
      97217: (e, t, r) => {
        'use strict';
        r.d(t, { default: () => l });
        var s = r(45512),
          n = r(58009),
          a = r(45103);
        let o = {
            src: '/_next/static/media/Contactus.6609cd38.png',
            height: 1024,
            width: 1024,
            blurDataURL:
              'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAQlBMVEWLn4bN0srS1M6/xr/BycDJzcZvg2y2v7Ld39est6qNm4qTqZCms57S1tCPoYxwiGiGnH2DlWyAkX1ccFc8XDadso9VdusiAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAQElEQVR4nC3GSw7AIAgFwAcCImjVfu5/1aZJF5MMMnPhwIS7bHjtH48hCiqiIaWAmSlqa3joz911nXUozOyagL1GVgHzWd57wgAAAABJRU5ErkJggg==',
            blurWidth: 8,
            blurHeight: 8,
          },
          l = () => {
            let [e, t] = (0, n.useState)(''),
              [r, l] = (0, n.useState)(''),
              [i, d] = (0, n.useState)(''),
              [c, u] = (0, n.useState)(!1),
              [m, g] = (0, n.useState)(''),
              p = async (s) => {
                if (
                  (s.preventDefault(),
                  u(!0),
                  g(''),
                  !e.trim() || !r.trim() || !i.trim())
                ) {
                  g('Please fill out all fields.'), u(!1);
                  return;
                }
                try {
                  let s = await fetch('/api/contact', {
                      method: 'POST',
                      headers: { 'Content-Type': 'application/json' },
                      body: JSON.stringify({ name: e, email: r, message: i }),
                    }),
                    n = await s.json();
                  s.ok
                    ? (g('Message sent successfully!'), t(''), l(''), d(''))
                    : g(n.error || 'Failed to send message. Try again.');
                } catch (e) {
                  console.error('Error sending message:', e),
                    g('Failed to send message. Please try again.');
                } finally {
                  u(!1);
                }
              };
            return (0, s.jsxs)('div', {
              className:
                'flex min-h-screen flex-col items-center justify-center bg-gray-100 p-8 md:flex-row',
              children: [
                (0, s.jsx)('div', {
                  className: 'flex w-full justify-center md:w-1/2',
                  children: (0, s.jsx)(a.default, {
                    src: o,
                    alt: 'Contact Us',
                    className: 'w-full rounded-lg shadow-lg md:w-3/4 lg:w-2/3',
                    priority: !0,
                  }),
                }),
                (0, s.jsxs)('div', {
                  className:
                    'mt-6 w-full rounded-lg bg-white p-6 shadow-lg md:mt-0 md:w-1/2 md:p-8',
                  children: [
                    (0, s.jsx)('h2', {
                      className: 'mb-4 text-2xl font-bold text-gray-800',
                      children: 'Contact Us',
                    }),
                    (0, s.jsxs)('form', {
                      onSubmit: p,
                      children: [
                        (0, s.jsxs)('div', {
                          className: 'mb-4',
                          children: [
                            (0, s.jsx)('label', {
                              htmlFor: 'name',
                              className: 'mb-2 block font-medium text-gray-700',
                              children: 'Name',
                            }),
                            (0, s.jsx)('input', {
                              id: 'name',
                              type: 'text',
                              value: e,
                              onChange: (e) => t(e.target.value),
                              className:
                                'w-full rounded-lg border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-green-500',
                              placeholder: 'Your Name',
                              required: !0,
                            }),
                          ],
                        }),
                        (0, s.jsxs)('div', {
                          className: 'mb-4',
                          children: [
                            (0, s.jsx)('label', {
                              htmlFor: 'email',
                              className: 'mb-2 block font-medium text-gray-700',
                              children: 'Email',
                            }),
                            (0, s.jsx)('input', {
                              id: 'email',
                              type: 'email',
                              value: r,
                              onChange: (e) => l(e.target.value),
                              className:
                                'w-full rounded-lg border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-green-500',
                              placeholder: 'Your Email',
                              required: !0,
                            }),
                          ],
                        }),
                        (0, s.jsxs)('div', {
                          className: 'mb-4',
                          children: [
                            (0, s.jsx)('label', {
                              htmlFor: 'message',
                              className: 'mb-2 block font-medium text-gray-700',
                              children: 'Message',
                            }),
                            (0, s.jsx)('textarea', {
                              id: 'message',
                              value: i,
                              onChange: (e) => d(e.target.value),
                              className:
                                'w-full rounded-lg border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-green-500',
                              placeholder: 'Your Message',
                              required: !0,
                            }),
                          ],
                        }),
                        (0, s.jsx)('button', {
                          type: 'submit',
                          className:
                            'w-full rounded-lg bg-green-600 p-3 font-medium text-white transition duration-300 hover:bg-green-700',
                          disabled: c,
                          children: c ? 'Sending...' : 'Send Message',
                        }),
                      ],
                    }),
                    m &&
                      (0, s.jsx)('p', {
                        className: `mt-4 text-center ${m.includes('success') ? 'text-green-600' : 'text-red-600'}`,
                        children: m,
                      }),
                  ],
                }),
              ],
            });
          };
      },
      56450: (e, t, r) => {
        'use strict';
        r.r(t), r.d(t, { default: () => a });
        var s = r(62740),
          n = r(33648);
        function a() {
          return (0, s.jsx)(s.Fragment, {
            children: (0, s.jsx)(n.default, {}),
          });
        }
      },
      33648: (e, t, r) => {
        'use strict';
        r.d(t, { default: () => s });
        let s = (0, r(46760).registerClientReference)(
          function () {
            throw Error(
              'Attempted to call the default export of "C:\\\\Users\\\\Admin\\\\New folder (2)\\\\Hydroleaf_frontend\\\\src\\\\components\\\\contact\\\\contact.tsx" from the server, but it\'s on the client. It\'s not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.'
            );
          },
          'C:\\Users\\Admin\\New folder (2)\\Hydroleaf_frontend\\src\\components\\contact\\contact.tsx',
          'default'
        );
      },
    });
  var t = require('../../webpack-runtime.js');
  t.C(e);
  var r = (e) => t((t.s = e)),
    s = t.X(0, [994, 187, 434, 613, 981], () => r(28512));
  module.exports = s;
})();
