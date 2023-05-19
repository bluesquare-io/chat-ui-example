<template>
    <div>
        <div class="flex justify-between" v-if="label || hint">
            <label :for="target" class="block text-sm font-medium text-gray-700" v-if="label">{{ label }}</label>
            <span class="text-sm text-gray-500" v-if="hint">{{ hint }}</span>
        </div>
        <div class="mt-1 relative">
            <slot></slot>
        </div>
        <p class="mt-2 text-sm text-error-600" v-if="error">{{ error }}</p>
        <div class="mt-2 text-sm text-gray-500" v-if="!!$slots.description">
            <slot name="description"></slot>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        target: {
            type: String,
            default: '',
            required: false
        },
        label: {
            type: String,
            default: null,
            required: false
        },
        hint: {
            type: String,
            default: null,
            required: false
        },
        error: {
            type: String,
            default: null,
            required: false
        }
    },
    provide() {
        return {
            inputId: this.target,
            inputError: !!this.error
        }
    }
}
</script>
