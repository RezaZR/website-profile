<template>
  <div id="app">
    <HeaderComponent />
    <router-view></router-view>
  </div>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent";

import gql from "graphql-tag";

export default {
  name: "app",
  components: {
    HeaderComponent
  },
  data() {
    return {};
  },
  computed: {},
  apollo: {
    messages: {
      query: gql`
        query($where: MessageWhereInput) {
          messages(where: $where) {
            text
            isShown
          }
        }
      `,
      variables() {
        return {
          where: { isShown: true }
        };
      }
    }
  }
};
</script>

<style>
/* Root */

html {
  -webkit-text-size-adjust: 100%;
  text-size-adjust: 100%;
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);

  --bg: rgba(252, 252, 252, 1);
  --bg-panel: rgba(235, 235, 235, 1);

  --color: rgba(34, 34, 39, 1);
  --color-headings: rgba(255, 140, 0, 1);

  --font-xxs: 7px;
  --font-xs: 10px;
  --font-sm: 12px;
  --font-md: 14px;
  --font-lg: 16px;
  --font-xl: 18px;
  --font-xxl: 22px;
  --font-xxxl: 26px;
  --font-xxxxl: 32px;
}

body {
  width: 100%;
  height: 100%;
  background-color: var(--bg);
  margin: 0;
  padding: 0;
  /* font-family: $primary-font; */
  line-height: normal;
  letter-spacing: 0.05em;
  overflow-x: hidden;
  overscroll-behavior-y: none;
  text-rendering: optimizeSpeed;
  -webkit-font-smoothing: antialiased;
}

/* Element */

*,
*:before,
*:after {
  box-sizing: border-box;
}

a {
  background: transparent;
  text-decoration: none;
  cursor: pointer;
}

a:active,
a:hover,
a:link,
a:visited {
  background: transparent;
  text-decoration: none;
}

ul {
  margin: 0;
  padding: 0;
}

li {
  list-style-type: none;
}

p,
h1,
h2,
h3,
h4,
h5,
h6,
hr {
  -webkit-margin-before: 0;
  -webkit-margin-after: 0;
  margin-block-end: 0;
  margin-block-start: 0;
}

textarea {
  resize: vertical;
}

input,
select,
textarea {
  padding: unset;
  border: none;
  border-radius: 0;
}

input[type="date"] {
  /* font-family: $primary-font; */
}

button:focus,
input:focus,
textarea:focus,
select:focus {
  outline: none;
  box-shadow: unset;
}

label {
  margin: 0;
}

button {
  border: none;
  padding: unset;
  cursor: pointer;
}

span,
a {
  display: inline-block;
}

/* Global */

.clearfix {
  clear: both;
}

.opacity-0 {
  opacity: 0;
}

.overflow-hidden {
  overflow: hidden;
}

.overflow-x-hidden {
  overflow-x: hidden;
}

.overflow-y-auto {
  overflow-y: auto;
}

.w-100 {
  width: 100%;
}

.w-50 {
  width: 50%;
}

.text-right {
  text-align: right;
}

.text-center {
  text-align: center;
}

.text-truncate {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.capitalize {
  text-transform: capitalize;
}

.right {
  float: right;
}

.left {
  float: left;
}

/* .color-green {
  color: $green;
}

.color-yellow {
  color: $yellow;
}

.color-orange {
  color: $orange;
}

.color-red {
  color: $red;
} */

.font-sm {
  font-size: var(--font-sm);
}

.font-md {
  font-size: var(--font-md);
}

.font-lg {
  font-size: var(--font-lg);
}

.font-xl {
  font-size: var(--font-xl);
}

.pointer {
  cursor: pointer;
}

.box {
  padding: 1em;
  width: 100%;
  border-radius: 6px;
}

/* Layout */

.container {
  position: relative;
  width: 100%;
  margin: 0 auto;
  padding-left: 1em;
  padding-right: 1em;
}

.col-1,
.col-2,
.col-3,
.col-4,
.col-5,
.col-6,
.col-7,
.col-8,
.col-9,
.col-10,
.col-11,
.col-12 {
  position: relative;
  display: inline-block;
  width: 100%;
}

.col-1 {
  max-width: 8.333333%;
}

.col-2 {
  max-width: 16.666667%;
}

.col-3 {
  max-width: 25%;
}

.col-4 {
  max-width: 33.333333%;
}

.col-5 {
  max-width: 41.666667%;
}

.col-6 {
  max-width: 50%;
}

.col-7 {
  max-width: 58.333333%;
}

.col-8 {
  max-width: 66.666667%;
}

.col-9 {
  max-width: 75%;
}

.col-10 {
  max-width: 83.333333%;
}

.col-11 {
  max-width: 91.666667%;
}

.col-12 {
  max-width: 100%;
}

@media (min-width: 576px) {
  .container {
    max-width: 540px;
  }
}

@media (min-width: 768px) {
  .container {
    max-width: 720px;
  }
}

@media (min-width: 992px) {
  .container {
    max-width: 960px;
  }
}

@media (min-width: 1200px) {
  .container {
    max-width: 1140px;
  }
}
</style>
