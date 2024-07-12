<template>
  <div class="cartItem" :class="col">
    <div class="row">
      <div class="info col-12 col-sm-12 col-md-6 col-lg-6">
        <div class="box">
          <div class="img-box">
            <router-link :to="`/Product/${id}`">
              <img :src="require(`@/assets/products/${category}/${imgUrl}/color${numberOfColor}/${img1}`)">
            </router-link>
          </div>
          <div class="info-box">
            <div class="title">
              <h6>
                <router-link :to="`/Product/${id}`">
                  {{ title }}
                </router-link>
              </h6>
            </div>
            <div class="colorSize">
              <span>Size: {{ SelectedSize }}</span>
              <span class="line"></span>
              <span>Color: {{ SelectedColor }}</span>
            </div>
            <div class="price">
              <p>${{ price }}</p>
            </div>
            <div class="editItem" @click="openEditItemBox = !openEditItemBox">
              <i class="edit fa-regular fa-pen-to-square"></i>
            </div>
          </div>
        </div>
      </div>
      <div class="quantity centerColumn col-6 col-sm-6 col-md-3 col-lg-3 mt-4">
        <div class="qty col-4 m-0 p-0">
          <div class="less" @click="hmOrderMin()" :class="{ disable: numberOfOrder == 1 }">-</div>
          <div class="number">
            {{ numberOfOrder }}
          </div>
          <div class="more" @click="hmOrderPlus()">+</div>
        </div>
        <div class="removeItem" @click="removeFromCartPage()">
          <span>Remove</span>
        </div>
      </div>
      <div class="price col-6 col-sm-6 col-md-3 col-lg-3 mt-4">
        <h4>${{ price * numberOfOrder }}</h4>
      </div>
    </div>
    <div class="editItemBox" :class="{ open: openEditItemBox, close: !openEditItemBox }">
      <div class="box">
        <div class="img-box">
          <img :src="require(`@/assets/products/${category}/${imgUrl}/color${numberOfColor}/${img1}`)">
        </div>
        <div class="info-box">
          <div class="close" @click="openEditItemBox = !openEditItemBox">
            <i class="edit fa-solid fa-xmark"></i>
          </div>
          <div class="title">
            <h4>{{ title }}</h4>
          </div>
          <div class="sizes col-12" :class="`sss${id}`">
            <p>size: <span>{{ sizes[sizeNumber] }}</span></p>
            <form action="">
              <div v-for="(size, i) in sizes" :key="i">
                <input type="radio" :id="size.id" :name="size" @click="(sizeNumber = i)" />
                <label :for="{ size }">{{ size }}</label>
              </div>
            </form>
          </div>
          <div class="colors col-12">
            <p>
              color:<span class="color-name" :selectedColor="colorsName[colorsNumber]">{{ colorsName[colorsNumber]
                }}</span>
            </p>
            <ul class="m-0 p-0">
              <li class="color" v-for="(color, i) in colors" :key="color.id" :data-color="`${color}`"
                :data-index="`${i}`" @click="(colorsNumber = i), (numberOfColor = i + 1)"
                :style="{ backgroundColor: color }"></li>
            </ul>
          </div>
          <div class="price">${{ price * numberOfOrder }}</div>
          <div class="buying mt-4">
            <div class="qty col-4 m-0 p-0">
              <div class="less" @click="hmOrderMin()" :class="{ disable: numberOfOrder == 1 }">-</div>
              <div class="number">
                {{ numberOfOrder }}
              </div>
              <div class="more" @click="hmOrderPlus()">+</div>
            </div>
            <div class="cart">
              <mostButton btnText="replace item" fontSize="12" padding="11px 20px" @click="editItem()" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import mostButton from "@/components/global/buttons/mostButton.vue"
import allProducts from "@/json/allproudects.json";

