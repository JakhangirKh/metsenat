<template>
    <BaseModal v-model="isModalOpen" title="Filter">
      <div class="relative">
        <div class="flex items-center justify-between mb-4">
          <h3 class="text-2xl font-bold">Filter</h3>
          <button
            @click="isModalOpen = false"
            class="text-gray-500 hover:text-gray-800"
          >
            <i class="icon-exit text-grey-300 text-[28px]"></i>
          </button>
        </div>
        <div class="border border-grey-200 my-7"></div>
        <!-- Filters -->
        <div class="space-y-4">
          <!-- Talabalik turi -->
            <div>
              <label class="block font-medium mb-2 text-xs">Talabalik turi</label>
              <select
                v-model="filters.status"
                class="w-full px-4 py-2.5 border-blue-toolBorder border rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Barchasi</option>
                <option value="Bakalavr">Bakalavr</option>
                <option value="Magistr">Magistr</option>
              </select>
            </div>
          <!-- Magistr -->
          <div>
            <label class="block font-medium mb-2 text-xs">Universitet</label>
            <select
              v-model="filters.university"
              class="w-full px-4 py-2.5 border-blue-toolBorder border rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Barchasi</option>
              <option value="Toshkent shahridagi INHA Universiteti">Toshkent shahridagi INHA Universiteti</option>
              <option value="O’zbekiston milliy universiteti">O’zbekiston milliy universiteti</option>
              <option value="Toshkent davlat texnika universiteti">Toshkent davlat texnika universiteti</option>
              <option value="Toshkent davlat iqtisodiyot universiteti">Toshkent davlat iqtisodiyot университети</option>
              <option value="O’zbekiston davlat jahon tillari университети">O’zbekiston давлат jahon tillari университети</option>
            </select>
          </div>
        </div>
        <div class="border border-grey-200 my-7"></div>
        <!-- Buttons -->
        <div class="flex justify-end gap-4">
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
  
  // Управление состоянием модального окна
  const isModalOpen = ref(false);
  
  // Фильтры
  const filters = ref({
    status: "", // Тип обучения
    university: "", // Университет
  });
  
  // Сброс фильтров
  const resetFilters = () => {
    filters.value = {
      status: "",
      university: "",
    };
  };
  
  // Применение фильтров
  const applyFilters = () => {
    console.log("Примененные фильтры:", filters.value);
    isModalOpen.value = false; // Закрыть модальное окно
  };
  </script>
  
  
  <style lang="scss" scoped>
  /* Пример для общего улучшения стилей (если Tailwind недоступен) */
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .modal-content {
    background: white;
    padding: 1.5rem;
    border-radius: 8px;
    max-width: 600px;
    width: 100%;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }
  </style>