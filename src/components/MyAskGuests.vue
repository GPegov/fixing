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
                    v-if="posts.length === 0"
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
    

        <div 
            class="askGuestsMore" 
            name="pair" 
            v-if="(posts.length > 0)">
            
            <div 
                class="askGuestsMoreButton"
            >
                <my-button 
                id="byMyself"
                @click="counter = 1,
                alone = 1,
                pressed()">
                    Буду один / одна
                </my-button>
            </div>
            <div 
                class="askGuestsMoreButton"
                name="withCouple"
            >
                <my-button
                @click="counter = 1,
                couple = 1"
                >
                    Буду с парой
                </my-button>
            </div>
        </div>
        
        
        
        
        <div 
            class="askGuestsMore" 
            name="childrenAndCars" 
            v-if="counter >= 1">

            <div 
                class="askGuestsMoreButton"
                name="withKids"
            >
                <my-button 
                @click="counter = 2,
                        withChildren = 1"

                >
                    С детьми
                </my-button>
            </div>
            <div 
                class="askGuestsMoreButton"
                name="withoutKids"
            >
                <my-button
                @click="counter = 2, 
                        withoutChildren = 1"

                >
                    Без детей
                </my-button>
            </div>
            <div class="askGuestsMoreButton">
                <my-button
                @click="onCar = 1">
                    На машине
                </my-button>
            </div> 
        </div>
        
        
        
        
        <div 
            v-if="counter >= 2" 
            class="askGuestsMore" 
            name="Food">
            <div 
                class="askGuestsMoreButton"
            >
                <my-button
                @click="counter = 3,
                foodDoesntMatter = 1"
                >
                    Не важно
                </my-button>
            </div>
            <div 
                class="askGuestsMoreButton"

            >
                <my-button
                @click="counter = 3,
                foodMeat = 1"
                >
                    Мясо
                </my-button>
            </div>
            <div class="askGuestsMoreButton">
                <my-button
                @click="counter = 3,
                foodFish = 1"
                >
                    Рыба
                </my-button>
            </div> 
        </div>
    </div>
    <div>
        <button 

            v-if="counter === 3" 
            class="sendResults" 
            type="submit" >
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

            alone: 0,
            couple :0,

            withChildren: 0,
            withoutChildren: 0,
            

            foodDoesntMatter: 0,
            foodMeat: 0,
            foodFish: 0,

            counter: 0,


            
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
        pressed () {
        
        
            }
        }
        
        
    }
    
    
   
    
    
</script>

<style scoped>
.pressedButton {
    background-color: rgb(0, 155, 155);
    color: black;
}
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

.sendResults {
    padding: 10px 15px;
    font-size: 12pt;
    background: none;
    color: rgb(33, 109, 153);
    border: 2px solid rgb(33, 109, 153);
    border-radius: 10px;
    display: flex;
    margin: auto;
}




</style>