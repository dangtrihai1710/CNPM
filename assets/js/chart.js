const Month = [
    'Tháng 1',
    'Tháng 2',
    'Tháng 3',
    'Tháng 4',
    'Tháng 5',
    'Tháng 6',
    'Tháng 7',
    'Tháng 8',
    'Tháng 9',
    'Tháng 10',
    'Tháng 11',
    'Tháng 12',
];

const getLabelMonth = (from = 1, to = 12) => {
    if (from < 1 || to > 12) return [];
    return Month.slice(from - 1, to);
};
