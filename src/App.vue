<template>
  <div class="flex flex-row h-screen w-full">
    <div class="w-[75%] flex flex-col px-10 xl:px-48 lg:px-40 md:px-20 py-10">
      <WeatherTitle />
      <WeatherView />
      <WeatherDay />
      <WeatherWeek />
    </div>
    <div class="w-[25%] xl:w-[600px]">
      <WeatherSide />
    </div>
  </div>
</template>

<script setup>
import WeatherTitle from "./components/WeatherTitle.vue";
import WeatherView from "./components/WeatherView.vue";
import WeatherDay from "./components/WeatherDay.vue";
import WeatherWeek from "./components/WeatherWeek.vue";
import WeatherSide from "./components/WeatherSide.vue";
</script>
