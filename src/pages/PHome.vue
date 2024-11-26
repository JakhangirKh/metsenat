<template>
    <HomeToolbar @open-filter="openFilterModal"  />

    <RouterView />

    <div >
        <SponsorsFilter v-if="showSponsorsModal" />
        <StudentsModal v-if="showStudentsModal"  />
    </div>

    <!-- <Modal v-show="isModalVisible" @close-modal="isModalVisible = false">
    
  </Modal> -->
    
</template>

<script setup>
import HomeToolbar from "@/components/Home/CToolbar.vue"
import SponsorsFilter from "@/components/Home/CSponsorsFilter.vue";
import StudentsModal from "@/components/Home/CStudentsModal.vue";
import { useRoute } from "vue-router"
import { ref } from "vue"
const route = useRoute()
const showSponsorsModal = ref(false)
const showStudentsModal = ref(true)
const openFilterModal = () => {
  if (route.name === "Sponsors") {
    showSponsorsModal.value = true
  } else {
    showStudentsModal.value = true
  }
}



</script>
