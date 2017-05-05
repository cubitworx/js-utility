"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./index");
describe('IsBlank', function () {
    it('should check if input is undefined', function () {
        expect(index_1.IsBlank(undefined)).toEqual(true);
    });
    it('should check if input is null', function () {
        expect(index_1.IsBlank(null)).toEqual(true);
    });
    it('should check if input is null', function () {
        expect(index_1.IsBlank(void 0)).toEqual(true);
    });
    it('should check if input is null', function () {
        expect(index_1.IsBlank(NaN)).toEqual(false);
    });
    it('should check if input is empty', function () {
        expect(index_1.IsBlank('', true)).toEqual(true);
    });
    it('should check if input is empty', function () {
        expect(index_1.IsBlank('')).toEqual(false);
    });
});
//# sourceMappingURL=index.spec.js.map