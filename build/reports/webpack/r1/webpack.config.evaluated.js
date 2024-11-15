{
  mode: 'production',
  resolve: {
    modules: [
      'C:\\Users\\MacLay\\AppData\\Local\\Temp\\r1\\build\\js\\packages\\r1\\kotlin-dce',
      'node_modules'
    ]
  },
  plugins: [
    TeamCityErrorPlugin {}
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          'source-map-loader'
        ],
        enforce: 'pre'
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
            options: {}
          },
          {
            loader: 'css-loader',
            options: {}
          }
        ]
      }
    ]
  },
  entry: {
    main: [
      'C:\\Users\\MacLay\\AppData\\Local\\Temp\\r1\\build\\js\\packages\\r1\\kotlin-dce\\r1.js'
    ]
  },
  output: {
    path: 'C:\\Users\\MacLay\\AppData\\Local\\Temp\\r1\\build\\distributions',
    filename: [Function: filename],
    library: 'r1',
    libraryTarget: 'umd',
    globalObject: 'this'
  },
  devtool: 'source-map',
  ignoreWarnings: [
    /Failed to parse source map/
  ],
  devServer: {
    open: true,
    static: [
      'C:\\Users\\MacLay\\AppData\\Local\\Temp\\r1\\build\\processedResources\\js\\main'
    ]
  },
  stats: {
    warnings: false,
    errors: false
  }
}