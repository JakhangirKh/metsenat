<template>
  <main class="bg-bgColor">
    <section class="max-w-[1200px] w-full mx-auto items-center">
      <table
        class="w-full text-sm mx-auto border-separate border-spacing-y-3 pt-12"
      >
        <thead class="text-white-exit font-normal text-xs uppercase">
          <tr class="">
            <th scope="col" class="text-center px-4 py-3">#</th>
            <th scope="col" class="text-start px-4 py-3">F.I.SH.</th>
            <th scope="col" class="text-center px-4 py-3">TEL.RAQAMI</th>
            <th scope="col" class="text-center px-4 py-3">HOMIYLIK SUMMASI</th>
            <th scope="col" class="text-center px-4 py-3">SARIFLANGAN SUMMA</th>
            <th scope="col" class="text-center px-4 py-3">SANA</th>
            <th scope="col" class="text-center px-4 py-3">HOLATI</th>
            <th scope="col" class="text-center px-4 py-3">AMALLAR</th>
          </tr>
        </thead>
        <tbody class="">
          <tr
            class="bg-white"
            v-for="(transaction, index) in paginatedTransactions"
            :key="index"
          >
            <th
              class="rounded-l-lg mt-3 text-center py-5 px-4 font-normal text-sm text-black-sponsors"
            >
              {{ (currentPage - 1) * itemsPerPage + index + 1 }}
            </th>
            <td
              class="py-5 px-4 text-left font-medium text-sm text-black-sponsors"
            >
              {{ transaction.fullName }}
            </td>
            <td
              class="py-5 px-4 text-center font-normal text-sm text-black-sponsors"
            >
              {{ transaction.phone }}
            </td>
            <td
              class="py-5 px-4 text-center font-medium text-sm text-black-sponsors"
            >
              {{ transaction.amount
              }}<span class="font-medium ml-1 text-sm text-white-exit">{{
                transaction.currency
              }}</span>
            </td>
            <td
              class="py-5 px-4 text-center font-medium text-sm text-black-sponsors"
            >
              {{ transaction.balance
              }}<span class="font-medium ml-1 text-sm text-white-exit">{{
                transaction.currency
              }}</span>
            </td>
            <td
              class="py-5 px-4 text-center font-normal text-sm text-black-sponsors"
            >
              {{ transaction.date }}
            </td>
            <td
              class="py-5 px-4 text-center font-medium text-sm text-black-sponsors"
            >
              {{ transaction.status }}
            </td>
            <td
              class="rounded-r-lg py-5 px-4 text-center font-medium text-sm text-black-sponsors"
            >
              <router-link to="/homiylar/single"><i
                href="#!"
                class="font-medium icon-eye-result text-blue text-[24px]"
              ></i></router-link>
            </td>
          </tr>
        </tbody>
      </table>
      <!-- pagination -->
     <div class="flex items-center justify-end mt-5 pb-20 space-x-2">
  <!-- Dropdown for items per page -->
  <h3 class="text-sm font-normal">Ko‘rsatish</h3>
  <select
    class="px-3 text-sm font-normal py-1 border border-grey-400 rounded  bg-white text-black focus:outline-none"
    @change="updateItemsPerPage($event)"
  >
    <option>5</option>
    <option>10</option>
    <option>15</option>
  </select>

  <!-- Previous Button -->
  <button
    class="p-2 rounded border border-grey-400 bg-white text-grey-300 disabled:border-none disabled:bg-grey-200 disabled:cursor-not-allowed rotate-90 transform"
    :disabled="currentPage === 1"
    @click="goToPage(currentPage - 1)"
  >
    <i class="icon-chevron-small text-sm "></i>
  </button>

  <!-- Pagination Buttons -->
  <button
    v-for="page in totalPages"
    :key="page"
    @click="goToPage(page)"
    :class="[ 
      'px-3 py-1 rounded border text-sm font-medium',
      page === currentPage
        ? 'border-blue-500 bg-white text-blue-500'
        : 'border-grey-400 bg-white text-black hover:bg-grey-100'
    ]"
  >
    {{ page }}
  </button>

  <!-- Dots for skipped pages -->
  <span v-if="showDots" class="text-sm text-grey-500">...</span>

  <!-- Next Button -->
  <button
    class="p-2 rounded border border-grey-400 bg-white text-grey-300 disabled:bg-grey-200 disabled:border-none disabled:cursor-not-allowed -rotate-90 transform"
    :disabled="currentPage === totalPages"
    @click="goToPage(currentPage + 1)"
  >
    <i class="icon-chevron-small text-sm -rotate-90 transform"></i>
  </button>
