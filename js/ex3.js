const traveler = {
    name: "Greg",
    countries: [
      {
        name: "South Korea",
        year: 2016
      },
      {
        model: "Canada",
        color: 2017
      },
      {
        model: "Taiwan",
        color: 2018
      },
      {
        model: "Indonesia",
        color: 2019
      }
    ]
  };
  
  fetch("https://thejsway-server.herokuapp.com/api/countries", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(traveler)
  })
    .then(response => response.text())
    .then(result => {
      console.log(result);
    })
    .catch(err => {
      console.error(err.message);
    });