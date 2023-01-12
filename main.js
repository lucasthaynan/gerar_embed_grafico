
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

    let graphicCod = document.querySelector('.result')
    console.log(graphicCod.innerHTML)

    console.log(titleForm.value)
    console.log(headLineForm.value)
    console.log(altForm.value)
    console.log(urlDesktopForm.value)
    console.log(urlMobileForm.value)

    
}

// Generate()

// console.log(titleForm.value)