const openIcon = document.querySelector("#open")
const closeIcon = document.querySelector("#close")
const sidebar =  document.querySelector(".sidebar")

openIcon.addEventListener("click", ()=>{
  // openMenu()
  console.log("clicked")
  sidebar.style.right="0"
})
closeIcon.addEventListener("click", ()=>{
  // closeMenu()
  sidebar.style.right="-200px"

})

const skills = document.querySelector("#link-1")
const educations = document.querySelector("#link-2")
const experiences = document.querySelector("#link-3")

const tablinks = document.getElementsByClassName("sub-container-link")
const tabContents = document.getElementsByClassName("about-text-sub-container")

skills.addEventListener("click", () => {
  openTab(skill)
})
educations.addEventListener("click", () => {
  openTab(education)
  console.log("Target was clicked")
})
experiences.addEventListener("click", () => {
  openTab(experience)
  console.log("Target was clicked")
})



function openTab(tabName) {
  for (let tablink of tablinks) {
    console.log(tablink.classList)
    console.log(tablink)
    tablink.classList.remove("active-link")
  }
  for (let tabContent of tabContents) {
    tabContent.classList.remove("active-text")
  }
  console.log("current element is ", event.currentTarget)
  event.currentTarget.classList.add("active-link")
   console.log(tabName)
  tabName.classList.add("active-text")

}









