import {List} from 'immutable'

export const OPTIONS = List.of(1, 2, 3, 5, 8, 13, 21)

const SERVER_OPTIONS = {
    network: 'http://192.168.1.89:8027',
    local: 'http://localhost:8027',
    remote: 'https://ephtimate.herokuapp.com/:8027'
}

export const SERVER = SERVER_OPTIONS.network
