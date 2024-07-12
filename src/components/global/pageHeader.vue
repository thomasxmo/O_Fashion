<template>
  <div class="pageHeader">
    <div class="PGheader">
      <div class="title">
        <h2>{{ name }}</h2>
      </div>
      <div class="breadcrumb">
        <div class="pages">
          <router-link to="/">Home</router-link> <i class="edit fa-solid fa-chevron-right"></i> <span>{{ name }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script>

export default {
  name: "pageHeader",
  data() {
    return {
    }
  },
  props: [
    "name",
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
.pageHeader {
  width: 100%;
  height: 180px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--shadow-color);

  .PGheader {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    .title {
      display: flex;
      align-items: center;
      justify-content: center;

      h2 {
        color: var(--secound-color);
        font-family: var(--main-font);
        font-weight: bold;
        font-size: 40px;
      }
    }

    .breadcrumb {
      a {
        font-size: 12px;
        color: var(--font-color);
        margin-right: 5px;
        transition: var(--main-transition);
      }

      a:hover {
        color: var(--main-color);
      }

      .edit {
        font-size: 12px;
        margin-right: 5px;
      }

      span {
        color: var(--secound-color);
        font-size: 14px;
      }
    }
  }
}
</style>