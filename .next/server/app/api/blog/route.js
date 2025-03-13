(() => {
  var e = {};
  (e.id = 778),
    (e.ids = [778]),
    (e.modules = {
      96330: (e) => {
        'use strict';
        e.exports = require('@prisma/client');
      },
      10846: (e) => {
        'use strict';
        e.exports = require('next/dist/compiled/next-server/app-page.runtime.prod.js');
      },
      44870: (e) => {
        'use strict';
        e.exports = require('next/dist/compiled/next-server/app-route.runtime.prod.js');
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
      55511: (e) => {
        'use strict';
        e.exports = require('crypto');
      },
      81729: (e, r, t) => {
        'use strict';
        t.r(r),
          t.d(r, {
            patchFetch: () => A,
            routeModule: () => v,
            serverHooks: () => E,
            workAsyncStorage: () => y,
            workUnitAsyncStorage: () => w,
          });
        var s = {};
        t.r(s),
          t.d(s, {
            DELETE: () => x,
            GET: () => g,
            PATCH: () => f,
            POST: () => m,
          });
        var n = t(42706),
          o = t(28203),
          a = t(45994),
          i = t(55511);
        let u = require('@aws-sdk/client-s3');
        var c = t(96330),
          p = t(39187);
        let l = new c.PrismaClient(),
          d = new u.S3Client({
            region: process.env.AWS_REGION,
            credentials: {
              accessKeyId: process.env.AWS_ACCESS_KEY,
              secretAccessKey: process.env.AWS_SECRET_KEY,
            },
          });
        async function g() {
          try {
            let e = await l.blog.findMany();
            return p.NextResponse.json(e, { status: 200 });
          } catch (e) {
            return (
              console.error('Error fetching blogs:', e),
              p.NextResponse.json(
                { error: 'Internal server error' },
                { status: 500 }
              )
            );
          }
        }
        async function m(e) {
          try {
            let r = await e.formData(),
              t = r.get('title'),
              s = r.get('content'),
              n = 'true' === r.get('reverse'),
              o = r.get('file');
            if (!t || !s || !o)
              return p.NextResponse.json(
                { error: 'Title, content, and image are required' },
                { status: 400 }
              );
            let a = `${(0, i.randomUUID)()}-${o.name}`,
              c = Buffer.from(await o.arrayBuffer());
            await d.send(
              new u.PutObjectCommand({
                Bucket: process.env.AWS_BUCKET_NAME,
                Key: a,
                Body: c,
                ContentType: o.type,
              })
            );
            let g = `https://${process.env.AWS_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/${a}`,
              m = await l.blog.create({
                data: { title: t, content: s, image: g, reverse: n },
              });
            return p.NextResponse.json(m, { status: 201 });
          } catch (e) {
            return (
              console.error('Error creating blog:', e),
              p.NextResponse.json(
                { error: 'Internal server error' },
                { status: 500 }
              )
            );
          }
        }
        async function f(e) {
          try {
            let r;
            let t = await e.formData(),
              s = t.get('id'),
              n = t.get('title'),
              o = t.get('content'),
              a = 'true' === t.get('reverse'),
              c = t.get('file');
            if (!s)
              return p.NextResponse.json(
                { error: 'Blog ID is required' },
                { status: 400 }
              );
            if (c) {
              let e = `${(0, i.randomUUID)()}-${c.name}`,
                t = Buffer.from(await c.arrayBuffer());
              await d.send(
                new u.PutObjectCommand({
                  Bucket: process.env.AWS_BUCKET_NAME,
                  Key: e,
                  Body: t,
                  ContentType: c.type,
                })
              ),
                (r = `https://${process.env.AWS_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/${e}`);
            }
            let g = await l.blog.update({
              where: { id: Number(s) },
              data: { title: n, content: o, image: r ?? void 0, reverse: a },
            });
            return p.NextResponse.json(g, { status: 200 });
          } catch (e) {
            return (
              console.error('Error updating blog:', e),
              p.NextResponse.json(
                { error: 'Internal server error' },
                { status: 500 }
              )
            );
          }
        }
        async function x(e) {
          try {
            let { id: r } = await e.json();
            if (!r)
              return p.NextResponse.json(
                { error: 'Blog ID is required' },
                { status: 400 }
              );
            return (
              await l.blog.delete({ where: { id: Number(r) } }),
              p.NextResponse.json(
                { message: 'Blog deleted successfully' },
                { status: 200 }
              )
            );
          } catch (e) {
            return (
              console.error('Error deleting blog:', e),
              p.NextResponse.json(
                { error: 'Internal server error' },
                { status: 500 }
              )
            );
          }
        }
        let v = new n.AppRouteRouteModule({
            definition: {
              kind: o.RouteKind.APP_ROUTE,
              page: '/api/blog/route',
              pathname: '/api/blog',
              filename: 'route',
              bundlePath: 'app/api/blog/route',
            },
            resolvedPagePath:
              'C:\\Users\\Admin\\New folder (2)\\Hydroleaf_frontend\\src\\app\\api\\blog\\route.tsx',
            nextConfigOutput: '',
            userland: s,
          }),
          { workAsyncStorage: y, workUnitAsyncStorage: w, serverHooks: E } = v;
        function A() {
          return (0, a.patchFetch)({
            workAsyncStorage: y,
            workUnitAsyncStorage: w,
          });
        }
      },
      96487: () => {},
      78335: () => {},
      42706: (e, r, t) => {
        'use strict';
        e.exports = t(44870);
      },
    });
  var r = require('../../../webpack-runtime.js');
  r.C(e);
  var t = (e) => r((r.s = e)),
    s = r.X(0, [994, 187], () => t(81729));
  module.exports = s;
})();
