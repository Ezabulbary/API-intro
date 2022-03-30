const shop = {
    name:'book house', 
    address: 'golla mari',
    product: ['mobaile', 'leptop', 'watch', 'TV'], 
    owner:{
        name: 'hasan ali',
        profetion: 'bissnese man'
    }, 
    profit:40000
};

const shopStringify = JSON.stringify(shop);
const converted = JSON.parse(shopStringify);
console.log(converted);