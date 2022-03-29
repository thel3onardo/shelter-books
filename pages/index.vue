<template>
    <div class="h-screen w-full bg-gray-900 flex flex-col justify-center items-center">
        <TheHeader />
        <div class="text-white w-52 my-8">
            <img src="~/assets/images/book.svg" class="w-full" v-once>
        </div>
        <LazyHomeSearch />
    </div>
</template>
<script>
export default {
    name: 'Home',
}
</script>