(exports.id = 981),
  (exports.ids = [981]),
  (exports.modules = {
    47083: (e, t, r) => {
      Promise.resolve().then(r.bind(r, 98655)),
        Promise.resolve().then(r.t.bind(r, 59607, 23)),
        Promise.resolve().then(r.bind(r, 19462)),
        Promise.resolve().then(r.bind(r, 52030)),
        Promise.resolve().then(r.bind(r, 72252)),
        Promise.resolve().then(r.bind(r, 17490)),
        Promise.resolve().then(r.bind(r, 7985));
    },
    23107: (e, t, r) => {
      Promise.resolve().then(r.bind(r, 75083)),
        Promise.resolve().then(r.t.bind(r, 28531, 23)),
        Promise.resolve().then(r.bind(r, 39608)),
        Promise.resolve().then(r.bind(r, 47626)),
        Promise.resolve().then(r.bind(r, 30851)),
        Promise.resolve().then(r.bind(r, 8920)),
        Promise.resolve().then(r.bind(r, 19333));
    },
    19191: (e, t, r) => {
      Promise.resolve().then(r.t.bind(r, 13219, 23)),
        Promise.resolve().then(r.t.bind(r, 34863, 23)),
        Promise.resolve().then(r.t.bind(r, 25155, 23)),
        Promise.resolve().then(r.t.bind(r, 40802, 23)),
        Promise.resolve().then(r.t.bind(r, 9350, 23)),
        Promise.resolve().then(r.t.bind(r, 48530, 23)),
        Promise.resolve().then(r.t.bind(r, 88921, 23));
    },
    72335: (e, t, r) => {
      Promise.resolve().then(r.t.bind(r, 66959, 23)),
        Promise.resolve().then(r.t.bind(r, 33875, 23)),
        Promise.resolve().then(r.t.bind(r, 88903, 23)),
        Promise.resolve().then(r.t.bind(r, 57174, 23)),
        Promise.resolve().then(r.t.bind(r, 84178, 23)),
        Promise.resolve().then(r.t.bind(r, 87190, 23)),
        Promise.resolve().then(r.t.bind(r, 61365, 23));
    },
    39608: (e, t, r) => {
      'use strict';
      r.d(t, { default: () => d });
      var o = r(45512),
        s = r(58009),
        n = r(45103),
        i = r(28531),
        a = r.n(i);
      let l = {
          src: '/_next/static/media/logo_transparent.619f7114.png',
          height: 1024,
          width: 1024,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAHlBMVEVMaXF9+6dr8qKE+pBQ63ue/JtG44ZZ73yD942k+53EUPoLAAAACnRSTlMAEyymqnCJa4CQMkXzqQAAAAlwSFlzAAALEwAACxMBAJqcGAAAACdJREFUeJxjYEAGjFCalZMJQjMzc4AZ7Cws7GAGExsbRIqBEaYYDAAKygBNWqXcKAAAAABJRU5ErkJggg==',
          blurWidth: 8,
          blurHeight: 8,
        },
        d = () => {
          let [e, t] = (0, s.useState)(!1);
          return (
            (0, s.useEffect)(() => {
              let e = () => {
                t(window.scrollY > 50);
              };
              return (
                window.addEventListener('scroll', e),
                () => window.removeEventListener('scroll', e)
              );
            }, []),
            (0, o.jsxs)('header', {
              className: `navbar ${e ? 'scrolled' : ''}`,
              children: [
                (0, o.jsx)('div', {
                  className: 'logo-container page-transition',
                  children: (0, o.jsx)(n.default, {
                    src: l,
                    alt: 'Hydroleaf Logo',
                    className: 'logo',
                    width: 150,
                    height: 50,
                  }),
                }),
                (0, o.jsxs)('nav', {
                  children: [
                    (0, o.jsx)(a(), { href: '/', children: 'Home' }),
                    (0, o.jsx)(a(), { href: '/device', children: 'Device' }),
                    (0, o.jsx)(a(), { href: '/journey', children: 'Journey' }),
                    (0, o.jsx)(a(), {
                      href: '/technology',
                      children: 'Technology',
                    }),
                    (0, o.jsx)(a(), { href: '/blog', children: 'Blog' }),
                    (0, o.jsx)(a(), { href: '/contact', children: 'Contact' }),
                  ],
                }),
              ],
            })
          );
        };
    },
    47626: (e, t, r) => {
      'use strict';
      r.d(t, { ThemeProvider: () => n });
      var o = r(45512),
        s = r(3371);
      let n = ({ children: e, ...t }) => (0, o.jsx)(s.N, { ...t, children: e });
    },
    30851: (e, t, r) => {
      'use strict';
      r.d(t, { ThemeSwitcher: () => A });
      var o = r(45512),
        s = r(3371),
        n = r(72501),
        i = r(49274),
        a = r(35120),
        l = r(26753);
      let d = {
        sun: n.A,
        moon: i.A,
        logOut: a.A,
        loader: l.A,
        github: (e) =>
          (0, o.jsx)('svg', {
            viewBox: '0 0 438.549 438.549',
            ...e,
            children: (0, o.jsx)('path', {
              fill: 'currentColor',
              d: 'M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z',
            }),
          }),
      };
      var c = r(58009),
        u = r(12705),
        p = r(21643),
        f = r(44195);
      let m = (0, p.F)(
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
        h = c.forwardRef(
          ({ className: e, variant: t, size: r, asChild: s = !1, ...n }, i) => {
            let a = s ? u.DX : 'button';
            return (0, o.jsx)(a, {
              className: (0, f.cn)(m({ variant: t, size: r, className: e })),
              ref: i,
              ...n,
            });
          }
        );
      h.displayName = 'Button';
      var g = r(33712);
      let v = () => 'theme toggle',
        x = () => `zmień motyw`,
        b = (e = {}, t = {}) =>
          ({ en: v, pl: x })[t.languageTag ?? (0, g.xw)()](),
        A = ({ className: e }) => {
          let { theme: t, setTheme: r } = (0, s.D)();
          return (0, o.jsxs)(h, {
            className: e,
            variant: 'secondary',
            size: 'icon',
            'aria-label': b(),
            onClick: () => r('light' === t ? 'dark' : 'light'),
            children: [
              (0, o.jsx)(d.sun, { className: 'dark:hidden' }),
              (0, o.jsx)(d.moon, { className: 'hidden dark:block' }),
            ],
          });
        };
    },
    8920: (e, t, r) => {
      'use strict';
      r.d(t, { Toaster: () => j });
      var o = r(45512),
        s = r(58009),
        n = r(29131),
        i = r(21643),
        a = r(51255),
        l = r(44195);
      let d = n.Kq,
        c = s.forwardRef(({ className: e, ...t }, r) =>
          (0, o.jsx)(n.LM, {
            ref: r,
            className: (0, l.cn)(
              'fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:right-0 sm:top-0 sm:flex-col md:max-w-[420px]',
              e
            ),
            ...t,
          })
        );
      c.displayName = n.LM.displayName;
      let u = (0, i.F)(
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
        p = s.forwardRef(({ className: e, variant: t, ...r }, s) =>
          (0, o.jsx)(n.bL, {
            ref: s,
            className: (0, l.cn)(u({ variant: t }), e),
            ...r,
          })
        );
      (p.displayName = n.bL.displayName),
        (s.forwardRef(({ className: e, ...t }, r) =>
          (0, o.jsx)(n.rc, {
            ref: r,
            className: (0, l.cn)(
              'ring-offset-background hover:bg-secondary focus:ring-ring group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
              e
            ),
            ...t,
          })
        ).displayName = n.rc.displayName);
      let f = s.forwardRef(({ className: e, ...t }, r) =>
        (0, o.jsx)(n.bm, {
          ref: r,
          className: (0, l.cn)(
            'text-foreground/50 hover:text-foreground absolute right-2 top-2 rounded-md p-1 opacity-0 transition-opacity focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600',
            e
          ),
          'toast-close': '',
          ...t,
          children: (0, o.jsx)(a.A, { className: 'size-4' }),
        })
      );
      f.displayName = n.bm.displayName;
      let m = s.forwardRef(({ className: e, ...t }, r) =>
        (0, o.jsx)(n.hE, {
          ref: r,
          className: (0, l.cn)('text-sm font-semibold', e),
          ...t,
        })
      );
      m.displayName = n.hE.displayName;
      let h = s.forwardRef(({ className: e, ...t }, r) =>
        (0, o.jsx)(n.VY, {
          ref: r,
          className: (0, l.cn)('text-sm opacity-90', e),
          ...t,
        })
      );
      h.displayName = n.VY.displayName;
      let g = 0,
        v = new Map(),
        x = (e) => {
          if (v.has(e)) return;
          let t = setTimeout(() => {
            v.delete(e), y({ type: 'REMOVE_TOAST', toastId: e });
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
        A = [],
        w = { toasts: [] };
      function y(e) {
        (w = b(w, e)),
          A.forEach((e) => {
            e(w);
          });
      }
      function T({ ...e }) {
        let t = (g = (g + 1) % Number.MAX_SAFE_INTEGER).toString(),
          r = () => y({ type: 'DISMISS_TOAST', toastId: t });
        return (
          y({
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
            update: (e) => y({ type: 'UPDATE_TOAST', toast: { ...e, id: t } }),
          }
        );
      }
      function j() {
        let { toasts: e } = (function () {
          let [e, t] = s.useState(w);
          return (
            s.useEffect(
              () => (
                A.push(t),
                () => {
                  let e = A.indexOf(t);
                  e > -1 && A.splice(e, 1);
                }
              ),
              [e]
            ),
            {
              ...e,
              toast: T,
              dismiss: (e) => y({ type: 'DISMISS_TOAST', toastId: e }),
            }
          );
        })();
        return (0, o.jsxs)(d, {
          children: [
            e.map(function ({
              id: e,
              title: t,
              description: r,
              action: s,
              ...n
            }) {
              return (0, o.jsxs)(
                p,
                {
                  ...n,
                  children: [
                    (0, o.jsxs)('div', {
                      className: 'grid gap-1',
                      children: [
                        t && (0, o.jsx)(m, { children: t }),
                        r && (0, o.jsx)(h, { children: r }),
                      ],
                    }),
                    s,
                    (0, o.jsx)(f, {}),
                  ],
                },
                e
              );
            }),
            (0, o.jsx)(c, {}),
          ],
        });
      }
    },
    19333: (e, t, r) => {
      'use strict';
      r.d(t, { A: () => a, AuthProvider: () => i });
      var o = r(45512),
        s = r(58009);
      let n = (0, s.createContext)(null),
        i = ({ children: e }) => {
          let [t, r] = (0, s.useState)(null);
          return (
            (0, s.useEffect)(() => {
              let e = localStorage.getItem('user');
              e && r(e);
            }, []),
            (0, o.jsx)(n.Provider, {
              value: {
                user: t,
                login: (e) => {
                  localStorage.setItem('user', e), r(e);
                },
                logout: () => {
                  localStorage.removeItem('user'), r(null);
                },
              },
              children: e,
            })
          );
        },
        a = () => {
          let e = (0, s.useContext)(n);
          if (!e) throw Error('useAuth must be used within an AuthProvider');
          return e;
        };
    },
    44195: (e, t, r) => {
      'use strict';
      r.d(t, { cn: () => n });
      var o = r(82281),
        s = r(94805);
      let n = (...e) => (0, s.QP)((0, o.$)(e));
    },
    33712: (e, t, r) => {
      'use strict';
      let o;
      r.d(t, { ij: () => d, k_: () => s, tH: () => a, xw: () => i });
      let s = 'en',
        n = ['en', 'pl'],
        i = () => s,
        a = (e) => {
          (i = 'function' == typeof e ? l(e) : l(() => e)),
            void 0 !== o && o(i());
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
    70665: (e, t, r) => {
      'use strict';
      r.r(t),
        r.d(t, {
          RootLayout: () => eo,
          default: () => es,
          generateMetadata: () => er,
        });
      var o = r(62740);
      r(35692), r(56616);
      var s = r(66895);
      let n = () =>
        (0, o.jsxs)('footer', {
          className:
            'text-muted-foreground mt-auto w-full py-5 text-center text-sm',
          children: ['\xa9 ', new Date().getFullYear(), ' By Hydroleaf'],
        });
      var i = r(19462),
        a = r(52030),
        l = r(72252),
        d = r(17490),
        c = r(7985),
        u = r(29824),
        p = r(14756);
      let f = () => 'Hydroleaf',
        m = () =>
          'A Hydroleaf template, packed with features like TypeScript, Tailwind CSS, Next-auth, Eslint, testing tools and more. Jumpstart your project with efficiency and style.',
        h = () => 'Next.js',
        g = () => 'React',
        v = () => 'Hydroleaf',
        x = () => 'Next.js boilerplate',
        b = () => 'Starter Template',
        A = () => 'Tailwind CSS',
        w = () => 'TypeScript',
        y = () => 'Shadcn/ui',
        T = () => 'Next-auth',
        j = () => 'Prisma',
        E = () => 'Hydroleaf',
        N = () =>
          'A Hydroleaf template, packed with features like TypeScript, Tailwind CSS, Next-auth, Eslint, testing tools and more. Jumpstart your project with efficiency and style.',
        C = () => 'Next.js',
        S = () => 'React',
        P = () => 'Hydroleaf',
        _ = () => 'Next.js boilerplate',
        I = () => 'Starter Template',
        R = () => 'Tailwind CSS',
        k = () => 'TypeScript',
        O = () => 'Shadcn/ui',
        U = () => 'Next-auth',
        H = () => 'Prisma',
        L = (e = {}, t = {}) =>
          ({ en: h, pl: C })[t.languageTag ?? (0, p.xw)()](),
        D = (e = {}, t = {}) =>
          ({ en: g, pl: S })[t.languageTag ?? (0, p.xw)()](),
        M = (e = {}, t = {}) =>
          ({ en: v, pl: P })[t.languageTag ?? (0, p.xw)()](),
        G = (e = {}, t = {}) =>
          ({ en: x, pl: _ })[t.languageTag ?? (0, p.xw)()](),
        V = (e = {}, t = {}) =>
          ({ en: b, pl: I })[t.languageTag ?? (0, p.xw)()](),
        z = (e = {}, t = {}) =>
          ({ en: A, pl: R })[t.languageTag ?? (0, p.xw)()](),
        B = (e = {}, t = {}) =>
          ({ en: w, pl: k })[t.languageTag ?? (0, p.xw)()](),
        F = (e = {}, t = {}) =>
          ({ en: y, pl: O })[t.languageTag ?? (0, p.xw)()](),
        J = (e = {}, t = {}) =>
          ({ en: T, pl: U })[t.languageTag ?? (0, p.xw)()](),
        X = (e = {}, t = {}) =>
          ({ en: j, pl: H })[t.languageTag ?? (0, p.xw)()](),
        q = {
          title: (e = {}, t = {}) =>
            ({ en: f, pl: E })[t.languageTag ?? (0, p.xw)()](),
          description: (e = {}, t = {}) =>
            ({ en: m, pl: N })[t.languageTag ?? (0, p.xw)()](),
          keywords: () => [L(), D(), M(), G(), V(), z(), B(), F(), J(), X()],
          url: () => u._.APP_URL,
          googleSiteVerificationId: () => u._.GOOGLE_SITE_VERIFICATION_ID || '',
        };
      var Y = r(4887),
        Q = r.n(Y),
        K = r(18441),
        Z = r.n(K);
      let $ = [Q().variable, Z().variable];
      var W = r(13673),
        ee = r(47317);
      let et = (...e) => (0, ee.QP)((0, W.$)(e)),
        er = () => ({
          metadataBase: new URL(q.url()),
          title: { default: q.title(), template: `%s | ${q.title()}` },
          description: q.description(),
          keywords: q.keywords(),
          robots: { index: !0, follow: !0 },
          icons: {
            icon: '/images/logo_transparent.png',
            shortcut: '/images/logo_transparent.png',
            apple: '/images/logo_transparent.png',
          },
          verification: { google: q.googleSiteVerificationId() },
          openGraph: {
            url: q.url(),
            title: q.title(),
            description: q.description(),
            siteName: q.title(),
            images: '/opengraph-image.png',
            type: 'website',
            locale: (0, p.xw)(),
          },
          twitter: {
            card: 'summary_large_image',
            title: q.title(),
            description: q.description(),
            images: '/opengraph-image.png',
          },
        }),
        eo = ({ children: e }) =>
          (0, o.jsx)(c.AuthProvider, {
            children: (0, o.jsx)(s.Is, {
              children: (0, o.jsxs)('html', {
                lang: (0, p.xw)(),
                suppressHydrationWarning: !0,
                children: [
                  (0, o.jsxs)('head', {
                    children: [
                      (0, o.jsx)('link', {
                        rel: 'preconnect',
                        href: 'https://fonts.googleapis.com',
                      }),
                      (0, o.jsx)('link', {
                        rel: 'preconnect',
                        href: 'https://fonts.gstatic.com',
                        crossOrigin: 'anonymous',
                      }),
                      (0, o.jsx)('link', {
                        href: 'https://fonts.googleapis.com/css2?family=Big+Shoulders:wght@100..900&display=swap',
                        rel: 'stylesheet',
                      }),
                    ],
                  }),
                  (0, o.jsx)('body', {
                    className: et(
                      'page-transition flex min-h-screen flex-col font-sans',
                      $
                    ),
                    children: (0, o.jsxs)(a.ThemeProvider, {
                      attribute: 'class',
                      children: [
                        (0, o.jsx)(i.default, {}),
                        (0, o.jsx)('main', {
                          className: 'flex-1',
                          children: e,
                        }),
                        (0, o.jsx)(n, {}),
                        (0, o.jsx)(l.ThemeSwitcher, {
                          className: 'fixed bottom-5 right-5 z-10',
                        }),
                        (0, o.jsx)(d.Toaster, {}),
                      ],
                    }),
                  }),
                ],
              }),
            }),
          }),
        es = eo;
    },
    19462: (e, t, r) => {
      'use strict';
      r.d(t, { default: () => o });
      let o = (0, r(46760).registerClientReference)(
        function () {
          throw Error(
            'Attempted to call the default export of "C:\\\\Users\\\\Admin\\\\New folder (2)\\\\Hydroleaf_frontend\\\\src\\\\components\\\\navbar\\\\navbar.tsx" from the server, but it\'s on the client. It\'s not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.'
          );
        },
        'C:\\Users\\Admin\\New folder (2)\\Hydroleaf_frontend\\src\\components\\navbar\\navbar.tsx',
        'default'
      );
    },
    52030: (e, t, r) => {
      'use strict';
      r.d(t, { ThemeProvider: () => o });
      let o = (0, r(46760).registerClientReference)(
        function () {
          throw Error(
            "Attempted to call ThemeProvider() from the server but ThemeProvider is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component."
          );
        },
        'C:\\Users\\Admin\\New folder (2)\\Hydroleaf_frontend\\src\\components\\theme-provider.tsx',
        'ThemeProvider'
      );
    },
    72252: (e, t, r) => {
      'use strict';
      r.d(t, { ThemeSwitcher: () => o });
      let o = (0, r(46760).registerClientReference)(
        function () {
          throw Error(
            "Attempted to call ThemeSwitcher() from the server but ThemeSwitcher is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component."
          );
        },
        'C:\\Users\\Admin\\New folder (2)\\Hydroleaf_frontend\\src\\components\\theme-switcher.tsx',
        'ThemeSwitcher'
      );
    },
    17490: (e, t, r) => {
      'use strict';
      r.d(t, { Toaster: () => o });
      let o = (0, r(46760).registerClientReference)(
        function () {
          throw Error(
            "Attempted to call Toaster() from the server but Toaster is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component."
          );
        },
        'C:\\Users\\Admin\\New folder (2)\\Hydroleaf_frontend\\src\\components\\ui\\toaster.tsx',
        'Toaster'
      );
    },
    7985: (e, t, r) => {
      'use strict';
      r.d(t, { AuthProvider: () => s });
      var o = r(46760);
      let s = (0, o.registerClientReference)(
        function () {
          throw Error(
            "Attempted to call AuthProvider() from the server but AuthProvider is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component."
          );
        },
        'C:\\Users\\Admin\\New folder (2)\\Hydroleaf_frontend\\src\\context\\AuthContext.tsx',
        'AuthProvider'
      );
      (0, o.registerClientReference)(
        function () {
          throw Error(
            "Attempted to call useAuth() from the server but useAuth is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component."
          );
        },
        'C:\\Users\\Admin\\New folder (2)\\Hydroleaf_frontend\\src\\context\\AuthContext.tsx',
        'useAuth'
      );
    },
    14756: (e, t, r) => {
      'use strict';
      let o;
      r.d(t, { ij: () => d, k_: () => s, tH: () => a, xw: () => i });
      let s = 'en',
        n = ['en', 'pl'],
        i = () => s,
        a = (e) => {
          (i = 'function' == typeof e ? l(e) : l(() => e)),
            void 0 !== o && o(i());
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
    35692: () => {},
    56616: () => {},
    29824: (e, t, r) => {
      'use strict';
      r.d(t, { _: () => n });
      var o = r(11115),
        s = r(30379);
      let n = (0, o.w)({
        server: {
          APP_URL: s.z.string().url().min(1),
          GOOGLE_SITE_VERIFICATION_ID: s.z.string().optional(),
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
