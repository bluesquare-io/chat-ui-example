<template>
    <nav class="flex" aria-label="Breadcrumb">
        <ol role="list" class="flex items-center space-x-4">
            <li>
                <div class="flex items-center">
                    <HomeIcon @click="triggerHome" class="flex-shrink-0 h-5 w-5 text-gray-400 hover:text-gray-500 cursor-pointer" aria-hidden="true" />
                    <span class="sr-only">{{ $t('component.breadcrumb.home') }}</span>
                </div>
            </li>
            <li v-for="page in pages" :key="page.name">
                <div class="flex items-center">
                    <ChevronRightIcon class="flex-shrink-0 h-5 w-5 text-gray-400" aria-hidden="true" />
                    <button @click="trigger(page)" class="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700" :aria-current="page.current ? 'page' : undefined">{{ page.name }}</button>
                </div>
            </li>
        </ol>
    </nav>
</template>

<script>
import { ChevronRightIcon, HomeIcon } from '@heroicons/vue/solid'
import { Link } from "@inertiajs/inertia-vue3";

export default {
    components: {
        ChevronRightIcon,
        HomeIcon,
        Link
    },
    props: {
        pages: {
            type: Array,
            default: []
        }
    },
    methods: {
        triggerHome() {
            this.$inertia.get(this.route('dashboard'))
        },
        trigger(item) {
            if (item.href) {
                if (item.target) {
                    window.open(item.href, item.target)
                } else {
                    window.location.href = item.href
                }
            } else if (item.route) {
                this.$inertia.get(this.route(item.route, item.params ?? {}))
            } else if (item.onClick) {
                item.onClick(item)
            }
        }
    }
}
</script>
