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


// desabilitando botão de salvar caso o usuário nao tenha clicado em "gerar código"
// let clicouEmGerarCodigo = false
// document.querySelectorAll('button.btn-save').forEach(btn => {
//   btn.disabled = true;
// })

// // botao de gerar codigo embed no formulario
// document.querySelectorAll('button.generate').forEach(btn => {
//   btn.addEventListener('click', e => {
//     clicouEmGerarCodigo = true
//   })
// })

// function checarSeClicouEmGerarCodigo() {
//   if (clicouEmGerarCodigo == false) {
//     swal("Ops!", "Você precisa clicar em Gerar Código primeiro", "error");
//   }
// }


// function checarSeClicouEmGerarCodigo() {
//   if (clicouEmGerarCodigo == false) {
//     document.querySelectorAll('button.btn-save').forEach(btn => {
//       btn.disabled = true;
//       swal("Ops!", "Você precisa clicar em Gerar Código primeiro", "error");
//     })
//   } else {
    
//   }
  
// }


let titleForm = ''
let headLineForm = ''
let altForm = ''
let urlDesktopForm = '' 
let urlMobileForm = ''
let codEmbed = ''
let embedForm = ''


// Função chamada na tag form quando o usuário clica em "gerar/enviar"

function generateDynamic() {

    titleForm = document.querySelector('.dynamic input[name="title"]')
    headLineForm = document.querySelector('.dynamic input[name="headline"]')
    embedForm = document.querySelector('.dynamic input[name="embed"]')


    codEmbed = `
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


    // // habilitando botão de salvar caso o usuário nao tenha clicado em "gerar código"
    // document.querySelectorAll('button.btn-save').forEach(btn => {
    //   btn.disabled = false;
    //   btn.style.background = "#BDBCC3";
    // })

    
}


// enviando dados do formulário para o google sheets
// ferramenta usada: https://docs.sheetdb.io/sheetdb-api/read#get-content

let btnSaveStatic = document.querySelector(".save-static")

btnSaveStatic.addEventListener("click", e => {

  document.querySelector(".save-static").innerHTML = `<img class="loading" src="./imagens/loading.png" alt="">`

  // verificando se o grafico selecionando já está salvo no banco de dados (google sheets)
  if (!idSeletionGraphicApi) {
    // caso não esteja salvo, ele cria um novo registro
    methodAPI = "POST"
    idGraphic = "INCREMENT" 
    urlFetchAPI = "https://sheetdb.io/api/v1/m8e9lg13iu4fi"

  } else {
    // e se tiver salvo, ele apenas atualiza
    methodAPI = "PATCH"
    idGraphic = idSeletionGraphicApi
    urlFetchAPI = "https://sheetdb.io/api/v1/m8e9lg13iu4fi/id/" + idSeletionGraphicApi
  }

  fetch(urlFetchAPI, {

    // POST (criar) ou PATCH (atualizar)
    method: methodAPI, 
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        data: [
            {
                'id': idGraphic,
                'type': 'static',
                'data_hora': data_hora,
                'titleForm': titleForm.value,
                'headLineForm': headLineForm.value,
                'embedForm': '',
                'altForm': altForm.value,
                'urlDesktopForm': urlDesktopForm.value,
                'urlMobileForm': urlMobileForm.value,
                'codEmbed': codEmbed
            }
        ]
    })
    
  })
  .then((response) => response.json())
  .then((data) => {
    console.log(data)
    // chamando funcao da bilioteca sweetalert.js para exibir o popup
    swal("Gráfico salvo!", "Agora copie o embed gerado.", "success");

    document.querySelector(".save-static").innerHTML = "Salvar"

  });
  
  atualizarLista = "sim"

});


let btnSaveDynamic = document.querySelector(".save-dynamic")

btnSaveDynamic.addEventListener("click", e => {

  document.querySelector(".save-dynamic").innerHTML = `<img class="loading" src="./imagens/loading.png" alt="">`

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
                'data_hora': data_hora,
                'titleForm': titleForm.value,
                'headLineForm': '',
                'embedForm': embedForm.value,
                'altForm': '',
                'urlDesktopForm': '',
                'urlMobileForm': '',
                'codEmbed': codEmbed
            }
        ]
    })
  })
  .then((response) => response.json())
  .then((data) => {
        console.log(data)
       // chamando funcao da bilioteca sweetalert.js para exibir o popup
       swal("Gráfico salvo!", "Agora copie o embed gerado.", "success");

       document.querySelector(".save-dynamic").innerHTML = "Salvar"
      });
  
  atualizarLista = "sim"

});

// variável que salva todos os gráficos vindos do Google Sheets
let dataListSaveApi = ''
let dataGraphicClick = ''

function getListGraphicsApi() {

  // removendo todos os filhos (child) da classe 
  document.getElementById("list-save").innerHTML = ''


  fetch('https://sheetdb.io/api/v1/m8e9lg13iu4fi?sort_by=id&sort_order=desc')
  .then((response) => response.json())
  .then((data) => {
    console.log(data)

    dataListSaveApi = data


    data.forEach(registro => {
      console.log(registro["id"])

      // criando uma novo elemento html para cada registro

      let divGraphic = document.createElement("div");
      divGraphic.classList.add("graphic-gsheets")
      

      let imageGraphic = document.createElement("img");

      // verificando se existe alguma informação na variável de imagem
      if (!registro["urlDesktopForm"]) {
        imageGraphic.src = "./imagens/rectangle.png"
        
      } else {
        imageGraphic.src = registro["urlDesktopForm"]
      }
      

      let divTextGraphic = document.createElement("div");
      divTextGraphic.classList.add("text")

      let h2Graphic = document.createElement("h2");
      h2Graphic.classList.add("title-graphic")
      h2Graphic.innerText = registro["titleForm"]
      h2Graphic.id = registro["id"]

      let pGraphic = document.createElement("p");
      pGraphic.classList.add("date-graphic")
      pGraphic.innerText = "Salvo em " + registro["data_hora"]



    // adicionando os dados nas novas tags
      divTextGraphic.appendChild(h2Graphic)
      divTextGraphic.appendChild(pGraphic)

      divGraphic.appendChild(imageGraphic)
      divGraphic.appendChild(divTextGraphic)
      document.getElementById("list-save").appendChild(divGraphic);


      // gerando funcionabilidade quando uma dos gráficos é clicado na lista da API

      let titleGraphicSave = document.querySelectorAll('.title-graphic')
      // console.log(titleGraphicSave)
      titleGraphicSave.forEach(item => {
        item.addEventListener("click", function(){
          console.log(this.id)

          // pegado id do gráfico da API
          idSeletionGraphicApi = parseInt(this.id)

          // carregando dados e preview do gráfico clicado na lista da API

          dataListSaveApi.forEach(registroApi => {

          if (idSeletionGraphicApi == registroApi["id"]) {
            dataGraphicClick = registroApi
            console.log(registroApi)
            console.log("igual")

            // chamando funcao para carregar os dados no preview
            if (registroApi["type"] == "static") {
              generateStaticPreview(registroApi)
            } else {
              generateDynamicPreview(registroApi)
            }

        
          } 
      })

        }
        
        )
      });

    })
  });

}

// variavel do grafico clicado na lista de itens salvos
let idSeletionGraphicApi = ''


// getListGraphicsApi()


function time() {
  today=new Date();
  data = today.toLocaleDateString()
  h=today.getHours();
  m=today.getMinutes();
  s=today.getSeconds();

  data_hora = data + " " + h+":"+m

  return data_hora
  
}

data_hora = time()

console.log(data_hora)

// ativando botoes do menu lateral esquerdo

let btnNewGraphic = document.querySelector(".new-graphic")
let btnListSave = document.querySelector(".list-save")

let sectionList = document.querySelector("section.list-graphics-save")
let sectionForm = document.querySelector("section.form")

btnNewGraphic.addEventListener("click", e => {
  btnNewGraphic.style.background = "#8E0AB0"
  btnListSave.style.background = "#C5AFCC"

  sectionList.style.display = "none"
  sectionForm.style.display = "flex"

})


btnListSave.addEventListener("click", e => {

  // chamando funcao para requisitar os dados do google sheets
  if (atualizarLista == "sim") {
    getListGraphicsApi()
    atualizarLista = "nao"
  }

  btnListSave.style.background = "#8E0AB0"
  btnNewGraphic.style.background = "#C5AFCC"

  sectionList.style.display = "flex"
  sectionForm.style.display = "none"

  document.getElementById("list-save").innerHTML
})


let atualizarLista = "sim"




function generateStaticPreview(data) {

  titleForm = data["titleForm"]
  headLineForm = data["headLineForm"]
  altForm = data["altForm"]
  urlDesktopForm = data["urlDesktopForm"]
  urlMobileForm = data["urlMobileForm"]
 

  codEmbed = `
<h2 style="font-size:22px; color: #333; margin-bottom: -20px;">${titleForm}</h2>
<h3 style="font-size:14px; color: #777; font-weight: 350;">${headLineForm}</h3>
<picture class="graphic">
 <source media="(min-width: 480px)" srcset="${urlDesktopForm}" />
 <source media="(max-width: 479px)" srcset="${urlMobileForm}" />
 <img src="${urlDesktopForm}" alt="${altForm}" />
</picture>`

  let codEmbedDesktop = `
    <h2 style="font-size:22px; color: #333; margin-bottom: -20px;">${titleForm}</h2>
    <h3 style="font-size:14px; color: #777; font-weight: 350;">${headLineForm}</h3>
    <img src="${urlDesktopForm}" alt="${altForm}" />`

  let codEmbedMobile = `
    <h2 style="font-size:22px; color: #333; margin-bottom: -20px;">${titleForm}</h2>
    <h3 style="font-size:14px; color: #777; font-weight: 350;">${headLineForm}</h3>
    <img src="${urlMobileForm}" alt="${altForm}" />`
  

  graphicCodDesktop.innerHTML = codEmbedDesktop
  graphicCodMobile.innerHTML = codEmbedMobile
  // console.log(graphicCod.innerHTML)

  document.querySelector('.box-embed').value = codEmbed

  //  carregando dados para os inputs do formulario

  document.querySelector('input[name="title"]').value = data["titleForm"]
  document.querySelector('input[name="headline"]').value = data["headLineForm"]
  document.querySelector('input[name="alt"]').value = data["altForm"]
  document.querySelector('input[name="url-desktop"]').value = data["urlDesktopForm"]
  document.querySelector('input[name="url-mobile"]').value = data["urlMobileForm"]

  // mudando cor do botão e inserindo texto "atualizar"
  document.querySelector('.save-static').innerText = "Atualizar"
  document.querySelector('.save-static').style.background = "#68a5f2"

  // aparecer botão de criar novo grafico
  document.querySelector('.btn-new-static').display = "block"

   
}



function generateDynamicPreview(data) {

  titleForm = data["titleForm"]
  headLineForm = data["headLineForm"]
  embedForm = data["embedForm"]


  codEmbed = `
<h2 style="font-size:22px; color: #333; margin-bottom: -20px;">${titleForm}</h2>
<h3 style="font-size:14px; color: #777; font-weight: 350;">${headLineForm}</h3>
${embedForm}`

  let codEmbedDesktop = codEmbed

  let codEmbedMobile = codEmbed
  

  graphicCodDesktop.innerHTML = codEmbedDesktop
  graphicCodMobile.innerHTML = codEmbedMobile
  // console.log(graphicCod.innerHTML)

  document.querySelector('.dynamic .box-embed').value = codEmbed

  //  carregando dados para os inputs do formulario

  document.querySelector('input[name="title"]').value = data["titleForm"]
  document.querySelector('input[name="headline"]').value = data["headLineForm"]
  document.querySelector('input[name="embed"]').value = data["embedForm"]

  // mudando cor do botão e inserindo texto "atualizar"
  document.querySelector('.save-dynamic').innerText = "Atualizar"
  document.querySelector('.save-dynamic').style.background = "#68a5f2"

  // aparecer botão de criar novo grafico
  document.querySelector('.btn-new-dynamic').display = "block"

  
}