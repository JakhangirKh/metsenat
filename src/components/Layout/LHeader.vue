<template>
  <header class="max-w-[1200px] w-full mx-auto items-center">
    <div class="flex flex-row justify-between my-3">
      <RouterLink to="/login" class="items-center text-center flex">
        <img src="/images/logo-pro.png" alt="Логотип" />
      </RouterLink>
      <div class="flex flex-row gap-8 items-center text-center">
        <button
          class="flex flex-row gap-6 items-center outline-none text-center text-sm font-medium rounded-md bg-grey-inputSearch pl-5"
        >
          Шохрух
          <i
            class="icon-user2 text-bgColor-user bg-green-userBg text-[24px] px-1 pt-2 rounded my-1 mr-1"
          ></i>
        </button>
        <RouterLink to="/login">
          <i class="icon-log-out text-center text-[30px] text-white-exit"></i>
        </RouterLink>
      </div>
    </div>
  </header>
</template>

<script setup>
// difineProps({
//   user: {
//     type: Object,
//   }
// })
</script>

<style lang="scss" scoped></style>
