let btnDesktop = document.querySelector('.icon-desktop')
let btnMobile = document.querySelector('.icon-mobile')

let graphicCodDesktop = document.querySelector('.result .preview-desktop')
let graphicCodMobile = document.querySelector('.result .preview-mobile')

btnDesktop.addEventListener("click", e => {
  // console.log("teste");
  graphicCodMobile.style.display = "none";
  graphicCodDesktop.style.display = "flex";

  btnDesktop.src = "./imagens/monitor.svg"
  btnMobile.src = "./imagens/smartphone-cinza.svg"
})

btnMobile.addEventListener("click", e => {
  // console.log("teste");
  graphicCodDesktop.style.display = "none";
  graphicCodMobile.style.display = "flex";

  btnDesktop.src = "./imagens/monitor-cinza.svg"
  btnMobile.src = "./imagens/smartphone.svg"
})


let btnStatic = document.querySelector('.btn-static')
let btnDynamic = document.querySelector('.btn-dynamic')

let formStatic = document.querySelector('.inputs.static')
let formDynamic = document.querySelector('.inputs.dynamic')

btnStatic.addEventListener("click", e => {
  // console.log("teste");
  btnStatic.style.background = "#0069ed"
  btnDynamic.style.background = "#bcbcbc"

  formStatic.style.display = "flex"
  formDynamic.style.display = "none"

})

btnDynamic.addEventListener("click", e => {
  // console.log("teste");
  btnDynamic.style.background = "#0069ed"
  btnStatic.style.background = "#bcbcbc"

  formDynamic.style.display = "flex"
  formStatic.style.display = "none"

})


// Função chamada na tag form quando o usuário clica em "gerar/enviar"

function generateDynamic() {

    let titleForm = document.querySelector('.dynamic input[name="title"]')
    let headLineForm = document.querySelector('.dynamic input[name="headline"]')
    let embedForm = document.querySelector('.dynamic input[name="embed"]')


    let codEmbed = `
<h2 style="font-size:22px; color: #333; margin-bottom: -20px;">${titleForm.value}</h2>
<h3 style="font-size:14px; color: #777; font-weight: 350;">${headLineForm.value}</h3>
${embedForm.value}`

    let codEmbedDesktop = codEmbed

    let codEmbedMobile = codEmbed
    

    graphicCodDesktop.innerHTML = codEmbedDesktop
    graphicCodMobile.innerHTML = codEmbedMobile
    // console.log(graphicCod.innerHTML)

    document.querySelector('.dynamic .box-embed').value = codEmbed


    // enviando dados do formulário para o google sheets

    fetch('https://sheetdb.io/api/v1/m8e9lg13iu4fi', {
      method: 'POST',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({
          data: [
              {
                  'id': "INCREMENT",
                  'type': 'dynamic',
                  'titleForm': titleForm.value,
                  'embedForm': embedForm.value,
                  'codEmbed': codEmbed
              }
          ]
      })
    })
    .then((response) => response.json())
    .then((data) => console.log(data));

    
}

let titleForm = ''
let headLineForm = ''
let altForm = ''
let urlDesktopForm = '' 
let urlMobileForm = ''
let codEmbed = ''

function generateStatic() {

   titleForm = document.querySelector('input[name="title"]')
   headLineForm = document.querySelector('input[name="headline"]')
   altForm = document.querySelector('input[name="alt"]')
   urlDesktopForm = document.querySelector('input[name="url-desktop"]')
   urlMobileForm = document.querySelector('input[name="url-mobile"]')
  

   codEmbed = `
<h2 style="font-size:22px; color: #333; margin-bottom: -20px;">${titleForm.value}</h2>
<h3 style="font-size:14px; color: #777; font-weight: 350;">${headLineForm.value}</h3>
<picture class="graphic">
  <source media="(min-width: 480px)" srcset="${urlDesktopForm.value}" />
  <source media="(max-width: 479px)" srcset="${urlMobileForm.value}" />
  <img src="${urlDesktopForm.value}" alt="${altForm.value}" />
</picture>`

    let codEmbedDesktop = `
      <h2 style="font-size:22px; color: #333; margin-bottom: -20px;">${titleForm.value}</h2>
      <h3 style="font-size:14px; color: #777; font-weight: 350;">${headLineForm.value}</h3>
      <img src="${urlDesktopForm.value}" alt="${altForm.value}" />`

    let codEmbedMobile = `
      <h2 style="font-size:22px; color: #333; margin-bottom: -20px;">${titleForm.value}</h2>
      <h3 style="font-size:14px; color: #777; font-weight: 350;">${headLineForm.value}</h3>
      <img src="${urlMobileForm.value}" alt="${altForm.value}" />`
    

    graphicCodDesktop.innerHTML = codEmbedDesktop
    graphicCodMobile.innerHTML = codEmbedMobile
    // console.log(graphicCod.innerHTML)

    document.querySelector('.box-embed').value = codEmbed


    
    
}


// enviando dados do formulário para o google sheets

let btnSaveStatic = document.querySelector(".save-static")

btnSaveStatic.addEventListener("click", e => {

  fetch('https://sheetdb.io/api/v1/m8e9lg13iu4fi', {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        data: [
            {
                'id': "INCREMENT",
                'type': 'static',
                'titleForm': titleForm.value,
                'embedForm': '',
                'headLineForm': headLineForm.value,
                'altForm': altForm.value,
                'urlDesktopForm': urlDesktopForm.value,
                'urlMobileForm': urlMobileForm.value,
                'codEmbed': codEmbed
            }
        ]
    })
  })
  .then((response) => response.json())
  .then((data) => console.log(data));
  

});

// generate()

// console.log(titleForm.value)

// let formSendStatic = document.querySelector(".inputs.static #sheetdb-form")

// function dataSendGoogleSheets(elementForm, listVariables) {

//   formSendStatic.addEventListener("submit", e => {

//     fetch('https://sheetdb.io/api/v1/m8e9lg13iu4fi', {
//       method: 'POST',
//       headers: {
//           'Accept': 'application/json',
//           'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({
//           data: [
//               {
//                   'id': "INCREMENT",
//                   'title': "Mark",
//                   'title': 18
//               }
//           ]
//       })
//     })
//     .then((response) => response.json())
//     .then((data) => console.log(data));
  
  
//   });

// }




// formSendStatic.addEventListener("submit", e => {
//   e.preventDefault();
//   fetch(formSendStatic.action, {
//       method : "POST",
//       body: new FormData(document.getElementById("sheetdb-form")),
//   }).then(
//       response => response.json()
//   ).then((html) => {
//     // you can put any JS code here
//     alert('success')
//   });
// });

// console.log(formSendStatic)


