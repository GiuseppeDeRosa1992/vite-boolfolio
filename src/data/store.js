import { reactive } from 'vue';

const iMieiDati = reactive({
    projects: [],

    //creo la variabile per la lista degli ultimi progetti
    latestProjects: [],

    //creo la variabile per il singolo progetto
    singleProject: null,

    api_url: "http://127.0.0.1:8000",
    arrayLink: ["home", "contacts", "projects", "about"],

    //creo variabile per richiamare api projectslatest che mi restituisce gli ultimi 6 progetti
    latest: "/api/projects/latest",

    //creo variabile per richiamare api per dettagli che mi passa l'id
    projectId: "/api/project/"
});

export default iMieiDati;