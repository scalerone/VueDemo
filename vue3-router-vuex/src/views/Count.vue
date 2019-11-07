<template>
<div>
    <h2>{{msg}}</h2><hr/>
    <h2>{{$store.state.count}}-{{count}}</h2>//这两种写法都可以
    <button @click="addNumber">+</button>
    <button @click="reduceNumber">-</button>

</div>
</template>

<script>
    import {mapState} from 'vuex'
    export default {
        data() {
            return {
                msg: "Hello Vuex"
            };
        },
        methods: {
            addNumber() {
                return this.$store.commit("add");
            },
            reduceNumber() {
                return this.$store.commit("reduce");
            }
        },
        computed: mapState(['count'])
        // 映射 this.count 到 this.$store.state.count, mapState 函数可以接受一个对象，也可以接收一个数组
     //https://m.jb51.net/article/142289.htm
    };
</script>

<style scoped>

</style>