const express = require("express");
const router = express.Router();
const friends = require("../models/friends");

// TODO - #1: Add support to the 'filter' endpoint for a new query parameter 'letter' which filters friends by starting letter
router.get("/filter", (req, res) => {
  console.log(req.query);
  let letter = req.query.letter; // 'id' will be a value matching anything after the / in the request path
  let user = friends
    .filter((user) => user.name[0] === letter)
    .map((user) => user.name);
  user.length > 0
    ? res.status(200).json({ result: user })
    : res
        .status(404)
        .json({
          result: `Friends characters with name starts with '${user}' is not found`,
        });
});

// TODO - #2: Modify the 'info' route to only return the user-agent, content-type and accept header data
router.get("/info", (req, res) => {
  const userAgent = req.headers["user-agent"];
  const contentType = req.headers["content-type"];
  const accept = req.headers["accept"];

  res.json({ userAgent, contentType, accept });
});
// TODO - #3: Modify the dynamic GET route to return a single friend object matching the dynamic 'id' request parameter
router.get("/:id", (req, res) => {
  let userId = req.params.id;
  let user = friends.find((user) => user.id == userId);

  user
    ? res.status(200).json({ result: user })
    : res.status(404).json({ result: `Friends with id=${userId} not found` });
});

// TODO - #4: Complete the PUT route which will update data for an existing friend

router.put("/:id", (req, res) => {
  const itemId = parseInt(req.params.id);
  const itemIndex = friends.findIndex(i => i.id === itemId);
  console.log(itemIndex);

  if (!itemIndex === -1) {
    res.status(500).json({ error: "User must contain a name and gender" });
    return;
  }
  // if the new user is valid, add them to the list
  friends[itemIndex] = {id: itemId, ...req.body};
  res.status(200).json(itemIndex); // return the new user
});

// default endpoint, gets all friends

module.exports = router;
