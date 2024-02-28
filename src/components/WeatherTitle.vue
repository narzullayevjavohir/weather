<template>
  <div>
    <h1 class="text-2xl font-bold">Toshkent Shahri</h1>
    <p>{{ day }}, {{ date }}-{{ month }}</p>
  </div>
</template>

<script setup>
import { months, weeks } from "../constants";

const getTime = () => {
  const time = new Date();
  const day = time.getDay();
  const month = time.getMonth();
  const date = time.getDate();
  return {
    day: weeks[day],
    date,
    month: months[month],
  };
};

const { day, date, month } = getTime();
</script>
