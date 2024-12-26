<script setup lang="ts">
import Slider from "primevue/slider";
import {ref, watch} from "vue";
const emit = defineEmits(['changeType', 'changeCount', 'changeFloors', 'changeAside'])

const type = ref('')
const count = ref(0)
const visibleAside = ref(false)


const valueFloor = ref([1, 14]);
const valueArea = ref([26, 140]);

watch(() => type.value, () => {
  emit('changeType', type.value)
})
watch(() => count.value, () => {
  emit('changeCount', count.value)
})
watch(() => valueFloor.value, () => {
  emit('changeFloors', valueFloor.value)
})
</script>

<template>
  <div class="plans__filter">
    <button @click.prevent="emit('changeAside', !visibleAside)" class="btn btn-open d-lg-none p-0">
      <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.83334 17.5H29.1667M5.83334 11.6667H29.1667M5.83334 23.3334H17.5" stroke="black" stroke-width="2.91667" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </button>
    <div class="plans__filter-block">
      <span>Тип</span>
      <div class="d-flex gap-2">
        <button @click.prevent="type = 'Квартира'" :class="{active: type === 'Квартира'}" class="btn btn-outline-secondary">Квартира</button>
        <button @click.prevent="type = 'Студия'" :class="{active: type === 'Студия'}" class="btn btn-outline-secondary">Студия</button>
      </div>
    </div>
    <div class="plans__filter-block">
      <span>Комнат</span>
      <div class="d-flex gap-2">
        <button @click.prevent="count = 1" :class="{active: count === 1}" class="btn btn-outline-secondary">1</button>
        <button @click.prevent="count = 2" :class="{active: count === 2}" class="btn btn-outline-secondary">2</button>
        <button @click.prevent="count = 3" :class="{active: count === 3}" class="btn btn-outline-secondary">3</button>
      </div>
    </div>
    <div class="plans__filter-block range">
      <span>Этаж</span>
      <div class="d-flex justify-content-between mb-1">
        <button class="btn btn-secondary btn-sm" disabled>{{valueFloor[0]}}</button>
        <button class="btn btn-secondary btn-sm" disabled>{{valueFloor[1]}}</button>
      </div>
      <div class="card flex justify-center">
        <Slider v-model="valueFloor" :max="14" :min="1" range />
      </div>
    </div>
    <div class="plans__filter-block range">
      <span>Площадь, м<sup>2</sup> </span>
      <div class="d-flex justify-content-between mb-1">
        <button class="btn btn-secondary btn-sm" disabled>{{valueArea[0]}}</button>
        <button class="btn btn-secondary btn-sm" disabled>{{valueArea[1]}}</button>
      </div>
      <div class="card flex justify-center">
        <Slider v-model="valueArea" :min="26" :max="140" range />
      </div>
    </div>

  </div>

</template>

<style scoped>

</style>