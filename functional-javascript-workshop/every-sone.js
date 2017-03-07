function checkUsersValid(goodUsers) {
  return function allUsersValid(submittedUsers) {
    return submittedUsers.every((user) =>  goodUsers.some((usr) => usr.id === user.id ));
  }
}

module.exports = checkUsersValid;
