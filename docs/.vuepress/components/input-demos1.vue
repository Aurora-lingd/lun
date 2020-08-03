<template>
  <div>
      <w-input value="您好"></w-input>
      <w-input value="您好" readonly></w-input>
      <w-input value="您好" disabled></w-input>
      <w-input value="您好" error="错误"></w-input>
    </div>
</template>
<script>
  import Input from '../../../src/input'
  export default {
    components:{'w-input':Input},
  }
</script>
