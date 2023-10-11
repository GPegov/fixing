<template>
    <transition-group name="user-list">
        <div>
            <PostItem 
                v-for = 'post in posts'
                :post="post"
                :key="post.id"
                @remove="$emit('remove', post)"
            />
        </div>
    
        <button name="submit" type="submit" class="btn">
            Отправить
        </button>
    </transition-group>

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
    color: rgb(68, 68, 68);
    margin-top: 25px;
    margin-bottom: 45px;
    display: flex;
    justify-content: center;
    font-size: 20pt;
    font-family:'Circe Light', sans-serif !important;
    

}
.btn {
    font-size: 16pt;
    display: flex;
    margin: auto;
    margin-top: 50px;
    margin-bottom: 40px;
    padding: 15px 15px 15px 15px;
    background: none;
    color: rgb(33, 109, 153);
    border: 2px solid rgb(33, 109, 153);
    border-radius: 5px;
    
}

.user-list-enter-active {
    transition: all 1s ease;
}
.user-list-leave-active{
    transition: all 1s ease;
}
.user-list-enter-from,
.user-list-leave-to {
    opacity: 0;
    transform: translateY(30px);
    transition: transform 2s ease;
}
.user-list-move {
    transition: transform 2s ease;
}
</style>
