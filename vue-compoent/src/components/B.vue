// B.vue是A的子组件

<template>
    <div>
        {{demo}}
        <C></C>
    </div>
</template>

<script>
    import C from '../components/C.vue'
    export default {
        name: "B",
        inject: ['for','app'],
        data() {
            return {
                demo: this.for
            }
        },
        mounted(){
            window.console.log(this.app.name);  //调用父组件传递过来的方法
            this.app.func();
        },
        components: {
            C
        }
    }
</script>