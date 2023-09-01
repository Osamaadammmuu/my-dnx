import '../styles/input-contact.scss';
//-------------------------------------
function InputContact() {
  return <div className='input-contact'>
    <div className='container'>
      <div className='con-contact-us'>
        <div className='left-side'>
          <span>Don't be a stranger!</span>
          <h4>You tell us. We listen.</h4>
          <p>Cras elementum finibus lacus nec lacinia. Quisque non convallis nisl, eu condimentum sem. Proin dignissim libero lacus, ut eleifend magna vehicula et. Nam mattis est sed tellus.</p>

        </div>
        <div className='right-side'>
          <input type='text' placeholder='NAME' />
          <input type='text' placeholder='SUBJECT' />
          <input type='email' placeholder='EMAIL' />
          <textarea placeholder='MESSAGE'  />
          <button>Send Message</button>


        </div>
      </div>
    </div>
  </div>;

}
export default InputContact;