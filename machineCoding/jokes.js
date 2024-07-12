const url = 'https://chucknorris.io/jokes/random'

// handle this endpoint with promises
const displayJoke = document.getElementById('display-joke')
const button = document.getElementById('get-joke')

let latestRequest = 0

button.addEventListener('click', getRandomJoke)

function getRandomJoke() {
    //const currentRequest = ++latestRequest
    latestRequest++
    const currentRequest = latestRequest
    
    fetch(url)
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`)
        }
        return response.json()
    })
    .then(data => {
        console.log(`Current: ${currentRequest}, Latest: ${latestRequest}`)
        if(currentRequest === latestRequest){
            displayJoke.innerHTML = `${data.value}`
        }
    })
    
    .catch((error) => console.log(`Error fetching joke: ${error}`))
    displayJoke.innerHTML = `something went wrong`
}