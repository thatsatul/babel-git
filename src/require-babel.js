require("@babel/core").transform("code", {
  plugins: ["@babel/plugin-transform-arrow-functions"]
});

const testFun = () => {
  return 123;
}

testFun();
