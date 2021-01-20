import React from 'react';

const Location = () => {
    return (
        <div className="location_wrapper">
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d742.6225899509236!2d-73.9268739922564!3d40.829675015418964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2f42c5ae76971%3A0x4940c3d9559a1e08!2sYankee%20Stadium!5e0!3m2!1sen!2sus!4v1611104648761!5m2!1sen!2sus"
                 
                width="100%" 
                height="500px" 
                frameborder="0" 
                style="border:0;" 
                allowfullscreen="" 
                aria-hidden="false" 
                tabindex="0"
                title = "myframe"
            ></iframe>

            <div className="location_tag">
                <div>Location</div>
            </div>
        </div>
    );
};

export default Location;