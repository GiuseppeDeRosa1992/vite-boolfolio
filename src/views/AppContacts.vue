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
            <div class="row g-3 text-center">
                <div class="col-4">
                    <h5 class="m-0 py-1">Nome</h5>
                    <p class="m-0 py-1">Giuseppe</p>
                </div>
                <div class="col-4">
                    <h5 class="m-0 py-1">Cognome</h5>
                    <p class="m-0 py-1">De Rosa</p>
                </div>
                <div class="col-4">
                    <h5 class="m-0 py-1">Indirizzo</h5>
                    <p class="m-0 py-1">Via Borgo Trento Trieste 27, Camposampiero 35012 (PD), ITALIA.</p>
                </div>
                <div class="col-4">
                    <h5 class="m-0 py-1">Numero di Telefono</h5>
                    <p class="m-0 py-1">+39 340/6442570</p>
                </div>
                <div class="col-4">
                    <h5 class="m-0 py-1">Lingue Parlate</h5>
                    <p class="m-0 py-1">Italiano, Tedesco, Inglese</p>
                </div>
                <div class="col-4">
                    <h5 class="m-0 py-1">E-mail Personale</h5>
                    <a href="#mail">
                        <p class="m-0 py-1">derosagiuseppe1092@gmail.com</p>
                    </a>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped></style>