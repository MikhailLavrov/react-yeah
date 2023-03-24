import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateStatus } from "../../../redux/profileReducer";
import c from './ProfileStatus.module.scss';
import { getStatus } from "../../../redux/profileReducer";

export const ProfileStatus = () => {
  const dispatch = useDispatch();

  const stateStatus = useSelector((state) => state.profilePage.status);
  const auth = useSelector((state) => state.auth);

  const [editMode, setEditMode] = useState(false);
  const [status, setStatus] = useState(stateStatus || '');
  
  useEffect(() => {
    if (auth.id) {
      dispatch(getStatus(auth.id));
      setStatus(stateStatus || '');
    }
  }, [auth.id, dispatch, stateStatus]);

  const activateEditMode = () => setEditMode(true);

  const deactivateEditMode = () => {
    setEditMode(false);
    dispatch(updateStatus(status));
  };

  const onStatusChange = (e) => {
    setStatus(e.target.value)
  };

  return (
    <div className={c.status}>
      {!editMode 
      ? (
        <span className={c.status__text}>{status}</span>
      ) : (
        <input
        className={c.status__input}
        autoFocus
        onBlur={deactivateEditMode}
        onKeyDown={(e) => e.key === 'Enter' && deactivateEditMode()}
        value={status}
        maxLength={40}
        onChange={onStatusChange}
        />
      )}
      <button className={c.status__button} 
              type="button"  
              onClick={activateEditMode}>
                {!status && !editMode ? "Add status" : (!editMode ? "✎" : "✔")}
              </button>
    </div>
  );
};
