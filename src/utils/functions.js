export function getOnlyDate(dateToSplit) {
  try {
    let date = dateToSplit ? dateToSplit.toISOString() : new Date().toISOString();
    const [datePart] = date.split('T');
    return datePart;
  } catch (e) {
    // do nothing
  }
}
