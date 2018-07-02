const createAccountHelper = `
    INSERT INTO
      users (name, lastName, email, password)
    VALUES
      ($1, $2, $3, $4)
    RETURNING
      id, name, lastName, email, password
`;

module.exports = createAccountHelper; 