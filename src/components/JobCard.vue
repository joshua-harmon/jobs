<template>
    <div class="card">
        <div class="col">
            <img class="logo" :src="job.logo" alt="Company logo" />
        </div>
        <div class="col">
            <div class="row">
                <span class="company">{{ job.company }}</span>
                <span class="badges">
                    <Badge label="NEW!" v-if="job.new" />
                    <Badge label="FEATURED" class="black" v-if="job.featured" />
                </span>
            </div>
            <div class="row">
                <span class="position">{{ job.position }}</span>
            </div>
            <div class="row details">
                <span class="timeAgo">{{ job.postedAt }}</span>
                <span class="contract">{{ job.contract }}</span>
                <span class="location">{{ job.location }}</span>
            </div>
        </div>
        <hr />
        <div class="col label-col">
            <span class="labels">
                <Label
                    v-for="label in labels"
                    :key="label"
                    :label="label"
                    @click="$emit('addFilter', label)"
                />
            </span>
        </div>
    </div>
</template>

<script>
import Badge from './Badge.vue';
import Label from './Label.vue';
export default {
    props: {
        job: {},
    },
    computed: {
        labels() {
            return [
                this.job.level,
                this.job.role,
                ...this.job.languages,
                ...this.job.tools,
            ];
        },
    },
    components: {
        Badge,
        Label,
    },
};
</script>

<style>
.card {
    position: relative;
    display: flex;
    margin: 2rem;
    border-radius: 0.3rem;
    border-left: 0.25rem solid #ffffff;
    background-color: #ffffff;
    box-shadow: var(--BoxShadow);
}

.card:hover {
    border-left: 0.25rem solid var(--DesaturatedDarkCyan);
}

.card > hr {
    display: none;
    margin: 1rem 0.5rem;
}

.logo {
    padding: 1.5rem;
}

.company {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    font-size: 0.8rem;
    font-weight: bold;
    color: var(--DesaturatedDarkCyan);
}

.position {
    cursor: pointer;
    font-weight: bold;
    margin: 0.5rem 0;
}

.position:hover {
    color: var(--DesaturatedDarkCyan);
}

.col {
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.row {
    display: flex;
}

.labels {
    padding: 1rem;
    justify-self: flex-end;
}

.label-col {
    flex-grow: 1;
    align-items: flex-end;
}

.timeAgo,
.contract,
.location {
    text-align: center;
    vertical-align: center;
    font-size: 0.8rem;
    color: var(--DarkGrayishCyan);
}

.details > span:not(:last-child):after {
    content: '·';
    margin: 0 0.5rem;
}

@media only screen and (max-width: 400px) {
    .card {
        padding: 2rem 0.7rem 0.7rem 0.7rem;
        flex-direction: column;
    }

    .logo {
        position: absolute;
        padding: 0;
        top: -25px;
        left: 15px;
        height: 50px;
        width: 50px;
    }

    .card > hr {
        display: block;
    }

    .labels {
        padding: 0;
        justify-self: flex-end;
    }
}
</style>
