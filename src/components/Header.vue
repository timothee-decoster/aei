<template>
    <div class="header">
        <img class="fb" src="@/assets/fb.png" alt="facebook">
        <img class="discord" src="@/assets/discord.jpg" alt="discord">
    </div>
</template>

<script>
export default {
    name: 'Header'
};
</script>

<style scoped>
.header {
    display: flex;
    align-items: center;
    height: 5vh;
    border-bottom: #cdcdcd solid 0.1rem;
}
img {
    position: absolute;
    width: 4vh;
    border-radius: 150px;
    margin-left: 5px;
    cursor: pointer;
}
.fb {
    right: 6vh;
}
.discord {
    right: 1vh;
}
</style>
