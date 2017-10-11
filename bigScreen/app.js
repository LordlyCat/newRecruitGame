var fs = require('fs');
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config.js');
var express = require('express');
var expressApp = express();
var path = require('path');
const bodyParser = require('body-parser');
var multer = require('multer');
var serverPort = 5499;
var devPort = 9090;

var exec = require('child_process').exec;
var cmdStr = 'PORT=' + serverPort + 'supervisor ./bin/www';
exec(cmdStr);

var proxy = {
    //"*": "http://localhost:" + serverPort
    target: "http://localhost:" + serverPort
};

fs.watch('./src/view/', function() {
    console.log('yesyesyesyesyesyesyes');
    //location.reload();
    exec('webpack', function(err, stdout, stderr) {
        if (err) {
            console.log(stderr);
        } else {
            console.log(stdout);
        }
    });
});

fs.watch('./src/js/', function() {
    console.log('yesyesyesyesyesyesyes');
    //location.reload();
    exec('webpack', function(err, stdout, stderr) {
        if (err) {
            console.log(stderr);
        } else {
            console.log(stdout);
        }
    });
});

fs.watch('./src/css/', function() {
    console.log('yesyesyesyesyesyesyes');
    //location.reload();
    exec('webpack', function(err, stdout, stderr) {
        if (err) {
            console.log(stderr);
        } else {
            console.log(stdout);
        }
    });
});

var compiler = webpack(config);

//在源码有更新时，更新模板
compiler.plugin('emit', function(compilation, cb) {
    for (var filename in compilation.assets) {
        if (filename.endsWith('.html')) {
            var filepath = path.resolve(viewPath, filename)
            var dirname = path.dirname(filepath)
            if (!fs.existsSync(dirname)) {
                mkdir('-p', dirname)
            }
            fs.writeFile(filepath, compilation.assets[filename].source())
        }
    }
    cb();
})

//当页面模板有改变时，强制刷新页面
compiler.plugin('compilation', function(compilation) {
    compilation.plugin('html-webpack-plugin-after-emit', function(data, cb) {
        // todo 刷新浏览器
        // *
        //  * 实际项目中，应该使用webpack-dev-middleware和webpack-hot-middleware中间件，
        //  * 结合node库express/koa等使用。

        console.log(266666666666666666666666);
        cb()
    })
})

var app = new WebpackDevServer(webpack(config), {
    publicPath: './dist',
    contentBase: './dist',
    hot: false,
    proxy: proxy
});


app.listen(serverPort, function() {
    console.log("litsening 2333333333333333");
});


expressApp.use(bodyParser.json());

expressApp.use(bodyParser.urlencoded({
    extended: false
}));

expressApp.use(express.static(path.join(__dirname, 'dist/')));

expressApp.post('/', function(req, res, next) {
    console.log(req.body);
    res.send('190');
    //console.log(req.files);
});



var upload = multer({
    dest: 'upload/'
});

expressApp.post('/upload', upload.single('logo'), function(req, res, next) {
    res.send({
        ret_code: '0'
    });
});



expressApp.listen(devPort, function() {
    console.log("litsening " + devPort);
});