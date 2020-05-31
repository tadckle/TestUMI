export default {
  treeShaking: true,
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    [
      "umi-plugin-react",
      {
        antd: true,
        dva: false,
        dynamicImport: false,
        title: "umi-sandbox-teplate",
        dll: false,
        routes: {
          exclude: [/components\//]
        }
      }
    ]
  ],
  minimizer: "uglifyjs"
};
