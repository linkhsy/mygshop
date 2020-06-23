import Axios from 'axios'

export default function ajax(url, data = {}, method = 'GET') {
    return new Promise((resolve, reject) => {
        let urlData = ''
        let promise = null
        if (method === 'GET') {
            Object.keys(data).forEach((key) => {
                urlData += key + '=' + data[key] + '&'
            })
            if (urlData) {
                urlData = urlData.substring(0, urlData.lastIndexOf('&'))
            }
            url = url + '?' + urlData
            promise = Axios.get(url)
        } else {
            promise = Axios.post(url, data)
        }
        promise.then((res, reject)=>{
            resolve(res.data) 
        }).catch((err)=>{
            reject(err)
        })
    })
}