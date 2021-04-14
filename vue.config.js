module.exports = { 
  publicPath: './',
    devServer: {
      proxy: {
        "/data": {
          target: "//restcountries.eu/",
          ws: true,
          changeOrigin: true,
          pathRewrite: {
            "^/data": "",
          },
        },
      },
    },

 


  };