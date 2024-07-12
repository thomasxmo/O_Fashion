<template>
  <div class="checkout">
    <div class="checkoutHeader">
      <div class="logo">
        <router-link to="/">
          <h3>o<span>.</span> fashion</h3>
        </router-link>
      </div>
      <div class="cart">
        <div class="icon">
          <router-link to="/Cart">
            <img src="@/assets/logo/shopping-bag.png">
          </router-link>
        </div>
      </div>
    </div>
    <div class="openUp">
      <p @click="openUp = !openUp">Show Order Summary <span :class="{ active: openUp }"><i
            class="edit fa-solid fa-angle-down"></i></span></p>
      <p>${{ calcTotal + shipping }}.00</p>
    </div>
    <div class="openUpContent" :class="{ active: openUp }">
      <div class="products">
        <div class="product" v-for="product in inCart" :key="product.id">
          <div class="img-box">
            <div class="imgPostion">
              <img
                :src="require(`@/assets/products/${product.category}/${product.imgUrl}/color${numberOfColor}/${product.img1}`)">
            </div>
            <div class="numberOfOrders">
              {{ product.numberOfOrder }}
            </div>
          </div>
          <div class="info-box">
            <h5>{{ product.title }}</h5>
            <p>{{ product.SelectedColor }}</p>
          </div>
          <div class="price">
            <h4>
              ${{ product.price }}.00
            </h4>
          </div>
        </div>
      </div>
      <hr>
      <div class="giftCard">
        <form action="">
          <input type="text" placeholder="Gift Card" />
          <button type="submit">
            <!-- <i class="fa-solid fa-hands-clapping"></i> -->
            Apply
          </button>
        </form>
      </div>
      <hr>
      <div class="total">
        <div class="box">
          <h6>Subtotal</h6>
          <p>${{ calcTotal }}.00</p>
        </div>
        <div class="box">
          <h6>Shipping</h6>
          <p>${{ shipping }}.00</p>
        </div>
        <hr>
        <div class="box">
          <h6>Total</h6>
          <p>${{ calcTotal + shipping }}.00</p>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="checkout-main col-12 col-sm-12 col-md-7 col-lg-7">
        <div class="checkoutProgress">
          <div class="statusBar">
            <span class="pBar"></span>
            <div class="node n0 done nConfirm" data-nConfirm="0">
              <div class="main done m0 done nConfirm0"></div>
              <span class="text t0 done nConfirm0">Contact</span>
            </div>
            <div class="node n1 nConfirm" data-nConfirm="1">
              <div class="main m1 nConfirm1"></div>
              <span class="text t1 nConfirm1">Delivery</span>
            </div>
            <div class="node n2 nConfirm" data-nConfirm="2">
              <div class="main m2 nConfirm2"></div>
              <span class="text t3 nConfirm3">Payment</span>
            </div>
            <div class="node n3 nConfirm" data-nConfirm="3">
              <div class="main m2 nConfirm2"></div>
              <span class="text t3 nConfirm3">Order</span>
            </div>
            <div class="node n4 nConfirm" data-nConfirm="4">
              <div class="main m4 nConfirm4"></div>
              <span class="text t4 nConfirm4">Complete</span>
            </div>
          </div>
        </div>
        <div class="checkoutContent">
          <div class="box contact active" data-type="0">
            <h2>Contact</h2>
            <form>
              <input class="input mb-4 mt-1" name="text" type="text" placeholder="Email or Phone number"
                style="width: 100% !important">
              <div class="checkbox">
                <label class="container">
                  <input checked="checked" type="checkbox">
                  <div class="checkmark"></div>
                </label>
                <p>Email me with news and offers</p>
              </div>
            </form>
          </div>
          <div class="box delivery" data-type="1">
            <h2>delivery</h2>
            <div class="radio-input">
              <input value="value-1" name="value-radio" id="value-1" type="radio" :checked="checked"
                @click="checked = !checked" />
              <label for="value-1">
                <div class="text">
                  <span class="circle"></span>
                  Ship
                </div>
                <div class="icon">
                  <i class="edit fa-solid fa-truck"></i>
                </div>
              </label>
              <input value="value-2" name="value-radio" id="value-2" type="radio" @click="checked = !checked" />
              <label for="value-2">
                <div class="text">
                  <span class="circle"></span>
                  Pick up
                </div>
                <div class="icon">
                  <i class="edit fa-solid fa-shop"></i>
                </div>
              </label>
            </div>
            <div class="ship" :class="{ active: checked }">
              <form action="">
                <select id="country" name="country" class="form-control" size="1" required>
                  <option value="country.value" v-for="country in countrys" :key="country">{{ country.label }}
                  </option>
                </select>
                <input class="input" name="text" type="text" placeholder="First name">
                <input class="input" name="text" type="text" placeholder="Last name">
                <input class="input" name="text" type="text" placeholder="Address" style="width: 100% !important">
                <input class="input" name="text" type="text" placeholder="Apartment, suite, etc. (optional)"
                  style="width: 100% !important">
                <input class="input" name="text" type="text" placeholder="City" style="width: 33% !important">
                <input class="input" name="text" type="text" placeholder="Governorate" style="width: 32% !important">
                <input class="input" name="text" type="text" placeholder="Postal code" style="width: 32% !important">
                <div class="checkbox">
                  <label class="container">
                    <input checked="checked" type="checkbox">
                    <div class="checkmark"></div>
                  </label>
                  <p>Save this information for next time</p>
                </div>
              </form>
            </div>
            <div class="pickUp" :class="{ active: !checked }">
              <h5>PickUp Location</h5>
              <p><span>there are 2 stores with stock close to your location</span><span>Change my location</span></p>
              <form action="">
                <div class="radio-input">
                  <input value="value-3" name="value-radio" id="value-3" type="radio" />
                  <label for="value-3">
                    <div class="text">
                      <span class="circle"></span>
                      <div class="location">
                        <span>New York</span>
                        <span>New York, New York NY</span>
                      </div>
                    </div>
                    <div class="icon">
                      <span>free</span>
                      <p>Usually ready in 4 hours</p>
                    </div>
                  </label>
                  <input value="value-4" name="value-radio" id="value-4" type="radio" />
                  <label for="value-4">
                    <div class="text">
                      <span class="circle"></span>
                      <div class="location">
                        <span>Torato Store</span>
                        <span>1256 Ray Avenue, Kansas City KS</span>
                      </div>
                    </div>
                    <div class="icon">
                      <span>free</span>
                      <p>Usually ready in 4 hours</p>
                    </div>
                  </label>
                </div>
              </form>
            </div>
          </div>
          <div class="box payment" data-type="2">
            <h2>Payment</h2>
            <form>
              <div class="inputs" style="width: 100% !important">
                <label for="Name">Number on card</label>
                <input class="input mb-4 mt-1" name="Name" type="text" placeholder="1234 xxxx xxxx xxxx"
                  @input="chickNumberOnCard($event)" maxlength="19" style="width: 100% !important">
              </div>
              <div class="inputs" style="width: 49% !important; margin-right: 2%">
                <label for="Name">Expiration Date (MM / YY)</label>
                <input class="input mb-4 mt-1" name="Name" type="text" placeholder="MM / YY"
                  @input="chickExpirationDate($event)" maxlength="5" style="width: 100% !important">
              </div>
              <div class="inputs" style="width: 49% !important">
                <label for="Name">Security code</label>
                <input class="input mb-4 mt-1" name="Name" type="text" placeholder="CVV" style="width: 100% !important"
                  maxlength="3" @input="chickCVV($event)">
              </div>
              <div class="inputs" style="width: 100% !important">
                <label for="Name">Name on card</label>
                <input class="input mb-4 mt-1" name="Name" type="text" placeholder="Name on card"
                  style="width: 100% !important">
              </div>
              <div class="checkbox mb-4">
                <label class="container">
                  <input checked="checked" type="checkbox">
                  <div class="checkmark"></div>
                </label>
                <p>Save my informations for faster chekout</p>
              </div>
            </form>
          </div>
          <div class="box order" data-type="3">
            <h2>Order</h2>
            <div class="msg">
              <h1>Your information has been collected</h1>
              <p>click the button bellow to complete your order</p>
              <mostButton padding="" btnText="Buy now" fontSize="16" @click="next()" />
            </div>
          </div>
          <div class="box complete" data-type="4">
            <div class="icon">
              <img src="@/assets/logo/check.png" alt="">
            </div>
            <h1>Your order has been orderd</h1>
          </div>
        </div>
        <div class="ProgressBtns">
          <button type="button" @click="back()" id="back" :disabled="backDisabled">Back</button>
          <button type="button" @click="next()" id="next" :disabled="nextDisabled">Next</button>
        </div>
      </div>
      <div class="orderSummary col-12 col-sm-12 col-md-5 col-lg-5 d-tablt-none d-phone-none">
        <div class="stickyContent">
          <div class="products">
            <div class="product" v-for="product in inCart" :key="product.id">
              <div class="img-box">
                <div class="imgPostion">
                  <img
                    :src="require(`@/assets/products/${product.category}/${product.imgUrl}/color${numberOfColor}/${product.img1}`)">
                </div>
                <div class="numberOfOrders">
                  {{ product.numberOfOrder }}
                </div>
              </div>
              <div class="info-box">
                <h5>{{ product.title }}</h5>
                <p>{{ product.SelectedColor }}</p>
              </div>
              <div class="price">
                <h4>
                  ${{ product.price }}.00
                </h4>
              </div>
            </div>
          </div>
          <hr>
          <div class="giftCard">
            <form action="">
              <input type="text" placeholder="Gift Card" />
              <button type="submit">
                <!-- <i class="fa-solid fa-hands-clapping"></i> -->
                Apply
              </button>
            </form>
          </div>
          <hr>
          <div class="total">
            <div class="box">
              <h6>Subtotal</h6>
              <p>${{ calcTotal }}.00</p>
            </div>
            <div class="box">
              <h6>Shipping</h6>
              <p>${{ shipping }}.00</p>
            </div>
            <hr>
            <div class="box">
              <h6>Total</h6>
              <p>${{ calcTotal + shipping }}.00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import productJsonApi from "@/json/allproudects.json";
