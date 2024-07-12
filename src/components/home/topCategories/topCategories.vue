<template>
  <div class="topCategories">
    <h2 class="title">Explore top categories</h2>
    <div class="container-full">
      <div class="boxs">
        <div class="group-box">
          <div class="box1 box">
            <router-link to="/Shop">
              <div class="img-box">
                <a href="">
                  <img src="@/assets/tops2.jpg" alt="">
                </a>
              </div>
              <div class="info-box">
                <h2>tops</h2>
              </div>
            </router-link>
          </div>
          <div class="box2 box">
            <router-link to="/Shop">
              <div class="img-box">
                <a href="">
                  <img src="@/assets/shirt.jpg" alt="">
                </a>
              </div>
              <div class="info-box">
                <h2>shirt</h2>
              </div>
            </router-link>
          </div>
          <div class="box3 box">
            <router-link to="/Shop">
              <div class="img-box">
                <a href="">
                  <img src="@/assets/shoes.jpg" alt="">
                </a>
              </div>
              <div class="info-box">
                <h2>shoes</h2>
              </div>
            </router-link>
          </div>
        </div>
        <div class="single-box">
          <div class="box">
            <div class="img-box">
              <a href="">
                <img src="@/assets/3.jpg" alt="">
              </a>
            </div>
            <div class="info-box">
              <span>new arrivals</span>
              <h3>All CATEGORIES</h3>
              <router-link to="/Shop">shop collecction</router-link>
            </div>
          </div>
        </div>
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
  // margin-top: 30px;

  .title {
    font-family: 'Italiana', sans-serif;
    margin: 30px auto;
    color: var(--secound-color);
    font-size: 30px;
    font-weight: bold;
    text-transform: uppercase;
  }

  .boxs {
    display: flex;
    flex-wrap: wrap;


    .group-box {
      flex: 0 0 38.2%;
      max-width: 38.2%;
      display: flex;
      flex-wrap: wrap;
      margin: 0;
      padding: 0;
      overflow: hidden;
      // height: 100%;

      .box {
        position: relative;
        overflow: hidden;
        margin: 0;
        padding: 0;
        // height: 50% !important;
        overflow: hidden;

        .img-box {
          height: 100%;

          img {
            display: block;
            width: 100%;
            // height: 261.5px !important;
            max-width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }

        .info-box {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -1%);

          h2 {
            font-size: 16px;
            color: var(--third-color);
            background-color: var(--secound-color);
            padding: 10px 20px;
          }
        }
      }

      .box::before {
        content: "";
        position: absolute;
        top: 0;
        left: -30%;
        width: 10%;
        height: 100%;
        background: rgba(255, 255, 255, 0.3);
        transform: skewX(-30deg);
        cursor: pointer;
        transition: left 0.7s;
        opacity: 0;
      }

      .box:hover::before {
        left: 1000px !important;
        background: rgba(255, 255, 255, 0.2);
        opacity: 1;
      }

      .box1 {
        flex: 0 0 100%;
        max-width: 100%;
      }

      .box2 {
        flex: 0 0 50%;
        max-width: 50%;
        height: 25%;
      }

      .box3 {
        flex: 0 0 50%;
        max-width: 50%;
        height: 25%;
      }
    }

    .single-box {
      flex: 0 0 61.8%;
      max-width: 61.8%;

      .box {
        position: relative;
        overflow: hidden;
        height: 93.4%;

        .img-box {
          height: 100%;

          img {
            display: block;
            width: 100%;
            max-width: 100%;
            height: 100%;
            transition: all .5s ease-in-out;
            // object-fit: cover;
          }
        }

        .info-box {
          position: absolute;
          top: 45%;
          left: 20%;
          display: flex;
          align-items: flex-start;
          justify-content: center;
          flex-direction: column;

          h3 {
            color: var(--main-color);
            // font-size: 35px;
            font-size: 250%;
          }

          span {
            color: var(--third-color);
            font-size: 100%;
          }

          a {
            color: var(--third-color);
            font-size: 120%;
            padding-bottom: 0;
            border-bottom: 2px solid var(--third-color);
            cursor: pointer;
          }
        }
      }

      .box::before {
        content: "";
        position: absolute;
        top: 0;
        left: -30%;
        width: 10%;
        height: 100%;
        background: rgba(255, 255, 255, 0.3);
        transform: skewX(-30deg);
        cursor: pointer;
        transition: left 0.7s;
        opacity: 0;
      }

      .box:hover::before {
        left: 1400px !important;
        background: rgba(255, 255, 255, 0.2);
        opacity: 1;
      }
    }
  }
}

@media (max-width: 991px) {
  .topCategories {
    // margin-top: 30px;

    .title {
      margin: 20px auto;
      font-size: 20px;
    }

    .boxs {
      display: flex;
      flex-wrap: wrap;


      .group-box {

        .box {

          .info-box {

            h2 {
              font-size: 14px;
              padding: 5px 10px;
            }
          }
        }
      }

      .single-box {

        .box {
          .info-box {
            h3 {
              font-size: 180%;
            }

            span {
              font-size: 75%;
            }

            a {
              font-size: 90%;
            }
          }
        }
      }
    }
  }
}

@media (max-width: 690px) {
  .topCategories {
    // margin-top: 30px;

    .title {
      margin: 20px auto;
      font-size: 20px;
    }

    .boxs {
      display: flex;
      flex-direction: column-reverse;
      justify-content: center;
      align-content: center;
      align-items: center;

      .group-box {
        flex: 0 0 100%;
        max-width: 100%;

        .box {
          .info-box {

            h2 {
              font-size: 20px;
              padding: 5px 10px;
            }
          }
        }

        .box1 {
          height: 200px;
        }
      }

      .single-box {
        flex: 0 0 100%;
        max-width: 100%;

        .box {
          .info-box {
            h3 {
              font-size: 180%;
            }

            span {
              font-size: 90%;
            }

            a {
              font-size: 130%;
            }
          }
        }
      }
    }
  }
}
</style>