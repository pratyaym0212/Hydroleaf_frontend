(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [831],
  {
    1751: (e, t, r) => {
      Promise.resolve().then(r.bind(r, 6714));
    },
    5565: (e, t, r) => {
      'use strict';
      r.d(t, { default: () => a.a });
      var s = r(4146),
        a = r.n(s);
    },
    4146: (e, t, r) => {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          default: function () {
            return o;
          },
          getImageProps: function () {
            return n;
          },
        });
      let s = r(306),
        a = r(666),
        i = r(7970),
        l = s._(r(5514));
      function n(e) {
        let { props: t } = (0, a.getImgProps)(e, {
          defaultLoader: l.default,
          imgConf: {
            deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
            imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
            path: '/_next/image',
            loader: 'default',
            dangerouslyAllowSVG: !1,
            unoptimized: !1,
          },
        });
        for (let [e, r] of Object.entries(t)) void 0 === r && delete t[e];
        return { props: t };
      }
      let o = i.Image;
    },
    6714: (e, t, r) => {
      'use strict';
      r.d(t, { default: () => l });
      var s = r(5155),
        a = r(2115),
        i = r(5565);
      let l = () => {
        let [e, t] = (0, a.useState)([]);
        return (
          (0, a.useEffect)(() => {
            (async () => {
              try {
                let e = await fetch('/api/blog');
                if (!e.ok) throw Error('HTTP error! Status: '.concat(e.status));
                let r = await e.json();
                console.log('Fetched Blogs:', r), t(r);
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
                      className: 'blog-container '.concat(
                        e.reverse ? 'reverse' : ''
                      ),
                      children: [
                        (0, s.jsx)('div', {
                          className: 'blog-image-container',
                          children: (0, s.jsx)(i.default, {
                            src: e.image,
                            alt: 'Image for '.concat(e.title),
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
  },
  (e) => {
    var t = (t) => e((e.s = t));
    e.O(0, [970, 441, 517, 358], () => t(1751)), (_N_E = e.O());
  },
]);
