<template>
    <div>
        X : <input type="text" v-model.number="state.x"><br>
        Y : <input type="text" v-model.number="state.y"><br>
        <button @click="calcAdd">계산</button>
        <div>결과 : {{ state.result }}</div>
    </div>
</template>
<script>
import {ref} from 'vue';
export default {
    name:'Calc3',
    setup(){
        const state = ref({x:10, y:20, result:30});
        const calcAdd = () =>{
            state.value.result = state.value.x + state.value.y;
        };
        return {state, calcAdd};
    },
};
</script>