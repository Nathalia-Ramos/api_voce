import dotenv from "dotenv";
dotenv.config();

import app from "./server";

app.listen(process.env.PORT || 8081, () => {
	console.log(`Server is running on port ${process.env.PORT || 8081}`);
});
