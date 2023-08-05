<template>
    <div class="flex flex-col">
        <div class="p-8 h-1/2 flex items-center">
            <img src="../assets/login-illustration.svg" class="">
        </div>

        <div class="justify-self-end bg-white drop-shadow-sm h-1/2 p-8 rounded-t-2xl border border-gray-200">
            <img src="../assets/logo.svg" alt="Jua logo" class="w-24 pb-4" />
            <form class="pb-2">
                <!--Email-->
                <label for="input-label" class="block text-sm font-medium mb-2 dark:text-white">Email</label>
                <input type="text"
                    class="mb-2 opacity-70 pointer-events-none py-3 px-4 block w-full bg-gray-50 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                    placeholder="your.email@example.com" disabled readonly>
                <!--Password-->
                <label for="input-label" class="block text-sm font-medium mb-2 dark:text-white">Password</label>
                <input type="text"
                    class="mb-4 opacity-70 pointer-events-none py-3 px-4 block w-full bg-gray-50 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                    placeholder="***" disabled readonly>

                <router-link to=""
                    class="cursor-not-allowed py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md bg-gray-100 border border-transparent font-semibold text-gray-500 ">
                    Sign in
                </router-link>
                <router-link to="/home"
                    class="ml-2 py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-yellow-500 text-white hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">
                    Skip to demo
                </router-link>
            </form>
            <span class="text-sm font-medium text-gray-500">No account? <a
                    class="text-sm font-semibold text-yellow-500">Create one!</a></span>

        </div>


    </div>
</template>