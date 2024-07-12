<template>
  <div class="priceTrack">
    <div class="track-container">
      <div class="track" ref="_vpcTrack"></div>
      <div class="track-highlight" ref="trackHighlight"></div>
      <button class="track-btn track1 track" ref="track1"></button>
      <button class="track-btn track2 track" ref="track2"></button>
    </div>
    <div class="price-value">
      Price:
      <span class="range-value min" :data-min="`${minValue}`">USD{{ minValue }} </span>
      <span class="line"></span>
      <span class="range-value max" :data-max="`${maxValue}`">USD{{ maxValue }}</span>
    </div>
  </div>
</template>

<script>

export default {
  name: "priceTrack",
  data() {
    return {
      min: 10,
      max: 600,
      minValue: 10,
      maxValue: 600,
      step: 5,
      totalSteps: 0,
      percentPerStep: 1,
      trackWidth: null,
      isDragging: false,
      pos: {
        curTrack: null,
      },
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
    moveTrack(track, ev) {
      let percentInPx = this.getPercentInPx();

      let trackX = Math.round(
        this.$refs._vpcTrack.getBoundingClientRect().left
      );
      let clientX = ev.clientX;
      let moveDiff = clientX - trackX;

      let moveInPct = moveDiff / percentInPx;
      // console.log(moveInPct)

      if (moveInPct < 1 || moveInPct > 100) return;
      let value =
        Math.round(moveInPct / this.percentPerStep) * this.step + this.min;
      if (track === "track1") {
        if (value >= this.maxValue - this.step) return;
        this.minValue = value;
      }

      if (track === "track2") {
        if (value <= this.minValue + this.step) return;
        this.maxValue = value;
      }

      this.$refs[track].style.left = moveInPct + "%";
      this.setTrackHightlight();
    },
    mousedown(ev, track) {
      if (this.isDragging) return;
      this.isDragging = true;
      this.pos.curTrack = track;
    },

    touchstart(ev, track) {
      this.mousedown(ev, track);
    },

    mouseup(ev, track) {
      ev;
      track;
      if (!this.isDragging) return;
      this.isDragging = false;
    },

    touchend(ev, track) {
      this.mouseup(ev, track);
    },

    mousemove(ev, track) {
      if (!this.isDragging) return;
      this.moveTrack(track, ev);
    },

    touchmove(ev, track) {
      this.mousemove(ev.changedTouches[0], track);
    },

    valueToPercent(value) {
      return ((value - this.min) / this.step) * this.percentPerStep;
    },

    setTrackHightlight() {
      this.$refs.trackHighlight.style.left =
        this.valueToPercent(this.minValue) + "%";
      this.$refs.trackHighlight.style.width =
        this.valueToPercent(this.maxValue) -
        this.valueToPercent(this.minValue) +
        "%";
    },

    getPercentInPx() {
      let trackWidth = this.$refs._vpcTrack.offsetWidth;
      let oneStepInPx = trackWidth / this.totalSteps;
      // 1 percent in px
      let percentInPx = oneStepInPx / this.percentPerStep;

      return percentInPx;
    },

    setClickMove(ev) {
      let track1Left = this.$refs.track1.getBoundingClientRect().left;
      let track2Left = this.$refs.track2.getBoundingClientRect().left;
      // console.log('track1Left', track1Left)
      if (ev.clientX < track1Left) {
        this.moveTrack("track1", ev);
      } else if (ev.clientX - track1Left < track2Left - ev.clientX) {
        this.moveTrack("track1", ev);
      } else {
        this.moveTrack("track2", ev);
      }
    },
  },
  mounted() {
    // calc per step value
    this.totalSteps = (this.max - this.min) / this.step;

    // percent the track button to be moved on each step
    this.percentPerStep = 100 / this.totalSteps;
    // console.log('percentPerStep', this.percentPerStep)

    // set track1 initilal
    document.querySelector(".track1").style.left =
      this.valueToPercent(this.minValue) + "%";
    // track2 initial position
    document.querySelector(".track2").style.left =
      this.valueToPercent(this.maxValue) + "%";
    // set initila track highlight
    this.setTrackHightlight();

    var self = this;

    ["mouseup", "mousemove"].forEach((type) => {
      document.body.addEventListener(type, (ev) => {
        // ev.preventDefault();
        if (self.isDragging && self.pos.curTrack) {
          self[type](ev, self.pos.curTrack);
        }
      });
    });

    [
      "mousedown",
      "mouseup",
      "mousemove",
      "touchstart",
      "touchmove",
      "touchend",
    ].forEach((type) => {
      document.querySelector(".track1").addEventListener(type, (ev) => {
        ev.stopPropagation();
        self[type](ev, "track1");
      });

      document.querySelector(".track2").addEventListener(type, (ev) => {
        ev.stopPropagation();
        self[type](ev, "track2");
      });
    });

    // on track clik
    // determine direction based on click proximity
    // determine percent to move based on track.clientX - click.clientX
    document.querySelector(".track").addEventListener("click", function (ev) {
      ev.stopPropagation();
      self.setClickMove(ev);
    });

    document
      .querySelector(".track-highlight")
      .addEventListener("click", function (ev) {
        ev.stopPropagation();
        self.setClickMove(ev);
      });

  },
};

</script>

<style lang="scss">
.priceTrack {
  width: 100% !important;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .track-container {
    width: 93%;
    position: relative;
    cursor: pointer;
    height: 0.5rem;
    margin-bottom: 20px;

    .track,
    .track-highlight {
      display: block;
      position: absolute;
      width: 100%;
      height: 3px;
    }

    .track {
      background-color: #ddd;
    }

    .track-highlight {
      background-color: var(--main-color);
      z-index: 2;
    }

    .track-btn {
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      outline: none;
      cursor: pointer;
      display: block;
      position: absolute;
      z-index: 2;
      width: 15px;
      height: 15px;
      top: calc(-50% - 0.2rem);
      margin-left: -0.5rem;
      border: none;
      border-radius: 50%;
      background-color: var(--main-color);
      -ms-touch-action: pan-x;
      touch-action: pan-x;
      transition: box-shadow 0.3s ease-out, background-color 0.3s ease,
        -webkit-transform 0.3s ease-out;
      transition: transform 0.3s ease-out, box-shadow 0.3s ease-out,
        background-color 0.3s ease;
      transition: transform 0.3s ease-out, box-shadow 0.3s ease-out,
        background-color 0.3s ease, -webkit-transform 0.3s ease-out;
    }
  }

  .price-value {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    text-align: left;
    width: 100%;
    // color: var(--main-color);
    font-weight: bold;

    span {
      color: var(--secound-color);
    }

    .range-value.min {
      margin-left: 8px;
    }

    .line {
      display: block;
      margin: 0 6px;
      width: 12px;
      height: 2px;
      background-color: black;
    }
  }
}
</style>