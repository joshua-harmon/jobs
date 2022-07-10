<template>
    <div class="jobs">
      <div class="job-list">

        <div v-if="activeFilters" class="filter"> 
            
          <div class="card">

              <div class="filtersList">
                <div class="d-flex filtersList--box">
                  <div v-for="(filter, index) in filters" :key="index">

                    <div class="filterTag">
                      <span> {{ filter.tag }} </span> 
                      <button @click="removeFilter(index)">
                        <img src="../assets/icon-remove.svg" alt="remove">
                      </button> 
                    </div>
                  
                  </div>
                </div>

                <div> 
                  <button @click="clearFilters" class="clearLink">
                    Clear
                  </button>
                </div>

            </div>
          
          </div>

        </div> 

        <Card 
          v-for="job in filterJobs" 
          :key="job.id" 
          :id="job.id"
          :logo="job.logo"
          :company="job.company" 
          :newTag="job.new"
          :featuredTag="job.featured"
          :position="job.position"
          :role="job.role"
          :level="job.level"
          :postedAt="job.postedAt"
          :contract="job.contract"
          :location="job.location"
          :languages="job.languages"
          :tools="job.tools"
          :filter="handleFilter" 
        />
      </div>
    </div>
</template>

<script>

import Card from '../components/Card'

export default {
  name: 'JobList',
  data() {
    return {
      jobs: [],
      filterJobs: [],
      filters: [],
      activeFilters: false
    }
  },

  components: {
    Card,
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      const res = await fetch("data.json");
      const values = await res.json();
      this.jobs = values;
      this.filterJobs = values;
    },

    filter(tag, type) {
      this.filterJobs = this.filterJobs.filter(job => {
        if(type == 'level' && job.level == tag) {
          return true
        } else if(type == 'role' && job.role == tag) {
          return true
        } else if(type == 'languages' && job.languages.includes(tag)) {
            return true
        } else if(type == 'tools' && job.tools.includes(tag)) {
          return true
        }
      })
    },

    handleFilter(tag, type) {
      
      if(!this.filters.find(element => element.tag == tag && element.type == type)) {
        this.filters.push({tag, type})
      }
      this.activeFilters = true;
      this.filter(tag, type)
    },
    
    removeFilter(index) {
      this.filters.splice(index, 1)
      this.filterJobs = this.jobs

      if(this.filters.length < 1) {
        this.activeFilters = false;
      } else {
        this.filters.map(item => {
          this.filter(item.tag, item.type)
        })
      }
    },

    clearFilters() {
      this.activeFilters = false;
      this.filters = []
      this.filterJobs = this.jobs
    }
  },
}
</script>

<style scoped>

.jobs {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.job-list {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 1440px;
  width: 100%;
  margin-bottom: 4rem;
}

.filter {
  display: flex;
  width: 80%; 
  max-width: 1150px;

  position: absolute;
  top: 10%;
}

.filter .card {
  padding: 1rem;
  margin: 1rem;
}

.filtersList {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

.filterTag {
  background-color: var(--lightGrayishCyanBg);
  color: var(--desaturatedDarkCyan);
  font-size: .85rem;
  font-weight: bold;

  border-radius: .5rem;
  margin: 5px;
  position: relative;

  display: flex;
  justify-content: space-between;
  align-items: center;
}
.filterTag span {
  padding: 7px 10px;
}
.filterTag button {
  background-color: var(--desaturatedDarkCyan);
  top: 0;
  right: 0;
  bottom: 0;
  border-top-right-radius: .5rem;
  border-bottom-right-radius: .5rem;
  padding: 7px;
}
.filterTag button img {
  width: 15px;
}

.filterTag button:hover {
  background-color: var(--veryDarkGrayishCyan);
}

.clearLink {
  color: var(--desaturatedDarkCyan);
  font-size: .85rem;
  font-weight: bold;
  background-color: #fff;
}

.clearLink:hover {
  text-decoration: underline;
}

@media(max-width: 600px) {
    .filter {
        width: 100%;
        height: auto;
        position: absolute;
        top: 10px;
        height: 180px;
        overflow: hidden;
    }
    .filter .card {
      padding: .5rem;
    }

    .filterList {
      overflow: hidden;
    }

    .filterTag img {
      height: 15px;
    }

    .filtersList--box {
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      justify-content: flex-start;
      max-width: 80%;
      flex-wrap: wrap;
    }
}

</style>