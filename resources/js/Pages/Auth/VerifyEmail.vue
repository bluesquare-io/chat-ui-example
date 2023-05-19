<template>
    <h2 class="text-center text-3xl font-extrabold text-gray-900">{{ $t('verify_email.title') }}</h2>

    <p class="mt-2 text-center text-gray-600 text-sm">
        {{ $t('verify_email.subtitle') }}
    </p>

    <Panel card edge class="mt-8">
        <div v-if="verificationLinkSent" class="mb-4 font-medium text-sm text-green-600">
            {{ $t('verify_email.verification_link_sent') }}
        </div>

        <form @submit.prevent="submit" class="space-y-5">
            <p class="text-gray-600">
                {{ $t('verify_email.helper') }}
            </p>

            <p class="text-gray-600 text-sm">
                {{ $t('verify_email.notice') }}
            </p>

            <div class="flex items-center justify-end">
                <Button color="primary" :disabled="form.processing">
                    {{ $t('verify_email.form.submit') }}
                </Button>
            </div>
        </form>
    </Panel>

    <p class="mt-5 text-center text-gray-500 text-sm">
        <Link :href="route('logout')" method="post" as="button" class="font-medium text-primary-600 hover:text-primary-500">{{ $t('verify_email.logout.link') }}</Link> {{ $t('verify_email.logout.suffix') }}
    </p>
</template>

<script>
import AuthLayout from '@/Layouts/AuthLayout.vue'
import { Link } from '@inertiajs/inertia-vue3';
import Button from "@/Components/Elements/Button.vue";
import Input from "@/Components/Form/Input.vue";
import InputGroup from "@/Components/Form/InputGroup.vue";
import FormErrors from "@/Components/Feedback/FormErrors.vue";
import Panel from "@/Components/Containers/Panel.vue";

export default {
    layout: AuthLayout,

    components: {
        Panel,
        Button,
        Input,
        InputGroup,
        FormErrors,
        Link,
    },

    props: {
        status: String,
    },

    data() {
        return {
            form: this.$inertia.form()
        }
    },

    methods: {
        submit() {
            this.form.post(this.route('verification.send'))
        },
    },

    computed: {
        verificationLinkSent() {
            return this.status === 'verification-link-sent';
        }
    }
}
</script>
