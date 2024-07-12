<template>
  <div class="header">
    <div class="info-header">
      <div class="container">
        <div class="row">
          <div class="social-media col-4">
            <ul class="socialMedia-list">
              <li>
                <a href="https://www.facebook.com/profile.php?id=100011178858933"><i class="edit fa-brands fa-facebook"
                    style="color: #fff"></i></a>
              </li>
              <li>
                <a href="https://www.instagram.com/omarhekal62"><i class="edit fa-brands fa-instagram"
                    style="color: #fff"></i></a>
              </li>
              <li>
                <a href="https://twitter.com/Omarhekal62"><i class="edit fa-brands fa-x-twitter"
                    style="color: #fff"></i></a>
              </li>
            </ul>
          </div>
          <div class="events col-4">
            <a href="#">
              <h3>50% discount on tops today</h3>
            </a>
          </div>
          <div class="settings col-4">
            <div class="Change-language" @click="languageActive = !languageActive">
              <div class="lng-logo">
                <img src="@/assets/logo/UK.png" />
              </div>
              <div class="lng-name">
                <span>english</span>
              </div>
              <div class="arrow-b" :class="{ rr: languageActive }">
                <i class="fa-solid fa-chevron-down"></i>
              </div>
              <div class="languages-menu" :class="{ open: languageActive }">
                <div class="languages">
                  <ul class="m-0 p-0">
                    <li>
                      <div class="lng-logo">
                        <img src="@/assets/logo/UK.png" />
                      </div>
                      <div class="lng-name">
                        <span>English</span>
                      </div>
                    </li>
                    <li>
                      <div class="lng-logo">
                        <img src="@/assets/logo/egypt2.png" />
                      </div>
                      <div class="lng-name">
                        <span>Arabic</span>
                      </div>
                    </li>
                    <li>
                      <div class="lng-logo">
                        <img src="@/assets/logo/france.png" />
                      </div>
                      <div class="lng-name">
                        <span>France</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            |
            <div class="Change-currency" @click="currencyActive = !currencyActive">
              <div class="cry-logo">
                <span style="color: #c13584">$</span>
              </div>
              <div class="cry-name">
                <span>USD</span>
              </div>
              <div class="arrow-b" :class="{ rr: currencyActive }">
                <i class="fa-solid fa-chevron-down"></i>
              </div>
              <div class="currency-menu" :class="{ open: currencyActive }">
                <div class="currencys">
                  <ul class="m-0 p-0">
                    <li>
                      <div class="cry-logo">
                        <span>$</span>
                      </div>
                      <div class="cry-name">
                        <span>USD</span>
                      </div>
                    </li>
                    <li>
                      <div class="cry-logo">
                        <span>£</span>
                      </div>
                      <div class="cry-name">
                        <span>EGY</span>
                      </div>
                    </li>
                    <li>
                      <div class="cry-logo">
                        <span>€</span>
                      </div>
                      <div class="cry-name">
                        <span>EUR</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="nav-bar">
      <div class="container">
        <div class="row">
          <div class="menu col-3 col-sm-3 col-md-3">
            <div class="menu-icon" @click="openMenu()">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <div class="logo col-6 col-sm-6 col-md-6 col-lg-4">
            <router-link to="/"><div class="text">O<span>.</span> Fashion</div></router-link>
          </div>
          <div class="main-nav col-4 col-lg-4">
            <div class="link-list">
              <ul class="mb-0">
                <li><router-link to="/">Home</router-link></li>
                <li><router-link to="/Shop">Shop</router-link></li>
                <li><router-link to="/AboutUs">AboutUs</router-link></li>
                <li><router-link to="/Blog">Blog</router-link></li>
                <li><router-link to="/ContactUs">ContactUs</router-link></li>
              </ul>
            </div>
          </div>
          <div class="users col-3 col-sm-3 col-md-3 col-lg-4">
            <div class="link-list">
              <ul class="mb-0">
                <li class="phone-none search" @click="searchSlidActive = !searchSlidActive">
                  <i class="edit fa-solid fa-search"></i>
                </li>
                <li class="phone-block d-none search" @click="searchSlidActive = !searchSlidActive">
                  <!-- <img src="@/assets/icon/nav/search.png" alt="" class="imgEdit"> -->
                  <i class="edit fa-solid fa-search"></i>
                </li>
                <li class="phone-none">
                  <!-- <router-link to="/Account"><i class="fa-solid fa-user"></i></router-link> -->
                  <router-link to="/Account"><img src="@/assets/icon/nav/user.svg" alt="" class="imgEdit"></router-link>
                  <!-- <img src="@/assets/icon/nav/user.png" alt="" class="imgEdit"> -->
                </li>
                <li>
                  <router-link to="/Wishlist"><img src="@/assets/icon/nav/heart.png" alt="" class="imgEdit"></router-link><span
                    v-if="inWishList.length > 0">{{inWishList.length }}</span>
                  <!-- -->
                </li>
                <li class="cart" @click="opener()">
                  <!-- <i class="edit fa-solid fa-cart-shopping"></i> -->
                  <img src="@/assets/icon/nav/cart.svg" alt="" class="imgEdit">
                  <span v-if="inCartItem.length > 0">{{ inCartItem.length }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="menu-page">
      <div class="main-page">
        <div class="link-list">
          <ul class="mb-0 p-0">
            <li @click="closeMenu()">
              <router-link to="/">Home</router-link>
              <i class="edit fa-solid fa-chevron-right"></i>
            </li>
            <li @click="closeMenu()">
              <router-link to="/Shop">Shop</router-link>
              <i class="edit fa-solid fa-chevron-right"></i>
            </li>
            <li @click="closeMenu()">
              <router-link to="/AboutUs">AboutUs</router-link>
              <i class="edit fa-solid fa-chevron-right"></i>
            </li>
            <li @click="closeMenu()">
              <router-link to="/Blog">Blog</router-link>
              <i class="edit fa-solid fa-chevron-right"></i>
            </li>
            <li @click="closeMenu()">
              <router-link to="/ContactUs">ContactUs</router-link>
              <i class="edit fa-solid fa-chevron-right"></i>
            </li>
          </ul>
        </div>
      </div>
      <div class="language">
        <h4>Language</h4>
        <ul class="m-0 p-0">
          <li><img src="@/assets/logo/UK.png" /><span>english</span></li>
          <li><img src="@/assets/logo/egypt2.png" /><span>arabic</span></li>
          <li><img src="@/assets/logo/france.png" /><span>france</span></li>
        </ul>
      </div>
      <div class="currency">
        <h4>Currency</h4>
        <ul class="m-0 p-0">
          <li>USD $</li>
          <li>EUR €</li>
          <li>EGY £</li>
        </ul>
      </div>
    </div>
    <div class="close" @click="closeMenu()">
      <div class="icon">
        <i class="edit fa-solid fa-xmark"></i>
      </div>
    </div>
    <div class="bottom-header">
      <div class="main-page">
        <div class="link-list">
          <ul class="mb-0 p-0">
            <li>
              <router-link to="/Wishlist"><i class="edit fa-solid fa-heart"></i><span>Wishlist</span></router-link>
            </li>
            <li>
              <router-link to="/shop"><i class="edit fa-solid fa-shop"></i><span>shop</span></router-link>
            </li>
            <li>
              <router-link to="/"><i class="edit fa-solid fa-house"></i><span>Home</span></router-link>
            </li>
            <li class="phone-none">
              <router-link to="/Account"><i class="edit fa-solid fa-user"></i><span>Account</span></router-link>
            </li>
            <li>
              <router-link to="/Cart"><i class="edit fa-solid fa-cart-shopping"></i><span>Cart</span></router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="search-slid" :class="{ openSearch: searchSlidActive }">
      <div class="upper">
        <div class="search-item">
          <div class="search-input">
            <div class="head">
              <h3>Search Products</h3>
              <div class="close-search" @click="searchSlidActive = !searchSlidActive">
                <i class="edit fa-solid fa-xmark"></i>
              </div>
            </div>
            <form action="">
              <input type="text" placeholder="search" />
              <button type="submit">
                <i class="edit fa-solid fa-search"></i>
              </button>
            </form>
          </div>
          <div class="quick-search">
            <h3>Quick Search:</h3>
            <ul class="m-0 p-0">
              <li>Tops</li>
              <li>jackets</li>
              <li>jeans</li>
              <li>dress</li>
            </ul>
          </div>
          <div class="also-like">
            <div class="product">
              <div class="img-box">
                <img src="@/assets/products/dress/dress1/color1/product_1.jpg" alt="" />
              </div>
              <div class="info-box">
                <h4>RIBBED MIDI DRESS WITH STRAPS</h4>
                <p>&239.00</p>
              </div>
            </div>
            <div class="product">
              <div class="img-box">
                <img src="@/assets/products/jackets/jackets2/color1/product_1.jpg" alt="" />
              </div>
              <div class="info-box">
                <h4>BROOKLYN BOMBER JACKET</h4>
                <p>&100.00</p>
              </div>
            </div>
            <div class="product">
              <div class="img-box">
                <img src="@/assets/products/jeans/jeans3/color1/product_1.jpg" alt="" />
              </div>
              <div class="info-box">
                <h4>widde leg jeans</h4>
                <p>&50.00</p>
              </div>
            </div>
            <div class="product">
              <div class="img-box">
                <img src="@/assets/products/dress/dress2/color1/product_1.jpg" alt="" />
              </div>
              <div class="info-box">
                <h4>LONG TIE-DYE DRESS</h4>
                <p>&300.00</p>
              </div>
            </div>
          </div>
          <div class="search-result d-none">
            <div class="product">
              <div class="img-box">
                <img src="@/assets/products/dress/dress1/color1/product_1.jpg" alt="" />
              </div>
              <div class="info-box">
                <h4>RIBBED MIDI DRESS WITH STRAPS</h4>
                <p>&30.00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="closer" @click="searchSlidActive = !searchSlidActive"></div>
    </div>
    <div class="cart-slid" :class="{ openCart: cartSlidActive }">
      <div class="upper">
        <div class="content" :class="{ active: showProducts }">
          <div class="head">
            <h3>Your Cart &#32; &#32;<span v-if="inCartItem.length > 0">&#40;{{ inCartItem.length }}&#41;</span></h3>
            <div class="close-search" @click="closer()">
              <i class="edit fa-solid fa-xmark"></i>
            </div>
          </div>
          <div class="freeShipping">
            <h4 :class="{ show: freeShipingLimet - calcTotal > 0 }">Spend <span>${{ freeShipingLimet - calcTotal }}
                USD</span> more and get <span>free shipping!</span></h4>
            <h4 :class="{ show: freeShipingLimet - calcTotal < 0 }">Congratulations , you've got free shipping!</h4>
            <div class="progres" :class="{ done: freeShipingLimet - calcTotal < 0 }">
              <div class="progressContainer">
                <span class="theProgress" :style="{ 'width': `${-freeShipingPercentage}%` }"><span><i
                      class="edit fa-solid fa-truck"></i></span></span>
              </div>
            </div>
          </div>
          <div class="prducts">
            <div v-for="product in inCartItem " :key="product.id" class="prductBox">
              <div class="img-box">
                <img
                  :src="require(`@/assets/products/${product.category}/${product.imgUrl}/color${numberOfColor}/${product.img1}`)"
                  alt="" />
              </div>
              <div class="info-box">
                <h6>{{ product.title }}</h6>
                <div class="color">color: {{ product.SelectedColor }}</div>
                <div class="size">size: {{ product.SelectedSize }}</div>
                <p> {{ product.price }} $</p>
                <div class="control">
                  <div class="qty m-0 p-0">
                    <div class="less" :data-id="product.id" @click="hmOrderMin($event)"
                      :class="{ disable: numberOfOrder == 1 }">-</div>
                    <div class="number">
                      {{ product.numberOfOrder }}
                    </div>
                    <div class="more" :data-id="product.id" @click="hmOrderPlus($event)">+</div>
                  </div>
                  <div class="deleteFromCart">
                    <div class="icon" :data-proudectId="product.id" @click="removeFromCartPage($event)">
                      <i class="edit fa-solid fa-trash-can"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="cartFt">
            <div class="box" @click="giftWrapActive = !giftWrapActive">
              <div class="icon">
                <i class="edit fa-solid fa-gift"></i>
              </div>
              <h6>Add gift wrap</h6>
            </div>
            <div class="box" @click="noteActive = !noteActive">
              <div class="icon">
                <i class="edit fa-solid fa-note-sticky"></i>
              </div>
              <h6>Add note</h6>
            </div>
            <div class="box" @click="couponActive = !couponActive">
              <div class="icon">
                <i class="edit fa-solid fa-percent"></i>
              </div>
              <h6>Coupon</h6>
            </div>
          </div>
          <div class="buying">
            <div class="total">
              <span>Total:</span> <span>${{ calcTotal }} USD</span>
            </div>
            <p>Taxes and shipping calculated at checkout</p>
            <div class="agreement">
              <label class="container">
                <input type="checkbox" class="input" v-model="Checkout">
                <span class="custom-checkbox"></span>
              </label>
              <label for="">I agree with the <span>terms and conditions</span></label>
            </div>
            <div class="buttons">
              <button type="button" :disabled="!Checkout" >
                <router-link to="/Checkout" v-if="Checkout">
                  <h3>Check Out</h3>
                </router-link>
                <h3 v-if="!Checkout">Check Out</h3>
              </button>
              <button type="button" @click="cartSlidActive = false">
                <router-link to="/Cart">
                  <h3>View Cart</h3>
                </router-link>
              </button>
            </div>
          </div>
          <div class="slideUp" :class="{ open: giftWrapActive || noteActive || couponActive }">
            <div class="giftWrap" :class="{ active: giftWrapActive }">
              <p>Add a Gift Wrap to your order, For $5.00</p>
              <div class="buttons">
                <div class="btn1">
                  <button>ADD A Gift Wrap</button>
                </div>
                <div class="btn2">
                  <button @click="giftWrapActive = !giftWrapActive">Close</button>
                </div>
              </div>
            </div>
            <div class="note" :class="{ active: noteActive }">
              <p>Special instructions for seller</p>
              <textarea placeholder="The Note" cols="30" rows="10"></textarea>
              <div class="buttons">
                <div class="btn1">
                  <button :disabled="!agreement">SAVE</button>
                </div>
                <div class="btn2">
                  <button @click="noteActive = !noteActive">Close</button>
                </div>
              </div>
            </div>
            <div class="coupon" :class="{ active: couponActive }">
              <p>* Discount will be calculated and applied at checkout</p>
              <input type="text" placeholder="Add Coupon">
              <div class="buttons">
                <div class="btn1">
                  <button>ٍِSAVE</button>
                </div>
                <div class="btn2">
                  <button @click="couponActive = !couponActive">Close</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="noContent" :class="{ active: !showProducts }">
          <div class="head">
            <h3>Your Cart</h3>
            <div class="close-search" @click="cartSlidActive = !cartSlidActive">
              <i class="edit fa-solid fa-xmark"></i>
            </div>
          </div>
          <div class="msg">
            <h3>There are no products in wishlist</h3>
          </div>
        </div>
      </div>
      <div class="closer" @click="closer()"></div>
    </div>
  </div>
</template>

<script>
import allProducts from "@/json/allproudects.json";

export default {
  name: "AppHeader",
  data: () => {
    return {
      products: allProducts,
      col: "col-12",
      languageActive: false,
      currencyActive: false,
      searchSlidActive: false,
      cartSlidActive: false,
      numberOfColor: 1,
      giftWrapActive: false,
      noteActive: false,
      couponActive: false,
      Checkout: false,
      freeShipingLimet: 500,
      close: false,
      agreement: false,
    };
  },
  components: {
  },
  methods: {
    header() {
      window.addEventListener("scroll", () => {
        if (window.scrollY > 10) {
          document.querySelector(".nav-bar").classList.add("sticky");
        } else {
          document.querySelector(".nav-bar").classList.remove("sticky");
        }
      });
    },
    openMenu() {
      let menu = document.querySelector(".header .menu-page");
      let close = document.querySelector(".header .close");
      menu.classList.add("active");
      close.classList.add("active");
    },
    closeMenu() {
      let menu = document.querySelector(".header .menu-page");
      let close = document.querySelector(".header .close");
      menu.classList.remove("active");
      close.classList.remove("active");
    },
    search() { },
    removeFromCartPage(e) {
      this.products.forEach((p) => {
        if (e.currentTarget.getAttribute("data-proudectId") == p.id) {
          p.inCart = false;
        }
      });
    },
    hmOrderPlus(e) {
      this.products.forEach((p) => {
        if (p.id == e.currentTarget.dataset.id) {
          p.numberOfOrder++;
        }
      });
    },
    hmOrderMin(e) {
      this.products.forEach((p) => {
        if (p.id == e.currentTarget.dataset.id) {
          if (p.numberOfOrder == 0 || p.numberOfOrder < 2) {
            p.numberOfOrder = 1;
          } else {
            p.numberOfOrder--;
          }
        }
      });
    },
    cartSlider() {
      let theSlider = document.querySelector(".header .cart-slid");
      theSlider.classList.toggle("openCart")
    },
    closer(){
      let theSlider = document.querySelector(".header .cart-slid");
      theSlider.classList.remove("openCart");
      this.cartSlidActive = false;
    },
    opener(){
      let theSlider = document.querySelector(".header .cart-slid");
      theSlider.classList.add("openCart");
      this.cartSlidActive = true;
    }
  },
  computed: {
    inCartItem() {
      return this.products.filter(p => p.inCart == true);
    },
    inWishList() {
      return this.products.filter(p => p.inWishList == true);
    },
    showProducts() {
      if (this.inCartItem.length == 0) {
        return false;
      }
      return true;
    },
    calcTotal() {
      let prices = [];
      this.inCartItem.forEach((p) => {
        prices.push(p.price * p.numberOfOrder);
      })

      let total = prices.reduce((a, b) => a + b, 0);

      return total
    },
    freeShipingPercentage() {
      return ((this.freeShipingLimet - this.calcTotal) / (this.freeShipingLimet) * 100) - 100
    },
    arrayLengthIncreased() {
      let previousLength = this.inCartItem.length;
      return this.inCartItem.length > previousLength;
    },

  },
  mounted() {
    this.header();
    this.search();
  },
};
</script>

<style lang="scss">
.header {
  position: relative;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;

  .info-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 5px 40px;
    background-color: var(--main-color);
    background-color: var(--secound-color);
    color: var(--third-color);

    .social-media {
      display: flex;
      align-items: center;
      justify-content: flex-start;

      .socialMedia-list {
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0;

        li {
          margin-left: 20px;

          a {
            .edit {
              color: var(--third-color);
            }
          }
        }
      }
    }

    .events {
      display: flex;
      align-items: center;
      justify-content: center;

      a {
        text-decoration: none;

        h3 {
          color: var(--third-color);
          font-size: 14px;
          margin: 0;
        }
      }
    }

    .settings {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: flex-end;

      div {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 0 5px;
        cursor: pointer;

        div {
          margin: 0 3px;
          font-size: 14px;
        }

        img {
          width: 16px;
          height: 12px;
          object-fit: cover;
        }
      }

      .arrow-b {
        transform: rotate(0deg);
        transition: var(--main-transition);
      }

      .languages-menu {
        position: absolute;
        top: 32px;
        width: 27%;
        z-index: 100;
        background-color: var(--third-color);
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        height: 0px;
        overflow: hidden;
        transition: var(--main-transition);

        .languages {
          display: flex;
          align-items: flex-start !important;

          ul {
            display: flex;
            flex-wrap: wrap;

            li {
              display: flex;
              margin-top: 15px;
              padding-bottom: 6px;
              border-bottom: 2px solid #eee;
              width: 100%;

              .lng-logo {
                img {
                  width: 15px;
                  height: 15px;
                  object-fit: cover;
                }
              }

              .lng-name {
                margin-left: 4px;

                span {
                  color: #333;
                }
              }
            }
          }
        }
      }

      .languages-menu.open {
        height: 140px !important;
      }

      .currency-menu {
        position: absolute;
        top: 32px;
        width: 27%;
        z-index: 100;
        background-color: var(--third-color);
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        height: 0px;
        overflow: hidden;
        transition: var(--main-transition);

        .currencys {
          display: flex;
          align-items: flex-start !important;

          ul {
            display: flex;
            flex-wrap: wrap;

            li {
              display: flex;
              margin-top: 15px;
              padding-bottom: 6px;
              border-bottom: 2px solid #eee;
              width: 100%;

              .cry-logo {
                span {
                  color: #333;
                }
              }

              .cry-name {
                margin-left: 4px;

                span {
                  color: #333;
                }
              }
            }
          }
        }
      }

      .currency-menu.open {
        height: 140px !important;
      }

      .rr {
        transform: rotate(-180deg);
      }
    }
  }

  .nav-bar {
    width: 100%;
    height: 80px;
    padding: 10px 40px;
    transition: var(--main-transition);
    z-index: 10;
    background-color: var(--third-color);

    .menu {
      display: none;

      .menu-icon {
        margin: 20px auto;
        width: 20px;
        height: 14px;
        cursor: pointer;
        position: relative;

        span {
          background-color: black;
          height: 2px;
          position: absolute;
          width: 100%;
          left: 0;
          transition: all 0.3s ease;
        }

        span:first-child {
          top: 0;
        }

        span:nth-child(2) {
          top: 6px;
        }

        span:last-child {
          top: 12px;
        }
      }
    }

    .logo {
      display: flex;
      align-items: center;
      color: var(--secound-color);

      a{
        color: var(--secound-color);
      }

      .text {
        font-family: var(--main-font);
        font-size: 35px;
        font-weight: bold;
        text-transform: uppercase;
      }

      span {
        color: var(--main-color);
        font-size: 45px;
      }
    }

    .main-nav {
      display: flex;
      align-items: center;
      justify-content: center;

      .link-list {
        ul {
          display: flex;
          align-items: center;
          justify-content: space-between;

          li {
            a {
              color: var(--secound-color);
              text-decoration: none;
              transition: var(--main-transition);
              font-weight: 500;
              
              &.router-link-exact-active {
                color: var(--main-color);
              }
            }

            a:hover {
              color: var(--main-color);
            }
          }

          li:not(:last-child) {
            margin-right: 30px;
          }
        }
      }
    }

    .users {
      display: flex;
      align-items: center;
      justify-content: flex-end;

      .link-list {
        ul {
          display: flex;
          align-items: center;
          justify-content: space-between;

          li {
            position: relative;

            a {
              color: var(--secound-color);
              text-decoration: none;
              transition: var(--main-transition);

              &.router-link-exact-active {
                color: var(--main-color);
              }

              &:hover {
                color: var(--main-color);
              }
            }

            span {
              position: absolute;
              width: 10px;
              height: 10px;
              top: -5px;
              right: -12px;
              background-color: var(--main-color);
              padding: 8px;
              font-size: 10px;
              display: flex;
              align-items: center;
              justify-content: center;
              border-radius: 50%;
              color: var(--third-color)
            }
          }

          li:not(:last-child) {
            margin-right: 20px;
          }
        }
      }
    }

    &.sticky {
      position: fixed !important;
      padding: 30px 40px;
      height: 100px;
      animation: downit 1s ease-in-out;
    }
  }

  .menu-page {
    position: fixed;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    background-color: #eee;
    overflow-y: scroll;
    z-index: 99;
    transition: var(--main-transition);

    .main-page {
      padding: 20px 0 0;
      width: 100%;
      background-color: var(--third-color);

      .link-list {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        width: 100%;

        ul {
          text-align: left;
          width: 100%;

          li {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            border-bottom: 2px solid #eee;
            padding: 10px 0;
            cursor: pointer;

            a {
              display: block;
              font-size: 16px;
              color: var(--secound-color);
              padding: 10px 15px;
            }

            .edit {
              padding-right: 20px;
              color: var(--secound-color);
            }
          }
        }
      }
    }

    .language {
      h4 {
        text-align: left;
        font-size: 20px;
        color: var(--main-color);
        padding: 10px 10px 0;
      }

      ul {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        flex-wrap: wrap;
        padding: 15px !important;
        background-color: var(--third-color);

        li {
          margin-right: 18px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: 8px;

          span {
            color: var(--secound-color);
            margin-left: 5px;
          }

          img {
            width: 20px;
            height: 15px;
            object-fit: cover;
          }
        }
      }
    }

    .currency {
      h4 {
        text-align: left;
        font-size: 20px;
        color: var(--main-color);
        padding: 10px 10px 0;
      }

      ul {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        flex-wrap: wrap;
        padding: 15px !important;
        background-color: var(--third-color);

        li {
          margin-right: 18px;
          margin-top: 8px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          color: var(--secound-color);
        }
      }
    }

    &.active {
      width: 50%;
    }
  }

  .close {
    position: fixed;
    top: 30px;
    left: -20%;
    // left: 50%;
    width: 50px;
    height: 50px;
    background-color: #111;
    z-index: 99;
    transition: var(--main-transition);
    display: flex;
    align-items: center;
    justify-content: center;

    .edit {
      color: var(--third-color);
      font-size: 24px;
    }

    &.active {
      left: 50%;
    }
  }

  .bottom-header {
    display: none;
  }

  .search {
    cursor: pointer;

    .edit {
      color: var(--secound-color);
      transition: var(--main-transition);
    }

    &:hover {
      .edit {
        color: var(--main-color);
      }
    }
  }

  .search-slid {
    position: fixed;
    top: 0;
    right: -400px;
    width: 400px;
    z-index: 99;
    height: 100%;
    background-color: #fff;
    overflow-y: scroll;
    transition: 0.3s ease-in-out;

    &::-webkit-scrollbar {
      width: 5px;
    }

    &::-webkit-scrollbar-track {
      background: #eeeeee;
      width: 8px;
    }

    &::-webkit-scrollbar-thumb {
      background: var(--secound-color);
      width: 8px;
    }

    &::-webkit-scrollbar-thumb:hover {
      background: #ff5c8dbd;
    }

    .search-item {
      padding: 20px;

      .search-input {
        display: flex;
        align-items: flex-start;
        justify-content: center;
        flex-direction: column;
        margin-bottom: 20px;

        .head {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          margin-bottom: 15px;

          h3 {
            font-size: 20px;
            color: var(--secound-color);
          }

          .close-search {
            cursor: pointer;

            .edit {
              font-size: 20px;
              color: var(--secound-color);
            }
          }
        }

        form {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;

          input {
            width: 90%;
            height: 40px;
            outline: none;
            font-size: 14px;
            color: #111111af;
            padding: 10px;
            border: 1px solid #1111117b;
            border-right: none !important;
            background-color: #fff;
            transition: var(--main-transition);
          }

          input::placeholder {
            font-size: 14px;
            color: #111111af;
          }

          button {
            height: 40px;
            outline: none;
            border: 1px solid #1111117b;
            border-left: none;
            background-color: #fff;
            padding: 10px;
            transition: background-color var(--main-transition);

            .edit {
              color: #444;
              transition: color var(--main-transition);
            }

            &:hover {
              background-color: var(--main-color);
              border: 1px solid var(--main-color);

              .edit {
                color: #fff;
              }
            }
          }

        }
      }

      .quick-search {
        margin-bottom: 25px;
        display: flex;
        align-items: flex-start;
        justify-content: center;
        flex-direction: column;

        h3 {
          font-size: 20px;
          color: var(--secound-color);
        }

        ul {
          display: flex;

          li {
            margin-right: 10px;
            color: var(--secound-color);
            font-size: 14px;
            text-decoration: underline;
            cursor: pointer;
          }
        }
      }

      .also-like {
        .product {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          margin-bottom: 20px;

          .img-box {
            margin-right: 20px;

            img {
              width: 90px;
              height: 120px;
              object-fit: cover;
            }
          }

          .info-box {
            display: flex;
            align-items: flex-start;
            justify-content: center;
            flex-direction: column;

            h4 {
              font-size: 14px;
              text-transform: lowercase;
            }

            p {
              font-size: 14px;
            }
          }
        }
      }

      .search-result {
        .product {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          margin-bottom: 20px;

          .img-box {
            margin-right: 20px;

            img {
              width: 90px;
              height: 120px;
              object-fit: cover;
            }
          }

          .info-box {
            display: flex;
            align-items: flex-start;
            justify-content: center;
            flex-direction: column;

            h4 {
              font-size: 14px;
              text-transform: lowercase;
            }

            p {
              font-size: 14px;
            }
          }
        }
      }
    }

    .upper {
      position: relative;
      z-index: 99;
      height: 100%;
      background: #FFF;
    }

    .closer {
      display: none;
      opacity: 0;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: #8b8b8b30;
      z-index: 50;
      transition: var(--main-transition);
    }

    &.openSearch {
      right: 0;

      .closer {
        display: block !important;
        opacity: 1 !important;
      }
    }
  }

  .cart {
    cursor: pointer;

    .edit {
      color: var(--secound-color);
      transition: var(--main-transition);
    }

    &:hover {
      .edit {
        color: var(--main-color);
      }
    }
  }

  .cart-slid {
    position: fixed;
    top: 0;
    right: -400px;
    width: 400px;
    z-index: 199;
    height: 100%;
    background-color: #fff;
    overflow-y: scroll;
    transition: 0.5s ease-in-out;
    z-index: 100;

    &::-webkit-scrollbar {
      width: 5px;
    }

    &::-webkit-scrollbar-track {
      background: #eeeeee;
      width: 8px;
    }

    &::-webkit-scrollbar-thumb {
      background: var(--main-color);
      width: 8px;
    }

    &::-webkit-scrollbar-thumb:hover {
      background: #ff5c8dbd;
    }

    .upper {
      display: flex;
      position: relative;
      z-index: 199;
      align-items: center;
      justify-content: center;
      height: 100%;
      background: #FFF;
    }

    .content {
      width: 100%;
      height: 100%;
      padding: 20px;
      display: none;
      align-items: center;
      justify-content: center;
      flex-direction: column;

      .head {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        margin-bottom: 15px;
        flex: 0;

        h3 {
          font-size: 20px;
          color: var(--secound-color);
        }

        .close-search {
          cursor: pointer;

          .edit {
            font-size: 20px;
            color: var(--secound-color);
          }
        }
      }

      .freeShipping {
        width: 100%;
        flex: 0;

        h4 {
          display: none;
          font-size: 14px;
          text-align: left;
          color: var(--font-color);

          span {
            color: var(--secound-color);
            font-weight: 600;
          }

          &.show {
            display: block;
          }
        }

        .progres {
          width: 100%;
          margin-top: 20px;

          .progressContainer {
            position: relative;
            width: 100%;
            height: 3px;
            background-color: #e8e8e8;
            border-radius: 10px;

            .theProgress {
              position: absolute;
              top: 0;
              left: 0;
              width: 0;
              height: 3px;
              border-radius: 10px;
              background-color: #ffbc12;
              transition: var(--main-transition);
              display: flex;
              align-items: center;
              justify-content: flex-end;

              span {
                width: 15px;
                height: 15px;
                background-color: var(--third-color);
                padding: 15px;
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                border: 1px solid #ffbc12;

                .edit {
                  color: #ffbc12;
                  font-size: 12px;
                }
              }
            }
          }

          &.done {
            .progressContainer {
              .theProgress {
                width: 100% !important;
                background-color: var(--main-color);

                span {
                  border: 1px solid var(--main-color);

                  .edit {
                    color: var(--main-color);
                  }
                }
              }
            }
          }
        }
      }

      .prducts {
        flex: 5;

        margin-top: 20px;
        height: 40%;
        overflow-y: scroll;

        .prductBox {
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 10px;

          .img-box {
            width: 30%;

            img {
              width: 100%;
              height: 100%;
              object-fit: cover;
            }
          }

          .info-box {
            display: flex;
            align-items: flex-start;
            justify-content: center;
            flex-direction: column;
            padding-left: 20px;
            width: 70%;
            text-align: left;

            h6 {
              color: var(--secound-color);
              margin-bottom: 5px;
            }

            .color {
              color: var(--font-color);
              font-size: 14px;
            }

            .size {
              color: var(--font-color);
              font-size: 14px;
              margin-bottom: 5px;
            }

            p {
              margin-bottom: 10px;
              color: var(--secound-color);
              font-weight: 450;
            }

            .control {
              width: 100%;
              display: flex;
              align-items: center;
              justify-content: flex-start;

              .qty {
                display: flex;
                align-items: center;
                justify-content: center;
                height: 10px;

                .less {
                  border: 1px solid #ddd;
                  padding: 1px 8px;
                  color: var(--secound-color);
                  cursor: pointer;
                }

                .number {
                  border: 1px solid #ddd;
                  color: var(--secound-color);
                  padding: 1px 16px;
                }

                .more {
                  border: 1px solid #ddd;
                  padding: 1px 8px;
                  color: var(--secound-color);
                  cursor: pointer;
                }
              }

              .deleteFromCart {
                margin-left: 10px;
                display: flex;
                align-items: center;
                justify-content: center;

                .icon {
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  cursor: pointer;

                  .edit {
                    color: #212121c1;
                    font-size: 14px;
                  }
                }
              }
            }
          }

        }

        &::-webkit-scrollbar {
          width: 6px;

        }

        &::-webkit-scrollbar-track {
          background: #eeeeee;
          width: 5px;
        }

        &::-webkit-scrollbar-thumb {
          background: var(--main-color);
          width: 5px;
        }

        &::-webkit-scrollbar-thumb:hover {
          background: #ff5c8dbd;
        }
      }

      .cartFt {
        flex: 1;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 20px 0;
        box-shadow: rgb(0 0 0 / 10%) 0px -25px 20px -20px;

        .box {
          flex: 1;

          .icon {
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 10px;
            cursor: pointer;

            .edit {
              border-radius: 50%;
              padding: 15px;
              background-color: #f1f1f1;
              color: #343234;
              font-size: 18px;
              transition: var(--main-transition);
            }

            .edit:hover {
              background-color: var(--main-color);
              color: #FFF;
            }
          }

          h6 {
            font-size: 13px;
            font-weight: 500;
            color: var(--secound-color);
          }
        }
      }

      .buying {
        flex: 2;
        width: 100%;

        .total {
          display: flex;
          align-self: center;
          justify-content: space-between;

          span {
            color: var(--secound-color);
            font-weight: 500;
            font-size: 16px;
          }
        }

        p {
          text-align: left;
          margin-top: 10px;
          color: var(--font-color);
          font-size: 14px;
        }

        .agreement {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          text-align: left;

          .container {
            width: 5%;
            margin: 0 !important;

            .input[type="checkbox"] {
              display: none;
            }

            .custom-checkbox {
              display: inline-block;
              width: 15px;
              height: 15px;
              border: 2px solid #333;
              border-radius: 4px;
              position: relative;
              cursor: pointer;

              &::after {
                content: "";
                position: absolute;
                top: 50%;
                left: 49%;
                transform: translate(-47%, -56%);
                width: 7px;
                height: 7px;
                background-color: #333;
                border-radius: 2px;
                opacity: 0;
              }
            }

            .input[type="checkbox"]:checked+.custom-checkbox::after {
              opacity: 1;
            }
          }

          label {
            width: 95%;
            margin-left: 10px;
            margin-bottom: 3px;
            color: var(--font-color);

            span {
              color: var(--secound-color);
              font-weight: 500;
            }
          }

        }

        .buttons {
          display: flex;
          align-items: center;
          justify-content: center;
          margin-top: 13px;

          button {
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: var(--secound-color);
            cursor: pointer;
            outline: none;
            border: 1px solid #000 !important;
            height: 100%;
            overflow: hidden;
            text-transform: uppercase;
            font-weight: 500;
            letter-spacing: 0.1em;
            transition: var(--main-transition);
            color: var(--third-color);
            margin: 0;
            width: 50%;

            a {
              z-index: 3;
              padding: 15px 25px;

              h3 {
                font-size: 12px;
                color: var(--third-color);
                margin: 0;
              }
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

            &:hover {
              border: 1px solid var(--main-color) !important;
            }

            &:disabled {
              opacity: 0.8;
              cursor: not-allowed;
            }

          }

          button:not(:first-child) {
            background-color: var(--third-color);
            color: var(--secound-color);
            margin-left: 15px;
            border: 1px solid #000 !important;

            a {
              display: block;
              width: 100%;
              height: 100%;

              h3 {
                color: var(--secound-color);
              }
            }

            &::before {
              background-color: var(--main-color);
            }

            &:hover::before {
              a {
                h3 {
                  color: var(--third-color);
                }
              }
            }

            &:hover {
              border: 1px solid var(--main-color) !important;

              a {
                h3 {
                  color: var(--third-color);
                }
              }
            }
          }

          button:disabled:first-child {
            h3 {
              z-index: 3;
              font-size: 12px;
              color: var(--third-color);
              margin: 0;
              padding: 15px 25px;
            }
          }

        }
      }

      .slideUp {
        position: fixed;
        width: 400px;
        height: 0;
        bottom: 0;
        right: 0;
        background-color: #f3f3f3;
        z-index: 100;
        transition: var(--main-transition);

        .buttons {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;

          >div {
            width: 95%;
            margin-bottom: 15px;
          }

          button {
            width: 100%;
            background-color: #000;
            color: #FFF;
            padding: 12px 25px;
            font-size: 14px;
            font-weight: 500;
            letter-spacing: .8px;
            border: 1px solid #000;
            transition: var(--main-transition);


          }

          button:hover {
            background-color: var(--main-color);
            border: 1px solid var(--main-color);
          }


          .btn2 {

            button {
              border: 1px solid #000;
              background-color: #FFF;
              color: #000;
            }

            button:hover {
              border: 1px solid var(--main-color);
              color: #fff;
              background-color: var(--main-color);
            }
          }

        }

        p {
          color: var(--secound-color);
          font-weight: 500;
          text-align: left;
        }

        .giftWrap {
          display: none;
        }

        .giftWrap.active {
          display: block;
        }

        .note {
          display: none;

          textarea {
            width: 95%;
            border: 1px solid #DDD;
            padding: 20px;
            margin-bottom: 10px;
            resize: none;
            outline: none;
          }
        }

        .note.active {
          display: block;
        }

        .coupon {
          display: none;

          input {
            margin-bottom: 20px;
            width: 95%;
            padding: 10px 20px;
            outline: none;
            border: 1px solid #DDD;
            font-size: 14px;
          }

        }

        .coupon.active {
          display: block;
        }

      }

      .slideUp.open {
        height: auto;
        padding: 20px;
      }

      &.active {
        display: flex;
      }
    }

    .noContent {
      display: none;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      width: 100%;
      height: 100%;
      padding: 20px;

      .head {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        margin-bottom: 15px;
        flex: 0;

        h3 {
          font-size: 20px;
          color: var(--secound-color);
        }

        .close-search {
          cursor: pointer;

          .edit {
            font-size: 20px;
            color: var(--secound-color);
          }
        }
      }

      .msg {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;

        h3 {
          color: var(--secound-color);
          font-size: 20px;
          letter-spacing: 1px;
        }
      }

      &.active {
        display: flex;
      }
    }

    .closer {
      display: none;
      opacity: 0;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: #8b8b8b30;
      z-index: 198;
      transition: var(--main-transition);
    }

    &.openCart {
      right: 0px !important;

      .closer {
        display: block !important;
        opacity: 1 !important;
      }
    }

    &.active {
      right: 0px;
    }

  }

  .imgEdit{
    width: 22px;
    height: 22px;
    object-fit: cover;
  }
}

@keyframes downit {
  0% {
    height: 0px;
    opacity: 0;
    padding: 0px 0px;
  }

  100% {
    height: 100px;
    opacity: 1;
    padding: 30px 40px;
  }
}

@keyframes keyframes-fill {
  0% {
    transform: scale(0);
    opacity: 0;
  }

  50% {
    transform: scale(1.2) rotate(15deg);
  }
}

@keyframes pulse {
  0% {
    box-shadow: 0 0 0 #0B6E4F90;
    rotate: 20deg;
  }

  50% {
    rotate: -20deg;
  }

  75% {
    box-shadow: 0 0 0 10px #0B6E4F60;
  }

  100% {
    box-shadow: 0 0 0 13px #0B6E4F30;
    rotate: 0;
  }
}

@media (max-width: 991px) {
  .info-header {
    display: flex;
    align-items: center;
    justify-content: center;

    .social-media {
      display: none !important;
    }

    .events {
      width: 100% !important;
    }

    .settings {
      display: none !important;
    }
  }

  .nav-bar {
    padding: 10px 20px !important;
    display: flex;
    align-items: center;
    justify-content: center;

    .menu {
      display: block !important;

      .menu-icon {
        display: flex !important;
        align-items: center !important;
        justify-content: center !important;
        margin: 20px 0 !important;
      }
    }

    .logo {
      justify-content: center !important;
    }

    .main-nav {
      display: none !important;
    }

    .users {
      justify-content: center !important;

      .link-list {
        ul {
          display: flex;
          align-items: center;
          justify-content: center !important;

          li {
            a {
              color: var(--secound-color);
              text-decoration: none;

              &.router-link-exact-active {
                color: var(--main-color);
              }
            }
          }

          li:not(:last-child) {
            margin-right: 30px;
          }
        }
      }
    }

    .phone-none {
      display: none !important;
    }

    .phone-block {
      display: block !important;
    }
  }

  .nav-bar.sticky {
    height: 80px !important;
    padding: 20px 20px !important;
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    margin-top: 20px !important;
  }

  .menu-page.active {
    width: 70% !important;
  }

  .close.active {
    left: 70% !important;
  }

  .bottom-header {
    // position: fixed;
    // display: block !important;
    // bottom: 0;
    // z-index: 98;
    // width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    background: #fff;
    display: flex;
    padding: 5px 15px;
    align-items: center;
    box-shadow: 0 1px 10px 5px #0000000d;
    z-index: 99;
    line-height: 1;
    height: 80px;

    .main-page {
      width: 100%;

      .link-list {

        ul {
          display: flex;
          align-items: center;
          justify-content: space-around;

          li {
            display: flex;
            align-items: center;
            justify-content: center;

            a {
              display: flex;
              align-items: center;
              justify-content: center;
              flex-direction: column;
              color: var(--secound-color);

              span {
                color: #333;
                font-size: 18px;
              }

              .edit {
                color: #333;
                font-size: 16px;
              }
            }
          }
        }
      }
    }
  }

  .search-slid.openSearch {
    width: 80% !important;
  }

  .cart-slid.openCart {
    width: 85% !important;
  }
}

@media (max-width: 579px) {
  .nav-bar {
    padding: 10px 20px !important;

    .menu-icon {
      width: 15px !important;
      height: 10px !important;
    }

    .logo {
      .text {
        font-size: 20px !important;
      }

      span {
        font-size: 30px !important;
      }
    }

    .users {
      .link-list {
        ul {
          li {
            .edit {
              font-size: 14px !important;
            }
          }

          li:not(:last-child) {
            margin-right: 17px !important;
          }
        }
      }
    }
  }

  .menu-page.active {
    width: 100% !important;
  }

  .close.active {
    top: 2px !important;
    left: 92% !important;
    width: 30px;
    height: 30px;

    .edit {
      font-size: 22px;
    }
  }

  .bottom-header {
    display: flex !important;

    .main-page {
      .link-list {

        ul {
          li {
            a {
              span {
                font-size: 16px;
              }

              .edit {
                font-size: 14px;
              }
            }
          }
        }
      }
    }
  }

  .search-slid.openSearch {
    width: 80% !important;
  }
}
</style>
