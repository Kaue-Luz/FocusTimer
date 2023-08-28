import state from './state.js'

export function toggleRunning () {
    state.isRunning = document.documentElement.classList.toggle('running')
}

export function set () {
    state.isRunning = false
    document.documentElement.classList.remove('runing')
}

export function toggleMusic(){
    state.isMute = document.documentElement.classList.toggle('music-on')
}