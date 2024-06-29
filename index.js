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
subscriberScreen.style.borderRadius = "15px"

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

subscriberScreenOptionsDiv.style.background = "black"
subscriberScreenOptionsDiv.style.height = "13rem"
subscriberScreenOptionsDiv.style.wi = "40rem"

const subscriberScreenOptionsDivLeft = document.createElement("div")
subscriberScreenOptionsDiv.appendChild(subscriberScreenOptionsDivLeft)
subscriberScreenOptionsDivLeft.style.display = "flex"
subscriberScreenOptionsDivLeft.style.flexDirection = "column"
subscriberScreenOptionsDivLeft.style.border = "1px solid gray"
subscriberScreenOptionsDivLeft.style.borderRadius = "1rem"

document.addEventListener("click" , (event) => {
  if(event.target === subscribebtn || subscriberScreen.contains(event.target)) {
    return ;
  }

  subscriberScreen.style.display = "none"
})



const subscriberScreenOptionsDivLeftp1 = document.createElement("p")
subscriberScreenOptionsDivLeft.appendChild(subscriberScreenOptionsDivLeftp1)
subscriberScreenOptionsDivLeftp1.textContent = "Premium"
subscriberScreenOptionsDivLeftp1.style.color = "gray"
subscriberScreenOptionsDivLeftp1.style.marginTop = "4rem"
subscriberScreenOptionsDivLeftp1.style.marginBottom = "0"
subscriberScreenOptionsDivLeftp1.style.paddingLeft="1rem"

const subscriberScreenOptionsDivLeftp2 = document.createElement("h3")
subscriberScreenOptionsDivLeft.appendChild(subscriberScreenOptionsDivLeftp2)
subscriberScreenOptionsDivLeftp2.textContent = "Bireyim"
subscriberScreenOptionsDivLeftp2.style.color = "white"
subscriberScreenOptionsDivLeftp2.style.fontWeight = "bold"
subscriberScreenOptionsDivLeftp2.style.margin = "0"
subscriberScreenOptionsDivLeftp2.style.paddingLeft="1rem"

const subscriberScreenOptionsDivLeftp3 = document.createElement("p")
subscriberScreenOptionsDivLeft.appendChild(subscriberScreenOptionsDivLeftp3)
subscriberScreenOptionsDivLeftp3.textContent = "Bireyler ve içerik üreticileri için"
subscriberScreenOptionsDivLeftp3.style.color = "gray"
subscriberScreenOptionsDivLeftp3.style.paddingLeft="1rem"
subscriberScreenOptionsDivLeftp3.style.margin = "0"



const subscriberScreenOptionsDivRight = document.createElement("div")
subscriberScreenOptionsDiv.appendChild(subscriberScreenOptionsDivRight)
subscriberScreenOptionsDivRight.style.display = "flex"
subscriberScreenOptionsDivRight.style.flexDirection = "column"
subscriberScreenOptionsDivRight.style.width = "14rem"
subscriberScreenOptionsDivRight.style.border = "1px solid gray"
subscriberScreenOptionsDivRight.style.borderRadius = "1rem"

subscriberScreenOptionsDivRight.addEventListener("mouseenter" , (event) => {
  subscriberScreenOptionsDivRight.style.background = "#8080805e"
})

subscriberScreenOptionsDivRight.addEventListener("mouseleave" , (event) => {
  subscriberScreenOptionsDivRight.style.background = "black"
})

subscriberScreenOptionsDivLeft.addEventListener("mouseenter" , (event) => {
  subscriberScreenOptionsDivLeft.style.background = "#8080805e"
})

subscriberScreenOptionsDivLeft.addEventListener("mouseleave" , (event) => {
  subscriberScreenOptionsDivLeft.style.background = "black"
})

const subscriberScreenOptionsDivRightp1 = document.createElement("p")
subscriberScreenOptionsDivRight.appendChild(subscriberScreenOptionsDivRightp1)
subscriberScreenOptionsDivRightp1.textContent = "Onaylı kuruluşlar"
subscriberScreenOptionsDivRightp1.style.color = "gray"
subscriberScreenOptionsDivRightp1.style.marginTop = "3rem"
subscriberScreenOptionsDivRightp1.style.marginBottom = "0"
subscriberScreenOptionsDivRightp1.style.paddingLeft="1rem"

