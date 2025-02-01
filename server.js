import express from "express";
import cors from "cors";

import invoiceRoutes from "./routes/invoiceRoutes.js";
import receiptRoutes from "./routes/receiptRoutes.js";
import salesReturnRoutes from "./routes/salesReturnRoutes.js";
import transferRequestRoutes from "./routes/transferRequestRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import customerRoutes from "./routes/customerRoutes.js";
import warehouseRoutes from "./routes/warehouseRoutes.js";
import authenticateRoutes from "./routes/authenticateRoutes.js";
import taxRoutes from "./routes/taxRoutes.js";
import { generateResponse } from "./utils.js";
import { currencies } from "./data/currencies.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/Invoice", invoiceRoutes);
app.use("/Receipt", receiptRoutes);
app.use("/SalesReturn", salesReturnRoutes);
app.use("/TransferRequest", transferRequestRoutes);

app.use("/Product", productRoutes);
app.use("/Warehouse", warehouseRoutes);
app.use("/Customer", customerRoutes);

app.use("/TokenAuth/Authenticate", customerRoutes);

app.get("/Currency", (req, res) => res.json(generateResponse(currencies)))

app.use("/TokenAuth/Authenticate", authenticateRoutes)

app.use("/services/app/Tax/GetTaxByCompanyTask", taxRoutes)
app.listen(3000, () => console.log("Server running on http://localhost:3000"));
