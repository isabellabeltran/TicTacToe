const verifyAccountHelper = `
    SELECT 
      id, email, password
    FROM 
      users
    WHERE
      email=$1
`;

module.exports = verifyAccountHelper; 