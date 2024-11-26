<template>
    <div>
        <LayoutHeader />
        <slot /> <!-- <RouterView> --> 
        <!-- Dashboard, Students -->
    </div>
</template>


<script setup>
import LayoutHeader from "@/components/Layout/LHeader.vue"
</script>