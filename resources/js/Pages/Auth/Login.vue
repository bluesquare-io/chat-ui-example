<template>
    <h2 class="text-center text-3xl font-extrabold text-gray-900">{{ $t('login.title') }}</h2>

    <p class="mt-2 text-center text-sm text-gray-600">
        {{ $t('login.subtitle') }} <Link :href="route('register')" class="font-medium text-primary-600 hover:text-primary-500">{{ $t('login.subtitle.link') }}</Link>
    </p>

    <Panel card edge class="mt-8">
        <FormErrors class="mb-4" />

        <div v-if="status" class="mb-4 font-medium text-sm text-success-600">{{ status }}</div>

        <form @submit.prevent="submit" class="space-y-4">
            <InputGroup :label="$t('login.form.email')" target="email" :error="form.errors.email">
                <Input type="email" v-model="form.email" required autofocus autocomplete="username" />
            </InputGroup>

            <InputGroup :label="$t('login.form.password')" target="password" :error="form.errors.password">
                <Input type="password" v-model="form.password" required autocomplete="current-password" />
            </InputGroup>

            <InputGroup target="remember">
                <Checkbox v-model="form.remember">{{ $t('login.form.remember') }}</Checkbox>
            </InputGroup>

            <div class="flex items-center justify-end mt-4 space-x-4">
                <Link :href="route('password.request')" class="underline text-sm text-gray-600 hover:text-gray-900">
                    {{ $t('login.forgot_password') }}
                </Link>

                <Button color="primary" :disabled="form.processing">
                    {{ $t('login.form.submit') }}
                </Button>
            </div>
        </form>
    </Panel>
</template>

<script>
import { Link } from '@inertiajs/inertia-vue3';
import AuthLayout from "@/Layouts/AuthLayout.vue";
import Button from "@/Components/Elements/Button.vue";
import Checkbox from "@/Components/Form/Checkbox.vue";
import Input from "@/Components/Form/Input.vue";
import FormErrors from "@/Components/Feedback/FormErrors.vue";
import InputGroup from "@/Components/Form/InputGroup.vue";
import Panel from "@/Components/Containers/Panel.vue";
import Container from "@/Components/Containers/Container.vue";

export default {
    layout: AuthLayout,

    components: {
        Panel,
        InputGroup,
        Button,
        Checkbox,
        Input,
        FormErrors,
        Container,
        Link,
    },

    props: {
        status: String,
    },

    data() {
        return {
            form: this.$inertia.form({
                email: '',
                password: '',
                remember: false
            })
        }
    },

    methods: {
        submit() {
            this.form.post(this.route('login'), {
                onFinish: () => this.form.reset('password'),
            })
        }
    }
}
</script>
