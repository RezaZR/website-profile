<template>
  <div class="home container">
    <div class="home__content" id="TypingText">
      <h3>Hello,</h3>
      <h1>Name's Reza</h1>
      <div class="home__content__contact">
        <a href="https://linkedin.com/RezaZR" target="blank">
          <LinkedInIcon />
        </a>
        <a href="https://github.com/RezaZR" target="blank">
          <GithubIcon />
        </a>
        <a href="https://medium.com/@rezazr" target="blank">
          <MediumIcon />
        </a>
      </div>
      <button class="button button--primary">Start a Project</button>
      <a href="https://">
        <button class="button button--black">See Portfolio</button>
      </a>
    </div>
  </div>
</template>

<script>
import LinkedInIcon from "@/assets/svgs/linked_in";
import GithubIcon from "@/assets/svgs/github";
import MediumIcon from "@/assets/svgs/medium";

export default {
  name: "Home",
  components: {
    LinkedInIcon,
    GithubIcon,
    MediumIcon
  },
  methods: {
    autoType(elementClass, typingSpeed) {
      let self = document.querySelector(elementClass);
      let cursorElement = document.createElement("div");
      cursorElement.style.right = "initial";
      cursorElement.style.left = 0;
      cursorElement.classList.add("cursor");

      self.insertBefore(cursorElement, self.children[0]);

      let cursor = self.querySelector(".cursor");

      let firstChild = self.getElementsByTagName("h3");
      let firstChildText = firstChild[0].textContent.trim().split("");
      let firstChildLength = firstChildText.length;
      firstChild[0].textContent = "|";

      let secondChild = self.getElementsByTagName("h1");
      let secondChildText = secondChild[0].textContent.trim().split("");
      let secondChildLength = secondChildText.length;
      secondChild[0].textContent = "";

      let temporaryString = "";

      setTimeout(() => {
        firstChild[0].style.opacity = 1;

        cursor.removeAttribute("style");
        firstChild[0].textContent = "";
        for (let i = 0; i < firstChildLength; i++) {
          setTimeout(() => {
            temporaryString += firstChildText[i];
            firstChild[0].textContent = temporaryString;
          }, i * typingSpeed);
        }

        setTimeout(() => {
          secondChild[0].style.opacity = 1;

          temporaryString = "";
          secondChild[0].textContent = "";
          for (let i = 0; i < secondChildLength; i++) {
            setTimeout(() => {
              temporaryString += secondChildText[i];
              secondChild[0].textContent = temporaryString;
            }, i * typingSpeed + 100);
          }
        }, typingSpeed * firstChildLength);
      }, 750);
    }
  },
  mounted() {
    this.autoType("#TypingText", 200);
  }
};
</script>

<style scoped>
@keyframes flash {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

.home {
  position: relative;
  width: 100%;
  min-height: 100%;
}

.home__content {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  color: var(--color-headings);
}

.home__content > h3 {
  opacity: 0;
}

.home__content > h3 {
  font-size: 32px;
  display: inline-block;
}

.home__content > h1 {
  font-size: 70px;
  letter-spacing: 0.25em;
}

.home__content__contact a {
  margin: 0.5em 0;
}

.home__content__contact a:not(:last-child) {
  margin-right: 0.75em;
}

.home__content__contact svg {
  width: 30px;
  display: inline-block;
}

.cursor {
  display: block;
  position: absolute;
  height: 100%;
  top: 0;
  right: -5px;
  width: 2px;
  background-color: var(--color);
  z-index: 1;
  animation: flash 0.5s none infinite alternate;
}
</style>
