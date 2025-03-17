export const formatDateRange = (startDate, endDate = null) => {
  // Parse the start date
  const start = new Date(startDate);

  // Format the start date as "MMM YYYY"
  const formattedStart = start.toLocaleString('default', { month: 'short', year: 'numeric' });

  // Check if endDate is provided and not "Now"
  let formattedEnd;
  if (endDate && endDate !== 'Now') {
    const end = new Date(endDate);
    formattedEnd = end.toLocaleString('default', { month: 'short', year: 'numeric' });
  } else {
    formattedEnd = 'Present';
  }

  // Return the formatted date range
  return `${formattedStart} to ${formattedEnd}`;
};
