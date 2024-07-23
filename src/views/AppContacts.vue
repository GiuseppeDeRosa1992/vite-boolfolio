<script>


import axios from 'axios';


export default {

    name: "AppContacts",

    data() {
        return {
            name: '',
            email: '',
            message: '',
            errors: {},
            loading: false,
            success: false
        }
    },
    methods: {
        sendMessage() {
            this.loading = true;

            const data = {
                'name': this.name,
                'email': this.email,
                'message': this.message,
            }
            console.log(data);

            this.errors = {};
            axios
                .post("http://127.0.0.1:8000/api/contacts", data)
                .then(response => {
                    console.log(response);
                    this.success = response.data.success
                    if (this.success) {
                        // vedi il messaggio
                        this.name = '';
                        this.email = '';
                        this.message = '';
                    } else {
                        // messaggio di errore
                        this.errors = response.data.errors
                    }

                    this.loading = false;
                })

        }
    }
};

</script>

<template>
    <section>
        <div class="row m-0 justify-content-center text-white">
            <div class="col-6 p-0">
                <h2 class="m-0 my-3 text-center">Contattami</h2>

                <template v-if="success">
                    <div class="alert alert-success" role="alert">
                        <strong>Messaggio Ricevuto</strong>
                    </div>

                </template>

                <form class="text-start" @submit.prevent="sendMessage()">

                    <div class="mb-3">
                        <label for="name" class="form-label">Nome</label>
                        <input type="text" class="form-control" name="name" :class="{ 'is-invalid': errors.name }"
                            id="name" aria-describedby="text-name" placeholder="Inserisci il Nome" v-model="name">
                        <p class="text-danger" v-for="(error, index) in errors.name" :key="`name-error-${index}`">
                            {{ error }}
                        </p>
                    </div>

                    <div class="mb-3">
                        <label for="email" class="form-label">Email</label>
                        <input type="email" class="form-control" name="email" :class="{ 'is-invalid': errors.email }"
                            id="email" aria-describedby="email" placeholder="Inserisci Email" v-model="email">
                        <p class="text-danger" v-for="(error, index) in errors.name" :key="`name-error-${index}`">
                            {{ error }}
                        </p>
                    </div>

                    <div class="mb-3">
                        <label for="message" class="form-label">Messaggio</label>
                        <textarea class="form-control" name="message" :class="{ 'is-invalid': errors.message }"
                            id="message" placeholder="Inserisci Messaggio" v-model="message"></textarea>
                        <p class="text-danger" v-for="(error, index) in errors.name" :key="`name-error-${index}`">
                            {{ error }}
                        </p>
                    </div>

                    <div class="text-center">
                        <button type="submit" class="btn btn-primary">Invia Messaggio</button>
                    </div>
                </form>
            </div>
        </div>
    </section>
</template>

<style scoped></style>