const jsonFileUrl = 'sites.json';
const container = document.getElementById('siteContainer');

fetch(jsonFileUrl)
  .then(response => response.json())
  .then(d => {
    for (const sN in d) {
      if (d.hasOwnProperty(sN)) {

        const li = document.createElement('li');
        const div = document.createElement('div');
        const p = document.createElement('p');
        const s = d[sN];
        const a1 = aMake(sN, s.link.split('.').slice(1).join('.') + '/' + s.link.split('.')[0];);
        const a2 = aMake(s.link, s.link);

        function aMake(text, href) {
          const a = document.createElement('a'); 
          a.textContent = text;
          a.href = "https://" + href;
          a.target = '_blank';
          return a;
        }

        li.appendChild(div);
        div.appendChild(p);
        p.textContent = d[sN].name;
        div.appendChild(a1);
        div.appendChild(a2);


        container.appendChild(li);
      }
    }
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });

function setThemePreference() {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.documentElement.setAttribute('data-theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
    }
}

setThemePreference();


function toggleTheme() {
    if (document.documentElement.getAttribute('data-theme') === 'dark') {
        document.documentElement.setAttribute('data-theme', 'light');
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
    }
}
