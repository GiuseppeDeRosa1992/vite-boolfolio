<script>
export default {

    name: "ProjectCard",

    //CREO LA PROPS
    props: ["cardProjects", "api_url"],

    data() {
        return {
            msg: "I miei Progetti",
        }
    },
};

</script>

<template>
    <h1 class="text-white">{{ msg }}</h1>
    <div class="row text-white">
        <!-- FACCIO CICLO FOR E CICLO NELLA PROPS CHE POI LA POPOLO IN APP.VUE QUANDO LA RICHIAMO -->
        <template v-for="project in cardProjects">
            <div class="col-12 col-sm-6 col-md-4 col-lg-4 my-3">
                <div class="card p-0 h-100">
                    <figure class="m-0 h-100">
                        <img :src="api_url + '/storage/' + project.img_preview" class="card-img-top"
                            :alt="project.img_preview">
                        <h5 class="card-text my-fs py-2">{{ project.title }}</h5>
                        <p class="card-text my-fs py-2">{{ project.description }}</p>
                    </figure>
                </div>
            </div>
        </template>
    </div>
</template>

<style scoped></style>
