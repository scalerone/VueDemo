<template>
    <div class="home">
        demo2 :通过$parent和$children就可以访问组件的实例，拿到实例代表什么？代表可以访问此组件的所有方法和data
        <hr>
        <Parent />
    </div>
</template>

<script>
    import Parent from '../components/Parent.vue'
    export default {
        name: "Demo1",
        components: {
            Parent
        }
    }
</script>

<style scoped>

</style>