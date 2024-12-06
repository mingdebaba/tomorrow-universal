<template>
    <div>
      <layout-header></layout-header>
      <h1>「ドラマシャドーイング」開発中</h1>          
    </div>
  </template>
  <script>
  export default {
      data(){
          return{
            drawer:false,
            direction:'ltr',
            innerDrawer:false,
            form:{
              theme :'',
              content: ''
            },
            formLabelWidth:'80px',
            timer:null,
            }
      },
      method:{
      handleClose(done){
        if (this.loading){
          return;
        }
      },
      cancleForm(){
        this.loading = false;
        this.dialog = false;
        clearTimeout(this.timer);
      }
    }
  }
  </script>
  <style>
  
  </style>