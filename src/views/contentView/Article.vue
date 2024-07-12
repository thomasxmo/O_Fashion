<template>
  <div class="article">
    <div class="row">
      <div class="col-12 breadcrumb2 mb-3">
        <div class="pages">
          <router-link to="/">Home</router-link> &nbsp;
          <i class="edit fa-solid fa-chevron-right"></i>&nbsp;
          <router-link to="/Blog">blog</router-link>&nbsp;
          <i class="edit fa-solid fa-chevron-right"></i>&nbsp;
          <router-link to="/Blog">{{ article.title }}</router-link>&nbsp;
        </div>
      </div>
      <div class="col-12 imge mb-4">
        <div class="img-box">
          <img :src="require(`@/assets/blog/${article.img}`)" alt="">
        </div>
      </div>
      <div class="col-12 tag">
        <p>{{ article.tags[0] }}</p>
      </div>
      <div class="col-12 title">
        <h1>{{ article.title }}</h1>
      </div>
      <div class="col-12 info mb-3">
        by
        <span class="author">{{ article.author }}</span>
        on
        <span class="date">{{ article.date }}</span>
      </div>
      <div class="col-12 hr mb-3">
        <hr>
      </div>
      <div class="col-12 body mb-3">
        <p>{{ article.discussion1 }}</p>
        <p>{{ article.discussion2 }}</p>
        <div class="quote">
          <p>{{ article.quote.body }}</p>
          <span>{{ article.quote.name }}</span>
        </div>
        <p>{{ article.discussion3 }}</p>
      </div>
      <div class="col-12 tags mb-5">
        <ul class="m-0 p-0">
          <li v-for="tag in article.tags" :key="tag" :data-type="tag" class=""><span>{{ tag }}</span>
          </li>
        </ul>
      </div>
      <div class="col-12 comments mb-3">
        <div class="num">
          <h2>{{ article.comment_count }} comments</h2>
        </div>
        <div class="comment" v-for="comment in article.comments" :key="comment.name">
          <div class="info">
            <div class="author">
              <i class="edit fa-regular fa-circle-user"></i>
              <span>{{ comment.name }}</span>
            </div>
            <div class="date">
              <i class="edit fa-regular fa-calendar"></i>
              <span>{{ comment.date }}</span>
            </div>
          </div>
          <div class="text">
            <p>{{ comment.comment }}</p>
          </div>
          <div class="col-12 hr mb-3">
            <hr>
          </div>
        </div>
      </div>
      <div class="col-12 leaveComment mb-5">
        <h2>Leave a Comment</h2>
        <form action="">
          <div class="inputs">
            <input type="text" name="name" placeholder="Name" class="name">
            <input type="email" name="email" placeholder="Email" class="email">
          </div>
          <textarea name="comment" id="" cols="30" rows="10" placeholder="massage"></textarea>
          <button>Post comment</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>

import articleJsonApi from "@/json/blog.json";


export default {
  name: "articleView",
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
  computed: {
    articleId() {
      return parseInt(this.$route.params.articleId);
    },
    article() {
      return articleJsonApi.find(article => article.id === this.articleId);
    }
  },
  mounted() {
  },
};

</script>

