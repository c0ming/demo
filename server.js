const Koa = require('koa');
const serve = require('koa-static');

const app = new Koa();

app.use(serve('./build'));

app.listen(5000, () => {
    console.log('demo listening on port 5000...');
});