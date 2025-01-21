import express from "express";
import cors from "cors";

import invoiceRoutes from "./routes/invoiceRoutes.js";
import receiptRoutes from "./routes/receiptRoutes.js";
import salesReturnRoutes from "./routes/salesReturnRoutes.js";
import transferRequestRoutes from "./routes/transferRequestRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import customerRoutes from "./routes/customerRoutes.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/Invoice", invoiceRoutes);
app.use("/Receipt", receiptRoutes);
app.use("/SalesReturn", salesReturnRoutes);
app.use("/TransferRequest", transferRequestRoutes);

app.use("/Product", productRoutes);
app.use("/Customer", customerRoutes);

app.listen(3000, () => console.log("Server running on http://localhost:3000"));
