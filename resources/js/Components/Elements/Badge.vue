<template>
    <span :class="className">
        <svg v-if="dot" :class="dotClassName" fill="currentColor" viewBox="0 0 8 8">
            <circle cx="4" cy="4" r="3" />
        </svg>
        <slot></slot>
        <button v-if="removable" type="button" :class="xClassName" @click="$emit('removed')">
            <svg class="h-2 w-2" stroke="currentColor" fill="none" viewBox="0 0 8 8">
                <path stroke-linecap="round" stroke-width="1.5" d="M1 1l6 6m0-6L1 7" />
            </svg>
        </button>
    </span>
</template>
<script>
import classnames from 'classnames';

const colors = {
    primary: ['bg-primary-100', 'text-primary-800', 'text-primary-400 hover:bg-primary-200 hover:text-primary-500 focus:bg-primary-500'],
    info: ['bg-info-100', 'text-info-800', 'text-info-400 hover:bg-info-200 hover:text-info-500 focus:bg-info-500'],
    success: ['bg-success-100', 'text-success-800', 'text-success-400 hover:bg-success-200 hover:text-success-500 focus:bg-success-500'],
    error: ['bg-error-100', 'text-error-800', 'text-error-400 hover:bg-error-200 hover:text-error-500 focus:bg-error-500'],
    warning: ['bg-warning-100', 'text-warning-800', 'text-warning-400 hover:bg-warning-200 hover:text-warning-500 focus:bg-warning-500'],
    secondary: ['bg-secondary-100', 'text-secondary-800', 'text-secondary-400 hover:bg-secondary-200 hover:text-secondary-500 focus:bg-secondary-500'],
    gray: ['bg-gray-100', 'text-gray-800', 'text-gray-400 hover:bg-gray-200 hover:text-gray-500 focus:bg-gray-500'],
    red: ['bg-red-100', 'text-red-800', 'text-red-400 hover:bg-red-200 hover:text-red-500 focus:bg-red-500'],
    yellow: ['bg-yellow-100', 'text-yellow-800', 'text-yellow-400 hover:bg-yellow-200 hover:text-yellow-500 focus:bg-yellow-500'],
    green: ['bg-green-100', 'text-green-800', 'text-green-400 hover:bg-green-200 hover:text-green-500 focus:bg-green-500'],
    blue: ['bg-blue-100', 'text-blue-800', 'text-blue-400 hover:bg-blue-200 hover:text-blue-500 focus:bg-blue-500'],
    indigo: ['bg-indigo-100', 'text-indigo-800', 'text-indigo-400 hover:bg-indigo-200 hover:text-indigo-500 focus:bg-indigo-500'],
    purple: ['bg-purple-100', 'text-purple-800', 'text-purple-400 hover:bg-purple-200 hover:text-purple-500 focus:bg-purple-500'],
    pink: ['bg-pink-100', 'text-pink-800', 'text-pink-400 hover:bg-pink-200 hover:text-pink-500 focus:bg-pink-500'],
}

export default {
    props: {
        large: {
            default: false,
            type: Boolean
        },
        dot: {
            default: false,
            type: Boolean
        },
        color: {
            default: 'gray',
            type: String
        },
    },
    computed: {
        removable() {
            return this.$attrs && this.$attrs.onRemoved
        },
        className() {
            return classnames(colors[this.color][0], colors[this.color][1],
                'inline-flex items-center rounded-full font-medium', {
                'text-sm px-3 py-0.5': this.large,
                'text-xs px-2.5 py-0.5': !this.large
            })
        },
        dotClassName() {
            return classnames(colors[this.color][1], {
                '-ml-1 mr-1.5': this.large,
                '-ml-0.5 mr-1.5': !this.large
            }, 'h-2 w-2')
        },
        xClassName() {
            return classnames(
                'flex-shrink-0 ml-0.5 -mr-2 h-4 w-4 rounded-full inline-flex items-center justify-center',
                colors[this.color][2],
                'focus:outline-none focus:text-white'
            )
        }
    }
}
</script>
