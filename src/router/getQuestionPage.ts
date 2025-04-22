import QuestionsView from '@/views/Questions/QuestionsView.vue'
import QuestionsWelcomeView from '@/views/Questions/QuestionsWelcomeView.vue'
import QuestionsAnswerView from '@/views/Questions/QuestionsAnswerView.vue'
import QuestionsEndView from '@/views/Questions/QuestionsEndView.vue'

export function createQuestionPage() {
  return [
    {
      path: '/questions',
      name: 'questionPage',
      component: QuestionsView,
      redirect: '/questions/welcome',
      children: [
        {
          path: 'welcome',
          name: 'questionStartPage',
          component: QuestionsWelcomeView
        },
        {
          path: ':id',
          name: 'questionAnswerPage',
          component: QuestionsAnswerView
        },
        {
          path: 'thankq',
          name: 'questionEndPage',
          component: QuestionsEndView
        }
      ]
    },
  ];
}
