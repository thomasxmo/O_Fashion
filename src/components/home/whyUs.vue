<template>
  <div class="whyUs">
    <div class="container">
      <div class="row">
        <div class="col-12 col-sm-6 col-md-3 col-lg-3 mt-4">
          <div class="box">
            <div class="icon">
              <div class="img-box">
                <img src="@/assets/logo/free-ship-w_60x.svg" alt="">
              </div>
            </div>
            <h3>free delivery</h3>
            <p>For all orders over $120</p>
          </div>
        </div>
        <div class="col-12 col-sm-6 col-md-3 col-lg-3 mt-4">
          <div class="box">
            <div class="icon">
              <div class="img-box">
                <img src="@/assets/logo/returns-w_60x.svg" alt="">
              </div>
            </div>
            <h3>SATISFIED OR REFUNDED</h3>
            <p>Free returns within 14 days</p>
          </div>
        </div>
        <div class="col-12 col-sm-6 col-md-3 col-lg-3 mt-4">
          <div class="box">
            <div class="icon">
              <div class="img-box">
                <img src="@/assets/logo/secure-w_60x.svg" alt="">
              </div>
            </div>
            <h3>100% SECURE PAYMENTS</h3>
            <p>Accept all payment methods</p>
          </div>
        </div>
        <div class="col-12 col-sm-6 col-md-3 col-lg-3 mt-4">
          <div class="box">
            <div class="icon">
              <div class="img-box">
                <img src="@/assets/logo/support-w_60x.svg" alt="">
              </div>
            </div>
            <h3>24/7 HELP CENTER</h3>
            <p>Dedicated 24/7 support</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script>

export default {
  name: "whyUs",
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
.whyUs {
  background-color: var(--main-color);
  padding: 40px 0;
  // margin-top: 40px;
.box{
  .icon{
    margin-bottom: 22px;
    .img-box{
      img{
        width: 40px;
        height: 40px;
      }
    }
  }
  h3{
    color: var(--third-color);
    font-size: 16px;
    text-transform: uppercase;
  }
  p{
    color: var(--third-color);
    font-size: 14px;
  }
}
}
</style>