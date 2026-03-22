<script setup>
import {ref} from "vue";
import { useNoteStore } from "../stores/note";



const noteStore = useNoteStore();

const handleSubmit = () => {
    noteStore.addNote.apply(title.value);
    title.value="";

}

const title = ref("");


</script>

<template>
    <form class="form-title" @submit.prevent="handleSubmit">

        <input type="text" class="note-title" placeholder="nota nueva" v-model="title">
        <button class="create-btn"></button>
    </form>
</template>

<style>

</style>