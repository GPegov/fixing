<template>
    <div v-if="posts.length > 0">
        <h3 class="registered">Зарегистрированные гости</h3>
        <PostItem v-for = 'post in posts'
        :post="post"
        :key="post.id"
        @remove="$emit('remove', post)"
    />
    </div>
    <h2 v-else style="
    color: rgb(135, 38, 165);
    margin-top: 15px;
    ">
        Укажите гостей
    </h2>
    
</template>


<script>
import PostItem from './PostItem.vue';

export default {
    props: {
        posts: {
            type: Array,
            required: true,
        }
    },
    components: { PostItem }
}
</script>


<style scoped>
.registered {
    margin-top: 15px;
}
</style>
