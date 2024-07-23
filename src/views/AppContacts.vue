<script>
export default {

    name: "AppContacts",

    data() {
        return {
            // title: "Ciao questa è la Contacts"

        }
    },
};

</script>

<template>
    <section>
        <!-- <h1 class="text-white">{{ title }}</h1> -->
        <div class="container text-white py-2">
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

                <h2 class="m-0 mt-3">Contattami</h2>
                <form class="w-50 text-start">
                    <div class="mb-3">
                        <label for="name" class="form-label">Nome</label>
                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="text-name"
                            placeholder="Inserisci il Nome">
                        <div id="text-name" class="form-text"></div>
                    </div>
                    <div class="mb-3">
                        <label for="email" class="form-label">Email</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="email"
                            placeholder="Inserisci Email">
                        <div id="email" class="form-text"></div>
                    </div>
                    <div class="mb-3">
                        <label for="description" class="form-label">Messaggio</label>
                        <textarea class="form-control" id="description" placeholder="Inserisci Messaggio"></textarea>
                    </div>
                    <button type="submit" class="btn btn-primary">Invia Dati</button>
                </form>
            </div>
        </div>
    </section>
</template>

<style scoped></style>