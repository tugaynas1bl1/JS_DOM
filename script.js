// const elementsByTagName =Array.from(document.getElementsByTagName("h1")) // it gets all h1 tags on html collection type and converts to array
// const elementByClassName =Array.from(document.getElementsByClassName("hello")) // it gets all classes named hello on html collection type and converts to array
const h1 = document.getElementById("title") // gets one element by html id
// console.log(h1.innerText)
// h1.innerText = "New text" // it changes the text of h1 in html
// h1.innerHTML = "<p>salam<p>" // it changes tags too
// h1.textContent = "sagol"

// h1.style.color = "red"
// h1.style.fontWeight = "bold"
// h1.style.backgroundColor = "gray"
// h1.classList.add("text-red-500", "bg-green-300") // classList gets all the classes of element
// h1.classList.remove("text-3xl")
// const classExists = h1.classList.contains("text-3xl")
// console.log(classExists)
// console.log(h1)
// console.log(elementsByTagName[0])

// const body = document.getElementById("body")z
const darkModeToggle = document.getElementById("darkModeToggle")
darkModeToggle.addEventListener("mouseover", () => { // button hover
    darkModeToggle.classList.add("cursor-pointer", "!bg-green-500")
})

const firstnameInput = document.getElementById("firstnameInput")
const lastnameInput = document.getElementById("lastnameInput")
const emailInput = document.getElementById("emailInput")
const passwordInput = document.getElementById("passwordInput")

const registerBtn = document.getElementById("registerBtn")

registerBtn.addEventListener("click", (e) => {
    e.preventDefault() // it prevents default events to work
    const userInfo = {
        firstname: firstnameInput.value,
        lastname: lastnameInput.value,
        email: emailInput.value,
        password: passwordInput.value
    }
    console.log(userInfo)
})

// event 2 hisseden ibaretdir: kodun cagirildigi hisse ve listener hissesi

const eyeIcon = document.getElementById("icon")

let isPasswordVisible = false;

eyeIcon.addEventListener("click", (e) => {
    e.preventDefault();
    
    isPasswordVisible = !isPasswordVisible;
    passwordInput.type = isPasswordVisible ? "text" : "password";
    
    eyeIcon.innerHTML = isPasswordVisible
    ? `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#989090" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eye"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"/><circle cx="12" cy="12" r="3"/></svg>`
    : `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#989090" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eye-closed"><path d="m15 18-.722-3.25"/><path d="M2 8a10.645 10.645 0 0 0 20 0"/><path d="m20 15-1.726-2.05"/><path d="m4 15 1.726-2.05"/><path d="m9 18 .722-3.25"/></svg>`
});



darkModeToggle.addEventListener("click", () => {
    body.classList.toggle("bg-black") // toggle makes it like if one clicked it makes black but the second time clicked returns it to the original color white
    // h1.classList.add("text-white") // but add doesn't return
    h1.classList.toggle("text-white") 
    console.log("click")
    var arr = Array.from(document.getElementsByTagName("input"))
    arr.forEach(element => {
        element.classList.add("placeholder:text-white", "text-white")
    });


    const isDarkModeActive = body.classList.contains("bg-black");
    darkModeToggle.innerText = isDarkModeActive ? "Disable DarkMode" : "Enable DarkMode"
})
