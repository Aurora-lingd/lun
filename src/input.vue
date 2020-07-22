<template>
  <div class="wrapper" :class="{error}">
    <input type="text"
           :value="value"
           :disabled="disable"
           :readonly="readonly"
           @change="$emit('change',$event)"
           @input="$emit('input',$event)"
           @focus="$emit('focus',$event)"
           @blur="$emit('blur',$event)"
    >
    <template v-if="error">
      <Icon name="error" class="icon-error"></Icon>
      <span class="message-error">{{error}}</span>
    </template>
  </div>
</template>
<script>
  import Icon from './icon'
  export default {
    components:{Icon},
    name:'WeiInput',
    props:{
      value:{
        type:String
      },
      disable:{
        type:Boolean,
        default:false
      },
      readonly:{
        type:Boolean,
        default: false
      },
      error:{
        type:String,
      }
    }
  }
</script>
<style lang="scss" scoped>
  $height:32px;
  $border-color: #999;
  $border-color-hover: #666;
  $border-radius: 4px;
  $font-size: 14px;
  $box-shadow-color:rgba(0,0,0,0.5);
  $red:#f1453d;
  .wrapper{
    font-size: $font-size;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    > :not(:last-child){
      margin-right:.5em;
    }
    > input{
      height: $height;
      border: 1px solid $border-color;
      border-radius: $border-radius;
      padding: 0 8px;
      &:hover{
        border-color:$border-color-hover ;
      }
      &:focus{
        box-shadow: inset 0 1px 3px $box-shadow-color;
        outline: none;
      }
      &[disabled],&[readonly]{
        border-color: #aeaeae;
        color: #aeaeae;
        cursor:not-allowed ;
      }
    }
    &.error{
      >input{
        border-color: $red;
      }
    }
    .icon-error{
      fill:$red;
    }
    .message-error{
      color: $red;
    }
  }
</style>