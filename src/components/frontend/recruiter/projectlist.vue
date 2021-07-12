<template>
  <a-layout id="components-layout-demo-side" style="min-height: 100vh;background-color:#F8FAFB ">
    <RecruiterSider/>


    <a-layout :style="{backgroundColor:'#ffffff' }">


      <a-layout-content>
        <div v-if="loading" style="padding: 2%;">
          <a-skeleton active/>
          <a-skeleton active/>

        </div>

        <div style="height: 100vh;overflow: scroll;margin-bottom: 1rem;" v-else>

          <a-row gutter="16" style="padding: 2%;">
            <a-col span="6" v-for="item in allprojects" v-bind:key="item">

              <a @click="navigateTo({name:'pickedprojectdetails',params:{projectId:item.id,
                                                                       applicationId: ApplicationId}})">

                <a-card class="nine">

                  <img
                      class="card-img-top"
                      slot="cover"
                      alt="example"
                      :src="item.image"


                  />


                  <a-card-meta>
                    <template slot="description">
                      <p>
                        Project skill tags :
                        <span style="" v-for="skill in item.skills" v-bind:key="skill.id">
                                                <a-tag color="#F0F6FD" style="color:#007BFF;">{{ skill }}</a-tag>

                                            </span>
                      </p>
                    </template>
                  </a-card-meta>
                </a-card>
              </a>

            </a-col>
          </a-row>
        </div>


      </a-layout-content>
    </a-layout>
  </a-layout>

</template>

<script>
import ARow from "ant-design-vue/es/grid/Row";

class Project {
  constructor(id, name, skills, image) {
    this.id = id;
    this.name = name;
    this.skills = skills;
    this.image = image;

  }
}

import RecruiterSider from "./layout/RecruiterSider";
import Projectsservice from '@/services/Projects'
import ACol from "ant-design-vue/es/grid/Col";


export default {
  name: "projectlist",
  data() {
    return {
      projects: null,
      loading: false,
      job: {},
      search: '',
      dataSource: ['Django', 'Javascript', 'Python', 'Php', 'Postgres', 'Sql', 'Html', 'Css', 'bootstrap', 'React', 'Java',
        'React Native', 'Redux', 'Flask ', 'Go', 'Expressjs', 'Vuejs',
        'Angular', 'Ios', 'flutter', 'Ionic', 'Rails', 'Meteor', 'AI', 'Cybersecurity',
        'Blockchain', 'Arduino', 'Spring', 'Bitcoin', 'Kotlin', 'Scala', 'Nativescript ',
        'Android', 'Website', 'Mobile'],
      allprojects: [],


    }
  },
  components: {
    ACol,
    ARow,
    RecruiterSider,
  },
  async mounted() {
    const auth = {
      headers: {Authorization: 'JWT ' + this.$store.state.token}

    };
    this.loading = true
    this.ApplicationId = this.$store.state.route.params.applicationId

    Projectsservice.allprojects(auth)
        .then(resp => {
          this.projects = resp.data
          for (let i = 0; i < this.projects.length; i++) {
            let skill_list = []
            if(this.projects[i].tags){
              skill_list=this.projects[i].tags.split(',');
            }

            let id = this.projects[i].id
            let name = this.projects[i].name
            let skills = skill_list
            let image = this.projects[i].projectimage1
            let oneproject = new Project(
                id, name, skills, image
            )


            this.allprojects.push(oneproject)

          }
          this.loading = false


        })
        .catch()



  },
  methods: {
    navigateTo(route) {
      this.$router.push(route)
    },
  },

}
</script>

<style scoped>
.card-img-top {
  width: 100%;
  height: 15vw;
  object-fit: cover;
}

/* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #1890ff;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #91d5ff;
}
</style>
