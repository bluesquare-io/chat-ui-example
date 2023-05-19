<template>
    <div class="relative">
        <div class="absolute inset-0 flex items-center" aria-hidden="true">
            <div class="w-full border-t border-gray-300" />
        </div>
        <div class="relative flex" :class="contentClassName">
            <slot></slot>
        </div>
    </div>
</template>
<script>
import classnames from 'classnames';

export default {
    props: {
        justify: {
            default: 'center',
            type: String
        }
    },
    computed: {
        contentClassName() {
            return classnames({
                'justify-start': this.justify === 'start',
                'justify-center': this.justify === 'center',
                'justify-end': this.justify === 'end',
            })
        }
    }
}
</script>
