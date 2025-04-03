const Nums2MoneyString = (money = 0) => {
    const config = { style: 'currency', currency: 'VND', maximumFractionDigits: 9 };
    return new Intl.NumberFormat('vi-VN', config).format(money);
};
const findMaxFrom2Nums = (num1 = 0, num2 = 0) => {
    return num1 > num2 ? num1 : num2;
};
const ReducePercentFrom2Nums = (num1 = 0, num2 = 0) => {
    const max = findMaxFrom2Nums(num1, num2);
    const min = num1 + num2 - max;
    return (max - min) / max;
};
