const router = require("express").Router();
const Issues = require("../../models/Issues");
const Todo = require("../../models/Todo");
const User = require("../../models/User");
const fetch = require("node-fetch");

router.get("/", (req, res, next) => {
  Issues.find()
    .then(todos => {
      res.status(200).json(todos);
    })
    .catch(error => {
      res.status(500).json({ message: "Something went wrong" });
    });
});

router.post("/new", (req, res, next) => {
  const {
    name,
    type,
    description,
    assigned,
    creator,
    isFinish,
    comentario,
    comentariosIssues,
    idProject
  } = req.body.name;

  const newIssue = new Issues({
    name,
    type,
    description,
    assigned,
    creator,
    isFinish,
    comentario,
    comentariosIssues
  });

  newIssue
    .save()
    .then(issue => {
      const issueId = issue._id;
      const issueAssigned = issue.assigned;
      Todo.findByIdAndUpdate(
        idProject,
        { $push: { issues: issue._id } },
        { new: true }
      ).then(todoUpdated => {
        User.findByIdAndUpdate(
          issueAssigned,
          { $push: { issues: issueId } },
          { new: true }
        )
          .then(userUpdated => res.status(200).json(userUpdated))
          .catch(e => next(e));
      });
    })
    .catch(error => {
      res.status(500).json({ message: "Error saving new Todo" });
    });
});

router.get("/:id", (req, res, next) => {
  const { id } = req.params;
  let diffPayload;
  
  fetch("https://api.github.com/repos/Manuee97/pruebasProyecto/commits")
  .then(commits => commits.json())
  .then(commits => {
    commits = commits.filter(commit => commit.commit.message == id)

    const commit1 = commits[0].sha;
    const commit2 = commits[1].sha;

    return fetch(`https://api.github.com/repos/Manuee97/pruebasProyecto/compare/${commit2}...${commit1}`)
}).then(differences => differences.json())
.then(differences => {
  Issues.findById(id)
    .populate("assigned")
    .populate("creator")
    .then(issue => {
      let patch = differences.files[0].patch
      let dataPayload = {issue, patch}
      res.status(200).json(dataPayload);
    })
    .catch(error => res.status(500).json({ message: "Todo not found" }));
});
});

router.put("/:id", (req, res, next) => {
  const { id } = req.params;
  const { comentariosIssues } = req.body;
  console.log(comentariosIssues);
  Issues.findByIdAndUpdate(id, {
    $push: { comentariosIssues: comentariosIssues }
  })
    .then(() => {
      res.status(200).json({ message: `Todo ${id} updated` });
    })
    .catch(error => {
      res.status(500).json({ message: "Something went wrong" });
    });
});

router.delete("/:id", (req, res, next) => {
  const { id } = req.params;
  Issues.findByIdAndDelete(id)
    .then(issue => {
      const userId = issue.assigned[0];
      const issueId = issue._id;
      User.findByIdAndUpdate(
        userId,
        { $pull: { issues: issueId } },
        { new: true }
      ).then(userUpdated => res.status(200).json(userUpdated)).catch(error => res.status(500).json({ message: "Something went wrong" }))
    })
    .catch(error => res.status(500).json({ message: "Something went wrong" }));

   
});

module.exports = router;
