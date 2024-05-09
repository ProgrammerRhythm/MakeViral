fetch('https://randomuser.me/api/?results=15')
    .then(response => response.json())
    .then(data => {
        data.results.forEach(user => {
            const mainDiv = document.querySelector('.carousel');
            const randomNumber1 = Math.ceil(Math.random() * 100);
            const randomNumber2 = Math.ceil(Math.random() * 100);

            const name = `${user.name.title} ${user.name.last}`;
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


    var buttonClicked = false;
let url = null;
let animationsTimeout = []
let animationsInterval = []

function resetAnimation() {
    animationsTimeout.forEach(e => clearTimeout(e))
    animationsInterval.forEach(e => clearInterval(e))

    document.getElementById('loading').style.display = "none";
    document.getElementById('human').style.display = "none";
    document.getElementById('OfferBoxMain').style.display = "none";
    document.getElementById('useNow').style.display = "flex";
    document.getElementById('Qbox1').style.display = "none";
    document.getElementById('Qbox2').style.display = "none";
    document.getElementById('Qbox3').style.display = "none";
    document.getElementById('percentage').style.display = "none";
    document.getElementById("newDiv").style.display = "none";
    var offerBox = document.getElementById("offerBox");
    offerBox.style.display = "block";
    offerBox.innerHTML = "";
    document.getElementById('timer').innerHTML=0;
    var percentageText = document.querySelector(".percentage");
    percentageText.textContent = "0%";
    var loaderFill = document.querySelector(".loader-fill");
    loaderFill.style.animation = "none"
    percentageText.style.opacity = "0";


    const mainDiv = document.getElementById("imgGen")
    const imageContainer = document.getElementById('imageContainer')
    imageContainer.innerHTML = "";



    const views = document.getElementById("views")
    if (views) mainDiv.removeChild(views)
     // Verify button
     document.getElementById('OfferBoxMain').style.display = "none";
     const offerBoxDiv = document.getElementById('offerBox');
     const offerLinks = document.querySelectorAll(".singleOffer")
     offerLinks.forEach(e => offerBoxDiv.removeChild(e))
}


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
        // Set the variable to true to indicate the button has been clicked
        var contentURL = document.getElementById("searchInput").value.trim().toLowerCase();
    
        // Function to extract domain name from URL
        function getDomain(url) {
            var match = url.match(/^(?:https?:\/\/)?(?:www\.)?([^/:]+)/i);
            var match2 = url.match(/:\/\/(www[0-9]?\.)?(.[^/:]+)/i);
            if (match != null && match.length > 1 && typeof match[1] === 'string' && match[1].length > 0) {
                return match[1];
            }
            else if (match != null && match.length > 2 && typeof match[2] === 'string' && match[2].length > 0) {
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
            window.addEventListener("load", function () {
                alert("Page reloaded!");
                location.reload();
            });
            return; // Stop execution if the URL is empty or invalid
        }
    
    
        if (url === contentURL) {
            return alert("Please Enter a new URL");
        }
    
        resetAnimation()
        url = contentURL;
    
        // Proceed with loading animation and fetching data
        var loaderFill = document.querySelector(".loader-fill");
        var percentageText = document.querySelector(".percentage");
        animationsTimeout.push(setTimeout(function () {
            buttonClicked = true;
            document.getElementById('loading').style.display = "block";
            // const cancelBtn = document.getElementById('cancel')
        }, 500))
        animationsTimeout.push(
            setTimeout(function () {
                document.getElementById('human').style.display = "block";
                document.getElementById('useNow').style.display = "none";
            }, 30000))
    
        animationsTimeout.push(
            setTimeout(function () {
                document.getElementById('Qbox1').style.display = "block";
            }, 2500))
        animationsTimeout.push(
            setTimeout(function () {
                document.getElementById('Qbox2').style.display = "block";
            }, 5000))
        animationsTimeout.push(
            setTimeout(function () {
                document.getElementById('Qbox3').style.display = "block";
            }, 7500))
    
        const targetElement = document.getElementById('arth2');
        if (targetElement) {
            // Calculate the distance to scroll
            const offsetTop = targetElement.offsetTop;
    
            // Scroll smoothly to the target element after 17 seconds
            animationsTimeout.push(
                setTimeout(() => {
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }, 30000)) // 17 seconds in milliseconds
        }
    
        // Reset loader animation
        loaderFill.style.animation = "none";
        void loaderFill.offsetWidth; // Trigger reflow
    
        animationsTimeout.push(setTimeout(function () {
            document.getElementById('percentage').style.display = "block";
        }, 2000))
    
        // Update percentage text
        animationsTimeout.push(
            setTimeout(function () {
                var percent = 0;
    
                var interval = setInterval(function () {
                    if (percent >= 99) {
                        clearInterval(interval);
                    } else {
                        percent++;
                        percentageText.textContent = percent + "%";
                    }
                }, 250);
    
                animationsInterval.push(interval)
            }, 1300))
    
        // Start loader animation after a brief delay
        animationsTimeout.push(setTimeout(function () {
            loaderFill.style.animation = "fill-animation 30s forwards";
            percentageText.style.opacity = "1"; // Show percentage text
        }, 400))
    
        animationsTimeout.push(setTimeout(function () {
            fetch('https://randomuser.me/api/?results=19')
                .then(response => response.json())
                .then(data => {
                    const mainDiv = document.getElementById('imageContainer');
                    data.results.forEach((user, index) => {
                        const img = document.createElement('img');
                        img.src = user.picture.thumbnail;
                        animationsTimeout.push(setTimeout(() => {
                            mainDiv.appendChild(img);
                        }, index * 500)); // Adjust delay as needed
    
                    });
                })
                .catch(error => console.error('Error fetching data:', error));
    
            const span = document.createElement('span');
            span.innerHTML = "0 Views"; // Initial text
            span.className = "view-text";
            span.id = "views"
    
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
            animationsInterval.push(viewInterval)
    
        }, 7500))
    
    
    })

// Initialize a variable to track if the button has been clicked


document.querySelectorAll(".accordion-item").forEach((item) => {
    item.querySelector(".accordion-item-header").addEventListener("click", () => {
      item.classList.toggle("open");
    });
  });



  document.getElementById("searchButton").addEventListener("click", function () {
    // Check if the button has been clicked already
    // Set the variable to true to indicate the button has been clicked
    var contentURL = document.getElementById("searchInput").value.trim().toLowerCase();

    // Function to extract domain name from URL
    function getDomain(url) {
        var match = url.match(/^(?:https?:\/\/)?(?:www\.)?([^/:]+)/i);
        var match2 = url.match(/:\/\/(www[0-9]?\.)?(.[^/:]+)/i);
        if (match != null && match.length > 1 && typeof match[1] === 'string' && match[1].length > 0) {
            return match[1];
        }
        else if (match != null && match.length > 2 && typeof match[2] === 'string' && match[2].length > 0) {
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
        window.addEventListener("load", function () {
            alert("Page reloaded!");
            location.reload();
        });
        return; // Stop execution if the URL is empty or invalid
    }


    if (url === contentURL) {
        return alert("Please Enter a new URL");
    }

    resetAnimation()
    url = contentURL;

    // Proceed with loading animation and fetching data
    var loaderFill = document.querySelector(".loader-fill");
    var percentageText = document.querySelector(".percentage");
    animationsTimeout.push(setTimeout(function () {
        buttonClicked = true;
        document.getElementById('loading').style.display = "block";
        // const cancelBtn = document.getElementById('cancel')
    }, 500))
    animationsTimeout.push(
        setTimeout(function () {
            document.getElementById('human').style.display = "block";
            document.getElementById('useNow').style.display = "none";
        }, 30000))

    animationsTimeout.push(
        setTimeout(function () {
            document.getElementById('Qbox1').style.display = "block";
        }, 2500))
    animationsTimeout.push(
        setTimeout(function () {
            document.getElementById('Qbox2').style.display = "block";
        }, 5000))
    animationsTimeout.push(
        setTimeout(function () {
            document.getElementById('Qbox3').style.display = "block";
        }, 7500))

    const targetElement = document.getElementById('arth2');
    if (targetElement) {
        // Calculate the distance to scroll
        const offsetTop = targetElement.offsetTop;

        // Scroll smoothly to the target element after 17 seconds
        animationsTimeout.push(
            setTimeout(() => {
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }, 30000)) // 17 seconds in milliseconds
    }

    // Reset loader animation
    loaderFill.style.animation = "none";
    void loaderFill.offsetWidth; // Trigger reflow

    animationsTimeout.push(setTimeout(function () {
        document.getElementById('percentage').style.display = "block";
    }, 1500))

    // Update percentage text
    animationsTimeout.push(
        setTimeout(function () {
            var percent = 0;

            var interval = setInterval(function () {
                if (percent >= 99) {
                    clearInterval(interval);
                } else {
                    percent++;
                    percentageText.textContent = percent + "%";
                }
            }, 250);

            animationsInterval.push(interval)
        }, 1300))

    // Start loader animation after a brief delay
    animationsTimeout.push(setTimeout(function () {
        loaderFill.style.animation = "fill-animation 30s forwards";
        percentageText.style.opacity = "1"; // Show percentage text
    }, 400))

    animationsTimeout.push(setTimeout(function () {
        fetch('https://randomuser.me/api/?results=19')
            .then(response => response.json())
            .then(data => {
                const mainDiv = document.getElementById('imageContainer');
                data.results.forEach((user, index) => {
                    const img = document.createElement('img');
                    img.src = user.picture.thumbnail;
                    animationsTimeout.push(setTimeout(() => {
                        mainDiv.appendChild(img);
                    }, index * 500)); // Adjust delay as needed

                });
            })
            .catch(error => console.error('Error fetching data:', error));

        const span = document.createElement('span');
        span.innerHTML = "0 Views"; // Initial text
        span.className = "view-text";
        span.id = "views"

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
        animationsInterval.push(viewInterval)

    }, 7500))


})





document.getElementById("verifyButton").addEventListener("click", function () {
    document.getElementById('OfferBoxMain').style.display = "block";
    document.getElementById('human').style.display = "none";
    fetch('https://cpalead.com/dashboard/reports/campaign_json.php?id=593172
')
    .then(response => response.json())
    .then(data => {
        // Extract the first 5 items from the data array
        const firstFiveData = data.slice(0, 5);

        firstFiveData.forEach(value => {
            const mainDiv = document.getElementById('offerBox');
            const a = document.createElement('a');

            a.innerHTML = value.anchor;
            a.href = value.url;
            a.target = '_';
            a.className = 'singleOffer';
            mainDiv.appendChild(a);
        });
    })
    .catch(error => {
        console.error('Error fetching data:', error);
        // Handle error here, for example, display an error message to the users
    });
    const targetElement = document.getElementById('OfferBoxMain');
    if (targetElement) {
        // Calculate the distance to scroll
        const offsetTop = targetElement.offsetTop;

        // Scroll smoothly to the target element after 17 seconds
        animationsTimeout.push(
            setTimeout(() => {
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }, 500)) // 17 seconds in milliseconds
    }

    // Timer initialization
    var timerDisplay = document.getElementById("timer");
    var timeLeft = 90;

    function countdown() {
        timerDisplay.textContent = timeLeft;
        timeLeft--;

        if (timeLeft < 0) {
            clearInterval(interval);
            hideOfferBox();
            createNewDiv();
            document.getElementById('complete').innerHTML = "Operation failed";
        }
    }

    function hideOfferBox() {
        var offerBox = document.getElementById("offerBox");
        offerBox.style.display = "none";
    }
    
    function createNewDiv() {
        // Array of error messages
        var errors = [
            { name: "Times up", message: "Your estimated time has ended." },
            { name: "Error", message: "Make sure your video is not private" },
            { name: "Internal error", message: "Server error too many requests" },
            { name: "Link error", message: "Make sure your link is not broken or damaged" }
        ];
    
        // Randomly select an error message
        var randomErrorIndex = Math.floor(Math.random() * errors.length);
        var error = errors[randomErrorIndex];
    
        // Create a new div element
        
        document.getElementById("newDiv").style.display = "block";
        // Create an image element
        var img = document.getElementById("imgO");
        img.src = "./Img/error.png";
    
        // Create h3 element for error name
        var nameHeader = document.getElementById("title");
        nameHeader.textContent = error.name;
    
        // Create p element for error message
        var messagePara = document.getElementById("message");
        messagePara.textContent = error.message;
    
        // Create a "Retry" button
        var retryButton = document.getElementById("retry");
        retryButton.className = "retry";
        retryButton.textContent = "Try again";
        retryButton.addEventListener("click", function() {
            // Scroll to the top of the page smoothly
            window.scrollTo({ top: 0, behavior: 'smooth' }); 
            
            // Wait for the scrolling animation to complete before reloading
            setTimeout(function() {
                location.reload(); // Reload the page
            }, 1000); // Adjust the delay time as needed
        });
        newDiv = document.getElementById("newDiv");
        // Append elements to the new div
        newDiv.appendChild(img);
        newDiv.appendChild(nameHeader);
        newDiv.appendChild(messagePara);
        newDiv.appendChild(retryButton);
    
        // Append the new div to the offer container
        // var offerContainer = document.getElementById("offer");
        // offerContainer.appendChild(newDiv);
    }
    countdown();
    var interval = setInterval(countdown, 1000);
    animationsInterval.push(interval)
});


