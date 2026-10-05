const input = document.getElementById("guessInput");
const button = document.getElementById("guessButton");
const result = document.getElementById("result");
const ingredients = document.getElementById("ingredients");
const suggestions = document.getElementById("suggestions");
const guessHistory = document.getElementById("guessHistory");

const dishes = [
    {
        name: "Μουσακάς",
        ingredients: [
            "Κιμάς",
            "Μελιτζάνα",
            "Κανέλα",
            "Πατάτα",
            "Μπεσαμέλ"
        ]
    },

    {
        name: "Παστίτσιο",
        ingredients: [
            "Κιμάς",
            "Φρυγανιά",
            "Τυρί",
            "Μπεσαμέλ",
            "Μακαρόνια"
        ]
    },

    {
        name: "Παπουτσάκια",
        ingredients: [
            "Κιμάς",
            "Κανέλα",
            "Τομάτα",
            "Μελιτζάνα",
            "Μπεσαμέλ"
        ]
    },
    {
        name: "Καρμπονάρα",
        ingredients: [
            "Μπέικον",
            "Τυρί",
            "Σκόρδο",
            "Αβγό",
            "Μακαρόνια"
        ]
    },
    {
        name: "Γιουβαρλάκια",
        ingredients: [
            "Κιμάς",
            "Αβγό",
            "Λεμόνι",
            "Ρύζι",
            "Νερό"
        ]
    },
    {
        name: "Γιουβέτσι",
        ingredients: [
            "Μοσχάρι",
            "Τομάτα",
            "Κρεμμύδι",
            "Κανέλα",
            "Κριθαράκι"
        ]
    },
    {
        name: "Μπολονέζ",
        ingredients: [
            "Κιμάς",
            "Κρεμμύδι",
            "Τομάτα",
            "Γάλα",
            "Μακαρόνια"
        ]
    },
    {
        name: "Κοτόπουλο με πατάτες",
        ingredients: [
            "Πατάτα",
            "Λεμόνι",
            "Μουστάρδα",
            "Λάδι",
            "Κοτόπουλο"
        ]
    },
    {
        name: "Φασολάδα",
        ingredients: [
            "Τομάτα",
            "Σέλινο",
            "Νερό",
            "Κρεμμύδι",
            "Φασόλια"
        ]
    },
    {
        name: "Φακές",
        ingredients: [
            "Δάφνη",
            "Νερό",
            "Τομάτα",
            "Σκόρδο",
            "Φακές"
        ]
    },
    {
        name: "Ρεβυθάδα",
        ingredients: [
            "Δάφνη",
            "Καρότο",
            "Λεμόνι",
            "Κρεμμύδι",
            "Ρεβύθια"
        ]
    },
    {
        name: "Χούμους",
        ingredients: [
            "Λεμόνι",
            "Ταχίνι",
            "Σκόρδο",
            "Κύμινο",
            "Ρεβύθια"
        ]
    },
    {
        name: "Μπριάμ",
        ingredients: [
            "Μελιτζάνα",
            "Τομάτα",
            "Πατάτα",
            "Κολοκυθάκι",
            "Πιπεριά"
        ]
    },
    {
        name: "Τουρλού",
        ingredients: [
            "Μελιτζάνα",
            "Τομάτα",
            "Πατάτα",
            "Κολοκυθάκι",
            "Πιπεριά"
        ]
    },
    {
        name: "Κοτόσουπα",
        ingredients: [
            "Αβγό",
            "Ρύζι",
            "Λεμόνι",
            "Κοτόπουλο",
            "Νερό"
        ]
    },
    {
        name: "Τηγανιά Κοτόπουλο",
        ingredients: [
            "Μουστάρδα",
            "Κρεμμύδι",
            "Λεμόνι",
            "Κοτόπουλο",
            "Πιπεριά"
        ]
    },
    {
        name: "Γεμιστά",
        ingredients: [
            "Τομάτα",
            "Κιμάς",
            "Μαϊντανός",
            "Πιπεριά",
            "Ρύζι"
        ]
    },
    {
        name: "Κολοκυθάκια Γεμιστά",
        ingredients: [
            "Ρύζι",
            "Κιμάς",
            "Λεμόνι",
            "Αβγό",
            "Κολοκυθάκι"
        ]
    },
    {
        name: "Μπακαλιάρος Σκορδαλιά",
        ingredients: [
            "Πατάτα",
            "Σκόρδο",
            "Λεμόνι",
            "Μπύρα",
            "Μπακαλιάρος"
        ]
    },
    {
        name: "Κολοκυθοκεφτέδες",
        ingredients: [
            "Αβγό",
            "Άνιθος",
            "Κολοκυθάκι",
            "Φέτα",
            "Αλεύρι"
        ]
    },
    {
        name: "Ριζότο Μανιταριών",
        ingredients: [
            "Ρύζι",
            "Βούτυρο",
            "Τυρί",
            "Μανιτάρια",
            "Κρεμμύδι"
        ]
    },
    {
        name: "Κοτόπουλο Αλά Κρεμ",
        ingredients: [
            "Μανιτάρια",
            "Κρεμμύδι",
            "Κρέμα Γάλακτος",
            "Σκόρδο",
            "Κοτόπουλο"
        ]
    },
    {
        name: "Μακαρόνια Ναπολιτάνα",
        ingredients: [
            "Τομάτα",
            "Κρεμμύδι",
            "Μακαρόνια",
            "Βασιλικός",
            "Σκόρδο"
        ]
    },
    {
        name: "Ιμάμ Μπαϊλντί",
        ingredients: [
            "Μελιτζάνα",
            "Κρεμμύδι",
            "Τομάτα",
            "Σκόρδο",
            "Φέτα"
        ]
    },
    {
        name: "Σπανακόρυζο",
        ingredients: [
            "Ρύζι",
            "Κρεμμύδι",
            "Λεμόνι",
            "Σκόρδο",
            "Σπανάκι"
        ]
    },
    {
        name: "Πατατοσαλάτα",
        ingredients: [
            "Πατάτα",
            "Κρεμμύδι",
            "Μαϊντανός",
            "Μαγιονέζα",
            "Φρέσκο Κρεμμύδι"
        ]
    },
    {
        name: "Φαλάφελ",
        ingredients: [
            "Ρεβύθια",
            "Σκόρδο",
            "Κύμινο",
            "Λεμόνι",
            "Αλεύρι"
        ]
    },
    {
        name: "Σπετζοφάι",
        ingredients: [
            "Τομάτα",
            "Πιπεριά",
            "Μπούκοβο",
            "Σκόρδο",
            "Λουκάνικο"
        ]
    },
    {
        name: "Γαριδομακαρονάδα",
        ingredients: [
            "Τομάτα",
            "Βασιλικός",
            "Σκόρδο",
            "Μακαρόνια",
            "Γαρίδες"
        ]
    },
    {
        name: "Μακαρόνια με πέστο",
        ingredients: [
            "Τυρί",
            "Σκόρδο",
            "Μακαρόνια",
            "Βασιλικός",
            "Κουκουνάρι"
        ]
    },
    {
        name: "Μακαρόνια Ογκρατέν",
        ingredients: [
            "Τυρί",
            "Μακαρόνια",
            "Μοσχοκάρυδο",
            "Μπεσαμέλ",
            "Ζαμπόν"
        ]
    },
    {
        name: "Σνίτσελ Κοτόπουλο",
        ingredients: [
            "Κοτόπουλο",
            "Αβγό",
            "Αλεύρι",
            "Λάδι",
            "Φρυγανιά"
        ]
    },
    {
        name: "Σνίτσελ Χοιρινό",
        ingredients: [
            "Αβγό",
            "Αλεύρι",
            "Χοιρινό",
            "Λάδι",
            "Φρυγανιά"
        ]
    },
    {
        name: "Χοιρινή Τηγανιά",
        ingredients: [
            "Κρεμμύδι",
            "Χοιρινό",
            "Λεμόνι",
            "Σκόρδο",
            "Λάδι"
        ]
    },
    {
        name: "Χοιρινό Πρασοσέλινο",
        ingredients: [
            "Κρεμμύδι",
            "Χοιρινό",
            "Σέλινο",
            "Σκόρδο",
            "Πράσο"
        ]
    },
    {
        name: "Χοιρινό Λεμονάτο",
        ingredients: [
            "Κρεμμύδι",
            "Χοιρινό",
            "Λεμόνι",
            "Πατάτες",
            "Ρίγανη"
        ]
    },
    {
        name: "Πατάτες Γιαχνί",
        ingredients: [
            "Τομάτα",
            "Δάφνη",
            "Κρεμμύδι",
            "Πατάτα",
            "Σκόρδο"
        ]
    },
    {
        name: "Μπατζίνα",
        ingredients: [
            "Φέτα",
            "Αλεύρι",
            "Γάλα",
            "Κολοκύθα",
            "Λάδι"
        ]
    },
    {
        name: "Κρεατόσουπα",
        ingredients: [
            "Καρότο",
            "Μοσχάρι",
            "Πατάτα",
            "Σέλινο",
            "Νερό"
        ]
    }



];