export default {
  name: "cartItem",
  data() {
    return {
      tocart: allProducts,
      numberOfColor: 1,
      productQTY: 1,
      colorsNumber: 0,
      sizeNumber: 0,
      openEditItemBox: false,
    }
  },
  props: [
    "id",
    "title",
    "stock",
    "category",
    "rating",
    "imgUrl",
    "imgColor",
    "img1",
    "img2",
    "img3",
    "img4",
    "img5",
    "img6",
    "price",
    "priceOff",
    "sizes",
    "colors",
    "colorsName",
    "msg",
    "msgColor",
    "inWishList",
    "col",
    "min",
    "max",
    "arrayBetween",
    "activeDeleteFromWishlist",
    "SelectedColor",
    "SelectedSize",
    "numberOfOrder",
  ],
  components: {
    mostButton,
  },
  methods: {
    removeFromCartPage() {
      this.tocart.forEach((p) => {
        if (this.id == p.id) {
          p.inCart = false;
        }
      });
    },
    editItem() {
      let color = document.querySelector(".editItemBox .colors p span ").getAttribute("selectedColor");
      let size = document.querySelector(".editItemBox .sizes form input:checked").getAttribute("name");

      this.tocart.forEach((p) => {
        if (p.title == this.title) {
          p.SelectedColor = color;
          p.SelectedSize = size;
          p.inCart = true;
        }
      });

      this.openEditItemBox = false;
    },
    hmOrderPlus() {
      this.tocart.forEach((p) => {
        if (p.title == this.title) {
          p.numberOfOrder++;
        }
      });
    },
    hmOrderMin() {
      this.tocart.forEach((p) => {
        if (p.title == this.title) {
          if (p.numberOfOrder == 0 || p.numberOfOrder < 2) {
            p.numberOfOrder = 1;
          } else {
            p.numberOfOrder--;
          }
        }
      });
    }
  },
  mounted() {
  },
};

</script>

