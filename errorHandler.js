module.exports = function Response(code, message='') {
    if (message == '') {
        if (code == '200') {
            console.log(`✅ The request completed successfully. (${code})`)
        } else if (code == '204') {
            console.log(`❓ The server successfully processed the request, but is not returning any content. (${code})`)
        } else if (code == '400') {
            console.log(`❌ The server encountered an invalid request. (${code})`)
        } else if (code == '401') {
            console.log(`❌ The server requires authentication. (${code})`)
        } else if (code == '404') {
            console.log(`❌ The server cannot find the requested resource. (${code})`)
        } else if (code == '422') {
            console.log(`❌ The server encountered an unprocessable entity. (${code})`)
        }
    } else if (message != '') {
        if (code == '200') {
            console.log(`✅ ${message} (${code})`)
        } else if (code == '204') {
            console.log(`❓ ${message} (${code})`)
        } else if (code == '400') {
            console.log(`❌ ${message} (${code})`)
        } else if (code == '401') {
            console.log(`❌ ${message} (${code})`)
        } else if (code == '404') {
            console.log(`❌ ${message} (${code})`)
        } else if (code == '422') {
            console.log(`❌ ${message} (${code})`)
        }
    }
    
}