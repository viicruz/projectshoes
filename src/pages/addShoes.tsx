import React from 'react';
import * as Select from '@radix-ui/react-select';
import { useState } from 'react';

const productList = [
  { id: 1, name: "Ultraboost", brand: "Adidas" },
  { id: 2, name: "RSuperstar", brand: "Adidas" },
  { id: 3, name: "Stan Smith", brand: "Adidas" },


  { id: 4, name: "Air Force 1", brand: "Nike" },
  { id: 5, name: "Air Max", brand: "Nike" },
  { id: 6, name: "Roshe Run", brand: "Nike" },
  { id: 7, name: "Cortez", brand: "Nike" },


  { id: 8, name: "RS-X", brand: "Puma" },
  { id: 9, name: "Suede Classic", brand: "Puma" },
  { id: 10, name: "Clyde", brand: "Puma" },

];

export default function AddShoes() {
  const [selectedBrand, setSelectedBrand] = useState<null | string>(null);

  const filteredProducts = productList.filter((product) => {
    if (!selectedBrand) {
      return true;
    }
    return product.brand === selectedBrand;
  });

  return (
    <div className="flex justify-center items-center bg-white w-full min-h-screen">
      <div className="p-4 w-full">
        <div className='flex justify-center'>
          <Select.Root onValueChange={setSelectedBrand}>
            <Select.Trigger className='border-gray-400 border-2 p-1'>
              <Select.Value placeholder="Selecione uma Marca"></Select.Value>
              <Select.Icon className='p-2' />
            </Select.Trigger>

            <Select.Portal>
              <Select.Content className="bg-white border-gray-400 border-1">
                <Select.ScrollUpButton  />
                <Select.Viewport>
                  <Select.Item value="Nike">
                    <Select.ItemText>Nike</Select.ItemText>
                    <Select.ItemIndicator />
                  </Select.Item>
                  <Select.Item value="Puma">
                    <Select.ItemText>Puma</Select.ItemText>
                    <Select.ItemIndicator />
                  </Select.Item>
                  <Select.Item value="Adidas">
                    <Select.ItemText>Adidas</Select.ItemText>
                    <Select.ItemIndicator />
                  </Select.Item>

                  <Select.Separator />
                </Select.Viewport>
                <Select.ScrollDownButton />
                <Select.Arrow />
              </Select.Content>
            </Select.Portal>
          </Select.Root>
        </div>

        <div className='justify-center flex'>
        <table className="w-1/2 mt-4">
          <thead>
            <tr>
              <th className="text-left py-2 px-4 bg-gray-200">Nome</th>
              <th className="text-left py-2 px-4 bg-gray-200">Marca</th>
            </tr>
          </thead>
          <tbody>
            {filteredProducts.map((product) => (
              <tr key={product.id}>
                <td className="py-2 px-4 border">{product.name}</td>
                <td className="py-2 px-4 border">{product.brand}</td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
        
      </div>
    </div>
  );
}