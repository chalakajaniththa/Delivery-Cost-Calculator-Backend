exports.getHome = async (req, res) => {
    res.send('Hello Node API')
};

exports.getBlog = async (req, res) => {
    res.send('Hello Blog, This is my first express app.')
};