const submitButton = document.getElementById('submit-button');
const closePopupButton = document.getElementById('close-popup');
const popup = document.getElementById('popup');
const body = document.getElementsByTagName('body')[0];

submitButton.addEventListener('click', (event) => {
    popup.style.visibility = 'visible';
    body.classList.add('vail');
    window.open('redirect.html', '_blank');
});

closePopupButton.addEventListener('click', (event) => {
    popup.style.visibility = 'hidden';
    body.classList.remove('vail');
})

