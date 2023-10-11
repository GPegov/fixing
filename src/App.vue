<template>
    <div class="app">

        <div class='header_main'>
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

        
        <my-dialog v-model:show="dialogVisible">
            <post-form
        @create = 'createPost'
        />
        </my-dialog>
        <post-list
        :posts="posts"
        @remove="removePost"
        />
        <my-parents/>

        <h2 class="header_place">Место проведения мероприятия</h2>
        <div class="placeDescription">
            <div class="placeDescription1">
                <h3>Сбор Гостей</h3>
                <p>Территориальный отдел ЗАГСа г. Воркуты</p>
                <p>Адрес: г. Воркута, ул. Ленина д. 54</p> 
            </div>
            <div class="placeDescription2">
                <h3>Торжество</h3>
                <p>Ресторан "Додо Пицца"</p>
                <p>Адрес: г. Воркута, ул. Ленина д. 35</p> 
            </div>
        </div>
    </div>
     

    
</template>


<script>
import PostForm from '@/components/PostForm.vue'
import PostList from '@/components/PostList.vue'
import MyPhotoBook from './components/MyPhotoBook.vue';
import MyHeader from './components/MyHeader.vue';
import VueExpandableImage from 'vue-expandable-image';
import MyMap from './components/MyMap.vue';


    export default {
        components: { PostList, PostForm, MyPhotoBook, MyHeader, MyMap, VueExpandableImage, },
    data() {
        return {
            posts: [
                
            ],
            dialogVisible: false,
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