module.exports = (req, res, next) => {
    res.header('Access-Control-Expose-Headers', 'Content-Range"')
    req.header('Content-Range', 'products 0-20/20')

    next()
}