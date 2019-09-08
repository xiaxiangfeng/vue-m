<template>
  <div class="hello">
    <h2>Essential Links1</h2>
    <h3>{{ name }}</h3>
    <button @click="showName('1df')">showName</button>
    <div class="postcss">测试</div>
  </div>
</template>

<script>
import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class Hello extends Vue {
  msg = 'Welcome to Your PWA'

  get name () {
    return this.$store.state.home.name
  }

  showName (param) {
    this.$store.dispatch('showName', param)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src='./hello.postcss'>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #35495E;
}

.test {
  width: 100px;
  height: 50px;
  background-color:antiquewhite;
}
</style>
