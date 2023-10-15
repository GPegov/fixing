<template>
    <div class="app">

        <div class='header_main'>
            <my-slider/>
            <my-header
            
            />
            <my-photo-book
            
            />
        </div>


        <div class="app__btns">
            <my-button class="addGuest"
                @click="showDialog"
                
            >
                Подтвердите присутствие
            </my-button>
                        
        </div>

        
        <my-dialog 
            v-model:show="dialogVisible">
        <post-form
            @create = 'createPost'
        />
        </my-dialog>
        <post-list
            :posts="posts"
            @remove="removePost"
        />
        <my-parents/>
        <my-place/>
        <my-test/>
        
        
        
        
    </div>
    


    
</template>


<script>
import MyDialog from '@/components/UI/MyDialog.vue';
import MyInput from '@/components/UI/MyInput.vue';
import MyButton from '@/components/UI/MyButton.vue'
import PostForm from '@/components/PostForm.vue'
import PostList from '@/components/PostList.vue'
import MyPhotoBook from '@/components/MyPhotoBook.vue';
import MyHeader from '@/components/MyHeader.vue';
import MyMap from '@/components/MyMap.vue';
import MyPlace from '@/components/MyPlace.vue';
import MyParents from '@/components/MyParents.vue';
import MyTest from '@/components/MyTest.vue'






    export default {
        components: {
    MyDialog,
    MyInput,
    MyButton,
    PostList,
    PostForm,
    MyPhotoBook,
    MyHeader,
    MyMap,
    MyPlace,
    MyParents,
    MyTest,
    
    
    
},
    data() {
        return {
            posts: [
                
            ],
            dialogVisible: false,
            selected:'Select',
            
            
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
    margin-top: 0px;
    margin-left: 0px;
    margin-right: 0px;
    padding-left: 0px;
    padding-right: 0px;
    box-sizing: border-box;
}
.app {
    
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
    padding-top: 50px;
    padding-bottom: 20px;
}
.addGuest {
    font-size: 18pt;
    margin: auto;
    margin-top: 5px;
    margin-bottom: 10px;
}
.header_place {
    color: rgb(68, 68, 68);
    margin-top: 25px;
    margin-bottom: 35px;
    display: flex;
    text-align: center;
    font-size: 22pt;
    font-family:'Circe Light', sans-serif !important;
}
.placeDescription {
    display: flex;
    flex-direction: row;
    color: rgb(68, 68, 68);
    margin-top: 25px;
    margin-bottom: 35px;
    display: flex;
    text-align: center;
    font-family:'Circe Light', sans-serif !important;

}
.placeDescription1 {
    display: flex;
    flex-direction: column;
    max-width: 50%
}
.placeDescription2 {
    display: flex;
    flex-direction: column;
}

</style>