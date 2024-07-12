<template>
  <div class="customerReviews d-phone-none d-tablt-none">
    <Splide :options="splideOptions" aria-label="customer Reviews">
      <SplideSlide>
        <div class="Review">
          <div class="rating" :class="`rr${id}`">
            <i class="edit fa-solid fa-star"></i>
            <i class="edit fa-solid fa-star"></i>
            <i class="edit fa-solid fa-star"></i>
            <i class="edit fa-regular fa-star"></i>
            <i class="edit fa-regular fa-star"></i>
          </div>
          <div class="txt">
            “Very cute dress and fun color. I am also very impressed by the
            quality of the linen. Excited to wear this dress in the summer!”
          </div>
          <div class="note">i love ofashion</div>
          <hr />
          <div class="theReviewer">
            <div class="img-box">
              <img src="@/assets/customre/1.jpg" />
            </div>
            <div class="info-box">
              <h4>selena renald</h4>
            </div>
          </div>
        </div>
      </SplideSlide>
      <SplideSlide>
        <div class="Review">
          <div class="rating" :class="`rr${id}`">
            <i class="edit fa-solid fa-star"></i>
            <i class="edit fa-solid fa-star"></i>
            <i class="edit fa-solid fa-star"></i>
            <i class="edit fa-regular fa-star"></i>
            <i class="edit fa-regular fa-star"></i>
          </div>
          <div class="txt">
            “Very cute dress and fun color. I am also very impressed by the
            quality of the linen. Excited to wear this dress in the summer!”
          </div>
          <div class="note">i love ofashion</div>
          <hr />
          <div class="theReviewer">
            <div class="img-box">
              <img src="@/assets/customre/2.jpg" />
            </div>
            <div class="info-box">
              <h4>renad alamen</h4>
            </div>
          </div>
        </div>
      </SplideSlide>
      <SplideSlide>
        <div class="Review">
          <div class="rating" :class="`rr${id}`">
            <i class="edit fa-solid fa-star"></i>
            <i class="edit fa-solid fa-star"></i>
            <i class="edit fa-solid fa-star"></i>
            <i class="edit fa-regular fa-star"></i>
            <i class="edit fa-regular fa-star"></i>
          </div>
          <div class="txt">
            “Very cute dress and fun color. I am also very impressed by the
            quality of the linen. Excited to wear this dress in the summer!”
          </div>
          <div class="note">i love ofashion</div>
          <hr />
          <div class="theReviewer">
            <div class="img-box">
              <img src="@/assets/customre/3.jpg" />
            </div>
            <div class="info-box">
              <h4>nourhan atef</h4>
            </div>
          </div>
        </div>
      </SplideSlide>
      <SplideSlide>
        <div class="Review">
          <div class="rating" :class="`rr${id}`">
            <i class="edit fa-solid fa-star"></i>
            <i class="edit fa-solid fa-star"></i>
            <i class="edit fa-solid fa-star"></i>
            <i class="edit fa-regular fa-star"></i>
            <i class="edit fa-regular fa-star"></i>
          </div>
          <div class="txt">
            “Very cute dress and fun color. I am also very impressed by the
            quality of the linen. Excited to wear this dress in the summer!”
          </div>
          <div class="note">i love ofashion</div>
          <hr />
          <div class="theReviewer">
            <div class="img-box">
              <img src="@/assets/customre/4.jpg" />
            </div>
            <div class="info-box">
              <h4>aml farouck</h4>
            </div>
          </div>
        </div>
      </SplideSlide>
      <SplideSlide>
        <div class="Review">
          <div class="rating" :class="`rr${id}`">
            <i class="edit fa-solid fa-star"></i>
            <i class="edit fa-solid fa-star"></i>
            <i class="edit fa-solid fa-star"></i>
            <i class="edit fa-regular fa-star"></i>
            <i class="edit fa-regular fa-star"></i>
          </div>
          <div class="txt">
            “Very cute dress and fun color. I am also very impressed by the
            quality of the linen. Excited to wear this dress in the summer!”
          </div>
          <div class="note">i love ofashion</div>
          <hr />
          <div class="theReviewer">
            <div class="img-box">
              <img src="@/assets/customre/5.jpg" />
            </div>
            <div class="info-box">
              <h4>maruim mohamed</h4>
            </div>
          </div>
        </div>
      </SplideSlide>
      <SplideSlide>
        <div class="Review">
          <div class="rating" :class="`rr${id}`">
            <i class="edit fa-solid fa-star"></i>
            <i class="edit fa-solid fa-star"></i>
            <i class="edit fa-solid fa-star"></i>
            <i class="edit fa-regular fa-star"></i>
            <i class="edit fa-regular fa-star"></i>
          </div>
          <div class="txt">
            “Very cute dress and fun color. I am also very impressed by the
            quality of the linen. Excited to wear this dress in the summer!”
          </div>
          <div class="note">i love ofashion</div>
          <hr />
          <div class="theReviewer">
            <div class="img-box">
              <img src="@/assets/customre/6.jpg" />
            </div>
            <div class="info-box">
              <h4>omar hekal</h4>
            </div>
          </div>
        </div>
      </SplideSlide>
    </Splide>
  </div>
</template>

<script>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/vue-splide/css';

export default {
  name: "customerReviews",
  data() {
    return {
      splideOptions: {
        rewind: true,
        type: 'loop',
        padding: '13rem',
        arrows: true,
        pagination: false,
      },
      id: 3,
    };
  },
  props: ["", "", ""],
  components: {
    Splide,
    SplideSlide,
  },
  methods: {
    centerMode() { },
  },
  mounted() {
    this.centerMode();
  },
};
</script>

<style lang="scss">
.customerReviews {
  padding: 50px 0;
  background: #efefef;
  margin-top: 50px;

  .Review {
    .rating {
      margin: 0;

      .edit {
        color: #ffd700;
        font-size: 12px;
        margin: 0;
      }
    }

    .txt {
      color: #111111b1;
      font-size: 22px;
      margin: 20px;
      margin-top: 10px;
    }

    .note {
      color: #111;
    }

    hr {
      width: 50%;
      margin: 20px auto;
    }

    .theReviewer {
      display: flex;
      align-items: center;
      justify-content: center;

      .img-box {
        overflow: hidden;
        border-radius: 50%;
        margin-right: 20px;

        img {
          width: 50px;
          height: 50px;
          object-fit: cover;
        }
      }

      .info-box {
        h4 {
          font-size: 20px;
          color: #111111b1;
        }
      }
    }
  }
}
</style>
