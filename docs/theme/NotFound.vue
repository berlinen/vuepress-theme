<template>
  <div class="container notfound-page">
    <div class="content">
      <h1>抱歉!</h1>
      <p>{{ getMsg() }}</p>
      <router-link class="backto" to="/">回到首页.</router-link>
    </div>
  </div>
</template>

<script>
const msgs = [
  "您,跑丢了",
  '我们是怎么来到这里的?',
  "404",
  "Looks like we've got some broken links.",
  '请再次尝试您的请求或联系支持',
  "你寻找的页面不存在",
]

export default {
  methods: {
    getMsg() {
      return msgs[Math.floor(Math.random() * msgs.length)]
    },
  },
}
</script>

<style lang="stylus" scoped>
.notfound-page
  display: flex
  align-items: center
  justify-content: center
  height: 100vh
  text-align: center

.content
  display: flex
  align-items: center
  margin-bottom: 24px

  h1
    margin: 0
    font-size: 20px
    font-weight: 500

    &::after
      margin: 0 10px
      content: "·"

  p
    margin: 0
    margin-right: 10px
    font-size: 14px

  .backto
    font-size: 14px
    text-decoration: none
    color: #067df7
</style>
