<template>
    <div class="relative flex items-start" :class="disabled ? 'opacity-50' : ''">
        <div class="flex items-center">
            <Switch :value="modelValue"
                    :id="id ?? inputId"
                    :disabled="disabled"
                    @update:modelValue="$emit('update:modelValue', !modelValue)"
                    :class="[modelValue ? 'bg-primary-600' : 'bg-gray-200', 'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500']">
                <span aria-hidden="true" :class="[modelValue ? 'translate-x-5' : 'translate-x-0', 'pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200']" />
            </Switch>
        </div>
        <div class="ml-3 mt-0.5 text-sm" v-if="$slots.default || $slots.description">
            <label class="font-medium text-gray-700" v-if="$slots.default">
                <slot></slot>
            </label>
            <slot name="description"></slot>
        </div>
    </div>
</template>

<script>
import { Switch } from '@headlessui/vue'

export default {
    components: {
        Switch,
    },
    props: {
        modelValue: {
            required: true
        },
        id: {
            required: false,
            type: String,
            default: null
        },
        disabled: {
            default: false,
            type: Boolean
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
