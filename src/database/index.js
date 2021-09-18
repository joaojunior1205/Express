const mongoose = require('mongoose');

mongoose.set('useNewUrlParser', true);

mongoose.set('useFindAndModify', false);

mongoose.set('useCreateIndex', true);

mongoose.connect('mongodb://localhost/noderest', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('connected database...'))
    .catch(err => console.log(err));

mongoose.Promise = global.Promise;

module.exports = mongoose;