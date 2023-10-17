<template>
    <form @submit.prevent>
        <h4 class="formInput">Укажите гостей</h4>
        <my-input 
            v-model="post.title"
            type="text" 
            placeholder="Имя гостя"
        />
        <my-input 
            v-model="post.body"
            type="text" 
            placeholder="Фамилия гостя"
        />
        <my-button 
            style="margin-top: 15px; align-self: flex-end;"
            @click="createPost"
        >
            Добавить гостя
        </my-button>
    </form>
</template>


<script>
export default {
    data() {
        return {
            post: {
                title: '',
                body: '',
            }
        };
    },
    methods: {
        createPost() {
            this.post.id = Date.now();
            this.$emit('create', this.post);
            this.post = {
                title: '',
                body: '',
            };
        }
    }
}
</script>


<style scoped>
form {
    display: flex;
    flex-direction: column;
}
.formInput {
    font-family: 'Courier New', Courier, monospace;
}
</style>







