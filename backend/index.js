const Koa = require("koa");
const Router = require('koa-router')

const router = new Router()
router.get('/', async (ctx) => {
    ctx.body = 'hello koa2';
})
const app = new Koa();

app.use(router.routes(), router.allowedMethods());
app.listen(3000, () => {
    console.info('sever listen on http://127.0.0.1:3000');
});