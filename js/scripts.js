document.addEventListener("DOMContentLoaded", () => {
    const leftArrow = document.getElementById("left-arrow");
    const rightArrow = document.getElementById("right-arrow");
    const industryElement = document.getElementById("industry");
    const industries = ["Technology", "Health", "Finance"];
    const industryPages = [
        // "tech.html",
        // "health.html",
        // "finance.html",
    ];
    let currentIndex = 0;

    function updateIndustry() {
        industryElement.textContent = industries[currentIndex];
        industryElement.setAttribute("href", "#");
    }

    leftArrow.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + industries.length) % industries.length;
        updateIndustry();
    });

    rightArrow.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % industries.length;
        updateIndustry();
    });

    updateIndustry();
});

//...

// Populate data challenges for the specified industry page
function populateDataChallenges(dataChallenges, containerId) {
    const dataChallengeList = document.getElementById(containerId);

    dataChallenges.forEach((dataChallenge) => {
        const listItem = document.createElement("div");
        listItem.className = "data-challenge-item";

        const link = document.createElement("a");
        link.className = "data-challenge-link";
        link.href = dataChallenge.colabUrl;
        link.target = "_blank";
        link.textContent = dataChallenge.name;

        listItem.appendChild(link);
        dataChallengeList.appendChild(listItem);
    });
}

if (document.getElementById("technology-data-challenge-list")) {
    const technologyDataChallenges = [
        {
            name: "Tech Challenge 1",
            colabUrl: "https://colab.research.google.com/drive/1AVLq9nNhSa0ULelEO-o52VJO9vW3ccYs",
        },
        {
            name: "Tech Challenge 2",
            colabUrl: "https://colab.research.google.com/drive/1JS5CHF5TpKXm4ySV7Hr8c-AAEoKJxLah#scrollTo=Ni8HL5VHeZfe",
        },
        // Add more data challenges for technology
    ];
    populateDataChallenges(technologyDataChallenges, "technology-data-challenge-list");
}

// ...

if (document.getElementById("health-data-challenge-list")) {
    const healthDataChallenges = [
        {
            name: "Health Challenge 1",
            colabUrl: "https://colab.research.google.com/path/to/health_challenge_1.ipynb",
        },
        {
            name: "Health Challenge 2",
            colabUrl: "https://colab.research.google.com/path/to/health_challenge_2.ipynb",
        },
        // Add more data challenges for health
    ];
    populateDataChallenges(healthDataChallenges, "health-data-challenge-list");
}


// ...

if (document.getElementById("finance-data-challenge-list")) {
    const financeDataChallenges = [
        {
            name: "Finance Challenge 1",
            colabUrl: "https://colab.research.google.com/path/to/finance_challenge_1.ipynb",
        },
        {
            name: "Finance Challenge 2",
            colabUrl: "https://colab.research.google.com/path/to/finance_challenge_2.ipynb",
        },
        // Add more data challenges for finance
    ];
    populateDataChallenges(financeDataChallenges, "finance-data-challenge-list");
}

// ...
