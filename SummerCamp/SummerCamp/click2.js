document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const nom = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const contact = document.getElementById('contact-reason').value;
    const message = document.getElementById('message').value;

    fetch('/contact', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            nom: nom,
            email: email,
            contact: contact,
            message: message
        })
    })
    .then(response => response.text())
    .then(data => {
        if (data.includes("succès")) {
            new AWN().success('Message envoyé avec succès', { durations: { success: 3000 } });
            document.getElementById('contact-form').reset();
        } else {
            new AWN().alert('Erreur lors de l\'envoi du formulaire', { durations: { alert: 3000 } });
        }
    })
    .catch(error => {
        console.error('Erreur:', error);
        new AWN().alert('Erreur de réseau ou problème serveur', { durations: { alert: 3000 } });
    });
});
