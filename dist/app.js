"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var movieRouter_1 = __importDefault(require("./routes/movieRouter"));
var celebrityRouter_1 = __importDefault(require("./routes/celebrityRouter"));
var cors_1 = __importDefault(require("cors"));
var app = (0, express_1.default)();
var port = process.env.PORT;
app.use(express_1.default.json());
app.use((0, cors_1.default)({
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    allowedHeaders: "Origin, X-Requested-With, Content-Type, Accept, Authorization"
}));
app.use('/celebrity', celebrityRouter_1.default);
app.use('/movies', movieRouter_1.default);
app.listen(port, function () {
    console.log("server started on port : ".concat(port));
});
