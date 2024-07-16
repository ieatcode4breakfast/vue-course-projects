const { createApp, reactive, computed } = Vue;

const DEFAULT_STATE = {
  state: true,
  inputName: '',
  names: [],
  error: '',
  showError: false,
  result: ''
};

createApp({
  setup() {
    const data = reactive(DEFAULT_STATE);
    
    /// Methods
    const addNameToList = () => {
      const userName = data.inputName;
      data.names.push(userName);
      data.inputName = '';
    };

    const removeName = (index) => {
      data.names.splice(index, 1);
    }

    return {
      data,
      addNameToList,
      removeName
    };
  }
}).mount('#app');