import country from "@/json/country.json";
import mostButton from "@/components/global/buttons/mostButton.vue";

export default {
  name: "CheckoutView",
  data() {
    return {
      allProducts: productJsonApi,
      state: 0,
      stateMax: 4,
      backDisabled: true,
      nextDisabled: false,
      countrys: country,
      checked: true,
      checkoutContent: ["contact", "delivery", "payment", "order", "complete"],
      numberOfColor: 1,
      shipping: 20,
      openUp: true,
    }
  },
  props: [
    "",
    "",
    "",
  ],
  components: {
    mostButton,
  },
  methods: {
    back() {
      let Bar = document.querySelector(".pBar");
      let nConfirm = Array.from(document.querySelectorAll(".nConfirm"));
      let next = document.querySelector("#next");
      let back = document.querySelector("#back");
      let boxs = Array.from(document.querySelectorAll(".checkoutContent .box"));

      if (this.state > 0) {

        boxs.forEach((box) => {
          if (box.getAttribute("data-type") == this.state - 1) {
            box.classList.add("active");
          } else {
            box.classList.remove("active");
          }
        });

        // Enables 'back' button if disabled
        this.nextDisabled = false;

        next.style.display = "block";

        nConfirm.forEach(e => {
          if (e.getAttribute("data-nConfirm") == this.state) {
            e.classList.remove("done");
            let children = Array.from(e.childNodes);
            children.forEach(child => {
              child.classList.remove("done")
            })
          }
        });

        this.state -= 1;

        // Progress bar animation
        var pBar = (this.state / this.stateMax) * 100;
        Bar.style.width = `${pBar}%`;

        // Disables 'next' button if end of steps
        if (this.state == 0) {
          this.backDisabled = true;
        }

        if (this.state == 4) {
          back.style.display = "none";
        }
      }
    },
    next() {
      let Bar = document.querySelector(".pBar");
      let nConfirm = Array.from(document.querySelectorAll(".nConfirm"));
      let next = document.querySelector("#next");
      let back = document.querySelector("#back");
      let boxs = Array.from(document.querySelectorAll(".checkoutContent .box"));

      if (this.state < this.stateMax) {

        boxs.forEach((box) => {
          if (box.getAttribute("data-type") == this.state + 1) {
            box.classList.add("active");
          } else {
            box.classList.remove("active");
          }
        });

        this.state += 1;

        // Enables 'back' button if disabled
        this.backDisabled = false;

        nConfirm.forEach(e => {
          if (e.getAttribute("data-nConfirm") == this.state) {
            e.classList.add("done");
            let children = Array.from(e.childNodes);
            children.forEach(child => {
              child.classList.add("done")
            })
          }
        });

        // Progress bar animation
        var pBar = (this.state / this.stateMax) * 100;
        Bar.style.width = `${pBar}%`;

        // Disables 'next' button if end of steps
        if (this.state == 3) {
          next.style.display = "none";
        }

        if (this.state == 4) {
          back.style.display = "none";
        }
      }
    },
    chickNumberOnCard(e) {
      // let value = e.currentTarget.value;
      // for (let i = 1; i < value.length; i++) {
      //   let num = 3;
      //   if (i == num || i == 8 || i == 13) {
      //     e.currentTarget.value = value + "/";
      //   } else {
      //     e.currentTarget.value = value;
      //   }
      // }
      const value = e.currentTarget.value.replace(/\D/g, ""); // Remove non-numeric characters
      const formattedValue = value.replace(/(\d{4})(?=\d)/g, "$1/"); // Add space every 4 digits
      e.currentTarget.value = formattedValue;
    },
    chickExpirationDate(e) {
      // const value = e.currentTarget.value;
      // if ([2].includes(value.length)) {
      //   e.currentTarget.value = value + "/";
      // }
      const value = e.currentTarget.value.replace(/\D/g, ""); // Remove non-numeric characters
      const formattedValue = value.replace(/(\d{2})(?=\d)/g, "$1/"); // Add space every 4 digits
      e.currentTarget.value = formattedValue;
    },
    chickCVV(e) {
      const value = e.currentTarget.value.replace(/\D/g, ""); // Remove non-numeric characters
      e.currentTarget.value = value;
    },
  },
  computed: {
    inCart() {
      return this.allProducts.filter(p => p.inCart == true);
    },
    calcTotal() {
      let prices = [];
      this.inCart.forEach((p) => {
        prices.push(p.price * p.numberOfOrder);
      })

      let total = prices.reduce((a, b) => a + b, 0);

      return total
    },
  },
  mounted() {
  },

};

