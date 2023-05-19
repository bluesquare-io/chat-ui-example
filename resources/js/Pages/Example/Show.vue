<template>
    <div class="space-y-8">
        <Breadcrumb :pages="breadcrumbs"/>

        <div class="bg-white rounded-md shadow">
            <div>
                <div class="bg-secondary-600 h-32 lg:h-48 rounded-t-md"></div>
                <!--<img class="h-32 w-full object-cover lg:h-48 rounded-t-md" :src="backgroundImage"/>-->
            </div>
            <div class="mx-auto px-4 sm:px-6 lg:px-8 pb-4">
                <div class="-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5">
                    <div class="flex">
                        <Avatar class="hidden sm:block ring-4 ring-white" size="4xl" status="online"/>
                        <Avatar class="sm:hidden ring-4 ring-white" size="3xl" status="online"/>
                    </div>
                    <div class="mt-6 sm:flex-1 sm:min-w-0 sm:flex sm:items-center sm:justify-end sm:space-x-6 sm:pb-1">
                        <div class="sm:hidden md:block mt-6 min-w-0 flex-1">
                            <h1 class="text-2xl font-bold text-gray-900 truncate">
                                {{ item.name }}
                            </h1>
                        </div>
                        <div class="mt-6 flex flex-col justify-stretch space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4">
                            <Link :href="route('dashboard', { example: item.id })">
                                <Button>
                                    <PencilIcon class="-ml-1 mr-2 h-5 w-5 text-gray-400" />
                                    <span>Modifier</span>
                                </Button>
                            </Link>
                            <Dropdown label="Actions" :options="actions"/>
                        </div>
                    </div>
                </div>
                <div class="hidden sm:block md:hidden mt-6 min-w-0 flex-1">
                    <h1 class="text-2xl font-bold text-gray-900 truncate">
                        {{ item.name }}
                    </h1>
                </div>
            </div>
        </div>
    </div>

    <Modal v-model="showDeleteModal" type="error" vertical title="Suppression">
        Êtes-vous sûr de vouloir supprimer cet example ?
        <template #actions>
            <Button @click="deleteItem" color="error" :disabled="deleteForm.processing">Oui, supprimer</Button>
            <Button @click="showDeleteModal = false" :disabled="deleteForm.processing">Annuler</Button>
        </template>
    </Modal>
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
import { PencilIcon } from '@heroicons/vue/solid'
import Avatar from "@/Components/Elements/Avatar.vue";
import Modal from "@/Components/Overlay/Modal.vue";

export default {
    layout: SidebarLayout,

    components: {
        Avatar,
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
        PlusIcon,
        PencilIcon,
        Modal
    },

    props: ['item'],

    data() {
        return {
            showDeleteModal: false,
            deleteForm: this.$inertia.form({}),
        }
    },

    methods: {
        deleteItem() {
            this.deleteForm.delete(this.route('examples.destroy', { example: this.item.id }))
        }
    },

    computed: {
        breadcrumbs() {
            return [
                { name: 'Examples', route: 'dashboard' },
                { name: 'Example #1' }
            ]
        },
        actions() {
            return [
                { label: 'Exporter au format CSV', onClick: null },
                { separator: true },
                { label: 'Supprimer', onClick: () => this.showDeleteModal = true },
            ]
        }
    }
}
</script>
