<template>
  <h2>這是後台</h2>
  <RouterLink to="/admin/products">產品管理</RouterLink> |
  <RouterLink to="/admin/order">訂單管理</RouterLink> |
  <RouterLink to="/">回到前台</RouterLink>

  <router-view></router-view>
</template>
