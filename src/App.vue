<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<script>
function onVisibilityChanged(event) {
  var hidden = event.target.webkitHidden;
  var title = document.title;
  var hide = {
      title:'(●—●)喔哟，崩溃啦！'
  }
  if (hidden){
    document.title = hide.title
  }else{
    document.title = title
  }
    
}
    import { mapGetters } from 'vuex'
    export default {
        name: 'App',
        computed: {
            ...mapGetters([
                'githubUsername',
                'htmlTitle'
            ])
        },
        created() {
            this.$store.dispatch("Init")
            this.$store.dispatch("GetInfo")
            this.$setTitle(this.$route.meta.title)
            this.$setFavicon()
            let windowSize = this.$util.getWindowSize()
            let pathArr = this.$route.path.split("/")
            this.$router.push("/")
        },
        mounted(){
            let originalTitle = document.title;
            let hide = {
                title:'(●—●)喔哟，崩溃啦！',
                favicon: '/static/failure.ico',
                wait_text: '(/≧▽≦/)咦！又好了！'
            }
            let hiddenProperty = 'hidden' in document ? 'hidden' :    
                'webkitHidden' in document ? 'webkitHidden' :    
                'mozHidden' in document ? 'mozHidden' :    
                null;
            let visibilityChangeEvent = hiddenProperty.replace(/hidden/i, 'visibilitychange');
            document.addEventListener(visibilityChangeEvent, ()=>{
            if (document[hiddenProperty]) {
                    this.$setFavicon(hide.favicon)    
                    document.title = hide.title
                }else{
                    this.$setFavicon()
                    document.title = hide.wait_text
                    setTimeout(()=>{document.title = originalTitle}
                    ,2000)
                }
            });
        }
    }
</script>