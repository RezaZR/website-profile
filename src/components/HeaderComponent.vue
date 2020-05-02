<template>
  <header class="header">
    <ul>
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li>
        <router-link to="/">Portfolio</router-link>
      </li>
      <li>
        <router-link to="/">Stories</router-link>
      </li>
      <li>
        <router-link to="/">Info</router-link>
      </li>
      <li>
        <SwitchComponent />
      </li>
    </ul>
  </header>
</template>

<script>
import SwitchComponent from "@/components/SwitchComponent";

export default {
  name: "header_component",
  components: {
    SwitchComponent
  }
};
</script>

<style scoped>
.header {
  width: 100%;
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  padding: 1em;
}

.header > ul {
  width: 100%;
  display: block;
  text-align: right;
}

.header > ul > li {
  display: inline-block;
  font-size: var(--font-xxl);
}

.header > ul > li:not(:last-child) {
  padding-right: 0.75em;
}

.header > ul > li > a {
  color: black;
  padding: 0.5em;
}
</style>
