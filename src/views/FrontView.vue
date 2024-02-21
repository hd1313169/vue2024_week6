<template>
  <h2>這是前台</h2>
  <RouterLink to="/">Home</RouterLink> |
  <RouterLink to="/about">About</RouterLink> |
  <RouterLink to="/products">產品列表</RouterLink> |
  <RouterLink to="/cart">購物車</RouterLink> |
  <RouterLink to="/admin/products">後台</RouterLink>

  <router-view></router-view>
</template>
