import { defineStore } from 'pinia'

export const useVariables = defineStore('variables', {
    state: () => ({
        guests: [],
        guest: {name: '', surname: ''},
        familyProperties: {
            alone: false,
            couple: false,
            withChildren: false,
            withoutChildren: false,
            onCar: false,
            needTransfer: false,
            foodDoesntMatter: false,
            foodMeat: false,
            foodFish: false,
            }
    }),
    getters: {
        
    },
    actions: { 
        saveGuest (state) {
            let newGuest = {id: Date.now(), name: this.guest.name, surname: this.guest.surname}
            this.guests.push({
                newGuest}),
            this.guest.name = '',
            this.guest.surname= ''
            
        },
        deleteGuest (state) {
            this.guests = this.guests.filter(p => p.id !== this.guest.id) 
        }
    }
})