(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/_592e38._.js", {

"[project]/src/paraglide/runtime.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/public/images/logo_transparent.png [app-client] (static)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_export_value__("/_next/static/media/logo_transparent.f89089b4.png");}}),
"[project]/public/images/logo_transparent.png.mjs { IMAGE => \"[project]/public/images/logo_transparent.png [app-client] (static)\" } [app-client] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$logo_transparent$2e$png__$5b$app$2d$client$5d$__$28$static$29$__ = __turbopack_import__("[project]/public/images/logo_transparent.png [app-client] (static)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$logo_transparent$2e$png__$5b$app$2d$client$5d$__$28$static$29$__["default"],
    width: 1024,
    height: 1024,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAnUlEQVR42pVPOwuCUBi1+3FfaVgWWmOUEAVBEWhDBKGLcw+3HIQKGtwCbe9PFHGpH1ougrjoGc+Dc44kVQFvcFnrtXTMMM0JtT8UTWm6Vyf0H/v7wB7OUy4zpIlN5Jz8T/Dcfo+v9c2NiEzqmQEBgnFoBStxEMv3Tphn+4Iw4FxNZ9afThIvHsVe0rbMRWEgMEKZoeq0qxrAKS/97Ad6kBZVN9JhWAAAAABJRU5ErkJggg==",
    blurWidth: 8,
    blurHeight: 8
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/navbar/navbar.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$logo_transparent$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$logo_transparent$2e$png__$5b$app$2d$client$5d$__$28$static$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_import__('[project]/public/images/logo_transparent.png.mjs { IMAGE => "[project]/public/images/logo_transparent.png [app-client] (static)" } [app-client] (structured image object, ecmascript)');
;
var _s = __turbopack_refresh__.signature();
'use client';
;
;
;
;
const Navbar = ()=>{
    _s();
    const [scrolled, setScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navbar.useEffect": ()=>{
            const handleScroll = {
                "Navbar.useEffect.handleScroll": ()=>{
                    setScrolled(window.scrollY > 50);
                }
            }["Navbar.useEffect.handleScroll"];
            window.addEventListener('scroll', handleScroll);
            return ({
                "Navbar.useEffect": ()=>window.removeEventListener('scroll', handleScroll)
            })["Navbar.useEffect"];
        }
    }["Navbar.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: `navbar ${scrolled ? 'scrolled' : ''}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "logo-container page-transition",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$logo_transparent$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$logo_transparent$2e$png__$5b$app$2d$client$5d$__$28$static$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
                    alt: "Hydroleaf Logo",
                    className: "logo",
                    width: 150,
                    height: 50
                }, void 0, false, {
                    fileName: "[project]/src/components/navbar/navbar.tsx",
                    lineNumber: 23,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/navbar/navbar.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/",
                        children: "Home"
                    }, void 0, false, {
                        fileName: "[project]/src/components/navbar/navbar.tsx",
                        lineNumber: 32,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/device",
                        children: "Device"
                    }, void 0, false, {
                        fileName: "[project]/src/components/navbar/navbar.tsx",
                        lineNumber: 33,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/journey",
                        children: "Journey"
                    }, void 0, false, {
                        fileName: "[project]/src/components/navbar/navbar.tsx",
                        lineNumber: 34,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/technology",
                        children: "Technology"
                    }, void 0, false, {
                        fileName: "[project]/src/components/navbar/navbar.tsx",
                        lineNumber: 35,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/blog",
                        children: "Blog"
                    }, void 0, false, {
                        fileName: "[project]/src/components/navbar/navbar.tsx",
                        lineNumber: 36,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/contact",
                        children: "Contact"
                    }, void 0, false, {
                        fileName: "[project]/src/components/navbar/navbar.tsx",
                        lineNumber: 37,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/navbar/navbar.tsx",
                lineNumber: 31,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/navbar/navbar.tsx",
        lineNumber: 21,
        columnNumber: 5
    }, this);
};
_s(Navbar, "tQtW9FyKD+Ut/6k+f0BCbABprL4=");
_c = Navbar;
const __TURBOPACK__default__export__ = Navbar;
var _c;
__turbopack_refresh__.register(_c, "Navbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/theme-provider.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "ThemeProvider": (()=>ThemeProvider)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next-themes/dist/index.mjs [app-client] (ecmascript)");
'use client';
;
;
const ThemeProvider = ({ children, ...props })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThemeProvider"], {
        ...props,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/theme-provider.tsx",
        lineNumber: 9,
        columnNumber: 10
    }, this);
};
_c = ThemeProvider;
var _c;
__turbopack_refresh__.register(_c, "ThemeProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/icons.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "Icons": (()=>Icons)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/sun.js [app-client] (ecmascript) <export default as Sun>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/moon.js [app-client] (ecmascript) <export default as Moon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/log-out.js [app-client] (ecmascript) <export default as LogOut>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
;
;
const Icons = {
    sun: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__["Sun"],
    moon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__["Moon"],
    logOut: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__["LogOut"],
    loader: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"],
    github: (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            viewBox: "0 0 438.549 438.549",
            ...props,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                fill: "currentColor",
                d: "M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z"
            }, void 0, false, {
                fileName: "[project]/src/components/icons.tsx",
                lineNumber: 10,
                columnNumber: 7
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/icons.tsx",
            lineNumber: 9,
            columnNumber: 5
        }, this)
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/lib/utils.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "cn": (()=>cn)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
const cn = (...inputs)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ui/button.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "Button": (()=>Button),
    "buttonVariants": (()=>buttonVariants)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
;
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])('inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50', {
    variants: {
        variant: {
            default: 'bg-primary text-primary-foreground hover:bg-primary/90',
            destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
            outline: 'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
            secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
            ghost: 'hover:bg-accent hover:text-accent-foreground',
            link: 'text-primary underline-offset-4 hover:underline'
        },
        size: {
            default: 'h-10 px-4 py-2',
            sm: 'h-9 rounded-md px-3',
            lg: 'h-11 rounded-md px-8',
            icon: 'h-10 w-10'
        }
    },
    defaultVariants: {
        variant: 'default',
        size: 'default'
    }
});
const Button = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.forwardRef(_c = ({ className, variant, size, asChild = false, ...props }, ref)=>{
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : 'button';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ref: ref,
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/button.tsx",
        lineNumber: 46,
        columnNumber: 7
    }, this);
});
_c1 = Button;
Button.displayName = 'Button';
;
var _c, _c1;
__turbopack_refresh__.register(_c, "Button$React.forwardRef");
__turbopack_refresh__.register(_c1, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/paraglide/messages/en.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/* eslint-disable */ /** 
 * This file contains language specific message functions for tree-shaking. 
 * 
 *! WARNING: Only import messages from this file if you want to manually
 *! optimize your bundle. Else, import from the `messages.js` file. 
 * 
 * Your bundler will (in the future) automatically replace the index function 
 * with a language specific message function in the build step. 
 */ /**
 * 
 * @returns {string}
 */ /* @__NO_SIDE_EFFECTS__ */ __turbopack_esm__({
    "app_name": (()=>app_name),
    "get_started": (()=>get_started),
    "github": (()=>github),
    "input_placeholder": (()=>input_placeholder),
    "log_out": (()=>log_out),
    "meta_description": (()=>meta_description),
    "meta_keyword_next_auth": (()=>meta_keyword_next_auth),
    "meta_keyword_nextjs": (()=>meta_keyword_nextjs),
    "meta_keyword_nextjs_boilerplate": (()=>meta_keyword_nextjs_boilerplate),
    "meta_keyword_nextjs_starter": (()=>meta_keyword_nextjs_starter),
    "meta_keyword_prisma": (()=>meta_keyword_prisma),
    "meta_keyword_react": (()=>meta_keyword_react),
    "meta_keyword_shadcn_ui": (()=>meta_keyword_shadcn_ui),
    "meta_keyword_starter_template": (()=>meta_keyword_starter_template),
    "meta_keyword_tailwindcss": (()=>meta_keyword_tailwindcss),
    "meta_keyword_typescript": (()=>meta_keyword_typescript),
    "meta_title": (()=>meta_title),
    "my_account": (()=>my_account),
    "nextjs_starter_template_description": (()=>nextjs_starter_template_description),
    "nextjs_starter_template_headline": (()=>nextjs_starter_template_headline),
    "sign_in": (()=>sign_in),
    "submit_form": (()=>submit_form),
    "theme_toggle_label": (()=>theme_toggle_label),
    "upgrade_to_pro_cta": (()=>upgrade_to_pro_cta),
    "you_are_a_pro": (()=>you_are_a_pro)
});
const app_name = ()=>`Hydroleaf`;
const sign_in = ()=>`Sign in`;
const theme_toggle_label = ()=>`theme toggle`;
const my_account = ()=>`My Account`;
const upgrade_to_pro_cta = ()=>`Upgrade to pro`;
const log_out = ()=>`Log out`;
const you_are_a_pro = ()=>`You are pro!`;
const input_placeholder = ()=>`Type your name ...`;
const submit_form = ()=>`Submit`;
const meta_title = ()=>`Next.js Starter`;
const meta_description = ()=>`A Next.js starter template, packed with features like TypeScript, Tailwind CSS, Next-auth, Eslint, testing tools and more. Jumpstart your project with efficiency and style.`;
const meta_keyword_nextjs = ()=>`Next.js`;
const meta_keyword_react = ()=>`React`;
const meta_keyword_nextjs_starter = ()=>`Next.js starter`;
const meta_keyword_nextjs_boilerplate = ()=>`Next.js boilerplate`;
const meta_keyword_starter_template = ()=>`Starter Template`;
const meta_keyword_tailwindcss = ()=>`Tailwind CSS`;
const meta_keyword_typescript = ()=>`TypeScript`;
const meta_keyword_shadcn_ui = ()=>`Shadcn/ui`;
const meta_keyword_next_auth = ()=>`Next-auth`;
const meta_keyword_prisma = ()=>`Prisma`;
const nextjs_starter_template_headline = ()=>`Next.js starter template`;
const nextjs_starter_template_description = ()=>`A Next.js starter template, packed with features like TypeScript, Tailwind CSS, Next-auth, Eslint, Stripe, Paraglide, testing tools and more. Jumpstart your project with efficiency and style.`;
const get_started = ()=>`Get Started`;
const github = ()=>`Github`;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/paraglide/messages/pl.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/* eslint-disable */ /** 
 * This file contains language specific message functions for tree-shaking. 
 * 
 *! WARNING: Only import messages from this file if you want to manually
 *! optimize your bundle. Else, import from the `messages.js` file. 
 * 
 * Your bundler will (in the future) automatically replace the index function 
 * with a language specific message function in the build step. 
 */ /**
 * 
 * @returns {string}
 */ /* @__NO_SIDE_EFFECTS__ */ __turbopack_esm__({
    "app_name": (()=>app_name),
    "get_started": (()=>get_started),
    "github": (()=>github),
    "input_placeholder": (()=>input_placeholder),
    "log_out": (()=>log_out),
    "meta_description": (()=>meta_description),
    "meta_keyword_next_auth": (()=>meta_keyword_next_auth),
    "meta_keyword_nextjs": (()=>meta_keyword_nextjs),
    "meta_keyword_nextjs_boilerplate": (()=>meta_keyword_nextjs_boilerplate),
    "meta_keyword_nextjs_starter": (()=>meta_keyword_nextjs_starter),
    "meta_keyword_prisma": (()=>meta_keyword_prisma),
    "meta_keyword_react": (()=>meta_keyword_react),
    "meta_keyword_shadcn_ui": (()=>meta_keyword_shadcn_ui),
    "meta_keyword_starter_template": (()=>meta_keyword_starter_template),
    "meta_keyword_tailwindcss": (()=>meta_keyword_tailwindcss),
    "meta_keyword_typescript": (()=>meta_keyword_typescript),
    "meta_title": (()=>meta_title),
    "my_account": (()=>my_account),
    "nextjs_starter_template_description": (()=>nextjs_starter_template_description),
    "nextjs_starter_template_headline": (()=>nextjs_starter_template_headline),
    "sign_in": (()=>sign_in),
    "submit_form": (()=>submit_form),
    "theme_toggle_label": (()=>theme_toggle_label),
    "upgrade_to_pro_cta": (()=>upgrade_to_pro_cta),
    "you_are_a_pro": (()=>you_are_a_pro)
});
const app_name = ()=>`next-starter`;
const sign_in = ()=>`Zaloguj się`;
const theme_toggle_label = ()=>`zmień motyw`;
const my_account = ()=>`Moje konto`;
const upgrade_to_pro_cta = ()=>`Przejdź na PRO`;
const log_out = ()=>`Wyloguj się`;
const you_are_a_pro = ()=>`Jesteś PRO!`;
const input_placeholder = ()=>`Wpisz swoje imię ...`;
const submit_form = ()=>`Wyślij`;
const meta_title = ()=>`Next.js Starter`;
const meta_description = ()=>`A Next.js starter template, packed with features like TypeScript, Tailwind CSS, Next-auth, Eslint, testing tools and more. Jumpstart your project with efficiency and style.`;
const meta_keyword_nextjs = ()=>`Next.js`;
const meta_keyword_react = ()=>`React`;
const meta_keyword_nextjs_starter = ()=>`Next.js starter`;
const meta_keyword_nextjs_boilerplate = ()=>`Next.js boilerplate`;
const meta_keyword_starter_template = ()=>`Starter Template`;
const meta_keyword_tailwindcss = ()=>`Tailwind CSS`;
const meta_keyword_typescript = ()=>`TypeScript`;
const meta_keyword_shadcn_ui = ()=>`Shadcn/ui`;
const meta_keyword_next_auth = ()=>`Next-auth`;
const meta_keyword_prisma = ()=>`Prisma`;
const nextjs_starter_template_headline = ()=>`Next.js starter template`;
const nextjs_starter_template_description = ()=>`Szablon startowy Next.js, wyposażony w funkcje takie jak TypeScript, Tailwind CSS, Next-auth, Eslint, Stripe, Paraglide, narzędzia testowe i nie tylko. Rozpocznij swój projekt z wydajnością i stylem.`;
const get_started = ()=>`Zacznij`;
const github = ()=>`Github`;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/paraglide/messages.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/* eslint-disable */ __turbopack_esm__({
    "app_name": (()=>app_name),
    "get_started": (()=>get_started),
    "github": (()=>github),
    "input_placeholder": (()=>input_placeholder),
    "log_out": (()=>log_out),
    "meta_description": (()=>meta_description),
    "meta_keyword_next_auth": (()=>meta_keyword_next_auth),
    "meta_keyword_nextjs": (()=>meta_keyword_nextjs),
    "meta_keyword_nextjs_boilerplate": (()=>meta_keyword_nextjs_boilerplate),
    "meta_keyword_nextjs_starter": (()=>meta_keyword_nextjs_starter),
    "meta_keyword_prisma": (()=>meta_keyword_prisma),
    "meta_keyword_react": (()=>meta_keyword_react),
    "meta_keyword_shadcn_ui": (()=>meta_keyword_shadcn_ui),
    "meta_keyword_starter_template": (()=>meta_keyword_starter_template),
    "meta_keyword_tailwindcss": (()=>meta_keyword_tailwindcss),
    "meta_keyword_typescript": (()=>meta_keyword_typescript),
    "meta_title": (()=>meta_title),
    "my_account": (()=>my_account),
    "nextjs_starter_template_description": (()=>nextjs_starter_template_description),
    "nextjs_starter_template_headline": (()=>nextjs_starter_template_headline),
    "sign_in": (()=>sign_in),
    "submit_form": (()=>submit_form),
    "theme_toggle_label": (()=>theme_toggle_label),
    "upgrade_to_pro_cta": (()=>upgrade_to_pro_cta),
    "you_are_a_pro": (()=>you_are_a_pro)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$paraglide$2f$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/paraglide/runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$paraglide$2f$messages$2f$en$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/paraglide/messages/en.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$paraglide$2f$messages$2f$pl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/paraglide/messages/pl.js [app-client] (ecmascript)");
;
;
;
const app_name = (params = {}, options = {})=>{
    return ({
        en: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$paraglide$2f$messages$2f$en$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.app_name,
        pl: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$paraglide$2f$messages$2f$pl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.app_name
    })[options.languageTag ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$paraglide$2f$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["languageTag"])()]();
};
const sign_in = (params = {}, options = {})=>{
    return ({
        en: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$paraglide$2f$messages$2f$en$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.sign_in,
        pl: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$paraglide$2f$messages$2f$pl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.sign_in
    })[options.languageTag ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$paraglide$2f$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["languageTag"])()]();
};
const theme_toggle_label = (params = {}, options = {})=>{
    return ({
        en: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$paraglide$2f$messages$2f$en$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.theme_toggle_label,
        pl: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$paraglide$2f$messages$2f$pl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.theme_toggle_label
    })[options.languageTag ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$paraglide$2f$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["languageTag"])()]();
};
const my_account = (params = {}, options = {})=>{
    return ({
        en: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$paraglide$2f$messages$2f$en$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.my_account,
        pl: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$paraglide$2f$messages$2f$pl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.my_account
    })[options.languageTag ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$paraglide$2f$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["languageTag"])()]();
};
const upgrade_to_pro_cta = (params = {}, options = {})=>{
    return ({
        en: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$paraglide$2f$messages$2f$en$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.upgrade_to_pro_cta,
        pl: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$paraglide$2f$messages$2f$pl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.upgrade_to_pro_cta
    })[options.languageTag ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$paraglide$2f$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["languageTag"])()]();
};
const log_out = (params = {}, options = {})=>{
    return ({
        en: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$paraglide$2f$messages$2f$en$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.log_out,
        pl: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$paraglide$2f$messages$2f$pl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.log_out
    })[options.languageTag ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$paraglide$2f$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["languageTag"])()]();
};
const you_are_a_pro = (params = {}, options = {})=>{
    return ({
        en: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$paraglide$2f$messages$2f$en$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.you_are_a_pro,
        pl: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$paraglide$2f$messages$2f$pl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.you_are_a_pro
    })[options.languageTag ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$paraglide$2f$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["languageTag"])()]();
};
const input_placeholder = (params = {}, options = {})=>{
    return ({
        en: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$paraglide$2f$messages$2f$en$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.input_placeholder,
        pl: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$paraglide$2f$messages$2f$pl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.input_placeholder
    })[options.languageTag ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$paraglide$2f$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["languageTag"])()]();
};
const submit_form = (params = {}, options = {})=>{
    return ({
        en: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$paraglide$2f$messages$2f$en$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.submit_form,
        pl: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$paraglide$2f$messages$2f$pl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.submit_form
    })[options.languageTag ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$paraglide$2f$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["languageTag"])()]();
};
const meta_title = (params = {}, options = {})=>{
    return ({
        en: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$paraglide$2f$messages$2f$en$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.meta_title,
        pl: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$paraglide$2f$messages$2f$pl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.meta_title
    })[options.languageTag ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$paraglide$2f$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["languageTag"])()]();
};
const meta_description = (params = {}, options = {})=>{
    return ({
        en: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$paraglide$2f$messages$2f$en$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.meta_description,
        pl: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$paraglide$2f$messages$2f$pl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.meta_description
    })[options.languageTag ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$paraglide$2f$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["languageTag"])()]();
};
const meta_keyword_nextjs = (params = {}, options = {})=>{
    return ({
        en: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$paraglide$2f$messages$2f$en$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.meta_keyword_nextjs,
        pl: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$paraglide$2f$messages$2f$pl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.meta_keyword_nextjs
    })[options.languageTag ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$paraglide$2f$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["languageTag"])()]();
};
const meta_keyword_react = (params = {}, options = {})=>{
    return ({
        en: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$paraglide$2f$messages$2f$en$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.meta_keyword_react,
        pl: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$paraglide$2f$messages$2f$pl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.meta_keyword_react
    })[options.languageTag ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$paraglide$2f$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["languageTag"])()]();
};
const meta_keyword_nextjs_starter = (params = {}, options = {})=>{
    return ({
        en: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$paraglide$2f$messages$2f$en$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.meta_keyword_nextjs_starter,
        pl: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$paraglide$2f$messages$2f$pl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.meta_keyword_nextjs_starter
    })[options.languageTag ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$paraglide$2f$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["languageTag"])()]();
};
const meta_keyword_nextjs_boilerplate = (params = {}, options = {})=>{
    return ({
        en: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$paraglide$2f$messages$2f$en$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.meta_keyword_nextjs_boilerplate,
        pl: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$paraglide$2f$messages$2f$pl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.meta_keyword_nextjs_boilerplate
    })[options.languageTag ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$paraglide$2f$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["languageTag"])()]();
};
const meta_keyword_starter_template = (params = {}, options = {})=>{
    return ({
        en: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$paraglide$2f$messages$2f$en$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.meta_keyword_starter_template,
        pl: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$paraglide$2f$messages$2f$pl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.meta_keyword_starter_template
    })[options.languageTag ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$paraglide$2f$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["languageTag"])()]();
};
const meta_keyword_tailwindcss = (params = {}, options = {})=>{
    return ({
        en: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$paraglide$2f$messages$2f$en$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.meta_keyword_tailwindcss,
        pl: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$paraglide$2f$messages$2f$pl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.meta_keyword_tailwindcss
    })[options.languageTag ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$paraglide$2f$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["languageTag"])()]();
};
const meta_keyword_typescript = (params = {}, options = {})=>{
    return ({
        en: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$paraglide$2f$messages$2f$en$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.meta_keyword_typescript,
        pl: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$paraglide$2f$messages$2f$pl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.meta_keyword_typescript
    })[options.languageTag ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$paraglide$2f$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["languageTag"])()]();
};
const meta_keyword_shadcn_ui = (params = {}, options = {})=>{
    return ({
        en: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$paraglide$2f$messages$2f$en$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.meta_keyword_shadcn_ui,
        pl: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$paraglide$2f$messages$2f$pl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.meta_keyword_shadcn_ui
    })[options.languageTag ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$paraglide$2f$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["languageTag"])()]();
};
const meta_keyword_next_auth = (params = {}, options = {})=>{
    return ({
        en: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$paraglide$2f$messages$2f$en$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.meta_keyword_next_auth,
        pl: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$paraglide$2f$messages$2f$pl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.meta_keyword_next_auth
    })[options.languageTag ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$paraglide$2f$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["languageTag"])()]();
};
const meta_keyword_prisma = (params = {}, options = {})=>{
    return ({
        en: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$paraglide$2f$messages$2f$en$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.meta_keyword_prisma,
        pl: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$paraglide$2f$messages$2f$pl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.meta_keyword_prisma
    })[options.languageTag ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$paraglide$2f$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["languageTag"])()]();
};
const nextjs_starter_template_headline = (params = {}, options = {})=>{
    return ({
        en: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$paraglide$2f$messages$2f$en$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.nextjs_starter_template_headline,
        pl: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$paraglide$2f$messages$2f$pl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.nextjs_starter_template_headline
    })[options.languageTag ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$paraglide$2f$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["languageTag"])()]();
};
const nextjs_starter_template_description = (params = {}, options = {})=>{
    return ({
        en: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$paraglide$2f$messages$2f$en$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.nextjs_starter_template_description,
        pl: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$paraglide$2f$messages$2f$pl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.nextjs_starter_template_description
    })[options.languageTag ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$paraglide$2f$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["languageTag"])()]();
};
const get_started = (params = {}, options = {})=>{
    return ({
        en: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$paraglide$2f$messages$2f$en$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.get_started,
        pl: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$paraglide$2f$messages$2f$pl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.get_started
    })[options.languageTag ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$paraglide$2f$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["languageTag"])()]();
};
const github = (params = {}, options = {})=>{
    return ({
        en: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$paraglide$2f$messages$2f$en$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.github,
        pl: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$paraglide$2f$messages$2f$pl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.github
    })[options.languageTag ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$paraglide$2f$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["languageTag"])()]();
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/theme-switcher.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "ThemeSwitcher": (()=>ThemeSwitcher)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next-themes/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/icons.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$paraglide$2f$messages$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/paraglide/messages.js [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
'use client';
;
;
;
;
const ThemeSwitcher = ({ className })=>{
    _s();
    const { theme, setTheme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
        className: className,
        variant: "secondary",
        size: "icon",
        "aria-label": __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$paraglide$2f$messages$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.theme_toggle_label(),
        onClick: ()=>setTheme(theme === 'light' ? 'dark' : 'light'),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icons"].sun, {
                className: "dark:hidden"
            }, void 0, false, {
                fileName: "[project]/src/components/theme-switcher.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icons"].moon, {
                className: "hidden dark:block"
            }, void 0, false, {
                fileName: "[project]/src/components/theme-switcher.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/theme-switcher.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, this);
};
_s(ThemeSwitcher, "5ABGV54qnXKp6rHn7MS/8MjwRhQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"]
    ];
});
_c = ThemeSwitcher;
var _c;
__turbopack_refresh__.register(_c, "ThemeSwitcher");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ui/toast.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "Toast": (()=>Toast),
    "ToastAction": (()=>ToastAction),
    "ToastClose": (()=>ToastClose),
    "ToastDescription": (()=>ToastDescription),
    "ToastProvider": (()=>ToastProvider),
    "ToastTitle": (()=>ToastTitle),
    "ToastViewport": (()=>ToastViewport)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@radix-ui/react-toast/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
