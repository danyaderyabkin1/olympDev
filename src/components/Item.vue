<script setup lang="ts">
import {numberFormat} from "@/helpers/numberFormat";

import Image from "primevue/image";
const props = defineProps({
  item: {
    type: Object
  }
})
</script>

<template>
  <li>
    <Image :src="`assets/images/${item.image}`" alt="Image" preview />
    <div class="home__list-wrap">
      <h3><RouterLink :to="`/plans/${item.id}`">{{item.title}}</RouterLink></h3>
      <p>{{item.description}}</p>
      <div><strong>от {{numberFormat(item.price)}}</strong> <strong>•</strong><RouterLink :to="`/plans/${item.id}`">{{item.apart}} квартиры</RouterLink></div>
      <RouterLink class="link-small" :to="`/plans/${item.id}`">{{item.pantry}} кладовых</RouterLink>
      <RouterLink :to="`/plans/${item.id}`" class="btn btn-primary">Открыть каталог</RouterLink>
    </div>
  </li>
</template>

<style scoped>

</style>