import Menu from '../models/menuModel.js';


// export const create = (req, res) => {

// }

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

