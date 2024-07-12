<template>
  <div class="marquee">
    <div class="track">
      <div class="content">&nbsp;i'am ofashon - shop with us - best brand ever i'am ofashon - shop with us - best brand
        ever i'am ofashon - shop with us - best brand ever</div>
    </div>
  </div>
</template>
  
<script>

export default {
  name: "marqueeVue",
  data() {
    return {
    }
  },
  props: [
    "",
    "",
    "",
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
.marquee {
  font-family: var(--main-font);
  position: relative;
  width: 100vw;
  max-width: 100%;
  height: 120px;
  overflow: hidden;
  .track {
    position: absolute;
    white-space: nowrap;
    will-change: transform;
    animation: marquee 25s linear infinite;
    .content {
      text-transform: uppercase;
      color: var(--main-color);
      font-size: 80px;
      font-weight: bold;
      opacity: 0.5;
    }
  }
}

@keyframes marquee {
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(-50%);
  }
}</style>