<script setup lang="ts">
import {ref} from 'vue';
import ListItem from '../components/Item.vue'
import Map from '../components/map.vue'
const items = ref([
  {
    id: 1,
    title: 'ЖК Континент 5',
    description: 'Легендарный жилой комплекс "Континент-5" – новый клубный дом, продолжающий застройку одного из самых известных кварталов бизнес-класса в центре города Иваново. Пятый «Континент» расположится в Конспиративном переулке на закрытой территории. Будет насчитывать всего 63 квартиры повышенной комфортности. На цокольном этаже запроектировано 36 кладовых, которые можно приобрести в собственность.',
    price:  5855800,
    apart: 33,
    pantry: 30,
    image: 'img1.webp'
  },
  {
    id: 2,
    title: 'ЖК Олимпийский',
    description: 'Жилой комплекс «ОЛИМПИЙСКИЙ» — это каскад из шести 14-этажных кирпичных домов, расположенный в Ленинском районе на улице Павла Большевикова, в одной из самых развитых частей города Иваново.',
    price:  4043900,
    apart: 256,
    pantry: 144,
    image: 'olymp.jpeg'
  },
  {
    id: 3,
    title: 'ЖК Фаворит',
    description: 'Новый жилой комплекс «Фаворит, литер 2» от застройщика «ГК Олимп» расположен по адресу: г. Иваново, 1-й переулок Спартака.',
    price:  5112500,
    apart: 105,
    pantry: 37,
    image: 'favor.jpeg'
  },
  {
    id: 4,
    title: 'ЖК Континент 7',
    description: 'Легендарный жилой комплекс "Континент-5" – новый клубный дом, продолжающий застройку одного из самых известных кварталов бизнес-класса в центре города Иваново.',
    price:  6112500,
    apart: 26,
    pantry: 31,
    image: 'img1.webp'
  },
])

</script>

<template>
  <main>
    <section class="home">
      <div class="home__left">
<!--        <button class="btn btn-light btn-lg rounded-5">← Назад на сайт</button>-->
        <RouterLink class="home__logo" to="/"><img  src="/src/assets/images/logo.png" alt="logo"></RouterLink>
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
