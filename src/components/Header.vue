<template>
    <div class="header"></div>
</template>

<style>
.header {
    height: 150px;
    background-color: var(--DesaturatedDarkCyan);
    background-image: url('../assets/bg-header-desktop.svg');
    background-size: cover;
    background-repeat: no-repeat;
}

@media only screen and (max-width: 400px) {
    .header {
        background-image: url('../assets/bg-header-mobile.svg');
    }
}
</style>
