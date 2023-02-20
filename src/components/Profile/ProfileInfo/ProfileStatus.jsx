import React, { useState, useEffect } from "react";

export const ProfileStatus = (props) => {
  const [editMode, setEditMode] = useState(false);
  const [status, setStatus] = useState(props.status || '');

  useEffect(() => {
    setStatus(props.status || '');
  }, [props.status]);

  const activateEditMode = () => setEditMode(true);

  const deactivateEditMode = () => {
    setEditMode(false);
    props.updateStatus(status);
  };

  const onStatusChange = (e) => setStatus(e.target.value);

  return (
    <>
      {!editMode ? (
        <span onDoubleClick={activateEditMode}>{status || '<empty>'}</span>
      ) : (
        <input
          autoFocus
          onBlur={deactivateEditMode}
          value={status}
          onChange={onStatusChange}
        />
      )}
    </>
  );
};
