<template>
<div>
  <p style="font-family: sofia_proregular">Which tools do you use to effectively carry out your product management duties(example trello,asana)</p>
  <div>
    <template v-for="(tag, index) in tags">
      <a-tooltip v-if="tag.length > 20" :key="tag" :title="tag">
        <a-tag :key="tag" :closable="index !== 0" @close="() => handleClose(tag)">
          {{ `${tag.slice(0, 20)}...` }}
        </a-tag>
      </a-tooltip>
      <a-tag v-else :key="tag" :closable="index !== 0" @close="() => handleClose(tag)">
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
  <br>
  <p style="font-family: sofia_proregular">Add 2 work experience stories(let it focus about a kpi or team leading.example provided below)</p>
  <br>
  <p style="font-family: sofia_prolight">Led a team of 8 developers to improve our user retention on our sales app .Spent
    one month of analysing user interaction(tools used hotjar) and then liaise with the ux
    designers to come up with a better flow(tools used marvel for prototyping and wireframe)
    which was then implemented by the developer</p>
  <a-textarea
      placeholder="Add an work experience story"
      :auto-size="{ minRows: 2, maxRows: 6 }"
  />
</div>
</template>

<script>
export default {
  name: "Product",
  data() {
    return {
      tags: [],
      inputVisible: false,
      inputValue: '',
    };
  },
  methods: {
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
  },
}
</script>

<style scoped>

</style>
