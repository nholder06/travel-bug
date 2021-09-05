const Koa = require("koa");
const BodyParser = require("koa-bodyparser");
const Router = require("koa-router");
const Logger = require("koa-logger");
const cors = require("koa-cors");
const serve = require("koa-static");
const mount = require("koa-mount");
const HttpStatus = require("http-status");

const app = new Koa();

const PORT = process.env.PORT || 3000;

app.use(BodyParser());
app.use(Logger());
app.use(cors());

const router = new Router();

router.get("/book", async (ctx, next) => {
  const books = [
    "Harry Potter",
    "Where the CrawDads Sing",
    "Start With Why",
    "Dare to Lead"
  ];
  ctx.status = HttpStatus.OK;
  ctx.body = books;
  await next();
});

app.use(router.routes()).use(router.allowedMethods());

app.listen(PORT, function() {
  console.log(
    "==> 🌎  Woohoo! Listening on port %s. Visit http://localhost:%s/",
    PORT,
    PORT
  );
});
