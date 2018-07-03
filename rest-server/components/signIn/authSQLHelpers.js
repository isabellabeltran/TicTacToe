const createAccountHelper = `
    INSERT INTO
      users (name, lastname, email, password)
    VALUES
      ($1, $2, $3, $4)
    RETURNING
      id, name, lastName, email, password
`;

module.exports = createAccountHelper; 