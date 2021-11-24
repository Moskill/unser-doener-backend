import Users from '../models/usersModel.js';

// Create a new user
export const create = (req, res) => {
  if (!req.body.email) {
    res.status(400).send({
      message: "eMail address is required!"
    });
    return;
  }

  const user = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    street: req.body.street,
    house_no: req.body.house_no,
    city: req.body.city,
    zip: req.body.zip,
    phone: req.body.phone,
    email: req.body.email,
  };

  Users.create(user)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the User."
      });
    });
}

// Get all menus
// export const findAll = (req, res) => {
//   const id = req.params.m_id;
//   let condition = id ? { [Op.like]: `%${id}%` }  : null;

//   MenuSideDishes.findAll({ where: condition })
//     .then(data => {
//       res.send(data);
//     })
//     .catch(err => {
//       res.status(500).send({
//         message:
//           err.message || "Nothing found!"
//       });
//     });
// }

// Get specific menu id === m_id !!!
// export const findOne = (req, res) => {
//   const id = req.query.m_id;

//   MenuSideDishes.findByPk(id)
//     .then(data => {
//       if (data) {
//         res.send(data);
//       } else {
//         res.status(404).send({
//           message: `Cannot find MenuSideDishes with Menu-Id=${id}.`
//         });
//       }
//     })
//     .catch(err => {
//       res.status(500).send({
//         message: "Error retrieving MenuSideDishes with Menu-Id=" + id
//       });
//     });
// }

// Edit an existing menu
// export const update = (req, res) => {
//   const id = req.params.id;

//   MenuSideDishes.update(req.body, {
//     where: { sd_id: id }
//   })
//     .then(num => {
//       if (num == 1) {
//         res.send({
//           message: "MenuSideDishes was updated successfully."
//         });
//       } else {
//         res.send({
//           message: `Cannot update MenuSideDishes with id=${id}. Maybe MenuSideDishes was not found or req.body is empty!`
//         });
//       }
//     })
//     .catch(err => {
//       res.status(500).send({
//         message: "Error updating MenuSideDishes with id=" + id
//       });
//     });
// }

// Remove a menu by giving menu-id(mid) AND sideDishes-id (sdid)
// export const remove = (req, res) => {
//   const mid = req.params.mid;
//   const sdid = req.params.sdid;

//   MenuSideDishes.destroy({
//     where: { m_id: mid, sd_id: sdid } // Always search for the menu-id !!!
//   })
//     .then(num => {
//       if (num == 1) {
//         res.send({
//           message: "MenuSideDishes was deleted successfully!"
//         });
//       } else {
//         res.send({
//           message: `Cannot delete MenuSideDishes with id=${id}. Maybe MenuSideDishes was not found!`
//         });
//       }
//     })
//     .catch(err => {
//       res.status(500).send({
//         message: "Could not delete MenuSideDishes with id=" + id
//       });
//     });
// }

// Schould not be used :)
// export const removeAll = (req, res) => {

// }

