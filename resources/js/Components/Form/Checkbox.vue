<template>
    <div class="relative flex items-start" :class="disabled ? 'opacity-50' : ''">
        <div class="flex items-center h-5">
            <input :id="id ?? (inputId ?? name)" :name="name" type="checkbox"
                   :disabled="disabled"
                   :checked="modelValue"
                   @input="$emit('update:modelValue', !modelValue)"
                   class="focus:ring-primary-500 h-4 w-4 text-primary-600 border-gray-300 rounded" />
        </div>
        <div class="ml-3 text-sm" v-if="$slots.default || $slots.description">
            <label :for="id ?? (inputId ?? name)" class="font-medium text-gray-700" v-if="$slots.default">
                <slot></slot>
            </label>
            <slot name="description"></slot>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        name: {
            required: false
        },
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
