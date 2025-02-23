<script>

export default {

    name: "AppFooter",

    components: {
    },

    data() {
        return {

        }
    },

    mounted() {
        // Carica lo script di Iubenda solo una volta
        const script = document.createElement("script");
        script.setAttribute("src", "https://cdn.iubenda.com/iubenda.js");
        document.head.appendChild(script);
    },
};

</script>

<template>
    <footer class="bg-dark py-5">
        <div class="row m-0 justify-content-between align-items-center py-3">
            <!-- LINK -->
            <div class="col-12 col-sm-2 col-md-2 p-0 py-2 ps-2">
                <div class="py-2">
                    <i class="fa-brands fa-linkedin fa-2xl" style="color: #74C0FC;"></i>
                    <a href="https://www.linkedin.com/in/giuseppe-de-rosa-2a750431b/" target="_blank">Profilo
                        Linkedin</a>
                </div>
                <div class="py-2">
                    <i class="fa-brands fa-github fa-2xl" style="color: #000000;"></i>
                    <a href="https://github.com/GiuseppeDeRosa1992" target="_blank">Profilo Git Hub </a>
                </div>
            </div>

            <div class="col-12 col-sm-1 col-md-4 p-0 py-2 ps-2 text-center">
                <a href="https://www.iubenda.com/privacy-policy/26069970"
                    class="iubenda-white iubenda-noiframe iubenda-embed iubenda-noiframe"
                    title="Privacy Policy ">Privacy Policy
                </a>
                <a href="https://www.iubenda.com/privacy-policy/26069970/cookie-policy"
                    class="iubenda-white iubenda-noiframe iubenda-embed iubenda-noiframe" title="Cookie Policy ">Cookie
                    Policy
                </a>
            </div>

            <div class="col-12 col-sm-6 col-md-4 text-end p-0 py-2 pe-2">
                <!-- DATI -->
                <h5 class="m-0 text-white">GIUSEPPE DE ROSA
                    <i class="fa-regular fa-copyright fa-lg" style="color: 255255255;"></i>
                </h5>
                <a href="mailto:giuseppederosa1092@gmail.com">derosagiuseppe1092@gmail.com</a>
            </div>
        </div>
    </footer>
</template>

<style scoped>
a {
    text-decoration: none;
    color: rgb(194, 203, 160);
}

a:hover {
    color: white;
}

a.iubenda-white.iubenda-noiframe.iubenda-embed.iubenda-noiframe {
    margin-right: 10px !important;
}

@media all and (max-width: 500px) {
    div.col-12.col-sm-2.col-md-2.p-0.py-2.ps-2 {
        text-align: center !important;
    }

    div a {
        color: rgb(194, 203, 160) !important;
    }

    div.col-12.col-sm-6.col-md-4.text-end.p-0.py-2.pe-2 {
        text-align: center !important;
    }
}
</style>