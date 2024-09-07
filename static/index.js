// pathe cange code
function changePathname(newPath,message) {
    alert(message);
    let currentUrl = window.location.href;
    let lastSlashIndex = currentUrl.lastIndexOf('/');
    let textBeforeLastSlash = currentUrl.substring(0, lastSlashIndex);
    const newUrl = `${textBeforeLastSlash}${newPath}`;
    console.log(newUrl)
    window.location.href = newUrl;
}

// card creation code
function createCard(pagelink, imgSrc, collectionName, price, div) {
    const cardDiv = document.createElement('div');
    cardDiv.className = 'col py-3';
    cardDiv.innerHTML = `
        <div class="card shadow-sm ${div}">
            <a href="${pagelink}"><img src="${imgSrc}" alt=""></a>
            <div class="card-body p-3">
                <a href="${pagelink}"><p class="card-text-m"><b>${collectionName}</b></p></a>
                <div class="d-flex justify-content-between align-items-center">
                    <p class="text-dark font-weight-bold card-price m-0">${price}₹</p>
                    <button class="btn btn-warning">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart3" viewBox="0 0 16 16">
                            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l.84 4.479 9.144-.459L13.89 4zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"></path>
                        </svg> add to cart
                    </button>
                </div>
            </div>
        </div>
    `;
    return cardDiv;
}

// JavaScript to create multiple cards using a loop
const cardContainermen = document.getElementById('card-container-men');
const cardContainerwomen = document.getElementById('card-container-women');
const cardContainerkids = document.getElementById('card-container-kids');