</div>

    </section>
  </main>
</template>

<script setup>
import { ref, computed } from "vue";
const transactions = ref([
  {
    fullName: "Alimov Abror Xabibullayevich",
    phone: "+998 99 973-72-60",
    amount: "30 000 000",
    balance: "0",
    currency: "UZS",
    date: "15.01.2021",
    status: "Yangi",
  },
  {
    fullName: "Saimov Rustam Saimjonovich",
    phone: "+998 99 973-72-60",
    amount: "1 000 000",
    balance: "0",
    currency: "UZS",
    date: "02.02.2021",
    status: "Moderatsiyada",
  },
  {
    fullName: "Sanginov Otabek Muratovich",
    phone: "+998 99 973-72-60",
    amount: "5 000 000",
    balance: "5 000 000",
    currency: "UZS",
    date: "20.04.2021",
    status: "Tasdiqlangan",
  },
  {
    fullName: "Nazarov Sanjar Olimovich",
    phone: "+998 99 973-72-60",
    amount: "7 000 000",
    balance: "7 000 000",
    currency: "UZS",
    date: "03.05.2021",
    status: "Bekor qilingan",
  },
  {
    fullName: "Ibragimov Sohib Mirfayozovich",
    phone: "+998 99 973-72-60",
    amount: "10 000 000",
    balance: "0",
    currency: "UZS",
    date: "10.05.2021",
    status: "Moderatsiyada",
  },
  {
    fullName: "Ishmuhammedov Aziz Ishqobilovich",
    phone: "+998 99 973-72-60",
    amount: "30 000 000",
    balance: "1 000 000",
    currency: "UZS",
    date: "17.06.2021",
    status: "Bekor qilingan",
  },
  {
    fullName: "Qosimov Furqat Xabibullayevich",
    phone: "+998 99 973-72-60",
    amount: "50 000 000",
    balance: "0",
    currency: "UZS",
    date: "21.06.2021",
    status: "Yangi",
  },
  {
    fullName: "Ortiqov Abror Bahodirovich",
    phone: "+998 99 973-72-60",
    amount: "70 000 000",
    balance: "0",
    currency: "UZS",
    date: "25.02.2021",
    status: "Yangi",
  },
  {
    fullName: "Rustamov Oybek  Tajiddinovich",
    phone: "+998 99 973-72-60",
    amount: "50 000 000",
    balance: "2 000 000",
    currency: "UZS",
    date: "18.07.2021",
    status: "Tasdiqlangan",
  },
  {
    fullName: "Isfandiyorov  Iqbol Bobomirzayevich",
    phone: "+998 99 973-72-60",
    amount: "1 000 000",
    balance: "0",
    currency: "UZS",
    date: "28.02.2021",
    status: "Moderatsiyada",
  },
]);

// const statusClass = (status) => {
//   switch (status) {
//     case "Yangi":
//       return "new";
//     case "Moderatsiyada":
//       return "moderation";
//     case "Tasdiqlangan":
//       return "approved";
//     case "Bekor qilingan":
//       return "cancelled";
//     default:
//       return "";
//   }
// };

// //// pagination
const currentPage = ref(1);
const itemsPerPage = 5;

const paginatedTransactions = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  return transactions.value.slice(start, end);
});

const totalPages = computed(() =>
  Math.ceil(transactions.value.length / itemsPerPage)
);

const goToPage = (page) => {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page;
  }
};
</script>

<style lang="scss" scoped></style>
