<script>

import store from "../data/store.js";

export default {

    name: "AppTraining",

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
    <section class="training py-4">
        <div class="container">
            <h2 class="m-0 pb-3 fs-1">Formazione</h2>
            <div class="row m-0" v-if="store.training">
                <template v-for="training in store.training">
                    <div class="col-12 p-0 py-2 text-center">
                        <div class="my-bg rounded-3 p-3">
                            <details>
                                <summary>
                                    <h4 class="m-0 p-0">{{ training.agency }}</h4>
                                </summary>
                                <p class="m-0 p-0 px-2 py-2">{{ training.description }}</p>
                                <span value="">{{ training.date }}</span>
                            </details>
                        </div>
                    </div>
                </template>
            </div>
        </div>
    </section>
</template>

<style scoped>
section.training {
    background-color: rgb(33, 37, 41);
}

.my-bg {
    background-color: rgb(194, 203, 160);
}

h2 {
    color: rgb(194, 203, 160);
}

h4 {
    display: inline-block;
    color: rgb(33, 37, 41);
}

p {
    font-size: 1.5rem;
}
</style>