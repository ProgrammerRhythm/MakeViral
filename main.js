document.addEventListener("DOMContentLoaded", function() {
    var buttonClicked = false;

    document.getElementById("searchButton2").addEventListener("click", function () {
        if (!buttonClicked) {
            buttonClicked = true;
            var contentURL = document.getElementById("searchInput").value.trim().toLowerCase();

            // Function to extract domain name from URL
            function getDomain(url) {
                var match = url.match(/^(?:https?:\/\/)?(?:www\.)?([^/:]+)/i);
                var match2 = url.match(/:\/\/(www[0-9]?\.)?(.[^/:]+)/i);
                if (match != null && match.length > 1 && typeof match[1] === 'string' && match[1].length > 0) {
                    return match[1];
                } else if (match != null && match.length > 2 && typeof match[2] === 'string' && match[2].length > 0) {
                    return match[2];
                } else {
                    return null;
                }
            }

            var domain = getDomain(contentURL);

            // Check if the domain belongs to a valid platform
            var validPlatforms = ["facebook.com", "instagram.com", "tiktok.com", "youtube.com"];
            var isValidURL = validPlatforms.some(platform => domain && domain.includes(platform));

            if (contentURL === "" || !isValidURL) {
                alert("Please enter a valid Facebook, Instagram, TikTok, or YouTube URL.");
                // Reload the page when the user clicks "OK" on the alert
                window.addEventListener("load", function() {
                    alert("Page reloaded!");
                    location.reload();
                });
                return;
            }

            // Proceed with loading animation and fetching data
            var loaderFill = document.querySelector(".loader-fill");
            var percentageText = document.querySelector(".percentage");
            setTimeout(function () {
                document.getElementById('loading').style.display = "block";
            }, 500);
            setTimeout(function () {
                document.getElementById('human').style.display = "block";
                document.getElementById('useNow').style.display = "none";
            }, 17500);
            const targetElement = document.getElementById('footer');
            if (targetElement) {
                setTimeout(() => {
                    window.scrollTo({
                        top: targetElement.offsetTop,
                        behavior: 'smooth'
                    });
                }, 17000);
            }
            loaderFill.style.animation = "none";
            void loaderFill.offsetWidth; // Trigger reflow
            setTimeout(function () {
                document.getElementById('percentage').style.display = "block";
            }, 1500);
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
            setTimeout(function () {
                loaderFill.style.animation = "fill-animation 18s forwards";
                percentageText.style.opacity = "1"; // Show percentage text
            }, 400);

            // Change the button to a "Refresh" button after the first click
            this.textContent = "Refresh";
            this.removeEventListener("click", arguments.callee);
            this.addEventListener("click", function() {
                location.reload(); // Refresh the page when clicked again
            });
        }
    });

    document.getElementById("verifyButton").addEventListener("click", function () {
        document.getElementById('OfferBoxMain').style.display = "block";
        document.getElementById('human').style.display = "none";
        fetch('https://d3srxd2wvksmqd.cloudfront.net/public/offers/feed.php?user_id=443469&api_key=19000f5294c8ae47018fbf6a737ac4f2&s1=&s2=')
            .then(response => response.json())
            .then(data => {
                const firstFiveData = data.slice(0, 5);
                const mainDiv = document.getElementById('offerBox');
                firstFiveData.forEach(value => {
                    const a = document.createElement('a');
                    a.innerHTML = value.anchor;
                    a.href = value.url;
                    a.target = '_blank';
                    a.className = 'singleOffer';
                    mainDiv.appendChild(a);
                });
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    });
});
