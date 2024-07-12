<template>
  <div class="blog">
    <div class="row">
      <pageHeader name="Blog" />
    </div>
    <div class="container">
      <div class="row revers">
        <div class="col-12 col-sm-12 col-md-3 col-lg-3">
          <blogFilter :posts="posts" @filterCategory="receiveDataCategory" @filterTags="receiveDataTags" />
        </div>
        <div class="col-12 col-sm-12 col-md-9 col-lg-9">
          <blogArticle v-for="Article in companiesLoaded" @filterTagsFromArticle="receiveDataTagsfromblogArticle" :posts="posts" :key="Article.id" :id="Article.id" :userId="Article.userId"
            :title="Article.title" :body="Article.body" :comment_count="Article.comment_count"
            :category="Article.category" :imgUrl="Article.imgUrl" :img="Article.img" :date="Article.date"
            :author="Article.author" :tags="Article.tags" col="col-12 col-sm-12 col-md-12 col-lg-12" />
          <div class="loader" v-if="showBtn">
            <div class="progressBar">
              <div class="info">You've viewed {{ length }} of 10 post</div>
              <div class="bar">
                <span><span class="progress" :style="{ width: `${length}0%` }"></span></span>
              </div>
            </div>
            <button @click="loadMore()">Load More</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import pageHeader from "@/components/global/pageHeader.vue";
import blogFilter from "@/components/blog/blogFilter.vue";
import blogArticle from "@/components/blog/blogArticle.vue";
import blogArticles from "@/json/blog.json";

export default {
  name: "blogView",
  data() {
    return {
      Articles: blogArticles,
      length: 3,
      posts: blogArticles,
      showBtn: true,
    }
  },
  props: [
    "",
    "",
    "",
  ],
  components: {
    pageHeader,
    blogFilter,
    blogArticle
  },
  methods: {
    loadMore() {
      if (this.length > this.Articles.length || this.length == this.Articles.length) {
        this.length = 10;
      } else if (this.length == 9) {
        this.length = this.length + 1
        this.showBtn = false;
      } else {
        this.length = this.length + 3
      }
    },
    receiveDataCategory(data) {
      this.Articles.length = 0;
      data.forEach((Article) => {
        this.Articles.push(Article);
      });
    },
    receiveDataTags(data) {
      this.Articles.length = 0;
      data.forEach((Article) => {
        this.Articles.push(Article);
      });
    },
    receiveDataTagsfromblogArticle(data) {
      this.Articles.length = 0;
      data.forEach((Article) => {
        this.Articles.push(Article);
      });
    },
  },
  computed: {
    companiesLoaded() {
      return this.Articles.slice(0, this.length);
    },
  },
  mounted() {
  },
};

</script>

<style lang="scss">
.blog {
  .loader {
    .progressBar {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;

      .info {
        color: #787878;
        margin-bottom: 10px;
        font-size: 14px;
      }

      .bar {
        width: 40%;

        span {
          position: relative;
          display: block;
          width: 100%;
          height: 2px;
          background-color: #ccccccb8;
          transition: var(--main-transition);

          .progress {
            position: absolute;
            top: 0;
            display: block;
            height: 2px;
            width: 0;
            background-color: var(--main-color);
            transition: var(--main-transition);
          }
        }
      }
    }

    button {
      margin: 15px 0;
      outline: none;
      border: 1px solid #787878;
      background-color: #fff;
      color: var(--secound-color);
      padding: 8px 14px;
      font-size: 14px;
      transition: var(--main-transition);
    }

    button:hover {
      border: 1px solid var(--main-color);
      background-color: var(--main-color);
      color: var(--third-color);
    }
  }
}

@media (max-width: 770px) {}

@media (max-width: 480px) {
  .blog {
    .revers {
      flex-direction: column-reverse;
    }
  }
}
</style>