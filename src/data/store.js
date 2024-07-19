import { reactive } from 'vue';

const iMieiDati = reactive({
    projects: [],
    api_url: "http://127.0.0.1:8000",
    arrayLink: ["home", "contacts", "projects", "about"],
});

export default iMieiDati;