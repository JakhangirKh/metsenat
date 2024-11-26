<template >
 
  <div class="bg-[grey] fixed inset-0"></div>
<div
  class="bg-white h-fit fixed z-10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 inset-0 w-[586px] p-7 border rounded-xl"
>
  <slot />
</div>
  <!-- <div
    @click.self="closeModal"
    class="w-full  justify-center h-lvh flex items-center z-20 fixed inset-0 "
  >

    <div class="bg-white py-7 px-7">
      <div class="flex justify-between items-center">
        <span class="">Filter</span>
        <i @click="closeModal" class="icon-exit"></i>
      </div>
      <div class="w-[520px] border "></div>
      <div class="flex justify-center items-center">
        <slot />
      </div>
      <div class="gap-3 justify-end">
        <button class="items-center text-center bg-blue-btn p-2">
          <i class="icon-clear text-grey-300"></i>
          Tozalash
        </button>
        <button class="items-center text-center bg-blue-btn p-2">
          <i class="icon-eye-result text-grey-300"></i>
          Natijalarni ko‘rish
        </button>
      </div>
      </div>
    </div> -->
</template>

<script setup>
// const emits = defineEmits(["closeModal"]);
// const closeModal = () => {
//   emits("closeModal");
// };
</script>

<style lang="scss" scoped></style>
