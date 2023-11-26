import router from "./routes.js";

router.use("/", router);
router.use("/history", router);
router.use("/about", router);

export { router };
