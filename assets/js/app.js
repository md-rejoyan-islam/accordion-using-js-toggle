const section = document.querySelectorAll(".section");
section.forEach((section) => {
  section.onclick = (e) => { 
    e.target.classList.toggle("active_accordion");
    e.target.classList.contains("active_accordion");
    const panel = e.target.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  };
});


