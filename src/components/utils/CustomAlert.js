import React, { useEffect } from 'react';

import "../DecryptionEncryption.css";
const CustomAlert = ({ message }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      // This will automatically close the alert after the specified duration
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="custom-alert">
      {message}
    </div>
  );
};

export default CustomAlert;