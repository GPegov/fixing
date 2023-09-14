<template>
    <div v-if="posts.length > 0">
        <h3 class="registered">Зарегистрированные гости</h3>
        <transition-group name="user-list">
            <PostItem 
                v-for = 'post in posts'
                :post="post"
                :key="post.id"
                @remove="$emit('remove', post)"
            />
        </transition-group>
    
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
.user-list {
    display: inline-block;
    margin-right: 10px;
}
.user-list-enter-active,
.user-list-leave-active{
    transition: all 0.7s ease;
}
.user-list-enter-from,
.user-list-leave-to {
    opacity: 0;
    transform: translateY(30px);
}
.user-list-move {
    transition: transform 0.4s ease;
}
</style>
