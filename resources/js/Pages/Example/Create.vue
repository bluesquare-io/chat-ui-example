<template>
    <div class="space-y-8">
        <Breadcrumb :pages="breadcrumbs"/>

        <div class="sm:flex flex-col items-center space-y-8">
            <h1 class="text-3xl text-gray-800 font-bold">Création d'un example</h1>

            <Panel card class="w-full max-w-lg">
                <FormErrors class="mb-4" />

                <form @submit.prevent="submit" class="space-y-4">
                    <InputGroup label="Nom complet" target="name" :error="form.errors.name">
                        <Input v-model="form.name" required autofocus autocomplete="name" />
                    </InputGroup>

                    <InputGroup label="Adresse e-mail" target="email" :error="form.errors.email">
                        <Input type="email" v-model="form.email" required autocomplete="username" />
                    </InputGroup>

                    <InputGroup target="active">
                        <Checkbox v-model="form.active">Activé</Checkbox>
                    </InputGroup>

                    <Button color="primary" :disabled="form.processing">
                        Enregistrer
                    </Button>
                </form>
            </Panel>
        </div>
    </div>
</template>
<script>
import SidebarLayout from "@/Layouts/SidebarLayout.vue";
import Container from "@/Components/Containers/Container.vue";
import Button from "@/Components/Elements/Button.vue";
import Checkbox from "@/Components/Form/Checkbox.vue";
import Input from "@/Components/Form/Input.vue";
import FormErrors from "@/Components/Feedback/FormErrors.vue";
import InputGroup from "@/Components/Form/InputGroup.vue";
import Badge from "@/Components/Elements/Badge.vue";
import Pagination from "@/Components/Elements/Pagination.vue";
import Breadcrumb from "@/Components/Elements/Breadcrumb.vue";
import { SearchIcon, PlusIcon } from "@heroicons/vue/solid";
import {Link} from "@inertiajs/inertia-vue3";
import Dropdown from "@/Components/Elements/Dropdown.vue";
import Panel from "@/Components/Containers/Panel.vue";

export default {
    layout: SidebarLayout,

    components: {
        Panel,
        Dropdown,
        InputGroup,
        Button,
        Checkbox,
        Input,
        FormErrors,
        Breadcrumb,
        Pagination,
        Container,
        Badge,
        Link,
        SearchIcon,
        PlusIcon
    },

    data() {
        return {
            form: this.$inertia.form({
                name: '',
                email: '',
                active: true
            })
        }
    },

    methods: {
        submit() {
            this.form.post(this.route('examples.store'))
        }
    },

    computed: {
        breadcrumbs() {
            return [
                { name: 'Examples', route: 'dashboard' },
                { name: 'Nouvel example', current: true },
            ]
        }
    }
}
</script>
