const SidebarApi = [
    {
        title: 'Dashboard',
        icon: {
            isFontIcon: true,
            value: 'bi bi-house-fill text-xl',
        },
        className: 'py-2 border-b px-5 text-[#444]',
        dropMenu: {
            isOtherDDMenu: false,
            value: [
                {
                    title: 'Tổng quan',
                    href: '/admin/dashboard/overview',
                    icon: {
                        isFontIcon: true,
                        value: 'bi bi-bar-chart-line text-xl',
                    },
                },
                {
                    title: 'Thống kê các đơn hàng',
                    href: '/admin/dashboard/orders',
                    icon: {
                        isFontIcon: true,
                        value: 'bi bi-shop text-xl',
                    },
                },
                {
                    title: 'Thống kê người dùng',
                    href: '/admin/dashboard/visitors',
                    icon: {
                        isFontIcon: true,
                        value: 'bi bi-people text-xl',
                    },
                },
            ],
        },
    },
    {
        title: 'Quản lý đơn hàng',
        icon: {
            isFontIcon: true,
            value: 'bi bi-cart text-xl',
        },
        className: 'py-2 border-b px-5 text-[#444]',
        dropMenu: {
            isOtherDDMenu: false,
            value: [
                {
                    title: 'Đơn hàng chờ xác nhận',
                    href: '/admin/order/pending',
                    icon: {
                        isFontIcon: true,
                        value: 'bi bi-cart-plus text-xl',
                    },
                },
                {
                    title: 'Đơn hàng bị hủy',
                    href: '/admin/order/fail',
                    icon: {
                        isFontIcon: true,
                        value: 'bi bi-cart-x text-xl',
                    },
                },
                {
                    title: 'Đơn thành công',
                    href: '/admin/order/success',
                    icon: {
                        isFontIcon: true,
                        value: 'bi bi-cart-check text-xl',
                    },
                },
            ],
        },
    },
    {
        title: 'Quản lý kho hàng',
        icon: {
            isFontIcon: true,
            value: 'bi bi-database text-xl',
        },
        className: 'py-2 border-b px-5 text-[#444]',
        dropMenu: {
            isOtherDDMenu: false,
            value: [
                {
                    title: 'Các sản phẩm đang bán',
                    href: '/admin/products/sell',
                    icon: {
                        isFontIcon: true,
                        value: 'bi bi-cart-plus text-xl',
                    },
                },
                {
                    title: 'Các sản phẩm hết hàng',
                    href: '/admin/order/outstock',
                    icon: {
                        isFontIcon: true,
                        value: 'bi bi-cart-x text-xl',
                    },
                },
                {
                    title: 'Thêm/sửa/xóa sản phẩm',
                    href: '/admin/order/success',
                    icon: {
                        isFontIcon: true,
                        value: 'bi bi-database-gear text-xl',
                    },
                },
            ],
        },
    },
    {
        title: 'Quản lý nhân viên',
        icon: {
            isFontIcon: true,
            value: 'bi bi-person-workspace text-xl',
        },
        className: 'py-2 border-b px-5 text-[#444]',
        dropMenu: {
            isOtherDDMenu: false,
            value: [
                {
                    title: 'Thống kê nhân viên',
                    href: '/admin/products/sell',
                    icon: {
                        isFontIcon: true,
                        value: 'bi bi-person-lines-fill text-xl',
                    },
                },
                {
                    title: 'Phiếu nghỉ',
                    href: '/admin/order/outstock',
                    icon: {
                        isFontIcon: true,
                        value: 'bi bi-person-exclamation text-2xl',
                    },
                },
                {
                    title: 'Nhắn tin',
                    href: '/admin/order/success',
                    icon: {
                        isFontIcon: true,
                        value: 'bi bi-chat-left-text-fill text-lg',
                    },
                },
            ],
        },
    },
    {
        title: 'Lịch trình/ Event',
        icon: {
            isFontIcon: true,
            value: 'bi bi-calendar-week text-xl',
        },
        className: 'py-2 border-b px-5 text-[#444]',
        dropMenu: {
            isOtherDDMenu: false,
            value: [
                {
                    title: 'Lịch/event',
                    href: '/admin/order/outstock',
                    icon: {
                        isFontIcon: true,
                        value: 'bi bi-calendar3 text-xl',
                    },
                },
                {
                    title: 'Thêm/sửa/xóa lịch',
                    href: '/admin/products/sell',
                    icon: {
                        isFontIcon: true,
                        value: 'bi bi-calendar2-plus text-xl',
                    },
                },
                {
                    title: 'Lịch sử lịch trình',
                    href: '/admin/order/success',
                    icon: {
                        isFontIcon: true,
                        value: 'bi bi-clock-history text-xl',
                    },
                },
            ],
        },
    },
    {
        title: 'Thông tin liên lạc các nhân sự',
        icon: {
            isFontIcon: true,
            value: 'bi bi-person-rolodex text-xl',
        },
        className: 'py-2 border-b px-5 text-[#444]',
        dropMenu: {
            isOtherDDMenu: false,
            value: [
                {
                    title: 'Số điện thoại/ Hotline',
                    href: '/admin/order/outstock',
                    icon: {
                        isFontIcon: true,
                        value: 'bi bi-telephone-fill text-xl',
                    },
                },
                {
                    title: 'Thông tin liên lạc khác',
                    href: '/admin/products/sell',
                    icon: {
                        isFontIcon: true,
                        value: 'bi bi-telephone-fill text-xl',
                    },
                },
                {
                    title: 'Thông tin liên lạc kho hàng',
                    href: '/admin/order/success',
                    icon: {
                        isFontIcon: true,
                        value: 'bi bi-telephone-fill text-xl',
                    },
                },
            ],
        },
    },
];
const handleOpenAdminSidebar = () => {
    const sidebar = document.querySelector('#sidebar-container') || undefined;
    if (!sidebar) return -1;
    Object.keys(Chart.instances).map((chartId) => {
        chartResize(Chart.instances[chartId])();
    });
    return sidebar.classList.toggle('sidebar--open');
};
renderCategoryMenu('.admin-sidebar', SidebarApi);

