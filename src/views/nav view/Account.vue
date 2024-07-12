<template>
  <div class="Account">
    <div class="row">
      <pageHeader name="Account" />
    </div>
    <div class="container">
      <div class="row content mt-5 mb-5">
        <div class="col-12 col-sm-12 col-md-6 col-lg-6 login">
          <div class="login-box" :class="{ active: activeResetPassword }">
            <h5>Sign in</h5>
            <p>If you have an account with us, please log in.</p>
            <form action="" method="" @submit.prevent='validateForm()'>
              <div class="inputs">
                <input type="email" id="email" placeholder="Email" v-model="email">
                <div class="password">
                  <input type="password" placeholder="Password" v-model="password" id="password" >
                  <div class="logo" @click="showHidePassword = !showHidePassword, showHidePasswordMethod()"
                    :class="{ active: showHidePassword }">
                    <i class="edit fa-solid fa-eye"></i>
                  </div>
                </div>
              </div>
              <div class="button">
                <button :disabled="!email || !password">Sign in</button>
                <span @click="activeResetPassword = !activeResetPassword">Forgot your password?</span>
              </div>
            </form>
          </div>
          <div class="resetPassword" :class="{ active: !activeResetPassword }">
            <h5>Reset your password</h5>
            <p>We will send you an email to reset your password.</p>
            <form action="" @submit.prevent='validateForm()'>
              <input type="email" placeholder="Email" v-model="email2">
              <div class="button">
                <button :disabled="!email2">sumbit</button>
                <span @click="activeResetPassword = !activeResetPassword">cancel</span>
              </div>
            </form>
          </div>
        </div>
        <div class="col-12 col-sm-12 col-md-6 col-lg-6 register">
          <div class="register-box">
            <h3>New customer?</h3>
            <p>Sign up for early Sale access plus tailored new arrivals, trends and promotions. To opt out, click
              unsubscribe in our emails.</p>
            <router-link to="/Account/register">
              <button>Register</button>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import pageHeader from '@/components/global/pageHeader.vue';
//action="send.html" method="post"
export default {
  name: "AccountView",
  data: () => {
    return {
      activeResetPassword: true,
      showHidePassword: false,
      email: null,
      email2: null,
      password: null,
      formErrors: [
        {
          class: "low",
          text: "A lowercase letter"
        },
        {
          class: "upp",
          text: "A uppercase letter"
        },
        {
          class: "num",
          text: "A number"
        },
        {
          class: "min",
          text: "Minimum 8 characters"
        },
      ],
    }
  },
  components: {
    pageHeader
  },
  methods: {
    showHidePasswordMethod() {
      var input = document.querySelector(".login-box .inputs .password input");
      if (this.showHidePassword == true) {
        input.setAttribute("type", "text");
      }
      if (this.showHidePassword == false) {
        input.setAttribute("type", "password");
      }
    },
    validateForm() {
      var emailval = document.querySelector('#email').value;
      var reg = emailval.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/g);
      if (reg) {
        true
      } else {
        false
      }
    },
    // password validation
    passwordValidation(e) {
      e.currentTarget
      var errorsList = document.querySelector(".login-box form .errors-list");
      var low = document.querySelector(".login-box form .errors-list .low");
      var upp = document.querySelector(".login-box form .errors-list .upp");
      var num = document.querySelector(".login-box form .errors-list .num");
      var min = document.querySelector(".login-box form .errors-list .min");
      var passwordVal = document.querySelector('#password').value;
      errorsList.classList.add("active");

      // Validate lowercase letters
      var lowerCaseLetters = /[a-z]/g;
      if (passwordVal.match(lowerCaseLetters)) {
        low.classList.remove("invalid");
        low.classList.add("valid");
      } else {
        low.classList.remove("valid");
        low.classList.add("invalid");
      }

      // Validate capital letters
      var upperCaseLetters = /[A-Z]/g;
      if (passwordVal.match(upperCaseLetters)) {
        upp.classList.remove("invalid");
        upp.classList.add("valid");
      } else {
        upp.classList.remove("valid");
        upp.classList.add("invalid");
      }

      // Validate numbers
      var numbers = /[0-9]/g;
      if (passwordVal.match(numbers)) {
        num.classList.remove("invalid");
        num.classList.add("valid");
      } else {
        num.classList.remove("valid");
        num.classList.add("invalid");
      }

      // Validate length
      if (passwordVal.length >= 8) {
        min.classList.remove("invalid");
        min.classList.add("valid");
      } else {
        min.classList.remove("valid");
        min.classList.add("invalid");
      }

    },
    onblur() {
      var errorsList = document.querySelector(".login-box form .errors-list");
      errorsList.classList.remove("active");
    }
  },
  mounted() {
  }
};
</script>

