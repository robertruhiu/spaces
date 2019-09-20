<template>
    <div>
        <span>
            <strong>Add your recent work stints.Experience builds trust</strong>
            <span style="float: right;color: blue">
                <a @click="CreateExperience">
                    <a-icon type="plus-circle" theme="twoTone"/>Add
                </a>
            </span>
            <div v-if="experiences.length>0">
                                            <a-timeline>
                                                <a-timeline-item v-for="item in experiences" v-bind:key="item.id">

                                                    <p style="font-weight: 700">
                                                        {{item.title}}


                                                    </p>
                                                    <p><span><a-icon type="bank"/>  {{item.company}} <a-icon
                                                            type="environment"/>  {{item.location}} <a-icon
                                                            type="hourglass"/>  {{item.duration}}months</span>
                                                    </p>
                                                    <p>
                                                        Technologies used:
                                                        <a-tag v-for="tag in item.tags" color="blue"
                                                               :key="tag">
                                                            {{tag}}
                                                        </a-tag>

                                                    </p>


                                                    <p>{{item.description}}</p>

                                                </a-timeline-item>

                                            </a-timeline>
                                        </div>
        </span>
        <!--Create experience--->
        <a-modal
                title="New Work Experience"
                v-model="createexperience"
                style="top: 1rem"

        >
            <template slot="footer">
                <div>
                    <div v-if="loading" style="text-align: center;">
                        <a-spin/>
                    </div>
                    <a-button v-else key="submit" type="primary" @click="SavenewExperience">
                        Save
                    </a-button>
                </div>


            </template>
            <a-form
                    :form="experienceform"

            >
                <a-form-item
                        label="Job title"
                        :label-col="{ span: 24 }"
                        :wrapper-col="{ span: 24 }"
                >
                    <a-input v-model="experiencetitle"
                             v-validate.disable="'required'"
                             name="experiencetitle"

                    />
                    <span style="color: #f5222d;" v-show="errors.has('experience_title')"
                          class="help is-danger">{{ errors.first('experience_title') }}</span>

                </a-form-item>
                <a-form-item
                        label="Company"
                        :label-col="{ span: 24 }"
                        :wrapper-col="{ span: 24 }"
                >
                    <a-input v-model="experiencecompany"
                             v-validate.disable="'required'"
                             name="experience_company"


                    />
                    <span style="color: #f5222d;" v-show="errors.has('experience_company')"
                          class="help is-danger">{{ errors.first('experience_company') }}</span>

                </a-form-item>
                <a-form-item
                        label="Duration in months"
                        :label-col="{ span: 24 }"
                        :wrapper-col="{ span: 24 }"
                >

                    <a-input-number :min="1" :max="200" v-model="experienceduration"
                                    v-validate.disable="'required'"
                                    name="experience_duration"

                    />
                    months
                    <span style="color: #f5222d;" v-show="errors.has('experience_duration')"
                          class="help is-danger">{{ errors.first('experience_duration') }}</span>

                </a-form-item>
                <a-form-item
                        label="Location"
                        :label-col="{ span: 24 }"
                        :wrapper-col="{ span: 24 }"
                >

                    <country-select
                            name="location"
                            v-model="experiencelocation"
                            class="ant-input"
                            v-validate.disable="'required'"

                    />
                    <span style="color: #f5222d;" v-show="errors.has('location')"
                          class="help is-danger">{{ errors.first('location') }}</span>
                </a-form-item>


                <a-form-item
                        label="Technologies used "
                        :label-col="{ span: 24 }"
                        :wrapper-col="{ span:  24}"
                >
                    <template v-for="(tag, index) in experiencetags">
                        <a-tooltip v-if="tag.length > 20" :key="tag" :title="tag">
                            <a-tag :key="tag"
                                   :afterClose="() => handleClose1(tag)" color="#2db7f5">
                                {{`${tag.slice(0, 20)}...`}}
                            </a-tag>
                        </a-tooltip>
                        <a-tag v-else :key="tag" :closable="index >= 0"
                               :afterClose="() => handleClose1(tag)" color="#2db7f5">
                            {{tag}}
                        </a-tag>
                    </template>
                    <a-input
                            v-if="inputVisible1"
                            ref="input"
                            type="text"
                            size="small"
                            :style="{ width: '78px' }"
                            :value="inputValue1"
                            @change="handleInputChange1"
                            @blur="handleInputConfirm1"
                            @keyup.enter="handleInputConfirm1"
                    />
                    <a-tag v-else @click="showInput1"
                           style="background: #fff; borderStyle: dashed;">
                        <a-icon type="plus"/>
                        New Tag
                    </a-tag>


                </a-form-item>
                <a-form-item
                        label="Work description"
                        :label-col="{ span: 24 }"
                        :wrapper-col="{ span: 24 }"
                >
                    <a-textarea maxlength="400"
                                placeholder="A description of your role and responsibilites(400 char max)"
                                :rows="4"
                                v-model="experiencedescription"
                                v-validate.disable="'required'"
                                name="experiencedescription"

                    />
                    <span style="color: #f5222d;" v-show="errors.has('experience_description')"
                          class="help is-danger">{{ errors.first('experience_description') }}</span>

                </a-form-item>


            </a-form>

        </a-modal>
    </div>

