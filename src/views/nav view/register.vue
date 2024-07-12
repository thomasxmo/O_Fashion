<template>
  <div class="registerView">
    <div class="container">
      <div class="row">
        <div class="col-12 content">
          <h1>Create Account</h1>
          <form action="">
            <div class="inputs centerColumn">
              <inputForm type="text" id="password" placeholder="First Name" vModel="fn" width="100%" />
              <inputForm type="text" id="password" placeholder="Last Name" vModel="ln" width="100%" />
              <inputForm type="email" id="email" placeholder="Email" vModel="Email" width="100%" />
              <inputPasswordForm type="password" id="password" placeholder="Password" vModel="password" width="100%" />
              <p>Sign up for early Sale access plus tailored new arrivals, trends and promotions. To opt out, click
                unsubscribe in our emails.</p>
              <div class="buttons">
                <mostButton btnText="register" fontSize="14" padding="15px 25px" />
                <button class="btn2">sign in</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import mostButton from '@/components/global/buttons/mostButton.vue';
import inputForm from '@/components/global/inputs/input.vue';
import inputPasswordForm from '@/components/global/inputs/inputPassword.vue';


export default {
  name: "registerView",
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
    inputForm,
    inputPasswordForm,
    mostButton
  },
  methods: {
  },
  mounted() {
  },
};

</script>

<style lang="scss">
.registerView {
  margin-bottom: 20px;

  .content {
    h1 {
      color: var(--secound-color);
    }

    p {
      width: 100%;
      color: var(--font-color);
      text-align: left;
    }

    form{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    }

    .inputs {
      width: 50%;
    }

    .buttons {
      width: 100%;

      .btn2 {
        width: 100%;
        margin-top: 15px;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: var(--third-color);
        color: var(--secound-color);
        cursor: pointer;
        outline: none;
        border: 1px solid var(--font-color) !important;
        height: 100%;
        overflow: hidden;
        padding: 15px 25px;
        text-transform: uppercase;
        font-weight: 500;
        letter-spacing: 0.1em;
        transition: var(--main-transition);
      }

      .btn2:hover {
        background-color: var(--main-color);
        color: var(--third-color);
        border: 1px solid var(--main-color) !important;
      }
    }

    .errors-list {
      text-align: left !important;
      width: 100%;
      margin-bottom: 15px;
    }
  }
}

@media (max-width: 770px) {
  .registerView {
    .inputs {
      width: 80% !important;
    }
  }
}

@media (max-width: 579px) {
  .registerView {
    .inputs {
      width: 100% !important;
    }
  }
}
</style>