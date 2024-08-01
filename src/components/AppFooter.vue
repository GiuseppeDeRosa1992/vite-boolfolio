<script>

export default {

    name: "AppFooter",

    components: {
    },

    data() {
        return {

        }
    },
};

</script>

<template>
    <footer class="bg-dark py-3">
        <div class="row m-0 justify-content-between align-items-center py-3">
            <!-- LINK -->
            <div class="col-12 col-sm-4">
                <div>
                    <i class="fa-brands fa-linkedin fa-2xl" style="color: #74C0FC;"></i>
                    <a href="https://www.linkedin.com/in/giuseppe-de-rosa-2a750431b/" class="px-2">Profilo Linkedin</a>
                    <i class="fa-brands fa-github fa-2xl" style="color: #000000;"></i>
                    <a href="https://github.com/GiuseppeDeRosa1992" class="px-2">Profilo Git Hub</a>
                </div>
            </div>
            <div class="col-12 col-sm-4 text-end">
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
    color: aquamarine;
}

a:hover {
    color: white;
}
</style>