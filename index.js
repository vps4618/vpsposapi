import express from 'express';
import items from './items.js';
import cors from 'cors';

const app = express();
const port = process.env.PORT || 3000;

app.use(cors({
    origin:"https://vps4618.github.io/",
    methods:["GET"]
}))

app.get('/',(req,res) => {
    res.send('Welcome to VpsPosApi . Created by VPS . ');
})

//get all data
app.get('/items',(req,res) => {
    res.send(JSON.parse(JSON.stringify(items)));
})

// get data by item name
app.get('/items/name/:ItemName',(req,res) => {
    const {ItemName} = req.params;
    // includes method use
    const findedItems = items.filter((item)=> {
        if(item.ItemName.toLowerCase().includes(ItemName.toLowerCase())){
            return item
        }
    })
    res.send(JSON.parse(JSON.stringify(findedItems)));
})

// get data by item barcode

app.get('/items/barcode/:Barcode',(req,res) => {
    const {Barcode} = req.params;
    // includes method use
    const findedItems = items.filter((item)=> {
        if(item.Barcode.startsWith(Barcode)){
            return item
        }
    })
    res.send(JSON.parse(JSON.stringify(findedItems)));
})

// get data by item sinhala name
app.get('/items/sinhalaname/:SinhalaName',(req,res) => {
    const {SinhalaName} = req.params;
    // includes method use
    const findedItems = items.filter((item)=> {
        if(item.SinhalaName.includes(SinhalaName)){
            return item
        }
    })
    res.send(JSON.parse(JSON.stringify(findedItems)));
})

// get data by item cost price
app.get('/items/costprice/:CostPrice',(req,res) => {
    const {CostPrice} = req.params;
    // includes method use
    const findedItems = items.filter((item)=> {
        if((item.Cost).toString().startsWith(CostPrice)){
            return item
        }
    })
    res.send(JSON.parse(JSON.stringify(findedItems)));
})

// get data by item sale price
app.get('/items/saleprice/:SalePrice',(req,res) => {
    const {SalePrice} = req.params;
    // includes method use
    const findedItems = items.filter((item)=> {
        if((item.Price).toString().startsWith(SalePrice)){
            return item
        }
    })
    res.send(JSON.parse(JSON.stringify(findedItems)));
})

// get data by item wholesale price
app.get('/items/wholesaleprice/:WholesalePrice',(req,res) => {
    const {WholesalePrice} = req.params;
    // includes method use
    const findedItems = items.filter((item)=> {
        if((item.Wholesale).toString().startsWith(WholesalePrice)){
            return item
        }
    })
    res.send(JSON.parse(JSON.stringify(findedItems)));
})

// get data by item bill price
app.get('/items/billprice/:BillPrice',(req,res) => {
    const {BillPrice} = req.params;
    // includes method use
    const findedItems = items.filter((item)=> {
        if((item.BillPrice).toString().startsWith(BillPrice)){
            return item
        }
    })
    res.send(JSON.parse(JSON.stringify(findedItems)));
})

// get data by item id
app.get('/items/id/:Id',(req,res) => {
    const {Id} = req.params;
    // includes method use
    const findedItems = items.filter((item)=> {
        return item.ITEM_ID == Id;
    })
    res.send(JSON.parse(JSON.stringify(findedItems)));
})

app.listen(port,() => {
    console.log('Server is listening on http://localhost:3000');
})

