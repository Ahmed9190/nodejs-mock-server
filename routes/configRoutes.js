import { Router } from "express";

const router = Router();

router.get("/GetApkUrl", (req, res) => {
  const mockApkUrl = "https://example.com/downloads/latest.apk";
  res.json({
    result: { data: mockApkUrl },
    targetUrl: null,
    success: true,
    error: null,
    unAuthorizedRequest: false,
    __abp: true,
  });
});

router.get("/GetAppVersion", (req, res) => {
  res.json({
    result: {
      data: {
        lastVersion: "1.0.1",
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
