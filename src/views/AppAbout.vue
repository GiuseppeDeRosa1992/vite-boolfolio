<script>
import AppFooter from '../components/AppFooter.vue'

export default {

    name: "AppAbout",

    components: {
        AppFooter,
    },

    data() {
        return {

        }
    },
};

</script>

<template>
    <section class="py-3">
        <!-- <h1 class="text-white">{{ title }}</h1> -->
        <div class="container pb-5">
            <div class="px-3 py-5 my-bg rounded-5 my-shadow">
                <h1 class="m-0 py-2 text-dark text-center">Chi Sono?</h1>
                <p class="m-0 fs-5">Ciao, mi chiamo Giuseppe, ho 32 anni e sono di Napoli ma vivo a Padova. Sono
                    cresciuto in Provincia di Viterbo visto che quando ero piccolo i miei genitori si sono trasferiti
                    li. Parlo un pò il Tedesco dato che con la mia attuale moglie e allora fidanzata abbiamo intrapreso
                    un'esperienza che ci ha portato per ben 6 anni in Germania. Dopodichè siamo tornati in Italia. Mi
                    piace viaggiare, esplorare, apprendere nuove culture. Già mentre studiavo alle superiori nel
                    pomeriggio andavo a lavorare, per approcciarmi al mondo del lavoro ed essere indipendente. A 18 anni
                    dopo essermi diplomato ho cambiato alcuni lavori per
                    cercare quello che più mi piaceva e soddisfaceva sia mentalmente che economicamente. Tuttavia, tutto
                    è cambiato quando un giorno in Germania dopo essermi rotto un piede ho scoperto il mondo del web
                    developing. La passione per lo sviluppo web è nata
                    quasi per caso, ma è cresciuta rapidamente. Questa nuova strada mi ha entusiasmato come nulla prima
                    d'ora, portandomi ad iscrivermi e completare un corso intensivo di 6 mesi e di 700 ore tra teoria e
                    pratica in Full Stack Web Development. Ora, sono pronto a mettere in pratica le mie competenze, ad
                    imparare delle nuove e a costruire una carriera in questo campo che mi appassiona profondamente.
                </p>

                <div class="row m-0 justify-content-center pt-4">
                    <div class="col-12 col-sm-6 p-0">
                        <h4 class="text-dark py-1">Lingue Parlate:</h4>
                        <table class="table m-0 text-center">
                            <thead>
                                <tr>
                                    <th scope="col">Lingua</th>
                                    <th scope="col">Livello</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Italiano</td>
                                    <td>Madrelingua</td>
                                </tr>
                                <tr>
                                    <td>Tedesco</td>
                                    <td>Buono</td>
                                </tr>
                                <tr>
                                    <td>Inglese</td>
                                    <td>Base/Scolastico</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>

        <div class="text-center pt-3">
            <a href="file/Giuseppe_De_Rosa_CV.pdf" target="_blank" class="btn btn-outline-dark transform px-2">
                <i class="fa-regular fa-file fa-lg fa-beat"></i>
                Scarica il mio CV</a>
        </div>
    </section>


    <!-- Onda -->
    <div class="my-bg-green">
        <svg class="wave-1hkxOo rotate" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100"
            preserveAspectRatio="none">
            <path class="wavePath-haxJK1 animationPaused-2hZ4IO"
                d="M826.337463,25.5396311 C670.970254,58.655965 603.696181,68.7870267 447.802481,35.1443383 C293.342778,1.81111414 137.33377,1.81111414 0,1.81111414 L0,150 L1920,150 L1920,1.81111414 C1739.53523,-16.6853983 1679.86404,73.1607868 1389.7826,37.4859505 C1099.70117,1.81111414 981.704672,-7.57670281 826.337463,25.5396311 Z"
                fill="currentColor"></path>
        </svg>
    </div>

    <AppFooter />
</template>

<style scoped>
section {
    background-color: rgb(194, 203, 160);
}

div.container {
    padding-top: 10rem;
}

div.my-bg {
    background-color: white;
}

.my-shadow:hover {
    transform: scale(1.02);
    box-shadow: 0 10px 50px rgb(0, 0, 0);
}

.transform:hover {
    transform: scale(1.2);
    transition: linear 0.5s;
}

/* ONDA */
.my-bg-green {
    background-color: rgb(194, 203, 160)
}

@media all and (max-width: 576px) {
    h1 {
        margin-top: 4rem !important;
    }
}
</style>