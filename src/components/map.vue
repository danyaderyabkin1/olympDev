<script setup lang="ts">
import {
  YandexMap,
  YandexMapDefaultFeaturesLayer,
  YandexMapDefaultMarker,
  YandexMapDefaultSchemeLayer,
} from 'vue-yandex-maps';
import type { LngLat } from '@yandex/ymaps3-types';
import type { YMapLocationRequest } from '@yandex/ymaps3-types/imperative/YMap';
import {ref} from "vue";

const LOCATION: YMapLocationRequest = {
  center: [41.018, 56.9662],
  zoom: 14,
};

const markersGeoJsonSource = [
  {
    coordinates: [41.01825, 56.96637] as LngLat,
    color: '#0d6efd',
    title: 'ЖК Новая Волна',
  }
];
</script>

<template>
  <yandex-map
      width="100%"
      height="100%"
      :settings="{
        location: LOCATION,
        showScaleInCopyrights: true,
    }"
  >
    <yandex-map-default-scheme-layer/>
    <yandex-map-default-features-layer/>
    <yandex-map-default-marker
        v-for="marker in markersGeoJsonSource"
        :key="marker.title"
        :settings="marker"
    />
  </yandex-map>
</template>

<style scoped>

</style>