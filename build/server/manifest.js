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
		client: {start:"_app/immutable/entry/start.lAOLklRI.js",app:"_app/immutable/entry/app.OaD26lLF.js",imports:["_app/immutable/entry/start.lAOLklRI.js","_app/immutable/chunks/GFxp9hQv.js","_app/immutable/chunks/JypfP0gL.js","_app/immutable/chunks/DnnZBupd.js","_app/immutable/entry/app.OaD26lLF.js","_app/immutable/chunks/JypfP0gL.js","_app/immutable/chunks/DkQ2aA8x.js","_app/immutable/chunks/D9PNolux.js","_app/immutable/chunks/DnnZBupd.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./chunks/0-BXnOGriI.js')),
			__memo(() => import('./chunks/1-1q5b90Ax.js')),
			__memo(() => import('./chunks/2-C3XhC8Bd.js'))
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
