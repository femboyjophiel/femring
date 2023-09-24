document.addEventListener("DOMContentLoaded", function () {
    const webringList = document.getElementById("webring-list");

    // Fetch the websites from the JSON file
    fetch("sites.json")
        .then((response) => response.json())
        .then((data) => {
            // Loop through the websites and add them as anchor elements
            data.forEach((site) => {
                const listItem = document.createElement("li");
                const link = document.createElement("a");
                link.href = site.link;
                link.textContent = site.name;

                // Add a "Verified" badge if verified
                if (site.verified) {
                    const verifiedBadge = document.createElement("span");
                    verifiedBadge.textContent = "Verified";
                    verifiedBadge.classList.add("verified-badge");
                    listItem.appendChild(verifiedBadge);
                }

                listItem.appendChild(link);
                webringList.appendChild(listItem);
            });
        })
        .catch((error) => {
            console.error("Error fetching data:", error);
        });
});
