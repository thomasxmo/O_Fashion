<template>
  <div class="AppFooter">
    <div class="row">
      <div class="footer col-12">
        <div class="row">
          <div class="col-12 col-sm-12 col-md-6 col-lg-2">
            <div class="contactUs">
              <div class="head" @click="activeContactUs = !activeContactUs">
                <h3 class="label">contact Us</h3>
                <div class="icon" :class="{ ph: activeContactUs }">
                  <i class="edit d-none fa-solid fa-chevron-right"></i>
                </div>
              </div>
              <div class="info" :class="{ open: activeContactUs }">
                <ul class="p-0">
                  <li>addres: <span>4 Copley Place, 7th Floor, Boston,MA 6</span></li>
                  <li>phone: <span>+201017061753</span></li>
                  <li>email: <span>omarx2005@gmail.com</span></li>
                  <li class="mt-4">
                    <div class="social-media">
                      <ul class="socialMedia-list">
                        <li><a href="https://www.facebook.com/profile.php?id=100011178858933"><i
                              class="edit fa-brands fa-facebook"></i></a></li>
                        <li><a href="https://www.instagram.com/omarhekal62"><i
                              class="edit fa-brands fa-instagram"></i></a>
                        </li>
                        <li><a href="https://twitter.com/Omarhekal62"><i class="edit fa-brands fa-x-twitter"></i></a>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-12 col-sm-12 col-md-6 col-lg-2">
            <div class="categoires">
              <div class="head" @click="activeCategoires = !activeCategoires">
                <h3 class="label">categoires</h3>
                <div class="icon" :class="{ ph: activeCategoires }">
                  <i class="edit d-none fa-solid fa-chevron-right"></i>
                </div>
              </div>
              <div class="info" :class="{ open: activeCategoires }">
                <ul class="links p-0">
                  <li><router-link to="/Shop"><span>tops</span></router-link></li>
                  <li><router-link to="/Shop"><span>t-shirts</span></router-link></li>
                  <li><router-link to="/Shop"><span>dress</span></router-link></li>
                  <li><router-link to="/Shop"><span>jackets</span></router-link></li>
                  <li><router-link to="/Shop"><span>jeans</span></router-link></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-12 col-sm-12 col-md-6 col-lg-2">
            <div class="information">
              <div class="head" @click="activeInformation = !activeInformation">
                <h3 class="label">information</h3>
                <div class="icon" :class="{ ph: activeInformation }">
                  <i class="edit d-none fa-solid fa-chevron-right"></i>
                </div>
              </div>
              <div class="info" :class="{ open: activeInformation }">
                <ul class="links p-0">
                  <li><router-link to="/Blog"><span>Latest News</span></router-link></li>
                  <li><a href="#"><span>Career</span></a></li>
                  <li><router-link to="/Profile"><span>My Account</span></router-link></li>
                  <li><router-link to="/Cart"><span>My Cart</span></router-link></li>
                  <li><a href="#"><span>Orders and Returns</span></a></li>
                  <li><router-link to="/ContactUs"><span>Contact Us</span></router-link></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-12 col-sm-12 col-md-6 col-lg-2">
            <div class="service">
              <div class="head" @click="activeService = !activeService">
                <h3 class="label">Service</h3>
                <div class="icon" :class="{ ph: activeService }">
                  <i class="edit d-none fa-solid fa-chevron-right"></i>
                </div>
              </div>
              <div class="info" :class="{ open: activeService }">
                <ul class="links p-0">
                  <li><a href="#"><span>Privacy Policy</span></a></li>
                  <li><a href="#"><span>Terms & Conditions</span></a></li>
                  <li><a href="#"><span>Shipping & Returns</span></a></li>
                  <li><a href="#"><span>Help & FAQs</span></a></li>
                  <li><a href="#"><span>Refund Policy</span></a></li>
                  <li><a href="#"><span>Customer Service</span></a></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-12 col-sm-12 col-md-12 col-lg-4">
            <div class="footer-img">
              <div class="img-box">
                <img src="@/assets/2.jpg" alt="">
              </div>
              <div class="info-box">
                <h3 class="label">join us</h3>
                <p>Enter your email to receive daily news and get 20%
                  off coupon for all items. NO spam, we promise</p>
                <form action="">
                  <input type="email" placeholder="Email address">
                  <button type="submit">subscribe</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="copy col-12">
        <div class="text">© 2023,<span>thomas</span>. All Rights Reserved.</div>
        <div class="pay"><img src="@/assets/pay.avif" alt=""></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppFooter",
  data() {
    return {
      activeContactUs: false,
      activeCategoires: false,
      activeInformation: false,
      activeService: false,
    };
  },
  props: ["", "", ""],
  components: {},
  methods: {
    icon() {
      let head = document.querySelector(".contactUs .head");
      if (this.activeContactUs == false) {
        let icon = document.createElement("i");
        icon.className = "edit d-none fa-solid fa-chevron-right"
        head.appendChild(icon)
      } else {
        let icon = document.createElement("i");
        icon.className = "edit d-none fa-solid fa-chevron-down"
        head.appendChild(icon)
      }
    }
  },
  mounted() {
  },
};
</script>

