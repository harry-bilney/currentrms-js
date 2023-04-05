const axios = require('axios')
const Response = require('./Response')

class rms {
    constructor(options) {
        this.subdomain = options.subdomain,
        this.apiKey = options.apiKey
        this.endpoint = 'https://api.current-rms.com/api/v1'
    }
    connect() {
        let options = {
            method: 'get',
            url: `${this.endpoint}/members/1`,
            headers: {
                'x-subdomain': this.subdomain,
                'x-auth-token': this.apiKey,
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
            
        }
        return new Promise((resolve, reject) => {
            axios(options)
            .then(response => {
                resolve(response.data)
                Response('200', 'Connected to Current successfully!')
            })
            .catch(error => {
                reject(error)
                console.error(error)
            })
        })
    }
    list(type, modifier) {
        let options = {
            method: 'get',
            url: `${this.endpoint}/${type}`,
            headers: {
                'x-subdomain': this.subdomain,
                'x-auth-token': this.apiKey,
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
            
        }
        return new Promise((resolve, reject) => {
            axios(options)
           .then(response => {
                resolve(response.data)
                console.log(response.data)
            })
           .catch(error => {
                reject(error)
                console.error(error)
            })
        })
    }
}

let current = '' // The current rms instance

function connect(options) {
    current = new rms(options)

    current.connect()
}

function list(type, modifier='') {
    current.list(type, modifier)
}

module.exports = {
    connect, list,  rms
}