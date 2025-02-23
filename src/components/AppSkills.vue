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
    <section class="skills pt-4">
        <div class="container">
            <h2 class="m-0 pb-3 fs-1">Competenze</h2>
            <div class="row m-0" v-if="store.skills">
                <template v-for="skill in store.skills">
                    <div class="col-6 col-sm-4 col-md-4 col-lg-2 p-0 pt-2 text-center">
                        <i class="pt-4" :class=skill.icon :style=skill.style>
                            <div>
                                <i :class=skill.vite :style=skill.styleVite class="my-position"></i>
                            </div>
                        </i>
                        <h6 class="m-0 p-0 py-1">{{ skill.name }}</h6>
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
    color: rgb(194, 203, 160);
}

.my-position {
    position: relative;
    top: -7.5px;
}

@media all and (min-width: 992px) {
    h6 {
        font-size: 0.7rem;
    }
}

@media all and (min-width: 1500px) {
    h6 {
        font-size: 1rem;
    }
}
</style>