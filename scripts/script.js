// ====== DARK MODE FUNCTIONALITY AND CONSTANTS =============
// main parts
const darkmodebutton = document.querySelector(".Darkmode")
const DM_body = document.querySelector('body')
const DM_textcontainer = document.querySelector('textarea')

// Title header and links
const DM_titleheader = document.querySelector('h1')
const DM_headerlinks = document.querySelectorAll('#Ulist li a')

// sidebar
const DM_sidebar = document.querySelector('aside')
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
const textbox = document.querySelector('main textarea') // textbox
const bottom_buttons = document.querySelector('.buttons-bot') // save and cancel buttons

function cancel(){
   textbox.style.visibility = 'hidden'
   bottom_buttons.style.visibility = 'hidden'
}
CancelBut.addEventListener('click', cancel);



//======= New Note Toggle ============

const NewnoteBut = document.querySelector('.Newnote')

function newnotetoggle(){
   textbox.style.visibility = 'visible'
   bottom_buttons.style.visibility = 'visible'
}
NewnoteBut.addEventListener('click', newnotetoggle);



//============ NOTE ARRAY =================

let ArrayNotes = 
[{title:"Note One",
   body:"This is the 1st note"},
{title:"Note Two",
   body:"This is the 2nd note"}
]

//======== SAVE FUNCTIONALITY =========
const sidebar_notes = document.querySelector('aside ul')
const saveBut = document.querySelector('.Save')

function save(){
   let saveName = prompt('Save note title as?:');
   let generated_note = {title:saveName, body:textbox.value};
   ArrayNotes.push(generated_note);
   noteListAppend();
   function noteListAppend(){
      var listing = document.createElement('li');
      var createNote = document.createTextNode(saveName);
      listing.appendChild(createNote);
      sidebar_notes.appendChild(listing);
   }
}
saveBut.addEventListener('click' , save);

//=========== Note Displaying Inquiry =======================

function Note_Display(inquiry){
   var notetitle_Search = inquiry.target.innerText
   for (var i = 0; i < ArrayNotes.length; i++)
   {
      if (ArrayNotes[i].title === notetitle_Search){
         textbox.value = ArrayNotes[i].body
      }
   } 
}   sidebar_notes.addEventListener('click', Note_Display);








