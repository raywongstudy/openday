var app = new Vue({
    el: '#app',
    data:{
        data: this.data,
        random_num: 0,
        question: {},
        show_alert: false,
        question_result: true,
        question_number: 0,
        ans_key: "",
        current_question_status: false,
        had_select: false,
    },
    created(){
      this.random_num = this.getRandomInt(0, data.length)
      this.question = this.data[this.random_num]
    },
    methods:{
        getRandomInt(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
        },
        SubmitAnswer(key){
            if(this.had_select == true){
                if(this.ans_key ==this.question.answer){
                    this.question_result = true;
                }else{
                    this.question_result = false;
                }
                this.show_alert = true;
            }else{
                alert("請先選擇一個答案");
            }
        },
        GoNextQuestion(){
            this.had_select = false
            this.question_number += 1;
            this.show_alert = false;
            this.random_num = this.getRandomInt(0, data.length)
            this.question = this.data[this.random_num]
            document.querySelectorAll('input[name=ans]').forEach((element) => { element.checked = false })
            
        },
        GoNextQuestionW(){
            this.show_alert = false
            this.random_num = this.getRandomInt(0, data.length)
            this.question = this.data[this.random_num]
            document.querySelectorAll('input[name=ans]').forEach((element) => { element.checked = false })
        }
    }
})
