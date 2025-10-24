import React, { useState } from "react";

const FileUp = () => {
  const [file, setfile] = useState(null);

  const handlefile = (e) => {
    const selectedfile = e.target.files[0];
    setfile(selectedfile)
  };

  return (
    <div>
      <input
        className="bg-red-500"
        type="file"
        accept="image/*"
        onChange={handlefile}
      />

      {file && <img src={URL.createObjectURL(file)} alt="uploaded"></img>}
    </div>
  );
};

export default FileUp;
