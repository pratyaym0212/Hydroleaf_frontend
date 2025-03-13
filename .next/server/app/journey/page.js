(() => {
  var e = {};
  (e.id = 649),
    (e.ids = [649]),
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
      59760: (e, r, t) => {
        'use strict';
        t.r(r),
          t.d(r, {
            GlobalError: () => i.a,
            __next_app__: () => c,
            pages: () => u,
            routeModule: () => p,
            tree: () => l,
          });
        var n = t(70260),
          o = t(28203),
          s = t(25155),
          i = t.n(s),
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
                'journey',
                {
                  children: [
                    '__PAGE__',
                    {},
                    {
                      page: [
                        () => Promise.resolve().then(t.bind(t, 63778)),
                        'C:\\Users\\Admin\\New folder (2)\\Hydroleaf_frontend\\src\\app\\journey\\page.tsx',
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
            'C:\\Users\\Admin\\New folder (2)\\Hydroleaf_frontend\\src\\app\\journey\\page.tsx',
          ],
          c = { require: t, loadChunk: () => Promise.resolve() },
          p = new n.AppPageRouteModule({
            definition: {
              kind: o.RouteKind.APP_PAGE,
              page: '/journey/page',
              pathname: '/journey',
              bundlePath: '',
              filename: '',
              appPaths: [],
            },
            userland: { loaderTree: l },
          });
      },
      41057: (e, r, t) => {
        Promise.resolve().then(t.bind(t, 35216));
      },
      54209: (e, r, t) => {
        Promise.resolve().then(t.bind(t, 83548));
      },
      83548: (e, r, t) => {
        'use strict';
        t.d(r, { default: () => i });
        var n = t(45512);
        t(58009);
        var o = t(45103),
          s = t(78377);
        let i = () =>
          (0, n.jsx)('section', {
            id: 'journey',
            children: (0, n.jsxs)('div', {
              className: 'section-content',
              children: [
                (0, n.jsx)('h2', { children: 'Our Journey' }),
                (0, n.jsx)(o.default, {
                  src: s.A,
                  alt: 'Hydroleaf Journey',
                  className: 'responsive',
                  width: 600,
                  height: 400,
                }),
                (0, n.jsx)('p', {
                  children:
                    'Hydroleaf started with a vision to revolutionize farming through smart technology. What began as a small initiative has now grown into a pioneering effort in hydroponic farming, combining automation, IoT, and AI to make agriculture more efficient, profitable, and eco-friendly.',
                }),
                (0, n.jsx)('p', {
                  children:
                    'Our journey is driven by a passion for sustainability and innovation, empowering farmers with cutting-edge solutions that reduce resource waste and increase yield. With continuous research and technological advancements, Hydroleaf is shaping the future of smart farming.',
                }),
              ],
            }),
          });
      },
      63778: (e, r, t) => {
        'use strict';
        t.r(r), t.d(r, { default: () => s });
        var n = t(62740),
          o = t(35216);
        function s() {
          return (0, n.jsx)(n.Fragment, {
            children: (0, n.jsx)(o.default, {}),
          });
        }
      },
      35216: (e, r, t) => {
        'use strict';
        t.d(r, { default: () => n });
        let n = (0, t(46760).registerClientReference)(
          function () {
            throw Error(
              'Attempted to call the default export of "C:\\\\Users\\\\Admin\\\\New folder (2)\\\\Hydroleaf_frontend\\\\src\\\\components\\\\journey\\\\journey.tsx" from the server, but it\'s on the client. It\'s not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.'
            );
          },
          'C:\\Users\\Admin\\New folder (2)\\Hydroleaf_frontend\\src\\components\\journey\\journey.tsx',
          'default'
        );
      },
      78377: (e, r, t) => {
        'use strict';
        t.d(r, { A: () => n });
        let n = {
          src: '/_next/static/media/Image3.60ea571f.png',
          height: 1024,
          width: 1792,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAASFBMVEVrZkmLeU58cVuJcF2AemV/cE5WWk+TfliJZU6LinqJgVlyblR6ZUqikX13cGdzgFxzgFp2i23MnmerkoF/fG9xeEFbVkHIooKbzDdFAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAMUlEQVR4nAXBBwIAEAwEsCulam///6kE2xu4aRWa02AB4FPr0d0DwxSFJKOGsIp95QMezwF3JrHMEQAAAABJRU5ErkJggg==',
          blurWidth: 8,
          blurHeight: 5,
        };
      },
    });
  var r = require('../../webpack-runtime.js');
  r.C(e);
  var t = (e) => r((r.s = e)),
    n = r.X(0, [994, 187, 434, 613, 981], () => t(59760));
  module.exports = n;
})();
