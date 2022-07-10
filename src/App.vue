<template>
  <div>
    <header>
    </header>
    <JobList></JobList>
  </div>
</template>

<script>
import JobList from './components/JobList.vue'

export default {
  name: 'App',
  components: {
    JobList
  }
}
</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Spartan:wght@400;700&display=swap');

#app {
  font-family: 'Spartan', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  
}

:root {
    --desaturatedDarkCyan: hsl(180, 29%, 50%);
    --lightGrayishCyanBg: hsl(180, 52%, 96%); /* bg */
    --lightGrayishCyan: hsl(180, 31%, 95%); /* filter, tables */
    --darkGrayishCyan: hsl(180, 8%, 52%);
    --veryDarkGrayishCyan: hsl(180, 14%, 20%);
}

* { 
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body {
    background-color: var(--lightGrayishCyanBg);
    font-family: 'Spartan', sans-serif;

    display: flex;
    align-items: center;
    justify-content: center;
}

header {
  height: 150px;
  width: 100vw;
  background-color: var(--desaturatedDarkCyan);
  background-image: url(../public/images/bg-header-desktop.svg);
  background-repeat: no-repeat;
  background-size: cover;

  margin-bottom: 3rem;
}

@media(max-width: 600px) {
  header {
    background-image: url(../public/images/bg-header-mobile.svg);
  }
}

</style>
