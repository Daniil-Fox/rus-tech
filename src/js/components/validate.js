import { validateForms } from './../functions/validate-forms.js';
const checks = [
  {
    selector: ".form__checkbox",
    errorMessage: "Выберите чекбоксы",
  }
];
const rules1 = [
  {
    ruleSelector: '.input-name',
    rules: [
      {
        rule: 'minLength',
        value: 3
      },
      {
        rule: 'required',
        value: true,
        errorMessage: 'Заполните имя!'
      }
    ]
  },
  {
    ruleSelector: '.input-tel',
    tel: true,
    telError: 'Введите корректный телефон',
    rules: [
      {
        rule: 'required',
        value: true,
        errorMessage: 'Заполните телефон!'
      }
    ]
  },
  {
    ruleSelector: '.input-email',
    rules: [
      {
        rule: 'required',
      },
      {
        rule: 'email'
      }
    ]
  },
];

const afterForm = () => {
  console.log('Произошла отправка, тут можно писать любые действия');
};
if(document.querySelector('.modal form')){
  validateForms('.modal form', rules1, checks, afterForm);
}
