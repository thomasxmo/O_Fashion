<template>
  <div class="topCategories">
    <h2 class="title">Explore top categories</h2>
    <div class="boxs">
      <div class="box box1">
        <a href="#">
          <h4>tops</h4>
        </a>
      </div>
      <div class="box box2">
        <a href="#">
          <h4>dress</h4>
        </a>
      </div>
      <div class="box box3">

        <a href="#">
          <h4>shoes</h4>

        </a>
      </div>
      <div class="box box4">
        <a href="#">
          <h4>shirt</h4>
        </a>
      </div>
    </div>
  </div>
</template>
  
<script>

export default {
  name: "topCategories",
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
.topCategories {
  margin-top: 60px;
  width: 100%;

  .title {
    margin: 30px auto;
    color: var(--secound-color);
    font-size: 30px;
    font-weight: bold;
    text-transform: uppercase;
  }

  .boxs {
    display: grid;
    grid-gap: 0;
    // grid-template-columns: 350px 350px 600px;
    background-color: #fff;
    color: #444;

    .box {
      position: relative;
      font-size: 150%;
      overflow: hidden;
    }

    // shine effect
    .box::before {
      content: "";
      position: absolute;
      top: 0;
      left: -25%;
      width: 10%;
      height: 100%;
      background: rgba(255, 255, 255, 0.3);
      transform: skewX(-30deg);
      transition: 0.7s;
      cursor: pointer;
    }

    .box:hover::before {
      left: 1500px !important;
      background: rgba(255, 255, 255, 0.2);
    }

    .box1 {
      grid-column: 1 / span 2;
      background-image: url("@/assets/tops.jpg");
      background-size: cover;
      min-height: 500px;
      padding-bottom: 2%;

      a {
        display: flex;
        align-items: flex-end;
        justify-content: flex-start;
        color: var(--third-color);
        margin-left: 30px;
        padding: 0;
        width: 100%;
        height: 100%;

        h4 {
          background-color: var(--secound-color);
          padding: 10px 20px;
        }
      }
    }

    .box2 {
      grid-column: 3;
      grid-row: 1 / span 2;
      background-image: url("@/assets/dress2.jpg");
      background-size: cover;
      min-height: 200px;
      padding-bottom: 2%;

      a {
        display: flex;
        align-items: flex-end;
        justify-content: flex-start;
        color: var(--third-color);
        margin-left: 30px;
        padding: 0;
        width: 100%;
        height: 100%;

        h4 {
          background-color: var(--secound-color);
          padding: 10px 20px;
        }
      }
    }

    .box3 {
      grid-column: 1;
      grid-row: 2;
      background-image: url("@/assets/shoes.jpg");
      background-size: cover;
      min-height: 300px;
      padding-bottom: 2%;

      a {
        display: flex;
        align-items: flex-end;
        justify-content: flex-start;
        color: var(--third-color);
        margin-left: 30px;
        padding: 0;
        width: 100%;
        height: 100%;

        h4 {
          background-color: var(--secound-color);
          padding: 5px 10px;
        }
      }
    }

    .box4 {
      grid-column: 2;
      grid-row: 2;
      background-image: url("@/assets/shirt.jpg");
      background-size: cover;
      min-height: 300px;
      padding-bottom: 2%;

      a {
        display: flex;
        align-items: flex-end;
        justify-content: flex-start;
        color: var(--third-color);
        margin-left: 30px;
        padding: 0;
        width: 100%;
        height: 100%;

        h4 {
          background-color: var(--secound-color);
          padding: 5px 10px;
        }
      }
    }
  }

}
</style>