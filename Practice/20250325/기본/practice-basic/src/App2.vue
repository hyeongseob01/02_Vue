<template>
    <div>
        <h2>관심있는 K-POP 가수?</h2>
        <hr>
        <ul>
            <CheckboxItem v-for="idol in idols" :key="idol.id" :idol="idol"/>
        </ul>
    </div>
</template>
<script>
import CheckboxItem from './CheckboxItem.vue';
export default {
    name: 'App',
}
</script>
<style lang="">
    
</style>