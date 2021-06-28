<template>
  <a-layout id="components-layout-demo-side" style="min-height: 100vh;background-color:#ffffff ">

    <RecruiterSider/>


    <a-layout-content :style="{   background: '#FAFBFF', minHeight: '280px', }">
      <a-card class="hellocard" :bordered="false">

        <a-row style="color: white">
          <a-col span="12">
            <a-breadcrumb>
              <a-breadcrumb-item><a @click="$router.push('/recruiter')" style="color: white">Home</a>
              </a-breadcrumb-item>
              <a-breadcrumb-item style="color: white">My Organizations</a-breadcrumb-item>

            </a-breadcrumb>
            <span style="font-size: 1.7rem;font-family: sofia_prosemibold;margin-bottom: 0;color: white">
                My Organizations</span>
          </a-col>


        </a-row>


      </a-card>
      <div style="height: 70vh;overflow-y: scroll;margin-bottom: 1rem">
        <a-row :gutter="16" style="margin-left: 0;margin-right: 0">

          <a-col :xs="{span: 24, offset: 0 }" :sm="{span: 24, offset: 0 }"
                 :md="{span: 6, offset: 0 }"
                 :lg="{span: 6 }" :xl="{span: 6 }">
            <a-card class="cardshadow" style="width: 100%;margin-bottom: 1rem">

              <div style="color: black">

                <a-row>
                  <a-col span="24" style="margin-bottom: 1rem">
                    <div style="text-align: center">
                      <img class="poolavatar" src="@/assets/images/company.svg">
                    </div>
                  </a-col>
                  <a-col span="24">

                    <p v-if="edit">Edit Organization</p>
                    <p v-else>Create new Organization/Company</p>


                  </a-col>
                  <a-col span="24">
                    <a-form-item
                        label="Organization Name"
                        :label-col="{ span: 24 }"
                        :wrapper-col="{ span: 24 }"
                    >
                      <a-input placeholder="Organization Name" v-model="organization" v-validate="{required: true}"
                               name="organization_name" data-vv-validate-on="change|custom|input"/>
                      <span class="errorMessage">{{ errors.first('organization_name') }}</span>
                    </a-form-item>
                    <a-form-item v-if="active_members_objs.length>0">
                      <p>Current active team members</p>
                      <div v-for="email in active_members_objs" v-bind:key="email">
                        {{ email.user.email }}
                        <a-popconfirm
                            title="Are you sure you wan to remove member?"
                            ok-text="Yes"
                            cancel-text="No"
                            @confirm="RemoveMember(email)"
                            @cancel="cancel"
                        >
                          <a-icon

                              class="dynamic-delete-button"
                              type="minus-circle-o"

                          />
                        </a-popconfirm>

                      </div>

                    </a-form-item>


                    <a-form-item>
                      <span style="font-family: sofia_proregular">Invite members to join using their emails(we will send
                        them invitations</span>
                      <br>
                      <template v-for="(tag, index) in tags">

                        <a-tag :key="tag" :closable="index >= 0"
                               :afterClose="() => handleClose(tag)" color="#2db7f5">
                          {{ tag }}
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
                          v-validate="{required: true,email}" data-vv-as="email" name="email_address"
                          data-vv-validate-on="change|custom|input"
                      />
                      <a-tag v-else style="background: #fff; borderStyle: dashed;" @click="showInput">
                        <a-icon type="plus"/>
                        New Email to invite
                      </a-tag>
                      <br>
                      <span class="errorMessage">{{ errors.first('email_address') }}</span>
                    </a-form-item>
                    <a-form-item>
                      <a-button type="primary" html-type="submit" @click="submitForm">
                        Submit
                      </a-button>

                    </a-form-item>


                  </a-col>

                </a-row>

              </div>


            </a-card>
          </a-col>
          <a-col :xs="{span: 24, offset: 0 }" :sm="{span: 24, offset: 0 }"
                 :md="{span: 16, offset: 0 }"
                 :lg="{span: 16 }" :xl="{span: 16 }">
            <a-card class="cardshadow" style="width: 100%;margin-bottom: 1rem">

              <div style="color: black">

                <a-row>

                  <a-col span="24">
                    <a-tabs default-active-key="1">
                      <a-tab-pane key="1" tab="My teams">

                        <div v-if="loading">
                          <a-skeleton active/>
                        </div>
                        <div v-else>

                          <div v-if="organ_list.length>0">


                            <div v-for="team in organ_list" v-bind:key="team">
                              <a-card>
                                <p>Team name : {{ team.organization.name }}</p>
                                <div v-if="team.is_admin">


                                  <div v-if="team.active.length>0">
                                    <p>Active team members</p>
                                    <div v-for="member in team.active" v-bind:key="member">
                                      <p style="font-family: sofia_proregular;text-decoration: underline;text-decoration-color: #1F81CE">
                                        {{ member.user.email }}</p>
                                    </div>
                                  </div>

                                  <div v-if="team.members.length>0">
                                    <p>The following invites sent are waiting acceptance from user</p>
                                    <div v-for="member in team.members" v-bind:key="member">
                                      <p style="font-family: sofia_proregular;text-decoration: underline;text-decoration-color: #1F81CE">
                                        {{ member.invitee_identifier }}</p>
                                    </div>
                                  </div>


                                  <p style="font-family: sofia_prolight">You can edit team to add or remove members</p>
                                  <a-button type="primary" html-type="submit" @click="editOrganization(team)">
                                    Edit team
                                  </a-button>
                                </div>
                                <div v-else>
                                  <p>Team members</p>
                                  <div v-for="member in team.active" v-bind:key="member">
                                    <p style="font-family: sofia_proregular;text-decoration: underline;text-decoration-color: #1F81CE">
                                      {{ member.user.email }}</p>
                                  </div>
                                  <a-popconfirm
                                      title="Are you sure you want to leave?"
                                      ok-text="Yes"
                                      cancel-text="No"
                                      @confirm="ExitTeam(team)"

                                  >
                                    <a-button type="primary" html-type="submit" >
                                      Exit team
                                    </a-button>
                                  </a-popconfirm>



                                </div>


                              </a-card>
                            </div>
                          </div>
                          <div v-else>
                            <a-result status="404" sub-title="Sorry, You are not part of a team or an organization.">
                              <template #extra>
                                <p>You can create one and add member on the left</p>
                              </template>
                            </a-result>

                          </div>
                        </div>


                      </a-tab-pane>
                      <a-tab-pane key="2" tab="My invitations" force-render>
                        <div class="hero" style="background-color: #FAFAFA">
                          <a-row>
                            <a-col span="6">
                              <span style="font-weight: bold">Organization</span>
                            </a-col>

                            <a-col span="6">
                              Invited by


                            </a-col>
                            <a-col span="6">
                              Date invited

                            </a-col>
                            <a-col span="6">
                              Action

                            </a-col>


                          </a-row>


                        </div>

                        <a-list item-layout="horizontal" :data-source="invitations"
                                :pagination="pagination"
                                style="overflow-y: scroll;padding: 1%;height: 30vh;margin-bottom: 1rem">
                          <div slot="footer"><b>Your ideal developer is one click away </b></div>
                          <a-list-item slot="renderItem" slot-scope="item">

                            <div class="hero" style="width: 100%">
                              <a-row>
                                <a-col span="6">
                                  <span style="font-weight: bold">{{ item.organization.name }}</span>

                                </a-col>

                                <a-col span="6">
                                  <span style="font-weight: bold">{{
                                      item.invited_by.first_name
                                    }} {{ item.invited_by.last_name }}</span>


                                </a-col>

                                <a-col span="6">
                                  {{ item.created | moment }}

                                </a-col>
                                <a-col span="6">
                                  <a-dropdown-button @click="AcceptInvitation(item)">
                                    Accept invite
                                    <a-menu slot="overlay" @click="RejectInvite(item)">
                                      <a-menu-item key="1">
                                        <a-icon type="close"/>
                                        reject invite
                                      </a-menu-item>

                                    </a-menu>
                                  </a-dropdown-button>
                                </a-col>


                              </a-row>


                            </div>
                          </a-list-item>
                        </a-list>


                      </a-tab-pane>

                    </a-tabs>


                  </a-col>


                </a-row>

              </div>


            </a-card>
          </a-col>
        </a-row>
      </div>

    </a-layout-content>
  </a-layout>
</template>

<script>
import RecruiterSider from "@/components/frontend/recruiter/layout/RecruiterSider";
import Vue from "vue";
import VeeValidate from "vee-validate";

Vue.use(VeeValidate, {
  events: 'change|input|custom'
});
import Organizations from '@/services/Organizations'
import moment from "moment";


export default {
  name: "Organization",
  data() {
    return {
      organization: '',
      organization_slug: '',
      currentUserProfile: null,
      emails: [],
      tags: [],
      inputVisible: false,
      inputValue: '',
      organizations: null,
      currentOrganization: null,
      edit: false,
      organ_list: null,
      invited_members: [],
      invitations: [],
      pagination: {

        pageSize: 20,
      },
      loading: false,
      accepted_members: [],
      active_members_emails: [],
      active_members_objs: []


    }
  },
  components: {
    RecruiterSider


  },

  async mounted() {


    if (this.$store.state.user.pk) {
      this.currentUserProfile = this.$store.state.user_object
      this.getOrganization()

    }


  },

  filters: {
    moment: function (date) {
      return moment(date).format('MMMM Do YYYY');
    },

  },
  methods: {
    getOrganization() {
      this.loading = true
      this.organizations = null
      this.organ_list = []
      this.invited_members = []
      this.accepted_members = []
      const auth = {
        headers: {Authorization: 'JWT ' + this.$store.state.token}

      }
      Organizations.myorganizations(this.$store.state.user.pk, auth)
          .then(resp => {
            this.organizations = resp.data

            this.getInvitees()


          })

    },
    getOrgMembers() {
      if (this.organizations.length > 0) {
        const auth = {
          headers: {Authorization: 'JWT ' + this.$store.state.token}

        }
        this.organizations.forEach(active => {
          Organizations.organizationUsers(active.organization.id, auth)
              .then(resp => {
                this.accepted_members = resp.data

                this.ComputeInvitedMembers()


              })

        })
      }
    },
    getInvitees() {
      const auth = {
        headers: {Authorization: 'JWT ' + this.$store.state.token}

      }
      if (this.organizations.length > 0) {
        this.organizations.forEach(team => {
          Organizations.InvitationsSent(team.organization.id, auth)
              .then(resp => {
                this.invited_members = resp.data



                this.getOrgMembers()


              })

        })
      } else {
        this.MyInvitations()
        this.organ_list = []
        this.loading = false
      }


    },
    ComputeInvitedMembers() {
      this.organizations.forEach(organization => {
        let memberlist = []
        let activelist = []
        let invitees = []
        this.invited_members.forEach(member => {
          console.log(member)
          if (member.organization.id === organization.organization.id) {
            invitees.push(member)
          }
        })

        this.accepted_members.forEach(removeadmin => {
          if (removeadmin.is_admin) {
            const index = this.accepted_members.indexOf(removeadmin);
            if (index > -1) {
              this.accepted_members.splice(index, 1);
            }
          }
        })


        if (this.accepted_members.length > 0) {

          this.accepted_members.forEach(active => {

            this.invited_members.forEach(member => {


              if (member.organization.id === organization.organization.id) {

                if (active.user.email === member.invitee_identifier) {


                  activelist.push(active)
                  const index = this.invited_members.indexOf(member);
                  if (index > -1) {
                    this.invited_members.splice(index, 1);
                  }

                }


              }
            })

          })
        }
        this.invited_members.forEach(member => {
          if (member.organization === organization.organization.id) {
            memberlist.push(member)


          }
        })


        organization['members'] = memberlist
        organization['active'] = activelist
        organization['invitees'] = invitees
      })

      this.organ_list = this.organizations

      this.loading = false
      this.MyInvitations()


    },
    MyInvitations() {
      const auth = {
        headers: {Authorization: 'JWT ' + this.$store.state.token}

      }

      // compares user invitations and accepted invites and removes accepted from invitations

      Organizations.MyInvitations(this.$store.state.user.email, auth)
          .then(resp => {
            this.invitations = resp.data

            this.organ_list.forEach(organization => {
              this.invitations.forEach(invite => {
                if (invite.organization.id === organization.organization.id) {
                  const index = this.invitations.indexOf(invite);
                  if (index > -1) {
                    this.invitations.splice(index, 1);
                  }
                }
              })
            })
          })

    },
    AcceptInvitation(invite) {
      const auth = {
        headers: {Authorization: 'JWT ' + this.$store.state.token}

      }
      let adminuser = {
        'organization': invite.organization.id,
        'user': this.$store.state.user.pk,
        'is_admin': false
      }
      Organizations.organizationAddUser(adminuser, auth)
          .then(() => {
                this.getOrganization()
              }
          )

    },
    RejectInvite(invite) {
      const auth = {
        headers: {Authorization: 'JWT ' + this.$store.state.token}

      }
      Organizations.RejectInvitation(invite.id, auth)
          .then(() => {
                this.getOrganization()
              }
          )

    },
    editOrganization(team) {

      this.edit = true
      this.currentOrganization = team
      this.tags = []
      this.emails = []

      if (team.members) {
        team.members.forEach(member => {
          this.tags.push(member.invitee_identifier)
          this.emails.push(member)
        })
      }
      if (team.active) {
        team.active.forEach(member => {
          this.active_members_emails.push(member.user.email)
          this.active_members_objs.push(member)
        })
      }
      this.organization = this.currentOrganization.organization.name
      this.organization_slug = this.currentOrganization.organization.name

    },
    submitForm() {
      const auth = {
        headers: {Authorization: 'JWT ' + this.$store.state.token}

      }
      this.organization_slug = this.slugifytitle(this.organization)
      let organization = {
        'name': this.organization,
        'slug': this.organization_slug,
        'is_active': true
      }
      if (this.edit) {
        Organizations.Editmyorganizations(this.currentOrganization.organization.id, organization, auth)
            .then(resp => {
              this.currentOrganization.organization = resp.data
              this.organization = ''
              this.organization_slug = ''
              this.edit = false
              this.currentOrganization.active.forEach(active => {
                this.tags.push(active.user.email)
              })
              if (this.tags.length > 0) {


                this.currentOrganization.invitees.forEach(invited => {
                  if (this.tags.includes(invited.invitee_identifier)) {
                    const index = this.tags.indexOf(invited.invitee_identifier);
                    if (index > -1) {
                      this.tags.splice(index, 1);
                    }

                  } else {
                    Organizations.RejectInvitation(invited.id, auth)
                  }
                })

                this.tags.forEach(email => {
                  let invitee_obj = {
                    'invitee_identifier': email,
                    'invited_by': this.$store.state.user.pk,
                    'organization': this.currentOrganization.organization.id
                  }
                  Organizations.createInviteoganization(invitee_obj, auth)
                      .then(() => {
                        this.tags = []
                      })

                })

              } else {

                this.currentOrganization.invitees.forEach(invited => {
                  Organizations.RejectInvitation(invited.id, auth)
                })
              }


              this.getOrganization()


            })
      } else {
        Organizations.newOrganization(organization, auth)
            .then(resp => {
              let adminuser = {
                'organization': resp.data.id,
                'user': this.$store.state.user.pk,
                'is_admin': true
              }
              Organizations.organizationAddUser(adminuser, auth)
                  .then(next => {
                    let owner = {
                      'organization': resp.data.id,
                      'organization_user': next.data.id
                    }
                    Organizations.createoganizationOwner(owner, auth)
                        .then(() => {
                          this.getOrganization()
                        })
                  })
            })

      }


    },
    ExitTeam(team) {
      const auth = {
        headers: {Authorization: 'JWT ' + this.$store.state.token}

      }
      team.invitees.forEach(user => {
        if (this.$store.state.user.email === user.invitee_identifier) {

          Organizations.RejectInvitation(user.id, auth)
              .then(() => {
                    Organizations.RemoveUser(team.id, auth)
                        .then(() => {
                          this.getOrganization()
                        })

                  }
              )

        }
      })


    },

    slugifytitle(value) {
      return value
          .toString()
          .trim()
          .toLowerCase()
          .replace(/\s+/g, "-")
          .replace(/[^\w-]+/g, "")
          .replace(/--+/g, "-")
          .replace(/^-+/, "")
          .replace(/-+$/, "");


    },
    RemoveMember(email) {
      // remove first from users then remove invitation
      const index = this.active_members_objs.indexOf(email);
      if (index > -1) {
        this.active_members_objs.splice(index, 1);
      }


      const auth = {
        headers: {Authorization: 'JWT ' + this.$store.state.token}

      }
      Organizations.RemoveUser(email.id, auth)
          .then(() => {
            this.currentOrganization.invitees.forEach(member => {

              if (member.invitee_identifier === email.user.email) {
                Organizations.RejectInvitation(member.id, auth)
                    .then(() => {
                      const index = this.currentOrganization.members.indexOf(member);
                      if (index > -1) {
                        this.currentOrganization.members.splice(index, 1);
                      }
                      this.getOrganization()
                    })


              }
            })

          })


    },


    handleClose(removedTag) {
      const tags = this.tags.filter(tag => tag !== removedTag);
      this.tags = tags;
    },
    showInput() {
      this.inputVisible = true;
      this.$nextTick(function () {
        this.$refs.input.focus();
      });
    },
    handleInputChange(e) {
      this.inputValue = e.target.value;
    },
    handleInputConfirm() {
      const inputValue = this.inputValue;
      let tags = this.tags;
      if (inputValue && tags.indexOf(inputValue) === -1) {
        tags = [...tags, inputValue];
      }
      Object.assign(this, {
        tags,
        inputVisible: false,
        inputValue: '',
      });
    },


  },
}
</script>

<style scoped>
.dynamic-delete-button {
  cursor: pointer;
  position: relative;
  top: 4px;
  font-size: 24px;
  color: #999;
  transition: all 0.3s;
}

.dynamic-delete-button:hover {
  color: #777;
}

.dynamic-delete-button[disabled] {
  cursor: not-allowed;
  opacity: 0.5;
}

.hellocard {
  height: 8rem;
  box-shadow: 0 .125rem .25rem rgba(0, 0, 0, .075) !important;
  background: #004EC7;
  border-radius: 0;
  margin-bottom: 1rem;
  color: white;

}

.hellocard {


  box-shadow: 0 .125rem .25rem rgba(0, 0, 0, .075) !important;

  background: #004EC7;
  border-radius: 0;
  margin-bottom: 1rem;
  color: white;


}

.cardshadow {

  box-shadow: 0 .125rem .25rem rgba(0, 0, 0, .075) !important;

  background: white;
  border-radius: 0;

}


.poolavatar {
  width: 30%;
  margin-top: 0.5rem;
}

.errorMessage {
  color: #f5222d;
  font-family: sofia_prolight
}

.hero {
  padding: 1%;
  box-shadow: 0 .125rem .25rem rgba(0, 0, 0, .075) !important;
  background-color: white;
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
