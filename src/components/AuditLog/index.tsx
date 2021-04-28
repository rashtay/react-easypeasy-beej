import React from 'react';

interface Props {
  logs: string[];
}

const AuditLog: React.FC<Props> = ({ logs }) => {
  return (
    <div>
      <span>{logs.join('\n')}</span>
    </div>
  );
};

export default AuditLog;
