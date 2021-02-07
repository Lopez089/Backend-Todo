"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const index_1 = __importDefault(require("./routes/index"));
const bodyParser = require("body-parser");
const requestLogger_1 = __importDefault(require("./middleware/requestLogger"));
const app = express_1.default();
const PORT = process.env.PORT || 4000;
app.use(cors_1.default());
app.use(requestLogger_1.default);
app.use(bodyParser.json());
app.use(index_1.default);
const uri = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.ovufr.mongodb.net/${process.env.MONGO_DB}retryWrites=true&w=majority`;
const options = { useNewUrlParser: true, useUnifiedTopology: true };
mongoose_1.default.set("useFindAndModify", false);
mongoose_1.default
    .connect(uri, options)
    .then(() => {
    app.listen(PORT, () => {
        console.log(`server running on PORT ${PORT}`);
    });
})
    .catch((Error) => {
    throw Error;
});
