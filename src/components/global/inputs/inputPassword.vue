<template>
  <div class="inputPassword" :style="{ 'width': width }">
    <input :type="type" :placeholder="placeholder" :v-model="vModel" :id="id" @blur="onblur()"
      @keyup="passwordValidation($event)">
    <div class="logo" @click="showHidePassword = !showHidePassword, showHidePasswordMethod()"
      :class="{ active: showHidePassword }">
      <i class="edit fa-solid fa-eye"></i>
    </div>
  </div>
  <div class="errors-list">
    <ul class="m-0 p-0">
      <li class="error" v-for="error in formErrors" :key="error.id" :class="error.class">
        <i class="edit check fa-regular fa-circle-check"></i>
        <i class="edit xmark fa-regular fa-circle-xmark"></i>
        {{ error.text }}
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: "inputPassword",
  data() {
    return {
      showHidePassword: false,
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
  props: [
    "type",
    "id",
    "placeholder",
    "vModel",
    "width",
  ],
  components: {
  },
  methods: {
    showHidePasswordMethod() {
      var input = document.querySelector(".inputPassword input");
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
      var errorsList = document.querySelector(".errors-list");
      var low = document.querySelector(".errors-list .low");
      var upp = document.querySelector(".errors-list .upp");
      var num = document.querySelector(".errors-list .num");
      var min = document.querySelector(".errors-list .min");
      var passwordVal = document.querySelector('.inputPassword #password').value;
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
      var errorsList = document.querySelector(".errors-list");
      errorsList.classList.remove("active");
    }
  },
  mounted() {
  },
};

</script>

<style lang="scss">
.inputPassword {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;

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
    cursor: pointer;
    width: 10%;


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
</style>