<script>
export default {

    name: "ProjectCard",

    //CREO LA PROPS
    props: ["cardProjects", "api_url"],

    data() {
        return {
            msg: "Ciao funziona tutto",
        }
    },
};

</script>

<template>
    <h1>{{ msg }}</h1>
    <div class="row">
        <!-- FACCIO CICLO FOR E CICLO NELLA PROPS CHE POI LA POPOLO IN APP.VUE QUANDO LA RICHIAMO -->
        <template v-for="project in cardProjects">
            <div class="col-12 col-sm-6 col-md-4 col-lg-2 px-1">
                <figure class="m-0 h-100">
                    <img :src="api_url + '/storage/' + project.img_preview" class="card-img-top img-fluid h-75"
                        :alt="project.img_preview">
                    <h5 class="card-text my-fs py-2">{{ project.title }}</h5>
                </figure>
            </div>
        </template>
    </div>
</template>

<style scoped></style>
