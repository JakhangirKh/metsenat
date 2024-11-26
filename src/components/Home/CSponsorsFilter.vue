<template>
  <BaseModal title="Filter">
    <div class="relative">
      <div class="flex items-center justify-between mb-4">
        <h3 class="text-2xl font-bold">Filter</h3>
        <button
          @click="isModalOpen = false"
          class="text-gray-500 hover:text-gray-800"
        >
          <i class="icon-exit text-grey-100 text-[28px]"></i>
        </button>
      </div>
      <div class="border border-grey-200 my-7"></div>

      <!-- Filters -->
      <div class="space-y-4">
        <!-- Status -->
        <div class="relative">
          <div
            @click="isOpenSelect = !isOpenSelect"
            class="flex select-none justify-between items-center border rounded-md bg-blue-toolBorder/20 border-blue-toolBorder py-2.5 pl-3 pr-2.5 cursor-pointer"
          >
            <span>{{ selectedFilter.name || "Barchasi" }}</span>
            <i class="icon-chevron-small text-[14px] text-grey-100"></i>
          </div>
          <Transition name="dropdown">
            <ul
              v-if="isOpenSelect"
              class="absolute top-[calc(100%+4px)] border rounded-md bg-white w-full shadow-lg"
            >
              <li
                v-for="(filter, index) in filters"
                :key="index"
                @click="selectFilter(filter)"
                class="px-4 py-3 text-sm font-normal border-blue-toolBorder hover:bg-blue-toolBorder/20 transition-all duration-200 border-b last:border-none cursor-pointer select-none"
              >
                {{ filter.name }}
              </li>
            </ul>
          </Transition>
        </div>

        <!-- Amount -->
        <div>
          <label class="block font-medium mb-4 text-xs mt-6"
            >Homiylik summasi</label
          >
          <div class="grid grid-cols-2 gap-3 md:grid-cols-4">
            <button
              class="px-8 py-4 border rounded text-sm text-center bg-blue-toolBorder"
              @click="selectedAmount = 'Barchasi'"
              :class="
                selectedAmount === 'Barchasi' ? 'text-sm font-medium' : ''
              "
            >
              Barchasi
            </button>
            <button
              v-for="amount in amounts"
              :key="amount"
              @click="selectAmount(amount)"
              :class="[
                'px-2 py-4 border text-sm font-medium rounded text-center transition-all duration-200',
                selectedAmount === amount
                  ? 'border-blue-btn border-2'
                  : 'bg-white hover:border-blue-btn',
              ]"
            >
              {{ amount }}
              <span class="text-xs font-normal text-blue">UZS</span>
            </button>
          </div>
        </div>

        <!-- Date -->
        <div>
          <label class="block font-medium mb-2 text-xs mt-7">Sana</label>
          <input
            type="date"
            v-model="selectedFilter.date"
            class="w-[253px] px-3 py-2 border-blue-toolBorder border rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      <div class="border border-grey-200 my-7"></div>

      <!-- Buttons -->
      <div class="flex justify-end gap-4 items-center text-center">
        <button
          @click="resetFilters"
          class="px-8 py-2 border-grey-100 border text-grey-300 duration-300 rounded hover:border-blue-btn"
        >
          <i class="icon-clear text-grey-100 text-[24px]"></i>
          Tozalash
        </button>
        <button
          @click="applyFilters"
          class="px-8 py-2 bg-blue-500 text-white rounded duration-300 hover:bg-blue-600"
        >
          <i class="icon-eye-result text-white text-[24px]"></i>
          Natijalarni ko'rish
        </button>
      </div>
    </div>
  </BaseModal>
</template>

<script setup>
import BaseModal from "@/components/base/CModal.vue";
import { ref } from "vue";

const isModalOpen = ref(false);
const isOpenSelect = ref(false);

const filters = ref([
  { id: 1, name: "Barchasi", date: "" },
  { id: 2, name: "Yangi", date: "" },
  { id: 3, name: "Moderatsiyada", date: "" },
  { id: 4, name: "Tasdiqlangan", date: "" },
  { id: 5, name: "Bekor qilingan", date: "" },
]);

const selectedFilter = ref(filters.value[0]);
const amounts = [
  "1 000 000",
  "5 000 000",
  "7 000 000",
  "10 000 000",
  "30 000 000",
  "50 000 000",
];
const selectedAmount = ref("Barchasi");

const selectAmount = (amount) => {
  selectedAmount.value = amount;
};
const selectFilter = (filter) => {
  selectedFilter.value = filter;
  isOpenSelect.value = false;
};

const resetFilters = () => {
  filters.value.forEach((filter) => {
    filter.date = "";
  });
  selectedFilter.value = filters.value[0];
  selectedAmount.value = "Barchasi";
};

const applyFilters = () => {
  const appliedFilters = {
    status: selectedFilter.value.name,
    date: selectedFilter.value.date || "Не выбрано",
    amount: selectedAmount.value,
  };
  console.log("Применённые фильтры:", appliedFilters);
  isModalOpen.value = false;
};
</script>

<style scoped>
.dropdown-enter-active,
.dropdown-leave-active {
  transition: all 0.2s ease-in-out;
}
.dropdown-enter-from,
.dropdown-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
