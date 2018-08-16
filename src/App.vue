<template>
  <div id="app">
    <NavLeft/>
    <Body/>
    <NavRight/>
  </div>
</template>

<script>
import NavLeft from '@/components/Nav-left';
import Body from '@/components/Body';
import NavRight from '@/components/Nav-right';

export default {
    name: 'App',
    components: {
        NavLeft,
        Body,
        NavRight
    }
};
</script>

<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    display: flex;
}
</style>
