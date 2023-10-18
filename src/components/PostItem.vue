<template>
        <div class="post">
            <div>
                <div>Имя: {{ post.title }}</div>
                <div>Фамилия: {{ post.body }}</div>
            </div>
            <div class="post__btns">    
                <my-button
                @click="$emit('remove', post)"
                >
                    Удалить
                </my-button>
            </div>
            
    </div>
</template>


<script>
export default {
    props: {
        post: {
            type: Object,
            required: true,
        }
    }
}
</script>


<style scoped>
.post {
    
    padding: 20px;
    border: 1px solid rgb(33, 109, 153);
    border-radius: 10px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 20px;
    display: flex;
    justify-content: space-between;
    max-width: 400px;
    
}
</style>