;
;
;
;
;
;
const ToastProvider = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Provider;
const ToastViewport = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.forwardRef(_c = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Viewport, {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:right-0 sm:top-0 sm:flex-col md:max-w-[420px]', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/toast.tsx",
        lineNumber: 14,
        columnNumber: 3
    }, this));
_c1 = ToastViewport;
ToastViewport.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Viewport.displayName;
const toastVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])('group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full', {
    variants: {
        variant: {
            default: 'border bg-background text-foreground',
            destructive: 'destructive group border-destructive bg-destructive text-destructive-foreground'
        }
    },
    defaultVariants: {
        variant: 'default'
    }
});
const Toast = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.forwardRef(_c2 = ({ className, variant, ...props }, ref)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Root, {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(toastVariants({
            variant
        }), className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/toast.tsx",
        lineNumber: 47,
        columnNumber: 5
    }, this);
});
_c3 = Toast;
Toast.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Root.displayName;
const ToastAction = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.forwardRef(_c4 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Action, {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('ring-offset-background hover:bg-secondary focus:ring-ring group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/toast.tsx",
        lineNumber: 60,
        columnNumber: 3
    }, this));
_c5 = ToastAction;
ToastAction.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Action.displayName;
const ToastClose = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.forwardRef(_c6 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Close, {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('text-foreground/50 hover:text-foreground absolute right-2 top-2 rounded-md p-1 opacity-0 transition-opacity focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600', className),
        "toast-close": "",
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
            className: "size-4"
        }, void 0, false, {
            fileName: "[project]/src/components/ui/toast.tsx",
            lineNumber: 84,
            columnNumber: 5
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/toast.tsx",
        lineNumber: 75,
        columnNumber: 3
    }, this));
