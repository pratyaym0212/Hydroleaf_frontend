(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["chunks/[root of the server]__45432f._.js", {

"[externals]/node:async_hooks [external] (node:async_hooks, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
const mod = __turbopack_external_require__("node:async_hooks", () => require("node:async_hooks"));

module.exports = mod;
}}),
"[externals]/node:buffer [external] (node:buffer, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
const mod = __turbopack_external_require__("node:buffer", () => require("node:buffer"));

module.exports = mod;
}}),
"[project]/src/paraglide/runtime.js [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/* eslint-disable */ /** @type {((tag: AvailableLanguageTag) => void) | undefined} */ __turbopack_esm__({
    "availableLanguageTags": (()=>availableLanguageTags),
    "isAvailableLanguageTag": (()=>isAvailableLanguageTag),
    "languageTag": (()=>languageTag),
    "onSetLanguageTag": (()=>onSetLanguageTag),
    "setLanguageTag": (()=>setLanguageTag),
    "sourceLanguageTag": (()=>sourceLanguageTag)
});
let _onSetLanguageTag;
const sourceLanguageTag = "en";
const availableLanguageTags = [
    "en",
    "pl"
];
let languageTag = ()=>sourceLanguageTag;
const setLanguageTag = (tag)=>{
    if (typeof tag === "function") {
        languageTag = enforceLanguageTag(tag);
    } else {
        languageTag = enforceLanguageTag(()=>tag);
    }
    // call the callback function if it has been defined
    if (_onSetLanguageTag !== undefined) {
        _onSetLanguageTag(languageTag());
    }
};
/**
 * Wraps an untrusted function and enforces that it returns a language tag.
 * @param {() => AvailableLanguageTag} unsafeLanguageTag
 * @returns {() => AvailableLanguageTag}
 */ function enforceLanguageTag(unsafeLanguageTag) {
    return ()=>{
        const tag = unsafeLanguageTag();
        if (!isAvailableLanguageTag(tag)) {
            throw new Error(`languageTag() didn't return a valid language tag. Check your setLanguageTag call`);
        }
        return tag;
    };
}
const onSetLanguageTag = (fn)=>{
    _onSetLanguageTag = fn;
};
function isAvailableLanguageTag(thing) {
    return availableLanguageTags.includes(thing);
} // ------ TYPES ------
 /**
 * A language tag that is available in the project.
 *
 * @example
 *   setLanguageTag(request.languageTag as AvailableLanguageTag)
 *
 * @typedef {typeof availableLanguageTags[number]} AvailableLanguageTag
 */ 
}}),
"[project]/src/lib/i18n.ts [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "Link": (()=>Link),
    "middleware": (()=>middleware),
    "permanentRedirect": (()=>permanentRedirect),
    "redirect": (()=>redirect),
    "usePathname": (()=>usePathname),
    "useRouter": (()=>useRouter)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$inlang$2f$paraglide$2d$next$2f$dist$2f$app$2f$index$2e$server$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/@inlang/paraglide-next/dist/app/index.server.js [middleware] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$inlang$2f$paraglide$2d$next$2f$dist$2f$paraglide$2d$next$2f$src$2f$app$2f$routing$2d$strategy$2f$strats$2f$prefixStrategy$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@inlang/paraglide-next/dist/paraglide-next/src/app/routing-strategy/strats/prefixStrategy.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$inlang$2f$paraglide$2d$next$2f$dist$2f$paraglide$2d$next$2f$src$2f$app$2f$middleware$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@inlang/paraglide-next/dist/paraglide-next/src/app/middleware/index.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$inlang$2f$paraglide$2d$next$2f$dist$2f$paraglide$2d$next$2f$src$2f$app$2f$navigation$2f$navigation$2e$server$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@inlang/paraglide-next/dist/paraglide-next/src/app/navigation/navigation.server.js [middleware] (ecmascript)");
;
const strategy = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$inlang$2f$paraglide$2d$next$2f$dist$2f$paraglide$2d$next$2f$src$2f$app$2f$routing$2d$strategy$2f$strats$2f$prefixStrategy$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["PrefixStrategy"])({
    prefixDefault: 'never',
    // don't generate alternate routes for the api
    exclude: (pathname)=>{
        return pathname.startsWith('/api/') || pathname === '/api';
    }
});
const middleware = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$inlang$2f$paraglide$2d$next$2f$dist$2f$paraglide$2d$next$2f$src$2f$app$2f$middleware$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["Middleware"])({
    strategy
});
const { Link, useRouter, usePathname, redirect, permanentRedirect } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$inlang$2f$paraglide$2d$next$2f$dist$2f$paraglide$2d$next$2f$src$2f$app$2f$navigation$2f$navigation$2e$server$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["Navigation"])({
    strategy
});
}}),
"[project]/src/middleware.ts [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "config": (()=>config),
    "middleware": (()=>middleware)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/lib/i18n.ts [middleware] (ecmascript)");
;
function middleware(request) {
    const response = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__["middleware"])(request);
    return response;
}
const config = {
    matcher: [
        /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */ '/((?!api|_next/static|_next/image|favicon.ico).*)'
    ]
};
}}),
}]);

//# sourceMappingURL=%5Broot%20of%20the%20server%5D__45432f._.js.map