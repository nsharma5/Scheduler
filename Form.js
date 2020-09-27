import Base from './Forms/Form';
import FormButton from './Forms/FormButton';
import FormErrorMessage from './Forms/FormErrorMessage';
import FormField from './Forms/FormField';
import FormSwitch from './Forms/FormSwitch';

const Form = (props) => Base(props);

Form.Field = FormField;
Form.Button = FormButton;
Form.ErrorMessage = FormErrorMessage;
Form.Switch = FormSwitch;

export default Form;
