<template>
  <div class="Product">
    <div class="container">
      <div class="breadcrumb">
        <div class="pages">
          <router-link to="/">Home</router-link> &nbsp;
          <i class="edit fa-solid fa-chevron-right"></i>&nbsp;
          <router-link to="/Shop">Shop</router-link>&nbsp;
          <i class="edit fa-solid fa-chevron-right"></i>&nbsp;
          <router-link to="/Shop">{{ product.title }}</router-link>&nbsp;
        </div>
      </div>
      <div class="row p-0">
        <div class="prouduct-container col-12 p-0">
          <div class="row p-0">
            <div class="product-imgs col-12 col-sm-12 col-md-7 col-lg-7">
              <div class="images">
                <div class="photo-pick">
                  <ul class="p-0 m-0">
                    <li class="active" @click="slider($event)">
                      <img :src="require(`@/assets/products/${product.category}/${product.imgUrl}/color${numberOfColor}/${product.img3}`)
            " />
                    </li>
                    <li @click="slider($event)">
                      <img :src="require(`@/assets/products/${product.category}/${product.imgUrl}/color${numberOfColor}/${product.img2}`)
            " />
                    </li>
                    <li @click="slider($event)">
                      <img :src="require(`@/assets/products/${product.category}/${product.imgUrl}/color${numberOfColor}/${product.img3}`)
            " />
                    </li>
                    <li @click="slider($event)">
                      <img :src="require(`@/assets/products/${product.category}/${product.imgUrl}/color${numberOfColor}/${product.img4}`)
            " />
                    </li>
                    <li @click="slider($event)">
                      <img :src="require(`@/assets/products/${product.category}/${product.imgUrl}/color${numberOfColor}/${product.img5}`)
            " />
                    </li>
                    <li @click="slider($event)">
                      <img :src="require(`@/assets/products/${product.category}/${product.imgUrl}/color${numberOfColor}/${product.img6}`)
            " />
                    </li>
                  </ul>
                </div>
                <div class="slider">
                  <Splide :options="slideOption" aria-label="prouduct images">
                    <SplideSlide>
                      <img :src="require(`@/assets/products/${product.category}/${product.imgUrl}/color${numberOfColor}/${product.img1}`)
            " />
                    </SplideSlide>
                    <SplideSlide>
                      <img :src="require(`@/assets/products/${product.category}/${product.imgUrl}/color${numberOfColor}/${product.img2}`)
            " />
                    </SplideSlide>
                    <SplideSlide>
                      <img :src="require(`@/assets/products/${product.category}/${product.imgUrl}/color${numberOfColor}/${product.img3}`)
            " />
                    </SplideSlide>
                    <SplideSlide>
                      <img :src="require(`@/assets/products/${product.category}/${product.imgUrl}/color${numberOfColor}/${product.img4}`)
            " />
                    </SplideSlide>
                    <SplideSlide>
                      <img :src="require(`@/assets/products/${product.category}/${product.imgUrl}/color${numberOfColor}/${product.img5}`)
            " />
                    </SplideSlide>
                    <SplideSlide>
                      <img :src="require(`@/assets/products/${product.category}/${product.imgUrl}/color${numberOfColor}/${product.img6}`)
            " />
                    </SplideSlide>

                    <div class="my-slider-progress" :style="{ display: 'block' }">
                      <div class="my-slider-progress-bar" :style="{ width: progressBarWidth }"></div>
                    </div>
                  </Splide>
                </div>
              </div>
            </div>
            <div class="product-info col-12 col-sm-12 col-md-5 col-lg-5">
              <div class="row p-0">
                <div class="rating col-6" :class="`rr${this.product.id}`">
                  <i class="edit fa-regular fa-star"></i>
                  <i class="edit fa-regular fa-star"></i>
                  <i class="edit fa-regular fa-star"></i>
                  <i class="edit fa-regular fa-star"></i>
                  <i class="edit fa-regular fa-star"></i>
                </div>
                <h2 class="col-12">{{ product.title }}</h2>
                <div class="price col-12">${{ product.price }}</div>
                <div class="avalibale col-12">
                  <div class="stock">
                    <div class="true" v-if="product.stock">
                      <i class="fa-regular fa-circle-check" style="color: green"></i>
                    </div>
                    <div class="false" v-if="!product.stock">
                      <i class="fa-regular fa-circle-xmark" style="color: red"></i>
                    </div>
                    <span>
                      {{ product.stock == true ? "in" : "out" }}
                      stock -
                      {{
            product.stock == true
              ? "Ready to ship"
              : "NOT Ready to ship"
          }}
                    </span>
                  </div>
                  <div class="sold">
                    <img src="@/assets/fire.gif" alt="" />
                    <span>4 solid in last 7 hours</span>
                  </div>
                  <div class="view">
                    <img src="@/assets/eye.gif" alt="" />
                    <span>20 people are viewing this right now</span>
                  </div>
                </div>
                <div class="colors col-12">
                  <p>
                    color:<span class="color-name">{{
              product.colorsName[colorsNumber]
            }}</span>
                  </p>
                  <ul class="m-0 p-0">
                    <li class="color" v-for="(color, i) in product.colors" :key="color.id"
                      @click="(colorsNumber = i), (numberOfColor = i + 1)">
                      <img :src="require(`@/assets/products/${product.category}/${product.imgUrl
            }/color${i + 1}/${product.img1}`)
            " />
                    </li>
                  </ul>
                </div>
                <div class="sizes col-12" :class="`sss${product.id}`">
                  <p>size:</p>
                  <form action="">
                    <div v-for="size in product.sizes" :key="size.id">
                      <input type="radio" :id="size.id" :name="size" />
                      <label :for="{ size }">{{ size }}</label>
                    </div>
                  </form>
                </div>
                <div class="options col-12">
                  <div class="row">
                    <div class="qty col-4 m-0 p-0">
                      <div class="less" @click="productQTY--">-</div>
                      <div class="number">
                        {{ `${productQTY > 0 || productQTY == 0 ? productQTY : (productQTY = 1)}` }}
                      </div>
                      <div class="more" @click="productQTY++">+</div>
                    </div>

                    <div class="cart col-7 m-0">
                      <button type="button" @click="product.inCart == false ? AddToCart() : removrFromCart(), isIncreasing()">
                        <h3>{{ product.inCart == false ? "Add to" : "Remove From" }} cart</h3>
                      </button>
                    </div>
                    <div class="wishList col-1 m-0 p-0">
                      <div @click="(this.inWishListData = !this.inWishListData),addToWishList()" class="true" v-if="!this.inWishListData">
                        <i class="edit fa-regular fa-heart"></i>
                      </div>
                      <div @click="(this.inWishListData = !this.inWishListData),addToWishList()" class="false" v-if="this.inWishListData">
                        <i class="edit fa-solid fa-heart"></i>
                      </div>
                      <span @click="(this.inWishListData = !this.inWishListData), addToWishList()"></span>
                    </div>
                  </div>
                </div>
                <div class="buy col-12 mt-2">
                  <button>
                    <h3>Buy Now</h3>
                  </button>
                </div>
                <div class="shipping">
                  <div class="freeShipping">
                    <i class="edit fa-solid fa-truck"></i>
                    <span>Spent $199.00 more to get free shipping</span>
                  </div>
                  <hr />
                  <div class="estimated">
                    <i class="edit fa-regular fa-calendar-days"></i>
                    <span>Estimated delivery between 17 April - 23 April.</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="details col-12">
              <div class="tabs d-tablt-none d-phone-none">
                <div class="choose-tab">
                  <div class="row">
                    <div class="tab col-3" v-for="(tab, i) in tabs" :key="tab.id"
                      @click="activate(i), productTabs($event)" :class="{ active: active_el === i }">
                      <h4>{{ tab }}</h4>
                    </div>
                  </div>
                </div>
                <div class="tab-content">
                  <div class="tab Description active">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Eius eveniet fugit, reiciendis accusamus amet voluptates
                      ipsam quo iure iusto quam itaque! Voluptatibus aperiam
                      ipsam, officiis omnis illo suscipit impedit dolore.
                    </p>
                    <div class="row">
                      <div class="info col-12 col-sm-12 col-md-3 col-lg-3">
                        <ul>
                          <h4>Features</h4>
                          <li>100% Original Products</li>
                          <li>Wipe with a clean</li>
                          <li>dry cloth to remove the dust</li>
                          <li>Shoe Width: Medium</li>
                          <li>Anti-slip TPU Rubber Sole</li>
                          <li>70% cotton, 30% polyester.</li>
                        </ul>
                        <ul>
                          <h4>Description</h4>
                          <li>Model size: S</li>
                          <li>Model height: 177 cm</li>
                          <li>Colour: Red</li>
                        </ul>
                      </div>
                      <div class="info col-12 col-sm-12 col-md-2 col-lg-2">
                        <ul>
                          <h4>Base fabric</h4>
                          <li>75% polyester</li>
                          <li>25% cotton</li>
                        </ul>
                        <ul>
                          <h4>Lining</h4>
                          <li>100% polyester</li>
                        </ul>
                        <ul>
                          <h4>Inner</h4>
                          <li>100% cotton</li>
                        </ul>
                      </div>
                      <div class="photos col-12 col-sm-12 col-md-7 col-lg-7">
                        <div class="photo">
                          <img src="@/assets/3.jpg" />
                        </div>
                        <div class="photo">
                          <img src="@/assets/2.jpg" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="tab Review">
                    <div class="row">
                      <h4 class="col-12">Customer Reviews</h4>
                      <div class="rating col-12 col-sm-12 col-md-5 col-lg-6" :class="`rrr${this.product.id}`">
                        <div class="icons">
                          <i class="edit fa-regular fa-star"></i>
                          <i class="edit fa-regular fa-star"></i>
                          <i class="edit fa-regular fa-star"></i>
                          <i class="edit fa-regular fa-star"></i>
                          <i class="edit fa-regular fa-star"></i>
                        </div>
                        <h6>Put your review</h6>
                      </div>
                      <div class="writeReview col-12 col-sm-12 col-md-5 col-lg-6">
                        <button @click="activeReview = !activeReview">
                          write a Review
                        </button>
                      </div>
                      <div class="theReview col-12" :class="{ open: activeReview }">
                        <h3>Write a review</h3>
                        <div class="makeRating">
                          <h6>Rating</h6>
                          <div class="Mrating col-6" :class="`rrr${this.product.id}`">
                            <div class="icons">
                              <i class="edit fa-regular fa-star"></i>
                              <i class="edit fa-regular fa-star"></i>
                              <i class="edit fa-regular fa-star"></i>
                              <i class="edit fa-regular fa-star"></i>
                              <i class="edit fa-regular fa-star"></i>
                            </div>
                          </div>
                        </div>
                        <form action="">
                          <div class="reviewTitle">
                            <h6>Review Title</h6>
                            <div class="group">
                              <input required="" type="text" class="input" />
                              <span class="highlight"></span>
                              <span class="bar"></span>
                              <label>Name</label>
                            </div>
                          </div>
                          <div class="review">
                            <h6>Review</h6>
                            <textarea rows="5" name="review_body" placeholder="Write your comments here"
                              aria-label="Review"></textarea>
                          </div>
                          <div class="name">
                            <h6>Name</h6>
                            <div class="group">
                              <input required="" type="text" class="input" />
                              <span class="highlight"></span>
                              <span class="bar"></span>
                              <label>Enter your name (public)</label>
                            </div>
                          </div>
                          <div class="email">
                            <h6>Email</h6>
                            <div class="group">
                              <input required="" type="text" class="input" />
                              <span class="highlight"></span>
                              <span class="bar"></span>
                              <label>Enter your Email (public)</label>
                            </div>
                          </div>
                          <div class="config">
                            <p>
                              How we use your data: We’ll only contact you about
                              the review you left, and only if necessary. By
                              submitting your review, you agree to Judge.me’s
                              <span>terms and conditions and privacy policy.</span>
                            </p>
                          </div>
                          <div class="btns">
                            <button>Cancel review</button>
                            <button>Submit Review</button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                  <div class="tab Shipping">
                    <p>
                      For orders placed before 7am AEDT, we endeavour to process
                      the same business day. Orders placed after 11am AEDT will
                      be processed the next business day.
                    </p>
                    <p>
                      During sale events and new collection launches, there may
                      be a slighly longer processing time.
                    </p>
                    <p>
                      All Auguste orders are hand-picked and packed with love
                      from Byron Bay, Australie.
                    </p>
                  </div>
                  <div class="tab Return">
                    <p>
                      You can choose between a refund or a credit note on full
                      priced items.
                    </p>
                    <ul class="m-0 p-0" type="circle">
                      <li>
                        Item(s) must be returned in their original condition and
                        packaging: unworn, unwashed and with all tags attached.
                      </li>
                      <li>
                        Earrings cannot be returned due to health and safety
                        reasons.
                      </li>
                      <li>
                        Return shipping methods and associated costs are the
                        responsibility of the customer.
                      </li>
                      <li>
                        Sale items can not be refunded for change of mind.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="tabs2">
                <div class="choose-tab">
                  <div class="row">
                    <div class="tab col-12" :class="{ active: descriptionActive }">
                      <div class="head" @click="descriptionActive = !descriptionActive">
                        <h4>Description</h4>
                        <i class="edit fa-solid fa-angle-down"></i>
                      </div>
                      <div class="content">
                        <div class="Description">
                          <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Eius eveniet fugit, reiciendis accusamus amet
                            voluptates ipsam quo iure iusto quam itaque!
                            Voluptatibus aperiam ipsam, officiis omnis illo
                            suscipit impedit dolore.
                          </p>
                          <div class="row">
                            <div class="info col-12 col-sm-12 col-md-3 col-lg-3">
                              <ul>
                                <h4>Features</h4>
                                <li>100% Original Products</li>
                                <li>Wipe with a clean</li>
                                <li>dry cloth to remove the dust</li>
                                <li>Shoe Width: Medium</li>
                                <li>Anti-slip TPU Rubber Sole</li>
                                <li>70% cotton, 30% polyester.</li>
                              </ul>
                              <ul>
                                <h4>Description</h4>
                                <li>Model size: S</li>
                                <li>Model height: 177 cm</li>
                                <li>Colour: Red</li>
                              </ul>
                            </div>
                            <div class="info col-12 col-sm-12 col-md-2 col-lg-2">
                              <ul>
                                <h4>Base fabric</h4>
                                <li>75% polyester</li>
                                <li>25% cotton</li>
                              </ul>
                              <ul>
                                <h4>Lining</h4>
                                <li>100% polyester</li>
                              </ul>
                              <ul>
                                <h4>Inner</h4>
                                <li>100% cotton</li>
                              </ul>
                            </div>
                            <div class="photos col-12 col-sm-12 col-md-7 col-lg-7">
                              <div class="photo">
                                <img src="@/assets/3.jpg" />
                              </div>
                              <div class="photo">
                                <img src="@/assets/2.jpg" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="tab col-12" :class="{ active: shippingActive }">
                      <div class="head" @click="shippingActive = !shippingActive">
                        <h4>Review</h4>
                        <i class="edit fa-solid fa-angle-down"></i>
                      </div>
                      <div class="content">
                        <div class="Review">
                          <div class="row">
                            <h4 class="col-12">Customer Reviews</h4>
                            <div class="rating col-12 col-sm-12 col-md-5 col-lg-6" :class="`rrr${this.product.id}`">
                              <div class="icons">
                                <i class="edit fa-regular fa-star"></i>
                                <i class="edit fa-regular fa-star"></i>
                                <i class="edit fa-regular fa-star"></i>
                                <i class="edit fa-regular fa-star"></i>
                                <i class="edit fa-regular fa-star"></i>
                              </div>
                              <h6>Put your review</h6>
                            </div>
                            <div class="writeReview col-12 col-sm-12 col-md-5 col-lg-6">
                              <button @click="activeReview = !activeReview">
                                write a Review
                              </button>
                            </div>
                            <div class="theReview col-12" :class="{ open: activeReview }">
                              <h3>Write a review</h3>
                              <div class="makeRating">
                                <h6>Rating</h6>
                                <div class="Mrating col-6" :class="`rrr${this.product.id}`">
                                  <div class="icons">
                                    <i class="edit fa-regular fa-star"></i>
                                    <i class="edit fa-regular fa-star"></i>
                                    <i class="edit fa-regular fa-star"></i>
                                    <i class="edit fa-regular fa-star"></i>
                                    <i class="edit fa-regular fa-star"></i>
                                  </div>
                                </div>
                              </div>
                              <form action="">
                                <div class="reviewTitle">
                                  <h6>Review Title</h6>
                                  <div class="group">
                                    <input required="" type="text" class="input" />
                                    <span class="highlight"></span>
                                    <span class="bar"></span>
                                    <label>Name</label>
                                  </div>
                                </div>
                                <div class="review">
                                  <h6>Review</h6>
                                  <textarea rows="5" name="review_body" placeholder="Write your comments here"
                                    aria-label="Review"></textarea>
                                </div>
                                <div class="name">
                                  <h6>Name</h6>
                                  <div class="group">
                                    <input required="" type="text" class="input" />
                                    <span class="highlight"></span>
                                    <span class="bar"></span>
                                    <label>Enter your name (public)</label>
                                  </div>
                                </div>
                                <div class="email">
                                  <h6>Email</h6>
                                  <div class="group">
                                    <input required="" type="text" class="input" />
                                    <span class="highlight"></span>
                                    <span class="bar"></span>
                                    <label>Enter your Email (public)</label>
                                  </div>
                                </div>
                                <div class="config">
                                  <p>
                                    How we use your data: We’ll only contact you
                                    about the review you left, and only if
                                    necessary. By submitting your review, you
                                    agree to Judge.me’s
                                    <span>terms and conditions and privacy
                                      policy.</span>
                                  </p>
                                </div>
                                <div class="btns">
                                  <button>Cancel review</button>
                                  <button>Submit Review</button>
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="tab col-12" :class="{ active: reviewActive }">
                      <div class="head" @click="reviewActive = !reviewActive">
                        <h4>Shipping</h4>
                        <i class="edit fa-solid fa-angle-down"></i>
                      </div>
                      <div class="content">
                        <div class="Shipping">
                          <p>
                            For orders placed before 7am AEDT, we endeavour to
                            process the same business day. Orders placed after
                            11am AEDT will be processed the next business day.
                          </p>
                          <p>
                            During sale events and new collection launches,
                            there may be a slighly longer processing time.
                          </p>
                          <p>
                            All Auguste orders are hand-picked and packed with
                            love from Byron Bay, Australie.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="tab col-12" :class="{ active: returnActive }">
                      <div class="head" @click="returnActive = !returnActive">
                        <h4>Return</h4>
                        <i class="edit fa-solid fa-angle-down"></i>
                      </div>
                      <div class="content">
                        <div class="Return">
                          <p>
                            You can choose between a refund or a credit note on
                            full priced items.
                          </p>
                          <ul class="m-0 p-0" type="circle">
                            <li>
                              Item(s) must be returned in their original
                              condition and packaging: unworn, unwashed and with
                              all tags attached.
                            </li>
                            <li>
                              Earrings cannot be returned due to health and
                              safety reasons.
                            </li>
                            <li>
                              Return shipping methods and associated costs are
                              the responsibility of the customer.
                            </li>
                            <li>
                              Sale items can not be refunded for change of mind.
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
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
    </div>
  </div>
</template>

<script>
import allProducts from "@/json/allproudects.json";
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import "@splidejs/vue-splide/css";
import productBox from "@/components/global/productBox/productBox.vue";
import image from "@/assets/products/dress/dress3/color1/product_1.jpg";

export default {
  name: "ProductView",
  data() {
    return {
      products: allProducts,
      image: image,
      img: "@/assets/products/dress/dress3/color1/product_1.jpg",
      slideOption: {
        rewind: true,
        direction: "ttb",
        height: "40rem",
        fixedHeight: "40rem",
        autoWidth: true,
        wheel: true,
        type: "loop",
        arrows: false,
        pagination: false,
      },
      tabs: ["Description", "Review", "Shipping", "Return"],
      imgs: [],
      productName: "title",
      numberOfColor: 1,
      productQTY: 1,
      selectedSize: null,
      colorsNumber: 0,
      active_el: 0,
      true: true,
      chossenSize: false,
      activeReview: false,
      inWishListData: false,
      productQuickView: false,
      descriptionActive: false,
      shippingActive: false,
      reviewActive: false,
      returnActive: false,
      imageUrl: "@/assets/products/dress/dress3/color1/product_1.jpg",
    };
  },
  components: {
    Splide,
    SplideSlide,
    productBox,
  },
  methods: {
    getImgs() {
      let imges = [
        {
          src: `@/assets/products/${this.product[1].category}/${this.product[1].imgUrl}/color${this.numberOfColor}/${this.product[1].img1}`,
          alt: "img1",
        },
        {
          src: `@/assets/products/${this.product[1].category}/${this.product[1].imgUrl}/color${this.numberOfColor}/${this.product[1].img2}`,
          alt: "img2",
        },
        {
          src: `@/assets/products/${this.product[1].category}/${this.product[1].imgUrl}/color${this.numberOfColor}/${this.product[1].img3}`,
          alt: "img3",
        },
        {
          src: `@/assets/products/${this.product[1].category}/${this.product[1].imgUrl}/color${this.numberOfColor}/${this.product[1].img4}`,
          alt: "img4",
        },
        {
          src: `@/assets/products/${this.product[1].category}/${this.product[1].imgUrl}/color${this.numberOfColor}/${this.product[1].img5}`,
          alt: "img5",
        },
        {
          src: `@/assets/products/${this.product[1].category}/${this.product[1].imgUrl}/color${this.numberOfColor}/${this.product[1].img6}`,
          alt: "img6",
        },
      ];
      imges.forEach((img) => {
        if (!this.imgs.includes(img)) {
          this.imgs.push(img);
        }
      });
    },
    productColors() {
      var lis = document.querySelectorAll(" .product-info .colors .color");
      lis.forEach(function (li) {
        li.style.backgroundColor = li.getAttribute("data-color");
        if (li.getAttribute("data-color") == "") {
          li.style.display = "none";
        }
      });
    },
    createRating() {
      var starsLi = document.querySelectorAll(`.rr${this.product.id} .edit`);
      var stars = Array.from(starsLi);
      for (let i = 0; i < this.product.rating; i++) {
        stars[i].classList.replace("fa-regular", "fa-solid");
        if (Number.isInteger(this.product.rating) == false) {
          stars[`${Math.ceil(this.product.rating) - 1}`].classList.replace(
            "fa-star",
            "fa-star-half-stroke"
          );
        }
      }
    },
    createRating2() {
      var starsLi = document.querySelectorAll(`.rrr${this.product.id} .edit`);
      var stars = Array.from(starsLi);
      for (let i = 0; i < this.product.rating; i++) {
        stars[i].classList.replace("fa-regular", "fa-solid");
        if (Number.isInteger(this.product.rating) == false) {
          stars[`${Math.ceil(this.product.rating) - 1}`].classList.replace(
            "fa-star",
            "fa-star-half-stroke"
          );
        }
      }
    },
    activate(index) {
      this.active_el = index;
    },
    productTabs(event) {
      let tabsContent = document.querySelectorAll(
        ".details .tabs .tab-content .tab"
      );
      tabsContent.forEach((tab) => {
        tab.classList.remove("active");
        if (tab.classList.contains(event.currentTarget.innerText)) {
          tab.classList.add("active");
        }
      });
    },
    slider(event) {
      let container = document.querySelector(".splide ul");
      
      let miniPhoto = Array.from(
        document.querySelectorAll(".photo-pick ul li")
      );
      miniPhoto.forEach((li) => {
        li.classList.remove("active");
      });
      for (let i = 0; i < miniPhoto.length; i++) {
        const e = miniPhoto[i];
        e.setAttribute("data-height", 640 * (i + 1));
      }
      event.currentTarget.classList.add("active");
      const dataHeight = event.currentTarget.getAttribute("data-height");
      container.setAttribute(
        "style",
        `transform: translateY(-${dataHeight}px) !important`
      );
    },
    activePhoto() {
      let photos = Array.from(document.querySelectorAll(".splide ul li"));
      let miniPhoto = Array.from(
        document.querySelectorAll(".photo-pick ul li")
      );
      photos.forEach((photo) => {
        photo.addEventListener("mousemove", () => {
          miniPhoto.forEach((li) => {
            li.classList.remove("active");
            if (
              photo.classList.contains("is-active") &&
              photo.classList.contains("is-visible")
            ) {
              if (
                photo.firstElementChild.getAttribute("src") ==
                li.firstElementChild.getAttribute("src")
              ) {
                li.classList.add("active");
              }
            }
          });
        });
      });
    },
    addToWishList() {
      this.products.forEach((p) => {
        if (p.id == this.productId) {
          p.inWishList = this.inWishListData;
        }
      });
    },
    AddToCart() {
      let size = document.querySelector(".sizes form input:checked").getAttribute("name");
      this.products.forEach((p) => {
        if (p.id == this.product.id) {
          p.numberOfOrder = this.productQTY;
          p.SelectedColor = this.product.colorsName[this.colorsNumber];
          p.SelectedSize = size;
          p.inCart = true;
        }
      });
    },
    removrFromCart() {
      this.products.forEach((p) => {
        if (p.id == this.product.id) {
          p.inCart = false;
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
    productId() {
      return parseInt(this.$route.params.productId);
    },
    product() {
      return allProducts.find((product) => product.id === this.productId);
    },
    mayLike() {
      return this.products.filter((p) => p.category == this.product.category && p.id !== this.product.id);
    },
    inCartItem() {
      return this.products.filter(p => p.inCart == true);
    },
  },
  mounted() {
    this.createRating();
    this.createRating2();
    this.activePhoto();
  },
};
</script>

<style lang="scss">
.Product {
  margin-bottom: 30px;

  .breadcrumb {
    width: 100%;
    display: flex;
    align-items: center;

    .pages {
      a {
        color: var(--secound-color);
        transition: var(--main-transition);
        text-decoration: none;
      }

      a:hover {
        color: var(--main-color);
        text-decoration: underline !important;
      }
    }
  }

  .prouduct-container {
    .product-imgs {
      display: flex;
      justify-content: center;
      align-items: center;

      .images {
        display: flex;
        flex-direction: row;

        .photo-pick {
          display: flex;
          justify-content: flex-end;
          margin-right: 30px;

          ul {
            display: flex;
            flex-direction: column;

            li {
              flex: 1;
              width: 60px;
              margin-bottom: 10px;
              cursor: pointer;

              img {
                width: 100%;
                height: 100%;
                object-fit: cover;
                border: 1.5px solid transparent;
                transition: var(--main-transition);
              }
            }

            li:last-of-type {
              margin-bottom: 0;
            }

            li.active {
              img {
                border: 1.5px solid #000;
              }
            }
          }
        }

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
    }

    .product-info {
      display: flex;

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
        font-weight: bold;
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
        font-weight: bold;
      }

      .advantages {
        text-align: left;

        ul {
          list-style: disc outside !important;

          li {
            color: #333333dc;
            margin-bottom: 6px;
            font-size: 16px;
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
          font-weight: bold;

          span {
            font-weight: bold;
            margin-left: 5px;
            color: var(--secound-color);
          }
        }

        ul {
          display: flex;

          // li {
          //   width: 20px;
          //   height: 20px;
          //   border-radius: 50%;
          //   margin-right: 8px;
          //   border: 2px solid #DDD;
          //   cursor: pointer;
          // }

          li {
            width: 70px;
            height: 110px;
            margin-right: 8px;
            border: 2px solid #ddd;
            cursor: pointer;
            overflow: hidden;

            img {
              width: 100%;
              height: 100%;
              object-fit: cover;
              transform: scale(1) rotate(0deg);
              transition: var(--main-transition);
            }
          }

          li.active {
            border: 1px solid var(--secound-color);
          }

          li:hover {
            width: 70px;
            height: 110px;
            margin-right: 8px;
            border: 2px solid #ddd;
            cursor: pointer;

            img {
              transform: scale(1.2) rotate(5deg);
            }
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
          font-weight: bold;

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

      .options {
        margin-top: 30px;

        .qty {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 40px;

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

        .cart {
          display: flex;
          align-items: center;
          justify-content: center;
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

        .wishList {
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid #ddd;
          height: 40px;
          cursor: pointer;

          span {
            color: var(--secound-color);
            // margin-left: 5px;
            font-size: 18px;
          }

          .edit {
            color: var(--main-color);
            font-size: 18px;
          }
        }
      }

      .avalibale {
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        flex-direction: column;
        margin-top: 15px;

        .stock {
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 8px;

          span {
            margin-left: 6px;
            color: var(--secound-color);
          }

          .edit {
            margin-right: 5px;
            color: #008000;
          }
        }

        .sold {
          margin-bottom: 8px;

          img {
            width: 22px;
            height: 22px;
            margin-right: 5px;
          }

          span {
            color: var(--secound-color);
          }
        }

        .view {
          img {
            width: 20px;
            height: 20px;
            margin-right: 5px;
          }

          span {
            color: var(--secound-color);
          }
        }
      }

      .buy {
        width: 100%;
        height: 40px;
        margin-top: 20px !important;

        button {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: 100%;
          outline: none;
          border: 1px solid #000;
          background-color: var(--third-color);
          transition: var(--main-transition);

          h3 {
            margin: 0;
            padding: 0;
            font-size: 16px;
            font-weight: bold;
            transform: translateX(1);
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

      .shipping {
        margin-top: 20px;

        div {
          display: flex;
          align-items: center;
          justify-content: flex-start;

          span {
            color: var(--font-color);
          }

          .edit {
            margin-right: 10px;
            color: #ff5c8d85;
          }
        }
      }
    }
  }

  .details {
    margin-top: 50px;

    .tabs {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;

      .choose-tab {
        display: flex;
        align-items: center;
        justify-content: center;
        border-bottom: 1px solid #c3c3c3;
        width: 80%;

        .tab {
          position: relative;
          margin-right: 40px;
          border-bottom: 0px solid #c3c3c3;
          transition: var(--main-transition);
          flex: 1;
          cursor: pointer;

          h4 {
            color: #868686;
            font-size: 22px;
            transition: var(--main-transition);
          }
        }

        .tab.active {
          h4 {
            color: var(--secound-color);
          }
        }

        .tab::before {
          content: "";
          display: block;
          position: absolute;
          bottom: -1px;
          width: 0;
          height: 2px;
          background-color: var(--main-color);
          animation: btr 0.3s ease-in-out;
          animation-fill-mode: forwards;
        }

        .tab.active::before {
          content: "";
          display: block;
          position: absolute;
          bottom: -1px;
          width: 30px;
          height: 2px;
          background-color: var(--main-color);
          animation: bt 0.4s ease-in-out;
          animation-fill-mode: forwards;

          h4 {
            color: var(--secound-color);
          }
        }
      }

      .tab-content {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;

        .Description {
          width: 100%;
          align-items: flex-start;
          justify-content: flex-start;
          flex-direction: column;

          p {
            text-align: left;
            font-size: 16px;
            line-height: 1.6;
            color: var(--secound-color);
          }

          .info {
            display: flex;
            flex-direction: column;

            ul {
              padding: 0;
              margin: 0 0 20px 0;
              text-align: left;
              position: relative;

              li {
                display: flex;
                align-items: center;
                justify-content: flex-start;
                text-align: left;
                position: relative;
                font-size: 15px;
                margin-bottom: 6px;
              }

              h4 {
                color: var(--main-color);
                font-family: var(--main-font);
                font-weight: bold;
              }

              li::before {
                content: "";
                display: block;
                position: relative;
                top: 50%;
                transform: translateY(-1%);
                width: 6px;
                height: 6px;
                background: #000000c9;
                border-radius: 50%;
                margin-right: 6px;
              }
            }
          }

          .photos {
            display: flex;
            align-items: center;
            justify-content: flex-start;
            flex-direction: row;

            .photo {
              width: 100%;
              margin-left: 20px;

              img {
                width: 100%;
                object-fit: cover;
              }
            }
          }
        }

        .Review {
          width: 60%;
          margin-top: 50px;
          overflow: hidden;
          transition: var(--main-transition);

          h4 {
            color: var(--main-color);
            font-weight: bold;
            margin-bottom: 20px;
          }

          .rating {
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            height: 100px;

            .icons {
              margin-bottom: 8px;

              .edit {
                margin-left: 8px;
                font-size: 18px;
                color: var(--secound-color);
              }
            }

            h6 {
              color: var(--secound-color);
              font-weight: bold;
              text-align: left;
            }
          }

          .rating::before {
            content: "";
            display: block;
            position: absolute;
            top: 1px;
            right: 1px;
            width: 1px;
            height: 100px;
            background: #939393;
          }

          .writeReview {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100px;

            button {
              width: 200px;
              height: 40px;
              display: flex;
              align-items: center;
              justify-content: center;
              background-color: rgb(15, 15, 15);
              border: none;
              color: white;
              font-weight: 600;
              gap: 8px;
              cursor: pointer;
              box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.103);
              position: relative;
              overflow: hidden;
              transition-duration: 0.3s;
            }

            button::before {
              width: 200px;
              height: 130px;
              position: absolute;
              content: "";
              background-color: white;
              border-radius: 50%;
              left: -100%;
              top: 0;
              transition-duration: 0.3s;
              mix-blend-mode: difference;
            }

            button:hover::before {
              transition-duration: 0.3s;
              transform: translate(100%, -50%);
              border-radius: 0;
            }

            button:active {
              transform: translate(5px, 5px);
              transition-duration: 0.3s;
            }
          }

          .theReview {
            display: flex;
            align-items: center;
            justify-content: flex-start;
            flex-direction: column;
            margin-top: 20px;
            height: 0px;
            overflow: hidden;
            transition: var(--main-transition);

            h3 {
              color: var(--main-color);
            }

            .makeRating {
              display: flex;
              align-items: center;
              justify-content: center;
              flex-direction: column;
              width: 100%;

              h6 {
                color: var(--secound-color);
                font-weight: bold;
              }

              .Mrating {
                display: flex;
                align-items: center;
                justify-content: center;
                flex-direction: column;

                .icons {
                  .edit {
                    margin-left: 8px;
                    font-size: 18px;
                    color: var(--secound-color);
                  }
                }
              }
            }

            form {
              display: flex;
              align-items: center;
              justify-content: center;
              flex-direction: column;

              .reviewTitle {
                margin-top: 20px;

                h6 {
                  color: var(--secound-color);
                  font-weight: bold;
                }

                .group {
                  position: relative;
                  margin-top: 10px;

                  .input {
                    font-size: 16px;
                    padding: 10px 10px 10px 5px;
                    display: block;
                    width: 400px;
                    border: none;
                    border-bottom: 1px solid #515151;
                    background: transparent;
                  }

                  .input:focus {
                    outline: none;
                  }

                  label {
                    color: #999;
                    font-size: 18px;
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

                  .bar {
                    position: relative;
                    display: block;
                    width: 400px;
                  }

                  .bar:before,
                  .bar:after {
                    content: "";
                    height: 2px;
                    width: 0;
                    bottom: 1px;
                    position: absolute;
                    background: var(--main-color);
                    transition: 0.2s ease all;
                    -moz-transition: 0.2s ease all;
                    -webkit-transition: 0.2s ease all;
                  }

                  .bar:before {
                    left: 50%;
                  }

                  .bar:after {
                    right: 50%;
                  }

                  .input:focus~.bar:before,
                  .input:focus~.bar:after {
                    width: 50%;
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

                  .input:focus~.highlight {
                    animation: inputHighlighter 0.3s ease;
                  }
                }
              }

              .review {
                display: flex;
                align-items: center;
                justify-content: center;
                flex-direction: column;
                margin-top: 20px;
                width: 100%;

                h6 {
                  color: var(--secound-color);
                  font-weight: bold;
                }

                textarea {
                  resize: none;
                  width: 400px;
                  height: 180px;
                  padding: 10px;
                  font-size: 16px;
                  outline: none;
                }
              }

              .name {
                display: flex;
                align-items: center;
                justify-content: center;
                flex-direction: column;
                margin-top: 30px;
                width: 100%;

                h6 {
                  color: var(--secound-color);
                  font-weight: bold;
                }

                .group {
                  position: relative;
                  margin-top: 5px;

                  .input {
                    font-size: 16px;
                    padding: 10px 10px 10px 5px;
                    display: block;
                    width: 400px;
                    border: none;
                    border-bottom: 1px solid #515151;
                    background: transparent;
                  }

                  .input:focus {
                    outline: none;
                  }

                  label {
                    color: #999;
                    font-size: 18px;
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

                  .bar {
                    position: relative;
                    display: block;
                    width: 400px;
                  }

                  .bar:before,
                  .bar:after {
                    content: "";
                    height: 2px;
                    width: 0;
                    bottom: 1px;
                    position: absolute;
                    background: var(--main-color);
                    transition: 0.2s ease all;
                    -moz-transition: 0.2s ease all;
                    -webkit-transition: 0.2s ease all;
                  }

                  .bar:before {
                    left: 50%;
                  }

                  .bar:after {
                    right: 50%;
                  }

                  .input:focus~.bar:before,
                  .input:focus~.bar:after {
                    width: 50%;
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

                  .input:focus~.highlight {
                    animation: inputHighlighter 0.3s ease;
                  }
                }
              }

              .email {
                display: flex;
                align-items: center;
                justify-content: center;
                flex-direction: column;
                margin-top: 30px;
                width: 100%;

                h6 {
                  color: var(--secound-color);
                  font-weight: bold;
                }

                .group {
                  position: relative;
                  margin-top: 5px;

                  .input {
                    font-size: 16px;
                    padding: 10px 10px 10px 5px;
                    display: block;
                    width: 400px;
                    border: none;
                    border-bottom: 1px solid #515151;
                    background: transparent;
                  }

                  .input:focus {
                    outline: none;
                  }

                  label {
                    color: #999;
                    font-size: 18px;
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

                  .bar {
                    position: relative;
                    display: block;
                    width: 400px;
                  }

                  .bar:before,
                  .bar:after {
                    content: "";
                    height: 2px;
                    width: 0;
                    bottom: 1px;
                    position: absolute;
                    background: var(--main-color);
                    transition: 0.2s ease all;
                    -moz-transition: 0.2s ease all;
                    -webkit-transition: 0.2s ease all;
                  }

                  .bar:before {
                    left: 50%;
                  }

                  .bar:after {
                    right: 50%;
                  }

                  .input:focus~.bar:before,
                  .input:focus~.bar:after {
                    width: 50%;
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

                  .input:focus~.highlight {
                    animation: inputHighlighter 0.3s ease;
                  }
                }
              }

              .config {
                margin-top: 30px;
                color: #6b6b6b;
                width: 50%;

                span {
                  color: #000;
                }
              }

              .btns {
                button {
                  margin-left: 30px;
                  margin-top: 20px;
                  outline: none;
                  padding: 10px 25px;
                  font-weight: bold;
                }

                button:first-of-type {
                  background-color: var(--third-color);
                  color: var(--secound-color);
                  border: 1px solid var(--secound-color);
                }

                button:last-of-type {
                  background-color: var(--secound-color);
                  color: var(--third-color);
                  border: 1px solid var(--third-color);
                }

                button:hover {
                  opacity: 0.9;
                }
              }
            }
          }

          .theReview.open {
            // display: flex;
            height: 850px;
          }
        }

        .Shipping {
          display: none;
          align-items: flex-start;
          justify-content: center;
          flex-direction: column;

          p {
            text-align: left;
            padding: 20px 20px 0 20px;
            margin: 0;
            color: var(--font-color);
            font-size: 14px;
          }
        }

        .Return {
          display: none;
          align-items: flex-start;
          justify-content: center;
          flex-direction: column;

          p {
            text-align: left;
            margin: 0;
            color: var(--secound-color);
            margin-bottom: 10px;
          }

          ul {
            display: flex;
            align-items: flex-start;
            justify-content: center;
            flex-direction: column;
            list-style: circle !important;

            li {
              display: flex;
              align-items: center;
              justify-content: flex-start;
              text-align: left;
              position: relative;
              margin-bottom: 6px;
              font-size: 14px;
              color: var(--font-color);
            }

            li::before {
              content: "";
              display: block;
              position: relative;
              top: 50%;
              transform: translateY(-1%);
              width: 6px;
              height: 6px;
              background: #000;
              border-radius: 50%;
              margin-right: 6px;
            }
          }
        }
      }

      .tab-content>div.active {
        display: flex !important;
      }

      .tab-content>div {
        display: none;
        margin-top: 30px;
      }
    }

    .tabs2 {
      display: none;
    }
  }

  .mayLike {
    margin-top: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    h3 {
      color: var(--main-color);
      font-family: var(--main-font);
      font-weight: bold;
      margin-bottom: 30px;
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

@keyframes bt {
  from {
    width: 0%;
  }

  to {
    width: 100%;
  }
}

@keyframes btr {
  from {
    width: 100%;
  }

  to {
    width: 0%;
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

@media (max-width: 770px) {
  .Product {

    .breadcrumb {
      margin-bottom: 20px;  
      .pages {
        a {
          font-size: 16px;
        }
      }
    }

    .prouduct-container {
      .product-imgs {
        margin-bottom: 35px;

        .images {
          flex-direction: column-reverse;

          .photo-pick {
            justify-content: center;
            margin-right: 0;
            margin-top: 20px;

            ul {
              flex-direction: row;

              li {
                width: 60px;
                margin-bottom: 0px;
                margin-right: 10px;
              }

              li:last-of-type {
                margin-right: 0;
              }
            }
          }
        }
      }

      .product-info {
        .colors {
          margin-top: 20px !important;
        }

        .sizes {
          margin-top: 15px !important;
        }

        .options {
          margin-top: 22px !important;
          .qty {
            .less {
              padding: 7px 10px !important;
            }
            .number {
              padding: 7px 22px !important;
            }
            .more {
              padding: 7px 10px !important;
            }
          }
        }

        .avalibale {
          margin-top: 12px !important;
        }

        .buy {
          margin-top: 20px !important;
        }

        .shipping {
          margin-top: 20px !important;
        }
      }
    }

    .details {
      .tabs2 {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        .choose-tab {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          width: 100%;
          padding: 0 15px;

          .tab {
            margin-bottom: 10px;

            .head {
              display: flex;
              align-items: center;
              justify-content: space-between;

              h4 {
                color: var(--main-color);
                font-family: var(--main-font);
                font-weight: bold;
              }

              .edit {
                color: var(--secound-color);
                transform: rotate(0);
                transition: var(--main-transition);
              }
            }

            .content {
              height: 0;
              overflow: hidden;
              transition: var(--main-transition);
            }
          }

          .tab:last-of-type {
            margin-bottom: 0;
          }

          .tab.active {
            .head {
              .edit {
                transform: rotate(-180deg);
              }
            }

            .content {
              height: 100%;
              transition: var(--main-transition);
              margin-bottom: 30px;
            }
          }

          .Description {
            display: flex;
            width: 100%;
            align-items: flex-start;
            justify-content: flex-start;
            flex-direction: column;

            p {
              text-align: left;
              font-size: 16px;
              line-height: 1.6;
              color: var(--secound-color);
            }

            .info {
              display: flex;
              flex-direction: column;

              ul {
                padding: 0;
                margin: 0 0 20px 0;
                text-align: left;
                position: relative;

                li {
                  display: flex;
                  align-items: center;
                  justify-content: flex-start;
                  text-align: left;
                  position: relative;
                }

                h4 {
                  color: var(--main-color);
                  font-family: var(--main-font);
                  font-weight: bold;
                }

                li::before {
                  content: "";
                  display: block;
                  position: relative;
                  top: 50%;
                  transform: translateY(-1%);
                  width: 7px;
                  height: 7px;
                  background: #000;
                  border-radius: 50%;
                  margin-right: 6px;
                }
              }
            }

            .photos {
              display: flex;
              align-items: center;
              justify-content: flex-start;
              flex-direction: row;

              .photo {
                width: 100%;
                margin-left: 20px;

                img {
                  width: 100%;
                  object-fit: cover;
                }
              }
            }
          }

          .Review {
            display: flex;

            width: 100%;
            margin-top: 50px;
            overflow: hidden;
            transition: var(--main-transition);

            h4 {
              color: var(--main-color);
              font-weight: bold;
              margin-bottom: 20px;
            }

            .rating {
              position: relative;
              display: flex;
              align-items: center;
              justify-content: center;
              flex-direction: column;
              height: 100px;

              .icons {
                margin-bottom: 8px;

                .edit {
                  margin-left: 8px;
                  font-size: 18px;
                  color: var(--secound-color);
                }
              }

              h6 {
                color: var(--secound-color);
                font-weight: bold;
                text-align: left;
              }
            }

            .rating::before {
              content: "";
              display: block;
              position: absolute;
              top: 1px;
              right: 1px;
              width: 1px;
              height: 100px;
              background: #939393;
            }

            .writeReview {
              display: flex;
              align-items: center;
              justify-content: center;
              height: 100px;

              button {
                width: 200px;
                height: 40px;
                display: flex;
                align-items: center;
                justify-content: center;
                background-color: rgb(15, 15, 15);
                border: none;
                color: white;
                font-weight: 600;
                gap: 8px;
                cursor: pointer;
                box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.103);
                position: relative;
                overflow: hidden;
                transition-duration: 0.3s;
              }

              button::before {
                width: 200px;
                height: 130px;
                position: absolute;
                content: "";
                background-color: white;
                border-radius: 50%;
                left: -100%;
                top: 0;
                transition-duration: 0.3s;
                mix-blend-mode: difference;
              }

              button:hover::before {
                transition-duration: 0.3s;
                transform: translate(100%, -50%);
                border-radius: 0;
              }

              button:active {
                transform: translate(5px, 5px);
                transition-duration: 0.3s;
              }
            }

            .theReview {
              display: flex;
              align-items: center;
              justify-content: flex-start;
              flex-direction: column;
              margin-top: 20px;
              height: 0px;
              overflow: hidden;
              transition: var(--main-transition);

              h3 {
                color: var(--main-color);
              }

              .makeRating {
                display: flex;
                align-items: center;
                justify-content: center;
                flex-direction: column;
                width: 100%;

                h6 {
                  color: var(--secound-color);
                  font-weight: bold;
                }

                .Mrating {
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  flex-direction: column;

                  .icons {
                    .edit {
                      margin-left: 8px;
                      font-size: 18px;
                      color: var(--secound-color);
                    }
                  }
                }
              }

              form {
                display: flex;
                align-items: center;
                justify-content: center;
                flex-direction: column;

                .reviewTitle {
                  margin-top: 20px;

                  h6 {
                    color: var(--secound-color);
                    font-weight: bold;
                  }

                  .group {
                    position: relative;
                    margin-top: 10px;

                    .input {
                      font-size: 16px;
                      padding: 10px 10px 10px 5px;
                      display: block;
                      width: 400px;
                      border: none;
                      border-bottom: 1px solid #515151;
                      background: transparent;
                    }

                    .input:focus {
                      outline: none;
                    }

                    label {
                      color: #999;
                      font-size: 18px;
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

                    .bar {
                      position: relative;
                      display: block;
                      width: 400px;
                    }

                    .bar:before,
                    .bar:after {
                      content: "";
                      height: 2px;
                      width: 0;
                      bottom: 1px;
                      position: absolute;
                      background: var(--main-color);
                      transition: 0.2s ease all;
                      -moz-transition: 0.2s ease all;
                      -webkit-transition: 0.2s ease all;
                    }

                    .bar:before {
                      left: 50%;
                    }

                    .bar:after {
                      right: 50%;
                    }

                    .input:focus~.bar:before,
                    .input:focus~.bar:after {
                      width: 50%;
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

                    .input:focus~.highlight {
                      animation: inputHighlighter 0.3s ease;
                    }
                  }
                }

                .review {
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  flex-direction: column;
                  margin-top: 20px;
                  width: 100%;

                  h6 {
                    color: var(--secound-color);
                    font-weight: bold;
                  }

                  textarea {
                    resize: none;
                    width: 400px;
                    height: 180px;
                    padding: 10px;
                    font-size: 16px;
                    outline: none;
                  }
                }

                .name {
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  flex-direction: column;
                  margin-top: 30px;
                  width: 100%;

                  h6 {
                    color: var(--secound-color);
                    font-weight: bold;
                  }

                  .group {
                    position: relative;
                    margin-top: 5px;

                    .input {
                      font-size: 16px;
                      padding: 10px 10px 10px 5px;
                      display: block;
                      width: 400px;
                      border: none;
                      border-bottom: 1px solid #515151;
                      background: transparent;
                    }

                    .input:focus {
                      outline: none;
                    }

                    label {
                      color: #999;
                      font-size: 18px;
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

                    .bar {
                      position: relative;
                      display: block;
                      width: 400px;
                    }

                    .bar:before,
                    .bar:after {
                      content: "";
                      height: 2px;
                      width: 0;
                      bottom: 1px;
                      position: absolute;
                      background: var(--main-color);
                      transition: 0.2s ease all;
                      -moz-transition: 0.2s ease all;
                      -webkit-transition: 0.2s ease all;
                    }

                    .bar:before {
                      left: 50%;
                    }

                    .bar:after {
                      right: 50%;
                    }

                    .input:focus~.bar:before,
                    .input:focus~.bar:after {
                      width: 50%;
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

                    .input:focus~.highlight {
                      animation: inputHighlighter 0.3s ease;
                    }
                  }
                }

                .email {
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  flex-direction: column;
                  margin-top: 30px;
                  width: 100%;

                  h6 {
                    color: var(--secound-color);
                    font-weight: bold;
                  }

                  .group {
                    position: relative;
                    margin-top: 5px;

                    .input {
                      font-size: 16px;
                      padding: 10px 10px 10px 5px;
                      display: block;
                      width: 400px;
                      border: none;
                      border-bottom: 1px solid #515151;
                      background: transparent;
                    }

                    .input:focus {
                      outline: none;
                    }

                    label {
                      color: #999;
                      font-size: 18px;
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

                    .bar {
                      position: relative;
                      display: block;
                      width: 400px;
                    }

                    .bar:before,
                    .bar:after {
                      content: "";
                      height: 2px;
                      width: 0;
                      bottom: 1px;
                      position: absolute;
                      background: var(--main-color);
                      transition: 0.2s ease all;
                      -moz-transition: 0.2s ease all;
                      -webkit-transition: 0.2s ease all;
                    }

                    .bar:before {
                      left: 50%;
                    }

                    .bar:after {
                      right: 50%;
                    }

                    .input:focus~.bar:before,
                    .input:focus~.bar:after {
                      width: 50%;
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

                    .input:focus~.highlight {
                      animation: inputHighlighter 0.3s ease;
                    }
                  }
                }

                .config {
                  margin-top: 30px;
                  color: #6b6b6b;
                  width: 50%;

                  span {
                    color: #000;
                  }
                }

                .btns {
                  button {
                    margin-left: 30px;
                    margin-top: 20px;
                    outline: none;
                    padding: 10px 25px;
                    font-weight: bold;
                  }

                  button:first-of-type {
                    background-color: var(--third-color);
                    color: var(--secound-color);
                    border: 1px solid var(--secound-color);
                  }

                  button:last-of-type {
                    background-color: var(--secound-color);
                    color: var(--third-color);
                    border: 1px solid var(--third-color);
                  }

                  button:hover {
                    opacity: 0.9;
                  }
                }
              }
            }

            .theReview.open {
              height: 850px;
            }
          }

          .Shipping {
            display: flex;
            align-items: flex-start;
            justify-content: center;
            flex-direction: column;

            p {
              text-align: left;
              padding: 20px 20px 0 20px;
              margin: 0;
              color: var(--font-color);
              font-size: 14px;
            }
          }

          .Return {
            display: flex;
            align-items: flex-start;
            justify-content: center;
            flex-direction: column;

            p {
              text-align: left;
              margin: 0;
              color: var(--secound-color);
              margin-bottom: 10px;
            }

            ul {
              display: flex;
              align-items: flex-start;
              justify-content: center;
              flex-direction: column;
              list-style: circle !important;

              li {
                display: flex;
                align-items: center;
                justify-content: flex-start;
                text-align: left;
                position: relative;
                margin-bottom: 6px;
                font-size: 14px;
                color: var(--font-color);
              }

              li::before {
                content: "";
                display: block;
                position: relative;
                top: 50%;
                transform: translateY(-1%);
                width: 6px;
                height: 6px;
                background: #000;
                border-radius: 50%;
                margin-right: 6px;
              }

            }
          }
        }
      }
    }
  }
}

@media (max-width: 460px) {
}

</style>
