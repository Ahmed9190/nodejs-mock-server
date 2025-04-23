import express from "express";
import cors from "cors";

import invoiceRoutes from "../routes/invoiceRoutes.js";
import receiptRoutes from "../routes/receiptRoutes.js";
import salesReturnRoutes from "../routes/salesReturnRoutes.js";
import transferRequestRoutes from "../routes/transferRequestRoutes.js";
import productRoutes from "../routes/productRoutes.js";
import customerRoutes from "../routes/customerRoutes.js";
import warehouseRoutes from "../routes/warehouseRoutes.js";
import authenticateRoutes from "../routes/authenticateRoutes.js";
import componyRoutes from "../routes/componyRoutes.js";
import branchIdRoutes from "../routes/branchIdRoutes.js";
import userInfoRoutes from "../routes/userInfoRoutes.js";
import taxRoutes from "../routes/taxRoutes.js";
import configRoutes from "../routes/configRoutes.js";

import { generateResponse } from "../utils.js";
import { currencies } from "../data/currencies.js";

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
app.get("/Currency", (req, res) => res.json(generateResponse(currencies)));

app.use("/TokenAuth", authenticateRoutes);

app.use("/GetCompanyId", componyRoutes);
app.use("/GetBranchId", branchIdRoutes);
app.use("/GetUserInfo", userInfoRoutes);
app.use("/services/app/Tax/GetTaxByCompanyTask", taxRoutes);

app.use("/Config", configRoutes);

app.get("/services/app/Currency/GetCurrencyList", (req, res) => {
  res.json({
    result: {
      dropLists: currencies,
    },
    targetUrl: null,
    success: true,
    error: null,
    unAuthorizedRequest: false,
    __abp: true,
  });
});
app.get("/Company", (req, res) => {
  res.json({
    result: {
      id: 5,
      name: "مؤسسة ھدیل فیصل المنصوري للتجارة",
      vatNumber: "312185268800003",
      commercialNo: "1009015993",
      address: "8852 , صارم الدين العواد , 4863",
      logo: "https://almansoori.erp2030.com/files/company/W5BKOT2CD7.jpeg",
    },
    targetUrl: null,
    success: true,
    error: null,
    unAuthorizedRequest: false,
    __abp: true,
  });
});

app.listen(3000, () => console.log("Server running on http://localhost:3000"));
