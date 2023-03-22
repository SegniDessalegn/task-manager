<template lang="eng">
    <h1>
        Add Task
    </h1>
    <div class = "form">
    <form @submit.prevent = "handleSubmit">
        <div class = "inputs">
            <label for = "name">Task name</label>
            <input @input = "updateInput" type = "text" name = "name" id = "name" placeholder = "enter task name">
            
        </div>
        <div class = "inputs">
            <label for = "detail">Task detail</label>
            <input @input = "updateInput" type = "text" name = "detail" id = "detail" placeholder = "enter task detail">
        </div>
        <div v-if = "!valid" class = "invalid">Input cannot be empty</div>
        <button> ADD TASK </button>
    </form>
</div>
</template>
<script>
export default {
    data(){
        return {
            valid: true
        }
    },
    methods: {
        handleSubmit(e){
            if (e.target["0"].value && e.target["1"].value){
                this.$store.commit("UpdateTask", {name: e.target["0"].value, details: e.target["1"].value})
                this.$router.push({name: "home"})
            }
            else{
                this.valid = false
            }
        },
    updateInput(){
        this.valid = true
    }
    }
}
</script>
<style>
.form{
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
input{
    width: 50vw;
    display: block;
    margin: 10px;
    padding: 10px;
    border-width: 0px 0px 1px 0px;
}
input:focus{
    outline: none;
}
button{
    border-width: 0px;
    padding: 10px;
    cursor: pointer;
}
label{
    right: auto;
}
.inputs{
    display: flex;
    flex-direction: column;
    align-items: start;
    margin: 10px;
}
.invalid{
    color: red;
    margin: 10px
}
</style>