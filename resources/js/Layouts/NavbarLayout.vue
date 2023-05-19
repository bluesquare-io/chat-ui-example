<template>
    <BaseLayout>
        <div class="min-h-screen bg-gray-100">
            <nav class="bg-white shadow-sm">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="flex justify-between h-16">
                        <div class="flex">
                            <div class="flex-shrink-0 flex items-center">
                                <Link :href="route('dashboard')">
                                    <Logo class="block h-9 w-auto" />
                                </Link>
                            </div>

                            <div class="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
                                <Link v-for="option in navigationOptions"
                                      :href="route(option.route)"
                                      :class="route().current(option.route) ? 'inline-flex items-center px-1 pt-1 border-b-2 border-primary-400 text-base font-medium leading-5 text-gray-900 focus:outline-none focus:border-primary-700 transition  duration-150 ease-in-out' : 'inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out'">
                                    {{ option.label }}
                                </Link>
                            </div>
                        </div>

                        <div class="hidden sm:flex sm:items-center sm:ml-6">
                            <div class="ml-3 relative">
                                <Dropdown :options="dropdownOptions" class="border-transparent">
                                    <template #button>
                                        <div class="inline-flex items-center text-sm">
                                            {{ user.name }}
                                            <ChevronDownIcon class="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
                                        </div>
                                    </template>
                                </Dropdown>
                            </div>
                        </div>

                        <!-- Hamburger -->
                        <div class="-mr-2 flex items-center sm:hidden">
                            <button @click="showingNavigationDropdown = ! showingNavigationDropdown" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out">
                                <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                    <path :class="{'hidden': showingNavigationDropdown, 'inline-flex': ! showingNavigationDropdown }" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                                    <path :class="{'hidden': ! showingNavigationDropdown, 'inline-flex': showingNavigationDropdown }" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                <!-- Responsive Navigation Menu -->
                <div :class="{'block': showingNavigationDropdown, 'hidden': ! showingNavigationDropdown}" class="sm:hidden">
                    <div class="pt-2 pb-3 space-y-1">
                        <Link v-for="option in navigationOptions"
                              :href="route(option.route)"
                              :class="route().current(option.route) ? 'block pl-3 pr-4 py-2 border-l-4 border-primary-400 text-base font-medium text-primary-700 bg-primary-50 focus:outline-none focus:text-primary-800 focus:bg-primary-100 focus:border-primary-700 transition duration-150 ease-in-out' : 'block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition duration-150 ease-in-out'">
                            {{ option.label }}
                        </Link>
                    </div>

                    <!-- Responsive Settings Options -->
                    <div class="pt-4 pb-1 border-t border-gray-200">
                        <div class="px-4">
                            <div class="font-medium text-base text-gray-500">{{ user.name }}</div>
                            <div class="font-medium text-sm text-gray-500">{{ user.email }}</div>
                        </div>

                        <div class="mt-3 space-y-1">
                            <Link method="post" as="button" :href="route('logout')" class="block w-full text-left pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition duration-150 ease-in-out">
                                Déconnexion
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>

            <!-- Page Heading -->
            <header class="bg-white shadow" v-if="$slots.header">
                <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    <slot name="header" />
                </div>
            </header>

            <!-- Page Content -->
            <main>
                <slot />
            </main>
        </div>
    </BaseLayout>
</template>

<script>
import BaseLayout from "@/Layouts/BaseLayout.vue";
import Container from "@/Components/Containers/Container.vue";
import Dropdown from "@/Components/Elements/Dropdown.vue";
import Logo from '@/Components/Images/Logo.vue'
import { Link } from '@inertiajs/inertia-vue3';
import { ChevronDownIcon } from "@heroicons/vue/solid";

const dropdownOptions = [
    { label: 'Déconnexion', route: 'logout' },
]

const navigationOptions = [
    { label: 'Tableau de bord', route: 'dashboard' },
]

export default {
    components: {
        BaseLayout,
        Dropdown,
        Container,
        Link,
        ChevronDownIcon,
        Logo,
    },

    data() {
        return {
            showingNavigationDropdown: false,
            dropdownOptions,
            navigationOptions
        }
    },

    computed: {
        user() {
            return this.$page.props.auth.user
        }
    }
}
</script>
