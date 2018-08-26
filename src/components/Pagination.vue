<template>
    <div>
        <nav aria-label="Page navigation example" >
            <ul class="pagination">
                <li 
                    class="page-item" 
                     :class="{ 'active': numOfPage === page }"
                    v-for="page in numberOfPages" :key="page">
                    <a class="page-link" @click="selectPage(page)" >{{ page }}</a>
                </li>
            </ul>
        </nav>
    </div>
    
</template>

<script>
export default {
    props: {
        numOfPage: {
            type: Number
        },

        numberOfPages: {
            type: Number
        }
    },

    methods: {
        selectPage(page){
            this.$emit('selectPage', page)
        }
    }
}
</script>

