const router = require('express').Router()
const xmlGenerator = require('../lib/xmlGenerator')

router.get('/', (req, res) => {
    let structure = {
        root: {
            name: 'students',
            children: [{
                name: 'student',
                path: '/',
                children: [{
                    name: 'name',
                    path: 'name'
                }, {
                    name: 'age',
                    path: 'age'
                }, {
                    name: 'address',
                    path: 'address'
                }]
            }]
        }
    }
    let data = [{
        name: 'raju',
        age: 10,
        address: 'uganda'
    }, {
        name: 'ramu',
        age: 11,
        address: 'mesopotomia'
    }]
    xmlGenerator.generate(structure, data).then(xml => {
        res.send(xml)
    })
})


module.exports = router