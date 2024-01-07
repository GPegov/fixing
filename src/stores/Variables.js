import { defineStore } from 'pinia'

export const useVariables = defineStore('variables', {
    state: () => ({
        guests: [],
        
    }),
    getters: {
        guest: {id:Date.now(), name: '', surname: ''}
    },
    actions: { 
        saveGuest () {
            this.guests.push({
            guest
            })
            this.guest.name = ''
            this.guest.surname = ''
    },
}
})