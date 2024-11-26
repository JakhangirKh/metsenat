<template>
  <section
    id="login"
    class="bg-bgColor w-full justify-center h-lvh flex items-center"
  >
    <div class="flex flex-col">
      <div class="flex flex-row relative ml-8">
       <router-link to="/login"> <img
          class="text-center justify-start"
          src="/public/images/logo.png"
          alt="Logo"
        /></router-link>
        <p
          class="py-1 absolute top-3 right-10 px-2 bg-redClub rounded-xl text-xs font-semibold"
        >
          CLUB
        </p>
      </div>
      <div
        class="bg-white w-[379px] rounded-xl mt-9 border border-borderColor p-8"
      >
        <form class="flex-col flex">
          <h1 class="text-loginColor text-2xl font-bold">Kirish</h1>

          <label
            class="text-xs font-medium text-loginColor-pasword mt-11"
            for="username"
          >
            LOGIN
          </label>
          <input
            class="text-grey-input border border-grey-borderInput rounded-md py-2 pl-4 mt-2 hover:border-blue duration-300 outline-none"
            type="text"
            name="username"
          />
          <label
            class="text-xs font-medium text-loginColor-password mt-5"
            for="password"
          >
            PAROL
          </label>
          <input
            class="border border-grey-borderInput rounded-md py-2 pl-4 mt-2 hover:border-blue duration-300 outline-none"
            type="password"
            name="password"
          />
          <RouterLink to="/">
          <button
            class="py-3.5 w-[315px] bg-blue-btn mt-6 rounded-md text-white hover:bg-white hover:border-blue-btn border hover:text-blue-btn duration-300"
          >
           Kirish  
          </button>
        </RouterLink>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped></style>
