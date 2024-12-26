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
  center: [40.99, 57.00],
  zoom: 14,
};

const markersGeoJsonSource = [
  {
    coordinates: [40.98, 57.01] as LngLat,
    color: '#0d6efd',
    title: 'ЖК Континент 5',
  },
  {
    coordinates: [40.98, 56.99] as LngLat,
    color: '#0d6efd',
    title: 'ЖК Олимпийский',
  },
  {
    coordinates: [40.975, 56.9952] as LngLat,
    color: '#0d6efd',
    title: 'ЖК Фаворит',
  },
  {
    coordinates: [40.99, 56.985] as LngLat,
    color: '#0d6efd',
    title: 'ЖК Континент 7',
  },
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