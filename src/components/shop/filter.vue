<template>
  <div class="filter">
    <div class="sidebar-content">
      <div class="collection">
        <div class="title" @click="activeCollection = !activeCollection">
          <h4 class="m-0">collection</h4>
          <div class="icon" :class="{ active: activeCollection }">
            <i class="edit fa-solid fa-chevron-down"></i>
          </div>
        </div>
        <div class="content" :class="{ active: activeCollection }">
          <ul class="m-0 p-0">
            <ol data-type="all" class="active p-0">All products <span>{{ products.length }}</span></ol>
            <li v-for="collection in collections" :key="collection" ref="collection" :data-type="collection"
              @click="addItem($event)">
              {{ collection }}
              <span>{{ this.numberOfCollectionItem(collection) }}</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="price">
        <div class="title" @click="activePrice = !activePrice">
          <h4 class="m-0">price</h4>
          <div class="icon" :class="{ active: activePrice }">
            <i class="edit fa-solid fa-chevron-down"></i>
          </div>
        </div>
        <div class="content" :class="{ active: activePrice }">
          <priceTrack />
        </div>
      </div>
      <div class="color">
        <div class="title" @click="activeColor = !activeColor">
          <h4 class="m-0">color</h4>
          <div class="icon" :class="{ active: activeColor }">
            <i class="edit fa-solid fa-chevron-down"></i>
          </div>
        </div>
        <div class="content" :class="{ active: activeColor }">
          <div class="colors">
            <ul class="m-0 p-0">
              <li v-for="(color, i) in colors" :key="color" ref="color" :style="{ background: color.colorHex }"
                v-bind:data-type="color.colorName" @click="addItem($event)"
                @mouseover="this.$refs.color[i].classList.add('open')"
                @mouseleave="this.$refs.color[i].classList.remove('open')">
                <span>{{ color.colorName }} {{ numberOfColorsItem(color.colorName) }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="size">
        <div class="title" @click="activeSize = !activeSize">
          <h4 class="m-0">size</h4>
          <div class="icon" :class="{ active: activeSize }">
            <i class="edit fa-solid fa-chevron-down"></i>
          </div>
        </div>
        <div class="content" :class="{ active: activeSize }">
          <ul class="m-0 p-0">
            <li v-for="(size, i) in sizes1" :key="size" ref="size" :data-type="`${size}`" @click="addItem($event)"
              @mouseover="this.$refs.size[i].classList.add('open')"
              @mouseleave="this.$refs.size[i].classList.remove('open')">
              <span>{{ numberOfSizesItem(size.toLowerCase()) }}</span>
              {{ size }}
            </li>
          </ul>
          <ul class="m-0 p-0">
            <li v-for="(size, i) in sizes2" :key="size" ref="size2" :data-type="`${size}`" @click="addItem($event)"
              @mouseover="this.$refs.size2[i].classList.add('open')"
              @mouseleave="this.$refs.size2[i].classList.remove('open')">
              <span>{{ numberOfSizesItem(size) }}</span>
              {{ size }}
            </li>
          </ul>
        </div>
      </div>
      <div class="brand">
        <div class="title" @click="activeBrand = !activeBrand">
          <h4 class="m-0">brand</h4>
          <div class="icon" :class="{ active: activeBrand }">
            <i class="edit fa-solid fa-chevron-down"></i>
          </div>
        </div>
        <div class="content" :class="{ active: activeBrand }">
          <ul class="m-0 p-0">
            <li v-for="(brand, i) in brands" :key="brand" ref="brand" class="disabled"
              @click="this.$refs.brand[i].classList.toggle('active')">
              {{ brand }}
            </li>
          </ul>
        </div>
      </div>
      <div class="availability">
        <div class="title" @click="activeAvailability = !activeAvailability">
          <h4 class="m-0">availability</h4>
          <div class="icon" :class="{ active: activeAvailability }">
            <i class="edit fa-solid fa-chevron-down"></i>
          </div>
        </div>
        <div class="content" :class="{ active: activeAvailability }">
          <ul class="m-0 p-0">
            <li data-type="true" ref="availability1" @click="addItem($event)">
              In stuck
            </li>
            <li data-type="false" ref="availability2" @click="addItem($event)">
              Out of stuck
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import priceTrack from "@/components/shop/priceTrack.vue";
import productJsonApi from "@/json/allproudects.json";

export default {
  name: "filterComponent",
  data() {
    return {
      products: productJsonApi,
      active: true,
      activeCollection: true,
      activePrice: true,
      activeColor: true,
      activeSize: true,
      activeBrand: false,
      activeAvailability: true,
      collections: ["dress", "jackets", "T-shirts", "jeans", "tops"],
      colors: [

        {
          colorName: "white",
          colorHex: "#ebebeb"
        },
        {
          colorName: "black",
          colorHex: "#000000"
        },
        {
          colorName: "red",
          colorHex: "#c24747"
        },
        {
          colorName: "yellow",
          colorHex: "#ffdd00"
        },
        {
          colorName: "green",
          colorHex: "#328420"
        },
        {
          colorName: "blue",
          colorHex: "#332dac"
        },
        {
          colorName: "purple",
          colorHex: "#af279b"
        },
        {
          colorName: "beige",
          colorHex: "#814e34"
        },
        {
          colorName: "pink",
          colorHex: "#B51763"
        }

      ],
      colorss: ["white", "black", "red", "yellow", "green", "blue", "purple", "beige", "pink"],
      sizes1: ["XS", "S", "M", "L", "XL"],
      sizes2: ["38", "39", "40", "41"],
      brands: [
        "H&M",
        "Dior",
        "Zara",
        "Gucci",
        "Concrete",
        "Pull&Bear",
        "Balenciaga",
      ],
      btns: [],
    }
  },
  props: [
    "",
    "",
    "",
  ],
  components: {
    priceTrack,
  },
  methods: {
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
    // to get all the data from all filter btns
    allFilterData() {
      let data = [];
      let collection = document.querySelectorAll(".sidebar .sidebar-content .collection .content ul li");
      var filtersExColc = Array.from(document.querySelectorAll(".sidebar .sidebar-content .content ul li")).splice(this.collections.length);
      let allBtnsData = [];
      let chosenDataFillter = this.getData(filtersExColc, "type");
      let chosenColictionDataFillter = this.getData(collection, "type");
      // let chosenPriceFillter = this.price();
      let arr = allBtnsData.concat([...new Set(chosenColictionDataFillter)]).concat([...new Set(chosenDataFillter)]);// 
      arr.forEach((li) => data.push(li));
      return [...new Set(data)];
    },
    // to filter our products by the vule of some arrays
    doFilter(filters) {
      let products = document.querySelectorAll(".coliction-row .products .row .mr-2 .product-box");
      let productsMain = document.querySelectorAll(".coliction-row .products .row .mr-2");
      let collection = document.querySelectorAll(".sidebar .sidebar-content .collection .content ul li");
      var filtersExColc = Array.from(document.querySelectorAll(".sidebar .sidebar-content .content ul li")).splice(this.collections.length);
      let el1 = document.querySelector('[data-type="all"]');
      filters.forEach(filter => {
        filter.addEventListener("click", () => {
          el1.classList.remove("active");
          productsMain.forEach((product) => {
            product.style.display = "none";
          });
          let productArr = Array.from(products);
          let chosenDataFillter = this.getData(filtersExColc, "type");
          let chosenColictionDataFillter = this.getData(collection, "type");
          let chosenPriceFillter = this.price();
          if (chosenColictionDataFillter.length == 0) {
            chosenColictionDataFillter = Array.from(this.collections);
          }
          if (chosenPriceFillter.length == 0) {
            chosenPriceFillter = Array.from(this.collections);
          }
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
          this.activeEl1(filters, filter);
        });
        this.activeEl1(filters, filter);
      });
    },
    // to add items into our filter btns
    addItem(event) {
      const element = event.currentTarget;
      element.classList.toggle("active");
      var mostFilter = Array.from(document.querySelectorAll(".sidebar .sidebar-content .content ul li"));
      var priceFilter = Array.from(document.querySelectorAll(".sidebar .content .track-container .track"));
      var filters = [];
      let buttonsContianer = document.querySelector(".shosenFilter .buttons");

      if (buttonsContianer.style.display == "none") {
        buttonsContianer.style.display = "block";
      }
      mostFilter.forEach((filter) => {
        filters.push(filter);
      });
      priceFilter.forEach((filter) => {
        filters.push(filter);
      });

      let items = this.allFilterData(filters);
      items.forEach((item) => {
        if (element.classList.contains('active')) {
          if (!this.btns.includes(item)) {
            this.btns.push(item);
            this.$emit('data-from-child', this.btns);
          }
        }
      });

      element.addEventListener("click", (ee) => {
        if (!element.classList.contains('active')) {
          const indexToRemove = this.btns.indexOf(ee.currentTarget.dataset.type);
          if (indexToRemove !== -1) {
            this.btns.splice(indexToRemove, 1);
          }
        }
      })
      let buttonsLi = document.querySelectorAll(".shosenFilter .buttons ul li");
      buttonsLi.forEach((li) => {
        if (li.firstChild.innerText == "true") {
          li.firstChild.innerText = "in stock"
        }
        if (li.firstChild.innerText == "false") {
          li.firstChild.innerText = "out of stock"
        }
      });

    },
    // to reset all products again
    activeEl1(filters, filter) {
      let el1 = document.querySelector('[data-type="all"]');
      let products = document.querySelectorAll(".coliction-row .products .row .mr-2");
      let buttonsContianer = document.querySelector(".shosenFilter .buttons");
      let clearAll = document.querySelector(".shosenFilter .buttons .clear-all");
      if (filter) {
        el1.addEventListener("click", () => {
          filter.classList.remove("active");
          el1.classList.add("active");
          products.forEach((product) => {
            product.style.display = "block";
          });
          this.btns.length = 0;
          buttonsContianer.style.display = "none";
        });
      }
      let cloneArr = Array.from(filters);
      cloneArr.forEach((el) => {
        el.addEventListener("click", () => {
          let elCoAc = cloneArr.filter((el) => el.classList.contains("active"));
          if (elCoAc.length == 0) {
            el1.classList.add("active");
            buttonsContianer.style.display = "none";
            products.forEach((product) => {
              product.style.display = "block";
            });
          }
        });
      });
      clearAll.addEventListener("click", () => {
        el1.classList.add("active");
        products.forEach((product) => {
          product.style.display = "block";
        });
        buttonsContianer.style.display = "none";
        this.btns.length = 0;
        cloneArr.forEach((el) => el.classList.remove("active"));
      });
    },
    // to do availability filter 
    availabilityHide() {
      var availability = Array.from(document.querySelectorAll(".sidebar .sidebar-content .availability .content ul li"));
      availability.forEach((el) => {
        el.addEventListener("click", () => {
          var trueAvailability = availability.filter((el) => el.dataset.type == "true");
          var falseAvailability = availability.filter((el) => el.dataset.type == "false");
          if (trueAvailability[0].classList.contains("active")) {
            falseAvailability[0].classList.add("disabled");
          } else if (!trueAvailability[0].classList.contains("active")) {
            falseAvailability[0].classList.remove("disabled");
          }
          if (falseAvailability[0].classList.contains("active")) {
            trueAvailability[0].classList.add("disabled");
          } else if (!falseAvailability[0].classList.contains("active")) {
            trueAvailability[0].classList.remove("disabled");
          }
          let buttonsLi = Array.from(document.querySelectorAll(".shosenFilter .buttons ul li"));
          buttonsLi.forEach((li) => {
            if (li.firstChild.innerText == "true") {
              li.firstChild.innerText = "in stock";
            }
            if (li.firstChild.innerText == "false") {
              li.firstChild.innerText = "out of stock"
            }
          });

          if (falseAvailability[0].classList.contains("active")) {
            var falseAvailabilityBtn = buttonsLi.filter((el) => el.dataset.type == "false");
            falseAvailabilityBtn[0].addEventListener("click", () => trueAvailability[0].classList.remove("disabled"));
          }
          if (trueAvailability[0].classList.contains("active")) {
            var trueAvailabilityBtn = buttonsLi.filter((el) => el.dataset.type == "true");
            trueAvailabilityBtn[0].addEventListener("click", () => falseAvailability[0].classList.remove("disabled"));
          }

        })
      })
    },
    // to do price filter
    priceBtn() {
      let priceBtn = document.querySelector(".shosenFilter .buttons ul .price");
      var priceFilter = Array.from(document.querySelectorAll(".sidebar .content .track-container .track"));
      let buttonsContianer = document.querySelector(".shosenFilter .buttons");
      priceFilter.forEach((filter) => {
        filter.addEventListener("click", () => {
          var priceMin = document.querySelector(".price-value .min").dataset.min;
          var priceMax = document.querySelector(".price-value .max").dataset.max;
          let priceRange = `${priceMin} - ${priceMax}`;
          this.priceRange = priceRange;
          buttonsContianer.style.display = "block";
          priceBtn.classList.add('show');
        })
      })
      priceBtn.addEventListener("click", (e) => {
        e.currentTarget.classList.remove("show");
        var priceMin = document.querySelector(".price-value .min");
        var priceMax = document.querySelector(".price-value .max");
        var track1 = document.querySelector(".priceTrack .track-container .track1");
        var track2 = document.querySelector(".priceTrack .track-container .track2");
        var trackHighlight = document.querySelector(".priceTrack .track-container .track-highlight");

        priceMin.setAttribute("data-min", 10);
        priceMax.setAttribute("data-max", 600);
        priceMin.innerText = "USD10";
        priceMax.innerText = "USD600";
        track1.style.left = "0%"
        track2.style.left = "100%"
        trackHighlight.style.left = "0%"
        trackHighlight.style.width = "100%"


        let priceRange = `${10} - ${600}`;
        this.priceRange = priceRange;
      });
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
    // number of items in every category
    numberOfCollectionItem(name) {
      let nums = this.products.filter((p) => p.category == name).length;
      return nums;
    },
    numberOfColorsItem(name) {
      let nums = this.products.filter((p) => p.colorsName.includes(name)).length;
      return nums;
    },
    numberOfSizesItem(name) {
      let nums = this.products.filter((p) => p.sizes.includes(name)).length;
      return nums;
    },
    numberOfAVItem(name) {
      let nums = this.products.filter((p) => p.stock == name).length;
      return nums;
    },
  },
  mounted() {
    var mostFilter = Array.from(document.querySelectorAll(".sidebar .sidebar-content .content ul li"));
    var priceFilter = Array.from(document.querySelectorAll(".sidebar .content .track-container .track"));
    var filters = [];
    mostFilter.forEach((filter) => {
      filters.push(filter);
    });
    priceFilter.forEach((filter) => {
      filters.push(filter);
    });
    this.priceBtn();
    this.doFilter(filters);
    this.availabilityHide();
  },
};
</script>

<style lang="scss">
.filter {
  .sidebar-content {
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;

    .collection {
      .content {
        ul {
          text-align: left;
          width: 100%;

          li,
          ol {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 8px;
            font-size: 15px;
            cursor: pointer;

            span {
              display: flex;
              align-items: center;
              justify-content: center;
              font-size: 11px;
              border: 1px solid #ccc;
              border-radius: 50%;
              width: 18px;
              height: 18px;
              padding: 11px;
            }
          }

          li.active,
          ol.active {
            color: #000;

            span {
              background-color: var(--main-color);
              border: 1px solid var(--main-color);
              color: #fff;
            }
          }
        }
      }

      .content.active {
        height: 200px;
      }
    }

    .price {
      .content {
        display: flex;
        align-items: flex-start;
        justify-content: center;
        flex-direction: column;
      }

      .content.active {
        height: 110px;
      }
    }

    .color {
      .content {
        .colors {
          ul {
            display: flex;
            flex-wrap: wrap;

            li {
              position: relative;
              display: flex;
              align-items: center;
              justify-content: center;
              width: 30px;
              height: 30px;
              margin: 7px 7px;
              opacity: 0.8;
              cursor: pointer;
              border-radius: 50%;
              border: 1px solid #FFF;


              span {
                position: absolute;
                display: none;
                top: -70px;
                left: -15px;
                background-color: #000;
                color: #fff;
                font-size: 12px;
                padding: 2px 8px;
                opacity: 0;
                transition: var(--main-transition);
                width: 220%;

              }

              span::before {
                content: "";
                position: absolute;
                left: 50%;
                bottom: -16px;
                transform: translateX(-50%);
                width: 8px;
                height: 8px;
                background-color: transparent;
                border-width: 10px;
                border-color: #000 transparent transparent transparent;
                border-style: solid;
              }

            }

            li.open span {
              display: block;
              top: -35px;
              opacity: 1;
            }

            li.active {
              border: 2px solid #000000b8;
            }
          }
        }
      }

      .content.active {
        height: 150px;
      }
    }

    .size {
      .content {
        display: flex;
        align-items: flex-start;
        justify-content: center;
        flex-direction: column;

        ul {
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px !important;

          li {
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 16px;
            text-transform: lowercase;
            width: 40px;
            height: 40px;
            color: var(--secound-color);
            margin-right: 7px;
            border-radius: 50%;
            border: 2px solid #ccc;
            cursor: pointer;
            transition: var(--main-transition);
            background-color: var(--third-color);

            span {
              position: absolute;
              display: none;
              top: -70px;
              left: 0px;
              background-color: #000000ae;
              color: #fff;
              font-size: 12px;
              padding: 2px 8px;
              opacity: 0;
              transition: var(--main-transition);
              width: 100%;
            }

            span::before {
              content: "";
              position: absolute;
              left: 50%;
              bottom: -12px;
              transform: translateX(-50%);
              width: 8px;
              height: 7px;
              background-color: transparent;
              border-width: 6px;
              border-color: rgba(0, 0, 0, 0.6823529412) transparent transparent transparent;
              border-style: solid;
            }
          }

          li.open span {
            display: block;
            top: -35px;
            opacity: 1;
          }

          li.active {
            color: var(--third-color);
            background-color: var(--main-color);
            border: 2px solid var(--main-color);
          }
        }
      }

      .content.active {
        height: 200px;
      }
    }

    .brand {
      .content {
        display: flex;
        align-items: center;
        justify-content: flex-start;

        ul {
          text-align: left;

          li {
            display: flex;
            align-items: center;
            justify-content: flex-start;
            color: var(--secound-color);
            margin-bottom: 7px;
            width: 100%;
            cursor: pointer;
          }

          li::before {
            content: "";
            display: block;
            width: 15px;
            height: 15px;
            border: 1px solid #ccc;
            margin-right: 7px;
            background-color: var(--third-color);
            transition: var(--main-transition);
          }

          li.active::before {
            background-color: var(--main-color);
            border: 1px solid var(--main-color);
          }

          li.disabled {
            color: var(--disabled-color);
            pointer-events: none;
            cursor: not-allowed;
          }

          li.disabled::before {
            content: "\274c";
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: var(--THIRD-color);
            border: 1px solid transparent;
            font-size: 13px;
            color: #FFF !important;
            padding: auto !important;
          }
        }
      }

      .content.active {
        height: 230px;
      }
    }

    .availability {
      .content {
        display: flex;
        align-items: center;
        justify-content: flex-start;

        ul {
          text-align: left;

          li {
            display: flex;
            align-items: center;
            justify-content: flex-start;
            color: var(--secound-color);
            margin-bottom: 7px;
            width: 100%;
            cursor: pointer;
          }

          li::before {
            content: "";
            display: block;
            width: 15px;
            height: 15px;
            border: 1px solid #ccc;
            margin-right: 7px;
            background-color: var(--third-color);
            transition: var(--main-transition);
          }

          li.active::before {
            background-color: var(--main-color);
            border: 1px solid var(--main-color);
          }

          li.disabled {
            color: var(--disabled-color);
            pointer-events: none;
            cursor: not-allowed;
          }

          li.disabled::before {
            content: "\274c";
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: var(--THIRD-color);
            border: 1px solid transparent;
            font-size: 13px;
            color: #FFF !important;
            padding: auto !important;
          }
        }
      }

      .content.active {
        height: 90px;
      }
    }
  }

  .sidebar-content>div {
    width: 100%;

    .title {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: 1px solid #ccc;
      margin-bottom: 15px;

      h4 {
        color: var(--secound-color);
        font-size: 22px;
        font-family: var(--main-font);
        font-weight: bold;
      }

      .icon {
        transform: rotate(0deg);
        transition: var(--main-transition);
        cursor: pointer;

        .edit {
          color: var(--secound-color);
        }
      }

      .icon.active {
        transform: rotate(180deg);
      }
    }

    .content {
      height: 0px;
      transition: var(--main-transition);
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: flex-start;
    }
  }

  .close {
    display: none;
  }
}
</style>