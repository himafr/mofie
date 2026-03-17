
// Avoid direct access to `import.meta` at module-eval time so Jest can load this file.
export const apiToken= import.meta.env.VITE_API_TOKEN;
export const apiUrl =import.meta.env.VITE_API_URL;
export const imageUrl = "https://image.tmdb.org/t/p/w500";
export const backDropUrl = "https://image.tmdb.org/t/p/w1280";