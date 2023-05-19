<template>
    <h2 class="text-center text-3xl font-extrabold text-gray-900">{{ $t('forgot_password.title') }}</h2>

    <p class="mt-2 text-center text-gray-600 text-sm">
        {{ $t('forgot_password.subtitle') }}
    </p>

    <Panel card edge class="mt-8">
        <div v-if="status" class="mb-4 font-medium text-sm text-green-600">
            {{ status }}
        </div>

        <FormErrors class="mb-4" />

        <form @submit.prevent="submit" class="space-y-6">
            <InputGroup :label="$t('forgot_password.form.email')" target="email">
                <Input type="email" v-model="form.email" required autofocus autocomplete="username" :error="form.errors.email" />
            </InputGroup>

            <div class="flex items-center justify-center">
                <Button color="primary" :disabled="form.processing">
                    {{ $t('forgot_password.form.submit') }}
                </Button>
            </div>
        </form>
    </Panel>

    <p class="mt-5 text-center text-gray-500 text-sm">
        <Link :href="route('login')" class="font-medium text-primary-600 hover:text-primary-500">{{ $t('forgot_password.login.link') }}</Link> {{ $t('forgot_password.login.suffix') }}
    </p>
</template>

<script>
import AuthLayout from '@/Layouts/AuthLayout.vue'
import InputGroup from "@/Components/Form/InputGroup.vue";
import Input from "@/Components/Form/Input.vue";
import Button from "@/Components/Elements/Button.vue";
import FormErrors from "@/Components/Feedback/FormErrors.vue";
import Panel from "@/Components/Containers/Panel.vue";
import { Link } from "@inertiajs/inertia-vue3";

export default {
    layout: AuthLayout,

    components: {
        Panel,
        FormErrors,
        Input,
        InputGroup,
        Button,
        Link
    },

    props: {
        status: String,
    },

    data() {
        return {
            form: this.$inertia.form({
                email: ''
            })
        }
    },

    methods: {
        submit() {
            this.form.post(this.route('password.email'))
        }
    }
}
</script>
