<template>
    <div>
      <layout-header></layout-header>
      <h1>Emotion_Classification開発中</h1>
    </div>
  </template>
  <script>
    export default {
      data(){
        return {
          src: '/images/chat.png',
          drawer:false,
          innerDrawer:false,
          direction:'ltr',
          form:{
            theme :'',
            content: ''
          },
          formLabelWidth:'80px',
          timer:null,
        };
      },
      method:{
        handleClose(done) {
          if (this.loading) {
            return;
          }
        },
        cancelForm() {
          this.loading = false;
          this.dialog = false;
          clearTimeout(this.timer);
        }
      }
    }
  </script>
  <style scoped>
  .block{
    margin: auto;
    width: 50%;
    border: 3px solid rgb(0, 0, 0);
    padding: 5px;
  }
  .drawer_footer{
    text-align: center;
    margin-top:5px;
  }
  .rawer_content{
    margin-top: 8px;
  }
  el-form.rawer_content{
    margin: 8px;
  }
  </style>