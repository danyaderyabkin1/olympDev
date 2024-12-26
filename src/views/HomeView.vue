<script setup lang="ts">
import {ref} from 'vue';
import ListItem from '../components/Item.vue'
import Map from '../components/map.vue'
const items = ref([
  {
    id: 1,
    title: 'ЖК Новая Волна',
    description: `Подземный и наземный паркинги, детские площадки, отвечает всем современным требованиям.
Удобное расположение дома. Школы и детские сады в шаговой доступности, городок Аттрационов, ТЦ Евролэнд и другие магазины, Транспорт и центральные дороги. В нашем жилом комплексе предусмотрен подземный паркинг на 17 машино-мест.
Мы предлагаем квартиры-студии и квартиры, которые варьируются от 28 кв.м. до 74 кв.м.`,
    price:  2855800,
    apart: 266,
    pantry: 14,
    image: '1-1.jpg'
  }
])
const backSite = () => {
  location.href = 'https://xn--37-6kch4bxauj2f.xn--p1ai/'
}
</script>

<template>
  <main>
    <section class="home">
      <div class="home__left">
        <button @click.preve="backSite" class="btn btn-light rounded-5">← Назад на сайт</button>
        <RouterLink class="home__logo" to="/"><img  src="/assets/images/logoBlack.png" alt="logo"></RouterLink>
        <ul class="home__list list-group">
          <ListItem v-for="item in items" :key="item.id" :item="item"/>
        </ul>
      </div>
      <div class="home__right">
        <Map/>
      </div>
    </section>
  </main>

</template>

