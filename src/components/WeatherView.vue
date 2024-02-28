<template>
  <div class="flex justify-between items-center my-5">
    <h2 class="text-blue-500 text-7xl font-bold font-mono">
      {{ temp_celsius }}&deg;C
    </h2>
    <img :src="imgUrl" alt="weather-icon" class="w-36 h-36" />
  </div>
</template>

<script setup>
import { onMounted, watch } from "vue";
import { useWeather } from "../hooks/useWeather";
import { ref } from "vue";
import axios from "axios";

const temp_celsius = ref("");
const imgUrl = ref("");

const temp_kelvin = ref(273.15);

const { getAllWeather } = useWeather();

const getWeather = async () => {
  const weather = await getAllWeather("Tashkent", 1);

  temp_celsius.value = weather.data.list[0].main.temp - temp_kelvin.value;
  temp_celsius.value = Math.round(temp_celsius.value);

  try {
    const icon = await axios.get(
      `https://openweathermap.org/img/wn/${weather.data.list[0].weather[0].icon}@2x.png`
    );
    imgUrl.value = icon.request.responseURL;
  } catch (error) {
    console.log(error);
  }
};

onMounted(() => {
  getWeather();
});
</script>
