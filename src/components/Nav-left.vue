<template>
    <div class="nav-left">
        <img src="@/assets/aei_logo.jpg" alt="logo de l'AEI" @click="home">
    </div>
</template>

<script>
export default {
    name: 'NavLeft',
    methods: {
        home() {
            return this.$router.push('/');
        }
    }
};
</script>

<style scoped>
.nav-left {
    display: flex;
    flex-direction: column;
    overflow: auto;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    width: 20%;
    height: auto;
    background-color: #cdcdcd;
}
img {
    cursor: pointer;
    width: 50%;
    border-radius: 50%;
    margin-left: 25%;
}
</style>
