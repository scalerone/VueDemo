// section父组件
<template>
    <div class="section">
        <com-article :articles="articleList" @onEmitIndex="onEmitIndex"></com-article>
    </div>
</template>

<script>
    import ComArticle from './ComArticle.vue'
    export default {
        name: 'Section',
        components: { ComArticle },
        data() {
            return {
                currentIndex: -1,
                articleList: ['红楼梦', '西游记', '三国演义']
            }
        },
        methods:{
            onEmitIndex(idx) {
                this.currentIndex = idx
                window.console.log(this.currentIndex);
            }

        }
    }
</script>
<style scoped>

</style>