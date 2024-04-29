fetch('https://randomuser.me/api/?results=15')
    .then(response => response.json())
    .then(data => {
        data.results.forEach(user => {
            const mainDiv = document.querySelector('.carousel');
            const randomNumber1 = Math.ceil(Math.random() * 100);
            const randomNumber2 = Math.ceil(Math.random() * 100);

            const name = `${user.name.title} ${user.name.first}`;
            const image = document.createElement('div');
            const row = document.createElement('div');
            const col4 = document.createElement('div');
            const col8 = document.createElement('div');

            image.className = 'image-item';
            row.className = 'rows';
            col4.className = 'col4';
            col8.className = 'col8';

            const img = document.createElement('img');
            const h5 = document.createElement('h5');
            const pV = document.createElement('p');
            const pT = document.createElement('p');

            pT.className = 'time';
            h5.innerHTML = name;
            img.src = user.picture.thumbnail;
            pV.innerHTML = `${randomNumber2}k Views`;
            pT.innerHTML = `${randomNumber1} Sec Ago`;

            col4.appendChild(img);
            col8.appendChild(h5);
            col8.appendChild(pV);
            image.appendChild(pT);

            image.appendChild(row);
            row.appendChild(col4);
            row.appendChild(col8);
            mainDiv.appendChild(image);
        });
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });


    function makeView() {
      var percent = 0;
      var percentageText = document.getElementById('percentageText'); 
      const randomNumber = Math.ceil(Math.random() * 100);
      var interval = setInterval(function () {
        if (percent >= randomNumber) {
          clearInterval(interval);
        } else {
          percent++;
          percentageText.textContent = percent;
        }
      }, 1000); // Interval set to 1000 milliseconds (1 second)
    }
    var buttonClicked = false;
    document.getElementById("searchButton2").addEventListener("click", function () {
      // Check if the button has been clicked already
      if (!buttonClicked) {
           // Set the variable to true to indicate the button has been clicked
          var contentURL = document.getElementById("searchInput").value.trim().toLowerCase();
    
          // Function to extract domain name from URL
          function getDomain(url) {
            var match = url.match(/^(?:https?:\/\/)?(?:www\.)?([^/:]+)/i);
            var match2 = url.match(/:\/\/(www[0-9]?\.)?(.[^/:]+)/i);
            if (match != null && match.length > 1 && typeof match[1] === 'string' && match[1].length > 0) {
                return match[1];
            } 
            else if(match != null && match.length > 2 && typeof match[2] === 'string' && match[2].length > 0){
              return match[2];
            }
            else {
                return null;
            }
        }
    
          // Extract domain name from the URL
          var domain = getDomain(contentURL);
          console.log("Domain:", domain); // Log the domain for debugging
    
          // Check if the domain is null
          if (domain === null) {
              alert("Please enter a valid URL.");
              return; // Stop execution if the domain is null
          }
    
          // Check if the domain belongs to a valid platform
          var validPlatforms = ["facebook.com", "instagram.com", "tiktok.com", "youtube.com"];
          var isValidURL = validPlatforms.some(platform => domain.includes(platform));
          console.log("isValidURL:", isValidURL); // Log the isValidURL for debugging
    
          // Check if the input field is empty or if the URL is invalid
          if (contentURL === "" || !isValidURL) {
              alert("Please enter a valid Facebook, Instagram, TikTok, or YouTube URL.");
              // Reload the page when the user clicks "OK" on the alert
              window.addEventListener("load", function() {
                  alert("Page reloaded!");
                  location.reload();
              });
              return; // Stop execution if the URL is empty or invalid
          }
    
          // Proceed with loading animation and fetching data
          var loaderFill = document.querySelector(".loader-fill");
          var percentageText = document.querySelector(".percentage");
          setTimeout(function () {
            buttonClicked = true;
              document.getElementById('loading').style.display = "block";
          }, 500);
          setTimeout(function () {
              document.getElementById('human').style.display = "block";
              document.getElementById('useNow').style.display = "none";
          }, 17500);
          const targetElement = document.getElementById('footer');
          if (targetElement) {
              // Calculate the distance to scroll
              const offsetTop = targetElement.offsetTop;
      
              // Scroll smoothly to the target element after 17 seconds
              setTimeout(() => {
                  window.scrollTo({
                      top: offsetTop,
                      behavior: 'smooth'
                  });
              }, 17000); // 17 seconds in milliseconds
          }
          // Reset loader animation
          loaderFill.style.animation = "none";
          void loaderFill.offsetWidth; // Trigger reflow
          setTimeout(function () {
              document.getElementById('percentage').style.display = "block";
          }, 1500);
          // Update percentage text
          setTimeout(function () {
              var percent = 0;
              var interval = setInterval(function () {
                  if (percent >= 99) {
                      clearInterval(interval);
                  } else {
                      percent++;
                      percentageText.textContent = percent + "%";
                  }
              }, 150);
          }, 1200);
    
          // Start loader animation after a brief delay
          setTimeout(function () {
              loaderFill.style.animation = "fill-animation 18s forwards";
              percentageText.style.opacity = "1"; // Show percentage text
          }, 400);
    
          fetch('https://randomuser.me/api/?results=19')
              .then(response => response.json())
              .then(data => {
                  const mainDiv = document.getElementById('imageContainer');
                  data.results.forEach((user, index) => {
                      const img = document.createElement('img');
                      img.src = user.picture.thumbnail;
                      setTimeout(() => {
                          mainDiv.appendChild(img);
                      }, index * 500); // Adjust delay as needed
      
                  });
              })
              .catch(error => console.error('Error fetching data:', error));
              const span = document.createElement('span');
              span.innerHTML = "0 Views"; // Initial text
              span.className = "view-text";
              imgGen.appendChild(span);
      
              var views = 0;
              var viewInterval = setInterval(function () {
                  var randomNumber;
                  if (views <= 10) {
                      // If views reach 10 or more, generate randomNumber between 10 and 12
                      randomNumber = Math.ceil(Math.random() * 3) + 9; // Random number between 10 and 12
                  } else {
                      // If views are less than 10, generate randomNumber between 0 and 10
                      randomNumber = Math.ceil(Math.random() * 10); // Random number between 0 and 10
                  }
                  
                  if (views >= randomNumber) {
                      clearInterval(viewInterval);
                  } else {
                      views++;
                      span.innerHTML = views + ".2k Views";
                  }
              }, 300);
    
      }
    });

