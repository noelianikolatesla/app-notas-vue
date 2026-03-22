<script setup>
    defineProps({
       note: Object
    });
</script>

<template>
    <article class="note-card">
        <input tipe="text" class="card-title" v-model="note.title">
        <input type="checkbox" class="card-content" v-model="note.marked">
    </article>

</template>



<style scoped>
.note-card {
    border: 1px solid #ccc;
    padding: 10px;
    margin-bottom: 10px;
}
</style>