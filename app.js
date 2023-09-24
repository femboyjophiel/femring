// Read the sites.json file
fetch('sites.json')
    .then(response => response.json())
    .then(data => {
        const siteList = document.getElementById('site-list');

        // Loop through each site in the JSON object
        for (const siteName in data) {
            if (data.hasOwnProperty(siteName)) {
                const siteInfo = data[siteName];
                const siteLink = siteInfo.link;

                // Create an anchor element for the site
                const siteAnchor = document.createElement('a');
                siteAnchor.href = siteLink;
                siteAnchor.textContent = siteName;

                // Create a list item to contain the anchor
                const listItem = document.createElement('li');
                listItem.appendChild(siteAnchor);

                // Append the list item to the site list
                siteList.appendChild(listItem);
            }
        }
    })
    .catch(error => {
        console.error('Error fetching and parsing sites.json:', error);
    });
