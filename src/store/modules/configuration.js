
const configuration = {
    state: {
        githubUsername: "",
        blogTitle: "",
        blogDescribe: "",
        htmlTitle: "",
        fontColor: "",
        useBackgroundImage: false,
        backgroundColorLeft: "",
        backgroundColorRight: "",
        audioUrl: "",
        mini: false,
        audioAutoPlay:false,
        webSites:[]
    },

    mutations: {
        SET_CONFIGURATION: (state, configuration) => {
            state.githubUsername = configuration["githubUsername"] || "GitHub-Laziji"

            state.blogTitle = configuration["blogTitle"] || state.githubUsername

            state.blogDescribe = configuration["blogDescribe"] || `欢迎来到${state.githubUsername}的个人博客。`

            state.htmlTitle = configuration["htmlTitle"] || `${state.githubUsername}的博客`

            state.fontColor = configuration["fontColor"] || "#ffffff"
  
            state.useBackgroundImage = configuration["useBackgroundImage"] || false
 
            state.backgroundColorLeft = configuration["backgroundColorLeft"] || "#155799"
    
            state.backgroundColorRight = configuration["backgroundColorRight"] || "#159957"

            state.audioUrl = configuration["audioUrl"] || ""

            state.mini = configuration["mini"] || false

            state.audioAutoPlay = configuration["audioAutoPlay"] || false

            state.disqusShortname = configuration["disqusShortname"] || false

            state.webSites = configuration["webSites"] || []
        }
    },

    actions: {
        LocalReload({ commit }, configuration) {
            commit('SET_CONFIGURATION', configuration)
        },
        Init({ commit }) {
            let xmlhttp
            if (window.XMLHttpRequest) {
                xmlhttp = new XMLHttpRequest()
            } else {
                xmlhttp = new ActiveXObject("Microsoft.XMLHTTP")
            }
            xmlhttp.open("GET", "../../../static/configuration.json", false)
            xmlhttp.send()
            let configuration = JSON.parse(xmlhttp.responseText)
            commit('SET_CONFIGURATION', configuration)
        }
    }
}

export default configuration