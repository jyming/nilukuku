import deepClone from './deepClone'
import deepMerge from './deepMerge'
import systemInfo from './systemInfo'

const utils = {
    deepClone,
    deepMerge,
    systemInfo
}

const install = Vue => {
    Vue.config.globalProperties.$utils = utils
}

export default {
    install
}