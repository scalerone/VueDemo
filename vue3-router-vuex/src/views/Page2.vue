<template>
    <div>
        <h3>page2</h3>
    <!-- 获取路由路径参数 -->
        <p>id:{{$route.params.id}}</p>
        <p>hello:{{name}}</p>
        <p>msg:{{$route.params.msg}}</p>
        <p>msg:{{$route.query.foo}}</p>

    </div>
</template>

<script>
    export default {
        name: "page2",
        created() {
            // 路由 -获取参数
            console.log(this.$route)
            // 路由器-控制跳转
        //    console.log(this.$router)
          //  console.log(this.$route.params.msg);
            // 查询参数
            console.log(this.$route.query.foo);
        },
        computed:{
            name(){
                return this.$route.params.id
            }
        }

    }
</script>

<style scoped>

</style>