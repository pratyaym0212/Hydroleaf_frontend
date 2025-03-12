(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [698],
  {
    2995: (e, t, l) => {
      Promise.resolve().then(l.bind(l, 911));
    },
    911: (e, t, l) => {
      'use strict';
      l.d(t, { default: () => r });
      var a = l(5155),
        n = l(2115);
      let r = () => {
        let [e, t] = (0, n.useState)(''),
          [l, r] = (0, n.useState)(''),
          [d, o] = (0, n.useState)(null),
          [s, p] = (0, n.useState)(!1),
          [u, i] = (0, n.useState)(null),
          [c, g] = (0, n.useState)(''),
          h = async (a) => {
            if ((a.preventDefault(), !d)) {
              alert('Please select an image.');
              return;
            }
            let n = new FormData();
            n.append('title', e),
              n.append('content', l),
              n.append('file', d),
              n.append('reverse', String(s)),
              (await fetch('/api/blog', { method: 'POST', body: n })).ok
                ? (alert('Blog added!'), t(''), r(''), o(null), p(!1))
                : alert('Failed to add blog.');
          },
          b = async (a) => {
            if ((a.preventDefault(), !u)) {
              alert('Please enter a Blog ID to edit.');
              return;
            }
            let n = new FormData();
            n.append('id', String(u)),
              n.append('title', e),
              n.append('content', l),
              d && n.append('file', d),
              n.append('reverse', String(s)),
              (await fetch('/api/blog', { method: 'PATCH', body: n })).ok
                ? (alert('Blog updated!'),
                  t(''),
                  r(''),
                  o(null),
                  p(!1),
                  i(null))
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
              onSubmit: u ? b : h,
              className: 'flex flex-col gap-4',
              children: [
                (0, a.jsx)('h2', {
                  className: 'text-lg font-bold',
                  children: u ? 'Edit Blog' : 'Add Blog',
                }),
                (0, a.jsx)('input', {
                  type: 'number',
                  placeholder: 'Blog ID (for edit)',
                  value: u || '',
                  onChange: (e) =>
                    i(e.target.value ? parseInt(e.target.value, 10) : null),
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
                  onChange: (e) => r(e.target.value),
                  className: 'rounded border p-2',
                }),
                (0, a.jsx)('input', {
                  type: 'file',
                  onChange: (e) => {
                    var t;
                    return o(
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
                      checked: s,
                      onChange: (e) => p(e.target.checked),
                    }),
                    'Reverse',
                  ],
                }),
                (0, a.jsx)('button', {
                  type: 'submit',
                  className: 'rounded bg-blue-500 p-2 text-white',
                  children: u ? 'Update Blog' : 'Add Blog',
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
    },
  },
  (e) => {
    var t = (t) => e((e.s = t));
    e.O(0, [441, 517, 358], () => t(2995)), (_N_E = e.O());
  },
]);
