/**
 * Next.JS POST API to Create User
 *
 * @param {*} userData User Object
 * @param {string} userData.name User Name
 * @param {string} userData.password User Password
 * @param {string} userData.email User Email
 */
import { Account } from "~/data/contracts/interfaces/account";

async function createUser(userData: Account) {
  try {
    return await fetch(`/api/auth/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: userData.username,
        password: userData.password,
      }),
    });
  } catch (error) {
    console.error(error);
    return error.name;
  }
}

export default createUser;
