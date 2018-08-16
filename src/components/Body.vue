<template>
    <div class="body">
        <router-view/>
    </div>
</template>

<script>
export default {
    name: 'Body'
};
</script>

<style scoped>
.body {
    display: flex;
    flex-direction: column;
    overflow: auto;
    position: fixed;
    top: 0;
    left: 20%;
    right: 15%;
    bottom: 0;
    width: 65%;
    height: auto;
    background-color: white;
}
</style>
