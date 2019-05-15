const utils = {
	getTaskById(tasks, taskId){
		return tasks.find(item => item.id == taskId);
	}
};
export default utils;
