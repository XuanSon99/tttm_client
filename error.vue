<template>
    <div>
        {{ error.statusCode }}
        <p @click="handleClearError">Go home</p>
    </div>
</template>

<script setup>
defineProps(['error'])
const handleClearError = () => clearError({ redirect: '/' })
</script>

<style scoped></style>