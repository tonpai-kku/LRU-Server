const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

function getCurrentDatetime(){
    const today = new Date();
    const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    const dateTime = date+' '+time;
    return dateTime;
}

const data = [
    {
        title: 'การนอนหลับ 4 ทุ่มช่วยฉะลอวัย',
        detail: 'จากการทดลองของดิฉันพบว่าการนอนตอน 4 ทุ่มช่วยฉะลอวัย เนื่องจากตอนนอนร่างกายจะหลั่ง growth hormone',
        author: 'Pakdee Suwankasem',
        date: getCurrentDatetime()
    },
    {
        title: 'พบการทุจริตในหน่วยงาน xxx',
        detail: 'ผมพบความผิดปกติของหน่วยงาน xxx ที่มีการดำเนินงานส่อไปในทางทุจริต รบกวนหน่วยงานที่เกี่ยวข้องช่วยตรวจสอบ',
        author: 'ผู้หวังดี',
        date: getCurrentDatetime()
    }
];

app.get('/', (req, res) => res.send('Hello World'));

app.get('/news', (req, res) => {
    res.json(data);
});

app.post('/add_news', (req, res) => {
    let newData = req.body;
    newData = {
        date: getCurrentDatetime(),
        ...newData,
    };
    data.push(newData);

    console.log('News is added.');
    console.log(newData);

    res.json({
        'status': 1,
    });
});

app.listen(port, () => {
    console.log(`Example app listening at port: ${3000}`);
    console.log(`Check example data...`);
    console.log(data);
});