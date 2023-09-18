import React from 'react';
import * as Select from '@radix-ui/react-select';
import { useState } from 'react';
import Pagination from '@mui/material/Pagination';

import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';




const productList = [
  { id: 1, name: "Ultraboost", brand: "Adidas" },
  { id: 2, name: "RSuperstar", brand: "Adidas" },
  { id: 3, name: "Stan Smith", brand: "Adidas" },
  { id: 4, name: "NMD", brand: "Adidas" },
  { id: 5, name: "Gazelle", brand: "Adidas" },
  { id: 6, name: "Campus", brand: "Adidas" },
  { id: 7, name: "Continental 80", brand: "Adidas" },
  { id: 8, name: "Samba", brand: "Adidas" },
  { id: 9, name: "EQT Support", brand: "Adidas" },
  { id: 10, name: "Tubular Shadow", brand: "Adidas" },

  { id: 11, name: "Air Force 1", brand: "Nike" },
  { id: 12, name: "Air Max", brand: "Nike" },
  { id: 13, name: "Roshe Run", brand: "Nike" },
  { id: 14, name: "Cortez", brand: "Nike" },
  { id: 15, name: "Air Huarache", brand: "Nike" },
  { id: 16, name: "Air Presto", brand: "Nike" },
  { id: 17, name: "Zoom Pegasus", brand: "Nike" },
  { id: 18, name: "Kyrie", brand: "Nike" },
  { id: 19, name: "LeBron", brand: "Nike" },
  { id: 20, name: "React Element", brand: "Nike" },

  { id: 21, name: "RS-X", brand: "Puma" },
  { id: 22, name: "Suede Classic", brand: "Puma" },
  { id: 23, name: "Clyde", brand: "Puma" },
  { id: 24, name: "Basket", brand: "Puma" },
  { id: 25, name: "Future Rider", brand: "Puma" },
  { id: 26, name: "California 34", brand: "Puma"},
  { id: 27, name: "Cell", brand: "Puma" },
  { id: 28, name: "King", brand: "Puma" },
  { id: 29, name: "Vikky", brand: "Puma" },
  { id: 30, name: "Enzo", brand: "Puma" }
];

export default function AddShoes() {
  const [selectedBrand, setSelectedBrand] = useState<null | string>(null);

  const filteredProducts = productList.filter((product) => {
    if (!selectedBrand) {
      return true;
    }
    return product.brand === selectedBrand;
  });

  const itemsPerPage = 10; // Número de itens por página
  const [currentPage, setCurrentPage] = useState<number>(1);

  const handlePageChange = (event: React.ChangeEvent<unknown>, newPage: number) => {
    setCurrentPage(newPage);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const getCurrentPageData = () => {
    return filteredProducts.slice(startIndex, endIndex);
  };

  return (
    <div className="bg-white w-full min-h-screen">
      <Header />
      <div className="p-4 w-full">
        <div className='flex justify-center'>
          <Select.Root onValueChange={setSelectedBrand}>
            <Select.Trigger className='border-gray-400 border-2 p-1'>
              <Select.Value placeholder="Selecione uma Marca"></Select.Value>
              <Select.Icon className='p-2' />
            </Select.Trigger>

            <Select.Portal>
              <Select.Content className="bg-white border-gray-400 border-1">
                <Select.ScrollUpButton />
                <Select.Viewport>
                <Select.Item value="">
                    <Select.ItemText>Todas as opções</Select.ItemText>
                    <Select.ItemIndicator />
                  </Select.Item>
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
              {getCurrentPageData().map((product) => (
                <tr key={product.id}>
                  <td className="py-2 px-4 border">{product.name}</td>
                  <td className="py-2 px-4 border">{product.brand}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex justify-center mt-4">
          <Pagination
            count={Math.ceil(filteredProducts.length / itemsPerPage)}
            page={currentPage}
            onChange={handlePageChange}
          />
        </div>

      </div>
      <Footer />
    </div>
  );
}