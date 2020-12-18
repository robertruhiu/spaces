<template>
<div>
    <a-tabs>
    <a-tab-pane key="1" >
      <span slot="tab">
                    <a-icon type="funnel-plot" />
                    Leads
                  </span>
      <Leads/>
    </a-tab-pane>
    <a-tab-pane key="2" >
      <span slot="tab">
                    <a-icon type="usergroup-add" />
                    New Applicants
                  </span>
      <Applicants/>
    </a-tab-pane>
    <a-tab-pane key="3" >
      <span slot="tab">
                    <a-icon type="codepen"/>
                    Testing skills
                  </span>
      <Test/>
    </a-tab-pane>
    <a-tab-pane key="4">
      <span slot="tab">
                    <a-icon type="book" />
                    Interviews
                  </span>
      <Interview/>
    </a-tab-pane>
    <a-tab-pane key="5">
      <span slot="tab">
                    <a-icon type="close" />
                    Rejected
                  </span>
      <Rejected/>
    </a-tab-pane>
    <a-tab-pane key="6" >
      <span slot="tab">
                    <a-icon type="edit" />
                    Edit job
                  </span>
      <EditJob v-bind:job="job"/>
    </a-tab-pane>
    
  </a-tabs>
</div>
</template>

<script>
import Leads from '@/components/frontend/recruiter/job/jobatscomponents/mobilecomponents/mobileleads';
import Applicants from '@/components/frontend/recruiter/job/jobatscomponents/mobilecomponents/mobileapplicants';
import Test from '@/components/frontend/recruiter/job/jobatscomponents/mobilecomponents/mobiletest';
import Interview from '@/components/frontend/recruiter/job/jobatscomponents/mobilecomponents/mobileinterview';
import EditJob from '@/components/frontend/recruiter/job/jobatscomponents/EditJob';
import Rejected from '@/components/frontend/recruiter/job/jobatscomponents/mobilecomponents/mobilerejected';

    export default {
        name: "Mobilebase",
        components: {
                Applicants, Leads, Test, Interview, EditJob,Rejected            
                },
              
                props:{ job:Object },
    }
</script>

<style scoped>

</style>
