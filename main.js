const url = 'http://localhost:5500/api'

const newUser = {
  name: "Goreth",
  avatar: "http://picsum.photos/200/300",
  city: "Luanda"
}

const userUpdate = {
  name: 'Luzia Lobo',
  avatar: 'http://picsum.photos/200/300',
  city: 'Cazenga'
}

function getUser() {
  axios.get(url)
  .then(response => {
    const data = response.data
    renderResults.textContent = JSON.stringify(data)
  })
  .catch(error => console.log(error))
}
getUser()

function addNewUser() {
  axios.post(url, newUser)
    .then(response => {
      alert(JSON.stringify(response.data))
    })
    .catch(error => console.log(error))
}
//addNewUser()

function updateUser() {
  axios
    .put(`${url}/3`, userUpdate)
    .then(response => {
      alert(JSON.stringify(response.data))
    })
    .catch(error => console.log(error))
}
//updateUser()

function deleteUser () {
  axios.delete(`${url}/6`)
  .then(response => {
    alert(JSON.stringify(response.data))
  })
  .catch(error => console.log(error))
}
deleteUser()
