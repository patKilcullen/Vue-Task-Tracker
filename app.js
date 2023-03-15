const app = Vue.createApp({
   
    data(){
        return {
            firstName: "Pat",
            lastName: "Kilcullen",
            email: 'patrickjkilcullen@gmail.com',
            picture: 'https://randomuser.me/api/portraits/men/10.jpg',
            gender: "male"
        }
    },
    methods: {
       async getUser() {
            const res = await fetch("https://randomuser.me/api")
            const {results } = await res.json()
            console.log("RES: ", results)
            // console.log("RESUTLS: ", results)
            this.title = results[0].name.title
            this.firstName = results[0].name.first
            this.lastName = results[0].name.last
            this.gender = results[0].gender
            this.picture = results[0].picture.large
            this.email = results[0].email

        }
    }
})

app.mount('#app')