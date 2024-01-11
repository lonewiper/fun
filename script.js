function askSister() {
    alert("Hey sister, will you buy this amazing and absolutely necessary product for me?");
  }


  
  function moveButton() {
    var button = document.getElementById("askButton");
    var maxX = window.innerWidth - button.clientWidth;
    var maxY = window.innerHeight - button.clientHeight;
  
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
  
    // Create a back button
    var backButton = document.createElement('button');
    backButton.innerText = 'Back';
    backButton.style.display = 'block'; // Center the button
    backButton.style.margin = 'auto'; // Center the button
    backButton.style.padding='20px';
    backButton.addEventListener('click', goBack);
  
  
    // Append the back button to the body
    document.body.appendChild(backButton);
  }
  
  // Function to go back to the initial content
  function goBack() {
    location.reload(); // Reload the page to restore the initial content
  }