<style lang="scss">
.footer {
  padding: 50px;
  background-color: var(--secound-color);
  overflow: hidden;

  .contactUs {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;

    .head {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      margin-bottom: 20px;

      .edit,
      .edit2 {
        color: var(--third-color);
      }
    }

    .info {
      overflow: hidden;

      ul {
        text-align: left;

        li {
          margin-bottom: 8px;
          color: var(--third-color);
          font-size: 14px;

          span {
            color: #ccc;
          }
        }
      }
    }

    .social-media {
      ul {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        padding: 0;

        li {
          margin-right: 20px;

          a {
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: var(--third-color);
            border-radius: 50%;
            width: 40px;
            height: 40px;
            transition: var(--main-transition);

            .edit {
              color: var(--secound-color);
              transition: var(--main-transition);
            }
          }

          a:hover {
            background-color: var(--main-color);
          }
        }
      }
    }
  }

  .categoires {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;

    .head {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      margin-bottom: 20px;

      .edit,
      .edit2 {
        color: var(--third-color);
      }
    }

    .info {
      .links {
        text-align: left;

        li {
          margin-bottom: 10px;

          a {
            color: var(--third-color);
            text-transform: uppercase;
            font-size: 14px;

            span {
              transition: var(--main-transition);
            }
          }

          a:hover {
            span {
              text-decoration: underline;
            }
          }
        }
      }
    }
  }

  .information {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;

    .head {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      margin-bottom: 20px;

      .edit,
      .edit2 {
        color: var(--third-color);
      }
    }

    .info {
      .links {
        text-align: left;

        li {
          margin-bottom: 10px;

          a {
            color: var(--third-color);
            text-transform: uppercase;
            font-size: 14px;

            span {
              transition: var(--main-transition);
            }
          }

          a:hover {
            span {
              text-decoration: underline;
            }
          }
        }
      }
    }

  }

  .service {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;

    .head {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      margin-bottom: 20px;

      .edit,
      .edit2 {
        color: var(--third-color);
      }
    }

    .info {
      .links {
        text-align: left;

        li {
          margin-bottom: 10px;

          a {
            color: var(--third-color);
            text-transform: uppercase;
            font-size: 14px;

            span {
              transition: var(--main-transition);
            }
          }

          a:hover {
            span {
              text-decoration: underline;
            }
          }
        }
      }
    }
  }

  .footer-img {
    position: relative;
    width: 110%;
    height: 100%;
    overflow: hidden;

    .img-box {
      width: 100%;

      img {
        width: 100%;
        height: 300px;
        object-fit: cover;
      }

      &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #1119;
      }

    }

    .info-box {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;

      .label {
        margin-bottom: 10px;
      }

      p {
        color: var(--third-color);
        font-size: 14px;
        width: 80%;
        text-align: center;
      }

      form {
        display: flex;
        align-items: center;
        justify-content: center;

        input {
          outline: none;
          border: none;
          padding: 10px;
          width: 250px;
          height: 40px;
          font-size: 14px;
        }

        button {
          outline: none;
          border: none;
          height: 40px;
          padding: 10px;
          font-size: 14px;
          background: var(--secound-color);
          color: var(--third-color);
          transition: var(--main-transition);
        }

        button:hover {
          background: var(--main-color);
        }
      }
    }
  }

  .label {
    font-family: var(--main-font);
    font-size: 20px;
    margin: 0;
    color: var(--main-color);
    text-transform: uppercase;
  }
}

