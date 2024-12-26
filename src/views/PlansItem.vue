<script setup lang="ts">
import Image from 'primevue/image';
import {computed, ref} from 'vue';
import {useRoute} from "vue-router";
import {numberFormat} from "@/helpers/numberFormat";
import Filter from '../components/Filter.vue'

const route = useRoute()

const typeApart = ref('')
const countApart = ref(0)
const floorApart = ref([])
const asideApart = ref(false)


const items = ref([
  {
    id: 11,
    parentId: 1,
    title: '1-комнатная',
    count: 1,
    description: 'Континент 5',
    price: 3855800,
    image: 'flor.jpg',
    type: 'Студия',
    floor: 11,
    square: 40
  },
  {
    id: 12,
    parentId: 1,
    title: '2-комнатная',
    count: 2,
    description: 'Континент 5',
    price: 7043900,
    image: 'sec.jpg',
    type: 'Квартира',
    floor: 7,
    square: 72
  },
  {
    id: 13,
    parentId: 1,
    title: '3-комнатная',
    count: 3,
    description: 'Континент 5',
    price: 11112500,
    image: 'th.jpg',
    type: 'Квартира',
    floor: 9,
    square: 118
  },
  {
    id: 21,
    parentId: 2,
    title: '1-комнатная',
    count: 1,
    description: 'Континент 5',
    price: 4855800,
    image: 'f1.jpg',
    type: 'Студия',
    floor: 4,
    square: 39
  },
  {
    id: 22,
    parentId: 2,
    title: '2-комнатная',
    count: 2,
    description: 'Континент 5',
    price: 9043900,
    image: 'sc1.jpg',
    type: 'Квартира',
    floor: 1,
    square: 76
  },
  {
    id: 23,
    parentId: 2,
    title: '3-комнатная',
    count: 3,
    description: 'Континент 5',
    price: 12112500,
    image: 'th1.jpg',
    type: 'Квартира',
    floor: 2,
    square: 123
  },
  {
    id: 31,
    parentId: 3,
    title: '1-комнатная',
    count: 1,
    description: 'Континент 5',
    price: 5855800,
    image: 'f3.jpg',
    type: 'Студия',
    floor: 5,
    square: 43
  },
  {
    id: 32,
    parentId: 3,
    title: '2-комнатная',
    count: 2,
    description: 'Континент 5',
    price: 8043900,
    image: 'sc2.jpg',
    type: 'Квартира',
    floor: 3,
    square: 86
  },
  {
    id: 33,
    parentId: 3,
    title: '3-комнатная',
    count: 3,
    description: 'Континент 5',
    price: 15112500,
    image: 'th3.jpg',
    type: 'Квартира',
    floor: 14,
    square: 139
  },
])
const changeType = (type: string) => {
  typeApart.value = type
}
const changeCount = (count: number) => {
  countApart.value = count
}
const changeFloors = (floor: any) => {
  floorApart.value = floor
}
const changeAside = (param: boolean) => {
  console.log(param)
  asideApart.value = param
}
const currentHouses = computed(() => {
      return items.value.filter(el => el.parentId == route.params.id)
})
const currentHousesType = computed(() => {
      return currentHouses.value.filter(el => el.type == typeApart.value)
})
const currentHousesCount = computed(() => {
  return currentHouses.value.filter(el => el.count == countApart.value && el.type == typeApart.value)
})
const currentHousesFloors = computed(() => {
  return currentHouses.value.filter(el => el.floor >= floorApart.value[0] && el.floor <= floorApart.value[1] && el.type == typeApart.value && el.count == countApart.value)
})
</script>