const chartResize = (chart) => () => {
    if (!chart) return false;
    chart.resize(50, 50);
};
const visitorsChartEle = document.getElementById('visitors__chart');
const revenuesChartEle = document.getElementById('revenues__chart');
const bestSellCategoryChartEle = document.getElementById('bestSellCategory__chart');

const fakeVisitorChartData = {
    labels: getLabelMonth(1, new Date().getMonth() + 1),
    datasets: [
        {
            label: 'Lượt vào trang (người)',
            data: [9230, 4230, 2230, 5050, 12310, 4440, 12300, 15123, 19561, 10320, 2100],
            fill: true,
            borderWidth: 1,
            borderColor: '#ef4444',
            backgroundColor: '#ef444444',
            tension: 0.1,
        },
    ],
};

const fakeRevenuesChartData = {
    labels: getLabelMonth(1, new Date().getMonth() + 1),
    datasets: [
        {
            label: 'Doanh thu (triệu đồng)',
            data: [400, 300, 200, 165, 200.3001, 404.104, 323.0, 1200.0, 1500.0, 1200.0032, 500],
            fill: true,
            borderWidth: 1,
            borderColor: '#fbbf24',
            backgroundColor: '#fbbf2444',
            tension: 0.1,
        },
    ],
};

const fakeBestSellCategoryCartData = {
    labels: [
        'Laptop',
        'Máy tính',
        'Bộ nhớ lưu trữ',
        'Linh kiện máy tính',
        'Apple',
        'Màn hình',
        'Chuột',
        'Bàn phím',
        'Tai nghe - Loa',
        'Bàn - Ghế',
        'Phụ kiện',
    ],
    datasets: [
        {
            label: 'Doanh thu các mặt hàng (triệu đồng)',
            data: [1431, 1300, 250, 1853, 300.3001, 104.104, 57.0, 60.0, 80.0, 100.0032, 20],
            fill: true,
            borderWidth: 1,
            borderColor: '#3b82f6',
            backgroundColor: '#3b82f644',
            tension: 0.1,
        },
    ],
};
const visitorsChart = new Chart(visitorsChartEle, {
    type: 'line',
    data: fakeVisitorChartData,
    options: {
        scales: {
            y: {
                beginAtZero: true,
            },
        },
        resizeDelay: 200,
    },
});

const revenuesChart = new Chart(revenuesChartEle, {
    type: 'line',
    data: fakeRevenuesChartData,
    options: {
        scales: {
            y: {
                beginAtZero: true,
            },
        },
        resizeDelay: 200,
    },
});

const bestSellCategoryChart = new Chart(bestSellCategoryChartEle, {
    type: 'bar',
    data: fakeBestSellCategoryCartData,
    options: {
        scales: {
            y: {
                beginAtZero: true,
            },
        },
        resizeDelay: 200,
    },
});
