const locations = [
  {
    imageSrc: "assets/locations/1.jpg",
    title: "Local de Coleta 1",
    description: "Um ponto de coleta próximo ao parque da cidade.",
    location: "São Paulo",
    trashType: "Plástico",
  },
  {
    imageSrc: "assets/locations/1.jpg",
    title: "Local de Coleta 2",
    description: "Um local conveniente para reciclar plásticos e vidros.",
    location: "São Paulo",
    trashType: "Plástico",
  },
  {
    imageSrc: "assets/locations/1.jpg",
    title: "Local de Coleta 3",
    description: "Recicle eletrônicos antigos e evite o descarte inadequado.",
    location: "Matão",
    trashType: "Metal",
  },
  {
    imageSrc: "assets/locations/1.jpg",
    title: "Local de Coleta 4",
    description:
      "Ajude a preservar a natureza reciclando seu óleo de cozinha usado.",
    location: "Américo",
    trashType: "Orgânico",
  },
  {
    imageSrc: "assets/locations/1.jpg",
    title: "Local de Coleta 5",
    description:
      "Contribua para a reciclagem de papel e contribua para a sustentabilidade.",
    location: "Osasco",
    trashType: "Papel",
  },
  {
    imageSrc: "assets/locations/1.jpg",
    title: "Local de Coleta 6",
    description:
      "Recicle seu vidro para economizar recursos naturais e reduzir a poluição.",
    location: "Ibaté",
    trashType: "Vidro",
  },
  {
    imageSrc: "assets/locations/1.jpg",
    title: "Local de Coleta 7",
    description:
      "Uma oportunidade de reciclar resíduos orgânicos e produzir composto.",
    location: "Ribeirão Preto",
    trashType: "Orgânico",
  },
  {
    imageSrc: "assets/locations/1.jpg",
    title: "Local de Coleta 8",
    description: "Reciclagem de plástico em São Paulo.",
    location: "São Paulo",
    trashType: "Plástico",
  },
  {
    imageSrc: "assets/locations/1.jpg",
    title: "Local de Coleta 9",
    description: "Reciclagem de vidro em São Paulo.",
    location: "São Paulo",
    trashType: "Vidro",
  },
  {
    imageSrc: "assets/locations/1.jpg",
    title: "Local de Coleta 10",
    description: "Reciclagem de papel em Matão.",
    location: "Matão",
    trashType: "Papel",
  },
  {
    imageSrc: "assets/locations/1.jpg",
    title: "Local de Coleta 11",
    description: "Reciclagem de papel em Matão.",
    location: "Matão",
    trashType: "Papel",
  },
  {
    imageSrc: "assets/locations/1.jpg",
    title: "Local de Coleta 12",
    description: "Reciclagem de óleo de cozinha em Américo.",
    location: "Américo",
    trashType: "Orgânico",
  },
  {
    imageSrc: "assets/locations/1.jpg",
    title: "Local de Coleta 13",
    description: "Reciclagem de orgânicos em Américo.",
    location: "Américo",
    trashType: "Orgânico",
  },
  {
    imageSrc: "assets/locations/1.jpg",
    title: "Local de Coleta 14",
    description: "Reciclagem de metais em Osasco.",
    location: "Osasco",
    trashType: "Metal",
  },
  {
    imageSrc: "assets/locations/1.jpg",
    title: "Local de Coleta 15",
    description: "Reciclagem de vidro em Osasco.",
    location: "Osasco",
    trashType: "Vidro",
  },
  {
    imageSrc: "assets/locations/1.jpg",
    title: "Local de Coleta 16",
    description: "Reciclagem de vidro em Ibaté.",
    location: "Ibaté",
    trashType: "Vidro",
  },
  {
    imageSrc: "assets/locations/1.jpg",
    title: "Local de Coleta 17",
    description: "Reciclagem de plástico em Ibaté.",
    location: "Ibaté",
    trashType: "Plástico",
  },
  {
    imageSrc: "assets/locations/1.jpg",
    title: "Local de Coleta 18",
    description: "Reciclagem de orgânicos em Ribeirão Preto.",
    location: "Ribeirão Preto",
    trashType: "Orgânico",
  },
  {
    imageSrc: "assets/locations/1.jpg",
    title: "Local de Coleta 19",
    description: "Reciclagem de papel em Ribeirão Preto.",
    location: "Ribeirão Preto",
    trashType: "Papel",
  },
  {
    imageSrc: "assets/locations/1.jpg",
    title: "Local de Coleta 20",
    description: "Reciclagem de vidro em Araraquara.",
    location: "Araraquara",
    trashType: "Vidro",
  },
  {
    imageSrc: "assets/locations/1.jpg",
    title: "Local de Coleta 21",
    description: "Reciclagem de papel em Araraquara.",
    location: "Araraquara",
    trashType: "Papel",
  },
]

