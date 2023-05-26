const express = require("express");
const path = require("path");
var axios = require("axios");

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  console.log(path.join(__dirname,'public'));
  return res.sendFile('public/index.html',{root:__dirname});
})

app.get('/searchword', (req, res) => {
  // res.send(
  //   "Hello World! Srijan bhai jsjnv    srijan mnd  srijit dvdm  d d fmd sdhcjsdvmdhjfkdfknhhdj"
  // );
  console.log(req.params);
  

  var options = {
    method: "GET",
    url: "https://dictionary-by-api-ninjas.p.rapidapi.com/v1/dictionary",
    params: { word: req.query.word },
    headers: {
      "X-RapidAPI-Key": "87abc3cbd9msha1f235df0894670p1ef4b3jsnb57fb4ce702a",
      "X-RapidAPI-Host": "dictionary-by-api-ninjas.p.rapidapi.com",
    },
  };

  axios
    .request(options)
    .then(function (response) {
      // console.log(response.data);
      // console.log(response.data);
      res.json(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });

  // let response={}
  // response.data={
  //   definition: "1. Bold; courageous; daring; intrepid; -- opposed to cowardly; as, a brave man; a brave act. 2. Having any sort of superiority or excellence; -- especially such as in conspicuous. [Obs. or Archaic as applied to material things.] Iron is a brave commodity where wood aboundeth. Bacon. It being a brave day, I walked to Whitehall. Pepys. 3. Making a fine show or display. [Archaic] Wear my dagger with the braver grace. Shak. For I have gold, and therefore will be brave. In silks I'll rattle it of every color. Robert Greene. Frog and lizard in holiday coats And turtle brave in his golden spots. Emerson. Syn. -- Courageous; gallant; daring; valiant; valorous; bold; heroic; intrepid; fearless; dauntless; magnanimous; high-spirited; stout- hearted. See Gallant.\n" +
  //     '\n' +
  //     "1. A brave person; one who is daring. The star-spangled banner, O,long may it wave O'er the land of the free and the home of the brave. F. S. Key. 2. Specifically, an Indian warrior. 3. A man daring beyond discretion; a bully. Hot braves like thee may fight. Dryden. 4. A challenge; a defiance; bravado. [Obs.] Demetrius, thou dost overween in all; And so in this, to bear me down with braves. Shak.\n" +
  //     '\n' +
  //     "1. To encounter with courage and fortitude; to set at defiance; to defy; to dare. These I can brave, but those I can not bear. Dryden. 2. To adorn; to make fine or showy. [Obs.] Thou [a tailor whom Grunio was browbeating] hast braved meny men; brave not me; I'll neither be faced or braved. Shak.",
  //   word: 'brave',
  //   valid: true
  // }
  
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port} -http://localhost:3000`);
});
