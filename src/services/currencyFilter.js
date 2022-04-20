export default function currencyFilter(value) {
    if (typeof value !== "number") {
        return value;
    }
    var formatter = new Intl.NumberFormat('de-DE', {
        style: 'currency',
        currency: 'EUR'
    });
    return formatter.format(value);
}