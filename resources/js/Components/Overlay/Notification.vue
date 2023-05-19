<template>
    <div :id="`notification-${id}`" class="max-w-sm w-full bg-white shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden">
        <div class="p-4">
            <div class="flex items-start">
                <div class="flex-shrink-0">
                    <XCircleIcon v-if="type === 'error'" class="h-6 w-6 text-error-400"/>
                    <InformationCircleIcon v-else-if="type === 'info'" class="h-6 w-6 text-info-400"/>
                    <ExclamationIcon v-else-if="type === 'warning'" class="h-6 w-6 text-warning-400"/>
                    <CheckCircleIcon v-else class="h-6 w-6 text-success-400"/>
                </div>
                <div class="ml-3 w-0 flex-1 pt-0.5">
                    <p class="text-sm font-medium text-gray-900 mb-1" v-if="title">{{ title }}</p>
                    <p class="text-sm text-gray-500">{{ text }}</p>
                </div>
                <div class="ml-4 flex-shrink-0 flex">
                    <button @click="$emit('close')" class="bg-white rounded-md inline-flex text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">
                        <span class="sr-only">Close</span>
                        <XIcon class="h-5 w-5"  />
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { ExclamationIcon, XCircleIcon, CheckCircleIcon, InformationCircleIcon, XIcon } from '@heroicons/vue/solid'

export default {
    components: {
        ExclamationIcon,
        XCircleIcon,
        CheckCircleIcon,
        InformationCircleIcon,
        XIcon,
    },
    props: {
        id: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: false,
            default: null
        },
        text: {
            type: String,
            required: true
        },
        type: {
            type: String,
            required: false,
            default: 'success'
        },
    },
}
</script>
