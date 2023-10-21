function predictGoals() {
    const goalsA = parseFloat(document.getElementById("goalsA").value);
    const goalsB = parseFloat(document.getElementById("goalsB").value);

    if (isNaN(goalsA) || isNaN(goalsB)) {
        document.getElementById("predictionResult").textContent = "Veuillez entrer des valeurs valides.";
        return;
    }

    const totalGoals = goalsA + goalsB;

    if (totalGoals > 1.5) {
        document.getElementById("predictionResult").textContent = "La prédiction est que le nombre total de buts sera supérieur à 1,5.";
    } else {
        document.getElementById("predictionResult").textContent = "La prédiction est que le nombre total de buts ne sera pas supérieur à 1,5.";
    }
    
}
// ... Votre code JavaScript existant ...

function predictOutcome() {
    const goalsA = parseFloat(document.getElementById("goalsA").value);
    const goalsB = parseFloat(document.getElementById("goalsB").value);
    const teamAWin = parseFloat(document.getElementById("teamAWin").value);
    const teamBWin = parseFloat(document.getElementById("teamBWin").value);

    if (isNaN(goalsA) || isNaN(goalsB) || isNaN(teamAWin) || isNaN(teamBWin)) {
        document.getElementById("predictionResult").textContent = "Veuillez entrer des valeurs valides.";
        return;
    }

    const totalGoals = goalsA + goalsB;

    let outcomePrediction = "La prédiction est que le nombre total de buts ne sera pas supérieur à 1,5.";
    if (totalGoals > 1.5) {
        outcomePrediction = "La prédiction est que le nombre total de buts sera supérieur à 1,5.";
    }

    let winnerPrediction = "La prédiction est qu'aucune équipe ne gagnera.";
    if (teamAWin > teamBWin) {
        winnerPrediction = "La prédiction est que l'Équipe A remportera la victoire.";
    } else if (teamBWin > teamAWin) {
        winnerPrediction = "La prédiction est que l'Équipe B remportera la victoire.";
    }

    document.getElementById("predictionResult").textContent = `${outcomePrediction} ${winnerPrediction}`;
}
