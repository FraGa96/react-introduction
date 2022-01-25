export function getOnlyDate(dateToSplit) {
  try {
    let date = dateToSplit ? dateToSplit.toISOString() : new Date().toISOString();
    const [datePart] = date.split('T');
    return datePart;
  } catch (e) {
    // do nothing
  }
}

export function currencyFormat(value) {
  return value >= 0 
  ? `$${Math.abs(Number(value)).toFixed(2)}`
  : `-$${Math.abs(Number(value)).toFixed(2)}`;
}
