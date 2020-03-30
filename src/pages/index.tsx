import React, { Component } from "react"

import { Layout } from "~/components/Layout/Layout"

import place_1 from "~/assets/images/place_1.jpg"
import place_2 from "~/assets/images/place_2.jpg"
import place_3 from "~/assets/images/place_3.jpg"
import place_4 from "~/assets/images/place_4.jpg"
import place_5 from "~/assets/images/place_5.jpg"
import place_6 from "~/assets/images/place_6.jpg"
import place_7 from "~/assets/images/place_7.jpg"
import place_8 from "~/assets/images/place_8.jpg"
import place_9 from "~/assets/images/place_9.jpg"
import place_10 from "~/assets/images/place_10.jpg"

import new_1 from "~/assets/images/new_1.jpg"
import new_2 from "~/assets/images/new_2.jpg"
import new_3 from "~/assets/images/new_3.jpg"

const places = [
  {
    id: 'place_1',
    image: place_1,
    title: 'Невьянская башня',
    text: 'Остатки прошлого величия промышленников Демидовых'
  },
  {
    id: 'place_2',
    image: place_2,
    title: 'Ганина яма',
    text: 'В 1918 году в шахту бросили останки представителей царской династии Романовых'
  },
  {
    id: 'place_3',
    image: place_3,
    title: 'Верхотурье',
    text: 'Духовный центр России'
  },
  {
    id: 'place_4',
    image: place_4,
    title: 'Аркаим',
    text: 'Город древних цивилизаций'
  },
  {
    id: 'place_5',
    image: place_5,
    title: 'Оленьи ручьи',
    text: 'Красивый парк с памятниками древней истории'
  },
  {
    id: 'place_6',
    image: place_6,
    title: 'Конжаковский камень',
    text: 'Высшая точка Свердловской области'
  },
  {
    id: 'place_7',
    image: place_7,
    title: 'Качканар',
    text: 'Причудливые скальные останцы и буддийский монастырь'
  },
  {
    id: 'place_8',
    image: place_8,
    title: 'Зюраткуль',
    text: 'Горный хребет и озеро'
  },
  {
    id: 'place_9',
    image: place_9,
    title: 'Аракульский Шихан',
    text: 'Живописная скальная стена с причудливыми формами'
  },
  {
    id: 'place_10',
    image: place_10,
    title: 'Граница Европы и Азии',
    text: 'Монументы и стеллы на магистралях'
  }
];

const news = [
  {
    id: 'new_1',
    image: new_1,
    title: '10 мест для прогулок',
    text: 'Парки, тихие улицы, чтобы отправиться на пробежку или плэнер'
  },
  {
    id: 'new_2',
    image: new_2,
    title: 'Где пробовать настоящую уральскую кухню',
    text: 'Пельмени, кулебяки шаньги: традиционные рецепты народов Урала'
  },
  {
    id: 'new_3',
    image: new_3,
    title: 'Портал',
    text: 'Арт-объект фестиваля Стеннография'
  }
];

export default class extends Component {
  render() {
    return (
      <Layout></Layout>
    )
  }
}
