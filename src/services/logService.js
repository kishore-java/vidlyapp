// import Raven from "raven-js";

function init(){

    // Raven.config( "https://1167b754b8aa4f5c92a0e61a5e9e0962@o1008974.ingest.sentry.io/5972964",{
    // release:1-0-0,
    // environment:'development-test',
    // // We recommend adjusting this value in production, or using tracesSampler
    // // for finer control
    
  }

function log(error){
    console.error(error)
    // Raven.captureException(error)
}

export default{
    init,
    log
}