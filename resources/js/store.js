import Vue from 'vue'
import Vuex from 'vuex'
import taskReq from "./common/Task";

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        messageType: '',
        dismissCountDown: 0, //dismiss countdown of alert window
        tasks: [],
        userId: USERID,
        userName: USERNAME,
        pageType: 'ALL',
        display: false
    },
    getters: {
        tasks: state => state.tasks,
        userId: state => state.userId,
        userName: state => state.userName,
        pageType: state => state.pageType,
        dismissCountDown: state => state.dismissCountDown,
        messageType: state => state.messageType
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
                this.commit('showMessage', 'success');
                state.tasks = state.tasks.map((item) => {
                    return item.id == task.id ? task : item;
                });
            }, () => {
                this.commit('showMessage', 'warning');
            });
        },
        showMessage: function (state, msgType, countDown = 1) {
            if (state.display) {
                state.dismissCountDown = countDown;
                state.messageType = msgType;
            }
        },
        dismissMessage: function (state) {
            state.dismissCountDown = 0;
            state.messageType = '';
            state.display = false;
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
        },
        changeDisplay: function (state, display) {
            state.display = display;
        }
    },
    actions: {
        refreshTasks(context) {
            context.commit('refresh');
        },
        saveTask(context, task) {
            this.commit("changeDisplay", true);
            context.commit('update', task);
        },
        dismissMessage(context) {
            context.commit('dismissMessage');
        }
    }
})