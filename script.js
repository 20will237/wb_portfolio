


const OpenMenu = document.querySelector('.bx.bx-menu');
const closeNav = document.querySelector('.material-symbols-outlined.close-btn');

OpenMenu.onclick = (() => {
    const list = document.querySelector('.list');
    list.classList.toggle("active");
});

closeNav.onclick = (function(){
    const list = document.querySelector('.list');
    setTimeout(() => {
    list.classList.remove("active");
    }, 0);
    closeNav.classList.add("active_close");
    setTimeout(() => {
        closeNav.classList.remove("active_close");
    }, 1000);
    
});


var tablinks = document.getElementsByClassName('tab-links');
var tabcontents = document.getElementsByClassName('tab-contents');
      
function opentab(tabname){
   for (tablink of tablinks) {
      tablink.classList.remove("active-link");
    }
    for (tabcontent of tabcontents) {
      tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

const msg = document.getElementById("msg");


function message() {
    msg.innerHTML = "Message sent successfully";
    setTimeout(() => {
      msg.innerHTML = "";
    }, 3000); // Disparaît après 5 secondes
}

function submitForm(event) {
    event.preventDefault(); // Prevent default form submission
    
    // Get form elements
    const form = event.target;
    const nameInput = form.querySelector('input[name="name"]');
    const emailInput = form.querySelector('input[name="email"]');
    const messageInput = form.querySelector('textarea[name="message"]');
    const msgElement = document.getElementById("msg");
    
    // Validate form
    if (!nameInput.value || !emailInput.value || !messageInput.value) {
      showMessage("Please fill out all the fields", "error");
      return;
    }
    
    // Simulate form submission (replace with actual form submission logic)
    // Here you would typically send the data to a server using fetch or XMLHttpRequest
    
    // For demonstration purposes, we'll just show a success message
    setTimeout(() => {
      // Clear form
      form.reset();
      
      // Show success message
      showMessage("Message send successfully", "success");
      
      // Hide message after 5 seconds
      setTimeout(() => {
        hideMessage();
      }, 5000);
    }, 1000);
  }
  
  function showMessage(text, type) {
    const msgElement = document.getElementById("msg");
    msgElement.textContent = text;
    msgElement.className = type;
  }
  
  function hideMessage() {
    const msgElement = document.getElementById("msg");
    msgElement.className = "";
    msgElement.textContent = "";
  }

  let date =  document.getElementById("date");
  date.innerHTML = new Date().getFullYear();


  
  // ... existing code ...
  



