<template>
    <a-layout id="components-layout-demo-side" style="min-height: 100vh;">
        <CandidateSider/>
        <a-layout>

            <a-layout-content style="background-color: white">
                <DevHeader/>
                <div :style="{ padding: '6px 20px', background: '#fff', minHeight: '75vh',maxWidth:'72rem',marginTop:'1%',
                marginLeft: '1%',marginRight:'1%' }">
                <a-form :form="form">
                        <a-row :gutter="16">
                            <a-col :span="12">

                                <a-row :gutter="16">
                                    <a-col :span="24">
                                        <a-form-item
                                                label="Github profile"
                                                :label-col="{ span: 24 }"
                                                :wrapper-col="{ span:  24}"
                                        >
                                            <a-input
                                                    v-model="currentUserProfile.github_repo"

                                            />

                                        </a-form-item>

                                    </a-col>

                                    <a-col :span="24">
                                        <a-form-item
                                                label="Linkedin profile"
                                                :label-col="{ span: 24 }"
                                                :wrapper-col="{ span:  24}"
                                        >
                                            <a-input
                                                    v-model="currentUserProfile.linkedin_url"

                                            />


                                        </a-form-item>

                                    </a-col>

                                    <a-col :span="24">
                                        <a-form-item

                                                :label-col="{ span: 24 }"
                                                :wrapper-col="{ span:  24}"
                                        >
                                            <span slot="label">Country : {{currentUserProfile.country}}</span>
                                            <country-select v-model="currentUserProfile.country"
                                                            class="ant-input"
                                            />
                                        </a-form-item>

                                    </a-col>

                                    <a-col :span="24">
                                        <a-form-item
                                                label="Availability"
                                                :label-col="{ span: 24 }"
                                                :wrapper-col="{ span:  24}"
                                        >
                                            <a-select

                                                          placeholder="Select a option and change input text above"
                                                          v-model="currentUserProfile.availabilty"
                                                >
                                                    <a-select-option value="contract">
                                                        contract
                                                    </a-select-option>
                                                    <a-select-option value="fulltime">
                                                        fulltime
                                                    </a-select-option>
                                                    <a-select-option value="parttime">
                                                        part time
                                                    </a-select-option>
                                                    <a-select-option value="remote">
                                                        remote
                                                    </a-select-option>
                                                </a-select>
                                        </a-form-item>

                                    </a-col>


                                </a-row>


                            </a-col>
                            <a-col :span="12" style="padding: 2% 4%">
                                <a-col :span="24">
                                    <a-form-item
                                label="What are your tech skills "
                                :label-col="{ span: 24 }"
                                :wrapper-col="{ span:  24}"
                        >
                            <template v-for="(tag, index) in tags">
                                <a-tooltip v-if="tag.length > 20" :key="tag" :title="tag">
                                    <a-tag :key="tag"
                                           :afterClose="() => handleClose(tag)" color="#2db7f5">
                                        {{`${tag.slice(0, 20)}...`}}
                                    </a-tag>
                                </a-tooltip>
                                <a-tag v-else :key="tag" :closable="index >= 0"
                                       :afterClose="() => handleClose(tag)" color="#2db7f5">
                                    {{tag}}
                                </a-tag>
                            </template>
                            <a-input
                                    v-if="inputVisible"
                                    ref="input"
                                    type="text"
                                    size="small"
                                    :style="{ width: '78px' }"
                                    :value="inputValue"
                                    @change="handleInputChange"
                                    @blur="handleInputConfirm"
                                    @keyup.enter="handleInputConfirm"
                            />
                            <a-tag v-else @click="showInput"
                                   style="background: #fff; borderStyle: dashed;">
                                <a-icon type="plus"/>
                                New Tag
                            </a-tag>
                        </a-form-item>
                                </a-col>
                                <a-col :span="24">
                                        <a-form-item
                                                label="Bio"
                                                :label-col="{ span: 24 }"
                                                :wrapper-col="{ span:  24}"
                                        >
                                            <a-textarea name="bio"
                                                        maxlength="300"
                                                        v-model="currentUserProfile.about"
                                                        placeholder="Tell us something about yourself"
                                                        :rows="6"/>

                                        </a-form-item>

                                    </a-col>

                            </a-col>
                        </a-row>
                        <div style="text-align: center">
                            <a-button @click="Save" type="primary" style="width: 15rem">Save</a-button>

                        </div>

                    </a-form>
                </div>


            </a-layout-content>
        </a-layout>
    </a-layout>
</template>

<script>
    import CandidateSider from "../../layout/CandidateSider";
    import UsersService from '@/services/UsersService'
    import DevHeader from "../../layout/DevHeader";

    export default {
        name: "Myprofile",
        components: {
            DevHeader,
            CandidateSider,
        },
        data() {

            return {
                currentUserProfile: null,
                tags: [],
                inputVisible: false,
                inputValue: '',


            }
        },
        async mounted() {

            const auth = {
                headers: {Authorization: 'JWT ' + this.$store.state.token}

            }
            if (this.$store.state.user.pk) {
                this.currentUserProfile = (await UsersService.currentuser(this.$store.state.user.pk, auth)).data

                if (this.currentUserProfile.skills.length >= 0) {
                    let tags = this.currentUserProfile.skills.replace(/'/g, '').replace(/ /g, '').split(',');
                    for (let i = 0; i < tags.length; i++) {
                        this.tags.push(tags[i])
                    }

                }
            }


        },
        methods :{
            Save() {

                const auth = {
                    headers: {Authorization: 'JWT ' + this.$store.state.token}

                }
                for (let i = 0; i < this.tags.length; i++) {
                    if (this.tags[i] === '') {
                        let index = this.tags.indexOf(this.tags[i]);
                        this.tags.splice(index, 1);

                    }
                }
                this.currentUserProfile.skills = this.tags.join(',')

                UsersService.update(this.$store.state.user.pk, this.currentUserProfile, auth)
                    .then(resp => {
                        if (this.currentUserProfile.user_type === 'developer') {

                            this.$router.push({
                                name: 'developer'
                            })

                        } else {
                            this.$router.push({
                                name: 'recruiter'
                            })

                        }
                        return resp


                    })
                    .catch(error => {
                        return error


                    });


            },
            handleClose(removedTag) {
                const tags = this.tags.filter(tag => tag !== removedTag)
                this.tags = tags
                let alltags = this.tags.join(", ")
                this.currentUserProfile.skills = alltags

            },

            showInput() {
                this.inputVisible = true
                this.$nextTick(function () {
                    this.$refs.input.focus()
                })
            },

            handleInputChange(e) {
                this.inputValue = e.target.value
            },

            handleInputConfirm() {
                const inputValue = this.inputValue
                let tags = this.tags
                if (inputValue && tags.indexOf(inputValue) === -1) {
                    tags = [...tags, inputValue]
                }

                let alltags = tags.join(", ")
                this.currentUserProfile.skills = alltags
                Object.assign(this, {
                    tags,
                    inputVisible: false,
                    inputValue: '',
                })
            },
        }
    }
</script>

<style scoped>

</style>
