import { reactive } from 'vue';

const iMieiDati = reactive({
    // projects: [],

    //creo la variabile per la lista degli ultimi progetti
    // latestProjects: [],

    //creo la variabile per il singolo progetto
    singleProject: null,

    // Chiamata api non mi serve più api_url: "https://admin.giuseppederosawebdev.com",
    arrayLink: ["Home", "Progetti", "Su di me"], //Aggiungere "Contattami" se si rimette sezione contattami che adesso è Commentata.

    //creo variabile per richiamare api projectslatest che mi restituisce gli ultimi 6 progetti
    // latest: "/api/projects/latest",

    //creo variabile per richiamare api per dettagli che mi passa l'id
    // projectId: "/api/projects/",

    skills: [
        {
            icon: "fa-brands fa-html5 fa-bounce fa-2xl",
            name: "HTML",
            style: "color: #ff5d1e",
        },
        {
            icon: "fa-brands fa-css3-alt fa-bounce fa-2xl",
            name: "CSS",
            style: "color: #0065f4",
        },
        {
            icon: "fa-brands fa-sass fa-bounce fa-2xl",
            name: "SASS",
            style: "color: #cd669a",
        },
        {
            icon: "fa-brands fa-bootstrap fa-bounce fa-2xl",
            name: "BOOTSTRAP",
            style: "color: #8d0bfd",
        },
        {
            icon: "fa-brands fa-js fa-bounce fa-2xl",
            name: "JS",
            style: "color: #ffdf00",
        },
        {
            icon: "fa-brands fa-vuejs fa-bounce fa-2xl",
            name: "VUE JS",
            style: "color: #3fb984",
        },
        {
            vite: "fa-solid fa-bolt-lightning fa-2xs",
            styleVite: "color: #ffd32b",
            icon: "fa-brands fa-vuejs fa-bounce fa-2xl",
            name: "VITE JS",
            style: "color: #639AF7",
        },
        // {
        //     icon: "fa-brands fa-node fa-bounce fa-2xl",
        //     name: "NODE JS",
        //     style: "color: #72A860",
        // },
        {
            icon: "fa-solid fa-database fa-bounce fa-2xl",
            name: "MY SQL",
            style: "color: #5181a2",
        },
        {
            icon: "fa-brands fa-php fa-bounce fa-2xl",
            name: "PHP",
            style: "color: #777bb3",
        },
        {
            icon: "fa-brands fa-laravel fa-bounce fa-2xl",
            name: "LARAVEL",
            style: "color: #ef281b",
        },
        {
            icon: "fa-brands fa-wordpress fa-bounce fa-2xl",
            name: "WORDPRESS",
            style: "color:rgb(53, 101, 133)",
        },
        {
            icon: "fa-brands fa-github fa-bounce fa-2xl",
            name: "GIT HUB",
            style: "color: #777bb3",
        },
    ],

    experience: [
        {
            position: "Back-End Developer",
            agency: "Web Industries",
            date: "Aprile 2025 - Presente",
            description: "Sviluppo e manutenzione gestionale aziendale: fix bug, creazione nuovo codice PHP per esigenze clienti.",
            city: "Brugine, Italia"
        },
        {
            position: "Web Developer",
            agency: "Traversari Digital Strategies",
            date: "Novembre 2024 - Marzo 2025",
            description: "Acquisite competenze in WordPress, PrestaShop e Looker Studio per sviluppo web, gestione e creazione di report analitici.",
            city: "Marcon, Italia"
        },
        {
            position: "Jr. Full Stack Web Developer Trainee",
            agency: "Boolean",
            date: "Febbraio 2024 - Settembre 2024",
            description: "Corso di 700 ore Full stack Web Developer in full remote, durante le quali ho sviluppato copie di siti e WebApp tra cui: Spotify, Zalando, Netflix, Whatsapp, Discord e DC. Durante il corso ho imparato a lavorare in team attraverso gli strumenti forniti da GitHub e VSCode e a gestire il tempo per le scadenze di consegna dei progetti.",
            city: "Da Remoto"
        },
        {
            position: "Operaio",
            agency: "Schmitt & Scalzo GmbH",
            date: "Agosto 2019 - Dicembre 2023",
            description: "Competenze apprese: Lavoro di squadra, Problem solving, Gestione del tempo.",
            city: "Stockstadt am Rhein, Germania"
        },
        {
            position: "Addetto alla Ristorazione",
            agency: "McDonald's",
            date: "Aprile 2018 - Giugno 2019",
            description: "Competenze apprese: Rapporto con i clienti, Lavoro di squadra, Gestione dello stress, Gestione del tempo.",
            city: "Recklinghausen, Germania"
        },
        {
            position: "Operaio di Fabbrica",
            agency: "TECNE 90 S.P.A",
            date: "Ottobre 2017 - Novembre 2017",
            description: "Competenze apprese: Lavoro di squadra, Problem solving, Gestione del tempo, Controllo qualità.",
            city: "Montelupone, Italia"
        },
        {
            position: "Parrucchiere",
            agency: "High Quality Parrucchieri",
            date: "Marzo 2012 - Settembre 2017",
            description: "Competenze apprese: Lavoro di squadra, Rapporto con i clienti, Problem solving, Gestione dello stress, Gestione del tempo",
            city: "Viterbo, Italia"
        },
        {
            position: "Magazziniere",
            agency: "Mattioli Legnami srl",
            date: "Giugno 2011 - Dicembre 2011",
            description: "Competenze apprese: Gestione del magazzino, Gestione del tempo, Problem solving",
            city: "Viterbo, Italia"
        },
        {
            position: "Stage Giovani",
            agency: "Tuscia PC",
            date: "Giugno 2010 - Giugno 2010",
            description: "Stage Formativo di 3 settimane tramite istituto scolastico dove ho effettuato installazioni dei file, montaggio e smontaggio Hardware, vendita di prodotti informatici.",
            city: "Viterbo, Italia"
        },
    ],

    training: [
        {
            agency: "Boolean",
            course: "Master Full Stack Web Developer",
            date: "Febbraio 2024 - Settembre 2024",
            description: "Corso di 700 ore dove ho partecipato a lezioni teoriche e pratiche e ho appreso le basi della programmazione front-end e back-end tramite l'uso di Js e PHP come linguaggi di programmazione e l'utilizzo di MySQL. Usando framework come Bootstrap e Laravel."
        },
        {
            agency: "I.P.S.I.A Guglielmo Marconi Viterbo",
            course: "Diploma di maturità",
            date: "Settembre 2005 - Luglio 2010",
            description: "Diploma di Maturità"
        }
    ],

    projectsBoolean: [
        {
            title: "Sito Web",
            image: "https://github.com/GiuseppeDeRosa1992/immagini-portfolio/blob/main/sito_capricci.png?raw=true",
            description: "Sito vetrina realizzato per una web designer, con particolare attenzione alla presentazione del portfolio, dove i suoi potenziali clienti possono esplorare facilmente i suoi progetti e apprezzare la qualità del suo design.",
            languageUsed: "Wordpress, Html, Css, Php",
            linkGitHub: "https://capriccigrafici.it/",
        },
        {
            title: "DeliveRoo",
            image: "https://github.com/GiuseppeDeRosa1992/immagini-portfolio/blob/main/deliveroo.png?raw=true",
            description: "Il progetto prevede la replica della piattaforma di delivery food DeliveRoo. Progetto Full-Stack con Front-End che permette al visitatore di ordinari dai suoi ristoranti preferiti con pagamento Online tramite Braintree. Back-End per i ristoratori con dashboard personalizzata nella quale creare, modificare ed eliminare i loro prodotti. In più le statistiche degli ordini per ogni ristorante",
            languageUsed: "Html, Css, Bootstrap, JavaScript, VueJs, Vite, Php, Laravel, MySql",
            linkGitHub: "https://github.com/GiuseppeDeRosa1992/deliveRoo-back",
        },
        {
            title: "My Portfolio",
            image: "https://github.com/GiuseppeDeRosa1992/immagini-portfolio/blob/main/portfolio.jpg?raw=true",
            description: "Il progetto prevede la realizzazione del sito Web del mio Portfolio personale. Troviamo vari link che portano a pagine diverse tramite delle rotte. La pagina 'Home' dove troviamo la sezione con foto, dati personali, piccola presentazione e link che portano agli account Github, Linkedin e invio mail. Poi sotto abbiamo alcuni dei progetti sviluppati fino ad adesso con immagine, titolo, link che reindirizza ad un'altra pagina nel browser alla repository Github e un bottone che cliccato fa vedere i dettagli del progetto. Ed infine troviamo la sezione per le esperienze lavorative e per la formazione che cliccate si aprono mostrando i dettagli. Nella pagina 'Progetti' invece troviamo tutti i progetti realizzati fino a questo momento dal più recente al più vecchio, con relativa immagine, link per la repository Github e bottone per vedere più dettagli. Ed Infine nella pagina 'Su di Me' troviamo informazioni più dettagliate su di me.",
            languageUsed: "Html, Css, Bootstrap, JavaScript, VueJs, Vite",
            linkGitHub: "https://github.com/GiuseppeDeRosa1992/vite-boolfolio",
        },
        {
            title: "Portfolio Database",
            image: "https://github.com/GiuseppeDeRosa1992/immagini-portfolio/blob/main/laravel-portfolio.jpg?raw=true",
            description: "Il progetto prevede la creazione di un sito Portfolio con Laravel. I progetti caricati verranno poi salvati in un Database. Potranno poi anche essere eliminati o aggiornati.",
            languageUsed: "Html, Css, Bootstrap, Php, Laravel",
            linkGitHub: "https://github.com/GiuseppeDeRosa1992/laravel-auth",
        },
        {
            title: "Dc Comics Database",
            image: "https://github.com/GiuseppeDeRosa1992/immagini-portfolio/blob/main/laravel-dc-comics.jpg?raw=true",
            description: "Il progetto prevede la creazione di un sito con Laravel. Uno dei primi progetti Back-End dove possiamo aggiungere, eliminare, vedere dettagli o modificare i dati di alcune card. I dati vengono poi salvati in un Database.",
            languageUsed: "Html, Css, Bootstrap, Php, Laravel",
            linkGitHub: "https://github.com/GiuseppeDeRosa1992/laravel-dc-comics",
        },
        {
            title: "Boolflix",
            image: "https://github.com/GiuseppeDeRosa1992/immagini-portfolio/blob/main/boolflix.jpg?raw=true",
            description: "Il progetto è ispirato al famoso sito Netflix. Realizzato con Vite.js, attraverso la barra di ricerca tramite chiamata API stampa delle card sia per i Film che per le Serie Tv correlate a quel titolo. Nella card troviamo il titolo originale del film il voto stampato con delle stelle e anche la bandiera che rappresenta il paese del film.",
            languageUsed: "Html, Css, Bootstrap, JavaScript, VueJs, Vite",
            linkGitHub: "https://github.com/GiuseppeDeRosa1992/vite-boolflix",
        },
        {
            title: "Boolzapp",
            image: "https://github.com/GiuseppeDeRosa1992/immagini-portfolio/blob/main/boolzapp.jpg?raw=true",
            description: "Il progetto prevede la replica della famosa web app di messaggistica WhatsApp, creata con Vue.js. In alto a sinistra troviamo l'immagine dell'utente predefinito e il nome. Sotto l'utente troviamo prima la barra di ricerca dove possiamo filtrare le chat e ancora sotto troviamo le varie chat recenti con il rispettivo contatto. Ogni contatto ha un icona, un nome, la data l'ora e il testo dell'ultimo messaggio inviato. Nella parte destra troviamo la chat aperta, dove si può mandare un nuovo messaggio tramite la barra di testo, con risposta automatica dopo 3 secondi. Premendo sulla freccia nei messaggi si apre un menù a tendina dove possiamo cancellare il messaggio selezionato.",
            languageUsed: "Html, Css, Bootstrap, JavaScript, VueJs",
            linkGitHub: "https://github.com/GiuseppeDeRosa1992/vue-boolzapp",
        },
        {
            title: "Movie Star",
            image: "https://github.com/GiuseppeDeRosa1992/immagini-portfolio/blob/main/progetto-meta-corso.jpg?raw=true",
            description: "Il progetto di squadra è stato realizzato a metà del corso Boolean e prevede l'utilizzo di tutti gli strumenti appresi durante la prima parte degli studi. Troviamo diverse sezioni tra cui: un carosello Jumbotron che cambia immagine sia manualmente che automaticamente, un'altro carosello che cambia delle card, dove troviamo quella attiva in risalto, un'altra sezione dove ci sono delle card che cliccate fanno partire un video e un'altro Jumbotron con il countdown del prossimo film in uscita.",
            languageUsed: "Html, Css, Bootstrap, JavaScript, VueJs, Vite",
            linkGitHub: "https://github.com/GiuseppeDeRosa1992/proj-html-vuejs",
        },
        {
            title: "Yu-Gi-Oh",
            image: "https://github.com/GiuseppeDeRosa1992/immagini-portfolio/blob/main/yu-gi-oh.jpg?raw=true",
            description: "Il progetto prevede la creazione di un sito realizzato con Vite.js, che genera delle card tramite una funzione JavaScript con una chiamata API. Tramite una select che troviamo in alto a sinistra possiamo anche scegliere il genere delle carte da generare.",
            languageUsed: "Html, Css, Bootstrap, JavaScript, VueJs, Vite",
            linkGitHub: "https://github.com/GiuseppeDeRosa1992/vite-yu-gi-oh",
        },
        {
            title: "Slider Marvel",
            image: "https://github.com/GiuseppeDeRosa1992/immagini-portfolio/blob/main/vue-slider.jpg?raw=true",
            description: "Il progetto prevede la realizzazione di un carosello con VueJs, dove troviamo in piccolo tutte le anteprime delle immagini disponibili e in grande la foto della slide attiva. Le immagine cambiano da sole ogni 3 secondi grazie ad una funzione in JavaScript. Possono essere cambiate anche manualmente e ogni volta il timer riparte da zero per cambiare immagine automaticamente. L'anteprima dell'immagine attiva viene illuminata di più rispetto alle altre non attive.",
            languageUsed: "Html, Css, Bootstrap, JavaScript, VueJs",
            linkGitHub: "https://github.com/GiuseppeDeRosa1992/vue-slider",
        },
        {
            title: "Dc Comics",
            image: "https://github.com/GiuseppeDeRosa1992/immagini-portfolio/blob/main/vite-comics.jpg?raw=true",
            description: "Il progetto Comics è realizzato utilizzando Vite e VueJS e consiste nella realizzazione di diversi componenti: Header che come componente ha la NavBar, una barra di navigazione posizionata in cima alla pagina, che permette agli utenti di accedere rapidamente alle varie sezioni del sito. Il Main è composto da due sezioni, quella del Jumbotron, una sezione di eroe visiva che mostra con un'immagine stile cartone animato, e la seconda sezione ha delle Card, che mostrano le copertine di diversi fumetti. Nella parte inferiore della pagina, c'è un Footer che contiene vari link utili per gli utenti.",
            languageUsed: "Html, Css, Bootstrap, JavaScript, VueJs, Vite",
            linkGitHub: "https://github.com/GiuseppeDeRosa1992/vite-comics",
        },
        {
            title: "Biglietto Treno",
            image: "https://github.com/GiuseppeDeRosa1992/immagini-portfolio/blob/main/ticket-train.jpg?raw=true",
            description: "Il progetto prevede la creazione di un modulo con JavaScript per la prenotazione di un biglietto del treno. Si applicano tramite dei controlli su JavaScript degli sconti per i Junior e i Senior.",
            languageUsed: "Html, Css, Bootstrap, JavaScript",
            linkGitHub: "https://github.com/GiuseppeDeRosa1992/js-biglietto-treno-form",
        },
        {
            title: "Boolando",
            image: "https://github.com/GiuseppeDeRosa1992/immagini-portfolio/blob/main/boolando.jpg?raw=true",
            description: "Il progetto prevede la replica del sito Web di Zalando, realizzata con HTML e CSS. La pagina presenta una griglia di prodotti di abbigliamento in vendita, con immagini, nomi dei brand, descrizioni brevi e prezzi, inclusi eventuali sconti evidenziati. Al passaggio del cursore, diversi elementi interattivi cambiano aspetto. Il design è pulito e moderno, replicando efficacemente l'esperienza di navigazione su Zalando.",
            languageUsed: "Html, Css",
            linkGitHub: "https://github.com/GiuseppeDeRosa1992/html-css-boolando",
        },
        {
            title: "Carosello Immagini Array Objects",
            image: "https://github.com/GiuseppeDeRosa1992/immagini-portfolio/blob/main/array-objects-carousel.jpg?raw=true",
            description: "Il progetto prevede la realizzazione di un carosello di immagini con JavaScript. Tramite una funzione cliccando sui rispettivi bottoni 'prossima' e 'precedente' cambia l'immagine. Quando arriva all'ultima immagine della lista cliccando 'prossima' ritorna alla prima immagine e viceversa.",
            languageUsed: "Html, Css, Bootstrap, JavaScript",
            linkGitHub: "https://github.com/GiuseppeDeRosa1992/js-array-objects-carousel",
        },
        {
            title: "Campo Minato",
            image: "https://github.com/GiuseppeDeRosa1992/immagini-portfolio/blob/main/campominato.jpg?raw=true",
            description: "Il progetto prevede la creazione di un applicazione Web basata sul gioco Campo Minato. Ci sono 3 difficoltà diverse create tramite una funzione in Javascript che determinano il numero di caselle ma il numero di bombe resta sempre lo stesso. L'utente deve cercare di evitare le bombe vincendo quando non ci saranno più celle sicure da cliccare.",
            languageUsed: "Html, Css, Bootstrap, JavaScript",
            linkGitHub: "https://github.com/GiuseppeDeRosa1992/js-campominato-dom",
        },
        {
            title: "Palindroma",
            image: "https://github.com/GiuseppeDeRosa1992/immagini-portfolio/blob/main/palindroma.jpg?raw=true",
            description: "Il progetto prevede il controllo tramite una funzione Javascript di una parola che sceglie l'utente tramite un prompt, che determina se la parola stessa è palindroma.",
            languageUsed: "Html, Css, Bootstrap, JavaScript",
            linkGitHub: "https://github.com/GiuseppeDeRosa1992/js-paliedispari",
        },
        {
            title: "FizzBuzz",
            image: "https://github.com/GiuseppeDeRosa1992/immagini-portfolio/blob/main/fizz-buzz.jpg?raw=true",
            description: "Il progetto prevede la realizzazione dell'algoritmo FizzBuzz con Javascript e la successiva visualizzazione in HTML. Ogni multiplo di 3 stampa nella griglia HTML Fizz, di 5 Buzz e di 3 e 5 FizzBuzz.",
            languageUsed: "Html, Css, Bootstrap, JavaScript",
            linkGitHub: "https://github.com/GiuseppeDeRosa1992/js-fizzbuzz",
        },
        {
            title: "Web App Spotify",
            image: "https://github.com/GiuseppeDeRosa1992/immagini-portfolio/blob/main/spotify.jpg?raw=true",
            description: "Il progetto prevede la replica della famosa Web App di Spotify, realizzata con HTML e CSS, facendo uso delle media query per renderla responsive. Le varie icone sono state prese dalla libreria FontAwesome.",
            languageUsed: "Html, Css",
            linkGitHub: "https://github.com/GiuseppeDeRosa1992/html-css-spotifyweb",
        },
        {
            title: "Freelancer",
            image: "https://github.com/GiuseppeDeRosa1992/immagini-portfolio/blob/main/bootstrap-freelancer.jpg?raw=true",
            description: "Il progetto prevede la creazione di un sito Portfolio statico e responsive. Realizzato interamente con HTML, CSS e il Framework Bootstrap.",
            languageUsed: "Html, Css, Bootstrap",
            linkGitHub: "https://github.com/GiuseppeDeRosa1992/html-css-bootstrap-freelancer",
        },
        {
            title: "Dashboard",
            image: "https://github.com/GiuseppeDeRosa1992/immagini-portfolio/blob/main/dashbord.jpg?raw=true",
            description: "Il progetto prevede la creazione di una dashboard interattiva responsive creata con HTML, CSS e Bootstrap. La dashboard è organizzata in diverse sezioni e include vari elementi UI, come tabelle per elencare le classi in arrivo con vari dettagli, oltre a bottoni per modificare o eliminare voci. Ci sono anche funzionalità come dropdown. La sidebar laterale (offcanvas) è nascosta e si espande al click per aggiungere un eventuale nuovo studente.",
            languageUsed: "Html, Css, Bootstrap",
            linkGitHub: "https://github.com/GiuseppeDeRosa1992/html-css-bootstrap-dashboard",
        },
        {
            title: "Responsive Layout",
            image: "https://github.com/GiuseppeDeRosa1992/immagini-portfolio/blob/main/responsive-layout.jpg?raw=true",
            description: "Il progetto prevede la realizzazione di un sito Web responsive con HTML, CSS e l'utilizzo di media query per un' esperienza utente ottimale su qualunque dispositivo (es. Smartphone, Tablet, PC).",
            languageUsed: "Html, Css",
            linkGitHub: "https://github.com/GiuseppeDeRosa1992/htmlcss-responsive-layout",
        },
        {
            title: "Dropbox",
            image: "https://github.com/GiuseppeDeRosa1992/immagini-portfolio/blob/main/droppbox.jpg?raw=true",
            description: "Il progetto prevede la replica del sito Dropbox, realizzata interamente in HTML e CSS. La pagina è strutturata in diverse sezioni, ognuna delle quali presenta contenuti distintivi per illustrare le funzionalità e i vantaggi del servizio. Le icone vengono prese da Font Awesome.",
            languageUsed: "Html, Css",
            linkGitHub: "https://github.com/GiuseppeDeRosa1992/htmlcss-dropbox",
        },
        {
            title: "Discord",
            image: "https://github.com/GiuseppeDeRosa1992/immagini-portfolio/blob/main/htmlcss-discord.jpg?raw=true",
            description: "Il progetto prevede la replica statica del layout del famoso sito Discord. Le icone vengono prese dalla libreria Font Awesome.",
            languageUsed: "Html, Css",
            linkGitHub: "https://github.com/GiuseppeDeRosa1992/htmlcss-discord",
        },
        {
            title: "Zoom",
            image: "https://github.com/GiuseppeDeRosa1992/immagini-portfolio/blob/main/zoom.jpg?raw=true",
            description: "Il progetto prevede la replica della famosa Web App di Zoom. Le immagini vengono prese dal sito lorem picsum, e le icone tramite Font Awesome.",
            languageUsed: "Html, Css",
            linkGitHub: "https://github.com/GiuseppeDeRosa1992/html-css-zoom",
        },
        {
            title: "Challange Lim",
            image: "https://github.com/GiuseppeDeRosa1992/immagini-portfolio/blob/main/challange..jpg?raw=true",
            description: "Il progetto prevede la replica del sito Lime, è stato il mio primo progetto valido per la selezione del corso Boolean.",
            languageUsed: "Html, Css",
            linkGitHub: "https://github.com/GiuseppeDeRosa1992/coding-challenge-lim",
        },
    ],
});

export default iMieiDati;