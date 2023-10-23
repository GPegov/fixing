<template>
    <button class="btn">
        <slot></slot>
    </button>
</template>


<script>
export default {
    name: 'my-button'
}
methods: {

}
</script>


<style>
.btn {
    padding: 10px 15px;
    background: white;
    color: rgb(33, 109, 153);
    border: 2px solid rgb(33, 109, 153);
    border-radius: 10px;
    cursor:pointer;
    transition: 0.4s;
}
.btn:hover{
    background-color: #cae0e6;
    
}
.btn:active {
    background-color: #6d797c;
}
</style>