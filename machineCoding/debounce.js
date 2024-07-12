// https://randomuser.me/api/?results=1

document.getElementById('user-input').addEventListener('input', fetchRandomUser)

function fetchRandomUser() {
    const userInput = document.getElementById('user-input').value
    if(userInput.length > 0) {
        console.log('call');
        fetch(`https://randomuser.me/api/?results=1`)
        .then(response => response.json())
        .then(data => displayUser(data.results[0]))

        .catch((error) => console.log(`Error fetching user: ${error}`))
    }
}

function displayUser(user) {
    const userCard = document.getElementById('user-card')
    userCard.style.display = 'block'

    userCard.innerHTML = `
        <img src="${user.picture.large}" alt="${user.name.first}" />
        <p>${user.email}</p>
    `
}

function debounce(fn, delay) {
    let debounceTimer;
    return function (){
        const context = this
        const args = arguments
        clearTimeout(debounceTimer)
        debounceTimer = setTimeout(() => fn.apply(context, args), delay)
    }
}