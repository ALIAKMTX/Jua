<script>
import json from '../data.json'
export default {
    props: {
        id: String,
    },
    data() {
        return {
            machine: json.find(m => m.id == this.id)
        }
    }
}
</script>

<template>
    <router-link :to="`/diagnose/chat/${machine.id}`">
        <div
            class="flex border-gray-200 bg-white border p-4 rounded-xl drop-shadow-sm items-center gap-4 hover:bg-stone-100">

            <div class="basis-1/4 flex justify-center">
                <img class="h-16" :src="`/src/assets/images/${machine.id}.jpg`">
            </div>
            <div>
                <h3 class="font-bold text-gray-700">{{ machine.name }}</h3>

                <div class="flex items-center gap-1">
                    <span v-if="machine.fullSupport"
                        class="inline-flex p-0.5 justify-center items-center w-[1rem] h-[1rem] rounded-full bg-teal-500 ">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path
                                d="M12.736 3.97C12.8043 3.90036 12.8857 3.84504 12.9756 3.80728C13.0655 3.76951 13.162 3.75006 13.2595 3.75006C13.357 3.75006 13.4535 3.76951 13.5434 3.80728C13.6333 3.84504 13.7148 3.90036 13.783 3.97C14.069 4.259 14.073 4.72599 13.793 5.01999L7.88001 12.01C7.81288 12.0837 7.73141 12.143 7.64059 12.1841C7.54977 12.2253 7.45151 12.2475 7.35182 12.2493C7.25213 12.2512 7.1531 12.2327 7.0608 12.195C6.9685 12.1573 6.88487 12.1011 6.81501 12.03L3.21701 8.384C3.07825 8.24248 3.00052 8.05219 3.00052 7.854C3.00052 7.6558 3.07825 7.46551 3.21701 7.32399C3.28526 7.25436 3.36671 7.19904 3.4566 7.16128C3.54649 7.12351 3.64301 7.10406 3.74051 7.10406C3.83801 7.10406 3.93453 7.12351 4.02442 7.16128C4.11431 7.19904 4.19576 7.25436 4.26401 7.32399L7.31601 10.417L12.716 3.992C12.7222 3.98427 12.7289 3.97692 12.736 3.97Z"
                                fill="white" />
                        </svg>
                    </span>
                    <span v-else
                        class="inline-flex p-0.5 justify-center items-center w-[1rem] h-[1rem] rounded-full bg-yellow-500 ">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M2 8C2 7.86739 2.05268 7.74021 2.14645 7.64645C2.24021 7.55268 2.36739 7.5 2.5 7.5H13.5C13.6326 7.5 13.7598 7.55268 13.8536 7.64645C13.9473 7.74021 14 7.86739 14 8C14 8.13261 13.9473 8.25979 13.8536 8.35355C13.7598 8.44732 13.6326 8.5 13.5 8.5H2.5C2.36739 8.5 2.24021 8.44732 2.14645 8.35355C2.05268 8.25979 2 8.13261 2 8Z"
                                fill="white" />
                        </svg>
                    </span>

                    <p class="text-sm text-gray-600">
                        {{ machine.fullSupport ? "Full support available" : "Limited support available" }}
                    </p>
                </div>

            </div>
        </div>
    </router-link>
</template>