//parent.vue
<template>
    <div class="hello_world">
        <div>{{msg}}</div>
         <RefChild ref="comA"></RefChild>

        <button @click="changeA">点击调用子组件的属性和方法</button>
    </div>
</template>

<script>
    import RefChild from './RefChild.vue'
    export default {
        name: 'RefParent',
        components: { RefChild },
        data() {
            return {
                msg: 'Welcome'
            }
        },

        methods: {
            changeA() {
                // 获取到子组件A
                const comA = this.$refs.comA;
                window.console.log(comA.name); // Vue.js
                comA.sayHello(); // hello
            }
        }
    }
</script>

<style scoped>

</style>