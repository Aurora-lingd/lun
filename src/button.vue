<template>
  <button class="w-button"
          :class="{[`icon-${iconPosition}`]:true}"
          @click="$emit('click')">
    <w-icon v-if="icon && !loading" :name="icon" class="icon" ></w-icon>
    <w-icon class="loading icon" v-if="loading" name="loading"></w-icon>
    <div class="content">
      <slot ></slot>
    </div>
  </button>
</template>
<script>
  import Icon from './icon'
  export default {
    name:'WeiButton',
    components:{
      'w-icon':Icon
    },
    props:{
      icon:{},
      loading:{
        type:Boolean,
        default: false
      },
      iconPosition:{
        type:String,
        default:'left',
        validator(value){
         return value === 'left' || value === 'right'
        }
      }
    }
  }
</script>
<style lang="scss" scoped>
  $font-size:14px;
  $button-height:32px;
  $button-bg:white;
  $button-active-bg:#eee;
  $border-radius:4px;
  $color:#333;
  $border-color:#999;
  $border-color-hover:#666;
  @keyframes  spin{
    0%{transform: rotate(0deg)}
    100%{transform: rotate(360deg)}
  }
  .w-button{
    font-size: $font-size;
    height: $button-height;
    padding: 0 1em;
    border-radius: $border-radius;
    border: 1px solid $border-color;
    background: $button-bg;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    vertical-align: middle;
    &:not(:disabled){
      &:hover {
        border-color: $border-color-hover;
      }
      &:active{
        background-color:$button-active-bg ;
      }
      &:focus{
        outline: none;
      }
    }
    &[disabled]{
      border-color: #cfcdcd;
      cursor: not-allowed;
    }
    >.icon{
      order: 1;
      margin-right: .1em;
    }
    >.content{
      order: 2;
    }
    &.icon-right{
      >.icon{
        order: 2;
        margin-left: .1em;
        margin-right: 0;
      }
      >.content{
        order: 1;
      }
    }
    .loading{
      animation:spin 1s infinite linear;
    }
  }
</style>