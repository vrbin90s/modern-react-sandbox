import { use, useState } from "react";
import TextInput from "./inputs/TextInput";
import SelectInput from "./inputs/SelectInput";
import TextArea from "./inputs/TextArea";

const NoteForm = ({ notes, setNotes }) => {
  const [formData, setFormData] = useState({
    title: "",
    priority: "Medium",
    category: "Work",
    description: ""
  })

  const [isFormVisable, setIsFormVisable] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if(!formData || !formData.description) return;

    const newNote = { id: Date.now(), ...formData };

    setNotes( [newNote, ...notes] );

    setFormData({
      title: "",
      category: "Work",
      priority: "Medium",
      description: ""
    })

  }

  return ( 
    <>
      {/* Toggle Button */}
      <button onClick={ () => setIsFormVisable(!isFormVisable) } className="w-full bg-grey-100 border border-grey-300 text-purple-800 py-2 rounded-lg cursor-pointer hover:bg-purple-200 hover: border-purple-300 transition mb-4">
        { isFormVisable ? "Hide Form ✖️" : "Add New Note ➕" }
      </button>

      { isFormVisable  && (
        <form onSubmit={ handleSubmit } className="mb-6" action="">
          <TextInput 
            label="Title"
            name="title" 
            value={ formData.title }
            onChange={ handleChange } 
            required
          />
          <SelectInput
            label="Category"
            name="category"
            value={ formData.category }
            onChange={ handleChange }
            options={ [
              { value: "Work", label: "📁 Work"},
              { value: "Personal", label: "🏠 Personal"},
              { value: "Ideas", label: "💡 Ideas"}
            ] }
          />
          <SelectInput
            label="Priority"
            name="priority"
            value={ formData.priority  }
            onChange={ handleChange }
            options={ [
              { value: "High", label: "🔴 High"},
              { value: "Medium", label: "🟠 Medium"},
              { value: "Low", label: "🟢 Low"}
            ] }
          />
          <TextArea 
            label="Description"
            name="description"
            value={ formData.description }
            onChnage={ handleChange }
            required
          />
          <button className="w-full bg-purple-500 text-white py-2 rounded-lg cursor-pointer hover:bg-purple-600">Add Note</button>
        </form>
      )}
    </>
   );
}
 
export default NoteForm;