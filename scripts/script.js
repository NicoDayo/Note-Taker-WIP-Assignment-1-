// ====== DARK MODE CONSTANTS =============
// main parts
const darkmodebutton = document.querySelector(".Darkmode")
const DM_body = document.querySelector('body')

// Title header and links
const DM_titleheader = document.querySelector('h1')
const DM_headerlinks = document.querySelectorAll('#Ulist li a')

// sidebar
const DM_sidebar = document.querySelector('.sidebar')
const DM_noteheader = document.querySelector('h2')
const DM_sidebullets = document.querySelector('ul')
const DM_sidenotes = document.querySelectorAll('aside ul li a')

// buttons
const DM_newnote = document.querySelector('.Newnote')
const DM_darkmode = document.querySelector('.Darkmode')
const DM_save = document.querySelector('.Save')
const DM_cancel = document.querySelector('.Cancel')

function toggledark()
{
   DM_body.classList.toggle('darkmain')
   DM_titleheader.classList.toggle('darkmodefont')
   DM_noteheader.classList.toggle('darkmodefont')
   DM_sidebullets.classList.toggle('darkmodefont')
   DM_sidebar.classList.toggle('darksidebar')

   DM_newnote.classList.toggle('dark_newnote')
   DM_darkmode.classList.toggle('dark_darkmode')
   DM_save.classList.toggle('dark_save')
   DM_cancel.classList.toggle('dark_cancel');
   
      var headlink = DM_headerlinks
      {for (var i=0; i < headlink.length; i++){
      headlink[i].classList.toggle('darkmodefont')}} //goes through each a-tag in Ulist
   
      var sidelink = DM_sidenotes
      {for (var i=0; i < sidelink.length; i++){
      sidelink[i].classList.toggle('darkmodefont')}} //goes through each side note a-tag
      
      if (darkmodebutton.textContent == "Light Mode")
      {darkmodebutton.textContent = "Dark Mode"}
      else{
         darkmodebutton.textContent = "Light Mode"
      };
};
darkmodebutton.addEventListener('click', toggledark)