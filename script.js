

  
  function moveButton() {
    var button = document.getElementById("askButton");
    var maxX = window.innerWidth - button.clientWidth;
    var maxY = window.innerHeight - button.clientHeight;

    var hoverCount = 0;
 

    button.addEventListener('mouseenter', function handleMouseEnter() {
      hoverCount++;
  
      // Show alert based on the number of hovers
    
      if (hoverCount === 3) {
        alert('panne i will kill u ,buy it for me ! 😡');
      }
    
  });
  
    var newX = Math.floor(Math.random() * maxX);
    var newY = Math.floor(Math.random() * maxY);
  
    button.style.position = "absolute";
    button.style.left = newX + "px";
    button.style.top = newY + "px";

    
  }
  

  function askSister2() {
    // Clear all content from the page
    document.body.innerHTML = '';
  
    // Create an image element for the GIF
    var gifImage = document.createElement('img');
    gifImage.src = 'https://media1.giphy.com/media/BYoRqTmcgzHcL9TCy1/200w.gif?cid=6c09b952jm4sbfb6mgys99vl93tu4o6kjo9exi75l21y0whn&ep=v1_gifs_search&rid=200w.gif&ct=g'; // Replace with the actual path to your GIF
    gifImage.alt = 'Funny GIF';
    gifImage.style.width = '100%';
    gifImage.style.height = 'auto'; // Maintain aspect ratio
    gifImage.style.display = 'block'; // Center the image
    gifImage.style.margin = 'auto'; // Center the image
  
    // Append the GIF image to the body
    document.body.appendChild(gifImage);

  // Create a timer element
  var timerElement = document.createElement('div');
  timerElement.id = 'timer';
  timerElement.style.textAlign = 'center';
  timerElement.style.fontSize = '40px'; // Increase font size for a digital clock look
  timerElement.style.marginTop = '10px';

  // Append the timer element to the body
  document.body.appendChild(timerElement);

  // Start the timer countdown
  startTimer(15, timerElement);

  
    // Create a back button
    var backButton = document.createElement('button');
    backButton.innerText = 'Back';
    backButton.style.display = 'block'; // Center the button
    backButton.style.margin = 'auto'; // Center the button
    backButton.style.padding='20px';
    backButton.style.marginTop='30px';
    backButton.addEventListener('click', goBack);
  
  
    // Append the back button to the body
    document.body.appendChild(backButton);

  // Create a redirect button
  var redirectButton = document.createElement('button');
  redirectButton.innerText = 'Flipkart';
  redirectButton.style.display = 'block'; // Center the button
  redirectButton.style.margin = 'auto'; // Center the button
  redirectButton.style.marginTop='10px';
  redirectButton.style.backgroundColor = '#007bff'; // Blue color
  redirectButton.style.color = '#fff'; // White text color
  redirectButton.style.border = 'none';
  redirectButton.style.borderRadius = '5px';
  redirectButton.style.padding = '10px';
  redirectButton.addEventListener('click', redirectToAnotherPage);

  // Append the redirect button to the body
  document.body.appendChild(redirectButton);

}
  // Function to go back to the initial content
  function goBack() {
    location.reload(); // Reload the page to restore the initial content
  }
  // Function to redirect to another page
function redirectToAnotherPage() {
  // Replace 'https://example.com' with the actual URL you want to redirect to
  window.location.href = 'https://www.flipkart.com/nothing-ear-2-dual-chamber-sound-hi-res-audio-smart-anc-connection-bluetooth-headset/p/itm6d79168be59b2?pid=ACCGQFSYJMHPNFEN&lid=LSTACCGQFSYJMHPNFENYB5EX1&marketplace=FLIPKART';
}

// Function to start the timer countdown and redirect after 2 minutes
function startTimer(duration, display) {
  var timer = duration, minutes, seconds;
  var countdownInterval = setInterval(function () {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    display.textContent = minutes + ':' + seconds;

    if (--timer < 0) {
      clearInterval(countdownInterval); // Clear the interval
      redirectToIndexPage(); // Redirect to the index page
    }
  }, 1000);
}

// Function to redirect to the index page
function redirectToIndexPage() {
  window.location.href = 'https://www.flipkart.com/nothing-ear-2-dual-chamber-sound-hi-res-audio-smart-anc-connection-bluetooth-headset/p/itm6d79168be59b2?pid=ACCGQFSYJMHPNFEN&lid=LSTACCGQFSYJMHPNFENYB5EX1&marketplace=FLIPKART'; // Replace with the actual path to your index page
}
