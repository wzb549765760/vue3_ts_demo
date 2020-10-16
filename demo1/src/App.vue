<template>
<div id="nav">
  <van-tabbar route active-color="#07c160" inactive-color="#000">
    <van-tabbar-item icon="home-o" to="/">首页</van-tabbar-item>
    <van-tabbar-item icon="orders-o" to="/profile">课程页</van-tabbar-item>
    <van-tabbar-item icon="manager-o" to="/mine">个人中心</van-tabbar-item>
  </van-tabbar>
</div>
<router-view />
<!--
<router-view v-slot={Component}>
  <keep-alive>
    
  </keep-alive>
</router-view>
-->
</template>

<style lang="scss"></style>
