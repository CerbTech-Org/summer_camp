document.addEventListener('DOMContentLoaded', function() {
    const faqItems = document.querySelectorAll('.bg-white.rounded-lg.shadow-md');

    faqItems.forEach(item => {
        const button = item.querySelector('.toggle-button');
        const icon = item.querySelector('.toggle-icon i');
        const content = item.querySelector('.content');

        if (button && icon && content) {
            button.addEventListener('click', function() {
                content.classList.toggle('hidden');
                
                if (icon.classList.contains('bx-plus')) {
                    icon.classList.remove('bx-plus');
                    icon.classList.add('bx-x');
                } else {
                    icon.classList.remove('bx-x');
                    icon.classList.add('bx-plus');
                }
    
                faqItems.forEach(otherItem => {
                    if (otherItem !== item) {
                        const otherIcon = otherItem.querySelector('.toggle-icon i');
                        const otherContent = otherItem.querySelector('.content');
                        otherContent.classList.add('hidden');
                        if (otherIcon) {
                            otherIcon.classList.remove('bx-x');
                            otherIcon.classList.add('bx-plus');
                        }
                    }
                });
            });
        } else {
            console.log('Erreur de sélection d\'éléments dans l\'élément FAQ:', item);
        }
    });
});

document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();
    const nom = document.getElementById('nom').value;
    const email = document.getElementById('email').value;
    const sujet = document.getElementById('sujet').value;
    const message = document.getElementById('message').value;

    fetch('/send-reminders', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            nom: nom,
            email: email,
            sujet: sujet,
            message: message
        })
    })
    .then(response => response.text())
    .then(data => {
        if (data.includes("succès") || data.includes("succès")) {
            new AWN().success('Message envoyé avec succès', { durations: { success: 3000 } });
            document.getElementById('form').reset();
        } else {
            new AWN().alert('Erreur lors de l\'envoi du formulaire', { durations: { alert: 3000 } });
        }
    })
    .catch(error => {
        console.error('Erreur:', error);
        new AWN().alert('Erreur de réseau ou problème serveur', { durations: { alert: 3000 } });
    });
});
