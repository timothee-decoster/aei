<template>
    <div class="nav-left">
        <img src="@/assets/aei_logo.jpg" alt="logo de l'AEI" width="50%">
    </div>
</template>

<script>
export default {
    name: 'NavLeft'
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
    border-radius: 50%;
    margin-left: 25%
}
</style>
