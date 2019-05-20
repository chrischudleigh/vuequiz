Vue.component("quiz-question", {
  props: ["questions", "currentQtn"],
  template: "#quiz-question"
});

Vue.component("question-choice", {
  props: ["questions", "currentQtn", "choice"],
  template: "#question-choice"
});

Vue.component("quiz-score", {
  props: ["questions"],
  template: "#quiz-score",
  computed: {
    score: function() {
      let totalScore = this.questions.reduce(function(sum, item) {
        if (item.answer === item.userChoice) {
          sum++;
        }
        return sum;
      }, 0);
      return totalScore;
    }
  }
});

var vm = new Vue({
  el: "#quiz-app",
  data: {
    questions: [

      {
         "id":1,
         "text": "Which css property sets the text size?",
         "choices": [
          {id:1,text:"text-size"},
          {id:2,text:"text-style"},
          {id:3,text:"font-style"},
          {id:4,text:"font-size"}
          ],
         "answer":4,
         "userChoice":undefined
      },
     {
         "id":2,
         "text": "For p.selected {background-color:red} which part is the rule?",
         "choices": [
          {id:1,text:"p.selected"},
          {id:2,text: "{background-color:red}"},
          {id:3,text:"p.selected {background-color:red}"},
          {id:4,text: "red"}
        ],
         "answer":3,
         "userChoice":undefined
     },
     {   "id":3,
         "text": "What is the preferred way to create double spacing the css would be?",
         "choices": [
          {id:1,text:"Line-height:2em"},
          {id:2,text:"Line-height:2"},
          {id:3,text: "Font-size:2"},
          {id:4,text: "Font-size:2em"}
          ],
         "answer":2,
         "userChoice":undefined
     },
     {   "id":4,
         "text": "P + P {text-indent:2em;} would have the following formatting on text:",
        "choices": [
          {id:1,text:"All paragraphs are indented"},
          {id:2,text:"All paragraphs following a paragraph are indented"},
          {id:3,text:"All paragraphs except the first are indented"},
          {id:4,text:"All paragraphs except the last are indented"}
        ],
         "answer":2,
         "userChoice":undefined
     }
 ,
     {   "id":5,
         "text": "Which rule has greater specifity?",
         "choices": [
          {id:1,text:"Table#alpha"},
          {id:2,text:"Table td"},
          {id:3,text:"Table td.odd"},
          {id:4,text:"Table td p"}
        ],
         "answer":1,
         "userChoice":undefined
     }
 ],
    currentQtn: 1,
    quizFinished: false   
  },
  methods: {
    quizReset: function() {
      this.questions.forEach(function(question) {
        question.userChoice = undefined;
      });
      this.quizFinished = false;
      this.currentQtn = 1;
    }
  }
});
