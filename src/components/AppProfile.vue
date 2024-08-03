<script>

import AppSkills from "../components/AppSkills.vue";
import store from "../data/store.js";

export default {

    name: "AppProfile",

    components: {
        AppSkills,
    },

    data() {
        return {
            store,
        }
    },
};

</script>

<template>
    <section class="profile pb-4">
        <div class="my-p">
            <div class="row m-0 align-items-center">
                <div class="col-12 col-sm-12 col-lg-3 p-0 ps-5 pe-3 py-3">
                    <img src="../assets/foto-cv.jpg" alt="foto-profilo" class="img-thumbnail">
                    <div class="text-center pt-3">
                        <i class="fa-regular fa-envelope fa-2xl" style="color: #3d3bc4;"></i>
                        <a href="mailto:derosagiuseppe1092@gmail.com" class="px-2">derosagiuseppe1092@gmail.com</a>
                    </div>
                    <div class="text-center pt-3">
                        <i class="fa-brands fa-linkedin fa-2xl" style="color: #74C0FC;"></i>
                        <a href="https://www.linkedin.com/in/giuseppe-de-rosa-2a750431b/" class="px-2">Profilo
                            Linkedin</a>
                    </div>
                    <div class="text-center pt-3">
                        <i class="fa-brands fa-github fa-2xl" style="color: #000000;"></i>
                        <a href="https://github.com/GiuseppeDeRosa1992" class="px-2">Profilo Git Hub</a>
                    </div>
                </div>
                <div class="col-12 col-sm-12 col-lg-9 p-0 ps-3 pe-5 py-3">
                    <h1 class="m-0 my-fs text-center pb-2">GIUSEPPE DE ROSA</h1>
                    <div class="my-bg text-center my-fs px-4 py-5">
                        <p class="p-0 m-0 py-2">
                            👋 Ciao! Benvenuti nel mio Sito Portfolio! Sono Giuseppe e ho 32 anni e sono di
                            <i class="fa-solid fa-map-pin fa-lg" style="color: #e60000;"></i>
                            Napoli ma vivo a Padova!
                        </p>
                        <p class="pb-2 m-0">
                            🙋 Attualmente sono alla ricerca di un lavoro che mi sappia stimolare e mi aiuti ad
                            arricchire il mio bagaglio da Jr. Full Stack Web Developer!
                        </p>

                        <p class="pb-2 m-0">
                            Sono, quindi, disponibile a tutto! Mi metto in gioco e ho sempre voglia di imparare nuove
                            skills!
                        </p>

                        <p class="pb-2 m-0">
                            <i class="fa-solid fa-hand fa-lg" style="color: #FFD43B;"></i>
                            Se siete interessati ad avere in azienda una persona motivata, dinamica, precisa e
                            determinata, sono la persona adatta a voi! 🤗
                        </p>

                        <p class="pb-2 m-0">
                            Non esitate a contattarmi! Non vedo l'ora di mettere in pratica le mie competenze e a
                            costruire una carriera in questo campo! 🚀
                        </p>

                        <p class="pb-2 m-0">
                            <a href="/about" class="text-decoration-underline text-dark">
                                <i class="fa-solid fa-right-long fa-beat fa-xl" style="color: #000000;"></i>
                                <span class="px-2">Scopri di più su di me!</span>
                            </a>
                        </p>
                    </div>
                    <!-- SEZIONE COMPETENZE -->
                    <AppSkills />
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
section.profile {
    background: linear-gradient(180deg, rgba(194, 203, 160, 1)50%, rgba(33, 37, 41, 1) 55%);
}

div.my-p {
    padding-top: 8rem;
}

div>img {
    border-radius: 100px;
}

a {
    text-decoration: none;
    color: rgb(194, 203, 160);
}

a:hover {
    color: white;
}

div.my-bg {
    background-color: white;
    border-radius: 20px;
}

h1.my-fs {
    font-size: 6rem;
}

div.my-fs {
    font-size: 1.4rem;
}

@media all and (min-width:576px) and (max-width: 992px) {
    section.profile {
        background: linear-gradient(180deg, rgba(194, 203, 160, 1) 30%, rgba(33, 37, 41, 1) 33%);
    }

    h1.my-fs {
        color: rgb(194, 203, 160);
        font-size: 4.5rem;
        padding: 0.5rem 0 0 0;
    }
}

@media all and (max-width: 576px) {
    section.profile {
        background: linear-gradient(180deg, rgba(194, 203, 160, 1) 20%, rgba(33, 37, 41, 1) 23%);
    }

    h1.my-fs {
        color: rgb(194, 203, 160);
        font-size: 3.5rem;
        padding: 0.5rem 0 0 0;
    }
}

@media all and (max-width: 450px) {
    section.profile {
        background: linear-gradient(180deg, rgba(194, 203, 160, 1) 12%, rgba(33, 37, 41, 1) 15%);
    }

    h1.my-fs {
        color: rgb(194, 203, 160);
        font-size: 2.5rem;
        padding: 0.5rem 0 0 0;
    }

    a {
        font-size: 0.9rem;
    }
}
</style>