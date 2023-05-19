<template>
    <div :class="className">
        <div v-if="constrained" class="mx-auto" :class="constraint">
            <slot></slot>
        </div>
        <slot v-else></slot>
    </div>
</template>
<script>
import classnames from 'classnames';

export default {
    props: {
        padding: {
            default: false,
            validator: value => [false, true, 'all', 'desktop', ''].includes(value)
        },
        breakpoints: {
            default: false,
            type: Boolean
        },
        constrained: {
            default: false,
            type: Boolean
        },
        constraint: {
            default: 'max-w-3xl',
            type: String
        }
    },
    computed: {
        className() {
            return classnames('mx-auto w-full', {
                'container': this.breakpoints,
                'max-w-7xl': !this.breakpoints,
                'sm:px-6 lg:px-8': this.padding === true || this.padding === 'desktop',
                'px-4 sm:px-6 lg:px-8': this.padding === 'all',
            })
        }
    }
}
</script>
