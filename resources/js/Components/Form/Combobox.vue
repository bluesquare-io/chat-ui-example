<template>
    <Combobox as="div" v-model="selected" :disabled="disabled">
        <ComboboxLabel class="block text-sm font-medium text-gray-700" v-if="label" :for="id ?? inputId">{{ label }}</ComboboxLabel>
        <div class="relative mt-1">
            <ComboboxInput class="disabled:opacity-50 w-full rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 shadow-sm focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500 sm:text-sm"
                           @change="query = $event.target.value"
                           :disabled="disabled"
                           :id="id ?? inputId"
                           :display-value="(option) => option ? (option.label ?? option.name ?? option.id) : null" />
            <ComboboxButton class="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none" :disabled="disabled">
                <SelectorIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
            </ComboboxButton>
            <ComboboxOptions v-if="results.length > 0" class="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                <ComboboxOption v-for="option in results" :key="option.id" :value="option" as="template" v-slot="{ active, selected }">
                    <li :class="['relative cursor-default select-none py-2 pl-3 pr-9', active ? 'bg-primary-600 text-white' : 'text-gray-900']">
                        <div class="flex items-center">
                            <img v-if="option.image_url" :src="option.image_url" alt="" class="h-6 w-6 flex-shrink-0 rounded-full" />
                            <span :class="[option.image_url ? 'ml-3 truncate' : 'block truncate', selected && 'font-semibold']">{{ option.label ?? option.name ?? option.id }}</span>
                        </div>
                        <span v-if="selected" :class="['absolute inset-y-0 right-0 flex items-center pr-4', active ? 'text-white' : 'text-primary-600']">
                          <CheckIcon class="h-5 w-5" aria-hidden="true" />
                        </span>
                    </li>
                </ComboboxOption>
            </ComboboxOptions>
        </div>
    </Combobox>
</template>
<script>
import { CheckIcon, SelectorIcon } from '@heroicons/vue/solid'
import {
    Combobox,
    ComboboxButton,
    ComboboxInput,
    ComboboxLabel,
    ComboboxOption,
    ComboboxOptions,
} from '@headlessui/vue'

export default {
    components: {
        CheckIcon,
        Combobox,
        ComboboxButton,
        ComboboxInput,
        ComboboxLabel,
        ComboboxOption,
        ComboboxOptions,
        SelectorIcon,
    },
    props: {
        label: {
            required: false,
            type: String
        },
        id: {
            required: false,
            type: String,
            default: null
        },
        modelValue: {
            required: false,
            default: null
        },
        options: {
            type: Array,
            required: false,
            default: []
        },
        endpoint: {
            required: false,
            type: String
        },
        disabled: {
            required: false,
            default: false,
            type: Boolean
        }
    },
    data() {
        return {
            query: '',
            selected: this.modelValue,
            results: this.options
        }
    },
    watch: {
        modelValue(value) {
            if (value !== this.selected)
                this.selected = value
        },
        selected(value) {
            if (value !== this.modelValue)
                this.$emit('update:modelValue', value)
        },
        query(value) {
            if (this.endpoint) {
                axios
                    .get(`${this.endpoint}?search=${encodeURIComponent(value)}`)
                    .then(res => this.results = res.data.data ?? res.data)
            } else {
                this.results = value === '' ? this.options : this.options.filter((option) => {
                    return (option.label ?? option.name ?? option.id).toLowerCase().includes(value.toLowerCase())
                })
            }
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
