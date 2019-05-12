const defaultState = {
  questionList: [
    {
      question: '最让我有起床动力的是哈哈哈哈哈哈哈',
      yours: {
        choice: 'A',
        content: '你的外卖到了哈哈哈哈哈哈'
      },
      his: {
        choice: 'B',
        content: '手机还在床下哈哈哈哈哈哈哈'
      }
    },
    {
      question: '最让我有起床动力的是',
      yours: {
        choice: 'A',
        content: '你的外卖到了'
      },
      his: {
        choice: 'A',
        content: '你的外卖到了'
      }
    },{
      question: '最让我有起床动力的是',
      yours: {
        choice: 'A',
        content: '你的外卖到了'
      },
      his: {
        choice: 'B',
        content: '手机还在床下'
      }
    },
    {
      question: '最让我有起床动力的是',
      yours: {
        choice: 'A',
        content: '你的外卖到了'
      },
      his: {
        choice: 'B',
        content: '手机还在床下'
      }
    },
    {
      question: '最让我有起床动力的是',
      yours: {
        choice: 'A',
        content: '你的外卖到了'
      },
      his: {
        choice: 'B',
        content: '手机还在床下'
      }
    }
  ]
}

export default (state = defaultState, action) => {
  let newState = JSON.parse(JSON.stringify(state))
  switch(action.type) {
    default:
      return newState
  }
}
