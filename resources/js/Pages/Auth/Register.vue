<template>
    <h2 class="text-center text-3xl font-extrabold text-gray-900">{{ $t('register.title') }}</h2>

    <p class="mt-2 text-center text-sm text-gray-600">
        {{ $t('register.subtitle') }} <Link :href="route('login')" class="font-medium text-primary-600 hover:text-primary-500">{{ $t('register.subtitle.link') }}</Link>
    </p>

    <Panel card edge class="mt-8">
        <FormErrors class="mb-4" />

        <div v-if="status" class="mb-4 font-medium text-sm text-success-600">{{ status }}</div>

        <form @submit.prevent="submit" class="space-y-6">
            <InputGroup :label="$t('register.form.name')" target="name" :error="form.errors.name">
                <Input v-model="form.name" required autofocus autocomplete="name" />
            </InputGroup>

            <InputGroup :label="$t('register.form.email')" target="email" :error="form.errors.email">
                <Input type="email" v-model="form.email" required autocomplete="username" />
            </InputGroup>

            <InputGroup :label="$t('register.form.password')" target="password" :error="form.errors.password">
                <Input type="password" v-model="form.password" required autocomplete="new-password" />
            </InputGroup>

            <InputGroup :label="$t('register.form.password_confirmation')" target="password_confirmation" :error="form.errors.password_confirmation">
                <Input type="password" v-model="form.password_confirmation" required autocomplete="new-password" />
            </InputGroup>

            <InputGroup target="terms" :error="form.errors.terms">
                <Switch v-model="form.terms">
                    {{ $t('register.form.terms.prefix') }} <a :href="route('register')" target="_blank" class="text-primary-600 hover:underline">{{ $t('register.form.terms.link') }}</a>.
                </Switch>
            </InputGroup>

            <div class="flex items-center justify-end mt-4">
                <Button color="primary" :disabled="form.processing">
                    {{ $t('register.form.submit') }}
                </Button>
            </div>
        </form>
    </Panel>
</template>

<script>
import { Link } from '@inertiajs/inertia-vue3';
import AuthLayout from '@/Layouts/AuthLayout.vue';
import Button from '@/Components/Elements/Button.vue';
import Input from '@/Components/Form/Input.vue';
import InputGroup from '@/Components/Form/InputGroup.vue';
import FormErrors from '@/Components/Feedback/FormErrors.vue';
import Switch from "@/Components/Form/Switch.vue";
import Panel from "@/Components/Containers/Panel.vue";

export default {
    layout: AuthLayout,

    components: {
        Switch,
        Button,
        Input,
        InputGroup,
        FormErrors,
        Link,
        Panel
    },

    props: {
        status: String,
    },

    data() {
        return {
            form: this.$inertia.form({
                name: '',
                email: '',
                password: '',
                password_confirmation: '',
                terms: false,
            })
        }
    },

    methods: {
        submit() {
            this.form.post(this.route('register'), {
                onFinish: () => this.form.reset('password', 'password_confirmation'),
            })
        }
    }
}
</script>
