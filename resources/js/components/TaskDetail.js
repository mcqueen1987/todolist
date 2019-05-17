
const TaskDetail = {
    props: ['task'],
    data: function () {
        return {
            load: false,
            title: 'loading',
            content: 'loading',
            oriTask: {},
            newTask: {}
        }
    },
    methods: {
        saveInfo() {
            this.$store.dispatch('saveTask', this.newTask);
        },
        reset() {
            this.newTask = {...this.oriTask};
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

