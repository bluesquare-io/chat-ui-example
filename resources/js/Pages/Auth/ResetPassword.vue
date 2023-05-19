<template>
    <h2 class="text-center text-3xl font-extrabold text-gray-900">{{ $t('reset_password.title') }}</h2>

    <p class="mt-2 text-center text-gray-600 text-sm">
        {{ $t('reset_password.subtitle') }}
    </p>

    <Panel card edge class="mt-8">
        <FormErrors class="mb-4" />

        <form @submit.prevent="submit" class="space-y-5">
            <InputGroup :label="$t('reset_password.form.email')" target="email" :error="form.errors.email">
                <Input type="email" v-model="form.email" required disabled autocomplete="username" />
            </InputGroup>

            <InputGroup :label="$t('reset_password.form.password')" target="password" :error="form.errors.password">
                <Input type="password" v-model="form.password" required autocomplete="new-password" />
            </InputGroup>

            <InputGroup :label="$t('reset_password.form.subpassword_confirmationmit')" target="password_confirmation" :error="form.errors.password_confirmation">
                <Input type="password" v-model="form.password_confirmation" required autocomplete="new-password" />
            </InputGroup>

            <div class="flex items-center justify-end">
                <Button color="primary" :disabled="form.processing">
                    {{ $t('reset_password.form.submit') }}
                </Button>
            </div>
        </form>
    </Panel>

    <p class="mt-5 text-center text-gray-500 text-sm">
        <Link :href="route('login')" class="font-medium text-primary-600 hover:text-primary-500">{{ $t('reset_password.login.link') }}</Link> {{ $t('reset_password.login.suffix') }}
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
        email: String,
        token: String,
    },

    data() {
        return {
            form: this.$inertia.form({
                token: this.token,
                email: this.email,
                password: '',
                password_confirmation: '',
            })
        }
    },

    methods: {
        submit() {
            this.form.post(this.route('password.update'), {
                onFinish: () => this.form.reset('password', 'password_confirmation'),
            })
        }
    }
}
</script>
