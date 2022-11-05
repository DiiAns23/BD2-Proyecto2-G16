require('dotenv').config();
const { consulta1, consulta2, consulta3, consulta4, consulta5, consulta6, consulta7, consulta8 } = require('../models/mysql.models');
const { consulta1_mongo, consulta2_mongo, consulta3_mongo, consulta4_mongo, consulta5_mongo, consulta6_mongo, consulta7_mongo, consulta8_mongo } = require('../models/mongo.models');
const { execute } = require('../database/conexion.mysql');
const { Logs } = require('../database/conexion.mongo');

const consultar = async (req, res) => {
    const { database, id_consulta } = req.body;
    let result;
    if (database === 1) {
        if (id_consulta === 1) {
            result = await execute(consulta1);
        } else if (id_consulta === 2) {
            result = await execute(consulta2);
        } else if (id_consulta === 3) {
            result = await execute(consulta3);
        } else if (id_consulta === 4) {
            result = await execute(consulta4);
        } else if (id_consulta === 5) {
            result = await execute(consulta5);
        } else if (id_consulta === 6) {
            result = await execute(consulta6);
        } else if (id_consulta === 7) {
            result = await execute(consulta7);
        } else if (id_consulta === 8) {
            result = await execute(consulta8);
        }
        
    }else if (database === 2) {
        if (id_consulta === 1) {
            result = await Logs('Pacientes', consulta1_mongo);
        } else if (id_consulta === 2) {
            result = await Logs('LogActividades1',consulta2_mongo);
        } else if (id_consulta === 3) {
            result = await Logs('Pacientes',consulta3_mongo);
        } else if (id_consulta === 4) {
            result = await Logs('Pacientes',consulta4_mongo);
        } else if (id_consulta === 5) {
            result = await Logs('Pacientes',consulta5_mongo);
        } else if (id_consulta === 6) {
            result = await Logs('LogActividades1',consulta6_mongo);
        } else if (id_consulta === 7) {
            result = await Logs('LogActividades1',consulta7_mongo);
        } else if (id_consulta === 8) {
            result = await Logs('LogActividades1',consulta8_mongo);
        }
        console.log('Resultado ya fuera de la consulta: ', result);
    }
    if (result.err) {
        res.status(400).json({
            status: false,
            message: result.err
        });
    } else {
        if(result.result){
            res.status(200).json({
                status: true,
                message: result.result
            });
        }else{
            res.status(200).json({
                status: true,
                message: result
            });
        }
    }
};

module.exports = {
    consultar
};
