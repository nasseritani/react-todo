const Modal = ({ setName, Name, setShow, show }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(Name);
    setName(Name);
    setShow(false);
  };
  const handleChange = (e) => {
    setName(e.target.value);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`modal${show ? "--visible" : "--invisible"}`}
    >
      <div>
        <label>Enter Name:</label>
        <input type="text" name="name" onChange={handleChange} />
      </div>

      <button>Save</button>
    </form>
  );
};
export default Modal;
