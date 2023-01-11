let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];

let x = 0;
do {
  let i = 0;
  while (i < adj.length) {
    for (let j = 0; j < noun.length; j++) {
      const new_domain = pronoun[x] + adj[i] + noun[j] + ".com";
    console.log(new_domain);
    }
    i++;
  }
  x++;
} while (x < pronoun.length);
