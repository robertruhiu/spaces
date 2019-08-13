<template>
    <a-layout id="components-layout-demo-side" style="min-height: 100vh;background-color:#F8FAFB ">
        <RecruiterSider/>


        <a-layout :style="{backgroundColor:'#F8FAFB',marginLeft: '200px' }">


            <a-layout-content>
                <a-row style="background-color:#004ec7;position: fixed;width: 100%;z-index: 1 ">
                    <a-col span="4">
                        <h1 style="color: white;padding-left: 4rem;padding-top: 1rem;">Projects</h1>
                    </a-col>
                    <a-col :span="16">

                        <div style="padding-top: 1rem;" class='center'>
                            <a-auto-complete
                                    :dataSource="dataSource"
                                    style="width: 80%;z-index: 0"
                                    placeholder="Search skills like react,javascript,vue python"
                                    :filterOption="filterOption"
                                    v-model="search"


                            >

                                <a-input>
                                    <a-icon slot="suffix" type="search" class="certain-category-icon"/>
                                </a-input>
                            </a-auto-complete>
                        </div>
                    </a-col>

                </a-row>
                <div :style="{ padding: '4%', background: '#fff',marginTop:'6%' }">
                    <a-list
                            :grid="{gutter: 16, column: 3}"
                            :dataSource="filteredList"

                    >
                        <a-list-item slot="renderItem" slot-scope="item, index">
                            <a-card
                                    hoverable

                            >
                                <img
                                        alt="example"
                                        :src="item.image"
                                        slot="cover"
                                        style="height: 10rem"
                                />
                                <a-card-meta
                                        :title="item.name">
                                    <template slot="description">
                                        <p>
                                            Project skill tags :
                                            <span style="" v-for="skill in item.skills" v-bind:key="skill.id">
                                                <a-tag color="#F0F6FD" style="color:#007BFF;">{{skill}}</a-tag>

                                            </span>
                                        </p>
                                    </template>
                                </a-card-meta>
                            </a-card>

                        </a-list-item>
                    </a-list>

  {{ projects}}
                </div>

            </a-layout-content>
        </a-layout>
    </a-layout>

</template>

<script>
    class Project {
        constructor(id, name, skills, image) {
            this.id = id;
            this.name = name;
            this.skills = skills;
            this.image = image;

        }
    }

    import RecruiterSider from "../../layout/RecruiterSider";
    import Projectsservice from '@/services/Projects'

    export default {
        name: "projectlist",
        data() {
            return {
                projects: null,
                job: {},
                search: '',
                dataSource: ['Django', 'Javascript', 'Python', 'Php', 'Postgres', 'Sql', 'Html', 'Css', 'bootstrap', 'React', 'Java',
                    'React Native', 'Redux', 'Flask ', 'Go', 'Expressjs', 'Vuejs',
                    'Angular', 'Ios', 'flutter', 'Ionic', 'Rails', 'Meteor', 'AI', 'Cybersecurity',
                    'Blockchain', 'Arduino', 'Spring', 'Bitcoin', 'Kotlin', 'Scala', 'Nativescript ',
                    'Android', 'Website', 'Mobile'],
                allprojects: []

            }
        },
        components: {

            RecruiterSider,
        },
        async mounted() {
            const auth = {
                headers: {Authorization: 'JWTproject_id ' + this.$store.state.token}

            };


            Projectsservice.allprojects(auth)
                .then(resp => {
                    this.projects = resp.data
                    for (let i = 0; i < this.projects.length; i++) {
                        let skill_list = this.projects[i].tags.split(',');

                        let id = this.projects[i].id
                        let name = this.projects[i].name
                        let skills = skill_list
                        let image = this.projects[i].projectimage1
                        let oneproject = new Project(
                            id, name, skills, image
                        )


                        this.allprojects.push(oneproject)
                    }


                })
                .catch()


        },
        computed: {
            filteredList() {
                return this.allprojects.filter(project => {

                    return project.skills.toString().toLowerCase().includes(this.search.toLowerCase())
                })
            }
        }
    }
</script>

<style scoped>

</style>
