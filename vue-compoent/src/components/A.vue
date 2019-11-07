//父组件A.vue
<template>
    <div>
        <B></B>
    </div>
</template>

<script>
    import B from '../components/B.vue'
    export default {
        name: "A",
        // provide: { //父组件，设置provide,可将变量，函数传递给其子孙组件中调用/使用。
        //     for: "demo",
        //     val: "demo",
        //     arr:[1,2,3],
        //     app:this,
        // },
        provide(){
            return {
                for: "demo",
                val: "demo",
                arr:[1,2,3],
                app:this,
            }
        },
        data(){
            return {
                name: 'A Welcome'
            }
        },
        methods:{
            func(){
                window.console.log("A func");
            }
        },
        components:{
            B
        }
    }
</script>

<style scoped>

</style>