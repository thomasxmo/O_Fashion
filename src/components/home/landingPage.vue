<template>
  <div class="landingPage">
    <swiper :navigation="true" :modules="modules" :space-between="30" :slides-per-view="1"
      :effect="'fade'" :pagination="{
      clickable: true,
    }" :autoplay="{
      delay: 10000,
      disableOnInteraction: false,
    }"  class="mySwiper">
      <swiper-slide>
        <div class="box">
          <div class="img-box">
            <img src="@/assets/5.jpg" alt="landing img">
          </div>
          <div class="text-wrab">
            <div class="text-box text-box1 jc-start">
              <div class="text">
                <span>new collection</span>
                <h2><span>hi</span> we are O<span>.</span> FASHION</h2>
                <p>find youself with us</p>
                <div class="lpbtn">
                  <router-link to="/shop">
                    <mostButton btnText="shop now" fontSize="14" padding="12px 25px" />
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="box">
          <div class="img-box">
            <img src="@/assets/6.jpg" alt="landing img">
          </div>
          <div class="text-wrab">
            <div class="text-box jc-end">
              <div class="text">
                <span>up to 70% off</span>
                <h2><span>hi</span> we are O<span>.</span> FASHION</h2>
                <p>find youself with us</p>
                <div class="lpbtn">
                  <router-link to="/shop">
                    <mostButton btnText="shop now" fontSize="14" padding="12px 25px" />
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<!-- :navigation="true" :modules="modules" :space-between="30" :slides-per-view="1"
      :controller="{ control: controlledSwiper }" :effect="'fade'" :pagination="{
      clickable: true,
    }" :autoplay="{
      delay: 10000,
      disableOnInteraction: false,
    }" @swiper="onSwiper" @slideChange="onSlideChange" class="mySwiper" -->

<script>
// Import Swiper Vue.js components
import mostButton from "@/components/global/buttons/mostButton.vue";
import { Swiper, SwiperSlide } from 'swiper/vue';
import { EffectFade, Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import wow.js
import { WOW } from "wowjs";

export default {
  name: "landingPage",
  data: function () {
    return {
      active: true,
    }
  },
  components: {
    Swiper,
    SwiperSlide,
    mostButton,
  },
  methods: {
  },
  mounted() {
    var wow = new WOW({
      boxClass: "wow",
      animateClass: "animated",
      offset: 0,
      mobile: true,
      live: false,
    });
    wow.init();
  },
  setup() {
    return {
      modules: [EffectFade, Navigation, Pagination, Autoplay],
    };
  },
};

</script>

<style lang="scss">
.landingPage {

  .box {
    position: relative;

    .img-box {
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 1;
      width: 100%;
      height: 100%;

      img {
        width: 100%;
        height: 100vh;
        object-fit: cover;
      }
    }

    .text-wrab {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 70%;
      height: 100%;
      z-index: 2;

      .text-box {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        opacity: 0;
        transform: scale(1.3);
        transition: 1s all .1s;

        .text {
          color: var(--secound-color);
          text-align: left;

          span {
            color: #555555;
          }

          h2 {
            font-size: 40px;
            font-weight: bold;

            span {
              text-transform: uppercase;
              color: var(--main-color);
            }
          }

          p {
            font-size: 30px;
            // color: #555555;
          }

          // .btn {
          //   background-color: var(--secound-color);
          //   color: var(--third-color);
          //   padding: 10px 20px;
          //   transition: var(--main-transition);
          // }

          // .btn:hover {
          //   background-color: var(--main-color);
          //   color: var(--third-color);
          // }
          .lpbtn {
            display: flex;
            align-items: center;
            justify-content: flex-start;
            outline: none;
            border: none !important;
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

  /* Center slide text vertically */
  // display: flex;
  // justify-content: center;
  // align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.swiper-slide-active .text-box {
  opacity: 1 !important;
  transform: scale(1) !important;
}

.swiper-button-prev,
.swiper-button-next {
  // background-color: #fda3ae7d;
  padding: 15px;
  border-radius: 50%;
  width: 20px;
  height: 20px;
}

.swiper-button-prev:after,
.swiper-button-next:after {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 20px;
  color: #d4d4d4;
}

.swiper-pagination-bullet {
  border-radius: 0;
  width: 20px;
  height: 5px;
  background-color: #555555;
}
</style>