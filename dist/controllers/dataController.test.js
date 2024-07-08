"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const __1 = require("..");
const dataController_1 = __importDefault(require("./dataController"));
const axios_mock_adapter_1 = __importDefault(require("axios-mock-adapter"));
describe('getData Controller', () => {
    let mock;
    let req;
    let res;
    let jsonMock;
    let statusMock;
    let sendMock;
    beforeAll(() => {
        mock = new axios_mock_adapter_1.default(axios_1.default);
    });
    beforeEach(() => {
        req = {};
        jsonMock = jest.fn();
        statusMock = jest.fn().mockReturnThis();
        sendMock = jest.fn();
        res = {
            json: jsonMock,
            status: statusMock,
            send: sendMock,
        };
    });
    afterEach(() => {
        mock.reset();
    });
    afterAll(() => {
        mock.restore();
    });
    it('should return data when the API call is successful', () => __awaiter(void 0, void 0, void 0, function* () {
        const mockData = { key: 'value' };
        mock
            .onGet(`${__1.baseUrl}/api.xro/2.0/Reports/BalanceSheet`)
            .reply(200, mockData);
        yield (0, dataController_1.default)(req, res);
        expect(jsonMock).toHaveBeenCalledWith(mockData);
    }));
    it('should return an error when the API call fails', () => __awaiter(void 0, void 0, void 0, function* () {
        mock.onGet(`${__1.baseUrl}/api.xro/2.0/Reports/BalanceSheet`).reply(500);
        yield (0, dataController_1.default)(req, res);
        expect(statusMock).toHaveBeenCalledWith(500);
        expect(res.send).toHaveBeenCalledWith('Error calling the API');
    }));
});
