<template>
    <textarea
        :disabled="disabled"
        :value="modelValue"
        :id="id ?? inputId"
        @input="$emit('update:modelValue', $event.target.value)"
        class="shadow-sm block w-full sm:text-sm rounded-md"
        :class="[
            disabled ? 'bg-gray-100' : '',
            inputError ? 'border-error-300 text-error-900 placeholder-error-300 focus:ring-error-500 focus:border-error-500 pr-10' : 'border-gray-300 focus:ring-primary-500 focus:border-primary-500'
        ]"
        v-bind="$attrs"
    />
    <div class="absolute inset-y-0 right-0 pt-2 pr-3 flex pointer-events-none" v-if="inputError">
        <ExclamationCircleIcon class="h-5 w-5 text-error-500"/>
    </div>
</template>
<script>
import { ExclamationCircleIcon } from '@heroicons/vue/solid'

export default {
    components: {
        ExclamationCircleIcon
    },
    props: {
        modelValue: {
            type: String,
            default: '',
            required: false
        },
        id: {
            type: String,
            default: null,
            required: false
        },
        disabled: {
            type: Boolean,
            default: false,
            required: false
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
