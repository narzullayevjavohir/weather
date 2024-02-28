<template>
  <div class="w-full h-26 rounded-2xl bg-slate-100 flex flex-row">
    <div v-for="(weather, i) in weatherList" :key="i">
      <WeatherDayCard :weather="weather" />
    </div>
  </div>
</template>

<script setup>
import WeatherDayCard from "./WeatherDayCard.vue";
import { useWeather } from "../hooks/useWeather";
import { onMounted, ref } from "vue";

const { weatherRegion } = defineProps(["weatherRegion"]);

const weatherList = ref([]);

const { getAllWeather } = useWeather();

const getWeather = async () => {
  await getAllWeather(weatherRegion).then((weather) =>
    weatherList.value.push(...weather.data.list)
  );
};

onMounted(() => {
  getWeather();
});
</script>
