const consulta1_mongo = [
    {
        '$group': 
        {
            '_id': 
            {
                '$cond': 
                [
                    {
                        '$lt': 
                        [
                            '$edad', 18
                        ]
                    }, 'Pedriatrico',
                    {
                        '$cond': 
                        [
                            {
                                '$and': 
                                [
                                    {
                                        '$gte': 
                                        [
                                            "$edad", 18
                                        ]
                                    }, 
                                    {
                                        '$lte': 
                                        [
                                            "$edad", 60
                                        ]
                                    }
                                ]
                            }, 'Mediana Edad',
                            'Geriatrico'
                        ]
                    }
                ]
            },
        'total': {'$sum': 1}
        }
    },
    {
        '$sort': 
        {
            '_id': 1
        }
}]

const consulta2_mongo = 
[
    {
        '$group': {
            '_id': '$Habitacion', 
            'Total': {
            '$sum': 1
            }
        }
    }
]


const consulta3_mongo = [
    {
        '$group': {
            '_id': '$genero', 
            'Total': {
                '$sum': 1
            }
        }
    }
]


const consulta4_mongo =[{
    '$group': {
        '_id': '$edad',
        'Total':{
            '$sum': 1
        }
    }
    },
    {'$sort': {'Total': -1}},
    {'$limit': 5}
]

const consulta5_mongo = [{
    '$group': {
        '_id': '$edad',
        'Total':{
            '$sum': 1
        }
    }
    },
    {'$sort': {'Total': 1}},
    {'$limit': 5}
]

const consulta6_mongo = [{
    '$group': {
        '_id': '$Habitacion',
        'Total':{
            '$sum': 1
        }
    }
    },
    {'$sort': {'Total': -1}},
    {'$limit': 5}
]

const consulta7_mongo = [{
    '$group': {
        '_id': '$Habitacion',
        'Total':{
            '$sum': 1
        }
    }
    },
    {'$sort': {'Total': 1}},
    {'limit': 5}
]


const consulta8_mongo = [{
    '$group': {
        '_id': '$timestampx',
        'Total':{
            '$sum': 1
        }
    }
    },
    {'$sort': {'Total': -1}},
    {'$limit': 1}
]

module.exports = {
    consulta1_mongo,
    consulta2_mongo,
    consulta3_mongo,
    consulta4_mongo,
    consulta5_mongo,
    consulta6_mongo,
    consulta7_mongo,
    consulta8_mongo
}