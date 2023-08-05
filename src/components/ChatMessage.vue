<script>
export default {
    props: {
        message: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            initials: "·"
        }

    },
    mounted() {
        this.initials = this.message.from != "Jua" ? this.message.from.split(" ").map((name) => name[0]).join("") : "AI"
    }
}
</script>

<template>
    <div class="flex gap-2 items-center">
        <span :class="['inline-flex', 'items-center', 'justify-center', 'h-8', 'w-8', 'rounded-full', (initials == 'AI'
            ? 'bg-blue-600' : 'bg-yellow-500'),]">
            <span class="text-xs font-medium text-white leading-none">{{ initials }}</span>
        </span>
        <h3 class="text-sm font-medium text-gray-700">{{ message.from }} · <span class="font-light text-gray-400">{{
            new Date(message.time).toLocaleTimeString("en-US") }}</span>
        </h3>
    </div>
    <p class="text-gray-600 my-2">
        {{ message.message }}
    </p>
</template>