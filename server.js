import express from "express";
import cors from "cors";

import shortenedInvoiceRoutes from "./routes/shortenedInvoiceRoutes.js";
import shortenedReceiptRoutes from "./routes/shortenedReceiptRoutes.js";
import shortenedSalesReturnRoutes from "./routes/shortenedSalesReturnRoutes.js";
import invoiceToPrintRoutes from "./routes/invoiceToPrintRoutes.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/InvoiceShortened", shortenedInvoiceRoutes);
app.use("/ReceiptShortened", shortenedReceiptRoutes);
app.use("/SalesReturnShortened", shortenedSalesReturnRoutes);

app.use("/InvoiceToPrint", invoiceToPrintRoutes);

app.listen(3000, () => console.log("Server running on http://localhost:3000"));