<style lang="scss">
.cartItem {
  margin-bottom: 30px;

  .info {
    .box {
      display: flex;
      align-items: center;
      justify-content: center;

      .img-box {
        width: 30%;
        margin-right: 10px;

        img {
          width: 90%;
          height: 200px;
          object-fit: cover;
        }
      }

      .info-box {
        display: flex;
        align-items: flex-start;
        justify-content: center;
        flex-direction: column;
        width: 70%;

        .title {
          h6 {
            a {
              font-size: 14px;
              color: var(--secound-color);
              font-weight: 500;
              transition: var(--main-transition);
            }

            a:hover {
              color: var(--main-color);
            }
          }
        }

        .colorSize {
          span {
            color: var(--font-color);
            font-size: 14px;
            font-weight: 500;
          }

          .line {
            display: inline-block;
            width: 1.6px;
            height: 12px;
            background-color: var(--font-color);
            margin: 0 4px;
          }
        }

        .price {
          p {
            margin: 0;
            margin-top: 10px;
            font-size: 14px;
            color: var(--secound-color);
            font-weight: 500;
            transition: var(--main-transition);
            padding: 0;
          }
        }

        .editItem {
          position: relative;
          margin-top: 5px;

          .edit {
            margin-top: 0;
            color: var(--secound-color);
            font-size: 14px;
            font-weight: 500;
            transition: var(--main-transition);
            cursor: pointer;
          }

          .edit:hover {
            color: var(--main-color);
          }
        }

        .editItem:hover::before {
          content: "edit this item";
          position: absolute;
          top: -20px;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100px;
          height: 17px;
          background-color: var(--secound-color);
          color: var(--third-color);
          font-size: 12px;
        }

        .editItem:hover:after {
          content: "";
          position: absolute;
          left: 0px;
          top: -6px;
          background-color: transparent;
          border-width: 8px;
          border-color: var(--secound-color) transparent transparent transparent;
          border-style: solid;
        }
      }
    }
  }

  .quantity {
    .qty {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 30px;

      .less {
        border: 1px solid #ddd;
        padding: 5px 10px;
        color: var(--secound-color);
        cursor: pointer;
      }

      .number {
        border: 1px solid #ddd;
        color: var(--secound-color);
        padding: 5px 20px;
      }

      .more {
        border: 1px solid #ddd;
        padding: 5px 10px;
        color: var(--secound-color);
        cursor: pointer;
      }
    }

    .removeItem {
      margin-top: 10px;

      span {
        color: var(--font-color);
        font-size: 14px;
        font-weight: bold;
        text-decoration: underline;
        transition: var(--main-transition);
        cursor: pointer;
      }

      span:hover {
        color: var(--main-color);
      }
    }
  }

  .price {
    display: flex;
    align-items: center;
    justify-content: flex-end;

    h4 {
      text-align: right;
      color: var(--secound-color);
      font-size: 20px;
    }
  }

  .editItemBox {
    position: fixed;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #00000063;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10;

    .box {
      width: 30%;
      justify-content: center;
      position: relative;
      display: flex;
      align-items: center;
      transition: 1.5s ease-out .3s;

      .img-box {
        position: relative;
        transition: var(--main-transition);

        img {
          position: relative;
          width: 100%;
          height: 450px;
          object-fit: cover;
          z-index: 11;
          transition: var(--main-transition);
        }
      }

      .info-box {
        position: absolute;
        width: 48%;
        height: 100%;
        background-color: var(--third-color);
        top: 0;
        z-index: 10;
        display: flex;
        align-items: flex-start;
        justify-content: center;
        flex-direction: column;
        text-align: left;
        overflow: hidden;


        .close {
          position: absolute;
          right: 15px;
          top: 10px;
          width: 30px;
          height: 30px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: rgba(17, 17, 26, 0.05) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px;
          background-color: var(--third-color);
          cursor: pointer;
          transition: var(--main-transition);

          .edit {
            color: var(--secound-color);
            transition: var(--main-transition);
          }

          .title {
            margin-left: 20px;
            text-align: left;
            color: var(--secound-color);

          }

          &:hover {
            background-color: var(--main-color);

            .edit {
              color: var(--third-color);
            }

          }
        }


        .price {
          margin: 20px 0px 0px 20px;
          text-align: left;
          font-size: 20px;
          color: var(--secound-color);
          font-weight: 500;
        }

        .colors {
          margin-left: 20px;
          display: flex;
          align-items: flex-start;
          justify-content: center;
          flex-direction: column;
          margin-top: 10px;

          p {
            color: var(--font-color);
            margin-bottom: 6px;

            span {
              margin-left: 5px;
              color: var(--secound-color);
              font-weight: 500;
            }
          }

          ul {
            display: flex;

            li {
              width: 25px;
              height: 25px;
              border-radius: 50%;
              margin-right: 12px;
              border: 2px solid #ddd;
              cursor: pointer;
            }
          }
        }

        .sizes {
          margin-left: 20px;
          display: flex;
          align-items: flex-start;
          justify-content: center;
          flex-direction: column;

          p {
            color: var(--font-color);
            margin: 6px 8px 6px 0;

            span {
              margin-left: 5px;
              color: var(--secound-color);
              font-weight: 500;
            }
          }

          form {
            display: flex;
            align-items: center;
            justify-content: center;

            div {
              position: relative;
              margin-right: 8px;

              input {
                position: relative;
                appearance: none;
                width: 25px;
                height: 25px;
                z-index: 45;
                background-color: transparent;
                cursor: pointer;
                border: 1px solid #ddd;
              }

              input[type="radio"]:checked {
                content: "";
                background-color: var(--main-color);
                width: 25px;
                height: 25px;
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
                font-size: 14px;
              }
            }
          }
        }

        .buying {
          margin-left: 20px;
          display: flex;
          align-items: center;
          justify-content: space-between;

          .cart {
            margin-right: 10px;
          }

          .qty {
            display: flex;
            align-items: center;
            justify-content: flex-start;
            margin-right: 10px;

            .less {
              border: 1px solid #ddd;
              padding: 5px 10px;
              color: var(--secound-color);
              cursor: pointer;
            }

            .number {
              border: 1px solid #ddd;
              color: var(--secound-color);
              padding: 5px 20px;
            }

            .more {
              border: 1px solid #ddd;
              padding: 5px 10px;
              color: var(--secound-color);
              cursor: pointer;
            }
          }
        }

      }
    }

    &.open {
      bottom: 0;
      opacity: 1;
      transition: bottom .5s, opacity 1s;


      .box {
        width: 50%;
        justify-content: flex-start;
        transition: width .5s ease-in .5s, justify-content .5s ease-in .5s;

        .info-box {
          left: 47%;
          opacity: 1;
          transition: .2s ease-in .5s;
        }
      }
    }

    &.close {
      bottom: -100%;
      opacity: 0;
      transition: .5s ease-out 1s;


      .box {
        width: 30%;
        justify-content: center;
        transition: width 1.5s ease-in .5s, justify-content 1.5s ease-in .5s;


        .info-box {
          opacity: 0;
          left: 26%;
          transition: 1s ease-out .5s;
        }
      }
    }
  }

}

