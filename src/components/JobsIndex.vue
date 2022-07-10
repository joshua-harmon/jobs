<template>
  <main class="JobsIndex">
    <h1>See All Jobs</h1>
    <div class="JobsIndex-filter" id="job-filters">
      <label class="JobsIndex-label" for="skill-filter">Filter By Skills</label>
      <input v-model="filter" class="JobsTracker-input" id="skill-filter" name="skill-filter" type="text">
      <p class="JobsIndex-filteredMessage" v-if="filtered.visible < filtered.total">
        Filtering on skills, showing {{ filtered.visible }} of {{ filtered.total }}.
      </p>
    </div>
    <button @click="newJob" class="JobsTracker-button JobsIndex-new">Create Job</button>
    <component
      v-for="job in jobs"
      v-bind:key="job.id"
      v-bind:job="job"
      v-bind:is="job.view"
      v-bind:filter="filter"
      ref="showJobs"
      @job-updated="saveJob"
      @job-deleted="deleteJob"
      @update-requested="updateJobs">
    </component>
    <div v-if="showModal" class="JobsIndex-modal">
      <EditJob
        @form-closed="closeModal"
        @job-updated="saveJob"
        @update-requested="updateJobs" />
    </div>
  </main>
</template>

<script>
import { getJobList, updateJob, createJob, destroyJob } from '../helpers/jobsApiHelper';
import ShowJob from './ShowJob';
import EditJob from './EditJob';
export default {
  name: 'JobsIndex',
  components: {
    ShowJob,
    EditJob
  },
  data: function () {
    return {
      jobs: [],
      showModal: false,
      filter: '',
      filtered: {}
    }
  },
  watch: {
    filter: function () {
      this.$nextTick(function () {
        const visibleJobs = this.$el.querySelectorAll('.ShowJob');
        this.filtered = {
          visible: visibleJobs.length,
          total: this.$refs.showJobs.length
        }
      })
    }
  },
  mounted: async function () {
    await this.updateJobs();
  },
  methods: {
    updateJobs: async function () {
      let jobs = await getJobList();
      this.jobs = jobs.map((job) => {
        job.view = ShowJob;
        return job;
      })
    },
    newJob: function () {
      this.showModal = true;
    },
    closeModal: function () {
      this.showModal = false;
    },
    saveJob: async function (job) {
      await (job.id ? updateJob(job) : createJob(job))
        .then(() => {
          job.view = ShowJob;
          this.updateJobs();
          this.closeModal();
        }, (error) => {
          console.error(error);
        });
    },
    deleteJob: async function (job) {
      await destroyJob(job.id).then(() => {
        this.updateJobs();
      })
    }
  }
}
</script>

<style scoped lang="scss">
  .JobsIndex {
    &-label {
      margin-right: 8px;
      font-weight: 600;
    }

    &-filter {
      margin-bottom: 8px;
    }

    &-new {
      margin-bottom: 32px;
    }

    &-modal {
      position: absolute;
      top: 100px;
      left: 0;
      right: 0;
      max-width: 1000px;
      margin: auto;
      padding: 20px;
      z-index: 1;

      &::before {
        content: '';
        display: block;
        position: fixed;
        left: 0;
        top: 0;
        width: 100vw;
        height: 100vh;
        background-color: #000;
        opacity: 0.3;
        z-index: -1;
      }
    }
  }  
</style>
