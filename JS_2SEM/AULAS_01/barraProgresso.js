function animarBarraProgresso() {
    var progresso = 0;
    var barra = $(".progress-bar");
    var barraProgresso = $(".progress");
    var intervalo = setInterval(function() {
        if (progresso > 100) {
            clearInterval(intervalo);
            barraProgresso.hide();
            document.body.style.backgroundImage = `url("https://s1.1zoom.me/b5050/596/Evening_Forests_Mountains_Firewatch_Campo_Santo_549147_1920x1080.jpg")`
        }
        else {
            progresso++;
            barra.css("width", progresso + "%");
        }
    },40);
}