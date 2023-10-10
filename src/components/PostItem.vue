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
    margin-left: 10px;
    margin-right: 10px;
    padding: 20px;
    border: 1px solid rgb(33, 109, 153);
    margin-top: 25px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    
}
.registered {
    margin-top: 15px;
    font-family: 'Courier New', Courier, monospace;
}
</style>