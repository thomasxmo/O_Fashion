<template>
  <div class="mostButton" :style="{ 'padding': padding }">
    <h3 :style="{ 'font-size': fontSize + 'px' }">{{ btnText }}</h3>
  </div>
</template>

<script>

export default {
  name: "mostButton",
  data() {
    return {

    }
  },
  props: [
    "btnText",
    "fontSize",
    "padding",
    // "toPage",
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
.mostButton {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--secound-color);
  cursor: pointer;
  outline: none;
  border: none !important;
  height: 100%;
  overflow: hidden;
  padding: 15px 25px;
  text-transform: uppercase;
  font-weight: 500;
  letter-spacing: 0.1em;
  transition: var(--main-transition);


  h3 {
    font-size: 20px;
    color: var(--third-color);
    margin: 0;
    z-index: 3;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 110%;
    background-color: var(--main-color);
    z-index: 2;
    transition: var(--main-transition);
    outline: none;
    border: none !important;

  }

  &:hover::before {
    width: 110%;
  }
}

</style>