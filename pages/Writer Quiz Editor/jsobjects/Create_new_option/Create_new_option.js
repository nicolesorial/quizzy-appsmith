export default {
	async createOption() {
		await Create_new_answer_option.run()
		await Get_question_options.run()
	}
}