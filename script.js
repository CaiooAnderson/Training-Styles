const switchElement = document.querySelector('.switch');
const profileImage = document.getElementById('modo');

switchElement.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    if (document.body.classList.contains('dark')) {
        profileImage.src = '../img/dark.jpg';
    } else {
        profileImage.src = '../img/light.png';
    }
});
