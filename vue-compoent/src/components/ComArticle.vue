// 子组件 article.vue
<template>
    <div>
        <ul>
        <li v-for="(item, index) in articles" :key="index" @click="emitIndex(index)">{{item}}</li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "ComArticle",
        props: ['articles'],
        methods: {
            emitIndex(index) {
                this.$emit('onEmitIndex', index)
            }
        }
    }
</script>



<style scoped>

</style>