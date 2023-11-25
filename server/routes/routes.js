app.get("/api", (request, result) => {
  result.json({
    message: "Hello from server",
  });
});
