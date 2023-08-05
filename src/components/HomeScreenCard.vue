<script>
export default {
    props: {
        title: String,
        description: String,
        path: String,
    }
}
</script>

<template>
    <router-link :to="path">
        <div
            class="flex border-gray-200 bg-white border p-6 rounded-xl drop-shadow-sm items-center gap-4 hover:bg-stone-100">
            <slot></slot>
            <div>
                <h3 class="font-bold text-gray-700">{{ title }}</h3>
                <p class="text-sm text-gray-600">{{ description }}</p>
            </div>
        </div>
    </router-link>
</template>