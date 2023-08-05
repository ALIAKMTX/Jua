<script>
import TopBar from "../components/TopBar.vue"
import HomeScreenCard from "../components/HomeScreenCard.vue"
import Navbar from "../components/Navbar.vue"

export default {
    components: {
        TopBar,
        HomeScreenCard,
        Navbar
    },
}
</script>

<template>
    <div class="flex flex-col">
        <div class="p-8">
            <TopBar></TopBar>

            <h1 class="mt-8 text-4xl font-medium text-gray-700">Good afternoon, <br><span class="font-bold">John</span></h1>

            <img src="../assets/home.svg" class="w-56 my-8">

            <h2 class="font-medium text-2xl text-gray-700 my-8">
                How can we help?
            </h2>

            <div class="flex flex-col">
                <HomeScreenCard title="Diagnose"
                    description="Get instant help from our AI chatbot with access to medical device manuals. "
                    path="/diagnose">
                    <div> <span
                            class="inline-flex justify-center items-center w-[54px] h-[54px] rounded-md bg-blue-100 text-blue-600">
                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
                                <g clip-path="url(#clip0_2_50430)">
                                    <path
                                        d="M14.7062 0.706875C13.7637 -0.235625 12.2362 -0.235625 11.2937 0.706875L0.7085 11.2938C-0.234 12.2363 -0.234 13.7621 0.7085 14.703L11.297 25.2915C12.2395 26.234 13.7654 26.234 14.7062 25.2915L25.2947 14.703C26.2372 13.7605 26.2372 12.2346 25.2947 11.2938L14.7062 0.706875ZM13 6.5C13.8694 6.5 14.5502 7.25075 14.4625 8.11688L13.8937 13.8158C13.8746 14.0396 13.7722 14.2482 13.6067 14.4002C13.4412 14.5521 13.2247 14.6365 13 14.6365C12.7753 14.6365 12.5588 14.5521 12.3933 14.4002C12.2278 14.2482 12.1254 14.0396 12.1062 13.8158L11.5375 8.11688C11.5171 7.9125 11.5397 7.70612 11.6039 7.51102C11.6681 7.31592 11.7724 7.13643 11.9102 6.98411C12.048 6.83179 12.2161 6.71001 12.4038 6.62663C12.5915 6.54325 12.7946 6.50012 13 6.5V6.5ZM13.0032 16.25C13.4342 16.25 13.8476 16.4212 14.1523 16.726C14.457 17.0307 14.6282 17.444 14.6282 17.875C14.6282 18.306 14.457 18.7193 14.1523 19.024C13.8476 19.3288 13.4342 19.5 13.0032 19.5C12.5723 19.5 12.1589 19.3288 11.8542 19.024C11.5495 18.7193 11.3782 18.306 11.3782 17.875C11.3782 17.444 11.5495 17.0307 11.8542 16.726C12.1589 16.4212 12.5723 16.25 13.0032 16.25Z"
                                        fill="#3B82F6" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_2_50430">
                                        <rect width="26" height="26" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </span></div>

                </HomeScreenCard>

                <HomeScreenCard class="mt-4" title="Connect"
                    description="Find technicians near you with the expertise you need. " path="/get-help">
                    <div> <span
                            class="inline-flex justify-center items-center w-[54px] h-[54px] rounded-md bg-teal-100 text-teal-500">
                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
                                <g clip-path="url(#clip0_2_50433)">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M3.06312 0.830369C3.34746 0.546464 3.68888 0.326227 4.06477 0.184253C4.44066 0.0422798 4.84243 -0.0181881 5.24345 0.00685675C5.64448 0.0319016 6.0356 0.141887 6.3909 0.329525C6.74621 0.517163 7.05757 0.778168 7.30438 1.09524L10.2213 4.84249C10.7559 5.52987 10.9444 6.42524 10.7331 7.27024L9.84425 10.829C9.79829 11.0133 9.80078 11.2064 9.85146 11.3895C9.90214 11.5726 9.9993 11.7394 10.1335 11.8739L14.1261 15.8665C14.2607 16.001 14.4279 16.0983 14.6113 16.149C14.7947 16.1997 14.9881 16.202 15.1726 16.1557L18.7298 15.2669C19.1467 15.1626 19.582 15.1545 20.0026 15.2432C20.4232 15.3319 20.8181 15.515 21.1575 15.7787L24.9048 18.694C26.2519 19.7421 26.3754 21.7327 25.1696 22.9369L23.4894 24.6171C22.2869 25.8196 20.4896 26.3477 18.8143 25.7579C14.5262 24.2491 10.6328 21.7942 7.423 18.5754C4.20434 15.366 1.74949 11.4732 0.2405 7.18574C-0.34775 5.51199 0.180375 3.71312 1.38287 2.51062L3.06312 0.830369Z"
                                        fill="#14B8A6" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_2_50433">
                                        <rect width="26" height="26" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </span></div>

                </HomeScreenCard>
            </div>

        </div>

        <Navbar></Navbar>
    </div>
</template>