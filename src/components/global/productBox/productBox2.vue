<template>
  <swiper-slide>
    <div class="">
      <div class="product-box2" @mouseover="linksHover = true" @mouseleave="linksHover = false">
        <div class="msg" :style="{ 'background-color': `${msgColor}` }">{{ msg }}</div>
        <div class="img-box mb-3">
          <img class="" :class="{ active: imgHover2 }" @mouseover="imgHover1 = true, imgHover2 = false"
            @mouseleave="imgHover1 = false, imgHover2 = true"
            :src="require(`@/assets/products/${category}/${imgUrl}/color${numberOfColor2}/${img1}`)" alt="">
          <img class="" :class="{ active: imgHover1 }"
            :src="require(`@/assets/products/${category}/${imgUrl}/color${numberOfColor2}/${img2}`)" alt="">
        </div>
        <div class="info-box" :class="{ active: imgHover1 }" @mouseover="imgHover1 = true, imgHover2 = false"
          @mouseleave="imgHover1 = false, imgHover2 = true">
          <div class="rating" :class="`rrr${id}`">
            <i class="edit fa-regular fa-star"></i>
            <i class="edit fa-regular fa-star"></i>
            <i class="edit fa-regular fa-star"></i>
            <i class="edit fa-regular fa-star"></i>
            <i class="edit fa-regular fa-star"></i>
          </div>
          <div class="name">
            <h6>{{ title }}</h6>
          </div>
          <div class="price">${{ price }}</div>
          <div class="sizes" :class="`sss${id}`">
            <span>size:</span>
            <ul>
              <li class="size" v-for="size in sizes" :key="size.id" @click="chosseSize2">{{ size }}</li>
            </ul>
          </div>
          <div class="colors">
            <ul>
              <li class="color" v-for="(color, i) in colors" :key="color.id" :data-color="`${color}`"
                @click="numberOfColor2 = i + 1"></li>
            </ul>
          </div>
          <div class="infoBox-btn">
            <mostButton btnText="add to cart" fontSize="12" />
          </div>
        </div>
        <div class="links" :class="{ active: linksHover }" @mouseover="imgHover1 = true, imgHover2 = false"
          @mouseleave="imgHover1 = false, imgHover2 = true">
          <div class="link add-to-loveItem" @mouseover="linksLableHover1 = true" @mouseleave="linksLableHover1 = false">
            <div class="labal" :class="{ active: linksLableHover1 }">add to Wishlist</div>
            <i class="edit fa-regular fa-heart"></i>
          </div>
          <div class="link add-to-cart" @mouseover="linksLableHover2 = true" @mouseleave="linksLableHover2 = false">
            <div class="labal" :class="{ active: linksLableHover2 }">add to cart</div>
            <i class="edit fa-solid fa-cart-shopping"></i>
          </div>
          <div class="link quick-view" @mouseover="linksLableHover3 = true" @mouseleave="linksLableHover3 = false"
            @click="productQuickView = true">
            <div class="labal" :class="{ active: linksLableHover3 }">quick view</div>
            <i class="edit fa-solid fa-search"></i>
          </div>
        </div>
      </div>
    </div>
  </swiper-slide>
  <div class="product-quickView2" :class="{ open: productQuickView }">
    <div class="quickViewContainer">
      <div class="quickViewContent">
        <div class="quickView">
          <div class="quick-product-box">
            <div class="row">
              <div class="img-box col-12 col-sm-12 col-md-6 col-lg-6">
                <swiper :navigation="true" :modules="modules" class="mySwiper" :spaceBetween="10">
                  <swiper-slide> <img class="" :class="{ active: imgHover2 }"
                      :src="require(`@/assets/products/${category}/${imgUrl}/color${numberOfColor2}/${img1}`)" alt="">
                  </swiper-slide>
                  <swiper-slide> <img class="" :class="{ active: imgHover2 }"
                      :src="require(`@/assets/products/${category}/${imgUrl}/color${numberOfColor2}/${img1}`)" alt="">
                  </swiper-slide>
                  <swiper-slide> <img class="" :class="{ active: imgHover2 }"
                      :src="require(`@/assets/products/${category}/${imgUrl}/color${numberOfColor2}/${img1}`)" alt="">
                  </swiper-slide>
                </swiper>
              </div>
              <div class="info-box col-12 col-sm-12 col-md-6 col-lg-6">
                <div class="row">
                  <div class="rating col-6" :class="`rrrr${id}`">
                    <i class="edit fa-regular fa-star"></i>
                    <i class="edit fa-regular fa-star"></i>
                    <i class="edit fa-regular fa-star"></i>
                    <i class="edit fa-regular fa-star"></i>
                    <i class="edit fa-regular fa-star"></i>
                  </div>
                  <div class="close col-6" @click="productQuickView = false">
                    <i class="edit fa-solid fa-xmark"></i>
                  </div>
                  <h2 class="col-12">{{ title }}</h2>
                  <div class="price col-12">
                    ${{ price }}
                  </div>
                  <div class="advantages col-12">
                    <ul class="m-0 p-0">
                      <li>100% printed cotton canvas</li>
                      <li>Wide-brimmed bucket hat design.</li>
                      <li>Finished with neck tie.</li>
                      <li>This hat is accredited with a UPF Rating 50+</li>
                    </ul>
                  </div>
                  <div class="colors col-12">
                    <p>color:<span class="color-name">{{ colorsName[colorsNumber] }}</span></p>
                    <ul class="m-0 p-0">
                      <li class="color" v-for="(color, i) in colors" :key="color.id" :data-color="`${color}`"
                        :data-index="`${i}`" @click="colorsNumber = i, numberOfColor2 = i + 1"></li>
                    </ul>
                  </div>
                  <div class="sizes col-12" :class="`ssss${id}`">
                    <p>size:</p>
                    <form action="">
                      <div v-for="size in sizes" :key="size.id">
                        <input type="radio" :id="size.id" :name="{ size }">
                        <label :for="{ size }">{{ size }}</label>
                      </div>
                    </form>
                  </div>
                  <div class="wishList col-6">
                    <div @click="this.inWishListData = !this.inWishListData" class="true" v-if="!this.inWishListData">
                      <i class="edit fa-regular fa-heart"></i>
                    </div>
                    <div @click="this.inWishListData = !this.inWishListData" class="false" v-if="this.inWishListData">
                      <i class="edit fa-solid fa-heart"></i>
                    </div>
                    <span @click="this.inWishListData = !this.inWishListData">{{ this.inWishListData == false ? "add"
        :
        "avalibale" }} {{ this.inWishListData == false ? "to" : "in" }} Wishlist</span>
                  </div>
                  <div class="avalibale col-6">
                    <div class="stock">
                      <div class="true" v-if="this.stock">
                        <i class="fa-regular fa-circle-check" style="color: green;"></i>
                      </div>
                      <div class="false" v-if="!this.stock">
                        <i class="fa-regular fa-circle-xmark" style="color: red;"></i>
                      </div>
                      <span> {{ this.stock == true ? "in" : "out" }} stock</span>
                    </div>
                  </div>
                  <div class="buying mt-4">
                    <div class="qty">
                      <div class="less" @click="productQTY--">-</div>
                      <div class="number">{{ `${productQTY > 0 ? productQTY : productQTY = 0}` }}</div>
                      <div class="more" @click="productQTY++">+</div>
                    </div>
                    <div class="cart">
                      <router-link to="/shop">
                        <mostButton btnText="view All product" fontSize="12" padding="8px 16px" />
                      </router-link>
                    </div>
                  </div>
                  <div class="more-details col-12">
                    <span>View More Details </span>
                    <i class="edit fa-solid fa-arrow-right"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import mostButton from '../buttons/mostButton.vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

