export const formatDate = (dateString) => {
  if (!dateString) return "—";

  return new Date(dateString).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "2-digit",
  });
};
export const formatDateRange = (start, end) => {
  if (!start) return "—";

  const startFormatted = formatDate(start);
  const endFormatted = end ? formatDate(end) : null;

  return endFormatted
    ? `${startFormatted} - ${endFormatted}`
    : startFormatted;
};