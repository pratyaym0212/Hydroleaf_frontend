(() => {
  var t = {};
  (t.id = 974),
    (t.ids = [974]),
    (t.modules = {
      10846: (t) => {
        'use strict';
        t.exports = require('next/dist/compiled/next-server/app-page.runtime.prod.js');
      },
      19121: (t) => {
        'use strict';
        t.exports = require('next/dist/server/app-render/action-async-storage.external.js');
      },
      3295: (t) => {
        'use strict';
        t.exports = require('next/dist/server/app-render/after-task-async-storage.external.js');
      },
      29294: (t) => {
        'use strict';
        t.exports = require('next/dist/server/app-render/work-async-storage.external.js');
      },
      63033: (t) => {
        'use strict';
        t.exports = require('next/dist/server/app-render/work-unit-async-storage.external.js');
      },
      33873: (t) => {
        'use strict';
        t.exports = require('path');
      },
      35694: (t, e, i) => {
        'use strict';
        i.r(e),
          i.d(e, {
            GlobalError: () => o.a,
            __next_app__: () => d,
            pages: () => u,
            routeModule: () => c,
            tree: () => h,
          });
        var s = i(70260),
          n = i(28203),
          r = i(25155),
          o = i.n(r),
          a = i(67292),
          l = {};
        for (let t in a)
          0 >
            [
              'default',
              'tree',
              'pages',
              'GlobalError',
              '__next_app__',
              'routeModule',
            ].indexOf(t) && (l[t] = () => a[t]);
        i.d(e, l);
        let h = [
            '',
            {
              children: [
                '__PAGE__',
                {},
                {
                  page: [
                    () => Promise.resolve().then(i.bind(i, 61377)),
                    'C:\\Users\\Admin\\New folder (2)\\Hydroleaf_frontend\\src\\app\\page.tsx',
                  ],
                },
              ],
            },
            {
              layout: [
                () => Promise.resolve().then(i.bind(i, 70665)),
                'C:\\Users\\Admin\\New folder (2)\\Hydroleaf_frontend\\src\\app\\layout.tsx',
              ],
              'not-found': [
                () => Promise.resolve().then(i.t.bind(i, 19937, 23)),
                'next/dist/client/components/not-found-error',
              ],
              forbidden: [
                () => Promise.resolve().then(i.t.bind(i, 69116, 23)),
                'next/dist/client/components/forbidden-error',
              ],
              unauthorized: [
                () => Promise.resolve().then(i.t.bind(i, 41485, 23)),
                'next/dist/client/components/unauthorized-error',
              ],
            },
          ],
          u = [
            'C:\\Users\\Admin\\New folder (2)\\Hydroleaf_frontend\\src\\app\\page.tsx',
          ],
          d = { require: i, loadChunk: () => Promise.resolve() },
          c = new s.AppPageRouteModule({
            definition: {
              kind: n.RouteKind.APP_PAGE,
              page: '/page',
              pathname: '/',
              bundlePath: '',
              filename: '',
              appPaths: [],
            },
            userland: { loaderTree: h },
          });
      },
      63174: (t, e, i) => {
        Promise.resolve().then(i.bind(i, 61377));
      },
      32910: (t, e, i) => {
        Promise.resolve().then(i.bind(i, 68357));
      },
      68357: (t, e, i) => {
        'use strict';
        let s;
        i.r(e), i.d(e, { default: () => rT });
        var n,
          r,
          o = i(45512);
        i(20168);
        var a = i(58009);
        function l(t) {
          return (
            null !== t && 'object' == typeof t && 'function' == typeof t.start
          );
        }
        function h(t, e, i, s) {
          if (
            'function' == typeof e ||
            ('string' == typeof e && (e = t.variants && t.variants[e]),
            'function' == typeof e)
          ) {
            let [n, r] = (function (t) {
              let e = [{}, {}];
              return (
                null == t ||
                  t.values.forEach((t, i) => {
                    (e[0][i] = t.get()), (e[1][i] = t.getVelocity());
                  }),
                e
              );
            })(s);
            e = e(void 0 !== i ? i : t.custom, n, r);
          }
          return e;
        }
        function u(t, e, i) {
          let s = t.getProps();
          return h(s, e, void 0 !== i ? i : s.custom, t);
        }
        function d(t) {
          let e;
          return () => (void 0 === e && (e = t()), e);
        }
        let c = d(() => void 0 !== window.ScrollTimeline);
        class p {
          constructor(t) {
            (this.stop = () => this.runAll('stop')),
              (this.animations = t.filter(Boolean));
          }
          get finished() {
            return Promise.all(
              this.animations.map((t) => ('finished' in t ? t.finished : t))
            );
          }
          getAll(t) {
            return this.animations[0][t];
          }
          setAll(t, e) {
            for (let i = 0; i < this.animations.length; i++)
              this.animations[i][t] = e;
          }
          attachTimeline(t, e) {
            let i = this.animations.map((i) =>
              c() && i.attachTimeline
                ? i.attachTimeline(t)
                : 'function' == typeof e
                  ? e(i)
                  : void 0
            );
            return () => {
              i.forEach((t, e) => {
                t && t(), this.animations[e].stop();
              });
            };
          }
          get time() {
            return this.getAll('time');
          }
          set time(t) {
            this.setAll('time', t);
          }
          get speed() {
            return this.getAll('speed');
          }
          set speed(t) {
            this.setAll('speed', t);
          }
          get startTime() {
            return this.getAll('startTime');
          }
          get duration() {
            let t = 0;
            for (let e = 0; e < this.animations.length; e++)
              t = Math.max(t, this.animations[e].duration);
            return t;
          }
          runAll(t) {
            this.animations.forEach((e) => e[t]());
          }
          flatten() {
            this.runAll('flatten');
          }
          play() {
            this.runAll('play');
          }
          pause() {
            this.runAll('pause');
          }
          cancel() {
            this.runAll('cancel');
          }
          complete() {
            this.runAll('complete');
          }
        }
        class m extends p {
          then(t, e) {
            return Promise.all(this.animations).then(t).catch(e);
          }
        }
        function f(t, e) {
          return t ? t[e] || t.default || t : void 0;
        }
        function g(t) {
          let e = 0,
            i = t.next(e);
          for (; !i.done && e < 2e4; ) (e += 50), (i = t.next(e));
          return e >= 2e4 ? 1 / 0 : e;
        }
        function v(t) {
          return 'function' == typeof t;
        }
        function A(t, e) {
          (t.timeline = e), (t.onfinish = null);
        }
        let y = (t) => Array.isArray(t) && 'number' == typeof t[0],
          x = { linearEasing: void 0 },
          P = (function (t, e) {
            let i = d(t);
            return () => {
              var t;
              return null !== (t = x[e]) && void 0 !== t ? t : i();
            };
          })(() => {
            try {
              document
                .createElement('div')
                .animate({ opacity: 0 }, { easing: 'linear(0, 1)' });
            } catch (t) {
              return !1;
            }
            return !0;
          }, 'linearEasing'),
          w = (t, e, i) => {
            let s = e - t;
            return 0 === s ? 1 : (i - t) / s;
          },
          b = (t, e, i = 10) => {
            let s = '',
              n = Math.max(Math.round(e / i), 2);
            for (let e = 0; e < n; e++) s += t(w(0, n - 1, e)) + ', ';
            return `linear(${s.substring(0, s.length - 2)})`;
          },
          T = ([t, e, i, s]) => `cubic-bezier(${t}, ${e}, ${i}, ${s})`,
          S = {
            linear: 'linear',
            ease: 'ease',
            easeIn: 'ease-in',
            easeOut: 'ease-out',
            easeInOut: 'ease-in-out',
            circIn: T([0, 0.65, 0.55, 1]),
            circOut: T([0.55, 0, 1, 0.45]),
            backIn: T([0.31, 0.01, 0.66, -0.59]),
            backOut: T([0.33, 1.53, 0.69, 0.99]),
          },
          E = { x: !1, y: !1 };
        function C(t, e) {
          let i = (function (t, e, i) {
              if (t instanceof EventTarget) return [t];
              if ('string' == typeof t) {
                let e = document.querySelectorAll(t);
                return e ? Array.from(e) : [];
              }
              return Array.from(t);
            })(t),
            s = new AbortController();
          return [i, { passive: !0, ...e, signal: s.signal }, () => s.abort()];
        }
        function D(t) {
          return !('touch' === t.pointerType || E.x || E.y);
        }
        function M(t, e) {
          let i = `${e}PointerCapture`;
          if (
            t.target instanceof Element &&
            i in t.target &&
            void 0 !== t.pointerId
          )
            try {
              t.target[i](t.pointerId);
            } catch (t) {}
        }
        let V = (t, e) => !!e && (t === e || V(t, e.parentElement)),
          j = (t) =>
            'mouse' === t.pointerType
              ? 'number' != typeof t.button || t.button <= 0
              : !1 !== t.isPrimary,
          R = new Set(['BUTTON', 'INPUT', 'SELECT', 'TEXTAREA', 'A']),
          k = new WeakSet();
        function B(t) {
          return (e) => {
            'Enter' === e.key && t(e);
          };
        }
        function F(t, e) {
          t.dispatchEvent(
            new PointerEvent('pointer' + e, { isPrimary: !0, bubbles: !0 })
          );
        }
        let I = (t, e) => {
          let i = t.currentTarget;
          if (!i) return;
          let s = B(() => {
            if (k.has(i)) return;
            F(i, 'down');
            let t = B(() => {
              F(i, 'up');
            });
            i.addEventListener('keyup', t, e),
              i.addEventListener('blur', () => F(i, 'cancel'), e);
          });
          i.addEventListener('keydown', s, e),
            i.addEventListener(
              'blur',
              () => i.removeEventListener('keydown', s),
              e
            );
        };
        function L(t) {
          return j(t) && !(E.x || E.y);
        }
        let U = (t) => 1e3 * t,
          O = (t) => t / 1e3,
          N = (t) => t,
          Q = [
            'transformPerspective',
            'x',
            'y',
            'z',
            'translateX',
            'translateY',
            'translateZ',
            'scale',
            'scaleX',
            'scaleY',
            'rotate',
            'rotateX',
            'rotateY',
            'rotateZ',
            'skew',
            'skewX',
            'skewY',
          ],
          W = new Set(Q),
          $ = new Set([
            'width',
            'height',
            'top',
            'left',
            'right',
            'bottom',
            ...Q,
          ]),
          X = (t) => Array.isArray(t),
          H = (t) => !!(t && 'object' == typeof t && t.mix && t.toValue),
          G = (t) => (X(t) ? t[t.length - 1] || 0 : t),
          z = { skipAnimations: !1, useManualTiming: !1 },
          Y = [
            'read',
            'resolveKeyframes',
            'update',
            'preRender',
            'render',
            'postRender',
          ],
          q = { value: null, addProjectionMetrics: null };
        function K(t, e) {
          let i = !1,
            s = !0,
            n = { delta: 0, timestamp: 0, isProcessing: !1 },
            r = () => (i = !0),
            o = Y.reduce(
              (t, i) => (
                (t[i] = (function (t, e) {
                  let i = new Set(),
                    s = new Set(),
                    n = !1,
                    r = !1,
                    o = new WeakSet(),
                    a = { delta: 0, timestamp: 0, isProcessing: !1 },
                    l = 0;
                  function h(e) {
                    o.has(e) && (u.schedule(e), t()), l++, e(a);
                  }
                  let u = {
                    schedule: (t, e = !1, r = !1) => {
                      let a = r && n ? i : s;
                      return e && o.add(t), a.has(t) || a.add(t), t;
                    },
                    cancel: (t) => {
                      s.delete(t), o.delete(t);
                    },
                    process: (t) => {
                      if (((a = t), n)) {
                        r = !0;
                        return;
                      }
                      (n = !0),
                        ([i, s] = [s, i]),
                        i.forEach(h),
                        e && q.value && q.value.frameloop[e].push(l),
                        (l = 0),
                        i.clear(),
                        (n = !1),
                        r && ((r = !1), u.process(t));
                    },
                  };
                  return u;
                })(r, e ? i : void 0)),
                t
              ),
              {}
            ),
            {
              read: a,
              resolveKeyframes: l,
              update: h,
              preRender: u,
              render: d,
              postRender: c,
            } = o,
            p = () => {
              let r = z.useManualTiming ? n.timestamp : performance.now();
              (i = !1),
                z.useManualTiming ||
                  (n.delta = s
                    ? 1e3 / 60
                    : Math.max(Math.min(r - n.timestamp, 40), 1)),
                (n.timestamp = r),
                (n.isProcessing = !0),
                a.process(n),
                l.process(n),
                h.process(n),
                u.process(n),
                d.process(n),
                c.process(n),
                (n.isProcessing = !1),
                i && e && ((s = !1), t(p));
            },
            m = () => {
              (i = !0), (s = !0), n.isProcessing || t(p);
            };
          return {
            schedule: Y.reduce((t, e) => {
              let s = o[e];
              return (
                (t[e] = (t, e = !1, n = !1) => (i || m(), s.schedule(t, e, n))),
                t
              );
            }, {}),
            cancel: (t) => {
              for (let e = 0; e < Y.length; e++) o[Y[e]].cancel(t);
            },
            state: n,
            steps: o,
          };
        }
        let {
          schedule: _,
          cancel: Z,
          state: J,
          steps: tt,
        } = K(
          'undefined' != typeof requestAnimationFrame
            ? requestAnimationFrame
            : N,
          !0
        );
        function te() {
          s = void 0;
        }
        let ti = {
          now: () => (
            void 0 === s &&
              ti.set(
                J.isProcessing || z.useManualTiming
                  ? J.timestamp
                  : performance.now()
              ),
            s
          ),
          set: (t) => {
            (s = t), queueMicrotask(te);
          },
        };
        function ts(t, e) {
          -1 === t.indexOf(e) && t.push(e);
        }
        function tn(t, e) {
          let i = t.indexOf(e);
          i > -1 && t.splice(i, 1);
        }
        class tr {
          constructor() {
            this.subscriptions = [];
          }
          add(t) {
            return ts(this.subscriptions, t), () => tn(this.subscriptions, t);
          }
          notify(t, e, i) {
            let s = this.subscriptions.length;
            if (s) {
              if (1 === s) this.subscriptions[0](t, e, i);
              else
                for (let n = 0; n < s; n++) {
                  let s = this.subscriptions[n];
                  s && s(t, e, i);
                }
            }
          }
          getSize() {
            return this.subscriptions.length;
          }
          clear() {
            this.subscriptions.length = 0;
          }
        }
        let to = (t) => !isNaN(parseFloat(t)),
          ta = { current: void 0 };
        class tl {
          constructor(t, e = {}) {
            (this.version = '12.4.10'),
              (this.canTrackVelocity = null),
              (this.events = {}),
              (this.updateAndNotify = (t, e = !0) => {
                let i = ti.now();
                this.updatedAt !== i && this.setPrevFrameValue(),
                  (this.prev = this.current),
                  this.setCurrent(t),
                  this.current !== this.prev &&
                    this.events.change &&
                    this.events.change.notify(this.current),
                  e &&
                    this.events.renderRequest &&
                    this.events.renderRequest.notify(this.current);
              }),
              (this.hasAnimated = !1),
              this.setCurrent(t),
              (this.owner = e.owner);
          }
          setCurrent(t) {
            (this.current = t),
              (this.updatedAt = ti.now()),
              null === this.canTrackVelocity &&
                void 0 !== t &&
                (this.canTrackVelocity = to(this.current));
          }
          setPrevFrameValue(t = this.current) {
            (this.prevFrameValue = t), (this.prevUpdatedAt = this.updatedAt);
          }
          onChange(t) {
            return this.on('change', t);
          }
          on(t, e) {
            this.events[t] || (this.events[t] = new tr());
            let i = this.events[t].add(e);
            return 'change' === t
              ? () => {
                  i(),
                    _.read(() => {
                      this.events.change.getSize() || this.stop();
                    });
                }
              : i;
          }
          clearListeners() {
            for (let t in this.events) this.events[t].clear();
          }
          attach(t, e) {
            (this.passiveEffect = t), (this.stopPassiveEffect = e);
          }
          set(t, e = !0) {
            e && this.passiveEffect
              ? this.passiveEffect(t, this.updateAndNotify)
              : this.updateAndNotify(t, e);
          }
          setWithVelocity(t, e, i) {
            this.set(e),
              (this.prev = void 0),
              (this.prevFrameValue = t),
              (this.prevUpdatedAt = this.updatedAt - i);
          }
          jump(t, e = !0) {
            this.updateAndNotify(t),
              (this.prev = t),
              (this.prevUpdatedAt = this.prevFrameValue = void 0),
              e && this.stop(),
              this.stopPassiveEffect && this.stopPassiveEffect();
          }
          get() {
            return ta.current && ta.current.push(this), this.current;
          }
          getPrevious() {
            return this.prev;
          }
          getVelocity() {
            var t;
            let e = ti.now();
            if (
              !this.canTrackVelocity ||
              void 0 === this.prevFrameValue ||
              e - this.updatedAt > 30
            )
              return 0;
            let i = Math.min(this.updatedAt - this.prevUpdatedAt, 30);
            return (
              (t = parseFloat(this.current) - parseFloat(this.prevFrameValue)),
              i ? (1e3 / i) * t : 0
            );
          }
          start(t) {
            return (
              this.stop(),
              new Promise((e) => {
                (this.hasAnimated = !0),
                  (this.animation = t(e)),
                  this.events.animationStart &&
                    this.events.animationStart.notify();
              }).then(() => {
                this.events.animationComplete &&
                  this.events.animationComplete.notify(),
                  this.clearAnimation();
              })
            );
          }
          stop() {
            this.animation &&
              (this.animation.stop(),
              this.events.animationCancel &&
                this.events.animationCancel.notify()),
              this.clearAnimation();
          }
          isAnimating() {
            return !!this.animation;
          }
          clearAnimation() {
            delete this.animation;
          }
          destroy() {
            this.clearListeners(),
              this.stop(),
              this.stopPassiveEffect && this.stopPassiveEffect();
          }
        }
        function th(t, e) {
          return new tl(t, e);
        }
        let tu = (t) => !!(t && t.getVelocity);
        function td(t, e) {
          let i = t.getValue('willChange');
          if (tu(i) && i.add) return i.add(e);
        }
        let tc = (t) => t.replace(/([a-z])([A-Z])/gu, '$1-$2').toLowerCase(),
          tp = 'data-' + tc('framerAppearId'),
          tm = { current: !1 },
          tf = (t, e, i) =>
            (((1 - 3 * i + 3 * e) * t + (3 * i - 6 * e)) * t + 3 * e) * t;
        function tg(t, e, i, s) {
          if (t === e && i === s) return N;
          let n = (e) =>
            (function (t, e, i, s, n) {
              let r, o;
              let a = 0;
              do
                (r = tf((o = e + (i - e) / 2), s, n) - t) > 0
                  ? (i = o)
                  : (e = o);
              while (Math.abs(r) > 1e-7 && ++a < 12);
              return o;
            })(e, 0, 1, t, i);
          return (t) => (0 === t || 1 === t ? t : tf(n(t), e, s));
        }
        let tv = (t) => (e) =>
            e <= 0.5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2,
          tA = (t) => (e) => 1 - t(1 - e),
          ty = tg(0.33, 1.53, 0.69, 0.99),
          tx = tA(ty),
          tP = tv(tx),
          tw = (t) =>
            (t *= 2) < 1 ? 0.5 * tx(t) : 0.5 * (2 - Math.pow(2, -10 * (t - 1))),
          tb = (t) => 1 - Math.sin(Math.acos(t)),
          tT = tA(tb),
          tS = tv(tb),
          tE = (t) => /^0[^.\s]+$/u.test(t),
          tC = (t, e, i) => (i > e ? e : i < t ? t : i),
          tD = {
            test: (t) => 'number' == typeof t,
            parse: parseFloat,
            transform: (t) => t,
          },
          tM = { ...tD, transform: (t) => tC(0, 1, t) },
          tV = { ...tD, default: 1 },
          tj = (t) => Math.round(1e5 * t) / 1e5,
          tR = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu,
          tk =
            /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
          tB = (t, e) => (i) =>
            !!(
              ('string' == typeof i && tk.test(i) && i.startsWith(t)) ||
              (e && null != i && Object.prototype.hasOwnProperty.call(i, e))
            ),
          tF = (t, e, i) => (s) => {
            if ('string' != typeof s) return s;
            let [n, r, o, a] = s.match(tR);
            return {
              [t]: parseFloat(n),
              [e]: parseFloat(r),
              [i]: parseFloat(o),
              alpha: void 0 !== a ? parseFloat(a) : 1,
            };
          },
          tI = (t) => tC(0, 255, t),
          tL = { ...tD, transform: (t) => Math.round(tI(t)) },
          tU = {
            test: tB('rgb', 'red'),
            parse: tF('red', 'green', 'blue'),
            transform: ({ red: t, green: e, blue: i, alpha: s = 1 }) =>
              'rgba(' +
              tL.transform(t) +
              ', ' +
              tL.transform(e) +
              ', ' +
              tL.transform(i) +
              ', ' +
              tj(tM.transform(s)) +
              ')',
          },
          tO = {
            test: tB('#'),
            parse: function (t) {
              let e = '',
                i = '',
                s = '',
                n = '';
              return (
                t.length > 5
                  ? ((e = t.substring(1, 3)),
                    (i = t.substring(3, 5)),
                    (s = t.substring(5, 7)),
                    (n = t.substring(7, 9)))
                  : ((e = t.substring(1, 2)),
                    (i = t.substring(2, 3)),
                    (s = t.substring(3, 4)),
                    (n = t.substring(4, 5)),
                    (e += e),
                    (i += i),
                    (s += s),
                    (n += n)),
                {
                  red: parseInt(e, 16),
                  green: parseInt(i, 16),
                  blue: parseInt(s, 16),
                  alpha: n ? parseInt(n, 16) / 255 : 1,
                }
              );
            },
            transform: tU.transform,
          },
          tN = (t) => ({
            test: (e) =>
              'string' == typeof e &&
              e.endsWith(t) &&
              1 === e.split(' ').length,
            parse: parseFloat,
            transform: (e) => `${e}${t}`,
          }),
          tQ = tN('deg'),
          tW = tN('%'),
          t$ = tN('px'),
          tX = tN('vh'),
          tH = tN('vw'),
          tG = {
            ...tW,
            parse: (t) => tW.parse(t) / 100,
            transform: (t) => tW.transform(100 * t),
          },
          tz = {
            test: tB('hsl', 'hue'),
            parse: tF('hue', 'saturation', 'lightness'),
            transform: ({
              hue: t,
              saturation: e,
              lightness: i,
              alpha: s = 1,
            }) =>
              'hsla(' +
              Math.round(t) +
              ', ' +
              tW.transform(tj(e)) +
              ', ' +
              tW.transform(tj(i)) +
              ', ' +
              tj(tM.transform(s)) +
              ')',
          },
          tY = {
            test: (t) => tU.test(t) || tO.test(t) || tz.test(t),
            parse: (t) =>
              tU.test(t) ? tU.parse(t) : tz.test(t) ? tz.parse(t) : tO.parse(t),
            transform: (t) =>
              'string' == typeof t
                ? t
                : t.hasOwnProperty('red')
                  ? tU.transform(t)
                  : tz.transform(t),
          },
          tq =
            /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu,
          tK = 'number',
          t_ = 'color',
          tZ =
            /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
        function tJ(t) {
          let e = t.toString(),
            i = [],
            s = { color: [], number: [], var: [] },
            n = [],
            r = 0,
            o = e
              .replace(
                tZ,
                (t) => (
                  tY.test(t)
                    ? (s.color.push(r), n.push(t_), i.push(tY.parse(t)))
                    : t.startsWith('var(')
                      ? (s.var.push(r), n.push('var'), i.push(t))
                      : (s.number.push(r), n.push(tK), i.push(parseFloat(t))),
                  ++r,
                  '${}'
                )
              )
              .split('${}');
          return { values: i, split: o, indexes: s, types: n };
        }
        function t0(t) {
          return tJ(t).values;
        }
        function t1(t) {
          let { split: e, types: i } = tJ(t),
            s = e.length;
          return (t) => {
            let n = '';
            for (let r = 0; r < s; r++)
              if (((n += e[r]), void 0 !== t[r])) {
                let e = i[r];
                e === tK
                  ? (n += tj(t[r]))
                  : e === t_
                    ? (n += tY.transform(t[r]))
                    : (n += t[r]);
              }
            return n;
          };
        }
        let t3 = (t) => ('number' == typeof t ? 0 : t),
          t2 = {
            test: function (t) {
              var e, i;
              return (
                isNaN(t) &&
                'string' == typeof t &&
                ((null === (e = t.match(tR)) || void 0 === e
                  ? void 0
                  : e.length) || 0) +
                  ((null === (i = t.match(tq)) || void 0 === i
                    ? void 0
                    : i.length) || 0) >
                  0
              );
            },
            parse: t0,
            createTransformer: t1,
            getAnimatableNone: function (t) {
              let e = t0(t);
              return t1(t)(e.map(t3));
            },
          },
          t5 = new Set(['brightness', 'contrast', 'saturate', 'opacity']);
        function t4(t) {
          let [e, i] = t.slice(0, -1).split('(');
          if ('drop-shadow' === e) return t;
          let [s] = i.match(tR) || [];
          if (!s) return t;
          let n = i.replace(s, ''),
            r = t5.has(e) ? 1 : 0;
          return s !== i && (r *= 100), e + '(' + r + n + ')';
        }
        let t9 = /\b([a-z-]*)\(.*?\)/gu,
          t6 = {
            ...t2,
            getAnimatableNone: (t) => {
              let e = t.match(t9);
              return e ? e.map(t4).join(' ') : t;
            },
          },
          t8 = { ...tD, transform: Math.round },
          t7 = {
            borderWidth: t$,
            borderTopWidth: t$,
            borderRightWidth: t$,
            borderBottomWidth: t$,
            borderLeftWidth: t$,
            borderRadius: t$,
            radius: t$,
            borderTopLeftRadius: t$,
            borderTopRightRadius: t$,
            borderBottomRightRadius: t$,
            borderBottomLeftRadius: t$,
            width: t$,
            maxWidth: t$,
            height: t$,
            maxHeight: t$,
            top: t$,
            right: t$,
            bottom: t$,
            left: t$,
            padding: t$,
            paddingTop: t$,
            paddingRight: t$,
            paddingBottom: t$,
            paddingLeft: t$,
            margin: t$,
            marginTop: t$,
            marginRight: t$,
            marginBottom: t$,
            marginLeft: t$,
            backgroundPositionX: t$,
            backgroundPositionY: t$,
            rotate: tQ,
            rotateX: tQ,
            rotateY: tQ,
            rotateZ: tQ,
            scale: tV,
            scaleX: tV,
            scaleY: tV,
            scaleZ: tV,
            skew: tQ,
            skewX: tQ,
            skewY: tQ,
            distance: t$,
            translateX: t$,
            translateY: t$,
            translateZ: t$,
            x: t$,
            y: t$,
            z: t$,
            perspective: t$,
            transformPerspective: t$,
            opacity: tM,
            originX: tG,
            originY: tG,
            originZ: t$,
            zIndex: t8,
            size: t$,
            fillOpacity: tM,
            strokeOpacity: tM,
            numOctaves: t8,
          },
          et = {
            ...t7,
            color: tY,
            backgroundColor: tY,
            outlineColor: tY,
            fill: tY,
            stroke: tY,
            borderColor: tY,
            borderTopColor: tY,
            borderRightColor: tY,
            borderBottomColor: tY,
            borderLeftColor: tY,
            filter: t6,
            WebkitFilter: t6,
          },
          ee = (t) => et[t];
        function ei(t, e) {
          let i = ee(t);
          return (
            i !== t6 && (i = t2),
            i.getAnimatableNone ? i.getAnimatableNone(e) : void 0
          );
        }
        let es = new Set(['auto', 'none', '0']),
          en = (t) => t === tD || t === t$,
          er = (t, e) => parseFloat(t.split(', ')[e]),
          eo =
            (t, e) =>
            (i, { transform: s }) => {
              if ('none' === s || !s) return 0;
              let n = s.match(/^matrix3d\((.+)\)$/u);
              if (n) return er(n[1], e);
              {
                let e = s.match(/^matrix\((.+)\)$/u);
                return e ? er(e[1], t) : 0;
              }
            },
          ea = new Set(['x', 'y', 'z']),
          el = Q.filter((t) => !ea.has(t)),
          eh = {
            width: (
              { x: t },
              { paddingLeft: e = '0', paddingRight: i = '0' }
            ) => t.max - t.min - parseFloat(e) - parseFloat(i),
            height: (
              { y: t },
              { paddingTop: e = '0', paddingBottom: i = '0' }
            ) => t.max - t.min - parseFloat(e) - parseFloat(i),
            top: (t, { top: e }) => parseFloat(e),
            left: (t, { left: e }) => parseFloat(e),
            bottom: ({ y: t }, { top: e }) => parseFloat(e) + (t.max - t.min),
            right: ({ x: t }, { left: e }) => parseFloat(e) + (t.max - t.min),
            x: eo(4, 13),
            y: eo(5, 14),
          };
        (eh.translateX = eh.x), (eh.translateY = eh.y);
        let eu = new Set(),
          ed = !1,
          ec = !1;
        function ep() {
          if (ec) {
            let t = Array.from(eu).filter((t) => t.needsMeasurement),
              e = new Set(t.map((t) => t.element)),
              i = new Map();
            e.forEach((t) => {
              let e = (function (t) {
                let e = [];
                return (
                  el.forEach((i) => {
                    let s = t.getValue(i);
                    void 0 !== s &&
                      (e.push([i, s.get()]),
                      s.set(i.startsWith('scale') ? 1 : 0));
                  }),
                  e
                );
              })(t);
              e.length && (i.set(t, e), t.render());
            }),
              t.forEach((t) => t.measureInitialState()),
              e.forEach((t) => {
                t.render();
                let e = i.get(t);
                e &&
                  e.forEach(([e, i]) => {
                    var s;
                    null === (s = t.getValue(e)) || void 0 === s || s.set(i);
                  });
              }),
              t.forEach((t) => t.measureEndState()),
              t.forEach((t) => {
                void 0 !== t.suspendedScrollY &&
                  window.scrollTo(0, t.suspendedScrollY);
              });
          }
          (ec = !1), (ed = !1), eu.forEach((t) => t.complete()), eu.clear();
        }
        function em() {
          eu.forEach((t) => {
            t.readKeyframes(), t.needsMeasurement && (ec = !0);
          });
        }
        class ef {
          constructor(t, e, i, s, n, r = !1) {
            (this.isComplete = !1),
              (this.isAsync = !1),
              (this.needsMeasurement = !1),
              (this.isScheduled = !1),
              (this.unresolvedKeyframes = [...t]),
              (this.onComplete = e),
              (this.name = i),
              (this.motionValue = s),
              (this.element = n),
              (this.isAsync = r);
          }
          scheduleResolve() {
            (this.isScheduled = !0),
              this.isAsync
                ? (eu.add(this),
                  ed || ((ed = !0), _.read(em), _.resolveKeyframes(ep)))
                : (this.readKeyframes(), this.complete());
          }
          readKeyframes() {
            let {
              unresolvedKeyframes: t,
              name: e,
              element: i,
              motionValue: s,
            } = this;
            for (let n = 0; n < t.length; n++)
              if (null === t[n]) {
                if (0 === n) {
                  let n = null == s ? void 0 : s.get(),
                    r = t[t.length - 1];
                  if (void 0 !== n) t[0] = n;
                  else if (i && e) {
                    let s = i.readValue(e, r);
                    null != s && (t[0] = s);
                  }
                  void 0 === t[0] && (t[0] = r),
                    s && void 0 === n && s.set(t[0]);
                } else t[n] = t[n - 1];
              }
          }
          setFinalKeyframe() {}
          measureInitialState() {}
          renderEndStyles() {}
          measureEndState() {}
          complete() {
            (this.isComplete = !0),
              this.onComplete(this.unresolvedKeyframes, this.finalKeyframe),
              eu.delete(this);
          }
          cancel() {
            this.isComplete || ((this.isScheduled = !1), eu.delete(this));
          }
          resume() {
            this.isComplete || this.scheduleResolve();
          }
        }
        let eg = (t) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t),
          ev = (t) => (e) => 'string' == typeof e && e.startsWith(t),
          eA = ev('--'),
          ey = ev('var(--'),
          ex = (t) => !!ey(t) && eP.test(t.split('/*')[0].trim()),
          eP =
            /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,
          ew = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u,
          eb = (t) => (e) => e.test(t),
          eT = [
            tD,
            t$,
            tW,
            tQ,
            tH,
            tX,
            { test: (t) => 'auto' === t, parse: (t) => t },
          ],
          eS = (t) => eT.find(eb(t));
        class eE extends ef {
          constructor(t, e, i, s, n) {
            super(t, e, i, s, n, !0);
          }
          readKeyframes() {
            let { unresolvedKeyframes: t, element: e, name: i } = this;
            if (!e || !e.current) return;
            super.readKeyframes();
            for (let i = 0; i < t.length; i++) {
              let s = t[i];
              if ('string' == typeof s && ex((s = s.trim()))) {
                let n = (function t(e, i, s = 1) {
                  N(
                    s <= 4,
                    `Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`
                  );
                  let [n, r] = (function (t) {
                    let e = ew.exec(t);
                    if (!e) return [,];
                    let [, i, s, n] = e;
                    return [`--${null != i ? i : s}`, n];
                  })(e);
                  if (!n) return;
                  let o = window.getComputedStyle(i).getPropertyValue(n);
                  if (o) {
                    let t = o.trim();
                    return eg(t) ? parseFloat(t) : t;
                  }
                  return ex(r) ? t(r, i, s + 1) : r;
                })(s, e.current);
                void 0 !== n && (t[i] = n),
                  i === t.length - 1 && (this.finalKeyframe = s);
              }
            }
            if ((this.resolveNoneKeyframes(), !$.has(i) || 2 !== t.length))
              return;
            let [s, n] = t,
              r = eS(s),
              o = eS(n);
            if (r !== o) {
              if (en(r) && en(o))
                for (let e = 0; e < t.length; e++) {
                  let i = t[e];
                  'string' == typeof i && (t[e] = parseFloat(i));
                }
              else this.needsMeasurement = !0;
            }
          }
          resolveNoneKeyframes() {
            let { unresolvedKeyframes: t, name: e } = this,
              i = [];
            for (let e = 0; e < t.length; e++) {
              var s;
              ('number' == typeof (s = t[e])
                ? 0 === s
                : null === s || 'none' === s || '0' === s || tE(s)) &&
                i.push(e);
            }
            i.length &&
              (function (t, e, i) {
                let s,
                  n = 0;
                for (; n < t.length && !s; ) {
                  let e = t[n];
                  'string' == typeof e &&
                    !es.has(e) &&
                    tJ(e).values.length &&
                    (s = t[n]),
                    n++;
                }
                if (s && i) for (let n of e) t[n] = ei(i, s);
              })(t, i, e);
          }
          measureInitialState() {
            let { element: t, unresolvedKeyframes: e, name: i } = this;
            if (!t || !t.current) return;
            'height' === i && (this.suspendedScrollY = window.pageYOffset),
              (this.measuredOrigin = eh[i](
                t.measureViewportBox(),
                window.getComputedStyle(t.current)
              )),
              (e[0] = this.measuredOrigin);
            let s = e[e.length - 1];
            void 0 !== s && t.getValue(i, s).jump(s, !1);
          }
          measureEndState() {
            var t;
            let { element: e, name: i, unresolvedKeyframes: s } = this;
            if (!e || !e.current) return;
            let n = e.getValue(i);
            n && n.jump(this.measuredOrigin, !1);
            let r = s.length - 1,
              o = s[r];
            (s[r] = eh[i](
              e.measureViewportBox(),
              window.getComputedStyle(e.current)
            )),
              null !== o &&
                void 0 === this.finalKeyframe &&
                (this.finalKeyframe = o),
              (null === (t = this.removedTransforms) || void 0 === t
                ? void 0
                : t.length) &&
                this.removedTransforms.forEach(([t, i]) => {
                  e.getValue(t).set(i);
                }),
              this.resolveNoneKeyframes();
          }
        }
        let eC = (t, e) =>
            'zIndex' !== e &&
            !!(
              'number' == typeof t ||
              Array.isArray(t) ||
              ('string' == typeof t &&
                (t2.test(t) || '0' === t) &&
                !t.startsWith('url('))
            ),
          eD = (t) => null !== t;
        function eM(t, { repeat: e, repeatType: i = 'loop' }, s) {
          let n = t.filter(eD),
            r = e && 'loop' !== i && e % 2 == 1 ? 0 : n.length - 1;
          return r && void 0 !== s ? s : n[r];
        }
        class eV {
          constructor({
            autoplay: t = !0,
            delay: e = 0,
            type: i = 'keyframes',
            repeat: s = 0,
            repeatDelay: n = 0,
            repeatType: r = 'loop',
            ...o
          }) {
            (this.isStopped = !1),
              (this.hasAttemptedResolve = !1),
              (this.createdAt = ti.now()),
              (this.options = {
                autoplay: t,
                delay: e,
                type: i,
                repeat: s,
                repeatDelay: n,
                repeatType: r,
                ...o,
              }),
              this.updateFinishedPromise();
          }
          calcStartTime() {
            return this.resolvedAt && this.resolvedAt - this.createdAt > 40
              ? this.resolvedAt
              : this.createdAt;
          }
          get resolved() {
            return (
              this._resolved || this.hasAttemptedResolve || (em(), ep()),
              this._resolved
            );
          }
          onKeyframesResolved(t, e) {
            (this.resolvedAt = ti.now()), (this.hasAttemptedResolve = !0);
            let {
              name: i,
              type: s,
              velocity: n,
              delay: r,
              onComplete: o,
              onUpdate: a,
              isGenerator: l,
            } = this.options;
            if (
              !l &&
              !(function (t, e, i, s) {
                let n = t[0];
                if (null === n) return !1;
                if ('display' === e || 'visibility' === e) return !0;
                let r = t[t.length - 1],
                  o = eC(n, e),
                  a = eC(r, e);
                return (
                  N(
                    o === a,
                    `You are trying to animate ${e} from "${n}" to "${r}". ${n} is not an animatable value - to enable this animation set ${n} to a value animatable to ${r} via the \`style\` property.`
                  ),
                  !!o &&
                    !!a &&
                    ((function (t) {
                      let e = t[0];
                      if (1 === t.length) return !0;
                      for (let i = 0; i < t.length; i++)
                        if (t[i] !== e) return !0;
                    })(t) ||
                      (('spring' === i || v(i)) && s))
                );
              })(t, i, s, n)
            ) {
              if (tm.current || !r) {
                a && a(eM(t, this.options, e)),
                  o && o(),
                  this.resolveFinishedPromise();
                return;
              }
              this.options.duration = 0;
            }
            let h = this.initPlayback(t, e);
            !1 !== h &&
              ((this._resolved = { keyframes: t, finalKeyframe: e, ...h }),
              this.onPostResolved());
          }
          onPostResolved() {}
          then(t, e) {
            return this.currentFinishedPromise.then(t, e);
          }
          flatten() {
            (this.options.type = 'keyframes'), (this.options.ease = 'linear');
          }
          updateFinishedPromise() {
            this.currentFinishedPromise = new Promise((t) => {
              this.resolveFinishedPromise = t;
            });
          }
        }
        let ej = { layout: 0, mainThread: 0, waapi: 0 },
          eR = (t, e, i) => t + (e - t) * i;
        function ek(t, e, i) {
          return (i < 0 && (i += 1), i > 1 && (i -= 1), i < 1 / 6)
            ? t + (e - t) * 6 * i
            : i < 0.5
              ? e
              : i < 2 / 3
                ? t + (e - t) * (2 / 3 - i) * 6
                : t;
        }
        function eB(t, e) {
          return (i) => (i > 0 ? e : t);
        }
        let eF = (t, e, i) => {
            let s = t * t,
              n = i * (e * e - s) + s;
            return n < 0 ? 0 : Math.sqrt(n);
          },
          eI = [tO, tU, tz],
          eL = (t) => eI.find((e) => e.test(t));
        function eU(t) {
          let e = eL(t);
          if (
            (N(
              !!e,
              `'${t}' is not an animatable color. Use the equivalent color code instead.`
            ),
            !e)
          )
            return !1;
          let i = e.parse(t);
          return (
            e === tz &&
              (i = (function ({
                hue: t,
                saturation: e,
                lightness: i,
                alpha: s,
              }) {
                (t /= 360), (i /= 100);
                let n = 0,
                  r = 0,
                  o = 0;
                if ((e /= 100)) {
                  let s = i < 0.5 ? i * (1 + e) : i + e - i * e,
                    a = 2 * i - s;
                  (n = ek(a, s, t + 1 / 3)),
                    (r = ek(a, s, t)),
                    (o = ek(a, s, t - 1 / 3));
                } else n = r = o = i;
                return {
                  red: Math.round(255 * n),
                  green: Math.round(255 * r),
                  blue: Math.round(255 * o),
                  alpha: s,
                };
              })(i)),
            i
          );
        }
        let eO = (t, e) => {
            let i = eU(t),
              s = eU(e);
            if (!i || !s) return eB(t, e);
            let n = { ...i };
            return (t) => (
              (n.red = eF(i.red, s.red, t)),
              (n.green = eF(i.green, s.green, t)),
              (n.blue = eF(i.blue, s.blue, t)),
              (n.alpha = eR(i.alpha, s.alpha, t)),
              tU.transform(n)
            );
          },
          eN = (t, e) => (i) => e(t(i)),
          eQ = (...t) => t.reduce(eN),
          eW = new Set(['none', 'hidden']);
        function e$(t, e) {
          return (i) => eR(t, e, i);
        }
        function eX(t) {
          return 'number' == typeof t
            ? e$
            : 'string' == typeof t
              ? ex(t)
                ? eB
                : tY.test(t)
                  ? eO
                  : ez
              : Array.isArray(t)
                ? eH
                : 'object' == typeof t
                  ? tY.test(t)
                    ? eO
                    : eG
                  : eB;
        }
        function eH(t, e) {
          let i = [...t],
            s = i.length,
            n = t.map((t, i) => eX(t)(t, e[i]));
          return (t) => {
            for (let e = 0; e < s; e++) i[e] = n[e](t);
            return i;
          };
        }
        function eG(t, e) {
          let i = { ...t, ...e },
            s = {};
          for (let n in i)
            void 0 !== t[n] && void 0 !== e[n] && (s[n] = eX(t[n])(t[n], e[n]));
          return (t) => {
            for (let e in s) i[e] = s[e](t);
            return i;
          };
        }
        let ez = (t, e) => {
          let i = t2.createTransformer(e),
            s = tJ(t),
            n = tJ(e);
          return s.indexes.var.length === n.indexes.var.length &&
            s.indexes.color.length === n.indexes.color.length &&
            s.indexes.number.length >= n.indexes.number.length
            ? (eW.has(t) && !n.values.length) || (eW.has(e) && !s.values.length)
              ? (function (t, e) {
                  return eW.has(t)
                    ? (i) => (i <= 0 ? t : e)
                    : (i) => (i >= 1 ? e : t);
                })(t, e)
              : eQ(
                  eH(
                    (function (t, e) {
                      var i;
                      let s = [],
                        n = { color: 0, var: 0, number: 0 };
                      for (let r = 0; r < e.values.length; r++) {
                        let o = e.types[r],
                          a = t.indexes[o][n[o]],
                          l =
                            null !== (i = t.values[a]) && void 0 !== i ? i : 0;
                        (s[r] = l), n[o]++;
                      }
                      return s;
                    })(s, n),
                    n.values
                  ),
                  i
                )
            : (N(
                !0,
                `Complex values '${t}' and '${e}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`
              ),
              eB(t, e));
        };
        function eY(t, e, i) {
          return 'number' == typeof t &&
            'number' == typeof e &&
            'number' == typeof i
            ? eR(t, e, i)
            : eX(t)(t, e);
        }
        function eq(t, e, i) {
          var s, n;
          let r = Math.max(e - 5, 0);
          return (s = i - t(r)), (n = e - r) ? (1e3 / n) * s : 0;
        }
        let eK = {
          stiffness: 100,
          damping: 10,
          mass: 1,
          velocity: 0,
          duration: 800,
          bounce: 0.3,
          visualDuration: 0.3,
          restSpeed: { granular: 0.01, default: 2 },
          restDelta: { granular: 0.005, default: 0.5 },
          minDuration: 0.01,
          maxDuration: 10,
          minDamping: 0.05,
          maxDamping: 1,
        };
        function e_(t, e) {
          return t * Math.sqrt(1 - e * e);
        }
        let eZ = ['duration', 'bounce'],
          eJ = ['stiffness', 'damping', 'mass'];
        function e0(t, e) {
          return e.some((e) => void 0 !== t[e]);
        }
        function e1(t = eK.visualDuration, e = eK.bounce) {
          let i;
          let s =
              'object' != typeof t
                ? { visualDuration: t, keyframes: [0, 1], bounce: e }
                : t,
            { restSpeed: n, restDelta: r } = s,
            o = s.keyframes[0],
            a = s.keyframes[s.keyframes.length - 1],
            l = { done: !1, value: o },
            {
              stiffness: h,
              damping: u,
              mass: d,
              duration: c,
              velocity: p,
              isResolvedFromDuration: m,
            } = (function (t) {
              let e = {
                velocity: eK.velocity,
                stiffness: eK.stiffness,
                damping: eK.damping,
                mass: eK.mass,
                isResolvedFromDuration: !1,
                ...t,
              };
              if (!e0(t, eJ) && e0(t, eZ)) {
                if (t.visualDuration) {
                  let i = (2 * Math.PI) / (1.2 * t.visualDuration),
                    s = i * i,
                    n = 2 * tC(0.05, 1, 1 - (t.bounce || 0)) * Math.sqrt(s);
                  e = { ...e, mass: eK.mass, stiffness: s, damping: n };
                } else {
                  let i = (function ({
                    duration: t = eK.duration,
                    bounce: e = eK.bounce,
                    velocity: i = eK.velocity,
                    mass: s = eK.mass,
                  }) {
                    let n, r;
                    N(
                      t <= U(eK.maxDuration),
                      'Spring duration must be 10 seconds or less'
                    );
                    let o = 1 - e;
                    (o = tC(eK.minDamping, eK.maxDamping, o)),
                      (t = tC(eK.minDuration, eK.maxDuration, O(t))),
                      o < 1
                        ? ((n = (e) => {
                            let s = e * o,
                              n = s * t;
                            return 0.001 - ((s - i) / e_(e, o)) * Math.exp(-n);
                          }),
                          (r = (e) => {
                            let s = e * o * t,
                              r = Math.pow(o, 2) * Math.pow(e, 2) * t,
                              a = Math.exp(-s),
                              l = e_(Math.pow(e, 2), o);
                            return (
                              ((s * i + i - r) *
                                a *
                                (-n(e) + 0.001 > 0 ? -1 : 1)) /
                              l
                            );
                          }))
                        : ((n = (e) =>
                            -0.001 + Math.exp(-e * t) * ((e - i) * t + 1)),
                          (r = (e) => t * t * (i - e) * Math.exp(-e * t)));
                    let a = (function (t, e, i) {
                      let s = i;
                      for (let i = 1; i < 12; i++) s -= t(s) / e(s);
                      return s;
                    })(n, r, 5 / t);
                    if (((t = U(t)), isNaN(a)))
                      return {
                        stiffness: eK.stiffness,
                        damping: eK.damping,
                        duration: t,
                      };
                    {
                      let e = Math.pow(a, 2) * s;
                      return {
                        stiffness: e,
                        damping: 2 * o * Math.sqrt(s * e),
                        duration: t,
                      };
                    }
                  })(t);
                  (e = { ...e, ...i, mass: eK.mass }).isResolvedFromDuration =
                    !0;
                }
              }
              return e;
            })({ ...s, velocity: -O(s.velocity || 0) }),
            f = p || 0,
            v = u / (2 * Math.sqrt(h * d)),
            A = a - o,
            y = O(Math.sqrt(h / d)),
            x = 5 > Math.abs(A);
          if (
            (n || (n = x ? eK.restSpeed.granular : eK.restSpeed.default),
            r || (r = x ? eK.restDelta.granular : eK.restDelta.default),
            v < 1)
          ) {
            let t = e_(y, v);
            i = (e) =>
              a -
              Math.exp(-v * y * e) *
                (((f + v * y * A) / t) * Math.sin(t * e) + A * Math.cos(t * e));
          } else if (1 === v)
            i = (t) => a - Math.exp(-y * t) * (A + (f + y * A) * t);
          else {
            let t = y * Math.sqrt(v * v - 1);
            i = (e) => {
              let i = Math.exp(-v * y * e),
                s = Math.min(t * e, 300);
              return (
                a -
                (i * ((f + v * y * A) * Math.sinh(s) + t * A * Math.cosh(s))) /
                  t
              );
            };
          }
          let P = {
            calculatedDuration: (m && c) || null,
            next: (t) => {
              let e = i(t);
              if (m) l.done = t >= c;
              else {
                let s = 0;
                v < 1 && (s = 0 === t ? U(f) : eq(i, t, e));
                let o = Math.abs(s) <= n,
                  h = Math.abs(a - e) <= r;
                l.done = o && h;
              }
              return (l.value = l.done ? a : e), l;
            },
            toString: () => {
              let t = Math.min(g(P), 2e4),
                e = b((e) => P.next(t * e).value, t, 30);
              return t + 'ms ' + e;
            },
          };
          return P;
        }
        function e3({
          keyframes: t,
          velocity: e = 0,
          power: i = 0.8,
          timeConstant: s = 325,
          bounceDamping: n = 10,
          bounceStiffness: r = 500,
          modifyTarget: o,
          min: a,
          max: l,
          restDelta: h = 0.5,
          restSpeed: u,
        }) {
          let d, c;
          let p = t[0],
            m = { done: !1, value: p },
            f = (t) => (void 0 !== a && t < a) || (void 0 !== l && t > l),
            g = (t) =>
              void 0 === a
                ? l
                : void 0 === l
                  ? a
                  : Math.abs(a - t) < Math.abs(l - t)
                    ? a
                    : l,
            v = i * e,
            A = p + v,
            y = void 0 === o ? A : o(A);
          y !== A && (v = y - p);
          let x = (t) => -v * Math.exp(-t / s),
            P = (t) => y + x(t),
            w = (t) => {
              let e = x(t),
                i = P(t);
              (m.done = Math.abs(e) <= h), (m.value = m.done ? y : i);
            },
            b = (t) => {
              f(m.value) &&
                ((d = t),
                (c = e1({
                  keyframes: [m.value, g(m.value)],
                  velocity: eq(P, t, m.value),
                  damping: n,
                  stiffness: r,
                  restDelta: h,
                  restSpeed: u,
                })));
            };
          return (
            b(0),
            {
              calculatedDuration: null,
              next: (t) => {
                let e = !1;
                return (c || void 0 !== d || ((e = !0), w(t), b(t)),
                void 0 !== d && t >= d)
                  ? c.next(t - d)
                  : (e || w(t), m);
              },
            }
          );
        }
        let e2 = tg(0.42, 0, 1, 1),
          e5 = tg(0, 0, 0.58, 1),
          e4 = tg(0.42, 0, 0.58, 1),
          e9 = (t) => Array.isArray(t) && 'number' != typeof t[0],
          e6 = {
            linear: N,
            easeIn: e2,
            easeInOut: e4,
            easeOut: e5,
            circIn: tb,
            circInOut: tS,
            circOut: tT,
            backIn: tx,
            backInOut: tP,
            backOut: ty,
            anticipate: tw,
          },
          e8 = (t) => {
            if (y(t)) {
              N(
                4 === t.length,
                'Cubic bezier arrays must contain four numerical values.'
              );
              let [e, i, s, n] = t;
              return tg(e, i, s, n);
            }
            return 'string' == typeof t
              ? (N(void 0 !== e6[t], `Invalid easing type '${t}'`), e6[t])
              : t;
          };
        function e7({
          duration: t = 300,
          keyframes: e,
          times: i,
          ease: s = 'easeInOut',
        }) {
          let n = e9(s) ? s.map(e8) : e8(s),
            r = { done: !1, value: e[0] },
            o = (function (t, e, { clamp: i = !0, ease: s, mixer: n } = {}) {
              let r = t.length;
              if (
                (N(
                  r === e.length,
                  'Both input and output ranges must be the same length'
                ),
                1 === r)
              )
                return () => e[0];
              if (2 === r && e[0] === e[1]) return () => e[1];
              let o = t[0] === t[1];
              t[0] > t[r - 1] &&
                ((t = [...t].reverse()), (e = [...e].reverse()));
              let a = (function (t, e, i) {
                  let s = [],
                    n = i || eY,
                    r = t.length - 1;
                  for (let i = 0; i < r; i++) {
                    let r = n(t[i], t[i + 1]);
                    e && (r = eQ(Array.isArray(e) ? e[i] || N : e, r)),
                      s.push(r);
                  }
                  return s;
                })(e, s, n),
                l = a.length,
                h = (i) => {
                  if (o && i < t[0]) return e[0];
                  let s = 0;
                  if (l > 1) for (; s < t.length - 2 && !(i < t[s + 1]); s++);
                  let n = w(t[s], t[s + 1], i);
                  return a[s](n);
                };
              return i ? (e) => h(tC(t[0], t[r - 1], e)) : h;
            })(
              (i && i.length === e.length
                ? i
                : (function (t) {
                    let e = [0];
                    return (
                      (function (t, e) {
                        let i = t[t.length - 1];
                        for (let s = 1; s <= e; s++) {
                          let n = w(0, e, s);
                          t.push(eR(i, 1, n));
                        }
                      })(e, t.length - 1),
                      e
                    );
                  })(e)
              ).map((e) => e * t),
              e,
              {
                ease: Array.isArray(n)
                  ? n
                  : e.map(() => n || e4).splice(0, e.length - 1),
              }
            );
          return {
            calculatedDuration: t,
            next: (e) => ((r.value = o(e)), (r.done = e >= t), r),
          };
        }
        let it = (t) => {
            let e = ({ timestamp: e }) => t(e);
            return {
              start: () => _.update(e, !0),
              stop: () => Z(e),
              now: () => (J.isProcessing ? J.timestamp : ti.now()),
            };
          },
          ie = { decay: e3, inertia: e3, tween: e7, keyframes: e7, spring: e1 },
          ii = (t) => t / 100;
        class is extends eV {
          constructor(t) {
            super(t),
              (this.holdTime = null),
              (this.cancelTime = null),
              (this.currentTime = 0),
              (this.playbackSpeed = 1),
              (this.pendingPlayState = 'running'),
              (this.startTime = null),
              (this.state = 'idle'),
              (this.stop = () => {
                if (
                  (this.resolver.cancel(),
                  (this.isStopped = !0),
                  'idle' === this.state)
                )
                  return;
                this.teardown();
                let { onStop: t } = this.options;
                t && t();
              });
            let {
                name: e,
                motionValue: i,
                element: s,
                keyframes: n,
              } = this.options,
              r = (null == s ? void 0 : s.KeyframeResolver) || ef;
            (this.resolver = new r(
              n,
              (t, e) => this.onKeyframesResolved(t, e),
              e,
              i,
              s
            )),
              this.resolver.scheduleResolve();
          }
          flatten() {
            super.flatten(),
              this._resolved &&
                Object.assign(
                  this._resolved,
                  this.initPlayback(this._resolved.keyframes)
                );
          }
          initPlayback(t) {
            let e, i;
            let {
                type: s = 'keyframes',
                repeat: n = 0,
                repeatDelay: r = 0,
                repeatType: o,
                velocity: a = 0,
              } = this.options,
              l = v(s) ? s : ie[s] || e7;
            l !== e7 &&
              'number' != typeof t[0] &&
              ((e = eQ(ii, eY(t[0], t[1]))), (t = [0, 100]));
            let h = l({ ...this.options, keyframes: t });
            'mirror' === o &&
              (i = l({
                ...this.options,
                keyframes: [...t].reverse(),
                velocity: -a,
              })),
              null === h.calculatedDuration && (h.calculatedDuration = g(h));
            let { calculatedDuration: u } = h,
              d = u + r;
            return {
              generator: h,
              mirroredGenerator: i,
              mapPercentToKeyframes: e,
              calculatedDuration: u,
              resolvedDuration: d,
              totalDuration: d * (n + 1) - r,
            };
          }
          onPostResolved() {
            let { autoplay: t = !0 } = this.options;
            ej.mainThread++,
              this.play(),
              'paused' !== this.pendingPlayState && t
                ? (this.state = this.pendingPlayState)
                : this.pause();
          }
          tick(t, e = !1) {
            let { resolved: i } = this;
            if (!i) {
              let { keyframes: t } = this.options;
              return { done: !0, value: t[t.length - 1] };
            }
            let {
              finalKeyframe: s,
              generator: n,
              mirroredGenerator: r,
              mapPercentToKeyframes: o,
              keyframes: a,
              calculatedDuration: l,
              totalDuration: h,
              resolvedDuration: u,
            } = i;
            if (null === this.startTime) return n.next(0);
            let {
              delay: d,
              repeat: c,
              repeatType: p,
              repeatDelay: m,
              onUpdate: f,
            } = this.options;
            this.speed > 0
              ? (this.startTime = Math.min(this.startTime, t))
              : this.speed < 0 &&
                (this.startTime = Math.min(t - h / this.speed, this.startTime)),
              e
                ? (this.currentTime = t)
                : null !== this.holdTime
                  ? (this.currentTime = this.holdTime)
                  : (this.currentTime =
                      Math.round(t - this.startTime) * this.speed);
            let g = this.currentTime - d * (this.speed >= 0 ? 1 : -1),
              v = this.speed >= 0 ? g < 0 : g > h;
            (this.currentTime = Math.max(g, 0)),
              'finished' === this.state &&
                null === this.holdTime &&
                (this.currentTime = h);
            let A = this.currentTime,
              y = n;
            if (c) {
              let t = Math.min(this.currentTime, h) / u,
                e = Math.floor(t),
                i = t % 1;
              !i && t >= 1 && (i = 1),
                1 === i && e--,
                (e = Math.min(e, c + 1)) % 2 &&
                  ('reverse' === p
                    ? ((i = 1 - i), m && (i -= m / u))
                    : 'mirror' === p && (y = r)),
                (A = tC(0, 1, i) * u);
            }
            let x = v ? { done: !1, value: a[0] } : y.next(A);
            o && (x.value = o(x.value));
            let { done: P } = x;
            v ||
              null === l ||
              (P =
                this.speed >= 0
                  ? this.currentTime >= h
                  : this.currentTime <= 0);
            let w =
              null === this.holdTime &&
              ('finished' === this.state || ('running' === this.state && P));
            return (
              w && void 0 !== s && (x.value = eM(a, this.options, s)),
              f && f(x.value),
              w && this.finish(),
              x
            );
          }
          get duration() {
            let { resolved: t } = this;
            return t ? O(t.calculatedDuration) : 0;
          }
          get time() {
            return O(this.currentTime);
          }
          set time(t) {
            (t = U(t)),
              (this.currentTime = t),
              null !== this.holdTime || 0 === this.speed
                ? (this.holdTime = t)
                : this.driver &&
                  (this.startTime = this.driver.now() - t / this.speed);
          }
          get speed() {
            return this.playbackSpeed;
          }
          set speed(t) {
            let e = this.playbackSpeed !== t;
            (this.playbackSpeed = t), e && (this.time = O(this.currentTime));
          }
          play() {
            if (
              (this.resolver.isScheduled || this.resolver.resume(),
              !this._resolved)
            ) {
              this.pendingPlayState = 'running';
              return;
            }
            if (this.isStopped) return;
            let { driver: t = it, onPlay: e, startTime: i } = this.options;
            this.driver || (this.driver = t((t) => this.tick(t))), e && e();
            let s = this.driver.now();
            null !== this.holdTime
              ? (this.startTime = s - this.holdTime)
              : this.startTime
                ? 'finished' === this.state && (this.startTime = s)
                : (this.startTime = null != i ? i : this.calcStartTime()),
              'finished' === this.state && this.updateFinishedPromise(),
              (this.cancelTime = this.startTime),
              (this.holdTime = null),
              (this.state = 'running'),
              this.driver.start();
          }
          pause() {
            var t;
            if (!this._resolved) {
              this.pendingPlayState = 'paused';
              return;
            }
            (this.state = 'paused'),
              (this.holdTime =
                null !== (t = this.currentTime) && void 0 !== t ? t : 0);
          }
          complete() {
            'running' !== this.state && this.play(),
              (this.pendingPlayState = this.state = 'finished'),
              (this.holdTime = null);
          }
          finish() {
            this.teardown(), (this.state = 'finished');
            let { onComplete: t } = this.options;
            t && t();
          }
          cancel() {
            null !== this.cancelTime && this.tick(this.cancelTime),
              this.teardown(),
              this.updateFinishedPromise();
          }
          teardown() {
            (this.state = 'idle'),
              this.stopDriver(),
              this.resolveFinishedPromise(),
              this.updateFinishedPromise(),
              (this.startTime = this.cancelTime = null),
              this.resolver.cancel(),
              ej.mainThread--;
          }
          stopDriver() {
            this.driver && (this.driver.stop(), (this.driver = void 0));
          }
          sample(t) {
            return (this.startTime = 0), this.tick(t, !0);
          }
        }
        let ir = new Set(['opacity', 'clipPath', 'filter', 'transform']),
          io = d(() =>
            Object.hasOwnProperty.call(Element.prototype, 'animate')
          ),
          ia = { anticipate: tw, backInOut: tP, circInOut: tS };
        class il extends eV {
          constructor(t) {
            super(t);
            let {
              name: e,
              motionValue: i,
              element: s,
              keyframes: n,
            } = this.options;
            (this.resolver = new eE(
              n,
              (t, e) => this.onKeyframesResolved(t, e),
              e,
              i,
              s
            )),
              this.resolver.scheduleResolve();
          }
          initPlayback(t, e) {
            var i;
            let {
              duration: s = 300,
              times: n,
              ease: r,
              type: o,
              motionValue: a,
              name: l,
              startTime: h,
            } = this.options;
            if (!a.owner || !a.owner.current) return !1;
            if (
              ('string' == typeof r && P() && r in ia && (r = ia[r]),
              v((i = this.options).type) ||
                'spring' === i.type ||
                !(function t(e) {
                  return !!(
                    ('function' == typeof e && P()) ||
                    !e ||
                    ('string' == typeof e && (e in S || P())) ||
                    y(e) ||
                    (Array.isArray(e) && e.every(t))
                  );
                })(i.ease))
            ) {
              let {
                  onComplete: e,
                  onUpdate: i,
                  motionValue: a,
                  element: l,
                  ...h
                } = this.options,
                u = (function (t, e) {
                  let i = new is({
                      ...e,
                      keyframes: t,
                      repeat: 0,
                      delay: 0,
                      isGenerator: !0,
                    }),
                    s = { done: !1, value: t[0] },
                    n = [],
                    r = 0;
                  for (; !s.done && r < 2e4; )
                    n.push((s = i.sample(r)).value), (r += 10);
                  return {
                    times: void 0,
                    keyframes: n,
                    duration: r - 10,
                    ease: 'linear',
                  };
                })(t, h);
              1 === (t = u.keyframes).length && (t[1] = t[0]),
                (s = u.duration),
                (n = u.times),
                (r = u.ease),
                (o = 'keyframes');
            }
            let u = (function (
              t,
              e,
              i,
              {
                delay: s = 0,
                duration: n = 300,
                repeat: r = 0,
                repeatType: o = 'loop',
                ease: a = 'easeInOut',
                times: l,
              } = {}
            ) {
              let h = { [e]: i };
              l && (h.offset = l);
              let u = (function t(e, i) {
                if (e)
                  return 'function' == typeof e && P()
                    ? b(e, i)
                    : y(e)
                      ? T(e)
                      : Array.isArray(e)
                        ? e.map((e) => t(e, i) || S.easeOut)
                        : S[e];
              })(a, n);
              Array.isArray(u) && (h.easing = u), q.value && ej.waapi++;
              let d = t.animate(h, {
                delay: s,
                duration: n,
                easing: Array.isArray(u) ? 'linear' : u,
                fill: 'both',
                iterations: r + 1,
                direction: 'reverse' === o ? 'alternate' : 'normal',
              });
              return (
                q.value &&
                  d.finished.finally(() => {
                    ej.waapi--;
                  }),
                d
              );
            })(a.owner.current, l, t, {
              ...this.options,
              duration: s,
              times: n,
              ease: r,
            });
            return (
              (u.startTime = null != h ? h : this.calcStartTime()),
              this.pendingTimeline
                ? (A(u, this.pendingTimeline), (this.pendingTimeline = void 0))
                : (u.onfinish = () => {
                    let { onComplete: i } = this.options;
                    a.set(eM(t, this.options, e)),
                      i && i(),
                      this.cancel(),
                      this.resolveFinishedPromise();
                  }),
              {
                animation: u,
                duration: s,
                times: n,
                type: o,
                ease: r,
                keyframes: t,
              }
            );
          }
          get duration() {
            let { resolved: t } = this;
            if (!t) return 0;
            let { duration: e } = t;
            return O(e);
          }
          get time() {
            let { resolved: t } = this;
            if (!t) return 0;
            let { animation: e } = t;
            return O(e.currentTime || 0);
          }
          set time(t) {
            let { resolved: e } = this;
            if (!e) return;
            let { animation: i } = e;
            i.currentTime = U(t);
          }
          get speed() {
            let { resolved: t } = this;
            if (!t) return 1;
            let { animation: e } = t;
            return e.playbackRate;
          }
          set speed(t) {
            let { resolved: e } = this;
            if (!e) return;
            let { animation: i } = e;
            i.playbackRate = t;
          }
          get state() {
            let { resolved: t } = this;
            if (!t) return 'idle';
            let { animation: e } = t;
            return e.playState;
          }
          get startTime() {
            let { resolved: t } = this;
            if (!t) return null;
            let { animation: e } = t;
            return e.startTime;
          }
          attachTimeline(t) {
            if (this._resolved) {
              let { resolved: e } = this;
              if (!e) return N;
              let { animation: i } = e;
              A(i, t);
            } else this.pendingTimeline = t;
            return N;
          }
          play() {
            if (this.isStopped) return;
            let { resolved: t } = this;
            if (!t) return;
            let { animation: e } = t;
            'finished' === e.playState && this.updateFinishedPromise(),
              e.play();
          }
          pause() {
            let { resolved: t } = this;
            if (!t) return;
            let { animation: e } = t;
            e.pause();
          }
          stop() {
            if (
              (this.resolver.cancel(),
              (this.isStopped = !0),
              'idle' === this.state)
            )
              return;
            this.resolveFinishedPromise(), this.updateFinishedPromise();
            let { resolved: t } = this;
            if (!t) return;
            let {
              animation: e,
              keyframes: i,
              duration: s,
              type: n,
              ease: r,
              times: o,
            } = t;
            if ('idle' === e.playState || 'finished' === e.playState) return;
            if (this.time) {
              let {
                  motionValue: t,
                  onUpdate: e,
                  onComplete: a,
                  element: l,
                  ...h
                } = this.options,
                u = new is({
                  ...h,
                  keyframes: i,
                  duration: s,
                  type: n,
                  ease: r,
                  times: o,
                  isGenerator: !0,
                }),
                d = U(this.time);
              t.setWithVelocity(u.sample(d - 10).value, u.sample(d).value, 10);
            }
            let { onStop: a } = this.options;
            a && a(), this.cancel();
          }
          complete() {
            let { resolved: t } = this;
            t && t.animation.finish();
          }
          cancel() {
            let { resolved: t } = this;
            t && t.animation.cancel();
          }
          static supports(t) {
            let {
              motionValue: e,
              name: i,
              repeatDelay: s,
              repeatType: n,
              damping: r,
              type: o,
            } = t;
            if (!e || !e.owner || !(e.owner.current instanceof HTMLElement))
              return !1;
            let { onUpdate: a, transformTemplate: l } = e.owner.getProps();
            return (
              io() &&
              i &&
              ir.has(i) &&
              !a &&
              !l &&
              !s &&
              'mirror' !== n &&
              0 !== r &&
              'inertia' !== o
            );
          }
        }
        let ih = { type: 'spring', stiffness: 500, damping: 25, restSpeed: 10 },
          iu = (t) => ({
            type: 'spring',
            stiffness: 550,
            damping: 0 === t ? 2 * Math.sqrt(550) : 30,
            restSpeed: 10,
          }),
          id = { type: 'keyframes', duration: 0.8 },
          ic = { type: 'keyframes', ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
          ip = (t, { keyframes: e }) =>
            e.length > 2
              ? id
              : W.has(t)
                ? t.startsWith('scale')
                  ? iu(e[1])
                  : ih
                : ic,
          im =
            (t, e, i, s = {}, n, r) =>
            (o) => {
              let a = f(s, t) || {},
                l = a.delay || s.delay || 0,
                { elapsed: h = 0 } = s;
              h -= U(l);
              let u = {
                keyframes: Array.isArray(i) ? i : [null, i],
                ease: 'easeOut',
                velocity: e.getVelocity(),
                ...a,
                delay: -h,
                onUpdate: (t) => {
                  e.set(t), a.onUpdate && a.onUpdate(t);
                },
                onComplete: () => {
                  o(), a.onComplete && a.onComplete();
                },
                name: t,
                motionValue: e,
                element: r ? void 0 : n,
              };
              !(function ({
                when: t,
                delay: e,
                delayChildren: i,
                staggerChildren: s,
                staggerDirection: n,
                repeat: r,
                repeatType: o,
                repeatDelay: a,
                from: l,
                elapsed: h,
                ...u
              }) {
                return !!Object.keys(u).length;
              })(a) && (u = { ...u, ...ip(t, u) }),
                u.duration && (u.duration = U(u.duration)),
                u.repeatDelay && (u.repeatDelay = U(u.repeatDelay)),
                void 0 !== u.from && (u.keyframes[0] = u.from);
              let d = !1;
              if (
                ((!1 !== u.type && (0 !== u.duration || u.repeatDelay)) ||
                  ((u.duration = 0), 0 !== u.delay || (d = !0)),
                (tm.current || z.skipAnimations) &&
                  ((d = !0), (u.duration = 0), (u.delay = 0)),
                d && !r && void 0 !== e.get())
              ) {
                let t = eM(u.keyframes, a);
                if (void 0 !== t)
                  return (
                    _.update(() => {
                      u.onUpdate(t), u.onComplete();
                    }),
                    new m([])
                  );
              }
              return !r && il.supports(u) ? new il(u) : new is(u);
            };
        function ig(
          t,
          e,
          { delay: i = 0, transitionOverride: s, type: n } = {}
        ) {
          var r;
          let {
            transition: o = t.getDefaultTransition(),
            transitionEnd: a,
            ...l
          } = e;
          s && (o = s);
          let h = [],
            d = n && t.animationState && t.animationState.getState()[n];
          for (let e in l) {
            let s = t.getValue(
                e,
                null !== (r = t.latestValues[e]) && void 0 !== r ? r : null
              ),
              n = l[e];
            if (
              void 0 === n ||
              (d &&
                (function ({ protectedKeys: t, needsAnimating: e }, i) {
                  let s = t.hasOwnProperty(i) && !0 !== e[i];
                  return (e[i] = !1), s;
                })(d, e))
            )
              continue;
            let a = { delay: i, ...f(o || {}, e) },
              u = !1;
            if (window.MotionHandoffAnimation) {
              let i = t.props[tp];
              if (i) {
                let t = window.MotionHandoffAnimation(i, e, _);
                null !== t && ((a.startTime = t), (u = !0));
              }
            }
            td(t, e),
              s.start(
                im(
                  e,
                  s,
                  n,
                  t.shouldReduceMotion && $.has(e) ? { type: !1 } : a,
                  t,
                  u
                )
              );
            let c = s.animation;
            c && h.push(c);
          }
          return (
            a &&
              Promise.all(h).then(() => {
                _.update(() => {
                  a &&
                    (function (t, e) {
                      let {
                        transitionEnd: i = {},
                        transition: s = {},
                        ...n
                      } = u(t, e) || {};
                      for (let e in (n = { ...n, ...i })) {
                        let i = G(n[e]);
                        t.hasValue(e)
                          ? t.getValue(e).set(i)
                          : t.addValue(e, th(i));
                      }
                    })(t, a);
                });
              }),
            h
          );
        }
        function iv(t, e, i = {}) {
          var s;
          let n = u(
              t,
              e,
              'exit' === i.type
                ? null === (s = t.presenceContext) || void 0 === s
                  ? void 0
                  : s.custom
                : void 0
            ),
            { transition: r = t.getDefaultTransition() || {} } = n || {};
          i.transitionOverride && (r = i.transitionOverride);
          let o = n ? () => Promise.all(ig(t, n, i)) : () => Promise.resolve(),
            a =
              t.variantChildren && t.variantChildren.size
                ? (s = 0) => {
                    let {
                      delayChildren: n = 0,
                      staggerChildren: o,
                      staggerDirection: a,
                    } = r;
                    return (function (t, e, i = 0, s = 0, n = 1, r) {
                      let o = [],
                        a = (t.variantChildren.size - 1) * s,
                        l = 1 === n ? (t = 0) => t * s : (t = 0) => a - t * s;
                      return (
                        Array.from(t.variantChildren)
                          .sort(iA)
                          .forEach((t, s) => {
                            t.notify('AnimationStart', e),
                              o.push(
                                iv(t, e, { ...r, delay: i + l(s) }).then(() =>
                                  t.notify('AnimationComplete', e)
                                )
                              );
                          }),
                        Promise.all(o)
                      );
                    })(t, e, n + s, o, a, i);
                  }
                : () => Promise.resolve(),
            { when: l } = r;
          if (!l) return Promise.all([o(), a(i.delay)]);
          {
            let [t, e] = 'beforeChildren' === l ? [o, a] : [a, o];
            return t().then(() => e());
          }
        }
        function iA(t, e) {
          return t.sortNodePosition(e);
        }
        function iy(t, e) {
          if (!Array.isArray(e)) return !1;
          let i = e.length;
          if (i !== t.length) return !1;
          for (let s = 0; s < i; s++) if (e[s] !== t[s]) return !1;
          return !0;
        }
        function ix(t) {
          return 'string' == typeof t || Array.isArray(t);
        }
        let iP = [
            'animate',
            'whileInView',
            'whileFocus',
            'whileHover',
            'whileTap',
            'whileDrag',
            'exit',
          ],
          iw = ['initial', ...iP],
          ib = iw.length,
          iT = [...iP].reverse(),
          iS = iP.length;
        function iE(t = !1) {
          return {
            isActive: t,
            protectedKeys: {},
            needsAnimating: {},
            prevResolvedValues: {},
          };
        }
        function iC() {
          return {
            animate: iE(!0),
            whileInView: iE(),
            whileHover: iE(),
            whileTap: iE(),
            whileDrag: iE(),
            whileFocus: iE(),
            exit: iE(),
          };
        }
        class iD {
          constructor(t) {
            (this.isMounted = !1), (this.node = t);
          }
          update() {}
        }
        class iM extends iD {
          constructor(t) {
            super(t),
              t.animationState ||
                (t.animationState = (function (t) {
                  let e = (e) =>
                      Promise.all(
                        e.map(({ animation: e, options: i }) =>
                          (function (t, e, i = {}) {
                            let s;
                            if (
                              (t.notify('AnimationStart', e), Array.isArray(e))
                            )
                              s = Promise.all(e.map((e) => iv(t, e, i)));
                            else if ('string' == typeof e) s = iv(t, e, i);
                            else {
                              let n =
                                'function' == typeof e ? u(t, e, i.custom) : e;
                              s = Promise.all(ig(t, n, i));
                            }
                            return s.then(() => {
                              t.notify('AnimationComplete', e);
                            });
                          })(t, e, i)
                        )
                      ),
                    i = iC(),
                    s = !0,
                    n = (e) => (i, s) => {
                      var n;
                      let r = u(
                        t,
                        s,
                        'exit' === e
                          ? null === (n = t.presenceContext) || void 0 === n
                            ? void 0
                            : n.custom
                          : void 0
                      );
                      if (r) {
                        let { transition: t, transitionEnd: e, ...s } = r;
                        i = { ...i, ...s, ...e };
                      }
                      return i;
                    };
                  function r(r) {
                    let { props: o } = t,
                      a =
                        (function t(e) {
                          if (!e) return;
                          if (!e.isControllingVariants) {
                            let i = (e.parent && t(e.parent)) || {};
                            return (
                              void 0 !== e.props.initial &&
                                (i.initial = e.props.initial),
                              i
                            );
                          }
                          let i = {};
                          for (let t = 0; t < ib; t++) {
                            let s = iw[t],
                              n = e.props[s];
                            (ix(n) || !1 === n) && (i[s] = n);
                          }
                          return i;
                        })(t.parent) || {},
                      h = [],
                      d = new Set(),
                      c = {},
                      p = 1 / 0;
                    for (let e = 0; e < iS; e++) {
                      var m;
                      let u = iT[e],
                        f = i[u],
                        g = void 0 !== o[u] ? o[u] : a[u],
                        v = ix(g),
                        A = u === r ? f.isActive : null;
                      !1 === A && (p = e);
                      let y = g === a[u] && g !== o[u] && v;
                      if (
                        (y && s && t.manuallyAnimateOnMount && (y = !1),
                        (f.protectedKeys = { ...c }),
                        (!f.isActive && null === A) ||
                          (!g && !f.prevProp) ||
                          l(g) ||
                          'boolean' == typeof g)
                      )
                        continue;
                      let x =
                          ((m = f.prevProp),
                          'string' == typeof g
                            ? g !== m
                            : !!Array.isArray(g) && !iy(g, m)),
                        P =
                          x ||
                          (u === r && f.isActive && !y && v) ||
                          (e > p && v),
                        w = !1,
                        b = Array.isArray(g) ? g : [g],
                        T = b.reduce(n(u), {});
                      !1 === A && (T = {});
                      let { prevResolvedValues: S = {} } = f,
                        E = { ...S, ...T },
                        C = (e) => {
                          (P = !0),
                            d.has(e) && ((w = !0), d.delete(e)),
                            (f.needsAnimating[e] = !0);
                          let i = t.getValue(e);
                          i && (i.liveStyle = !1);
                        };
                      for (let t in E) {
                        let e = T[t],
                          i = S[t];
                        if (!c.hasOwnProperty(t))
                          (X(e) && X(i) ? iy(e, i) : e === i)
                            ? void 0 !== e && d.has(t)
                              ? C(t)
                              : (f.protectedKeys[t] = !0)
                            : null != e
                              ? C(t)
                              : d.add(t);
                      }
                      (f.prevProp = g),
                        (f.prevResolvedValues = T),
                        f.isActive && (c = { ...c, ...T }),
                        s && t.blockInitialAnimation && (P = !1);
                      let D = !(y && x) || w;
                      P &&
                        D &&
                        h.push(
                          ...b.map((t) => ({
                            animation: t,
                            options: { type: u },
                          }))
                        );
                    }
                    if (d.size) {
                      let e = {};
                      if ('boolean' != typeof o.initial) {
                        let i = u(
                          t,
                          Array.isArray(o.initial) ? o.initial[0] : o.initial
                        );
                        i && i.transition && (e.transition = i.transition);
                      }
                      d.forEach((i) => {
                        let s = t.getBaseTarget(i),
                          n = t.getValue(i);
                        n && (n.liveStyle = !0), (e[i] = null != s ? s : null);
                      }),
                        h.push({ animation: e });
                    }
                    let f = !!h.length;
                    return (
                      s &&
                        (!1 === o.initial || o.initial === o.animate) &&
                        !t.manuallyAnimateOnMount &&
                        (f = !1),
                      (s = !1),
                      f ? e(h) : Promise.resolve()
                    );
                  }
                  return {
                    animateChanges: r,
                    setActive: function (e, s) {
                      var n;
                      if (i[e].isActive === s) return Promise.resolve();
                      null === (n = t.variantChildren) ||
                        void 0 === n ||
                        n.forEach((t) => {
                          var i;
                          return null === (i = t.animationState) || void 0 === i
                            ? void 0
                            : i.setActive(e, s);
                        }),
                        (i[e].isActive = s);
                      let o = r(e);
                      for (let t in i) i[t].protectedKeys = {};
                      return o;
                    },
                    setAnimateFunction: function (i) {
                      e = i(t);
                    },
                    getState: () => i,
                    reset: () => {
                      (i = iC()), (s = !0);
                    },
                  };
                })(t));
          }
          updateAnimationControlsSubscription() {
            let { animate: t } = this.node.getProps();
            l(t) && (this.unmountControls = t.subscribe(this.node));
          }
          mount() {
            this.updateAnimationControlsSubscription();
          }
          update() {
            let { animate: t } = this.node.getProps(),
              { animate: e } = this.node.prevProps || {};
            t !== e && this.updateAnimationControlsSubscription();
          }
          unmount() {
            var t;
            this.node.animationState.reset(),
              null === (t = this.unmountControls) ||
                void 0 === t ||
                t.call(this);
          }
        }
        let iV = 0;
        class ij extends iD {
          constructor() {
            super(...arguments), (this.id = iV++);
          }
          update() {
            if (!this.node.presenceContext) return;
            let { isPresent: t, onExitComplete: e } = this.node.presenceContext,
              { isPresent: i } = this.node.prevPresenceContext || {};
            if (!this.node.animationState || t === i) return;
            let s = this.node.animationState.setActive('exit', !t);
            e &&
              !t &&
              s.then(() => {
                e(this.id);
              });
          }
          mount() {
            let { register: t, onExitComplete: e } =
              this.node.presenceContext || {};
            e && e(this.id), t && (this.unmount = t(this.id));
          }
          unmount() {}
        }
        function iR(t, e, i, s = { passive: !0 }) {
          return t.addEventListener(e, i, s), () => t.removeEventListener(e, i);
        }
        function ik(t) {
          return { point: { x: t.pageX, y: t.pageY } };
        }
        let iB = (t) => (e) => j(e) && t(e, ik(e));
        function iF(t, e, i, s) {
          return iR(t, e, iB(i), s);
        }
        function iI({ top: t, left: e, right: i, bottom: s }) {
          return { x: { min: e, max: i }, y: { min: t, max: s } };
        }
        function iL(t) {
          return t.max - t.min;
        }
        function iU(t, e, i, s = 0.5) {
          (t.origin = s),
            (t.originPoint = eR(e.min, e.max, t.origin)),
            (t.scale = iL(i) / iL(e)),
            (t.translate = eR(i.min, i.max, t.origin) - t.originPoint),
            ((t.scale >= 0.9999 && t.scale <= 1.0001) || isNaN(t.scale)) &&
              (t.scale = 1),
            ((t.translate >= -0.01 && t.translate <= 0.01) ||
              isNaN(t.translate)) &&
              (t.translate = 0);
        }
        function iO(t, e, i, s) {
          iU(t.x, e.x, i.x, s ? s.originX : void 0),
            iU(t.y, e.y, i.y, s ? s.originY : void 0);
        }
        function iN(t, e, i) {
          (t.min = i.min + e.min), (t.max = t.min + iL(e));
        }
        function iQ(t, e, i) {
          (t.min = e.min - i.min), (t.max = t.min + iL(e));
        }
        function iW(t, e, i) {
          iQ(t.x, e.x, i.x), iQ(t.y, e.y, i.y);
        }
        let i$ = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
          iX = () => ({ x: i$(), y: i$() }),
          iH = () => ({ min: 0, max: 0 }),
          iG = () => ({ x: iH(), y: iH() });
        function iz(t) {
          return [t('x'), t('y')];
        }
        function iY(t) {
          return void 0 === t || 1 === t;
        }
        function iq({ scale: t, scaleX: e, scaleY: i }) {
          return !iY(t) || !iY(e) || !iY(i);
        }
        function iK(t) {
          return (
            iq(t) ||
            i_(t) ||
            t.z ||
            t.rotate ||
            t.rotateX ||
            t.rotateY ||
            t.skewX ||
            t.skewY
          );
        }
        function i_(t) {
          var e, i;
          return ((e = t.x) && '0%' !== e) || ((i = t.y) && '0%' !== i);
        }
        function iZ(t, e, i, s, n) {
          return void 0 !== n && (t = s + n * (t - s)), s + i * (t - s) + e;
        }
        function iJ(t, e = 0, i = 1, s, n) {
          (t.min = iZ(t.min, e, i, s, n)), (t.max = iZ(t.max, e, i, s, n));
        }
        function i0(t, { x: e, y: i }) {
          iJ(t.x, e.translate, e.scale, e.originPoint),
            iJ(t.y, i.translate, i.scale, i.originPoint);
        }
        function i1(t, e) {
          (t.min = t.min + e), (t.max = t.max + e);
        }
        function i3(t, e, i, s, n = 0.5) {
          let r = eR(t.min, t.max, n);
          iJ(t, e, i, r, s);
        }
        function i2(t, e) {
          i3(t.x, e.x, e.scaleX, e.scale, e.originX),
            i3(t.y, e.y, e.scaleY, e.scale, e.originY);
        }
        function i5(t, e) {
          return iI(
            (function (t, e) {
              if (!e) return t;
              let i = e({ x: t.left, y: t.top }),
                s = e({ x: t.right, y: t.bottom });
              return { top: i.y, left: i.x, bottom: s.y, right: s.x };
            })(t.getBoundingClientRect(), e)
          );
        }
        function i4(t) {
          return (
            t &&
            'object' == typeof t &&
            Object.prototype.hasOwnProperty.call(t, 'current')
          );
        }
        let i9 = (t, e) => Math.abs(t - e);
        class i6 {
          constructor(
            t,
            e,
            { transformPagePoint: i, dragSnapToOrigin: s = !1 } = {}
          ) {
            if (
              ((this.startEvent = null),
              (this.lastMoveEvent = null),
              (this.lastMoveEventInfo = null),
              (this.handlers = {}),
              (this.updatePoint = () => {
                if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
                let t = st(this.lastMoveEventInfo, this.history),
                  e = null !== this.startEvent,
                  i =
                    (function (t, e) {
                      return Math.sqrt(i9(t.x, e.x) ** 2 + i9(t.y, e.y) ** 2);
                    })(t.offset, { x: 0, y: 0 }) >= 3;
                if (!e && !i) return;
                let { point: s } = t,
                  { timestamp: n } = J;
                this.history.push({ ...s, timestamp: n });
                let { onStart: r, onMove: o } = this.handlers;
                e ||
                  (r && r(this.lastMoveEvent, t),
                  (this.startEvent = this.lastMoveEvent)),
                  o && o(this.lastMoveEvent, t);
              }),
              (this.handlePointerMove = (t, e) => {
                if (
                  ((this.index = si(t.currentTarget)),
                  t.target instanceof Element &&
                    t.target.hasPointerCapture &&
                    void 0 !== t.pointerId)
                )
                  try {
                    if (!t.target.hasPointerCapture(t.pointerId)) return;
                  } catch (t) {}
                (this.lastMoveEvent = t),
                  (this.lastMoveEventInfo = i8(e, this.transformPagePoint)),
                  _.update(this.updatePoint, !0);
              }),
              (this.handlePointerUp = (t, e) => {
                M(t, 'release'), this.end();
                let {
                  onEnd: i,
                  onSessionEnd: s,
                  resumeAnimation: n,
                } = this.handlers;
                if (
                  (this.dragSnapToOrigin && n && n(),
                  !(this.lastMoveEvent && this.lastMoveEventInfo))
                )
                  return;
                let r = st(
                  'pointercancel' === t.type || 'lostpointercapture' === t.type
                    ? this.lastMoveEventInfo
                    : i8(e, this.transformPagePoint),
                  this.history
                );
                this.startEvent && i && i(t, r), s && s(t, r);
              }),
              !j(t))
            )
              return;
            (this.dragSnapToOrigin = s),
              (this.handlers = e),
              (this.transformPagePoint = i);
            let n = i8(ik(t), this.transformPagePoint),
              { point: r } = n,
              { timestamp: o } = J;
            this.history = [{ ...r, timestamp: o }];
            let { onSessionStart: a } = e;
            a && a(t, st(n, this.history)),
              M(t, 'set'),
              (this.removeListeners = eQ(
                iF(t.currentTarget, 'pointermove', this.handlePointerMove),
                iF(t.currentTarget, 'pointerup', this.handlePointerUp),
                iF(t.currentTarget, 'pointercancel', this.handlePointerUp),
                iF(t.currentTarget, 'lostpointercapture', (t, e) => {
                  si(t.currentTarget) !== this.index
                    ? M(t, 'set')
                    : this.handlePointerUp(t, e);
                })
              ));
          }
          updateHandlers(t) {
            this.handlers = t;
          }
          end() {
            this.removeListeners && this.removeListeners(), Z(this.updatePoint);
          }
        }
        function i8(t, e) {
          return e ? { point: e(t.point) } : t;
        }
        function i7(t, e) {
          return { x: t.x - e.x, y: t.y - e.y };
        }
        function st({ point: t }, e) {
          return {
            point: t,
            delta: i7(t, se(e)),
            offset: i7(t, e[0]),
            velocity: (function (t, e) {
              if (t.length < 2) return { x: 0, y: 0 };
              let i = t.length - 1,
                s = null,
                n = se(t);
              for (
                ;
                i >= 0 && ((s = t[i]), !(n.timestamp - s.timestamp > U(0.1)));

              )
                i--;
              if (!s) return { x: 0, y: 0 };
              let r = O(n.timestamp - s.timestamp);
              if (0 === r) return { x: 0, y: 0 };
              let o = { x: (n.x - s.x) / r, y: (n.y - s.y) / r };
              return o.x === 1 / 0 && (o.x = 0), o.y === 1 / 0 && (o.y = 0), o;
            })(e, 0),
          };
        }
        function se(t) {
          return t[t.length - 1];
        }
        function si(t) {
          return t.parentNode
            ? Array.from(t.parentNode.children).indexOf(t)
            : -1;
        }
        function ss(t, e, i) {
          return {
            min: void 0 !== e ? t.min + e : void 0,
            max: void 0 !== i ? t.max + i - (t.max - t.min) : void 0,
          };
        }
        function sn(t, e) {
          let i = e.min - t.min,
            s = e.max - t.max;
          return (
            e.max - e.min < t.max - t.min && ([i, s] = [s, i]),
            { min: i, max: s }
          );
        }
        function sr(t, e, i) {
          return { min: so(t, e), max: so(t, i) };
        }
        function so(t, e) {
          return 'number' == typeof t ? t : t[e] || 0;
        }
        let sa = new WeakMap();
        class sl {
          constructor(t) {
            (this.openDragLock = null),
              (this.isDragging = !1),
              (this.currentDirection = null),
              (this.originPoint = { x: 0, y: 0 }),
              (this.constraints = !1),
              (this.hasMutatedConstraints = !1),
              (this.elastic = iG()),
              (this.visualElement = t);
          }
          start(t, { snapToCursor: e = !1 } = {}) {
            let { presenceContext: i } = this.visualElement;
            if (i && !1 === i.isPresent) return;
            let { dragSnapToOrigin: s } = this.getProps();
            this.panSession = new i6(
              t,
              {
                onSessionStart: (t) => {
                  let { dragSnapToOrigin: i } = this.getProps();
                  i ? this.pauseAnimation() : this.stopAnimation(),
                    e && this.snapToCursor(ik(t).point);
                },
                onStart: (t, e) => {
                  let {
                    drag: i,
                    dragPropagation: s,
                    onDragStart: n,
                  } = this.getProps();
                  if (
                    i &&
                    !s &&
                    (this.openDragLock && this.openDragLock(),
                    (this.openDragLock =
                      'x' === i || 'y' === i
                        ? E[i]
                          ? null
                          : ((E[i] = !0),
                            () => {
                              E[i] = !1;
                            })
                        : E.x || E.y
                          ? null
                          : ((E.x = E.y = !0),
                            () => {
                              E.x = E.y = !1;
                            })),
                    !this.openDragLock)
                  )
                    return;
                  (this.isDragging = !0),
                    (this.currentDirection = null),
                    this.resolveConstraints(),
                    this.visualElement.projection &&
                      ((this.visualElement.projection.isAnimationBlocked = !0),
                      (this.visualElement.projection.target = void 0)),
                    iz((t) => {
                      let e = this.getAxisMotionValue(t).get() || 0;
                      if (tW.test(e)) {
                        let { projection: i } = this.visualElement;
                        if (i && i.layout) {
                          let s = i.layout.layoutBox[t];
                          s && (e = iL(s) * (parseFloat(e) / 100));
                        }
                      }
                      this.originPoint[t] = e;
                    }),
                    n && _.postRender(() => n(t, e)),
                    td(this.visualElement, 'transform');
                  let { animationState: r } = this.visualElement;
                  r && r.setActive('whileDrag', !0);
                },
                onMove: (t, e) => {
                  let {
                    dragPropagation: i,
                    dragDirectionLock: s,
                    onDirectionLock: n,
                    onDrag: r,
                  } = this.getProps();
                  if (!i && !this.openDragLock) return;
                  let { offset: o } = e;
                  if (s && null === this.currentDirection) {
                    (this.currentDirection = (function (t, e = 10) {
                      let i = null;
                      return (
                        Math.abs(t.y) > e
                          ? (i = 'y')
                          : Math.abs(t.x) > e && (i = 'x'),
                        i
                      );
                    })(o)),
                      null !== this.currentDirection &&
                        n &&
                        n(this.currentDirection);
                    return;
                  }
                  this.updateAxis('x', e.point, o),
                    this.updateAxis('y', e.point, o),
                    this.visualElement.render(),
                    r && r(t, e);
                },
                onSessionEnd: (t, e) => this.stop(t, e),
                resumeAnimation: () =>
                  iz((t) => {
                    var e;
                    return (
                      'paused' === this.getAnimationState(t) &&
                      (null === (e = this.getAxisMotionValue(t).animation) ||
                      void 0 === e
                        ? void 0
                        : e.play())
                    );
                  }),
              },
              {
                transformPagePoint: this.visualElement.getTransformPagePoint(),
                dragSnapToOrigin: s,
              }
            );
          }
          stop(t, e) {
            let i = this.isDragging;
            if ((this.cancel(), !i)) return;
            let { velocity: s } = e;
            this.startAnimation(s);
            let { onDragEnd: n } = this.getProps();
            n && _.postRender(() => n(t, e));
          }
          cancel() {
            this.isDragging = !1;
            let { projection: t, animationState: e } = this.visualElement;
            t && (t.isAnimationBlocked = !1),
              this.panSession && this.panSession.end(),
              (this.panSession = void 0);
            let { dragPropagation: i } = this.getProps();
            !i &&
              this.openDragLock &&
              (this.openDragLock(), (this.openDragLock = null)),
              e && e.setActive('whileDrag', !1);
          }
          updateAxis(t, e, i) {
            let { drag: s } = this.getProps();
            if (!i || !sh(t, s, this.currentDirection)) return;
            let n = this.getAxisMotionValue(t),
              r = this.originPoint[t] + i[t];
            this.constraints &&
              this.constraints[t] &&
              (r = (function (t, { min: e, max: i }, s) {
                return (
                  void 0 !== e && t < e
                    ? (t = s ? eR(e, t, s.min) : Math.max(t, e))
                    : void 0 !== i &&
                      t > i &&
                      (t = s ? eR(i, t, s.max) : Math.min(t, i)),
                  t
                );
              })(r, this.constraints[t], this.elastic[t])),
              n.set(r);
          }
          resolveConstraints() {
            var t;
            let { dragConstraints: e, dragElastic: i } = this.getProps(),
              s =
                this.visualElement.projection &&
                !this.visualElement.projection.layout
                  ? this.visualElement.projection.measure(!1)
                  : null === (t = this.visualElement.projection) || void 0 === t
                    ? void 0
                    : t.layout,
              n = this.constraints;
            e && i4(e)
              ? this.constraints ||
                (this.constraints = this.resolveRefConstraints())
              : e && s
                ? (this.constraints = (function (
                    t,
                    { top: e, left: i, bottom: s, right: n }
                  ) {
                    return { x: ss(t.x, i, n), y: ss(t.y, e, s) };
                  })(s.layoutBox, e))
                : (this.constraints = !1),
              (this.elastic = (function (t = 0.35) {
                return (
                  !1 === t ? (t = 0) : !0 === t && (t = 0.35),
                  { x: sr(t, 'left', 'right'), y: sr(t, 'top', 'bottom') }
                );
              })(i)),
              n !== this.constraints &&
                s &&
                this.constraints &&
                !this.hasMutatedConstraints &&
                iz((t) => {
                  !1 !== this.constraints &&
                    this.getAxisMotionValue(t) &&
                    (this.constraints[t] = (function (t, e) {
                      let i = {};
                      return (
                        void 0 !== e.min && (i.min = e.min - t.min),
                        void 0 !== e.max && (i.max = e.max - t.min),
                        i
                      );
                    })(s.layoutBox[t], this.constraints[t]));
                });
          }
          resolveRefConstraints() {
            var t;
            let { dragConstraints: e, onMeasureDragConstraints: i } =
              this.getProps();
            if (!e || !i4(e)) return !1;
            let s = e.current;
            N(
              null !== s,
              "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop."
            );
            let { projection: n } = this.visualElement;
            if (!n || !n.layout) return !1;
            let r = (function (t, e, i) {
                let s = i5(t, i),
                  { scroll: n } = e;
                return n && (i1(s.x, n.offset.x), i1(s.y, n.offset.y)), s;
              })(s, n.root, this.visualElement.getTransformPagePoint()),
              o = { x: sn((t = n.layout.layoutBox).x, r.x), y: sn(t.y, r.y) };
            if (i) {
              let t = i(
                (function ({ x: t, y: e }) {
                  return {
                    top: e.min,
                    right: t.max,
                    bottom: e.max,
                    left: t.min,
                  };
                })(o)
              );
              (this.hasMutatedConstraints = !!t), t && (o = iI(t));
            }
            return o;
          }
          startAnimation(t) {
            let {
                drag: e,
                dragMomentum: i,
                dragElastic: s,
                dragTransition: n,
                dragSnapToOrigin: r,
                onDragTransitionEnd: o,
              } = this.getProps(),
              a = this.constraints || {};
            return Promise.all(
              iz((o) => {
                if (!sh(o, e, this.currentDirection)) return;
                let l = (a && a[o]) || {};
                r && (l = { min: 0, max: 0 });
                let h = {
                  type: 'inertia',
                  velocity: i ? t[o] : 0,
                  bounceStiffness: s ? 200 : 1e6,
                  bounceDamping: s ? 40 : 1e7,
                  timeConstant: 750,
                  restDelta: 1,
                  restSpeed: 10,
                  ...n,
                  ...l,
                };
                return this.startAxisValueAnimation(o, h);
              })
            ).then(o);
          }
          startAxisValueAnimation(t, e) {
            let i = this.getAxisMotionValue(t);
            return (
              td(this.visualElement, t),
              i.start(im(t, i, 0, e, this.visualElement, !1))
            );
          }
          stopAnimation() {
            iz((t) => this.getAxisMotionValue(t).stop());
          }
          pauseAnimation() {
            iz((t) => {
              var e;
              return null === (e = this.getAxisMotionValue(t).animation) ||
                void 0 === e
                ? void 0
                : e.pause();
            });
          }
          getAnimationState(t) {
            var e;
            return null === (e = this.getAxisMotionValue(t).animation) ||
              void 0 === e
              ? void 0
              : e.state;
          }
          getAxisMotionValue(t) {
            let e = `_drag${t.toUpperCase()}`,
              i = this.visualElement.getProps();
            return (
              i[e] ||
              this.visualElement.getValue(
                t,
                (i.initial ? i.initial[t] : void 0) || 0
              )
            );
          }
          snapToCursor(t) {
            iz((e) => {
              let { drag: i } = this.getProps();
              if (!sh(e, i, this.currentDirection)) return;
              let { projection: s } = this.visualElement,
                n = this.getAxisMotionValue(e);
              if (s && s.layout) {
                let { min: i, max: r } = s.layout.layoutBox[e];
                n.set(t[e] - eR(i, r, 0.5));
              }
            });
          }
          scalePositionWithinConstraints() {
            if (!this.visualElement.current) return;
            let { drag: t, dragConstraints: e } = this.getProps(),
              { projection: i } = this.visualElement;
            if (!i4(e) || !i || !this.constraints) return;
            this.stopAnimation();
            let s = { x: 0, y: 0 };
            iz((t) => {
              let e = this.getAxisMotionValue(t);
              if (e && !1 !== this.constraints) {
                let i = e.get();
                s[t] = (function (t, e) {
                  let i = 0.5,
                    s = iL(t),
                    n = iL(e);
                  return (
                    n > s
                      ? (i = w(e.min, e.max - s, t.min))
                      : s > n && (i = w(t.min, t.max - n, e.min)),
                    tC(0, 1, i)
                  );
                })({ min: i, max: i }, this.constraints[t]);
              }
            });
            let { transformTemplate: n } = this.visualElement.getProps();
            (this.visualElement.current.style.transform = n
              ? n({}, '')
              : 'none'),
              i.root && i.root.updateScroll(),
              i.updateLayout(),
              this.resolveConstraints(),
              iz((e) => {
                if (!sh(e, t, null)) return;
                let i = this.getAxisMotionValue(e),
                  { min: n, max: r } = this.constraints[e];
                i.set(eR(n, r, s[e]));
              });
          }
          addListeners() {
            if (!this.visualElement.current) return;
            sa.set(this.visualElement, this);
            let t = iF(this.visualElement.current, 'pointerdown', (t) => {
                let { drag: e, dragListener: i = !0 } = this.getProps();
                e && i && this.start(t);
              }),
              e = () => {
                let { dragConstraints: t } = this.getProps();
                i4(t) &&
                  t.current &&
                  (this.constraints = this.resolveRefConstraints());
              },
              { projection: i } = this.visualElement,
              s = i.addEventListener('measure', e);
            i &&
              !i.layout &&
              (i.root && i.root.updateScroll(), i.updateLayout()),
              _.read(e);
            let n = iR(window, 'resize', () =>
                this.scalePositionWithinConstraints()
              ),
              r = i.addEventListener(
                'didUpdate',
                ({ delta: t, hasLayoutChanged: e }) => {
                  this.isDragging &&
                    e &&
                    (iz((e) => {
                      let i = this.getAxisMotionValue(e);
                      i &&
                        ((this.originPoint[e] += t[e].translate),
                        i.set(i.get() + t[e].translate));
                    }),
                    this.visualElement.render());
                }
              );
            return () => {
              n(), t(), s(), r && r();
            };
          }
          getProps() {
            let t = this.visualElement.getProps(),
              {
                drag: e = !1,
                dragDirectionLock: i = !1,
                dragPropagation: s = !1,
                dragConstraints: n = !1,
                dragElastic: r = 0.35,
                dragMomentum: o = !0,
              } = t;
            return {
              ...t,
              drag: e,
              dragDirectionLock: i,
              dragPropagation: s,
              dragConstraints: n,
              dragElastic: r,
              dragMomentum: o,
            };
          }
        }
        function sh(t, e, i) {
          return (!0 === e || e === t) && (null === i || i === t);
        }
        class su extends iD {
          constructor(t) {
            super(t),
              (this.removeGroupControls = N),
              (this.removeListeners = N),
              (this.controls = new sl(t));
          }
          mount() {
            let { dragControls: t } = this.node.getProps();
            t && (this.removeGroupControls = t.subscribe(this.controls)),
              (this.removeListeners = this.controls.addListeners() || N);
          }
          unmount() {
            this.removeGroupControls(), this.removeListeners();
          }
        }
        let sd = (t) => (e, i) => {
          t && _.postRender(() => t(e, i));
        };
        class sc extends iD {
          constructor() {
            super(...arguments), (this.removePointerDownListener = N);
          }
          onPointerDown(t) {
            this.session = new i6(t, this.createPanHandlers(), {
              transformPagePoint: this.node.getTransformPagePoint(),
            });
          }
          createPanHandlers() {
            let {
              onPanSessionStart: t,
              onPanStart: e,
              onPan: i,
              onPanEnd: s,
            } = this.node.getProps();
            return {
              onSessionStart: sd(t),
              onStart: sd(e),
              onMove: i,
              onEnd: (t, e) => {
                delete this.session, s && _.postRender(() => s(t, e));
              },
            };
          }
          mount() {
            this.removePointerDownListener = iF(
              this.node.current,
              'pointerdown',
              (t) => this.onPointerDown(t)
            );
          }
          update() {
            this.session &&
              this.session.updateHandlers(this.createPanHandlers());
          }
          unmount() {
            this.removePointerDownListener(),
              this.session && this.session.end();
          }
        }
        let sp = (0, a.createContext)(null),
          sm = (0, a.createContext)({}),
          sf = (0, a.createContext)({}),
          { schedule: sg, cancel: sv } = K(queueMicrotask, !1),
          sA = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
        function sy(t, e) {
          return e.max === e.min ? 0 : (t / (e.max - e.min)) * 100;
        }
        let sx = {
            correct: (t, e) => {
              if (!e.target) return t;
              if ('string' == typeof t) {
                if (!t$.test(t)) return t;
                t = parseFloat(t);
              }
              let i = sy(t, e.target.x),
                s = sy(t, e.target.y);
              return `${i}% ${s}%`;
            },
          },
          sP = {};
        class sw extends a.Component {
          componentDidMount() {
            let {
                visualElement: t,
                layoutGroup: e,
                switchLayoutGroup: i,
                layoutId: s,
              } = this.props,
              { projection: n } = t;
            (function (t) {
              for (let e in t)
                (sP[e] = t[e]), eA(e) && (sP[e].isCSSVariable = !0);
            })(sT),
              n &&
                (e.group && e.group.add(n),
                i && i.register && s && i.register(n),
                n.root.didUpdate(),
                n.addEventListener('animationComplete', () => {
                  this.safeToRemove();
                }),
                n.setOptions({
                  ...n.options,
                  onExitComplete: () => this.safeToRemove(),
                })),
              (sA.hasEverUpdated = !0);
          }
          getSnapshotBeforeUpdate(t) {
            let {
                layoutDependency: e,
                visualElement: i,
                drag: s,
                isPresent: n,
              } = this.props,
              r = i.projection;
            return (
              r &&
                ((r.isPresent = n),
                s ||
                t.layoutDependency !== e ||
                void 0 === e ||
                t.isPresent !== n
                  ? r.willUpdate()
                  : this.safeToRemove(),
                t.isPresent === n ||
                  (n
                    ? r.promote()
                    : r.relegate() ||
                      _.postRender(() => {
                        let t = r.getStack();
                        (t && t.members.length) || this.safeToRemove();
                      }))),
              null
            );
          }
          componentDidUpdate() {
            let { projection: t } = this.props.visualElement;
            t &&
              (t.root.didUpdate(),
              sg.postRender(() => {
                !t.currentAnimation && t.isLead() && this.safeToRemove();
              }));
          }
          componentWillUnmount() {
            let {
                visualElement: t,
                layoutGroup: e,
                switchLayoutGroup: i,
              } = this.props,
              { projection: s } = t;
            s &&
              (s.scheduleCheckAfterUnmount(),
              e && e.group && e.group.remove(s),
              i && i.deregister && i.deregister(s));
          }
          safeToRemove() {
            let { safeToRemove: t } = this.props;
            t && t();
          }
          render() {
            return null;
          }
        }
        function sb(t) {
          let [e, i] = (function (t = !0) {
              let e = (0, a.useContext)(sp);
              if (null === e) return [!0, null];
              let { isPresent: i, onExitComplete: s, register: n } = e,
                r = (0, a.useId)();
              (0, a.useEffect)(() => {
                if (t) return n(r);
              }, [t]);
              let o = (0, a.useCallback)(() => t && s && s(r), [r, s, t]);
              return !i && s ? [!1, o] : [!0];
            })(),
            s = (0, a.useContext)(sm);
          return (0, o.jsx)(sw, {
            ...t,
            layoutGroup: s,
            switchLayoutGroup: (0, a.useContext)(sf),
            isPresent: e,
            safeToRemove: i,
          });
        }
        let sT = {
            borderRadius: {
              ...sx,
              applyTo: [
                'borderTopLeftRadius',
                'borderTopRightRadius',
                'borderBottomLeftRadius',
                'borderBottomRightRadius',
              ],
            },
            borderTopLeftRadius: sx,
            borderTopRightRadius: sx,
            borderBottomLeftRadius: sx,
            borderBottomRightRadius: sx,
            boxShadow: {
              correct: (t, { treeScale: e, projectionDelta: i }) => {
                let s = t2.parse(t);
                if (s.length > 5) return t;
                let n = t2.createTransformer(t),
                  r = 'number' != typeof s[0] ? 1 : 0,
                  o = i.x.scale * e.x,
                  a = i.y.scale * e.y;
                (s[0 + r] /= o), (s[1 + r] /= a);
                let l = eR(o, a, 0.5);
                return (
                  'number' == typeof s[2 + r] && (s[2 + r] /= l),
                  'number' == typeof s[3 + r] && (s[3 + r] /= l),
                  n(s)
                );
              },
            },
          },
          sS = (t, e) => t.depth - e.depth;
        class sE {
          constructor() {
            (this.children = []), (this.isDirty = !1);
          }
          add(t) {
            ts(this.children, t), (this.isDirty = !0);
          }
          remove(t) {
            tn(this.children, t), (this.isDirty = !0);
          }
          forEach(t) {
            this.isDirty && this.children.sort(sS),
              (this.isDirty = !1),
              this.children.forEach(t);
          }
        }
        function sC(t) {
          let e = tu(t) ? t.get() : t;
          return H(e) ? e.toValue() : e;
        }
        let sD = ['TopLeft', 'TopRight', 'BottomLeft', 'BottomRight'],
          sM = sD.length,
          sV = (t) => ('string' == typeof t ? parseFloat(t) : t),
          sj = (t) => 'number' == typeof t || t$.test(t);
        function sR(t, e) {
          return void 0 !== t[e] ? t[e] : t.borderRadius;
        }
        let sk = sF(0, 0.5, tT),
          sB = sF(0.5, 0.95, N);
        function sF(t, e, i) {
          return (s) => (s < t ? 0 : s > e ? 1 : i(w(t, e, s)));
        }
        function sI(t, e) {
          (t.min = e.min), (t.max = e.max);
        }
        function sL(t, e) {
          sI(t.x, e.x), sI(t.y, e.y);
        }
        function sU(t, e) {
          (t.translate = e.translate),
            (t.scale = e.scale),
            (t.originPoint = e.originPoint),
            (t.origin = e.origin);
        }
        function sO(t, e, i, s, n) {
          return (
            (t -= e),
            (t = s + (1 / i) * (t - s)),
            void 0 !== n && (t = s + (1 / n) * (t - s)),
            t
          );
        }
        function sN(t, e, [i, s, n], r, o) {
          !(function (t, e = 0, i = 1, s = 0.5, n, r = t, o = t) {
            if (
              (tW.test(e) &&
                ((e = parseFloat(e)), (e = eR(o.min, o.max, e / 100) - o.min)),
              'number' != typeof e)
            )
              return;
            let a = eR(r.min, r.max, s);
            t === r && (a -= e),
              (t.min = sO(t.min, e, i, a, n)),
              (t.max = sO(t.max, e, i, a, n));
          })(t, e[i], e[s], e[n], e.scale, r, o);
        }
        let sQ = ['x', 'scaleX', 'originX'],
          sW = ['y', 'scaleY', 'originY'];
        function s$(t, e, i, s) {
          sN(t.x, e, sQ, i ? i.x : void 0, s ? s.x : void 0),
            sN(t.y, e, sW, i ? i.y : void 0, s ? s.y : void 0);
        }
        function sX(t) {
          return 0 === t.translate && 1 === t.scale;
        }
        function sH(t) {
          return sX(t.x) && sX(t.y);
        }
        function sG(t, e) {
          return t.min === e.min && t.max === e.max;
        }
        function sz(t, e) {
          return (
            Math.round(t.min) === Math.round(e.min) &&
            Math.round(t.max) === Math.round(e.max)
          );
        }
        function sY(t, e) {
          return sz(t.x, e.x) && sz(t.y, e.y);
        }
        function sq(t) {
          return iL(t.x) / iL(t.y);
        }
        function sK(t, e) {
          return (
            t.translate === e.translate &&
            t.scale === e.scale &&
            t.originPoint === e.originPoint
          );
        }
        class s_ {
          constructor() {
            this.members = [];
          }
          add(t) {
            ts(this.members, t), t.scheduleRender();
          }
          remove(t) {
            if (
              (tn(this.members, t),
              t === this.prevLead && (this.prevLead = void 0),
              t === this.lead)
            ) {
              let t = this.members[this.members.length - 1];
              t && this.promote(t);
            }
          }
          relegate(t) {
            let e;
            let i = this.members.findIndex((e) => t === e);
            if (0 === i) return !1;
            for (let t = i; t >= 0; t--) {
              let i = this.members[t];
              if (!1 !== i.isPresent) {
                e = i;
                break;
              }
            }
            return !!e && (this.promote(e), !0);
          }
          promote(t, e) {
            let i = this.lead;
            if (
              t !== i &&
              ((this.prevLead = i), (this.lead = t), t.show(), i)
            ) {
              i.instance && i.scheduleRender(),
                t.scheduleRender(),
                (t.resumeFrom = i),
                e && (t.resumeFrom.preserveOpacity = !0),
                i.snapshot &&
                  ((t.snapshot = i.snapshot),
                  (t.snapshot.latestValues =
                    i.animationValues || i.latestValues)),
                t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
              let { crossfade: s } = t.options;
              !1 === s && i.hide();
            }
          }
          exitAnimationComplete() {
            this.members.forEach((t) => {
              let { options: e, resumingFrom: i } = t;
              e.onExitComplete && e.onExitComplete(),
                i && i.options.onExitComplete && i.options.onExitComplete();
            });
          }
          scheduleRender() {
            this.members.forEach((t) => {
              t.instance && t.scheduleRender(!1);
            });
          }
          removeLeadSnapshot() {
            this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
          }
        }
        let sZ = {
            nodes: 0,
            calculatedTargetDeltas: 0,
            calculatedProjections: 0,
          },
          sJ = ['', 'X', 'Y', 'Z'],
          s0 = { visibility: 'hidden' },
          s1 = 0;
        function s3(t, e, i, s) {
          let { latestValues: n } = e;
          n[t] && ((i[t] = n[t]), e.setStaticValue(t, 0), s && (s[t] = 0));
        }
        function s2({
          attachResizeListener: t,
          defaultParent: e,
          measureScroll: i,
          checkIsScrollRoot: s,
          resetTransform: n,
        }) {
          return class {
            constructor(t = {}, i = null == e ? void 0 : e()) {
              (this.id = s1++),
                (this.animationId = 0),
                (this.children = new Set()),
                (this.options = {}),
                (this.isTreeAnimating = !1),
                (this.isAnimationBlocked = !1),
                (this.isLayoutDirty = !1),
                (this.isProjectionDirty = !1),
                (this.isSharedProjectionDirty = !1),
                (this.isTransformDirty = !1),
                (this.updateManuallyBlocked = !1),
                (this.updateBlockedByResize = !1),
                (this.isUpdating = !1),
                (this.isSVG = !1),
                (this.needsReset = !1),
                (this.shouldResetTransform = !1),
                (this.hasCheckedOptimisedAppear = !1),
                (this.treeScale = { x: 1, y: 1 }),
                (this.eventHandlers = new Map()),
                (this.hasTreeAnimated = !1),
                (this.updateScheduled = !1),
                (this.scheduleUpdate = () => this.update()),
                (this.projectionUpdateScheduled = !1),
                (this.checkUpdateFailed = () => {
                  this.isUpdating &&
                    ((this.isUpdating = !1), this.clearAllSnapshots());
                }),
                (this.updateProjection = () => {
                  (this.projectionUpdateScheduled = !1),
                    q.value &&
                      (sZ.nodes =
                        sZ.calculatedTargetDeltas =
                        sZ.calculatedProjections =
                          0),
                    this.nodes.forEach(s9),
                    this.nodes.forEach(ns),
                    this.nodes.forEach(nn),
                    this.nodes.forEach(s6),
                    q.addProjectionMetrics && q.addProjectionMetrics(sZ);
                }),
                (this.resolvedRelativeTargetAt = 0),
                (this.hasProjected = !1),
                (this.isVisible = !0),
                (this.animationProgress = 0),
                (this.sharedNodes = new Map()),
                (this.latestValues = t),
                (this.root = i ? i.root || i : this),
                (this.path = i ? [...i.path, i] : []),
                (this.parent = i),
                (this.depth = i ? i.depth + 1 : 0);
              for (let t = 0; t < this.path.length; t++)
                this.path[t].shouldResetTransform = !0;
              this.root === this && (this.nodes = new sE());
            }
            addEventListener(t, e) {
              return (
                this.eventHandlers.has(t) ||
                  this.eventHandlers.set(t, new tr()),
                this.eventHandlers.get(t).add(e)
              );
            }
            notifyListeners(t, ...e) {
              let i = this.eventHandlers.get(t);
              i && i.notify(...e);
            }
            hasListeners(t) {
              return this.eventHandlers.has(t);
            }
            mount(e, i = this.root.hasTreeAnimated) {
              if (this.instance) return;
              (this.isSVG = e instanceof SVGElement && 'svg' !== e.tagName),
                (this.instance = e);
              let { layoutId: s, layout: n, visualElement: r } = this.options;
              if (
                (r && !r.current && r.mount(e),
                this.root.nodes.add(this),
                this.parent && this.parent.children.add(this),
                i && (n || s) && (this.isLayoutDirty = !0),
                t)
              ) {
                let i;
                let s = () => (this.root.updateBlockedByResize = !1);
                t(e, () => {
                  (this.root.updateBlockedByResize = !0),
                    i && i(),
                    (i = (function (t, e) {
                      let i = ti.now(),
                        s = ({ timestamp: e }) => {
                          let n = e - i;
                          n >= 250 && (Z(s), t(n - 250));
                        };
                      return _.read(s, !0), () => Z(s);
                    })(s, 250)),
                    sA.hasAnimatedSinceResize &&
                      ((sA.hasAnimatedSinceResize = !1),
                      this.nodes.forEach(ni));
                });
              }
              s && this.root.registerSharedNode(s, this),
                !1 !== this.options.animate &&
                  r &&
                  (s || n) &&
                  this.addEventListener(
                    'didUpdate',
                    ({
                      delta: t,
                      hasLayoutChanged: e,
                      hasRelativeLayoutChanged: i,
                      layout: s,
                    }) => {
                      if (this.isTreeAnimationBlocked()) {
                        (this.target = void 0), (this.relativeTarget = void 0);
                        return;
                      }
                      let n =
                          this.options.transition ||
                          r.getDefaultTransition() ||
                          nu,
                        {
                          onLayoutAnimationStart: o,
                          onLayoutAnimationComplete: a,
                        } = r.getProps(),
                        l = !this.targetLayout || !sY(this.targetLayout, s),
                        h = !e && i;
                      if (
                        this.options.layoutRoot ||
                        this.resumeFrom ||
                        h ||
                        (e && (l || !this.currentAnimation))
                      ) {
                        this.resumeFrom &&
                          ((this.resumingFrom = this.resumeFrom),
                          (this.resumingFrom.resumingFrom = void 0)),
                          this.setAnimationOrigin(t, h);
                        let e = { ...f(n, 'layout'), onPlay: o, onComplete: a };
                        (r.shouldReduceMotion || this.options.layoutRoot) &&
                          ((e.delay = 0), (e.type = !1)),
                          this.startAnimation(e);
                      } else
                        e || ni(this),
                          this.isLead() &&
                            this.options.onExitComplete &&
                            this.options.onExitComplete();
                      this.targetLayout = s;
                    }
                  );
            }
            unmount() {
              this.options.layoutId && this.willUpdate(),
                this.root.nodes.remove(this);
              let t = this.getStack();
              t && t.remove(this),
                this.parent && this.parent.children.delete(this),
                (this.instance = void 0),
                Z(this.updateProjection);
            }
            blockUpdate() {
              this.updateManuallyBlocked = !0;
            }
            unblockUpdate() {
              this.updateManuallyBlocked = !1;
            }
            isUpdateBlocked() {
              return this.updateManuallyBlocked || this.updateBlockedByResize;
            }
            isTreeAnimationBlocked() {
              return (
                this.isAnimationBlocked ||
                (this.parent && this.parent.isTreeAnimationBlocked()) ||
                !1
              );
            }
            startUpdate() {
              !this.isUpdateBlocked() &&
                ((this.isUpdating = !0),
                this.nodes && this.nodes.forEach(nr),
                this.animationId++);
            }
            getTransformTemplate() {
              let { visualElement: t } = this.options;
              return t && t.getProps().transformTemplate;
            }
            willUpdate(t = !0) {
              if (
                ((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())
              ) {
                this.options.onExitComplete && this.options.onExitComplete();
                return;
              }
              if (
                (window.MotionCancelOptimisedAnimation &&
                  !this.hasCheckedOptimisedAppear &&
                  (function t(e) {
                    if (((e.hasCheckedOptimisedAppear = !0), e.root === e))
                      return;
                    let { visualElement: i } = e.options;
                    if (!i) return;
                    let s = i.props[tp];
                    if (window.MotionHasOptimisedAnimation(s, 'transform')) {
                      let { layout: t, layoutId: i } = e.options;
                      window.MotionCancelOptimisedAnimation(
                        s,
                        'transform',
                        _,
                        !(t || i)
                      );
                    }
                    let { parent: n } = e;
                    n && !n.hasCheckedOptimisedAppear && t(n);
                  })(this),
                this.root.isUpdating || this.root.startUpdate(),
                this.isLayoutDirty)
              )
                return;
              this.isLayoutDirty = !0;
              for (let t = 0; t < this.path.length; t++) {
                let e = this.path[t];
                (e.shouldResetTransform = !0),
                  e.updateScroll('snapshot'),
                  e.options.layoutRoot && e.willUpdate(!1);
              }
              let { layoutId: e, layout: i } = this.options;
              if (void 0 === e && !i) return;
              let s = this.getTransformTemplate();
              (this.prevTransformTemplateValue = s
                ? s(this.latestValues, '')
                : void 0),
                this.updateSnapshot(),
                t && this.notifyListeners('willUpdate');
            }
            update() {
              if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
                this.unblockUpdate(),
                  this.clearAllSnapshots(),
                  this.nodes.forEach(s7);
                return;
              }
              this.isUpdating || this.nodes.forEach(nt),
                (this.isUpdating = !1),
                this.nodes.forEach(ne),
                this.nodes.forEach(s5),
                this.nodes.forEach(s4),
                this.clearAllSnapshots();
              let t = ti.now();
              (J.delta = tC(0, 1e3 / 60, t - J.timestamp)),
                (J.timestamp = t),
                (J.isProcessing = !0),
                tt.update.process(J),
                tt.preRender.process(J),
                tt.render.process(J),
                (J.isProcessing = !1);
            }
            didUpdate() {
              this.updateScheduled ||
                ((this.updateScheduled = !0), sg.read(this.scheduleUpdate));
            }
            clearAllSnapshots() {
              this.nodes.forEach(s8), this.sharedNodes.forEach(no);
            }
            scheduleUpdateProjection() {
              this.projectionUpdateScheduled ||
                ((this.projectionUpdateScheduled = !0),
                _.preRender(this.updateProjection, !1, !0));
            }
            scheduleCheckAfterUnmount() {
              _.postRender(() => {
                this.isLayoutDirty
                  ? this.root.didUpdate()
                  : this.root.checkUpdateFailed();
              });
            }
            updateSnapshot() {
              this.snapshot ||
                !this.instance ||
                ((this.snapshot = this.measure()),
                !this.snapshot ||
                  iL(this.snapshot.measuredBox.x) ||
                  iL(this.snapshot.measuredBox.y) ||
                  (this.snapshot = void 0));
            }
            updateLayout() {
              if (
                !this.instance ||
                (this.updateScroll(),
                !(this.options.alwaysMeasureLayout && this.isLead()) &&
                  !this.isLayoutDirty)
              )
                return;
              if (this.resumeFrom && !this.resumeFrom.instance)
                for (let t = 0; t < this.path.length; t++)
                  this.path[t].updateScroll();
              let t = this.layout;
              (this.layout = this.measure(!1)),
                (this.layoutCorrected = iG()),
                (this.isLayoutDirty = !1),
                (this.projectionDelta = void 0),
                this.notifyListeners('measure', this.layout.layoutBox);
              let { visualElement: e } = this.options;
              e &&
                e.notify(
                  'LayoutMeasure',
                  this.layout.layoutBox,
                  t ? t.layoutBox : void 0
                );
            }
            updateScroll(t = 'measure') {
              let e = !!(this.options.layoutScroll && this.instance);
              if (
                (this.scroll &&
                  this.scroll.animationId === this.root.animationId &&
                  this.scroll.phase === t &&
                  (e = !1),
                e)
              ) {
                let e = s(this.instance);
                this.scroll = {
                  animationId: this.root.animationId,
                  phase: t,
                  isRoot: e,
                  offset: i(this.instance),
                  wasRoot: this.scroll ? this.scroll.isRoot : e,
                };
              }
            }
            resetTransform() {
              if (!n) return;
              let t =
                  this.isLayoutDirty ||
                  this.shouldResetTransform ||
                  this.options.alwaysMeasureLayout,
                e = this.projectionDelta && !sH(this.projectionDelta),
                i = this.getTransformTemplate(),
                s = i ? i(this.latestValues, '') : void 0,
                r = s !== this.prevTransformTemplateValue;
              t &&
                (e || iK(this.latestValues) || r) &&
                (n(this.instance, s),
                (this.shouldResetTransform = !1),
                this.scheduleRender());
            }
            measure(t = !0) {
              var e;
              let i = this.measurePageBox(),
                s = this.removeElementScroll(i);
              return (
                t && (s = this.removeTransform(s)),
                np((e = s).x),
                np(e.y),
                {
                  animationId: this.root.animationId,
                  measuredBox: i,
                  layoutBox: s,
                  latestValues: {},
                  source: this.id,
                }
              );
            }
            measurePageBox() {
              var t;
              let { visualElement: e } = this.options;
              if (!e) return iG();
              let i = e.measureViewportBox();
              if (
                !(
                  (null === (t = this.scroll) || void 0 === t
                    ? void 0
                    : t.wasRoot) || this.path.some(nf)
                )
              ) {
                let { scroll: t } = this.root;
                t && (i1(i.x, t.offset.x), i1(i.y, t.offset.y));
              }
              return i;
            }
            removeElementScroll(t) {
              var e;
              let i = iG();
              if (
                (sL(i, t),
                null === (e = this.scroll) || void 0 === e ? void 0 : e.wasRoot)
              )
                return i;
              for (let e = 0; e < this.path.length; e++) {
                let s = this.path[e],
                  { scroll: n, options: r } = s;
                s !== this.root &&
                  n &&
                  r.layoutScroll &&
                  (n.wasRoot && sL(i, t),
                  i1(i.x, n.offset.x),
                  i1(i.y, n.offset.y));
              }
              return i;
            }
            applyTransform(t, e = !1) {
              let i = iG();
              sL(i, t);
              for (let t = 0; t < this.path.length; t++) {
                let s = this.path[t];
                !e &&
                  s.options.layoutScroll &&
                  s.scroll &&
                  s !== s.root &&
                  i2(i, { x: -s.scroll.offset.x, y: -s.scroll.offset.y }),
                  iK(s.latestValues) && i2(i, s.latestValues);
              }
              return iK(this.latestValues) && i2(i, this.latestValues), i;
            }
            removeTransform(t) {
              let e = iG();
              sL(e, t);
              for (let t = 0; t < this.path.length; t++) {
                let i = this.path[t];
                if (!i.instance || !iK(i.latestValues)) continue;
                iq(i.latestValues) && i.updateSnapshot();
                let s = iG();
                sL(s, i.measurePageBox()),
                  s$(
                    e,
                    i.latestValues,
                    i.snapshot ? i.snapshot.layoutBox : void 0,
                    s
                  );
              }
              return iK(this.latestValues) && s$(e, this.latestValues), e;
            }
            setTargetDelta(t) {
              (this.targetDelta = t),
                this.root.scheduleUpdateProjection(),
                (this.isProjectionDirty = !0);
            }
            setOptions(t) {
              this.options = {
                ...this.options,
                ...t,
                crossfade: void 0 === t.crossfade || t.crossfade,
              };
            }
            clearMeasurements() {
              (this.scroll = void 0),
                (this.layout = void 0),
                (this.snapshot = void 0),
                (this.prevTransformTemplateValue = void 0),
                (this.targetDelta = void 0),
                (this.target = void 0),
                (this.isLayoutDirty = !1);
            }
            forceRelativeParentToResolveTarget() {
              this.relativeParent &&
                this.relativeParent.resolvedRelativeTargetAt !== J.timestamp &&
                this.relativeParent.resolveTargetDelta(!0);
            }
            resolveTargetDelta(t = !1) {
              var e, i, s, n;
              let r = this.getLead();
              this.isProjectionDirty ||
                (this.isProjectionDirty = r.isProjectionDirty),
                this.isTransformDirty ||
                  (this.isTransformDirty = r.isTransformDirty),
                this.isSharedProjectionDirty ||
                  (this.isSharedProjectionDirty = r.isSharedProjectionDirty);
              let o = !!this.resumingFrom || this !== r;
              if (
                !(
                  t ||
                  (o && this.isSharedProjectionDirty) ||
                  this.isProjectionDirty ||
                  (null === (e = this.parent) || void 0 === e
                    ? void 0
                    : e.isProjectionDirty) ||
                  this.attemptToResolveRelativeTarget ||
                  this.root.updateBlockedByResize
                )
              )
                return;
              let { layout: a, layoutId: l } = this.options;
              if (this.layout && (a || l)) {
                if (
                  ((this.resolvedRelativeTargetAt = J.timestamp),
                  !this.targetDelta && !this.relativeTarget)
                ) {
                  let t = this.getClosestProjectingParent();
                  t && t.layout && 1 !== this.animationProgress
                    ? ((this.relativeParent = t),
                      this.forceRelativeParentToResolveTarget(),
                      (this.relativeTarget = iG()),
                      (this.relativeTargetOrigin = iG()),
                      iW(
                        this.relativeTargetOrigin,
                        this.layout.layoutBox,
                        t.layout.layoutBox
                      ),
                      sL(this.relativeTarget, this.relativeTargetOrigin))
                    : (this.relativeParent = this.relativeTarget = void 0);
                }
                if (this.relativeTarget || this.targetDelta) {
                  if (
                    ((this.target ||
                      ((this.target = iG()),
                      (this.targetWithTransforms = iG())),
                    this.relativeTarget &&
                      this.relativeTargetOrigin &&
                      this.relativeParent &&
                      this.relativeParent.target)
                      ? (this.forceRelativeParentToResolveTarget(),
                        (i = this.target),
                        (s = this.relativeTarget),
                        (n = this.relativeParent.target),
                        iN(i.x, s.x, n.x),
                        iN(i.y, s.y, n.y))
                      : this.targetDelta
                        ? (this.resumingFrom
                            ? (this.target = this.applyTransform(
                                this.layout.layoutBox
                              ))
                            : sL(this.target, this.layout.layoutBox),
                          i0(this.target, this.targetDelta))
                        : sL(this.target, this.layout.layoutBox),
                    this.attemptToResolveRelativeTarget)
                  ) {
                    this.attemptToResolveRelativeTarget = !1;
                    let t = this.getClosestProjectingParent();
                    t &&
                    !!t.resumingFrom == !!this.resumingFrom &&
                    !t.options.layoutScroll &&
                    t.target &&
                    1 !== this.animationProgress
                      ? ((this.relativeParent = t),
                        this.forceRelativeParentToResolveTarget(),
                        (this.relativeTarget = iG()),
                        (this.relativeTargetOrigin = iG()),
                        iW(this.relativeTargetOrigin, this.target, t.target),
                        sL(this.relativeTarget, this.relativeTargetOrigin))
                      : (this.relativeParent = this.relativeTarget = void 0);
                  }
                  q.value && sZ.calculatedTargetDeltas++;
                }
              }
            }
            getClosestProjectingParent() {
              return !this.parent ||
                iq(this.parent.latestValues) ||
                i_(this.parent.latestValues)
                ? void 0
                : this.parent.isProjecting()
                  ? this.parent
                  : this.parent.getClosestProjectingParent();
            }
            isProjecting() {
              return !!(
                (this.relativeTarget ||
                  this.targetDelta ||
                  this.options.layoutRoot) &&
                this.layout
              );
            }
            calcProjection() {
              var t;
              let e = this.getLead(),
                i = !!this.resumingFrom || this !== e,
                s = !0;
              if (
                ((this.isProjectionDirty ||
                  (null === (t = this.parent) || void 0 === t
                    ? void 0
                    : t.isProjectionDirty)) &&
                  (s = !1),
                i &&
                  (this.isSharedProjectionDirty || this.isTransformDirty) &&
                  (s = !1),
                this.resolvedRelativeTargetAt === J.timestamp && (s = !1),
                s)
              )
                return;
              let { layout: n, layoutId: r } = this.options;
              if (
                ((this.isTreeAnimating = !!(
                  (this.parent && this.parent.isTreeAnimating) ||
                  this.currentAnimation ||
                  this.pendingAnimation
                )),
                this.isTreeAnimating ||
                  (this.targetDelta = this.relativeTarget = void 0),
                !this.layout || !(n || r))
              )
                return;
              sL(this.layoutCorrected, this.layout.layoutBox);
              let o = this.treeScale.x,
                a = this.treeScale.y;
              (function (t, e, i, s = !1) {
                let n, r;
                let o = i.length;
                if (o) {
                  e.x = e.y = 1;
                  for (let a = 0; a < o; a++) {
                    r = (n = i[a]).projectionDelta;
                    let { visualElement: o } = n.options;
                    (!o ||
                      !o.props.style ||
                      'contents' !== o.props.style.display) &&
                      (s &&
                        n.options.layoutScroll &&
                        n.scroll &&
                        n !== n.root &&
                        i2(t, { x: -n.scroll.offset.x, y: -n.scroll.offset.y }),
                      r && ((e.x *= r.x.scale), (e.y *= r.y.scale), i0(t, r)),
                      s && iK(n.latestValues) && i2(t, n.latestValues));
                  }
                  e.x < 1.0000000000001 && e.x > 0.999999999999 && (e.x = 1),
                    e.y < 1.0000000000001 && e.y > 0.999999999999 && (e.y = 1);
                }
              })(this.layoutCorrected, this.treeScale, this.path, i),
                e.layout &&
                  !e.target &&
                  (1 !== this.treeScale.x || 1 !== this.treeScale.y) &&
                  ((e.target = e.layout.layoutBox),
                  (e.targetWithTransforms = iG()));
              let { target: l } = e;
              if (!l) {
                this.prevProjectionDelta &&
                  (this.createProjectionDeltas(), this.scheduleRender());
                return;
              }
              this.projectionDelta && this.prevProjectionDelta
                ? (sU(this.prevProjectionDelta.x, this.projectionDelta.x),
                  sU(this.prevProjectionDelta.y, this.projectionDelta.y))
                : this.createProjectionDeltas(),
                iO(
                  this.projectionDelta,
                  this.layoutCorrected,
                  l,
                  this.latestValues
                ),
                (this.treeScale.x === o &&
                  this.treeScale.y === a &&
                  sK(this.projectionDelta.x, this.prevProjectionDelta.x) &&
                  sK(this.projectionDelta.y, this.prevProjectionDelta.y)) ||
                  ((this.hasProjected = !0),
                  this.scheduleRender(),
                  this.notifyListeners('projectionUpdate', l)),
                q.value && sZ.calculatedProjections++;
            }
            hide() {
              this.isVisible = !1;
            }
            show() {
              this.isVisible = !0;
            }
            scheduleRender(t = !0) {
              var e;
              if (
                (null === (e = this.options.visualElement) ||
                  void 0 === e ||
                  e.scheduleRender(),
                t)
              ) {
                let t = this.getStack();
                t && t.scheduleRender();
              }
              this.resumingFrom &&
                !this.resumingFrom.instance &&
                (this.resumingFrom = void 0);
            }
            createProjectionDeltas() {
              (this.prevProjectionDelta = iX()),
                (this.projectionDelta = iX()),
                (this.projectionDeltaWithTransform = iX());
            }
            setAnimationOrigin(t, e = !1) {
              let i;
              let s = this.snapshot,
                n = s ? s.latestValues : {},
                r = { ...this.latestValues },
                o = iX();
              (this.relativeParent && this.relativeParent.options.layoutRoot) ||
                (this.relativeTarget = this.relativeTargetOrigin = void 0),
                (this.attemptToResolveRelativeTarget = !e);
              let a = iG(),
                l =
                  (s ? s.source : void 0) !==
                  (this.layout ? this.layout.source : void 0),
                h = this.getStack(),
                u = !h || h.members.length <= 1,
                d = !!(
                  l &&
                  !u &&
                  !0 === this.options.crossfade &&
                  !this.path.some(nh)
                );
              (this.animationProgress = 0),
                (this.mixTargetDelta = (e) => {
                  let s = e / 1e3;
                  if (
                    (na(o.x, t.x, s),
                    na(o.y, t.y, s),
                    this.setTargetDelta(o),
                    this.relativeTarget &&
                      this.relativeTargetOrigin &&
                      this.layout &&
                      this.relativeParent &&
                      this.relativeParent.layout)
                  ) {
                    var h, c, p, m;
                    iW(
                      a,
                      this.layout.layoutBox,
                      this.relativeParent.layout.layoutBox
                    ),
                      (p = this.relativeTarget),
                      (m = this.relativeTargetOrigin),
                      nl(p.x, m.x, a.x, s),
                      nl(p.y, m.y, a.y, s),
                      i &&
                        ((h = this.relativeTarget),
                        (c = i),
                        sG(h.x, c.x) && sG(h.y, c.y)) &&
                        (this.isProjectionDirty = !1),
                      i || (i = iG()),
                      sL(i, this.relativeTarget);
                  }
                  l &&
                    ((this.animationValues = r),
                    (function (t, e, i, s, n, r) {
                      n
                        ? ((t.opacity = eR(
                            0,
                            void 0 !== i.opacity ? i.opacity : 1,
                            sk(s)
                          )),
                          (t.opacityExit = eR(
                            void 0 !== e.opacity ? e.opacity : 1,
                            0,
                            sB(s)
                          )))
                        : r &&
                          (t.opacity = eR(
                            void 0 !== e.opacity ? e.opacity : 1,
                            void 0 !== i.opacity ? i.opacity : 1,
                            s
                          ));
                      for (let n = 0; n < sM; n++) {
                        let r = `border${sD[n]}Radius`,
                          o = sR(e, r),
                          a = sR(i, r);
                        (void 0 !== o || void 0 !== a) &&
                          (o || (o = 0),
                          a || (a = 0),
                          0 === o || 0 === a || sj(o) === sj(a)
                            ? ((t[r] = Math.max(eR(sV(o), sV(a), s), 0)),
                              (tW.test(a) || tW.test(o)) && (t[r] += '%'))
                            : (t[r] = a));
                      }
                      (e.rotate || i.rotate) &&
                        (t.rotate = eR(e.rotate || 0, i.rotate || 0, s));
                    })(r, n, this.latestValues, s, d, u)),
                    this.root.scheduleUpdateProjection(),
                    this.scheduleRender(),
                    (this.animationProgress = s);
                }),
                this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
            }
            startAnimation(t) {
              this.notifyListeners('animationStart'),
                this.currentAnimation && this.currentAnimation.stop(),
                this.resumingFrom &&
                  this.resumingFrom.currentAnimation &&
                  this.resumingFrom.currentAnimation.stop(),
                this.pendingAnimation &&
                  (Z(this.pendingAnimation), (this.pendingAnimation = void 0)),
                (this.pendingAnimation = _.update(() => {
                  (sA.hasAnimatedSinceResize = !0),
                    ej.layout++,
                    (this.currentAnimation = (function (t, e, i) {
                      let s = tu(0) ? 0 : th(0);
                      return s.start(im('', s, 1e3, i)), s.animation;
                    })(0, 0, {
                      ...t,
                      onUpdate: (e) => {
                        this.mixTargetDelta(e), t.onUpdate && t.onUpdate(e);
                      },
                      onStop: () => {
                        ej.layout--;
                      },
                      onComplete: () => {
                        ej.layout--,
                          t.onComplete && t.onComplete(),
                          this.completeAnimation();
                      },
                    })),
                    this.resumingFrom &&
                      (this.resumingFrom.currentAnimation =
                        this.currentAnimation),
                    (this.pendingAnimation = void 0);
                }));
            }
            completeAnimation() {
              this.resumingFrom &&
                ((this.resumingFrom.currentAnimation = void 0),
                (this.resumingFrom.preserveOpacity = void 0));
              let t = this.getStack();
              t && t.exitAnimationComplete(),
                (this.resumingFrom =
                  this.currentAnimation =
                  this.animationValues =
                    void 0),
                this.notifyListeners('animationComplete');
            }
            finishAnimation() {
              this.currentAnimation &&
                (this.mixTargetDelta && this.mixTargetDelta(1e3),
                this.currentAnimation.stop()),
                this.completeAnimation();
            }
            applyTransformsToTarget() {
              let t = this.getLead(),
                {
                  targetWithTransforms: e,
                  target: i,
                  layout: s,
                  latestValues: n,
                } = t;
              if (e && i && s) {
                if (
                  this !== t &&
                  this.layout &&
                  s &&
                  nm(
                    this.options.animationType,
                    this.layout.layoutBox,
                    s.layoutBox
                  )
                ) {
                  i = this.target || iG();
                  let e = iL(this.layout.layoutBox.x);
                  (i.x.min = t.target.x.min), (i.x.max = i.x.min + e);
                  let s = iL(this.layout.layoutBox.y);
                  (i.y.min = t.target.y.min), (i.y.max = i.y.min + s);
                }
                sL(e, i),
                  i2(e, n),
                  iO(
                    this.projectionDeltaWithTransform,
                    this.layoutCorrected,
                    e,
                    n
                  );
              }
            }
            registerSharedNode(t, e) {
              this.sharedNodes.has(t) || this.sharedNodes.set(t, new s_()),
                this.sharedNodes.get(t).add(e);
              let i = e.options.initialPromotionConfig;
              e.promote({
                transition: i ? i.transition : void 0,
                preserveFollowOpacity:
                  i && i.shouldPreserveFollowOpacity
                    ? i.shouldPreserveFollowOpacity(e)
                    : void 0,
              });
            }
            isLead() {
              let t = this.getStack();
              return !t || t.lead === this;
            }
            getLead() {
              var t;
              let { layoutId: e } = this.options;
              return (
                (e &&
                  (null === (t = this.getStack()) || void 0 === t
                    ? void 0
                    : t.lead)) ||
                this
              );
            }
            getPrevLead() {
              var t;
              let { layoutId: e } = this.options;
              return e
                ? null === (t = this.getStack()) || void 0 === t
                  ? void 0
                  : t.prevLead
                : void 0;
            }
            getStack() {
              let { layoutId: t } = this.options;
              if (t) return this.root.sharedNodes.get(t);
            }
            promote({
              needsReset: t,
              transition: e,
              preserveFollowOpacity: i,
            } = {}) {
              let s = this.getStack();
              s && s.promote(this, i),
                t && ((this.projectionDelta = void 0), (this.needsReset = !0)),
                e && this.setOptions({ transition: e });
            }
            relegate() {
              let t = this.getStack();
              return !!t && t.relegate(this);
            }
            resetSkewAndRotation() {
              let { visualElement: t } = this.options;
              if (!t) return;
              let e = !1,
                { latestValues: i } = t;
              if (
                ((i.z ||
                  i.rotate ||
                  i.rotateX ||
                  i.rotateY ||
                  i.rotateZ ||
                  i.skewX ||
                  i.skewY) &&
                  (e = !0),
                !e)
              )
                return;
              let s = {};
              i.z && s3('z', t, s, this.animationValues);
              for (let e = 0; e < sJ.length; e++)
                s3(`rotate${sJ[e]}`, t, s, this.animationValues),
                  s3(`skew${sJ[e]}`, t, s, this.animationValues);
              for (let e in (t.render(), s))
                t.setStaticValue(e, s[e]),
                  this.animationValues && (this.animationValues[e] = s[e]);
              t.scheduleRender();
            }
            getProjectionStyles(t) {
              var e, i;
              if (!this.instance || this.isSVG) return;
              if (!this.isVisible) return s0;
              let s = { visibility: '' },
                n = this.getTransformTemplate();
              if (this.needsReset)
                return (
                  (this.needsReset = !1),
                  (s.opacity = ''),
                  (s.pointerEvents =
                    sC(null == t ? void 0 : t.pointerEvents) || ''),
                  (s.transform = n ? n(this.latestValues, '') : 'none'),
                  s
                );
              let r = this.getLead();
              if (!this.projectionDelta || !this.layout || !r.target) {
                let e = {};
                return (
                  this.options.layoutId &&
                    ((e.opacity =
                      void 0 !== this.latestValues.opacity
                        ? this.latestValues.opacity
                        : 1),
                    (e.pointerEvents =
                      sC(null == t ? void 0 : t.pointerEvents) || '')),
                  this.hasProjected &&
                    !iK(this.latestValues) &&
                    ((e.transform = n ? n({}, '') : 'none'),
                    (this.hasProjected = !1)),
                  e
                );
              }
              let o = r.animationValues || r.latestValues;
              this.applyTransformsToTarget(),
                (s.transform = (function (t, e, i) {
                  let s = '',
                    n = t.x.translate / e.x,
                    r = t.y.translate / e.y,
                    o = (null == i ? void 0 : i.z) || 0;
                  if (
                    ((n || r || o) &&
                      (s = `translate3d(${n}px, ${r}px, ${o}px) `),
                    (1 !== e.x || 1 !== e.y) &&
                      (s += `scale(${1 / e.x}, ${1 / e.y}) `),
                    i)
                  ) {
                    let {
                      transformPerspective: t,
                      rotate: e,
                      rotateX: n,
                      rotateY: r,
                      skewX: o,
                      skewY: a,
                    } = i;
                    t && (s = `perspective(${t}px) ${s}`),
                      e && (s += `rotate(${e}deg) `),
                      n && (s += `rotateX(${n}deg) `),
                      r && (s += `rotateY(${r}deg) `),
                      o && (s += `skewX(${o}deg) `),
                      a && (s += `skewY(${a}deg) `);
                  }
                  let a = t.x.scale * e.x,
                    l = t.y.scale * e.y;
                  return (
                    (1 !== a || 1 !== l) && (s += `scale(${a}, ${l})`),
                    s || 'none'
                  );
                })(this.projectionDeltaWithTransform, this.treeScale, o)),
                n && (s.transform = n(o, s.transform));
              let { x: a, y: l } = this.projectionDelta;
              for (let t in ((s.transformOrigin = `${100 * a.origin}% ${100 * l.origin}% 0`),
              r.animationValues
                ? (s.opacity =
                    r === this
                      ? null !==
                          (i =
                            null !== (e = o.opacity) && void 0 !== e
                              ? e
                              : this.latestValues.opacity) && void 0 !== i
                        ? i
                        : 1
                      : this.preserveOpacity
                        ? this.latestValues.opacity
                        : o.opacityExit)
                : (s.opacity =
                    r === this
                      ? void 0 !== o.opacity
                        ? o.opacity
                        : ''
                      : void 0 !== o.opacityExit
                        ? o.opacityExit
                        : 0),
              sP)) {
                if (void 0 === o[t]) continue;
                let { correct: e, applyTo: i, isCSSVariable: n } = sP[t],
                  a = 'none' === s.transform ? o[t] : e(o[t], r);
                if (i) {
                  let t = i.length;
                  for (let e = 0; e < t; e++) s[i[e]] = a;
                } else
                  n
                    ? (this.options.visualElement.renderState.vars[t] = a)
                    : (s[t] = a);
              }
              return (
                this.options.layoutId &&
                  (s.pointerEvents =
                    r === this
                      ? sC(null == t ? void 0 : t.pointerEvents) || ''
                      : 'none'),
                s
              );
            }
            clearSnapshot() {
              this.resumeFrom = this.snapshot = void 0;
            }
            resetTree() {
              this.root.nodes.forEach((t) => {
                var e;
                return null === (e = t.currentAnimation) || void 0 === e
                  ? void 0
                  : e.stop();
              }),
                this.root.nodes.forEach(s7),
                this.root.sharedNodes.clear();
            }
          };
        }
        function s5(t) {
          t.updateLayout();
        }
        function s4(t) {
          var e;
          let i =
            (null === (e = t.resumeFrom) || void 0 === e
              ? void 0
              : e.snapshot) || t.snapshot;
          if (t.isLead() && t.layout && i && t.hasListeners('didUpdate')) {
            let { layoutBox: e, measuredBox: s } = t.layout,
              { animationType: n } = t.options,
              r = i.source !== t.layout.source;
            'size' === n
              ? iz((t) => {
                  let s = r ? i.measuredBox[t] : i.layoutBox[t],
                    n = iL(s);
                  (s.min = e[t].min), (s.max = s.min + n);
                })
              : nm(n, i.layoutBox, e) &&
                iz((s) => {
                  let n = r ? i.measuredBox[s] : i.layoutBox[s],
                    o = iL(e[s]);
                  (n.max = n.min + o),
                    t.relativeTarget &&
                      !t.currentAnimation &&
                      ((t.isProjectionDirty = !0),
                      (t.relativeTarget[s].max = t.relativeTarget[s].min + o));
                });
            let o = iX();
            iO(o, e, i.layoutBox);
            let a = iX();
            r
              ? iO(a, t.applyTransform(s, !0), i.measuredBox)
              : iO(a, e, i.layoutBox);
            let l = !sH(o),
              h = !1;
            if (!t.resumeFrom) {
              let s = t.getClosestProjectingParent();
              if (s && !s.resumeFrom) {
                let { snapshot: n, layout: r } = s;
                if (n && r) {
                  let o = iG();
                  iW(o, i.layoutBox, n.layoutBox);
                  let a = iG();
                  iW(a, e, r.layoutBox),
                    sY(o, a) || (h = !0),
                    s.options.layoutRoot &&
                      ((t.relativeTarget = a),
                      (t.relativeTargetOrigin = o),
                      (t.relativeParent = s));
                }
              }
            }
            t.notifyListeners('didUpdate', {
              layout: e,
              snapshot: i,
              delta: a,
              layoutDelta: o,
              hasLayoutChanged: l,
              hasRelativeLayoutChanged: h,
            });
          } else if (t.isLead()) {
            let { onExitComplete: e } = t.options;
            e && e();
          }
          t.options.transition = void 0;
        }
        function s9(t) {
          q.value && sZ.nodes++,
            t.parent &&
              (t.isProjecting() ||
                (t.isProjectionDirty = t.parent.isProjectionDirty),
              t.isSharedProjectionDirty ||
                (t.isSharedProjectionDirty = !!(
                  t.isProjectionDirty ||
                  t.parent.isProjectionDirty ||
                  t.parent.isSharedProjectionDirty
                )),
              t.isTransformDirty ||
                (t.isTransformDirty = t.parent.isTransformDirty));
        }
        function s6(t) {
          t.isProjectionDirty =
            t.isSharedProjectionDirty =
            t.isTransformDirty =
              !1;
        }
        function s8(t) {
          t.clearSnapshot();
        }
        function s7(t) {
          t.clearMeasurements();
        }
        function nt(t) {
          t.isLayoutDirty = !1;
        }
        function ne(t) {
          let { visualElement: e } = t.options;
          e &&
            e.getProps().onBeforeLayoutMeasure &&
            e.notify('BeforeLayoutMeasure'),
            t.resetTransform();
        }
        function ni(t) {
          t.finishAnimation(),
            (t.targetDelta = t.relativeTarget = t.target = void 0),
            (t.isProjectionDirty = !0);
        }
        function ns(t) {
          t.resolveTargetDelta();
        }
        function nn(t) {
          t.calcProjection();
        }
        function nr(t) {
          t.resetSkewAndRotation();
        }
        function no(t) {
          t.removeLeadSnapshot();
        }
        function na(t, e, i) {
          (t.translate = eR(e.translate, 0, i)),
            (t.scale = eR(e.scale, 1, i)),
            (t.origin = e.origin),
            (t.originPoint = e.originPoint);
        }
        function nl(t, e, i, s) {
          (t.min = eR(e.min, i.min, s)), (t.max = eR(e.max, i.max, s));
        }
        function nh(t) {
          return t.animationValues && void 0 !== t.animationValues.opacityExit;
        }
        let nu = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
          nd = (t) =>
            'undefined' != typeof navigator &&
            navigator.userAgent &&
            navigator.userAgent.toLowerCase().includes(t),
          nc = nd('applewebkit/') && !nd('chrome/') ? Math.round : N;
        function np(t) {
          (t.min = nc(t.min)), (t.max = nc(t.max));
        }
        function nm(t, e, i) {
          return (
            'position' === t ||
            ('preserve-aspect' === t && !(0.2 >= Math.abs(sq(e) - sq(i))))
          );
        }
        function nf(t) {
          var e;
          return (
            t !== t.root &&
            (null === (e = t.scroll) || void 0 === e ? void 0 : e.wasRoot)
          );
        }
        let ng = s2({
            attachResizeListener: (t, e) => iR(t, 'resize', e),
            measureScroll: () => ({
              x:
                document.documentElement.scrollLeft || document.body.scrollLeft,
              y: document.documentElement.scrollTop || document.body.scrollTop,
            }),
            checkIsScrollRoot: () => !0,
          }),
          nv = { current: void 0 },
          nA = s2({
            measureScroll: (t) => ({ x: t.scrollLeft, y: t.scrollTop }),
            defaultParent: () => {
              if (!nv.current) {
                let t = new ng({});
                t.mount(window),
                  t.setOptions({ layoutScroll: !0 }),
                  (nv.current = t);
              }
              return nv.current;
            },
            resetTransform: (t, e) => {
              t.style.transform = void 0 !== e ? e : 'none';
            },
            checkIsScrollRoot: (t) =>
              'fixed' === window.getComputedStyle(t).position,
          });
        function ny(t, e, i) {
          let { props: s } = t;
          t.animationState &&
            s.whileHover &&
            t.animationState.setActive('whileHover', 'Start' === i);
          let n = s['onHover' + i];
          n && _.postRender(() => n(e, ik(e)));
        }
        class nx extends iD {
          mount() {
            let { current: t } = this.node;
            t &&
              (this.unmount = (function (t, e, i = {}) {
                let [s, n, r] = C(t, i),
                  o = (t) => {
                    if (!D(t)) return;
                    let { target: i } = t,
                      s = e(i, t);
                    if ('function' != typeof s || !i) return;
                    let r = (t) => {
                      D(t) && (s(t), i.removeEventListener('pointerleave', r));
                    };
                    i.addEventListener('pointerleave', r, n);
                  };
                return (
                  s.forEach((t) => {
                    t.addEventListener('pointerenter', o, n);
                  }),
                  r
                );
              })(
                t,
                (t, e) => (
                  ny(this.node, e, 'Start'), (t) => ny(this.node, t, 'End')
                )
              ));
          }
          unmount() {}
        }
        class nP extends iD {
          constructor() {
            super(...arguments), (this.isActive = !1);
          }
          onFocus() {
            let t = !1;
            try {
              t = this.node.current.matches(':focus-visible');
            } catch (e) {
              t = !0;
            }
            t &&
              this.node.animationState &&
              (this.node.animationState.setActive('whileFocus', !0),
              (this.isActive = !0));
          }
          onBlur() {
            this.isActive &&
              this.node.animationState &&
              (this.node.animationState.setActive('whileFocus', !1),
              (this.isActive = !1));
          }
          mount() {
            this.unmount = eQ(
              iR(this.node.current, 'focus', () => this.onFocus()),
              iR(this.node.current, 'blur', () => this.onBlur())
            );
          }
          unmount() {}
        }
        function nw(t, e, i) {
          let { props: s } = t;
          if (t.current instanceof HTMLButtonElement && t.current.disabled)
            return;
          t.animationState &&
            s.whileTap &&
            t.animationState.setActive('whileTap', 'Start' === i);
          let n = s['onTap' + ('End' === i ? '' : i)];
          n && _.postRender(() => n(e, ik(e)));
        }
        class nb extends iD {
          mount() {
            let { current: t } = this.node;
            t &&
              (this.unmount = (function (t, e, i = {}) {
                let [s, n, r] = C(t, i),
                  o = (t) => {
                    let i = t.currentTarget;
                    if (!i || !L(t) || k.has(i)) return;
                    k.add(i), M(t, 'set');
                    let s = e(i, t),
                      r = (t, e) => {
                        i.removeEventListener('pointerup', o),
                          i.removeEventListener('pointercancel', a),
                          M(t, 'release'),
                          L(t) &&
                            k.has(i) &&
                            (k.delete(i),
                            'function' == typeof s && s(t, { success: e }));
                      },
                      o = (t) => {
                        var e;
                        t.isTrusted &&
                        ((e =
                          i instanceof Element
                            ? i.getBoundingClientRect()
                            : {
                                left: 0,
                                top: 0,
                                right: window.innerWidth,
                                bottom: window.innerHeight,
                              }),
                        t.clientX < e.left ||
                          t.clientX > e.right ||
                          t.clientY < e.top ||
                          t.clientY > e.bottom)
                          ? r(t, !1)
                          : r(t, !(i instanceof Element) || V(i, t.target));
                      },
                      a = (t) => {
                        r(t, !1);
                      };
                    i.addEventListener('pointerup', o, n),
                      i.addEventListener('pointercancel', a, n),
                      i.addEventListener('lostpointercapture', a, n);
                  };
                return (
                  s.forEach((t) => {
                    t = i.useGlobalTarget ? window : t;
                    let e = !1;
                    if (t instanceof HTMLElement) {
                      var s;
                      (e = !0),
                        (s = t),
                        R.has(s.tagName) ||
                          -1 !== s.tabIndex ||
                          null !== t.getAttribute('tabindex') ||
                          (t.tabIndex = 0);
                    }
                    t.addEventListener('pointerdown', o, n),
                      e && t.addEventListener('focus', (t) => I(t, n), n);
                  }),
                  r
                );
              })(
                t,
                (t, e) => (
                  nw(this.node, e, 'Start'),
                  (t, { success: e }) => nw(this.node, t, e ? 'End' : 'Cancel')
                ),
                { useGlobalTarget: this.node.props.globalTapTarget }
              ));
          }
          unmount() {}
        }
        let nT = new WeakMap(),
          nS = new WeakMap(),
          nE = (t) => {
            let e = nT.get(t.target);
            e && e(t);
          },
          nC = (t) => {
            t.forEach(nE);
          },
          nD = { some: 0, all: 1 };
        class nM extends iD {
          constructor() {
            super(...arguments),
              (this.hasEnteredView = !1),
              (this.isInView = !1);
          }
          startObserver() {
            this.unmount();
            let { viewport: t = {} } = this.node.getProps(),
              { root: e, margin: i, amount: s = 'some', once: n } = t,
              r = {
                root: e ? e.current : void 0,
                rootMargin: i,
                threshold: 'number' == typeof s ? s : nD[s],
              };
            return (function (t, e, i) {
              let s = (function ({ root: t, ...e }) {
                let i = t || document;
                nS.has(i) || nS.set(i, {});
                let s = nS.get(i),
                  n = JSON.stringify(e);
                return (
                  s[n] ||
                    (s[n] = new IntersectionObserver(nC, { root: t, ...e })),
                  s[n]
                );
              })(e);
              return (
                nT.set(t, i),
                s.observe(t),
                () => {
                  nT.delete(t), s.unobserve(t);
                }
              );
            })(this.node.current, r, (t) => {
              let { isIntersecting: e } = t;
              if (
                this.isInView === e ||
                ((this.isInView = e), n && !e && this.hasEnteredView)
              )
                return;
              e && (this.hasEnteredView = !0),
                this.node.animationState &&
                  this.node.animationState.setActive('whileInView', e);
              let { onViewportEnter: i, onViewportLeave: s } =
                  this.node.getProps(),
                r = e ? i : s;
              r && r(t);
            });
          }
          mount() {
            this.startObserver();
          }
          update() {
            if ('undefined' == typeof IntersectionObserver) return;
            let { props: t, prevProps: e } = this.node;
            ['amount', 'margin', 'root'].some(
              (function ({ viewport: t = {} }, { viewport: e = {} } = {}) {
                return (i) => t[i] !== e[i];
              })(t, e)
            ) && this.startObserver();
          }
          unmount() {}
        }
        let nV = (0, a.createContext)({ strict: !1 }),
          nj = (0, a.createContext)({
            transformPagePoint: (t) => t,
            isStatic: !1,
            reducedMotion: 'never',
          }),
          nR = (0, a.createContext)({});
        function nk(t) {
          return l(t.animate) || iw.some((e) => ix(t[e]));
        }
        function nB(t) {
          return !!(nk(t) || t.variants);
        }
        function nF(t) {
          return Array.isArray(t) ? t.join(' ') : t;
        }
        let nI = 'undefined' != typeof window,
          nL = {
            animation: [
              'animate',
              'variants',
              'whileHover',
              'whileTap',
              'exit',
              'whileInView',
              'whileFocus',
              'whileDrag',
            ],
            exit: ['exit'],
            drag: ['drag', 'dragControls'],
            focus: ['whileFocus'],
            hover: ['whileHover', 'onHoverStart', 'onHoverEnd'],
            tap: ['whileTap', 'onTap', 'onTapStart', 'onTapCancel'],
            pan: ['onPan', 'onPanStart', 'onPanSessionStart', 'onPanEnd'],
            inView: ['whileInView', 'onViewportEnter', 'onViewportLeave'],
            layout: ['layout', 'layoutId'],
          },
          nU = {};
        for (let t in nL)
          nU[t] = { isEnabled: (e) => nL[t].some((t) => !!e[t]) };
        let nO = Symbol.for('motionComponentSymbol'),
          nN = nI ? a.useLayoutEffect : a.useEffect;
        function nQ(t, { layout: e, layoutId: i }) {
          return (
            W.has(t) ||
            t.startsWith('origin') ||
            ((e || void 0 !== i) && (!!sP[t] || 'opacity' === t))
          );
        }
        let nW = (t, e) => (e && 'number' == typeof t ? e.transform(t) : t),
          n$ = {
            x: 'translateX',
            y: 'translateY',
            z: 'translateZ',
            transformPerspective: 'perspective',
          },
          nX = Q.length;
        function nH(t, e, i) {
          let { style: s, vars: n, transformOrigin: r } = t,
            o = !1,
            a = !1;
          for (let t in e) {
            let i = e[t];
            if (W.has(t)) {
              o = !0;
              continue;
            }
            if (eA(t)) {
              n[t] = i;
              continue;
            }
            {
              let e = nW(i, t7[t]);
              t.startsWith('origin') ? ((a = !0), (r[t] = e)) : (s[t] = e);
            }
          }
          if (
            (!e.transform &&
              (o || i
                ? (s.transform = (function (t, e, i) {
                    let s = '',
                      n = !0;
                    for (let r = 0; r < nX; r++) {
                      let o = Q[r],
                        a = t[o];
                      if (void 0 === a) continue;
                      let l = !0;
                      if (
                        !(l =
                          'number' == typeof a
                            ? a === (o.startsWith('scale') ? 1 : 0)
                            : 0 === parseFloat(a)) ||
                        i
                      ) {
                        let t = nW(a, t7[o]);
                        if (!l) {
                          n = !1;
                          let e = n$[o] || o;
                          s += `${e}(${t}) `;
                        }
                        i && (e[o] = t);
                      }
                    }
                    return (
                      (s = s.trim()),
                      i ? (s = i(e, n ? '' : s)) : n && (s = 'none'),
                      s
                    );
                  })(e, t.transform, i))
                : s.transform && (s.transform = 'none')),
            a)
          ) {
            let { originX: t = '50%', originY: e = '50%', originZ: i = 0 } = r;
            s.transformOrigin = `${t} ${e} ${i}`;
          }
        }
        let nG = () => ({
          style: {},
          transform: {},
          transformOrigin: {},
          vars: {},
        });
        function nz(t, e, i) {
          for (let s in e) tu(e[s]) || nQ(s, i) || (t[s] = e[s]);
        }
        let nY = new Set([
          'animate',
          'exit',
          'variants',
          'initial',
          'style',
          'values',
          'variants',
          'transition',
          'transformTemplate',
          'custom',
          'inherit',
          'onBeforeLayoutMeasure',
          'onAnimationStart',
          'onAnimationComplete',
          'onUpdate',
          'onDragStart',
          'onDrag',
          'onDragEnd',
          'onMeasureDragConstraints',
          'onDirectionLock',
          'onDragTransitionEnd',
          '_dragX',
          '_dragY',
          'onHoverStart',
          'onHoverEnd',
          'onViewportEnter',
          'onViewportLeave',
          'globalTapTarget',
          'ignoreStrict',
          'viewport',
        ]);
        function nq(t) {
          return (
            t.startsWith('while') ||
            (t.startsWith('drag') && 'draggable' !== t) ||
            t.startsWith('layout') ||
            t.startsWith('onTap') ||
            t.startsWith('onPan') ||
            t.startsWith('onLayout') ||
            nY.has(t)
          );
        }
        let nK = (t) => !nq(t);
        try {
          !(function (t) {
            t && (nK = (e) => (e.startsWith('on') ? !nq(e) : t(e)));
          })(require('@emotion/is-prop-valid').default);
        } catch (t) {}
        let n_ = [
          'animate',
          'circle',
          'defs',
          'desc',
          'ellipse',
          'g',
          'image',
          'line',
          'filter',
          'marker',
          'mask',
          'metadata',
          'path',
          'pattern',
          'polygon',
          'polyline',
          'rect',
          'stop',
          'switch',
          'symbol',
          'svg',
          'text',
          'tspan',
          'use',
          'view',
        ];
        function nZ(t) {
          if ('string' != typeof t || t.includes('-'));
          else if (n_.indexOf(t) > -1 || /[A-Z]/u.test(t)) return !0;
          return !1;
        }
        let nJ = { offset: 'stroke-dashoffset', array: 'stroke-dasharray' },
          n0 = { offset: 'strokeDashoffset', array: 'strokeDasharray' };
        function n1(t, e, i) {
          return 'string' == typeof t ? t : t$.transform(e + i * t);
        }
        function n3(
          t,
          {
            attrX: e,
            attrY: i,
            attrScale: s,
            originX: n,
            originY: r,
            pathLength: o,
            pathSpacing: a = 1,
            pathOffset: l = 0,
            ...h
          },
          u,
          d
        ) {
          if ((nH(t, h, d), u)) {
            t.style.viewBox && (t.attrs.viewBox = t.style.viewBox);
            return;
          }
          (t.attrs = t.style), (t.style = {});
          let { attrs: c, style: p, dimensions: m } = t;
          c.transform && (m && (p.transform = c.transform), delete c.transform),
            m &&
              (void 0 !== n || void 0 !== r || p.transform) &&
              (p.transformOrigin = (function (t, e, i) {
                let s = n1(e, t.x, t.width),
                  n = n1(i, t.y, t.height);
                return `${s} ${n}`;
              })(m, void 0 !== n ? n : 0.5, void 0 !== r ? r : 0.5)),
            void 0 !== e && (c.x = e),
            void 0 !== i && (c.y = i),
            void 0 !== s && (c.scale = s),
            void 0 !== o &&
              (function (t, e, i = 1, s = 0, n = !0) {
                t.pathLength = 1;
                let r = n ? nJ : n0;
                t[r.offset] = t$.transform(-s);
                let o = t$.transform(e),
                  a = t$.transform(i);
                t[r.array] = `${o} ${a}`;
              })(c, o, a, l, !1);
        }
        let n2 = () => ({ ...nG(), attrs: {} }),
          n5 = (t) => 'string' == typeof t && 'svg' === t.toLowerCase(),
          n4 = (t) => (e, i) => {
            let s = (0, a.useContext)(nR),
              n = (0, a.useContext)(sp),
              r = () =>
                (function (
                  {
                    scrapeMotionValuesFromProps: t,
                    createRenderState: e,
                    onUpdate: i,
                  },
                  s,
                  n,
                  r
                ) {
                  let o = {
                    latestValues: (function (t, e, i, s) {
                      let n = {},
                        r = s(t, {});
                      for (let t in r) n[t] = sC(r[t]);
                      let { initial: o, animate: a } = t,
                        u = nk(t),
                        d = nB(t);
                      e &&
                        d &&
                        !u &&
                        !1 !== t.inherit &&
                        (void 0 === o && (o = e.initial),
                        void 0 === a && (a = e.animate));
                      let c = !!i && !1 === i.initial,
                        p = (c = c || !1 === o) ? a : o;
                      if (p && 'boolean' != typeof p && !l(p)) {
                        let e = Array.isArray(p) ? p : [p];
                        for (let i = 0; i < e.length; i++) {
                          let s = h(t, e[i]);
                          if (s) {
                            let { transitionEnd: t, transition: e, ...i } = s;
                            for (let t in i) {
                              let e = i[t];
                              if (Array.isArray(e)) {
                                let t = c ? e.length - 1 : 0;
                                e = e[t];
                              }
                              null !== e && (n[t] = e);
                            }
                            for (let e in t) n[e] = t[e];
                          }
                        }
                      }
                      return n;
                    })(s, n, r, t),
                    renderState: e(),
                  };
                  return (
                    i &&
                      ((o.onMount = (t) => i({ props: s, current: t, ...o })),
                      (o.onUpdate = (t) => i(t))),
                    o
                  );
                })(t, e, s, n);
            return i
              ? r()
              : (function (t) {
                  let e = (0, a.useRef)(null);
                  return null === e.current && (e.current = t()), e.current;
                })(r);
          };
        function n9(t, e, i) {
          var s;
          let { style: n } = t,
            r = {};
          for (let o in n)
            (tu(n[o]) ||
              (e.style && tu(e.style[o])) ||
              nQ(o, t) ||
              (null === (s = null == i ? void 0 : i.getValue(o)) || void 0 === s
                ? void 0
                : s.liveStyle) !== void 0) &&
              (r[o] = n[o]);
          return r;
        }
        let n6 = {
          useVisualState: n4({
            scrapeMotionValuesFromProps: n9,
            createRenderState: nG,
          }),
        };
        function n8(t, e) {
          try {
            e.dimensions =
              'function' == typeof t.getBBox
                ? t.getBBox()
                : t.getBoundingClientRect();
          } catch (t) {
            e.dimensions = { x: 0, y: 0, width: 0, height: 0 };
          }
        }
        function n7(t, { style: e, vars: i }, s, n) {
          for (let r in (Object.assign(
            t.style,
            e,
            n && n.getProjectionStyles(s)
          ),
          i))
            t.style.setProperty(r, i[r]);
        }
        let rt = new Set([
          'baseFrequency',
          'diffuseConstant',
          'kernelMatrix',
          'kernelUnitLength',
          'keySplines',
          'keyTimes',
          'limitingConeAngle',
          'markerHeight',
          'markerWidth',
          'numOctaves',
          'targetX',
          'targetY',
          'surfaceScale',
          'specularConstant',
          'specularExponent',
          'stdDeviation',
          'tableValues',
          'viewBox',
          'gradientTransform',
          'pathLength',
          'startOffset',
          'textLength',
          'lengthAdjust',
        ]);
        function re(t, e, i, s) {
          for (let i in (n7(t, e, void 0, s), e.attrs))
            t.setAttribute(rt.has(i) ? i : tc(i), e.attrs[i]);
        }
        function ri(t, e, i) {
          let s = n9(t, e, i);
          for (let i in t)
            (tu(t[i]) || tu(e[i])) &&
              (s[
                -1 !== Q.indexOf(i)
                  ? 'attr' + i.charAt(0).toUpperCase() + i.substring(1)
                  : i
              ] = t[i]);
          return s;
        }
        let rs = ['x', 'y', 'width', 'height', 'cx', 'cy', 'r'],
          rn = {
            useVisualState: n4({
              scrapeMotionValuesFromProps: ri,
              createRenderState: n2,
              onUpdate: ({
                props: t,
                prevProps: e,
                current: i,
                renderState: s,
                latestValues: n,
              }) => {
                if (!i) return;
                let r = !!t.drag;
                if (!r) {
                  for (let t in n)
                    if (W.has(t)) {
                      r = !0;
                      break;
                    }
                }
                if (!r) return;
                let o = !e;
                if (e)
                  for (let i = 0; i < rs.length; i++) {
                    let s = rs[i];
                    t[s] !== e[s] && (o = !0);
                  }
                o &&
                  _.read(() => {
                    n8(i, s),
                      _.render(() => {
                        n3(s, n, n5(i.tagName), t.transformTemplate), re(i, s);
                      });
                  });
              },
            }),
          },
          rr = { current: null },
          ro = { current: !1 },
          ra = [...eT, tY, t2],
          rl = (t) => ra.find(eb(t)),
          rh = new WeakMap(),
          ru = [
            'AnimationStart',
            'AnimationComplete',
            'Update',
            'BeforeLayoutMeasure',
            'LayoutMeasure',
            'LayoutAnimationStart',
            'LayoutAnimationComplete',
          ];
        class rd {
          scrapeMotionValuesFromProps(t, e, i) {
            return {};
          }
          constructor(
            {
              parent: t,
              props: e,
              presenceContext: i,
              reducedMotionConfig: s,
              blockInitialAnimation: n,
              visualState: r,
            },
            o = {}
          ) {
            (this.current = null),
              (this.children = new Set()),
              (this.isVariantNode = !1),
              (this.isControllingVariants = !1),
              (this.shouldReduceMotion = null),
              (this.values = new Map()),
              (this.KeyframeResolver = ef),
              (this.features = {}),
              (this.valueSubscriptions = new Map()),
              (this.prevMotionValues = {}),
              (this.events = {}),
              (this.propEventSubscriptions = {}),
              (this.notifyUpdate = () =>
                this.notify('Update', this.latestValues)),
              (this.render = () => {
                this.current &&
                  (this.triggerBuild(),
                  this.renderInstance(
                    this.current,
                    this.renderState,
                    this.props.style,
                    this.projection
                  ));
              }),
              (this.renderScheduledAt = 0),
              (this.scheduleRender = () => {
                let t = ti.now();
                this.renderScheduledAt < t &&
                  ((this.renderScheduledAt = t), _.render(this.render, !1, !0));
              });
            let { latestValues: a, renderState: l, onUpdate: h } = r;
            (this.onUpdate = h),
              (this.latestValues = a),
              (this.baseTarget = { ...a }),
              (this.initialValues = e.initial ? { ...a } : {}),
              (this.renderState = l),
              (this.parent = t),
              (this.props = e),
              (this.presenceContext = i),
              (this.depth = t ? t.depth + 1 : 0),
              (this.reducedMotionConfig = s),
              (this.options = o),
              (this.blockInitialAnimation = !!n),
              (this.isControllingVariants = nk(e)),
              (this.isVariantNode = nB(e)),
              this.isVariantNode && (this.variantChildren = new Set()),
              (this.manuallyAnimateOnMount = !!(t && t.current));
            let { willChange: u, ...d } = this.scrapeMotionValuesFromProps(
              e,
              {},
              this
            );
            for (let t in d) {
              let e = d[t];
              void 0 !== a[t] && tu(e) && e.set(a[t], !1);
            }
          }
          mount(t) {
            (this.current = t),
              rh.set(t, this),
              this.projection &&
                !this.projection.instance &&
                this.projection.mount(t),
              this.parent &&
                this.isVariantNode &&
                !this.isControllingVariants &&
                (this.removeFromVariantTree =
                  this.parent.addVariantChild(this)),
              this.values.forEach((t, e) => this.bindToMotionValue(e, t)),
              ro.current ||
                (function () {
                  if (((ro.current = !0), nI)) {
                    if (window.matchMedia) {
                      let t = window.matchMedia('(prefers-reduced-motion)'),
                        e = () => (rr.current = t.matches);
                      t.addListener(e), e();
                    } else rr.current = !1;
                  }
                })(),
              (this.shouldReduceMotion =
                'never' !== this.reducedMotionConfig &&
                ('always' === this.reducedMotionConfig || rr.current)),
              this.parent && this.parent.children.add(this),
              this.update(this.props, this.presenceContext);
          }
          unmount() {
            for (let t in (this.projection && this.projection.unmount(),
            Z(this.notifyUpdate),
            Z(this.render),
            this.valueSubscriptions.forEach((t) => t()),
            this.valueSubscriptions.clear(),
            this.removeFromVariantTree && this.removeFromVariantTree(),
            this.parent && this.parent.children.delete(this),
            this.events))
              this.events[t].clear();
            for (let t in this.features) {
              let e = this.features[t];
              e && (e.unmount(), (e.isMounted = !1));
            }
            this.current = null;
          }
          bindToMotionValue(t, e) {
            let i;
            this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)();
            let s = W.has(t);
            s && this.onBindTransform && this.onBindTransform();
            let n = e.on('change', (e) => {
                (this.latestValues[t] = e),
                  this.props.onUpdate && _.preRender(this.notifyUpdate),
                  s &&
                    this.projection &&
                    (this.projection.isTransformDirty = !0);
              }),
              r = e.on('renderRequest', this.scheduleRender);
            window.MotionCheckAppearSync &&
              (i = window.MotionCheckAppearSync(this, t, e)),
              this.valueSubscriptions.set(t, () => {
                n(), r(), i && i(), e.owner && e.stop();
              });
          }
          sortNodePosition(t) {
            return this.current &&
              this.sortInstanceNodePosition &&
              this.type === t.type
              ? this.sortInstanceNodePosition(this.current, t.current)
              : 0;
          }
          updateFeatures() {
            let t = 'animation';
            for (t in nU) {
              let e = nU[t];
              if (!e) continue;
              let { isEnabled: i, Feature: s } = e;
              if (
                (!this.features[t] &&
                  s &&
                  i(this.props) &&
                  (this.features[t] = new s(this)),
                this.features[t])
              ) {
                let e = this.features[t];
                e.isMounted ? e.update() : (e.mount(), (e.isMounted = !0));
              }
            }
          }
          triggerBuild() {
            this.build(this.renderState, this.latestValues, this.props);
          }
          measureViewportBox() {
            return this.current
              ? this.measureInstanceViewportBox(this.current, this.props)
              : iG();
          }
          getStaticValue(t) {
            return this.latestValues[t];
          }
          setStaticValue(t, e) {
            this.latestValues[t] = e;
          }
          update(t, e) {
            (t.transformTemplate || this.props.transformTemplate) &&
              this.scheduleRender(),
              (this.prevProps = this.props),
              (this.props = t),
              (this.prevPresenceContext = this.presenceContext),
              (this.presenceContext = e);
            for (let e = 0; e < ru.length; e++) {
              let i = ru[e];
              this.propEventSubscriptions[i] &&
                (this.propEventSubscriptions[i](),
                delete this.propEventSubscriptions[i]);
              let s = t['on' + i];
              s && (this.propEventSubscriptions[i] = this.on(i, s));
            }
            (this.prevMotionValues = (function (t, e, i) {
              for (let s in e) {
                let n = e[s],
                  r = i[s];
                if (tu(n)) t.addValue(s, n);
                else if (tu(r)) t.addValue(s, th(n, { owner: t }));
                else if (r !== n) {
                  if (t.hasValue(s)) {
                    let e = t.getValue(s);
                    !0 === e.liveStyle ? e.jump(n) : e.hasAnimated || e.set(n);
                  } else {
                    let e = t.getStaticValue(s);
                    t.addValue(s, th(void 0 !== e ? e : n, { owner: t }));
                  }
                }
              }
              for (let s in i) void 0 === e[s] && t.removeValue(s);
              return e;
            })(
              this,
              this.scrapeMotionValuesFromProps(t, this.prevProps, this),
              this.prevMotionValues
            )),
              this.handleChildMotionValue && this.handleChildMotionValue(),
              this.onUpdate && this.onUpdate(this);
          }
          getProps() {
            return this.props;
          }
          getVariant(t) {
            return this.props.variants ? this.props.variants[t] : void 0;
          }
          getDefaultTransition() {
            return this.props.transition;
          }
          getTransformPagePoint() {
            return this.props.transformPagePoint;
          }
          getClosestVariantNode() {
            return this.isVariantNode
              ? this
              : this.parent
                ? this.parent.getClosestVariantNode()
                : void 0;
          }
          addVariantChild(t) {
            let e = this.getClosestVariantNode();
            if (e)
              return (
                e.variantChildren && e.variantChildren.add(t),
                () => e.variantChildren.delete(t)
              );
          }
          addValue(t, e) {
            let i = this.values.get(t);
            e !== i &&
              (i && this.removeValue(t),
              this.bindToMotionValue(t, e),
              this.values.set(t, e),
              (this.latestValues[t] = e.get()));
          }
          removeValue(t) {
            this.values.delete(t);
            let e = this.valueSubscriptions.get(t);
            e && (e(), this.valueSubscriptions.delete(t)),
              delete this.latestValues[t],
              this.removeValueFromRenderState(t, this.renderState);
          }
          hasValue(t) {
            return this.values.has(t);
          }
          getValue(t, e) {
            if (this.props.values && this.props.values[t])
              return this.props.values[t];
            let i = this.values.get(t);
            return (
              void 0 === i &&
                void 0 !== e &&
                ((i = th(null === e ? void 0 : e, { owner: this })),
                this.addValue(t, i)),
              i
            );
          }
          readValue(t, e) {
            var i;
            let s =
              void 0 === this.latestValues[t] && this.current
                ? null !== (i = this.getBaseTargetFromProps(this.props, t)) &&
                  void 0 !== i
                  ? i
                  : this.readValueFromInstance(this.current, t, this.options)
                : this.latestValues[t];
            return (
              null != s &&
                ('string' == typeof s && (eg(s) || tE(s))
                  ? (s = parseFloat(s))
                  : !rl(s) && t2.test(e) && (s = ei(t, e)),
                this.setBaseTarget(t, tu(s) ? s.get() : s)),
              tu(s) ? s.get() : s
            );
          }
          setBaseTarget(t, e) {
            this.baseTarget[t] = e;
          }
          getBaseTarget(t) {
            var e;
            let i;
            let { initial: s } = this.props;
            if ('string' == typeof s || 'object' == typeof s) {
              let n = h(
                this.props,
                s,
                null === (e = this.presenceContext) || void 0 === e
                  ? void 0
                  : e.custom
              );
              n && (i = n[t]);
            }
            if (s && void 0 !== i) return i;
            let n = this.getBaseTargetFromProps(this.props, t);
            return void 0 === n || tu(n)
              ? void 0 !== this.initialValues[t] && void 0 === i
                ? void 0
                : this.baseTarget[t]
              : n;
          }
          on(t, e) {
            return (
              this.events[t] || (this.events[t] = new tr()),
              this.events[t].add(e)
            );
          }
          notify(t, ...e) {
            this.events[t] && this.events[t].notify(...e);
          }
        }
        class rc extends rd {
          constructor() {
            super(...arguments), (this.KeyframeResolver = eE);
          }
          sortInstanceNodePosition(t, e) {
            return 2 & t.compareDocumentPosition(e) ? 1 : -1;
          }
          getBaseTargetFromProps(t, e) {
            return t.style ? t.style[e] : void 0;
          }
          removeValueFromRenderState(t, { vars: e, style: i }) {
            delete e[t], delete i[t];
          }
          handleChildMotionValue() {
            this.childSubscription &&
              (this.childSubscription(), delete this.childSubscription);
            let { children: t } = this.props;
            tu(t) &&
              (this.childSubscription = t.on('change', (t) => {
                this.current && (this.current.textContent = `${t}`);
              }));
          }
        }
        class rp extends rc {
          constructor() {
            super(...arguments),
              (this.type = 'html'),
              (this.renderInstance = n7);
          }
          readValueFromInstance(t, e) {
            if (W.has(e)) {
              let t = ee(e);
              return (t && t.default) || 0;
            }
            {
              let i = window.getComputedStyle(t),
                s = (eA(e) ? i.getPropertyValue(e) : i[e]) || 0;
              return 'string' == typeof s ? s.trim() : s;
            }
          }
          measureInstanceViewportBox(t, { transformPagePoint: e }) {
            return i5(t, e);
          }
          build(t, e, i) {
            nH(t, e, i.transformTemplate);
          }
          scrapeMotionValuesFromProps(t, e, i) {
            return n9(t, e, i);
          }
        }
        class rm extends rc {
          constructor() {
            super(...arguments),
              (this.type = 'svg'),
              (this.isSVGTag = !1),
              (this.measureInstanceViewportBox = iG),
              (this.updateDimensions = () => {
                this.current &&
                  !this.renderState.dimensions &&
                  n8(this.current, this.renderState);
              });
          }
          getBaseTargetFromProps(t, e) {
            return t[e];
          }
          readValueFromInstance(t, e) {
            if (W.has(e)) {
              let t = ee(e);
              return (t && t.default) || 0;
            }
            return (e = rt.has(e) ? e : tc(e)), t.getAttribute(e);
          }
          scrapeMotionValuesFromProps(t, e, i) {
            return ri(t, e, i);
          }
          onBindTransform() {
            this.current &&
              !this.renderState.dimensions &&
              _.postRender(this.updateDimensions);
          }
          build(t, e, i) {
            n3(t, e, this.isSVGTag, i.transformTemplate);
          }
          renderInstance(t, e, i, s) {
            re(t, e, i, s);
          }
          mount(t) {
            (this.isSVGTag = n5(t.tagName)), super.mount(t);
          }
        }
        let rf = (function (t) {
          if ('undefined' == typeof Proxy) return t;
          let e = new Map();
          return new Proxy((...e) => t(...e), {
            get: (i, s) =>
              'create' === s ? t : (e.has(s) || e.set(s, t(s)), e.get(s)),
          });
        })(
          ((n = {
            animation: { Feature: iM },
            exit: { Feature: ij },
            inView: { Feature: nM },
            tap: { Feature: nb },
            focus: { Feature: nP },
            hover: { Feature: nx },
            pan: { Feature: sc },
            drag: { Feature: su, ProjectionNode: nA, MeasureLayout: sb },
            layout: { ProjectionNode: nA, MeasureLayout: sb },
          }),
          (r = (t, e) =>
            nZ(t)
              ? new rm(e)
              : new rp(e, { allowProjection: t !== a.Fragment })),
          function (t, { forwardMotionProps: e } = { forwardMotionProps: !1 }) {
            return (function ({
              preloadedFeatures: t,
              createVisualElement: e,
              useRender: i,
              useVisualState: s,
              Component: n,
            }) {
              var r, l;
              function h(t, r) {
                var l;
                let h;
                let u = {
                    ...(0, a.useContext)(nj),
                    ...t,
                    layoutId: (function ({ layoutId: t }) {
                      let e = (0, a.useContext)(sm).id;
                      return e && void 0 !== t ? e + '-' + t : t;
                    })(t),
                  },
                  { isStatic: d } = u,
                  c = (function (t) {
                    let { initial: e, animate: i } = (function (t, e) {
                      if (nk(t)) {
                        let { initial: e, animate: i } = t;
                        return {
                          initial: !1 === e || ix(e) ? e : void 0,
                          animate: ix(i) ? i : void 0,
                        };
                      }
                      return !1 !== t.inherit ? e : {};
                    })(t, (0, a.useContext)(nR));
                    return (0, a.useMemo)(
                      () => ({ initial: e, animate: i }),
                      [nF(e), nF(i)]
                    );
                  })(t),
                  p = s(t, d);
                if (!d && nI) {
                  (0, a.useContext)(nV).strict;
                  let t = (function (t) {
                    let { drag: e, layout: i } = nU;
                    if (!e && !i) return {};
                    let s = { ...e, ...i };
                    return {
                      MeasureLayout:
                        (null == e ? void 0 : e.isEnabled(t)) ||
                        (null == i ? void 0 : i.isEnabled(t))
                          ? s.MeasureLayout
                          : void 0,
                      ProjectionNode: s.ProjectionNode,
                    };
                  })(u);
                  (h = t.MeasureLayout),
                    (c.visualElement = (function (t, e, i, s, n) {
                      var r, o;
                      let { visualElement: l } = (0, a.useContext)(nR),
                        h = (0, a.useContext)(nV),
                        u = (0, a.useContext)(sp),
                        d = (0, a.useContext)(nj).reducedMotion,
                        c = (0, a.useRef)(null);
                      (s = s || h.renderer),
                        !c.current &&
                          s &&
                          (c.current = s(t, {
                            visualState: e,
                            parent: l,
                            props: i,
                            presenceContext: u,
                            blockInitialAnimation: !!u && !1 === u.initial,
                            reducedMotionConfig: d,
                          }));
                      let p = c.current,
                        m = (0, a.useContext)(sf);
                      p &&
                        !p.projection &&
                        n &&
                        ('html' === p.type || 'svg' === p.type) &&
                        (function (t, e, i, s) {
                          let {
                            layoutId: n,
                            layout: r,
                            drag: o,
                            dragConstraints: a,
                            layoutScroll: l,
                            layoutRoot: h,
                          } = e;
                          (t.projection = new i(
                            t.latestValues,
                            e['data-framer-portal-id']
                              ? void 0
                              : (function t(e) {
                                  if (e)
                                    return !1 !== e.options.allowProjection
                                      ? e.projection
                                      : t(e.parent);
                                })(t.parent)
                          )),
                            t.projection.setOptions({
                              layoutId: n,
                              layout: r,
                              alwaysMeasureLayout: !!o || (a && i4(a)),
                              visualElement: t,
                              animationType: 'string' == typeof r ? r : 'both',
                              initialPromotionConfig: s,
                              layoutScroll: l,
                              layoutRoot: h,
                            });
                        })(c.current, i, n, m);
                      let f = (0, a.useRef)(!1);
                      (0, a.useInsertionEffect)(() => {
                        p && f.current && p.update(i, u);
                      });
                      let g = i[tp],
                        v = (0, a.useRef)(
                          !!g &&
                            !(null === (r = window.MotionHandoffIsComplete) ||
                            void 0 === r
                              ? void 0
                              : r.call(window, g)) &&
                            (null ===
                              (o = window.MotionHasOptimisedAnimation) ||
                            void 0 === o
                              ? void 0
                              : o.call(window, g))
                        );
                      return (
                        nN(() => {
                          p &&
                            ((f.current = !0),
                            (window.MotionIsMounted = !0),
                            p.updateFeatures(),
                            sg.render(p.render),
                            v.current &&
                              p.animationState &&
                              p.animationState.animateChanges());
                        }),
                        (0, a.useEffect)(() => {
                          p &&
                            (!v.current &&
                              p.animationState &&
                              p.animationState.animateChanges(),
                            v.current &&
                              (queueMicrotask(() => {
                                var t;
                                null ===
                                  (t = window.MotionHandoffMarkAsComplete) ||
                                  void 0 === t ||
                                  t.call(window, g);
                              }),
                              (v.current = !1)));
                        }),
                        p
                      );
                    })(n, p, u, e, t.ProjectionNode));
                }
                return (0, o.jsxs)(nR.Provider, {
                  value: c,
                  children: [
                    h && c.visualElement
                      ? (0, o.jsx)(h, { visualElement: c.visualElement, ...u })
                      : null,
                    i(
                      n,
                      t,
                      ((l = c.visualElement),
                      (0, a.useCallback)(
                        (t) => {
                          t && p.onMount && p.onMount(t),
                            l && (t ? l.mount(t) : l.unmount()),
                            r &&
                              ('function' == typeof r
                                ? r(t)
                                : i4(r) && (r.current = t));
                        },
                        [l]
                      )),
                      p,
                      d,
                      c.visualElement
                    ),
                  ],
                });
              }
              t &&
                (function (t) {
                  for (let e in t) nU[e] = { ...nU[e], ...t[e] };
                })(t),
                (h.displayName = `motion.${'string' == typeof n ? n : `create(${null !== (l = null !== (r = n.displayName) && void 0 !== r ? r : n.name) && void 0 !== l ? l : ''})`}`);
              let u = (0, a.forwardRef)(h);
              return (u[nO] = n), u;
            })({
              ...(nZ(t) ? rn : n6),
              preloadedFeatures: n,
              useRender: (function (t = !1) {
                return (e, i, s, { latestValues: n }, r) => {
                  let o = (
                      nZ(e)
                        ? function (t, e, i, s) {
                            let n = (0, a.useMemo)(() => {
                              let i = n2();
                              return (
                                n3(i, e, n5(s), t.transformTemplate),
                                { ...i.attrs, style: { ...i.style } }
                              );
                            }, [e]);
                            if (t.style) {
                              let e = {};
                              nz(e, t.style, t),
                                (n.style = { ...e, ...n.style });
                            }
                            return n;
                          }
                        : function (t, e) {
                            let i = {},
                              s = (function (t, e) {
                                let i = t.style || {},
                                  s = {};
                                return (
                                  nz(s, i, t),
                                  Object.assign(
                                    s,
                                    (function ({ transformTemplate: t }, e) {
                                      return (0, a.useMemo)(() => {
                                        let i = nG();
                                        return (
                                          nH(i, e, t),
                                          Object.assign({}, i.vars, i.style)
                                        );
                                      }, [e]);
                                    })(t, e)
                                  ),
                                  s
                                );
                              })(t, e);
                            return (
                              t.drag &&
                                !1 !== t.dragListener &&
                                ((i.draggable = !1),
                                (s.userSelect =
                                  s.WebkitUserSelect =
                                  s.WebkitTouchCallout =
                                    'none'),
                                (s.touchAction =
                                  !0 === t.drag
                                    ? 'none'
                                    : `pan-${'x' === t.drag ? 'y' : 'x'}`)),
                              void 0 === t.tabIndex &&
                                (t.onTap || t.onTapStart || t.whileTap) &&
                                (i.tabIndex = 0),
                              (i.style = s),
                              i
                            );
                          }
                    )(i, n, r, e),
                    l = (function (t, e, i) {
                      let s = {};
                      for (let n in t)
                        ('values' !== n || 'object' != typeof t.values) &&
                          (nK(n) ||
                            (!0 === i && nq(n)) ||
                            (!e && !nq(n)) ||
                            (t.draggable && n.startsWith('onDrag'))) &&
                          (s[n] = t[n]);
                      return s;
                    })(i, 'string' == typeof e, t),
                    h = e !== a.Fragment ? { ...l, ...o, ref: s } : {},
                    { children: u } = i,
                    d = (0, a.useMemo)(() => (tu(u) ? u.get() : u), [u]);
                  return (0, a.createElement)(e, { ...h, children: d });
                };
              })(e),
              createVisualElement: r,
              Component: t,
            });
          })
        );
        var rg = i(45103),
          rv = i(28531),
          rA = i.n(rv);
        let ry = {
          src: '/_next/static/media/Image1.25db3b2e.png',
          height: 1024,
          width: 1792,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAAV1BMVEVrdVyRoY17mmZvbkhni1eXu4Z4flRmglSCo2OBqXHc1qprgWrFv4+vmVx3nXdukmZxj0eVlWxXbkCXr3K0tG5jgofVz3pRc1OhoVaGfEmhxZudpD2ZpplfqqHWAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAANElEQVR4nAXBCwJAIBAFwLfsL6FQSN3/nGZQadD+xBPrchf/kqFtb88SHLNeHiZhQA82A34w3QHOwxzwcgAAAABJRU5ErkJggg==',
          blurWidth: 8,
          blurHeight: 5,
        };
        var rx = i(81480),
          rP = i(78377);
        let rw = [
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
          rb = {
            hidden: { opacity: 0, y: 50 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.8, ease: 'easeOut' },
            },
          },
          rT = () => {
            let [t, e] = (0, a.useState)(0);
            return (
              (0, a.useEffect)(() => {
                let t = setInterval(() => {
                  e((t) => (t + 1) % rw.length);
                }, 4e3);
                return () => clearInterval(t);
              }, []),
              (0, o.jsxs)('div', {
                children: [
                  (0, o.jsx)(rf.section, {
                    id: 'home',
                    className: 'home-section',
                    style: { backgroundImage: `url(${rw[t].src})` },
                    initial: 'hidden',
                    whileInView: 'visible',
                    viewport: { once: !0 },
                    variants: rb,
                    children: (0, o.jsx)('div', {
                      className: 'hero-container',
                      children: (0, o.jsxs)('div', {
                        className: 'hero-content',
                        children: [
                          (0, o.jsxs)('h1', {
                            children: [
                              'Welcome to ',
                              (0, o.jsx)('span', {
                                className: 'highlight',
                                children: 'Hydroleaf',
                              }),
                              ' – The Future of Smart Farming',
                            ],
                          }),
                          (0, o.jsxs)('p', {
                            className: 'hero-text',
                            children: [
                              'Transforming agriculture with',
                              ' ',
                              (0, o.jsx)('strong', {
                                children:
                                  'AI & IoT-driven hydroponic solutions',
                              }),
                              '. ',
                              (0, o.jsx)('br', {}),
                              'Maximize yield, conserve resources, and embrace a',
                              ' ',
                              (0, o.jsx)('strong', {
                                children: 'sustainable future',
                              }),
                              '.',
                            ],
                          }),
                        ],
                      }),
                    }),
                  }),
                  (0, o.jsxs)(rf.section, {
                    id: 'features',
                    className: 'features-section',
                    initial: 'hidden',
                    whileInView: 'visible',
                    viewport: { once: !0 },
                    variants: rb,
                    children: [
                      (0, o.jsx)('h2', {
                        children: (0, o.jsx)('strong', {
                          children: 'Why Choose Hydroleaf?',
                        }),
                      }),
                      (0, o.jsxs)('div', {
                        className: 'features-grid',
                        children: [
                          (0, o.jsxs)('div', {
                            className: 'feature-item',
                            children: [
                              (0, o.jsx)('h3', {
                                children: '\uD83C\uDF31 Sustainable Farming',
                              }),
                              (0, o.jsxs)('p', {
                                children: [
                                  'Experience next-gen agriculture with',
                                  ' ',
                                  (0, o.jsx)('strong', {
                                    children: 'precision hydroponics',
                                  }),
                                  '.',
                                ],
                              }),
                            ],
                          }),
                          (0, o.jsxs)('div', {
                            className: 'feature-item',
                            children: [
                              (0, o.jsx)('h3', {
                                children: '\uD83E\uDD16 AI & IoT Integration',
                              }),
                              (0, o.jsxs)('p', {
                                children: [
                                  'Our ',
                                  (0, o.jsx)('strong', {
                                    children: 'intelligent automation system',
                                  }),
                                  ' optimizes plant growth conditions.',
                                ],
                              }),
                            ],
                          }),
                          (0, o.jsxs)('div', {
                            className: 'feature-item',
                            children: [
                              (0, o.jsx)('h3', {
                                children: '\uD83D\uDCA7 Water Efficiency',
                              }),
                              (0, o.jsxs)('p', {
                                children: [
                                  'Reduce water consumption by ',
                                  (0, o.jsx)('strong', {
                                    children: 'up to 90%',
                                  }),
                                  ', making farming eco-friendly.',
                                ],
                              }),
                            ],
                          }),
                          (0, o.jsxs)('div', {
                            className: 'feature-item',
                            children: [
                              (0, o.jsx)('h3', {
                                children: '\uD83C\uDF0D Eco-Friendly Solutions',
                              }),
                              (0, o.jsxs)('p', {
                                children: [
                                  'Grow healthier plants while',
                                  ' ',
                                  (0, o.jsx)('strong', {
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
                  (0, o.jsxs)(rf.section, {
                    id: 'how-it-works',
                    className: 'how-it-works-section',
                    initial: 'hidden',
                    whileInView: 'visible',
                    viewport: { once: !0 },
                    variants: rb,
                    children: [
                      (0, o.jsx)('h2', {
                        children: (0, o.jsx)('strong', {
                          children: 'How Hydroleaf Works',
                        }),
                      }),
                      (0, o.jsxs)('p', {
                        children: [
                          'Our AI-powered hydroponic system ',
                          (0, o.jsx)('strong', { children: 'automates' }),
                          ' and',
                          ' ',
                          (0, o.jsx)('strong', { children: 'optimizes' }),
                          ' farming:',
                        ],
                      }),
                      (0, o.jsxs)('div', {
                        className: 'steps-grid',
                        children: [
                          (0, o.jsxs)('div', {
                            className: 'step-item',
                            children: [
                              (0, o.jsx)(rg.default, {
                                src: rx.default,
                                alt: 'Smart Sensors',
                              }),
                              (0, o.jsx)('h3', {
                                children: '\uD83D\uDCCA Real-Time Monitoring',
                              }),
                            ],
                          }),
                          (0, o.jsxs)('div', {
                            className: 'step-item',
                            children: [
                              (0, o.jsx)(rg.default, {
                                src: rP.A,
                                alt: 'Automated System',
                              }),
                              (0, o.jsx)('h3', {
                                children: '\uD83D\uDCA1 Intelligent Automation',
                              }),
                            ],
                          }),
                          (0, o.jsxs)('div', {
                            className: 'step-item',
                            children: [
                              (0, o.jsx)(rg.default, {
                                src: ry,
                                alt: 'Data Insights',
                              }),
                              (0, o.jsx)('h3', {
                                children: '\uD83D\uDCC8 Data-Driven Insights',
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, o.jsxs)(rf.section, {
                    id: 'cta',
                    className: 'cta-section',
                    initial: 'hidden',
                    whileInView: 'visible',
                    viewport: { once: !0 },
                    variants: rb,
                    children: [
                      (0, o.jsx)('h2', {
                        children: (0, o.jsx)('strong', {
                          children: 'Join the Future of Smart Farming',
                        }),
                      }),
                      (0, o.jsxs)('p', {
                        children: [
                          'Find the perfect ',
                          (0, o.jsx)('strong', {
                            children: 'hydroponic solution',
                          }),
                          ' for you.',
                        ],
                      }),
                      (0, o.jsx)(rA(), {
                        href: '/device',
                        className: 'btn primary-btn',
                        children: 'Explore Our Technology',
                      }),
                      (0, o.jsx)(rA(), {
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
      61377: (t, e, i) => {
        'use strict';
        i.r(e), i.d(e, { default: () => s });
        let s = (0, i(46760).registerClientReference)(
          function () {
            throw Error(
              'Attempted to call the default export of "C:\\\\Users\\\\Admin\\\\New folder (2)\\\\Hydroleaf_frontend\\\\src\\\\app\\\\page.tsx" from the server, but it\'s on the client. It\'s not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.'
            );
          },
          'C:\\Users\\Admin\\New folder (2)\\Hydroleaf_frontend\\src\\app\\page.tsx',
          'default'
        );
      },
      81480: (t, e, i) => {
        'use strict';
        i.r(e), i.d(e, { default: () => s });
        let s = {
          src: '/_next/static/media/Image2.48e1eb99.png',
          height: 1024,
          width: 1792,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAAQlBMVEWpqZiKjXqGiWaep3yrtq2uto3BxLWgqJejq41/kIqns36jqoedmYiQnGGVoXTS19GNpoejtbaSpJeLnXKlraaZqqTY6ZonAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAMUlEQVR4nAXBiQHAIAgAsVNRQOvf7r9qE8IDIu5EpbWkYLlmqxZJfaziX6DoPVP2+wMWTQFG8EHKBAAAAABJRU5ErkJggg==',
          blurWidth: 8,
          blurHeight: 5,
        };
      },
      78377: (t, e, i) => {
        'use strict';
        i.d(e, { A: () => s });
        let s = {
          src: '/_next/static/media/Image3.60ea571f.png',
          height: 1024,
          width: 1792,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAASFBMVEVrZkmLeU58cVuJcF2AemV/cE5WWk+TfliJZU6LinqJgVlyblR6ZUqikX13cGdzgFxzgFp2i23MnmerkoF/fG9xeEFbVkHIooKbzDdFAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAMUlEQVR4nAXBBwIAEAwEsCulam///6kE2xu4aRWa02AB4FPr0d0DwxSFJKOGsIp95QMezwF3JrHMEQAAAABJRU5ErkJggg==',
          blurWidth: 8,
          blurHeight: 5,
        };
      },
      20168: () => {},
    });
  var e = require('../webpack-runtime.js');
  e.C(t);
  var i = (t) => e((e.s = t)),
    s = e.X(0, [994, 187, 434, 613, 981], () => i(35694));
  module.exports = s;
})();
