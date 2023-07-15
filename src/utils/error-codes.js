const CLIENT_ERRORS = Object.freeze({
    BAD_REQUEST : 400,
    UNAUTHORISED : 401,
    NOT_FOUND : 404
})

const SERVER_ERROR = Object.freeze({
    INTERNAL_SERVER_ERROR : 500,
    NOT_IMPLEMENTED : 501
})

const SUCESS_CODES = Object.freeze({
    CREATED : 201,
    OK : 200
})

module.exports = {
    CLIENT_ERRORS,
    SERVER_ERROR,
    SUCESS_CODES
}