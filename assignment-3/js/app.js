console.log("app.js loaded");

// Get reference to the student info <p>
const studentInfo = document.getElementById("student-info");
console.log("studentInfo element:", studentInfo);

// Set your name + ID dynamically
studentInfo.textContent = "Student: Adam Evans - ID: 100142217";
console.log("studentInfo text set to:", studentInfo.textContent);

// Grab form elements
const searchInput = document.querySelector(".search");
const submitBtn = document.querySelector(".submit");

// Add event listener
submitBtn.addEventListener("click", function(event) {
    event.preventDefault(); // stop page reload
    console.log("Submit button clicked");

    // Log the current search value
    console.log("Search term:", searchInput.value);

    // RAWG API URL
    const baseURL = "https://api.rawg.io/api/games";
    const apiKey = "942addfe63704fb38d50eba41fbd0022";

    const url = `${baseURL}?key=${apiKey}&search=${searchInput.value}`;
    console.log("RAWG URL:", url);

    // Fetch data from RAWG
    fetch(url)
        .then(response => {
            console.log("RAWG response object:", response);
            return response.json();
        })
        .then(data => {
            const resultsSection = document.querySelector(".results");
            resultsSection.innerHTML = "";

            data.results.forEach(game => {
                if (!game.background_image) {
                    console.log("Skipping game with no image:", game.name);
                    return;
                }

                console.log("Displaying game:", game.name);

                // Create an article element
                const article = document.createElement("article");
                article.classList.add("game-card");

                // Create image element
                const img = document.createElement("img");
                img.src = game.background_image;
                img.alt = game.name;

                // Create title element
                const title = document.createElement("h2");
                title.textContent = game.name;

                // Create rating element
                const rating = document.createElement("p");
                rating.textContent = `Rating: ${game.rating}`;

                // Create release date element
                const release = document.createElement("p");
                release.textContent = `Released: ${game.released}`;

                // Create genre element
                const genres = document.createElement("p");
                const genreNames = game.genres.map(g => g.name).join(", ");
                genres.textContent = `Genres: ${genreNames}`;

                // Append everything to the article
                article.appendChild(img);
                article.appendChild(title);
                article.appendChild(rating);
                article.appendChild(release);
                article.appendChild(genres);

                // Append article to results section
                resultsSection.appendChild(article);
            });

            

            console.log("RAWG JSON data:", data);
            console.log("First game object:", data.results[0]);

            const firstGame = data.results[0];

            console.log("Name:", firstGame.name);
            console.log("Image:", firstGame.background_image);
            console.log("Rating:", firstGame.rating);
            console.log("Genres:", firstGame.genres);
            console.log("Releade date:", firstGame.released);
        })
        .catch(error => {
            console.error("Error fetching RAWG data:", error);
        });
});

