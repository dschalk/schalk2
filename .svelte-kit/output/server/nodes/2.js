

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.7V5bZmmB.js","_app/immutable/chunks/Bwfy2NDC.js","_app/immutable/chunks/njRUzhEI.js","_app/immutable/chunks/D80q9sdk.js"];
export const stylesheets = [];
export const fonts = [];
