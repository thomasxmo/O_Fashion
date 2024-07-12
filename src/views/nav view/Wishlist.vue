<template>
  <div class="Wishlist">
    <div class="row">
      <pageHeader name="Wish list" />
    </div>
    <div class="container">
      <div class="products" :class="{ active: showProducts }">
        <div class="row" style="width: 100%;">
          <productBox v-for="product in wishListProduct" :key="product.id" :id="product.id" :title="product.title"
              :category="product.category" :img1="product.img1" :img2="product.img2" :img3="product.img3"
              :img4="product.img4" :img5="product.img5" :img6="product.img6" :imgUrl="product.imgUrl"
              :imgColor="product.imgColor" :price="product.price" :priceOff="product.priceOff" :sizes="product.sizes"
              :colors="product.colors" :msg="product.msg" :msgColor="product.msgColor" :rating="product.rating"
              :colorsName="product.colorsName" :stock="product.stock" :inWishList="product.inWishList"  
              :inCart="product.inCart" :SelectedColor="product.SelectedColor" :SelectedSize="product.SelectedSize" 
              :numberOfOrder="product.numberOfOrder" :col="col" :activeDeleteFromWishlist="true"/>
        </div>
      </div>
      <div class="noProducts" :class="{ active: !showProducts }">
        <h3>There are no products in wishlist</h3>
      </div>
    </div>
  </div>
</template>

<script>
import pageHeader from '@/components/global/pageHeader.vue';
import productBox from '@/components/global/productBox/productBox.vue';
import productJsonApi from "@/json/allproudects.json";

export default {
  name: "WishList",
  data() {
    return {
      products: productJsonApi,
      col: "col-6 col-sm-3 col-md-3",
    }
  },
  components: {
    pageHeader,
    productBox
  },
  methods: {

  },
  computed: {
    wishListProduct() {
      return this.products.filter(p => p.inWishList == true);
    },
    showProducts() {
      if (this.wishListProduct.length == 0) {
        return false;
      }
      return true;
    },
  },
  mounted() {
  },
};

</script>

<style lang="scss">
.Wishlist {
  .products {
    display: none;
    margin: 20px 0;

  }

  .products.active {
    display: flex;
  }

  .noProducts {
    height: 200px;
    display: none;
    align-items: center;
    justify-content: center;

    h3 {
      color: var(--font-color);
      font-size: 20px;
      letter-spacing: 1px;
    }
  }

  .noProducts.active {
    display: flex;
  }
}
</style>