<style lang="scss">
.article {
  padding: 0 40px;

  .breadcrumb2 {
    text-align: left;

    a {
      color: var(--font-color);
      font-size: 14px;
      text-decoration: none !important;
      transition: var(--main-transition);
    }

    a:hover {
      color: var(--main-color);
      text-decoration: underline !important;
    }

    .edit {
      color: var(--secound-color);
      font-size: 14px;
    }
  }

  .imge {
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .tags {
    display: flex;
    align-items: center;
    justify-content: center;

    ul {
      display: flex;
      flex-wrap: wrap;

      li {
        padding: 1px 18px;
        margin-right: 10px;
        margin-top: 6px;
        border: 1px solid var(--font-color);
        color: var(--secound-color);
        background-color: #f6f6f69b;
        transition: var(--main-transition);
        cursor: pointer;

        span {
          color: var(--secound-color);
          transition: var(--main-transition);
          font-size: 14px;
        }
      }

      li:hover {
        border: 1px solid var(--main-color);
        background-color: var(--main-color);

        span {
          color: #fff;
        }
      }
    }
  }

  .tag {
    display: flex;
    align-items: center;
    justify-content: center;

    p {
      padding: 3px 18px;
      margin-top: 6px;
      border: 1px solid var(--secound-color);
      color: var(--secound-color);
      background-color: var(--third-color);
      transition: var(--main-transition);
      cursor: pointer;
    }

    p:hover {
      border: 1px solid var(--main-color);
      background-color: var(--main-color);
      color: #fff;
    }
  }

  .title {
    h1 {
      font-size: 38px;
      font-weight: 400;
      margin-bottom: 10px;
      color: var(--secound-color);
    }
  }

  .info {
    color: var(--font-color);
    font-size: 14px;

    .author {
      font-weight: 500;
      color: var(--secound-color)
    }
  }

  .hr {
    display: flex;
    align-items: center;
    justify-content: center;

    hr {
      width: 30%;
    }
  }

  .body {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    p {
      width: 85%;
      font-size: 14px;
      line-height: 1.9;
      color: var(--font-color);
      font-weight: 450;
    }

    .quote {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      width: 85%;
      border-left: 2px solid var(--secound-color);
      margin-bottom: 20px;

      p {
        width: 90%;
        font-size: 16px;
        line-height: 1.8;
        color: var(--secound-color);
        font-weight: 500;
      }

      span {
        color: var(--secound-color);
        font-weight: 500;

      }
    }
  }

  .comments {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    .num {
      h2 {
        color: var(--secound-color);
        font-weight: 350;
      }
    }

    .comment {
      width: 85%;
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
      flex-direction: column;

      .info {
        display: flex;
        align-items: center;
        justify-content: center;

        .author {
          margin-right: 20px;

          .edit {
            margin-right: 6px;
            color: var(--font-color);
          }

          span {
            color: var(--secound-color);
            font-weight: 500;

          }
        }

        .date {
          .edit {
            margin-right: 6px;
            color: var(--font-color);
          }

          span {
            color: var(--secound-color);
            font-weight: 500;

          }
        }
      }

      .text {
        margin-top: 20px;

        p {
          color: var(--font-color);
        }
      }

      .hr {
        hr {
          width: 100%;
        }
      }
    }

  }


  .leaveComment {
    h2 {
      color: var(--secound-color);
      font-weight: 400;
      margin-bottom: 20px;
    }

    form {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;

      .inputs {
        margin-bottom: 20px;
        width: 100%;

        input {
          width: 40%;
          padding: 16px 20px;
          outline: none;
          border: 1px solid #c5c5c5;
          color: var(--font-color);
          font-size: 14px;
        }

        .name {
          margin-right: 30px;
        }
      }

      textarea {
        width: calc(80% + 30px);
        padding: 16px 20px;
        outline: none;
        border: 1px solid #c5c5c5;
        color: var(--font-color);
        font-size: 14px;
        resize: none;
        margin-bottom: 30px;
      }

      button {
        outline: none;
        border: none;
        background-color: var(--secound-color);
        color: var(--third-color);
        padding: 15px 25px;
        text-transform: uppercase;
        font-weight: 500;
        letter-spacing: .1em;
        font-size: 14px;
        transition: var(--main-transition);
      }

      button:hover {
        background-color: var(--main-color);
      }
    }
  }


}

@media (max-width: 770px) {}

@media (max-width: 579px) {
  .article {
    padding: 0 20px;

    .breadcrumb2 {
      a {
        font-size: 12px;
      }

      .edit {
        font-size: 12px;
      }
    }

    .tags {
      ul {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;

        li {
          padding: 1px 14px;

          span {
            font-size: 12px;
          }
        }

        li:hover {
          border: 1px solid var(--main-color);
          background-color: var(--main-color);

          span {
            color: #fff;
          }
        }
      }
    }

    .tag {
      p {
        padding: 2px 14px;
      }
    }

    .title {
      h1 {
        font-size: 28px;
      }
    }

    .info {
      color: var(--font-color);
      font-size: 12px;
    }

    .hr {
      hr {
        width: 50%;
      }
    }

    .body {
      text-align: left;

      p {
        width: 90%;
      }
    }

    .comments {
      .num {
        h2 {
          margin-bottom: 25px;
        }
      }

      .comment {
        width: 95%;
      }
    }


    .leaveComment {
      form {
        .inputs {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;

          input {
            width: 100%;
          }

          .name {
            margin-right: 0px;
            margin-bottom: 15px;
          }
        }

        textarea {
          width: 100%;
        }
        button {
          padding: 15px 20px;
        }
      }
    }


  }
}
</style>