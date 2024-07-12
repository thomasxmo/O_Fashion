<template>
  <div class="Shop">
    <pageHeader name="shop" />
    <div class="container-md">
      <div class="row">
        <div class="sidebar col-md-3 col-lg-3 d-phone-none d-tablt-none" :class="{ hocked: openSidebar }">
          <div class="close" style="display: none;" @click="openSidebar = false">
            <div class="icon"> <i class="edit fa-solid fa-xmark"></i></div>
          </div>
          <filterComponent @data-from-child="receiveDataFromChild" />
        </div>
        <div class="main-col col-12 col-sm-12 col-md-9 col-lg-9">
          <div class="filter-row">
            <div class="filter" @click="openSidebar = true">
              <div class="icon">
                <i class="edit fa-solid fa-sliders"></i>
              </div>
              filter
            </div>
            <div class="coliction-order ">
              <div class="select" :class="{ open: openSort }" @click="openSort = !openSort">
                <ul class="sort_by">
                  <li id="show" class="active">{{ activeSort }}<i class="edit fa-solid fa-angle-down"></i></li>
                  <li id="manual" @click="allProducts('All products')">All products</li>
                  <li id="manual" @click="Featured($event)">Featured</li>
                  <li id="best-selling" @click="bestSelling($event)">Best selling</li>
                  <li id="title-ascending" @click="alphaAZ($event)">Alphabetically, A-Z</li>
                  <li id="title-descending" @click="alphaZA($event)">Alphabetically, Z-A</li>
                  <li id="price-ascending"
                    @click="products.sort((a, b) => a.price - b.price), activeSort = 'Price, low to high'">
                    Price, low to
                    high</li>
                  <li id="price-descending"
                    @click="products.sort((a, b) => b.price - a.price), activeSort = 'Price, high to low'">
                    Price, high
                    to low</li>
                  <li id="created-ascending">Date, old to new</li> <!--@click="dateON($event)" -->
                  <li id="created-descending">Date, new to old</li> <!--@click="dateNO($event)" -->
                </ul>
              </div>
            </div>
            <div class="coliction-view d-phone-none d-tablt-none">
              <div class="views" id="views">
                <div class="view one" @click="this.col = 'col-6 col-sm-6'">
                  <div class="icon">
                    <i class="edit fa-solid fa-grip-lines-vertical"></i>
                  </div>
                </div>
                <div class="view two active" @click="this.col = 'col-6 col-sm-4'">
                  <div class="icon">
                    <i class="edit fa-solid fa-bars"></i>
                  </div>
                </div>
                <div class="view three" @click="this.col = 'col-6 col-sm-3'">
                  <div class="icon">
                    <i class="edit fa-solid fa-grip-lines-vertical"></i>
                    <i class="edit fa-solid fa-grip-lines-vertical"></i>
                  </div>
                </div>
                <div class="view four" @click="this.col = 'col-12', viewFour($event)">
                  <div class="icon">
                    <i class="edit fa-solid fa-bars"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="shosenFilter">
            <div class="buttons" style="display: none;">
              <ul class="m-0 p-0">
                <li class="clear-all show" @click="allProducts('All Products')"><span>clear all</span> <i
                    class="edit fa-solid fa-xmark"></i></li>
                <li v-for="(btn, index) in btns" :key="index" v-bind:data-type="`${btn}`" class="show"
                  @click="deleteMe($event)"><span>{{ btn }}</span> <i class="edit fa-solid fa-xmark"></i></li>
                <li class="price">price: {{ this.priceRange }} <i class="edit fa-solid fa-xmark"></i></li>
              </ul>
            </div>
          </div>
          <div class="coliction-row">
            <div class="products">
              <div class="row">
                <productBox v-for="product in products" :key="product.id" :id="product.id" :title="product.title"
                  :category="product.category" :img1="product.img1" :img2="product.img2" :img3="product.img3"
                  :img4="product.img4" :img5="product.img5" :img6="product.img6" :imgUrl="product.imgUrl"
                  :imgColor="product.imgColor" :price="product.price" :priceOff="product.priceOff"
                  :sizes="product.sizes" :colors="product.colors" :msg="product.msg" :msgColor="product.msgColor"
                  :rating="product.rating" :colorsName="product.colorsName" :stock="product.stock"
                  :inWishList="product.inWishList" :inCart="product.inCart" :SelectedColor="product.SelectedColor"
                  :SelectedSize="product.SelectedSize" :numberOfOrder="product.numberOfOrder" :col="col" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import pageHeader from "@/components/global/pageHeader.vue";
