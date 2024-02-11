<template>
   <div>
    <!-- Navbar -->
    <nav class="navbar navbar-default navbar-fixed-top">
      <div class="container-fluid">
        <div class="navbar-header navbar-left">
          <router-link to="/home" class="btn btn-default">홈</router-link>
          <router-link to="/testcomponent" class="btn btn-default">Test Component</router-link>
        </div>
        <ul class="nav navbar-nav navbar-right">
          <li><a href="#" @click="toggleDarkMode">DarkMode 토글</a></li>
        </ul>
      </div>
    </nav>

    <!-- 구분선 -->
    <div class="separator"></div>

    <!-- Router View -->
    <div class="container" style="margin-top: 70px;">
      <router-view></router-view>
    </div>
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
  /* 네비게이션 바 배경색 */
  .navbar-default {
    background-color: rgb(218, 215, 255); /* 원하는 색상으로 설정 */
  }
  .dark-mode .navbar-default {
    background-color: rgb(33, 19, 36);
  }

  /* 기본 글자색 */
  .navbar-default .navbar-brand,
  .navbar-default .navbar-nav > li > a {  
    color: #333;
  }

  /* DarkMode 활성화 시 글자색 변경 */
  .dark-mode .navbar-default .navbar-brand,
  .dark-mode .navbar-default .navbar-nav > li > a { 
    color: #fff;
  }
  /* 구분선 스타일 */
  .separator {
    border-top: 5px solid #333; /* 기본 구분선 색상 */
  }

  /* DarkMode 활성화 시 구분선 색상 변경 */
  .dark-mode .separator {
    border-top-color: #fff; /* DarkMode 활성화 시 구분선 색상 */
  }

  /*버튼 스타일*/
  .btn {
  background-color: #333; /* 버튼의 기본 배경색 (밝은 색) */
  color: #fff; /* 버튼의 기본 글자색 (어두운 색) */
}

/* DarkMode 활성화 시 버튼 색상 변경 */
.dark-mode .btn {
  background-color: #fff; /* DarkMode 활성화 시 버튼의 배경색 변경 (어두운 색) */
  color: #333; /* DarkMode 활성화 시 버튼의 글자색 변경 (밝은 색) */
}
</style>