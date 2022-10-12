function getEmailDomain(email) {
  const result = email.split('@');
  return result[result.length - 1];
}

module.exports = {
  getEmailDomain
};
