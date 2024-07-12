<template>
  <div class="input" :style="{ 'width': width }">
    <input :type="type" :id="id" :placeholder="placeholder" :v-model="vModel">
  </div>
</template>

<script>

export default {
  name: "inputComponent",
  data() {
    return {
    }
  },
  props: [
    "type",
    "id",
    "placeholder",
    "vModel",
    "width",
  ],
  components: {
  },
  methods: {
  },
  mounted() {
  },
};

</script>

<style lang="scss">
.input {
  input {
    position: relative;
    width: 100%;
    padding: 14px 20px;
    outline: none;
    border: 1px solid #c5c5c5;
    color: var(--secound-color);
    font-size: 13px;
    margin-bottom: 15px
  }

  input::placeholder {
    font-size: 13px;
    color: var(--font-color);
  }
}
</style>