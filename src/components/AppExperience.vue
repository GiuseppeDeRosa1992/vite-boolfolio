<script>

import store from "../data/store.js";

export default {

    name: "AppExperience",

    components: {
    },

    data() {
        return {
            store,
        }
    },
};

</script>

<template>
    <!-- SEZIONE COMPETENZE -->
    <section class="experience py-4">
        <div class="container">
            <h2 class="m-0 pb-3 fs-1">Esperienze</h2>
            <div class="row m-0" v-if="store.experience">
                <template v-for="experience in store.experience">
                    <div class="col-12 p-0 py-2 text-center">
                        <div class="bg-dark text-white rounded-3 p-3">
                            <details>
                                <summary>
                                    <h4 class="m-0 p-0">{{ experience.position }}, {{ experience.agency }}</h4>
                                </summary>
                                <p class="m-0 p-0 px-2 py-2">{{ experience.description }}</p>
                                <span value="">{{ experience.date }}, {{ experience.city }}</span>
                            </details>
                        </div>
                    </div>
                </template>
            </div>
        </div>
    </section>

    <!-- SEZIONE COMPETENZE SENZA SUMMARY -->
    <!-- <section class="experience py-4">
        <div class="container">
            <h2 class="m-0 pb-3 fs-1">Esperienze</h2>
            <div class="row m-0" v-if="store.experience">
                <template v-for="experience in store.experience">
                    <div class="col-12 col-md-5 col-lg-6 p-0 p-2 text-center">
                        <h4 class="m-0 p-0 py-2">{{ experience.position }}, {{ experience.agency }}</h4>
                        <p class="m-0 p-0 py-2">{{ experience.description }}</p>
                        <span value="">{{ experience.date }}, {{ experience.city }}</span>
                    </div>
                </template>
            </div>
        </div>
    </section> -->
</template>

<style scoped>
section.experience {
    background-color: rgb(194, 203, 160)
}

h2 {
    color: rgb(33, 37, 41)
}

h4 {
    display: inline-block;
    color: rgb(194, 203, 160);
}

p {
    font-size: 1.5rem;
}
</style>