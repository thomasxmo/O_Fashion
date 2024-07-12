<template>
  <div class="mr-2" :class="col">
    <div class="product-box" :data-types="`${category} ${colorsName.join(' ')} ${sizes
    .join(' ')
    .toUpperCase()} ${stock} ${price}`" @mouseover="linksHover = true" @mouseleave="linksHover = false">
      <div class="msg" :style="{ 'background-color': `${msgColor}` }">
        {{ msg }}
      </div>
      <div class="deleteFromWishlist" :class="{ active: activeDeleteFromWishlist }" @click="removeFromWishListPage()">
        <div class="icon">
          <i class="edit fa-solid fa-trash-can"></i>
        </div>
      </div>
      <div class="img-box mb-3">
        <router-link :to="`/Product/${id}`">
          <img class="" :class="{ active: imgHover2 }" @mouseover="(imgHover1 = true), (imgHover2 = false)"
            @mouseleave="(imgHover1 = false), (imgHover2 = true)" :src="require(`@/assets/products/${category}/${imgUrl}/color${numberOfColor}/${img1}`)
    " alt="" />
          <img class="" :class="{ active: imgHover1 }" :src="require(`@/assets/products/${category}/${imgUrl}/color${numberOfColor}/${img2}`)
    " alt="" />
        </router-link>
        <div class="links open" :class="{ active: linksHover }">
          <div class="link add-to-loveItem" :class="{ hide: activeDeleteFromWishlist, active: inWishListData }"
            @mouseover="linksLableHover1 = true" @mouseleave="linksLableHover1 = false"
            @click="(this.inWishListData = !this.inWishListData), addToWishList()">
            <div class="labal" :class="{ active: linksLableHover1 }">
              {{ this.inWishListData == false ? "Add to" : "Remove From" }} Wishlist
            </div>
            <i class="edit fa-regular fa-heart"></i>
          </div>
          <div class="link add-to-cart" :class="{ active: inCart }" @mouseover="linksLableHover2 = true"
            @mouseleave="linksLableHover2 = false" @click="productAddToCart = !productAddToCart">
            <div class="labal" :class="{ active: linksLableHover2 }">
              {{ this.inCartData == false ? "Add to" : "Remove From" }} cart
            </div>
            <i class="edit fa-solid fa-cart-shopping"></i>
          </div>
          <div class="link quick-view" @mouseover="linksLableHover3 = true" @mouseleave="linksLableHover3 = false"
            @click="productQuickView = true">
            <div class="labal" :class="{ active: linksLableHover3 }">
              quick view
            </div>
            <i class="edit fa-solid fa-search"></i>
          </div>
        </div>
      </div>
      <router-link :to="`/Product/${id}`">
        <div class="info-box mb-2">
          <div class="name">
            <h6>{{ title }}</h6>
          </div>
          <div class="price">${{ price }}</div>
          <div class="advantages col-12">
            <ul class="m-0 p-0">
              <li>100% printed cotton canvas</li>
              <li>Wide-brimmed bucket hat design.</li>
              <li>Finished with neck tie.</li>
              <li>This hat is accredited with a UPF Rating 50+</li>
            </ul>
          </div>
          <div class="rating" :class="`rr${id}`">
            <i class="edit fa-regular fa-star"></i>
            <i class="edit fa-regular fa-star"></i>
            <i class="edit fa-regular fa-star"></i>
            <i class="edit fa-regular fa-star"></i>
            <i class="edit fa-regular fa-star"></i>
          </div>
          <div class="sizes" :class="`ss${id}`">
            <ul>
              <li class="size" v-for="size in sizes" :key="size.id" @click="chosseSize">
                {{ size }}
              </li>
            </ul>
          </div>
          <div class="colors">
            <ul>
              <li class="color" v-for="(color, i) in colors" :key="color.id" :data-color="`${color}`"
                @click="numberOfColor = i + 1">
                <span :style="{ backgroundColor: colors[i] }">{{
                  colorsName[i]
                  }}</span>
              </li>
            </ul>
          </div>
          <div class="row">
            <div class="wishList col-6">
              <div @click="this.inWishListData = !this.inWishListData" class="true" v-if="!this.inWishListData">
                <i class="edit fa-regular fa-heart"></i>
              </div>
              <div @click="this.inWishListData = !this.inWishListData" class="false" v-if="this.inWishListData">
                <i class="edit fa-solid fa-heart"></i>
              </div>
              <span @click="this.inWishListData = !this.inWishListData">{{ this.inWishListData == false ? "add" :
                "avalibale" }}
                {{ this.inWishListData == false ? "to" : "in" }} Wishlist</span>
            </div>
            <div class="avalibale col-6">
              <div class="stock">
                <div class="true" v-if="this.stock">
                  <i class="fa-regular fa-circle-check" style="color: green"></i>
                </div>
                <div class="false" v-if="!this.stock">
                  <i class="fa-regular fa-circle-xmark" style="color: red"></i>
                </div>
                <span> {{ this.stock == true ? "in" : "out" }} stock</span>
              </div>
            </div>
          </div>
          <div class="buying mt-4">
            <div class="qty">
              <div class="less" @click="productQTY--">-</div>
              <div class="number">
                {{ `${productQTY > 0 ? productQTY : (productQTY = 0)}` }}
              </div>
              <div class="more" @click="productQTY++">+</div>
            </div>
            <div class="cart">
              <mostButton btnText="Add To cart" fontSize="16" />
            </div>
          </div>
          <div class="more-details col-12">
            <span>View More Details </span>
            <i class="edit fa-solid fa-arrow-right"></i>
          </div>
        </div>
      </router-link>
    </div>
    <div class="product-quickView" :class="{ open: productQuickView }">
      <div class="quickViewContainer">
        <div class="quickView">
          <div class="quick-product-box">
            <div class="row">
              <div class="img-box col-12 col-sm-12 col-md-5 col-lg-5">
                <div class="slider">
                  <Splide :options="slideOption" aria-label="prouduct images">
                    <SplideSlide>
                      <img :src="require(`@/assets/products/${category}/${imgUrl}/color${numberOfColor}/${img1}`)
    " />
                    </SplideSlide>
                    <SplideSlide>
                      <img :src="require(`@/assets/products/${category}/${imgUrl}/color${numberOfColor}/${img2}`)
    " />
                    </SplideSlide>
                    <SplideSlide>
                      <img :src="require(`@/assets/products/${category}/${imgUrl}/color${numberOfColor}/${img3}`)
    " />
                    </SplideSlide>
                    <SplideSlide>
                      <img :src="require(`@/assets/products/${category}/${imgUrl}/color${numberOfColor}/${img4}`)
    " />
                    </SplideSlide>
                    <SplideSlide>
                      <img :src="require(`@/assets/products/${category}/${imgUrl}/color${numberOfColor}/${img5}`)
    " />
                    </SplideSlide>
                    <SplideSlide>
                      <img :src="require(`@/assets/products/${category}/${imgUrl}/color${numberOfColor}/${img6}`)
    " />
                    </SplideSlide>
                  </Splide>
                </div>
              </div>
              <div class="info-box col-12 col-sm-12 col-md-7 col-lg-7">
                <div class="row">
                  <div class="rating col-6" :class="`rrr${id}`">
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
                  <div class="price col-12">${{ price }}</div>
                  <div class="advantages col-12">
                    <ul class="m-0 p-0">
                      <li>100% printed cotton canvas</li>
                      <li>Wide-brimmed bucket hat design.</li>
                      <li>Finished with neck tie.</li>
                      <li>This hat is accredited with a UPF Rating 50+</li>
                    </ul>
                  </div>
                  <div class="colors col-12">
                    <p>
                      color:<span class="color-name">{{ colorsName[colorsNumber] }}</span>
                    </p>
                    <ul class="m-0 p-0">
                      <li class="color" v-for="(color, i) in colors" :key="color.id" :data-color="`${color}`"
                        :data-index="`${i}`" @click="(colorsNumber = i), (numberOfColor = i + 1)"></li>
                    </ul>
                  </div>
                  <div class="sizes col-12" :class="`sss${id}`">
                    <p>size:</p>
                    <form action="">
                      <div v-for="size in sizes" :key="size.id">
                        <input type="radio" :id="size.id" :name="size" />
                        <label :for="{ size }">{{ size }}</label>
                      </div>
                    </form>
                  </div>
                  <div class="wishList col-6">
                    <div @click="this.inWishListData = !this.inWishListData, addToWishList()" class="true"
                      v-if="!this.inWishListData">
                      <i class="edit fa-regular fa-heart"></i>
                    </div>
                    <div @click="this.inWishListData = !this.inWishListData, removeFromWishListPage()" class="false"
                      v-if="this.inWishListData">
                      <i class="edit fa-solid fa-heart"></i>
                    </div>
                    <span>
                      {{ inWishListText == false ? " add to" : " avalibale in" }} Wishlist
                    </span>
                  </div>
                  <div class="avalibale col-6">
                    <div class="stock">
                      <div class="true" v-if="this.stock">
                        <i class="fa-regular fa-circle-check" style="color: green"></i>
                      </div>
                      <div class="false" v-if="!this.stock">
                        <i class="fa-regular fa-circle-xmark" style="color: red"></i>
                      </div>
                      <span>
                        {{ this.stock == true ? "in" : "out" }} stock</span>
                    </div>
                  </div>
                  <div class="buying mt-4">
                    <div class="qty">
                      <div class="less" @click="productQTY--">-</div>
                      <div class="number">
                        {{ `${productQTY > 0 ? productQTY : (productQTY = 1)}` }}
                      </div>
                      <div class="more" @click="productQTY++">+</div>
                    </div>
                    <div class="cart">
                      <button type="button"
                        @click=" inCart == false ? AddToCart() : removrFromCart(), isIncreasing(), productAddToCart = false, productQuickView = false">
                        <h3>{{ inCart == false ? "Add to" : "Remove From" }} cart</h3>
                      </button>
                    </div>
                  </div>
                  <div class="more-details col-12">
                    <router-link :to="`/Product/${id}`">
                      <span>View More Details </span>
                      <i class="edit fa-solid fa-arrow-right"></i></router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="quickViewCloser " @click="productQuickView = !productQuickView"></div>
    </div>
    <div class="addToCart" :class="{ open: productAddToCart }">
      <div class="addToCartContainer">
        <div class="addToCartContent">
          <div class="close" @click="productAddToCart = !productAddToCart">
            <i class="edit fa-solid fa-xmark"></i>
          </div>
          <div class="title">
            <h4>{{ title }}</h4>
          </div>
          <div class="price">${{ price }}</div>
          <div class="sizes col-12" :class="`sss${id}`">
            <p>size: <span>{{ sizes[sizeNumber] }}</span></p>
            <form action="">
              <div v-for="(size, i) in sizes" :key="i">
                <input type="radio" :id="size.id" :name="size" @click="(sizeNumber = i)" />
                <label :for="{ size }">{{ size }}</label>
              </div>
            </form>
          </div>
          <div class="colors col-12">
            <p>
              color:<span class="color-name" :selectedColor="colorsName[colorsNumber]">{{ colorsName[colorsNumber]
                }}</span>
            </p>
            <ul class="m-0 p-0">
              <li class="color" v-for="(color, i) in colors" :key="color.id" :data-color="`${color}`"
                :data-index="`${i}`" @click="(colorsNumber = i), (numberOfColor = i + 1)"
                :style="{ backgroundColor: color }"></li>
            </ul>
          </div>
          <div class="buying mt-4">
            <div class="qty col-4 m-0 p-0">
              <div class="less" @click="hmOrderMin()" :class="{ disable: numberOfOrder == 1 }">-</div>
              <div class="number">
                {{ numberOfOrder }}
              </div>
              <div class="more" @click="hmOrderPlus()">+</div>
            </div>
            <div class="cart">
              <button type="button"
                @click=" inCart == false ? AddToCart() : removrFromCart(), isIncreasing(), productAddToCart = false">
                <h3>{{ inCart == false ? "Add to" : "Remove From" }} cart</h3>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="addToCarCloser " @click="productAddToCart = !productAddToCart"></div>
    </div>
  </div>
</template>

<script>
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import "@splidejs/vue-splide/css";
import mostButton from "@/components/global/buttons/mostButton.vue";
import allProducts from "@/json/allproudects.json";
import ordersJSON from "@/json/orders.json";

export default {
  name: "productBox",
  data() {
    return {
      toWishList: allProducts,
      orders: ordersJSON,
      slideOption: {
        rewind: true,
        height: "30rem",
        fixedHeight: "30rem",
        // width: "100%",
        // autoWidth: true,
        wheel: true,
        type: "loop",
        arrows: false,
        pagination: false,
      },
      imgHover1: false,
      imgHover2: true,
      linksHover: false,
      linksLableHover1: false,
      linksLableHover2: false,
      linksLableHover3: false,
      chossenSize: false,
      selectedSize: null,
      numberOfColor: 1,
      colorsNumber: 0,
      inWishListData: false,
      inCartData: false,
      productQuickView: false,
      productAddToCart: false,
      productQTY: 1,
      inWishListText: false,
      sizeNumber: 0,
    };
  },
  props: [
    "id",
    "title",
    "stock",
    "category",
    "rating",
    "imgUrl",
    "imgColor",
    "img1",
    "img2",
    "img3",
    "img4",
    "img5",
    "img6",
    "price",
    "priceOff",
    "sizes",
    "colors",
    "colorsName",
    "msg",
    "msgColor",
    "inWishList",
    "col",
    "arrayBetween",
    "activeDeleteFromWishlist",
    "numberOfOrder",
    "inCart",
  ],
  components: {
    mostButton,
    Splide,
    SplideSlide,
  },
  methods: {
    productColors() {
      var lis = document.querySelectorAll(
        ".products .product-box .info-box .colors .color"
      );
      var lis2 = document.querySelectorAll(
        ".product-quickView .quickView .quick-product-box .info-box .colors .color"
      );
      lis.forEach(function (li) {
        li.style.backgroundColor = li.getAttribute("data-color");
        if (li.getAttribute("data-color") == "") {
          li.style.display = "none";
        }
      });
      lis2.forEach(function (li) {
        li.style.backgroundColor = li.getAttribute("data-color");
        if (li.getAttribute("data-color") == "") {
          li.style.display = "none";
        }
      });
    },
    createRating() {
      var starsLi = document.querySelectorAll(`.rr${this.id} .edit`);
      var stars = Array.from(starsLi);
      for (let i = 0; i < this.rating; i++) {
        stars[i].classList.replace("fa-regular", "fa-solid");
        if (Number.isInteger(this.rating) == false) {
          stars[`${Math.ceil(this.rating) - 1}`].classList.replace(
            "fa-star",
            "fa-star-half-stroke"
          );
        }
      }
    },
    createRatingI() {
      var starsLi = document.querySelectorAll(`.rrr${this.id} .edit`);
      var stars = Array.from(starsLi);
      for (let i = 0; i < this.rating; i++) {
        stars[i].classList.replace("fa-regular", "fa-solid");
        if (Number.isInteger(this.rating) == false) {
          stars[`${Math.ceil(this.rating) - 1}`].classList.replace(
            "fa-star",
            "fa-star-half-stroke"
          );
        }
      }
    },
    msgHider() {
      var msgs = document.querySelectorAll(".msg");
      msgs.forEach(function (msg) {
        if (msg.innerHTML == "") {
          msg.style.display = "none";
        }
      });
    },
    addToWishList() {
      this.toWishList.forEach((p) => {
        if (p.title == this.title) {
          p.inWishList = this.inWishListData;
          this.inWishListText = true;
        }
      });
    },
    removeFromWishListPage() {
      this.toWishList.forEach((p) => {
        if (this.id == p.id) {
          p.inWishList = false;
          this.inWishListText = false;
        }
      });
    },
    AddToCart() {
      let size = document.querySelector(".sizes form input:checked").getAttribute("name");
      this.toWishList.forEach((p) => {
        if (p.id == this.id) {
          if (p.inCart == false) {
            p.SelectedColor = this.colorsName[this.colorsNumber];
            p.SelectedSize = size;
            p.inCart = true;
            this.inCartData = true;
          }
        }
      });
    },
    removrFromCart() {
      this.toWishList.forEach((p) => {
        if (this.id == p.id) {
          p.inCart = false;
        }
      });
    },
    jsonFile() {
      let size = document.querySelector(".sizes form input:checked").getAttribute("name");
      let orderId = 1;
      let arr = [];
      let bigestId = 1
      this.orders.forEach((order) => {
        arr.push(order.Id);
        bigestId = Math.max(...arr);
        orderId = bigestId + 1;
      });
      let newOrder = {
        "Id": orderId,
        "proudectId": this.id,
        "quantity": this.productQTY,
        "title": this.title,
        "category": this.category,
        "imgUrl": this.imgUrl,
        "imgColor": this.imgColor,
        "img1": this.img1,
        "price": this.price,
        "selectedColor": this.colorsName[this.colorsNumber],
        "selectedSize": size,
      }
      this.orders.push(newOrder);
    },
    hmOrderPlus() {
      this.toWishList.forEach((p) => {
        if (p.title == this.title) {
          p.numberOfOrder++;
        }
      });
    },
    hmOrderMin() {
      this.toWishList.forEach((p) => {
        if (p.title == this.title) {
          if (p.numberOfOrder == 0 || p.numberOfOrder < 2) {
            p.numberOfOrder = 1;
          } else {
            p.numberOfOrder--;
          }
        }
      });
    },
    isIncreasing() {
      let theSlider = document.querySelector(".header .cart-slid");
      var xs = this.inCartItem;
      var prev, cur;
      for (var i = 0; i < xs.length + 1; i++) {
        cur = xs[i];
        if (i && cur !== prev && cur !== prev + 1) {
          theSlider.classList.add("openCart");
        };
        prev = cur;
      }
    }
  },
  computed: {
    inCartItem() {
      return this.toWishList.filter(p => p.inCart == true);
    },
  },
  mounted() {
    this.msgHider();
    this.productColors();
    this.createRating();
    this.createRatingI();
  },
};
</script>

<style lang="scss">
.product-box {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 20px;
  padding: 10px;
  border-radius: 10px;
  // box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 50px;
  cursor: pointer;

  .msg {
    position: absolute;
    top: 4px;
    left: 4px;
    padding: 3px 10px;
    color: var(--third-color);
    background-color: var(--main-color);
    z-index: 4;
  }

  .deleteFromWishlist {
    display: none;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 15px;
    right: 15px;
    color: var(--third-color);
    z-index: 4;

    .icon {
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: var(--third-color);
      border-radius: 50%;
      width: 30px;
      height: 30px;
      transition: var(--main-transition);

      .edit {
        font-size: 14px;
        color: #000000c8;
        transition: var(--main-transition);
      }
    }

    .icon:hover {
      background-color: var(--main-color);

      .edit {
        font-size: 14px;
        color: var(--third-color);
      }
    }
  }

  .deleteFromWishlist:hover::before {
    content: "remove wishlist";
    width: 100px;
    height: 21px;
    background-color: var(--secound-color);
    font-size: 12px;
    margin-right: 10px;
  }

  .deleteFromWishlist:hover::after {
    content: "";
    position: absolute;
    right: 24px;
    bottom: 4px;
    background-color: transparent;
    border-width: 10px;
    border-color: transparent transparent transparent var(--secound-color);
    border-style: solid;
  }

  .deleteFromWishlist.active {
    display: flex;
  }

  .img-box {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    transition: var(--main-transition);

    img {
      position: relative;
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

    .links {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      align-items: center;
      justify-content: space-around;
      flex: 1;
      z-index: 5;
      transition: var(--main-transition);
      opacity: 0;
      bottom: -30px;
      width: 60%;

      .link {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: var(--third-color);
        border-radius: 50%;
        width: 30px;
        height: 30px;
        transition: var(--main-transition);
        cursor: pointer;

        .labal {
          position: absolute;
          top: -30px;
          width: 120px;
          color: #fff;
          background-color: var(--secound-color);
          font-size: 10px;
          font-weight: 500;
          padding: 1px 5px;
          opacity: 0;
          display: none;
          transition: var(--main-transition);

          span {
            display: none;
          }

          span.active {
            display: inline-block;
          }
        }

        .labal:before {
          content: "";
          position: absolute;
          left: 50%;
          bottom: -16px;
          transform: translateX(-50%);
          width: 8px;
          height: 8px;
          background-color: transparent;
          border-width: 10px;
          border-color: var(--secound-color) transparent transparent transparent;
          border-style: solid;
        }

        .labal.active {
          opacity: 1;
          display: block;
        }

        .edit {
          color: var(--secound-color);
          transition: var(--main-transition);
        }
      }

      .link:hover {
        background-color: var(--main-color);

        .edit {
          color: #fff;
        }
      }

      .add-to-loveItem.hide {
        display: none !important;
      }

      .add-to-loveItem.active {
        background-color: var(--main-color);

        .edit {
          color: #fff;
        }
      }

      .add-to-cart.active {
        background-color: var(--main-color);

        .edit {
          color: #fff;
        }
      }
    }

    .links.active {
      opacity: 1;
      bottom: 10px;
    }
  }

  .info-box {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    .name {
      color: var(--secound-color);
      margin: 0;
      text-transform: uppercase;

      h6 {
        font-size: 15px;
      }
    }

    .price {
      margin-top: 0px;
      color: var(--font-color);
      font-size: 16px;
      color: var(--secound-color);
    }

    .advantages {
      display: none;
    }

    .buying {
      display: none;
    }

    .wishList {
      display: none;
    }

    .more-details {
      display: none;
    }

    .avalibale {
      display: none;
    }

    .rating {
      margin-top: 4px;

      .edit {
        color: #ffd700;
        font-size: 12px;
      }
    }

    .sizes {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 6px;

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
          font-size: 12px;
          width: 15px;
          height: 15px;
          margin: 5px 5px;
          border: 1px solid #ddd;
          padding: 7px;
          color: var(--secound-color);
          cursor: pointer;
        }

        li.active {
          border: 1px solid var(--secound-color);
        }
      }
    }

    .colors {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 6px;

      ul {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0;
        margin: 0;

        li {
          position: relative;
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

          span {
            position: absolute;
            color: var(--third-color);
            background-color: var(--secound-color);
            top: -70px;
            opacity: 0;
            padding: 2px 4px;
            font-size: 14px;
            transition: var(--main-transition);
          }
        }

        li:hover {
          span {
            top: -35px;
            opacity: 1;
          }
        }
      }
    }
  }
}

.product-box.viewFour {
  height: 100%;
  justify-content: space-between;
  flex-direction: row;

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
    width: 30%;
    height: 100%;

    img {
      width: 100%;
      height: 100%;
    }

    img:nth-child(1) {
      z-index: 3;
    }

    img:nth-child(2) {
      width: 100%;
      height: 100%;
      transform: scale(1.3);
    }

    img.active {
      opacity: 1;
      transform: scale(1);
    }

    .links {
      display: none;
    }
  }

  .info-box {
    width: 70%;
    align-items: flex-start;
    justify-content: flex-start;
    height: 100%;
    margin: 10px 20px;

    .name {
      margin: 0;

      h6 {
        font-size: 25px;
      }
    }

    .price {
      margin-top: 0px;
      font-size: 20px;
    }

    .rating {
      margin-top: 6px;

      .edit {
        font-size: 14px;
      }
    }

    .sizes {
      margin-top: 8px;

      ul {
        li {
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
          width: 20px;
          height: 20px;
          margin: 5px 5px;
          border: 2px solid #ddd;
        }

        li.active {
          border: 2px solid var(--secound-color);
        }
      }
    }

    .sizes::before {
      content: "sizes :";
      color: var(--secound-color);
      font-size: 18px;
      margin-right: 4px;
    }

    .colors {
      margin-top: 8px;

      ul {
        li {
          width: 22px;
          height: 22px;
          margin: 0px 5px;
          border: 3px solid #fff;
        }
      }
    }

    .colors::before {
      content: "colors :";
      color: var(--secound-color);
      font-size: 18px;
    }

    .row {
      width: 100%;
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
          border: 1px solid #ddd;
          padding: 7px 15px;
          color: var(--secound-color);
          cursor: pointer;
        }

        .number {
          border: 1px solid #ddd;
          color: var(--secound-color);
          padding: 7px 30px;
        }

        .more {
          border: 1px solid #ddd;
          padding: 7px 15px;
          color: var(--secound-color);
          cursor: pointer;
        }
      }
    }

    .more-details {
      display: block;
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
  }
}

.product-quickView {
  position: fixed;
  bottom: -100%;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #8b8b8b30;
  transition: var(--main-transition);

  .quickViewContainer {
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 70%;
    height: auto;
    background-color: #fff;
    opacity: 0;
    transition: .6s .2s ease-in-out;

    .quickView {
      padding: 20px;
      display: flex;
      align-items: center;
      justify-content: center;

      .quick-product-box {
        .img-box {
          .slider {
            height: 100%;

            .splide {
              display: flex;
              justify-content: center;
              margin: 0;
              padding: 0;

              .splide__track {
                ul {
                  li {
                    display: flex;
                    align-items: center;
                    justify-content: center;

                    img {
                      width: 100%;
                      height: 100%;
                      object-fit: cover;
                    }
                  }
                }
              }
            }
          }
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
              color: #ffd700;
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
                border: 2px solid #ddd;
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
                  border: 1px solid #ddd;
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

              button {
                position: relative;
                display: flex;
                align-items: center;
                justify-content: center;
                background-color: var(--secound-color);
                cursor: pointer;
                outline: none;
                border: none !important;
                height: 100%;
                overflow: hidden;
                padding: 10px 20px;
                text-transform: uppercase;
                font-weight: 500;
                letter-spacing: 0.1em;
                transition: var(--main-transition);
                color: var(--third-color);
                margin: 0;
                width: 100%;

                h3 {
                  font-size: 14px;
                  color: var(--third-color);
                  margin: 0;
                  z-index: 3;
                }

                &::before {
                  content: "";
                  position: absolute;
                  top: 0;
                  left: 0;
                  width: 0;
                  height: 120%;
                  background-color: var(--main-color);
                  color: var(--third-color);
                  z-index: 2;
                  transition: var(--main-transition);
                  outline: none;
                  border: none !important;
                }

                &:hover::before {
                  width: 110%;
                  color: var(--third-color);
                }
              }
            }

            .qty {
              display: flex;
              align-items: center;
              justify-content: flex-start;

              .less {
                border: 1px solid #ddd;
                padding: 7px 15px;
                color: var(--secound-color);
                cursor: pointer;
              }

              .number {
                border: 1px solid #ddd;
                color: var(--secound-color);
                padding: 7px 30px;
              }

              .more {
                border: 1px solid #ddd;
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

  &::-webkit-scrollbar {
    width: 1px !important;
  }

  &::-webkit-scrollbar-track {
    background-color: #f6f6f6 !important;
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--main-color) !important;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: var(--main-color) !important;
  }

  &.open {
    bottom: 0%;
    z-index: 101;

    .quickViewContainer {
      opacity: 1;
      z-index: 103;

    }
  }

  .quickViewCloser {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: transparent;
    z-index: 102;
  }
}

.addToCart {
  position: fixed;
  top: -100%;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #8b8b8b30;
  transition: var(--main-transition);

  .addToCartContainer {
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 35%;
    height: auto;
    background-color: #fff;
    opacity: 0;
    transition: .6s .2s ease-in-out;
    z-index: 103;

    .addToCartContent {
      padding: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;

      .close {
        position: absolute;
        right: 15px;
        top: 10px;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: rgba(17, 17, 26, 0.05) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px;
        background-color: var(--third-color);
        cursor: pointer;
        transition: var(--main-transition);

        .edit {
          color: var(--secound-color);
          transition: var(--main-transition);
        }

        .title {
          margin-left: 20px;
          text-align: left;
          color: var(--secound-color);

        }

        &:hover {
          background-color: var(--main-color);

          .edit {
            color: var(--third-color);
          }

        }
      }

      .title {
        margin: 10px;

        h4 {
          font-weight: 600;
          color: var(--main-color);
        }
      }

      .price {
        font-size: 20px;
        color: var(--secound-color);
        font-weight: 500;
      }

      .colors {
        margin-left: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        margin-top: 10px;

        p {
          color: var(--font-color);
          margin-bottom: 6px;

          span {
            margin-left: 5px;
            color: var(--secound-color);
            font-weight: 500;
          }
        }

        ul {
          display: flex;

          li {
            width: 25px;
            height: 25px;
            border-radius: 50%;
            margin-right: 12px;
            border: 2px solid #ddd;
            cursor: pointer;
          }
        }
      }

      .sizes {
        margin-left: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        p {
          color: var(--font-color);
          margin: 6px 8px 6px 0;

          span {
            margin-left: 5px;
            color: var(--secound-color);
            font-weight: 500;
          }
        }

        form {
          display: flex;
          align-items: center;
          justify-content: center;

          div {
            position: relative;
            margin-right: 8px;

            input {
              position: relative;
              appearance: none;
              width: 25px;
              height: 25px;
              z-index: 45;
              background-color: transparent;
              cursor: pointer;
              border: 1px solid #ddd;
            }

            input[type="radio"]:checked {
              content: "";
              background-color: var(--main-color);
              width: 25px;
              height: 25px;
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
              font-size: 14px;
            }
          }
        }
      }

      .buying {
        display: flex;
        align-items: center;
        justify-content: space-between;

        .cart {
          margin-left: 10px;

          button {
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: var(--secound-color);
            cursor: pointer;
            outline: none;
            border: none !important;
            height: 100%;
            overflow: hidden;
            padding: 10px 20px;
            text-transform: uppercase;
            font-weight: 500;
            letter-spacing: 0.1em;
            transition: var(--main-transition);
            color: var(--third-color);
            margin: 0;

            h3 {
              font-size: 12px;
              color: var(--third-color);
              margin: 0;
              z-index: 3;
            }

            &::before {
              content: "";
              position: absolute;
              top: 0;
              left: 0;
              width: 0;
              height: 120%;
              background-color: var(--main-color);
              color: var(--third-color);
              z-index: 2;
              transition: var(--main-transition);
              outline: none;
              border: none !important;
            }

            &:hover::before {
              width: 110%;
              color: var(--third-color);
            }

          }
        }

        .qty {
          display: flex;
          align-items: center;
          justify-content: flex-start;

          .less {
            border: 1px solid #ddd;
            padding: 5px 10px;
            color: var(--secound-color);
            cursor: pointer;
          }

          .number {
            border: 1px solid #ddd;
            color: var(--secound-color);
            padding: 5px 20px;
          }

          .more {
            border: 1px solid #ddd;
            padding: 5px 10px;
            color: var(--secound-color);
            cursor: pointer;
          }
        }
      }
    }
  }

  .addToCarCloser {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: transparent;
    z-index: 102;
  }

  &.open {
    top: 0%;
    z-index: 101;

    .addToCartContainer {
      opacity: 1;
    }
  }
}

@media (max-width: 770px) {

  .quickViewContainer {
    top: 0 !important;
    left: 0 !important;
    transform: none !important;
    width: 100% !important;
    height: 100% !important;

    .quickView {
      width: 100% !important;
      padding: 5% !important;

      .quick-product-box {
        width: 100% !important;
        height: 100% !important;
        padding: 0 20px !important;

        .info-box {
          overflow-y: auto;
          height: 400px;
          margin-top: 15px;
        }
      }
    }
  }

  .addToCart {
    height: 100% !important;

    .addToCartContainer {
      width: 70% !important;
    }
  }
}

@media (max-width: 600px) {
  .img-box {

    .links {
      width: 85% !important;

      .link {
        width: 25px !important;
        height: 25px !important;

        .edit {
          font-size: 14px !important;
        }
      }

      &.open {
        opacity: 1;
        bottom: 10px;
      }

    }
  }

  .quickViewContainer {
    top: 0 !important;
    left: 0 !important;
    transform: none !important;
    width: 100% !important;
    height: 100% !important;

    .quickView {
      width: 100% !important;
    }
  }
}
</style>
