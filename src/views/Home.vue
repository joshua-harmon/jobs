<template>
    <Header />
    <Filters
        :filters="filters"
        @removeFilter="removeFilter"
        @clear="clear"
        v-if="filters.size > 0"
    />
    <JobList @addFilter="addFilter" :filters="filters" />
    <Attribution />
</template>

<script>
import Attribution from '../components/Attribution.vue';
import Filters from '../components/Filters.vue';
import JobList from '../components/JobList.vue';
import Header from '../components/Header.vue';
export default {
    data() {
        return {
            filters: new Set(),
        };
    },
    methods: {
        addFilter(filter) {
            this.filters.add(filter);
        },
        removeFilter(filter) {
            this.filters.delete(filter);
        },
        clear() {
            this.filters.clear();
        },
    },
    components: {
        Header,
        Filters,
        JobList,
        Attribution,
    },
};
</script>

<style></style>