<style lang="scss">
.Account {
  .content {
    .login {
      display: flex;
      align-items: flex-end;
      justify-content: center;
      flex-direction: column;
      text-align: left;

      .login-box {
        display: none;
        padding: 20px 40px;
        width: 90%;
        height: 100%;

        h5 {
          color: var(--main-color);
          font-size: 24px;
        }

        p {
          color: var(--font-color);
          font-size: 14px;
        }

        form {
          .inputs {
            input {
              position: relative;
              width: 100%;
              padding: 14px 20px;
              outline: none;
              border: 1px solid #c5c5c5;
              color: var(--secound-color);
              font-size: 13px;
              margin-bottom: 15px
            }

            input::placeholder {
              font-size: 13px;
              color: var(--font-color);
            }

            .password {
              display: flex;
              align-items: center;
              justify-content: center;

              input {
                width: 90%;
                height: 45px;
                outline: none;
                font-size: 13px;
                color: var(--secound-color);
                border: 1px solid #c5c5c5;
                border-right: none !important;
                background-color: #FFF;
                transition: var(--main-transition);
                padding: 0px 20px;
              }

              input::placeholder {
                font-size: 13px;
                color: var(--font-color);
              }

              .logo {
                position: relative;
                display: flex;
                align-items: center;
                justify-content: center;
                height: 45px;
                outline: none;
                border: 1px solid #c5c5c5;
                border-left: none;
                background-color: #FFF;
                padding: 10px;
                transition: background-color var(--main-transition);
                margin-bottom: 15px;
                cursor: pointer;

                .edit {
                  color: var(--font-color);
                  transition: color var(--main-transition);
                }
              }

              .logo:hover {
                .edit {
                  color: var(--main-color);
                }
              }

              .logo.active {
                .edit {
                  color: var(--main-color);
                }
              }

              .logo::before {
                content: "";
                position: absolute;
                left: 1px;
                width: 1px;
                height: 27px;
                background-color: #c5c5c5;
              }

              .logo.active::after {
                content: "";
                position: absolute;
                left: 50%;
                transform: rotate(-45deg);
                width: 2px;
                height: 25px;
                background-color: var(--font-color);
                transition: var(--main-transition);
              }

              .logo.active::after {
                background-color: var(--main-color);
              }

              .logo.active:hover::after {
                background-color: var(--main-color);
              }
            }
          }

          .errors-list {
            display: block;
            height: 0;
            opacity: 0;
            overflow: hidden;
            transition: height var(--main-transition);

            ul {
              padding: 0 10px !important;

              li {
                font-size: 14px;
                color: #ff0000;
                margin-bottom: 7px;
                display: flex;
                align-items: center;
                justify-content: flex-start;

                .edit {
                  margin-right: 7px;
                }
              }
            }

            &.active {
              opacity: 1;
              height: 110px;

              ul {
                li.valid {
                  color: #02c802;

                  .check {
                    display: block;
                  }

                  .xmark {
                    display: none;
                  }
                }

                li.invalid {
                  color: #ff0000;

                  .check {
                    display: none;
                  }

                  .xmark {
                    display: block;
                  }
                }
              }
            }
          }
          
          .button {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin: 20px 0;

            button {
              outline: none;
              border: none;
              background-color: var(--secound-color);
              color: var(--third-color);
              padding: 12px 40px;
              text-transform: uppercase;
              font-weight: 500;
              letter-spacing: 0.1em;
              font-size: 14px;
              transition: var(--main-transition);

              &:disabled {
                opacity: 0.8;
                cursor: no-drop;
              }
            }

            button:hover {
              background-color: var(--main-color);
            }

            span {
              font-size: 14px;
              color: var(--font-color);
              cursor: pointer;
              transition: var(--main-transition);
            }

            span:hover {
              color: var(--main-color);
            }
          }
        }
      }

      .login-box.active {
        display: block;
      }

      .resetPassword {
        padding: 20px 40px;
        width: 90%;
        display: none;
        height: 300px;

        h5 {
          color: var(--main-color);
          font-size: 20px;
        }

        p {
          color: var(--font-color);
          font-size: 14px;
        }

        form {
          input {
            position: relative;
            width: 100%;
            padding: 14px 20px;
            outline: none;
            border: 1px solid #c5c5c5;
            color: var(--secound-color);
            font-size: 13px;
            margin-bottom: 10px
          }

          input::placeholder {
            font-size: 13px;
            color: var(--font-color);
          }

          .button {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            margin: 10px 0;

            button {
              outline: none;
              border: none;
              background-color: var(--secound-color);
              color: var(--third-color);
              padding: 12px 40px;
              text-transform: uppercase;
              font-weight: 500;
              letter-spacing: 0.1em;
              font-size: 14px;
              transition: var(--main-transition);
              width: 100%;
              margin-bottom: 10px;

              &:disabled {
                opacity: 0.8;
                cursor: no-drop;
              }
            }

            button:hover {
              background-color: var(--main-color);
            }

            span {
              font-size: 14px;
              color: var(--font-color);
              cursor: pointer;
              transition: var(--main-transition);
            }

            span:hover {
              color: var(--main-color);
            }
          }
        }

      }

      .resetPassword.active {
        display: block;
      }

    }

    .register {
      display: flex;
      align-items: flex-start;
      justify-content: center;

      .register-box {
        text-align: left;
        padding: 10px 40px;
        height: 300px;

        h3 {
          color: var(--main-color);
          margin-bottom: 20px;
        }

        p {
          color: var(--font-color);
          font-size: 17px;
          font-weight: 450;
          margin-bottom: 20px;
        }

        button {
          outline: none;
          border: none;
          background-color: var(--secound-color);
          color: var(--third-color);
          padding: 12px 40px;
          text-transform: uppercase;
          font-weight: 500;
          letter-spacing: 0.1em;
          font-size: 14px;
          transition: var(--main-transition);
          width: 40%;
          margin-bottom: 10px;
        }

        button:hover {
          background-color: var(--main-color);
        }
      }
    }
  }
}

@media (max-width: 770px) {
  .Account {
    .login {

      .login-box {
        padding: 10px !important;
        width: 100% !important;
      }
    }

    .register {

      margin-top: 20px !important;

      .register-box {
        padding: 10px !important;
      }
    }
  }
}

@media (max-width: 579px) {
  .Account {
    .login {

      .login-box {
        padding: 10px !important;
        width: 100% !important;
      }
    }

    .register {

      margin-top: 20px !important;

      .register-box {
        padding: 10px !important;
      }
    }
  }
}
</style>