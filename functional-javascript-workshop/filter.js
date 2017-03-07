function getShortMessage(messages) {
  return messages
    .filter((mes) => mes.message.length < 50)
    .map((mes) => mes.message);
}

module.exports = getShortMessage;
