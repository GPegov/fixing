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
    color: rgb(33, 109, 153);
    border: 2px solid rgb(33, 109, 153);
    border-radius: 10px;
}
</style>