// This assumes that you're using Rouge; if not, update the selector
// const codeBlocks = document.querySelectorAll(
//   ".highlight > .highlight"
// )
// const copyCodeButtons = document.querySelectorAll(".copy-code-button")

// copyCodeButtons.forEach((copyCodeButton, index) => {
//   const code = codeBlocks[index].innerText

//   copyCodeButton.addEventListener("click", () => {
//     // Copy the code to the user's clipboard
//     window.navigator.clipboard.writeText(code)

//     // Update the button text visually
//     const { innerText: originalText } = copyCodeButton
//     copyCodeButton.innerText = "Copied!"

//     // (Optional) Toggle a class for styling the button
//     copyCodeButton.classList.add("copied")

//     // After 2 seconds, reset the button to its initial UI
//     setTimeout(() => {
//       copyCodeButton.innerText = originalText
//       copyCodeButton.classList.remove("copied")
//     }, 2000)
//   })
// })

const allCodes = document.querySelectorAll(".highlighter-rouge > .highlight > pre > code")
// const countID = 0

allCodes.forEach((code, i) => {
  const codeText = allCodes[i].innerText
  code.setAttribute("id", "code" + i)
  // const materialIcon = document.createElement("span")
  //   materialIcon.className = "material-icons"
  //   materialIcon.innerHTML = "content_paste"

  const iconSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  const iconPath1 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  const iconPath2 = document.createElementNS('http://www.w3.org/2000/svg', 'path');

  iconSvg.setAttribute('height', '16');
  iconSvg.setAttribute('width', '16');
  iconSvg.setAttribute('fill', 'currentColor');
  iconSvg.setAttribute('viewBox', '0 0 16 16');
  iconSvg.classList.add('bi', 'bi-clipboard2');

  iconPath1.setAttribute(
    'd',
    'M3.5 2a.5.5 0 0 0-.5.5v12a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-12a.5.5 0 0 0-.5-.5H12a.5.5 0 0 1 0-1h.5A1.5 1.5 0 0 1 14 2.5v12a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 14.5v-12A1.5 1.5 0 0 1 3.5 1H4a.5.5 0 0 1 0 1h-.5Z'
  );
  iconPath2.setAttribute(
    'd',
    'M10 .5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5.5.5 0 0 1-.5.5.5.5 0 0 0-.5.5V2a.5.5 0 0 0 .5.5h5A.5.5 0 0 0 11 2v-.5a.5.5 0 0 0-.5-.5.5.5 0 0 1-.5-.5Z'
  );


  iconSvg.appendChild(iconPath1);
  iconSvg.appendChild(iconPath2);

  const btn = document.createElement("button")

  btn.className = "copy-code-button"
  btn.setAttribute("data-clipboard-action", "copy")
  btn.setAttribute("data-clipboard-target", "#code" + i)

  // btn.appendChild(materialIcon)
  btn.appendChild(iconSvg)
  let div = document.createElement("div")
  div.appendChild(btn)

  code.before(div)

  const copiedIconSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  const copiedIconPath1 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  const copiedIconPath2 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  const copiedIconPath3 = document.createElementNS('http://www.w3.org/2000/svg', 'path');

  copiedIconSvg.setAttribute('height', '16');
  copiedIconSvg.setAttribute('width', '16');
  copiedIconSvg.setAttribute('fill', 'currentColor');
  copiedIconSvg.setAttribute('viewBox', '0 0 16 16');
  copiedIconSvg.classList.add('bi', 'bi-clipboard2-check');

  copiedIconPath1.setAttribute(
    'd',
    'M9.5 0a.5.5 0 0 1 .5.5.5.5 0 0 0 .5.5.5.5 0 0 1 .5.5V2a.5.5 0 0 1-.5.5h-5A.5.5 0 0 1 5 2v-.5a.5.5 0 0 1 .5-.5.5.5 0 0 0 .5-.5.5.5 0 0 1 .5-.5h3Z'
  );
  copiedIconPath2.setAttribute(
    'd',
    'M3 2.5a.5.5 0 0 1 .5-.5H4a.5.5 0 0 0 0-1h-.5A1.5 1.5 0 0 0 2 2.5v12A1.5 1.5 0 0 0 3.5 16h9a1.5 1.5 0 0 0 1.5-1.5v-12A1.5 1.5 0 0 0 12.5 1H12a.5.5 0 0 0 0 1h.5a.5.5 0 0 1 .5.5v12a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5v-12Z'
  );
  copiedIconPath3.setAttribute(
    'd',
    'M10.854 7.854a.5.5 0 0 0-.708-.708L7.5 9.793 6.354 8.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3Z'
  )

  copiedIconSvg.appendChild(copiedIconPath1);
  copiedIconSvg.appendChild(copiedIconPath2);
  copiedIconSvg.appendChild(copiedIconPath3);

  btn.addEventListener("click", () => {
    window.navigator.clipboard.writeText(codeText)

    btn.removeChild(iconSvg)
    btn.appendChild(copiedIconSvg)

    setTimeout(() => {
      btn.removeChild(copiedIconSvg)
      btn.appendChild(iconSvg)
    }, 2000)
  })

})

const clipboard = new ClipboardJS(".copy-code-button")

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
