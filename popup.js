const submitButton = document.getElementById('submit-button');

submitButton.addEventListener('click', (event) => {
    var win = window.open('index.html', '_blank');
    window.open('redirect.html', '_self');
});

if(!window.opener) {
    window.open(window.location.href, '_blank');
}
else {
    const closePopupButton = document.getElementById('close-popup');
    const popup = document.getElementById('popup');
    const body = document.getElementsByTagName('body')[0];

    popup.style.visibility = 'visible';
    body.classList.add('vail');

    closePopupButton.addEventListener('click', (event) => {
        popup.style.visibility = 'hidden';
        body.classList.remove('vail');
    })
}

