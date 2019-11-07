//parent.vue
<template>
    <div class="hello_world">
        <div>{{msg}}</div>
        获取子组件1的值为: <Children></Children>
        获取子组件2的值为: <Children></Children>
        <button @click="changeA">点击改变子组件值</button>
    </div>
</template>

<script>
    import Children from './Children.vue'
    export default {
        name: 'Parent',
        components: { Children },
        data() {
            return {
                msg: 'Welcome'
            }
        },

        methods: {
            changeA() {
                // 获取到子组件A
                this.$children[0].messageA = 'this is new value'
                this.$children[1].messageA = 'this is new value 2'
            }
        }
    }
</script>

<style scoped>

</style>