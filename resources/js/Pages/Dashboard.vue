<template>
    <h2 class="text-center text-3xl font-extrabold text-gray-900">Bienvenue, {{ user.name ?? user.email }} !</h2>

    <p class="mt-4 text-center text-sm text-gray-600">
        <Link method="post" as="button" :href="route('logout')" class="font-medium text-primary-600 hover:text-primary-500">
            Déconnexion
        </Link>
    </p>
</template>
<script>
import AuthLayout from "@/Layouts/AuthLayout.vue";
import { Link } from "@inertiajs/inertia-vue3";

export default {
    layout: AuthLayout,

    components: {
        Link
    },

    computed: {
        user() {
            return this.$page.props.auth.user
        }
    }
}
</script>
