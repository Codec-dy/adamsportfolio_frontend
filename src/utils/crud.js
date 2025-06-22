import axios from "axios";
import { toast } from "react-toastify";



const convertBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);

    fileReader.onload = () => {
      resolve(fileReader.result);
    };

    fileReader.onerror = (error) => {
      reject(error);
    };
  });
};

  const handleDelete = async (api,id,model) => {
    if(confirm("Are you sure you want to delete this?")) {
    await axios.delete(`${api}/${id}?model=${model}`)
      .then((response) => {
        // setRefresh(!refresh);
        console.log(response.data);
        alert("Deleted Successfully")
        window.location.reload();
      }).catch((error) => {
        console.log(error);
        console.log('An error occurred while deleting');
      });
      }
  };


  const handleEdit = async (api, updatedExperience,model) => {
    if(confirm("Are you sure you want to edit this?")) {
    const formData = new FormData();
    for(var key in updatedExperience){
      formData.append(key, updatedExperience[key]);
    }
    await axios.put(`${api}?model=${model}`, formData, { headers: { "Content-Type": "multipart/form-data" } })
      .then((response) => {
        console.log(response.data);
        alert("Updated Successfully");
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      }).catch((error) => {
        console.log(error);
        console.log('An error occurred while updating');
      });
    }
  };

  const handleAdd = async (api,content) => {
    // Logic to add experience
    const formData = new FormData();
    for(var key in content){
      formData.append(key, content[key]);
    }
    console.log(api,content)
    // axios.post("/upload", formData, { headers: { "Content-Type": "multipart/form-data" } });
    await axios.post(api,formData, { headers: { "Content-Type": "multipart/form-data" } })
          .then((response) => {
            console.log(response.data);
            alert("Added Successfully")
             window.location.reload();
          }).catch((error) => {
            console.log(error);
            console.log('An error occurred while adding to collection');
          });
      };
  const getData = async (api) => {
      const data = await axios.get(api  
      ).then((response) => { 
        toast.success('Data fetched successfully');
        return response.data;
      }).catch((error) => {
          console.log(error);
         console.log('An error occured while getting data');});

      return data;
    }

    const handleFileChange = (file,setPreview) => {
      if (file) {
        setPreview(URL.createObjectURL(file)); 
        return file
      }
    };
const changeUser=async(url,info)=>{
    const data = await axios.put(url, info).then((res) => {
        alert("Changed successfully!");
        return res.data
    }).catch((err) => {
        console.log(err)
        alert("Failed to submit. Try again!");

    })
    return data
}
const adminLogin = async (url, data) => {
    
    try {
        const response = await axios.post(url, data, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        return response.data; // Return the response data to the caller
    } catch (error) {
        console.error('Error:', error);
        return false; // Return false to indicate failure
    }
};
export {adminLogin,handleDelete,handleEdit,handleAdd,getData, convertBase64,handleFileChange,changeUser};