</template>

<script>
    import UsersService from '@/services/UsersService'

    class Experience {
        constructor(id, title, description, company, location, duration, tech_used) {
            this.key = id;
            this.title = title;
            this.description = description;
            this.company = company;
            this.duration = duration;
            this.tags = tech_used;
            this.location = location;

        }
    }

    export default {
        name: "experience",
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
            this.experienceslist = (await UsersService.experience(this.$store.state.user.pk, auth)).data

            for (let i = 0; i < this.experienceslist.length; i++) {
                let id = this.experienceslist[i].id
                let title = this.experienceslist[i].title
                let description = this.experienceslist[i].description
                let company = this.experienceslist[i].company
                let location = this.experienceslist[i].location
                let duration = this.experienceslist[i].duration
                let tech_used = this.experienceslist[i].tech_tags.split(',');

                let one_experience = new Experience(
                    id, title, description, company, location, duration, tech_used
                );
                this.experiences.push(one_experience)


            }
        },
        methods: {
            CreateExperience() {
                this.createexperience = true
            },
            SavenewExperience() {


                const auth = {
                    headers: {Authorization: 'JWT ' + this.$store.state.token}

                }
                this.loading = true
                this.$validator.validate().then(valid => {
                    if (valid) {
                        UsersService.newexperience(
                            {
                                candidate: this.$store.state.user.pk,
                                title: this.experiencetitle,
                                description: this.experiencedescription,
                                company: this.experiencecompany,
                                tech_tags: this.experiencetech,
                                location: this.experiencelocation,
                                duration: this.experienceduration

                            },
                            auth)
                            .then(resp => {
                                    let id = resp.data.id
                                    let title = resp.data.title
                                    let description = resp.data.description
                                    let company = resp.data.company
                                    let location = resp.data.location
                                    let duration = resp.data.duration
                                    let tech_used = resp.data.tech_tags.split(',');

                                    let one_experience = new Experience(
                                        id, title, description, company, location, duration, tech_used
                                    );
                                    this.experiences.push(one_experience)
                                    this.loading = false

                                    this.createexperience = false

                                    this.experiencetitle = ''
                                    this.experiencecompany = ''
                                    this.experienceduration = ''
                                    this.experiencelocation = ''
                                    this.experiencetech = ''
                                    this.experiencedescription = ''
                                    this.experiencetags = []


                                    return resp

                                }
                            )
                            .catch(error => {
                                console.log(error)
                            })
                    } else {
                        this.loading = false

                    }
                })


            },

            handleClose1(removedTag) {
                const tags = this.experiencetags.filter(tag => tag !== removedTag)
                this.experiencetags = tags
                let alltags = this.experiencetags.join(", ")
                this.experiencetech = alltags

            },

            showInput1() {
                this.inputVisible1 = true
                this.$nextTick(function () {
                    this.$refs.input.focus()
                })
            },

            handleInputChange1(e) {
                this.inputValue1 = e.target.value
            },

            handleInputConfirm1() {
                const inputValue = this.inputValue1
                let experiencetags = this.experiencetags
                if (inputValue && experiencetags.indexOf(inputValue) === -1) {
                    experiencetags = [...experiencetags, inputValue]
                }

                let alltags = experiencetags.join(", ")
                this.experiencetech = alltags
                Object.assign(this, {
                    experiencetags,
                    inputVisible1: false,
                    inputValue1: '',
                })
            },
        }
    }
</script>

<style scoped>

</style>
