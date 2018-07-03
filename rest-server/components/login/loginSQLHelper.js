const verifyAccountHelper = `
    SELECT 
      id, name, lastname, profilepicture, email, password, status, treats
    FROM 
      users
    WHERE
      email=$1
`;

module.exports = verifyAccountHelper; 