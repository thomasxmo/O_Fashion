<template>
  <div class="blogFilter">
    <div class="row">
      <div class="searchBar col-12">
        <form action="">
          <div class="group">
            <input required="" type="text" class="input" />
            <span class="highlight"></span>
            <span class="bar"></span>
            <label>search blog..</label>
            <button type="submit"><i class="edit fa-solid fa-search"></i></button>
          </div>
        </form>
      </div>
      <div class="categories col-12 mt-4">
        <div class="head">
          <h6>Categories</h6>
        </div>
        <ul class="m-0 p-0">
          <li v-for="category in categories" :key="category" class="mt-2" :data-type="category"
            @click="filterCategories($event)">
            <span>{{ category }}</span>
          </li>
        </ul>
      </div>
      <div class="recent col-12 mt-4">
        <div class="head">
          <h6>Recent Posts</h6>
        </div>
        <div class="posts">
          <div class="post" v-for="(post, index) in shownPosts" :key="index">
            <div class="img-box">
              <img :src="require(`@/assets/blog/${post.img}`)" alt="">
            </div>
            <div class="info-box">
              <span>{{ post.tags[0] }}</span>
              <h6>{{ post.title }}</h6>
              <p>{{ post.comment_count }} comment</p>
            </div>
          </div>
        </div>
      </div>
      <div class="tages col-12 mt-2 ">
        <div class="head mb-2">
          <h6>Tages</h6>
        </div>
        <ul class="m-0 p-0">
          <li v-for="tag in tags" :key="tag" class="mt-2" :data-type="tag" @click="filterTags($event)"><span>{{ tag
              }}</span></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      categories: ["Beauty", "Fashon", "Lifestyle", "Trending"],
      tags: ["Beauty", "Men", "Women", "Hot", "Trending", "Love"],
      shownPosts: [],
      filterPosts: [],
      resetArr: []
    }
  },
  props: [
    "posts",
  ],
  components: {
  },
  methods: {
    filterCategories(event) {
      this.reset();
      let filterPosts = this.resetArr.filter((p) => {
        let attributes = p.category;
        var found = [event.currentTarget.getAttribute('data-type')].some((value) => {
          return attributes.includes(value);
        });
        return found;
      });
      this.filterPosts.length = 0;
      filterPosts.forEach(Post => {
        this.filterPosts.push(Post);
      });
      this.$emit('filterCategory', this.filterPosts);
    },
    filterTags(event) {
      this.reset();
      let filterPosts = this.resetArr.filter((p) => {
        let attributes = p.tags;
        var found = [event.currentTarget.getAttribute('data-type')].some((value) => {
          return attributes.includes(value);
        });
        return found;
      });
      this.filterPosts.length = 0;
      filterPosts.forEach(Post => {
        this.filterPosts.push(Post);
      });
      this.$emit('filterTags', this.filterPosts);
    },
    reset() {
      this.posts.forEach(Post => {
        if (!this.resetArr.includes(Post)) {
          this.resetArr.push(Post);
        }
      });
    }
  },
  computed: {
  },
  mounted() {
    for (let i = 0; i < 3; i++) {
      const e = this.posts[i];
      this.shownPosts.push(e)

    }
  },
};

</script>

<style lang="scss">
.blogFilter {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  text-align: left;
  padding: 25px 0;

  .searchBar {
    form {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      width: 100%;

      .group {
        display: flex;
        position: relative;
        margin-top: 5px;
        width: 100%;

        .input {
          font-size: 16px;
          padding: 10px 10px 10px 5px;
          display: block;
          width: 100%;
          border: none;
          border-bottom: 2px solid #000;
          background: transparent;
        }

        .input:focus {
          outline: none;
        }

        label {
          color: #999;
          font-size: 14px;
          font-weight: normal;
          position: absolute;
          pointer-events: none;
          left: 5px;
          top: 10px;
          transition: 0.2s ease all;
          -moz-transition: 0.2s ease all;
          -webkit-transition: 0.2s ease all;
        }

        .input:focus~label,
        .input:valid~label {
          top: -20px;
          font-size: 14px;
          color: var(--main-color);
        }

        .highlight {
          position: absolute;
          height: 60%;
          width: 100px;
          top: 25%;
          left: 0;
          pointer-events: none;
          opacity: 0.5;
        }

        button {
          outline: none;
          border: none;
          border-bottom: 2px solid #000;
          border-left: none;
          background-color: #FFF;
          padding: 13px;
          transition: background-color var(--main-transition);

          .edit {
            color: #444;
            font-size: 14px;
            transition: color var(--main-transition);
          }
        }

        .input:focus~button,
        .input:valid~button {
          border-bottom: 2px solid var(--main-color);

          .edit {
            color: var(--main-color);
          }
        }

        .input:focus {
          border-bottom: 2px solid var(--main-color);
        }
      }
    }
  }

  .categories {
    ul {
      li {
        span {
          color: #5e5e5ed1;
          transition: var(--main-transition);
          cursor: pointer;
        }
      }

      li:hover {
        span {
          color: var(--main-color);
        }
      }
    }
  }

  .recent {
    .posts {
      margin-top: 15px;
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
      flex-direction: column;

      .post {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 15px;

        .img-box {
          cursor: pointer;

          img {
            width: 90px;
            height: 90px;
            object-fit: cover;
          }
        }

        .info-box {
          display: flex;
          align-items: flex-start;
          justify-content: center;
          flex-direction: column;
          text-align: left;
          margin-left: 10px;
          transition: var(--main-transition);

          span {
            display: block;
            font-size: 12px;
            color: var(--font-color);
            margin: 6px 0;
            transition: var(--main-transition);
            cursor: pointer;
          }

          h6 {
            font-size: 14px;
            color: var(--secound-color);
            font-weight: 600;
            cursor: pointer;
            transition: var(--main-transition);
          }

          p {
            font-size: 12px;
            color: var(--font-color);
            margin: 0;
            cursor: pointer;
            transition: var(--main-transition);
          }

          span:hover {
            color: var(--main-color);
          }

          h6:hover {
            color: var(--main-color);
          }

          p:hover {
            color: var(--main-color);
          }
        }
      }
    }
  }

  .tages {
    ul {
      display: flex;
      flex-wrap: wrap;

      li {
        padding: 4px 13px;
        border: 1px solid #7a7a7a84;
        margin-right: 6px;
        background-color: #FFF;
        transition: var(--main-transition);
        cursor: pointer;

        span {
          color: #3b3b3bd1;
          transition: var(--main-transition);
        }
      }

      li:hover {
        background-color: var(--main-color);
        border: 1px solid var(--main-color);

        span {
          color: #fff;
        }
      }
    }
  }

  .head {
    border-bottom: 1px solid #75757589;

    h6 {
      color: var(--main-color);
    }
  }
}

@keyframes inputHighlighter {
  from {
    background: #5264ae;
  }

  to {
    width: 0;
    background: transparent;
  }
}

@media (max-width: 770px) {}

@media (max-width: 480px) {
  .blogFilter {
    padding: 20px 0;

    .categories {
      ul {
        li {
          span {
            font-size: 14px;
          }
        }

        li:hover {
          span {
            color: var(--main-color);
          }
        }
      }
    }

    .tages {
      ul {
        li {
          font-size: 15px;
          padding: 2px 10px;
        }
      }
    }

    .head {
      h6 {
        font-size: 15px;
      }
    }
  }
}
</style>