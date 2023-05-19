<template>
    <BaseLayout>
        <div class="min-h-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8 bg-gray-50">
            <Container constrained constraint="sm:max-w-md">
                <Link :href="route('dashboard')" class="block mb-6">
                    <Logo class="mx-auto h-12 w-auto text-black" />
                </Link>
                <slot></slot>
            </Container>
        </div>
    </BaseLayout>
</template>
<script>
import BaseLayout from "@/Layouts/BaseLayout.vue";
import Container from "@/Components/Containers/Container.vue";
import Logo from "@/Components/Images/Logo.vue";
import { Link } from '@inertiajs/inertia-vue3';

export default {
    components: {
        BaseLayout,
        Container,
        Logo,
        Link
    }
}
</script>
