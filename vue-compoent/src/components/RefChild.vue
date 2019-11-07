// 子组件
<template>
    <div class="com_a">

    </div>
</template>

<script>
    export default {
        name: 'RefChild',
        data() {
            return {
                name: ' this is RefChild'
            }
        },
        methods: {
            sayHello () {
                alert('hello')
            }
        }
    }
</script>