export default {
  name: "product-box2",
  data() {
    return {
      imgHover1: false,
      imgHover2: true,
      linksHover: false,
      linksLableHover1: false,
      linksLableHover2: false,
      linksLableHover3: false,
      chossenSize: false,
      selectedSize: null,
      numberOfColor2: 1,
      colorsNumber: 0,
      productQTY: 1,
      inWishListData: false,
      productQuickView: false,
    }
  },
  props: [
    "id",
    "title",
    "category",
    "rating",
    "imgUrl",
    "imgColor",
    "img1",
    "img2",
    "price",
    "sizes",
    "colors",
    "colorsImgs",
    "msg",
    "msgColor",
    "ratingItem",
    "inWishList",
    "stock",
    "colorsName",
  ],
  components: {
    Swiper,
    SwiperSlide,
    mostButton,
  },
  methods: {
    productColors2() {
      var lis = document.querySelectorAll(".products .product-box2 .info-box .colors .color");
      lis.forEach(function (li) {
        li.style.backgroundColor = li.getAttribute("data-color");
        if (li.getAttribute("data-color") == "") {
          li.style.display = "none";
        }
      })
    },
    createRating2() {
      var starsLi = document.querySelectorAll(`.rrr${this.id} .edit`);
      var stars = Array.from(starsLi);
      for (let i = 0; i < this.rating; i++) {
        stars[i].classList.replace("fa-regular", "fa-solid");
        if (Number.isInteger(this.rating) == false) {
          stars[`${Math.ceil(this.rating) - 1}`].classList.replace("fa-star", "fa-star-half-stroke");
        }

      }
    },
    createRatingII() {
      var starsLi = document.querySelectorAll(`.rrrr${this.id} .edit`);
      var stars = Array.from(starsLi);
      for (let i = 0; i < this.rating; i++) {
        stars[i].classList.replace("fa-regular", "fa-solid");
        if (Number.isInteger(this.rating) == false) {
          stars[`${Math.ceil(this.rating) - 1}`].classList.replace("fa-star", "fa-star-half-stroke");
        }

      }
    },
    msgHider2() {
      var msgs = document.querySelectorAll(".product-box2 .msg");
      msgs.forEach(function (msg) {
        if (msg.innerHTML == "") {
          msg.style.display = "none";
        }
      })
    },
  },
  mounted() {
    this.msgHider2();
    this.productColors2();
    this.createRating2();
    this.createRatingII();
  },
  setup() {
    return {
      modules: [Navigation],
    };
  },
};

