<script setup lang="ts">
const greeting:string = "テストですだよだよです";
</script>

<template>
    <p class="greeting">{{ greeting }}</p>
</template>

<style>
.greeting {
    color: red;
    font-weight: bold;
}
</style>