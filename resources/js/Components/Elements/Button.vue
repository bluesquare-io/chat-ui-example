<template>
    <button :type="type" :class="className" :disabled="disabled">
        <slot></slot>
    </button>
</template>
<script>
import classnames from 'classnames';

const sizes = {
    xs: 'px-2.5 py-1.5 text-xs',
    sm: 'px-3 py-2 text-sm leading-4',
    md: 'px-4 py-2 text-sm',
    lg: 'px-4 py-2 text-base',
    xl: 'px-6 py-3 text-base',
}

const circularSizes = {
    xs: 'p-1',
    sm: 'p-1.5',
    md: 'p-2',
    lg: 'p-2',
    xl: 'p-3',
}

const colors = {
    white: 'border-gray-300 text-gray-700 bg-white hover:bg-gray-50 shadow-sm focus:ring-primary-500',
    primary: 'border-transparent text-white bg-primary-600 hover:bg-primary-700 focus:ring-primary-500',
    info: 'border-transparent text-white bg-info-600 hover:bg-info-700 focus:ring-info-500',
    success: 'border-transparent text-white bg-success-600 hover:bg-success-700 focus:ring-success-500',
    error: 'border-transparent text-white bg-error-600 hover:bg-error-700 focus:ring-error-500',
    warning: 'border-transparent text-white bg-warning-600 hover:bg-warning-700 focus:ring-warning-500',
    muted: 'border-transparent text-primary-700 bg-primary-100 hover:bg-primary-200 focus:ring-primary-500',
    secondary: 'border-transparent text-white bg-secondary-600 hover:bg-secondary-700 focus:ring-secondary-500',
    indigo: 'border-transparent text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500',
    blue: 'border-transparent text-white bg-blue-600 hover:bg-blue-700 focus:ring-blue-500',
    red: 'border-transparent text-white bg-red-600 hover:bg-red-700 focus:ring-red-500',
    yellow: 'border-transparent text-white bg-yellow-600 hover:bg-yellow-700 focus:ring-yellow-500',
    green: 'border-transparent text-white bg-green-600 hover:bg-green-700 focus:ring-green-500',
    pink: 'border-transparent text-white bg-pink-600 hover:bg-pink-700 focus:ring-pink-500',
}

export default {
    props: {
        size: {
            default: 'md',
            type: String
        },
        type: {
            default: 'submit',
            type: String
        },
        color: {
            default: 'white',
            type: String
        },
        rounded: {
            default: false,
            type: Boolean
        },
        circular: {
            default: false,
            type: Boolean
        },
        disabled: {
            default: false,
            type: Boolean
        }
    },
    computed: {
        className() {
            return classnames(
                'UIButton border inline-flex items-center font-medium focus:outline-none focus:ring-2 focus:ring-offset-2',
                this.circular ? circularSizes[this.size] : sizes[this.size],
                colors[this.color],
                {
                    'rounded-full': this.rounded || this.circular,
                    'rounded-md': !this.rounded && !this.circular,
                    'opacity-50 cursor-default': this.disabled
                }
            )
        }
    }
}
</script>
