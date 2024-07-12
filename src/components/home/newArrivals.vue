<template>
  <div class="newArrivals">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h2 class="title">New Arrivals</h2>
        </div>
        <div class="col-12">
          <div class="products">
            <div class="row">
              <productBox v-for="product in newArrivals" :key="product.id" :id="product.id" :title="product.title"
              :category="product.category" :img1="product.img1" :img2="product.img2" :img3="product.img3"
              :img4="product.img4" :img5="product.img5" :img6="product.img6" :imgUrl="product.imgUrl"
              :imgColor="product.imgColor" :price="product.price" :priceOff="product.priceOff" :sizes="product.sizes"
              :colors="product.colors" :msg="product.msg" :msgColor="product.msgColor" :rating="product.rating"
              :colorsName="product.colorsName" :stock="product.stock" :inWishList="product.inWishList"  
              :inCart="product.inCart" :SelectedColor="product.SelectedColor" :SelectedSize="product.SelectedSize" 
              :numberOfOrder="product.numberOfOrder"
              col="col-12 col-sm-6 col-md-4 col-lg-3" />
            </div>
          </div>
        </div>
        <div class="col-12">
          <div class="newArrivals-button">
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
import productBox from "@/components/global/productBox/productBox.vue";
import mostButton from "@/components/global/buttons/mostButton.vue";
import productJsonApi from "@/json/allproudects.json";


export default {
  name: "newArrivals",
  data() {
    return {
      products: productJsonApi,
    };
  },
  components: {
    productBox,
    mostButton,
  },
  computed: {
    newArrivals() {
      return this.products.filter( p => p.newArrivals == true)
    }
  },
  methods: {},
  mounted() {
  },
};
</script>

<style lang="scss">
.newArrivals {
  .title {
    font-family: var(--main-font);
    margin: 30px auto;
    color: var(--secound-color);
    font-size: 30px;
    font-weight: bold;
    text-transform: uppercase;
  }
}

.newArrivals-button {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 25px;
}
</style>
