<template>
  <label class="switch" @click="handleButtonSwitch()">
    <span class="switch__slider active"></span>
    <span class="sun">
      <div class="crescent"></div>
    </span>
  </label>
</template>

<script>
export default {};
</script>

<style scoped>
.switch {
  position: relative;
  display: inline-block;
  width: 50px;
  height: 15px;
}

.switch__slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 20px;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  border-radius: 34px;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.switch__slider::before {
  position: absolute;
  content: "";
  height: 10px;
  width: 10px;
  left: 3px;
  top: 50%;
  transform: translateY(-50%);
  background: #ff0080;
  background: linear-gradient(40deg, #ff0080, #ff8c00 70%);
  border-radius: 50%;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.switch__slider.active + .sun {
  background: #8983f7;
  background: linear-gradient(40deg, #8983f7, #a3dafb 70%);
}

.switch__slider.active + .sun > .crescent {
  transform: scale(1);
  background: var(--bg);
}

.switch__slider.active::before {
  -webkit-transform: translate(10px, -50%);
  -ms-transform: translate(10px, -50%);
  transform: translate(10px, -50%);
  background: #8983f7;
  background: linear-gradient(40deg, #8983f7, #a3dafb 70%);
}

.sun {
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  border-radius: 100%;
  width: 15px;
  height: 15px;
  background: #ff0080;
  background: linear-gradient(40deg, #ff0080, #ff8c00 70%);
  margin: auto;
}

.crescent {
  position: absolute;
  right: 0;
  border-radius: 100%;
  width: 11px;
  height: 11px;
  background: white;
  transform: scale(0);
  transform-origin: top right;
  transition: transform 0.6s cubic-bezier(0.645, 0.045, 0.355, 1);
}
</style>

