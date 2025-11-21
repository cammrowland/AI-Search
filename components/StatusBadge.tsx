import React from 'react';
import { AlertTriangle, CheckCircle, Lock } from 'lucide-react';
import { AccessStatus } from '../types.ts';

interface Props {
  status: AccessStatus;
}

export const StatusBadge: React.FC<Props> = ({ status }) => {
  const config = {
    blocked: {
      color: 'bg-red-500/10 text-red-500 border-red-500/20',
      icon: Lock,
      label: 'Blocked'
    },
    accessible: {
      color: 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20',
      icon: CheckCircle,
      label: 'Accessible'
    },
    restricted: {
      color: 'bg-amber-500/10 text-amber-500 border-amber-500/20',
      icon: AlertTriangle,
      label: 'Restricted'
    }
  };

  const { color, icon: Icon, label } = config[status];

  return (
    <span className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border ${color}`}>
      <Icon size={12} />
      {label}
    </span>
  );
};