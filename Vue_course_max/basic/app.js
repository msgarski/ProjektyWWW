const app = Vue.createApp({
    data() {
        return {
            name: 'Robert',
            age: 50,
            photoLink: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwyborcza.pl%2F7%2C75400%2C21047339%2Cpies-ci-tego-nie-zapomni-nigdy-i-niczego.html&psig=AOvVaw1crvDRhfHNZIpz3A6JO-ho&ust=1614364258543000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCOi12p_Ihe8CFQAAAAAdAAAAABAD',
        };
    },
    methods: {
        newAge() {
            return this.age + 5;
        },
        randomNumber() {
            return Math.random();
        }
    }
});
app.mount('#assignment');