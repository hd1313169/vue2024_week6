<template>
  <h2>這是後台</h2>
  <RouterLink to="/admin/products">產品管理</RouterLink> |
  <RouterLink to="/admin/order">訂單管理</RouterLink> |
  <RouterLink to="/">回到前台</RouterLink>

  <router-view></router-view>
</template>

<script>
import axios from 'axios'

const { VITE_URL } = import.meta.env

export default {
  methods: {
    // 1. 檢查權限
    checkAdmin () {
      const url = `${VITE_URL}/v2/api/user/check`
      axios
        .post(url)
        .then(() => {})
        .catch((err) => {
          // 失敗就回到登入頁
          alert(err.response.data.message)
          this.$router.push('/login')
        })
    }
  },
  // 事件
  // 檢查權限
  mounted () {
    // 1. 取出token
    const token = document.cookie.replace(
      /(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,
      '$1'
    )
    axios.defaults.headers.common.Authorization = token

    // 2.檢查權限
    this.checkAdmin()
  }
}
</script>
