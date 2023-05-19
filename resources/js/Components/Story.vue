<template>
    <div class="bg-gray-100">
        <header class="uppercase font-bold text-gray-500 text-xs p-2">{{ name }}</header>
        <div class="bg-white p-2" v-bind="$attrs">
            <slot></slot>
        </div>
    </div>
</template>
<script>
export default {
    props: ['name']
}
</script>
