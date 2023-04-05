import React from 'react';
import './style.css';

// Задание
// Допишите код так, чтобы DatePicker был контролируемым компонентом.
// При выборе даты в input'е, текст на ним должен обновляться и показывать выбранную дату
// При нажатии на кнопку Reset date, input должен очищаться, а надпись становаиться 'Select date'
// Документация по JQuery UI
// https://jqueryui.com/datepicker
// https://api.jqueryui.com/datepicker
class DatePicker extends React.Component {
  componentDidMount() {
    $(this.inputRef).datepicker({
      dateFormat: 'dd/mm/yy',
      onSelect: (date) => {
        this.props.onChange(date);
      },
    });
    $(this.inputRef).datepicker('setDate', this.props.value || '');
  }

  componentDidUpdate() {
    $(this.inputRef).datepicker('setDate', this.props.value || '');
  }

  render() {
    return (
      <input
        ref={(domElement) => {
          this.inputRef = domElement;
        }}
      />
    );
  }
}

class App extends React.Component {
  state = {
    date: '',
  };

  handleDateChange = (date) => {
    this.setState({ date });
  };

  handleResetClick = () => {
    this.setState({ date: '' });
  };

  render() {
    return (
      <React.Fragment>
        <div>
          {this.state.date ? `Date: ${this.state.date}` : 'Select date'}
        </div>
        <div>
          <DatePicker
            value={this.state.date}
            onChange={this.handleDateChange}
          />
        </div>
        <div>
          <button onClick={this.handleResetClick}>Reset date</button>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
