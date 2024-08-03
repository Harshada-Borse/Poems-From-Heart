var sidebar = document.getElementById("side-bar");

function openmenu(){
    sidebar.style.right = '0';
}

function closemenu(){
    sidebar.style.right = '-200px';
}


// -------------google form connect dcript------------
const scriptURL = 'https://script.google.com/macros/s/AKfycbxymjRIFFMWbfZ3zggT4MTZmUFdsTEJQlPG6rJuQGkA22cTAnFJ5q3Rni1_8veT8kU9Pg/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById("msg")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = "Thank you for your FeedBack 😊";
        setTimeout(() => {
            msg.innerHTML = "";
        }, 4000)
        form.reset()
      })
      .catch(error => {
        console.error('Error!', error.message);
        msg.innerHTML = "There was an error submitting your feedback. Please try again.";
      });
})