<template>
    <div class="list">
        <JobCard
            v-for="job in filteredList"
            :key="job.id"
            :job="job"
            @addFilter="(event) => $emit('addFilter', event)"
        />
    </div>
</template>

<script>
import JobCard from './JobCard.vue';
import jobData from '../data/data.json';

export default {
    data() {
        return { jobData };
    },
    props: ['filters'],
    computed: {
        filteredList() {
            return this.filters.size === 0
                ? this.jobData
                : this.jobData.filter((job) =>
                      [...this.filters].every((filter) =>
                          [
                              job.role,
                              job.level,
                              ...job.languages,
                              ...job.tools,
                          ].includes(filter)
                      )
                  );
        },
    },
    components: {
        JobCard,
    },
};
</script>

<style>
.list {
    width: 100%;
    background-color: var(--LightGrayishCyan);
}
</style>
