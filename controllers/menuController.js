import Menu from '../models/menuModel.js';

// Create a new menu
export const create = (req, res) => {
  if (!req.body.name) {
    res.status(400).send({
      message: "Name can not be empty!"
    });
    return;
  }

  const menu = {
    name: req.body.name,
    description: req.body.description,
    price: req.body.price
  };

  Menu.create(menu)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial."
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

// export const update = (req, res) => {

// }

// export const remove = (req, res) => {

// }

// export const removeAll = (req, res) => {

// }

