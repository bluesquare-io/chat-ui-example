<template>
    <div v-if="hasErrors">
        <div class="font-medium text-error-600">{{ $t('component.form_errors.title') }}</div>

        <ul class="mt-3 list-disc list-inside text-sm text-error-600" v-if="details">
            <li v-for="(error, key) in errors" :key="key">{{ error }}</li>
        </ul>
    </div>
</template>

<script>
export default {
    props: {
        details: {
            type: Boolean,
            default: false
        }
    },

    computed: {
        errors() {
            return this.$page.props.errors
        },

        hasErrors() {
            return Object.keys(this.errors).length > 0
        },
    }
}
</script>
