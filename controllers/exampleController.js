class exampleController {
  hello(req, res) {
    return res.send("Hello from express server !!");
  }
}

module.exports = new exampleController();
