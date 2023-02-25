import { FormLabel, Heading } from "@chakra-ui/react";
import {useState} from "react";

const initState={
    name:"",
    price:"",
    image:"",
}

export default function ProductForm({handleFormSubmit}){
    const [formState,setFormState] = useState(initState);

    const handleChange=(e)=>{
        const {name,value}=e.target;
        setFormState({
            ...formState,
            [name] : value,
        })
    }
    

    const handleSubmit=(e)=>{
        e.preventDefault();
        handleFormSubmit(formState)
        setFormState(initState);
    };
    //   console.log(formState);
    const {name,price,image} = formState;


    const style={
        border:'2px solid black',
        padding:'5px'
        
    }
    return (
        <div id="Product-creation-form" >
            <Heading mb='20px'>Create Product</Heading>
            <form onSubmit={handleSubmit} align={'center'} style={{width:'400px',margin:'auto',height:'350px',paddingTop:'30px',marginTop:'5px',boxShadow:'rgba(0, 0, 0, 0.35) 0px 5px 15px'}}
    justify={'center'} 
    >
                <label px={3}>
                   Title 
                   <br />
                   
                   <input fontSize={'lg'} color={'gray.600'}
                   
                   name="name"
                   type="text"
                   placeholder="Enter Product Title"
                   value={name}
                   style={style}
                   
                   onChange={handleChange}
                   required
                   />
                </label>
                   <br /><br />
                <label px={3}>
                    Price 
                    <br />
                   <input fontSize={'lg'} color={'gray.600'}
                   name="price"
                   type="number"
                   placeholder="Enter Price"
                   value={price}
                   style={style}
                   onChange={handleChange}
                   required
                   />
                </label>
                <br /><br />
                <label px={3}>
                    Image URL
                    <br />
                   <input  fontSize={'lg'} color={'gray.600'} 
                   name="image"
                   type="text"
                   style={style}
                   placeholder="Enter Image URL"
                   value={image}
                   onChange={handleChange}
                   required
                   />
                </label>
                <br /><br />
                <input type="submit" value="Add Product" style={{border:'2px solid black',borderRadius:'20px',padding:'5px',backgroundColor:'peru'}}/>
            </form>
        </div>
    )
};