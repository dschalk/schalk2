

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.DrKFaEh_.js","_app/immutable/chunks/Bwfy2NDC.js","_app/immutable/chunks/njRUzhEI.js"];
export const stylesheets = [];
export const fonts = [];
