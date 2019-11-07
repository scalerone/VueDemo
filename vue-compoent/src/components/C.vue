// C是B的子组件
<template>
    <div>
        {{demo}}
        <span v-for='(item,index) in arr' :key='index'>{{item}}</span>
    </div>
</template>

<script>
    export default {
        name: "C",
        inject: ['for','arr'],
        data() {
            return {
                demo: this.for,
                arr: this.arr
            }
        }
    }
</script>