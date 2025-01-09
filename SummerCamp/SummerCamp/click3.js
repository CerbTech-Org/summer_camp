document.getElementById('don').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('nom').value;
    const surname = document.getElementById('prenom').value;
    const email = document.getElementById('email').value;
    const telephone = document.getElementById('telephone').value;

    const selectElement = document.getElementById('type_objet');
    const selectedOption = selectElement.options[selectElement.selectedIndex];
    const objet = selectedOption.text;

    const description = document.getElementById('description').value;

    if (!objet || objet === "Sélectionnez un type d'objet") {
        new AWN().alert('Veuillez sélectionner un type d\'objet.', { durations: { alert: 3000 } });
        return;
    }

    fetch('/donate', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: name,
            surname: surname,
            email: email,
            telephone: telephone,
            objet: objet,
            description: description,
        }),
    })
    .then(response => response.text())
    .then(data => {
        if (data.includes("succès")) {
            new AWN().success('Message envoyé avec succès', { durations: { success: 3000 } });
            document.getElementById('don').reset();
        } else {
            new AWN().alert('Erreur lors de l\'envoi du formulaire', { durations: { alert: 3000 } });
        }
    })
    .catch(error => {
        console.error('Erreur:', error);
        new AWN().alert('Erreur de réseau ou problème serveur', { durations: { alert: 3000 } });
    });
});
