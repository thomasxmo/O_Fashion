<template>
  <div class="scrollToTop">
    <div class="circel p-0 m-0">
      <div class="circular-progress p-0 m-0"></div>
      <div class="icon">
        <i class="edit fa-solid fa-arrow-up"></i>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "scrollToTop",
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
  },
  methods: {
    circal() {
      let scroller = document.querySelector(".scrollToTop");
      window.addEventListener("scroll", () => {
        if (window.scrollY >= 500) {
          scroller.classList.add("show");
        } else {
          scroller.classList.remove("show");
        }
      });
      scroller.onclick = function () {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      };
    },
    updateProgressIndicator() {
      const { documentElement, body } = document;
      const windowScroll = body.scrollTop || documentElement.scrollTop;
      const height = documentElement.scrollHeight - documentElement.clientHeight;
      const progress = (windowScroll / height) * 100;
      let circularprogress = document.querySelector(".circular-progress");
      circularprogress.style.background = `conic-gradient(var(--secound-color) ${progress * 3.6}deg, rgba(226, 226, 226, 0.383) 0deg)`;
    },
  },
  mounted() {
    this.circal();
    window.addEventListener("scroll", this.updateProgressIndicator);
  },
};

</script>

<style lang="scss">
.scrollToTop {
  position: fixed;
  bottom: 20px;
  right: 20px;
  cursor: pointer;
  z-index: 99;
  opacity: 0;
  transition: var(--main-transition);

  .circel {
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 1s;

    .circular-progress {
      position: relative;
      height: 45px;
      width: 45px;
      border-radius: 50%;
      background: conic-gradient(var(--secound-color) 0deg, rgba(95, 95, 95, 0.383) 0deg);
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .circular-progress::before {
      content: "";
      position: absolute;
      height: 38px;
      width: 38px;
      border-radius: 50%;
      background-color: var(--third-color);
      transition: all 1s;
      margin: 0;
      padding: 0;
      top: 50%;
      left: 50%;
      transform: translate(-51%, -51%);
      transition: var(--main-transition);
    }

    .icon {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);

      .edit {
        font-size: 18px;
        color: var(--secound-color);
      }
    }
  }

  .circel:hover .circular-progress::before {
    background-color: var(--main-color);
  }

  .circel:hover .icon {
    .edit {
      color: var(--third-color);
    }
  }

  .circel:hover .circular-progress {
    background: conic-gradient(var(--secound-color) 0deg, #FFF 0deg);
  }
}

.scrollToTop.show {
  opacity: 1;
}


@media (max-width: 579px) {
  .scrollToTop {
    bottom: 60px;
    right: 8px;
  }
}
</style>