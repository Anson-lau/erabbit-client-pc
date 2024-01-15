<template>
    <div class="container">
        <nav>nav</nav>
        <header>header</header>
        <div class="main">
            <router-view></router-view>
        </div>
        <footer>footer</footer>
    </div>
</template>

<script>
export default {
  name: 'Layout',
  components: {},
  props: {}
}
</script>

<style lang="less" scoped>

</style>
