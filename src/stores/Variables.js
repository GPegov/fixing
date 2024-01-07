import { defineStore } from 'pinia'

export const useVariables = defineStore('variables', {
    state: () => ({
        guests: [],
        guest: {name: '', surname: ''}
    }),
    getters: {
        
    },
    actions: { 
        saveGuest (state) {
            this.guests.push({
                id: Date.now(),
                name: this.guest.name,
                surname: this.guest.surname
            }),
            this.guest.name = '',
            this.guest.surname= ''
            
        }
}
})