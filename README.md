# FemRing 🌸
Website for the femboy webring

# How to join

1. Fork the repository
2. On the forked repository, edit sites.json to include your site
3. Come back to this repository and create a pull request

```
"Example Site":{ 
  "link": "https://example.com",  
  "verified": "MM/DD/YYYY",
  "name": "Bobert"
},

```
Remember, in JSON the last of any key/pair should not have a comma, but the ones before it should.

Once you do this, add this line of code somewhere visible on the homepage of your website: 
```
   <iframe title="femboy webring" style='border-radius:25px;' height='70px' width='250px' src='https://femring.neocities.org/meow?user=[YOUR-NAME]'></iframe>
```
You can change the values to whatever you want but this is what I recommend. 

Obviously, replace "YOUR-NAME" with the name associated with your site in the sites.json
