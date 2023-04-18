export default {
  async deleteQuestion() {
		storeValue("to_delete", QuestionsTable.selectedRow.id)
		await Delete_question_by_id.run()
		Get_quiz_questions.run()
		await removeValue("to_delete")
	}
}