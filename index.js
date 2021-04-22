let app = new Vue({
    el: '#app',
    data:{
        todos: [],
        content: '',
        cacheValue: '',
        cacheTodo: {}
    },
    methods: {
        insert: function(){
            let idset = Date.now();
            let content = this.content.trim();
            if(!content){
                return
            }
            this.todos.push({
                id: idset,
                value: content,
                complete: false
            })
            this.content = '';
        },
        remove: function(target){
            this.todos.forEach((el, index)=>{
                if(el.id === target){
                    this.todos.splice(index, 1);
                }
            })
        },
        adjust: function(item){
            this.cacheTodo = item;
            this.cacheValue = item.value;
        },
        done: function(item){
            item.value = this.cacheValue;
            this.cacheTodo = {};
            this.cacheValue = '';
        },
        cancel: function(){
            this.cacheTodo = {};
            this.cacheValue = '';
        }
    },
    computed: {
        unfinish: function(){
            let total = this.todos.filter((el)=>{
                return !el.complete
            });
            return total.length == 0 ? (this.todos.length == 0 ? '' : 'DONE') : `${total.length} subject${total.length > 1 ? 's' : ''} unfinish`
        }
    }
})