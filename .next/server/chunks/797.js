(exports.id = 797),
  (exports.ids = [797]),
  (exports.modules = {
    8348: (e, t, r) => {
      Promise.resolve().then(r.bind(r, 8655)),
        Promise.resolve().then(r.t.bind(r, 9607, 23)),
        Promise.resolve().then(r.bind(r, 9462)),
        Promise.resolve().then(r.bind(r, 2030)),
        Promise.resolve().then(r.bind(r, 2252)),
        Promise.resolve().then(r.bind(r, 7490));
    },
    6492: (e, t, r) => {
      Promise.resolve().then(r.bind(r, 5083)),
        Promise.resolve().then(r.t.bind(r, 8531, 23)),
        Promise.resolve().then(r.bind(r, 9608)),
        Promise.resolve().then(r.bind(r, 7626)),
        Promise.resolve().then(r.bind(r, 851)),
        Promise.resolve().then(r.bind(r, 8920));
    },
    501: (e, t, r) => {
      Promise.resolve().then(r.t.bind(r, 3219, 23)),
        Promise.resolve().then(r.t.bind(r, 4863, 23)),
        Promise.resolve().then(r.t.bind(r, 5155, 23)),
        Promise.resolve().then(r.t.bind(r, 802, 23)),
        Promise.resolve().then(r.t.bind(r, 9350, 23)),
        Promise.resolve().then(r.t.bind(r, 8530, 23)),
        Promise.resolve().then(r.t.bind(r, 8921, 23));
    },
    6949: (e, t, r) => {
      Promise.resolve().then(r.t.bind(r, 6959, 23)),
        Promise.resolve().then(r.t.bind(r, 3875, 23)),
        Promise.resolve().then(r.t.bind(r, 1284, 23)),
        Promise.resolve().then(r.t.bind(r, 7174, 23)),
        Promise.resolve().then(r.t.bind(r, 4178, 23)),
        Promise.resolve().then(r.t.bind(r, 7190, 23)),
        Promise.resolve().then(r.t.bind(r, 1365, 23));
    },
    9608: (e, t, r) => {
      'use strict';
      r.d(t, { default: () => d });
      var s = r(5512),
        o = r(8009),
        n = r(5103),
        a = r(8531),
        i = r.n(a);
      let l = {
          src: '/_next/static/media/logo_transparent.619f7114.png',
          height: 1024,
          width: 1024,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAHlBMVEVMaXFr8qJ9+6eE+pBZ73xG44ae/JtQ63uk+52D94004gAKAAAACnRSTlMALBOma4lwqpCAPMblKQAAAAlwSFlzAAALEwAACxMBAJqcGAAAACdJREFUeJxjYEAGTFCajYMRQjMzc4IZLOzsLGAGIysrRIqBCaYYDAAK5wBN2pM2AQAAAABJRU5ErkJggg==',
          blurWidth: 8,
          blurHeight: 8,
        },
        d = () => {
          let [e, t] = (0, o.useState)(!1);
          return (
            (0, o.useEffect)(() => {
              let e = () => {
                t(window.scrollY > 50);
              };
              return (
                window.addEventListener('scroll', e),
                () => window.removeEventListener('scroll', e)
              );
            }, []),
            (0, s.jsxs)('header', {
              className: `navbar ${e ? 'scrolled' : ''}`,
              children: [
                (0, s.jsx)('div', {
                  className: 'logo-container page-transition',
                  children: (0, s.jsx)(n.default, {
                    src: l,
                    alt: 'Hydroleaf Logo',
                    className: 'logo',
                    width: 150,
                    height: 50,
                  }),
                }),
                (0, s.jsxs)('nav', {
                  children: [
                    (0, s.jsx)(i(), { href: '/', children: 'Home' }),
                    (0, s.jsx)(i(), { href: '/device', children: 'Device' }),
                    (0, s.jsx)(i(), { href: '/journey', children: 'Journey' }),
                    (0, s.jsx)(i(), {
                      href: '/technology',
                      children: 'Technology',
                    }),
                    (0, s.jsx)(i(), { href: '/blog', children: 'Blog' }),
                    (0, s.jsx)(i(), { href: '/contact', children: 'Contact' }),
                  ],
                }),
              ],
            })
          );
        };
    },
    7626: (e, t, r) => {
      'use strict';
      r.d(t, { ThemeProvider: () => n });
      var s = r(5512),
        o = r(3371);
      let n = ({ children: e, ...t }) => (0, s.jsx)(o.N, { ...t, children: e });
    },
    851: (e, t, r) => {
      'use strict';
      r.d(t, { ThemeSwitcher: () => w });
      var s = r(5512),
        o = r(3371),
        n = r(2501),
        a = r(4036),
        i = r(5120),
        l = r(6753);
      let d = {
        sun: n.A,
        moon: a.A,
        logOut: i.A,
        loader: l.A,
        github: (e) =>
          (0, s.jsx)('svg', {
            viewBox: '0 0 438.549 438.549',
            ...e,
            children: (0, s.jsx)('path', {
              fill: 'currentColor',
              d: 'M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z',
            }),
          }),
      };
      var c = r(8009),
        u = r(2705),
        p = r(1643),
        g = r(4195);
      let f = (0, p.F)(
          'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
          {
            variants: {
              variant: {
                default:
                  'bg-primary text-primary-foreground hover:bg-primary/90',
                destructive:
                  'bg-destructive text-destructive-foreground hover:bg-destructive/90',
                outline:
                  'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
                secondary:
                  'bg-secondary text-secondary-foreground hover:bg-secondary/80',
                ghost: 'hover:bg-accent hover:text-accent-foreground',
                link: 'text-primary underline-offset-4 hover:underline',
              },
              size: {
                default: 'h-10 px-4 py-2',
                sm: 'h-9 rounded-md px-3',
                lg: 'h-11 rounded-md px-8',
                icon: 'h-10 w-10',
              },
            },
            defaultVariants: { variant: 'default', size: 'default' },
          }
        ),
        m = c.forwardRef(
          ({ className: e, variant: t, size: r, asChild: o = !1, ...n }, a) => {
            let i = o ? u.DX : 'button';
            return (0, s.jsx)(i, {
              className: (0, g.cn)(f({ variant: t, size: r, className: e })),
              ref: a,
              ...n,
            });
          }
        );
      m.displayName = 'Button';
      var h = r(3712);
      let v = () => 'theme toggle',
        x = () => `zmień motyw`,
        b = (e = {}, t = {}) =>
          ({ en: v, pl: x })[t.languageTag ?? (0, h.xw)()](),
        w = ({ className: e }) => {
          let { theme: t, setTheme: r } = (0, o.D)();
          return (0, s.jsxs)(m, {
            className: e,
            variant: 'secondary',
            size: 'icon',
            'aria-label': b(),
            onClick: () => r('light' === t ? 'dark' : 'light'),
            children: [
              (0, s.jsx)(d.sun, { className: 'dark:hidden' }),
              (0, s.jsx)(d.moon, { className: 'hidden dark:block' }),
            ],
          });
        };
    },
    8920: (e, t, r) => {
      'use strict';
      r.d(t, { Toaster: () => j });
      var s = r(5512),
        o = r(8009),
        n = r(9131),
        a = r(1643),
        i = r(1255),
        l = r(4195);
      let d = n.Kq,
        c = o.forwardRef(({ className: e, ...t }, r) =>
          (0, s.jsx)(n.LM, {
            ref: r,
            className: (0, l.cn)(
              'fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:right-0 sm:top-0 sm:flex-col md:max-w-[420px]',
              e
            ),
            ...t,
          })
        );
      c.displayName = n.LM.displayName;
      let u = (0, a.F)(
          'group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full',
          {
            variants: {
              variant: {
                default: 'border bg-background text-foreground',
                destructive:
                  'destructive group border-destructive bg-destructive text-destructive-foreground',
              },
            },
            defaultVariants: { variant: 'default' },
          }
        ),
        p = o.forwardRef(({ className: e, variant: t, ...r }, o) =>
          (0, s.jsx)(n.bL, {
            ref: o,
            className: (0, l.cn)(u({ variant: t }), e),
            ...r,
          })
        );
      (p.displayName = n.bL.displayName),
        (o.forwardRef(({ className: e, ...t }, r) =>
          (0, s.jsx)(n.rc, {
            ref: r,
            className: (0, l.cn)(
              'ring-offset-background hover:bg-secondary focus:ring-ring group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
              e
            ),
            ...t,
          })
        ).displayName = n.rc.displayName);
      let g = o.forwardRef(({ className: e, ...t }, r) =>
        (0, s.jsx)(n.bm, {
          ref: r,
          className: (0, l.cn)(
            'text-foreground/50 hover:text-foreground absolute right-2 top-2 rounded-md p-1 opacity-0 transition-opacity focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600',
            e
          ),
          'toast-close': '',
          ...t,
          children: (0, s.jsx)(i.A, { className: 'size-4' }),
        })
      );
      g.displayName = n.bm.displayName;
      let f = o.forwardRef(({ className: e, ...t }, r) =>
        (0, s.jsx)(n.hE, {
          ref: r,
          className: (0, l.cn)('text-sm font-semibold', e),
          ...t,
        })
      );
      f.displayName = n.hE.displayName;
      let m = o.forwardRef(({ className: e, ...t }, r) =>
        (0, s.jsx)(n.VY, {
          ref: r,
          className: (0, l.cn)('text-sm opacity-90', e),
          ...t,
        })
      );
      m.displayName = n.VY.displayName;
      let h = 0,
        v = new Map(),
        x = (e) => {
          if (v.has(e)) return;
          let t = setTimeout(() => {
            v.delete(e), A({ type: 'REMOVE_TOAST', toastId: e });
          }, 1e6);
          v.set(e, t);
        },
        b = (e, t) => {
          switch (t.type) {
            case 'ADD_TOAST':
              return { ...e, toasts: [t.toast, ...e.toasts].slice(0, 1) };
            case 'UPDATE_TOAST':
              return {
                ...e,
                toasts: e.toasts.map((e) =>
                  e.id === t.toast.id ? { ...e, ...t.toast } : e
                ),
              };
            case 'DISMISS_TOAST': {
              let { toastId: r } = t;
              return (
                r
                  ? x(r)
                  : e.toasts.forEach((e) => {
                      x(e.id);
                    }),
                {
                  ...e,
                  toasts: e.toasts.map((e) =>
                    e.id === r || void 0 === r ? { ...e, open: !1 } : e
                  ),
                }
              );
            }
            case 'REMOVE_TOAST':
              if (void 0 === t.toastId) return { ...e, toasts: [] };
              return {
                ...e,
                toasts: e.toasts.filter((e) => e.id !== t.toastId),
              };
          }
        },
        w = [],
        y = { toasts: [] };
      function A(e) {
        (y = b(y, e)),
          w.forEach((e) => {
            e(y);
          });
      }
      function T({ ...e }) {
        let t = (h = (h + 1) % Number.MAX_SAFE_INTEGER).toString(),
          r = () => A({ type: 'DISMISS_TOAST', toastId: t });
        return (
          A({
            type: 'ADD_TOAST',
            toast: {
              ...e,
              id: t,
              open: !0,
              onOpenChange: (e) => {
                e || r();
              },
            },
          }),
          {
            id: t,
            dismiss: r,
            update: (e) => A({ type: 'UPDATE_TOAST', toast: { ...e, id: t } }),
          }
        );
      }
      function j() {
        let { toasts: e } = (function () {
          let [e, t] = o.useState(y);
          return (
            o.useEffect(
              () => (
                w.push(t),
                () => {
                  let e = w.indexOf(t);
                  e > -1 && w.splice(e, 1);
                }
              ),
              [e]
            ),
            {
              ...e,
              toast: T,
              dismiss: (e) => A({ type: 'DISMISS_TOAST', toastId: e }),
            }
          );
        })();
        return (0, s.jsxs)(d, {
          children: [
            e.map(function ({
              id: e,
              title: t,
              description: r,
              action: o,
              ...n
            }) {
              return (0, s.jsxs)(
                p,
                {
                  ...n,
                  children: [
                    (0, s.jsxs)('div', {
                      className: 'grid gap-1',
                      children: [
                        t && (0, s.jsx)(f, { children: t }),
                        r && (0, s.jsx)(m, { children: r }),
                      ],
                    }),
                    o,
                    (0, s.jsx)(g, {}),
                  ],
                },
                e
              );
            }),
            (0, s.jsx)(c, {}),
          ],
        });
      }
    },
    4195: (e, t, r) => {
      'use strict';
      r.d(t, { cn: () => n });
      var s = r(2281),
        o = r(4805);
      let n = (...e) => (0, o.QP)((0, s.$)(e));
    },
    3712: (e, t, r) => {
      'use strict';
      let s;
      r.d(t, { ij: () => d, k_: () => o, tH: () => i, xw: () => a });
      let o = 'en',
        n = ['en', 'pl'],
        a = () => o,
        i = (e) => {
          (a = 'function' == typeof e ? l(e) : l(() => e)),
            void 0 !== s && s(a());
        };
      function l(e) {
        return () => {
          let t = e();
          if (!d(t))
            throw Error(
              "languageTag() didn't return a valid language tag. Check your setLanguageTag call"
            );
          return t;
        };
      }
      function d(e) {
        return n.includes(e);
      }
    },
    665: (e, t, r) => {
      'use strict';
      r.r(t),
        r.d(t, {
          RootLayout: () => er,
          default: () => es,
          generateMetadata: () => et,
        });
      var s = r(2740);
      r(5692), r(6616);
      var o = r(6895);
      let n = () =>
        (0, s.jsxs)('footer', {
          className: 'text-muted-foreground bottom w-full text-center text-sm',
          children: ['\xa9 ', new Date().getFullYear(), ' By Hydroleaf'],
        });
      var a = r(9462),
        i = r(2030),
        l = r(2252),
        d = r(7490),
        c = r(9824),
        u = r(4756);
      let p = () => 'Hydroleaf',
        g = () =>
          'A Hydroleaf template, packed with features like TypeScript, Tailwind CSS, Next-auth, Eslint, testing tools and more. Jumpstart your project with efficiency and style.',
        f = () => 'Next.js',
        m = () => 'React',
        h = () => 'Hydroleaf',
        v = () => 'Next.js boilerplate',
        x = () => 'Starter Template',
        b = () => 'Tailwind CSS',
        w = () => 'TypeScript',
        y = () => 'Shadcn/ui',
        A = () => 'Next-auth',
        T = () => 'Prisma',
        j = () => 'Hydroleaf',
        S = () =>
          'A Hydroleaf template, packed with features like TypeScript, Tailwind CSS, Next-auth, Eslint, testing tools and more. Jumpstart your project with efficiency and style.',
        N = () => 'Next.js',
        E = () => 'React',
        _ = () => 'Hydroleaf',
        P = () => 'Next.js boilerplate',
        I = () => 'Starter Template',
        C = () => 'Tailwind CSS',
        R = () => 'TypeScript',
        k = () => 'Shadcn/ui',
        O = () => 'Next-auth',
        D = () => 'Prisma',
        L = (e = {}, t = {}) =>
          ({ en: f, pl: N })[t.languageTag ?? (0, u.xw)()](),
        U = (e = {}, t = {}) =>
          ({ en: m, pl: E })[t.languageTag ?? (0, u.xw)()](),
        H = (e = {}, t = {}) =>
          ({ en: h, pl: _ })[t.languageTag ?? (0, u.xw)()](),
        M = (e = {}, t = {}) =>
          ({ en: v, pl: P })[t.languageTag ?? (0, u.xw)()](),
        G = (e = {}, t = {}) =>
          ({ en: x, pl: I })[t.languageTag ?? (0, u.xw)()](),
        V = (e = {}, t = {}) =>
          ({ en: b, pl: C })[t.languageTag ?? (0, u.xw)()](),
        z = (e = {}, t = {}) =>
          ({ en: w, pl: R })[t.languageTag ?? (0, u.xw)()](),
        B = (e = {}, t = {}) =>
          ({ en: y, pl: k })[t.languageTag ?? (0, u.xw)()](),
        F = (e = {}, t = {}) =>
          ({ en: A, pl: O })[t.languageTag ?? (0, u.xw)()](),
        J = (e = {}, t = {}) =>
          ({ en: T, pl: D })[t.languageTag ?? (0, u.xw)()](),
        Y = {
          title: (e = {}, t = {}) =>
            ({ en: p, pl: j })[t.languageTag ?? (0, u.xw)()](),
          description: (e = {}, t = {}) =>
            ({ en: g, pl: S })[t.languageTag ?? (0, u.xw)()](),
          keywords: () => [L(), U(), H(), M(), G(), V(), z(), B(), F(), J()],
          url: () => c._.APP_URL,
          googleSiteVerificationId: () => c._.GOOGLE_SITE_VERIFICATION_ID || '',
        };
      var X = r(917),
        Q = r.n(X),
        q = r(4783),
        K = r.n(q);
      let $ = [Q().variable, K().variable];
      var W = r(3673),
        Z = r(7317);
      let ee = (...e) => (0, Z.QP)((0, W.$)(e)),
        et = () => ({
          metadataBase: new URL(Y.url()),
          title: { default: Y.title(), template: `%s | ${Y.title()}` },
          description: Y.description(),
          keywords: Y.keywords(),
          robots: { index: !0, follow: !0 },
          icons: {
            icon: '/images/logo_transparent.png',
            shortcut: '/images/logo_transparent.png',
            apple: '/images/logo_transparent.png',
          },
          verification: { google: Y.googleSiteVerificationId() },
          openGraph: {
            url: Y.url(),
            title: Y.title(),
            description: Y.description(),
            siteName: Y.title(),
            images: '/opengraph-image.png',
            type: 'website',
            locale: (0, u.xw)(),
          },
          twitter: {
            card: 'summary_large_image',
            title: Y.title(),
            description: Y.description(),
            images: '/opengraph-image.png',
          },
        }),
        er = ({ children: e }) =>
          (0, s.jsx)(o.Is, {
            children: (0, s.jsxs)('html', {
              lang: (0, u.xw)(),
              suppressHydrationWarning: !0,
              children: [
                (0, s.jsxs)('head', {
                  children: [
                    (0, s.jsx)('link', {
                      rel: 'preconnect',
                      href: 'https://fonts.googleapis.com',
                    }),
                    (0, s.jsx)('link', {
                      rel: 'preconnect',
                      href: 'https://fonts.gstatic.com',
                      crossOrigin: 'anonymous',
                    }),
                    (0, s.jsx)('link', {
                      href: 'https://fonts.googleapis.com/css2?family=Big+Shoulders:wght@100..900&display=swap',
                      rel: 'stylesheet',
                    }),
                  ],
                }),
                (0, s.jsx)('body', {
                  className: ee(
                    'page-transition flex min-h-screen flex-col font-sans',
                    $
                  ),
                  children: (0, s.jsxs)(i.ThemeProvider, {
                    attribute: 'class',
                    children: [
                      (0, s.jsx)(a.default, {}),
                      (0, s.jsx)('main', { className: 'grow', children: e }),
                      (0, s.jsx)(n, {}),
                      (0, s.jsx)(l.ThemeSwitcher, {
                        className: 'fixed bottom-5 right-5 z-10',
                      }),
                      (0, s.jsx)(d.Toaster, {}),
                    ],
                  }),
                }),
              ],
            }),
          }),
        es = er;
    },
    9462: (e, t, r) => {
      'use strict';
      r.d(t, { default: () => s });
      let s = (0, r(6760).registerClientReference)(
        function () {
          throw Error(
            'Attempted to call the default export of "/Users/Deadpool/Hydroleaf_frontend/src/components/navbar/navbar.tsx" from the server, but it\'s on the client. It\'s not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.'
          );
        },
        '/Users/Deadpool/Hydroleaf_frontend/src/components/navbar/navbar.tsx',
        'default'
      );
    },
    2030: (e, t, r) => {
      'use strict';
      r.d(t, { ThemeProvider: () => s });
      let s = (0, r(6760).registerClientReference)(
        function () {
          throw Error(
            "Attempted to call ThemeProvider() from the server but ThemeProvider is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component."
          );
        },
        '/Users/Deadpool/Hydroleaf_frontend/src/components/theme-provider.tsx',
        'ThemeProvider'
      );
    },
    2252: (e, t, r) => {
      'use strict';
      r.d(t, { ThemeSwitcher: () => s });
      let s = (0, r(6760).registerClientReference)(
        function () {
          throw Error(
            "Attempted to call ThemeSwitcher() from the server but ThemeSwitcher is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component."
          );
        },
        '/Users/Deadpool/Hydroleaf_frontend/src/components/theme-switcher.tsx',
        'ThemeSwitcher'
      );
    },
    7490: (e, t, r) => {
      'use strict';
      r.d(t, { Toaster: () => s });
      let s = (0, r(6760).registerClientReference)(
        function () {
          throw Error(
            "Attempted to call Toaster() from the server but Toaster is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component."
          );
        },
        '/Users/Deadpool/Hydroleaf_frontend/src/components/ui/toaster.tsx',
        'Toaster'
      );
    },
    4756: (e, t, r) => {
      'use strict';
      let s;
      r.d(t, { ij: () => d, k_: () => o, tH: () => i, xw: () => a });
      let o = 'en',
        n = ['en', 'pl'],
        a = () => o,
        i = (e) => {
          (a = 'function' == typeof e ? l(e) : l(() => e)),
            void 0 !== s && s(a());
        };
      function l(e) {
        return () => {
          let t = e();
          if (!d(t))
            throw Error(
              "languageTag() didn't return a valid language tag. Check your setLanguageTag call"
            );
          return t;
        };
      }
      function d(e) {
        return n.includes(e);
      }
    },
    5692: () => {},
    6616: () => {},
    9824: (e, t, r) => {
      'use strict';
      r.d(t, { _: () => n });
      var s = r(1115),
        o = r(379);
      let n = (0, s.w)({
        server: {
          APP_URL: o.z.string().url().min(1),
          GOOGLE_SITE_VERIFICATION_ID: o.z.string().optional(),
        },
        runtimeEnv: {
          APP_URL: process.env.APP_URL,
          GOOGLE_SITE_VERIFICATION_ID: process.env.GOOGLE_SITE_VERIFICATION_ID,
          NEXTAUTH_URL: process.env.NEXTAUTH_URL,
          NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
        },
      });
    },
  });
