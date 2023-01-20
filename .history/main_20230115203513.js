const { Processor } = require('windicss/lib')
const { HTMLParser } = require('windicss/utils/parser')

export function generateStyles(html) {
  // Get windi processor
  const processor = new Processor()

  // Parse all classes and put into one line to simplify operations
  const htmlClasses = new HTMLParser(html)
    .parseClasses()
    .map(i => i.result)
    .join(' ')

  // Generate preflight based on the HTML we input
  const preflightSheet = processor.preflight(html)

  // Process the HTML classes to an interpreted style sheet
  const interpretedSheet = processor.interpret(htmlClasses).styleSheet

  // Build styles
  const APPEND = false
  const MINIFY = false
  const styles = interpretedSheet.extend(preflightSheet, APPEND).build(MINIFY)

  return styles
}


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

tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }