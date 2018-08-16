<template>
    <div class="nav-right">
        <img src="@/assets/univ_logo.png" alt="Logo de l'Université" width="100%">
    </div>
</template>

<script>
export default {
    name: 'NavRight'
};
</script>

<style scoped>
.nav-right {
    display: flex;
    flex-direction: column;
    overflow: auto;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    width: 15%;
    height: auto;
    background-color: #cdcdcd;
}
</style>
