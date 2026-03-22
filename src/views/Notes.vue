<script setup>

import { useNoteStore } from '../stores/note';
import HeaderComponent from '../components/HeaderComponent.vue';
import NoteCard from '../components/NoteCard.vue';
import CreateNote from '../components/CreateNote.vue';


const noteStore = useNoteStore();
</script>


<template>
    <HeaderComponent />
    <section id="notes"></section>
    <h2>notes</h2>

    <ul class="list">
        <li><CreateNote /></li>
        <li v-for="note in noteStore.notes" :key="note.id">
            <NoteCard :note="note"></NoteCard>
        </li>
    </ul>
</template>

<style>
.list {
    list-style: none;
    padding: 0;
}
.list li {
    border: 1px solid #ccc;
    padding: 10px;
    margin-bottom: 10px;
}
.notes {
    margin-top: 20px;
}
</style>