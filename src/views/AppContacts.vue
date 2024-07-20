<script>
export default {

    name: "AppContacts",

    data() {
        return {
            title: "Ciao questa è la Contacts"
        }
    },
};

</script>

<template>
    <section>
        <h1 class="text-white">{{ title }}</h1>
        <div class="container text-white">
            <div class="row g-3 text-center">
                <div class="col-md-6">
                    <h5 class="m-0 py-1">Nome</h5>
                    <p class="m-0 py-1">Giuseppe</p>
                </div>
                <div class="col-md-6">
                    <h5 class="m-0 py-1">Cognome</h5>
                    <p class="m-0 py-1">De Rosa</p>
                </div>
                <div class="col-6">
                    <h5 class="m-0 py-1">Indirizzo</h5>
                    <p class="m-0 py-1">Via Borgo Trento Trieste 27, Camposampiero 35012 (PD), ITALIA.</p>
                </div>
                <div class="col-6">
                    <h5 class="m-0 py-1">Numero di Telefono</h5>
                    <p class="m-0 py-1">+39 340/6442570</p>
                </div>
                <div class="col-6">
                    <h5 class="m-0 py-1">Lingue Parlate</h5>
                    <p class="m-0 py-1">Italiano, Tedesco, Inglese</p>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped></style>