exports.getErr = (err = 'Internal Server Error', errCode = 500) => {
    return {
        msg: err,
        code: errCode
    }
}

exports.getResult = (result) => {
    return {
        code: 0,
        msg: '',
        data: result
    }
}

exports.asyncHandler = (handler) => {
    return async (req, res, next) => {
        try {
            const result = await handler(req, res, next)
            res.send(exports.getResult(result))
        } catch (err) {
            next(err)
        }
    }
}