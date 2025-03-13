(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [520],
  {
    8859: (e, t, r) => {
      Promise.resolve().then(r.bind(r, 7527));
    },
    6046: (e, t, r) => {
      'use strict';
      var s = r(6658);
      r.o(s, 'useRouter') &&
        r.d(t, {
          useRouter: function () {
            return s.useRouter;
          },
        });
    },
    7527: (e, t, r) => {
      'use strict';
      r.r(t), r.d(t, { default: () => n });
      var s = r(5155),
        l = r(2115),
        u = r(6046),
        a = r(8435);
      let n = () => {
        let [e, t] = (0, l.useState)(''),
          [r, n] = (0, l.useState)(''),
          { login: o } = (0, a.A)(),
          d = (0, u.useRouter)();
        return (0, s.jsxs)('div', {
          className: 'flex min-h-screen flex-col items-center justify-center',
          children: [
            (0, s.jsx)('h2', {
              className: 'mb-4 text-xl font-bold',
              children: 'Login',
            }),
            (0, s.jsxs)('form', {
              onSubmit: (t) => {
                t.preventDefault(),
                  'admin' === e && 'hydroleaf' === r
                    ? (o(e), d.push('/admin'))
                    : alert('Invalid credentials');
              },
              className: 'flex flex-col gap-4',
              children: [
                (0, s.jsx)('input', {
                  type: 'text',
                  placeholder: 'Username',
                  value: e,
                  onChange: (e) => t(e.target.value),
                  className: 'rounded border p-2',
                }),
                (0, s.jsx)('input', {
                  type: 'password',
                  placeholder: 'Password',
                  value: r,
                  onChange: (e) => n(e.target.value),
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
    8435: (e, t, r) => {
      'use strict';
      r.d(t, { A: () => n, AuthProvider: () => a });
      var s = r(5155),
        l = r(2115);
      let u = (0, l.createContext)(null),
        a = (e) => {
          let { children: t } = e,
            [r, a] = (0, l.useState)(null);
          return (
            (0, l.useEffect)(() => {
              let e = localStorage.getItem('user');
              e && a(e);
            }, []),
            (0, s.jsx)(u.Provider, {
              value: {
                user: r,
                login: (e) => {
                  localStorage.setItem('user', e), a(e);
                },
                logout: () => {
                  localStorage.removeItem('user'), a(null);
                },
              },
              children: t,
            })
          );
        },
        n = () => {
          let e = (0, l.useContext)(u);
          if (!e) throw Error('useAuth must be used within an AuthProvider');
          return e;
        };
    },
  },
  (e) => {
    var t = (t) => e((e.s = t));
    e.O(0, [441, 517, 358], () => t(8859)), (_N_E = e.O());
  },
]);
