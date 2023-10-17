<template>
    <div class="askGuests">
        <div class="askWillGuestsCome">
            <div class="willBe">
                <div class="app__btns">
                <my-button class="addGuest"
                    @click="showDialog"
                >
                    Подтвердите присутствие
                </my-button>
                </div>
                <div class="willNotBe">
                <my-button
                    v-on:click="say('Ну и пошёл нахуй тогда ')"
                >
                    К сожалению, присутствовать не смогу
                </my-button>            
                </div>
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
        </div>  
    

        <div class="askGuestsMore" name="pair" v-if="posts.length > 0">
            <div class="askGuestsMoreButton">
                    <my-button>Буду один / одна</my-button>
            </div>
            <div class="askGuestsMoreButton">
                    <my-button>Буду с парой</my-button>
            </div>
        </div>
        <div class="askGuestsMore" name="childrenAndCars" >
            <div class="askGuestsMoreButton">
                <my-button>С детьми</my-button>
            </div>
            <div class="askGuestsMoreButton">
                    <my-button>Без детей</my-button>
            </div>
            <div class="askGuestsMoreButton">
                    <my-button>На машине</my-button>
            </div> 
        </div>
        <div class="askGuestsMore" name="Food">
            <div class="askGuestsMoreButton">
                    <my-button>Не важно</my-button>
            </div>
            <div class="askGuestsMoreButton">
                    <my-button>Мясо</my-button>
            </div>
            <div class="askGuestsMoreButton">
                    <my-button>Рыба</my-button>
            </div> 
        </div>
    </div>
    <div>
        <button class="sendResults" type="submit" >
            Отправить
        </button>
    </div>

</template>

<script>
    import MyDialog from '@/components/UI/MyDialog.vue';
    import MyInput from '@/components/UI/MyInput.vue';
    import MyButton from '@/components/UI/MyButton.vue'
    import PostForm from '@/components/PostForm.vue'
    import PostList from '@/components/PostList.vue'
    export default {
        name: 'my-ask-guests',
        components: {
            MyDialog,
            MyInput,
            MyButton,
            PostForm,
            PostList,
            
            
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
        say: function (message) {
        alert(message)
        },

    }
    }
    
   
    

</script>

<style scoped>

.askWillGuestsCome {
    display: flex;
    flex-direction: column;
    
}
.willNotBe {
    display: flex;
    justify-content: center;
    padding-top: 20px;
    padding-bottom: 30px;
}
.askGuestsMore {
    display: flex;
    flex-direction: row;
    justify-content: center;
    
}
.askGuestsMoreButton {
    padding: 20px 20px 20px 20px;
}
.participation {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    text-align: center;
    max-width: 400px;
}
.pair {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.childrenAndCars {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.Food {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.sendResults {
    padding: 10px 15px;
    font-size: 12pt;
    background: none;
    color: rgb(33, 109, 153);
    border: 2px solid rgb(33, 109, 153);
    border-radius: 10px;
}


</style>