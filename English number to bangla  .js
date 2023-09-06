
// converting English number to bangla 
export function convertToBanglaNumerals(index) {
    const banglaNumerals = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];
    let banglaNumeralsString = "";
    if (index == 0) {
        banglaNumeralsString = banglaNumerals[0];
    } else {
        while (index > 0) {
            const digit = index % 10;
            banglaNumeralsString = banglaNumerals[digit] + banglaNumeralsString;
            index = Math.floor(index / 10);
        }
    }
    return banglaNumeralsString;
}
