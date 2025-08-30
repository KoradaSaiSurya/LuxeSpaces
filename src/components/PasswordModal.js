import React, { useState, useEffect } from 'react';

const PasswordModal = ({ show, onSuccess, onCancel }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const ADMIN_PASSWORD = 'sai2003';

  useEffect(() => {
    if (show) {
      setPassword('');
      setError(false);
    }
  }, [show]);

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setError(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    checkPassword();
  };

  const checkPassword = () => {
    if (password === ADMIN_PASSWORD) {
      onSuccess();
      setPassword('');
      setError(false);
    } else {
      setError(true);
      setPassword('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      checkPassword();
    }
  };

  const handleModalClick = (e) => {
    if (e.target.classList.contains('password-modal')) {
      onCancel();
    }
  };

  if (!show) return null;

  return (
    <div className="password-modal" onClick={handleModalClick}>
      <div className="password-modal-content">
        <h3>
          <i className="fas fa-lock" style={{ color: '#d4af37', marginRight: '10px' }}></i>
          Admin Access Required
        </h3>
        <p>Please enter the admin password to add new projects</p>
        <form onSubmit={handleSubmit}>
          <input
            type="password"
            className="password-input"
            placeholder="Enter password"
            value={password}
            onChange={handlePasswordChange}
            onKeyPress={handleKeyPress}
            maxLength="20"
            autoFocus
          />
          {error && (
            <div className="password-error" style={{ display: 'block' }}>
              Incorrect password. Please try again.
            </div>
          )}
          <div className="password-buttons">
            <button type="button" className="password-btn cancel" onClick={onCancel}>
              Cancel
            </button>
            <button type="submit" className="password-btn confirm">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PasswordModal;