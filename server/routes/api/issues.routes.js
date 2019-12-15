const router = require('express').Router();
const Issues = require('../../models/Issues')

router.get('/', (req, res, next) => {
    Issues.find()
  .then(todos => {
    res.status(200).json(todos)
  })
  .catch(error => {
    res.status(500).json({message: 'Something went wrong'})
  })
})

router.post('/new', (req, res, next) => {
  const { name, type, description, assigned, creator, isFinish, idProject, comentario } = req.body.name;
  const newIssue = new Issues({
    name, 
    type,
    description,
    assigned, 
    creator,
    isFinish,
    idProject,
    comentario
  })

console.log(newIssue)

  newIssue.save()
  .then(issue => {
    res.status(200).json(issue)
  })
  .catch(error => {
    res.status(500).json({message: 'Error saving new Todo'})
  })
})

router.get('/:id', (req, res, next) => {
  const { id } = req.params;
  Issues.findById(id)
  .then(issue => {
    res.status(200).json(issue)
  })
  .catch(error => res.status(500).json({ message: 'Todo not found'}))
})

router.put('/:id', (req, res, next) => {
  const { id } = req.params;
  Issues.findByIdAndUpdate(id, req.body)
  .then(() => {
    res.status(200).json({ message: `Todo ${id} updated` })
  })
  .catch(error => {
    res.status(500).json({ message:'Something went wrong' })
  })
})

router.delete('/:id', (req, res, next) => {
  const { id } = req.params;
  Issues.findByIdAndDelete(id)
  .then(() => res.status(200).json({message: `Todo ${id} deleted`}))
  .catch(error => res.status(500).json({ message: 'Something went wrong'}))
})

module.exports = router;