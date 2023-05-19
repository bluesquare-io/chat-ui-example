<template>
    <nav v-if="pagesCount > 1" class="relative z-0 inline-flex rounded-md shadow-sm -space-x-px">
        <button
            :disabled="currentPage === 1"
            @click="onPageChange(currentPage - 1)"
            class="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
        >
            <span class="sr-only">{{ $t('component.pagination.previous') }}</span>
            <ChevronLeftIcon class="h-5 w-5" />
        </button>
        <button
            v-for="page in pages"
            key={page}
            :class="['relative inline-flex items-center px-4 py-2 border text-sm font-medium', page === currentPage ? 'z-10 bg-primary-50 border-primary-500 text-primary-600': 'bg-white border-gray-300 text-gray-500 hover:bg-gray-50']"
            @click="onPageChange(page)"
            :disabled="page === '...'"
        >
            {{ page }}
        </button>
        <button
            :disabled="currentPage === pagesCount"
            @click="onPageChange(currentPage + 1)"
            class="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
        >
            <span class="sr-only">{{ $t('component.pagination.next') }}</span>
            <ChevronRightIcon class="h-5 w-5" />
        </button>
    </nav>
</template>
<script>
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/vue/outline'

export default {
    components: {
        ChevronLeftIcon,
        ChevronRightIcon,
    },
    props: {
        data: {
            type: Object,
            required: true
        },
        params: {
            type: Object,
            required: false,
            default: {}
        }
    },
    computed: {
        currentPage() {
            return this.paginationData.current_page
        },
        pages() {
            let pages = [], page = this.currentPage

            pages.push(page)

            for (let i = page - 1; i >= page - 2 && i > 0; i--)
                pages.unshift(i)

            for (let i = page + 1; i <= this.pagesCount && i <= page + 2; i++)
                pages.push(i)

            let min = pages[0]

            if (min <= 4) {
                for (let i = min - 1; i >= 1; i--)
                    pages.unshift(i)
            } else {
                pages.unshift('...')

                for (let i = 3; i > 0; i--)
                    pages.unshift(i)
            }

            let max = pages[pages.length - 1]

            if (max >= this.pagesCount - 4) {
                for (let i = max + 1; i <= this.pagesCount; i++)
                    pages.push(i)
            } else {
                pages.push('...')

                for (let i = this.pagesCount - 2; i <= this.pagesCount; i++)
                    pages.push(i)
            }

            return pages
        },
        pagesCount() {
            return this.paginationData.last_page
        },
        paginationData() {
            return this.$props.data.meta ?? this.$props.data
        }
    },
    methods: {
        onPageChange(page) {
            this.$inertia.get(this.paginationData.path, { ...this.params, page })
        }
    }
}
</script>
