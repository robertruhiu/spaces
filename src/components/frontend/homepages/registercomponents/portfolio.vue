<template>
    <div>
        <span>
            <strong>Add personal projects you have build</strong>
            <span style="float: right;color: blue">
                <a @click="CreateProject">
                    <a-icon type="plus-circle" theme="twoTone"/>Add
                </a>
            </span>
        </span>
        <div v-if="portfolio.length>0">
            <div style="border-bottom: 1px solid #e8e8e8;padding-bottom: 2%;padding-top: 2%"
                 v-for="item in portfolio" v-bind:key="item.id">
                <p style="font-weight: 700">
                    {{item.title}}


                </p>
                <p>
                    Tools used:
                    <a-tag v-for="tag in item.tags" color="blue"
                           :key="tag">
                        {{tag}}
                    </a-tag>

                </p>
                <p>{{item.description}}
                </p>
                <a :href=" item.demo" target="_blank">view project</a>

            </div>
        </div>
         <!--Create project--->
        <a-modal
                title="New portfolio project"
                v-model="createproject"
                style="top: 1rem;"

        >
            <template slot="footer">
                <div>
                    <div v-if="loading" style="text-align: center;">
                        <a-spin/>
                    </div>
                    <a-button v-else key="submit" type="primary" @click="SavenewProject">
                        Save
                    </a-button>
                </div>


            </template>
            <a-form
                    :form="projectform"

            >
                <a-form-item
                        label="Title"
                        :label-col="{ span: 24 }"
                        :wrapper-col="{ span: 24 }"
                >
                    <a-input v-model="projecttitle"
                             v-validate.disable="'required'" name="project_title"

                    />
                    <span style="color: #f5222d;" v-show="errors.has('project_title')"
                          class="help is-danger">{{ errors.first('project_title') }}</span>
                </a-form-item>
                <a-form-item
                        label="Demo link"
                        :label-col="{ span: 24 }"
                        :wrapper-col="{ span: 24 }"
                >
                    <a-input v-model="projectdemo"
                             v-validate.disable="{required: true,url: {require_protocol: true }}"
                             name="project_demo"

                    />
                    <span style="color: #f5222d;" v-show="errors.has('project_demo')"
                          class="help is-danger">{{ errors.first('project_demo') }}</span>
                </a-form-item>
                <a-form-item
                        label="Repository link"
                        :label-col="{ span: 24 }"
                        :wrapper-col="{ span: 24 }"
                >
                    <a-input v-model="projectrepo"
                             v-validate.disable="{required: true,url: {require_protocol: true }}"
                             name="project_repo"

                    />
                    <span style="color: #f5222d;" v-show="errors.has('project_repo')"
                          class="help is-danger">{{ errors.first('project_repo') }}</span>
                </a-form-item>

                <a-form-item
                        label="Tech used in the project "
                        :label-col="{ span: 24 }"
                        :wrapper-col="{ span:  24}"
                >
                    <template v-for="(tag, index) in projecttags">
                        <a-tooltip v-if="tag.length > 20" :key="tag" :title="tag">
                            <a-tag :key="tag"
                                   :afterClose2="() => handleClose2(tag)" color="#2db7f5">
                                {{`${tag.slice(0, 20)}...`}}
                            </a-tag>
                        </a-tooltip>
                        <a-tag v-else :key="tag" :closable="index >= 0"
                               :afterClose2="() => handleClose2(tag)" color="#2db7f5">
                            {{tag}}
                        </a-tag>
                    </template>
                    <a-input
                            v-if="inputVisible2"
                            ref="input"
                            type="text"
                            size="small"
                            :style="{ width: '78px' }"
                            :value="inputValue2"
                            @change="handleInputChange2"
                            @blur="handleInputConfirm2"
                            @keyup.enter="handleInputConfirm2"
                    />
                    <a-tag v-else @click="showInput2"
                           style="background: #fff; borderStyle: dashed;">
                        <a-icon type="plus"/>
                        New Tag
                    </a-tag>

                </a-form-item>
                <a-form-item
                        label="Project Description"
                        :label-col="{ span: 24 }"
                        :wrapper-col="{ span: 24 }"
                >
                    <a-textarea maxlength="400" placeholder="About the project" :rows="4"
                                v-model="projectdescription"
                                v-validate.disable="'required'" name="project_description"/>
                    <span style="color: #f5222d;" v-show="errors.has('project_description')"
                          class="help is-danger">{{ errors.first('project_description') }}</span>
                </a-form-item>


            </a-form>

        </a-modal>
    </div>

</template>

