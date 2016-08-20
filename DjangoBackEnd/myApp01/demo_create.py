# -*- coding: utf-8 -*-

import sys
import os
filepath = os.path.dirname(os.path.abspath(__file__))
sys.path.append(filepath)

from blockChain import *
import time
r = redis.StrictRedis(host=info.REDIS_URI, port=info.REDIS_PORT, db=0)

input_nodes = [{
    "name": "福全香鬆瀨戶風味",
    "value": {
        "category": '調味製品',
        "companyName": '福全食品股份有限公司',
        "imgUrl": 'http://i.imgur.com/B8luJyt.jpg',
    }
}, {
    "name": "福全香鬆櫻花蝦香味",
    "value": {
        "category": '調味製品',
        "companyName": '福全食品股份有限公司',
        "imgUrl": 'http://i.imgur.com/kmbeAN9.jpg',
    }

}, {
    "name": "福全乳糖",
    "value": {
        "category": '葡萄糖',
        "companyName": '福全乳品股份有限公司',
        "imgUrl": 'http://i.imgur.com/kHux6gb.jpg',
    }
}, {
    "name": "福全奶粉",
    "value": {
        "category": '乳粉',
        "companyName": '福全乳品加工廠股份有限公司',
        "imgUrl": 'http://i.imgur.com/s01cPIr.jpg',
    }
}, {
    "name": "福全生乳",
    "value": {
        "category": '乳水',
        "companyName": '福全牧場股份有限公司',
        "imgUrl": 'http://i.imgur.com/Clm8Ciy.jpg',
    }

}, {
    "name": "福全砂糖",
    "value": {
        "category": '砂糖',
        "companyName": '福全糖業股份有限公司',
        "imgUrl": 'http://i.imgur.com/Ztf5cxS.jpg',
    }
}, {
    "name": "福全乾鰹節片",
    "value": {
        "category": '水產製品',
        "companyName": '福全水產加工廠企業有限公司',
        "imgUrl": 'http://i.imgur.com/DmAq9r0.jpg',
    }
}, {
    "name": "福全乾燥櫻花蝦",
    "value": {
        "category": '水產製品',
        "companyName": '福全水產加工廠企業有限公司',
        "imgUrl": 'http://i.imgur.com/ELq32IU.jpg',
    }
}, {
    "name": "福全鰹節",
    "value": {
        "category": '活生鮮冷藏魚產品',
        "companyName": '福全水產股份有限公司',
        "imgUrl": 'http://i.imgur.com/hZctLXV.jpg',
    }
}, {
    "name": "福全櫻花蝦",
    "value": {
        "category": '活生鮮冷凍冷藏甲殼類產品',
        "companyName": '福全水產股份有限公司',
        "imgUrl": 'http://i.imgur.com/B0o34fv.jpg',
    }
}, {
    "name": "福全馬鈴薯片",
    "value": {
        "category": '澱粉及其產物',
        "companyName": '福全農產品加工廠企業有限公司',
        "imgUrl": 'http://i.imgur.com/sZGSNEB.jpg',
    }
}, {
    "name": "福全馬鈴薯",
    "value": {
        "category": '澱粉及其產物',
        "companyName": '福全農產運銷股份有限公司',
        "imgUrl": 'http://i.imgur.com/BO2Abjm.jpg',
    }
}, {
    "name": "福全醬油",
    "value": {
        "category": '醬油',
        "companyName": '福全醬油股份有限公司',
        "imgUrl": 'http://i.imgur.com/jmXOXXB.jpg',
    }

}, {
    "name": "福全芝麻",
    "value": {
        "category": '其他穀類、塊根、塊莖等製品',
        "companyName": '福全食品股份有限公司',
        "imgUrl": '',
    }
}, {
    "name": "福全有機黃豆",
    "value": {
        "category": '黃豆或豆類及其相關加工製品',
        "companyName": '福全黃豆食品加工企業有限公司',
        "imgUrl": 'http://i.imgur.com/nLUhxsz.jpg',
    }
}]

name_to_key = {}

for obj in input_nodes:
    addr = createAddress(key=obj['name'],name=obj['name'],info=obj['value'])
    print obj['name']+' : '+ addr
    name_to_key[obj['name']] = addr

links= [
    {"source": "福全香鬆瀨戶風味", "target": "福全乳糖"},
    {"source": "福全香鬆瀨戶風味", "target": "福全砂糖"},
    {"source": "福全香鬆瀨戶風味", "target": "福全乾鰹節片"},
    {"source": "福全香鬆瀨戶風味", "target": "福全馬鈴薯片"},
    {"source": "福全香鬆瀨戶風味", "target": "福全醬油"},
    {"source": "福全香鬆瀨戶風味", "target": "福全芝麻"},
    {"source": "福全香鬆櫻花蝦香味", "target": "福全乳糖"},
    {"source": "福全香鬆櫻花蝦香味", "target": "福全砂糖"},
    {"source": "福全香鬆櫻花蝦香味", "target": "福全乾燥櫻花蝦"},
    {"source": "福全香鬆櫻花蝦香味", "target": "福全馬鈴薯片"},
    {"source": "福全香鬆櫻花蝦香味", "target": "福全醬油"},
    {"source": "福全香鬆櫻花蝦香味", "target": "福全芝麻"},
    {"source": "福全乳糖", "target": "福全奶粉"},
    {"source": "福全奶粉", "target": "福全生乳"},
    {"source": "福全醬油", "target": "福全有機黃豆"},
    {"source": "福全乾鰹節片", "target": "福全鰹節"},
    {"source": "福全乾燥櫻花蝦", "target": "福全櫻花蝦"},
    {"source": "福全馬鈴薯片", "target": "福全馬鈴薯"}
]


# for obj in links:
#
# obj = links[18]
# source_addr = name_to_key[obj["source"]]
# target_addr = name_to_key[obj["target"]]
# count = 0
# while(1):
#     try :
#         count += 1
#         print "s:{}, t:{}".format(source_addr,target_addr)
#         print transaction(source_addr=source_addr, target_addr=target_addr)
#         break
#     except:
#         print "bad"
#         if count == 5:
#             print "fail"
#             break
#         time.sleep(2)
#         continue
