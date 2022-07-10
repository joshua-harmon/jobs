<template>
    <div class="card-content">
        <div class="card d-flex" v-bind:class="{ featuredBorder: featuredTag }" >
            
            <div class="card-header">

                <div class="img-rounded">
                    <img :src="logo" :alt="company" />
                </div>

                <div class="job-info">
                
                    <div class="d-flex">
                        <div class="job-title">
                            <h3>{{ company }}</h3>
                        </div>

                        <div v-if="newTag">
                            <span class="new uppercase f-light f-8 p-3-8 br-1 t-center">
                                new
                            </span>
                        </div>
                        <div v-if="featuredTag">
                            <span class="featured uppercase f-light f-8 p-3-8 br-1 t-center">
                                featured
                            </span>
                        </div>

                    </div>

                    <div>
                        <a href="#" class="job-name">
                            {{ position }}
                        </a>
                    </div>

                    <div class="job-info__details">
                        {{ postedAt }} <span></span> {{ contract }} <span></span> {{ location }}
                    </div>
                </div>

            </div>

            <div>

                <div class="d-flex f-wrap">

                    <div>
                        <button @click="filter(role, 'role')"  class="tag">
                            {{ role }}
                        </button>
                    </div>

                    <div >
                        <button @click="filter(level, 'level')" class="tag">
                            {{ level }}
                        </button>
                    </div>

                    <div v-if="languages" >
                        <button @click="filter(language, 'languages')" class="tag" 
                        v-for="(language, index) in languages" :key="index">
                            {{ language }}
                        </button>
                    </div>

                    <div v-if="tools" >
                        <button @click="filter(tool, 'tools')" class="tag" 
                            v-for="(tool, index) in tools" :key="index">
                            {{ tool }}
                        </button>
                    </div>

                </div>

            </div>

        </div>
    </div>
</template>

<script>
export default {
    name: "Card",
    props: {
        id: {
            type: Number,
            required: true
        },
        company: {
            type: String,
            required: true
        },
        position: {
            type: String,
            required: true
        },
        logo: {
            type: String,
            required: true
        },
        newTag: {
            type: Boolean,
            required: false
        },
        featuredTag: {
            type: Boolean,
            required: false
        },
        postedAt: {
            type: String,
            required: true
        }, 
        contract: {
            type: String,
            required: true
        }, 
        location: {
            type: String,
            required: true
        },
        role: {
            type: String,
            required: true
        }, 
        level: {
            type: String,
            required: true
        },
        languages: {
            type: Array,
            required: false
        },
        tools: {
            type: Array,
            required: false
        },
        filter: {
            type: Function,
            required: false
        }
    },
}
</script>

<style>

.card-content {
    display: flex;
    width: 80%;
}

.img-rounded {
    border-radius: 100px;
    background-color: #ddd;
    width: 70px;
    height: 70px;
    overflow: hidden;
    margin-right: 15px;
}

.card {
    background-color: #fff;
    padding: 2rem;
    margin: 1rem;
    border-radius: .3rem;
    box-shadow: 3px 8px 8px #5ba3a429;
    line-height: 1.5;
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;

    border-left: 5px solid transparent;
}

.card img {
    width: 70px;
    height: auto;
}

.card.featuredBorder {
   border-left-color: var(--desaturatedDarkCyan);
}

.card-header {
    display: flex;
}
.job-name {
    font-size: 1rem;
    font-weight: bold;
    color: var(--veryDarkGrayishCyan);
}
.job-name:hover {
    color: var(--desaturatedDarkCyan);
}

h3 {
    font-size: .9rem;
    color: var(--desaturatedDarkCyan);
}
ul {
    list-style: none;
    padding-left: 0;
}
a, button {
    text-decoration: none;
    border: none;
    cursor: pointer;
}
button:focus {
    outline: none;
}

hr {
    margin: 1.5rem 0;
    border: 1px solid #ddd;
}

.tag {
    background-color: var(--lightGrayishCyanBg);
    color: var(--desaturatedDarkCyan);
    font-size: .85rem;
    font-weight: bold;
    padding: 10px;
    border-radius: .5rem;
    margin: 5px;
    position: relative;
    font-family: 'Spartan', sans-serif;
}
.tag:hover {
     color: var(--lightGrayishCyanBg);
    background-color: var(--desaturatedDarkCyan);
}

.d-flex {
    display: flex;
}
.f-wrap {
    flex-wrap: wrap;
}
.uppercase {
    text-transform: uppercase;
}
.f-light {
    color: #fff;
}
.t-center {
    text-align: center;
}
.f-8 {
    font-size: .75rem;
}
.p-3-8 {
    padding: .2rem .8rem;
}
.br-1 {
    border-radius: 1rem;
}

.new {
    background-color: var(--desaturatedDarkCyan);
    margin: 0 5px;
    font-weight: bold;
    padding-top: .4rem;
}

.featured {
    background-color: #333;
    margin: 0 5px;
    font-weight: bold;
    padding-top: .4rem;
}

.job-info {
    align-items: flex-start;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
}

.job-info__details {
    color: var(--darkGrayishCyan);
    font-size: .9rem;
}

.job-info__details span::before{
   content: '';
   display: inline-block;
   width: 3px;
   height: 3px;
   -moz-border-radius: 50px;
   -webkit-border-radius: 50px;
   border-radius: 50px;
   background-color: var(--darkGrayishCyan);
   margin: 3px 10px;
}

@media(max-width: 600px) {
    .card {
        flex-direction: column;
        padding: 1rem;
        margin-top: 2rem;
    }

    .card img {
        width: 50px;
        height: 50px;
    }

    .card-header {
        position: relative;
        width: 95%;
        border-bottom: 1px solid #ccc;
        padding-bottom: .5rem;
        margin-bottom: .5rem;
    }

    .card-content {
        width: 100%;
    }

    .img-rounded {
        position: absolute;
        top: -50px;

          width: 50px;
        height: 50px;
    }
    .job-info {
        margin-top: 1rem;
    }
    .job-title {
        margin-bottom: 1rem;
    }
}

</style>