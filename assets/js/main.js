const CategoryMenuApi = [
    {
        title: 'Laptop',
        icon: {
            isFontIcon: true,
            value: 'bi bi-laptop text-xl',
        },
        href: '/laptop',
        className: 'py-2 border-b px-5 text-[#444]',
        dropMenu: {
            isOtherDDMenu: true,
            value: [
                {
                    title: 'Thương hiệu',
                    href: '/laptop',
                    dropMenu: {
                        isOtherDDMenu: false,
                        value: [
                            {
                                title: 'ASUS',
                                href: '/laptop/asus',
                            },
                            {
                                title: 'ACER',
                                href: '/laptop/acer',
                            },
                            {
                                title: 'MSI',
                                href: '/laptop/msi',
                            },
                            {
                                title: 'LENOVO',
                                href: '/laptop/lenovo',
                            },
                            {
                                title: 'DELL',
                                href: '/laptop/dell',
                            },
                            {
                                title: 'HP',
                                href: '/laptop/hp',
                            },
                            {
                                title: 'LG Gram',
                                href: '/laptop/lggram',
                            },
                        ],
                    },
                },
                {
                    title: 'Giá bán',
                    href: '/laptop',
                    dropMenu: {
                        isOtherDDMenu: false,
                        value: [
                            {
                                title: 'Dưới 15 triệu',
                                href: '/laptop/collection/duoi-15',
                            },
                            {
                                title: 'Từ 15 tới 20 triệu',
                                href: '/laptop/collection/tu-15-toi-20',
                            },
                            {
                                title: 'Trên 20 triệu',
                                href: '/laptop/collection/tren-20',
                            },
                        ],
                    },
                },
                {
                    title: 'CPU Intel-AMD',
                    href: '/laptop',
                    dropMenu: {
                        isOtherDDMenu: false,
                        value: [
                            {
                                title: 'Intel Core i3',
                                href: '/laptop/chip/i3',
                            },
                            {
                                title: 'Intel Core i5',
                                href: '/laptop/chip/i5',
                            },
                            {
                                title: 'Intel Core i7',
                                href: '/laptop/chip/i7',
                            },
                            {
                                title: 'AMD Ryzen',
                                href: '/laptop/chip/amd-ryzen',
                            },
                        ],
                    },
                },
                {
                    title: 'Nhu cầu sử dụng',
                    href: '/laptop',
                    dropMenu: {
                        isOtherDDMenu: false,
                        value: [
                            {
                                title: 'Đồ họa - Studio',
                                href: '/laptop/demand/dohoa-studio',
                            },
                            {
                                title: 'Học sinh - Sinh viên',
                                href: '/laptop/demand/hocsinh-sinhvien',
                            },
                            {
                                title: 'Mỏng nhẹ cao cấp',
                                href: '/laptop/demand/mongnhe-caocap',
                            },
                            {
                                title: 'Studio RTX 40 series',
                                href: '/laptop/demand/studio-rtx40-series',
                            },
                        ],
                    },
                },
                {
                    title: 'Linh kiện laptop',
                    href: '/laptop',
                    dropMenu: {
                        isOtherDDMenu: false,
                        value: [
                            {
                                title: 'Ram laptop',
                                href: '/laptop/components/ram',
                            },
                            {
                                title: 'SSD laptop',
                                href: '/laptop/components/ssd',
                            },
                            {
                                title: 'Ổ cứng di động',
                                href: '/laptop/components/o-cung-didong',
                            },
                        ],
                    },
                },
                {
                    title: 'Phụ kiện laptop',
                    href: '/laptop',
                    dropMenu: {
                        isOtherDDMenu: false,
                        value: [
                            {
                                title: 'Balo - Túi chống sốc',
                                href: '/laptop/accessories/balo-tuichongsoc',
                            },
                            {
                                title: 'Đế tản nhiệt LAPTOP',
                                href: '/laptop/accessories/ssd',
                            },
                        ],
                    },
                },
                {
                    title: 'Laptop ASUS',
                    href: '/laptop',
                    dropMenu: {
                        isOtherDDMenu: false,
                        value: [
                            {
                                title: 'ASUS OLED Series',
                                href: '/laptop/ASUS/OLED-Series',
                            },
                            {
                                title: 'Vivobook Series',
                                href: '/laptop/ASUS/Vivobook-Series',
                            },
                            {
                                title: 'ExpertBook Series',
                                href: '/laptop/ASUS/ExpertBook-Series',
                            },
                            {
                                title: 'ProArt StudioBook Series',
                                href: '/laptop/ASUS/ProArt-StudioBook-Series',
                            },
                        ],
                    },
                },
                {
                    title: 'Laptop ACER',
                    href: '/laptop',
                    dropMenu: {
                        isOtherDDMenu: false,
                        value: [
                            {
                                title: 'Aspire Series',
                                href: '/laptop/ACER/Aspire-Series',
                            },
                            {
                                title: 'Swift Series',
                                href: '/laptop/ACER/Swift-Series',
                            },
                        ],
                    },
                },
                {
                    title: 'Laptop MSI',
                    href: '/laptop',
                    dropMenu: {
                        isOtherDDMenu: false,
                        value: [
                            {
                                title: 'Modern Series',
                                href: '/laptop/MSI/Modern-Series',
                            },
                            {
                                title: 'Prestige Series',
                                href: '/laptop/MSI/Prestige-Series',
                            },
                            {
                                title: 'Summit Series',
                                href: '/laptop/MSI/Summit-Series',
                            },
                            {
                                title: 'CREATOR Series',
                                href: '/laptop/MSI/CREATOR-Series',
                            },
                        ],
                    },
                },
                {
                    title: 'Laptop LENOVO',
                    href: '/laptop',
                    dropMenu: {
                        isOtherDDMenu: false,
                        value: [
                            {
                                title: 'ThinkBook Series',
                                href: '/laptop/LENOVO/ThinkBook-Series',
                            },
                            {
                                title: 'IdeaPad Series',
                                href: '/laptop/LENOVO/IdeaPad-Series',
                            },
                            {
                                title: 'IdeaPad Pro Series',
                                href: '/laptop/LENOVO/IdeaPad-Pro-Series',
                            },
                            {
                                title: 'ThinkPad Series',
                                href: '/laptop/LENOVO/ThinkPad-Series',
                            },
                            {
                                title: 'Yoga Series',
                                href: '/laptop/LENOVO/Yoga-Series',
                            },
                        ],
                    },
                },
            ],
        },
    },
    {
        title: 'Laptop Gaming',
        icon: {
            isFontIcon: false,
            value: `<svg
        class="w-5 h-7"
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 512 512"
        style="enable-background: new 0 0 512 512"
        xml:space="preserve"
    >
        <g>
            <path
                style="fill: #38454f"
                d="M185.379,384v17.655h141.241V384H476.69V101.517c0-9.754-7.901-17.655-17.655-17.655H52.966
c-9.754,0-17.655,7.901-17.655,17.655V384H185.379z"
            />
            <path
                style="fill: #b0b6bb"
                d="M326.621,384v17.655H185.379V384H0v26.483c0,9.754,7.901,17.655,17.655,17.655h476.69
c9.754,0,17.655-7.901,17.655-17.655V384H326.621z"
            />
            <polygon
                style="fill: #546a79"
                points="52.966,366.345 459.034,366.345 459.034,101.517 52.966,101.517 	"
            />
            <g>
                <path
                    style="fill: #ea6148"
                    d="M432.552,348.69H300.138c-4.882,0-8.828-3.955-8.828-8.828s3.946-8.828,8.828-8.828h132.414
c4.882,0,8.828,3.955,8.828,8.828S437.433,348.69,432.552,348.69"
                />
                <path
                    style="fill: #ea6148"
                    d="M167.724,295.724H79.448c-4.882,0-8.828-3.955-8.828-8.828s3.946-8.828,8.828-8.828h88.276
c4.882,0,8.828,3.955,8.828,8.828S172.606,295.724,167.724,295.724"
                />
                <path
                    style="fill: #ea6148"
                    d="M388.414,295.724H256c-4.882,0-8.828-3.955-8.828-8.828s3.946-8.828,8.828-8.828h132.414
c4.882,0,8.828,3.955,8.828,8.828S393.295,295.724,388.414,295.724"
                />
                <path
                    style="fill: #ea6148"
                    d="M211.862,295.724c-2.295,0-4.599-0.971-6.268-2.56c-1.598-1.677-2.56-3.972-2.56-6.268
c0-1.148,0.265-2.295,0.706-3.354c0.441-1.148,1.059-2.119,1.854-2.913c3.266-3.266,9.181-3.266,12.535,0
c1.589,1.677,2.56,3.972,2.56,6.268s-0.971,4.59-2.56,6.268c-0.441,0.353-0.892,0.794-1.412,1.059
c-0.441,0.353-0.98,0.618-1.501,0.794c-0.538,0.265-1.059,0.441-1.686,0.53C213.01,295.636,212.392,295.724,211.862,295.724"
                />
                <path
                    style="fill: #ea6148"
                    d="M256,348.69H123.586c-4.882,0-8.828-3.955-8.828-8.828s3.946-8.828,8.828-8.828H256
c4.882,0,8.828,3.955,8.828,8.828S260.882,348.69,256,348.69"
                />
                <path
                    style="fill: #ea6148"
                    d="M79.448,348.69c-1.148,0-2.295-0.265-3.354-0.706c-1.059-0.441-2.03-1.059-2.913-1.854
c-1.598-1.677-2.56-3.884-2.56-6.268c0-1.148,0.265-2.295,0.706-3.354c0.441-1.148,1.059-2.03,1.854-2.913
c2.119-2.03,5.12-2.913,7.936-2.383c0.627,0.088,1.148,0.265,1.686,0.53c0.521,0.177,1.059,0.441,1.501,0.794
c0.521,0.353,0.971,0.706,1.412,1.059c0.794,0.883,1.412,1.766,1.854,2.913c0.441,1.059,0.706,2.207,0.706,3.354
c0,2.383-0.971,4.59-2.56,6.268c-0.441,0.353-0.892,0.706-1.412,1.059c-0.441,0.353-0.98,0.618-1.501,0.794
c-0.538,0.265-1.059,0.441-1.686,0.53C80.596,348.601,79.978,348.69,79.448,348.69"
                />
                <path
                    style="fill: #ea6148"
                    d="M432.552,295.724c-0.538,0-1.148-0.088-1.677-0.177c-0.618-0.088-1.148-0.265-1.677-0.53
c-0.53-0.177-1.059-0.441-1.598-0.794c-0.433-0.353-0.874-0.706-1.315-1.059c-1.598-1.677-2.56-3.972-2.56-6.268
s0.962-4.59,2.56-6.268l1.315-1.059c0.539-0.353,1.068-0.618,1.598-0.794c0.53-0.265,1.059-0.441,1.677-0.53
c2.825-0.618,5.906,0.353,7.945,2.383c0.353,0.441,0.706,0.883,1.059,1.412c0.353,0.441,0.609,0.971,0.794,1.501
c0.265,0.53,0.441,1.059,0.521,1.677c0.097,0.53,0.185,1.148,0.185,1.677c0,0.53-0.088,1.148-0.185,1.766
c-0.079,0.53-0.256,1.059-0.521,1.589c-0.185,0.53-0.441,1.059-0.794,1.589c-0.353,0.441-0.706,0.883-1.059,1.324
c-0.441,0.353-0.892,0.706-1.324,1.059c-0.53,0.353-1.068,0.618-1.589,0.794c-0.538,0.265-1.059,0.441-1.686,0.53
C433.699,295.636,433.081,295.724,432.552,295.724"
                />
                <path
                    style="fill: #ea6148"
                    d="M432.552,189.793H300.138c-4.882,0-8.828-3.955-8.828-8.828s3.946-8.828,8.828-8.828h132.414
c4.882,0,8.828,3.955,8.828,8.828S437.433,189.793,432.552,189.793"
                />
                <path
                    style="fill: #ea6148"
                    d="M432.552,242.759h-88.276c-4.882,0-8.828-3.955-8.828-8.828c0-4.873,3.946-8.828,8.828-8.828
h88.276c4.882,0,8.828,3.955,8.828,8.828C441.379,238.804,437.433,242.759,432.552,242.759"
                />
                <path
                    style="fill: #ea6148"
                    d="M273.655,242.759H256c-4.882,0-8.828-3.955-8.828-8.828c0-4.873,3.946-8.828,8.828-8.828h17.655
c4.882,0,8.828,3.955,8.828,8.828C282.483,238.804,278.537,242.759,273.655,242.759"
                />
                <path
                    style="fill: #ea6148"
                    d="M388.414,136.828H256c-4.882,0-8.828-3.955-8.828-8.828c0-4.873,3.946-8.828,8.828-8.828h132.414
c4.882,0,8.828,3.955,8.828,8.828C397.241,132.873,393.295,136.828,388.414,136.828"
                />
                <path
                    style="fill: #ea6148"
                    d="M432.552,136.828c-0.538,0-1.148-0.088-1.677-0.177c-0.618-0.088-1.148-0.265-1.677-0.53
c-0.53-0.177-1.059-0.441-1.598-0.794c-0.433-0.353-0.874-0.706-1.315-1.059c-1.598-1.677-2.56-3.972-2.56-6.268
c0-2.295,0.962-4.59,2.56-6.268l1.315-1.059c0.539-0.353,1.068-0.618,1.598-0.794c0.53-0.265,1.059-0.441,1.677-0.53
c2.825-0.618,5.906,0.353,7.945,2.383c0.353,0.441,0.706,0.883,1.059,1.412c0.353,0.441,0.609,0.971,0.794,1.501
c0.265,0.53,0.441,1.059,0.521,1.677c0.097,0.53,0.185,1.148,0.185,1.677c0,0.53-0.088,1.148-0.185,1.766
c-0.079,0.53-0.256,1.059-0.521,1.589c-0.185,0.53-0.441,1.059-0.794,1.589c-0.353,0.441-0.706,0.883-1.059,1.324
c-0.441,0.353-0.892,0.706-1.324,1.059c-0.53,0.353-1.068,0.618-1.589,0.794c-0.538,0.265-1.059,0.441-1.686,0.53
C433.699,136.739,433.081,136.828,432.552,136.828"
                />
                <path
                    style="fill: #ea6148"
                    d="M264.828,189.793c-2.392,0-4.599-0.971-6.268-2.56c-1.598-1.677-2.56-3.884-2.56-6.268
c0-2.295,0.962-4.59,2.56-6.268c2.03-2.03,5.12-3.001,7.936-2.383c0.627,0.088,1.148,0.265,1.686,0.53
c0.521,0.177,1.059,0.441,1.501,0.794c0.521,0.265,0.971,0.706,1.324,1.059c1.677,1.677,2.648,3.972,2.648,6.268
c0,2.383-0.971,4.59-2.648,6.268C269.418,188.822,267.211,189.793,264.828,189.793"
                />
                <path
                    style="fill: #ea6148"
                    d="M308.966,242.759c-0.618,0-1.148-0.088-1.766-0.177c-0.53-0.088-1.059-0.265-1.589-0.53
c-0.53-0.177-1.059-0.441-1.598-0.794c-0.433-0.353-0.874-0.706-1.315-1.059c-1.598-1.677-2.56-3.884-2.56-6.268
c0-2.295,0.962-4.59,2.56-6.268c3.266-3.266,9.269-3.266,12.535,0c1.589,1.677,2.56,3.972,2.56,6.268
c0,0.618-0.088,1.148-0.185,1.766c-0.079,0.53-0.256,1.059-0.521,1.589c-0.185,0.53-0.441,1.059-0.794,1.589
c-0.353,0.441-0.706,0.883-1.059,1.324C313.556,241.788,311.261,242.759,308.966,242.759"
                />
            </g>
            <polygon
                style="fill: #ecba16"
                points="79.448,242.759 203.034,242.759 203.034,119.172 79.448,119.172 	"
            />
        </g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
                    </svg>`,
        },
        href: '/laptop-gaming',
        className: 'py-2 border-b px-5 text-[#444]',
        dropMenu: {
            isOtherDDMenu: true,
            value: [
                {
                    title: 'Thương hiệu',
                    href: '/laptop-gaming',
                    dropMenu: {
                        isOtherDDMenu: false,
                        value: [
                            {
                                title: 'ASUS / PREDATOR',
                                href: '/laptop-gaming/asus-predator',
                            },
                            {
                                title: 'ASUS / ROG',
                                href: '/laptop-gaming/asus-rog',
                            },
                            {
                                title: 'MSI',
                                href: '/laptop-gaming/msi',
                            },
                            {
                                title: 'LENOVO',
                                href: '/laptop-gaming/lenovo',
                            },
                            {
                                title: 'DELL',
                                href: '/laptop-gaming/dell',
                            },
                            {
                                title: 'GIGABYTE / AORUS',
                                href: '/laptop-gaming/gigabyte-aorus',
                            },
                            {
                                title: 'HP',
                                href: '/laptop-gaming/hp',
                            },
                        ],
                    },
                },
                {
                    title: 'Giá bán',
                    href: '/laptop-gaming',
                    dropMenu: {
                        isOtherDDMenu: false,
                        value: [
                            {
                                title: 'Dưới 20 triệu',
                                href: '/laptop-gaming/collection/duoi-20',
                            },
                            {
                                title: 'Từ 20 tới 25 triệu',
                                href: '/laptop-gaming/collection/tu-20-toi-25',
                            },
                            {
                                title: 'Từ 25 tới 30 triệu',
                                href: '/laptop-gaming/collection/tu-25-toi-30',
                            },
                            {
                                title: 'Trên 30 triệu',
                                href: '/laptop-gaming/collection/tren-30',
                            },
                            {
                                title: 'Gaming cao cấp',
                                href: '/laptop-gaming/collection/caocap',
                            },
                            {
                                title: 'Gaming RTX 40 Series',
                                href: '/laptop-gaming/collection/rtx-40-series',
                            },
                        ],
                    },
                },
                {
                    title: 'ACER | PREDATOR',
                    href: '/laptop-gaming',
                    dropMenu: {
                        isOtherDDMenu: false,
                        value: [
                            {
                                title: 'Nitro Series',
                                href: '/laptop-gaming/ACER-PREDATOR/Nitro-Series',
                            },
                            {
                                title: 'Asphire Series',
                                href: '/laptop-gaming/ACER-PREDATOR/Asphire-Series',
                            },
                            {
                                title: 'Predator Series',
                                href: '/laptop-gaming/ACER-PREDATOR/Predator-Series',
                            },
                            {
                                title: 'ACER RTX 40 Series',
                                href: '/laptop-gaming/ACER-PREDATOR/rtx-40-Series',
                            },
                        ],
                    },
                },
                {
                    title: 'ASUS | ROG Gaming',
                    href: '/laptop-gaming',
                    dropMenu: {
                        isOtherDDMenu: false,
                        value: [
                            {
                                title: 'ROG Series',
                                href: '/laptop-gaming/ASUS-ROG/ROG-Series',
                            },
                            {
                                title: 'TUF Series',
                                href: '/laptop-gaming/ASUS-ROG/TUF-Series',
                            },
                            {
                                title: 'Zephyrus Series',
                                href: '/laptop-gaming/ASUS-ROG/Zephyrus-Series',
                            },
                            {
                                title: 'ROG Strix G',
                                href: '/laptop-gaming/ASUS-ROG/ROG-Strix-G',
                            },
                            {
                                title: 'ROG Flow Series',
                                href: '/laptop-gaming/ASUS-ROG/ROG-Flow-Series',
                            },
                            {
                                title: 'TUF RTX 40 Series',
                                href: '/laptop-gaming/ASUS-ROG/TUF-RTX40-Series',
                            },
                            {
                                title: 'ROG RTX 40 Series',
                                href: '/laptop-gaming/ASUS-ROG/ROG-RTX40-Series',
                            },
                            {
                                title: 'ROG Ally',
                                href: '/laptop-gaming/ASUS-ROG/ROG-Ally',
                            },
                        ],
                    },
                },

                {
                    title: 'MSI Gaming',
                    href: '/laptop-gaming',
                    dropMenu: {
                        isOtherDDMenu: false,
                        value: [
                            {
                                title: 'GF Series',
                                href: '/laptop-gaming/MSI-Gaming/GF-Series',
                            },
                            {
                                title: 'GS Series',
                                href: '/laptop-gaming/MSI-Gaming/GS-Series',
                            },
                            {
                                title: 'Bravo Series',
                                href: '/laptop-gaming/MSI-Gaming/Bravo-Series',
                            },
                            {
                                title: 'Creator Series',
                                href: '/laptop-gaming/MSI-Gaming/Creator-Series',
                            },
                            {
                                title: 'MSI AMD Series',
                                href: '/laptop-gaming/MSI-Gaming/MSI-AMD-Series',
                            },
                            {
                                title: 'MSI RTX 40 Series',
                                href: '/laptop-gaming/MSI-Gaming/MSI-RTX40-Series',
                            },
                        ],
                    },
                },
                {
                    title: 'LENOVO Gaming',
                    href: '/laptop-gaming',
                    dropMenu: {
                        isOtherDDMenu: false,
                        value: [
                            {
                                title: 'Legion Series',
                                href: '/laptop-gaming/LENOVO-Gaming/GF-Series',
                            },
                            {
                                title: 'IdeaPad Gaming',
                                href: '/laptop-gaming/LENOVO-Gaming/IdeaPad-Gaming',
                            },
                            {
                                title: 'Lenovo RTX 40 Series',
                                href: '/laptop-gaming/LENOVO-Gaming/Lenovo-RTX40-Series',
                            },
                            {
                                title: 'LOQ Series',
                                href: '/laptop-gaming/LENOVO-Gaming/LOQ-Series',
                            },
                        ],
                    },
                },
                {
                    title: 'DELL Gaming',
                    href: '/laptop-gaming',
                    dropMenu: {
                        isOtherDDMenu: false,
                        value: [
                            {
                                title: 'Dell Gaming G Series',
                                href: '/laptop-gaming/DELL-Gaming/Dell-Gaming-G-Series',
                            },
                            {
                                title: 'Alienware Series',
                                href: '/laptop-gaming/DELL-Gaming/Alienware-Gaming',
                            },
                            {
                                title: 'DELL RTX 40 Series',
                                href: '/laptop-gaming/DELL-Gaming/Dell-RTX40-Series',
                            },
                        ],
                    },
                },
                {
                    title: 'GIGABYTE Gaming',
                    href: '/laptop-gaming',
                    dropMenu: {
                        isOtherDDMenu: false,
                        value: [
                            {
                                title: 'GIGABYTE G5 | G7',
                                href: '/laptop-gaming/GIGABYTE-Gaming/GIGABYTE-G5-G7',
                            },
                            {
                                title: 'GIGABYTE AORUS',
                                href: '/laptop-gaming/GIGABYTE-Gaming/GIGABYTE-AORUS',
                            },
                            {
                                title: 'GIGABYTE AERO',
                                href: '/laptop-gaming/GIGABYTE-Gaming/GIGABYTE-AERO',
                            },
                            {
                                title: 'GIGABYTE RTX 40 Series',
                                href: '/laptop-gaming/GIGABYTE-Gaming/GIGABYTE-RTX40-Series',
                            },
                        ],
                    },
                },
                {
                    title: 'Card đồ họa ',
                    href: '/laptop-gaming',
                    dropMenu: {
                        isOtherDDMenu: false,
                        value: [
                            {
                                title: 'GTX 1650',
                                href: '/laptop-gaming/Card/GTX 1650',
                            },
                            {
                                title: 'GTX 3050 / 3050Ti',
                                href: '/laptop-gaming/Card/GTX-3050-3050Ti',
                            },
                            {
                                title: 'GTX 3060',
                                href: '/laptop-gaming/Card/GTX-3060',
                            },
                            {
                                title: 'GTX 3070 / 3080',
                                href: '/laptop-gaming/Card/GTX-3070-3080',
                            },
                            {
                                title: 'AMD Radeon RX',
                                href: '/laptop-gaming/Card/AMD-Radeon-RX',
                            },
                            {
                                title: 'RTX 40 Series',
                                href: '/laptop-gaming/Card/RTX40-Series',
                            },
                        ],
                    },
                },
                {
                    title: 'Linh kiện laptop',
                    href: '/laptop-gaming',
                    dropMenu: {
                        isOtherDDMenu: false,
                        value: [
                            {
                                title: 'Ram laptop',
                                href: '/laptop-gaming/components/ram',
                            },
                            {
                                title: 'SSD laptop',
                                href: '/laptop-gaming/components/ssd',
                            },
                            {
                                title: 'Ổ cứng di động',
                                href: '/laptop-gaming/components/o-cung-didong',
                            },
                        ],
                    },
                },
                {
                    title: 'Phụ kiện laptop',
                    href: '/laptop-gaming',
                    dropMenu: {
                        isOtherDDMenu: false,
                        value: [
                            {
                                title: 'Đế tản nhiệt LAPTOP',
                                href: '/laptop/accessories/detan-nhiet',
                            },
                        ],
                    },
                },
            ],
        },
    },
    {
        title: 'PC Gaming',
        icon: {
            isFontIcon: true,
            value: 'bi bi-pc-display',
        },
        href: '/pc-gaming',
        className: 'py-2 border-b px-5 text-[#444]',
        dropMenu: {
            isOtherDDMenu: true,
            value: [
                {
                    title: 'GVN Gaming - Intel i9',
                    href: '/pc-gaming',
                    dropMenu: {
                        isOtherDDMenu: false,
                        value: [
                            {
                                title: 'i9 - 14900K / RTX 4090',
                                href: '/pc-gaming/chip_pc_i9/i9-14900k-RTX-4090',
                            },
                            {
                                title: 'i9 - 14900K / RTX 4080',
                                href: '/pc-gaming/chip_pc_i9/i9-14900k-RTX-4080',
                            },
                            {
                                title: 'i9 - 14900K / RTX 4070 Ti',
                                href: '/pc-gaming/chip_pc_i9/i9-14900k-RTX-4070Ti',
                            },
                            {
                                title: 'i9 - 14900K / RTX 4060 Ti',
                                href: '/pc-gaming/chip_pc_i9/i9-14900k-RTX-4060Ti',
                            },
                            {
                                title: 'i9 - 14900F / RTX 4060',
                                href: '/pc-gaming/chip_pc_i9/i9-14900k-RTX-4060',
                            },
                        ],
                    },
                },
                {
                    title: 'GVN Gaming - Intel i7',
                    href: '/pc-gaming',
                    dropMenu: {
                        isOtherDDMenu: false,
                        value: [
                            {
                                title: 'i7 - 13700K / RTX 4080',
                                href: '/pc-gaming/chip_pc_i7/i7-13700k-RTX-4080',
                            },
                            {
                                title: 'i7 - 13700F / RTX 4070 Ti',
                                href: '/pc-gaming/chip_pc_i7/i7-13700f-RTX-4070Ti',
                            },
                            {
                                title: 'i7 - 13700K / RTX 4070 Ti',
                                href: '/pc-gaming/chip_pc_i7/i7-13700k-RTX-4070Ti',
                            },
                            {
                                title: 'i7 - 13700K / RTX 4060 Ti',
                                href: '/pc-gaming/chip_pc_i7/i7-13700k-RTX-4060Ti',
                            },
                            {
                                title: 'i7 - 13700F / RTX 4070',
                                href: '/pc-gaming/chip_pc_i7/i7-13700k-RTX-4070',
                            },
                            {
                                title: 'i7 - 13700F / RTX 4060',
                                href: '/pc-gaming/chip_pc_i7/i7-13700k-RTX-4060',
                            },
                            {
                                title: 'i7 - 13700F / RTX 3060',
                                href: '/pc-gaming/chip_pc_i7/i7-13700k-RTX-3060',
                            },
                            {
                                title: 'i7 - 13700F / RTX 3050',
                                href: '/pc-gaming/chip_pc_i7/i7-13700k-RTX-3050',
                            },
                        ],
                    },
                },
                {
                    title: 'GVN Gaming - Intel i5',
                    href: '/pc-gaming',
                    dropMenu: {
                        isOtherDDMenu: false,
                        value: [
                            {
                                title: 'i5 - 13600KF / RTX 4070',
                                href: '/pc-gaming/chip_pc_i5/i5-13600kf-RTX-4070',
                            },
                            {
                                title: 'i5 - 13600KF / RTX 4060',
                                href: '/pc-gaming/chip_pc_i5/i5-13600kf-RTX-4060',
                            },
                            {
                                title: 'i5 - 13600KF / RTX 3060',
                                href: '/pc-gaming/chip_pc_i5/i5-13600kf-RTX-3060',
                            },
                            {
                                title: 'i5 - 13400F / RTX 4060 Ti',
                                href: '/pc-gaming/chip_pc_i5/i5-13400F-RTX-4060Ti',
                            },
                            {
                                title: 'i5 - 12400F / RTX 4060',
                                href: '/pc-gaming/chip_pc_i5/i5-12400f-RTX-4060',
                            },
                            {
                                title: 'i5 - 12400F / RTX 3060',
                                href: '/pc-gaming/chip_pc_i5/i5-12400f-RTX-3060',
                            },
                            {
                                title: 'i5 - 12400F / RTX 3050',
                                href: '/pc-gaming/chip_pc_i5/i5-12400f-RTX-3050',
                            },
                            {
                                title: 'i5 - 12400F / GTX 1660S',
                                href: '/pc-gaming/chip_pc_i5/i5-12400f-GTX-1660S',
                            },
                            {
                                title: 'i5 - 12400F / GTX 1650',
                                href: '/pc-gaming/chip_pc_i5/i5-12400f-GTX-1650',
                            },
                        ],
                    },
                },
                {
                    title: 'GVN Gaming - Intel i5',
                    href: '/pc-gaming',
                    dropMenu: {
                        isOtherDDMenu: false,
                        value: [
                            {
                                title: 'i5 - 13600KF / RTX 4070',
                                href: '/pc-gaming/chip_pc_i5/i5-13600kf-RTX-4070',
                            },
                            {
                                title: 'i5 - 13600KF / RTX 4060',
                                href: '/pc-gaming/chip_pc_i5/i5-13600kf-RTX-4060',
                            },
                            {
                                title: 'i5 - 13600KF / RTX 3060',
                                href: '/pc-gaming/chip_pc_i5/i5-13600kf-RTX-3060',
                            },
                            {
                                title: 'i5 - 13400F / RTX 4060 Ti',
                                href: '/pc-gaming/chip_pc_i5/i5-13400F-RTX-4060Ti',
                            },
                            {
                                title: 'i5 - 12400F / RTX 4060',
                                href: '/pc-gaming/chip_pc_i5/i5-12400f-RTX-4060',
                            },
                            {
                                title: 'i5 - 12400F / RTX 3060',
                                href: '/pc-gaming/chip_pc_i5/i5-12400f-RTX-3060',
                            },
                            {
                                title: 'i5 - 12400F / RTX 3050',
                                href: '/pc-gaming/chip_pc_i5/i5-12400f-RTX-3050',
                            },
                            {
                                title: 'i5 - 12400F / RTX 1660S',
                                href: '/pc-gaming/chip_pc_i5/i5-12400f-RTX-1660S',
                            },
                            {
                                title: 'i5 - 12400F / RTX 1650',
                                href: '/pc-gaming/chip_pc_i5/i5-12400f-RTX-1650',
                            },
                        ],
                    },
                },
                {
                    title: 'GVN Gaming - Intel i3',
                    href: '/pc-gaming',
                    dropMenu: {
                        isOtherDDMenu: false,
                        value: [
                            {
                                title: 'i3 - 12100F / RTX 3050',
                                href: '/pc-gaming/chip_pc_i3/i3-12100f-RTX-3050',
                            },
                            {
                                title: 'i3 - 12100F / GTX 1660S',
                                href: '/pc-gaming/chip_pc_i3/i3-12100f-GTX-1660S',
                            },
                            {
                                title: 'i3 - 12100F / RTX 1650',
                                href: '/pc-gaming/chip_pc_i3/i3-12100f-RTX-1650',
                            },
                            {
                                title: 'i3 - 12100F / GT 1030',
                                href: '/pc-gaming/chip_pc_i3/i3-12100f-GT-1030',
                            },
                            {
                                title: 'i3 - 12100F / GT 730',
                                href: '/pc-gaming/chip_pc_i3/i3-12100f-GT-730',
                            },
                        ],
                    },
                },
                {
                    title: 'GVN Gaming - AMD R9',
                    href: '/pc-gaming',
                    dropMenu: {
                        isOtherDDMenu: false,
                        value: [
                            {
                                title: 'R9 - 7950X / RTX 4090',
                                href: '/pc-gaming/chip_pc_amd_r9/R9-7950X-RTX-4090',
                            },
                            {
                                title: 'R9 - 7900X / RTX 4080',
                                href: '/pc-gaming/chip_pc_amd_r9/R9-7900X-RTX-4080',
                            },
                            {
                                title: 'R9 - 5950X / RTX 4070 Ti',
                                href: '/pc-gaming/chip_pc_amd_r9/R9-5950X-RTX-4070Ti',
                            },
                            {
                                title: 'R9-7900 / RTX 3060',
                                href: '/pc-gaming/chip_pc_amd_r9/R9-7900-RTX-3060',
                            },
                        ],
                    },
                },
                {
                    title: 'GVN Gaming - AMD R7',
                    href: '/pc-gaming',
                    dropMenu: {
                        isOtherDDMenu: false,
                        value: [
                            {
                                title: 'R7 - 7700X / RTX 4080',
                                href: '/pc-gaming/chip_pc_amd_r7/R7-7700X-RTX-4080',
                            },
                            {
                                title: 'R7 - 7700X / RTX 4070 Ti',
                                href: '/pc-gaming/chip_pc_amd_r7/R7-7900X-RTX-4070Ti',
                            },
                            {
                                title: 'R7 - 7700 / RTX 3060',
                                href: '/pc-gaming/chip_pc_amd_r7/R7-5950X-RTX-3060',
                            },
                        ],
                    },
                },
                {
                    title: 'GVN Gaming - AMD R5',
                    href: '/pc-gaming',
                    dropMenu: {
                        isOtherDDMenu: false,
                        value: [
                            {
                                title: 'R5 - 7600 / RTX 4060',
                                href: '/pc-gaming/chip_pc_amd_R5/R5-7600-RTX-4060',
                            },

                            {
                                title: 'R5 - 7600 / RTX 3060',
                                href: '/pc-gaming/chip_pc_amd_R5/R5-7600-RTX-3060',
                            },
                            {
                                title: 'R5 - 7600 / RX 6600',
                                href: '/pc-gaming/chip_pc_amd_R5/R5-7900X-RX-6600',
                            },
                            {
                                title: 'R5 - 5600 / RTX 3050',
                                href: '/pc-gaming/chip_pc_amd_R5/R5-5600-RTX-3050',
                            },
                            {
                                title: 'R5 - 4500 / GTX 1660S',
                                href: '/pc-gaming/chip_pc_amd_R5/R5-4500-GTX-1660S',
                            },
                            {
                                title: 'R5 - 4500 / GTX 1650',
                                href: '/pc-gaming/chip_pc_amd_R5/R5-4500-GTX-1650',
                            },
                        ],
                    },
                },
            ],
        },
    },
    {
        title: 'PC Văn phòng',
        icon: {
            isFontIcon: true,
            value: 'bi bi-pc-display',
        },
        href: '/pc-vp',
        className: 'py-2 border-b px-5 text-[#444]',
        dropMenu: {
            isOtherDDMenu: true,
            value: [
                {
                    title: 'G-Studio đồ họa,thiết kế',
                    href: '/pc-vp',
                    dropMenu: {
                        isOtherDDMenu: false,
                        value: [
                            {
                                title: 'G-STUDIO 5 i1660S',
                                href: '/pc-vp/G-Studio-thietke/G-STUDIO-5-i1660S',
                            },
                            {
                                title: 'G-STUDIO 5 Plus a3050',
                                href: '/pc-vp/G-Studio-thietke/G-STUDIO-5-Plus-a3050',
                            },
                            {
                                title: 'G-STUDIO 5 i4060TI',
                                href: '/pc-vp/G-Studio-thietke/G-STUDIO-5-i4060TI',
                            },
                            {
                                title: 'G-STUDIO 7 i3060',
                                href: '/pc-vp/G-Studio-thietke/G-STUDIO-7-i3060',
                            },
                            {
                                title: 'G-STUDIO 7 a3060',
                                href: '/pc-vp/G-Studio-thietke/G-STUDIO-7-a3060',
                            },
                        ],
                    },
                },
                {
                    title: 'G-Studio Render,dựng phim',
                    href: '/pc-vp',
                    dropMenu: {
                        isOtherDDMenu: false,
                        value: [
                            {
                                title: 'G-STUDIO 7 Plus i4070Ti',
                                href: '/pc-vp/G-Studio-render/G-STUDIO-7-Plus-i4070Ti',
                            },
                            {
                                title: 'G-STUDIO 7 Plus a4070Ti',
                                href: '/pc-vp/G-Studio-render/G-STUDIO-7-Plus-a4070Ti',
                            },
                            {
                                title: 'G-STUDIO 9 Plus i4070Ti',
                                href: '/pc-vp/G-Studio-render/G-STUDIO-9-Plus-i4070Ti',
                            },
                            {
                                title: 'G-STUDIO 9 Plus a4070Ti',
                                href: '/pc-vp/G-Studio-render/G-STUDIO-9-Plus-a4070Ti',
                            },
                            {
                                title: 'G-STUDIO 9 Plus i4090',
                                href: '/pc-vp/G-Studio-render/G-STUDIO-9-Plus-i4090',
                            },
                            {
                                title: 'G-STUDIO 9 Plus a4090',
                                href: '/pc-vp/G-Studio-render/G-STUDIO-9-Plus-a4090',
                            },
                            {
                                title: 'G-STUDIO 9 Plus a7900XTX',
                                href: '/pc-vp/G-Studio-render/G-STUDIO-9-Plus-a7900XTX',
                            },
                        ],
                    },
                },
                {
                    title: 'GVN Doanh Nghiệp',
                    href: '/pc-vp',
                    dropMenu: {
                        isOtherDDMenu: false,
                        value: [
                            {
                                title: 'Homework R3 4300G',
                                href: '/pc-vp/GVN-doanhnghiep/Homework-R3-4300G',
                            },
                            {
                                title: 'Homework R5 5600G',
                                href: '/pc-vp/GVN-doanhnghiep/Homework-R5-5600G',
                            },
                            {
                                title: 'Homework Pentium G6450',
                                href: '/pc-vp/GVN-doanhnghiep/Homework-Pentium-G6450',
                            },
                            {
                                title: 'Homework i3 10105',
                                href: '/pc-vp/GVN-doanhnghiep/Homework-i3-10105',
                            },
                            {
                                title: 'Homework i5 12400',
                                href: '/pc-vp/GVN-doanhnghiep/Homework-i5-12400',
                            },
                            {
                                title: 'Homework i7 12700',
                                href: '/pc-vp/GVN-doanhnghiep/Homework-i7-12700',
                            },
                        ],
                    },
                },
            ],
        },
    },
    {
        title: 'Bộ nhớ lưu trữ',
        icon: {
            isFontIcon: true,
            value: 'bi bi-memory',
        },
        href: '/linhkien/hdd&ssd',
        className: 'py-2 border-b px-5 text-[#444]',
        dropMenu: {
            isOtherDDMenu: true,
            value: [
                {
                    title: 'RAM DDR4',
                    href: '/linhkien/hdd&ssd',
                    dropMenu: {
                        isOtherDDMenu: false,
                        value: [
                            {
                                title: 'RAM LED RGB',
                                href: '/linhkien/hdd&ssd/ddr4/ram-led-rgb',
                            },
                            {
                                title: 'RAM 8GB',
                                href: '/linhkien/hdd&ssd/ddr4/ram-8gb',
                            },
                            {
                                title: 'RAM 16 GB',
                                href: '/linhkien/hdd&ssd/ddr4/ram-16gb',
                            },
                            {
                                title: 'RAM Corsair',
                                href: '/linhkien/hdd&ssd/ddr4/ram-corsair',
                            },
                            {
                                title: 'RAM Kingston',
                                href: '/linhkien/hdd&ssd/ddr4/ram-kingston',
                            },
                        ],
                    },
                },
                {
                    title: 'RAM DDR5',
                    href: '/linhkien/hdd&ssd',
                    dropMenu: {
                        isOtherDDMenu: false,
                        value: [
                            {
                                title: 'RAM LED RGB',
                                href: '/linhkien/hdd&ssd/ddr5/ram-led-rgb',
                            },
                            {
                                title: 'RAM 16GB',
                                href: '/linhkien/hdd&ssd/ddr5/ram-16gb',
                            },
                            {
                                title: 'RAM 32 GB',
                                href: '/linhkien/hdd&ssd/ddr5/ram-32gb',
                            },
                            {
                                title: 'RAM 64 GB',
                                href: '/linhkien/hdd&ssd/ddr5/ram-64gb',
                            },
                            {
                                title: 'RAM Corsair',
                                href: '/linhkien/hdd&ssd/ddr5/ram-corsair',
                            },
                            {
                                title: 'RAM Kingston',
                                href: '/linhkien/hdd&ssd/ddr5/ram-kingston',
                            },
                        ],
                    },
                },
                {
                    title: 'Ổ cứng SSD',
                    href: '/linhkien/hdd&ssd',
                    dropMenu: {
                        isOtherDDMenu: false,
                        value: [
                            {
                                title: 'SSD NVMe Gen 3',
                                href: '/linhkien/hdd&ssd/SSD/SSD-NVMe-Gen3',
                            },
                            {
                                title: 'SSD NVMe Gen 3',
                                href: '/linhkien/hdd&ssd/SSD/SSD-NVMe-Gen4',
                            },
                            {
                                title: 'SSD Sata 3',
                                href: '/linhkien/hdd&ssd/SSD/SSD-Sata-3',
                            },
                            {
                                title: 'SSD Samsung',
                                href: '/linhkien/hdd&ssd/SSD/ssd-Samsung',
                            },
                            {
                                title: 'SSD Kingston',
                                href: '/linhkien/hdd&ssd/SSD/ssd-kingston',
                            },
                        ],
                    },
                },
                {
                    title: 'Ổ cứng HHD',
                    href: '/linhkien/hdd&ssd',
                    dropMenu: {
                        isOtherDDMenu: false,
                        value: [
                            {
                                title: 'HHD 1 TB',
                                href: '/linhkien/hdd&ssd/HHD/HHD-NVMe-Gen3',
                            },
                            {
                                title: 'HHD 2 TB',
                                href: '/linhkien/hdd&ssd/HHD/HHD-NVMe-Gen4',
                            },
                            {
                                title: 'HHD 4TB -6 TB',
                                href: '/linhkien/hdd&ssd/HHD/HHD-Sata-3',
                            },
                            {
                                title: 'HHD Laptop',
                                href: '/linhkien/hdd&ssd/HHD/HHD-Samsung',
                            },
                        ],
                    },
                },
            ],
        },
    },
    {
        title: 'Linh kiện máy tính',
        icon: {
            isFontIcon: true,
            value: 'bi bi-cpu text-xl',
        },
        href: '/linhkien',
        className: 'py-2 border-b px-5 text-[#444]',
        dropMenu: {
            isOtherDDMenu: true,
            value: [
                {
                    title: 'Tản nhiệt',
                    href: '/linhkien',
                    dropMenu: {
                        isOtherDDMenu: false,
                        value: [
                            {
                                title: 'Tản nhiệt khí ',
                                href: '/linhkien/Tannhiet/tan-nhietkhi',
                            },
                            {
                                title: 'Tản nhiệt AIO 240mm',
                                href: '/linhkien/Tannhiet/aio240',
                            },
                            {
                                title: 'Tản nhiệt AIO 280mm',
                                href: '/linhkien/Tannhiet/aio280',
                            },
                            {
                                title: 'Tản nhiệt AIO 360mm',
                                href: '/linhkien/Tannhiet/aio360',
                            },
                            {
                                title: 'Tản nhiệt AIO 420mm',
                                href: '/linhkien/Tannhiet/aio420',
                            },
                        ],
                    },
                },
                {
                    title: 'Case - Vỏ Máy Tính',
                    href: '/linhkien',
                    dropMenu: {
                        isOtherDDMenu: false,
                        value: [
                            {
                                title: 'Case Dưới 1 Triệu ',
                                href: '/linhkien/Case/duoi1trieu',
                            },
                            {
                                title: 'Case Từ 1 đến 2 triệu',
                                href: '/linhkien/Case/1den2trieu',
                            },
                            {
                                title: 'Case trên 2 triệu',
                                href: '/linhkien/Case/tren2trieu',
                            },
                            {
                                title: 'Case NZXT',
                                href: '/linhkien/Case/nzxt',
                            },
                            {
                                title: 'Case Corsair',
                                href: '/linhkien/Case/Corsair',
                            },
                        ],
                    },
                },
                {
                    title: 'PSU - Nguồn máy tính',
                    href: '/linhkien',
                    dropMenu: {
                        isOtherDDMenu: false,
                        value: [
                            {
                                title: 'Nguồn 550W - 650W',
                                href: '/linhkien/PSU/550-650w',
                            },
                            {
                                title: 'Nguồn 700 - 850W',
                                href: '/linhkien/PSU/700-850W',
                            },
                            {
                                title: 'Nguồn trên 1000 W',
                                href: '/linhkien/PSU/tren1000w',
                            },
                            {
                                title: 'Nguồn NZXT',
                                href: '/linhkien/PSU/nzxt',
                            },
                            {
                                title: 'Nguồn Corsair',
                                href: '/linhkien/PSU/Corsair',
                            },
                        ],
                    },
                },
            ],
        },
    },
    {
        title: 'Card màn hình',
        icon: {
            isFontIcon: true,
            value: 'bi bi-pci-card text-xl',
        },
        href: '/linhkien/card-mh',
        className: 'py-2 border-b px-5 text-[#444]',
        dropMenu: {
            isOtherDDMenu: true,
            value: [
                {
                    title: 'VGA - Card màn hình',
                    href: '/linhkien/card-mh',
                    dropMenu: {
                        isOtherDDMenu: false,
                        value: [
                            {
                                title: 'RTX Ada 4090',
                                href: '/linhkien/card-mh/RTX-Ada-4090',
                            },
                            {
                                title: 'RTX Ada 4080',
                                href: '/linhkien/card-mh/RTX-Ada-4080',
                            },
                            {
                                title: 'RTX Ada 4070 Ti',
                                href: '/linhkien/card-mh/RTX-Ada-4070Ti',
                            },
                            {
                                title: 'RTX Ada 4060 Ti (Mới)',
                                href: '/linhkien/card-mh/RTX-Ada-4060Ti',
                            },
                            {
                                title: 'RTX Ada 4060 (Mới)',
                                href: '/linhkien/card-mh/RTX-Ada-4060',
                            },
                        ],
                    },
                },
            ],
        },
    },
    {
        title: 'Apple',
        icon: {
            isFontIcon: true,
            value: 'bi bi-apple text-xl',
        },
        href: '/apple',
        className: 'py-2 border-b px-5 text-[#444]',
        dropMenu: {
            isOtherDDMenu: true,
            value: [
                {
                    title: 'MacBook',
                    href: '/apple',
                    dropMenu: {
                        isOtherDDMenu: false,
                        value: [
                            {
                                title: 'MacBook Air',
                                href: '/apple/MacBook/MacBook-Air',
                            },
                            {
                                title: 'MacBook Pro',
                                href: '/apple/MacBook/MacBook-Pro',
                            },
                        ],
                    },
                },
                {
                    title: 'MacBook Air',
                    href: '/apple',
                    dropMenu: {
                        isOtherDDMenu: false,
                        value: [
                            {
                                title: 'MacBook Air M1',
                                href: '/apple/MacBook-air/MacBook-AirM1',
                            },
                            {
                                title: 'MacBook Air M2',
                                href: '/apple/MacBook-air/MacBook-ProM2',
                            },
                        ],
                    },
                },
                {
                    title: 'MacBook Pro',
                    href: '/apple',
                    dropMenu: {
                        isOtherDDMenu: false,
                        value: [
                            {
                                title: 'MacBook Pro 13',
                                href: '/apple/MacBook-pro/MacBook-Air13',
                            },
                            {
                                title: 'MacBook Air 14',
                                href: '/apple/MacBook-pro/MacBook-Pro14',
                            },
                            {
                                title: 'MacBook Air 16',
                                href: '/apple/MacBook-pro/MacBook-Pro16',
                            },
                        ],
                    },
                },
                {
                    title: 'MacBook Pro 13',
                    href: '/apple',
                    dropMenu: {
                        isOtherDDMenu: false,
                    },
                },

                {
                    title: 'MacBook Pro 14',
                    href: '/apple',
                    dropMenu: {
                        isOtherDDMenu: false,
                        value: [
                            {
                                title: 'MBP 14 M2 Pro',
                                href: '/apple/MacBook-pro14/MBP-14-M2-Pro',
                            },
                            {
                                title: 'MBP 14 M2 Max',
                                href: '/apple/MacBook-pro14/MBP-14-M2-Max',
                            },
                        ],
                    },
                },
                {
                    title: 'MacBook Pro 16',
                    href: '/apple',
                    dropMenu: {
                        isOtherDDMenu: false,
                        value: [
                            {
                                title: 'MBP 16 M2 Pro',
                                href: '/apple/MacBook-pro16/MBP-16-M2-Pro',
                            },
                            {
                                title: 'MBP 16 M2 Max',
                                href: '/apple/MacBook-pro16/MBP-16-M2-Max',
                            },
                        ],
                    },
                },
                {
                    title: 'Phụ kiện Apple',
                    href: '/apple',
                    dropMenu: {
                        isOtherDDMenu: false,
                        value: [
                            {
                                title: 'Bàn phím,Chuột',
                                href: '/apple/phukien-apple/chuot-banphim',
                            },
                            {
                                title: 'Thiết bị âm thanh',
                                href: '/apple/phukien-apple/thietbi-amthanh',
                            },
                        ],
                    },
                },
            ],
        },
    },
    {
        title: 'Màn hình',
        icon: {
            isFontIcon: true,
            value: 'bi bi-tv text-xl',
        },
        href: '/man-hinh',
        className: 'py-2 border-b px-5 text-[#444]',
        dropMenu: {
            isOtherDDMenu: true,
            value: [
                {
                    title: 'Hãng sản xuất',
                    href: '/man-hinh',
                    dropMenu: {
                        isOtherDDMenu: false,
                        value: [
                            {
                                title: 'ASUS',
                                href: '/man-hinh/asus',
                            },
                            {
                                title: 'ACER',
                                href: '/man-hinh/acer',
                            },
                            {
                                title: 'MSI',
                                href: '/man-hinh/msi',
                            },
                            {
                                title: 'Dell',
                                href: '/man-hinh/Dell',
                            },
                            {
                                title: 'ViewSonic',
                                href: '/man-hinh/ViewSonic',
                            },
                            {
                                title: 'HKC',
                                href: '/man-hinh/HKC',
                            },
                        ],
                    },
                },
                {
                    title: 'Giá tiền',
                    href: '/man-hinh',
                    dropMenu: {
                        isOtherDDMenu: false,
                        value: [
                            {
                                title: 'Dưới 5 triệu',
                                href: '/man-hinh/collection/duoi-5',
                            },

                            {
                                title: 'Từ 15 tới 20 triệu',
                                href: '/man-hinh/collection/tu-15-toi-20',
                            },
                            {
                                title: 'Từ 20 tới 30 triệu',
                                href: '/man-hinh/collection/tu-20-toi-30',
                            },
                            {
                                title: 'Trên 30 triệu',
                                href: '/man-hinh/collection/tren-30',
                            },
                        ],
                    },
                },
                {
                    title: 'Độ Phân giải',
                    href: '/man-hinh',
                    dropMenu: {
                        isOtherDDMenu: false,
                        value: [
                            {
                                title: 'FULL HD 1080p',
                                href: '/man-hinh/resolution/full-hd-1080p',
                            },

                            {
                                title: '2k 1440p',
                                href: '/man-hinh/resolution/2k-1440p',
                            },
                            {
                                title: 'Màn hình máy tính 4K UHD',
                                href: '/man-hinh/resolution/4k-uhd',
                            },
                        ],
                    },
                },
                {
                    title: 'Độ Phân giải',
                    href: '/man-hinh',
                    dropMenu: {
                        isOtherDDMenu: false,
                        value: [
                            {
                                title: '60Hz',
                                href: '/man-hinh/Hz/60hz',
                            },

                            {
                                title: '75Hz',
                                href: '/man-hinh/Hz/75hz',
                            },
                            {
                                title: '100Hz',
                                href: '/man-hinh/Hz/100hz',
                            },
                            {
                                title: '144Hz',
                                href: '/man-hinh/Hz/144Hz',
                            },
                            {
                                title: '240Hz',
                                href: '/man-hinh/Hz/240hz',
                            },
                            {
                                title: '360Hz',
                                href: '/man-hinh/Hz/360hz',
                            },
                        ],
                    },
                },
                {
                    title: 'Độ Phân giải',
                    href: '/man-hinh',
                    dropMenu: {
                        isOtherDDMenu: false,
                        value: [
                            {
                                title: 'Màn hình 22 inch',
                                href: '/man-hinh/size/22in',
                            },

                            {
                                title: 'Màn hình 24 inch',
                                href: '/man-hinh/size/24in',
                            },
                            {
                                title: 'Màn hình 27 inch',
                                href: '/man-hinh/size/27in',
                            },
                            {
                                title: 'Màn hình 32 inch',
                                href: '/man-hinh/size/32in',
                            },
                            {
                                title: 'Màn hình trên 32 inch',
                                href: '/man-hinh/size/tren-32in',
                            },
                            {
                                title: 'Hỗ trợ giá treo(VESA)',
                                href: '/man-hinh/size/giatreo-vesa',
                            },
                        ],
                    },
                },
            ],
        },
    },
    {
        title: 'Chuột + Lót chuột',
        icon: {
            isFontIcon: true,
            value: 'bi bi-mouse text-xl',
        },
        href: '/mouse',
        className: 'py-2 border-b px-5 text-[#444]',
        dropMenu: {
            isOtherDDMenu: true,
            value: [
                {
                    title: 'Chuột theo hãng',
                    href: '/mouse',
                    dropMenu: {
                        isOtherDDMenu: false,
                        value: [
                            {
                                title: 'Logitech',
                                href: '/mouse/Logitech',
                            },
                            {
                                title: 'Razer',
                                href: '/mouse/Razer',
                            },
                            {
                                title: 'Microsoft (Mới)',
                                href: '/mouse/Microsoft',
                            },
                            {
                                title: 'HyperX',
                                href: '/mouse/HyperX',
                            },
                            {
                                title: 'Zowie',
                                href: '/mouse/Zowie',
                            },
                            {
                                title: 'Asus',
                                href: '/mouse/Asus',
                            },
                        ],
                    },
                },
                {
                    title: 'Chuột theo giá tiền',
                    href: '/laptop',
                    dropMenu: {
                        isOtherDDMenu: false,
                        value: [
                            {
                                title: 'Dưới 500 nghìn',
                                href: '/mouse/collection/duoi-500',
                            },
                            {
                                title: 'Từ 500 - 1 triệu',
                                href: '/mouse/collection/tu-500-toi-1',
                            },
                            {
                                title: 'Từ 1 - 2 triệu',
                                href: '/mouse/collection/tu-1-den-2',
                            },
                            {
                                title: 'Từ 2 - 3 triệu',
                                href: '/mouse/collection/tu-2-den-3',
                            },
                            {
                                title: 'Trên 3 triệu',
                                href: '/mouse/collection/tren-3',
                            },
                        ],
                    },
                },
                {
                    title: 'Các loại lót chuột',
                    href: '/laptop',
                    dropMenu: {
                        isOtherDDMenu: false,
                        value: [
                            {
                                title: 'Mềm',
                                href: '/mouse/type-pad-mouse/mem',
                            },
                            {
                                title: 'Cứng',
                                href: '/mouse/type-pad-mouse/cung',
                            },
                            {
                                title: 'Dày',
                                href: '/mouse/type-pad-mouse/day',
                            },
                            {
                                title: 'Mỏng',
                                href: '/mouse/type-pad-mouse/mong',
                            },
                            {
                                title: 'Viền có led',
                                href: '/mouse/type-pad-mouse/vien-coled',
                            },
                        ],
                    },
                },
                {
                    title: 'Lót chuột theo size',
                    href: '/laptop',
                    dropMenu: {
                        isOtherDDMenu: false,
                        value: [
                            {
                                title: 'Nhỏ',
                                href: '/mouse/size-pad-mouse/nho',
                            },
                            {
                                title: 'Vừa',
                                href: '/mouse/size-pad-mouse/vua',
                            },
                            {
                                title: 'Lớn',
                                href: '/mouse/size-pad-mouse/lon',
                            },
                        ],
                    },
                },
            ],
        },
    },
    {
        title: 'Bàn phím',
        icon: {
            isFontIcon: true,
            value: 'bi bi-keyboard text-xl',
        },
        href: '/keyboard',
        className: 'py-2 border-b px-5 text-[#444]',
        dropMenu: {
            isOtherDDMenu: true,
            value: [
                {
                    title: 'Thương hiệu',
                    href: '/keyboard',
                    dropMenu: {
                        isOtherDDMenu: false,
                        value: [
                            {
                                title: 'ASUS',
                                href: '/keyboard/asus',
                            },
                            {
                                title: 'ACER',
                                href: '/keyboard/acer',
                            },
                            {
                                title: 'MSI',
                                href: '/keyboard/msi',
                            },
                            {
                                title: 'Akko',
                                href: '/keyboard/Akko',
                            },
                            {
                                title: 'Razer',
                                href: '/keyboard/Razer',
                            },
                            {
                                title: 'Mikit (Mới)',
                                href: '/keyboard/Mikit',
                            },
                            {
                                title: 'Ducky',
                                href: '/keyboard/Ducky',
                            },
                        ],
                    },
                },
                {
                    title: 'Giá bán',
                    href: '/laptop',
                    dropMenu: {
                        isOtherDDMenu: false,
                        value: [
                            {
                                title: 'Dưới 500 nghìn',
                                href: '/keyboard/collection/duoi-500',
                            },
                            {
                                title: 'Từ 500 - 1 triệu',
                                href: '/keyboard/collection/tu-500-toi-1',
                            },
                            {
                                title: 'Từ 1 - 2 triệu',
                                href: '/keyboard/collection/tu-1-den-2',
                            },
                            {
                                title: 'Từ 2 - 3 triệu',
                                href: '/keyboard/collection/tu-2-den-3',
                            },
                            {
                                title: 'Trên 4 triệu',
                                href: '/keyboard/collection/tren-4',
                            },
                        ],
                    },
                },
                {
                    title: 'Kết nối',
                    href: '/laptop',
                    dropMenu: {
                        isOtherDDMenu: false,
                        value: [
                            {
                                title: 'Bluetooth',
                                href: '/keyboard/conect/Bluetooth',
                            },
                            {
                                title: 'Wireless',
                                href: '/keyboard/conect/Wireless',
                            },
                        ],
                    },
                },
                {
                    title: 'Phụ kiện bàn phím cơ',
                    href: '/laptop',
                    dropMenu: {
                        isOtherDDMenu: false,
                        value: [
                            {
                                title: 'Keycaps',
                                href: '/keyboard/itemssp/Bluetooth',
                            },
                            {
                                title: 'Kê tay',
                                href: '/keyboard/itemsp/ketay',
                            },
                        ],
                    },
                },
            ],
        },
    },
    {
        title: 'Tai nghe - Loa',
        icon: {
            isFontIcon: true,
            value: 'bi bi-headphones text-xl',
        },
        href: '/sound-device',
        className: 'py-2 border-b px-5 text-[#444]',
        dropMenu: {
            isOtherDDMenu: true,
            value: [
                {
                    title: 'Hãng tai nghe',
                    href: '/sound-device',
                    dropMenu: {
                        isOtherDDMenu: false,
                        value: [
                            {
                                title: 'ASUS',
                                href: '/sound-device/headphone/asus',
                            },
                            {
                                title: 'ACER',
                                href: '/sound-device/headphone/acer',
                            },
                            {
                                title: 'MSI',
                                href: '/sound-device/headphone/msi',
                            },
                            {
                                title: 'Logitech',
                                href: '/sound-device/headphone/Logitech',
                            },
                            {
                                title: 'HyperX',
                                href: '/sound-device/headphone/HyperX',
                            },
                            {
                                title: 'Soundpeats',
                                href: '/sound-device/headphone/Soundpeats',
                            },
                            {
                                title: 'AOC',
                                href: '/sound-device/headphone/AOC',
                            },
                        ],
                    },
                },
                {
                    title: 'Tai nghe theo giá',
                    href: '/sound-device',
                    dropMenu: {
                        isOtherDDMenu: false,
                        value: [
                            {
                                title: 'Dưới 500 nghìn',
                                href: '/sound-device/collection-headphone/duoi-500',
                            },
                            {
                                title: 'Từ 500 - 1 triệu',
                                href: '/sound-device/collection-headphone/tu-500-toi-1',
                            },
                            {
                                title: 'Từ 1 - 2 triệu',
                                href: '/sound-device/collection-headphone/tu-1-den-2',
                            },
                            {
                                title: 'Từ 2 - 3 triệu',
                                href: '/sound-device/collection-headphone/tu-2-den-3',
                            },
                            {
                                title: 'Trên 4 triệu',
                                href: '/sound-device/collection-headphone/tren-4',
                            },
                        ],
                    },
                },
                {
                    title: 'Loa theo thương hiệu',
                    href: '/sound-device',
                    dropMenu: {
                        isOtherDDMenu: false,
                        value: [
                            {
                                title: 'ASUS',
                                href: '/sound-device/speaker/asus',
                            },
                            {
                                title: 'ACER',
                                href: '/sound-device/speaker/acer',
                            },
                            {
                                title: 'MSI',
                                href: '/sound-device/speaker/msi',
                            },
                            {
                                title: 'Logitech',
                                href: '/sound-device/speaker/Logitech',
                            },
                            {
                                title: 'HyperX',
                                href: '/sound-device/speaker/HyperX',
                            },
                            {
                                title: 'Soundpeats',
                                href: '/sound-device/speaker/Soundpeats',
                            },
                            {
                                title: 'AOC',
                                href: '/sound-device/speaker/AOC',
                            },
                        ],
                    },
                },
                {
                    title: 'Chuột theo giá tiền',
                    href: '/sound-device',
                    dropMenu: {
                        isOtherDDMenu: false,
                        value: [
                            {
                                title: 'Loa dưới 1 triệu',
                                href: '/sound-device/speaker/collection/duoi-1',
                            },
                            {
                                title: 'Loa trên 1 triệu',
                                href: '/sound-device/speaker/collection/tren-1',
                            },
                            {
                                title: 'loa 2 triệu',
                                href: '/sound-device/speaker/collection/tren-2',
                            },
                        ],
                    },
                },
            ],
        },
    },
    {
        title: 'Bàn - Ghế',
        icon: {
            isFontIcon: false,
            value: `<svg
            class="w-5 h-7"
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 252.6988 208.1012"
            enable-background="new 0 0 252.6988 208.1012"
            xml:space="preserve"
        >
            <g>
                <path
                    d="M201.1827,108.1703c3.626,0.7328,7.3503,1.1917,11.0161,1.1917c1.5391,0,3.0957-0.0068,4.6563-0.0137
c13.6543-0.0654,27.7725-0.1235,32.3672,4.4502c0.6619,0.6595,1.0767,1.4061,1.2935,2.2415
c-0.4495,2.5465-1.7388,4.9383-3.3091,7.8137c-3.5898,6.5747-8.5078,15.5791-8.5078,34.8057
c0,16.6144-1.6434,25.4975-5.1494,30.1025v-61.6166h5.417v-8.8333h7.333v-5H117.8729v5h7.3335v8.8333h5.4165V207.44h6.5v-12.17
h9.4572v-55.4442h81.333v52.7911c-0.9359,0.2788-1.9337,0.4703-2.9999,0.5867v-50.3778h-75.3333v64.6666h75.3333v-7.3022
c1.0618-0.1169,2.0638-0.2938,2.9999-0.5449v7.7948h5.6364v-10.8251c5.2793-4.8951,7.1494-15.1229,7.1494-33.7529
c0-19.1445,4.7783-28.0898,8.2676-34.6221c2.085-3.9033,3.7324-6.9863,3.7324-10.8779c0-0.4944-0.0464-0.9711-0.1362-1.4302
c0.0801-0.5784,0.1362-1.1658,0.1362-1.7787c0-1.8784-0.6768-3.5044-2.0107-4.833c-5.1299-5.1084-19.0752-5.0469-33.8418-4.9839
c-1.5576,0.0068-3.1113,0.0137-4.6475,0.0137c-4.3789,0-8.8907-0.6821-13.2173-1.7116l-17.2529-43.3597l8.2837-45.8003
l-6.3962-1.1569l-16.196,89.5471l6.3962,1.1569l0.8513-4.7076c3.052,1.6314,9.3293,4.7581,16.9155,7.2723h-27.5337v4h37.6982
L201.1827,108.1703z M187.9966,165.1969c1.2767,0.095,2.4833,0.43,3.5817,0.9595l-3.5817,6.2036V165.1969z M186.4966,172.3599
l-3.5817-6.2036c1.0984-0.5295,2.3049-0.8645,3.5817-0.9595V172.3599z M184.4476,175.909l-6.2036,3.5816
c-0.5295-1.0983-0.8645-2.3049-0.9595-3.5816H184.4476z M177.2845,174.409c0.095-1.2767,0.4299-2.4833,0.9595-3.5816l6.2036,3.5816
H177.2845z M185.1975,177.2081l-3.5856,6.2104c-1.0299-0.7039-1.9209-1.595-2.6249-2.6249L185.1975,177.2081z M186.4966,177.9581
v7.163c-1.2767-0.095-2.4833-0.43-3.5817-0.9595L186.4966,177.9581z M187.9966,177.9581l3.5817,6.2036
c-1.0984,0.5295-2.3049,0.8645-3.5817,0.9595V177.9581z M192.8812,183.4186l-3.5856-6.2105l6.2106,3.5856
C194.8022,181.8236,193.9111,182.7147,192.8812,183.4186z M196.2491,179.4906l-6.2035-3.5816h7.163
C197.1136,177.1857,196.7787,178.3923,196.2491,179.4906z M190.0456,174.409l6.2035-3.5816
c0.5295,1.0983,0.8645,2.3049,0.9595,3.5816H190.0456z M195.5062,169.5243l-6.2106,3.5856l3.5856-6.2105
C193.9111,167.6033,194.8022,168.4945,195.5062,169.5243z M181.6119,166.8994l3.5856,6.2104l-6.2104-3.5856
C179.691,168.4945,180.582,167.6033,181.6119,166.8994z M224.9132,198.1875v-2.9937c1.0618-0.1144,2.0638-0.2875,2.9999-0.5333
v2.8922C226.9754,197.8536,225.977,198.0608,224.9132,198.1875z M233.5494,193.4546v-1.76
c0.8428-0.7648,1.5977-1.6656,2.2727-2.7089C235.1756,190.7815,234.4185,192.2548,233.5494,193.4546z M212.1988,106.3497
c1.5391,0,3.0957-0.0068,4.6563-0.0137c13.707-0.0605,27.8799-0.1211,32.4219,4.4014c0.3917,0.39,0.6802,0.8156,0.9088,1.2651
c-5.4858-4.7635-19.0134-4.7175-33.3395-4.6542c-1.5576,0.0068-3.1113,0.0137-4.6475,0.0137c-3.9395,0-7.988-0.5621-11.9114-1.4416
l-0.3984-1.0013C203.9181,105.7917,208.0959,106.3497,212.1988,106.3497z M194.1576,101.3339
c-8.3704-2.5245-15.4695-5.9656-18.657-7.6211l4.8826-26.996L194.1576,101.3339z M175.1261,95.7831
c3.703,1.9101,11.2292,5.4852,19.9841,7.9445l0.3783,0.951c-9.3796-2.7318-17.3816-6.7873-20.4452-8.4382L175.1261,95.7831z"
                />
                <path
                    d="M140.936,109.59h16.3634v-4h-13.3572C143.2805,107.1592,142.2393,108.5294,140.936,109.59z"
                />
                <path
                    d="M50.8924,141.0946c1.0375,0.3346,2.136,0.5267,3.2722,0.5776c1.9258,0.226,3.8558,0.2779,5.7095,0.2542
c1.6772-0.0211,3.1824-0.0723,4.5205-0.2256H91.941l4.3984,54.8979c0.5244,6.5425,5.9951,11.5029,12.4463,11.5024
c0.335,0,0.6729-0.0132,1.0117-0.0405c6.8818-0.5513,12.0137-6.5767,11.4619-13.458l-5.3193-66.3999
c-0.5205-6.4956-5.9434-11.502-12.46-11.502H71.7035c0.0386-6.4716,0.7739-13.0898,1.7744-19.4437L55.0077,76.8074
c-1.8438-2.0415-2.7832-4.6792-2.6426-7.4272c0.1396-2.7476,1.3408-5.2764,3.3818-7.1201
c1.8975-1.7129,4.3477-2.6563,6.9023-2.6563c2.9102,0,5.6963,1.2378,7.6455,3.396l8.0541,8.9172
c1.1301-9.0093-2.6761-18.4288-10.174-20.2972c-8.5371-2.129-20.9121,2.5078-25.9473,17.1503
c-6.8047,20.1739-8.2676,33.3047-5.6816,55.5196C38.6815,135.2787,44.4998,139.5352,50.8924,141.0946z"
                />
                <path
                    d="M1.6217,92.6329c-1.2925,0.4854-1.9468,1.9268-1.4614,3.2192l20.8574,55.5464c0.0571,0.1521,0.1312,0.2919,0.213,0.4255
c1.9545,4.2905,12.3107,7.7271,25.6613,8.6071v1.77h4.2498v21.0529l-29.25,9v3.684c-1.874,0.9244-3.1665,2.8486-3.1665,5.0795
c0,3.1296,2.5371,5.6666,5.6667,5.6666s5.6666-2.537,5.6666-5.6666c0-2.2266-1.2872-4.1478-3.1554-5.0742l24.2385-7.4579v7.4526
c-1.874,0.9244-3.1665,2.8486-3.1665,5.0795c0,3.1296,2.5371,5.6666,5.6667,5.6666s5.6666-2.537,5.6666-5.6666
c0-2.2309-1.2924-4.1551-3.1664-5.0795v-7.4521l24.2378,7.4577c-1.8677,0.9266-3.1548,2.8475-3.1548,5.0739
c0,3.1296,2.5371,5.6666,5.6667,5.6666s5.6666-2.537,5.6666-5.6666c0-2.2309-1.2924-4.1551-3.1664-5.0795v-3.6841l-29.25-8.9997
v-21.0532h4.2498v-1.77c14.8481-0.9787,26-5.1194,26-10.0803c0-4.8072-46.7695-5.5518-61.266-2.2346l-11.2106-29.8555
c4.78,7.4578,9.7061,11.6867,13.0234,10.441c5.3257-1.9998-17.6995-63.3193-23.0251-61.3196
c-4.3408,1.6299-4.5863,12.128-1.0864,25.1235C2.4322,92.4529,2.0211,92.4827,1.6217,92.6329z"
                />
                <path
                    d="M57.2889,63.9666c-3.2783,2.9614-3.5361,8.0205-0.5742,11.2993l28.6289,31.6973c1.5166,1.6792,3.6738,2.6377,5.9365,2.6377
h43.167c4.418,0,8-3.5815,8-8s-3.582-8-8-8H94.8348L68.5877,64.5413C65.6278,61.2635,60.5682,61.0057,57.2889,63.9666z"
                />
                <path
                    d="M75.7616,35.3033c0,4.5339-2.2244,8.4835-5.4897,10.4999c4.0836,4.1651,9.7708,6.7521,16.0642,6.7521
c12.4277,0,22.5-10.0733,22.5-22.5c0-12.4268-10.0723-22.5-22.5-22.5c-10.1116,0-18.665,6.671-21.5006,15.8522
c0.1674-0.0092,0.3322-0.0291,0.5013-0.0291C71.0848,23.3785,75.7616,28.7281,75.7616,35.3033z M103.2237,35.322
c0,0-7.979,18.9366-22.3441,3.985C80.8796,39.307,94.8568,41.2409,103.2237,35.322z"
                />
                <path
                    d="M63.3109,23.6085c0.359-2.4274,1.0956-4.8062,2.2389-7.0552c0.0262-0.0516,0.0453-0.1057,0.0719-0.1572
c2.8184-5.4424,7.5869-9.4619,13.4277-11.3174c9.2061-2.9258,18.9141,0.2892,24.6982,7.3378
c4.5574,4.4993,7.3879,10.7437,7.3879,17.6387c0,0.6739-0.0347,1.3395-0.0876,2c2.6863-1.5704,4.5388-4.8383,4.5388-8.627
c0-4.3839-2.4766-8.0764-5.8608-9.2386C103.7132,2.9962,90.379-2.7165,77.8385,1.2662c-6.8594,2.1792-12.46,6.8994-15.7686,13.291
c-1.8357,3.545-2.8411,7.3691-3.0037,11.2424C60.2992,24.7324,61.739,23.9643,63.3109,23.6085z"
                />
                <path
                    d="M65.3368,44.9283c4.4873,0,8.125-4.3093,8.125-9.625s-3.6377-9.625-8.125-9.625s-8.125,4.3093-8.125,9.625
S60.8495,44.9283,65.3368,44.9283z M64.9618,30.1783c2.2782,0,4.125,2.0987,4.125,4.6875c0,2.5889-1.8468,4.6875-4.125,4.6875
c-2.2781,0-4.125-2.0986-4.125-4.6875C60.8368,32.277,62.6837,30.1783,64.9618,30.1783z"
                />
            </g>
                    </svg>`,
        },
        href: '/ban&ghe',
        className: 'py-2 border-b px-5 text-[#444]',
        dropMenu: {
            isOtherDDMenu: true,
            value: [
                {
                    title: 'Thương hiệu ghế Gaming',
                    href: '/ban&ghe',
                    dropMenu: {
                        isOtherDDMenu: false,
                        value: [
                            {
                                title: 'ASUS',
                                href: '/ban&ghe/chair/asus',
                            },
                            {
                                title: 'ACER',
                                href: '/ban&ghe/chair/acer',
                            },
                            {
                                title: 'MSI',
                                href: '/ban&ghe/chair/msi',
                            },
                            {
                                title: 'LENOVO',
                                href: '/ban&ghe/chair/lenovo',
                            },
                            {
                                title: 'Razer',
                                href: '/ban&ghe/chair/Razer',
                            },
                            {
                                title: 'Cougar',
                                href: '/ban&ghe/chair/Cougar',
                            },
                            {
                                title: 'Warrior',
                                href: '/ban&ghe/chair/Warrior',
                            },
                        ],
                    },
                },
                {
                    title: 'Bàn Gaming',
                    href: '/ban&ghe',
                    dropMenu: {
                        isOtherDDMenu: false,
                        value: [
                            {
                                title: 'Bàn Gaming DXRacer',
                                href: '/ban&ghe/table/DXRacer',
                            },
                            {
                                title: 'Bàn Gaming E-Dra ',
                                href: '/ban&ghe/table/E-Dra ',
                            },
                            {
                                title: 'Bàn Gaming Warrior',
                                href: '/ban&ghe/table/Warrior',
                            },
                        ],
                    },
                },
                {
                    title: 'Giá tiền',
                    href: '/ban&ghe',
                    dropMenu: {
                        isOtherDDMenu: false,
                        value: [
                            {
                                title: 'Dưới 5 triệu',
                                href: '/ban&ghe/collection/duoi-5',
                            },
                            {
                                title: 'Từ 5 tới 10 triệu',
                                href: '/ban&ghe/collection/tu-5-toi-10',
                            },
                            {
                                title: 'MSI',
                                href: '/ban&ghe/collection/tren-10',
                            },
                        ],
                    },
                },
                {
                    title: 'Phụ kiện trang trí',
                    href: '/ban&ghe',
                    dropMenu: {
                        isOtherDDMenu: false,
                        value: [],
                    },
                },
            ],
        },
    },
    {
        title: 'Phụ kiện',
        icon: {
            isFontIcon: true,
            value: 'bi bi-controller text-xl',
        },
        href: '/phukien',
        className: 'py-2 border-b px-5 text-[#444]',
        dropMenu: {
            isOtherDDMenu: true,
            value: [
                {
                    title: 'Webcam',
                    href: '/phukien',
                    dropMenu: {
                        isOtherDDMenu: false,
                        value: [
                            {
                                title: '720p',
                                href: '/phukien/webcam/720p',
                            },
                            {
                                title: '1080p',
                                href: '/phukien/webcam/1080p',
                            },
                            {
                                title: '4K',
                                href: '/phukien/webcam/4K',
                            },
                        ],
                    },
                },
                {
                    title: 'Đèn Led trang trí',
                    href: '/phukien',
                    dropMenu: {
                        isOtherDDMenu: false,
                        value: [
                            {
                                title: 'Nanoleaf',
                                href: '/phukien/led/Nanoleaf',
                            },
                        ],
                    },
                },
                {
                    title: 'Balo & túi sách',
                    href: '/phukien',
                    dropMenu: {
                        isOtherDDMenu: false,
                        value: [
                            {
                                title: 'Asus',
                                href: '/phukien/Bag/Asus',
                            },
                            {
                                title: 'Túi chống sốc',
                                href: '/phukien/Bag/tui-chongsoc',
                            },
                        ],
                    },
                },
                {
                    title: 'Camera',
                    href: '/phukien',
                    dropMenu: {
                        isOtherDDMenu: false,
                        value: [
                            {
                                title: 'Camera trong nhà',
                                href: '/phukien/Camera/cam-trongnha',
                            },
                            {
                                title: 'Camera ngoài trời',
                                href: '/phukien/Camera/cam-ngoaitroi',
                            },
                        ],
                    },
                },
                {
                    title: 'Camera',
                    href: '/phukien',
                    dropMenu: {
                        isOtherDDMenu: false,
                        value: [
                            {
                                title: 'Camera trong nhà',
                                href: '/phukien/Camera/cam-trongnha',
                            },
                            {
                                title: 'Camera ngoài trời',
                                href: '/phukien/Camera/cam-ngoaitroi',
                            },
                        ],
                    },
                },
                {
                    title: 'Microphone',
                    href: '/phukien',
                    dropMenu: {
                        isOtherDDMenu: false,
                        value: [
                            {
                                title: 'Razer',
                                href: '/phukien/Microphone/Razer',
                            },
                            {
                                title: 'HyperX',
                                href: '/phukien/Microphone/HyperX',
                            },
                            {
                                title: 'Thronmax',
                                href: '/phukien/Microphone/Thornmax',
                            },
                        ],
                    },
                },
            ],
        },
    },
];

