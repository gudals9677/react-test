import TextInput from '../TextInput';

function Body({ type, answer, setAnswer }) {
  let InputCompoent = null;
  if (type === 'select') {
  } else if (type === 'text') {
    InputCompoent = TextInput;
  } else if (type === 'textarea') {
  }

  return (
    <>
      <InputCompoent answer={answer} setAnswer={setAnswer} />
    </>
  );
}

export default Body;
