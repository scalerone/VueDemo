// 子组件Children.vue
<template>
    <div class="com_a">
        <span>{{messageA}}</span>
        <p>获取父组件的值为: {{parentVal}}</p>
    </div>
</template>

<script>
    export default {
        name: 'Children',
        data() {
            return {
                messageA: 'this is old'
            }
        },
        computed:{
            parentVal(){
                return this.$parent.msg;
            }
        }
    }
</script>