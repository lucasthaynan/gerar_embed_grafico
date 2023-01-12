
// let titleForm = ''
// let headLineForm = ''
// let altForm = ''
// let urlDesktopForm = ''
// let urlMobileForm = ''

let form = document.getElementById("form");



function generate() {
    
    let titleForm = document.querySelector('input[name="title"]')
    let headLineForm = document.querySelector('input[name="headline"]')
    let altForm = document.querySelector('input[name="alt"]')
    let urlDesktopForm = document.querySelector('input[name="url-desktop"]')
    let urlMobileForm = document.querySelector('input[name="url-mobile"]')

    

    console.log(titleForm.value)
    console.log(headLineForm.value)
    console.log(altForm.value)
    console.log(urlDesktopForm.value)
    console.log(urlMobileForm.value)
    

    let codEmbed = `
    <h2>${titleForm.value}</h2>
    <h3>${headLineForm.value}</h3>
    <picture class="graphic">
    <source media="(min-width: 800px)" srcset="${urlDesktopForm.value}" />
    <source media="(max-width: 799px)" srcset="${urlMobileForm.value}" />
    <img src="${urlDesktopForm.value}" alt="${altForm.value}" />
  </picture>`

    let graphicCod = document.querySelector('.result')

    graphicCod.innerHTML = codEmbed
    console.log(graphicCod.innerHTML)
    
}

// Generate()

// console.log(titleForm.value)