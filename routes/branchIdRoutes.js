import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  return res.json({
    "result": {
      "branchId": 1
    },
    "targetUrl": null,
    "success": true,
    "error": null,
    "unAuthorizedRequest": false,
    "__abp": true
  })
})
export default router;