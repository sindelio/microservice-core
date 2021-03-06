function notFoundHandler(req, res, _next) {
  res.status(404).json({
    success: false,
    data: null,
    error: {
      statusCode: 404,
      message: 'This endpoint is not available',
    },
  });
}

export default notFoundHandler;
