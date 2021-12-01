import Menu from '../models/menuModel.js';

// Create a new menu
export const create = (req, res) => {
  console.log(req.body.imageUpload.rawFile.path, 'Der req-body von create menu')
  if (!req.body.name) {
    res.status(400).send({
      message: "Name can not be empty!"
    });
    return;
  }

  const menu = {
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    imgUrl: req.body.imageUpload.rawFile.path
  };

  Menu.create(menu)
    
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Menu."
      });
    });
}

// Get all menus
export const findAll = (req, res) => {
  const name = req.query.name;
  let condition = name ? { [Op.like]: `%${title}%` }  : null;

  Menu.findAll({ where: condition })
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

  Menu.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Menu with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Menu with id=" + id
      });
    });
}

// Edit an existing menu
export const update = (req, res) => {
  const id = req.params.id;

  Menu.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Menu was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Menu with id=${id}. Maybe Menu was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Menu with id=" + id
      });
    });
}

// Remove a menu
export const remove = (req, res) => {
  const id = req.params.id;

  Menu.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Menu was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Menu with id=${id}. Maybe Menu was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Menu with id=" + id
      });
    });
}

// Schould not be used :)
// export const removeAll = (req, res) => {

// }

