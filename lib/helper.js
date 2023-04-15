const BASE_URL = "http://localhost:3000";

// GET all users
export const getUsers = async () => {
  const response = await fetch(`${BASE_URL}/api/users`);
  const json = await response.json();

  return json;
};

// GET a single user by ID
export const getUser = async (userId) => {
  const response = await fetch(`${BASE_URL}/api/users/${userId}`)
  const json = await response.json()

  if (json ) return json;
  return {}
}

// POST new user
export async function addUser(formData) {
  try {
    const Options = {
      method: 'POST',
      headers: {'Content-type': "application/json"},
      body: JSON.stringify(formData)
    }

    const response = await fetch(`${BASE_URL}/api/users`, Options)
    const json = await response.json()

    return json;
  } catch (error) {
    return error;
  }
}

// UPDATE a user by ID
export async function updateUser(userId, formData) {
  try {
    const Options = {
      method: 'PUT',
      headers: {'Content-type': "application/json"},
      body: JSON.stringify(formData)
    }

    const response = await fetch(`${BASE_URL}/api/users/${userId}`, Options)
    const json = await response.json()

    return json;
  } catch (error) {
    return error;
  }
}

// DELETE a user by ID
export async function deleteUser(userId) {
  try {
    const Options = {
      method: 'DELETE',
    }

    const response = await fetch(`${BASE_URL}/api/users/${userId}`, Options)
    const json = await response.json()

    return json;
  } catch (error) {
    return error;
  }
}