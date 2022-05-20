const app = new Vue ({
    el: "#mainBox",
    data: {
        currentIndex: 0,
        images: [
            {
                src: 'img/01.jpg',
                title: 'Svezia',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
            },
            {
                src: 'img/02.jpg',
                title: 'Svizzera',
                text: 'Lorem ipsum',
            },
            {
                src: 'img/03.jpg',
                title: 'Gran Bretagna',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
            },
            {
                src: 'img/04.jpg',
                title: 'Germania',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
            },
            {
                src: 'img/05.jpg',
                title: 'Paradise',
                text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
            },
        ],
    },
    methods: {
        prevPic() {
            if (this.currentIndex === 0) {
                this.currentIndex = this.images.length - 1;
            } else {
                this.currentIndex--;
            }
        },
        nextPic() {
            if (this.currentIndex === this.images.length - 1) {
                this.currentIndex = 0;
            } else {
                this.currentIndex++;
            }
        },
        //bonus-1: al click su una thumb visualizzo l'immagine corrispondente in grande
        selectPic(index) {
            this.currentIndex = index;
        },
        //bonus-2 applicare l'autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente
        sliders: function() {
            //Inizializzo funzione SetInterval passando come parametri (funzione creata in precedenza per passare da un'immagine all'altra, 3s come intervallo di tempo)
            setInterval(this.nextPic, 3000);
        }
    },
    //alla fine del rendering iniziale, chiamo la funzione sliders
    mounted() {
        this.sliders();
    }
});