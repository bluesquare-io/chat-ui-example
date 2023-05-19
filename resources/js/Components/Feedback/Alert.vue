<template>
    <div class="rounded-md p-4" :class="backgroundColor">
        <div class="flex">
            <div class="flex-shrink-0">
                <XCircleIcon v-if="type === 'error'" class="h-5 w-5 text-error-400"/>
                <InformationCircleIcon v-else-if="type === 'info'" class="h-5 w-5 text-info-400"/>
                <CheckCircleIcon v-else-if="type === 'success'" class="h-5 w-5 text-success-400"/>
                <ExclamationIcon v-else class="h-5 w-5 text-warning-400"/>
            </div>
            <div class="ml-3">
                <h3 class="text-sm font-medium mb-2" :class="headerColor" v-if="title">{{ title }}</h3>
                <div class="text-sm" :class="textColor">
                    <slot/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { ExclamationIcon, XCircleIcon, CheckCircleIcon, InformationCircleIcon } from '@heroicons/vue/solid'

export default {
    components: {
        ExclamationIcon,
        XCircleIcon,
        CheckCircleIcon,
        InformationCircleIcon,
    },
    props: {
        title: {
            type: String,
            required: false,
            default: null
        },
        type: {
            type: String,
            required: false,
            default: 'warning'
        },
    },
    computed: {
        headerColor() {
            switch (this.type) {
                case 'info': return "text-info-800";
                case 'success': return "text-success-800";
                case 'error': return "text-error-800";
                default: return "text-warning-800";
            }
        },
        textColor() {
            switch (this.type) {
                case 'info': return "text-info-700";
                case 'success': return "text-success-700";
                case 'error': return "text-error-700";
                default: return "text-warning-700";
            }
        },
        backgroundColor() {
            switch (this.type) {
                case 'info': return "bg-info-50";
                case 'success': return "bg-success-50";
                case 'error': return "bg-error-50";
                default: return "bg-warning-50";
            }
        },
    }
}
</script>
