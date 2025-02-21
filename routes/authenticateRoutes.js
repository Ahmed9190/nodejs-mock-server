import { Router } from "express";

const router = Router();

router.post("/Authenticate", (req, res) => {
  return res.json({
    result: {
      accessToken:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6Ijk3IiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvbmFtZSI6IkJlbGFsIiwiQXNwTmV0LklkZW50aXR5LlNlY3VyaXR5U3RhbXAiOiJMV1ZPUVVWT0IzNDNGTEJKWUIzN1dJVUo3UTM1WVgyNSIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IkFkbWluIiwiaHR0cDovL3d3dy5hc3BuZXRib2lsZXJwbGF0ZS5jb20vaWRlbnRpdHkvY2xhaW1zL3RlbmFudElkIjoiMSIsInN1YiI6Ijk3IiwianRpIjoiMTI5ZTk4OGEtMTM4Ni00ODNjLTgzZTItZDY4OWJmZmY2YjBlIiwiaWF0IjoxNzQwMTcxNDM4LCJuYmYiOjE3NDAxNzE0MzgsImV4cCI6MTc0MDI1NzgzOCwiaXNzIjoiRXJwIiwiYXVkIjoiRXJwIn0.-EmsgrxdTkJTFSVOKdHR6AQb_qWMgLGgNWSI6KlRyJg",
      encryptedAccessToken:
        "wNYmO41/48SHNstaLVXxHCCre29BZQl1NhC6NM3R3rzpXtPQxVzH6jEzA/QhXFN5tu6Fk7pO53uppm1mVXMZgxbyRVz26dnepi/FyB6axBY+6gq1GL+uRQgoiFUCjRN2p8w6LevViwKlHyWZZJZO1DGVSjAi1m2U+og9pkHw9/TEnHTpT2ghDgfzAxCEJxSAS9IIYoj6slto+tGz5Thkll71an+0pEs7aUVrZsBXoIFoKFPgC+Je3peYMEP3CllBdkDKHFZHi/VdO6X0nM8UWW6EFClmJXsYuJcdm6KYzSD82C4dbYX3uoM6JCkXPlmkFcLqC1C86Cgk4G9KRMaZcIh6al1cERsuJHNuULp1yW2+d8jMeyKdtYKcQ+nz/i4ZCHXUD+sp2MnXZ6ksatDS0bVT9KMkhDI1p8XUg84Ulau1xhxFbnRwDGaaGqJLdghrSGE84jiwBCkVFf1QXQhCAWoGWpm1n6XSHLHG9UtZKpJ9uZaEZNKfCXKdhMG97d5ptEAvx9C3aA5jDFzoJ7ULrNIy4f6d1ID7ZkYpij0EoWgFFyJSxUrYVZjzZgtXKjLd+C0BxRsel8yW8gYrwK/b9i1a7bLnHVC3wcPDC6CAHrYwOABK4Y8OlKfXwqmUC64vfcqOnh8oW0mYlXrlk/6vkOBD3Qlx87pmDhITb64qEzT90JgTxONpvpoyw0g78Eq4FpEYq+Fcy7Su9LLT02535w+PzvRH2D95mHV1pOfUeEzYb151UvdPtLuXe1VTUcRFakhxpGolwjfK1kWd5lI7leSa/CkE0KhdXtnfpOVmvUBVubbvFjadbvDF2lSTxENvp+Ko4xgzL/N3Vel7T+Zznt4dYimxOeBEzCczdBQSmTtZJiuBfoMExxFyCGPJxo6FNF+0g1611NenZZVJaUweCKTxRL0H3fqDvhRbZ+qRZ0JdzDM4njtXf+X43AjiWrtWdjgLESSQIGSqMQR17aqSeg==",
      expireInSeconds: 86400,
      userId: 97,
    },
    targetUrl: null,
    success: true,
    error: null,
    unAuthorizedRequest: false,
    __abp: true,
  });
});
export default router;
