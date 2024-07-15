import app from "./src/api/app.js";

const port = process.env.PORT || 3333;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
