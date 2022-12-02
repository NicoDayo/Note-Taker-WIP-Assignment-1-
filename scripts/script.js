
const darkmodebutton = document.querySelector("#Darkmode")
const DMbody = document.querySelector("body")
const DMsidebar = document.querySelector('aside')
const DMnoteheader = document.querySelector('h2')
const DMtitleheader = document.querySelector('h1')




function toggledark()
{
   DMbody.classList.toggle('dark')
   DMtitleheader.classList.toggle('darkmodefont')
   DMnoteheader.classList.toggle('darkmodefont')
   DMsidebar.classList.toggle('dark3')

}
darkmodebutton.addEventListener('click', toggledark)