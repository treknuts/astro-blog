function formatDate(rawDate) {
  return new Date(rawDate).toLocaleDateString("en-us", {
    year: "2-digit",
    month: "numeric",
    day: "numeric",
  });
}

export default formatDate;
