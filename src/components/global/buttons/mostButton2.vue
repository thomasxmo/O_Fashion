<template>
  <div class="mostButton2">
    <div class="button" @mouseover="Hover = true, Hover2 = true" @mouseleave="Hover = false, Hover2 = false" :class="{ active: Hover , active2: Hover }">
      <h3 :style="{'font-size' : fontSize + 'px'}">{{ btnText }}</h3>
    </div>
  </div>
</template>
    
<script>

export default {
  name: "mostButton2",
  data() {
    return {
      Hover: false,
      Hover2: false,
    }
  },
  props: [
    "btnText",
    "fontSize"

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
.mostButton2 {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;

  .button {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 15px;
    background-color: var(--secound-color);
    cursor: pointer;
    transition: var(--main-transition);
    z-index: 2;
    height: 100%;


    h3 {
      font-size: 20px;
      color: var(--third-color);
      margin: 0;
      z-index: 3;
    }
  }

  .button::before{
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    background-color: var(--main-color);
    z-index: 3;
    transition: var(--main-transition);
  }
  .button::after{
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: 0;
    height: 100%;
    background-color: var(--main-color);
    z-index: 2;
    transition: var(--main-transition);
  }

  .button.active::before{
    width: 100%;
  }

  .button.active2::after{
    width: 100%;
  }
}
</style>