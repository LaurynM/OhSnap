var expect = require("chai").expect;
var should = require("chai").should();
var multpily = require("../public/js/sample");

describe("Universe", function() {
    it("should be self-consistent", function() {
      expect(2).to.equal(2);
    });
  });
  
  describe("multpily", function() {
    it("should multiply two numbers", function() {
      expect(multiply(2,4)).to.equal(8);
    });
    it("should should throw error if not a number is inserted", function() {
      expect(multiply(2,"4")).to.throw(Error);
    });
  });
  

