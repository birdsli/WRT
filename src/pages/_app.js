import "babel-polyfill"
import 'antd/dist/antd.css';
import React from 'react'
// import '../style/global.scss'
const App=({ Component, pageProps }) => {
  return <Component {...pageProps} />;
  // return <div>22</div>
  
};

export default  App