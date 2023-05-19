<template>
    <div class="flex items-center" :class="disabled ? 'opacity-50' : ''">
        <input :id="id ?? value" name="notification-method" type="radio"
               :checked="modelValue === value"
               :disabled="disabled"
               @input="$emit('update:modelValue', value)"
               class="focus:ring-primary-500 h-4 w-4 text-primary-600 border-gray-300" />
        <label :for="id ?? value" class="ml-3 block text-sm font-medium text-gray-700" v-if="$slots.default">
           <slot></slot>
        </label>
    </div>
</template>
<script>
export default {
    props: {
        value: {
            required: true
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
    }
}
</script>
