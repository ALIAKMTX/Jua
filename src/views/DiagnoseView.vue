<script>
import TopBar from "../components/TopBar.vue"
import MachineCard from "../components/MachineCard.vue"
import Navbar from "../components/Navbar.vue"

export default {
    components: {
        TopBar,
        MachineCard,
        Navbar
    },
}
</script>

<template>
    <div class="flex flex-col">
        <div class="p-8">
            <TopBar></TopBar>

            <h2 class="mt-8 text-3xl font-semibold text-gray-700">Diagnose problems</h2>

            <h4 class="font-medium text-lg text-gray-700">
                Begin by selecting your model.
            </h4>

            <div class="mt-6">
                <h4 class="font-medium text-xl text-gray-700">Ultrasound</h4>
                <div class="mt-4 mb-8 flex flex-col gap-4">
                    <MachineCard id="ge-logiq">
                    </MachineCard>
                    <div class="bg-teal-50 rounded-md p-4" role="alert">
                        <div class="flex">
                            <div class="flex-shrink-0">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"
                                    fill="none">
                                    <g clip-path="url(#clip0_2_53968)">
                                        <path
                                            d="M8 16C10.1217 16 12.1566 15.1571 13.6569 13.6569C15.1571 12.1566 16 10.1217 16 8C16 5.87827 15.1571 3.84344 13.6569 2.34315C12.1566 0.842855 10.1217 0 8 0C5.87827 0 3.84344 0.842855 2.34315 2.34315C0.842855 3.84344 0 5.87827 0 8C0 10.1217 0.842855 12.1566 2.34315 13.6569C3.84344 15.1571 5.87827 16 8 16V16ZM8.93 6.588L7.93 11.293C7.86 11.633 7.959 11.826 8.234 11.826C8.428 11.826 8.721 11.756 8.92 11.58L8.832 11.996C8.545 12.342 7.912 12.594 7.367 12.594C6.664 12.594 6.365 12.172 6.559 11.275L7.297 7.807C7.361 7.514 7.303 7.408 7.01 7.337L6.559 7.256L6.641 6.875L8.931 6.588H8.93ZM8 5.5C7.73478 5.5 7.48043 5.39464 7.29289 5.20711C7.10536 5.01957 7 4.76522 7 4.5C7 4.23478 7.10536 3.98043 7.29289 3.79289C7.48043 3.60536 7.73478 3.5 8 3.5C8.26522 3.5 8.51957 3.60536 8.70711 3.79289C8.89464 3.98043 9 4.23478 9 4.5C9 4.76522 8.89464 5.01957 8.70711 5.20711C8.51957 5.39464 8.26522 5.5 8 5.5V5.5Z"
                                            fill="#2DD4BF" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_2_53968">
                                            <rect width="16" height="16" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                            <div class="ml-4">
                                <h3 class="text-sm text-teal-800 font-medium">
                                    More models are coming soon!
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
                <h4 class="font-medium text-xl text-gray-700">Infant incubators</h4>
                <div class="mt-4 flex flex-col gap-4">
                    <!--entries here-->
                </div>

            </div>


        </div>
        <Navbar></Navbar>
    </div>
</template>