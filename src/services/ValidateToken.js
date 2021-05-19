import axios from "axios"

const validateToken = () => {
  const currentUser = localStorage.getItem('currentUser');
  if(currentUser) {
    const authData = Object.assign({}, JSON.parse(currentUser).authData)
    console.log(authData)
    axios({
      method: 'get',
      headers: Object.assign({}, authData.authData),
      url: "https://school-api.sayna.io/auth/validate_token",
    })
    .then((response) => {
      console.log(response)
    })
  }
}

export { validateToken }