<template>
    <div class="color">
        <div>这是{{page}}页面</div>
        <div>{{page2}}</div>
        <div>{{localPage}}</div>
        <button @click="setContent('bbbb')">添加内容</button>

        <el-carousel height="150px" >
            <el-carousel-item v-for="item in count">
                <h3>{{ item }}</h3>
            </el-carousel-item>
        </el-carousel>
        <br>
        <el-carousel height="150px">
            <el-carousel-item v-for="item in count">
                <h3>{{ item }}</h3>
            </el-carousel-item>
        </el-carousel>
    </div>
</template>
<script>
    import {mapState, mapActions} from 'vuex'
    import {actions} from '../vuex/modules/index.js'
    export default {
        data(){
            return {
                localPage: 'index'
            }
        },
        // ...
        computed: mapState({
            // 箭头函数可使代码更简练
            page: state => state.index.page,
            count: state => state.index.count,
            count1: state => state.index.count,
            page2(){
                return this.localPage + 'aaaaaa'
            },
            //count:state=>state.count,

            // 传字符串参数 'count' 等同于 `state => state.count`
            //count: 'count',

            //为了能够使用 `this` 获取局部状态，必须使用常规函数
            countPlusLocalState (state) {
                return state.index.page + this.localPage
            }
        }),
        methods: {
            setContent(page){
                this.addContent(page);
            },
            ...mapActions({
                addContent: 'INIT_PAGE_ACTION'
            })
        }
    }
</script>
<style type="text/css" src="../style.css"></style>
