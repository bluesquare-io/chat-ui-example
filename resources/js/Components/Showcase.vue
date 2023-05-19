<template>
    <div class="bg-gray-100 rounded shadow pb-2 mb-5">
        <header class="uppercase font-bold text-black text-sm p-2">{{ name }}</header>
        <div class="mx-2 rounded">
            <slot></slot>
        </div>
    </div>
</template>
<script>
export default {
    props: ['name']
}
</script>
