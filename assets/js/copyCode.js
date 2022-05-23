// This assumes that you're using Rouge; if not, update the selector
const codeBlocks = document.querySelectorAll(
  ".code-header + .highlighter-rouge"
)
const copyCodeButtons = document.querySelectorAll(".copy-code-button")

copyCodeButtons.forEach((copyCodeButton, index) => {
  const code = codeBlocks[index].innerText

  copyCodeButton.addEventListener("click", () => {
    // Copy the code to the user's clipboard
    window.navigator.clipboard.writeText(code)

    // Update the button text visually
    const { innerText: originalText } = copyCodeButton
    copyCodeButton.innerText = "Copied!"

    // (Optional) Toggle a class for styling the button
    copyCodeButton.classList.add("copied")

    // After 2 seconds, reset the button to its initial UI
    setTimeout(() => {
      copyCodeButton.innerText = originalText
      copyCodeButton.classList.remove("copied")
    }, 2000)
  })
})



const allCodes = document.querySelectorAll(".highlighter-rouge > .highlight > pre > code")
const countID = 0

allCodes.forEach(code => {
  code.setAttribute("id", "code" + countID)

  const btn = document.createElement("button")
  btn.innerHTML = "Copy"
  btn.className = "btn-copy"
  btn.setAttribute("data-clipboard-action", "copy")
  btn.setAttribute("data-clipboard-target", "#code" + countID)

  let div = document.createElement("div")
  div.appendChild(btn)

  code.before(div)

  countID++
})

const clipboard = new ClipboardJS(".btn-copy")

// var allCodeBlocksElements = $("code")
// const allCodeBlocksElements = document.querySelectorAll(
//   ".highlight > .highlight"
// )

// allCodeBlocksElements.each(function (i) {
//   // add different id for each code block

//   // target
//   var currentId = "codeblock" + (i + 1)
//   $(this).attr("id", currentId)

//   //trigger
//   var clipButton =
//     '<button class="btn" data-clipboard-target="#' +
//     currentId +
//     '"><img src="https://clipboardjs.com/assets/images/clippy.svg" width="13" alt="Copy to clipboard"></button>'
//   $(this).after(clipButton)
// })

// new Clipboard(".btn")
