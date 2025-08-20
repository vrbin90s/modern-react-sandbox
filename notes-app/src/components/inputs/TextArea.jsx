const TextArea = ({ label, name, value, onChnage, required=false }) => {
  return ( 
    <div className="mb-4">
      <label htmlFor={ name } className="block font-semibold">{ label }</label>
      <textarea
        name={ name }
        className="w-full p-2 border rounded-lg" 
        type="text" 
        value={ value }
        onChange={ onChnage }
        required ></textarea>
    </div>
   );
}
 
export default TextArea;