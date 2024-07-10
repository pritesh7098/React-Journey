
// backend part of the fullstack application.

import express from "express"; // importing from express

const app = express();

app.get("/", (req, res) => {
  res.send("Hello, World ! server is ready now!");
});

app.get("/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      title: "the first joke",
      content: "Why did the chicken cross the road? To get to the other side!",
    },

    {
      id: 2,

      title: "the second joke",

      content:
        "What did the tomato say to the tomato? 'Oh, let me show you how to make a sandwich.'",
    },

    {
      id: 3,

      title: "the third joke",

      content:
        "Why did the dog cross the street? To get to the other side and run faster!",
    },
  ];
  res.send(jokes);
});

const PORT = process.env.PORT || 3000; // setting port

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}); // listen on port 3000 and
