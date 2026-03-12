"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/auth/[...nextauth]/route";
exports.ids = ["app/api/auth/[...nextauth]/route"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "../../client/components/action-async-storage.external":
/*!*******************************************************************************!*\
  !*** external "next/dist/client/components/action-async-storage.external.js" ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/action-async-storage.external.js");

/***/ }),

/***/ "../../client/components/request-async-storage.external":
/*!********************************************************************************!*\
  !*** external "next/dist/client/components/request-async-storage.external.js" ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/request-async-storage.external.js");

/***/ }),

/***/ "../../client/components/static-generation-async-storage.external":
/*!******************************************************************************************!*\
  !*** external "next/dist/client/components/static-generation-async-storage.external.js" ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/static-generation-async-storage.external.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("assert");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("querystring");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=B%3A%5CCodeSpace%5CDnDWebsite%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=B%3A%5CCodeSpace%5CDnDWebsite&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=B%3A%5CCodeSpace%5CDnDWebsite%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=B%3A%5CCodeSpace%5CDnDWebsite&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var B_CodeSpace_DnDWebsite_app_api_auth_nextauth_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/auth/[...nextauth]/route.ts */ \"(rsc)/./app/api/auth/[...nextauth]/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/auth/[...nextauth]/route\",\n        pathname: \"/api/auth/[...nextauth]\",\n        filename: \"route\",\n        bundlePath: \"app/api/auth/[...nextauth]/route\"\n    },\n    resolvedPagePath: \"B:\\\\CodeSpace\\\\DnDWebsite\\\\app\\\\api\\\\auth\\\\[...nextauth]\\\\route.ts\",\n    nextConfigOutput,\n    userland: B_CodeSpace_DnDWebsite_app_api_auth_nextauth_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/auth/[...nextauth]/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZhdXRoJTJGJTVCLi4ubmV4dGF1dGglNUQlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRmF1dGglMkYlNUIuLi5uZXh0YXV0aCU1RCUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRmF1dGglMkYlNUIuLi5uZXh0YXV0aCU1RCUyRnJvdXRlLnRzJmFwcERpcj1CJTNBJTVDQ29kZVNwYWNlJTVDRG5EV2Vic2l0ZSU1Q2FwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9QiUzQSU1Q0NvZGVTcGFjZSU1Q0RuRFdlYnNpdGUmaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFzRztBQUN2QztBQUNjO0FBQ2tCO0FBQy9GO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixnSEFBbUI7QUFDM0M7QUFDQSxjQUFjLHlFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsaUVBQWlFO0FBQ3pFO0FBQ0E7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDdUg7O0FBRXZIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZG5kNWUtY2hhcmFjdGVyLXNoZWV0Lz9lOWQyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIkI6XFxcXENvZGVTcGFjZVxcXFxEbkRXZWJzaXRlXFxcXGFwcFxcXFxhcGlcXFxcYXV0aFxcXFxbLi4ubmV4dGF1dGhdXFxcXHJvdXRlLnRzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9hdXRoL1suLi5uZXh0YXV0aF1cIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIkI6XFxcXENvZGVTcGFjZVxcXFxEbkRXZWJzaXRlXFxcXGFwcFxcXFxhcGlcXFxcYXV0aFxcXFxbLi4ubmV4dGF1dGhdXFxcXHJvdXRlLnRzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MgfSA9IHJvdXRlTW9kdWxlO1xuY29uc3Qgb3JpZ2luYWxQYXRobmFtZSA9IFwiL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGVcIjtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgc2VydmVySG9va3MsXG4gICAgICAgIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgb3JpZ2luYWxQYXRobmFtZSwgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=B%3A%5CCodeSpace%5CDnDWebsite%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=B%3A%5CCodeSpace%5CDnDWebsite&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/auth/[...nextauth]/route.ts":
/*!*********************************************!*\
  !*** ./app/api/auth/[...nextauth]/route.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ handler),\n/* harmony export */   POST: () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"(rsc)/./node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _lib_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/auth */ \"(rsc)/./lib/auth.ts\");\n\n\nconst handler = next_auth__WEBPACK_IMPORTED_MODULE_0___default()(_lib_auth__WEBPACK_IMPORTED_MODULE_1__.authOptions);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFpQztBQUNRO0FBRXpDLE1BQU1FLFVBQVVGLGdEQUFRQSxDQUFDQyxrREFBV0E7QUFFTyIsInNvdXJjZXMiOlsid2VicGFjazovL2RuZDVlLWNoYXJhY3Rlci1zaGVldC8uL2FwcC9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdL3JvdXRlLnRzP2M4YTQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5leHRBdXRoIGZyb20gXCJuZXh0LWF1dGhcIjtcclxuaW1wb3J0IHsgYXV0aE9wdGlvbnMgfSBmcm9tIFwiQC9saWIvYXV0aFwiO1xyXG5cclxuY29uc3QgaGFuZGxlciA9IE5leHRBdXRoKGF1dGhPcHRpb25zKTtcclxuXHJcbmV4cG9ydCB7IGhhbmRsZXIgYXMgR0VULCBoYW5kbGVyIGFzIFBPU1QgfTtcclxuIl0sIm5hbWVzIjpbIk5leHRBdXRoIiwiYXV0aE9wdGlvbnMiLCJoYW5kbGVyIiwiR0VUIiwiUE9TVCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./app/api/auth/[...nextauth]/route.ts\n");

