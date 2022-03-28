<template>
    <div class="jobs-list">
        Ordered by {{ order }}
        <transition-group name="list" tag="ul">
            <li v-for="job in orderedJobs" :key="job.id">
                <h2>{{ job.title }} in {{ job.location }}</h2>
                <div class="salary">
                    <img src="../assets/rupee.svg" alt="rupee logo">
                    <p> {{ job.salary }} Rupees</p>
                </div>
                <div class="description">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, rem? Aut illum quae, et ipsum nihil dolorem? Accusamus molestias eligendi id nulla ducimus eius tenetur, odit alias quo quam corrupti.</p>
                </div>
            </li>
        </transition-group>
    </div>
    
</template>

<script lang="ts">
import { computed, defineComponent, Prop, PropType } from 'vue'
import Job from '../types/Job'
import OrderTerm from '../types/OrderTerm'

export default defineComponent({
    props: {
        jobs: {
            required: true,
            type: Array as PropType<Job[]>
        },
        order: {
            required: true,
            type: String as PropType<OrderTerm>
        }
    },
    setup(props) {
        const orderedJobs = computed(() => {
            return [...props.jobs].sort((a: Job, b: Job) => {
                return a[props.order] > b[props.order] ? 1 : -1
            })
        })
        return { orderedJobs }
    }
})
</script>

<style scoped>
.list-move {
    transition: all 1s;
}
.jobs-list {
    max-width: 960px;
    margin: 40px auto;
}
.jobs-list ul {
    padding: 0;
}
.jobs-list li {
    list-style-type: none;
    background: white;
    padding: 16px;
    margin: 16px 0;
    border-radius: 4px;
}
.jobs-list h2 {
    margin: 0 0 10px;
    text-transform: capitalize;
}
.salary {
    display: flex;
}
.salary img { 
    width: 30px;
}
.salary p {
    color: #17bf66;
    font-weight: bold;
    margin: 10px 4px;
}
</style>