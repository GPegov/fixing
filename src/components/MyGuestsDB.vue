<template>
    <div>
        <input type="text" 
        >
        <input type="text" 
        >
    </div>
</template>

<script>
import PostItem from './PostItem.vue';
import PostList from './PostList.vue';
import PostForm from './PostForm.vue';

    export default {
        name: 'my-guests-d-b',
        data () {
            return {
                inputName: '',
                inputSurname: '',
                myGuestsDataBase: [],
                guestDataBaseItem: {},
                guestFamilyForDB: [],
            }
        },
        methods: {
                
            },
        components: { PostItem, PostList, PostForm, }
    }
    
</script>

<style scoped>

</style>