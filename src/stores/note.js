import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useNoteStore = defineStore('note', () => {
    const notes = ref([
        {
            id: 1,
            title: 'Comprar',
            content: 'Ir al supermercado',
            marked: false
        },
        {
            id: 2,
            title: 'Contraseña',
            content: 'Contraseña: 123456',
            marked: true
        }
    ])

    return {
        notes
    }
})