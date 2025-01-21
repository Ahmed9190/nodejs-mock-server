import express from "express";
import cors from "cors";

import shortenedInvoiceRoutes from "./routes/shortenedInvoiceRoutes.js";
import shortenedReceiptRoutes from "./routes/shortenedReceiptRoutes.js";
import shortenedSalesReturnRoutes from "./routes/shortenedSalesReturnRoutes.js";
import invoiceToPrintRoutes from "./routes/invoiceToPrintRoutes.js";
import receiptToPrintRoutes from "./routes/receiptToPrintRoutes.js";
import salesReturnToPrintRoutes from "./routes/salesReturnToPrintRoutes.js";
import transferRequestShortenedRoutes from "./routes/transferRequestShortenedRoutes.js";
import transferRequestRoutes from "./routes/transferRequestRoutes.js";
import productRoutes from "./routes/productRoutes.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/InvoiceShortened", shortenedInvoiceRoutes);
app.use("/ReceiptShortened", shortenedReceiptRoutes);
app.use("/SalesReturnShortened", shortenedSalesReturnRoutes);
app.use("/TransferRequestShortened", transferRequestShortenedRoutes);
app.use("/Product", productRoutes);

app.use("/InvoiceToPrint", invoiceToPrintRoutes);
app.use("/ReceiptToPrint", receiptToPrintRoutes);
app.use("/SalesReturnToPrint", salesReturnToPrintRoutes);
app.use("/TransferRequest", transferRequestRoutes);

app.listen(3000, () => console.log("Server running on http://localhost:3000"));
