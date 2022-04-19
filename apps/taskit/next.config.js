// eslint-disable-next-line @typescript-eslint/no-var-requires
const withNx = require("@nrwl/next/plugins/with-nx");

/**
 * @type {import('@nrwl/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  
  env:{
    AUTH0_SECRET:'abf4933e57598261a25fcdaed5b558902609152b46918e8d22d85ae529df535a',
    AUTH0_BASE_URL:'http://localhost:3000',
    AUTH0_ISSUER_BASE_URL:'dev-37bhdipf.eu.auth0.com',
    AUTH0_CLIENT_ID:'jYa8WJnjSUifoarWy1iFWaiBe8N4Ye4g',
    AUTH0_CLIENT_SECRET:'UwdCRz2Z_Z2Bs1pzY5-fYnqVA5Jx8OOVkMQeiiW_694Hbmw-bF1AAWW9tzC6aCqK'
  },
  
  nx: {
    // Set this to true if you would like to to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false,
  },

};

module.exports = withNx(nextConfig);
