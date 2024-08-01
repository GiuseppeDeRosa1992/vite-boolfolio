<script>
export default {

    name: "AppAbout",

    data() {
        return {

        }
    },
};

</script>

<template>
    <section>
        <!-- <h1 class="text-white">{{ title }}</h1> -->
        <div class="container text-white">
            <h1 class="m-0 py-2 text-dark">Chi Sono?</h1>
            <h2 class="m-0 text-center">I miei Dati</h2>
            <div class="row m-0 g-3 text-center justify-content-center">
                <div class="col-6">
                    <h5 class="m-0 py-1">Nome</h5>
                    <p class="m-0 py-1">Giuseppe</p>
                </div>
                <div class="col-6">
                    <h5 class="m-0 py-1">Cognome</h5>
                    <p class="m-0 py-1">De Rosa</p>
                </div>
                <div class="col-6">
                    <h5 class="m-0 py-1">Data di Nascita:</h5>
                    <p class="m-0 py-1">10/09/1992</p>
                </div>
                <div class="col-6">
                    <h5 class="m-0 py-1">Età</h5>
                    <p class="m-0 py-1">32 Anni</p>
                </div>
                <div class="col-6">
                    <h5 class="m-0 py-1">Indirizzo di Residenza</h5>
                    <p class="m-0 py-1">Via Borgo Trento Trieste 27, Camposampiero 35012 (PD), ITALIA.</p>
                </div>
                <div class="col-6 text-center">
                    <div class="row m-0 justify-content-center">
                        <div class="col-10 p-0">
                            <h5 class=" py-1">Lingue Parlate</h5>
                            <table class="table m-0">
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
                                        <td>Ottimo</td>
                                    </tr>
                                    <tr>
                                        <td>Inglese</td>
                                        <td>Base</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <footer>

    </footer>
</template>

<style scoped>
section {
    background-color: aquamarine;
}

div.container {
    padding-top: 7rem;
}
</style>