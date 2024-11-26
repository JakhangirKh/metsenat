<template>
  <main class="bg-bgColor">
    <section class="max-w-[1200px] w-full mx-auto items-center">
      <div class="justify-end flex">
        <button
          class="py-2 px-4 mt-7 items-center text-center font-medium text-sm text-white hover:bg-white duration-300 border rounded-lg bg-blue-btn hover:text-blue-btn hover:border-blue-btn"
        >
          <i class="icon-plus mr-1 text-white"></i>Talaba qo‘shish
        </button>
      </div>
      <table
        class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 mx-auto border-separate border-spacing-y-3"
      >
        <thead class="text-white-exit font-medium text-xs uppercase">
          <tr class="">
            <th scope="col" class="text-center px-4 py-3">#</th>
            <th scope="col" class="text-start px-4 py-3">F.I.SH.</th>
            <th scope="col" class="text-center px-4 py-3">TALABALIK TURI</th>
            <th scope="col" class="text-center px-4 py-3">OTM</th>
            <th scope="col" class="text-center px-4 py-3">
              AJRATILINGAN SUMMA
            </th>
            <th scope="col" class="text-center px-4 py-3">KONTRAKT MIQDORI</th>
            <th scope="col" class="text-center px-4 py-3">AMALLAR</th>
          </tr>
        </thead>
        <tbody class="">
          <tr
            class="py-5 px-4 bg-white"
            v-for="(student, index) in students"
            :key="index"
          >
            <th
              class="rounded-l-lg mt-3 text-center py-5 px-4 font-normal text-sm text-black-sponsors"
            >
              {{ index + 1 }}
            </th>
            <td
              scope="row"
              class="py-5 px-4 text-left font-medium text-sm text-black-sponsors"
            >
              {{ student.fullName }}
            </td>
            <td
              class="py-5 px-4 text-center font-normal text-sm text-black-sponsors"
            >
              {{ student.education }}
            </td>
            <td
              class="py-5 px-4 text-center font-normal text-sm text-black-sponsors"
            >
              {{ student.university }}
            </td>
            <td
              class="py-5 px-4 text-center font-medium text-sm text-black-sponsors"
            >
              {{ student.amount
              }}<span class="font-medium ml-1 text-sm text-white-exit">{{
                student.currency
              }}</span>
            </td>
            <td
              class="py-5 px-4 text-center font-medium text-sm text-black-sponsors"
            >
              {{ student.contract }}<span class="font-medium ml-1 text-sm text-white-exit">{{
                student.currency
              }}</span>
            </td>
            <td
              class="rounded-r-lg py-5 px-4 text-center font-medium text-sm text-black-sponsors"
            >
              <i
                href="#!"
                class="font-medium icon-eye text-blue text-[24px]"
              ></i>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  </main>
</template>

<script setup>
import { ref } from "vue";
const students = ref([
  {
    fullName: "Alimov Abror Xabibullayevich",
    education: "Bakalavr",
    university: "Toshkent shahridagi INHA Universiteti",
    amount: "14 000 000",
    contract: "30 000 000",
    currency: "UZS",
  },
  {
    fullName: "Saimov Rustam Saimjonovich",
    education: "Magistr",
    university: "O’zbekiston milliy universiteti",
    amount: "28 000 000",
    contract: "28 000 000",
    currency: "UZS",
  },
  {
    fullName: "Sanginov Otabek Muratovich",
    education: "Magistr",
    university: "Toshkent davlat texnika universiteti",
    amount: "0",
    contract: "24 000 000",
    currency: "UZS",
  },
  {
    fullName: "Nazarov Sanjar Olimovich",
    education: "Bakalavr",
    university: "Toshkent davlat iqtisodiyot universiteti",
    amount: "20 000 000",
    contract: "25 000 000",
    currency: "UZS",
    status: "Yangi",
  },
  {
    fullName: "Ishmuhammedov Aziz Ishqobilovich",
    education: "Bakalavr",
    university: "O’zbekiston davlat jahon tillari universiteti",
    amount: "0",
    contract: "25 000 000",
    currency: "UZS",
  },

  {
    fullName: "Qosimov Furqat Xabibullayevich",
    education: "Magistr",
    university: "Toshkent davlat sharqshunoslik instituti",
    amount: "1 000 000",
    contract: "10 000 000",
    currency: "UZS",
  },
  {
    fullName: "Ortiqov Abror Bahodirovich",
    education: "Bakalavr",
    university: "Toshkent arxitektura-qurilish instituti",
    amount: "4 000 000",
    contract: "18 000 000",
    currency: "UZS",
  },
  {
    fullName: "Rustamov Oybek  Tajiddinovich",
    education: "Magistr",
    university: "Toshkent to’qimachilik va нngil sanoat istituti",
    amount: "0",
    contract: "21 000 000",
    currency: "UZS",
  },
  {
    fullName: "Isfandiyorov  Iqbol Bobomirzayevich",
    education: "Bakalavr",
    university: "Toshkent avtomobil-yo’llari instituti",
    amount: "14 000 000",
    contract: "22 000 000",
    currency: "UZS",
  },
  {
    fullName: "Ishmuhammedov Aziz Ishqobilovich",
    education: "Bakalavr",
    university: "Toshkent moliya instituti",
    amount: "7 000 000",
    contract: "22 000 000",
    currency: "UZS",
  },
]);
</script>

<style lang="scss" scoped></style>
