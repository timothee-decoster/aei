<template>
    <div class="nav-right">
        <img src="@/assets/univ_logo.png" alt="Logo de l'Université" width="100%">
        <ul>
            <router-link v-for="lvl in section" :key="lvl" :to="`${lvl.path}`" tag="li">
                {{ lvl.name }}
            </router-link>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'NavRight',
    data() {
        return {
            section: [
                { path: '/', name: 'Accueil' },
                { path: '/L1', name: 'Licence 1' },
                { path: '/L2', name: 'Licence 2' },
                { path: '/L3', name: 'Licence 3' },
                { path: '/M1', name: 'Master 1' },
                { path: '/M2', name: 'Master 2' }
            ]
        };
    }
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
ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
    list-style: none;
    padding: 0;
}
li {
    background-color: rgb(255, 255, 255);
    font-size: 3vh;
    cursor: pointer;
    margin: 0.1vh 0 0 0;
}
</style>
