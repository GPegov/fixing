<template>
    <form @submit.prevent>
        <h4 class="formInput">Укажите гостей</h4>
        <my-input 
            v-model="guest.name"
            type="text" 
            placeholder="Имя гостя"
        />
        <my-input 
            v-model="guest.surname"
            type="text" 
            placeholder="Фамилия гостя"
        />
        <my-button 
            style="margin-top: 15px; align-self: flex-end;"
            @click="createGuest"
        >
            Добавить гостя
        </my-button>
    </form>
</template>


<script>
import MyAskGuests1 from './MyAskGuests1.vue';

export default {
    name: 'post-form',
    
    components: {
        MyAskGuests1

    },
    data() {
        return {
            guest: {
                name: '',
                surname: '',
            },
            
        };
    },
    methods: {
        createGuest(guest) {
            guests.value.push({id:guests.length +1, 
            name: guest.name,
            surname: guest.surname})
            guest.name = ''
            guest.surname = ''
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







