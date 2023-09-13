<template>
    <button class="btn">
        <slot></slot>
    </button>
</template>


<script>
export default {
    name: 'my-button'
}
</script>


<style scoped>
.btn {
    
    align-self: flex-end;
    padding: 10px 15px;
    background: none;
    color: rgb(135, 38, 165);
    border: 1px solid rgb(135, 38, 165);
    border-radius: 10px;
}
</style>