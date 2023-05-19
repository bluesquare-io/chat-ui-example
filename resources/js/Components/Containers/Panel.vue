<template>
    <div :class="className">
        <div v-if="hasHeader" class="px-4 py-5 sm:px-6" :class="headerClass">
            <slot name="header"></slot>
        </div>
        <div class="px-4 py-5 sm:p-6">
            <slot></slot>
        </div>
        <div v-if="hasFooter" class="px-4 py-4 sm:px-6" :class="footerClass">
            <slot name="footer"></slot>
        </div>
    </div>
</template>
<script>
import classnames from 'classnames';

export default {
    props: {
        edge: {
            default: false,
            type: Boolean
        },
        card: {
            default: false,
            type: Boolean
        },
        headerClass: {
            default: '',
            type: String
        },
        footerClass: {
            default: '',
            type: String
        }
    },
    computed: {
        className() {
            return classnames({
                'sm:rounded-lg': this.edge,
                'rounded-lg': !this.edge,
                'bg-white shadow': this.card,
                'bg-gray-50': !this.card,
                'divide-y divide-gray-200': this.hasHeader || this.hasFooter
            })
        },
        hasHeader() {
            return !!this.$slots.header
        },
        hasFooter() {
            return !!this.$slots.footer
        }
    }
}
</script>
