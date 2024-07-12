<template>
  <div class="mr-2 mt-4" :class="col">
    <router-link :to="`/Article/${id}`">
      <div class="articles mb-5">
        <div class="row">
          <div class="col-12 imge">
            <div class="img-box">
              <img :src="require(`@/assets/blog/${img}`)" alt="">
            </div>
            <div class="tags">
              <ul class="m-0 p-0">
                <li v-for="tag in tags" :key="tag" :data-type="tag" @click="filterTags($event)"><span>{{ tag }}</span>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-12 info">
            <div class="date">
              <i class="edit fa-regular fa-calendar"></i>
              <span>{{ date }}</span>
            </div>
            <div class="author">
              <i class="edit fa-regular fa-circle-user"></i>
              <span>by {{ author }}</span>
            </div>
          </div>
          <div class="col-12 title">
            <h3>{{ title }}</h3>
          </div>
          <div class="col-12 text">
            <p>{{ body }}</p>
          </div>
          <div class="col-12 readMore">
            <span>Read More</span>
          </div>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "blogArticle",
  data() {
    return {
      filterPosts: [],
      resetArr: []
    }
  },
  props: [
    "userId",
    "id",
    "title",
    "body",
    "comment_count",
    "category",
    "imgUrl",
    "img",
    "date",
    "author",
    "tags",
    "col",
    "posts",
  ],
  components: {
  },
  methods: {
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
      this.$emit('filterTagsFromArticle', this.filterPosts);
    },
    reset() {
      this.posts.forEach(Post => {
        if (!this.resetArr.includes(Post)) {
          this.resetArr.push(Post);
        }
      });
    }
  },
  mounted() {
  },
};
</script>

<style lang="scss">
.articles {
  .imge {
    position: relative;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .tags {
      position: absolute;
      bottom: 0;
      padding: 12px;

      ul {
        display: flex;
        flex-wrap: wrap;

        li {
          padding: 2px 12px;
          margin-right: 6px;
          margin-top: 6px;
          background-color: var(--third-color);
          transition: var(--main-transition);
          cursor: pointer;

          span {
            color: var(--secound-color);
            transition: var(--main-transition);
            font-size: 14px;
          }
        }

        li:hover {
          background-color: var(--main-color);

          span {
            color: #fff;
          }
        }
      }
    }
  }

  .info {
    display: flex;
    margin: 12px 0;
    text-align: left;

    div {
      margin-right: 15px;
    }

    .edit {
      margin-right: 7px;
      color: #5f5f5f;
      font-size: 14px;
    }

    span {
      color: #5f5f5f;
      font-size: 14px;
    }
  }

  .title {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    text-align: left;

    h3 {
      color: var(--secound-color);
    }
  }

  .text {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    text-align: left;

    p {
      color: #5f5f5f;
    }
  }

  .readMore {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    text-align: left;

    span {
      position: relative;
      font-weight: bold;
      color: var(--secound-color);
      transition: var(--main-transition);
      cursor: pointer;
    }

    span::before {
      content: "";
      position: absolute;
      display: block;
      bottom: -2px;
      width: 100%;
      height: 2px;
      background-color: var(--secound-color);
      transition: var(--main-transition);
    }

    span:hover {
      color: var(--main-color);
    }

    span:hover::before {
      width: 60%;
      background-color: var(--main-color);
    }
  }

}

@media (max-width: 770px) {}

@media (max-width: 480px) {
  .articles {
    .imge {

      .tags {
        padding: 10px;

        ul {
          li {
            padding: 1px 10px;

            span {
              font-size: 12px;
            }
          }

        }
      }
    }

    .info {

      div {
        margin-right: 13px;
      }

      .edit {
        margin-right: 6px;
        font-size: 12px;
      }

      span {
        font-size: 13px;
      }
    }

    .title {
      h3 {
        font-size: 20px;
      }
    }

    .body {
      p {
        font-size: 14px;
      }
    }

    .readMore {
      span {
        font-size: 14px;
      }
    }

  }
}
</style>