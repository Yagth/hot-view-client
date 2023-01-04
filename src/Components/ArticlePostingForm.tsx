import React from "react";

// const injectFbSDKScript = () => {
//   (function (d, s, id) {
//     var js,
//       fjs = d.getElementsByTagName(s)[0];
//     if (d.getElementById(id)) {
//       return;
//     }
//     js = d.createElement(s);
//     js.id = id;
//     js.src =
//       "https://connect.facebook.net/en_US/sdk.js#version=v2.2&appId=739907943938114&xfbml=true&autoLogAppEvents=true";
//     fjs.parentNode.insertBefore(js, fjs);
//   })(document, "script", "facebook-jssdk");
// };

export const useInitFbSDK = () => {
  const [isInitialized, setIsInitialized] = React.useState(false);
  if (typeof window !== "undefined") {
    // injectFbSDKScript();
    window.fbAsyncInit = function () {
      FB.init({
        appId: "739907943938114",
        xfbml: true,
        version: "v15.0",
      });
      FB.AppEvents.logPageView();
    };

    (function (d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {
        return;
      }
      js = d.createElement(s);
      js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    })(document, "script", "facebook-jssdk");
  }

  // return isInitialized;
};

function ArticlePostingForm() {
  return <></>;
}

export default ArticlePostingForm;
