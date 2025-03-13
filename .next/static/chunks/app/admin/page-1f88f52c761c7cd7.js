(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [698],
  {
    5933: (e, t, l) => {
      Promise.resolve().then(l.bind(l, 7709));
    },
    6046: (e, t, l) => {
      'use strict';
      var a = l(6658);
      l.o(a, 'useRouter') &&
        l.d(t, {
          useRouter: function () {
            return a.useRouter;
          },
        });
    },
    7709: (e, t, l) => {
      'use strict';
      l.r(t), l.d(t, { default: () => d });
      var a = l(5155),
        r = l(2115),
        n = l(6046);
      let o = () => {
        let [e, t] = (0, r.useState)(''),
          [l, n] = (0, r.useState)(''),
          [o, s] = (0, r.useState)(null),
          [d, u] = (0, r.useState)(!1),
          [i, p] = (0, r.useState)(null),
          [c, g] = (0, r.useState)(''),
          h = async (a) => {
            if ((a.preventDefault(), !o)) {
              alert('Please select an image.');
              return;
            }
            let r = new FormData();
            r.append('title', e),
              r.append('content', l),
              r.append('file', o),
              r.append('reverse', String(d)),
              (await fetch('/api/blog', { method: 'POST', body: r })).ok
                ? (alert('Blog added!'), t(''), n(''), s(null), u(!1))
                : alert('Failed to add blog.');
          },
          b = async (a) => {
            if ((a.preventDefault(), !i)) {
              alert('Please enter a Blog ID to edit.');
              return;
            }
            let r = new FormData();
            r.append('id', String(i)),
              r.append('title', e),
              r.append('content', l),
              o && r.append('file', o),
              r.append('reverse', String(d)),
              (await fetch('/api/blog', { method: 'PATCH', body: r })).ok
                ? (alert('Blog updated!'),
                  t(''),
                  n(''),
                  s(null),
                  u(!1),
                  p(null))
                : alert('Failed to update blog.');
          },
          f = async (e) => {
            if ((e.preventDefault(), !c)) {
              alert('Please enter a Blog ID to delete.');
              return;
            }
            (
              await fetch('/api/blog', {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ id: parseInt(c, 10) }),
              })
            ).ok
              ? (alert('Blog deleted!'), g(''))
              : alert('Failed to delete blog.');
          };
        return (0, a.jsxs)('div', {
          className: 'flex flex-col gap-6 rounded border p-4',
          children: [
            (0, a.jsxs)('form', {
              onSubmit: i ? b : h,
              className: 'flex flex-col gap-4',
              children: [
                (0, a.jsx)('h2', {
                  className: 'text-lg font-bold',
                  children: i ? 'Edit Blog' : 'Add Blog',
                }),
                (0, a.jsx)('input', {
                  type: 'number',
                  placeholder: 'Blog ID (for edit)',
                  value: i || '',
                  onChange: (e) =>
                    p(e.target.value ? parseInt(e.target.value, 10) : null),
                  className: 'rounded border p-2',
                }),
                (0, a.jsx)('input', {
                  type: 'text',
                  placeholder: 'Title',
                  value: e,
                  onChange: (e) => t(e.target.value),
                  className: 'rounded border p-2',
                }),
                (0, a.jsx)('textarea', {
                  placeholder: 'Content',
                  value: l,
                  onChange: (e) => n(e.target.value),
                  className: 'rounded border p-2',
                }),
                (0, a.jsx)('input', {
                  type: 'file',
                  onChange: (e) => {
                    var t;
                    return s(
                      (null === (t = e.target.files) || void 0 === t
                        ? void 0
                        : t[0]) || null
                    );
                  },
                  className: 'rounded border p-2',
                }),
                (0, a.jsxs)('label', {
                  className: 'flex items-center gap-2',
                  children: [
                    (0, a.jsx)('input', {
                      type: 'checkbox',
                      checked: d,
                      onChange: (e) => u(e.target.checked),
                    }),
                    'Reverse',
                  ],
                }),
                (0, a.jsx)('button', {
                  type: 'submit',
                  className: 'rounded bg-blue-500 p-2 text-white',
                  children: i ? 'Update Blog' : 'Add Blog',
                }),
              ],
            }),
            (0, a.jsxs)('form', {
              onSubmit: f,
              className: 'flex flex-col gap-4',
              children: [
                (0, a.jsx)('h2', {
                  className: 'text-lg font-bold',
                  children: 'Delete Blog',
                }),
                (0, a.jsx)('input', {
                  type: 'number',
                  placeholder: 'Enter Blog ID to delete',
                  value: c,
                  onChange: (e) => g(e.target.value),
                  className: 'rounded border p-2',
                }),
                (0, a.jsx)('button', {
                  type: 'submit',
                  className: 'rounded bg-red-500 p-2 text-white',
                  children: 'Delete Blog',
                }),
              ],
            }),
          ],
        });
      };
      var s = l(8435);
      let d = () => {
        let { user: e, logout: t } = (0, s.A)(),
          l = (0, n.useRouter)();
        return ((0, r.useEffect)(() => {
          e || l.push('/login');
        }, [e, l]),
        e)
          ? (0, a.jsxs)('div', {
              children: [
                (0, a.jsx)('button', {
                  onClick: t,
                  className: 'rounded bg-red-500 p-2 text-white',
                  children: 'Logout',
                }),
                (0, a.jsx)(o, {}),
              ],
            })
          : null;
      };
    },
    8435: (e, t, l) => {
      'use strict';
      l.d(t, { A: () => s, AuthProvider: () => o });
      var a = l(5155),
        r = l(2115);
      let n = (0, r.createContext)(null),
        o = (e) => {
          let { children: t } = e,
            [l, o] = (0, r.useState)(null);
          return (
            (0, r.useEffect)(() => {
              let e = localStorage.getItem('user');
              e && o(e);
            }, []),
            (0, a.jsx)(n.Provider, {
              value: {
                user: l,
                login: (e) => {
                  localStorage.setItem('user', e), o(e);
                },
                logout: () => {
                  localStorage.removeItem('user'), o(null);
                },
              },
              children: t,
            })
          );
        },
        s = () => {
          let e = (0, r.useContext)(n);
          if (!e) throw Error('useAuth must be used within an AuthProvider');
          return e;
        };
    },
  },
  (e) => {
    var t = (t) => e((e.s = t));
    e.O(0, [441, 517, 358], () => t(5933)), (_N_E = e.O());
  },
]);