<script>
    import UsersService from '@/services/UsersService'
    class Portfolio {
        constructor(id, title, description, demo, tech_used, repo) {
            this.key = id;
            this.title = title;
            this.description = description;
            this.demo = demo;
            this.tags = tech_used;
            this.repo = repo


        }
    }
    export default {
        name: "portfolio",
        data() {
            return {
                loading: false,
                currentUserProfile: {},
                tags: [],
                inputVisible: false,
                inputValue: '',
                selectedTags: [],
                current: 0,
                steps: [{
                    title: 'Personal Details',

                }, {
                    title: 'Skills and bio',

                }, {
                    title: 'Work experience',

                },
                    {
                        title: 'Past projects',

                    }],
                experienceslist: [],
                experiences: [],
                portoliolist: [],
                portfolio: [],
                takenquizzes: [],
                codelnprojects: [],
                createproject: false,
                editproject: false,
                createexperience: false,
                editexperience: false,
                currentproject: {},
                currentexperience: {},
                projecttags: [],
                experiencetags: [],
                inputVisible2: false,
                inputValue2: '',
                portfoliotags: [],
                inputVisible1: false,
                inputValue1: '',
                projecttitle: '',
                projectdemo: '',
                projectrepo: '',
                projectdescription: '',
                projecttech: '',
                experiencetitle: '',
                experiencecompany: '',
                experienceduration: '',
                experiencelocation: '',
                experiencetech: '',
                experiencedescription: '',
                errorlist: [],
                step1errors: [],
                cv: null,
                uploading: false,
                experienceform: this.$form.createForm(this),
                projectform: this.$form.createForm(this),
                developerstep1: this.$form.createForm(this),
                doneloading: false
            }
        },
         async mounted() {
             const auth = {
                 headers: {Authorization: 'JWT ' + this.$store.state.token}

             }
             this.portfoliolist = (await UsersService.portfolio(this.$store.state.user.pk, auth)).data
             for (let i = 0; i < this.portfoliolist.length; i++) {
                    let id = this.portfoliolist[i].id
                    let title = this.portfoliolist[i].title
                    let description = this.portfoliolist[i].description
                    let demo = this.portfoliolist[i].demo_link
                    let tech_used = this.portfoliolist[i].tech_tags.split(',');
                    let repo = this.portfoliolist[i].repository_link

                    let one_portfolio = new Portfolio(
                        id, title, description, demo, tech_used, repo
                    );
                    this.portfolio.push(one_portfolio)


                }
         },
         methods : {
            CreateProject() {
                this.createproject = true
            },
            SavenewProject() {

                const auth = {
                    headers: {Authorization: 'JWT ' + this.$store.state.token}

                }
                this.loading = true
                this.$validator.validate().then(valid => {
                    if (valid) {
                        UsersService.newportfolio(
                            {
                                candidate: this.$store.state.user.pk,
                                title: this.projecttitle,
                                description: this.projectdescription,
                                repository_link: this.projectrepo,
                                demo_link: this.projectdemo,
                                tech_tags: this.projecttech

                            },
                            auth)
                            .then(resp => {
                                    let id = resp.data.id
                                    let title = resp.data.title
                                    let description = resp.data.description
                                    let demo = resp.data.demo_link
                                    let tech_used = resp.data.tech_tags.split(',');
                                    let repo = resp.data.repository_link

                                    let one_portfolio = new Portfolio(
                                        id, title, description, demo, tech_used, repo
                                    );
                                    this.portfolio.push(one_portfolio)
                                    this.loading = false

                                    this.createproject = false
                                    this.projecttitle = ''
                                    this.projectdemo = ''
                                    this.projectrepo = ''
                                    this.projectdescription = ''
                                    this.projecttech = ''
                                    this.projecttags = []


                                    return resp

                                }
                            )
                            .catch()

                    } else {
                        this.loading = false

                    }
                })


            },
             handleClose2(removedTag) {
                const tags = this.projecttags.filter(tag => tag !== removedTag)
                this.projecttags = tags
                let alltags = this.projecttags.join(", ")
                this.projecttech = alltags

            },

            showInput2() {
                this.inputVisible2 = true
                this.$nextTick(function () {
                    this.$refs.input.focus()
                })
            },

            handleInputChange2(e) {
                this.inputValue2 = e.target.value
            },

            handleInputConfirm2() {
                const inputValue = this.inputValue2
                let projecttags = this.projecttags
                if (inputValue && projecttags.indexOf(inputValue) === -1) {
                    projecttags = [...projecttags, inputValue]
                }

                let alltags = projecttags.join(", ")
                this.projecttech = alltags
                Object.assign(this, {
                    projecttags,
                    inputVisible2: false,
                    inputValue2: '',
                })
            },
         }
    }
</script>

<style scoped>

</style>
