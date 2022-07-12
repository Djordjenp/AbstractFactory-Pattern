
const createProductionLogger = () => ({
    warn(msg){
        console.warn(msg)
    },
    error(msg){
        console.error(msg)
    }
})

const createDevelopmentLogger = () => ({
    info(msg){
        console.log(msg)
    },
    debug(msg){
        console.debug(msg)
    },
    warn(msg){
        console.warn(msg)
    },
    error(msg){
        console.error(msg)
    }
})

const createLogger = (type) => {
    switch (type){
        case "production":
            return createProductionLogger()
        case "development":
            return createDevelopmentLogger()
    }
}

export default createLogger;