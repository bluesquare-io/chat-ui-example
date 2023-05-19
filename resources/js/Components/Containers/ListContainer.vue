<template>
    <div :class="className">
        <div>
            <slot></slot>
        </div>
    </div>
</template>
<script>
import classnames from 'classnames';

export default {
    props: {
        cards: {
            default: false,
            type: Boolean
        },
        edge: {
            default: false,
            type: Boolean
        },
        card: {
            default: false,
            type: Boolean
        },
        flat: {
            default: false,
            type: Boolean
        }
    },
    computed: {
        className() {
            return classnames({
                'UIListContainer-separated': this.cards,
                'UIListContainer-unified': !this.cards,
                'UIListContainer-card': !this.cards && this.card,
                'UIListContainer-flat': !this.cards && this.card && this.flat,
                'UIListContainer-edge': this.edge,
            })
        }
    }
}
</script>
