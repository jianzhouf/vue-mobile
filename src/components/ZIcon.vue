<template>
    <span class="z-icon" :class="type">

    </span>
</template>
<script>
export default {
    props: {
        type: String,
        size: Number
    }  
}
</script>
<style>
    .z-icon {
        display: inline-block;
    }
    .z-icon.right{
        display: inline-block;
        width: 0.8rem;
        height: 0.8rem;
        border-right:1px solid #333;;
        border-top:1px solid #333;;
        transform: rotate(45deg)
    }
</style>

