import chalk from "chalk";

import { app } from "./src/app.js";
import connectDB from "./src/configs/database.js";

// App Configurations
await connectDB()
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(
    chalk.bgCyanBright(`app running on http://localhost:${process.env.PORT}`),
  );
});
