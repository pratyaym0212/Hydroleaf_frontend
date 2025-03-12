(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [974],
  {
    9994: (A, e, i) => {
      Promise.resolve().then(i.bind(i, 5638));
    },
    5638: (A, e, i) => {
      'use strict';
      i.r(e), i.d(e, { default: () => u });
      var s = i(5155);
      i(260);
      var t = i(2115),
        a = i(8888),
        r = i(5565),
        n = i(8173),
        l = i.n(n);
      let c = {
        src: '/_next/static/media/Image1.25db3b2e.png',
        height: 1024,
        width: 1792,
        blurDataURL:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAAV1BMVEVrdVyRoY17mmZvbkhni1eXu4Z4flRmglSCo2OBqXFrgWpxj0e0tG5XbkBukmavmVyVlWyZppnc1qp3nXehxZvFv4+Xr3JRc1OGfEmhoVadpD3Vz3pjgodTLvuvAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAANElEQVR4nAXBCwJAIBAFwLfsL6FQSN3/nGYw6KDrWTbUs69edsOb2hclOGa9PUzCgGY2A34xHQHOgRJPKQAAAABJRU5ErkJggg==',
        blurWidth: 8,
        blurHeight: 5,
      };
      var g = i(4765),
        h = i(1108);
      let d = [
          {
            src: '/_next/static/media/Image7.6e96cdac.jpg',
            height: 4e3,
            width: 3e3,
            blurDataURL:
              'data:image/jpeg;base64,/9j/2wBDAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/v/2wBDAQoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/v/wgARCAAIAAYDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAP/xAAVAQEBAAAAAAAAAAAAAAAAAAACBf/aAAwDAQACEAMQAAAAkJ5//8QAGhABAAIDAQAAAAAAAAAAAAAAAQMSAAQRIf/aAAgBAQABPwCSfcYobFUsdH1z/8QAGBEAAgMAAAAAAAAAAAAAAAAAABEBAjL/2gAIAQIBAT8As3qT/8QAGBEBAQADAAAAAAAAAAAAAAAAAQIAITH/2gAIAQMBAT8AuATbzP/Z',
            blurWidth: 6,
            blurHeight: 8,
          },
          {
            src: '/_next/static/media/Image8.e0c4f21f.jpg',
            height: 3467,
            width: 6067,
            blurDataURL:
              'data:image/jpeg;base64,/9j/2wBDAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/v/2wBDAQoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/v/wgARCAAFAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAX/xAAVAQEBAAAAAAAAAAAAAAAAAAACBP/aAAwDAQACEAMQAAAAlidf/8QAHBAAAQMFAAAAAAAAAAAAAAAAAgAEEQEDBRIi/9oACAEBAAE/AL+ackyMazI8zsv/xAAZEQABBQAAAAAAAAAAAAAAAAADAAIhIkL/2gAIAQIBAT8AENl40v/EABURAQEAAAAAAAAAAAAAAAAAAAEA/9oACAEDAQE/AFb/2Q==',
            blurWidth: 8,
            blurHeight: 5,
          },
          {
            src: '/_next/static/media/Image9.c9c1d62c.jpg',
            height: 3840,
            width: 5760,
            blurDataURL:
              'data:image/jpeg;base64,/9j/2wBDAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/v/2wBDAQoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/v/wgARCAAFAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAVAQEBAAAAAAAAAAAAAAAAAAABBf/aAAwDAQACEAMQAAAApBDf/8QAHBABAAIBBQAAAAAAAAAAAAAAAgEDBAAREiEx/9oACAEBAAE/AMot4l0C1BwZ4v3brX//xAAbEQABBAMAAAAAAAAAAAAAAAABAAIDIQQRQf/aAAgBAgEBPwDElkLDt5N9tf/EABYRAQEBAAAAAAAAAAAAAAAAAAIAAf/aAAgBAwEBPwArb//Z',
            blurWidth: 8,
            blurHeight: 5,
          },
        ],
        o = {
          hidden: { opacity: 0, y: 50 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: 'easeOut' },
          },
        },
        u = () => {
          let [A, e] = (0, t.useState)(0);
          return (
            (0, t.useEffect)(() => {
              let A = setInterval(() => {
                e((A) => (A + 1) % d.length);
              }, 4e3);
              return () => clearInterval(A);
            }, []),
            (0, s.jsxs)('div', {
              children: [
                (0, s.jsx)(a.P.section, {
                  id: 'home',
                  className: 'home-section',
                  style: { backgroundImage: 'url('.concat(d[A].src, ')') },
                  initial: 'hidden',
                  whileInView: 'visible',
                  viewport: { once: !0 },
                  variants: o,
                  children: (0, s.jsx)('div', {
                    className: 'hero-container',
                    children: (0, s.jsxs)('div', {
                      className: 'hero-content',
                      children: [
                        (0, s.jsxs)('h1', {
                          children: [
                            'Welcome to ',
                            (0, s.jsx)('span', {
                              className: 'highlight',
                              children: 'Hydroleaf',
                            }),
                            ' – The Future of Smart Farming',
                          ],
                        }),
                        (0, s.jsxs)('p', {
                          className: 'hero-text',
                          children: [
                            'Transforming agriculture with',
                            ' ',
                            (0, s.jsx)('strong', {
                              children: 'AI & IoT-driven hydroponic solutions',
                            }),
                            '. ',
                            (0, s.jsx)('br', {}),
                            'Maximize yield, conserve resources, and embrace a',
                            ' ',
                            (0, s.jsx)('strong', {
                              children: 'sustainable future',
                            }),
                            '.',
                          ],
                        }),
                      ],
                    }),
                  }),
                }),
                (0, s.jsxs)(a.P.section, {
                  id: 'features',
                  className: 'features-section',
                  initial: 'hidden',
                  whileInView: 'visible',
                  viewport: { once: !0 },
                  variants: o,
                  children: [
                    (0, s.jsx)('h2', {
                      children: (0, s.jsx)('strong', {
                        children: 'Why Choose Hydroleaf?',
                      }),
                    }),
                    (0, s.jsxs)('div', {
                      className: 'features-grid',
                      children: [
                        (0, s.jsxs)('div', {
                          className: 'feature-item',
                          children: [
                            (0, s.jsx)('h3', {
                              children: '\uD83C\uDF31 Sustainable Farming',
                            }),
                            (0, s.jsxs)('p', {
                              children: [
                                'Experience next-gen agriculture with',
                                ' ',
                                (0, s.jsx)('strong', {
                                  children: 'precision hydroponics',
                                }),
                                '.',
                              ],
                            }),
                          ],
                        }),
                        (0, s.jsxs)('div', {
                          className: 'feature-item',
                          children: [
                            (0, s.jsx)('h3', {
                              children: '\uD83E\uDD16 AI & IoT Integration',
                            }),
                            (0, s.jsxs)('p', {
                              children: [
                                'Our ',
                                (0, s.jsx)('strong', {
                                  children: 'intelligent automation system',
                                }),
                                ' optimizes plant growth conditions.',
                              ],
                            }),
                          ],
                        }),
                        (0, s.jsxs)('div', {
                          className: 'feature-item',
                          children: [
                            (0, s.jsx)('h3', {
                              children: '\uD83D\uDCA7 Water Efficiency',
                            }),
                            (0, s.jsxs)('p', {
                              children: [
                                'Reduce water consumption by ',
                                (0, s.jsx)('strong', { children: 'up to 90%' }),
                                ', making farming eco-friendly.',
                              ],
                            }),
                          ],
                        }),
                        (0, s.jsxs)('div', {
                          className: 'feature-item',
                          children: [
                            (0, s.jsx)('h3', {
                              children: '\uD83C\uDF0D Eco-Friendly Solutions',
                            }),
                            (0, s.jsxs)('p', {
                              children: [
                                'Grow healthier plants while',
                                ' ',
                                (0, s.jsx)('strong', {
                                  children: 'minimizing environmental impact',
                                }),
                                '.',
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                (0, s.jsxs)(a.P.section, {
                  id: 'how-it-works',
                  className: 'how-it-works-section',
                  initial: 'hidden',
                  whileInView: 'visible',
                  viewport: { once: !0 },
                  variants: o,
                  children: [
                    (0, s.jsx)('h2', {
                      children: (0, s.jsx)('strong', {
                        children: 'How Hydroleaf Works',
                      }),
                    }),
                    (0, s.jsxs)('p', {
                      children: [
                        'Our AI-powered hydroponic system ',
                        (0, s.jsx)('strong', { children: 'automates' }),
                        ' and',
                        ' ',
                        (0, s.jsx)('strong', { children: 'optimizes' }),
                        ' farming:',
                      ],
                    }),
                    (0, s.jsxs)('div', {
                      className: 'steps-grid',
                      children: [
                        (0, s.jsxs)('div', {
                          className: 'step-item',
                          children: [
                            (0, s.jsx)(r.default, {
                              src: g.default,
                              alt: 'Smart Sensors',
                            }),
                            (0, s.jsx)('h3', {
                              children: '\uD83D\uDCCA Real-Time Monitoring',
                            }),
                          ],
                        }),
                        (0, s.jsxs)('div', {
                          className: 'step-item',
                          children: [
                            (0, s.jsx)(r.default, {
                              src: h.A,
                              alt: 'Automated System',
                            }),
                            (0, s.jsx)('h3', {
                              children: '\uD83D\uDCA1 Intelligent Automation',
                            }),
                          ],
                        }),
                        (0, s.jsxs)('div', {
                          className: 'step-item',
                          children: [
                            (0, s.jsx)(r.default, {
                              src: c,
                              alt: 'Data Insights',
                            }),
                            (0, s.jsx)('h3', {
                              children: '\uD83D\uDCC8 Data-Driven Insights',
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                (0, s.jsxs)(a.P.section, {
                  id: 'cta',
                  className: 'cta-section',
                  initial: 'hidden',
                  whileInView: 'visible',
                  viewport: { once: !0 },
                  variants: o,
                  children: [
                    (0, s.jsx)('h2', {
                      children: (0, s.jsx)('strong', {
                        children: 'Join the Future of Smart Farming',
                      }),
                    }),
                    (0, s.jsxs)('p', {
                      children: [
                        'Find the perfect ',
                        (0, s.jsx)('strong', {
                          children: 'hydroponic solution',
                        }),
                        ' for you.',
                      ],
                    }),
                    (0, s.jsx)(l(), {
                      href: '/device',
                      className: 'btn primary-btn',
                      children: 'Explore Our Technology',
                    }),
                    (0, s.jsx)(l(), {
                      href: '/contact',
                      className: 'btn secondary-btn',
                      children: 'Get in Touch',
                    }),
                  ],
                }),
              ],
            })
          );
        };
    },
    260: () => {},
    4765: (A, e, i) => {
      'use strict';
      i.r(e), i.d(e, { default: () => s });
      let s = {
        src: '/_next/static/media/Image2.48e1eb99.png',
        height: 1024,
        width: 1792,
        blurDataURL:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAAQlBMVEWpqZiGiWaKjXqep3x/kIrBxLWuto2gqJejq42rtq2ns36jqoedmYiVoXSQnGHS19GjtbaLnXKSpJeNpoeZqqSlrabdy4PRAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAMUlEQVR4nAXBiQHAIAgAsVNRQOvf7r9qE+ID7iIEpbWkYKUWqxZIo98sbyTrPtPX9wMWYgFGLcUazQAAAABJRU5ErkJggg==',
        blurWidth: 8,
        blurHeight: 5,
      };
    },
    1108: (A, e, i) => {
      'use strict';
      i.d(e, { A: () => s });
      let s = {
        src: '/_next/static/media/Image3.60ea571f.png',
        height: 1024,
        width: 1792,
        blurDataURL:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAASFBMVEVrZklyblR8cVuJcF2AemV/cE6JgVmTfliJZU6LinqLeU5WWk96ZUqikX13cGfMnmd2i21zgFpzgFyrkoF/fG9bVkHIooJxeEE+CjXJAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAMUlEQVR4nAXBBwIAEAwEsCulam///6kEOxm4ZhWaqbMASDSHd+fBcPQSJaOGsIq95QMeIQF3PczCdAAAAABJRU5ErkJggg==',
        blurWidth: 8,
        blurHeight: 5,
      };
    },
  },
  (A) => {
    var e = (e) => A((A.s = e));
    A.O(0, [781, 970, 465, 888, 441, 517, 358], () => e(9994)), (_N_E = A.O());
  },
]);
