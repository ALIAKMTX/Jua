<script>
import TopBar from "../components/TopBar.vue"
import MachineCard from "../components/MachineCard.vue"
import Navbar from "../components/Navbar.vue"
import ChatMessage from "../components/ChatMessage.vue"
import json from '../data.json'

export default {
    components: {
        TopBar,
        MachineCard,
        Navbar,
        ChatMessage
    },

    data() {
        return {
            machine: json.find(m => m.id == this.$route.params.id),
            messageHistory: [{
                from: "Jua",
                message: "Hello, I'm the Jua AI assistant. How can I help you today? You can ask questions about troubleshooting, maintenance, and more.",
                time: Date.now()
            }],
            currentText: "",
            socket: undefined,
            connected: false,
        }
    },
    mounted() {
        this.socket = new WebSocket("ws://127.0.0.1:8000/ws")
        this.socket.onopen = () => {
            console.log("Connected")
            this.connected = true
        }

        this.socket.onmessage = (event) => {
            this.messageHistory.push({
                from: "Jua",
                message: JSON.parse(event.data).content,
                time: Date.now()
            })
        }
        this.socket.onclose = () => {
            console.log("Disconnected")
            this.connected = false
        }

    },
    methods: {
        query() {
            this.messageHistory.push({
                from: "You",
                message: this.currentText,
                time: Date.now()
            })

            // Make API request

            this.socket.send(JSON.stringify({
                query: this.currentText,
                device: this.machine.name,
            }))
            this.currentText = ""
        }
    }
}
</script>

<template>
    <div class="flex flex-col">
        <div class="p-8">
            <TopBar></TopBar>

            <h2 class="mt-8 mb-4 text-2xl font-semibold text-gray-700">Your device</h2>
            <MachineCard :id="machine.id"></MachineCard>


            <h2 class="mt-8 mb-4 text-2xl font-semibold text-gray-700">Chat</h2>

            <div class="mt-4">
                <div class="flex rounded-md shadow-sm">
                    <input type="text" id="hs-trailing-button-add-on" name="hs-trailing-button-add-on"
                        :placeholder="connected ? 'Connected' : 'Connecting ...'" v-model="currentText"
                        @keyup.enter="query()"
                        class="py-3 px-4 block w-full border-gray-200 shadow-sm rounded-l-md text-sm focus:z-10 focus:border-yellow-500 focus:ring-yellow-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400">
                    <button type="button" @click="query()"
                        class="inline-flex flex-shrink-0 justify-center items-center h-[2.875rem] w-[2.875rem] rounded-r-md border border-transparent font-semibold bg-yellow-500 text-white hover:bg-yellow-600 focus:z-10 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all text-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <g clip-path="url(#clip0_23_57573)">
                                <path
                                    d="M15.964 0.685989C16.0004 0.595125 16.0093 0.495585 15.9896 0.399709C15.97 0.303832 15.9226 0.215836 15.8534 0.14663C15.7842 0.0774234 15.6962 0.0300499 15.6003 0.0103825C15.5044 -0.00928499 15.4049 -0.000381488 15.314 0.0359892L0.767017 5.85499H0.766017L0.314017 6.03499C0.228408 6.06914 0.153903 6.12629 0.098733 6.20012C0.0435631 6.27395 0.00987534 6.3616 0.0013908 6.45338C-0.00709374 6.54516 0.00995519 6.63749 0.0506543 6.72019C0.0913535 6.80289 0.154119 6.87272 0.232017 6.92199L0.642017 7.18199L0.643017 7.18399L5.63802 10.362L8.81602 15.357L8.81802 15.359L9.07802 15.769C9.12744 15.8466 9.19732 15.909 9.27995 15.9495C9.36259 15.9899 9.45478 16.0068 9.54638 15.9982C9.63798 15.9896 9.72543 15.9559 9.79912 15.9009C9.87281 15.8458 9.92987 15.7714 9.96402 15.686L15.964 0.685989V0.685989ZM14.131 2.57599L6.63702 10.07L6.42202 9.73199C6.38262 9.66996 6.33004 9.61738 6.26802 9.57799L5.93002 9.36299L13.424 1.86899L14.602 1.39799L14.132 2.57599H14.131Z"
                                    fill="white" />
                            </g>
                            <defs>
                                <clipPath id="clip0_23_57573">
                                    <rect width="16" height="16" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </button>
                </div>
            </div>


            <div class="max-h-64 overflow-y-auto py-4 inset-shadow">
                <div v-for="message in messageHistory">
                    <ChatMessage :message="message"></ChatMessage>
                </div>
            </div>


        </div>
        <Navbar></Navbar>
    </div>
</template>

<style>
.inset-shadow {
    box-shadow: inset 0px 10px 4px -4px rgba(0, 0, 0, 0.05);
}
</style>