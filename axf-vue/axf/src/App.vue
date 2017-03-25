<template>
  <div id="app">
    <router-view>

    </router-view>
    <div class="footer">
      <router-link to="home" class="footer_li">
        <div>首页</div>
      </router-link>
      <router-link to="market" class="footer_li">
        <div>闪送超市</div>
      </router-link>
      <router-link to="cart" class="footer_li">
        <div>购物车</div>
      </router-link>
     <router-link to="mine" class="footer_li">
        <div>我的</div>
      </router-link>
    </div>   
  </div>
</template>

<script>
require("../static/reset.css");
export default {
  name: 'app'
}
</script>

