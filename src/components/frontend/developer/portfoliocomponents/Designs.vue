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
          <a-card-meta title="Add new Project" style="text-align: center">

          </a-card-meta>
        </a-card>
      </a-col>

      <a-col span="18" style="overflow-y: scroll;padding: 1%;height: 70vh;">
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
                  Feb 2018 – Mar 2018

                  <p>Role in Project:</p>
                  <a-tag color="#1F81CE" style="margin-bottom: 1rem">
                    Developer
                  </a-tag>
                  <p>Tools used:</p>
                  <a-tag color="#1F81CE" style="margin-bottom: 1rem">
                    react
                  </a-tag>
                  <a-tag color="#1F81CE" style="margin-bottom: 1rem">
                    django
                  </a-tag>
                  <a-tag color="#1F81CE" style="margin-bottom: 1rem">
                    vue
                  </a-tag>
                  <p>Description: You can develop,design,product or even devops.</p>
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
                  Feb 2018 – Mar 2018

                  <p>Role in Project:</p>
                  <a-tag color="#1F81CE" style="margin-bottom: 1rem">
                    Developer
                  </a-tag>
                  <a-tag color="#1F81CE" style="margin-bottom: 1rem">
                    Designer
                  </a-tag>
                  <p>Tools used:</p>
                  <a-tag color="#1F81CE" style="margin-bottom: 1rem">
                    react
                  </a-tag>
                  <a-tag color="#1F81CE" style="margin-bottom: 1rem">
                    django
                  </a-tag>
                  <a-tag color="#1F81CE" style="margin-bottom: 1rem">
                    vue
                  </a-tag>
                  <a-tag color="#1F81CE" style="margin-bottom: 1rem">
                    Adobe Illustrator
                  </a-tag>
                  <p>Description: You can develop,design,product or even devops.</p>
                </template>
              </a-card-meta>
            </a-card>
          </a-col>


        </a-row>


      </a-col>

    </a-row>
    <a-modal v-model="visible" title="New Project"
             :dialog-style="{ top: '20px' }">
      <template slot="footer">

        <a-button key="submit" type="primary" :loading="loading" @click="SavenewProject">
          Save
        </a-button>
      </template>
      <a-form


      >
        <a-form-item
            label="Describe what the Project is about"
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

        <a-form-item label="Project Url">

          <a-input  />
          <p>Was the project personal or company</p>
          <a-radio-group name="radioGroup" :default-value="1" v-model="projectType">
            <a-radio :value="1">
              Company
            </a-radio>
            <a-radio :value="2">
              Personal
            </a-radio>

          </a-radio-group>
          <div v-if="projectType === 1">
            <a-input  placeholder="Company name"/>
            <a-input placeholder="Company url" />
            <a-input placeholder="Location" />
          </div>

        </a-form-item>
        <a-form-item  label="Start and End of project" >


          <p>
            <a-checkbox v-model="Inprogress">
              Is the project still in progress
            </a-checkbox></p>

          <div >

            <a-space>
              <a-month-picker placeholder="Start Month" >

              </a-month-picker>
              <a-month-picker v-if="Inprogress === false" placeholder="End Month" >

              </a-month-picker>
            </a-space>
          </div>

        </a-form-item>

        <a-form-item>
          <span >Tools used in project</span>
          <br>
          <span>Which role did you play in the project(you can pick more than one).</span>
          <br>
          <a-checkable-tag v-model="Developer"  @change="handleChange">
            Developer
          </a-checkable-tag>
          <a-checkable-tag v-model="Design" @change="handleChange">
            Designer
          </a-checkable-tag>
          <a-checkable-tag v-model="Product" @change="handleChange">
            Product Manager
          </a-checkable-tag>
          <a-checkable-tag v-model="Devops" @change="handleChange">
            Devops
          </a-checkable-tag>

          <div v-if="Developer">
            Developer tools:
            <template v-for="(tag, index) in tags">
              <a-tooltip v-if="tag.length > 20" :key="tag" :title="tag">
                <a-tag :key="tag"
                       :afterClose="() => handleClose(tag)" color="#2db7f5">
                  {{ `${tag.slice(0, 20)}...` }}
                </a-tag>
              </a-tooltip>
              <a-tag v-else :key="tag" :closable="index >= 0"
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
            />
            <a-tag v-else style="background: #fff; borderStyle: dashed;" @click="showInput">
              <a-icon type="plus" /> New Tag
            </a-tag>
          </div>

          <div v-if="Design">
            Design tools:
            <template v-for="(tag, index) in tagsDesign">
              <a-tooltip v-if="tag.length > 20" :key="tag" :title="tag">
                <a-tag :key="tag"
                       :afterClose="() => handleCloseDesign(tag)" color="#2db7f5">
                  {{ `${tag.slice(0, 20)}...` }}
                </a-tag>
              </a-tooltip>
              <a-tag v-else :key="tag" :closable="index >= 0"
                     :afterClose="() => handleCloseDesign(tag)" color="#2db7f5">
                {{ tag }}
              </a-tag>
            </template>
            <a-input
                v-if="inputVisibleDesign"
                ref="input"
                type="text"
                size="small"
                :style="{ width: '78px' }"
                :value="inputValueDesign"
                @change="handleInputChangeDesign"
                @blur="handleInputConfirmDesign"
                @keyup.enter="handleInputConfirmDesign"
            />
            <a-tag v-else style="background: #fff; borderStyle: dashed;" @click="showInputDesign">
              <a-icon type="plus" /> New Tag
            </a-tag>
          </div>

          <div v-if="Product">
            Product design tools:
            <template v-for="(tag, index) in tagsProduct">
              <a-tooltip v-if="tag.length > 20" :key="tag" :title="tag">
                <a-tag :key="tag"
                       :afterClose="() => handleCloseProduct(tag)" color="#2db7f5">
                  {{ `${tag.slice(0, 20)}...` }}
                </a-tag>
              </a-tooltip>
              <a-tag v-else :key="tag" :closable="index >= 0"
                     :afterClose="() => handleCloseProduct(tag)" color="#2db7f5">
                {{ tag }}
              </a-tag>
            </template>
            <a-input
                v-if="inputVisibleProduct"
                ref="input"
                type="text"
                size="small"
                :style="{ width: '78px' }"
                :value="inputValueProduct"
                @change="handleInputChangeProduct"
                @blur="handleInputConfirmProduct"
                @keyup.enter="handleInputConfirmProduct"
            />
            <a-tag v-else style="background: #fff; borderStyle: dashed;" @click="showInputProduct">
              <a-icon type="plus" /> New Tag
            </a-tag>
          </div>

          <div v-if="Devops">
            Devops tools:
            <template v-for="(tag, index) in tagsOps">
              <a-tooltip v-if="tag.length > 20" :key="tag" :title="tag">
                <a-tag :key="tag"
                       :afterClose="() => handleCloseOps(tag)" color="#2db7f5">
                  {{ `${tag.slice(0, 20)}...` }}
                </a-tag>
              </a-tooltip>
              <a-tag v-else :key="tag" :closable="index >= 0"
                     :afterClose="() => handleCloseOps(tag)" color="#2db7f5">
                {{ tag }}
              </a-tag>
            </template>
            <a-input
                v-if="inputVisiblesOps"
                ref="input"
                type="text"
                size="small"
                :style="{ width: '78px' }"
                :value="inputValueOps"
                @change="handleInputChangeOps"
                @blur="handleInputConfirmOps"
                @keyup.enter="handleInputConfirmOps"
            />
            <a-tag v-else style="background: #fff; borderStyle: dashed;" @click="showInputOps">
              <a-icon type="plus" /> New Tag
            </a-tag>
          </div>
        </a-form-item>
        <a-form-item>
          <p style="font-family: sofia_probold"> Add images of the project</p>
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
      Developer: false,
      Product: false,
      Design: false,
      Devops: false,
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
      tags: ['react'],
      inputVisible: false,
      inputValue: '',
      tagsDesign: ['illustrator'],
      inputVisibleDesign: false,
      inputValueDesign: '',
      tagsProduct: [ 'trello'],
      inputVisibleProduct: false,
      inputValueProduct: '',
      tagsOps: ['heroku'],
      inputVisiblesOps: false,
      inputValueOps: '',
      projectType:2,
      Inprogress:false
    };
  },
  methods: {
    showModal() {
      this.visible = true;
    },
    handleChange(checked) {
      console.log(checked);
    },

    handleClose(removedTag) {
      const tags = this.tags.filter(tag => tag !== removedTag);
      this.tags = tags;
    },
    showInput() {
      this.inputVisible = true;
      this.$nextTick(function() {
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

    handleCloseDesign(removedTag) {
      const tags = this.tagsDesign.filter(tag => tag !== removedTag);
      this.tagsDesign = tags;
    },
    showInputDesign() {
      this.inputVisibleDesign = true;
      this.$nextTick(function() {
        this.$refs.input.focus();
      });
    },
    handleInputChangeDesign(e) {
      this.inputValueDesign = e.target.value;
    },
    handleInputConfirmDesign() {
      const inputValue = this.inputValueDesign;
      let tagsDesign = this.tagsDesign;
      if (inputValue && tagsDesign.indexOf(inputValue) === -1) {
        tagsDesign = [...tagsDesign, inputValue];
      }
      Object.assign(this, {
        tagsDesign,
        inputVisibleDesign: false,
        inputValueDesign: '',
      });
    },

    handleCloseProduct(removedTag) {
      const tags = this.tagsProduct.filter(tag => tag !== removedTag);
      this.tagsProduct = tags;
    },
    showInputProduct() {
      this.inputVisibleProduct = true;
      this.$nextTick(function() {
        this.$refs.input.focus();
      });
    },
    handleInputChangeProduct(e) {
      this.inputValueProduct = e.target.value;
    },
    handleInputConfirmProduct() {
      const inputValue = this.inputValueProduct;
      let tagsProduct = this.tagsProduct;
      if (inputValue && tagsProduct.indexOf(inputValue) === -1) {
        tagsProduct = [...tagsProduct, inputValue];
      }
      Object.assign(this, {
        tagsProduct,
        inputVisibleProduct: false,
        inputValueProduct: '',
      });
    },

    handleCloseOps(removedTag) {
      const tags = this.tagsOps.filter(tag => tag !== removedTag);
      this.tagsOps = tags;
    },
    showInputOps() {
      this.inputVisiblesOps = true;
      this.$nextTick(function() {
        this.$refs.input.focus();
      });
    },
    handleInputChangeOps(e) {
      this.inputValueOps = e.target.value;
    },
    handleInputConfirmOps() {
      const inputValue = this.inputValueOps;
      let tagsOps = this.tagsOps;
      if (inputValue && tagsOps.indexOf(inputValue) === -1) {
        tagsOps = [...tagsOps, inputValue];
      }
      Object.assign(this, {
        tagsOps,
        inputVisiblesOps: false,
        inputValueOps: '',
      });
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
