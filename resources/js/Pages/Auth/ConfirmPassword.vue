<template>
    <h2 class="text-center text-3xl font-extrabold text-gray-900">{{ $t('confirm_password.title') }}</h2>

    <p class="mt-2 text-center text-gray-600 text-sm">
        {{ $t('confirm_password.subtitle') }}
    </p>

    <Panel card edge class="mt-8">
        <FormErrors class="mb-4" />

        <form @submit.prevent="submit" class="space-y-5">
            <InputGroup :label="$t('confirm_password.form.password')" target="password" :error="form.errors.password">
                <Input type="password" v-model="form.password" autofocus required autocomplete="current-password" />
            </InputGroup>

            <div class="flex items-center justify-end">
                <Button color="primary" :disabled="form.processing">
                    {{ $t('confirm_password.form.submit') }}
                </Button>
            </div>
        </form>
    </Panel>
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

    data() {
        return {
            form: this.$inertia.form({
                password: '',
            })
        }
    },

    methods: {
        submit() {
            this.form.post(this.route('password.confirm'), {
                onFinish: () => this.form.reset(),
            })
        }
    }
}
</script>
