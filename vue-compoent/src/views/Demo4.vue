<template>
    <div class="home">
        demo4 :ref：如果在普通的 DOM 元素上使用，引用指向的就是 DOM 元素；如果用在子组件上，引用就指向组件实例，可以通过实例直接调用组件的方法或访问数据
        <hr>
        <RefParent />
    </div>
</template>

<script>
    import RefParent from '../components/RefParent.vue'
    export default {
        name: "Demo4",
        components: {
            RefParent
        }
    }
</script>

<style scoped>

</style>