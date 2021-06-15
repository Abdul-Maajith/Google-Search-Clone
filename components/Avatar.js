function Avatar({ url, className }) {
    return (
        <img 
          className={`focus:cursor-pointer h-10 rounded-full transition duration-150 transform hover:scale-110 ${className}`} 
          loading="lazy" 
          src={url} alt="Profile Pic"
        />
    )
}

export default Avatar;