class DropDownMenu {
    // title: string
    // class: string
    // id: string
    // icon: {isFontIcon: boolean, value: string}
    // dropMenu : {isOtherDDMenu: boolean, value: []}
    // parentEl: Node | Element
    #isAlreadySet = false;
    #idMenu = Math.random();
    constructor(
        params = {
            containerClassName: undefined,
            title: '',
            icon: { isFontIcon: false, value: '' },
            href: undefined,
            className: undefined,
            id: undefined,
            dropMenu: { isOtherDDMenu: false, value: [] },
            fixed: false,
            withCardMenu: false,
            cardContentClassName: '',
            cardContainerClassName: '',
            titleContainerClassName: '',
            hideCaretIcon: false,
        },
    ) {
        this.hideCaretIcon = params.hideCaretIcon;
        this.withCardMenu = params.withCardMenu;
        this.cardContentClassName = params.cardContentClassName;
        this.titleContainerClassName = params.titleContainerClassName;
        this.cardContainerClassName = params.cardContainerClassName;
        this.fixed = params.fixed;
        this.title = params.title;
        this.icon = params.icon;
        this.href = params.href;
        this.className = params.className;
        this.id = params.id;
        this.dropMenu = params.dropMenu;
        this.containerClassName = params.containerClassName;
    }

