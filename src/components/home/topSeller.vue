<template>
  <div class="topSeller d-mobile-none">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h2 class="title">Top Seller</h2>
        </div>
        <div class="col-12">
          <div class="products">
            <swiper :slidesPerView="4" :spaceBetween="10" :pagination="{
              clickable: true,
            }" :navigation="true" :breakpoints="{
              '640': {
                slidesPerView: 4,
                spaceBetween: 20,
              },
              '768': {
                slidesPerView: 4,
                spaceBetween: 40,
              },
              '1024': {
                slidesPerView: 4,
                spaceBetween: 40,
              },
            }" :modules="modules" class="mySwiper">
              <swiper-slide v-for="product in topSeller" :key="product.id">
                <productBox2 :id="product.id" :title="product.title" :category="product.category" :img1="product.img1"
                  :img2="product.img2" :imgUrl="product.imgUrl" :imgColor="product.imgColor" :price="product.price"
                  :sizes="product.sizes" :colors="product.colors" :colorsImgs="product.colorsImgs" :msg="product.msg"
                  :msgColor="product.msgColor" :rating="product.rating" :colorsName="product.colorsName"
                  :stock="product.stock" :inWishList="product.inWishList" />
              </swiper-slide>
            </swiper>
          </div>
        </div>
        <div class="col-12">
          <div class="topSeller-button">
            <router-link to="/shop">
              <mostButton btnText="view All product" fontSize="14" padding="15px 25px" />
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import productBox2 from "@/components/global/productBox/productBox2.vue";
import mostButton from "@/components/global/buttons/mostButton.vue";
// import productBox2 from "@/components/home/productBox2.vue";
import productJsonApi from "@/json/allproudects.json";
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
// Import Swiper styles
import "swiper/css";
// import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper/modules";
// import { Pagination } from "swiper/modules";

export default {
  name: "topSeller",
  data() {
    return {
      products: productJsonApi,
    };
  },
  props: ["", "", ""],
  components: {
    productBox2,
    mostButton,
    Swiper,
    SwiperSlide,
  },
  computed: {
    topSeller() {
      return this.products.filter( p => p.topSeller == true)
    }
  },
  setup() {
    return {
      modules: [Navigation],
    };
  },
  methods: {},
  mounted() { },
};
</script>

<style lang="scss">
.topSeller {
  .title {
    font-family: var(--main-font);

    margin: 30px auto;
    color: var(--secound-color);
    font-size: 30px;
    font-weight: bold;
    text-transform: uppercase;
  }

  .swiper-button-prev,
  .swiper-button-next {
    padding: 13px;
    width: 20px;
    height: 20px;
    background-color: #fff;
    border-radius: 0;
  }

  .swiper-button-prev:after,
  .swiper-button-next:after {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 20px;
    color: #000000;
  }
}

.topSeller-button {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 25px;
  a{
    .mostButton{
      
    }
  }
}

.swiper-backface-hidden .swiper-slide {
  transform: none;
}

@media (max-width: 990px) {
  .d-mobile-none {
    display: none;
  }
}
</style>
