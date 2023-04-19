export default {
	async onSelectQuestion() {
		await Get_quiz_questions.run()

		if (QuestionsTable.selectedRowIndex > -1) {
			await storeValue("selectedId", QuestionsTable.selectedRow.id)
			console.log('selected id ' + appsmith.store.selectedId)
			await Get_question_options.run()
		}
	}
}