import productBox from "@/components/global/productBox/productBox.vue";
import filterComponent from "@/components/shop/filter.vue";
import productJsonApi from "@/json/allproudects.json";

export default {
  name: "ShopView",
  data() {
    return {
      products: productJsonApi,
      products2: [],
      active: true,
      col: "col-6 col-sm-4",
      openSidebar: false,
      allProdunctNum: 0,
      btns: [],
      priceRange: 0,
      activeSort: "All products",
      openSort: false,
    };
  },
  components: {
    pageHeader,
    productBox,
    filterComponent
  },
  methods: {
    viewObtions() {
      var viewss = document.querySelectorAll("#views .view");
      var views = Array.from(viewss);

      views.forEach((view) => {
        view.addEventListener("click", (e) => {
          views.forEach((view) => {
            view.classList.remove("active");
          });
          e.currentTarget.classList.add("active");
        });
      });
    },
    // to get data from data Attribute in array of filters
    getData(arrays) {
      let data = []
      let arrCollection = Array.from(arrays);
      let activeCollectionItem = arrCollection.filter((a) => a.classList.contains("active"));
      activeCollectionItem.forEach((item) => {
        let chosenFilter = item.getAttribute(`data-type`);
        data.push(chosenFilter);
      })
      return [...new Set(data)]
    },

    // to get an array of all number between two numbers
    getPriceRinge(min, max) {
      let arrayBetween = []
      if (min != 10 && max != 600) {
        for (let i = min; i <= max; i++) {
          arrayBetween.push(i.toString());
        }
      }
      return arrayBetween
    },

    // to get the price of items that alraedy in getPriceRinge array
    price() {
      let products = document.querySelectorAll(".coliction-row .products .row .mr-2 .product-box");
      let productArr = Array.from(products);
      var priceMin = document.querySelector(".price-value .min").dataset.min;
      var priceMax = document.querySelector(".price-value .max").dataset.max;
      let PriceDataFillter = this.getPriceRinge(priceMin, priceMax);
      let price = [];
      productArr.forEach((p) => {
        let dataTypes = p.getAttribute('data-types').split(' ').slice(-1);
        PriceDataFillter.forEach((num) => {
          if (dataTypes == num) {
            price.push(num);
          }
        })
      });
      return [...new Set(price)]
    },

    // two get all prices in our products
    allprices() {
      let productPrices = [];
      this.products.forEach((p) => [
        productPrices.push(p.price)
      ]);
      return productPrices;
    },

    // to delete items from our filter btns
    deleteMe(event) {
      event
      let products = document.querySelectorAll(".coliction-row .products .row .mr-2 .product-box");
      let el1 = document.querySelector('[data-type="all"]');
      let collection = document.querySelectorAll(".sidebar .sidebar-content .collection .content ul li");
      let collectionData = [];
      collection.forEach((li) => collectionData.push(li.dataset.type));
      var filtersExColc = Array.from(document.querySelectorAll(".sidebar .sidebar-content .content ul li")).splice(collectionData.length);
      let productArr = Array.from(products);
      let chosenDataFillter = this.getData(filtersExColc, "type");
      let chosenColictionDataFillter = this.getData(collection, "type");
      let chosenPriceFillter = this.price();
      var mostFilter = Array.from(document.querySelectorAll(".sidebar .sidebar-content .content ul li"));
      var priceFilter = Array.from(document.querySelectorAll(".sidebar .content .track-container .track"));
      var filters = [];
      let buttonsContianer = document.querySelector(".shosenFilter .buttons");
      let priceBtn = document.querySelector(".shosenFilter .buttons ul .price");
      mostFilter.forEach((filter) => {
        filters.push(filter);
      });
      priceFilter.forEach((filter) => {
        filters.push(filter);
      });
      let cloneArr = Array.from(filters);
      filters.forEach((filter) => {
        if (filter.dataset.type == event.currentTarget.dataset.type) {
          filter.classList.remove("active");
          const indexToRemove = this.btns.indexOf(event.currentTarget.dataset.type);
          if (indexToRemove !== -1) {
            this.btns.splice(indexToRemove, 1);
          }
        }
      });
      if (chosenColictionDataFillter.includes(event.currentTarget.innerText)) {
        const indexToRemove = chosenColictionDataFillter.indexOf(event.currentTarget.innerText);
        if (indexToRemove !== -1) {
          chosenColictionDataFillter.splice(indexToRemove, 1);
        }
      }
      if (chosenDataFillter.includes(event.currentTarget.innerText)) {
        const indexToRemove = chosenDataFillter.indexOf(event.currentTarget.innerText);
        if (indexToRemove !== -1) {
          chosenDataFillter.splice(indexToRemove, 1);
        }
      }
      if (chosenPriceFillter.includes(event.currentTarget.innerText)) {
        const indexToRemove = chosenPriceFillter.indexOf(event.currentTarget.innerText);
        if (indexToRemove !== -1) {
          chosenPriceFillter.splice(indexToRemove, 1);
        }
      }
      if (chosenColictionDataFillter.length == 0) {
        chosenColictionDataFillter = Array.from(collectionData);
      }
      priceBtn.addEventListener("click", () => {
        chosenColictionDataFillter = this.getData(collection, "type");
        chosenPriceFillter = Array.from(collectionData);
      });
      if (chosenPriceFillter.length == 0) {
        chosenPriceFillter = Array.from(collectionData);
      }
      productArr.forEach((product) => product.parentElement.style.display = "none");
      let showenItem = productArr.filter((p) => {
        let dataTypes = p.getAttribute('data-types');
        if (!el1.classList.contains("active")) {
          var attributes = dataTypes.split(' ');
          var collectionFound = chosenColictionDataFillter.some((value) => {
            return attributes.includes(value);
          });
          var optionsFound = chosenDataFillter.every((value) => {
            return attributes.includes(value);
          });
          var priceFound = chosenPriceFillter.some((value) => {
            return attributes.includes(value);
          });
          return collectionFound && optionsFound && priceFound;
        }
        return false;
      });
      showenItem.forEach((item) => {
        item.parentElement.style.display = "block";
      })
      if (this.btns.length == 0 && !priceBtn.classList.contains("show")) {
        el1.classList.add("active");
        products.forEach((product) => {
          product.style.display = "block";
        });
        buttonsContianer.style.display = "none";
        this.btns.length = 0;
        cloneArr.forEach((el) => el.classList.remove("active"));
      }
    },

    // to get Featured products
    Featured(event) {
      this.allProducts(event.currentTarget.innerText);
      this.activeSort = "Featured";
      let showenItem = this.products.filter((p) => p.rating == 5 || p.rating == 4);
      this.products.length = 0;
      showenItem.forEach((product) => {
        this.products.push(product);
      });
    },

    // to get sort products from A to Z
    alphaAZ(event) {
      event
      this.products = productJsonApi;
      // const alpha = Array.from(Array(26)).map((e, i) => i + 65);
      // const alphabet = alpha.map((x) => String.fromCharCode(x));
      // console.log(alphabet);
      // let showenItem = [];
      // alphabet.forEach((letter) => {
      //   this.products.forEach((product) => {
      //     let arr = Array.from(product.title);
      //     if (letter == arr[0].toUpperCase()) {
      //       showenItem.push(product);
      //     }
      //   })
      // })
      // this.products.length = 0;
      // showenItem.forEach((product) => {
      //   this.products.push(product);
      // });
      this.activeSort = "Alphabetically, A-Z";
      this.products.sort((a, b) => {
        let nameA = a.title.toUpperCase();
        let nameB = b.title.toUpperCase();
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }

        // names must be equal
        return 0;
      });
    },

    // to get sort products from Z to A
    alphaZA(event) {
      this.products = productJsonApi;
      event
      this.activeSort = "Alphabetically, Z-A";
      this.products.sort((a, b) => {
        let nameA = a.title.toUpperCase();
        let nameB = b.title.toUpperCase();
        if (nameA > nameB) {
          return -1;
        }
        if (nameA < nameB) {
          return 1;
        }

        // names must be equal
        return 0;
      });
    },

    // to get best Selling products
    bestSelling(event) {
      this.allProducts(event.currentTarget.innerText);
      this.activeSort = "Best selling";
      let showenItem = this.products.filter((p) => p.bestSaller == true);
      this.products.length = 0;
      showenItem.forEach((product) => {
        this.products.push(product);
      });
    },

    // to do one product in every row
    viewFour(event) {
      let products = document.querySelectorAll(".coliction-row .products .row .mr-2");
      products.forEach((product) => {
        product.style.marginBottom = "30px";
      });

      let productsBox = document.querySelectorAll(".coliction-row .products .row .mr-2 .product-box");
      event.currentTarget.classList.toggle("active");
      if (event.currentTarget.classList.contains("active")) {
        productsBox.forEach((product) => {
          product.classList.add("viewFour")
        });
      }

    },
    views() {
      let views = Array.from(document.querySelectorAll(".coliction-view .views .view ")).slice(0, -1);
      let four = document.querySelector(".coliction-view .views .view.four");
      let productsBox = document.querySelectorAll(".coliction-row .products .row .mr-2 .product-box");

      views.forEach((view) => {
        view.addEventListener("click", () => {
          four.classList.remove("active");
          productsBox.forEach((product) => {
            product.classList.remove("viewFour");
          });
        });
      });
    },

    // to restore all product in another array
    reset() {
      let arr = [];
      this.products.forEach((product) => {
        arr.push(product);
      })
      arr.forEach((product) => {
        this.products2.push(product);
      })
      return this.products2;
    },
    allProducts(name) {
      this.activeSort = `${name}`;
      this.products.length = 0;
      this.products2.forEach((product) => {
        this.products.push(product);
      });
    },

    // to add active clas in only one li in ul
    addActive() {
      let lis = Array.from(document.querySelectorAll("ul.sort_by li")).slice(1, -1);
      lis.forEach((li) => {
        li.addEventListener("click", (e) => {
          let activeLi = lis.filter((li) => li.classList.contains("active"));
          activeLi.forEach((li) => li.classList.remove("active"));
          e.currentTarget.classList.add("active");
        })
      });
    },
    receiveDataFromChild(data) {
      // Handle the data received from the child component
      this.btns = data
    }
  },
  mounted() {
    window.addEventListener("load", this.reset());
    this.viewObtions();
    this.views();
    this.addActive();
  },
};
</script>

