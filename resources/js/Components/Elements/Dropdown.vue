<template>
    <Menu as="div" class="relative inline-block text-left">
        <div>
            <MenuButton class="inline-flex justify-center items-center w-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-primary-500" :class="hasButton ? '' : 'rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50'">
                <slot name="button">
                    {{ label }}
                    <ChevronDownIcon class="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
                </slot>
            </MenuButton>
        </div>

        <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
            <MenuItems class="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none">
                <div v-if="hasHeader" class="px-4 py-3">
                    <slot name="header"></slot>
                </div>
                <div v-for="section in sections" class="py-1">
                    <MenuItem v-for="item in section" v-slot="{ active }">
                        <button @click="trigger(item)" :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'group flex items-center px-4 py-2 text-sm w-full', item.class ?? '']">
                            <component v-if="item.icon" :is="item.icon" class="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500" aria-hidden="true"></component>
                            {{ item.label }}
                        </button>
                    </MenuItem>
                </div>
                <div v-if="hasFooter" class="px-4 py-3">
                    <slot name="footer"></slot>
                </div>
            </MenuItems>
        </transition>
    </Menu>
</template>

<script>
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import {
    ArchiveIcon,
    ArrowCircleRightIcon,
    ChevronDownIcon,
    DuplicateIcon,
    HeartIcon,
    PencilAltIcon,
    TrashIcon,
    UserAddIcon,
} from '@heroicons/vue/solid'

export default {
    components: {
        Menu,
        MenuButton,
        MenuItem,
        MenuItems,
        ArchiveIcon,
        ArrowCircleRightIcon,
        ChevronDownIcon,
        DuplicateIcon,
        HeartIcon,
        PencilAltIcon,
        TrashIcon,
        UserAddIcon,
    },
    props: {
        options: {
            type: Object,
            required: true
        },
        label: {
            type: String,
            required: false
        }
    },
    computed: {
        sections() {
            const sections = [[]]
            this.options.map(option => {
                if (option.separator) {
                    sections.push([])
                } else {
                    sections[sections.length - 1].push(option)
                }
            })

            return sections
        },
        hasHeader() {
            return !!this.$slots.header
        },
        hasFooter() {
            return !!this.$slots.footer
        },
        hasButton() {
            return !!this.$slots.button
        }
    },
    methods: {
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
