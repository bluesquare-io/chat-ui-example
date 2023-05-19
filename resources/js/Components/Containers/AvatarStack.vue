<template>
    <div :class="className">
        <slot></slot>
    </div>
</template>
<script>
import classnames from 'classnames';

export default {
    props: {
        large: {
            default: false,
            type: Boolean
        }
    },
    computed: {
        className() {
            return classnames('UIAvatarStack flex overflow-hidden', {
                '-space-x-1': !this.large,
                '-space-x-2': this.large,
            })
        }
    }
}
</script>
