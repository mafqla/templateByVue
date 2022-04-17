import request from '../utils/request'

export function getUsers(data = {}){
    return request({
        method: 'GET',
        url: '/users',
        data,
    })
}