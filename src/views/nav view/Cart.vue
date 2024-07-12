<template>
  <div class="Cart">
    <pageHeader name="Shopping Cart" />
    <div class="cart-content" :class="{ active: showProducts }">
      <div class="container">
        <div class="row">
          <div class="freeShipping col-12">
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
          <div class="table-head col-12">
            <div class="row">
              <div class="col-6">
                <h3>Product</h3>
              </div>
              <div class="col-3 quantity">
                <h3>Quantity</h3>
              </div>
              <div class="col-3 total">
                <h3>Total</h3>
              </div>
            </div>
            <hr>
          </div>
          <div class="table-content col-12">
            <div class="row">
              <cartItem v-for="product in inCartItem" :key="product.id" :id="product.id" :title="product.title"
                :category="product.category" :img1="product.img1" :img2="product.img2" :img3="product.img3"
                :img4="product.img4" :img5="product.img5" :img6="product.img6" :imgUrl="product.imgUrl"
                :imgColor="product.imgColor" :price="product.price" :priceOff="product.priceOff" :sizes="product.sizes"
                :colors="product.colors" :msg="product.msg" :msgColor="product.msgColor" :rating="product.rating"
                :colorsName="product.colorsName" :stock="product.stock" :inWishList="product.inWishList"
                :inCart="product.inCart" :SelectedColor="product.SelectedColor" :SelectedSize="product.SelectedSize"
                :numberOfOrder="product.numberOfOrder" :col="col" />
            </div>
          </div>
          <hr>
          <div class="options col-12 col-sm-12 col-md-7 col-lg-7 mb-4">
            <div class="giftWrap">
              <p><i class="edit fa-solid fa-gift"></i>Add gift wrap <span>Only 5$</span></p>
              <button @click="giftWrapBox = !giftWrapBox">Add A Gift Wrap </button>
            </div>
            <div class="note">
              <h6>Special instructions for seller</h6>
              <textarea placeholder="How can we help you?"></textarea>
            </div>
            <div class="coupon">
              <h6>Coupon</h6>
              <p>* Discount will be calculated and applied at checkout</p>
              <input type="text" placeholder="Coupon code">
            </div>
          </div>
          <div class="checkOut col-12 col-sm-12 col-md-5 col-lg-5 mb-5 mt-5" >
            <div class="total">
              <h4 class="total">Subtotal: {{ calcTotal }}$</h4>
              <p>Taxes and shipping calculated at checkout</p>
            </div>
            <div class="warning">
              <p>All charges are billed in <span>USD</span>. While the content of your cart is currently displayed in
                <span>EGP</span>, the checkout
                will use <span>USD</span> at the most current exchange rate.
              </p>
            </div>
            <div class="agreement">
              <div class="end">
                <label class="container">
                  <input type="checkbox" class="input" v-model="Checkout">
                  <span class="custom-checkbox"></span>
                </label>
                <label for="">I agree with the <span>terms and conditions</span></label>
              </div>
            </div>
            <div class="checkOutBtn">
              <button type="button" :disabled="!Checkout">
                <router-link to="/Checkout" v-if="Checkout">
                  <mostButton v-if="Checkout" btnText="Check Out" fontSize="14" padding="15px 25px" />
                </router-link>
                <mostButton v-if="!Checkout" btnText="Check Out" fontSize="14" padding="15px 25px" />
              </button>
            </div>
          </div>
          <div class="mayLike col-12">
            <h3>You may also like</h3>
            <div class="products">
              <div class="row">
                <productBox v-for="product in mayLike" :key="product.id" :id="product.id" :title="product.title"
                  :category="product.category" :img1="product.img1" :img2="product.img2" :img3="product.img3"
                  :img4="product.img4" :img5="product.img5" :img6="product.img6" :imgUrl="product.imgUrl"
                  :imgColor="product.imgColor" :price="product.price" :priceOff="product.priceOff"
                  :sizes="product.sizes" :colors="product.colors" :msg="product.msg" :msgColor="product.msgColor"
                  :rating="product.rating" :colorsName="product.colorsName" :stock="product.stock"
                  :inWishList="product.inWishList" :inCart="product.inCart" :chossedColor="product.chossedColor"
                  :chossedSize="product.chossedSize" :numberOfOrder="product.chossedSize"
                  :col="'col-12 col-sm-12 col-md-3 col-lg-3'" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="noContent" :class="{ active: !showProducts }">
      <div class="msg">
        <h3>There are no products in Cart</h3>
      </div>
    </div>
    <div class="giftWrapBox" :class="{ open: giftWrapBox }">
      <div class="giftWrapBoxContainer">
        <div class="giftWrapBoxContent">
          <div class="close" @click="giftWrapBox = !giftWrapBox">
            <i class="edit fa-solid fa-xmark"></i>
          </div>
          <h4>Gift Wrap</h4>
          <div class="box">
            <div class="img-box">
              <img src="@/assets/giftWrap.webp" alt="">
            </div>
            <div class="info-box">
              <div class="occasion">
                <h6>OCCASION OF ANNIVERSARY</h6>
                <ul class="m-0 p-0">
                  <li v-for="tag in occasion" :key="tag" :data-type="tag" @click="sellected($event)">
                    <span>{{ tag }}</span>
                  </li>
                </ul>
              </div>
              <div class="sex">
                <h6>SEX</h6>
                <ul class="m-0 p-0">
                  <li v-for="tag in sex" :key="tag" :data-type="tag" @click="sellected($event)">
                    <span>{{ tag }}</span>
                  </li>
                </ul>
              </div>
              <div class="yo">
                <h6>YEAR OLD</h6>
                <ul class="m-0 p-0">
                  <li v-for="tag in yo" :key="tag" :data-type="tag" @click="sellected($event)">
                    <span>{{ tag }}</span>
                  </li>
                </ul>
              </div>
              <h5>$5 USD</h5>
            </div>
          </div>
          <div class="btns">
            <div class="qty col-4 m-0 p-0">
              <div class="less" @click="GiftWrapNumber--">-</div>
              <div class="number">
                {{ GiftWrapNumber < 1 ? GiftWrapNumber = 1 : GiftWrapNumber }} </div>
                  <div class="more" @click="GiftWrapNumber++">+</div>
              </div>
              <button>
                <h3>Add To Cart</h3>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import pageHeader from '@/components/global/pageHeader.vue';