</script>

<style lang="scss">

.checkout {
  .checkoutHeader {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 8%;
    background-color: #fbb9cd4f;
    box-shadow: rgb(105 50 73 / 22%) 0px 1px 2px 0px, rgba(0, 0, 0, 0.05) 0px 1px 1px 0px;

    .logo {
      display: flex;
      align-items: center;
      justify-content: center;

      h3 {
        color: var(--secound-color);
        font-family: var(--main-font);
        font-weight: bold;
        font-size: 20px;
        margin: 0;

        span {
          color: var(--main-color);
        }
      }
    }

    .cart {
      .icon {
        cursor: pointer;

        img {
          width: 25px;
          height: 25px;
          object-fit: cover;
        }
      }
    }
  }

  .checkout-main {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 20px 50px;
    z-index: 2;

    .checkoutProgress {
      padding: 30px 10px;
      width: 70%;
      transition: var(--main-transition);

      .statusBar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0;
        width: 100%;
        position: relative;
        cursor: default;
        transition: var(--main-transition);

        &::before {
          content: "";
          height: 0.2em;
          background-color: #C4C4C4;
          position: absolute;
          left: 1em;
          right: 1em;
          transition: var(--main-transition);
        }
      }

      .pBar {
        content: "";
        height: 0.3em;
        border-radius: 0 0 0.15em 0.15em;
        background-color: var(--main-color);
        max-width: 100%;
        margin: 10px #000000 solid;
        position: absolute;
        left: 0;
        width: 0%;
        transition: var(--main-transition);
      }

      .statusBar>.node {
        background-color: #c4c4c4;
        height: 1em;
        width: 1em;
        border-radius: 100%;
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        transition: var(--main-transition);
      }

      .node {
        >.text {
          font-size: 14px;
          font-weight: 500;
          color: #c4c4c4;
          text-align: center;
          position: absolute;
          top: 2em;
          transition: var(--main-transition);
        }

        &.done {
          background-color: var(--main-color);
          transition: var(--main-transition);
        }

        > {
          .text.done {
            color: var(--main-color);
            font-size: 14px;
            font-weight: 500;
            transition: var(--main-transition);
          }

          .main {
            position: absolute;
            border: 0.2em #c4c4c4 solid;
            width: 0;
            height: 0;
            border-radius: 100%;
            transition: var(--main-transition);

            &.done {
              border: 2.8px var(--main-color) solid;
              width: 2em;
              height: 2em;
              border-radius: 100%;
              transition: var(--main-transition);
            }
          }
        }
      }

    }

    .checkoutContent {
      margin: 20px 0;
      width: 100%;

      .box {
        h2 {
          color: var(--secound-color);
          text-align: left;
          margin: 20px 0;
          font-size: 22px;
        }
      }

      .contact {
        display: none;

        &.active {
          display: block;
        }
      }

      .delivery {
        display: none;

        &.active {
          display: block;
        }

        .radio-input {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-direction: column;

          input {
            display: none;
          }

          label {
            --border-color: #ff6e9985;
            border: 1px solid var(--border-color);
            min-width: 5rem;
            padding: 1rem;
            // margin-bottom: px;
            display: flex;
            justify-content: space-between;
            position: relative;
            align-items: center;
            width: 100%;
            border-radius: 0px 0px 6px 6px;

            &:first-of-type {
              // border-bottom: none;
              border-radius: 6px 6px 0px 0px !important;
            }
          }

          input:checked+label {
            --border-color: var(--main-color);
            border-color: var(--border-color);
            border-width: 2px;
          }

          label:hover {
            --border-color: var(--main-color);
            border-color: var(--border-color);
          }
        }

        .circle {
          display: inline-block;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background-color: rgb(227 212 218);
          margin-right: 0.5rem;
          position: relative;
        }

        .radio-input input:checked+label span.circle::before {
          content: "";
          display: inline;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background-color: var(--main-color);
          width: 15px;
          height: 15px;
          border-radius: 50%;
        }

        .text {
          display: flex;
          align-items: center;
        }

        .icon {
          display: flex;
          flex-direction: column;
          text-align: right;
          font-weight: bold;

          .edit {
            color: rgb(227 212 218);
          }
        }

        .radio-input input:checked+label .icon .edit {
          color: var(--main-color);
        }

        .checkbox {
          margin: 15px 0;
          width: 100%;
        }

        .ship {
          display: none;

          form {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-wrap: wrap;
          }

          &.active {
            display: block;
          }
        }

        .pickUp {
          width: 100%;
          margin: 20px 0;
          display: none;

          h5 {
            text-align: left;
            font-size: 16px;
            color: var(--secound-color);
          }

          p {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            font-size: 14px;
            color: var(--font-color);

            span:last-of-type {
              color: var(--main-color);
              text-decoration: underline;
              cursor: pointer;
            }
          }

          .radio-input {
            border-radius: 6px;

            .location {
              display: flex;
              align-items: flex-start;
              justify-content: center;
              flex-direction: column;

              span {
                font-size: 12px;
                font-weight: 500;
                color: var(--secound-color);

                &:last-of-type {
                  color: var(--font-color);
                }
              }
            }

            .icon {
              span {
                font-size: 14px;
              }

              p {
                margin: 0;
                font-size: 12px;
              }
            }
          }

          &.active {
            display: block;
          }
        }
      }

      .payment {
        display: none;

        &.active {
          display: block;
        }

        form {
          display: flex;
          align-items: flex-start;
          justify-content: flex-start;
          flex-wrap: wrap;

          .inputs {
            display: flex;
            align-items: flex-start;
            justify-content: center;
            flex-direction: column;

            label {
              text-align: left;
              margin-bottom: 8px;
              color: var(--secound-color);
              font-weight: 500;
              font-size: 14px;
            }
          }
        }
      }

      .order {
        display: none;

        &.active {
          display: block;
        }

        .msg {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          padding: 20px;

          h1 {
            color: var(--main-color);
            margin-bottom: 6px;
          }

          p {
            color: var(--font-color);
            margin-bottom: 20px;
          }

          .mostButton {
            width: 100%;
          }
        }
      }

      .complete {
        align-items: center;
        justify-content: center;
        flex-direction: column;
        display: none;
        margin-top: 60px;

        &.active {
          display: flex;
        }

        .icon {
          width: 15%;

          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }

        h1 {
          color: var(--secound-color);
          text-transform: uppercase;
          letter-spacing: 2px;
        }
      }
    }

    .ProgressBtns {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;

      button {
        outline: none;
        padding: 6px 30px;
        background: var(--main-color);
        color: var(--third-color);
        border: 1px solid var(--main-color);
        font-size: 14px;
        font-weight: 500;
        transition: var(--main-transition);

        &:first-child {
          background: transparent;
          border: 1px solid var(--secound-color);
          color: var(--secound-color);

          &:hover {
            background: var(--secound-color);
            border: 1px solid var(--secound-color);
            color: var(--third-color);
          }
        }

        &:hover {
          background: #ff769f;
          border: 1px solid #ff769f;
        }

        &:disabled {
          opacity: 0.7;
          cursor: auto;
        }
      }
    }
  }

  .orderSummary {
    display: block;
    background-color: #fdf0f4;
    border-left: 1px solid #ddd;
    height: 100vh;

    .stickyContent {
      padding: 30px 10px;
      position: sticky;
      width: 100%;
      inline-size: 100%;
      left: auto;
      right: auto;
      top: auto;
      inset: auto;
      bottom: 0;
      top: 0;
      inset-block-end: 0;
      inset-block-start: 0;

      .products {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        .product {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          width: 100%;

          .img-box {
            position: relative;
            display: flex;
            align-items: center;
            justify-content: flex-start;
            flex: 1;

            .imgPostion {
              position: relative;
              width: 70px;
              height: 90px;
              overflow: hidden;
              border-radius: 6px;

              img {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -35%);
                width: 100%;
                height: 150px;
                object-fit: cover;
              }
            }

            .numberOfOrders {
              position: absolute;
              top: -10px;
              right: -8px;
              color: var(--third-color);
              background-color: var(--main-color);
              width: 22px;
              height: 22px;
              border-radius: 50%;
              display: flex;
              align-items: center;
              justify-content: center;
              font-size: 15px;
              font-weight: 600;
            }
          }

          .info-box {
            flex: 5;
            display: flex;
            align-items: flex-start;
            justify-content: center;
            flex-direction: column;
            margin-left: 15px;

            h5 {
              color: var(--secound-color);
              font-size: 14px;
              text-align: left;
              margin-bottom: 7px;
              font-weight: 500;
            }

            p {
              color: var(--font-color);
              font-size: 12px;
              text-align: left;
              margin: 0;
              font-weight: 500;
            }
          }

          .price {
            display: flex;
            align-items: center;
            justify-content: flex-start;
            flex: 2;

            h4 {
              color: var(--secound-color);
              font-weight: 500;
              font-size: 16px;
            }
          }

          &:not(:last-of-type) {
            margin-bottom: 20px;
          }
        }
      }

      .giftCard {
        form {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 93%;

          input {
            width: 90%;
            height: 50px;
            outline: none;
            font-size: 14px;
            color: #111111af;
            padding: 10px;
            border: 1px solid #ddd;
            border-right: none !important;
            background-color: #fff;
            transition: var(--main-transition);
          }

          input::placeholder {
            font-size: 14px;
            color: #111111af;
          }

          button {
            height: 50px;
            outline: none;
            background-color: var(--main-color);
            border: 1px solid var(--main-color);
            padding: 10px;
            transition: background-color var(--main-transition);
            color: #fff;
            font-size: 14px;
            font-weight: 600;
          }

        }
      }

      .total {
        .box {
          width: 93%;
          display: flex;
          align-items: center;
          justify-content: space-between;

          h6 {
            color: var(--secound-color);
            font-size: 16px;
          }

          p {
            color: var(--secound-color);
            font-size: 14px;
            font-weight: 600;
          }

          &:last-of-type {
            h6 {
              color: var(--secound-color);
              font-size: 22px;
              font-weight: 600;
            }

            p {
              color: var(--secound-color);
              font-size: 18px;
              font-weight: 600;
            }
          }
        }
      }

      hr {
        width: 93%;
      }
    }
  }

  .openUp {
    display: none;
  }

  .openUpContent {
    display: none;
  }

  select {
    margin-top: 20px;
    padding: 10px 20px;
  }

  .input {
    width: 49%;
    height: 45px;
    padding: 12px;
    border-radius: 6px;
    border: 1.5px solid lightgrey;
    outline: none;
    transition: all 0.3s cubic-bezier(0.19, 1, 0.22, 1);
    box-shadow: 0px 0px 20px -18px;
    margin: 15px 1% 0 0;

    &:hover {
      border: 2px solid var(--main-color);
      box-shadow: 0px 0px 20px -17px;
    }

    &:active {
      transform: scale(0.95);
    }

    &:focus {
      border: 2px solid var(--main-color);
    }
  }

  .checkbox {
    display: flex;
    align-items: center;
    justify-content: center;

    .container {
      input {
        position: absolute;
        opacity: 0;
        cursor: pointer;
        height: 0;
        width: 0;
      }

      display: flex;
      gap: 10px;
      width: 5%;
    }

    .checkmark {
      position: relative;
      box-shadow: var(--main-color) 0px 0px 0px 2px;
      background-color: transparent;
      height: 15px;
      width: 15px;
      margin-right: 10px;
      flex-shrink: 0;
      margin-top: -1px;
      transition: all 0.2s ease 0s;
      cursor: pointer;
      transform-origin: 0px 10px;
      border-radius: 4px;
      margin: -1px 10px 0px 0px;
      padding: 0px;
      box-sizing: border-box;
    }

    .container input:checked~.checkmark {
      box-shadow: var(--main-color) 0px 0px 0px 2px;
      background-color: var(--main-color);
      height: 15px;
      width: 15px;
      margin-right: 10px;
      flex-shrink: 0;
      margin-top: -1px;
      transition: all 0.2s ease 0s;
      cursor: pointer;
      transform-origin: 0px 10px;
      border-radius: 4px;
      margin: -1px 10px 0px 0px;
      padding: 0px;
      box-sizing: border-box;
    }

    .checkmark:after {
      content: "";
      position: absolute;
      display: none;
    }

    .container {
      input:checked~.checkmark:after {
        display: block;
      }

      .checkmark:after {
        left: 5px;
        top: 1px;
        width: 0.35em;
        height: 0.7em;
        border: solid white;
        border-width: 0 0.15em 0.15em 0;
        transform: rotate(45deg);
        transition: all 500ms ease-in-out;
      }
    }

    p {
      width: 95%;
      text-align: left;
      margin: 0 8px;
      font-size: 15px;
      color: var(--secound-color);
    }
  }
}

