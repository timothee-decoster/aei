<template>
    <div class="nav-left">
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
    background-color: #333;
}
</style>