<style lang="scss">
.Shop {
  .sidebar {
    padding: 20px 30px 0px 0px;
    transition: var(--main-transition);
    z-index: 9;
  }

  .main-col {

    .filter-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 20px;

      .coliction-order {
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 8;

        .select {
          height: 40px;
          z-index: 8;

          ul {
            position: relative;
            margin: 0;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: left;
            color: #585858;
            padding: 4px 8px;
            border: 1px solid #c6c6c6;
            outline: none;
            box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
            cursor: pointer;
            width: 200px;
            height: 100%;
            overflow: hidden;
            background-color: var(--third-color);
            transition: var(--main-transition);
            z-index: 10;

            li {
              width: 100%;
              display: flex;
              align-items: center;
              justify-content: space-between;
              text-align: left;
              padding: 5px 8px;
              border-bottom: 1px solid #c6c6c6;
              transition: var(--main-transition);

              .edit {
                transform: rotate(0);
                transition: var(--main-transition);
              }
            }

            li.active {
              display: flex;
              color: black;
            }
          }
        }

        .select.open {
          ul {
            height: 320px;

            li .edit {
              transform: rotate(-180deg);
            }
          }

        }
      }

      .coliction-view {
        display: flex;
        align-items: center;
        justify-content: center;

        .views {
          display: flex;
          align-items: center;
          justify-content: center;

          .view {
            display: flex;
            align-items: center;
            justify-content: center;
            margin-left: 10px;
            cursor: pointer;
            border: 1px solid #ccc;
            border-radius: 50%;
            padding: 10px;
            width: 33px;
            height: 33px;
            background-color: var(--third-color);
            transition: var(--main-transition);

            .edit {
              color: #bcbcbc;
              transition: var(--main-transition);
            }
          }

          .view.two {
            .icon {
              transform: rotate(90deg);
            }
          }

          .view.three {
            .icon {
              display: flex;
              align-items: center;
              justify-content: center;

              .edit:first-child {
                margin-right: 2px;
              }
            }
          }

          .view.active {
            background-color: var(--main-color);
            border: 1px solid var(--main-color);

            .edit {
              color: var(--third-color);
            }
          }
        }
      }

      .filter {
        display: none;
        align-items: center;
        justify-content: center;
        background-color: var(--third-color);
        color: var(--secound-color);
        text-transform: uppercase;
        font-weight: bold;
        transition: var(--main-transition);
        border: 1px solid #CCC;
        padding: 4px 15px;
        cursor: pointer;

        .icon {
          margin-right: 10px;

          .edit {
            color: var(--secound-color);
          }
        }
      }

      .filter:hover {
        background-color: var(--main-color);
        color: var(--third-color);
        border: 1px solid var(--main-color);

        .icon {
          .edit {
            color: var(--third-color);
          }
        }
      }

      .filter.active {
        background-color: var(--main-color);
        color: var(--third-color);
        border: 1px solid var(--main-color);

        .icon {
          .edit {
            color: var(--third-color);
          }
        }
      }
    }

    .shosenFilter {
      padding: 10px 0;
      margin-top: 10px;
      display: flex;
      align-items: center;
      justify-content: left;

      ul {
        display: flex;
        align-items: center;
        flex-wrap: wrap;

        li {
          display: none;
          align-items: center;
          justify-content: space-between;
          background-color: var(--secound-color);
          color: var(--third-color);
          padding: 4px 7px;
          border-radius: 5px;
          cursor: pointer;
          transition: var(--main-transition);
          margin-right: 6px;
          font-size: 14px;
          box-shadow: rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px;
          margin-top: 5px;

          .edit {
            margin-left: 8px;
          }
        }

        li:hover {
          background-color: var(--main-color);
          color: var(--third-color);
        }

        li.show {
          display: flex;
        }
      }
    }

    .coliction-row {
      margin-top: 20px;
      position: relative;
      z-index: 7;

      .products {

        .mr-2.show {
          display: block !important;
        }
      }
    }
  }
}

@media (max-width: 770px) {
  .main-col {
    .filter-row {
      .filter {
        display: flex !important;
      }

      .coliction-order {
        .select {
          &.open{
            height: 40px !important;
            margin-bottom: 0 !important;
          }
        }
      }
    }
  }

  .sidebar {
    .close {
      display: flex !important;
      align-items: center;
      justify-content: flex-end;
      margin-bottom: 10px;

      .icon {
        background-color: var(--third-color);
        border-radius: 50%;
        // border: 1px solid #CCC;
        width: 30px;
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px;

        .edit {
          color: var(--secound-color);
          font-size: 18px;
        }
      }
    }
  }

  .hocked {
    display: block !important;
    position: fixed;
    top: 0;
    left: 0;
    width: 60%;
    height: 100%;
    z-index: 99 !important;
    padding: 20px !important;
    background-color: var(--third-color);
    overflow-y: scroll;
    overflow-x: hidden !important;

  }
}

@media (max-width: 460px) {
  .hocked {
    width: 100%;
  }
}
</style>
