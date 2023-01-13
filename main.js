
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
    <h2 style="font-size:20px; color: #333; margin-bottom: -20px;">${titleForm.value}</h2>
    <h3 style="font-size:12px; color: #777; font-weight: 400;">${headLineForm.value}</h3>
    <picture class="graphic">
    <source media="(min-width: 480px)" srcset="${urlDesktopForm.value}" />
    <source media="(max-width: 479px)" srcset="${urlMobileForm.value}" />
    <img src="${urlDesktopForm.value}" alt="${altForm.value}" />
  </picture>`

    let graphicCod = document.querySelector('.result')

    graphicCod.innerHTML = codEmbed
    console.log(graphicCod.innerHTML)

    document.querySelector('.box-embed').value = codEmbed
    
}

// Generate()

// console.log(titleForm.value)