.copy {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 30px;
  background-color: var(--main-color);

  .text {
    color: var(--third-color);
  }
}

@media (max-width: 991px) {
  .footer {
    padding: 25px;
  }

  .copy {
    margin-bottom: 55px;
  }
}

@media (max-width: 690px) {

  .footer {
    padding: 30px;

    .contactUs {
      .head {
        cursor: pointer;

        .icon {
          transform: rotate(0deg);
          transition: var(--main-transition);

          .edit {
            display: block !important;
          }
        }
      }

      .info {
        height: 0px;
        overflow: hidden;
        transition: var(--main-transition);

        ul {
          li {
            margin-bottom: 8px;
            color: var(--third-color);
            font-size: 14px;

            span {
              color: #ccc;
            }
          }
        }
      }

      .social-media {
        ul {
          justify-content: flex-start;

          li {
            margin-right: 20px;

            a {
              display: flex;
              align-items: center;
              justify-content: center;
              background-color: var(--third-color);
              border-radius: 50%;
              width: 40px;
              height: 40px;
              transition: var(--main-transition);

              .edit {
                color: var(--secound-color);
                transition: var(--main-transition);
              }
            }

            a:hover {
              background-color: var(--main-color);
            }
          }
        }
      }
    }

    .categoires {
      .head {
        .icon {
          transform: rotate(0deg);
          transition: var(--main-transition);

          .edit {
            display: block !important;
          }
        }
      }

      .info {
        height: 0px;
        overflow: hidden;
        transition: var(--main-transition);

      }
    }

    .information {

      .head {
        .icon {
          transform: rotate(0deg);
          transition: var(--main-transition);

          .edit {
            display: block !important;
          }
        }
      }

      .info {
        height: 0px;
        overflow: hidden;
        transition: var(--main-transition);

      }
    }

    .service {

      .head {
        .icon {
          transform: rotate(0deg);
          transition: var(--main-transition);

          .edit {
            display: block !important;
          }
        }
      }

      .info {
        height: 0px;
        overflow: hidden;
        transition: var(--main-transition);
      }
    }

    .footer-img {
      position: relative;
      width: 100%;
      height: 100%;
      overflow: hidden;

      .img-box {
        width: 100%;

        img {
          width: 100%;
          height: 300px;
          object-fit: cover;
        }
      }

      .img-box::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #1119;
      }

      .info-box {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        .label {
          margin-bottom: 10px;
        }

        p {
          color: var(--third-color);
          font-size: 14px;
          width: 80%;
          text-align: left;
        }

        form {
          display: flex;
          align-items: center;
          justify-content: center;

          input {
            outline: none;
            border: none;
            padding: 10px;
            width: 250px;
            height: 40px;
            font-size: 14px;
          }

          button {
            outline: none;
            border: none;
            height: 40px;
            padding: 10px;
            font-size: 14px;
            background: var(--secound-color);
            color: var(--third-color);
            transition: var(--main-transition);
          }

          button:hover {
            background: var(--main-color);
          }
        }
      }
    }

    .open {
      height: 200px !important;
      margin-bottom: 20px !important;
    }


  }

  .copy {
    justify-content: center;
    flex-direction: column;
    padding: 5px 30px;
    margin-bottom: 55px;

    .text {
      margin-bottom: 10px;
    }

    img {
      width: 89%;
    }
  }

  .ph {
    transform: rotate(90deg) !important;
  }

}
</style>
