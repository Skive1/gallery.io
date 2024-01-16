// Add event listeners
const imgs = document.querySelectorAll('img');

imgs.forEach(img => {
  img.addEventListener('mouseover', showDesc);
  img.addEventListener('mouseout', hideDesc);
  img.addEventListener('focus', showDesc);
  img.addEventListener('blur', hideDesc);
});

// Set tabindex on load
window.addEventListener('load', addTabIndex);

function showDesc(e) {
  console.log("showDesc called");
  e.target.alt = ' ';
}

function hideDesc(e) {
  console.log("hideDesc called");
  e.target.alt = e.target.getAttribute('data-alt'); 
}

function addTabIndex() {
  console.log('addTabIndex called');

  imgs.forEach((img, i) => {
    img.tabIndex = i;
  });
  imgs.forEach(img => {
    img.addEventListener('mouseover', (e) => {
      console.log("Mouseover event"); 
      showDesc(e);
    });
  });
}