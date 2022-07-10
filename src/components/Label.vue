<template>
    <div class="label">
        <span class="text">{{ label }}</span>
        <span class="close" v-if="removable">
            <img src="images/icon-remove.svg" alt="remove" />
        </span>
    </div>
</template>

<script>
export default {
    props: {
        label: String,
        removable: { type: Boolean, default: false },
    },
};
</script>

<style scoped>
.label {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    color: var(--DesaturatedDarkCyan);
    font-size: 0.6rem;
    margin: 0.3rem;
    border-radius: 0.3rem;
    background-color: var(--LightGrayishCyan);
    overflow: hidden;
}

.label:hover {
    cursor: pointer;
    color: var(--LightGrayishCyan);
    background-color: var(--DesaturatedDarkCyan);
}

.text {
    padding: 0.4rem;
}

.close {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.4rem;
    background-color: var(--DesaturatedDarkCyan);
    color: #ffffff;
}

.close:hover {
    background-color: var(--VeryDarkGrayishCyan);
}
</style>