// Array of card data (image, collection name, price)
const cardDataMen = [
    {index: '1', pagelink: '#', imgSrc: 'https://th.bing.com/th/id/OIP.r0HsffT5P_IiNnKVpli9ZQHaNK?pid=ImgDet&w=226&h=400&c=7', collectionName: 'Grey Polo t-Shirt with Dark Blue Slim-Fit Jeans.', price: 2500 },
    {index: '2', pagelink: '#', imgSrc: 'https://th.bing.com/th/id/OIP.Nsao4Ww9QVNePExi5TkpkwAAAA?w=226&h=400&c=7&r=0&o=5&pid=1.7', collectionName: 'vertical striped shirt Khaki Slim-Fit gray Trousers', price: 2000 },
    {index: '3', pagelink: '#', imgSrc: 'https://th.bing.com/th/id/OIP.u5vC2rSRN8ubljoAvRpJVwHaMs?pid=ImgDet&w=226&h=400&c=7', collectionName: 'Green Suit (Blazer and Trousers) White Dress Shirt', price: 5000 },
    {index: '4', pagelink: '#', imgSrc: 'https://th.bing.com/th/id/OIP.mgfle0DOagpWAvld49yWkwAAAA?w=226&h=400&c=7&r=0&o=5&pid=1.7', collectionName: 'Men Formal Shirt with light blue suit And Trousers', price: 5500 },
    {index: '5', pagelink: '#', imgSrc: 'https://th.bing.com/th/id/OIP.p5D0FWnOAlzFzlZUTTlIkwHaMr?w=226&h=400&c=7&r=0&o=5&pid=1.7', collectionName: 'white shirt with light gray trousers for office and Casual llok', price: 1700 },
    {index: '6', pagelink: '#', imgSrc: 'https://th.bing.com/th/id/OIP.PXarJfrWIpvcsP2rd-SdFQAAAA?w=226&h=400&c=7&r=0&o=5&pid=1.7', collectionName: 'pink suit for the summer with pink Trousers', price: 6600 },
    {index: '7', pagelink: '#', imgSrc: 'https://th.bing.com/th/id/OIP.jlebY4SrCO_NwwmxHHTt_wHaNK?w=226&h=400&c=7&r=0&o=5&pid=1.7', collectionName: 'Formal dress white shirt with vertical blue line', price: 1800 },
    {index: '8', pagelink: '#', imgSrc: 'https://th.bing.com/th/id/OIP.txRWOIlXS_H2ofh66jWIdwHaLH?w=226&h=400&c=7&r=0&o=5&pid=1.7', collectionName: 'Black suit formal party wear for wedding', price: 9000 },
    {index: '9', pagelink: '#', imgSrc: 'https://th.bing.com/th/id/OIP.tVOpRzf073Lr9oyfVXR7IgHaNK?w=226&h=400&c=7&r=0&o=5&pid=1.7', collectionName: 'Navy blue shirt with grey trousers for professional use and stylish', price: 1500 },
    {index: '10', pagelink: '#', imgSrc: 'https://th.bing.com/th/id/OIP.AV7cBZqIrrT_jYler1b5swHaMs?w=226&h=400&c=7&r=0&o=5&pid=1.7"', collectionName: 'Royal Blue Wedding Suit looking amazing', price: 9999 },
    {index: '11', pagelink: '#', imgSrc: 'https://th.bing.com/th/id/OIP.bLouaKEOrvJAIecHaYBUygHaLG?w=226&h=400&c=7&r=0&o=5&pid=1.7', collectionName: 'black shirt and sandybrown trousers for Corporate', price: 2700 },
    {index: '12', pagelink: '#', imgSrc: 'https://th.bing.com/th/id/OIP.GCPrfA4SXcQ5hOJ_44xH4wHaNK?w=226&h=400&c=7&r=0&o=5&pid=1.7', collectionName: 'white shirt with black trousers for formal', price: 1900 },
    {index: '13', pagelink: '#', imgSrc: 'https://th.bing.com/th/id/OIP.SDGIxSX7wgC8pBkOwW4VzQHaNK?w=226&h=400&c=7&r=0&o=5&pid=1.7', collectionName: 'wine shirt with sandybrown trousers', price: 1800 },
    {index: '14', pagelink: '#', imgSrc: 'https://th.bing.com/th/id/OIP.XbLVzqJZiSUJt-YjAlpTpwAAAA?pid=ImgDet&w=226&h=400&c=7', collectionName: 'blue chinese collar shirt with grey black pant', price: 5800 },
    {index: '15', pagelink: '#', imgSrc: 'https://th.bing.com/th/id/OIP.-OKN6HAWCjMHhQJZ5-55EgHaNK?w=226&h=400&c=7&r=0&o=5&pid=1.7', collectionName: 'white shirt and black pant with tie for professional use', price: 2200 },
    {index: '16', pagelink: '#', imgSrc: 'https://th.bing.com/th/id/OIP.a38r_ySouO_GA420jG4MeQHaNZ?pid=ImgDet&w=226&h=400&c=7', collectionName: 'casual grey shirt with dark blue pant', price: 2200 },
    {index: '17', pagelink: '#', imgSrc: 'https://th.bing.com/th/id/OIP.7fMEabJ8rpeCyDTA3MYu_QHaO0?w=226&h=400&c=7&r=0&o=5&pid=1.7', collectionName: 'dark blue suit and trousers for professional look', price: 8899 },
    {index: '18', pagelink: '#', imgSrc: 'https://th.bing.com/th/id/OIP.iG3qbNCoxdGQmNG90-GE7gHaJQ?pid=ImgDet&w=226&h=400&c=7', collectionName: 'light grey shirt and dark grey trousers with comtrast blue suit ', price: 5399 },
    {index: '19', pagelink: '#', imgSrc: 'https://th.bing.com/th/id/OIP.OSf2omVN_jc3FzAPgDLabwHaLg?pid=ImgDet&w=226&h=400&c=7', collectionName: 'grey suit and blue pant with white daily wear shirt ', price: 5199 },
    {index: '20', pagelink: '#', imgSrc: 'https://th.bing.com/th/id/OIP.8DgqTcmfy6CHXICY7KsQQgHaJ_?pid=ImgDet&w=226&h=400&c=7', collectionName: 'dark grey suit and trousers with black high neck tshirt for stylist look', price: 7999 },
    // {index: '21', pagelink: '#', imgSrc: 'https://th.bing.com/th/id/OIP.MeXf7ZmAD9b7040DaSCaCgHaLH?pid=ImgDet&w=226&h=400&c=7', collectionName: 'Autumn Collection', price: 1800 },
    // {index: '22', pagelink: '#', imgSrc: 'https://th.bing.com/th/id/OIP.HOZXjU0IXu9MJ6ypO8PJpwHaPO?pid=ImgDet&w=226&h=400&c=7', collectionName: 'Spring Collection', price: 1700 },
    // {index: '23', pagelink: '#', imgSrc: 'https://th.bing.com/th/id/OIP.DKYbamtENtJhnqkEa64qPAAAAA?pid=ImgDet&w=226&h=400&c=7', collectionName: 'Spring Collection', price: 1700 },
    // {index: '24', pagelink: '#', imgSrc: 'https://th.bing.com/th/id/OIP.4g-FGkUnPw2mds3qYKQhIwHaI_?w=226&h=400&c=7&r=0&o=5&pid=1.7', collectionName: 'Spring Collection', price: 1700 },
    // {index: '25', pagelink: '#', imgSrc: 'https://images.unsplash.com/photo-1717672010655-e945fbb87e43?crop=entropy&cs=srgb&fm=jpg&ixid=M3w2NDkyNDJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjU1MzgxMzl8&ixlib=rb-4.0.3&q=85', collectionName: 'Summer Collection', price: 2000 },
    // {index: '26', pagelink: '#', imgSrc: 'https://images.unsplash.com/photo-1622925925757-bb2726d7564e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w2NDkyNDJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjU1Mzg0NTV8&ixlib=rb-4.0.3&q=85', collectionName: 'Autumn Collection', price: 1800 },
    // {index: '27', pagelink: '#', imgSrc: 'https://th.bing.com/th/id/OIP.tp-xnxZDmLSwUg59JD3q5QHaJv?w=303&h=400&c=7&r=0&o=5&pid=1.7', collectionName: 'Spring Collection', price: 1700 },
    // {index: '28', pagelink: '#', imgSrc: 'https://images.unsplash.com/photo-1683142032379-a95b8af4fda5?crop=entropy&cs=srgb&fm=jpg&ixid=M3w2NDkyNDJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjU1NDE3ODV8&ixlib=rb-4.0.3&q=85', collectionName: 'Spring Collection', price: 1700 },
];
const cardDatawomen = [
    {index: '1', pagelink: '#', imgSrc: 'https://th.bing.com/th/id/OIP.xfUvZUrs5EIsHdVqGuEXGwHaKd?w=283&h=400&c=7&r=0&o=5&pid=1.7', collectionName: 'lime bkue straight Short Kurti', price: 700 },
    {index: '2', pagelink: '#', imgSrc: 'https://th.bing.com/th/id/OIP.QRoZ_mTdafLpwfxRqlDV8gAAAA?w=280&h=400&c=7&r=0&o=5&pid=1.7', collectionName: 'Sea Foam Embroidered Angrakha Crop Top - Feed-Blouse', price: 1500 },
    {index: '3', pagelink: '#', imgSrc: 'https://th.bing.com/th/id/OIP.XJJ-srdcpc_e0IUt18kXBwHaJZ?w=283&h=400&c=7&r=0&o=5&pid=1.7', collectionName: 'Blue Kurti simple Design with full sleeves For Winter ', price: 1800 },
    {index: '4', pagelink: '#', imgSrc: 'https://th.bing.com/th/id/OIP.txZriRUj63WcAwCybP3aaQHaJ4?w=300&h=400&c=7&r=0&o=5&pid=1.7', collectionName: 'sky blue Straight Kurti with balloon sleeves ', price: 900 },
    {index: '5', pagelink: '#', imgSrc: 'https://th.bing.com/th/id/OIP.KcO3pZbM_BaY09bZ91IbwgAAAA?w=267&h=400&c=7&r=0&o=5&pid=1.7', collectionName: 'Choker Neck Layered Fluted Sleeve Burgundy Top', price: 899 },
    {index: '6', pagelink: '#', imgSrc: 'https://th.bing.com/th/id/OIP.5PIhH-LZzww-KHCwBFLacQHaLH?w=267&h=400&c=7&r=0&o=5&pid=1.7', collectionName: 'beige ruffle sleeves kurta ', price: 999 },
    {index: '7', pagelink: '#', imgSrc: 'https://th.bing.com/th/id/OIP.9nc7hA_oeVriJ3HMV-4D7gHaIh?w=283&h=400&c=7&r=0&o=5&pid=1.7', collectionName: 'light pink lining striped jauipur vastra top ', price: 499 },
    {index: '8', pagelink: '#', imgSrc: 'https://www.bing.com/th/id/OIP.NJ9SvFsyurCQgW7Cv09TJQAAAA?w=283&h=400&c=7&r=0&o=5&pid=1.7', collectionName: 'baby pink pure cotten jaipuri printed short top ', price: 1300 },
    {index: '9', pagelink: '#', imgSrc: 'https://www.bing.com/th/id/OIP.srU2DOzVy2N8tKJ3pcFhSgHaJQ?w=283&h=400&c=7&r=0&o=5&pid=1.7', collectionName: 'printed white round cotten kurti', price: 650 },
    {index: '10', pagelink: '#', imgSrc: 'https://th.bing.com/th/id/OIP.JEwtnYaqkd8S5-xjgb-yQQHaLH?w=267&h=400&c=7&r=0&o=5&pid=1.7', collectionName: 'sea green floral frock for summer', price: 1189 },
    {index: '11', pagelink: '#', imgSrc: 'https://th.bing.com/th/id/OIP.6MJqBAbfwbfznllHw38udwAAAA?w=260&h=400&c=7&r=0&o=5&pid=1.7', collectionName: 'blue sweethert neck puff sleeves chiffon regular crop top', price: 650 },
    {index: '12', pagelink: '#', imgSrc: 'https://th.bing.com/th/id/OIP.JDsu3a0xgYWkPF8-mcjOCgAAAA?w=267&h=400&c=7&r=0&o=5&pid=1.7', collectionName: 'white random print summer top', price: 399 },
    {index: '13', pagelink: '#', imgSrc: 'https://th.bing.com/th/id/OIP.LiXU5TTg97g9rNMmxY18qgHaJZ?w=283&h=400&c=7&r=0&o=5&pid=1.7', collectionName: 'striped mandarin collar straight kurti with trousers', price: 989 },
    {index: '14', pagelink: '#', imgSrc: 'https://th.bing.com/th/id/OIP.Nd9lwd_ooD_YJcwi17tu0QHaHa?w=283&h=400&c=7&r=0&o=5&pid=1.7', collectionName: 'light pink small checks stylish shirt with balloon sleeves', price: 789 },
    {index: '15', pagelink: '#', imgSrc: 'https://th.bing.com/th/id/OIP.clvdTUL0t7naO2WParBBMwHaJX?w=283&h=400&c=7&r=0&o=5&pid=1.7', collectionName: 'sea green chiffon blouse with half sleeves western', price: 899 },
    {index: '16', pagelink: '#', imgSrc: 'https://th.bing.com/th/id/OIP.Y1qFTizBSmQRlrAKJKFBZwHaLH?w=267&h=400&c=7&r=0&o=5&pid=1.7', collectionName: 'pink churidar neck and sleeves design straight kurti', price: 559 },
    {index: '17', pagelink: '#', imgSrc: 'https://th.bing.com/th/id/OIP.HrhTqdDEtScXWMoM-DC-nwHaJ4?w=283&h=400&c=7&r=0&o=5&pid=1.7', collectionName: 'Butterflies Daisy Graphic Print Short Sleeve T-Shirt', price: 489 },
    {index: '18', pagelink: '#', imgSrc: 'https://th.bing.com/th/id/OIP.k2QckIjkjKhE49Mdm0xm9QHaJ4?pid=ImgDet&w=283&h=400&c=7', collectionName: 'pink T Shirts Short Sleeve Tees Sunflower Graphic Loose Summer Tops', price: 439 },
    {index: '19', pagelink: '#', imgSrc: 'https://th.bing.com/th/id/OIP._YCJ6MIZbZ0cC0rIPkDz6AAAAA?pid=ImgDet&w=283&h=400&c=7', collectionName: 'Graphic Tees Plus Size Vintage Funny Crew Neck T Shitrs Casual Summer Heart Print', price: 399 },
    {index: '20', pagelink: '#', imgSrc: 'https://th.bing.com/th/id/OIP.Rw3kLC_CYl50whux4ZB9TwHaK3?pid=ImgDet&w=273&h=400&c=7', collectionName: 'Plus Size T-Shirt Cute Sunflower Printed Short Sleeves Round Neck Tee Tshirt Summer Loose', price: 389 },
];
const cardDatakids = [
    {index: '1', pagelink: '#', imgSrc:  'https://th.bing.com/th/id/OIP.elPqPSN0p8F7zIerDBRSUQHaHa?w=283&h=400&c=7&r=0&o=5&pid=1.7', collectionName: 'soft pink floral frock ', price: 600 },
    {index: '2', pagelink: '#', imgSrc:  'https://th.bing.com/th/id/OIP.Dv339g5hKF_0GGiuZnbvHgHaHa?w=283&h=400&c=7&r=0&o=5&pid=1.7', collectionName: 'Kids black short Frocks Korean Style ', price: 799 },
    {index: '3', pagelink: '#', imgSrc:  'https://th.bing.com/th/id/OIP.K8qhS0TCefDe6l6Ke7HZeAHaHa?w=283&h=400&c=7&r=0&o=5&pid=1.7', collectionName: 'yellow floral short Party Wear Dress', price: 349 },
    {index: '4', pagelink: '#', imgSrc:  'https://th.bing.com/th/id/OIP.tjntOM4vwcey_TaNSbhl8QHaHa?w=283&h=400&c=7&r=0&o=5&pid=1.7', collectionName: 'Sleeveless Crop Top and Elastic Waist biker shorts', price: 499 },
    {index: '5', pagelink: '#', imgSrc:  'https://th.bing.com/th/id/OIP.bIF9R0QEf0oIu1EnFrUIEAHaHa?w=283&h=400&c=7&r=0&o=5&pid=1.7', collectionName: 'Brink Cap Sleeve Round Neck Floral frock', price: 599 },
    {index: '6', pagelink: '#', imgSrc:  'https://th.bing.com/th/id/OIP.z8mKQPY6HwhG6KsBIgnOlwHaHa?w=283&h=400&c=7&r=0&o=5&pid=1.7', collectionName: 'Hopscotch Cotton-Blend black oversize top and funky jeans', price: 469 },
    {index: '7', pagelink: '#', imgSrc:  'https://th.bing.com/th/id/OIP.cmM_vd8lY3iq-zBC7KzrMQHaHa?w=283&h=400&c=7&r=0&o=5&pid=1.7', collectionName: 'sleeveless yellow casual pants set adds a touch of two step trendy flair ', price: 489 },
    {index: '8', pagelink: '#', imgSrc:  'https://th.bing.com/th/id/OIP._yLSlTKCiLOx9Bme65aABwHaHa?w=283&h=400&c=7&r=0&o=5&pid=1.7', collectionName: 'party wear Midi Length white Party Dress', price: 599 },
    {index: '9', pagelink: '#', imgSrc:  'https://th.bing.com/th/id/OIP.0q6NwM7QnPgm5PyeEumB6gHaHa?w=283&h=400&c=7&r=0&o=5&pid=1.7', collectionName: 'Summer t-shirt with capri Set', price: 899 },
    {index: '10', pagelink: '#', imgSrc: 'https://th.bing.com/th/id/OIP.SmKF6xJVqhWfm_y2DV7KjgHaHa?w=283&h=400&c=7&r=0&o=5&pid=1.7', collectionName: 'Sports Tracksuit black Jacket with white Shirt and track', price: 1299 },
    {index: '11', pagelink: '#', imgSrc: 'https://th.bing.com/th/id/OIP.1oCiwzRSYyK1FavCQna-cgAAAA?w=283&h=400&c=7&r=0&o=5&pid=1.7', collectionName: 'Dungaree For Party Solid Cotton Blend with grey black pant', price: 2599 },
    {index: '12', pagelink: '#', imgSrc: 'https://th.bing.com/th/id/OIP.KMceSQpVXHODwY6jYr2nNgAAAA?w=271&h=400&c=7&r=0&o=5&pid=1.7', collectionName: 'Navy blue sweater with light blue fret ', price: 1199 },
    {index: '13', pagelink: '#', imgSrc: 'https://th.bing.com/th/id/OIP.y0OlWI0rLbRhUm6kcF9jYgHaHa?w=283&h=400&c=7&r=0&o=5&pid=1.7', collectionName: 'Spring Autumn Suit V-Neck short shirt with pants 2 piece set Plaid Formal wear', price: 1999 },
    {index: '14', pagelink: '#', imgSrc: 'https://th.bing.com/th/id/OIP.ATpIobXZU_A2a_hJT-17AAHaHa?w=283&h=400&c=7&r=0&o=5&pid=1.7', collectionName: 'Solid Tuxedo Style Festive & Wedding Blazer', price: 4999 },
    {index: '15', pagelink: '#', imgSrc: 'https://th.bing.com/th/id/OIF.3WZi6bBksjTUQYnp61xuXA?w=283&h=400&c=7&r=0&o=5&pid=1.7', collectionName: 'Quenny Chinese Hanfu Winter Celebration New Year Clothing Winter Horse Face Skirt New Year`s Eve Mamianqun Suit', price: 2389 },
    {index: '16', pagelink: '#', imgSrc: 'https://th.bing.com/th/id/OIP.COUpYKaiDRNZ8cMk4SV7yQAAAA?w=283&h=400&c=7&r=0&o=5&pid=1.7', collectionName: 'Calligraphy print with Sleeveless bottel green midi for party', price: 549 },
    {index: '17', pagelink: '#', imgSrc: 'https://th.bing.com/th/id/OIP.o6A6CepjFOpDWSUDCVsNJwHaHa?w=283&h=400&c=7&r=0&o=5&pid=1.7', collectionName: 'High Neck Hoody And Pant Set for casual wear ', price: 2499 },
    {index: '18', pagelink: '#', imgSrc: 'https://th.bing.com/th/id/OIP.XHndx5_r3nmqUrOUzvwNZgHaHa?w=283&h=400&c=7&r=0&o=5&pid=1.7', collectionName: 'party wear shirt and pant with suspenders and bow tie', price: 1899 },
    {index: '19', pagelink: '#', imgSrc: 'https://th.bing.com/th/id/OIP.6gn-Mr3F0lp9HGLXPIHUqgHaHa?w=283&h=400&c=7&r=0&o=5&pid=1.7', collectionName: 'grey three pieces tracksuit for funky look ', price: 1799 },
    {index: '20', pagelink: '#', imgSrc: 'https://th.bing.com/th/id/OIP.AeT2XAUvPGbW1eW93_KTEQHaJ6?w=283&h=400&c=7&r=0&o=5&pid=1.7', collectionName: 'Cotton Mid-Rise Regular Fit Chinos Shorts for summer outfit', price: 1349 },
];

