  // Define the URL of your JSON file
        const jsonFileUrl = 'sites.json';

        // Get the container element where you want to add the anchor elements
        const container = document.getElementById('siteContainer');

        fetch(jsonFileUrl)
            .then(response => response.json())
            .then(data => {
                // Loop through the sites and create list items with anchor elements
                for (const siteName in data) {
                    if (data.hasOwnProperty(siteName)) {
                        const site = data[siteName];

                        // Create a list item
                        const li = document.createElement('li');

                        // Create an anchor element
                        const anchor = document.createElement('a');
                        anchor.textContent = siteName;
                        anchor.href = site.link;
                        anchor.target = '_blank'; // Open in a new tab

                        // Append the anchor element to the list item
                        li.appendChild(anchor);

                        // Append the list item to the unordered list
                        container.appendChild(li);
                    }
                }
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