<template>
  <main>
    <section class="plans">
      <aside :class="{visible: asideApart}" class="aside">
        <button @click.prevent="asideApart = false" class="btn btn-close d-lg-none">

        </button>
        <RouterLink class="home__logo" to="/"><img  src="/src/assets/images/logo.png" alt="logo"></RouterLink>
        <div class="aside__body">
          <RouterLink to="/" class="btn aside__btn">← Все объекты</RouterLink>
          <ul class="aside__list list-group">
            <li v-for="item in 3">
              <button class="btn">
                <svg width="61" height="61" viewBox="0 0 61 61" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                      d="M32.3422 28.4392V26.5642C32.3422 25.5292 31.5022 24.6892 30.4672 24.6892H19.2172C18.1822 24.6892 17.3422 25.5292 17.3422 26.5642V28.4392C17.3422 29.4742 18.1822 30.3142 19.2172 30.3142H30.4672C31.5022 30.3142 32.3422 29.4742 32.3422 28.4392ZM19.2172 26.5642H30.4672V28.4392H19.2172V26.5642ZM24.8422 20.9392V19.0642C24.8422 18.0292 24.0022 17.1892 22.9672 17.1892H11.7172C10.6822 17.1892 9.84216 18.0292 9.84216 19.0642V20.9392C9.84216 21.9742 10.6822 22.8142 11.7172 22.8142H22.9672C24.0022 22.8142 24.8422 21.9742 24.8422 20.9392ZM11.7172 19.0642H22.9672V20.9392H11.7172V19.0642ZM43.5922 35.9392V34.0642C43.5922 33.0292 42.7522 32.1892 41.7172 32.1892H30.4672C29.4322 32.1892 28.5922 33.0292 28.5922 34.0642V35.9392C28.5922 36.9742 29.4322 37.8142 30.4672 37.8142H41.7172C42.7522 37.8142 43.5922 36.9742 43.5922 35.9392ZM30.4672 34.0642H41.7172V35.9392H30.4672V34.0642ZM51.0922 9.68921H47.3422V6.87671C47.3422 6.35921 46.9222 5.93921 46.4047 5.93921C45.8872 5.93921 45.4672 6.35921 45.4672 6.87671V9.68921H43.5922V6.87671C43.5922 6.35921 43.1722 5.93921 42.6547 5.93921C42.1372 5.93921 41.7172 6.35921 41.7172 6.87671V9.68921H19.2172V6.87671C19.2172 6.35921 18.7972 5.93921 18.2797 5.93921C17.7622 5.93921 17.3422 6.35921 17.3422 6.87671V9.68921H15.4672V6.87671C15.4672 6.35921 15.0472 5.93921 14.5297 5.93921C14.0122 5.93921 13.5922 6.35921 13.5922 6.87671V9.68921H9.84216C6.73529 9.68921 4.21716 12.2073 4.21716 15.3142V47.1892C4.21716 50.2961 6.73529 52.8142 9.84216 52.8142H51.0922C54.199 52.8142 56.7172 50.2961 56.7172 47.1892V15.3142C56.7172 12.2073 54.199 9.68921 51.0922 9.68921ZM54.8422 47.1892C54.8422 49.2611 53.164 50.9392 51.0922 50.9392H9.84216C7.77029 50.9392 6.09216 49.2611 6.09216 47.1892V15.3142C6.09216 13.2423 7.77029 11.5642 9.84216 11.5642H51.0922C53.164 11.5642 54.8422 13.2423 54.8422 15.3142V47.1892ZM49.2172 39.6892H43.5922C42.5572 39.6892 41.7172 40.5292 41.7172 41.5642V43.4392C41.7172 44.4742 42.5572 45.3142 43.5922 45.3142H49.2172C50.2522 45.3142 51.0922 44.4742 51.0922 43.4392V41.5642C51.0922 40.5292 50.2522 39.6892 49.2172 39.6892ZM49.2172 43.4392H43.5922V41.5642H49.2172V43.4392Z"
                      fill="currentColor"/>
                </svg>
                <span>Генплан</span>
              </button>
            </li>
          </ul>
          <router-link to='/' class="btn aside__btn back-site">← На сайт</router-link>
        </div>
        <div class="aside__footer text-center">
          <p class="text-black-50 mb-0">ОТДЕЛ ПРОДАЖ</p>
          <a href="tel:+79999999999">+7(999)999-99-99</a>
          <span class="text-black-50 d-inline-block text-center"><a href="https://moovix.ru/" target="_blank">Сделано в Moovix</a></span>
        </div>

      </aside>
      <div class="plans__wrapper">
        <Filter @change-type="changeType" @change-count="changeCount" @change-floors="changeFloors" @changeAside="changeAside"/>
        <div class="plans__list">
          <ul class="list-group">

            <li v-if="typeApart && !countApart" v-for="item in currentHousesType" :key="item.id">
              <div class="card">
                <Image :src="`./../assets/images/${item.image}`" alt="Image" preview/>
                <div class="card-body">
                  <h5 class="card-title">{{ item.title }}</h5>
                  <p class="card-text">{{ item.description }}</p>
                  <h6>{{ numberFormat(item.price) }}</h6>
                </div>
              </div>
            </li>
            <li v-else-if="typeApart && countApart" v-for="item in currentHousesCount" :key="item.id">
              <div class="card">
                <Image :src="`./../assets/images/${item.image}`" alt="Image" preview/>
                <div class="card-body">
                  <h5 class="card-title">{{ item.title }}</h5>
                  <p class="card-text">{{ item.description }}</p>
                  <h6>{{ numberFormat(item.price) }}</h6>
                </div>
              </div>
            </li>
            <li v-else-if="!typeApart && !countApart" v-for="item in currentHouses" :key="item.id">
              <div class="card">
                <Image :src="`./../assets/images/${item.image}`" alt="Image" preview/>
                <div class="card-body">
                  <h5 class="card-title">{{ item.title }}</h5>
                  <p class="card-text">{{ item.description }}</p>
                  <h6>{{ numberFormat(item.price) }}</h6>
                </div>
              </div>
            </li>
            <li v-else v-for="item in currentHouses" :key="item.id">
              <div class="card">
                <Image :src="`./../assets/images/${item.image}`" alt="Image" preview/>
                <div class="card-body">
                  <h5 class="card-title">{{ item.title }}</h5>
                  <p class="card-text">{{ item.description }}</p>
                  <h6>{{ numberFormat(item.price) }}</h6>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>

</style>