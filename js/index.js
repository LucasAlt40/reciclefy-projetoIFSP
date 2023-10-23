const locations = [
  {
    imageSrc: "assets/locations/recycle.png",
    title: "Centro de Reciclagem São Paulo",
    description: "Aceitamos plásticos, vidros e metais para reciclagem.",
    location: "São Paulo",
    trashType: "Plástico",
  },
  {
    imageSrc: "assets/locations/recycle.png",
    title: "Coleta de Metal São Paulo",
    description: "Recicle Metais antigos e evite o descarte inadequado.",
    location: "São Paulo",
    trashType: "Metal",
  },
  {
    imageSrc: "assets/locations/recycle.png",
    title: "Posto de Coleta de Orgânico Matão",
    description:
      "Recicle seu Orgânico usado e ajude a preservar o meio ambiente.",
    location: "Matão",
    trashType: "Orgânico",
  },
  {
    imageSrc: "assets/locations/recycle.png",
    title: "Reciclagem de Papel Américo",
    description: "Contribua para a reciclagem de papel e a sustentabilidade.",
    location: "Américo",
    trashType: "Papel",
  },
  {
    imageSrc: "assets/locations/recycle.png",
    title: "Coleta de Vidro Osasco",
    description: "Recicle vidro para economizar recursos naturais.",
    location: "Osasco",
    trashType: "Vidro",
  },
  {
    imageSrc: "assets/locations/recycle.png",
    title: "Reciclagem de Orgânicos Ibaté",
    description: "Recicle resíduos orgânicos e produza composto orgânico.",
    location: "Ibaté",
    trashType: "Orgânicos",
  },
  {
    imageSrc: "assets/locations/recycle.png",
    title: "Ponto de Reciclagem Ribeirão Preto",
    description: "Recicle metais e reduza a poluição ambiental.",
    location: "Ribeirão Preto",
    trashType: "Metais",
  },
  {
    imageSrc: "assets/locations/recycle.png",
    title: "Centro de Coleta de Plástico Ribeirão Preto",
    description: "Ajude a reciclar plásticos e reduzir o desperdício.",
    location: "Ribeirão Preto",
    trashType: "Plástico",
  },
  {
    imageSrc: "assets/locations/recycle.png",
    title: "Posto de Reciclagem de Vidro Araraquara",
    description: "Recicle vidro para conservar recursos naturais.",
    location: "Araraquara",
    trashType: "Vidro",
  },
  {
    imageSrc: "assets/locations/recycle.png",
    title: "Reciclagem de Papel Araraquara",
    description:
      "Contribua para a reciclagem de papel e a sustentabilidade ambiental.",
    location: "Araraquara",
    trashType: "Papel",
  },
  {
    imageSrc: "assets/locations/recycle.png",
    title: "Coleta de Metal Ribeirão Preto",
    description: "Recicle seus Metal antigos de forma segura.",
    location: "Ribeirão Preto",
    trashType: "Metal",
  },
  {
    imageSrc: "assets/locations/recycle.png",
    title: "Reciclagem de Plástico Osasco",
    description: "Contribua para a reciclagem de plásticos em Osasco.",
    location: "Osasco",
    trashType: "Plástico",
  },
  {
    imageSrc: "assets/locations/recycle.png",
    title: "Ponto de Coleta de Papel São Paulo",
    description: "Recicle papel e ajude a preservar as árvores.",
    location: "São Paulo",
    trashType: "Papel",
  },
  {
    imageSrc: "assets/locations/recycle.png",
    title: "Reciclagem de Vidro Matão",
    description: "Faça a diferença reciclando vidro em Matão.",
    location: "Matão",
    trashType: "Vidro",
  },
  {
    imageSrc: "assets/locations/recycle.png",
    title: "Posto de Coleta de Orgânico Araraquara",
    description: "Recicle Orgânico e proteja o meio ambiente.",
    location: "Araraquara",
    trashType: "Orgânico",
  },
  {
    imageSrc: "assets/locations/recycle.png",
    title: "Reciclagem de Orgânicos São Paulo",
    description: "Recicle resíduos orgânicos e produza adubo natural.",
    location: "São Paulo",
    trashType: "Orgânicos",
  },
  {
    imageSrc: "assets/locations/recycle.png",
    title: "Coleta de Metais Ibaté",
    description: "Recicle metais e economize recursos naturais.",
    location: "Ibaté",
    trashType: "Metais",
  },
  {
    imageSrc: "assets/locations/recycle.png",
    title: "Centro de Reciclagem de Plástico Américo",
    description: "Recicle plásticos e ajude a reduzir a poluição.",
    location: "Américo",
    trashType: "Plástico",
  },
  {
    imageSrc: "assets/locations/recycle.png",
    title: "Posto de Reciclagem de Vidro Ribeirão Preto",
    description: "Recicle vidro de forma responsável em Ribeirão Preto.",
    location: "Ribeirão Preto",
    trashType: "Vidro",
  },
  {
    imageSrc: "assets/locations/recycle.png",
    title: "Reciclagem de Papel Matão",
    description: "Ajude a reciclar papel em Matão e proteger o meio ambiente.",
    location: "Matão",
    trashType: "Papel",
  },
  {
    imageSrc: "assets/locations/recycle.png",
    title: "Coleta de Metal Osasco",
    description:
      "Recicle seus Metal em Osasco e reduza o desperdício eletrônico.",
    location: "Osasco",
    trashType: "Metal",
  },
]

