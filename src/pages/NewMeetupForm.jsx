import React from 'react'
import { useRef } from 'react'


const NewMeetupForm = (props) => {

    const inputTitleRef = useRef();
    const inputImageRef = useRef();
    const inputAddressRef = useRef();
    const inputDescriptionRef = useRef();


    const submitHandler = (e) =>{
        e.preventDefault();
        
        const inputTitle = inputTitleRef.current.value;
        const inputImage = inputImageRef.current.value;
        const inputAddress = inputAddressRef.current.value;
        const inputDescription = inputDescriptionRef.current.value;

        const meetupData = {
            title: inputTitle,
            image: inputImage,
            address: inputAddress,
            description: inputDescription
        };


        props.onAddMeetup(meetupData);

    }


    return (
        <div className='card p-3 mt-4'>
            <form className='needs-validation p-2' onSubmit={submitHandler}>
                <div className="mb-3">
                    <label htmlFor="title" className='form-label'>Meetup Title</label>
                    <input type="text" className="form-control" id='title' ref={inputTitleRef} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="image" className='form-label'>Meetup Image Url</label>
                    <input type="url" className="form-control" id='image' ref={inputImageRef} required />
                    <div className="invalid-feedback">
                        Please Enter a valid url
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="address" className='form-label'>Meetup Address</label>
                    <input type="text" className="form-control" id='address' ref={inputAddressRef} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className='form-label'>Meetup Description</label>
                    <textarea id="description" rows="5" className='form-control' ref={inputDescriptionRef} required></textarea>
                </div>
                <div className="mb-3">
                    <button className="btn btn-primary" type='submit'>Add Meetup</button>
                </div>
            </form>
        </div>
    )
}

export default NewMeetupForm
