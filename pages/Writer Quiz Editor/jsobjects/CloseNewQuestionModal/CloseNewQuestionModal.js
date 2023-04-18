export default {
  async closeNewQuestionModal() {
		await Create_new_question.run()
		await Get_quiz_questions.run()
		closeModal('NewQuestionModal')
	}
}