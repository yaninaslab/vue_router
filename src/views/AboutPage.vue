<template>
    <div>
<page-header></page-header>
<h1>I AM ABOUT</h1>
<h2>{{ username }}</h2>
    </div>
</template>

<script>
import PageHeader from '@/components/PageHeader.vue'
    export default {
        name: "about-page",
        components: {
            PageHeader,
        },
        data() {
            return {
                username: this.$route.params.username
            }
        },
    }
</script>

<style scoped>
div {
    display: grid;
    place-items: center;
    width: 100%;
    min-height: 100vh;
}
</style>