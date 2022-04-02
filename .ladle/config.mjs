const url = new URL(import.meta.url);
export default {
    resolve: {
        alias: {
            src: url.pathname.replace('.ladle/config.mjs', 'src'),
            public: url.pathname.replace('.ladle/config.mjs', 'public')
        }
    }
};
