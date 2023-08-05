<script>
export default {
    props: ["tabName", "path"],
    data: () => ({
        isActive: false
    }),

    mounted() {
        console.log(this.$route.path)
        if (this.$route.path === this.path) {
            this.isActive = true;
        }
    }
}
</script>

<template>
    <!--todo find a more elegant way to implement the tab switching / highlighting-->
    <router-link class="flex flex-col items-center basis-1/3" :to="path">
        <span :class="[' inline-flex', 'justify-center', 'items-center', ' w-[2rem]', 'h-[2rem]',
            , 'rounded-md', , isActive ? 'text-yellow-500' : 'text-gray-500', isActive ? 'bg-yellow-100'
                : 'bg-gray-100']">
            <slot></slot>
        </span>
        <span :class='["text-xs", isActive ? "text-yellow-500" : "text-gray-500"]'>{{ tabName }}</span>
    </router-link>
</template>