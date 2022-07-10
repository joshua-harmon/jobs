<template>
  <form class="EditJob" @submit.prevent="submitForm()">
    <div class="JobsTracker-control JobsTracker-control--l">
      <label class="JobsTracker-label" for="title">Job Title</label>
      <input v-model="jobData.title" type="text" class="JobsTracker-input" name="title">
    </div>
    <div class="JobsTracker-control JobsTracker-control--l">
      <label class="JobsTracker-label" for="descripiton">Job Description</label>
      <textarea v-model="jobData.description" class="JobsTracker-input" name="description"></textarea>
    </div>
    <div class="JobsTracker-control">
      <label class="JobsTracker-label" for="skills">Skills</label>
      <input v-for="(skill, index) in jobData.skills"
             v-bind:key="index"
             v-model="jobData.skills[index]"
             v-on:keydown.enter.prevent
             v-on:change="clearEmptySkills()"
             type="text"
             class="JobsTracker-input"
             name="skills">
      <input v-on:keydown.enter.prevent="addSkill($event)"
             type="text"
             class="JobsTracker-input"
             name="skills"
             placeholder="Add new skill">
    </div>
    <input type="submit" class="JobsTracker-button" value="Save">
    <button class="JobsTracker-button" @click="closeForm()" type="button">Cancel</button>
  </form>
</template>

<script>
export default {
  name: 'EditJob',
  props: {
    job: {
      default: function () {
        return {
          title: '',
          skills: [],
          description: ''
        }
      },
      type: Object
    }
  },
  data: function () {
    return {
      jobData: {
        id: this.job.id,
        title: this.job.title,
        description: this.job.description,
        skills: this.job.skills
      }
    }
  },
  methods: {
    closeForm: function () {
      this.job.view = 'ShowJob';
      this.$emit('update-requested');
      this.$emit('form-closed')
    },
    submitForm: function () {
      this.$emit('job-updated', this.jobData);
    },
    addSkill: function ($event) {
      this.jobData.skills.push($event.target.value);
      $event.target.value = '';
    },
    clearEmptySkills: function () {
      this.jobData.skills = this.jobData.skills.filter((skill) => {
        return skill;
      })
    }
  }
}
</script>

<style lang="scss">
  .EditJob {
    background-color: #fff;
    padding: 24px;
    margin-bottom: 24px;
    box-shadow: 0 4px 8px #888;
  }
</style>