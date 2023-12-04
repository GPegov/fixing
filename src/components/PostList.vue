<template>
        <div>
            <PostItem 
                v-for = 'guest in guests'
                :guest="guest"
                :key="guest.id"
                @remove="$emit('remove', guest)"
            />
        </div>
    

</template>


<script>
import PostItem from './PostItem.vue';
import MyAskGuests1 from './MyAskGuests1.vue';

export default {
    props: {
        guests: {
            type: Array,
            required: true,
        }
    },
    components: { PostItem, MyAskGuests1}
}
</script>


<style scoped>

</style>
