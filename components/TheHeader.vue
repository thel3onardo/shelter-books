<template>
<div class="flex flex-col font-montserrat">
    <h1 class="text-5xl text-center text-white font-bold mb-8">shelterbooks</h1>
    <ul class="flex">
      <li v-for="item in navItems" :key="item.text" class="mx-8">
          <Nuxt-link :to="item.route" class="text-white font-body text-2xl">{{ item.text }}</Nuxt-link>
      </li>
    </ul>
</div>
</template>

<script>
export default {
    name: 'TheHeader',
    data () {
        return {
            navItems: [
                { route: '/', text: 'home' },
                { route: '/discover', text: 'discover' },
                { route: '/favourites', text: 'favourites' },
            ]   
        }
    }
}
</script>

<style lang="css" scoped>
    a.router-link-exact-active {
        color: #EA3737;
    }
</style>