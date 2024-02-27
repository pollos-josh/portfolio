const dropdownButton = document.querySelector('#user-menu-button');
const dropdownList = document.querySelector('#user-menu-list');

dropdownButton.addEventListener('click', () => {
    dropdownList.classList.toggle('hidden');
});