const ProductDetailComponentV1 = {
    chip: '<i class="bi bi-cpu-fill mr-1 leading-none"></i>',
    card: '<i class="bi bi-gpu-card mr-1 leading-none"></i>',
    mainboard: `<img class="mr-1 leading-none h-3" src="/assets/img/motherboard.png" alt="Mainboard icon image" />`,
    memory: '<i class="bi bi-memory mr-1 leading-none"></i>',
    hz: `<svg class="h-[14px] mr-1 leading-none rotate-180" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-radar" viewBox="0 0 16 16"><path d="M6.634 1.135A7 7 0 0 1 15 8a.5.5 0 0 1-1 0 6 6 0 1 0-6.5 5.98v-1.005A5 5 0 1 1 13 8a.5.5 0 0 1-1 0 4 4 0 1 0-4.5 3.969v-1.011A2.999 2.999 0 1 1 11 8a.5.5 0 0 1-1 0 2 2 0 1 0-2.5 1.936v-1.07a1 1 0 1 1 1 0V15.5a.5.5 0 0 1-1 0v-.518a7 7 0 0 1-.866-13.847Z"/></svg>`,
    storage: '<i class="bi bi-hdd mr-1 leading-none"></i>',
    screen: '<i class="bi bi-tv mr-1 leading-none"></i>',
    screenResolution: '<i class="bi bi-aspect-ratio mr-1 leading-none"></i>',
    panelType: '<i class="bi bi-stack mr-1 leading-none"></i>',
    mouseBattery: '<i class="bi bi-battery-charging mr-1 leading-none"></i>',
    mouseLED: '<i class="bi bi-lightbulb mr-1 leading-none"></i>',
    mouseDPI: '<i class="bi bi-mouse-fill mr-1 leading-none"></i>',
    deviceConnect: '<i class="bi bi-usb-symbol mr-1 leading-none"></i>',
    kbSize: '<i class="bi bi-keyboard mr-1 leading-none"></i>',
    kbSwitch: '<i class="bi bi-usb-mini-fill mr-1 leading-none"></i>',
};
const DealsDetail = {
    'tra-gop-0%': {
        text: 'Trả góp 0%',
        className: 'bg-blue-500 text-white',
    },
    'pre-order': {
        text: 'Pre-Order',
        className: 'bg-gray-200 text-black',
    },
    'qua-tang-hot': {
        text: 'Quà tặng HOT',
        className: 'bg-red-500 text-white',
        icon: {
            isFontIcon: true,
            value: 'bi bi-fire',
            className: 'text-yellow-300',
        },
    },
    'sale-sap-san': {
        text: 'Sale sập sàn',
        className: 'bg-red-500 text-white',
        icon: {
            isFontIcon: true,
            value: 'bi bi-fire',
            className: 'text-yellow-300',
        },
    },
};
const StatusDetail = {
    'new-product': {
        text: 'Sản phẩm mới',
        className: 'bg-blue-500 text-white',
    },
    'best-seller': {
        text: 'Bán chạy',
        className: 'bg-red-500 text-white',
        icon: {
            isFontIcon: true,
            value: 'bi bi-fire',
            className: 'text-yellow-300',
        },
    },
};
class ProductCard {
    constructor(
        params = {
            prodName: 'Product name',
            prodHref: '#',
            prodImg: '#',
            oPrice: undefined,
            sPrice: undefined,
            countSold: undefined,
            isSales: false,
            prodDetail: {
                show: false,
                details: {
                    chip: undefined,
                    card: undefined,
                    memory: undefined,
                    storage: undefined,
                    screen: undefined,
                    panelType: undefined,
                    screenResolution: undefined,
                    hz: undefined,
                    mainboard: undefined,
                    mouseBattery: undefined,
                    mouseDPI: undefined,
                    mouseLED: undefined,
                    deviceConnect: undefined,
                    kbSize: undefined,
                    kbSwitch: undefined,
                    gift: [],
                    prodDeal: undefined,
                    prodStatus: undefined,
                },
            },
            voteRate: {
                show: false,
                total: 0,
                star: 0,
            },
        },
    ) {
        this.prodName = params.prodName || 'Product name';
        this.prodHref = params.prodHref || '#';
        this.prodImg = params.prodImg || '#';
        this.isSales = params.isSales || false;
        this.oPrice = params.oPrice || undefined; // Original Price
        this.sPrice = params.sPrice || undefined; // Sale Price
        this.countSold = params.countSold || undefined;
        this.prodDetail = params.prodDetail || {
            show: false,
            details: {
                chip: undefined,
                card: undefined,
                memory: undefined,
                storage: undefined,
                screen: undefined,
                panelType: undefined,
                screenResolution: undefined,
                hz: undefined,
                mainboard: undefined,
                mouseBattery: undefined,
                mouseDPI: undefined,
                mouseLED: undefined,
                deviceConnect: undefined,
                kbSize: undefined,
                kbSwitch: undefined,
                gift: [],
                prodDeal: undefined,
                prodStatus: undefined,
            },
        };
        this.voteRate = params.voteRate || {
            show: false,
            total: 0,
            star: 0,
        };
    }
    #createTitleElement() {
        const el = document.createElement('a');
        el.className = 'text-base font-medium leading-none line-clamp-2';
        el.href = this.prodHref;
        el.textContent = this.prodName;
        return el;
    }
    #createPriceElement() {
        const contEl = document.createElement('div');
        if (this.isSales) {
            const oPriceEl = document.createElement('p');
            oPriceEl.className = 'text-sm line-through text-[#676767] leading-none mt-1';
            oPriceEl.textContent = Nums2MoneyString(this.oPrice);
            const sPriceEl = document.createElement('div');
            sPriceEl.className = 'flex gap-2 items-center mt-2';
            sPriceEl.innerHTML = `<p class="text-base font-medium text-red-500 leading-none">${Nums2MoneyString(
                this.sPrice,
            )}</p>
            <span
                class="text-xs leading-none border-red-700 border-[1px] bg-red-200 rounded text-red-500 p-[2px]"
                >-${Math.round(ReducePercentFrom2Nums(this.oPrice, this.sPrice) * 100)}%</span
            >`;
            contEl.appendChild(oPriceEl);
            contEl.appendChild(sPriceEl);
        } else {
            const sPriceEl = document.createElement('div');
            sPriceEl.className = 'flex gap-2 items-center mt-2';
            sPriceEl.innerHTML = `<p class="text-base font-medium text-red-500 leading-none">${Nums2MoneyString(
                this.sPrice,
            )}</p>`;
            contEl.appendChild(sPriceEl);
        }
        return contEl;
    }
    #createRatingElement() {
        const RatingContainerEl = document.createElement('div');
        if (this.voteRate.show) {
            RatingContainerEl.className = 'py-2 inline-flex text-xs gap-1 text-yellow-400';
            RatingContainerEl.innerHTML = `<p class="font-medium">${this.voteRate.total}</p>
            <i class="bi bi-star-fill"></i>
            <p class="text-[#888]">(${this.voteRate.total} đánh giá)</p>`;
        }
        return RatingContainerEl;
    }
    #createDetailElement() {
        const createDetail = (type, value) => {
            if (!ProductDetailComponentV1[type]) return false; // check
            const el = document.createElement('span');
            switch (type) {
                case 'chip':
                case 'card':
                case 'memory':
                case 'storage':
                case 'screen':
                case 'screenResolution':
                case 'panelType':
                case 'mouseBattery':
                case 'mouseLED':
                case 'mouseDPI':
                case 'deviceConnect':
                case 'kbSize':
                case 'kbSwitch':
                    el.className = 'text-xs text-[#444]';
                    break;
                default:
                    el.className = 'text-xs text-[#444] inline-flex items-center';
                    break;
            }
            el.innerHTML = ProductDetailComponentV1[type] + value;
            return el;
        };
        const detailContainerEl = document.createElement('div');
        if (this.prodDetail.show) {
            detailContainerEl.className = 'px-2 py-1 rounded-md bg-gray-200 mt-2 flex gap-x-2 gap-y-1 flex-wrap';
            Object.keys(this.prodDetail.details).map((key) => {
                const value = this.prodDetail.details[key];
                if (value === undefined) return false;
                const elDetail = createDetail(key, value);
                !!elDetail && detailContainerEl.appendChild(elDetail);
                return true;
            });
        }
        return detailContainerEl;
    }
    #createTotalSoldProgressElement() {
        const contEl = document.createElement('div');
        if (this.countSold === undefined) return contEl;
        contEl.className = 'mt-1 h-6 w-full bg-red-200 rounded-3xl flex';
        const statusText = this.countSold === 0 ? 'Vừa mở bán' : `Đã bán: ${this.countSold}`;
        contEl.innerHTML += `<i class="bi bi-fire text-base rounded-l-3xl text-yellow-300 bg-red-500 px-2"></i>
        <span class="min-w-[50%] text-xs text-white bg-red-500 px-2 h-full inline-flex items-center rounded-r-3xl leading-none">${statusText}</span>`;
        return contEl;
    }
    #createMainCard() {
        const el = document.createElement('div');
        el.className = 'p-2 font-WorkSans w-full';
        el.appendChild(this.#createTitleElement());
        el.appendChild(this.#createDetailElement());
        el.appendChild(this.#createPriceElement());
        el.appendChild(this.#createTotalSoldProgressElement());
        el.appendChild(this.#createRatingElement());
        return el;
    }

    #createGift() {
        if (!this.prodDetail.details.gift?.length) return false;
        const contEl = document.createElement('span');
        contEl.innerHTML += '<i class="bi text-red-500 bi-gift-fill text-xl px-2 leading-none"></i>';
        const giftDisplayEl = document.createElement('div');
        giftDisplayEl.className = 'gift-display hidden absolute w-full left-0 top-0 border-red-200 rounded-md border';
        giftDisplayEl.innerHTML += `<div class="rounded-t-sm bg-red-200">
            <h1 class="text-red-500 font-medium text-center">
                Quà tặng khuyến mãi
            </h1>
            <ol class="bg-white p-2 rounded-b-md w-full flex flex-col gap-1">
                ${this.prodDetail.details.gift
                    .map((gift, index) => {
                        return `<li class="text-xs font-medium flex items-center gap-2">
                        <span
                            class="rounded-full leading-none inline-block px-2 py-1 bg-red-500 text-white"
                            >${index}
                        </span>
                        <p>
                            ${gift}
                        </p>
                    </li>`;
                    })
                    .join('')}
            </ol>
        </div>`;
        contEl.appendChild(giftDisplayEl);
        return contEl;
    }
    #createTagV2 = ({ text = '', icon = { isFontIcon: false, value: undefined, className: '' }, className = '' }) => {
        const iconEl = document.createElement('span');
        iconEl.className = 'py-1 px-2 text-xs font-medium rounded-3xl leading-none items-center' + ` ${className}`;
        if (icon.value === undefined) {
            iconEl.textContent = text;
            return iconEl;
        }
        iconEl.className += ' inline-flex';
        if (!icon.isFontIcon) {
            iconEl.innerHTML += `${icon.value}${text}`;
            return iconEl;
        }
        iconEl.innerHTML += `<i class="text-base mr-2 leading-none ${icon.value} ${icon.className}"></i>${text}`;
        return iconEl;
    };
    #createDealsElement() {
        if (DealsDetail[this.prodDetail.details.prodDeal] === undefined) return false;
        const contEl = document.createElement('div');
        contEl.className = 'inline-flex gap-1';
        const tagEl = this.#createTagV2(DealsDetail[this.prodDetail.details.prodDeal]);
        contEl.appendChild(tagEl);
        return contEl;
    }
    #createTagsElement() {
        if (StatusDetail[this.prodDetail.details.prodStatus] === undefined) return false;
        const contEl = document.createElement('div');
        contEl.className = 'h-full py-3 w-full flex justify-between items-center flex-wrap gap-1';
        const tagEl = this.#createTagV2(StatusDetail[this.prodDetail.details.prodStatus]);
        contEl.appendChild(tagEl);
        return contEl;
    }
    #createImageElement() {
        const imgEl = document.createElement('a');
        imgEl.href = this.prodHref;
        imgEl.innerHTML += `<img
            class="max-h-[200px] w-full object-contain object-center"
            src="${this.prodImg}"
            alt="${this.prodName}"
        />`;
        return imgEl;
    }
    #createContainerImage() {
        const contEl = document.createElement('div');
        contEl.className = 'p-2';

        const deal = this.#createDealsElement();
        const gift = this.#createGift();
        const contTopEl = document.createElement('div');
        contTopEl.className = 'h-full pb-3 w-full flex justify-between relative items-center';
        deal && contTopEl.appendChild(deal);
        gift && contTopEl.appendChild(gift);

        const contBottomEl = this.#createTagsElement();

        (deal || gift) && contEl.appendChild(contTopEl);
        contEl.appendChild(this.#createImageElement());
        contBottomEl && contEl.appendChild(contBottomEl);
        return contEl;
    }
    #createProductCard(className = '') {
        const contEl = document.createElement('div');
        contEl.className = 'swiper-slide rounded-md block h-full' + ` ${className}`;
        contEl.appendChild(this.#createContainerImage());
        contEl.appendChild(this.#createMainCard());
        return contEl;
    }
    appendTo(query = '', className = 'bg-white border border-[#ccc]') {
        const el = document.querySelector(query);
        if (!el) return false;
        el.appendChild(this.#createProductCard(className));
        return true;
    }
}
const TypeSliderCard = {
    default: {
        bgColor: '#fff',
        className: 'rounded-lg mb-4',
        titleClassName: 'font-black text-2xl uppercase p-2 text-[#222] leading-none',
        moreButtonClassName: 'text-blue-600',
    },
    bestSeller: {
        bgColor: '#a855f7',
        className: 'rounded-lg mb-4',
        titleClassName: 'font-black text-4xl italic uppercase p-2 text-yellow-300 leading-none',
        moreButtonClassName: 'text-white',
    },
    lenovoSale38: {
        bgColor: '#a78bfa',
        className: 'rounded-lg mb-4',
        titleClassName: 'font-black text-4xl italic uppercase p-2 text-yellow-300 leading-none',
        moreButtonClassName: 'text-white',
    },
};
class SliderCard {
    constructor({
        title,
        sliderName,
        className,
        bgColor,
        titleClassName,
        moreButtonClassName,
        moreHref = '#',
        type = 'default',
        sliderStyle = {},
        coutDown = {
            show: false,
            h: 0,
            m: 0,
            s: 0,
        },
        saleImg = '',
        prodArr = undefined,
        suggestNav = undefined,
    }) {
        this.moreHref = moreHref;
        this.prodArr = prodArr;
        this.suggestNav = suggestNav;
        this.saleImg = saleImg;
        (this.sliderName = sliderName), (this.coutDown = coutDown);
        this.title = title;
        this.style = TypeSliderCard[type] ? { ...TypeSliderCard[type] } : { ...TypeSliderCard['default'] };
        if (className) this.style.className = className;
        if (titleClassName) this.style.titleClassName = titleClassName;
        if (bgColor) this.style.bgColor = bgColor;
        if (moreButtonClassName) this.style.moreButtonClassName = moreButtonClassName;
        if (sliderStyle && typeof sliderStyle == 'object' && Object.keys(sliderStyle).length !== 0)
            this.style = { ...sliderStyle };
    }
    #createItemHeader(nodeEl) {
        const contEl = document.createElement('div');
        contEl.className = 'flex items-center flex-wrap';
        if (typeof nodeEl === typeof contEl) {
            contEl.appendChild(nodeEl);
            return contEl;
        }
        if (typeof nodeEl === 'string') {
            contEl.insertAdjacentHTML('beforeend', nodeEl);
            return contEl;
        }
        return contEl;
    }
    #createTitle() {
        const contEl = document.createElement('h1');
        contEl.className = this.style.titleClassName;
        contEl.textContent = this.title;
        return contEl;
    }
    #createLinkButton({ isFontIcon = false, value = undefined, title = '', className = '', href = '#' }) {
        if (!title) return false;
        const a = document.createElement('a');
        a.href = href;
        a.className = 'hover:underline font-medium leading-none p-2' + ` ${className}`;
        if (isFontIcon && value) {
            a.className += ' inline-flex items-center';
            a.innerHTML = `<p class="w-max">${title}</p>
            <i class="${value}"></i>`;
        } else if (!isFontIcon && value) {
            a.className += ' inline-flex items-center';
            a.innerHTML = `<p class="w-max">${title}</p>
            ${value}`;
        } else {
            a.innerHTML = `<p class="w-max">${title}</p>`;
        }
        return a;
    }
    #createCountDown() {
        if (!this.coutDown.show) return false;
        const contEl = document.createElement('div');
        contEl.className = 'inline-flex items-center gap-2 font-Righteous p-2';
        contEl.innerHTML = `<p class="bg-black text-white font-medium rounded-md px-2">${this.coutDown.h}</p>
        <p class="bg-black text-white font-medium rounded-md px-2">${this.coutDown.m}</p>
        <p class="bg-black text-white font-medium rounded-md px-2">${this.coutDown.s}</p>`;
        return contEl;
    }
    #createSaleImg() {
        if (!this.saleImg) return false;
        const contEl = document.createElement('span');
        contEl.className = 'p-2 mx-auto';
        contEl.innerHTML += `<img
            class="h-full rounded-md object-contain"
            src="${this.saleImg}"
            alt="Slide sale image"
        />`;
        return contEl;
    }
    #createMainSlider() {
        if (!this.sliderName) return false;
        const contEl = document.createElement('div');
        contEl.className = `${this.sliderName} swiper p-2 w-full relative`;
        contEl.innerHTML += `<div class="swiper-wrapper h-max"></div>
            <div class="swiper-button-prev text-[#d72c2c] font-black rounded-full after:!text-xl after:content-['prev']"></div>
            <div class="swiper-button-next text-[#d72c2c] font-black rounded-full after:!text-xl after:content-['next']"></div>
            <div class="swiper-pagination static"></div>
        `;
        return contEl;
    }
    // Main
    #createContainerSlider() {
        const contEl = document.createElement('div');
        contEl.className = 'flex p-2 lg:flex-row flex-col';
        const saleImg = this.#createSaleImg();
        const mainSlider = this.#createMainSlider();
        saleImg && contEl.appendChild(saleImg);
        mainSlider && contEl.appendChild(mainSlider);
        return contEl;
    }
    #createHeaderElement() {
        const contEl = document.createElement('div');
        contEl.className = 'flex py-2 px-5 items-end justify-between flex-wrap';
        // Append element to header left container
        const leftContItem = this.#createItemHeader();
        leftContItem.appendChild(this.#createTitle());
        const cdEl = this.#createCountDown();
        cdEl && leftContItem.appendChild(cdEl);

        // Append element to header right container
        const rightContItem = this.#createItemHeader();
        this.suggestNav?.forEach((nav) => {
            const a = this.#createLinkButton(nav);
            a && rightContItem.appendChild(a);
        });
        const more = this.#createLinkButton({
            isFontIcon: true,
            value: 'bi bi-caret-right-fill',
            title: 'Xem tất cả',
            className: this.style.moreButtonClassName || '',
            href: this.moreHref,
        });
        more && rightContItem.appendChild(more);
        // Append two cont 2 main cont
        contEl.appendChild(leftContItem);
        contEl.appendChild(rightContItem);
        return contEl;
    }
    #createSliderCard() {
        const contEl = document.createElement('div');
        contEl.id = this.sliderName;
        contEl.className = this.style.className + ` bg-[${this.style.bgColor}]`;
        contEl.appendChild(this.#createHeaderElement());
        contEl.appendChild(this.#createContainerSlider());
        return contEl;
    }
    #appendTo(query) {
        const where = document.querySelector(query) || false;
        if (!where) return false;
        where.appendChild(this.#createSliderCard());
        return true;
    }
    #loadProduct2Slider() {
        if (this.prodArr && typeof this.prodArr == 'object') {
            this.prodCards = Object.keys(this.prodArr).map((key) => {
                const data = this.prodArr[key];
                const prodApi = {
                    prodName: data.name,
                    prodHref: data.href,
                    prodImg: data.img,
                    isSales: data.origin_price !== 0,
                    oPrice: data.origin_price,
                    sPrice: data.reduce_price,
                    countSold: data.selling,
                    prodDetail: {
                        show:
                            data.chip ||
                            data.card ||
                            data.ram ||
                            data.capacity ||
                            data.screen ||
                            data.panelType ||
                            data.screenResolution ||
                            data.hz ||
                            data.mainboard ||
                            data.battery ||
                            data.dpi ||
                            data.led ||
                            data.connect ||
                            data.size ||
                            data.switch ||
                            data.gift ||
                            data.deal ||
                            data.status,
                        details: {
                            chip: data.chip,
                            card: data.card,
                            memory: data.ram,
                            storage: data.capacity,
                            screen: data.screen,
                            panelType: data.panelType,
                            screenResolution: data.screenResolution,
                            hz: data.hz,
                            mainboard: data.mainboard,
                            mouseBattery: data.battery,
                            mouseDPI: data.dpi,
                            mouseLED: data.led,
                            deviceConnect: data.connect,
                            kbSize: data.size,
                            kbSwitch: data.switch,
                            gift: data.gift,
                            prodDeal: data.deal,
                            prodStatus: data.status,
                        },
                    },
                    voteRate: {
                        show: data.star !== undefined && data.rate !== undefined,
                        total: data.rate,
                        star: data.star,
                    },
                };
                const prodCard = new ProductCard(prodApi);
                if (prodCard.appendTo(`#${this.sliderName} .${this.sliderName} .swiper-wrapper`)) {
                    return prodCard; // if append success
                }
                return false; // if false
            });
            return this.prodCards;
        }
        return false;
    }
    #removeSliderFromDOM() {
        return document.querySelector(`#${this.sliderName}`).remove() ? true : false;
    }
    startSlider(where = 'body') {
        if (this.#appendTo(where)) {
            if (this.#loadProduct2Slider()) {
                this.swiper = new Swiper(`#${this.sliderName} .${this.sliderName}`, {
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
                    spaceBetween: 10,
                    breakpoints: {
                        480: {
                            slidesPerView: 2,
                        },
                        640: {
                            slidesPerView: 3,
                        },
                        768: {
                            slidesPerView: 4,
                        },
                        1024: {
                            slidesPerView: 5,
                        },
                    },
                });
                return true;
            }
            // remove slider
            this.#removeSliderFromDOM();
            return false;
        }
        return false;
    }
}
