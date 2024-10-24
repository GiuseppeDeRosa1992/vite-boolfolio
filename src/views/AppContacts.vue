<script>

import store from '../data/store.js';
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
            success: false,
            store,
            checkPolicy: false,
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
                .post(`${this.store.api_url}/api/contacts`, data)
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
    },

    mounted() {
        (function (w, d) { var loader = function () { var s = d.createElement("script"), tag = d.getElementsByTagName("script")[0]; s.src = "https://cdn.iubenda.com/iubenda.js"; tag.parentNode.insertBefore(s, tag); }; if (w.addEventListener) { w.addEventListener("load", loader, false); } else if (w.attachEvent) { w.attachEvent("onload", loader); } else { w.onload = loader; } })(window, document);
    }

};

</script>

<template>
    <section>
        <div class="row m-0 justify-content-center text-white">
            <div class="col-10 col-sm-8 col-md-6 p-0">
                <h1 class="m-0 my-3 text-center text-dark">Contattami</h1>

                <template v-if="success">
                    <div class="alert alert-success" role="alert">
                        <strong>Messaggio Ricevuto</strong>
                    </div>

                </template>

                <form class="text-start" @submit.prevent="sendMessage()">

                    <div class="mb-3">
                        <label for="name" class="form-label">Nome</label>
                        <input type="text" class="form-control" name="name" :class="{ 'is-invalid': errors.name }"
                            id="name" aria-describedby="text-name" placeholder="Inserisci il Nome" v-model="name"
                            minlength="3" required>
                        <p class="text-danger" v-for="(error, index) in errors.name" :key="`name-error-${index}`">
                            {{ error }}
                        </p>
                    </div>

                    <div class="mb-3">
                        <label for="email" class="form-label">Email</label>
                        <input type="email" class="form-control" name="email" :class="{ 'is-invalid': errors.email }"
                            id="email" aria-describedby="email" placeholder="Inserisci Email" v-model="email"
                            pattern="^[^\s@]+@[^\s@]+\.[^\s@]{2,}$" autocomplete="off" required>
                        <p class="text-danger" v-for="(error, index) in errors.name" :key="`name-error-${index}`">
                            {{ error }}
                        </p>
                    </div>

                    <div class="mb-3">
                        <label for="message" class="form-label">Messaggio</label>
                        <textarea class="form-control" name="message" :class="{ 'is-invalid': errors.message }"
                            id="message" placeholder="Inserisci Messaggio" v-model="message" minlength="10"
                            required></textarea>
                        <p class="text-danger" v-for="(error, index) in errors.name" :key="`name-error-${index}`">
                            {{ error }}
                        </p>
                    </div>

                    <div class="mb-3">
                        <input type="checkbox" name="" id="" v-model="checkPolicy">
                        <span class="text-dark"> Spunta la casella per la Privacy Policy per inviare il
                            messaggio. </span>
                        <a href="https://www.iubenda.com/privacy-policy/26069970"
                            class="iubenda-white iubenda-noiframe iubenda-embed iubenda-noiframe text-decoration-none"
                            title="Privacy Policy ">Privacy
                            Policy
                        </a>
                    </div>

                    <div class="text-center">
                        <button :disabled="checkPolicy ? disabled : ''" type="submit" class="btn my-btn-outline">Invia
                            Messaggio</button>
                    </div>
                </form>
            </div>
        </div>
    </section>
</template>

<style scoped>
section {
    padding-top: 6rem;
}

div>button:hover {
    transform: scale(1.2);
    transition: 0.5s linear;
}

@media all and (max-width: 576px) {
    h1 {
        margin: 4rem 0 1rem 0 !important;
    }
}
</style>