<template>
    <div class="app">

        <div class="app__btns">
            <my-button
                @click="showDialog"
                
            >
                Добавить гостя
            </my-button>
            
                        
        </div>
        
        <my-dialog v-model:show="dialogVisible">
            <post-form
        @create = 'createPost'
        />
        </my-dialog>
        <post-list
        :posts="posts"
        @remove="removePost"
        />
        
    </div>
</template>


<script>
import PostForm from '@/components/PostForm.vue'
import PostList from '@/components/PostList.vue'


    export default {
        components: {PostList, PostForm,},
    data() {
        return {
            posts: [
                { id: 1, title: 'Василий', body: 'Пупкин', },
                { id: 2, title: 'Евгений', body: 'Пригожин', },
                { id: 3, title: 'Елена', body: 'Головач', },
            ],
            dialogVisible: false,
            options: [
                {name: 'трус', value: 1},
                {name: 'балбес', value: 2},
                {name: 'бывалый', value: 3},
            ],
            selected:'Select',
            
            //selectedSort: '',
            
        }; 
    },
    methods: {
        createPost(post) {
            this.posts.push(post);
            this.dialogVisible = false;
        },
        removePost(post) {
            this.posts = this.posts.filter(p => p.id !== post.id)
        },
        showDialog () {
            this.dialogVisible = true;
        },
        optionSelect(option) {
            this.selected = option.name
        },
    }
    
}
</script>



<style>
* {
    
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
}
.app {
    padding:20px;
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
    font-family: 'Avenir', Arial, Helvetica, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;


}
.app__btns {
    display: flex;
    justify-content: space-between;
    margin: 15px 0;
}
</style>