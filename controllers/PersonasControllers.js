const PersonasController = {}

PersonasController.list = (req, res, next) => {

    let sql = 'select p.idPersonas, p.nombres, l.nombre from Personas p join Personas_has_Lenguajes pl using(idPersonas) join Lenguajes l using(idLenguajes)'

    req.getConnection((err, conn) => {

        let Personas,
            Lenguajes,
            LenguajesPersonas;

        conn.query('SELECT * FROM Personas', (err, rows) => {
            if (err) {
                res.json(err);
            }

            Personas = rows

            conn.query('SELECT * FROM Lenguajes', (err, rows) => {
                if (err) {
                    res.json(err)
                }

                Lenguajes = rows;

                conn.query(sql, (err, rows) => {
                    if (err) {
                        res.json(err)
                    }

                    LenguajesPersonas = rows

                    res.render('personas', {
                        Personas,
                        Lenguajes,
                        LenguajesPersonas
                    })
                })

            })
        })


    })
}

PersonasController.add = (req, res, next) => {

    let id;

    const DataPersona = {
        nombres: req.body.nombres,
        apellidos: req.body.apellidos,
        cedula: req.body.Cedula
    }

    const idLenguajes = req.body.idLenguajes;

    req.getConnection((err, conn) => {
        conn.query('INSERT INTO Personas set ?', [DataPersona], (err, rows) => {

            
            
            id = rows.insertId;
            
            for(let i = 0; i < idLenguajes.length; i++){
                conn.query('INSERT INTO Personas_has_Lenguajes set ?',[{idPersonas:id,idLenguajes:idLenguajes[i]}], (err,rows)=>{

                })
            }

            res.redirect('/personas')
        })

    })

}

module.exports = PersonasController;