<template>
  <div style="border-top: 1px #e1e4e8 solid !important;padding: 45px 0px 45px 0px;">
    <el-row>
      <el-col :span="10">
        <div>©2019 AnyMoe&emsp;&emsp;</div>
      </el-col>
      <el-col :span="4">
        <div style="text-align: center;font-size: 18px">
          <i class="el-icon-location-outline"></i>
          {{location}}
        </div>
      </el-col>
      <el-col :span="10">
        <div style="float: right;">
          <a href="https://github.com" target="_blank">GitHub</a>&emsp;&emsp;
          Power by <a href="https://github.com/AnyMoe/MoeBlog" target="_blank">MoeBlog</a>&emsp;&emsp;
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      location: "Earth"
    };
  },
  methods: {},
  beforeMount() {
  }
};
</script>