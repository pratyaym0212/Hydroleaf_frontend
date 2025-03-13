(() => {
  var e = {};
  (e.id = 669),
    (e.ids = [669]),
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
      93342: (e, r, t) => {
        'use strict';
        t.r(r),
          t.d(r, {
            GlobalError: () => i.a,
            __next_app__: () => c,
            pages: () => A,
            routeModule: () => g,
            tree: () => l,
          });
        var n = t(70260),
          s = t(28203),
          o = t(25155),
          i = t.n(o),
          a = t(67292),
          d = {};
        for (let e in a)
          0 >
            [
              'default',
              'tree',
              'pages',
              'GlobalError',
              '__next_app__',
              'routeModule',
            ].indexOf(e) && (d[e] = () => a[e]);
        t.d(r, d);
        let l = [
            '',
            {
              children: [
                'technology',
                {
                  children: [
                    '__PAGE__',
                    {},
                    {
                      page: [
                        () => Promise.resolve().then(t.bind(t, 33173)),
                        'C:\\Users\\Admin\\New folder (2)\\Hydroleaf_frontend\\src\\app\\technology\\page.tsx',
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
          A = [
            'C:\\Users\\Admin\\New folder (2)\\Hydroleaf_frontend\\src\\app\\technology\\page.tsx',
          ],
          c = { require: t, loadChunk: () => Promise.resolve() },
          g = new n.AppPageRouteModule({
            definition: {
              kind: s.RouteKind.APP_PAGE,
              page: '/technology/page',
              pathname: '/technology',
              bundlePath: '',
              filename: '',
              appPaths: [],
            },
            userland: { loaderTree: l },
          });
      },
      79292: (e, r, t) => {
        Promise.resolve().then(t.t.bind(t, 71066, 23)),
          Promise.resolve().then(t.bind(t, 52714));
      },
      89020: (e, r, t) => {
        Promise.resolve().then(t.t.bind(t, 41902, 23)),
          Promise.resolve().then(t.bind(t, 92466));
      },
      33173: (e, r, t) => {
        'use strict';
        t.r(r), t.d(r, { default: () => a });
        var n = t(62740);
        t(76301);
        var s = t(35635),
          o = t(52714);
        let i = () =>
          (0, n.jsx)('section', {
            id: 'technology',
            children: (0, n.jsxs)('div', {
              className: 'section-content',
              children: [
                (0, n.jsx)('h2', { children: 'Our Technology' }),
                (0, n.jsx)(s.default, {
                  src: o.default,
                  alt: 'Hydroleaf Technology',
                  className: 'responsive',
                }),
                (0, n.jsx)('p', {
                  children:
                    'At Hydroleaf, we harness the power of IoT, AI, and automation to create a smart and sustainable farming ecosystem. Our advanced technology enables real-time monitoring and precision control over essential farming parameters, ensuring optimal crop growth while minimizing resource wastage.',
                }),
                (0, n.jsx)('p', {
                  children:
                    'From intelligent nutrient dosing systems to AI-driven insights for better decision-making, our solutions empower farmers with tools to increase efficiency and profitability. By integrating cutting-edge sensors, robotics, and cloud-based analytics, we are shaping the future of agriculture.',
                }),
              ],
            }),
          });
        function a() {
          return (0, n.jsx)(n.Fragment, { children: (0, n.jsx)(i, {}) });
        }
      },
      52714: (e, r, t) => {
        'use strict';
        t.r(r), t.d(r, { default: () => n });
        let n = {
          src: '/_next/static/media/Image4.0594cdca.png',
          height: 1024,
          width: 1792,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAAM1BMVEWmoJKgloSwsKnJwrS/taO4saK/w8OwqZzSzcK/uKqJr8CSlZKppJiJmqLBvrabp65ndnoamzzzAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAALklEQVR4nAXBiQGAMAgEwSUCB/m0/2qdAbS3zOjINTqCW/lmjeKpMz/ktLcQ/gMXFQEFOdxadgAAAABJRU5ErkJggg==',
          blurWidth: 8,
          blurHeight: 5,
        };
      },
      92466: (e, r, t) => {
        'use strict';
        t.r(r), t.d(r, { default: () => n });
        let n = {
          src: '/_next/static/media/Image4.0594cdca.png',
          height: 1024,
          width: 1792,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAAM1BMVEWmoJKgloSwsKnJwrS/taO4saK/w8OwqZzSzcK/uKqJr8CSlZKppJiJmqLBvrabp65ndnoamzzzAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAALklEQVR4nAXBiQGAMAgEwSUCB/m0/2qdAbS3zOjINTqCW/lmjeKpMz/ktLcQ/gMXFQEFOdxadgAAAABJRU5ErkJggg==',
          blurWidth: 8,
          blurHeight: 5,
        };
      },
    });
  var r = require('../../webpack-runtime.js');
  r.C(e);
  var t = (e) => r((r.s = e)),
    n = r.X(0, [994, 187, 434, 613, 635, 981], () => t(93342));
  module.exports = n;
})();
