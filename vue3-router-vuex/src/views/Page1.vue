<template>
    <div>
        <h3>page1</h3>
        <p>props获取参数{{foo}}</p>
    <p>
        <button @click="gotoPage2()">跳转至Page2</button>
    </p>
    </div>
</template>

<script>
    export default {
        name: "Page1",
        props:['foo'],
        created() {
            console.log(this.$route.params.foo)
           console.log(this.$router)

        },
        methods: {
            gotoPage2() {
                // this.$router.push('/page2/1/vuejs');
                this.$router.push({ name: "page2", params: { id: 1, msg: "vuejs" } });
            }
        },
    }
</script>

<style scoped>

</style>