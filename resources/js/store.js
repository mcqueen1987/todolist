import Vue from 'vue'
import Vuex from 'vuex'
import taskReq from "./common/task";

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		tasks : [],
		userId : USERID,
        userName : USERNAME,
        pageType : 'ALL'
	},
    getters:{
	    tasks: state => {
	        return state.tasks;
        },
        userId: state => {
            return state.userId;
        },
        userName: state => {
            return state.userName;
        },
        pageType: state => {
            return state.pageType;
        },
        getTaskById: (state, $id) => {
            return state.tasks.find(item => item.id === $id);
        },
    },
    mutations: {
        refresh: function (state) {
            taskReq.getTaskList((resp) => {
                state.tasks = resp.data.data
            });
        },
        setTasks: function (state, tasks) {
          state.tasks = tasks;
        },
        update: function (state, task) {
            taskReq.updateTask(task, () => {
                state.tasks = state.tasks.map((item) => {
                    return item.id == task.id ? task : item;
                })
            });
        },
        delete: function (state, task) {
            taskReq.deleteTask(task.id, () => {
                state.tasks = state.tasks.filter((item) => {
                    return item.id !== task.id;
                })
            })
        },
        add: function (state, title) {
            taskReq.createTask(title, () => {
                this.commit('refresh');
            })
        },
        updateType: function (state, type) {
            state.pageType = type;
        }
    },
    actions: {
        refreshTasks({commit}){
            axios.get('/api/user/' + USERID +'/task')
                .then(function (response) {
                    console.log(response);
                    commit('setTasks', response.data.data);
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    }
})