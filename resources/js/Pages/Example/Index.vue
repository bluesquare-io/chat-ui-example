<template>
    <div class="space-y-6">
        <Breadcrumb :pages="breadcrumbs"/>

        <h1 class="text-3xl text-gray-800 font-bold">Examples</h1>

        <div class="sm:flex">
            <div class="flex-1 max-w-sm">
                <div class="relative">
                    <Input type="search" v-model="currentSearch" class="w-full pr-10" placeholder="Rechercher..." autofocus />
                    <SearchIcon class="absolute right-3 top-2 w-5 h-5 text-gray-500" />
                </div>
            </div>
            <div class="flex-1 sm:flex items-center justify-end gap-3">
                <Link :href="route('dashboard')">
                    <Button color="primary">
                        <PlusIcon class="w-5 h-5 -ml-1 mr-1.5"/>
                        Créer un nouvel example
                    </Button>
                </Link>
                <Dropdown label="Actions" :options="actions"/>
            </div>
        </div>

        <Table>
            <template #head>
                <TableHeading class="pl-4 sm:pl-6">Utilisateur</TableHeading>
                <TableHeading>Entreprise</TableHeading>
                <TableHeading>Statut</TableHeading>
                <TableHeading>Rôle</TableHeading>
                <TableHeading/>
            </template>
            <TableRow v-for="item in results.data" :key="item.id" class="hover:bg-gray-50">
                <TableCell class="sm:pl-6">
                    <div class="flex items-center">
                        <div class="h-10 w-10 flex-shrink-0">
                            <Avatar size="sm" :name="item.name" :chars="2"/>
                        </div>
                        <div class="ml-4">
                            <div class="font-medium text-gray-900">{{ item.name }}</div>
                            <div class="text-gray-500">{{ item.email ?? 'N/A' }}</div>
                        </div>
                    </div>
                </TableCell>
                <TableCell class="text-sm text-gray-500">{{ item.company ?? 'N/A' }}</TableCell>
                <TableCell class="text-sm text-gray-500">
                    <Badge color="primary">Actif</Badge>
                </TableCell>
                <TableCell class="text-sm text-gray-500">{{ item.role ?? 'N/A' }}</TableCell>
                <TableCell class="text-right space-x-2 sm:pr-6">
                    <Link :href="route('dashboard', { example: item.id })">
                        <Button>Visualiser</Button>
                    </Link>
                </TableCell>
            </TableRow>
        </Table>

        <div class="flex lg:justify-end">
            <Pagination :data="results" :params="params" />
        </div>
    </div>
</template>
<script>
import axios from "axios";
import SidebarLayout from "@/Layouts/SidebarLayout.vue";
import Container from "@/Components/Containers/Container.vue";
import Table from "@/Components/Lists/Table.vue";
import TableRow from "@/Components/Lists/TableRow.vue";
import TableCell from "@/Components/Lists/TableCell.vue";
import TableHeading from "@/Components/Lists/TableHeading.vue";
import Avatar from "@/Components/Elements/Avatar.vue";
import Button from "@/Components/Elements/Button.vue";
import Badge from "@/Components/Elements/Badge.vue";
import Pagination from "@/Components/Elements/Pagination.vue";
import Breadcrumb from "@/Components/Elements/Breadcrumb.vue";
import Input from "@/Components/Form/Input.vue";
import Dropdown from "@/Components/Elements/Dropdown.vue";
import { SearchIcon, PlusIcon } from "@heroicons/vue/solid";
import { Link } from "@inertiajs/inertia-vue3";

export default {
    layout: SidebarLayout,

    components: {
        Dropdown,
        Input,
        Breadcrumb,
        Pagination,
        Container,
        Table,
        TableHeading,
        TableRow,
        TableCell,
        Avatar,
        Button,
        Badge,
        Link,
        SearchIcon,
        PlusIcon
    },

    props: ['items', 'search'],

    data() {
        return {
            currentSearch: this.search,
            results: this.items
        }
    },

    watch: {
        currentSearch() {
            this.query()
        }
    },

    methods: {
        query() {
            axios.get(this.route('examples.index'), { params: this.params })
                .then(res => this.results = res.data)
        }
    },

    computed: {
        params() {
            return {
                search: this.currentSearch
            }
        },
        breadcrumbs() {
            return [
                { name: 'Examples', current: true }
            ]
        },
        actions() {
            return [
                { label: 'Exporter au format CSV', onClick: null }
            ]
        }
    }
}
</script>
