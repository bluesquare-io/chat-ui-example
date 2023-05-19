<template>
    <BaseLayout>
        <div class="min-h-screen overflow-auto bg-gray-100">
            <TransitionRoot as="template" :show="sidebarOpen">
                <Dialog as="div" class="fixed inset-0 flex z-40 md:hidden" @close="sidebarOpen = false">
                    <TransitionChild as="template" enter="transition-opacity ease-linear duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="transition-opacity ease-linear duration-300" leave-from="opacity-100" leave-to="opacity-0">
                        <DialogOverlay class="fixed inset-0 bg-gray-600 bg-opacity-75" />
                    </TransitionChild>
                    <TransitionChild as="template" enter="transition ease-in-out duration-300 transform" enter-from="-translate-x-full" enter-to="translate-x-0" leave="transition ease-in-out duration-300 transform" leave-from="translate-x-0" leave-to="-translate-x-full">
                        <div class="relative flex-1 flex flex-col max-w-xs w-full bg-secondary-700">
                            <TransitionChild as="template" enter="ease-in-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in-out duration-300" leave-from="opacity-100" leave-to="opacity-0">
                                <div class="absolute top-0 right-0 -mr-12 pt-2">
                                    <button type="button" class="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" @click="sidebarOpen = false">
                                        <span class="sr-only">Fermer</span>
                                        <XIcon class="h-6 w-6 text-white" aria-hidden="true" />
                                    </button>
                                </div>
                            </TransitionChild>
                            <div class="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
                                <div class="flex-shrink-0 flex items-center px-4">
                                    <Logo class="h-8 w-auto text-white" />
                                </div>
                                <nav class="mt-5 px-2 space-y-1">
                                    <Link v-for="item in navigation" :key="item.name" :href="route(item.route)" :class="[item.route === current ? 'bg-secondary-800 text-white' : 'text-white hover:bg-secondary-600 hover:bg-opacity-75', 'group flex items-center px-2 py-2 text-base font-medium rounded-md']">
                                        <component :is="item.icon" class="mr-4 flex-shrink-0 h-6 w-6 text-secondary-300" aria-hidden="true" />
                                        {{ item.name }}
                                    </Link>
                                </nav>
                            </div>
                            <div class="flex-shrink-0 flex border-t border-secondary-800 p-4" v-if="user">
                                <Link href="#" class="flex-shrink-0 group block">
                                    <div class="flex items-center">
                                        <div>
                                            <Avatar size="md" :name="user.name" :chars="2" />
                                        </div>
                                        <div class="ml-3">
                                            <p class="text-base font-medium text-white">{{ user.name }}</p>
                                            <p class="text-sm font-medium text-secondary-200 group-hover:text-white">Mon compte</p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </TransitionChild>
                    <div class="flex-shrink-0 w-14" aria-hidden="true"/>
                </Dialog>
            </TransitionRoot>
            <div class="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
                <div class="flex-1 flex flex-col min-h-0 bg-secondary-700">
                    <div class="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
                        <div class="flex items-center flex-shrink-0 px-4">
                            <Logo class="h-8 w-auto text-white" />
                        </div>
                        <nav class="mt-5 flex-1 px-2 space-y-1">
                            <Link v-for="item in navigation" :key="item.name" :href="route(item.route)" :class="[item.route === current ? 'bg-secondary-800 text-white' : 'text-white hover:bg-secondary-600 hover:bg-opacity-75', 'group flex items-center px-2 py-2 text-sm font-medium rounded-md']">
                                <component :is="item.icon" class="mr-3 flex-shrink-0 h-6 w-6 text-secondary-300" aria-hidden="true" />
                                {{ item.name }}
                            </Link>
                        </nav>
                    </div>
                    <div class="flex-shrink-0 flex border-t border-secondary-800 p-4" v-if="user">
                        <Link href="#" class="flex-shrink-0 w-full group block">
                            <div class="flex items-center">
                                <Avatar size="sm" :name="user.name" :chars="2" />
                                <div class="ml-3">
                                    <p class="text-sm font-medium text-white">{{ user.name }}</p>
                                    <p class="text-xs font-medium text-secondary-200 group-hover:text-white">Mon compte</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            <div class="md:pl-64 flex flex-col flex-1">
                <div class="sticky top-0 z-10 md:hidden pl-1 pt-1 sm:pl-3 sm:pt-3 bg-gray-100">
                    <button type="button" class="-ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-secondary-500" @click="sidebarOpen = true">
                        <span class="sr-only">Menu</span>
                        <MenuIcon class="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>
                <main class="flex-1">
                    <div class="py-6">
                        <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                            <slot></slot>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    </BaseLayout>
</template>
<script>
import { Inertia } from '@inertiajs/inertia'
import { Link } from "@inertiajs/inertia-vue3";
import BaseLayout from "@/Layouts/BaseLayout.vue";
import { Dialog, DialogOverlay, TransitionChild, TransitionRoot } from '@headlessui/vue';
import {
    CalendarIcon,
    ChartBarIcon,
    FolderIcon,
    HomeIcon,
    InboxIcon,
    MenuIcon,
    UsersIcon,
    XIcon,
} from '@heroicons/vue/outline';
import Logo from "@/Components/Images/Logo.vue";
import Avatar from "@/Components/Elements/Avatar.vue";

const navigation = [
    { name: 'Tableau de bord', route: 'dashboard', routes: ['dashboard'], icon: HomeIcon },
    { name: 'Équipes', route: 'login', icon: UsersIcon },
    { name: 'Projets', route: 'login', icon: FolderIcon },
    { name: 'Calendrier', route: 'login', icon: CalendarIcon },
    { name: 'Documents', route: 'login', icon: InboxIcon },
    { name: 'Rapports', route: 'login', icon: ChartBarIcon },
]

export default {
    components: {
        BaseLayout,
        Avatar,
        Dialog,
        DialogOverlay,
        TransitionChild,
        TransitionRoot,
        MenuIcon,
        XIcon,
        Logo,
        Link,
    },
    mounted() {
        this.removeInertiaListener = Inertia.on('success', () => {
            this.current = this.getCurrent()
        })
    },
    beforeUnmount() {
        this.removeInertiaListener()
    },
    data() {
        return {
            sidebarOpen: false,
            navigation,
            current: this.getCurrent()
        }
    },
    computed: {
        user() {
            return this.$page.props.auth.user
        }
    },
    methods: {
        getCurrent() {
            let current

            navigation.map(item => {
                if (item.routes ? item.routes.findIndex(route => this.route().current(route)) > -1 : this.route().current(item.route))
                    current = item.route;
            })

            return current
        }
    }
}
</script>

