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
        const a1 = aMake(sN, s.link);
        const a2 = aMake(s.link, s.link);

        function aMake(t, h) {
          const a = document.createElement('a'); 
          a.textContent = t;
          a.href = "https://" + h;
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