import cartItem from '@/components/cart/cartItem.vue';
import productJsonApi from "@/json/allproudects.json";
import mostButton from '@/components/global/buttons/mostButton.vue';
import productBox from "@/components/global/productBox/productBox.vue";

export default {
  name: "CartView",
  data() {
    return {
      products: productJsonApi,
      col: "col-12",
      freeShipingLimet: 500,
      giftWrapBox: false,
      occasion: ["Christmas", "Birthday", "Wedding"],
      sex: ["Male", "Female"],
      yo: ["Baby", "Toddler", "Children", "Teenager", "Adult Elderly"],
      GiftWrapNumber: 1,
      Checkout: false,
    }
  },
  components: {
    pageHeader,
    cartItem,
    mostButton,
    productBox
  },
  methods: {
    sellected(e) {
      e.currentTarget.classList.toggle("selected");
    }
  },
  computed: {
    inCartItem() {
      return this.products.filter(p => p.inCart == true);
    },
    calcTotal() {
      let prices = [];
      this.inCartItem.forEach((p) => {
        prices.push(p.price * p.numberOfOrder);
      })

      let total = prices.reduce((a, b) => a + b, 0);

      return total
    },
    mayLike() {
      if (this.inCartItem.length > 0) {
        return this.products.filter((p) => p.category == this.inCartItem[0].category && p.id !== this.inCartItem[0].id);
      } else {
        return false;
      }
    },
    showProducts() {
      if (this.inCartItem.length == 0) {
        return false;
      }
      return true;
    },
    freeShipingPercentage() {
      return ((this.freeShipingLimet - this.calcTotal) / (this.freeShipingLimet) * 100) - 100
    }
  },
  mounted() {
  }
};
</script>

