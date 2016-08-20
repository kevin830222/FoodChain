import sys
import os
filepath = os.path.dirname(os.path.abspath(__file__))
sys.path.append(filepath)
import gcoin

import info
import requests
import json
import redis
import copy
r = redis.StrictRedis(host=info.REDIS_URI, port=info.REDIS_PORT, db=0)

def createAddress(key, name=None, info=None):
    priv = gcoin.main.sha256(key)
    pub = gcoin.main.privtopub(priv)
    addr = gcoin.main.pubtoaddr(pub)
    r.hset(addr, "key", key)
    r.hset(addr, "priv", priv)
    r.hset(addr, "name", name)
    r.hset(addr, "info", json.dumps(info))
    return addr


def getPriv(addr):
    return r.hget(addr, "priv")
def getKey(addr):
    return r.hget(addr, "key")
def getInfo(addr):
    return json.loads(r.hget(addr, 'info'))
def getName(addr):
    return r.hget(addr, 'name')

def transaction(source_addr, target_addr):

    ## BlockChain
    info.getMoney(source_addr)
    info.getMoney(target_addr)

    res = requests.get('http://api.2bhackathon.org:8787/base/v1/balance/%s' % addr3)
    # print res.text

    res = requests.get(info.BASE_URL + '/transaction/create', {
        'from_address': source_addr,
        'to_address': target_addr,
        'color_id': info.colorId,
        'amount': 2.5,
    })

    resobj = json.loads(res.text)
    raw_tx = resobj['raw_tx']
    raw_tx = gcoin.signall(str(raw_tx), getPriv(source_addr))
    res = requests.post(
        info.BASE_URL + '/transaction/send', {
            'raw_tx': raw_tx
        })
    print res.text

    assert "tx_id" in res.text

def transactionRedis(source_addr, target_addr):
    ## Redis

    val = 1
    if r.hexists("transaction:"+source_addr, target_addr):
        val = int(r.hget("transaction:"+source_addr, target_addr))
        val += 1
    print "val:", val
    r.hset("transaction:"+source_addr, target_addr, val)


def getTrack(addr_to_get, nonCircleSet=set()):
    nonCircleSet = copy.copy(nonCircleSet)
    nonCircleSet.add(addr_to_get)
    txs_list = []
    res = requests.get('http://api.2bhackathon.org:8787/explorer/v1/transactions/address/%s' % addr_to_get)
    # print "addr to get:", addr_to_get
    # print "track hash list:", res.text
    res_obj = json.loads(res.text)
    if res_obj['txs']:
        txs_list += res_obj['txs']
        while(res_obj['page']["next_uri"] != None):
            uri = res_obj['page']["next_uri"]
            res = requests.get('http://api.2bhackathon.org:8787' + uri)
            res_obj = json.loads(res)
            txs_list += res_obj['txs']

    ret_dict = {}
    for transaction_item in txs_list:
        if len(transaction_item["vins"]) == 1 and len(transaction_item["vouts"]) == 2 and \
                        transaction_item["vins"][0]['address'] == addr_to_get and \
                        transaction_item["vouts"][0]['amount'] == "250000000":
            to_addr = transaction_item["vouts"][0]['address']
            if (addr_to_get, to_addr) not in ret_dict:
                ret_dict[(addr_to_get, to_addr)] = 1
            else:
                ret_dict[(addr_to_get, to_addr)] += 1
            if not to_addr in nonCircleSet:
                for key, val in getTrack(to_addr, nonCircleSet).iteritems():
                    # print "key:", key
                    if key not in ret_dict:
                        ret_dict[key] = val
                    else:
                        ret_dict[key] += val
    return ret_dict


def getTrackRedis(addr_to_get, nonCircleSet = set()):
    nonCircleSet = copy.copy(nonCircleSet)
    nonCircleSet.add(addr_to_get)
    ret_dict = {}
    redis_addr_dict = r.hgetall("transaction:"+addr_to_get)
    if len(redis_addr_dict) == 0:
        return ret_dict
    for to_addr, val in redis_addr_dict.iteritems():
        ret_dict[(addr_to_get, to_addr)] = val

        if not to_addr in nonCircleSet:
            for key, val in getTrackRedis(to_addr, nonCircleSet).iteritems():
                if key not in ret_dict:
                    ret_dict[key] = val
                else:
                    ret_dict[key] += val
    return ret_dict

def getBalance(addr_to_get):
    return requests.get('http://api.2bhackathon.org:8787/base/v1/balance/%s' % addr_to_get).text

def trackToResponse(TrackDict):
    nodes=[]
    links=[]
    addr_set = set()
    for addr_tuple, val in TrackDict.iteritems():
        source_addr = addr_tuple[0]
        target_addr = addr_tuple[1]
        addr_set.add(source_addr)
        addr_set.add(target_addr)
        source = getName(source_addr)
        target = getName(target_addr)
        links.append({"source":source, "target":target, "value":val})

    for addr in addr_set:
        name = getName(addr)
        value = getInfo(addr)
        nodes.append({"name":name, "value":value})

    return {"nodes":nodes, "links":links}








if __name__ == "__main__":
    ##Key2
    key2 = 'alan111111X2'
    # priv2 = gcoin.main.sha256(key2)
    # pub2 = gcoin.main.privtopub(priv2)
    # addr2 = gcoin.main.pubtoaddr(pub2)
    addr2 = createAddress(key2, "apple2", {
                'category': 'Fruit',
                'companyName': 'NTU',
                'imgUrl': 'URL',
            })
    print addr2

    ##Key3
    key3 = 'alan111111X3'
    # priv3 = gcoin.main.sha256(key3)
    # pub3 = gcoin.main.privtopub(priv3)
    # addr3 = gcoin.main.pubtoaddr(pub3)
    addr3 = createAddress(key3, "apple3", {
                'category': 'Fruit',
                'companyName': 'NTU',
                'imgUrl': 'URL',
            })
    print addr3

    ##Key4
    key4 = 'alan111111X4'
    # priv4 = gcoin.main.sha256(key4)
    # pub4 = gcoin.main.privtopub(priv4)
    # addr4 = gcoin.main.pubtoaddr(pub4)
    addr4 = createAddress(key4, "apple4", {
                'category': 'Fruit',
                'companyName': 'NTU',
                'imgUrl': 'URL',
            })
    print addr4
    #
    # print getBalance(addr3)
    # print transaction(addr3, addr4)
    # print transactionRedis(addr2, addr3)
    # print transactionRedis(addr2, addr4)
    # print transactionRedis(addr3, addr4)


    # print getBalance(addr3)

    # createAddress(key2)
    tracks = getTrack(addr2)
    print trackToResponse(tracks)