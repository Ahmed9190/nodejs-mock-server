export function generateResponse(result) {
  return {
    result: { data: result },
    targetUrl: null,
    success: true,
    error: null,
    unAuthorizedRequest: false,
    __abp: true,
  };
}

export function generatePageResponse(data, page, perPage, count) {
  return {
    result: {
      data: data,
      page: +page,
      perPage: +perPage,
      count: count,
    },
    targetUrl: null,
    success: true,
    error: null,
    unAuthorizedRequest: false,
    __abp: true,
  };
}