<style lang="scss">
.Cart {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .cart-content {
    width: 85%;
    display: none;

    .row {
      display: flex;
      align-items: center;
      justify-content: center;

      .freeShipping {
        // width: 40%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column-reverse;

        h4 {
          display: none;
          font-size: 16px;
          text-align: left;
          color: var(--font-color);
          margin-top: 20px;

          span {
            color: var(--secound-color);
            font-weight: 600;
          }

          &.show {
            display: block;
          }
        }

        .progres {
          width: 50%;
          margin-top: 20px;

          .progressContainer {
            position: relative;
            width: 100%;
            height: 4px;
            background-color: #e8e8e8;
            border-radius: 10px;

            .theProgress {
              position: absolute;
              top: 0;
              left: 0;
              width: 0;
              height: 4px;
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

      .table-head {
        margin: 20px 0;
        // width: 85%;

        div {
          h3 {
            text-align: left;
            font-size: 18px;
            color: var(--secound-color);
            margin: 0;
          }
        }

        .total {
          h3 {
            text-align: right;
          }
        }

        .quantity {
          h3 {
            text-align: center;
          }
        }

        hr {
          margin: 0;
          margin-top: 10px;
        }
      }

      .table-content {
        margin: 20px 0;
        // width: 85%;
      }

      .options {
        display: flex;
        align-items: flex-start;
        justify-content: center;
        flex-direction: column;
        margin: 15px 0 50px 0;
        text-align: left;

        .giftWrap {
          margin-bottom: 30px;

          p {
            color: var(--secound-color);
            font-weight: 500;
            margin-right: 10px;
            display: inline-block;

            span {
              color: var(--main-color);
            }

            .edit {
              margin-right: 10px;
              font-size: 18px;
              color: var(--main-color);
            }
          }

          button {
            outline: none;
            border: 1px solid #000;
            padding: 10px 25px;
            background-color: #FFF;
            color: #000;
            font-weight: 600;
            letter-spacing: .8px;
            font-size: 15px;
            transition: var(--main-transition);

            &:hover {
              border: 1px solid var(--main-color);
              background-color: var(--main-color);
              color: #fff;
            }
          }

        }

        .note {
          width: 100%;
          margin-bottom: 30px;

          h6 {
            color: var(--secound-color);
            font-weight: 500;
            margin-bottom: 15px;
            font-size: 15px;
          }

          textarea {
            width: 80%;
            height: 180px;
            outline: none;
            resize: vertical;
            border: 1px solid #CCC;
            padding: 10px 20px;
            font-size: 15px;

            &::placeholder {
              font-weight: 500;
            }
          }
        }

        .coupon {
          width: 100%;

          h6 {
            color: var(--secound-color);
            font-weight: 500;
            font-size: 15px;
          }

          p {
            font-size: 14px;
            color: var(--font-color);
          }

          input {
            width: 70%;
            outline: none;
            border: 1px solid #CCC;
            padding: 15px 20px;
            font-size: 14px;

            &::placeholder {
              font-weight: 500;
            }
          }
        }

      }

      .checkOut {
        display: flex;
        align-items: flex-end;
        justify-content: flex-start;
        flex-direction: column;
        text-align: right;
        height: 100%;

        button {
          padding: 0;
          border: none;
        }

        .total {
          h4 {
            color: var(--secound-color);
            font-weight: 550;
          }

          p {
            color: var(--font-color);
            font-style: italic;
            font-size: 14px;
          }
        }

        .warning {
          p {
            color: var(--font-color);
            font-weight: 500;
            width: 100%;

            span {
              font-style: italic;
              color: var(--secound-color);
            }
          }
        }

        .agreement {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          text-align: end;

          .end {
            display: flex;
            align-items: center;
            justify-content: flex-end;
            width: 100%;

            .container {
              flex: 1;
              margin: 0 !important;
              padding: 0;

              .input[type="checkbox"] {
                display: none;
              }

              .custom-checkbox {
                display: inline-block;
                width: 16px;
                height: 16px;
                border: 2px solid #333;
                border-radius: 4px;
                position: relative;
                cursor: pointer;

                &::after {
                  content: "";
                  position: absolute;
                  top: 50%;
                  left: 50%;
                  transform: translate(-50%, -50%);
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
              margin-left: 6px;
              margin-bottom: 3px;
              color: var(--font-color);

              span {
                color: var(--secound-color);
                font-weight: 500;
              }
            }
          }
        }

        .checkOutBtn {
          margin-top: 15px !important;

          button:disabled {
            .mostButton {
              opacity: 0.7;
              cursor: auto;
            }
          }
        }
      }

      .mayLike {
        margin: 20px 0;

        h3 {
          color: var(--secound-color);
        }
      }

    }

    &.active {
      display: block;
    }
  }

  .noContent {
    display: none;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
    padding: 100px;

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

  .giftWrapBox {
    position: fixed;
    top: -100%;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #8b8b8b30;
    z-index: 101;
    transition: var(--main-transition);

    .giftWrapBoxContainer {
      position: relative;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 40%;
      height: auto;
      background-color: #fff;
      opacity: 0;
      transition: .6s .2s ease-in-out;


      .giftWrapBoxContent {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        .close {
          padding: 20px;
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

        h4 {
          padding-top: 20px;
          color: var(--main-color);
        }

        .box {
          padding: 20px 20px 0px 20px;
          display: flex;
          align-items: center;
          justify-content: center;

          .img-box {
            width: 40%;

            img {
              width: 100%;
              height: 100%;
              object-fit: cover;
            }
          }

          .info-box {
            width: 60%;
            padding-left: 20px;

            h6 {
              text-align: left;
              margin-top: 12px;
              font-size: 14px;
              color: var(--secound-color);
            }

            ul {
              display: flex;
              flex-wrap: wrap;

              li {
                padding: 2px 13px;
                border: 1px solid #7a7a7a84;
                margin-right: 6px;
                margin-top: 5px;
                background-color: #FFF;
                transition: background-color var(--main-transition);
                cursor: pointer;

                span {
                  color: #3b3b3bd1;
                  transition: var(--main-transition);
                  font-size: 12px;
                }

                &.selected {
                  border: 2px solid #000;
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

            h5 {
              margin-top: 10px;
              text-align: left;
              color: var(--secound-color);
            }
          }
        }

        .btns {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;

          .qty {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 40px;
            width: 30%;

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

          button {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            height: 40px;
            outline: none;
            border: 1px solid #000;
            background-color: var(--secound-color);
            transition: var(--main-transition);
            margin: 0;
            padding: 0;

            h3 {
              margin: 0;
              padding: 0;
              font-size: 16px;
              font-weight: bold;
              transform: translateX(1);
              color: var(--third-color);
              transition: var(--main-transition);
            }

            &:hover {
              background-color: var(--main-color);
              border: 1px solid #fff;

              h3 {
                animation: ff 0.8s ease-in-out;
                color: var(--third-color);
              }
            }
          }
        }

      }
    }

    &.open {
      top: 0%;

      .giftWrapBoxContainer {
        opacity: 1;
      }
    }
  }

}

@keyframes ff {
  0% {
    transform: translateX(1);
  }

  20% {
    transform: translateX(25px);
  }

  40% {
    transform: translateX(-25px);
  }

  60% {
    transform: translateX(25px);
  }

  80% {
    transform: translateX(-25px);
  }

  100% {
    transform: translateX(1);
  }
}

@media (max-width: 770px) {
  .Cart {
    .cart-content {
      width: 100%;

      .row {
        .freeShipping {
          margin-bottom: 20px;

          .progres {
            width: 80%;
          }

          h4 {
            font-size: 14px;
          }
        }

        .table-head {
          display: none;
        }
      }
    }

    .noContent {
      padding: 100px 50px;
    }

    .giftWrapBox {
      height: 100% !important;

      .giftWrapBoxContainer {
        width: 70%;

        .giftWrapBoxContent {
          .box {
            flex-direction: column;

            .img-box {
              width: 100%;
              height: 125px;
            }

            .info-box {
              width: 100%;
              padding-left: 0;
            }
          }

          .btns {
            .qty {
              flex: 1;
            }

            button {
              flex: 1;
            }
          }
        }
      }
    }

  }
}

@media (max-width: 579px) {}

</style>
