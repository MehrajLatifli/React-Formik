import { Form, Formik } from 'formik';
import './App.css';
import Input from './Components/Custom Formik/Input';
import RadioButton from './Components/Custom Formik/RadioButton';
import Checkbox from './Components/Custom Formik/Checkbox';
import MultiSelect from './Components/Custom Formik/MultiSelect';
import { useState } from 'react';
import DataTable from './Components/DataTable';
import { v4 as uuidv4 } from 'uuid';
import { SampleSchema } from './Validations/SampleSchema';

function App() {

  const educationdegree = [
    { value: "bakalavr", label: "Bakalavr" },
    { value: "subbakalavr", label: "Sub-Bakalavr" },
    { value: "magistr", label: "Magistr" },
    { value: "apirantura", label: "Aspirantura" },
    { value: "doktarantura ", label: "Doktarantura" },
  ];


  const [formData, setFormData] = useState([]);

  const handleSubmit = (values, actions) => {
    setTimeout(() => {
    setFormData([...formData, values]);
    actions.resetForm();
    actions.setSubmitting(false);
  }, 1000);
  };

  const containerStyle = {
    display: "inline-block",
    justifyContent: "center",
    alignItems: "center",
    height: "40vh",
  };





  return (
    <div className="App">


      <br/>
      <br/>

      

      <Formik
        initialValues={{
          name: "",
          gender:"",
          educationdegrees: [],
          studiedabroad:false
        }}

        onSubmit={handleSubmit}

        validationSchema={SampleSchema}

      >

      {(props)=>(

        <Form  style={containerStyle }>

          


            <div className="flex items-center pl-4 px-5 pb-5">
            
               <Input label="Student name" name="name"   className="text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"/>

            </div>

            {props.touched.name && props.errors.name ? (<div className="text-red-500 flex items-center pl-4 ">{props.errors.name}</div>) : null}   

            <br/>
            <div className="flex items-center pl-4">
               <RadioButton label=" Male" name="gender" value="male"  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
            </div>

            

            <div className="flex items-center pl-4 ">
              <RadioButton label=" Female" name="gender" value="female" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
            </div>
            <br/>
            {props.touched.gender && props.errors.gender ? (<div className="text-red-500 flex items-center pl-4 ">{props.errors.gender}</div>) : null}    
            
            
            <br/>

            <div className="flex items-center pl-4 ">
              <Checkbox label=" studied abroad" name="studiedabroad"  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
            </div>    

            <br/>
            
            <div className="flex items-center pl-4 ">
              <MultiSelect name="educationdegrees" options={educationdegree} className="data-te-select-init data-te-select-filter='true'"/>
            </div>
            <br/>
            {props.touched.educationdegrees && props.errors.educationdegrees ? (<div className="text-red-500 flex items-center pl-4 ">{props.errors.educationdegrees}</div>) : null}   

            <br/>
            <div className="flex items-center pl-4 ">
              
              <button type="submit" className="relative w-full flex justify-center items-center px-5 py-2.5 font-medium tracking-wide text-white capitalize   bg-black rounded-md hover:bg-gray-900  focus:outline-none   transition duration-300 transform active:scale-95 ease-in-out">

                <span className="pl-2 mx-1">Create new shipping label</span>

              </button>

            </div>

        </Form>
        
      )}

    </Formik>

    {formData.length > 0 &&<DataTable formData={formData}/>}




    </div>
  );
}

export default App;


