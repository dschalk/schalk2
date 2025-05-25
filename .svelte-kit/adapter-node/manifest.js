export const manifest = (() => {
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
		client: {start:"_app/immutable/entry/start.CH3r4a5c.js",app:"_app/immutable/entry/app.OiDWSaii.js",imports:["_app/immutable/entry/start.CH3r4a5c.js","_app/immutable/chunks/C6FWgrq5.js","_app/immutable/chunks/JypfP0gL.js","_app/immutable/chunks/DnnZBupd.js","_app/immutable/entry/app.OiDWSaii.js","_app/immutable/chunks/JypfP0gL.js","_app/immutable/chunks/DkQ2aA8x.js","_app/immutable/chunks/D9PNolux.js","_app/immutable/chunks/DnnZBupd.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
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

export const prerendered = new Set([]);

export const base = "";