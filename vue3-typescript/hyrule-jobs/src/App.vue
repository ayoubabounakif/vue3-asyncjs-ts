<template>
  <div class="app">
    <header>
      <div class="title">
        <img alt="Site Logo" src="./assets/heart.svg">
        <h1>Hyrule Jobs</h1>
      </div>
      <div class="order">
        <button @click="handleClick('title')"> Order by Title </button>
        <button @click="handleClick('salary')"> Order by Salary </button>
        <button @click="handleClick('location')"> Order by Location </button>
      </div>
    </header>
    <JobsList :jobs="jobs" :order="order" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

import Job from './types/Job'
import JobsList from './components/JobsList.vue'
import OrderTerm from './types/OrderTerm'

export default defineComponent({
  name: 'App',
  components: { JobsList },
  setup() {
    const jobs = ref<Job[]>([
      { title: 'Farm Worker', location: 'Lon Lon Ranch', salary: 30000, id: '1' },
      { title: 'Quarryman', location: 'Death Mountain', salary: 40000, id: '2' },
      { title: 'Flute Player', location: 'The Lost Woods', salary: 35000, id: '3' },
      { title: 'Prison Guard', location: 'Gerudo Valley', salary: 32000, id: '4' }
    ])
    const order = ref<OrderTerm>('title');
    const handleClick = (term: OrderTerm) => {
      order.value = term;
    }

    return { jobs, handleClick , order }
  },


  
});
</script>

<style>

@font-face {
  font-family: HyliaSerif;
  src: url("./assets/HyliaSerifBeta-Regular.otf") format("opentype");
}

header {
  text-align: center
}
header .order {
  margin-top: 20px;
}
header .title {
  display: flex;
  justify-content: center;
}
header img {
  width: 60px;
  margin-right: 20px;
}
header h1 {  
  font-size: 3em;
}
h1 {
  font-family: HyliaSerif;
  letter-spacing: 4px;
}
button {
  margin: 0 5px;
  color: black;
  border: none;
  background: #d5f0ff;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;

}

body {
  font-family: Avenir;
  background: #ece6d9;
}
</style>
