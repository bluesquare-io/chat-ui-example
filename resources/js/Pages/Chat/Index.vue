<template>

<body class="h-screen overflow-hidden flex items-center justify-center" style="background: #edf2f7;">
<div class="flex h-screen antialiased text-gray-800 w-full">
    <div class="flex flex-row h-full w-full overflow-x-hidden">
        <div class="flex flex-col py-8 pl-6 pr-2 w-96 bg-white flex-shrink-0 overflow-y-auto">
            <div class="flex flex-row items-center justify-center h-12 w-full">
                <div class="h-10 w-10 sm:h-10 sm:w-10 rounded inline-block logo"></div>
                <div class="ml-2 font-bold text-2xl">Blue AI</div>
            </div>
            <div class="text-center">
                <p>
                    Powered by Bluesquare.ai
                </p>
            </div>
            <div
                class="flex flex-col items-center bg-indigo-100 border border-gray-200 mt-4 w-full py-6 px-4 rounded-lg"
            >
                <div class="h-20 w-20 rounded-full border overflow-hidden">
                    <img
                        src="/images/user.png"
                        alt="Avatar"
                        class="h-full w-full"
                    />
                </div>
                <div class="text-sm font-semibold mt-2">{{ user.name }}</div>
                <div class="text-xs text-gray-500 text-center">Blue AI's user (bluesquare.ai)</div>
                <div class="flex flex-row items-center mt-3">
                    <div
                        class="flex flex-col justify-center h-4 w-8 bg-indigo-500 rounded-full"
                    >
                        <div class="h-3 w-3 bg-white rounded-full self-end mr-1"></div>
                    </div>
                    <div class="leading-none ml-1 text-xs">Active</div>
                </div>
            </div>
            <div class="flex flex-col mt-8">
                <div class="flex flex-row items-center justify-between text-xs">
                    <span class="font-bold">Conversations</span>
                    <span
                        class="flex items-center justify-center bg-gray-300 h-4 w-4 rounded-full"
                    >1</span
                    >
                </div>
                <div class="flex flex-col space-y-1 mt-4 -mx-2 ">
                    <button
                        class="flex flex-row items-center hover:bg-gray-100 rounded-xl p-2"
                    >
                        <div
                            class="flex items-center justify-center h-8 w-8 bg-indigo-200 rounded-full"
                        >
                            R
                        </div>
                        <div class="ml-2 text-sm font-semibold">New feats coming soon</div>
                    </button>
                    <button
                        class="flex flex-row items-center hover:bg-gray-100 rounded-xl p-2"
                    >
                        <div
                            class="flex items-center justify-center h-8 w-8 bg-gray-200 rounded-full"
                        >
                            G
                        </div>
                        <div class="ml-2 text-sm font-semibold text-center">Nothing is stored</div>
                    </button>
                    <button
                        class="flex flex-row items-center hover:bg-gray-100 rounded-xl p-2"
                    >
                        <div
                            class="flex items-center justify-center h-8 w-8 bg-orange-200 rounded-full"
                        >
                            P
                        </div>
                        <div class="ml-2 text-sm font-semibold text-center">This AI is local, no API call</div>
                    </button>
                    <button
                        class="flex flex-row items-center hover:bg-gray-100 rounded-xl p-2"
                    >
                        <div
                            class="flex items-center justify-center h-8 w-8 bg-pink-200 rounded-full"
                        >
                            D
                        </div>
                        <div class="ml-2 text-sm font-semibold  text-center">Built on top of 7B LaaMa, as a demo</div>
                    </button>
                    <div class="text-sm mt-8 px-4" :class="{ expanded: isExpanded }" id="expandable">
                        <p>
                            This demo showcases a framework built on top of the remarkable LLaMa 7B foundation model. Your data and conversations are not stored for privacy reasons.
                        </p>
                        <br>
                        <div id="expandableContent">
                            <p>
                                The framework operates on a lightweight $20 server hosted on DigitalOcean, seamlessly integrating both the complete AI and the user interface. Please note that currently, only English language is supported.
                            </p>
                            <br>
                            <p>
                                At the moment, the demo allows for a single chat message as we are not yet showcasing the memory system. However, there is tremendous potential for enhancing this demo further! We invite you to explore and contribute to the open-source code available on GitHub.
                            </p>
                            <br>
                            <p>
                                Keep in mind that this demo serves as a proof of concept, demonstrating the promising future of lightweight and open-source AI. Join us in shaping the future of AI!
                            </p>
                        </div>
                        <p class="cursor-pointer text-blue-500 mt-4" @click="toggleExpansion">{{ isExpanded ? 'See Less' : 'See More' }}</p>
                    </div>


                </div>



            </div>
        </div>
        <div class="flex flex-col flex-auto h-full p-6">
            <div
                class="flex flex-col flex-auto flex-shrink-0 rounded-2xl bg-gray-100 h-full p-4"
            >
                <div class="flex flex-col h-full overflow-x-auto mb-4">
                    <div class="flex flex-col h-full">
                        <div class="grid grid-cols-12 gap-y-2">

                            <PromptQuestion :content="question" :user="user"/>
                            <Loader v-if="isLoading" />
                            <PromptAnswer :content="answer"/>

                        </div>
                    </div>
                </div>
                <div class="flex flex-row items-center h-16 rounded-xl bg-white w-full px-4" v-if="!question">
                    <div>
                        <button
                            class="flex items-center justify-center text-gray-400 hover:text-gray-600"
                        >
                            <svg
                                class="w-5 h-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                                ></path>
                            </svg>
                        </button>
                    </div>
                    <div class="flex-grow ml-4">
                        <div class="relative w-full">
                            <input
                                type="text"
                                class="flex w-full border rounded-xl focus:outline-none focus:border-indigo-300 pl-4 h-10"
                                v-model="prompt"
                            />
                            <button
                                class="absolute flex items-center justify-center h-full w-12 right-0 top-0 text-gray-400 hover:text-gray-600"
                                :disabled="!this.answer"
                            >
                                <svg
                                    class="w-6 h-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                    ></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div class="ml-4">
                        <button
                            class="flex items-center justify-center bg-indigo-500 hover:bg-indigo-600 rounded-xl text-white px-4 py-1 flex-shrink-0"
                            @click="requestToken(prompt)"
                        >
                            <span>Send</span>
                            <span class="ml-2">
                  <svg
                      class="w-4 h-4 transform rotate-45 -mt-px"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                    ></path>
                  </svg>
                </span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</body>

