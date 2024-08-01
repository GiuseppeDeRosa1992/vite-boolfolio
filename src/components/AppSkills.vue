<script>

import store from "../data/store.js";

export default {

    name: "AppSkills",

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
    <section class="skills">
        <div class="container">
            <h2 class="m-0 pb-3 fs-1">Competenze</h2>
            <div class="row m-0" v-if="store.skills">
                <template v-for="skill in store.skills">
                    <div class="col-6 col-sm-2 col-md-2 col-lg-1 p-0 pb-5 pt-2 text-center">
                        <i :class=skill.icon :style=skill.style></i>
                        <h6 class="m-0 p-0 py-2">{{ skill.name }}</h6>
                    </div>
                </template>
            </div>
        </div>
    </section>
</template>

<style scoped>
section.skills {
    background-color: rgb(33, 37, 41)
}

h2,
h6 {
    color: aquamarine;
}
</style>