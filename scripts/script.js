
const darkmodebutton = document.querySelector("#Darkmode")
const DM_body = document.querySelector('body')

const DM_titleheader = document.querySelector('h1')
const DM_headerlinks = document.querySelectorAll('#Ulist li a')

const DM_sidebar = document.querySelector('.sidebar')
const DM_noteheader = document.querySelector('h2')
const DM_sidebullets = document.querySelector('ul')
const DM_sidenotes = document.querySelectorAll('aside ul li a')



function toggledark()
{
   DM_body.classList.toggle('dark')
   DM_titleheader.classList.toggle('darkmodefont')
   DM_noteheader.classList.toggle('darkmodefont')
   DM_sidebullets.classList.toggle('darkmodefont')
   DM_sidebar.classList.toggle('dark3')

      var headlink = DM_headerlinks
      {for (var i=0; i < headlink.length; i++){
      headlink[i].classList.toggle('darkmodefont')}} //goes through each a-tag in Ulist
   
      var sidelink = DM_sidenotes
      {for (var i=0; i < sidelink.length; i++){
      sidelink[i].classList.toggle('darkmodefont')}} //goes through each side note a-tag
   
}
darkmodebutton.addEventListener('click', toggledark)