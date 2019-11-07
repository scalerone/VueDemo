<template>
    <div class="home">
        demo3 :不论子组件嵌套有多深, 只要调用了inject 那么就可以注入provide中的数据，而不局限于只能从当前父组件的props属性中回去取数据或方法
        <hr>
        <A />
    </div>
</template>

<script>
    import A from '../components/A.vue'
    export default {
        name: "Demo3",
        components: {
            A
        }
    }
</script>

<style scoped>

</style>