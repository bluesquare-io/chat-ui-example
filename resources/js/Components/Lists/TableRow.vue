<template>
    <tr :class="[isStripped ? 'divide-x divide-gray-200' : '']">
        <slot></slot>
    </tr>
</template>
<script>
export default {
    inject: {
        isStripped: {
            default: false
        }
    }
}
</script>
