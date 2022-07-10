<template>
    <div class="filters">
        <div class="filter-labels">
            <Label
                v-for="filter of filters"
                :label="filter"
                :key="filter"
                removable
                @click="$emit('removeFilter', filter)"
            />
        </div>
        <a href="#" @click.prevent="$emit('clear')">Clear</a>
    </div>
</template>

<script>
import Label from './Label.vue';
export default {
    props: ['filters'],
    components: {
        Label,
    },
};
</script>

<style>
.filters {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem 1rem;
    margin: -1rem 2rem 2rem 2rem;
    border-radius: 0.3rem;
    background-color: #ffffff;
    box-shadow: var(--BoxShadow);
    display: flex;
}
</style>
