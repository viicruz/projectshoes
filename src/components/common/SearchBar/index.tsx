import React from 'react';
import { IconProps } from 'phosphor-react';

type Props = {
  icon?: React.ComponentType<IconProps>;
};

export default function SearchBar({ icon: Icon }: Props) {
  return (
    <div className="relative flex items-center p-2">
      <input
        type="text"
        placeholder="PESQUISAR"
        className="w-full px-2 text-white py-1 pl-10 text-sm outline-none rounded-sm bg-transparent border-[1px]"
      />
      {Icon && (
        <div className="absolute left-6 top-1/2 transform -translate-y-1/2">
          <Icon size={18} color="white" />
        </div>
      )}
    </div>
  );
}
