<script setup lang="ts">
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Head } from '@inertiajs/vue3';
</script>

<template>
    <Head title="Dashboard" />

    <AuthenticatedLayout>
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight text-center">Dashboard</h2>
        </template>

        <div>
            <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                <div class="bg-white overflow-hidden shadow-lg sm:rounded-lg">
                    <div class="p-6 text-gray-900">You're logged in!</div>
                    <div class="p-6 text-gray-900">You're logged in!</div>
                    <div class="p-6 text-gray-900">You're logged in!</div>
                    <div class="p-6 text-gray-900">You're logged in!</div>
                    <div class="p-6 text-gray-900">You're logged in!</div>
                    <div class="p-6 text-gray-900">You're logged in!</div>
                    <div class="p-6 text-gray-900">You're logged in!</div>
                    <div class="p-6 text-gray-900">You're logged in!</div>
                    <div class="p-6 text-gray-900">You're logged in!</div>
                    <div class="p-6 text-gray-900">You're logged in!</div>
                    <div class="p-6 text-gray-900">You're logged in!</div>
                    <div class="p-6 text-gray-900">You're logged in!</div>
                    <div class="p-6 text-gray-900">You're logged in!</div>
                    <div class="p-6 text-gray-900">You're logged in!</div>
                    <div class="p-6 text-gray-900">You're logged in!</div>
                    <div class="p-6 text-gray-900">You're logged in!</div>
                    <div class="p-6 text-gray-900">You're logged in!</div>
                    <div class="p-6 text-gray-900">You're logged in!</div>
                    <div class="p-6 text-gray-900">You're logged in!</div>
                </div>
            </div>
        </div>
    </AuthenticatedLayout>
</template>
