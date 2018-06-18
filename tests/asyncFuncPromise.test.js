const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

function someMadeUpFunc(boolVal, cb) {
    return new Promise(function(resolve) {
        setTimeout(function() {
            resolve(boolVal ? "You get a sweet :)" : "You get nothing!!")
        }, 0);
    })
}

describe.only("AsyncTestPromise", function() {
    it("should return `You get a sweet :)` if `true` is passed in", function() {
        return expect(someMadeUpFunc(true)).to.eventually.equal('You get a sweet :)');
    });

    it('should return `You get nothing!!` if `false` is passed in', function() {
        return expect(someMadeUpFunc(false)).to.eventually.equal('You get nothing!!');
    });
})