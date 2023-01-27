let btnDesktop = document.querySelector('.icon-desktop')
let btnMobile = document.querySelector('.icon-mobile')

let graphicCodDesktop = document.querySelector('.result .preview-desktop')
let graphicCodMobile = document.querySelector('.result .preview-mobile')


// ativando funcionabilidade dos botoes de preview desktop e mobile

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


// ativando funcionabilidade dos botoes de gráfico dicamico e estatico

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

  btnSaveStatic.style.display = "flex"
  btnSaveDynamic.style.display = "none"

})

btnDynamic.addEventListener("click", e => {
  // console.log("teste");
  btnDynamic.style.background = "#0069ed"
  btnStatic.style.background = "#bcbcbc"

  formDynamic.style.display = "flex"
  formStatic.style.display = "none"

  btnSaveStatic.style.display = "none"
  btnSaveDynamic.style.display = "flex"

})


let titleForm = ''
let headLineForm = ''
let altForm = ''
let urlDesktopForm = '' 
let urlMobileForm = ''
let codEmbed = ''


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


    
    
}



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


let btnSaveDynamic = document.querySelector(".save-dynamic")

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
                'type': 'dynamic',
                'titleForm': titleForm.value,
                'embedForm': '',
                'headLineForm': '',
                'altForm': '',
                'urlDesktopForm': '',
                'urlMobileForm': '',
                'codEmbed': codEmbed
            }
        ]
    })
  })
  .then((response) => response.json())
  .then((data) => console.log(data));
  

});



function getListGraphicsApi() {
  // Sort results by id in descending order, take two
// and return the age as an integer.

  fetch('https://sheetdb.io/api/v1/m8e9lg13iu4fi?sort_by=id&sort_order=desc')
  .then((response) => response.json())
  .then((data) => {
    console.log(data)

    data.forEach(registro => {
      console.log(registro["id"])

      // criando uma novo elemento html para cada registro

      // let divGraphic = document.createElement("div");
      // divGraphic.classList.add("graphic-gsheets")

      // let imageGraphic = document.createElement("img");

      // let divTextGraphic = document.createElement("div");
      // divTextGraphic.classList.add("text")

      // let h2Graphic = document.createElement("h2");
      // h2Graphic.classList.add("title-graphic")

      // let pGraphic = document.createElement("p");
      // pGraphic.classList.add("date-graphic")



    // adicionando os dados nas novas tags

    // divGraphic

      // para.innerHTML = "This is a paragraph.";
      // document.getElementById("myDIV").appendChild(para);


    })
  });

}

getListGraphicsApi()

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


