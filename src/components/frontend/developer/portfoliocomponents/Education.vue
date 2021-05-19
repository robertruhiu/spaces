<template>
<div style="overflow-y: scroll;padding: 1%;height: 70vh;">
  <p style="font-family: sofia_probold;text-decoration: underline;text-decoration-color: #1F81CE">Education</p>
  <div style="color: blue">
    <a-button type="primary" @click="showModalEducation" >
      <a-icon type="plus-circle" theme="twoTone"/>Add Education
    </a-button>
  </div>
  <br>
  <a-timeline>
    <a-timeline-item
    >

      <p style="font-weight: 700">
        Jaramogi Oginga Odinga University
        <a >
          <a-icon type="edit" theme="twoTone"/>
        </a>

      </p>

      <p>
        Bsc Computer Security forensics


      </p>


      <p>2013 -2017</p>

    </a-timeline-item>


  </a-timeline>
  <a-timeline>

    <a-timeline-item
    >

      <p style="font-weight: 700">
        Jaramogi Oginga Odinga University
        <a >
          <a-icon type="edit" theme="twoTone"/>
        </a>

      </p>

      <p>
        Bsc Computer Security forensics


      </p>


      <p>2013 -2017</p>

    </a-timeline-item>

  </a-timeline>
  <br>
  <p style="font-family: sofia_probold;text-decoration: underline;text-decoration-color: #1F81CE">Certificates</p>
  <div style="color: blue">
    <a-button type="primary" @click="showModalCertifcates" >
      <a-icon type="plus-circle"  theme="twoTone"/>Add Certificate
    </a-button>
  </div>
  <br>
  <a-timeline>
    <a-timeline-item
    >

      <p style="font-weight: 700">
        Product Marketing certification
        <a >
          <a-icon type="edit" theme="twoTone"/>
        </a>

      </p>

      <p>
        Issuing organization: Product school


      </p>


      <p>Issued on : Aug 2020</p>

    </a-timeline-item>


  </a-timeline>

  <br>


  <a-modal v-model="Certifcatevisible" title="New Certificate" >
    <template slot="footer">

      <a-button key="submit" type="primary" @click="SavenewExperience">
        Save
      </a-button>
    </template>
    <a-form-item
        label="Certificate name"
        :label-col="{ span: 24 }"
        :wrapper-col="{ span: 24 }"
    >
      <a-input



      />


    </a-form-item>
    <a-form-item
        label="Issuing organization"
        :label-col="{ span: 24 }"
        :wrapper-col="{ span: 24 }"
    >
      <a-input



      />


    </a-form-item>
    <a-form-item
        label="Issue month"
        :label-col="{ span: 24 }"
        :wrapper-col="{ span: 24 }"
    >

        <a-month-picker placeholder="Select month" >

        </a-month-picker>




    </a-form-item>
  </a-modal>
  <a-modal v-model="Educationvisible" title="New Education" >
    <template slot="footer">

      <a-button key="submit" type="primary" @click="SavenewExperience">
        Save
      </a-button>
    </template>
    <a-form-item
        label="Institution name"
        :label-col="{ span: 24 }"
        :wrapper-col="{ span: 24 }"
    >
      <a-input



      />


    </a-form-item>
    <a-form-item
        label="Degree or course tile"
        :label-col="{ span: 24 }"
        :wrapper-col="{ span: 24 }"
    >
      <a-input



      />


    </a-form-item>
    <a-form-item
        label="Start and End of course"
        :label-col="{ span: 24 }"
        :wrapper-col="{ span: 24 }"
    >
      <a-space>
        <a-month-picker placeholder="Select month" >

        </a-month-picker>
        <a-month-picker placeholder="Select month" >

        </a-month-picker>
      </a-space>



    </a-form-item>
  </a-modal>

</div>
</template>

<script>
export default {
  name: "Education",
  data() {
    return {
      Certifcatevisible: false,
      Educationvisible:false
    };
  },
  methods: {
    showModalCertifcates() {
      this.Certifcatevisible = true;
    },
    showModalEducation() {
      this.Educationvisible = true;
    },

  },
}
</script>

<style scoped>
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
