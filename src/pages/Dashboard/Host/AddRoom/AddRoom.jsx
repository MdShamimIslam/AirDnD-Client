import React, { useState } from 'react';
import AddRoomForm from '../../../../components/form/AdRoomForm';
import { imageUpload } from '../../../../api/utils';
import useAuth from '../../../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import { addRoom } from '../../../../api/rooms';
import toast from 'react-hot-toast';

const AddRoom = () => {
    const {user} = useAuth();
    const [loading,setLoading] = useState(false);
    const navigate = useNavigate();


    const [uploadButtonText,setUploadButtonText] = useState('Upload image')
    const [dates,setDates] = useState({
        startDate : new Date(),
        endDate : new Date(),
        key : 'selection'
    })

    const handleSubmit = async (e) => {
        setLoading(true)
        e.preventDefault();
        const form = e.target;
        const location = form.location.value;
        const category = form.category.value;
        const title = form.title.value;
        const to = dates.endDate;
        const from = dates.startDate;
        const price = form.price.value;
        const guests = form.total_guest.value;
        const bathrooms = form.bathrooms.value;
        const bedrooms = form.bedrooms.value;
        const description = form.description.value;
        const image = form.image.files[0];

        // image upload
        const img_url = await imageUpload(image);

        const addRoomData = {
            location,title,category,to,from,price,guests,
            bathrooms,bedrooms,description,image:img_url.data?.display_url,
            host:{
                name:user?.displayName,
                image:user?.photoURL,
                email:user?.email
            }
        }

       try{
        const mongoResponse = await addRoom(addRoomData);
        console.log(mongoResponse);
        setUploadButtonText('Uploaded')
        toast.success('Room Added!');
        navigate('/dashboard/my-listings');
       }
       catch(error){
        toast.error(error.message)
        console.log(error.message);
       }
       finally{
        setLoading(false)
       }
       
    }

    const handleDates = ranges=>{
       
        setDates(ranges.selection);
    }

    const handleImageChange = image=>{
        setUploadButtonText(image.name)
    }

    return (
        <div>
            <AddRoomForm
             handleSubmit={handleSubmit}
             handleDates={handleDates}
             dates={dates}
             handleImageChange={handleImageChange}
             uploadButtonText={uploadButtonText}
             loading={loading}
             ></AddRoomForm>
        </div>
    );
};

export default AddRoom;