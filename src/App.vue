<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <header>
    <div>
      <h1>페이지 이동 테스트</h1>
      <nav>
        <router-link to="/home"><b-button variant="success">home로 이동</b-button></router-link>
        <br>
        <router-link to="/testcomponent"><b-button variant="outline-primary">testcomponent로 이동</b-button></router-link>
        <br>
        <b-button @click="toggleDarkMode">DarkMode 토글</b-button>
      </nav>
      <br><br><br><br>
    </div>
  </header>
  <!-- router의 url에 따라 갱신되는 영역 -->
  <RouterView />

<div>
  <br><br><br><br><br>
</div>

</template>

<script>
import DarkMode from './darkmode.js';

export default {
  created() {
    this.$router.push('/home');
  },
  components: {
    
},
  methods: {
    toggleDarkMode() {
      if(document.body.classList.contains('dark-mode')) {
        DarkMode.disableDarkMode();
      }
      else {
        DarkMode.enableDarkMode();
      }
    }
  },
}
</script>

<style>

</style>