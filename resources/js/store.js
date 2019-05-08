import Vue from 'vue'
import Vuex from 'vuex'
import taskReq from "./common/task";

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		tasks : [],
		userId : USERID
	},
    getters:{
	    tasks: state => {
	        return state.tasks;
        }
    },
    mutations : {
        refresh: function(state){
            taskReq.getTaskList((resp)=>{
                state.tasks = resp.data.data
            });
        },
        update: function (state, task) {
            taskReq.updateTask(task, ()=> {
                state.tasks = state.tasks.map( (item) => {
                    return item.id == task.id ? task : item;
                })
            });
        },
        delete: function(state, task) {
            taskReq.deleteTask(task.id, ()=>{
                state.tasks = state.tasks.filter( (item)=>{
                    return item.id !== task.id;
                })
            })
        },
        add: function(state, title){
            taskReq.createTask(title, () => {
                this.commit('refresh');
            })
        }
	}
})