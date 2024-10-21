import { reactive } from 'vue';

const iMieiDati = reactive({
    projects: [],

    //creo la variabile per la lista degli ultimi progetti
    latestProjects: [],

    //creo la variabile per il singolo progetto
    singleProject: null,

    api_url: "https://admin.giuseppederosawebdev.com",
    arrayLink: ["Home", "Progetti", "Contattami", "Su di me"],

    //creo variabile per richiamare api projectslatest che mi restituisce gli ultimi 6 progetti
    latest: "/api/projects/latest",

    //creo variabile per richiamare api per dettagli che mi passa l'id
    projectId: "/api/projects/",

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
            icon: "fa-brands fa-github fa-bounce fa-2xl",
            name: "GIT HUB",
            style: "color: #777bb3",
        },
    ],

    experience: [
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
    ]
});

export default iMieiDati;