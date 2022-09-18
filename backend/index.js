const Koa = require("koa");
const Router = require('koa-router')

const router = new Router()
router.get('/', async (ctx) => {
    ctx.body = {
        success: true,
        data: {
            msg: '🤣后端返回的数据'
        }
    }
})
const app = new Koa();

app.use(router.routes(), router.allowedMethods());
app.listen(3000, '10.3.0.191', () => {
    console.info('sever listen on http://10.3.0.191:3000');
});