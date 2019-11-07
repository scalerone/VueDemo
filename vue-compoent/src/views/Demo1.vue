<template>
    <div class="home">
       demo1 :父组件通过props的方式向子组件传递数据
        <Section />
    </div>
</template>

<script>
    import Section from '../components/Section.vue'
    export default {
        name: "Demo1",
        components: {
            Section
        }
    }
</script>

<style scoped>

</style>