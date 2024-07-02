function checkForSpam(message) {
  message = message.toLowerCase();

  return message.includes("spam") || message.includes("sale") ? true : false;
}

console.log(checkForSpam("Trust me, this is not a spam message")); // true
