<template>
  <div class="flex items-center justify-between px-10 py-2">
    <label for="option" class="text-lg">{{ region }}</label>
    <input
      type="radio"
      name="option"
      :value="region"
      v-model="isRadioValue"
      class="w-4 h-4"
      @change="handleChange"
    />
  </div>
</template>

<script setup>
import { defineProps, ref, getCurrentInstance } from "vue";

const { region, weatherRegion } = defineProps(["region", "weatherRegion"]);

let isRadioValue = ref(weatherRegion || "Toshkent");

const handleChange = () => {
  const selectedRegion = isRadioValue.value;
  // Access the Vue instance using getCurrentInstance
  const instance = getCurrentInstance();
  if (instance) {
    // Emit the custom event from the Vue instance
    instance.emit("updateWeather", selectedRegion);
  }
};
</script>
