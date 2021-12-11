<template>
    <header>
        <router-link to="/">Home</router-link>
        <p @click="go_to_about">About</p>
        <router-link to="/brewery">Brewery</router-link>
    </header>
</template>

<script>
    export default {
        name: "page-header",
        methods: {
            go_to_about() {
                this.$router.push({
                    name: 'AboutPage',
                    params: {
                        username: "Alex"
                    }
                });
            }
        },
    }
</script>

<style scoped>
header {
    text-align: center;
    font-weight: bold;
    position: fixed;
    width: 100%;
    height: 7.5vh;
    background: orange;
    top: 0;
    left: 0;
}
</style>