<template>
  <div style="min-height: 600px" v-loading="loading">
    <el-card shadow="never" style="min-height: 400px" v-if="blog.id">
      <div slot="header">
        <span>{{blog.title}}</span>
        <br>
        <div style="font-size: 0.9rem;line-height: 1.5;color: #606c71;">最后更新于 {{blog.updateTime}}</div>
      </div>
      <div v-html="blog.content" class="markdown-body" style="padding-top: 20px"></div>
    </el-card>
    <el-card
      shadow="never"
      style="margin-bottom: 20px;padding: 20px 0px 20px 0px;text-align: center"
      v-if="!blog.id"
    >
      <font style="font-size: 30px;color:#dddddd ">
        <b>没有更新 ╮(๑•́ ₃•̀๑)╭</b>
      </font>
    </el-card>
    <el-card
      v-if="false != disqusShortname"
      shadow="hover"
      style="border-top: 0px solid #ffffff00;"
    >
      <div class="comments">
        <vue-disqus :shortname="disqusShortname" :identifier="blog.id" :title="blog.title"></vue-disqus>
      </div>
    </el-card>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import GistApi from "@/api/gist";
export default {
  data() {
    return {
      query: {
        page: 1
      },
      loading: false,
      blog: {
        id: "",
        title: "",
        content: "",
        description: "",
        createTime: "",
        updateTime: ""
      }
    };
  },
  computed: {
    ...mapGetters(["disqusShortname"])
  },
  mounted() {
    this.loading = true;
    GistApi.list(this.query).then(response => {
      let result = response.data;
      if (!result || result.length == 0) {
        this.loading = false;
        return;
      }
      for (var i = 0; i < result.length; i++) {
        if (result[i].public) break;
        if (i == result.length - 1) {
          this.loading = false;
          return;
        }
      }
      for (let key in result[i].files) {
        this.blog.id = result[i]["id"];
        break;
      }
      GistApi.single(this.blog.id)
        .then(response => {
          let result = response.data;
          for (let key in result.files) {
            this.blog["title"] = key;
            this.blog["content"] = this.$markdown(result.files[key]["content"]);
            this.blog["description"] = result["description"];
            this.blog["createTime"] = this.$util.utcToLocal(
              result["created_at"]
            );
            this.blog["updateTime"] = this.$util.utcToLocal(
              result["updated_at"]
            );
            break;
          }
        })
        .then(() => (this.loading = false));
    });
  }
};
</script>