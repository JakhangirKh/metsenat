<template>
  <main class="">
    <section class="max-w-[1200px] w-full mx-auto items-center p-6">
      <div class="flex flex-row justify-between items-center">
        <div class="flex flex-row">
          <router-link
            to="/dashboard"
            active-class="bg-blue-toolBackground text-white"
            class="py-3 px-14 border focus:bg-blue-toolBackground focus:text-white rounded-l-lg text-blue-toolTitle border-blue-toolBorder text-xs font-medium duration-300"
            ><button class="">Dashboard</button></router-link
          >
          <router-link
            to="/homiylar"
            active-class="bg-blue-toolBackground text-white"
            class="py-3 px-14 border focus:bg-blue-toolBackground focus:text-white text-blue-toolTitle border-blue-toolBorder text-xs font-medium duration-300"
          >
            <button class="">Homiylar</button></router-link
          >
          <router-link
            to="/talabalar"
            active-class="bg-blue-toolBackground text-white"
            class="py-3 px-14 border focus:bg-blue-toolBackground focus:text-white rounded-r-lg text-blue-toolTitle border-blue-toolBorder text-xs font-medium duration-300"
          >
            <button>Talabalar</button></router-link
          >
        </div>
        <div class="flex flex-row gap-5">
          <form class="relative flex flex-row gap-2 items-center">
            <i
              class="icon-search absolute text-grey-inputIconText left-2 text-[20px]"
            ></i>
            <input
              type="text"
              placeholder="Izlash"
              class="pl-8 py-2 focus:outline-none focus:ring-2 focus:border-blue-toolTitle hover:border-blue-toolTitle duration-200 w-[284px] bg-grey-inputSearch border rounded :placeholder= text-base font-normal text-grey-inputIconText"
            />
          </form>
          <button
            @click="$emit('open-filter')"
            class="items-center rounded py-2 px-8 w-full flex gap-2.5 bg-blue-filterBtn text-blue-filterTitle text-sm font-medium"
          >
            <i class="icon-filter text-[16px] text-blue-filterIcon"></i>Filter
          </button>
        </div>
      </div>
    </section>
  </main>
 
</template>

<script setup>
// import Modal from "../base/Modal.vue";
// import { ref } from "vue";
// const isModalVisible = ref(false)

</script>

<style lang="scss" scoped></style>
