

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.D_ZqKhKq.js","_app/immutable/chunks/D9PNolux.js","_app/immutable/chunks/JypfP0gL.js"];
export const stylesheets = [];
export const fonts = [];
