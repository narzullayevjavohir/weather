<template>
  <div class="w-full h-full bg-slate-100">
    <h1 class="pt-9 pl-9 mb-3 font-bold font-serif tracking-wider text-3xl">
      Hududlar
    </h1>
    <div v-for="(region, i) in regions" :key="i">
      <WeatherSelect :region="region" />
    </div>
  </div>
</template>

<script setup>
import { regions } from "../constants";
import WeatherSelect from "./WeatherSelect.vue";
</script>
