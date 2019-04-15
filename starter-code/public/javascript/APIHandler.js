class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  //get the full list 

  getFullList() {
    axios.get(this.BASE_URL + "/characters")
   .then(allChar => console.log(allChar.request.response))
   .catch(err => {
     console.log(err)
   });
  }


  getOneRegister (oneId) {
    axios.get(this.BASE_URL + `/characters/${oneId}`)
    .then(charId => console.log(charId.request.response))
    .catch(err => {
      console.log(err)
    })
  }
  


  createOneRegister () {
    axios.post(this.BASE_URL + ``)

  }

  updateOneRegister () {

  }

  deleteOneRegister () {

  }
}
