<template>
  <h2>登入頁面</h2>
  <div class="container">
    <div class="row justify-content-center">
      <h1 class="h3 mb-3 font-weight-normal">請先登入</h1>
      <div class="col-8">
        <form @submit.prevent="login()" id="form" class="form-signin">
          <div class="form-floating mb-3">
            <input
              v-model="user.username"
              type="email"
              class="form-control"
              id="username"
              placeholder="name@example.com"
              required
              autofocus
            />
            <label for="username">Email address</label>
          </div>
          <div class="form-floating">
            <input
              v-model="user.password"
              type="password"
              class="form-control"
              id="password"
              placeholder="Password"
              required
            />
            <label for="password">Password</label>
          </div>
          <button class="btn btn-lg btn-primary w-100 mt-3" type="submit">
            登入
          </button>
        </form>
      </div>
    </div>
    <p class="mt-5 mb-3 text-muted">&copy; 2021~∞ - 六角學院</p>
  </div>
</template>

<script>
import axios from 'axios'

const { VITE_URL } = import.meta.env

export default {
  data () {
    return {
      user: {
        username: '',
        password: ''
      }
    }
  },

  methods: {
    login () {
      //   1. 抓登入 api
      //   2. post api、帳號、密碼到資料庫
      //   3. 取得cookie
      //   4. 跳轉到後台
      const api = `${VITE_URL}/v2/admin/signin`
      axios
        .post(api, this.user)
        .then((res) => {
          const { token, expired } = res.data // 解構賦值
          document.cookie = `hexToken=${token}; expires=${new Date(
            expired
          )}; path=/`
          this.$router.push('/admin/products')
        })
        .catch((err) => {
          alert(err.response.data.message)
        })
    }
  }
}
</script>
