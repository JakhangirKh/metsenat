<template>
  <main class="bg-bgColor">
    <section class="max-w-[1200px] w-full mx-auto items-center pb-72">
      <div class="grid grid-cols-3 pt-12 gap-7">
        <div
          v-for="total in totals"
          :key="total.title"
          class="flex flex-row bg-white py-6 mb-9 pl-6 border rounded-lg gap-4"
        >
          <i
            :class="total.iconStyles"
            class="text-[30px] icon-cash p-3 rounded-2xl"
          ></i>
          <div class="flex flex-col gap-1.5">
            <h4 class="text-xs font-normal text-grey-cashTitles">
              {{ total.title }}
            </h4>
            <div class="flex row gap-1.5">
              <p class="text-xl font-bold text-grey-cash">
                {{ total.amounts }}
              </p>
              <p class="text-xl font-bold text-grey-cashUZS">
                {{ total.currency }}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="bg-white w-[1200px] h-[402px] border rounded-lg"></div>
    </section>
  </main>
</template>

<script setup>
// import Header from "@/components/Layout/Header.vue"
import { ref } from "vue";

const totals = ref([
  {
    title: "Jami to‘langan summa",
    amounts: "1 684 325 000",
    currency: "UZS",
    iconStyles: "text-cashBlue bg-cashBlue-bg",
  },
  {
    title: "Jami so‘ralgan summa",
    amounts: "14 098 530 000",
    currency: "UZS",
    iconStyles: "text-cashYellow bg-cashYellow-bg",
  },
  {
    title: "To‘lanishi kerak summa",
    amounts: "12 414 205 000",
    currency: "UZS",
    iconStyles: "text-cashOrange bg-cashOrange-bg",
  },
]);

// const getIconClass = (title) => {
//   if (title === 'Jami to‘langan summa') return 'icon-cash';
//   if (title === 'Jami so‘ralgan summa') return 'icon-cash';
//   if (title === 'To‘lanishi kerak summa') return 'icon-cash';
//   return 'icon-cash';
// };
</script>

<style lang="scss" scoped></style>
