const consulta1 = `
SELECT
CASE WHEN (edad < 18) THEN 'Pediatrico' ELSE
    CASE WHEN (edad >= 18 AND edad <= 60) THEN 'Mediana Edad' ELSE
        CASE WHEN (edad > 60) THEN 'Geriatrico'
        END
    END
END Categoria,
COUNT(*) Total
FROM PACIENTE
GROUP BY Categoria;
`

const consulta2 = `
SELECT h.Habitacion,COUNT(*) AS Cantidad 
	FROM HABITACION h, LOG_ACTIVIDAD_1 la 
    WHERE h.idHabitacion = la.fk_idHabitacion
GROUP BY Habitacion;
`

const consulta3 = `
SELECT genero, COUNT(*) AS Cantidad FROM PACIENTE GROUP BY genero;
`

const consulta4 = `
SELECT edad, COUNT(*) AS Cantidad FROM PACIENTE GROUP BY edad ORDER BY COUNT(*) DESC LIMIT 5;
`

const consulta5 = `
SELECT edad, COUNT(*) AS Cantidad FROM PACIENTE GROUP BY edad ORDER BY COUNT(*) ASC LIMIT 5;
`

const consulta6 = `
SELECT h.Habitacion, COUNT(*) AS Cantidad 
	FROM HABITACION h, LOG_ACTIVIDAD_1 la 
    WHERE h.idHabitacion = la.fk_idHabitacion 
    GROUP BY Habitacion ORDER BY COUNT(*) DESC LIMIT 5;
`

const consulta7 = `
SELECT h.Habitacion, COUNT(*) AS Cantidad 
	FROM HABITACION h, LOG_ACTIVIDAD_1 la 
    WHERE h.idHabitacion = la.fk_idHabitacion
GROUP BY Habitacion ORDER BY COUNT(*) ASC LIMIT 5;
`

const consulta8 = `
SELECT la.timestampx, COUNT(*) AS Cantidad
	FROM LOG_ACTIVIDAD_1 la 
GROUP BY timestampx ORDER BY COUNT(*) DESC LIMIT 1;
`

module.exports = {
    consulta1,
    consulta2,
    consulta3,
    consulta4,
    consulta5,
    consulta6,
    consulta7,
    consulta8
}