const subscriberScreenOptionsDivRightp2 = document.createElement("h3")
subscriberScreenOptionsDivRight.appendChild(subscriberScreenOptionsDivRightp2)
subscriberScreenOptionsDivRightp2.textContent = "Kuruluşum"
subscriberScreenOptionsDivRightp2.style.color = "white"
subscriberScreenOptionsDivRightp2.style.fontWeight = "bold"
subscriberScreenOptionsDivRightp2.style.margin = "0"
subscriberScreenOptionsDivRightp2.style.paddingLeft="1rem"

const subscriberScreenOptionsDivRightp3 = document.createElement("p")
subscriberScreenOptionsDivRight.appendChild(subscriberScreenOptionsDivRightp3)
subscriberScreenOptionsDivRightp3.textContent = "İşletmeler,devlet kurumları, kar amacı gütmeyen kuruluşlar için"
subscriberScreenOptionsDivRightp3.style.color = "gray"
subscriberScreenOptionsDivRightp3.style.paddingLeft="1rem"
subscriberScreenOptionsDivRightp3.style.margin = "0"

subscriberScreenOptionsDivLeft.addEventListener("mousedown" , (event) => {
  subscriberScreenOptionsDivLeft.style.border = "2px solid #4798ed"
})

subscriberScreenOptionsDivLeft.addEventListener("mouseup" , (event) => {
  subscriberScreenOptionsDivLeft.style.border = "1px solid gray"
})

subscriberScreenOptionsDivRight.addEventListener("mousedown" , (event) => {
  subscriberScreenOptionsDivRight.style.border = "2px solid #4798ed"
})

subscriberScreenOptionsDivRight.addEventListener("mouseup" , (event) => {
  subscriberScreenOptionsDivRight.style.border = "1px solid gray"
})


const subscriberScreenSubscribeBtn = document.createElement("button")
subscriberScreen.appendChild(subscriberScreenSubscribeBtn)
subscriberScreenSubscribeBtn.classList.add("white-subscribe-btn")
subscriberScreenSubscribeBtn.textContent =  "Abone ol"

const subscriberScreenMoreInfo = document.createElement("div")
subscriberScreen.appendChild(subscriberScreenMoreInfo)
subscriberScreenMoreInfo.classList.add("subscribe-info")

const subscriberScreenMoreInfop = document.createElement("p")
subscriberScreenMoreInfop.textContent = "Daha fazla bilgi al:"
subscriberScreenMoreInfop.style.color = "white"
subscriberScreenMoreInfo.appendChild(subscriberScreenMoreInfop)
subscriberScreenMoreInfop.style.marginLeft = "10rem"

const moreInfoPremiumBtn = document.createElement("button")
subscriberScreenMoreInfo.appendChild(moreInfoPremiumBtn)
moreInfoPremiumBtn.classList.add("more-info-premium-btn")
moreInfoPremiumBtn.textContent = "Premium"


moreInfoPremiumBtn.addEventListener("click" , (event) => {
  window.open("https://help.x.com/tr/using-x/x-premium" , "_blank")  
})

moreInfoPremiumBtn.addEventListener("mouseenter" , (event) => {
  moreInfoPremiumBtn.style.textDecoration = "1px solid blue"
})

moreInfoPremiumBtn.addEventListener("mouseleave" , (event) => {
  moreInfoPremiumBtn.style.textDecoration = "none"
})


const subscriberScreenMoreInfop2 = document.createElement("p")
subscriberScreenMoreInfop2.textContent = "ve"
subscriberScreenMoreInfop2.style.color = "white"
subscriberScreenMoreInfo.appendChild(subscriberScreenMoreInfop2)
subscriberScreenMoreInfop2.style.position = "relative"
subscriberScreenMoreInfop2.style.right = "1rem"

const moreInfoAcceptEstablishmentBtn = document.createElement("button")
subscriberScreenMoreInfo.appendChild(moreInfoAcceptEstablishmentBtn)
moreInfoAcceptEstablishmentBtn.classList.add("more-info-premium-btn2")
moreInfoAcceptEstablishmentBtn.textContent = "Onaylı Kuruluşlar"

moreInfoAcceptEstablishmentBtn.addEventListener("click" , (event) => {
  window.open("https://help.x.com/using-twitter/verified-organizations" , "_blank")
})


subscriberScreenSubscribeBtn.addEventListener("click" , (event) => {
  window.open("https://x.com/i/premium_sign_up" , "_blank")
})


const twitCreateİnput = document.getElementById("twit-create-input")
const sendBtn = document.getElementsByClassName("send-button")[0]
twitCreateİnput.addEventListener("input" , (event) => {

if(twitCreateİnput.value !== "") {
 sendBtn.removeAttribute("disabled")
 sendBtn.style.backgroundColor = "rgb(12 157 255 / 92%)"
 sendBtn.style.color = "white"
} else {
  sendBtn.setAttribute("disabled" , "true")
  sendBtn.style.backgroundColor = "rgb(29 155 240 / 47%)"
}

})