_c7 = ToastClose;
ToastClose.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Close.displayName;
const ToastTitle = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.forwardRef(_c8 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Title, {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('text-sm font-semibold', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/toast.tsx",
        lineNumber: 93,
        columnNumber: 3
    }, this));
_c9 = ToastTitle;
ToastTitle.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Title.displayName;
const ToastDescription = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.forwardRef(_c10 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Description, {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('text-sm opacity-90', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/toast.tsx",
        lineNumber: 105,
        columnNumber: 3
    }, this));
_c11 = ToastDescription;
ToastDescription.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Description.displayName;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11;
__turbopack_refresh__.register(_c, "ToastViewport$React.forwardRef");
__turbopack_refresh__.register(_c1, "ToastViewport");
__turbopack_refresh__.register(_c2, "Toast$React.forwardRef");
__turbopack_refresh__.register(_c3, "Toast");
__turbopack_refresh__.register(_c4, "ToastAction$React.forwardRef");
__turbopack_refresh__.register(_c5, "ToastAction");
__turbopack_refresh__.register(_c6, "ToastClose$React.forwardRef");
__turbopack_refresh__.register(_c7, "ToastClose");
__turbopack_refresh__.register(_c8, "ToastTitle$React.forwardRef");
__turbopack_refresh__.register(_c9, "ToastTitle");
__turbopack_refresh__.register(_c10, "ToastDescription$React.forwardRef");
__turbopack_refresh__.register(_c11, "ToastDescription");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ui/use-toast.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// Inspired by react-hot-toast library
__turbopack_esm__({
    "reducer": (()=>reducer),
    "toast": (()=>toast),
    "useToast": (()=>useToast)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_refresh__.signature();
;
const TOAST_LIMIT = 1;
const TOAST_REMOVE_DELAY = 1000000;
let count = 0;
function genId() {
    count = (count + 1) % Number.MAX_SAFE_INTEGER;
    return count.toString();
}
const toastTimeouts = new Map();
const addToRemoveQueue = (toastId)=>{
    if (toastTimeouts.has(toastId)) {
        return;
    }
    const timeout = setTimeout(()=>{
        toastTimeouts.delete(toastId);
        dispatch({
            type: 'REMOVE_TOAST',
            toastId: toastId
        });
    }, TOAST_REMOVE_DELAY);
    toastTimeouts.set(toastId, timeout);
};
const reducer = (state, action)=>{
    switch(action.type){
        case 'ADD_TOAST':
            return {
                ...state,
                toasts: [
                    action.toast,
                    ...state.toasts
                ].slice(0, TOAST_LIMIT)
            };
        case 'UPDATE_TOAST':
            return {
                ...state,
                toasts: state.toasts.map((t)=>t.id === action.toast.id ? {
                        ...t,
                        ...action.toast
                    } : t)
            };
        case 'DISMISS_TOAST':
            {
                const { toastId } = action;
                // ! Side effects ! - This could be extracted into a dismissToast() action,
                // but I'll keep it here for simplicity
                if (toastId) {
                    addToRemoveQueue(toastId);
                } else {
                    state.toasts.forEach((toast)=>{
                        addToRemoveQueue(toast.id);
                    });
                }
                return {
                    ...state,
                    toasts: state.toasts.map((t)=>t.id === toastId || toastId === undefined ? {
                            ...t,
                            open: false
                        } : t)
                };
            }
        case 'REMOVE_TOAST':
            if (action.toastId === undefined) {
                return {
                    ...state,
                    toasts: []
                };
            }
            return {
                ...state,
                toasts: state.toasts.filter((t)=>t.id !== action.toastId)
            };
    }
};
const listeners = [];
let memoryState = {
    toasts: []
};
function dispatch(action) {
    memoryState = reducer(memoryState, action);
    listeners.forEach((listener)=>{
        listener(memoryState);
    });
}
function toast({ ...props }) {
    const id = genId();
    const update = (props)=>dispatch({
            type: 'UPDATE_TOAST',
            toast: {
                ...props,
                id
            }
        });
    const dismiss = ()=>dispatch({
            type: 'DISMISS_TOAST',
            toastId: id
        });
    dispatch({
        type: 'ADD_TOAST',
        toast: {
            ...props,
            id,
            open: true,
            onOpenChange: (open)=>{
                if (!open) dismiss();
            }
        }
    });
    return {
        id: id,
        dismiss,
        update
    };
}
function useToast() {
    _s();
    const [state, setState] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useState(memoryState);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useEffect({
        "useToast.useEffect": ()=>{
            listeners.push(setState);
            return ({
                "useToast.useEffect": ()=>{
                    const index = listeners.indexOf(setState);
                    if (index > -1) {
                        listeners.splice(index, 1);
                    }
                }
            })["useToast.useEffect"];
        }
    }["useToast.useEffect"], [
        state
    ]);
    return {
        ...state,
        toast,
        dismiss: (toastId)=>dispatch({
                type: 'DISMISS_TOAST',
                toastId
            })
    };
}
_s(useToast, "SPWE98mLGnlsnNfIwu/IAKTSZtk=");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ui/toaster.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "Toaster": (()=>Toaster)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/ui/toast.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/ui/use-toast.ts [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
'use client';
;
;
function Toaster() {
    _s();
    const { toasts } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ToastProvider"], {
        children: [
            toasts.map(function({ id, title, description, action, ...props }) {
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Toast"], {
                    ...props,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid gap-1",
                            children: [
                                title && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ToastTitle"], {
                                    children: title
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/toaster.tsx",
                                    lineNumber: 22,
                                    columnNumber: 25
                                }, this),
                                description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ToastDescription"], {
                                    children: description
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/toaster.tsx",
                                    lineNumber: 24,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ui/toaster.tsx",
                            lineNumber: 21,
                            columnNumber: 13
                        }, this),
                        action,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ToastClose"], {}, void 0, false, {
                            fileName: "[project]/src/components/ui/toaster.tsx",
                            lineNumber: 28,
                            columnNumber: 13
                        }, this)
                    ]
                }, id, true, {
                    fileName: "[project]/src/components/ui/toaster.tsx",
                    lineNumber: 20,
                    columnNumber: 11
                }, this);
            }),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ToastViewport"], {}, void 0, false, {
                fileName: "[project]/src/components/ui/toaster.tsx",
                lineNumber: 32,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/toaster.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
_s(Toaster, "1YTCnXrq2qRowe0H/LBWLjtXoYc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"]
    ];
});
_c = Toaster;
var _c;
__turbopack_refresh__.register(_c, "Toaster");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/layout.tsx [app-rsc] (ecmascript, Next.js server component, client modules)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
}}),
}]);

//# sourceMappingURL=_592e38._.js.map