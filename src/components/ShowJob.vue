<template>
  <div class="ShowJob" v-if="filterMatches()">
    <h2 class="ShowJob-heading">
      {{ job.title }}
    </h2>
    <h3>Job Description</h3>
    <p class="ShowJob-description">
      {{ job.description }}
    </p>
    <h3>Skills</h3>
    <ul class="ShowJob-skills">
      <li v-for="skill in job.skills" :key="skill" class="ShowJob-skill">
        {{ skill }}
      </li>
    </ul>
    <button v-on:click="editView(job)" class="JobsTracker-button">
      Edit
    </button>
    <button @click="$emit('job-deleted', job)" class="JobsTracker-button JobsTracker-button--danger">
      Delete
    </button>
  </div>
</template>

<script>
export default {
  name: 'ShowJob',
  props: {
    job: Object
  },
  methods: {
    editView: function (job) {
      job.view = 'EditJob';
    },
    filterMatches: function () {
      if (!this.$attrs.filter) {
        return true
      }
      const filterRegex = new RegExp(this.$attrs.filter, 'i');
      return this.job.skills.filter((skill) => {
        return filterRegex.test(skill);
      }).length;
    }
  }
}
</script>

<style lang="scss">
  .ShowJob {
    background-color: #fff;
    padding: 24px;
    margin-bottom: 24px;
    box-shadow: 0 4px 8px #888;

    &-skills {
      list-style-type: none;
      padding: 0;
    }

    &-skill {
      display: inline-block;
      margin-right: 8px;
      padding: 8px;
      background-color: #eee;
    }
  }
</style>
