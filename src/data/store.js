import { reactive } from 'vue';

const iMieiDati = reactive({
    projects: [],

    //creo la variabile per la lista degli ultimi progetti
    latestProjects: [],

    //creo la variabile per il singolo progetto
    singleProject: null,

    api_url: "http://127.0.0.1:8000",
    arrayLink: ["Home", "Contattami", "Progetti", "Su di me"],

    //creo variabile per richiamare api projectslatest che mi restituisce gli ultimi 6 progetti
    latest: "/api/projects/latest",

    //creo variabile per richiamare api per dettagli che mi passa l'id
    projectId: "/api/projects/",

    skills: [
        {
            icon: "fa-brands fa-html5 fa-bounce fa-2xl",
            name: "HTML",
            style: "color: #ff5d1e;",
        },
        {
            icon: "fa-brands fa-css3-alt fa-bounce fa-2xl px-2",
            name: "CSS",
            style: "color: #0065f4;",
        },
        {
            icon: "fa-brands fa-sass fa-bounce fa-2xl",
            name: "SASS",
            style: "color: #cd669a;",
        },
        {
            icon: "fa-brands fa-bootstrap fa-bounce fa-2xl",
            name: "BOOTSTRAP",
            style: "color: #8d0bfd;",
        },
        {
            icon: "fa-brands fa-js fa-bounce fa-2xl",
            name: "JS",
            style: "color: #ffdf00;",
        },
        {
            icon: "fa-brands fa-vuejs fa-bounce fa-2xl",
            name: "VUE",
            style: "color: #3fb984;",
        },
        {
            icon: "fa-solid fa-bolt-lightning fa-bounce fa-2xl",
            name: "VITE",
            style: "color: #ffd32b;",
        },
        {
            icon: "fa-solid fa-database fa-bounce fa-2xl",
            name: "MY SQL",
            style: "color: #5181a2;",
        },
        {
            icon: "fa-brands fa-php fa-bounce fa-2xl",
            name: "PHP",
            style: "color: #777bb3;",
        },
        {
            icon: "fa-brands fa-laravel fa-bounce fa-2xl",
            name: "LARAVEL",
            style: "color: #ef281b;",
        },
        {
            icon: "fa-brands fa-github fa-bounce fa-2xl",
            name: "GIT HUB",
            style: "color: #777bb3;",
        },
    ]
});

export default iMieiDati;