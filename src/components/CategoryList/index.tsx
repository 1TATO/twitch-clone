import React from 'react';
// import { Feather, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';

import {
  List,
  CategoryContainter,
  CategoryImage,
  CategoryName,
  CategoryStatus,
  RedCircle,
  Info
} from './styles';

import data from './data';

interface ItemProps {
  item: typeof data[0];
}

const CategoryList: React.FC = () => {
  const CategoryItem: React.FC<ItemProps> = ({ item }) => (
    <CategoryContainter>
      <CategoryImage source={item.source} />
      <CategoryName numberOfLines={1}>{item.name}</CategoryName>
      <CategoryStatus>
        <RedCircle />
        <Info>51.9K</Info>
      </CategoryStatus>
    </CategoryContainter>
  );

  return (
    <List>
      {data.map(item => (
        <CategoryItem key={item.name} item={item} />
      ))}
    </List>
  )
};

export default CategoryList;