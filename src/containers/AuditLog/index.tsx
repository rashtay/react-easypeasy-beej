import React from 'react';
import { useStoreState } from 'easy-peasy';
import AuditLog from 'components/AuditLog';
import { StoreModel } from 'types/model-types';

const AuditLogContainer: React.FC<unknown> = () => {
  const logs = useStoreState<StoreModel>((state) => state.audit.logs);

  return <AuditLog logs={logs} />;
};

export default AuditLogContainer;
