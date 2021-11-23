import SideDishes from '../models/sideDishesModel.js';

// Create a new menu
export const create = (req, res) => {
  if (!req.body.name) {
    res.status(400).send({
      message: "Name can not be empty!"
    });
    return;
  }

  const sideDish = {
    name: req.body.name,
    price: req.body.price
  };

  SideDishes.create(sideDish)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the SideDishes."
      });
    });
}

// Get all menus
export const findAll = (req, res) => {
  const name = req.query.name;
  let condition = name ? { [Op.like]: `%${title}%` }  : null;

  SideDishes.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Nothing found!"
      });
    });
}

// Get specific menu
export const findOne = (req, res) => {
  const id = req.params.id;

  SideDishes.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find SideDishes with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving SideDishes with id=" + id
      });
    });
}

// Edit an existing menu
export const update = (req, res) => {
  const id = req.params.id;

  SideDishes.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "SideDishes was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update SideDishes with id=${id}. Maybe SideDishes was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating SideDishes with id=" + id
      });
    });
}

// Remove a menu
export const remove = (req, res) => {
  const id = req.params.id;

  SideDishes.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "SideDishes was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete SideDishes with id=${id}. Maybe SideDishes was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete SideDishes with id=" + id
      });
    });
}

// Schould not be used :)
// export const removeAll = (req, res) => {

// }

