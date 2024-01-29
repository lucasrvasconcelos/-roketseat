const theme = document.querySelector(".theme #toggle-theme")

theme.addEventListener("click", () => {
    let body = document.querySelector("body")
    body.classList.toggle("light")

    let iconDark = document.querySelector(".theme #toggle-theme i.dark")
    let iconLight = document.querySelector(".theme #toggle-theme i.light")

    let favicon = document.querySelector("#favicon")

    console.log(favicon)

    if(body.classList.contains("light")){

        favicon.setAttribute("href", "assets/img/rocketseat-logo-light.png")
        toggleIcon(iconLight, iconDark, "flex")
    } else 
    {
        favicon.setAttribute("href", "assets/img/rocketseat-logo.jpg")
        toggleIcon(iconDark, iconLight, "flex")
    }
})

function toggleIcon(active, desactive, display){
    active.style.display = display
    desactive.style.display = "none"
}