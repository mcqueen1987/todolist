import { BAlert } from 'bootstrap-vue/es/components'

const TaskDetail = {
    props: ['task'],
    data: function () {
        return {
            load: false,
            title: 'loading',
            content: 'loading',
            dismissSecs: 5,
            dismissCountDown: 0,
            oriTask: {},
            newTask: {}
        }
    },
    component: {'b-alert': BAlert},
    methods: {
        saveInfo() {
            this.$store.dispatch('saveTask', this.newTask);
            this.dismissCountDown = this.dismissSecs;
        },
        reset() {
            this.newTask = {...this.oriTask};
        },
        countDownChanged(dismissCountDown) {
            this.dismissCountDown = dismissCountDown
        }
    },
    computed: {
        taskTitle: {
            get() {
                if (!this.load && this.task.title) {
                    this.load = true;
                    this.oriTask = {...this.task};
                    this.newTask = {...this.task};
                }
                return this.newTask.title;
            },
            set(v) {
                this.newTask.title = v;
            }
        },
        taskContent: {
            get(){
                return this.newTask.task_content;
            },
            set(v) {
                this.newTask.task_content = v;
            }
        }
    },
    template: `

        <div class="detailpage">
            <div>
                <b-alert :show="dismissCountDown" dismissible variant="warning"
                  @dismissed="dismissCountDown=0"
                  @dismiss-count-down="countDownChanged">
                  save data succeed! This alert will dismiss after {{ dismissCountDown }} seconds...
                </b-alert>
            </div>
              
          
            <div class="title item">
                <div class="left-item">Title</div>
                <input v-model="taskTitle" class="right-item" contenteditable="true">
            </div>
            <div class="content item">
                <div class="left-item">Contents</div>
                <textarea v-model="taskContent" class="right-item"></textarea>
            </div>
            <div class="button item">                
                <div class="cancel" @click="reset()"   > reset </div>
                <div class="submit" @click="saveInfo()" > submit </div>
            </div>
        </div>
	`
};

export default TaskDetail;

