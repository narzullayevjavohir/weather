<template>
  <div class="flex items-center justify-between px-10 py-2">
    <label for="option" class="text-lg">{{ region }}</label>
    <input
      type="radio"
      name="option"
      :value="region"
      v-model="isRadioValue"
      class="w-4 h-4"
    />
  </div>
</template>

<script setup>
import { ref, watch } from "vue";

const { region } = defineProps(["region"]);

const isRadioValue = ref("Toshkent");

watch(
  () => isRadioValue.value,
  () => {
    console.log(isRadioValue.value);
  }
);
</script>
