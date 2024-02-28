<template>
  <div class="w-18 h-full px-6 py-2 flex items-center flex-col">
    <h3>{{ time }}</h3>
    <p>{{ temp_celsius }}&deg;C</p>
    <img :src="imgUrl" alt="weather-icon" class="w-14 h-14 object-cover" />
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import axios from "axios";
const { weather } = defineProps(["weather"]);
const temp_celsius = ref("");
const imgUrl = ref("");
const time = ref("");
const temp_kelvin = ref(273.15);

onMounted(async () => {
  try {
    const icon = await axios.get(
      `https://openweathermap.org/img/wn/${weather["weather"][0]["icon"]}@2x.png`
    );
    imgUrl.value = icon.request.responseURL;
  } catch (error) {
    console.log(error);
  }
});

time.value = weather["dt_txt"].split(" ")[1].slice(0, 5);
temp_celsius.value = Math.round(weather["main"]["temp"] - temp_kelvin.value);
</script>