    #createDDMenu() {
        if (this.withCardMenu) {
            const dropMenu = document.createElement('div');
            dropMenu.className = 'ddmenu__drop-menu hidden absolute h-full z-10' + ` ${this.cardContainerClassName}`;
            dropMenu.insertAdjacentHTML(
                'beforeend',
                `<div class="ddmenu__menu-content bg-white w-full h-full ml-1 shadow-md rounded text-[#444] overflow-x-auto ${this.cardContentClassName}"></div>`,
            );
            document
                .querySelector(`.${this.#getMenuIdCSS('cont')}`)
                .insertAdjacentHTML('beforeend', dropMenu.outerHTML);
            this.dropMenu.value.map((menu) => {
                const newDDMenu = new DropDownMenu(menu);
                newDDMenu.setContainerClassName = `.${this.#getMenuIdCSS(
                    'cont',
                )} .ddmenu__drop-menu .ddmenu__menu-content`;
                newDDMenu.appendMenu();
            });
        } else if (this.dropMenu?.isOtherDDMenu) {
            const dropMenu = document.createElement('ul');
            dropMenu.className = 'ddmenu__drop-menu my-2 ml-4 hidden flex-col justify-between';
            document
                .querySelector(`.${this.#getMenuIdCSS('cont')}`)
                .insertAdjacentHTML('beforeend', dropMenu.outerHTML);
            this.dropMenu.value.map((menu) => {
                const newDDMenu = new DropDownMenu(menu);
                newDDMenu.setContainerClassName = `.${this.#getMenuIdCSS('cont')} .ddmenu__drop-menu`;
                newDDMenu.appendMenu();
            });
        } else {
            const iconEl = this.icon
                ? this.icon.isFontIcon
                    ? `<i class="${this.icon.value} text-xl ddmenu__title__icon"></i>`
                    : this.icon.value
                : '';
            return document.querySelector(`.${this.#getMenuIdCSS('cont')}`).insertAdjacentHTML(
                'beforeend',
                `<ul class="ddmenu__drop-menu my-2 ml-4 hidden flex-col justify-between">
            
            ${this.dropMenu.value
                .map((menu, index) => {
                    const iconEl = menu.icon
                        ? menu.icon.isFontIcon
                            ? `<i class="${menu.icon.value} text-xl"></i>`
                            : menu.icon.value
                        : '';
                    return `<a href="${menu.href || '#'}" class="inline-flex gap-4 items-center">
                            ${iconEl}
                            <p class="leading-none text-sm py-2">${menu.title}</p>
                        </a>`;
                })
                .join('')}
                        </ul>`,
            );
        }
    }

    #createTitleComponent() {
        const iconEl = this.icon
            ? this.icon.isFontIcon
                ? `<i class="${this.icon.value} text-xl ddmenu__title__icon"></i>`
                : this.icon.value
            : '';
        return `<a href="${this.href || '#'}" class="ddmenu__title inline-flex gap-4 items-center">
            ${iconEl}
            <p class="ddmenu__title__text leading-none text-sm">${this.title}</p>
        </a>`;
    }

    #createMenu() {
        const ddmenuContainerClassname =
            'ddmenu__container flex flex-col' +
            (` ${this.className}` || '') +
            `${this.fixed ? ' ddmenu--open' : ''}` +
            `${this.withCardMenu ? ' ddmenu--card-menu' : ''}`;
        return `<div data-ddmenuId="${this.#idMenu}" ${
            this.id ? `id="${this.id}"` : ''
        } class="${ddmenuContainerClassname}">
            <div class="ddmenu__titleContainer flex items-center gap-4 justify-between ${this.titleContainerClassName}">
                ${this.#createTitleComponent()}
                ${
                    !this.hideCaretIcon
                        ? `<i class="ddmenu__titleContainer__right-caret bi bi-caret-right-fill text-xs cursor-pointer leading-none px-2 py-2 ${
                              this.fixed ? '!rotate-0' : ''
                          }"></i>`
                        : ''
                }
            </div>
        </div>`;
    }

    #getMenuIdCSS(type) {
        switch (type) {
            case 'cont':
                return `ddmenu__container[data-ddmenuId="${this.#idMenu}"]`;
            default:
                return `data-ddmenuId="${this.#idMenu}"`;
        }
    }

    #startEventOpenMenu() {
        const el = document.querySelector(`.${this.#getMenuIdCSS('cont')} .ddmenu__titleContainer`);
        el.addEventListener('click', (e) => {
            document
                .querySelector(`${this.containerClassName} .${this.#getMenuIdCSS('cont')}`)
                .classList.toggle('ddmenu--open');
        });
    }

    set setContainerClassName(className) {
        this.containerClassName = className;
    }

    get getMenu() {
        return this.#createMenu();
    }

    appendMenu() {
        if (this.#isAlreadySet) return false;
        this.#isAlreadySet = true;
        try {
            document.querySelector(`${this.containerClassName}`).insertAdjacentHTML('beforeend', this.#createMenu());
            this.appendDropMenu();
            !this.fixed && this.#startEventOpenMenu();
            return true;
        } catch (error) {
            //console.error(error);
            this.#isAlreadySet = false;
            return false;
        }
    }

    appendDropMenu() {
        this.#createDDMenu();
    }
}

class Cart {
    #cartElement;
    #cartState;
    constructor({ id = '', cartLocalStorage = '' }) {
        this.#setCartElement = `#${id}`;
        this.#setCartState = JSON.parse(cartLocalStorage || '{}');
    }

    set #setCartState(newState = {}) {
        this.#cartState = { ...this.#cartState, ...newState };
        return this.#cartState;
    }

    set #setCartElement(query = '') {
        this.#cartElement = document.querySelector(query) || undefined;
        return this.#cartElement;
    }

    get getCartState() {
        return this.#cartState;
    }
}

