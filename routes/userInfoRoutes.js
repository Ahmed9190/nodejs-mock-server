import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  return res.json({
    result: {
      userDto: {
        userName: "Belal",
        name: "Belal",
        surname: "hBelal",
        emailAddress: "Belal@gmail.com",
        isActive: true,
        fullName: "Belal hBelal",
        lastLoginTime: null,
        roleNames: ["ADMIN"],
        personalImage: null,
        employeeId: null,
        company: '["1"]',
        branches: '["1"]',
        accountSecurity: "[]",
        salesDiscountRate: null,
        defaultCompany: null,
        isRequest: false,
        isSuperAdmin: false,
        userType: 1,
        warehouseId: 7,
        cashId: 2,
        bankId: 3,
        id: 97,
      },
    },
    targetUrl: null,
    success: true,
    error: null,
    unAuthorizedRequest: false,
    __abp: true,
  });
});
export default router;
