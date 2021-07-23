import deepClone from './deepClone'
import deepMerge from './deepMerge'

const utils = {
    deepClone,
    deepMerge
}

const install = Vue => {
    Vue.config.globalProperties.$utils = utils
}

export default {
    install
}