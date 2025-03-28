<template>
    <div class="card card
    -body">
    
    <h2>Home</h2>
    <p>요청 경로 : {{currentRoute.fullPath}}</p>
    </div>
    </template>
    <script>
    import { useRoute } from 'vue-router'
    
    export default {
    name : "Home",
    setup() {
    const currentRoute = useRoute();
    return { currentRoute };
    }
    }
    </script>