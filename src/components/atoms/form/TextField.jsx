import noop from 'lodash/noop';
import nanoid from 'nanoid';
import PropTypes from 'prop-types';
import React from 'react';
import FormField from './FormField';
import Input from './Input';
import Label from './Label';
import Textarea from './Textarea';

class TextField extends React.Component {
  static defaultProps = {
    id: undefined,
    multiline: false,
    onBlur: noop,
    onChange: noop,
    onFocus: noop,
    value: '',
  };

  static propTypes = {
    label: PropTypes.node.isRequired,

    id: PropTypes.string,
    multiline: PropTypes.bool,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    value: PropTypes.string,
  };

  state = {
    isDirty: !!this.props.value,
    isFocused: false,
  };

  handleBlur = event => {
    this.props.onBlur(event);
    this.setState({ isFocused: false });
  };

  handleChange = event => {
    this.props.onChange(event);
    this.setState({ isDirty: !!event.target.value });
  };

  handleFocus = event => {
    this.props.onFocus(event);
    this.setState({ isFocused: true });
  };

  render() {
    const { id = nanoid(), label, multiline, ...rest } = this.props;
    const InputEl = multiline ? Textarea : Input;

    return (
      <FormField {...this.state}>
        <InputEl
          {...rest}
          {...this.state}
          id={id}
          onBlur={this.handleBlur}
          onChange={this.handleChange}
          onFocus={this.handleFocus}
        />
        <Label {...this.state} htmlFor={id}>
          {label}
        </Label>
      </FormField>
    );
  }
}

function TextAreaField(props) {
  return <TextField {...props} input={Textarea} />;
}

function TextInputField(props) {
  return <TextField {...props} input={Input} type="text" />;
}

export { TextAreaField, TextInputField };