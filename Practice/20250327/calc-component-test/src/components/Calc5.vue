<template>
    <div>
        x : <input type="text" v-model.number="x">
        <br>
        결과 : {{ result }}
    </div>
</template>
<script>
import { ref, watch } from 'vue';
export default{
    name:'Calc5',
    setup(){
        const x = ref(0);
        const result = ref(0);
        watch(x,(newVal) =>{
            console.log('x가 변경됨:', newVal);
            result.value = x.value
        })
        return{
            x, result
        };
    }
}
</script>