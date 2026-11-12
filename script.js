const dateProjection = new Date("Nov 18, 2026 18:00:00").getTime();

const minuteur = setInterval(function() {
    const maintenant = new Date().getTime();
    const distance = dateProjection - maintenant;

    const heures = Math.floor(distance / (1000 * 60 * 60)); 
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const secondes = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("compte-a-rebours").innerHTML = heures + "h " + minutes + "min " + secondes + "sec";

    if (distance < 0) {
        clearInterval(minuteur);
        document.getElementById("compte-a-rebours").innerHTML = "0h 0min 0sec";
    }
}, 1000); 


document.getElementById("btn-voter").addEventListener("click", function() {
    
    document.getElementById("section-vote").scrollIntoView({ 
        behavior: 'smooth' 
    });
    
});