@media (max-width: 770px) {
  .checkout-main {
    padding: 20px 30px !important;

    .checkoutProgress {
      width: 90% !important;
    }

    .checkoutContent {
      margin: 20px 0 30px 0 !important;

      .delivery {
        .pickUp {
          p {

            span {
              text-align: left !important;
              font-size: 12px !important;
            }

          }
        }
      }

      .order {
        .msg {
          h1 {
            margin: 6px 0 !important;
            font-size: 20px !important;
          }

          p {
            font-size: 14px !important;
          }

          .mostButton {
            h3 {
              font-size: 14px !important;
            }
          }
        }
      }

      .complete {
        .icon {
          width: 10% !important;
        }

        h1 {
          font-size: 20px !important;
        }
      }
    }

    .ProgressBtns {
      margin-bottom: 20px !important;
    }
  }

  .openUp {
    display: flex !important;
    width: 100%;
    align-self: center;
    justify-content: space-between;
    padding: 15px;
    background-color: #ffd4e1;
    overflow: hidden;
    border: 1px solid #e8e8e8;
    border-left: none;
    border-right: none;

    p {
      margin: 0;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      color: var(--secound-color);
      font-weight: 600;

      &:first-of-type {
        color: #ff8aad;
        cursor: pointer;
        font-size: 15px;

        span {
          display: flex;
          align-items: center;
          justify-content: center;
          margin-left: 6px;
          margin-top: 5px;

          .edit {
            transition: var(--main-transition);
          }

          &.active {
            .edit {
              transform: rotate(180deg);
            }
          }

        }
      }
    }
  }

  .openUpContent {
    display: block !important;
    height: 0;
    opacity: 0;
    transition: var(--main-transition);
    width: 100%;
    z-index: 1;

    .products {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      width: 100%;

      .product {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        width: 100%;

        .img-box {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          flex: 1;

          .imgPostion {
            position: relative;
            width: 70px;
            height: 90px;
            overflow: hidden;
            border-radius: 6px;

            img {
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -35%);
              width: 100%;
              height: 150px;
              object-fit: cover;
            }
          }

          .numberOfOrders {
            position: absolute;
            top: -10px;
            right: -8px;
            color: var(--third-color);
            background-color: var(--main-color);
            width: 22px;
            height: 22px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 15px;
            font-weight: 600;
          }
        }

        .info-box {
          flex: 5;
          display: flex;
          align-items: flex-start;
          justify-content: center;
          flex-direction: column;
          margin-left: 15px;

          h5 {
            color: var(--secound-color);
            font-size: 14px;
            text-align: left;
            margin-bottom: 7px;
            font-weight: 500;
          }

          p {
            color: var(--font-color);
            font-size: 12px;
            text-align: left;
            margin: 0;
            font-weight: 500;
          }
        }

        .price {
          display: flex;
          align-items: center;
          justify-content: center;
          flex: 2;

          h4 {
            color: var(--secound-color);
            font-weight: 500;
            font-size: 16px;
          }
        }

        &:not(:last-of-type) {
          margin-bottom: 20px;
        }
      }
    }

    .giftCard {
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
          border: 1px solid #ddd;
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
          background-color: var(--main-color);
          border: 1px solid var(--main-color);
          padding: 10px;
          transition: background-color var(--main-transition);
          color: #fff;
          font-size: 14px;
          font-weight: 600;
          display: flex;
          align-items: center;
          justify-content: center;
        }

      }
    }

    .total {
      .box {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;

        h6 {
          color: var(--secound-color);
          font-size: 16px;
        }

        p {
          color: var(--secound-color);
          font-size: 14px;
          font-weight: 600;
        }

        &:last-of-type {
          h6 {
            color: var(--secound-color);
            font-size: 22px;
            font-weight: 600;
          }

          p {
            color: var(--secound-color);
            font-size: 18px;
            font-weight: 600;
          }
        }
      }
    }

    hr {
      width: 93%;
    }

    &.active {
      height: 480px;
      opacity: 1;
      padding: 20px;
    }
  }
}

@media (max-width: 579px) {
  .checkout-main {
    padding: 20px 30px !important;

    .checkoutProgress {
      width: 90% !important;
    }

    .checkoutContent {
      margin: 20px 0 30px 0 !important;

      .delivery {
        .pickUp {
          p {

            span {
              text-align: left !important;
              font-size: 12px !important;
            }

          }
        }
      }

      .order {
        .msg {
          h1 {
            margin: 6px 0 !important;
            font-size: 20px !important;
          }

          p {
            font-size: 14px !important;
          }

          .mostButton {
            h3 {
              font-size: 14px !important;
            }
          }
        }
      }

      .complete {
        .icon {
          width: 10% !important;
        }

        h1 {
          font-size: 20px !important;
        }
      }
    }

    .ProgressBtns {
      margin-bottom: 20px !important;
    }
  }
}

.header{
  display: none;
}
.AppFooter{
  display: none;
}
.scrollToTop{
  display: none;
}
</style>