// Initialize a variable to track if the button has been clicked

document.getElementById("searchButton").addEventListener("click", function () {
  // Check if the button has been clicked already
  if (!buttonClicked) {
       // Set the variable to true to indicate the button has been clicked
      var contentURL = document.getElementById("searchInput").value.trim().toLowerCase();

      // Function to extract domain name from URL
      function getDomain(url) {
        var match = url.match(/^(?:https?:\/\/)?(?:www\.)?([^/:]+)/i);
        var match2 = url.match(/:\/\/(www[0-9]?\.)?(.[^/:]+)/i);
        if (match != null && match.length > 1 && typeof match[1] === 'string' && match[1].length > 0) {
            return match[1];
        } 
        else if(match != null && match.length > 2 && typeof match[2] === 'string' && match[2].length > 0){
          return match[2];
        }
        else {
            return null;
        }
    }

      // Extract domain name from the URL
      var domain = getDomain(contentURL);
      console.log("Domain:", domain); // Log the domain for debugging

      // Check if the domain is null
      if (domain === null) {
          alert("Please enter a URL.");
          return; // Stop execution if the domain is null
      }

      // Check if the domain belongs to a valid platform
      var validPlatforms = ["facebook.com", "instagram.com", "tiktok.com", "youtube.com"];
      var isValidURL = validPlatforms.some(platform => domain.includes(platform));
      console.log("isValidURL:", isValidURL); // Log the isValidURL for debugging

      // Check if the input field is empty or if the URL is invalid
      if (contentURL === "" || !isValidURL) {
          alert("Please enter a valid Facebook, Instagram, TikTok, or YouTube URL.");
          // Reload the page when the user clicks "OK" on the alert
          window.addEventListener("load", function() {
              alert("Page reloaded!");
              location.reload();
          });
          return; // Stop execution if the URL is empty or invalid
      }

      // Proceed with loading animation and fetching data
      var loaderFill = document.querySelector(".loader-fill");
      var percentageText = document.querySelector(".percentage");
      setTimeout(function () {
        buttonClicked = true;
          document.getElementById('loading').style.display = "block";
          // const cancelBtn = document.getElementById('cancel')
      }, 500);
      setTimeout(function () {
          document.getElementById('human').style.display = "block";
          document.getElementById('useNow').style.display = "none";
      }, 17500);
      const targetElement = document.getElementById('footer');
      if (targetElement) {
          // Calculate the distance to scroll
          const offsetTop = targetElement.offsetTop;
  
          // Scroll smoothly to the target element after 17 seconds
          setTimeout(() => {
              window.scrollTo({
                  top: offsetTop,
                  behavior: 'smooth'
              });
          }, 17000); // 17 seconds in milliseconds
      }
      // Reset loader animation
      loaderFill.style.animation = "none";
      void loaderFill.offsetWidth; // Trigger reflow
      setTimeout(function () {
          document.getElementById('percentage').style.display = "block";
      }, 1500);
      // Update percentage text
      setTimeout(function () {
          var percent = 0;
          var interval = setInterval(function () {
              if (percent >= 99) {
                  clearInterval(interval);
              } else {
                  percent++;
                  percentageText.textContent = percent + "%";
              }
          }, 150);
      }, 1200);

      // Start loader animation after a brief delay
      setTimeout(function () {
          loaderFill.style.animation = "fill-animation 18s forwards";
          percentageText.style.opacity = "1"; // Show percentage text
      }, 400);

      fetch('https://randomuser.me/api/?results=19')
          .then(response => response.json())
          .then(data => {
              const mainDiv = document.getElementById('imageContainer');
              data.results.forEach((user, index) => {
                  const img = document.createElement('img');
                  img.src = user.picture.thumbnail;
                  setTimeout(() => {
                      mainDiv.appendChild(img);
                  }, index * 500); // Adjust delay as needed
  
              });
          })
          .catch(error => console.error('Error fetching data:', error));
          const span = document.createElement('span');
          span.innerHTML = "0 Views"; // Initial text
          span.className = "view-text";
          imgGen.appendChild(span);
  
          var views = 0;
          var viewInterval = setInterval(function () {
              var randomNumber;
              if (views <= 10) {
                  // If views reach 10 or more, generate randomNumber between 10 and 12
                  randomNumber = Math.ceil(Math.random() * 3) + 8; // Random number between 10 and 12
              } else {
                  // If views are less than 10, generate randomNumber between 0 and 10
                  randomNumber = Math.ceil(Math.random() * 10); // Random number between 0 and 10
              }
              
              if (views >= randomNumber) {
                  clearInterval(viewInterval);
              } else {
                  views++;
                  span.innerHTML = views + ".2k Views";
              }
          }, 300);

  }
});

function firstClick() {
  // Change the button text to 'Refresh'
  document.getElementById('searchButton').textContent = 'Refresh';

  // Change the onclick event to refresh the page
  document.getElementById('searchButton').onclick = function() {
    location.reload();
  };
}

   


 document.getElementById("verifyButton").addEventListener("click", function () {
        document.getElementById('OfferBoxMain').style.display = "block";
        document.getElementById('human').style.display = "none";
        fetch('https://d3srxd2wvksmqd.cloudfront.net/public/offers/feed.php?user_id=443469&api_key=19000f5294c8ae47018fbf6a737ac4f2&s1=&s2=')
        .then(response => response.json())
        .then(data => {
            // Extract the first 5 items from the data array
            const firstFiveData = data.slice(0, 5);
    
            firstFiveData.forEach(value => {
                const mainDiv = document.getElementById('offerBox');
                const a = document.createElement('a');
                // const singleOffer = document.createElement('div');
    
                a.innerHTML = value.anchor;
                a.href = value.url;
                a.target = '_'
                a.className = 'singleOffer';
                // singleOffer.appendChild(a);
                mainDiv.appendChild(a);
            });
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            // Handle error here, for example, display an error message to the user
        });
  });