@media (max-width: 770px) {
  .cartItem {
    margin-bottom: 30px;

    .info {
      .box {
        display: flex;
        align-items: center;
        justify-content: center;

        .img-box {
          width: 30%;
          margin-right: 10px;

          img {
            width: 90%;
            height: 200px;
            object-fit: cover;
          }
        }

        .info-box {
          .title {
            h6 {
              text-align: left;
            }
          }
        }
      }
    }

    .quantity {
      display: flex;
      align-items: flex-start;
      justify-content: center;
      .qty {
        align-items: flex-start;
      }

      .removeItem {
        margin-top: 10px;

        span {
          color: var(--font-color);
          font-size: 14px;
          font-weight: bold;
          text-decoration: underline;
          transition: var(--main-transition);
          cursor: pointer;
        }

        span:hover {
          color: var(--main-color);
        }
      }
    }

    .editItemBox {
      position: fixed;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: #00000063;
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 10;

      .box {
        width: 30%;
        justify-content: center;
        position: relative;
        display: flex;
        align-items: center;
        transition: 1.5s ease-out .3s;

        .img-box {
          position: relative;
          transition: var(--main-transition);

          img {
            position: relative;
            width: 100%;
            height: 450px;
            object-fit: cover;
            z-index: 11;
            transition: var(--main-transition);
          }
        }

        .info-box {
          position: absolute;
          width: 48%;
          height: 100%;
          background-color: var(--third-color);
          top: 0;
          z-index: 10;
          display: flex;
          align-items: flex-start;
          justify-content: center;
          flex-direction: column;
          text-align: left;
          overflow: hidden;


          .close {
            position: absolute;
            right: 15px;
            top: 10px;
            width: 30px;
            height: 30px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: rgba(17, 17, 26, 0.05) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px;
            background-color: var(--third-color);
            cursor: pointer;
            transition: var(--main-transition);

            .edit {
              color: var(--secound-color);
              transition: var(--main-transition);
            }

            .title {
              margin-left: 20px;
              text-align: left;
              color: var(--secound-color);

            }

            &:hover {
              background-color: var(--main-color);

              .edit {
                color: var(--third-color);
              }

            }
          }


          .price {
            margin: 20px 0px 0px 20px;
            text-align: left;
            font-size: 20px;
            color: var(--secound-color);
            font-weight: 500;
          }

          .colors {
            margin-left: 20px;
            display: flex;
            align-items: flex-start;
            justify-content: center;
            flex-direction: column;
            margin-top: 10px;

            p {
              color: var(--font-color);
              margin-bottom: 6px;

              span {
                margin-left: 5px;
                color: var(--secound-color);
                font-weight: 500;
              }
            }

            ul {
              display: flex;

              li {
                width: 25px;
                height: 25px;
                border-radius: 50%;
                margin-right: 12px;
                border: 2px solid #ddd;
                cursor: pointer;
              }
            }
          }

          .sizes {
            margin-left: 20px;
            display: flex;
            align-items: flex-start;
            justify-content: center;
            flex-direction: column;

            p {
              color: var(--font-color);
              margin: 6px 8px 6px 0;

              span {
                margin-left: 5px;
                color: var(--secound-color);
                font-weight: 500;
              }
            }

            form {
              display: flex;
              align-items: center;
              justify-content: center;

              div {
                position: relative;
                margin-right: 8px;

                input {
                  position: relative;
                  appearance: none;
                  width: 25px;
                  height: 25px;
                  z-index: 45;
                  background-color: transparent;
                  cursor: pointer;
                  border: 1px solid #ddd;
                }

                input[type="radio"]:checked {
                  content: "";
                  background-color: var(--main-color);
                  width: 25px;
                  height: 25px;
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
                  font-size: 14px;
                }
              }
            }
          }

          .buying {
            margin-left: 20px;
            display: flex;
            align-items: center;
            justify-content: space-between;

            .cart {
              margin-right: 10px;
            }

            .qty {
              display: flex;
              align-items: center;
              justify-content: flex-start;
              margin-right: 10px;

              .less {
                border: 1px solid #ddd;
                padding: 5px 10px;
                color: var(--secound-color);
                cursor: pointer;
              }

              .number {
                border: 1px solid #ddd;
                color: var(--secound-color);
                padding: 5px 20px;
              }

              .more {
                border: 1px solid #ddd;
                padding: 5px 10px;
                color: var(--secound-color);
                cursor: pointer;
              }
            }
          }

        }
      }

      &.open {
        height: 100% !important;

        .box {
          width: 50%;
          justify-content: flex-start;
          transition: width .5s ease-in .5s, justify-content .5s ease-in .5s;

          .info-box {
            left: 47%;
            opacity: 1;
            transition: .2s ease-in .5s;
          }
        }
      }

      &.close {
        bottom: -100%;
        opacity: 0;
        transition: .5s ease-out 1s;


        .box {
          width: 30%;
          justify-content: center;
          transition: width 1.5s ease-in .5s, justify-content 1.5s ease-in .5s;


          .info-box {
            opacity: 0;
            left: 26%;
            transition: 1s ease-out .5s;
          }
        }
      }
    }

  }
}
</style>