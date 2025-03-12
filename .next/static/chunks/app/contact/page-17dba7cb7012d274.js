(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [977],
  {
    3234: (e, t, a) => {
      Promise.resolve().then(a.bind(a, 7450));
    },
    5565: (e, t, a) => {
      'use strict';
      a.d(t, { default: () => l.a });
      var s = a(4146),
        l = a.n(s);
    },
    4146: (e, t, a) => {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (function (e, t) {
          for (var a in t)
            Object.defineProperty(e, a, { enumerable: !0, get: t[a] });
        })(t, {
          default: function () {
            return o;
          },
          getImageProps: function () {
            return i;
          },
        });
      let s = a(306),
        l = a(666),
        r = a(7970),
        n = s._(a(5514));
      function i(e) {
        let { props: t } = (0, l.getImgProps)(e, {
          defaultLoader: n.default,
          imgConf: {
            deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
            imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
            path: '/_next/image',
            loader: 'default',
            dangerouslyAllowSVG: !1,
            unoptimized: !1,
          },
        });
        for (let [e, a] of Object.entries(t)) void 0 === a && delete t[e];
        return { props: t };
      }
      let o = r.Image;
    },
    7450: (e, t, a) => {
      'use strict';
      a.d(t, { default: () => i });
      var s = a(5155),
        l = a(2115),
        r = a(5565);
      let n = {
          src: '/_next/static/media/Contactus.6609cd38.png',
          height: 1024,
          width: 1024,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAQlBMVEWLn4bN0srS1M6/xr/BycDJzcZvg2y2v7Ld39est6qNm4qTqZCms57S1tCPoYxwiGiGnH2DlWyAkX08XDadso9ccFdOevN2AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAQElEQVR4nC3GSw7AIAgFwAcCImjVfu5/1aZJF5MMMnPhwIS7bHjtH48hCiqiIaWAmSlqa7jpz9V1nXUozOyZgL1GNQHzWFw1nQAAAABJRU5ErkJggg==',
          blurWidth: 8,
          blurHeight: 8,
        },
        i = () => {
          let [e, t] = (0, l.useState)(''),
            [a, i] = (0, l.useState)(''),
            [o, d] = (0, l.useState)(''),
            [u, c] = (0, l.useState)(!1),
            [m, g] = (0, l.useState)(''),
            f = async (s) => {
              if (
                (s.preventDefault(),
                c(!0),
                g(''),
                !e.trim() || !a.trim() || !o.trim())
              ) {
                g('Please fill out all fields.'), c(!1);
                return;
              }
              try {
                let s = await fetch('/api/contact', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ name: e, email: a, message: o }),
                  }),
                  l = await s.json();
                s.ok
                  ? (g('Message sent successfully!'), t(''), i(''), d(''))
                  : g(l.error || 'Failed to send message. Try again.');
              } catch (e) {
                console.error('Error sending message:', e),
                  g('Failed to send message. Please try again.');
              } finally {
                c(!1);
              }
            };
          return (0, s.jsxs)('div', {
            className:
              'flex min-h-screen flex-col items-center justify-center bg-gray-100 p-8 md:flex-row',
            children: [
              (0, s.jsx)('div', {
                className: 'flex w-full justify-center md:w-1/2',
                children: (0, s.jsx)(r.default, {
                  src: n,
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
                    onSubmit: f,
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
                            value: a,
                            onChange: (e) => i(e.target.value),
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
                            value: o,
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
                        disabled: u,
                        children: u ? 'Sending...' : 'Send Message',
                      }),
                    ],
                  }),
                  m &&
                    (0, s.jsx)('p', {
                      className: 'mt-4 text-center '.concat(
                        m.includes('success')
                          ? 'text-green-600'
                          : 'text-red-600'
                      ),
                      children: m,
                    }),
                ],
              }),
            ],
          });
        };
    },
  },
  (e) => {
    var t = (t) => e((e.s = t));
    e.O(0, [970, 441, 517, 358], () => t(3234)), (_N_E = e.O());
  },
]);
