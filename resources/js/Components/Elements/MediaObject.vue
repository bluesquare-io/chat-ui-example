<template>
    <div :class="className">
        <!-- Tip: h-full sur le media pour remplir verticalement -->
        <!-- Tip: w-full sur le media (mobile only) pour un wide responsive -->
        <slot></slot>
    </div>
</template>
<script>
import classnames from 'classnames';

export default {
    props: {
        right: {
            default: false,
            type: Boolean
        },
        responsive: {
            default: false,
            type: Boolean
        },
        align: {
            default: 'top',
            type: String
        },
    },
    computed: {
        className() {
            return classnames('flex-shrink-0', {
                'self-center': this.align === 'center',
                'self-end': this.align === 'bottom',
                'mb-4 sm:mb-0': this.responsive,
                'mr-4': !this.right && !this.responsive,
                'sm:mr-4': !this.right && this.responsive,
                'ml-4': this.right && !this.responsive,
                'sm:ml-4': this.right && this.responsive,
            })
        }
    }
}
</script>