const renderCategoryMenu = (contEl, menuArr = [], type = 'default') => {
    if (!contEl || contEl === '') throw new Error('Container element invalid!');
    switch (type) {
        case 'default':
            return menuArr?.map((menu) => {
                const menuEle = new DropDownMenu({ ...menu, containerClassName: contEl });
                return { element: menuEle, status: menuEle.appendMenu() };
            });
        case 'with-card-menu':
            return menuArr?.map((menu) => {
                const menuFilter = {
                    ...menu,
                    containerClassName: contEl,
                    withCardMenu: true,
                    className: 'px-4 hover:bg-[#d72c2c] text-[#444]',
                    cardContainerClassName: 'w-[950px] h-full z-10 left-[15.5rem] top-0',
                    cardContentClassName: 'py-5 px-6 flex flex-wrap gap-x-16 gap-y-3',
                    fixed: true,
                    dropMenu: {
                        ...menu.dropMenu,
                        value: menu.dropMenu.value?.map((menu) => {
                            return { ...menu, fixed: true, hideCaretIcon: true };
                        }),
                    },
                };
                const menuEle = new DropDownMenu(menuFilter);
                return { element: menuEle, status: menuEle.appendMenu() };
            });
        default:
            throw new Error('Type render invalid!');
    }
};

const handleOpenMainMenu = () => {
    const mainMenu = document.querySelector('.top-menu__container') || undefined;
    if (!mainMenu) return -1;
    if (mainMenu.classList.contains('top-menu--open')) {
        document.body.style.overflow = 'auto';
        mainMenu.classList.remove('top-menu--open');
    } else {
        document.body.style.overflow = 'hidden';
        mainMenu.classList.add('top-menu--open');
    }
};
const initSlider = () => {
    const path = window.location.pathname.split('.html')[0];
    switch (path) {
        case '/index':
            new Swiper('.main-slider', {
                autoplay: {
                    delay: 2500,
                    disableOnInteraction: false,
                },
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                slidesPerView: 1,
            });
            return;
        case '/':
            new Swiper('.main-slider', {
                autoplay: {
                    delay: 2500,
                    disableOnInteraction: false,
                },
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                slidesPerView: 1,
            });
            return;
        default:
            throw new Error('Invalid location!');
    }
};
const App = () => {
    initSlider(); //Start
    renderCategoryMenu('.category-container', CategoryMenuApi);
    renderCategoryMenu('.category-container--main', CategoryMenuApi, 'with-card-menu');
    // const fakeProduct = {
    //     prodName: 'Test',
    //     prodHref: '#test',
    //     prodImg: '/assets/img/img_pc/Gearvn_Gaming_2.png',
    //     isSales: true,
    //     oPrice: 100000000,
    //     sPrice: 85000000,
    //     countSold: undefined,
    //     prodDetail: {
    //         show: true,
    //         details: {
    //             chip: 'i9 19KF',
    //             card: 'RTX 4090',
    //             memory: undefined,
    //             storage: '1TB (SSD)',
    //             screen: undefined,
    //             panelType: undefined,
    //             screenResolution: undefined,
    //             hz: undefined,
    //             mainboard: undefined,
    //             mouseBattery: undefined,
    //             mouseDPI: undefined,
    //             mouseLED: undefined,
    //             deviceConnect: 'test',
    //             kbSize: 'test',
    //             kbSwitch: 'test',
    //             gift: ['asdasd', 'adsasd'],
    //             prodDeal: 'qua-tang-hot',
    //             prodStatus: 'best-seller',
    //         },
    //     },
    //     voteRate: {
    //         show: true,
    //         total: 10,
    //         star: 5,
    //     },
    // };
    const SliderApi = {
        MostSaleSliderApi: {
            container: '.most-sale__slider-container',
            title: 'Sản phẩm bán chạy',
            sliderName: 'MostSaleSlider',
            type: 'bestSeller',
            coutDown: {
                show: true,
                h: 0,
                m: 0,
                s: 0,
            },
            prodArr: MostSale,
        },
        LenovoScreenSaleApi: {
            container: '.lenovo-sale__slider-container',
            title: 'MÀN HÌNH GAMING LENOVO GIẢM TỚI 38%',
            sliderName: 'LenovoScreenSale',
            saleImg: '/assets/img/img_sales/screen_sales.webp',
            type: 'lenovoSale38',
            coutDown: {
                show: true,
                h: 23,
                m: 59,
                s: 59,
            },
            prodArr: LenovoScreenSale,
        },
        PCMostSaleApi: {
            container: '.pc-mostSale__slider-container',
            title: 'PC bán chạy',
            sliderName: 'PCMostSale',
            type: 'default',
            prodArr: PCMostSale,
            suggestNav: [
                { title: 'PC Gaming', href: '#/pc/gaming' },
                { title: 'PC Văn phòng', href: '#/pc/vp' },
                { title: 'PC Đồ họa', href: '#/pc/dohoa' },
                { title: 'PC Doanh nghiệp', href: '#/pc/workstation' },
            ],
        },
        LaptopGamingMostSaleApi: {
            container: '.lap-gaming-mostSale__slider-container',
            title: 'Laptop Gaming bán chạy',
            sliderName: 'LaptopGamingMostSale',
            type: 'default',
            prodArr: LaptopGamingMostSale,
            suggestNav: [
                { title: 'ACER', href: '#/pc/acer' },
                { title: 'ASUS', href: '#/pc/asus' },
                { title: 'MSI', href: '#/pc/msi' },
                { title: 'LENOVO', href: '#/pc/lenovo' },
                { title: 'GIGABYTE', href: '#/pc/gigabyte' },
                { title: 'DELL', href: '#/pc/dell' },
            ],
        },
        LaptopVPMostSaleApi: {
            container: '.lap-vp-mostSale__slider-container',
            title: 'Laptop Văn phòng bán chạy',
            sliderName: 'LaptopVPMostSale',
            type: 'default',
            prodArr: LaptopVPMostSale,
            suggestNav: [
                { title: 'ASUS', href: '#/pc/asus' },
                { title: 'MSI', href: '#/pc/msi' },
                { title: 'LENOVO', href: '#/pc/lenovo' },
                { title: 'DELL', href: '#/pc/dell' },
                { title: 'LG', href: '#/pc/lg' },
                { title: 'ACER', href: '#/pc/acer' },
            ],
        },
        MouseMostSaleApi: {
            container: '.mouse-mostSale__slider-container',
            title: 'Chuột bán chạy',
            sliderName: 'MouseMostSale',
            type: 'default',
            prodArr: MouseMostSale,
            suggestNav: [
                { title: 'Logitech', href: '#/mouse/logitech' },
                { title: 'Razer', href: '#/mouse/razer' },
                { title: 'Corsair', href: '#/mouse/corsair' },
                { title: 'DareU', href: '#/mouse/dareU' },
                { title: 'Glorious', href: '#/mouse/glorious' },
                { title: 'Asus', href: '#/mouse/asus' },
            ],
        },
        KeyboardMostSaleApi: {
            container: '.keyboard-mostSale__slider-container',
            title: 'Bàn phím bán chạy',
            sliderName: 'KeyboardMostSale',
            type: 'default',
            prodArr: KeyboardMostSale,
            suggestNav: [
                { title: 'Akko', href: '#/keyboard/akko' },
                { title: 'Asus', href: '#/keyboard/asus' },
                { title: 'Razer', href: '#/keyboard/razer' },
                { title: 'Logitech', href: '#/keyboard/logitech' },
                { title: 'Leopold', href: '#/keyboard/leopold' },
                { title: 'DareU', href: '#/keyboard/dareU' },
            ],
        },
        ScreenMostSaleApi: {
            container: '.screen-mostSale__slider-container',
            title: 'Màn chính hãng',
            sliderName: 'ScreenMostSale',
            type: 'default',
            prodArr: ScreenMostSale,
            suggestNav: [
                { title: 'LG', href: '#/screen/lg' },
                { title: 'Asus', href: '#/screen/asus' },
                { title: 'Viewsonic', href: '#/screen/viewsonic' },
                { title: 'Dell', href: '#/screen/dell' },
                { title: 'Gigabyte', href: '#/screen/gigabyte' },
                { title: 'AOC', href: '#/screen/aoc' },
                { title: 'Acer', href: '#/screen/acer' },
                { title: 'HKC', href: '#/screen/hkc' },
            ],
        },
    };
    const sliders = Object.keys(SliderApi).map((key) => {
        const slider = new SliderCard(SliderApi[key]);
        return { slider, error: !slider.startSlider(SliderApi[key].container) };
    });
};
App();
