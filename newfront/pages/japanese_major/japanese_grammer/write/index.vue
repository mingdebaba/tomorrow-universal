<template>
    <div style="margin:auto;">
    	<layout-header></layout-header>
      <nav>
        <ul>
          <li>
          <NuxtLink to="/japanese_major/japanese_grammer/check">文法修正</NuxtLink>
          </li>
          <li>
          <NuxtLink to="/japanese_major/japanese_grammer/write">作文</NuxtLink>
          </li>
          <li>
          <NuxtLink to="/japanese_major/japanese_grammer/complete">埋め込み</NuxtLink>
          </li>
        </ul>
      </nav>
      <NuxtChild />
    </div>
  </template>
  <script>
  export default {
      data(){
          return{
              givens:[{
                  value:'朝日',
                  label:'朝日'
              }],
              value1:'',
              input1: 'キーワード',
              output1:'朝日を浴びて車に光が反射する。',
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