const twitCreatePrivacyBtn = document.getElementById("twit-create-privacy-options")
const twitPrivacyArea = document.createElement("div")
body.appendChild(twitPrivacyArea)
twitPrivacyArea.style.height = "20rem"
twitPrivacyArea.classList.add("twit-privacy-area")


const twitPrivacyAreap1 = document.createElement("p")
twitPrivacyAreap1.textContent = "Kimler yanıtlayabilir?"
twitPrivacyAreap1.style.fontWeight = "bold"

twitPrivacyArea.appendChild(twitPrivacyAreap1)

const twitPrivacyAreap2 = document.createElement("p")
twitPrivacyAreap2.textContent= "Bu gönderiyi kimlerin yanıtlayabileceğini seç. Bahsedilen herkes yanıt verebilir."
twitPrivacyArea.appendChild(twitPrivacyAreap2)


const btnCreate = (explain , iconClass , iconClasstwo) => {
   
  const btn = document.createElement("button")
  twitPrivacyArea.appendChild(btn)
  const btnp = document.createElement("p")
  btnp.textContent = explain
  btn.appendChild(btnp)
  btnp.style.marginBottom = "0"
  btnp.style.marginTop = "0.5rem"
  btnp.style.marginLeft = "1rem"
  btnp.style.whiteSpace = "nowrap"

  const ico= document.createElement("i")
  ico.classList.add('fa', ...iconClass.split(' '))
  btn.appendChild(ico)
  btn.style.color = "white"
  btn.style.background = "black"

  const tikIco = document.createElement("i")
tikIco.classList.add('fa', ...iconClasstwo.split(' '))
btn.appendChild(tikIco)
tikIco.style.position = "fixed"
tikIco.style.color = "rgb(13 148 239)"
tikIco.style.marginLeft = "17rem"
tikIco.style.marginTop = "0.5rem"

  
  ico.style.backgroundColor = "rgb(13 148 239)"
  btn.style.display = "flex"
  ico.style.order = "-1"
  ico.style.fontSize = "xx-large"
  ico.style.width = "3.3rem"
  ico.style.height="2rem"
  ico.style.borderRadius = "5px"

  btn.style.marginBottom = "1rem"
 tikIco.style.display = "none"

 btn.addEventListener("click" , (e) => {
  tikIco.style.display = "block"
 })

 document.addEventListener("click" , (event) => {
  if(event.target === btn || btn.contains(event.target)) {
     return ;
  } 
    tikIco.style.display = "none"
  })

  return btn
}


const twitPrivacyAreabtn1 = btnCreate("Herkese açık","fa-light fa-earth-americas" , "fa-solid fa-check")
const twitPrivacyAreabtn2 = btnCreate("Takip ettiğin hesaplar","fa-light fa-user-check" , "fa-solid fa-check")
const twitPrivacyAreabtn3 = btnCreate("Onaylanmış hesaplar","fa-regular fa-circle-check" , "fa-solid fa-check")
const twitPrivacyAreabtn4 = btnCreate("Yalnızca bahsettiğin hesaplar","fa-solid fa-at" , "fa-solid fa-check")

twitPrivacyArea.style.display = "none"


twitCreatePrivacyBtn.addEventListener("click" , (event) => {
   
  twitPrivacyArea.style.display = "flex"

})

document.addEventListener("click" , (event) => {
  if(event.target === twitCreatePrivacyBtn || twitPrivacyArea.contains(event.target)) {
     return ;
  } 
    twitPrivacyArea.style.display = "none"
  })


  window.addEventListener("scroll" , (event) => {
    twitPrivacyArea.style.display = "none"
  })


  
  const newTwit = document.createElement("div")

  const centerContent = document.querySelector(".center-content")
  const secondChild = centerContent.children[1]
  centerContent.insertBefore(newTwit , secondChild)

  newTwit.style.background = "white"
  newTwit.style.height = "10rem"
  newTwit.style.width = "47.4rem"
  newTwit.style.marginLeft = "6.2rem"

  newTwit.style.display = "flex"
  newTwit.classList.add("new-twit-container")
  
  const img = document.createElement("img")
  img.src = "https://pbs.twimg.com/profile_images/1762074719711268864/sSVFPxAt_400x400.jpg"
  newTwit.appendChild(img)
  img.classList.add("new-twit-prof-photo")
