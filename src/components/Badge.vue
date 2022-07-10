<template>
    <div class="badge" @click="$emit('addFilter', label)">
        {{ label }}
    </div>
</template>

<script>
export default {
    props: ['label'],
};
</script>

<style scoped>
.badge {
    display: inline;
    font-weight: bold;
    color: #ffffff;
    font-size: 0.5rem;
    margin: 0 0.3rem;
    padding: 0.3rem 0.3rem;
    border-radius: 1rem;
    background-color: var(--DesaturatedDarkCyan);
}

.black {
    background-color: #000000;
}
</style>
