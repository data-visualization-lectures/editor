import React from 'react';

type Props = {children?: React.ReactNode};

const LoginConditional: React.FC<Props> = ({children}) => {
  return (
    <div>
      {children}
      <div
        style={{
          fontSize: '12px',
          color: '#666',
          marginTop: '10px',
          padding: '8px',
          backgroundColor: '#f5f5f5',
          borderRadius: '4px',
          border: '1px solid #ddd',
        }}
      >
        Note: GitHub login is disabled in this version. Local editing and export functions are available.
      </div>
    </div>
  );
};

export default LoginConditional;
