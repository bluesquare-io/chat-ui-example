<template>

    <div class="col-start-1 col-end-8 p-3 rounded-lg" v-if="content">
        <div class="flex flex-row items-center">
            <div
                class="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0"
            >
                B.AI
            </div>
            <div
                class="relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl"
            >
                <div>{{ content }}</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['content']
}
</script>
