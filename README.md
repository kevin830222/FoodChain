# FoodChain
HackNTU 2016 project


# Django API

## Create an Assignment Address (建立一批貨的區塊鏈地址)
```
POST {DjangoHost}/addr/
    key:helloworld001
```

## Transaction Duty of Assignment (將一批貨的食安責任推送到進貨的商品)
    POST /transaction/
### Example:
Request:
```
POST {DjangoHost}/transaction/

    source:1B5hGxuLTiSyrZrT8vfcCoXNnZqPLBuLFf
    target:19yBocBjGdvchipivUM8YdnGadmjxHeQJh
```

Response:
```
null
```
null response is OK. (for demo purpose)

## Track Assignment (根據一批貨的Address找回源頭的所有貨的資訊)
    GET /track?addr=$addr

### Example:

Request:
```
GET {DjangoHost}/track?addr=1B5hGxuLTiSyrZrT8vfcCoXNnZqPLBuLFf
```

Response:
```
{"reportUrl": ["http://i.imgur.com/undefined.jpg", "http://i.imgur.com/Zldl1mY.jpg"], "nodes": [{"name": "福全芝麻", "value": {"category": "其他穀類、塊根、塊莖等製品", "imgUrl": "", "companyName": "福全食品股份有限公司"}}, {"name": "福全有機黃豆", "value": {"category": "黃豆或豆類及其相關加工製品", "imgUrl": "http://i.imgur.com/nLUhxsz.jpg", "companyName": "福全黃豆食品加工企業有限公司"}}, {"name": "福全乾鰹節片", "value": {"category": "水產製品", "imgUrl": "http://i.imgur.com/DmAq9r0.jpg", "companyName": "福全水產加工廠企業有限公司"}}, {"name": "福全馬鈴薯", "value": {"category": "澱粉及其產物", "imgUrl": "http://i.imgur.com/BO2Abjm.jpg", "companyName": "福全農產運銷股份有限公司"}}, {"name": "福全馬鈴薯片", "value": {"category": "澱粉及其產物", "imgUrl": "http://i.imgur.com/sZGSNEB.jpg", "companyName": "福全農產品加工廠企業有限公司"}}, {"name": "福全鰹節", "value": {"category": "活生鮮冷藏魚產品", "imgUrl": "http://i.imgur.com/hZctLXV.jpg", "companyName": "福全水產股份有限公司"}}, {"name": "福全生乳", "value": {"category": "乳水", "imgUrl": "http://i.imgur.com/Clm8Ciy.jpg", "companyName": "福全牧場股份有限公司"}}, {"name": "福全乳糖", "value": {"category": "葡萄糖", "imgUrl": "http://i.imgur.com/kHux6gb.jpg", "companyName": "福全乳品股份有限公司"}}, {"name": "福全砂糖", "value": {"category": "砂糖", "imgUrl": "http://i.imgur.com/Ztf5cxS.jpg", "companyName": "福全糖業股份有限公司"}}, {"name": "福全醬油", "value": {"category": "醬油", "imgUrl": "http://i.imgur.com/jmXOXXB.jpg", "companyName": "福全醬油股份有限公司"}}, {"name": "福全奶粉", "value": {"category": "乳粉", "imgUrl": "http://i.imgur.com/s01cPIr.jpg", "companyName": "福全乳品加工廠股份有限公司"}}, {"name": "福全香鬆瀨戶風味", "value": {"category": "調味製品", "imgUrl": "http://i.imgur.com/B8luJyt.jpg", "companyName": "福全食品股份有限公司"}}], "links": [{"source": "福全香鬆瀨戶風味", "target": "福全砂糖", "value": "3"}, {"source": "福全馬鈴薯片", "target": "福全馬鈴薯", "value": "6"}, {"source": "福全香鬆瀨戶風味", "target": "福全乾鰹節片", "value": "3"}, {"source": "福全乳糖", "target": "福全奶粉", "value": "6"}, {"source": "福全奶粉", "target": "福全生乳", "value": "6"}, {"source": "福全香鬆瀨戶風味", "target": "福全芝麻", "value": "6"}, {"source": "福全香鬆瀨戶風味", "target": "福全馬鈴薯片", "value": "6"}, {"source": "福全乾鰹節片", "target": "福全鰹節", "value": "3"}, {"source": "福全香鬆瀨戶風味", "target": "福全醬油", "value": "3"}, {"source": "福全醬油", "target": "福全有機黃豆", "value": "3"}, {"source": "福全香鬆瀨戶風味", "target": "福全乳糖", "value": "5"}]}
```
