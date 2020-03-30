<template lang="pug">
    div(class="w-list-item")
        slot
        
</template>

<style lang="sass" scoped>
.w-list.item
    display: flex
    flex-direction: row
    height: 100px
    width: 100%
    border: 1px solid grey
    border-radius: 3px
</style>