function formatarPalavra(palavra) {
  palavra = palavra.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
  palavra = palavra.replace(/\s+/g, "-").toLowerCase()

  return palavra
}

const cep = document.querySelector(`#zip-code`)
const city = document.querySelector(`#city`)
const state = document.querySelector(`#state`)
const district = document.querySelector(`#district`)
const street = document.querySelector(`#street`)

const input = document.querySelector("#busca-ponto")
const buttonFilter = document.querySelector("#filter-button")

const modal = document.getElementById("modal-error")
const fecharModalBtn = document.getElementById("fecharModal")

const renderLocationCars = () => {
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
    cardText.classList.add("card-description")

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

const aplicaFuncoesJquery = () => {
  $("a").on("click", function (e) {
    if (this.hash !== "") {
      e.preventDefault()
      var hash = this.hash
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        800
      )
    }
  })
  $(".card-location").hover(
    function () {
      $(this).css("box-shadow", "3px 3px 5px #888888")
      $(this).css("cursor", "pointer")
    },
    function () {
      $(this).css("box-shadow", "none")
    }
  )

  $(".card-location").click(function () {
    const locationTitle = $(this).find(".card-title").text()
    const locationDescription = $(this).find(".card-description").text()
    const locationCity = $(this).find(".location-card").text()
    const locationTrashType = $(this).find(".trash-type-card").text()

    $("#modal-location-title").text(locationTitle)
    $("#modal-location-description").text(locationDescription)
    $("#modal-location-city").text(locationCity)
    $("#modal-location-trash-type").text(locationTrashType)

    document.querySelector("#modal-location").showModal()
    $("#fechar-modal-location").click(function () {
      document.querySelector("#modal-location").close()
    })
  })

  cep.addEventListener(`blur`, () => {
    const cepValue = cep.value
    city.value = ""
    state.value = ""
    district.value = ""
    street.value = ""

    if (validateForm()) {
      getData(cepValue)
        .then((data) => {
          if (data.city) {
            city.value = data.city
            state.value = data.state
            district.value = data.district
            street.value = data.street
          } else {
            $.toast({
              heading: "Aviso",
              text: "Não foi possível encontrar o CEP.",
              showHideTransition: "fade",
              icon: "error",
              position: "top-right", // Posição da notificação na tela.
              bgColor: "#ff5722", // Cor de fundo da notificação.
            })
          }
        })
        .catch((error) => {
          console.log(error)
          alert("CEP não encontrado")
        })
    }
  })
}

const getData = async (cep) => {
  const url = `https://brasilaberto.com/api/v1/zipcode/${cep}`
  const response = await fetch(url)
  const data = await response.json()
  return data.result
}

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

window.addEventListener("load", () => {
  renderLocationCars()
  aplicaFuncoesJquery()
})

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

function fechaModal() {
  modal.close()
  modal.style.display = "none"

  const cards = document.querySelectorAll(".card-location")
  cards.forEach((card) => {
    card.style.display = "flex"
  })

  document.querySelector("#cities").value = "all"
  document.querySelector("#type").value = "all"
}

modal.querySelector("#scroll-to-contact").addEventListener("click", fechaModal)

fecharModalBtn.addEventListener("click", fechaModal)

buttonFilter.addEventListener("click", () => {
  const cards = document.querySelectorAll(".card-location")
  const cidadeFiltro = document.querySelector("#cities").value
  const tipoFiltro = document.querySelector("#type").value

  let algumCartaoVisivel = false

  cards.forEach((card) => {
    if (cidadeFiltro.toLowerCase() != "all") {
      const cidadeCard = formatarPalavra(
        card.querySelector(".location-card").textContent.toLowerCase()
      )
      const tipoCard = formatarPalavra(
        card.querySelector(".trash-type-card").textContent.toLowerCase()
      )

      if (tipoFiltro.toLowerCase() != "all") {
        if (
          cidadeCard.includes(cidadeFiltro) &&
          tipoCard.includes(tipoFiltro)
        ) {
          card.style.display = "flex"
          algumCartaoVisivel = true
        } else {
          card.style.display = "none"
        }
      } else {
        if (cidadeCard.includes(cidadeFiltro)) {
          card.style.display = "flex"
          algumCartaoVisivel = true
        } else {
          card.style.display = "none"
        }
      }
    } else if (tipoFiltro.toLowerCase() != "all") {
      const tipoCard = formatarPalavra(
        card.querySelector(".trash-type-card").textContent.toLowerCase()
      )
      if (tipoCard.includes(tipoFiltro)) {
        card.style.display = "flex"
        algumCartaoVisivel = true
      } else {
        card.style.display = "none"
      }
    } else {
      card.style.display = "flex"
      algumCartaoVisivel = true
    }
  })

  if (!algumCartaoVisivel) {
    modal.showModal()
    modal.style.display = "flex"
  }
})
