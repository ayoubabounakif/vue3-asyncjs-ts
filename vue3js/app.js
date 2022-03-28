console.log("Hello World");

const app = Vue.createApp({
    // data, functions to react to events we want
    // template: '<h2>I am the template</h2>'
    data() {
        return {
            showBooks: true,
            url: "https://www.google.com",
            // title: 'The Final Empire',
            // autor: 'Zackaria Taouil',
            // age: '666',
            books: [
                { title: 'Name of the Wind', author: 'Zack', img: 'assets/964430.jpeg', isFav: true },
                { title: 'The word of the king', author: 'Za3im', img: 'assets/964430.jpeg', isFav: true },
                { title: 'High status', author: 'Mashad', img: 'assets/964430.jpeg', isFav: true },
            ],
            /* x: 0,
            y: 0 */
        }
    },

    methods: {
        changeTitle(title) {
            console.log('You cliked me');
            this.title = title;
        },
        toggleShowBooks() {
            this.showBooks = !this.showBooks;
        },
        toggleFavBook(book) {
            console.log(book.isFav);
            book.isFav = !book.isFav;
            // this.book.isFav = !this.book.isFav;
            // console.log(this.books)
            // this.book.isFav = !this.book.isFav;
            // if (this.book.isFav)
            // this.books[book].isFav = !this.books[book].isFav;
        }
        /* handleEvent(e, data) {
            console.log(e, e.type);
            if (data)
                console.log(data);
        }, */
        /* handleMousemove(e) {
            this.x = e.offsetX;
            this.y = e.offsetY;
        } */
    },
    
    computed: {
        filteredBooks() {
            return this.books.filter((book) => book.isFav);
        }
    }
})

app.mount('#app');