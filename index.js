const searchBox = document.querySelector('.search-box');
const searchBoxMemory = document.querySelector('.search-box-memory');

searchBox.addEventListener('focus', function() {
searchBoxMemory.style.display = 'flex';
});

searchBox.addEventListener('blur', function() {
searchBoxMemory.style.display = 'none';
});



const messageboxbutton = document.querySelector(".message-box")
messageboxbutton.addEventListener("click" , (event) => {
  if(messageboxbutton.style.marginTop === "516px") {
    messageboxbutton.style.marginTop = "350px"
  } else {
    messageboxbutton.style.marginTop = "516px"

  }
  
  })



const body = document.querySelector("body")

const subscriberScreen = document.createElement("div")
subscriberScreen.style.position = "fixed"
subscriberScreen.style.zIndex = "1000"
body.appendChild(subscriberScreen)
subscriberScreen.style.backgroundColor = "black"
subscriberScreen.style.display ="none"
subscriberScreen.style.left = "19rem"
subscriberScreen.style.top = "2rem"
subscriberScreen.style.width = "40rem"
subscriberScreen.style.height = "33rem"
subscriberScreen.style.flexDirection = "column"

const subscriberScreenCloseBtn = document.createElement("button")
subscriberScreenCloseBtn.textContent = "X"
subscriberScreen.appendChild(subscriberScreenCloseBtn)
subscriberScreenCloseBtn.style.color = "white"
subscriberScreenCloseBtn.style.background = "black"
subscriberScreenCloseBtn.style.width = "0.1rem"
subscriberScreenCloseBtn.style.marginLeft = "0.5rem"
subscriberScreenCloseBtn.style.marginTop = "0.5rem"

const subscribebtn = document.querySelector(".subscribe-btn")
subscribebtn.addEventListener("click" , (event) => {
    subscriberScreen.style.display = "flex"
})

subscriberScreenCloseBtn.addEventListener("click" , (event) => {
    subscriberScreen.style.display = "none"
})

const subscriberScreenh1 = document.createElement("h1")
subscriberScreen.appendChild(subscriberScreenh1)
subscriberScreenh1.textContent = "Hesabının Türü Hangisi?"
subscriberScreenh1.style.color = "white"
subscriberScreenh1.style.paddingLeft = "8.5rem"



/*body.addEventListener("click" , (event) => {
    if(subscriberScreen.style.display === "flex") {
    subscriberScreen.style.display = "none"
}
})
*/


const subscriberScreenp = document.createElement("p")
subscriberScreen.appendChild(subscriberScreenp)
subscriberScreenp.textContent = "Sana uygun doğru aboneliği seç:"
subscriberScreenp.style.color = "white"
subscriberScreenp.style.marginLeft = "13rem"

const subscriberScreenOptionsDiv = document.createElement("div")
subscriberScreen.appendChild(subscriberScreenOptionsDiv)
subscriberScreenOptionsDiv.style.display = "flex"
subscriberScreenOptionsDiv.style.justifyContent = "space-around"

subscriberScreenOptionsDiv.style.background = "white"
subscriberScreenOptionsDiv.style.height = "13rem"
subscriberScreenOptionsDiv.style.wi = "40rem"


const subscriberScreenOptionsDivLeft = document.createElement("div")
subscriberScreenOptionsDiv.appendChild(subscriberScreenOptionsDivLeft)
subscriberScreenOptionsDivLeft.style.display = "flex"
subscriberScreenOptionsDivLeft.style.flexDirection = "column"

const subscriberScreenOptionsDivLeftp1 = document.createElement("p")
subscriberScreenOptionsDivLeft.appendChild(subscriberScreenOptionsDivLeftp1)
subscriberScreenOptionsDivLeftp1.textContent = "Premium"
subscriberScreenOptionsDivLeftp1.style.color = "gray"

const subscriberScreenOptionsDivLeftp2 = document.createElement("p")
subscriberScreenOptionsDivLeft.appendChild(subscriberScreenOptionsDivLeftp2)
subscriberScreenOptionsDivLeftp2.textContent = "Bireyim"
subscriberScreenOptionsDivLeftp2.style.color = "gray"
subscriberScreenOptionsDivLeftp2.style.fontWeight = "bold"

const subscriberScreenOptionsDivLeftp3 = document.createElement("p")
subscriberScreenOptionsDivLeft.appendChild(subscriberScreenOptionsDivLeftp3)
subscriberScreenOptionsDivLeftp3.textContent = "Bireyler ve içerik üreticileri için"
subscriberScreenOptionsDivLeftp3.style.color = "gray"
subscriberScreenOptionsDivLeftp3.style.fontWeight = "bold"





const subscriberScreenOptionsDivRight = document.createElement("div")
subscriberScreenOptionsDiv.appendChild(subscriberScreenOptionsDivRight)
subscriberScreenOptionsDivRight.style.display = "flex"
subscriberScreenOptionsDivRight.style.flexDirection = "column"

const subscriberScreenOptionsDivRightp1 = document.createElement("p")
subscriberScreenOptionsDivRight.appendChild(subscriberScreenOptionsDivRightp1)
subscriberScreenOptionsDivRightp1.textContent = "Onaylı kuruluşlar"
subscriberScreenOptionsDivRightp1.style.color = "gray"

const subscriberScreenOptionsDivRightp2 = document.createElement("p")
subscriberScreenOptionsDivRight.appendChild(subscriberScreenOptionsDivRightp2)
subscriberScreenOptionsDivRightp2.textContent = "Kuruluşum"
subscriberScreenOptionsDivRightp2.style.color = "gray"
subscriberScreenOptionsDivRightp2.style.fontWeight = "bold"

const subscriberScreenOptionsDivRightp3 = document.createElement("p")
subscriberScreenOptionsDivRight.appendChild(subscriberScreenOptionsDivRightp3)
subscriberScreenOptionsDivRightp3.textContent = "İşletmeler,devlet kurumları, kar amacı gütmeyen kuruluşlar için"
subscriberScreenOptionsDivRightp3.style.color = "gray"
subscriberScreenOptionsDivRightp3.style.fontWeight = "bold"



