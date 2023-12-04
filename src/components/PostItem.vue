<template>
    <div class="guest">
        <div>
            <div>Имя: {{ guest.name }}</div>
            <div>Фамилия: {{ guest.surname }}</div>
        </div>
        <div class="post__btns">    
            <my-button
            @click="($emit('remove', guest))"
            >
                Удалить
            </my-button>
        </div>
    </div>
</template>


<script>
export default {
    props: {
        guest: {
            type: Object,
            required: true,
        },
    }
}
</script>


<style scoped>
.guest {
    
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