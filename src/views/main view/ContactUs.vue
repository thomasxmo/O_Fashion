<template>
  <div class="ContactUs">
    <pageHeader name="Contact Us" />
    <div class="google-map">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19538.078817461166!2d30.992801834588548!3d30.04038625504383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14585ba0263118cf%3A0xc58e189c21cc4eeb!2sZED%20Park!5e0!3m2!1sar!2seg!4v1714334389110!5m2!1sar!2seg"
        width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
    <div class="container-fluid p-3">
      <div class="row">
        <div class="col-12 col-sm-12 col-md-8 col-lg-8">
          <div class="getInTouch">
            <h2>Get In Touch</h2>
            <form action="">
              <div class="inputs">
                <div class="group">
                  <label for="">Name</label>
                  <input type="text" placeholder="your Name">
                </div>
                <div class="group">
                  <label for="">Email</label>
                  <input type="email" placeholder="your Email">
                </div>
                <div class="group">
                  <label for="">Phone</label>
                  <input type="tel" placeholder="your Phone">
                </div>
              </div>
              <div class="group">
                <label for="">Message</label>
                <textarea placeholder="your Message" cols="30" rows="10"></textarea>
              </div>
              <div class="button">
                <mostButton btnText="Send Message" fontSize="14" />
              </div>
            </form>
          </div>
        </div>
        <div class="col-12 col-sm-12 col-md-4 col-lg-4">
          <div class="info">
            <ul class="m-0 p-0">
              <li>
                <h6>Address</h6>
                <p>4 Copley Place, 7th Floor, Boston,MA 6</p>
                <span></span>
              </li>
              <li>
                <h6>Phone</h6>
                <p>+201017061753</p>
                <span></span>
              </li>
              <li>
                <h6>Email</h6>
                <p>support@oFashon.com</p>
                <span></span>
              </li>
              <li>
                <h6>Opening Time</h6>
                <p>8:00Am – 10:00Pm, Sunday Close</p>
                <span></span>
              </li>
              <li>
                <h6>Fax</h6>
                <p>0123456789</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import pageHeader from "@/components/global/pageHeader.vue"
import mostButton from "@/components/global/buttons/mostButton.vue"
export default {
  name: "ContactUsView",
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
    pageHeader,
    mostButton
  },
  methods: {
  },
  mounted() {
  },
};
</script>

<style lang="scss">
.ContactUs {
  margin-bottom: 30px;

  .getInTouch {
    margin-top: 30px;

    h2 {
      text-align: left;
      margin-bottom: 25px;
      padding-left: 20px;
      color: var(--main-color);
      font-family: var(--main-font);
      font-weight: bold;
    }

    form {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;

      .inputs {
        width: 100%;
        margin-bottom: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: row;

        .group {
          display: flex;
          align-items: flex-start;
          justify-content: center;
          flex-direction: column;
          width: 30%;


          label {
            margin-bottom: 8px;
            font-size: 14px;
            color: var(--secound-color);
          }

          input {
            position: relative;
            width: 100%;
            padding: 14px 20px;
            outline: none;
            border: 1px solid #c5c5c5;
            color: var(--secound-color);
            font-size: 13px;
          }
        }

        .group:not(:last-of-type) {
          margin-right: 20px;
        }
      }

      .group {
        display: flex;
        align-items: flex-start;
        justify-content: center;
        flex-direction: column;
        width: calc(100% - 40px);

        label {
          margin-bottom: 10px;
          font-size: 14px;
          color: var(--secound-color);
          font-weight: bold;
        }

        textarea {
          width: 100%;
          padding: 16px 20px;
          outline: none;
          border: 1px solid #c5c5c5;
          color: var(--secound-color);
          font-size: 13px;
          resize: none;
          margin-bottom: 30px;
        }
      }

      .button {
        width: calc(100% - 40px);
        display: flex;
        align-items: center;
        justify-content: flex-start;
      }
    }
  }

  .info {
    margin-top: 30px;

    ul {
      padding: 10px 20px !important;
      align-items: flex-start;
      justify-content: center;
      flex-direction: column;

      li {
        display: flex;
        align-items: flex-start;
        justify-content: center;
        flex-direction: column;

        h6 {
          font-size: 20px;
          font-weight: 600;
          color: var(--main-color);
          font-family: var(--main-font);
        }

        p {
          font-size: 14px;
          font-weight: 400;
          color: var(--secound-color);
        }

        span {
          width: 100%;
          height: 1px;
          background-color: #cbcbcb;
          margin: 10px 0;
        }
      }
    }
  }
}

@media (max-width: 590px) {
  .ContactUs {
    .getInTouch {
      form {
        .inputs {
          align-items: flex-start;
          flex-direction: column;

          .group {
            width: 100%;
            margin-top: 20px;
          }
        }

        .group {
          width: 100%;
        }

        .button {
          width: 100%;
        }
      }

      h2 {

        padding-left: 0px;
      }
    }
    .info{
      margin-top: 50px;
      ul{
        padding: 0 !important;
      }
    }
  }
}
</style>