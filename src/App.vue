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
}
</style>
