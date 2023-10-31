<script setup>
defineProps({
    class: String
});
</script>

<template>
    <div :class="class">
        <input type="button" value="-"
            class="border border-grayLight rounded-l bg-grayLight px-3 py-2.5 text-base font-semibold transition duration-300 cursor-pointer hover:text-primary">
        <input type="number" step="1" min="1" max="98" value="1" inputmode="numeric" autocomplete="off"
            class="border border-grayLight px-3 py-2.5 text-base font-bold text-heading text-center">
        <input type="button" value="+"
            class="border border-grayLight rounded-r bg-grayLight px-3 py-2.5 text-base font-semibold transition duration-300 cursor-pointer hover:text-success">
    </div>
</template>

<style scoped>
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

/* Firefox */
input[type=number] {
    -moz-appearance: textfield;
}
</style>