// Loop through the array and add each card to the container
if (cardContainermen) {
    cardDataMen.forEach(card => {
        cardContainermen.appendChild(createCard(card.pagelink, card.imgSrc, card.collectionName, card.price, 'men'));
    });
} else if (cardContainerwomen) {
    cardDatawomen.forEach(card => {
        cardContainerwomen.appendChild(createCard(card.pagelink, card.imgSrc, card.collectionName, card.price, 'women'));
    });
} else if (cardContainerkids) {
    cardDatakids.forEach(card => {
        cardContainerkids.appendChild(createCard(card.pagelink, card.imgSrc, card.collectionName, card.price, 'kids'));
    });
}

// sign-out button code
const sign_out = document.getElementById('sign-out');
sign_out.addEventListener('click', function() {
    changePathname('/sign-in.html','Successfully logged out');
});

// sign-in form code
const form_in = document.getElementById('sign-in');
if (form_in) {
    form_in.addEventListener('submit', (event) => {
        event.preventDefault();
        changePathname('/','Successfully logged In');
    });
}

// sign_up form code
const form_up = document.getElementById('sign-up');
if (form_up) {
    form_up.addEventListener('submit', (event) => {
        event.preventDefault();
        
        var password = document.getElementById('password');
        var confirmPassword = document.getElementById('Confirm-Password');
        var phoneNumber = document.getElementById('phone');
        var phoneRegex = /^[0-9]{10}$/;

        if (!phoneRegex.test(phoneNumber.value)) {
            if (phoneNumber.value.length < 10) {
                alert('Phone number must be exactly 10 digits long.');
            } else {
                alert('Invalid phone number. Please enter only numbers.');
            }
            phoneNumber.focus();
            return;
        }

        if (password.value === confirmPassword.value) {
            changePathname('/sign-in.html', 'Successfully Created');
        } else {
            alert('Passwords do not match. Please try again.');
            confirmPassword.value = '';
            password.value = '';
            password.focus()
        }
    });
}
