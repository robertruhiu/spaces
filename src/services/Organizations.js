import Api from '@/services/Api'

export default {

    newOrganization(instance,auth){
        return Api().post(`organizations/addorganization `,instance, auth)
    },

    myorganizations(user_id, auth) {
        return Api().get(`organizations/organizationList/${user_id} `, auth)
    },
    Editmyorganizations(organization_id,instance, auth) {
        return Api().patch(`organizations/organizationEdit/${organization_id} `,instance, auth)
    },
    createoganizationOwner(instance, auth) {
        return Api().post(`organizations/addorganizationowner `,instance ,auth)
    },
    organizationUsers(organization_id, auth) {
        return Api().get(`organizations/organizationUserList/${organization_id} `, auth)
    },
    organizationAddUser(instance, auth) {
        return Api().post(`organizations/organizationUserAdd `,instance, auth)
    },
    organizationAddUpdateUser(user_id, auth) {
        return Api().get(`organizations/organizationUserUpdate/${user_id} `, auth)
    },
    organizationAddDeleteUser(user_id, auth) {
        return Api().get(`organizations/organizationUserDelete/${user_id} `, auth)
    },
    createInviteoganization(instance, auth) {
        return Api().post(`organizations/organizationUsersCreateInvitation `,instance ,auth)
    },
    InviteEmail(organization_id,email, auth) {
        return Api().post(`organizations/inviteEmail/${organization_id}/${email} ` ,auth)
    },
    MyInvitations(email, auth) {
        return Api().get(`organizations/UsergetInvitations/${email} `, auth)
    },
    InvitationsSent(organization_id, auth) {
        return Api().get(`organizations/organizationgetInvitations/${organization_id} `, auth)
    },
    RemoveUser(org_user_id, auth) {
        return Api().delete(`organizations/RemoveUser/${org_user_id} `, auth)
    },

    RejectInvitation(invite_id, auth) {
        return Api().delete(`organizations/RejectInvitation/${invite_id} `, auth)
    },



}
