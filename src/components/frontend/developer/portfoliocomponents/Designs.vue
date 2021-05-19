<template>
  <div>
    <a-row>
      <a-col span="6" >
        <a-card hoverable style="width: 200px" @click="showModal">
          <div style="text-align: center">
            <img
                slot="cover"
                alt="example"
                src="@/assets/images/plus.svg"
                style="width: 30%"

            />
          </div>
          <a-card-meta title="Add new Design" style="text-align: center">

          </a-card-meta>
        </a-card>
      </a-col>

      <a-col span="18" >
        <a-row gutter="16">


          <a-col span="12" style="margin-bottom: 1rem">
            <a-card class="nine">

              <img
                  class="card-img-top"
                  slot="cover"
                  alt="example"
                  src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"




              />



              <a-card-meta >
                <template slot="description">
                  <p>You can develop,design,product or even devops.</p>
                  <a-button type="primary">
                    edit design
                  </a-button>
                </template>
              </a-card-meta>
            </a-card>
          </a-col>
          <a-col span="12" style="margin-bottom: 1rem" >
            <a-card class="nine">

              <img
                  class="card-img-top"
                  slot="cover"
                  alt="example"
                  src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"




              />



              <a-card-meta >
                <template slot="description">
                  <p>You can develop,design,product or even devops.</p>
                  <a-button type="primary">
                    edit design
                  </a-button>
                </template>
              </a-card-meta>
            </a-card>
          </a-col>
          <a-col span="12" style="margin-bottom: 1rem" >
            <a-card class="nine">

              <img
                  class="card-img-top"
                  slot="cover"
                  alt="example"
                  src="https://mdbcdn.b-cdn.net/img/new/standard/nature/184.jpg"




              />



              <a-card-meta >
                <template slot="description">
                  <p>You can develop,design,product or even devops.</p>
                  <a-button type="primary">
                    edit design
                  </a-button>
                </template>
              </a-card-meta>
            </a-card>
          </a-col>
          <a-col span="12" style="margin-bottom: 1rem" >
            <a-card class="nine">

              <img
                  class="card-img-top"
                  slot="cover"
                  alt="example"
                  src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"




              />



              <a-card-meta >
                <template slot="description">
                  <p>You can develop,design,product or even devops.</p>
                  <a-button type="primary">
                    edit design
                  </a-button>
                </template>
              </a-card-meta>
            </a-card>
          </a-col>

        </a-row>


      </a-col>

    </a-row>
    <a-modal v-model="visible" title="New Design" >
      <template slot="footer">

        <a-button key="submit" type="primary" :loading="loading" @click="SavenewProject">
          Save
        </a-button>
      </template>
      <a-form


      >
        <a-form-item
            label="Describe what the design is about"
            :label-col="{ span: 24 }"
            :wrapper-col="{ span: 24 }"
        >
          <a-textarea
              placeholder="Autosize height with minimum and maximum number of lines"
              :auto-size="{ minRows: 2, maxRows: 6 }"
          />
          <span style="color: #f5222d;" v-show="errors.has('project_title')"
                class="help is-danger">{{ errors.first('project_title') }}</span>
        </a-form-item>
        <a-form-item>
          <p style="font-family: sofia_probold"> Add images of the design</p>
          <a-upload
              action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
              list-type="picture"
              :default-file-list="fileList"
              class="upload-list-inline"
          >
            <a-button> <a-icon type="upload" /> upload </a-button>
          </a-upload>
        </a-form-item>
      </a-form>
    </a-modal>
  </div>

</template>

<script>
export default {
  name: "Designs",
  data() {
    return {
      visible: false,
      fileList: [
        {
          uid: '-1',
          name: 'xxx.png',
          status: 'done',
          url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
          thumbUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        },
        {
          uid: '-2',
          name: 'yyy.png',
          status: 'done',
          url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
          thumbUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        },
      ],
    };
  },
  methods: {
    showModal() {
      this.visible = true;
    },

  },
}
</script>

<style scoped>
.nine{

}
.card{
  position: relative;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;

  border-radius: .25rem;
  border: 0;
  -webkit-box-shadow: 0 10px 20px 0 rgba(0,0,0,.05);
  box-shadow: 0 10px 20px 0 rgba(0,0,0,.05)
}
.card-img-top{
  width: 100%;
  height: 15vw;
  object-fit: cover;
}
</style>
