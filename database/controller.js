// CONTROLLER
import Users from "../model/user";

// GET(all): http://localhost:3000/api/users
export async function getUsers(req, res) {
  try {
    const users = await Users.find({}); // finds all

    if (!users) return res.status(404).json({ error: "Data not found!" });

    res.status(200).json(users);
  } catch (error) {
    res.status(404).json({ error: "Error while fetching data!" });
  }
}

// GET(one): http://localhost:3000/api/users/[id]
export async function getUser(req,res) {
  try {
    const { userId } = req.query; // finds one: ;

    if (userId) {
      const user = await Users.findById(userId)
      res.status(200).json(user)
    }
    
    res.status(400).json({ error: "User not found!"})
  } catch (error) {
    res.status(404).json({ error: "Error while fetching data!" });
  }
}

// POST: http://localhost:3000/api/users
export async function postUser(req,res){
  try {
    const formData = req.body

    if (!formData) return res.status(404).json({ error: "Form data not provided!"})
   
    Users.create(formData, function(err, data){
      return res.status(200).json(data)
    })
  } catch (error) {
    return res.status(404).json({error})
  }
}

// PUT: http://localhost:3000/api/users
export async function putUser(req, res) {
  try {
    const {userId } = req.query;
    const formData = req.body;

    if (userId && formData) {
      await Users.findByIdAndUpdate(userId, formData);
      res.status(200).json(formData)
    }

    res.status(404).json({ error: "User Not Found!"})
  } catch (error) {
    res.status(404).json({ error: "Error while updating the data!"})
  }
}

// DELETE: http://localhost:3000/api/users
export async function deleteUser(req, res) {
  try {
    const { userId } = req.query;

    if (userId) {
      const user = await Users.findByIdAndDelete(userId)
      return res.status(200).json({deleted: userId})
    }

    res.status(404).json({ error: "User Not Found!"})
  } catch (error) {
    res.status(404).json({ error: "Error while deleting the data!"})
  }
}