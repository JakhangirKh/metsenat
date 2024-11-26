<template>
  <main id="app" class="main-wrapper" >
    <Component :is="activeLayout"> <RouterView /></Component>
  </main>
</template>
<script setup>
import { RouterView, useRoute } from "vue-router";
import { computed } from "vue";

import Auth from "@/layouts/LAuth.vue";
import Default from "@/layouts/LDefault.vue";

const layouts = {
  default: Default,
  auth: Auth,
};
const routeLayout = computed(() => {
  return route.meta.layout;
})

const activeLayout = computed(() => {
  return layouts[routeLayout.value];
})
const route = useRoute();

// onMounted(() => {
//   console.log(route.meta); 

// })

</script>