</template>
<script>
import AuthLayout from "@/Layouts/AuthLayout.vue";
import { Link } from "@inertiajs/inertia-vue3";
import io from 'socket.io-client';
import PromptAnswer from "@/Components/Chat/PromptAnswer.vue";
import PromptQuestion from "@/Components/Chat/PromptQuestion.vue";
import Loader from "@/Components/Chat/Loader.vue";


export default {

    components: {
        Loader,
        PromptQuestion,
        PromptAnswer,
        Link
    },

    methods: {
        requestToken(prompt) {
            console.log(prompt);
            this.question = prompt
            this.isLoading = true
            this.socket.emit('requestToken', prompt);
        },
        toggleExpansion() {
            this.isExpanded = !this.isExpanded;
        }
    },

    data() {
        return {
            socket: null,
            answer: '',
            prompt: '',
            question: '',
            isExpanded: false,
            isLoading: false
        };
    },

    computed: {
        user() {
            return this.$page.props.auth.user
        }
    },

    created() {
        this.socket = io('http://localhost:3000', {
            "transports" : ['websocket','polling','flashsocket'],
        });

        this.socket.on('token', (token) => {
            this.isLoading = false;
            this.answer = this.answer + token
            console.log(token);
            //this.tokens.push(token);
        });
    },

    beforeDestroy() {
        this.socket.disconnect();
    },
}
</script>

