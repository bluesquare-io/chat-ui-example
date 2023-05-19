<template>
    <Listbox as="div" :modelValue="selected.value" @update:modelValue="$emit('update:modelValue', $event)" :disabled="disabled" :id="id ?? inputId">
        <div class="mt-1 relative">
            <ListboxButton
                :class="disabled ? 'opacity-50' : ''"
                class="bg-white relative w-full border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-primary-500 focus:border-primary-500 sm:text-sm">
                <span class="block truncate">{{ selected.label }}</span>
                <span class="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                    <SelectorIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
                </span>
            </ListboxButton>
            <transition leave-active-class="transition ease-in duration-100" leave-from-class="opacity-100" leave-to-class="opacity-0">
                <ListboxOptions class="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                    <ListboxOption as="template" v-for="item in options" :key="item.value" :value="item.value" v-slot="{ active, selected }">
                        <li :class="[active ? 'text-white bg-primary-600' : 'text-gray-900', 'cursor-default select-none relative py-2 pl-3 pr-9']">
                            <span :class="[selected ? 'font-semibold' : 'font-normal', 'block truncate']">{{ item.label }}</span>
                            <span v-if="selected" :class="[active ? 'text-white' : 'text-primary-600', 'absolute inset-y-0 right-0 flex items-center pr-4']">
                                <CheckIcon class="h-5 w-5" aria-hidden="true" />
                            </span>
                        </li>
                    </ListboxOption>
                </ListboxOptions>
            </transition>
        </div>
    </Listbox>
</template>

<script>
import { Listbox, ListboxButton, ListboxLabel, ListboxOption, ListboxOptions } from '@headlessui/vue'
import { CheckIcon, SelectorIcon } from '@heroicons/vue/solid'

export default {
    components: {
        Listbox,
        ListboxButton,
        ListboxLabel,
        ListboxOption,
        ListboxOptions,
        CheckIcon,
        SelectorIcon,
    },
    props: {
        modelValue: {
            required: false,
            default: null
        },
        id: {
            type: String,
            required: false,
            default: null
        },
        options: {
            type: Array,
            required: true
        },
        disabled: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        selected() {
            let option = { label: this.$t('component.select.label'), value: null }

            this.options.map(item => {
                if (item.value === this.modelValue)
                    option = item
            })

            return option
        }
    },
    inject: {
        inputId: {
            default: null
        },
        inputError: {
            default: false
        },
    }
}
</script>
