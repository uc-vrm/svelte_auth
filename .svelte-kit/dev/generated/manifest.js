const c = [
	() => import("..\\components\\layout.svelte"),
	() => import("..\\components\\error.svelte"),
	() => import("..\\..\\..\\src\\routes\\index.svelte"),
	() => import("..\\..\\..\\src\\routes\\profile.svelte")
];

const d = decodeURIComponent;

export const routes = [
	// src/routes/index.svelte
	[/^\/$/, [c[0], c[2]], [c[1]]],

	// src/routes/callback.js
	[/^\/callback\/?$/],

	// src/routes/profile.svelte
	[/^\/profile\/?$/, [c[0], c[3]], [c[1]]],

	// src/routes/logout.js
	[/^\/logout\/?$/],

	// src/routes/login.js
	[/^\/login\/?$/]
];

// we import the root layout/error components eagerly, so that
// connectivity errors after initialisation don't nuke the app
export const fallback = [c[0](), c[1]()];