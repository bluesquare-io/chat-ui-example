<template>
    <span class="inline-block relative rounded-full">
        <span v-if="name !== null" class="inline-flex items-center justify-center rounded-full bg-gray-500" :class="className">
            <span class="font-medium leading-none text-white">{{ initials }}</span>
        </span>
        <span v-else-if="src === null" class="block bg-gray-100 rounded-full" :class="className">
            <svg class="h-full w-full text-gray-300 rounded-full" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
        </span>
        <span v-else class="block rounded-full bg-cover" :class="className" :style="`background-image: url(${src})`" />
        <span v-if="status !== null" class="absolute bottom-0 right-0 block rounded-full ring-2 ring-white" :class="statusClassName" />
    </span>
</template>
<script>
import classnames from 'classnames';

const statuses = {
    online: 'bg-green-400',
    offline: 'bg-gray-300',
    busy: 'bg-red-400',
}

const sizes = {
    xs: ['h-6 w-6', 'h-1.5 w-1.5'],
    sm: ['h-8 w-8', 'h-2 w-2'],
    md: ['h-10 w-10', 'h-2.5 w-2.5'],
    lg: ['h-12 w-12', 'h-3 w-3'],
    xl: ['h-14 w-14', 'h-3.5 w-3.5'],
    '2xl': ['h-16 w-16', 'h-4 w-4'],
    '3xl': ['h-24 w-24', 'h-4 w-4 bottom-1 right-1'],
    '4xl': ['h-32 w-32', 'h-5 w-5 bottom-1 right-1'],
}

export default {
    props: {
        status: {
            default: null,
            type: String
        },
        name: {
            default: null,
            type: String
        },
        size: {
            default: 'md',
            type: String
        },
        src: {
            default: null,
            type: String
        },
        chars: {
            default: 3,
            type: Number
        }
    },
    computed: {
        className() {
            return classnames(sizes[this.size][0])
        },
        statusClassName() {
            return classnames(sizes[this.size][1], statuses[this.status] ?? null)
        },
        initials() {
            const letters = this.name.split(' ').map(word => word.charAt(0).toUpperCase())
            return letters.slice(0, this.chars).join('')
        }
    }
}
</script>
