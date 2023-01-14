const getUsers = (req, res) => {
    // retrieve list of users from database
    const users = [{ id: 1, name: 'John' }, { id: 2, name: 'Jane' }];
    //res.setHeader('Content-Type', 'application/json');

  // send response with users as stringified JSON object
    //res.end(JSON.stringify(users));
    // send response with users
    //res.json(users);
    return users
  };
  
  module.exports = {
    getUsers,
  };