/***/ }),

/***/ "(rsc)/./lib/auth.ts":
/*!*********************!*\
  !*** ./lib/auth.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   authOptions: () => (/* binding */ authOptions)\n/* harmony export */ });\n/* harmony import */ var next_auth_providers_discord__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth/providers/discord */ \"(rsc)/./node_modules/next-auth/providers/discord.js\");\n/* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./db */ \"(rsc)/./lib/db.ts\");\n\n\nconst authOptions = {\n    providers: [\n        (0,next_auth_providers_discord__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n            clientId: process.env.DISCORD_CLIENT_ID,\n            clientSecret: process.env.DISCORD_CLIENT_SECRET,\n            authorization: {\n                params: {\n                    scope: \"identify email\"\n                }\n            }\n        })\n    ],\n    callbacks: {\n        async signIn ({ user, account, profile }) {\n            if (!account?.providerAccountId) return true;\n            const discordId = account.providerAccountId;\n            // Discord can omit name in edge cases; username is required in DB\n            const username = user.name && String(user.name).trim() || profile?.username || `discord_${discordId}`;\n            const discordProfile = profile;\n            try {\n                await _db__WEBPACK_IMPORTED_MODULE_1__.prisma.user.upsert({\n                    where: {\n                        discordId\n                    },\n                    create: {\n                        discordId,\n                        username,\n                        discriminator: discordProfile?.discriminator ?? null,\n                        avatar: user.image ?? discordProfile?.image_url ?? null,\n                        email: user.email ?? null\n                    },\n                    update: {\n                        username,\n                        discriminator: discordProfile?.discriminator ?? null,\n                        avatar: user.image ?? discordProfile?.image_url ?? null,\n                        email: user.email ?? null\n                    }\n                });\n            } catch (e) {\n                // NextAuth maps failures to \"Try signing in with a different account.\"\n                // Log full error server-side; throw a short message so the error URL is diagnosable.\n                console.error(\"[auth] signIn prisma upsert failed\", e);\n                const msg = e instanceof Error ? e.message : String(e);\n                throw new Error(`Database error during sign-in. Check DATABASE_URL and run migrations. ${msg.slice(0, 200)}`);\n            }\n            return true;\n        },\n        async session ({ session, token }) {\n            if (session.user && token.sub) {\n                const dbUser = await _db__WEBPACK_IMPORTED_MODULE_1__.prisma.user.findUnique({\n                    where: {\n                        discordId: token.sub\n                    }\n                });\n                session.user.id = dbUser?.id ?? undefined;\n            }\n            return session;\n        },\n        async jwt ({ token, account }) {\n            if (account?.providerAccountId) token.sub = account.providerAccountId;\n            return token;\n        }\n    },\n    // Do not set pages.signIn to \"/\" — that redirects /api/auth/signin back to home\n    // and breaks the \"Sign in with Discord\" link. Use /api/auth/signin/discord directly.\n    session: {\n        strategy: \"jwt\"\n    },\n    secret: process.env.NEXTAUTH_SECRET\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvYXV0aC50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFDMEQ7QUFDNUI7QUFFdkIsTUFBTUUsY0FBK0I7SUFDMUNDLFdBQVc7UUFDVEgsdUVBQWVBLENBQUM7WUFDZEksVUFBVUMsUUFBUUMsR0FBRyxDQUFDQyxpQkFBaUI7WUFDdkNDLGNBQWNILFFBQVFDLEdBQUcsQ0FBQ0cscUJBQXFCO1lBQy9DQyxlQUFlO2dCQUNiQyxRQUFRO29CQUFFQyxPQUFPO2dCQUFpQjtZQUNwQztRQUNGO0tBQ0Q7SUFDREMsV0FBVztRQUNULE1BQU1DLFFBQU8sRUFBRUMsSUFBSSxFQUFFQyxPQUFPLEVBQUVDLE9BQU8sRUFBRTtZQUNyQyxJQUFJLENBQUNELFNBQVNFLG1CQUFtQixPQUFPO1lBQ3hDLE1BQU1DLFlBQVlILFFBQVFFLGlCQUFpQjtZQUMzQyxrRUFBa0U7WUFDbEUsTUFBTUUsV0FDSixLQUFNQyxJQUFJLElBQUlDLE9BQU9QLEtBQUtNLElBQUksRUFBRUUsSUFBSSxNQUNuQ04sU0FBbUNHLFlBQ3BDLENBQUMsUUFBUSxFQUFFRCxVQUFVLENBQUM7WUFDeEIsTUFBTUssaUJBQWlCUDtZQUt2QixJQUFJO2dCQUNGLE1BQU1oQix1Q0FBTUEsQ0FBQ2MsSUFBSSxDQUFDVSxNQUFNLENBQUM7b0JBQ3ZCQyxPQUFPO3dCQUFFUDtvQkFBVTtvQkFDbkJRLFFBQVE7d0JBQ05SO3dCQUNBQzt3QkFDQVEsZUFBZUosZ0JBQWdCSSxpQkFBaUI7d0JBQ2hEQyxRQUFRZCxLQUFLZSxLQUFLLElBQUlOLGdCQUFnQk8sYUFBYTt3QkFDbkRDLE9BQU9qQixLQUFLaUIsS0FBSyxJQUFJO29CQUN2QjtvQkFDQUMsUUFBUTt3QkFDTmI7d0JBQ0FRLGVBQWVKLGdCQUFnQkksaUJBQWlCO3dCQUNoREMsUUFBUWQsS0FBS2UsS0FBSyxJQUFJTixnQkFBZ0JPLGFBQWE7d0JBQ25EQyxPQUFPakIsS0FBS2lCLEtBQUssSUFBSTtvQkFDdkI7Z0JBQ0Y7WUFDRixFQUFFLE9BQU9FLEdBQUc7Z0JBQ1YsdUVBQXVFO2dCQUN2RSxxRkFBcUY7Z0JBQ3JGQyxRQUFRQyxLQUFLLENBQUMsc0NBQXNDRjtnQkFDcEQsTUFBTUcsTUFDSkgsYUFBYUksUUFBUUosRUFBRUssT0FBTyxHQUFHakIsT0FBT1k7Z0JBQzFDLE1BQU0sSUFBSUksTUFDUixDQUFDLHNFQUFzRSxFQUFFRCxJQUFJRyxLQUFLLENBQUMsR0FBRyxLQUFLLENBQUM7WUFFaEc7WUFDQSxPQUFPO1FBQ1Q7UUFDQSxNQUFNQyxTQUFRLEVBQUVBLE9BQU8sRUFBRUMsS0FBSyxFQUFFO1lBQzlCLElBQUlELFFBQVExQixJQUFJLElBQUkyQixNQUFNQyxHQUFHLEVBQUU7Z0JBQzdCLE1BQU1DLFNBQVMsTUFBTTNDLHVDQUFNQSxDQUFDYyxJQUFJLENBQUM4QixVQUFVLENBQUM7b0JBQzFDbkIsT0FBTzt3QkFBRVAsV0FBV3VCLE1BQU1DLEdBQUc7b0JBQUM7Z0JBQ2hDO2dCQUNDRixRQUFzQzFCLElBQUksQ0FBQytCLEVBQUUsR0FBR0YsUUFBUUUsTUFBTUM7WUFDakU7WUFDQSxPQUFPTjtRQUNUO1FBQ0EsTUFBTU8sS0FBSSxFQUFFTixLQUFLLEVBQUUxQixPQUFPLEVBQUU7WUFDMUIsSUFBSUEsU0FBU0UsbUJBQW1Cd0IsTUFBTUMsR0FBRyxHQUFHM0IsUUFBUUUsaUJBQWlCO1lBQ3JFLE9BQU93QjtRQUNUO0lBQ0Y7SUFDQSxnRkFBZ0Y7SUFDaEYscUZBQXFGO0lBQ3JGRCxTQUFTO1FBQUVRLFVBQVU7SUFBTTtJQUMzQkMsUUFBUTdDLFFBQVFDLEdBQUcsQ0FBQzZDLGVBQWU7QUFDckMsRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL2RuZDVlLWNoYXJhY3Rlci1zaGVldC8uL2xpYi9hdXRoLnRzP2JmN2UiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dEF1dGhPcHRpb25zIH0gZnJvbSBcIm5leHQtYXV0aFwiO1xyXG5pbXBvcnQgRGlzY29yZFByb3ZpZGVyIGZyb20gXCJuZXh0LWF1dGgvcHJvdmlkZXJzL2Rpc2NvcmRcIjtcclxuaW1wb3J0IHsgcHJpc21hIH0gZnJvbSBcIi4vZGJcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBhdXRoT3B0aW9uczogTmV4dEF1dGhPcHRpb25zID0ge1xyXG4gIHByb3ZpZGVyczogW1xyXG4gICAgRGlzY29yZFByb3ZpZGVyKHtcclxuICAgICAgY2xpZW50SWQ6IHByb2Nlc3MuZW52LkRJU0NPUkRfQ0xJRU5UX0lEISxcclxuICAgICAgY2xpZW50U2VjcmV0OiBwcm9jZXNzLmVudi5ESVNDT1JEX0NMSUVOVF9TRUNSRVQhLFxyXG4gICAgICBhdXRob3JpemF0aW9uOiB7XHJcbiAgICAgICAgcGFyYW1zOiB7IHNjb3BlOiBcImlkZW50aWZ5IGVtYWlsXCIgfSxcclxuICAgICAgfSxcclxuICAgIH0pLFxyXG4gIF0sXHJcbiAgY2FsbGJhY2tzOiB7XHJcbiAgICBhc3luYyBzaWduSW4oeyB1c2VyLCBhY2NvdW50LCBwcm9maWxlIH0pIHtcclxuICAgICAgaWYgKCFhY2NvdW50Py5wcm92aWRlckFjY291bnRJZCkgcmV0dXJuIHRydWU7XHJcbiAgICAgIGNvbnN0IGRpc2NvcmRJZCA9IGFjY291bnQucHJvdmlkZXJBY2NvdW50SWQ7XHJcbiAgICAgIC8vIERpc2NvcmQgY2FuIG9taXQgbmFtZSBpbiBlZGdlIGNhc2VzOyB1c2VybmFtZSBpcyByZXF1aXJlZCBpbiBEQlxyXG4gICAgICBjb25zdCB1c2VybmFtZSA9XHJcbiAgICAgICAgKHVzZXIubmFtZSAmJiBTdHJpbmcodXNlci5uYW1lKS50cmltKCkpIHx8XHJcbiAgICAgICAgKHByb2ZpbGUgYXMgeyB1c2VybmFtZT86IHN0cmluZyB9KT8udXNlcm5hbWUgfHxcclxuICAgICAgICBgZGlzY29yZF8ke2Rpc2NvcmRJZH1gO1xyXG4gICAgICBjb25zdCBkaXNjb3JkUHJvZmlsZSA9IHByb2ZpbGUgYXMge1xyXG4gICAgICAgIHVzZXJuYW1lPzogc3RyaW5nO1xyXG4gICAgICAgIGRpc2NyaW1pbmF0b3I/OiBzdHJpbmc7XHJcbiAgICAgICAgaW1hZ2VfdXJsPzogc3RyaW5nO1xyXG4gICAgICB9O1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGF3YWl0IHByaXNtYS51c2VyLnVwc2VydCh7XHJcbiAgICAgICAgICB3aGVyZTogeyBkaXNjb3JkSWQgfSxcclxuICAgICAgICAgIGNyZWF0ZToge1xyXG4gICAgICAgICAgICBkaXNjb3JkSWQsXHJcbiAgICAgICAgICAgIHVzZXJuYW1lLFxyXG4gICAgICAgICAgICBkaXNjcmltaW5hdG9yOiBkaXNjb3JkUHJvZmlsZT8uZGlzY3JpbWluYXRvciA/PyBudWxsLFxyXG4gICAgICAgICAgICBhdmF0YXI6IHVzZXIuaW1hZ2UgPz8gZGlzY29yZFByb2ZpbGU/LmltYWdlX3VybCA/PyBudWxsLFxyXG4gICAgICAgICAgICBlbWFpbDogdXNlci5lbWFpbCA/PyBudWxsLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHVwZGF0ZToge1xyXG4gICAgICAgICAgICB1c2VybmFtZSxcclxuICAgICAgICAgICAgZGlzY3JpbWluYXRvcjogZGlzY29yZFByb2ZpbGU/LmRpc2NyaW1pbmF0b3IgPz8gbnVsbCxcclxuICAgICAgICAgICAgYXZhdGFyOiB1c2VyLmltYWdlID8/IGRpc2NvcmRQcm9maWxlPy5pbWFnZV91cmwgPz8gbnVsbCxcclxuICAgICAgICAgICAgZW1haWw6IHVzZXIuZW1haWwgPz8gbnVsbCxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAvLyBOZXh0QXV0aCBtYXBzIGZhaWx1cmVzIHRvIFwiVHJ5IHNpZ25pbmcgaW4gd2l0aCBhIGRpZmZlcmVudCBhY2NvdW50LlwiXHJcbiAgICAgICAgLy8gTG9nIGZ1bGwgZXJyb3Igc2VydmVyLXNpZGU7IHRocm93IGEgc2hvcnQgbWVzc2FnZSBzbyB0aGUgZXJyb3IgVVJMIGlzIGRpYWdub3NhYmxlLlxyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJbYXV0aF0gc2lnbkluIHByaXNtYSB1cHNlcnQgZmFpbGVkXCIsIGUpO1xyXG4gICAgICAgIGNvbnN0IG1zZyA9XHJcbiAgICAgICAgICBlIGluc3RhbmNlb2YgRXJyb3IgPyBlLm1lc3NhZ2UgOiBTdHJpbmcoZSk7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxyXG4gICAgICAgICAgYERhdGFiYXNlIGVycm9yIGR1cmluZyBzaWduLWluLiBDaGVjayBEQVRBQkFTRV9VUkwgYW5kIHJ1biBtaWdyYXRpb25zLiAke21zZy5zbGljZSgwLCAyMDApfWBcclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfSxcclxuICAgIGFzeW5jIHNlc3Npb24oeyBzZXNzaW9uLCB0b2tlbiB9KSB7XHJcbiAgICAgIGlmIChzZXNzaW9uLnVzZXIgJiYgdG9rZW4uc3ViKSB7XHJcbiAgICAgICAgY29uc3QgZGJVc2VyID0gYXdhaXQgcHJpc21hLnVzZXIuZmluZFVuaXF1ZSh7XHJcbiAgICAgICAgICB3aGVyZTogeyBkaXNjb3JkSWQ6IHRva2VuLnN1YiB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIChzZXNzaW9uIGFzIHsgdXNlcjogeyBpZD86IHN0cmluZyB9IH0pLnVzZXIuaWQgPSBkYlVzZXI/LmlkID8/IHVuZGVmaW5lZDtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gc2Vzc2lvbjtcclxuICAgIH0sXHJcbiAgICBhc3luYyBqd3QoeyB0b2tlbiwgYWNjb3VudCB9KSB7XHJcbiAgICAgIGlmIChhY2NvdW50Py5wcm92aWRlckFjY291bnRJZCkgdG9rZW4uc3ViID0gYWNjb3VudC5wcm92aWRlckFjY291bnRJZDtcclxuICAgICAgcmV0dXJuIHRva2VuO1xyXG4gICAgfSxcclxuICB9LFxyXG4gIC8vIERvIG5vdCBzZXQgcGFnZXMuc2lnbkluIHRvIFwiL1wiIOKAlCB0aGF0IHJlZGlyZWN0cyAvYXBpL2F1dGgvc2lnbmluIGJhY2sgdG8gaG9tZVxyXG4gIC8vIGFuZCBicmVha3MgdGhlIFwiU2lnbiBpbiB3aXRoIERpc2NvcmRcIiBsaW5rLiBVc2UgL2FwaS9hdXRoL3NpZ25pbi9kaXNjb3JkIGRpcmVjdGx5LlxyXG4gIHNlc3Npb246IHsgc3RyYXRlZ3k6IFwiand0XCIgfSxcclxuICBzZWNyZXQ6IHByb2Nlc3MuZW52Lk5FWFRBVVRIX1NFQ1JFVCxcclxufTtcclxuIl0sIm5hbWVzIjpbIkRpc2NvcmRQcm92aWRlciIsInByaXNtYSIsImF1dGhPcHRpb25zIiwicHJvdmlkZXJzIiwiY2xpZW50SWQiLCJwcm9jZXNzIiwiZW52IiwiRElTQ09SRF9DTElFTlRfSUQiLCJjbGllbnRTZWNyZXQiLCJESVNDT1JEX0NMSUVOVF9TRUNSRVQiLCJhdXRob3JpemF0aW9uIiwicGFyYW1zIiwic2NvcGUiLCJjYWxsYmFja3MiLCJzaWduSW4iLCJ1c2VyIiwiYWNjb3VudCIsInByb2ZpbGUiLCJwcm92aWRlckFjY291bnRJZCIsImRpc2NvcmRJZCIsInVzZXJuYW1lIiwibmFtZSIsIlN0cmluZyIsInRyaW0iLCJkaXNjb3JkUHJvZmlsZSIsInVwc2VydCIsIndoZXJlIiwiY3JlYXRlIiwiZGlzY3JpbWluYXRvciIsImF2YXRhciIsImltYWdlIiwiaW1hZ2VfdXJsIiwiZW1haWwiLCJ1cGRhdGUiLCJlIiwiY29uc29sZSIsImVycm9yIiwibXNnIiwiRXJyb3IiLCJtZXNzYWdlIiwic2xpY2UiLCJzZXNzaW9uIiwidG9rZW4iLCJzdWIiLCJkYlVzZXIiLCJmaW5kVW5pcXVlIiwiaWQiLCJ1bmRlZmluZWQiLCJqd3QiLCJzdHJhdGVneSIsInNlY3JldCIsIk5FWFRBVVRIX1NFQ1JFVCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./lib/auth.ts\n");