const randomIndex = Math.floor(Math.random() * dishes.length);
const dish = dishes[randomIndex];

// State του παιχνιδιού
let currentIngredient = 0;
let gameOver = false;
let selectedDish = null;
const guesses = [];

function showIngredients() {
    ingredients.innerHTML = "";

    for (let i = 0; i < dish.ingredients.length; i++) {

        const clue = document.createElement("p");

        if (i <= currentIngredient) {
            clue.textContent = dish.ingredients[i];
        } else {
            clue.textContent = "???";
        }

        ingredients.appendChild(clue);
    }
}

showIngredients();

function countCommonIngredients(dish1, dish2) {
    let common = 0;

    for (let i = 0; i < dish1.ingredients.length; i++) {
        if (dish2.ingredients.includes(dish1.ingredients[i])) {
            common++;
        }
    }

    return common;
}

function makeGuess() {

    if (gameOver) {
        return;
    }

    if (selectedDish === null) {
        result.textContent = "⚠️ Επίλεξε ένα πιάτο από τη λίστα.";
        return;
    }

    // Κρατάμε το πιάτο που επέλεξε ο χρήστης
    const guessedDish = selectedDish;
    const common = countCommonIngredients(guessedDish, dish);
    let indicator;

    if (guessedDish.name === dish.name) {
        indicator = "🟩";
    } else if (common >= 3) {
        indicator = "🟧";
    } else if (common === 2) {
        indicator = "🟨";
    } else {
        indicator = "⬛";
        
    }


    // Καθαρίζουμε για το επόμενο guess
    input.value = "";
    selectedDish = null;
    suggestions.innerHTML = "";

    // Ελέγχουμε το guess
    if (guessedDish.name === dish.name) {

        result.textContent = `🟩 ${dish.name}`;
        endGame();

    } else {

        result.textContent = "❌ Λάθος!";

        if (guesses.includes(guessedDish.name)) {
            result.textContent = "⚠️ Έχεις ήδη μαντέψει αυτό το πιάτο.";
            return;
        }

        guesses.push(guessedDish.name);

        const historyItem = document.createElement("p");

        historyItem.textContent = indicator + " " + guessedDish.name;

        guessHistory.appendChild(historyItem);

        currentIngredient++;

        if (currentIngredient < dish.ingredients.length) {

            showIngredients();

        } else {

            result.textContent =
                "💀 Έχασες! Η απάντηση ήταν: " + dish.name;

            endGame();
        }
    }
}

function normalizeText(text) {
    return text
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");
}


function endGame() {
    gameOver = true;

    input.disabled = true;
    button.disabled = true;
}


// Click στο κουμπί
button.addEventListener("click", makeGuess);


// Enter στο input
input.addEventListener("keydown", function (event) {

    if (event.key === "Enter") {
        makeGuess();
    }
});

input.addEventListener("input", function () {

    selectedDish = null;

    const search = normalizeText(input.value);

    suggestions.innerHTML = "";

    if (search === "") {
        return;
    }

    for (let i = 0; i < dishes.length; i++) {

        const dishName = normalizeText(dishes[i].name);

        if (dishName.includes(search)) {

            const suggestion = document.createElement("p");

            suggestion.textContent = dishes[i].name;

            suggestion.addEventListener("click", function () {
                input.value = dishes[i].name;
                selectedDish = dishes[i];
                suggestions.innerHTML = "";
            });

            suggestions.appendChild(suggestion);
        }
    }
});