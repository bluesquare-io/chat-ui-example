import './bootstrap';
import '../css/app.css';

import { createApp, h } from 'vue';
import { createInertiaApp } from '@inertiajs/inertia-vue3';
import { InertiaProgress } from '@inertiajs/progress';
import Notifications from 'notiwind';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';

const appName = window.document.getElementsByTagName('title')[0]?.innerText || 'App';

function $t(key, params = {}, fallback = null) {
    let translation = window.translations[key] ?? (fallback ?? key)
    Object.keys(params).forEach(slug => translation = translation.replaceAll(`:${slug}`, params[slug]))
    return translation
}

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.vue`, import.meta.glob('./Pages/**/*.vue')),
    setup({ el, app, props, plugin }) {
        return createApp({ render: () => h(app, props) })
            .use(plugin)
            .use(Notifications)
            .mixin({ methods: { route, $t } })
            .mount(el);
    },
});

InertiaProgress.init({ color: '#4B5563' });