/***/ }),

/***/ "(rsc)/./lib/db.ts":
/*!*******************!*\
  !*** ./lib/db.ts ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CHARACTER_FIELDS: () => (/* binding */ CHARACTER_FIELDS),\n/* harmony export */   prisma: () => (/* binding */ prisma)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst globalForPrisma = globalThis;\nconst prisma = globalForPrisma.prisma ?? new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\nif (true) globalForPrisma.prisma = prisma;\n// All character sheet fields that can be accessed via API (key = API path, value = DB column)\nconst CHARACTER_FIELDS = {\n    characterName: \"characterName\",\n    playerName: \"playerName\",\n    race: \"race\",\n    classAndLevel: \"classAndLevel\",\n    background: \"background\",\n    alignment: \"alignment\",\n    experience: \"experience\",\n    strength: \"strength\",\n    dexterity: \"dexterity\",\n    constitution: \"constitution\",\n    intelligence: \"intelligence\",\n    wisdom: \"wisdom\",\n    charisma: \"charisma\",\n    armorClass: \"armorClass\",\n    initiative: \"initiative\",\n    speed: \"speed\",\n    hitPointMaximum: \"hitPointMaximum\",\n    currentHitPoints: \"currentHitPoints\",\n    temporaryHitPoints: \"temporaryHitPoints\",\n    hitDice: \"hitDice\",\n    deathSaveSuccess: \"deathSaveSuccess\",\n    deathSaveFailures: \"deathSaveFailures\",\n    proficiencyBonus: \"proficiencyBonus\",\n    acrobatics: \"acrobatics\",\n    animalHandling: \"animalHandling\",\n    arcana: \"arcana\",\n    athletics: \"athletics\",\n    deception: \"deception\",\n    history: \"history\",\n    insight: \"insight\",\n    intimidation: \"intimidation\",\n    investigation: \"investigation\",\n    medicine: \"medicine\",\n    nature: \"nature\",\n    perception: \"perception\",\n    performance: \"performance\",\n    persuasion: \"persuasion\",\n    religion: \"religion\",\n    sleightOfHand: \"sleightOfHand\",\n    stealth: \"stealth\",\n    survival: \"survival\",\n    inspiration: \"inspiration\",\n    passiveWisdom: \"passiveWisdom\",\n    otherProficiencies: \"otherProficiencies\",\n    languages: \"languages\",\n    equipment: \"equipment\",\n    plat: \"plat\",\n    gold: \"gold\",\n    silver: \"silver\",\n    copper: \"copper\",\n    attacksAndSpellcasting: \"attacksAndSpellcasting\",\n    featuresAndTraits: \"featuresAndTraits\",\n    personalityTraits: \"personalityTraits\",\n    ideals: \"ideals\",\n    bonds: \"bonds\",\n    flaws: \"flaws\",\n    backstory: \"backstory\",\n    appearance: \"appearance\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvZGIudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUE4QztBQUU5QyxNQUFNQyxrQkFBa0JDO0FBRWpCLE1BQU1DLFNBQ1hGLGdCQUFnQkUsTUFBTSxJQUN0QixJQUFJSCx3REFBWUEsR0FBRztBQUVyQixJQUFJSSxJQUFxQyxFQUFFSCxnQkFBZ0JFLE1BQU0sR0FBR0E7QUFFcEUsOEZBQThGO0FBQ3ZGLE1BQU1FLG1CQUEyQztJQUN0REMsZUFBZTtJQUNmQyxZQUFZO0lBQ1pDLE1BQU07SUFDTkMsZUFBZTtJQUNmQyxZQUFZO0lBQ1pDLFdBQVc7SUFDWEMsWUFBWTtJQUNaQyxVQUFVO0lBQ1ZDLFdBQVc7SUFDWEMsY0FBYztJQUNkQyxjQUFjO0lBQ2RDLFFBQVE7SUFDUkMsVUFBVTtJQUNWQyxZQUFZO0lBQ1pDLFlBQVk7SUFDWkMsT0FBTztJQUNQQyxpQkFBaUI7SUFDakJDLGtCQUFrQjtJQUNsQkMsb0JBQW9CO0lBQ3BCQyxTQUFTO0lBQ1RDLGtCQUFrQjtJQUNsQkMsbUJBQW1CO0lBQ25CQyxrQkFBa0I7SUFDbEJDLFlBQVk7SUFDWkMsZ0JBQWdCO0lBQ2hCQyxRQUFRO0lBQ1JDLFdBQVc7SUFDWEMsV0FBVztJQUNYQyxTQUFTO0lBQ1RDLFNBQVM7SUFDVEMsY0FBYztJQUNkQyxlQUFlO0lBQ2ZDLFVBQVU7SUFDVkMsUUFBUTtJQUNSQyxZQUFZO0lBQ1pDLGFBQWE7SUFDYkMsWUFBWTtJQUNaQyxVQUFVO0lBQ1ZDLGVBQWU7SUFDZkMsU0FBUztJQUNUQyxVQUFVO0lBQ1ZDLGFBQWE7SUFDYkMsZUFBZTtJQUNmQyxvQkFBb0I7SUFDcEJDLFdBQVc7SUFDWEMsV0FBVztJQUNYQyxNQUFNO0lBQ05DLE1BQU07SUFDTkMsUUFBUTtJQUNSQyxRQUFRO0lBQ1JDLHdCQUF3QjtJQUN4QkMsbUJBQW1CO0lBQ25CQyxtQkFBbUI7SUFDbkJDLFFBQVE7SUFDUkMsT0FBTztJQUNQQyxPQUFPO0lBQ1BDLFdBQVc7SUFDWEMsWUFBWTtBQUNkLEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kbmQ1ZS1jaGFyYWN0ZXItc2hlZXQvLi9saWIvZGIudHM/MWRmMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcclxuXHJcbmNvbnN0IGdsb2JhbEZvclByaXNtYSA9IGdsb2JhbFRoaXMgYXMgdW5rbm93biBhcyB7IHByaXNtYTogUHJpc21hQ2xpZW50IH07XHJcblxyXG5leHBvcnQgY29uc3QgcHJpc21hID1cclxuICBnbG9iYWxGb3JQcmlzbWEucHJpc21hID8/XHJcbiAgbmV3IFByaXNtYUNsaWVudCgpO1xyXG5cclxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikgZ2xvYmFsRm9yUHJpc21hLnByaXNtYSA9IHByaXNtYTtcclxuXHJcbi8vIEFsbCBjaGFyYWN0ZXIgc2hlZXQgZmllbGRzIHRoYXQgY2FuIGJlIGFjY2Vzc2VkIHZpYSBBUEkgKGtleSA9IEFQSSBwYXRoLCB2YWx1ZSA9IERCIGNvbHVtbilcclxuZXhwb3J0IGNvbnN0IENIQVJBQ1RFUl9GSUVMRFM6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSB7XHJcbiAgY2hhcmFjdGVyTmFtZTogXCJjaGFyYWN0ZXJOYW1lXCIsXHJcbiAgcGxheWVyTmFtZTogXCJwbGF5ZXJOYW1lXCIsXHJcbiAgcmFjZTogXCJyYWNlXCIsXHJcbiAgY2xhc3NBbmRMZXZlbDogXCJjbGFzc0FuZExldmVsXCIsXHJcbiAgYmFja2dyb3VuZDogXCJiYWNrZ3JvdW5kXCIsXHJcbiAgYWxpZ25tZW50OiBcImFsaWdubWVudFwiLFxyXG4gIGV4cGVyaWVuY2U6IFwiZXhwZXJpZW5jZVwiLFxyXG4gIHN0cmVuZ3RoOiBcInN0cmVuZ3RoXCIsXHJcbiAgZGV4dGVyaXR5OiBcImRleHRlcml0eVwiLFxyXG4gIGNvbnN0aXR1dGlvbjogXCJjb25zdGl0dXRpb25cIixcclxuICBpbnRlbGxpZ2VuY2U6IFwiaW50ZWxsaWdlbmNlXCIsXHJcbiAgd2lzZG9tOiBcIndpc2RvbVwiLFxyXG4gIGNoYXJpc21hOiBcImNoYXJpc21hXCIsXHJcbiAgYXJtb3JDbGFzczogXCJhcm1vckNsYXNzXCIsXHJcbiAgaW5pdGlhdGl2ZTogXCJpbml0aWF0aXZlXCIsXHJcbiAgc3BlZWQ6IFwic3BlZWRcIixcclxuICBoaXRQb2ludE1heGltdW06IFwiaGl0UG9pbnRNYXhpbXVtXCIsXHJcbiAgY3VycmVudEhpdFBvaW50czogXCJjdXJyZW50SGl0UG9pbnRzXCIsXHJcbiAgdGVtcG9yYXJ5SGl0UG9pbnRzOiBcInRlbXBvcmFyeUhpdFBvaW50c1wiLFxyXG4gIGhpdERpY2U6IFwiaGl0RGljZVwiLFxyXG4gIGRlYXRoU2F2ZVN1Y2Nlc3M6IFwiZGVhdGhTYXZlU3VjY2Vzc1wiLFxyXG4gIGRlYXRoU2F2ZUZhaWx1cmVzOiBcImRlYXRoU2F2ZUZhaWx1cmVzXCIsXHJcbiAgcHJvZmljaWVuY3lCb251czogXCJwcm9maWNpZW5jeUJvbnVzXCIsXHJcbiAgYWNyb2JhdGljczogXCJhY3JvYmF0aWNzXCIsXHJcbiAgYW5pbWFsSGFuZGxpbmc6IFwiYW5pbWFsSGFuZGxpbmdcIixcclxuICBhcmNhbmE6IFwiYXJjYW5hXCIsXHJcbiAgYXRobGV0aWNzOiBcImF0aGxldGljc1wiLFxyXG4gIGRlY2VwdGlvbjogXCJkZWNlcHRpb25cIixcclxuICBoaXN0b3J5OiBcImhpc3RvcnlcIixcclxuICBpbnNpZ2h0OiBcImluc2lnaHRcIixcclxuICBpbnRpbWlkYXRpb246IFwiaW50aW1pZGF0aW9uXCIsXHJcbiAgaW52ZXN0aWdhdGlvbjogXCJpbnZlc3RpZ2F0aW9uXCIsXHJcbiAgbWVkaWNpbmU6IFwibWVkaWNpbmVcIixcclxuICBuYXR1cmU6IFwibmF0dXJlXCIsXHJcbiAgcGVyY2VwdGlvbjogXCJwZXJjZXB0aW9uXCIsXHJcbiAgcGVyZm9ybWFuY2U6IFwicGVyZm9ybWFuY2VcIixcclxuICBwZXJzdWFzaW9uOiBcInBlcnN1YXNpb25cIixcclxuICByZWxpZ2lvbjogXCJyZWxpZ2lvblwiLFxyXG4gIHNsZWlnaHRPZkhhbmQ6IFwic2xlaWdodE9mSGFuZFwiLFxyXG4gIHN0ZWFsdGg6IFwic3RlYWx0aFwiLFxyXG4gIHN1cnZpdmFsOiBcInN1cnZpdmFsXCIsXHJcbiAgaW5zcGlyYXRpb246IFwiaW5zcGlyYXRpb25cIixcclxuICBwYXNzaXZlV2lzZG9tOiBcInBhc3NpdmVXaXNkb21cIixcclxuICBvdGhlclByb2ZpY2llbmNpZXM6IFwib3RoZXJQcm9maWNpZW5jaWVzXCIsXHJcbiAgbGFuZ3VhZ2VzOiBcImxhbmd1YWdlc1wiLFxyXG4gIGVxdWlwbWVudDogXCJlcXVpcG1lbnRcIixcclxuICBwbGF0OiBcInBsYXRcIixcclxuICBnb2xkOiBcImdvbGRcIixcclxuICBzaWx2ZXI6IFwic2lsdmVyXCIsXHJcbiAgY29wcGVyOiBcImNvcHBlclwiLFxyXG4gIGF0dGFja3NBbmRTcGVsbGNhc3Rpbmc6IFwiYXR0YWNrc0FuZFNwZWxsY2FzdGluZ1wiLFxyXG4gIGZlYXR1cmVzQW5kVHJhaXRzOiBcImZlYXR1cmVzQW5kVHJhaXRzXCIsXHJcbiAgcGVyc29uYWxpdHlUcmFpdHM6IFwicGVyc29uYWxpdHlUcmFpdHNcIixcclxuICBpZGVhbHM6IFwiaWRlYWxzXCIsXHJcbiAgYm9uZHM6IFwiYm9uZHNcIixcclxuICBmbGF3czogXCJmbGF3c1wiLFxyXG4gIGJhY2tzdG9yeTogXCJiYWNrc3RvcnlcIixcclxuICBhcHBlYXJhbmNlOiBcImFwcGVhcmFuY2VcIixcclxufTtcclxuIl0sIm5hbWVzIjpbIlByaXNtYUNsaWVudCIsImdsb2JhbEZvclByaXNtYSIsImdsb2JhbFRoaXMiLCJwcmlzbWEiLCJwcm9jZXNzIiwiQ0hBUkFDVEVSX0ZJRUxEUyIsImNoYXJhY3Rlck5hbWUiLCJwbGF5ZXJOYW1lIiwicmFjZSIsImNsYXNzQW5kTGV2ZWwiLCJiYWNrZ3JvdW5kIiwiYWxpZ25tZW50IiwiZXhwZXJpZW5jZSIsInN0cmVuZ3RoIiwiZGV4dGVyaXR5IiwiY29uc3RpdHV0aW9uIiwiaW50ZWxsaWdlbmNlIiwid2lzZG9tIiwiY2hhcmlzbWEiLCJhcm1vckNsYXNzIiwiaW5pdGlhdGl2ZSIsInNwZWVkIiwiaGl0UG9pbnRNYXhpbXVtIiwiY3VycmVudEhpdFBvaW50cyIsInRlbXBvcmFyeUhpdFBvaW50cyIsImhpdERpY2UiLCJkZWF0aFNhdmVTdWNjZXNzIiwiZGVhdGhTYXZlRmFpbHVyZXMiLCJwcm9maWNpZW5jeUJvbnVzIiwiYWNyb2JhdGljcyIsImFuaW1hbEhhbmRsaW5nIiwiYXJjYW5hIiwiYXRobGV0aWNzIiwiZGVjZXB0aW9uIiwiaGlzdG9yeSIsImluc2lnaHQiLCJpbnRpbWlkYXRpb24iLCJpbnZlc3RpZ2F0aW9uIiwibWVkaWNpbmUiLCJuYXR1cmUiLCJwZXJjZXB0aW9uIiwicGVyZm9ybWFuY2UiLCJwZXJzdWFzaW9uIiwicmVsaWdpb24iLCJzbGVpZ2h0T2ZIYW5kIiwic3RlYWx0aCIsInN1cnZpdmFsIiwiaW5zcGlyYXRpb24iLCJwYXNzaXZlV2lzZG9tIiwib3RoZXJQcm9maWNpZW5jaWVzIiwibGFuZ3VhZ2VzIiwiZXF1aXBtZW50IiwicGxhdCIsImdvbGQiLCJzaWx2ZXIiLCJjb3BwZXIiLCJhdHRhY2tzQW5kU3BlbGxjYXN0aW5nIiwiZmVhdHVyZXNBbmRUcmFpdHMiLCJwZXJzb25hbGl0eVRyYWl0cyIsImlkZWFscyIsImJvbmRzIiwiZmxhd3MiLCJiYWNrc3RvcnkiLCJhcHBlYXJhbmNlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./lib/db.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/next-auth","vendor-chunks/@babel","vendor-chunks/jose","vendor-chunks/openid-client","vendor-chunks/uuid","vendor-chunks/oauth","vendor-chunks/@panva","vendor-chunks/yallist","vendor-chunks/preact-render-to-string","vendor-chunks/preact","vendor-chunks/oidc-token-hash","vendor-chunks/object-hash","vendor-chunks/lru-cache","vendor-chunks/cookie"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=B%3A%5CCodeSpace%5CDnDWebsite%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=B%3A%5CCodeSpace%5CDnDWebsite&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();