const renderLocationCars = () => {
  /* 1 function jquery */
  const locationCards = $(".card-locations-container")

  locations.forEach((location) => {
    const cardContainer = document.createElement("div")
    cardContainer.classList.add("card-location")

    const imgCard = document.createElement("img")
    imgCard.src = location.imageSrc

    const cardBody = document.createElement("div")
    cardBody.classList.add("card-location-info")

    const cardTitle = document.createElement("h3")
    cardTitle.textContent = location.title
    cardTitle.classList.add("card-title")

    const cardText = document.createElement("p")
    cardText.textContent = location.description

    const cardFooter = document.createElement("div")
    cardFooter.classList.add("card-location-info-footer")

    const cardFooterItem = document.createElement("div")
    cardFooterItem.classList.add("card-location-info-footer-item")

    const icon = `<svg
    xmlns="http://www.w3.org/2000/svg"
    height="1em"
    viewBox="0 0 384 512"
  >
    <path
      d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"
    /></svg>`

    const cardFooterText = document.createElement("p")
    cardFooterText.textContent = location.location
    cardFooterText.classList.add("location-card")

    const cardFooterItem2 = document.createElement("div")
    cardFooterItem2.classList.add("card-location-info-footer-item")

    const icon2 = `<svg
    xmlns="http://www.w3.org/2000/svg"
    height="1em"
    viewBox="0 0 448 512"
  >
    <path
      d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"
    />
  </svg>`

    const cardFooterText2 = document.createElement("p")
    cardFooterText2.textContent = location.trashType
    cardFooterText2.classList.add("trash-type-card")

    cardContainer.appendChild(imgCard)
    cardContainer.appendChild(cardBody)
    cardBody.appendChild(cardTitle)
    cardBody.appendChild(cardText)
    cardBody.appendChild(cardFooter)
    cardFooter.appendChild(cardFooterItem)
    cardFooterItem.innerHTML = icon
    cardFooterItem.appendChild(cardFooterText)
    cardFooter.appendChild(cardFooterItem2)
    cardFooterItem2.innerHTML = icon2
    cardFooterItem2.appendChild(cardFooterText2)

    locationCards.append(cardContainer)
  })
}

window.addEventListener("load", renderLocationCars)

const input = document.querySelector("#busca-ponto")
const buttonFilter = document.querySelector("#filter-button")
const cidade = document.querySelector("#city")
const tipo = document.querySelector("#type")

input.addEventListener("keyup", () => {
  const cards = document.querySelectorAll(".card-location")
  const inputValue = input.value.toLowerCase()
  cards.forEach((card) => {
    const cardTitle = card
      .querySelector(".card-title")
      .textContent.toLocaleLowerCase()
    if (cardTitle.includes(inputValue)) {
      card.style.display = "flex"
    } else {
      card.style.display = "none"
    }
  })
})

buttonFilter.addEventListener('click', () => {
  const cards = document.querySelectorAll(".card-location")
  cards.forEach((card) => {
    const cidadeCard = card.querySelector(".location-card").textContent().toLowerCase();
    const tipoCard = card.querySelector(".trash-type-card").textContent().toLowerCase();

    if(cidade.value.toLowerCase != '') {
      /* Todo */
    }
  })
})

const getData = async (cep) => {
  const url = `https://brasilaberto.com/api/v1/zipcode/${cep}`
  const response = await fetch(url)
  const data = await response.json()
  return data.result
}

const cep = document.querySelector(`#zip-code`)
const city = document.querySelector(`#city`)
const state = document.querySelector(`#state`)
const district = document.querySelector(`#district`)
const street = document.querySelector(`#street`)

cep.addEventListener(`blur`, () => {
  const cepValue = cep.value
  city.value = ""
  state.value = ""
  district.value = ""
  street.value = ""

  if (validateForm()) {
    getData(cepValue)
      .then((data) => {
        city.value = data.city
        state.value = data.state
        district.value = data.district
        street.value = data.street
      })
      .catch((error) => {
        console.log(error)
        alert("CEP não encontrado")
      })
  }
})

const validateForm = () => {
  const nameInput = document.getElementById("name")
  const nameErrorMessage = document.querySelector(".name .error-message")

  const nameValue = nameInput.value
  if (nameValue.length <= 3) {
    nameErrorMessage.textContent = "O nome deve conter mais de 3 caracteres"
    return false
  } else {
    nameErrorMessage.textContent = ""
  }

  const emailInput = document.getElementById("email")
  const emailErrorMessage = document.querySelector(".email .error-message")

  const emailValue = emailInput.value
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/

  if (!emailRegex.test(emailValue)) {
    emailErrorMessage.textContent = "E-mail inválido"
    return false
  } else {
    emailErrorMessage.textContent = ""
  }

  const zipCodeInput = cep
  const zipCodeErrorMessage = document.querySelector(".zip-code .error-message")

  const zipCodeValue = zipCodeInput.value
  const zipCodeRegex = /^\d{8}$/

  if (!zipCodeRegex.test(zipCodeValue)) {
    zipCodeErrorMessage.textContent =
      "CEP inválido. Deve conter 8 dígitos numéricos."
    return false
  } else {
    zipCodeErrorMessage.textContent = ""
  }

  return true
}
