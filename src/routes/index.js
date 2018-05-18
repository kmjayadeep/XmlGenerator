const generateXml = require('./generateXml')

const route = (app, options) => {
    app.use('/api/generateXml/', generateXml)
}

module.exports = Object.assign({}, { route })