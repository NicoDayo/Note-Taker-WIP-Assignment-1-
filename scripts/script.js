// ====== DARK MODE FUNCTIONALITY AND CONSTANTS =============
// main parts
const darkmodebutton = document.querySelector(".Darkmode")
const DM_body = document.querySelector('body')
const DM_textcontainer = document.querySelector('textarea')

// Title header and links
const DM_titleheader = document.querySelector('h1')
const DM_headerlinks = document.querySelectorAll('#Ulist li a')

// sidebar
const DM_sidebar = document.querySelector('.sidebar')
const DM_noteheader = document.querySelector('h2')
const DM_sidebullets = document.querySelector('ul')
const DM_sidenotes = document.querySelectorAll('aside ul li')

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
   DM_textcontainer.classList.toggle('darktext')

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

//========================================================================


// ====== CANCEL BUTTON FUNCTIONALITY ==========
// ====== constants ========
const CancelBut = document.querySelector('.Cancel')
const textbox = document.querySelector('main') // textbox
const bottom_buttons = document.querySelector('.buttons-bot') // save and cancel buttons

function cancel(){
   textbox.style.visibility = 'hidden'
   bottom_buttons.style.visibility = 'hidden'
   textarea.style.visibility = 'hidden'
}
CancelBut.addEventListener('click', cancel);



//======= New Note Toggle ============

const NewnoteBut = document.querySelector('.Newnote')

function newnotetoggle(){
   textbox.style.visibility = 'visible'
   bottom_buttons.style.visibility = 'visible'
   textarea.style.visibility = 'visible'
   textarea.value.toggle('main');
}
NewnoteBut.addEventListener('click', newnotetoggle);



//============ NOTE ARRAY =================

let ArrayNotes = 
[{title:"Note One",
   body:"this is the 1st note"},
{title:"Note Two",
   body:"this is the 2nd note"}
]

//======== SAVE FUNCTIONALITY =========
const sidebar_notes = document.querySelector('aside ul')
const saveBut = document.querySelector('.Save')

function save(){
   let titleName = prompt('Save note title as?:');
   let generated_note = {title: titleName, body: textarea.value};
   ArrayNotes.push(generated_note);
   notelistAppend();
}
saveBut.addEventListener('click' , save);

function notelistAppend(){
   let listing = document.createElement('li');
   sidebar_notes.append(listing);
   listing.value === titleName

}
//=========== Note Displaying Inquiry =======================
sidebar_notes.addEventListener('click', Note_Display);
function Note_Display(inquiry){
   var notetitle_Search = inquiry.target.innerText
   for (var i = 0; i < ArrayNotes.length; i++)
   {
      if (ArrayNotes[i].textContent === notetitle_Search){
         textarea.value = ArrayNotes[i].body
      }
   } 
}







