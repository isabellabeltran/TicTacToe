const updateUserStatus = `
    UPDATE users 
    SET 
    status = $1
    WHERE 
    id=$2
`;

module.exports = updateUserStatus; 