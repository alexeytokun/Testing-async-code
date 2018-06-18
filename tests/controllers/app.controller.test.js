const chai = require("chai");
const expect = chai.expect;
const sinon = require("sinon");
const indexPage = require("../../controllers/app.controller.js");

describe("AppController", function() {
  describe("getIndexPage", function() {
    it("should send hey when user is logged in", function() {
        let user = {
            isLoggedIn: function(){}
        }

        const isLoggedInStub = sinon.stub(user, 'isLoggedIn').returns(true);

        let req = {
            user: user
        }

        let res = {
            send: sinon.spy()
        }

        indexPage.getIndexPage(req, res);
      
        expect(res.send.calledOnce).to.be.true;
        expect(res.send.firstCall.args[0]).to.equal("Hey");
        expect(isLoggedInStub.calledOnce).to.be.true;
    });

    it('should send something else when user is not logged in', function() {
        let user = {
            isLoggedIn: function(){}
        }

        const isLoggedInStub = sinon.stub(user, 'isLoggedIn').returns(false);
        let req = {
            user: user
        }

        let res = {
            send: sinon.spy()
        }

        indexPage.getIndexPage(req, res);

        expect(res.send.calledOnce).to.be.true;
        expect(res.send.firstCall.args[0]).to.equal('Ooops. You need to log in to access this page');
        expect(isLoggedInStub.calledOnce).to.be.true;
    });

    it("should send hey when user is logged in (mock)", function() {
        let user = {
            isLoggedIn: function(){}
        }

        const isLoggedInStub = sinon.stub(user, 'isLoggedIn').returns(true);
        let req = {
            user: user
        }

        let res = {
            send: function() {}
        }

        const mock = sinon.mock(res);
        mock.expects('send').once().withExactArgs('Hey');

        indexPage.getIndexPage(req, res);
        expect(isLoggedInStub.calledOnce).to.be.true;

        mock.verify();
    })
  });
});


