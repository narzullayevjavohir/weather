<template>
  <div class="w-full h-48 mt-5 rounded-2xl bg-slate-100 p-4">
    <div class="grid grid-rows-4 gap-x-10 grid-flow-col w-full h-full">
      <div
        v-for="(time, i) in timeList"
        :key="i"
        class="h-5 flex justify-between items-center"
      >
        <h2>
          {{ time ? time.week + ", " + time.day : "" }}
        </h2>

        <div class="flex justify-between items-center w-24">
          <img :src="imgUrl" alt="weather-icon" class="w-12 h-12" />
          <h3>
            {{ Math.floor(time.list.main.temp) > 0 ? "+" : "-" }}
            {{ Math.floor(time.list.main.temp - 273.15) }}
            &deg;C
          </h3>
        </div>
      </div>
    </div>
  </div>
  <!-- <div class="h-[90%] border border-slate-200 flex items-center"></div> -->
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useWeather } from "../hooks/useWeather";
import { weeks } from "../constants";
import axios from "axios";

const { weatherRegion } = defineProps(["weatherRegion"]);

const { getAllWeather } = useWeather();

const timeList = ref([]);
const imgUrl = ref("");

function getWeeks() {}

const getWeather = async () => {
  const time = new Date();
  await getAllWeather(weatherRegion, 8).then((weather) => {
    for (let i = 0; i < 8; i++) {
      timeList.value.push({
        day: time.getDate() > 10 ? time.getDate() : "0" + time.getDate(),
        week: weeks[time.getDay()],
        list: weather.data.list[i],
      });
      time.setDate(time.getDate() + 1);
    }
  });
  try {
    timeList.value.map(async (w, i) => {
      const icon = await axios.get(
        `https://openweathermap.org/img/wn/${w.list.weather[0].icon}@2x.png`
      );
      imgUrl.value = icon.request.responseURL;
    });
  } catch (error) {
    console.log(error);
  }
};

getWeeks();
onMounted(() => {
  getWeather();
});
</script>
