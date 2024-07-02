function getShippingCost(country) {
  switch (country) {
    case "China":
      return 100;
    case "Chile":
      return 250;
    case "Australia":
      return 170;
    case "Jamaica":
      return 120;
    default:
      return "Sorry, there is no delivery to your country";
  }
}
