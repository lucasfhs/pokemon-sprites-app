<template>
    <div class="search-bar-container">
        <div class="search-bar">
            <input type="text" name="" id="" v-model.trim="query" placeholder="Pikachu" @keydown.enter.stop="emitSearchQuery" >
            <button @click="emitSearchQuery"><i class='bx bx-search'></i></button>
        </div>
        
    </div>
</template>

<script>

export default {
    data() {
        return {
            query: ''
        }
    },
    methods: {
        emitSearchQuery(){
            this.$emit('searchSignal', this.query);
        }
    }
}

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

.search-bar {
    display: flex;
    justify-content: center;
    padding-top: 10px;
    text-align: center;
    width: 100%;
}

.search-bar input{
    padding-left: 8px;
    margin-left: 2px;
    outline: none;
    font-family: "Poppins", sans-serif;
    font-size: 36px;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 14px 28px, rgba(0, 0, 0, 0.15) 0px 10px 10px;
    max-width: 80%;
}
button {
    padding: 6px;
    font-size: 36px;
}

</style>