import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  return res.json({
    result: {
      taxDtos: [
        {
          name: "الضريبة المضافة ",
          nameEn: "VAT 15%",
          percentage: 15.0,
          accountId: 175,
          purchaseAccountId: 175,
          isActive: true,
          isBarCode: false,
          companyId: 1,
          applyDate: "2020-07-01T00:00:00",
          closeDate: "2030-12-31T00:00:00",
          isDefault: false,
          id: 2,
        },
        {
          name: "بدون ضريبة",
          nameEn: "WITHOUT VAT",
          percentage: 0.0,
          accountId: 175,
          purchaseAccountId: null,
          isActive: true,
          isBarCode: false,
          companyId: 1,
          applyDate: "1900-01-01T00:00:00",
          closeDate: null,
          isDefault: false,
          id: 3,
        },
        {
          name: "ضريبة القيمة المضافة 5%",
          nameEn: "",
          percentage: 5.0,
          accountId: 814,
          purchaseAccountId: null,
          isActive: true,
          isBarCode: false,
          companyId: 1,
          applyDate: "2020-03-01T00:00:00",
          closeDate: "2020-06-21T00:00:00",
          isDefault: true,
          id: 8,
        },
      ],
    },
    targetUrl: null,
    success: true,
    error: null,
    unAuthorizedRequest: false,
    __abp: true,
  });
});
export default router;
