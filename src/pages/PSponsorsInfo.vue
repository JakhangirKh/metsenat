<template>
  <div class="max-w-[1200px] justify-center w-full mx-auto items-center">
    <div class="py-8 flex gap-4 items-center">
      <!-- <i class="icon-chevron text-[28px] text-black"></i> -->
      <img class="w-[28px]" src="/public/svg/arrow-left.svg" alt="" />
      <h1 class="font-bold text-2xl">Ishmuhammedov Aziz Ishqobilovich</h1>
      <span
        class="bg-green-100 text-green-200 border rounded-md text-xs font-normal py-1.5 px-3"
        >Tasdiqlangan</span
      >
    </div>
  </div>
  <main class="bg-bgColor flex">
    <section
      class="max-w-[793px] w-full mx-auto items-center text-center pt-10"
    >
      <div class="bg-white p-8 border border-blue-toolBorder rounded-xl">
        <div class="flex justify-between items-center">
          <h2 class="text-2xl font-bold">Homiy haqida</h2>
          <button
            class="py-2 px-8 bg-blue-toolBorder border rounded-md text-sm font-medium text-blue-btn"
          >
            <i class="icon-edit text-[24px] text-blue-btn mr-2.5"></i>Tahrirlash
          </button>
        </div>
        <div class="" v-for="(information, index) in informations" :key="index">
          <div class="flex gap-5 items-center mt-8 mb-6">
            <div class="p-4 bg-grey-4 border rounded-lg">
              <img class="w-[28px]" src="/public//svg/Frame.svg" alt="" />
            </div>
            <h1 class="text-base font-medium w-[160px] text-left">
              {{ information.fullName }}
            </h1>
          </div>
          <div class="flex gap-[262px]">
            <div class="text-left">
              <p class="text-xs font-medium text-grey-300 uppercase mb-3">
                telefon raqam
              </p>
              <p class="text-base font-medium">{{ information.phone }}</p>
            </div>
            <div class="text-left">
              <p class="text-xs font-medium text-grey-300 uppercase mb-3">
                Homiylik summasi
              </p>
              <p class="text-base font-medium">{{ information.amount }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-36">
        <img src="/public/images/backdrop.png" alt="" />
      </div>
    </section>
  </main>
</template>

<script setup>
import { ref } from "vue";
const informations = ref([
  {
    fullName: "Ishmuhammedov Aziz Ishqobilovich",
    phone: "+998 99 973-72-60",
    amount: "30 000 000 UZS",
  },
]);
</script>

<style lang="scss" scoped></style>
