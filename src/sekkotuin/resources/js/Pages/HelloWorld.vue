<script>
export default {
    data() {
        return {
            greeting: "テストです",
        };
    },
};
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