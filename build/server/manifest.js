const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {start:"_app/immutable/entry/start.B0P2sIYT.js",app:"_app/immutable/entry/app.Czt6KDR4.js",imports:["_app/immutable/entry/start.B0P2sIYT.js","_app/immutable/chunks/B43dfVQ6.js","_app/immutable/chunks/njRUzhEI.js","_app/immutable/chunks/BMP4a1QR.js","_app/immutable/entry/app.Czt6KDR4.js","_app/immutable/chunks/njRUzhEI.js","_app/immutable/chunks/CH_VfR1k.js","_app/immutable/chunks/Bwfy2NDC.js","_app/immutable/chunks/BMP4a1QR.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./chunks/0-DN-n1UPz.js')),
			__memo(() => import('./chunks/1-DlpGCbeD.js')),
			__memo(() => import('./chunks/2-yNTru2Xr.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();

const prerendered = new Set([]);

const base = "";

export { base, manifest, prerendered };
//# sourceMappingURL=manifest.js.map
