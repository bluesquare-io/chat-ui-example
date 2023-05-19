<template>
    <TransitionRoot as="template" :show="modelValue">
        <Dialog as="div" class="fixed z-10 inset-0 overflow-y-auto" @close="$emit('update:modelValue', false)">
            <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
                    <DialogOverlay class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                </TransitionChild>

                <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
                <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200" leave-from="opacity-100 translate-y-0 sm:scale-100" leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
                    <div class="relative inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6" v-bind="$attrs">
                        <div class="hidden sm:block absolute top-0 right-0 pt-4 pr-4">
                            <button type="button" class="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500" @click="$emit('update:modelValue', false)">
                                <span class="sr-only">Close</span>
                                <XIcon class="h-6 w-6" aria-hidden="true" />
                            </button>
                        </div>
                        <div :class="vertical ? '' : 'sm:flex sm:items-start'">
                            <div :class="['mx-auto flex items-center justify-center h-12 w-12 rounded-full', backgroundColor, vertical ? '' : 'flex-shrink-0 sm:mx-0 sm:h-10 sm:w-10']">
                                <InformationCircleIcon v-if="type === 'info'" class="h-6 w-6 text-info-600"/>
                                <CheckIcon v-else-if="type === 'success'" class="h-6 w-6 text-success-600"/>
                                <ExclamationIcon v-else class="h-6 w-6 text-error-600" />
                            </div>
                            <div class="mt-3 text-center" :class="vertical ? 'sm:mt-5' : 'sm:mt-0 sm:ml-4 sm:text-left'">
                                <DialogTitle as="h3" class="text-lg leading-6 font-medium text-gray-900" v-if="title">
                                    {{ title }}
                                </DialogTitle>
                                <div class="mt-2">
                                    <div class="text-sm text-gray-500">
                                        <slot></slot>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div v-if="$slots.actions" :class="vertical ? 'mt-5 sm:mt-6 sm:flex sm:space-x-3 sm:justify-center sm:items-center' : 'mt-5 sm:mt-4 sm:flex sm:justify-end sm:space-x-3'">
                            <slot name="actions"></slot>
                        </div>
                    </div>
                </TransitionChild>
            </div>
        </Dialog>
    </TransitionRoot>
</template>

<script>
import { Dialog, DialogOverlay, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'
import { ExclamationIcon, XCircleIcon, XIcon } from '@heroicons/vue/solid'
import { CheckIcon, InformationCircleIcon } from '@heroicons/vue/outline'

export default {
    components: {
        Dialog,
        DialogOverlay,
        DialogTitle,
        TransitionChild,
        TransitionRoot,
        ExclamationIcon,
        XCircleIcon,
        CheckIcon,
        InformationCircleIcon,
        XIcon,
    },
    props: {
        modelValue: {
            type: Boolean,
            required: false,
            default: true
        },
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
        vertical: {
            type: Boolean,
            required: false,
            default: false
        },
    },
    computed: {
        backgroundColor() {
            switch (this.type) {
                case 'info': return "bg-info-100";
                case 'success': return "bg-success-100";
                default: return "bg-error-100";
            }
        },
    }
}
</script>