</script>

<style lang="scss">
.product-box2 {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 20px;
  cursor: pointer;
  overflow: hidden;

  .msg {
    position: absolute;
    top: 4px;
    left: 4px;
    padding: 3px 10px;
    color: var(--third-color);
    background-color: var(--main-color);
    z-index: 4;
  }

  .img-box {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    transition: var(--main-transition);

    img {
      position: relative;
      // width: 300px;
      // height: 450px;
      width: 100%;
      height: 100%;
      object-fit: cover;
      opacity: 0;
      transition: var(--main-transition);
      display: block;
    }

    img:nth-child(1) {
      z-index: 3;
    }

    img:nth-child(2) {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 2;
      transform: scale(1.3);
    }

    img.active {
      opacity: 1;
      transform: scale(1);
    }
  }

  .info-box {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: #00000066;
    opacity: 0;
    z-index: 1;
    overflow: hidden;

    .name {
      margin: 1px auto 1px;

      h6 {
        font-size: 20px !important;
        text-transform: uppercase;
        color: var(--third-color);
      }
    }

    .price {
      margin-top: 0px;
      color: var(--third-color);
      font-size: 18px;
    }

    .rating {
      margin-bottom: 4px;

      .edit {
        color: #FFD700;
        font-size: 12px;
      }
    }

    .sizes {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 6px;

      span {
        color: var(--third-color);
      }

      ul {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0;
        margin: 0;

        li {
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 16px;
          margin: 0px 5px;
          width: 14px;
          height: 14px;
          cursor: pointer;
          color: var(--third-color);
        }

        li.active {
          border-bottom: 1px solid var(--main-color);
        }
      }
    }

    .colors {
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 10px auto;

      ul {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0;
        margin: 0;

        li {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 18px;
          height: 18px;
          margin: 0px 3px;
          border-radius: 50%;
          box-shadow: 0 0 1px 1px #ddd;
          border: 2px solid #fff;
          cursor: pointer;
        }
      }
    }

    .infoBox-btn {
      margin-top: 5px;
    }
  }

  .info-box.active {
    opacity: 1;
    z-index: 10;

  }

  .links {
    position: absolute;
    top: 6px;
    right: -10%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    z-index: 100;
    transition: var(--main-transition);
    opacity: 0;


    .link {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 30px;
      height: 30px;
      transition: var(--main-transition);
      cursor: pointer;
      margin-bottom: 6px;

      .labal {
        position: absolute;
        right: 33px;
        width: 75px;
        color: #FFF;
        background-color: var(--secound-color);
        font-size: 10px;
        padding: 3px 2px;
        opacity: 0;
        display: none;
        transition: var(--main-transition);
      }

      .labal:before {
        content: "";
        position: absolute;
        top: 50%;
        right: -12px;
        transform: translateY(-50%);
        width: 6px;
        height: 6px;
        background-color: transparent;
        border-width: 6px;
        border-color: transparent transparent transparent var(--secound-color);
        border-style: solid;
      }

      .labal.active {
        opacity: 1;
        display: block;
      }

      .edit {
        color: var(--third-color);
        transition: var(--main-transition);
      }
    }

    // .links:hover {
    //   background-color: var(--secound-color);

    //   .edit {
    //     color: #fff;
    //   }
    // }
  }

  .links.active {
    opacity: 1;
    right: 1%;
  }
}

