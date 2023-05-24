<template>
    <h2 class="text-center text-3xl font-extrabold text-gray-900">Tada !</h2>

    <p class="mt-4 text-center text-sm text-gray-600 space-x-4">
        <Link :href="route('login')" class="font-medium text-primary-600 hover:text-primary-500">Connexion</Link>
        <span>|</span>
        <Link :href="route('register')" class="font-medium text-primary-600 hover:text-primary-500">Inscription</Link>
    </p>
</template>

<script>
import AuthLayout from "@/Layouts/AuthLayout.vue";
import { Link } from "@inertiajs/inertia-vue3";

export default {
    layout: AuthLayout,
    components: {
        Link
    }
}
</script>
