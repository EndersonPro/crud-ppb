const PersonasController = {}

PersonasController.list = (req, res, next) => {

    req.getConnection((err, conn) => {

        let Personas,
            Lenguajes;

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

                res.render('personas', {
                    Personas,
                    Lenguajes
                })
            })
        })


    })
}

PersonasController.add = (req, res, next) => {
    console.log(req.body)
}

module.exports = PersonasController;