.product-quickView2 {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #8b8b8b30;
  z-index: 101;
  display: none;
  overflow-x: hidden;
  outline: 0 !important;
  transition: var(--main-transition);


  .quickViewContainer {
    text-align: center;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    z-index: 102;

    .quickViewContent {
      position: relative;
      display: inline-block;
      vertical-align: middle;
      margin: 0 auto;
      text-align: left;
      z-index: 103;

      .quickView {
        max-width: 900px;
        margin: 50px auto;
        background-color: #fff;
        position: relative;
        padding: 25px;


        .quick-product-box {
          .img-box {
            padding: 20px;
          }

          .info-box {
            padding: 10px;

            .close {
              display: flex;
              align-items: center;
              justify-content: flex-end;
              cursor: pointer;

              .edit {
                color: var(--secound-color);
                margin-right: 20px;
                font-size: 20px;
              }
            }

            .rating {
              margin-top: 4px;
              display: flex;
              align-items: center;
              justify-content: flex-start;

              .rating-number {
                color: var(--secound-color);
              }

              .edit {
                color: #FFD700;
                font-size: 16px;
              }
            }

            h2 {
              text-align: left;
              font-size: 26px;
              color: var(--secound-color);
              margin: 15px 0 10px;
            }

            .price {
              text-align: left;
              font-size: 20px;
              color: var(--secound-color);
              margin: 0 0 10px;
            }

            .advantages {
              text-align: left;

              ul {
                list-style: disc outside !important;

                li {
                  color: #333333dc;
                  margin-bottom: 6px;
                  font-size: 14px;
                }
              }

            }

            .colors {
              display: flex;
              align-items: flex-start;
              justify-content: center;
              flex-direction: column;
              margin-top: 10px;

              p {
                color: #333333;
                margin-bottom: 3px;

                span {
                  margin-left: 5px;
                  color: var(--secound-color);
                }
              }

              ul {
                display: flex;

                li {
                  width: 20px;
                  height: 20px;
                  border-radius: 50%;
                  margin-right: 8px;
                  border: 2px solid #DDD;
                  cursor: pointer;
                }
              }
            }

            .sizes {
              display: flex;
              align-items: center;
              justify-content: flex-start;

              p {
                color: #333333;
                margin: 15px 8px 3px 0;

                span {
                  margin-left: 5px;
                  color: var(--secound-color);
                }
              }

              form {
                display: flex;
                align-items: center;
                justify-content: center;
                margin-top: 15px;

                div {
                  position: relative;
                  margin-right: 8px;

                  input {
                    position: relative;
                    appearance: none;
                    width: 35px;
                    height: 35px;
                    z-index: 45;
                    background-color: transparent;
                    cursor: pointer;
                    border: 1px solid #DDD;
                  }

                  input[type="radio"]:checked {
                    content: "";
                    background-color: var(--main-color);
                    width: 35px;
                    height: 35px;
                  }

                  input[type="radio"]:checked+label {
                    color: var(--third-color);
                  }

                  label {
                    position: absolute;
                    top: 44%;
                    left: 48%;
                    transform: translate(-50%, -50%);
                    z-index: 46;
                    color: var(--secound-color);
                  }
                }
              }
            }

            .wishList {
              display: flex;
              align-items: center;
              justify-content: flex-start;
              margin-top: 15px;
              cursor: pointer;

              span {
                color: var(--secound-color);
                margin-left: 5px;
                font-size: 18px;
              }

              .edit {
                color: var(--main-color);
                font-size: 18px;
              }
            }

            .avalibale {
              display: flex;
              align-items: center;
              justify-content: flex-start;
              margin-top: 15px;

              .stock {
                display: flex;
                align-items: center;
                justify-content: center;

                span {
                  margin-left: 6px;
                  color: var(--secound-color);
                }

                .edit {
                  color: #008000;
                }
              }
            }

            .buying {
              display: flex;
              align-items: center;
              justify-content: flex-start;

              .cart {
                width: 320px;
                height: 40px;
              }

              .qty {
                display: flex;
                align-items: center;
                justify-content: flex-start;

                .less {
                  border: 1px solid #DDD;
                  padding: 7px 15px;
                  color: var(--secound-color);
                  cursor: pointer;
                }

                .number {
                  border: 1px solid #DDD;
                  color: var(--secound-color);
                  padding: 7px 30px;
                }

                .more {
                  border: 1px solid #DDD;
                  padding: 7px 15px;
                  color: var(--secound-color);
                  cursor: pointer;
                }
              }
            }

            .more-details {
              margin-top: 20px;
              text-align: center;
              cursor: pointer;
              transition: var(--main-transition);

              span {
                color: var(--secound-color);
                transition: var(--main-transition);
                margin-right: 4px;
              }

              .edit {
                color: var(--secound-color);
                transition: var(--main-transition);
              }
            }

            .more-details:hover {
              span {
                color: var(--main-color);
              }

              .edit {
                color: var(--main-color);
              }
            }
          }
        }
      }
    }
  }

  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.product-quickView2::-webkit-scrollbar {
  width: 4px;
}

.product-quickView2::-webkit-scrollbar-track {
  background-color: #f6f6f6;
}

.product-quickView2::-webkit-scrollbar-thumb {
  background-color: var(--main-color);
}

.product-quickView2::-webkit-scrollbar-thumb:hover {
  background-color: var(--main-color);
}

.product-quickView2.open {
  display: flex;
}

@media (max-width: 770px) {
  .quickView {
    width: 600px;
  }
}

@media (max-width: 700px) {
  .product-quickView {
    width: 100% !important;
    height: 100% !important;

  }

  .quickView {
    width: 400px;
  }
}
</style>
