module.exports = {
    devServer : {
        public:'0.0.0.0:8080',
        hot:true,
        disableHostCheck:true,
        /* proxy : {
            '/api2' : {
                target : 'http://localhost:3000',
                changeOrigin : true
            },
            '/api' : {
                target : 'http://39.97.33.178',
                changeOrigin : true
            }
        } */
    }
}